import test from 'node:test';
import assert from 'node:assert/strict';
import { instagramActionGoal as calculate } from '../src/blog-instagram-goal-math.js';
test('interaction target arithmetic, upward rounding and zero actions', () => {
  assert.deepEqual(calculate(280,20,30,70,20000,3),{actions:400,rate:2,targetActions:600,gap:200});
  assert.deepEqual(calculate(0,0,0,0,101,1),{actions:0,rate:0,targetActions:2,gap:2});
  assert.equal(calculate(0,0,0,0,100,1.1).targetActions,2);
  assert.equal(calculate(0,0,0,0,1000,1.1).targetActions,11);
  assert.equal(calculate(0,0,0,0,10000,1.1).targetActions,110);
  assert.equal(calculate(0,0,0,0,100,1e-20).targetActions,1);
  assert.equal(calculate(200,0,0,0,100,0).gap,0);
  assert.equal(calculate(200,0,0,0,100,150).rate,200);
});
test('invalid counts and goals remain unavailable', () => {
  for(const values of [[1,2,3,4,0,3],[-1,2,3,4,10,3],[1.5,2,3,4,10,3],[1,2,3,4,10,-1],[1,2,3,4,10,Infinity],[1,2,3,4,10,'3'],[Number.MAX_SAFE_INTEGER,1,0,0,10,3],[1,2,3,4,Number.MAX_SAFE_INTEGER,200]]) assert.equal(calculate(...values),null);
});
