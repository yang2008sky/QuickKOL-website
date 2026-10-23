import test from 'node:test';
import assert from 'node:assert/strict';
import { followerNetChange } from '../src/blog-follower-math.js';

test('snapshot differences preserve increases, decreases and a zero base', () => {
  assert.deepEqual(followerNetChange(10000, 10300), { net: 300, percent: 3 });
  assert.deepEqual(followerNetChange(8000, 7840), { net: -160, percent: -2 });
  assert.deepEqual(followerNetChange(0, 300), { net: 300, percent: null });
  assert.deepEqual(followerNetChange(0, 0), { net: 0, percent: null });
});

test('missing, negative and non-count observations cannot become arithmetic inputs', () => {
  for (const value of [null, undefined, '', '100', NaN, Infinity, -1, 1.5, Number.MAX_SAFE_INTEGER + 1]) {
    assert.equal(followerNetChange(value, 100), null);
    assert.equal(followerNetChange(100, value), null);
  }
});
