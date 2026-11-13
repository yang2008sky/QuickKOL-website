import test from 'node:test';
import assert from 'node:assert/strict';
import { languageAlternates, languageSwitchPath, localizedPath, pathLocale, routePath } from '../src/localized-paths.js';

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
    ...['vi', 'id', 'hi', 'bn'].map((language) => ({ language, path: `/${language}/` })),
  ]);
});

test('the English-only invoice editor keeps one URL in both language menus', () => {
  assert.equal(localizedPath('/tools/invoice-generator/', 'zh-CN'), '/tools/invoice-generator/');
  assert.equal(localizedPath('/zh/tools/invoice-generator/', 'en'), '/tools/invoice-generator/');
  assert.deepEqual(languageAlternates('/tools/invoice-generator/'), []);
});

test('pilot language links only advertise available article and archive routes', () => {
  for (const language of ['vi', 'id', 'hi', 'bn']) {
    const article = '/blog/creator-shortlist-workflow/';
    assert.equal(pathLocale(`/${language}${article}`), language);
    assert.equal(routePath(`/${language}${article}`), article);
    assert.equal(localizedPath(article, language), `/${language}${article}`);
    assert.equal(languageSwitchPath(article + '?ref=mail#answer', language), `/${language}${article}?ref=mail#answer`);
    assert.equal(languageSwitchPath('/blog/create-youtube-channel-collaboration-launch-check/', language), `/${language}/blog/`);
    assert.equal(languageSwitchPath('/blog/page/43/', language), `/${language}/blog/`);
    assert.equal(languageSwitchPath('/', language), `/${language}/`);
    assert.equal(languageSwitchPath('/#top', language), `/${language}/#top`);
    assert.equal(languageSwitchPath('/zh/?ref=menu#top', language), `/${language}/?ref=menu#top`);
    assert.equal(localizedPath('/', language), `/${language}/`);
    assert.equal(localizedPath(`/${language}/#capabilities`, 'en'), '/#capabilities');
    assert.ok(languageAlternates(`/${language}/`).some((alternate) => alternate.language === language && alternate.path === `/${language}/`));
    assert.equal(localizedPath('/about/', language), '/about/');
    assert.ok(languageAlternates(article).some((alternate) => alternate.language === language));
    assert.ok(!languageAlternates('/blog/create-youtube-channel-collaboration-launch-check/').some((alternate) => alternate.language === language));
  }
});
