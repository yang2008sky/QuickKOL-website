import { rateConfig } from './rateConfig.js';

export function roundRate(value) {
  const { step } = rateConfig.rounding.find(({ min }) => value >= min);
  // Smooth small arithmetic differences before rounding to a natural quote.
  // For example, 1,949.11 -> 1,950 -> 2,000, and 2,923.67 -> 2,920 -> 2,900.
  const preliminary = Math.round(value / (step / 10)) * (step / 10);
  return Math.round(preliminary / step) * step;
}

export function calculateCreatorRate(input) {
  const platform = rateConfig.platforms[input.platform];
  const audience = rateConfig.audienceMultipliers[input.audience];
  const content = rateConfig.contentMultipliers[input.content];
  const niche = rateConfig.nicheMultipliers[input.niche];
  const country = rateConfig.countryMultipliers[input.country === undefined ? 'us' : input.country];
  const numericKeys = ['followers', 'views', 'engagement'];
  if (!platform || !audience || !content || !niche || !country || numericKeys.some((key) =>
    input[key] === '' || input[key] == null || !Number.isFinite(Number(input[key])) || Number(input[key]) < 0
  )) return null;
  const cpm = input.cpm === undefined ? platform.cpm : Number(input.cpm);
  if (input.cpm === null || !Number.isFinite(cpm) || cpm <= 0) return null;
  const followers = Number(input.followers);
  const views = Number(input.views);
  const engagement = Number(input.engagement);
  if (!Number.isInteger(followers) || !Number.isInteger(views) || engagement > 100) return null;
  const followerMultiplier = rateConfig.followerMultipliers.find(([upper]) => followers < upper)[1];
  // Shared boundaries enter the higher band; the last finite boundary is
  // inclusive because the top band in V1 is explicitly "greater than".
  const engagementMultiplier = platform.engagement.find(([upper], index, bands) =>
    index === bands.length - 2 ? engagement <= upper : engagement < upper
  )[1];
  const multipliers = { followers: followerMultiplier, engagement: engagementMultiplier, country: country.multiplier, audience: audience.multiplier, content: content.multiplier, niche: niche.multiplier };
  const baseValue = views / 1000 * cpm;
  const calculatedMidpoint = baseValue * Object.values(multipliers).reduce((total, multiplier) => total * multiplier, 1);
  const midpoint = Math.max(calculatedMidpoint, platform.minimum);
  const low = midpoint * rateConfig.rangeMultiplier.low;
  const high = midpoint * rateConfig.rangeMultiplier.high;
  return { baseValue, multipliers, calculatedMidpoint, midpoint, floorApplied: calculatedMidpoint < platform.minimum, low, high, roundedLow: roundRate(low), roundedHigh: roundRate(high) };
}
