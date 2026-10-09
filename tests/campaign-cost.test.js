import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateCampaign, calculateMultiPlatformCampaign } from '../src/campaign-cost.js';
import { calculateCreatorRate } from '../src/creator-rate.js';
import { campaignConfig } from '../src/campaignConfig.js';
import { rateConfig } from '../src/rateConfig.js';

const base = { mode: 'cost', platform: 'instagram', country: 'us', niche: 'default', goal: 'launch', size: 'mixed', format: 'reel', count: 20, budget: 20000, extras: 0, contingency: 10 };

test('campaign fees use each platform CPM endpoint without a second fee band', () => {
  for (const [platform, [low, high]] of Object.entries({ tiktok: [10, 15], instagram: [15, 20], youtube: [60, 80], x: [5, 10] })) {
    const campaign = calculateCampaign({ ...base, platform, format: campaignConfig.defaultFormats[platform], size: 'mid', count: 1, contingency: 0 });
    const views = campaignConfig.views[platform].mid;
    assert.equal(campaign.low, views / 1000 * low * 1.07);
    assert.equal(campaign.high, views / 1000 * high * 1.07);
    assert.equal(campaign.views, views);
  }
});

test('creator allocation preserves every requested creator and goal changes the mix', () => {
  for (const goal of Object.keys(campaignConfig.goals)) {
    for (const count of [1, 7, 10, 23, 10000]) {
      const result = calculateCampaign({ ...base, goal, count });
      assert.equal(result.rows.reduce((sum, row) => sum + row.count, 0), count);
      assert.equal(result.views, result.rows.reduce((sum, row) => sum + row.count * row.views, 0));
    }
  }
  const awareness = calculateCampaign({ ...base, goal: 'awareness' });
  const conversion = calculateCampaign({ ...base, goal: 'conversion' });
  assert.ok(awareness.rows.some((row) => row.tier === 'macro'));
  assert.ok(!conversion.rows.some((row) => row.tier === 'macro'));
  assert.ok(calculateCampaign({ ...base, goal: 'ugc' }).rows.some((row) => row.tier === 'nano'));
});

test('additional costs and contingency reconcile with total campaign costs and CPM', () => {
  const result = calculateCampaign({ ...base, extras: 500, contingency: 15 });
  assert.equal(result.low, (result.creatorLow + 500) * 1.15);
  assert.equal(result.high, (result.creatorHigh + 500) * 1.15);
  assert.equal(result.cpmHigh, result.high / result.viewLow * 1000);
  assert.equal(result.cpmLow, result.low / result.viewHigh * 1000);
});

test('budget mode finds whole affordable plans at both ends of the rate range', () => {
  for (const platform of Object.keys(rateConfig.platforms)) {
    for (const goal of Object.keys(campaignConfig.goals)) {
      for (const budget of [100, 1000, 20000, 98765]) {
        const input = { ...base, platform, format: Object.keys(campaignConfig.formats[platform])[0], goal, budget, extras: 100, mode: 'budget' };
        const result = calculateCampaign(input);
        assert.ok(result.minCount <= result.maxCount);
        if (result.count) assert.ok(result.high <= budget);
        if (result.count < campaignConfig.maxCreators) {
          assert.ok(calculateCampaign({ ...input, mode: 'cost', count: result.count + 1 }).high > budget);
        }
        if (result.maxCount) assert.ok(calculateCampaign({ ...input, mode: 'cost', count: result.maxCount }).low <= budget);
        if (result.maxCount < campaignConfig.maxCreators) assert.ok(calculateCampaign({ ...input, mode: 'cost', count: result.maxCount + 1 }).low > budget);
      }
    }
  }
});

test('an insufficient budget returns zero creators and a useful minimum, never a fractional creator', () => {
  const result = calculateCampaign({ ...base, mode: 'budget', budget: 1, extras: 500 });
  assert.equal(result.count, 0);
  assert.equal(result.views, 0);
  assert.deepEqual(result.rows, []);
  assert.ok(result.minimumBudget > 500);
});

test('country, niche, content format and custom views affect the same shared pricing engine', () => {
  const input = { ...base, platform: 'youtube', format: 'dedicated', country: 'jp', niche: 'tech', size: 'mid', count: 3, contingency: 0, views: { mid: 40000 } };
  const result = calculateCampaign(input);
  const rate = calculateCreatorRate({ platform: 'youtube', cpm: 80, country: 'jp', niche: 'tech', followers: 150000, views: 40000, engagement: 2, audience: 'average', content: 'good' });
  assert.equal(result.creatorHigh, rate.midpoint * 3);
  assert.equal(result.views, 120000);
  assert.ok(result.creatorHigh > calculateCampaign({ ...input, format: 'integration' }).creatorHigh);
});

test('malformed input is rejected and size changes ignore inactive view overrides', () => {
  for (const patch of [{ count: '' }, { count: 1.5 }, { count: 10001 }, { count: Infinity }, { extras: -1 }, { contingency: 101 }, { size: 'wrong' }, { goal: 'wrong' }, { country: '' }, { niche: 'wrong' }, { mode: 'wrong' }, { platform: 'x', format: 'reel' }, { views: { micro: '' } }, { views: { mid: 1.5 } }, { mode: 'budget', budget: 0 }]) {
    assert.equal(calculateCampaign({ ...base, ...patch }), null, JSON.stringify(patch));
  }
  assert.ok(calculateCampaign({ ...base, size: 'macro', views: { mid: '' } }));
});

const multi = { ...base, platforms: [
  { platform: 'instagram', count: 10, format: 'reel', share: 60 },
  { platform: 'youtube', count: 5, format: 'dedicated', share: 40 },
] };

