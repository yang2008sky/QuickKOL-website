import assert from 'node:assert/strict';
import test from 'node:test';
import { calculateCreatorRate, roundRate } from '../src/creator-rate.js';
import { rateConfig } from '../src/rateConfig.js';

const baseline = { platform: 'youtube', followers: 150000, views: 50000, engagement: 5, country: 'us', audience: 'high', content: 'premium', niche: 'tech' };
const estimate = (changes) => calculateCreatorRate({ ...baseline, ...changes });

test('YouTube example applies all multipliers and rounds only display values', () => {
  const result = estimate({ cpm: 25 });
  assert.equal(result.baseValue, 1250);
  assert.deepEqual(result.multipliers, { followers: 1.07, engagement: 1.1, country: 1, audience: 1.2, content: 1.2, niche: 1.2 });
  assert.ok(Math.abs(result.midpoint - 2542.32) < 0.000001);
  assert.ok(Math.abs(result.low - 2033.856) < 0.000001);
  assert.ok(Math.abs(result.high - 3050.784) < 0.000001);
  assert.equal(result.roundedLow, 2000);
  assert.equal(result.roundedHigh, 3100);
  assert.equal(result.floorApplied, false);
});

test('follower thresholds only apply the specified modest premiums', () => {
  const cases = [[0, .9], [9999, .9], [10000, 1], [49999, 1], [50000, 1.03], [99999, 1.03], [100000, 1.07], [499999, 1.07], [500000, 1.12], [999999, 1.12], [1000000, 1.18], [4999999, 1.18], [5000000, 1.25]];
  for (const [followers, expected] of cases) assert.equal(estimate({ followers }).multipliers.followers, expected, String(followers));
});

test('each platform uses its CPM and engagement boundaries including strict top tiers', () => {
  const cases = {
    tiktok: [[1.99, .85], [2, 1], [3.99, 1], [4, 1.1], [6.99, 1.1], [7, 1.18], [10, 1.18], [10.01, 1.25]],
    instagram: [[.99, .85], [1, 1], [2.99, 1], [3, 1.1], [4.99, 1.1], [5, 1.18], [8, 1.18], [8.01, 1.25]],
    youtube: [[1.99, .9], [2, 1], [3.99, 1], [4, 1.1], [5.99, 1.1], [6, 1.18], [10, 1.18], [10.01, 1.25]],
    x: [[.49, .85], [.5, 1], [1.49, 1], [1.5, 1.1], [2.99, 1.1], [3, 1.18], [5, 1.18], [5.01, 1.25]],
  };
  for (const [platform, rows] of Object.entries(cases)) {
    for (const [engagement, expected] of rows) {
      const result = estimate({ platform, engagement });
      assert.equal(result.multipliers.engagement, expected, `${platform} at ${engagement}%`);
      assert.equal(result.baseValue, 50 * rateConfig.platforms[platform].cpm);
    }
  }
});

test('platform minimum is applied before the range, even at zero views', () => {
  for (const [platform, minimum] of [['tiktok', 100], ['instagram', 100], ['youtube', 150], ['x', 75]]) {
    const result = estimate({ platform, views: 0 });
    assert.equal(result.calculatedMidpoint, 0);
    assert.equal(result.midpoint, minimum);
    assert.equal(result.low, minimum * .8);
    assert.equal(result.high, minimum * 1.2);
    assert.equal(result.floorApplied, true);
  }
});

test('quality and niche selections use every configured multiplier', () => {
  for (const [key, configName] of [['audience', 'audienceMultipliers'], ['content', 'contentMultipliers'], ['niche', 'nicheMultipliers']]) {
    for (const [value, entry] of Object.entries(rateConfig[configName])) assert.equal(estimate({ [key]: value }).multipliers[key], entry.multiplier);
  }
});

test('country benchmarks match the supplied table and scale the estimate', () => {
  const countries = { us: 1, ch: 1, gb: .9, au: .85, ca: .85, de: .8, fr: .75, nl: .8, se: .85, sg: .85, ae: .8, jp: .75, kr: .7, it: .7, es: .65, pl: .55, br: .45, mx: .45, cn: .45, my: .4, th: .4, vn: .35, id: .35, ph: .35, in: .3, pk: .25, ng: .3, other: .65 };
  assert.deepEqual(Object.keys(rateConfig.countryMultipliers), Object.keys(countries));
  const us = estimate({ country: 'us' });
  for (const [country, multiplier] of Object.entries(countries)) {
    const result = estimate({ country });
    assert.equal(result.multipliers.country, multiplier, country);
    assert.equal(result.baseValue, us.baseValue);
    assert.ok(Math.abs(result.midpoint - us.midpoint * multiplier) < .000001, country);
    assert.equal(result.low, result.midpoint * .8);
    assert.equal(result.high, result.midpoint * 1.2);
  }
  assert.deepEqual(estimate({ country: undefined }), us);
  assert.equal(estimate({ country: '' }), null);
  assert.equal(estimate({ country: null }), null);
  assert.equal(estimate({ country: 'pk', views: 1 }).midpoint, 150);
});

test('performance remains the primary driver and scales linearly above the floor', () => {
  assert.ok(Math.abs(estimate({ views: 100000 }).midpoint / estimate({}).midpoint - 2) < .000001);
  assert.ok(estimate({ followers: 5000000 }).midpoint / estimate({ followers: 10000 }).midpoint <= 1.25);
});

test('blank, invalid and non-finite data cannot produce an estimate', () => {
  for (const key of ['followers', 'views', 'engagement']) {
    for (const value of ['', null, undefined, NaN, Infinity, -1, 'invalid']) assert.equal(estimate({ [key]: value }), null, `${key}=${value}`);
  }
  for (const key of ['platform', 'country', 'audience', 'content', 'niche']) assert.equal(estimate({ [key]: 'unknown' }), null);
  assert.equal(estimate({ engagement: 100.1 }), null);
  assert.equal(estimate({ views: 12.5 }), null);
  assert.equal(estimate({ followers: 12.5 }), null);
});

test('natural quote rounding keeps small rates meaningful and matches examples', () => {
  for (const [value, expected] of [[60, 60], [75, 75], [120, 120], [1583, 1600], [2374, 2400], [1949.112, 2000], [2923.668, 2900]]) assert.equal(roundRate(value), expected);
});

test('updated default CPMs are used when there is no override', () => {
  for (const [platform, cpm] of [['tiktok', 10], ['instagram', 15], ['youtube', 60], ['x', 5]]) {
    assert.equal(rateConfig.platforms[platform].cpm, cpm);
    assert.equal(estimate({ platform }).baseValue, 50 * cpm);
  }
});

test('custom CPM changes performance value without modifying defaults or multipliers', () => {
  const regular = estimate({});
  const custom = estimate({ cpm: '30.5' });
  assert.equal(custom.baseValue, 1525);
  assert.deepEqual(custom.multipliers, regular.multipliers);
  assert.equal(rateConfig.platforms.youtube.cpm, 60);
  assert.equal(estimate({}).baseValue, 3000);
  assert.equal(estimate({ views: 0, cpm: 1 }).midpoint, 150);
});

test('invalid custom CPM values do not generate a quote', () => {
  for (const cpm of ['', null, NaN, Infinity, -1, 0, 'invalid']) assert.equal(estimate({ cpm }), null);
});
