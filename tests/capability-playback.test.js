import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
import { Window } from 'happy-dom';

const { outputFiles } = await build({ entryPoints: ['src/capability-demos.js'], bundle: true, write: false, format: 'esm', loader: { '.css': 'empty' } });
const { mountCapabilityDemo, renderCapabilityDemo } = await import(`data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString('base64')}`);

for (const [key, warmup] of [['discover', 4700], ['analytics', 300], ['outreach', 300], ['agent', 1000]]) {
  test(`${key} freezes in place, resumes, and disposes its animation frames`, async () => {
    const dom = new Window();
    let now = 0;
    let nextFrame = 0;
    const frames = new Map();
    const originalPerformance = globalThis.performance;
    globalThis.window = dom;
    globalThis.document = dom.document;
    globalThis.performance = { now: () => now };
    globalThis.requestAnimationFrame = dom.requestAnimationFrame = (callback) => {
      frames.set(++nextFrame, callback);
      return nextFrame;
    };
    globalThis.cancelAnimationFrame = dom.cancelAnimationFrame = (frame) => frames.delete(frame);
    const advance = (duration) => {
      for (let step = 0; step < duration; step += 20) {
        now += 20;
        const pending = [...frames.values()];
        frames.clear();
        pending.forEach((callback) => callback(now));
      }
    };
    const root = dom.document.createElement('div');
    root.innerHTML = key === 'agent' ? `<div data-agent-demo>
      <h3 data-agent-demo-title></h3><span data-agent-demo-status></span><span data-agent-demo-log></span>
      ${[0, 1, 2].map((index) => `<article data-agent-worker="${index}"><span data-agent-worker-status></span></article><li data-agent-step="${index}"></li>`).join('')}
    </div>` : renderCapabilityDemo(key);
    const controller = mountCapabilityDemo(root, false);
    try {
      advance(warmup);
      controller.setPaused(true);
      const frozen = root.innerHTML;
      advance(20000);
      assert.equal(controller.paused, true);
      assert.equal(root.dataset.paused, 'true');
      assert.equal(root.innerHTML, frozen);
      controller.setPaused(false);
      advance(2000);
      assert.notEqual(root.innerHTML, frozen);
      controller.dispose();
      assert.equal(frames.size, 0);
    } finally {
      controller.dispose();
      globalThis.performance = originalPerformance;
      await dom.happyDOM.close();
    }
  });
}