test('YouTube defaults to dedicated video explicitly', () => {
  assert.equal(campaignConfig.defaultFormats.youtube, 'dedicated');
  assert.equal(campaignConfig.formats.youtube.dedicated.multiplier, 1);
  const dedicated = calculateCampaign({ ...base, platform: 'youtube', format: 'dedicated', size: 'mid', count: 1, contingency: 0 });
  for (const [format, multiplier] of Object.entries({ integration: 0.6, shorts: 0.2 })) {
    const result = calculateCampaign({ ...base, platform: 'youtube', format, size: 'mid', count: 1, contingency: 0 });
    assert.ok(Math.abs(result.low - dedicated.low * multiplier) < 1e-8);
    assert.ok(Math.abs(result.high - dedicated.high * multiplier) < 1e-8);
  }
  for (const [platform, format] of Object.entries(campaignConfig.defaultFormats)) assert.ok(campaignConfig.formats[platform][format]);
});

test('platform minimums still apply to both CPM endpoints for small creators', () => {
  const result = calculateCampaign({ ...base, platform: 'youtube', format: 'shorts', country: 'in', size: 'nano', count: 1, contingency: 0 });
  assert.equal(result.low, rateConfig.platforms.youtube.minimum);
  assert.equal(result.high, rateConfig.platforms.youtube.minimum);
});

test('multi-platform counts and fees sum correctly, charging extras and contingency once', () => {
  const result = calculateMultiPlatformCampaign({ ...multi, extras: 500, contingency: 15 });
  const plans = multi.platforms.map((plan) => calculateCampaign({ ...base, ...plan, extras: 0, contingency: 0 }));
  assert.equal(result.count, 15);
  assert.equal(result.views, plans.reduce((sum, plan) => sum + plan.views, 0));
  assert.equal(result.creatorHigh, plans.reduce((sum, plan) => sum + plan.creatorHigh, 0));
  assert.equal(result.high, result.creatorHigh + 500 + (result.creatorHigh + 500) * 0.15);
  assert.equal(result.rows.reduce((sum, row) => sum + row.count, 0), 15);
  assert.equal(result.cpmHigh, result.high / result.viewLow * 1000);
});

test('multi-platform budget shares constrain each plan and the combined all-in total', () => {
  const result = calculateMultiPlatformCampaign({ ...multi, size: 'mid', mode: 'budget', budget: 20000, extras: 500, contingency: 15 });
  assert.equal(result.platforms[0].allocated, 12000);
  assert.equal(result.platforms[1].allocated, 8000);
  assert.ok(result.high <= 20000);
  assert.ok(result.minCount <= result.maxCount);
  for (const plan of result.platforms) {
    assert.ok(plan.high <= plan.allocated);
    const next = calculateCampaign({ ...base, size: 'mid', platform: plan.platform, format: multi.platforms.find((item) => item.platform === plan.platform).format, mode: 'cost', count: plan.count + 1, extras: 500 * plan.share, contingency: 15 });
    assert.ok(next.high > plan.allocated);
  }
  const shifted = calculateMultiPlatformCampaign({ ...multi, size: 'mid', mode: 'budget', extras: 500, contingency: 15, platforms: multi.platforms.map((plan) => ({ ...plan, share: plan.platform === 'instagram' ? 20 : 80 })) });
  assert.ok(shifted.platforms[1].count > result.platforms[1].count);
});

test('three-way shares, zero allocations and insufficient platform budgets remain valid', () => {
  const result = calculateMultiPlatformCampaign({ ...multi, mode: 'budget', budget: 20001, platforms: [
    { platform: 'instagram', format: 'reel', share: 33.33 },
    { platform: 'youtube', format: 'dedicated', share: 33.33 },
    { platform: 'tiktok', format: 'standard', share: 33.34 },
  ] });
  assert.ok(Math.abs(result.platforms.reduce((sum, plan) => sum + plan.allocated, 0) - 20001) < 1e-8);
  assert.ok(result.high <= 20001);
  assert.ok(result.platforms.every((plan) => Math.abs(plan.allocated * 100 - Math.round(plan.allocated * 100)) < 1e-6));
  const zero = calculateMultiPlatformCampaign({ ...multi, mode: 'budget', platforms: multi.platforms.map((plan) => ({ ...plan, share: plan.platform === 'instagram' ? 100 : 0 })) });
  assert.equal(zero.platforms[1].count, 0);
  assert.equal(zero.platforms[1].allocated, 0);
  assert.ok(zero.count > 0);
  const insufficient = calculateMultiPlatformCampaign({ ...multi, mode: 'budget', budget: 1, extras: 500 });
  assert.equal(insufficient.count, 0);
  assert.ok(insufficient.minimumBudget > 500);
});

test('invalid allocations, duplicate platforms and inactive cost-mode shares are handled', () => {
  for (const platforms of [[], [multi.platforms[0], multi.platforms[0]], multi.platforms.map((plan) => ({ ...plan, share: 30 })), multi.platforms.map((plan) => ({ ...plan, share: '' })), [{ platform: 'bad', format: 'bad', share: 100 }]]) {
    assert.equal(calculateMultiPlatformCampaign({ ...multi, mode: 'budget', platforms }), null);
  }
  assert.ok(calculateMultiPlatformCampaign({ ...multi, platforms: multi.platforms.map((plan) => ({ ...plan, share: '' })) }));
  assert.equal(calculateMultiPlatformCampaign({ ...multi, platforms: [{ ...multi.platforms[0], views: { mid: '' } }] }), null);
});
