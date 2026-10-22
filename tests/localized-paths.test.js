import test from 'node:test';
import assert from 'node:assert/strict';
import { languageAlternates, localizedPath, pathLocale, routePath } from '../src/localized-paths.js';

test('English is the default and Chinese uses the zh prefix', () => {
  assert.equal(pathLocale('/'), 'en');
  assert.equal(pathLocale('/pricing/'), 'en');
  assert.equal(pathLocale('/en/'), 'en');
  assert.equal(pathLocale('/zh/'), 'zh-CN');
  assert.equal(pathLocale('/zh/pricing/'), 'zh-CN');
  for (const path of ['/pricing/', '/en/pricing/', '/zh/pricing/']) {
    assert.equal(routePath(path), '/pricing/');
    assert.equal(localizedPath(path, 'en'), '/pricing/');
    assert.equal(localizedPath(path, 'zh-CN'), '/zh/pricing/');
  }
  assert.equal(localizedPath('/blog/?q=creator#articles', 'zh-CN'), '/zh/blog/?q=creator#articles');
  assert.deepEqual(languageAlternates('/zh/'), [
    { language: 'zh-CN', path: '/zh/' },
    { language: 'en', path: '/' },
    { language: 'x-default', path: '/' },
  ]);
});

test('the English-only invoice editor keeps one URL in both language menus', () => {
  assert.equal(localizedPath('/tools/invoice-generator/', 'zh-CN'), '/tools/invoice-generator/');
  assert.equal(localizedPath('/zh/tools/invoice-generator/', 'en'), '/tools/invoice-generator/');
  assert.deepEqual(languageAlternates('/tools/invoice-generator/'), []);
});
