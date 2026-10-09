import { rateConfig } from './rateConfig.js';
import { campaignConfig as config } from './campaignConfig.js';
import { calculateCreatorRate } from './creator-rate.js';

export function calculateCampaign(input) {
  const platform = rateConfig.platforms[input.platform];
  const format = config.formats[input.platform]?.[input.format];
  const goal = config.goals[input.goal];
  const isBudget = input.mode === 'budget';
  if (!['cost', 'budget'].includes(input.mode) || !platform || !format || !goal ||
      !rateConfig.countryMultipliers[input.country] || !rateConfig.nicheMultipliers[input.niche] ||
      (input.size !== 'mixed' && !config.sizes[input.size])) return null;
  const valid = (value, min, max) => value !== '' && value != null && Number.isFinite(Number(value)) && Number(value) >= min && Number(value) <= max;
  if (!valid(input.extras, 0, 1e8) || !valid(input.contingency, 0, 100) ||
      (isBudget ? !valid(input.budget, 1, 1e8) : !valid(input.count, 1, config.maxCreators) || !Number.isInteger(Number(input.count)))) return null;
  const cycle = input.size === 'mixed' ? goal.mix : [input.size];
  const tiers = [...new Set(cycle)];
  const units = {};
  for (const tier of tiers) {
    const views = input.views?.[tier] ?? config.views[input.platform][tier];
    if (!valid(views, 1, 1e9) || !Number.isInteger(Number(views))) return null;
    const rateInput = { platform: input.platform, country: input.country, niche: input.niche,
      followers: config.sizes[tier].followers, views: Number(views), engagement: platform.engagement[0][0],
      audience: 'average', content: 'good' };
    // CPM endpoints already define the fee range; use adjusted values without another ±20% band.
    const low = calculateCreatorRate({ ...rateInput, cpm: config.cpm[input.platform].low * format.multiplier }).midpoint;
    const high = calculateCreatorRate({ ...rateInput, cpm: config.cpm[input.platform].high * format.multiplier }).midpoint;
    units[tier] = { views: Number(views), low, high };
  }
  const extras = Number(input.extras);
  const reserve = Number(input.contingency) / 100;
  function plan(count) {
    const counts = Object.fromEntries(tiers.map((tier) => [tier, 0]));
    const whole = Math.floor(count / cycle.length);
    cycle.forEach((tier, index) => { counts[tier] += whole + (index < count % cycle.length ? 1 : 0); });
    const rows = tiers.filter((tier) => counts[tier]).map((tier) => ({ tier, count: counts[tier], ...units[tier] }));
    const creatorLow = rows.reduce((sum, row) => sum + row.count * row.low, 0);
    const creatorHigh = rows.reduce((sum, row) => sum + row.count * row.high, 0);
    const views = rows.reduce((sum, row) => sum + row.count * row.views, 0);
    const low = (creatorLow + extras) * (1 + reserve);
    const high = (creatorHigh + extras) * (1 + reserve);
    return { count, rows, creatorLow, creatorHigh, low, high, views, viewLow: views * 0.8, viewHigh: views * 1.2,
      cpmLow: views ? low / (views * 1.2) * 1000 : 0, cpmHigh: views ? high / (views * 0.8) * 1000 : 0,
      reserveLow: (creatorLow + extras) * reserve, reserveHigh: (creatorHigh + extras) * reserve };
  }
  function affordable(bound) {
    let low = 0;
    let high = config.maxCreators;
    while (low < high) {
      const mid = Math.ceil((low + high) / 2);
      if (plan(mid)[bound] <= Number(input.budget)) low = mid;
      else high = mid - 1;
    }
    return low;
  }
  const minCount = isBudget ? affordable('high') : Number(input.count);
  const maxCount = isBudget ? affordable('low') : minCount;
  const result = plan(minCount);
  return { ...result, minCount, maxCount, extras, contingency: Number(input.contingency),
    remaining: isBudget && minCount ? Number(input.budget) - result.high : 0,
    minimumBudget: plan(1).high, limited: isBudget && maxCount === config.maxCreators };
}

export function calculateMultiPlatformCampaign(input) {
  const plans = input.platforms;
  const budgetMode = input.mode === 'budget';
  if (!Array.isArray(plans) || !plans.length || plans.length > 4 ||
      new Set(plans.map((plan) => plan.platform)).size !== plans.length) return null;
  const valid = (value, min, max) => value !== '' && value != null && Number.isFinite(Number(value)) && Number(value) >= min && Number(value) <= max;
  if (!valid(input.extras, 0, 1e8) || !valid(input.contingency, 0, 100)) return null;
  if (budgetMode && (!valid(input.budget, 1, 1e8) || plans.some((plan) => !valid(plan.share, 0, 100)) ||
      Math.abs(plans.reduce((sum, plan) => sum + Number(plan.share), 0) - 100) > 1e-8)) return null;
  const platforms = [];
  let remainingCents = budgetMode ? Math.floor(Number(input.budget) * 100 + 1e-6) : 0;
  const lastFundedIndex = budgetMode ? plans.findLastIndex((plan) => Number(plan.share) > 0) : -1;
  for (const [index, plan] of plans.entries()) {
    const cents = budgetMode ? index === lastFundedIndex ? remainingCents : Math.floor(Number(input.budget) * Number(plan.share) + 1e-6) : 0;
    remainingCents -= cents;
    const allocated = cents / 100;
    const share = budgetMode ? allocated / Number(input.budget) : 0;
    // Zero or sub-dollar allocations cannot cover the engine's minimum rate.
    const result = calculateCampaign({ ...input, ...plan, budget: Math.max(1, allocated),
      extras: budgetMode ? Number(input.extras) * share : 0, contingency: budgetMode ? input.contingency : 0 });
    if (!result) return null;
    platforms.push({ ...result, platform: plan.platform, allocated, share });
  }
  const sum = (key) => platforms.reduce((total, plan) => total + plan[key], 0);
  const extras = Number(input.extras);
  const contingency = Number(input.contingency);
  const creatorLow = sum('creatorLow');
  const creatorHigh = sum('creatorHigh');
  const reserveLow = (creatorLow + extras) * contingency / 100;
  const reserveHigh = (creatorHigh + extras) * contingency / 100;
  const low = creatorLow + extras + reserveLow;
  const high = creatorHigh + extras + reserveHigh;
  const views = sum('views');
  const rows = Object.keys(config.sizes).map((tier) => ({ tier, count: platforms.reduce((total, plan) => total + (plan.rows.find((row) => row.tier === tier)?.count ?? 0), 0) })).filter((row) => row.count);
  return { platforms, rows, count: sum('count'), minCount: sum('minCount'), maxCount: sum('maxCount'),
    creatorLow, creatorHigh, extras, contingency, reserveLow, reserveHigh, low, high,
    views, viewLow: views * 0.8, viewHigh: views * 1.2,
    cpmLow: views ? low / (views * 1.2) * 1000 : 0, cpmHigh: views ? high / (views * 0.8) * 1000 : 0,
    remaining: budgetMode ? Math.max(0, Number(input.budget) - high) : 0,
    minimumBudget: budgetMode ? Math.min(...platforms.filter((plan) => plan.share > 0).map((plan) => plan.minimumBudget / plan.share)) : 0,
    limited: platforms.some((plan) => plan.limited) };
}
