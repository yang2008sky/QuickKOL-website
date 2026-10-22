import test from 'node:test';
import assert from 'node:assert/strict';
import { aggregateEngagement, compareEngagement, viewEngagement } from '../src/blog-engagement-math.js';

test('pooling weights denominators rather than averaging post rates', () => {
  const result = aggregateEngagement(300, 10000, 1200, 60000);
  assert.equal(result.mean, 2.5);
  assert.ok(Math.abs(result.pooled - 15 / 7) < 1e-12);
  assert.equal(aggregateEngagement(300, 0, 1200, 60000), null);
});
test('reference comparison separates percentage points and rate ratios', () => {
  const result = compareEngagement(400, 20000, 600, 20000);
  assert.equal(result.points, -1);
  assert.equal(result.ratio, 2 / 3);
  const zeroReference = compareEngagement(400, 20000, 0, 20000);
  assert.equal(zeroReference.points, 2);
  assert.equal(zeroReference.ratio, null);
  assert.equal(compareEngagement(400, 0, 600, 20000), null);
});
test('TikTok actions are divided by views, including confirmed zero actions', () => {
  assert.equal(viewEngagement(800, 60, 90, 50, 20000), 5);
  assert.equal(viewEngagement(0, 0, 0, 0, 20000), 0);
  assert.equal(viewEngagement(800, 60, 90, 50, 0), null);
});
