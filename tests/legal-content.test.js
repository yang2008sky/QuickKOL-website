import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { legalDocuments } from '../src/legal-content.js';

const pairs = Object.values(legalDocuments).flatMap((document) => [
  document.title, document.description, document.introduction, ...document.overview,
  ...document.sections.flatMap((section) => [section.title, ...section.paragraphs, ...(section.bullets || [])]),
]);

test('both legal documents have complete translations without English fallback', async () => {
  for (const code of ['en', 'zh-CN', 'ja', 'ko', 'de', 'fr', 'es', 'pt']) {
    const catalog = JSON.parse(await readFile(new URL(`../src/locales/${code}.json`, import.meta.url), 'utf8'));
    for (const [zh, en] of pairs) {
      const source = code === 'en' ? zh : en;
      assert.ok(catalog[source]?.trim(), `${code}: missing legal translation for ${en}`);
      assert.notEqual(catalog[source], source, `${code}: untranslated legal copy`);
      if (code === 'en') assert.equal(catalog[source], en);
      if (code === 'zh-CN') assert.equal(catalog[source], zh);
    }
  }
});

test('legal content keeps reference operators private and section anchors unambiguous', () => {
  assert.doesNotMatch(JSON.stringify(legalDocuments), /Photura|InfluPay|influ-pay|Renhong|Kwun Tong/i);
  for (const document of Object.values(legalDocuments)) {
    const ids = document.sections.map((section) => section.id);
    assert.equal(new Set(ids).size, ids.length);
  }
});
