import assert from 'node:assert/strict';
import test from 'node:test';
import { build } from 'esbuild';
import { mkdtemp, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

// Bundle the browser JSON imports without requiring a separate DOM dependency.
const { outputFiles } = await build({ entryPoints: ['src/i18n.js'], bundle: true, write: false, format: 'esm', platform: 'node' });
const temporary = await mkdtemp(join(tmpdir(), 'quickkol-i18n-'));
await writeFile(join(temporary, 'i18n.mjs'), outputFiles[0].text);
const i18n = await import(pathToFileURL(join(temporary, 'i18n.mjs')));
await rm(temporary, { recursive: true });
const storage = new Map();
const body = { nodeType: 0 };
globalThis.HTMLTextAreaElement = class {};
globalThis.HTMLInputElement = class {};
globalThis.NodeFilter = { SHOW_TEXT: 4 };
globalThis.Node = { TEXT_NODE: 3, ELEMENT_NODE: 1 };
globalThis.CustomEvent = class {};
globalThis.document = { documentElement: { lang: '' }, body, querySelectorAll: () => [] };
globalThis.window = { localStorage: { setItem: (key, value) => storage.set(key, value) }, dispatchEvent: () => {} };

function textNode(source) {
  const parentElement = { nodeType: 1, closest: () => null, hasAttribute: () => false, querySelectorAll: () => [] };
  const node = { nodeType: 3, data: source, parentElement };
  document.createTreeWalker = () => {
    let visited = false;
    return { nextNode: () => visited ? null : (visited = true, node) };
  };
  return node;
}

test('switching languages translates new dynamic content instead of restoring stale text', () => {
  const node = textNode('确认发送 8 封邮件');
  i18n.setPageLocale('en');
  i18n.applyTranslations(node);
  assert.equal(node.data, 'Confirm and send 8 emails');
  node.data = '确认发送 11 封邮件';
  i18n.applyTranslations(node);
  assert.equal(node.data, 'Confirm and send 11 emails');
  i18n.setPageLocale('zh-CN');
  i18n.applyTranslations(node);
  assert.equal(node.data, '确认发送 11 封邮件');
});

test('translates footer copy and image descriptions while preserving platform names', () => {
  i18n.setPageLocale('en');
  assert.equal(i18n.localizeText('用 AI 连接品牌与合适的创作者，'), 'Connect brands with the right creators through AI.');
  assert.equal(i18n.localizeText('@olivia 发布的通勤降噪实测视频画面'), "@olivia's commute anc test video frame");
  i18n.setPageLocale('zh-CN');
  assert.equal(i18n.localizeText('Find the right creators,'), '找对达人，');
  assert.equal(i18n.localizeText('YouTube'), 'YouTube');
  assert.equal(i18n.localizeText('Tools'), '工具');
});

test('dynamic goal hints translate every goal and switch back without stale content', async () => {
  const goals = [
    ['覆盖广、观看稳定的达人', 'Creators with broad reach and consistent views'],
    ['内容契合、互动活跃的达人', 'Creators with relevant content and active engagement'],
    ['带货表现好的达人', 'Creators with strong sales performance'],
    ['擅长测评、反馈真实的达人', 'Skilled reviewers with honest feedback'],
  ];
  const node = textNode('');
  for (const [zh, en] of goals) {
    node.data = `优先${zh}`;
    for (const code of ['en', 'ja', 'ko', 'de', 'fr', 'es', 'pt', 'zh-CN']) {
      await i18n.loadLocale(code);
      i18n.setPageLocale(code);
      i18n.applyTranslations(node);
      if (code === 'en') assert.equal(node.data, `Prioritize: ${en}`);
      else if (code === 'zh-CN') assert.equal(node.data, `优先${zh}`);
      else {
        assert.doesNotMatch(node.data, /优先|达人|Prioritize:/, `${code}: untranslated hint`);
        assert.ok(node.data.includes(i18n.localizeText(en)), `${code}: wrong creator type`);
      }
    }
  }
  i18n.setPageLocale('en');
  assert.equal(i18n.localizeText('优先：测评专业度、试用深度与反馈质量'), 'Prioritize: Review expertise, testing depth and feedback quality');
});

test('persists the selected locale and safely rejects invalid choices', () => {
  i18n.setPageLocale('en');
  assert.equal(document.documentElement.lang, 'en');
  assert.equal(storage.get('quickkol-language'), 'en');
  assert.equal(i18n.resolveLocale('invalid'), 'zh-CN');
  for (const { code } of i18n.languages) {
    if (!i18n.isLocaleAvailable(code)) assert.equal(i18n.resolveLocale(code), 'zh-CN');
  }
});

test('all six languages translate navigation, dynamic counts, and preserve switching back', async () => {
  const labels = { ja: 'ホーム', ko: '홈', de: 'Startseite', fr: 'Accueil', es: 'Inicio', pt: 'Início' };
  const node = textNode('确认发送 11 封邮件');
  for (const [code, home] of Object.entries(labels)) {
    await i18n.loadLocale(code);
    i18n.setPageLocale(code);
    i18n.applyTranslations(node);
    assert.equal(document.documentElement.lang, code);
    assert.equal(i18n.localizeText('Home'), home);
    assert.match(node.data, /11/);
    assert.doesNotMatch(node.data, /确认发送|Confirm and send/);
    assert.equal(i18n.localizeText('Quick'), 'Quick');
    assert.equal(i18n.localizeText('KOL'), 'KOL');
    assert.equal(i18n.localizeText('YouTube'), 'YouTube');
    assert.doesNotMatch(i18n.localizeText('$1,600 × 3 creators + $800 × 3 creators'), /creators/);
  }
  i18n.setPageLocale('zh-CN');
  i18n.applyTranslations(node);
  assert.equal(node.data, '确认发送 11 封邮件');
});

test('foreign catalogs cover the same content and preserve variables and HTML structure', async () => {
  let sources;
  for (const code of ['ja', 'ko', 'de', 'fr', 'es', 'pt']) {
    const catalog = JSON.parse(await readFile(new URL(`../src/locales/${code}.json`, import.meta.url), 'utf8'));
    const keys = Object.keys(catalog).sort();
    assert.ok(keys.length > 2000, `${code} must include full pages and blog articles`);
    if (sources) assert.deepEqual(keys, sources, `${code} is missing content`);
    sources = keys;
    for (const [source, target] of Object.entries(catalog)) {
      assert.ok(target.trim(), `${code}: empty translation for ${source}`);
      assert.deepEqual(target.match(/\{\d+\}/g)?.sort() || [], source.match(/\{\d+\}/g)?.sort() || [], `${code}: changed variables in ${source}`);
      assert.deepEqual(target.match(/<[^>]*>/g) || [], source.match(/<[^>]*>/g) || [], `${code}: changed markup in ${source}`);
    }
  }
});

test('changing locale preserves user-edited form fields while translating their placeholders', async () => {
  const field = new HTMLInputElement();
  Object.assign(field, {
    nodeType: 1, type: 'text', value: '我的品牌 Custom brand', dataset: { i18nUserEdited: 'true' },
    closest: () => null, querySelectorAll: () => [],
  });
  const attributes = new Map([['placeholder', 'Your name']]);
  field.hasAttribute = (name) => attributes.has(name);
  field.getAttribute = (name) => attributes.get(name);
  field.setAttribute = (name, value) => attributes.set(name, value);
  document.createTreeWalker = () => ({ nextNode: () => null });
  await i18n.loadLocale('ja');
  i18n.setPageLocale('ja');
  i18n.applyTranslations(field);
  assert.equal(field.value, '我的品牌 Custom brand');
  assert.notEqual(attributes.get('placeholder'), 'Your name');
  i18n.setPageLocale('en');
  i18n.applyTranslations(field);
  assert.equal(field.value, '我的品牌 Custom brand');
  assert.equal(attributes.get('placeholder'), 'Your name');
});
