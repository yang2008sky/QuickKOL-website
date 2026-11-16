import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { blogPosts, articleSourceKeys, coreSourceKeys } from '../scripts/localization-data.js';
import { blogLanguages, localizedBlogArticles } from '../src/blog-localization-manifest.js';

test('every advertised translation has complete core and article catalogs', async () => {
  const common = await coreSourceKeys();
  for (const language of blogLanguages) {
    const payload = JSON.parse(await readFile(`public/locales/${language}/core.json`, 'utf8'));
    const core = payload.strings;
    for (const key of common) assert.ok(core[key], `${language}: missing core text ${key.slice(0,80)}`);
    const slugs = new Set(localizedBlogArticles.map(({slug}) => slug));
    for (const post of blogPosts.filter(({slug}) => slugs.has(slug))) {
      const article = JSON.parse(await readFile(`public/locales/${language}/articles/${post.slug}.json`, 'utf8'));
      const combined = { ...core, ...article };
      assert.ok(Number.isInteger(payload.readingTimes[post.slug]) && payload.readingTimes[post.slug] >= 1);
      for (const key of articleSourceKeys(post)) assert.ok(combined[key], `${language}/${post.slug}: missing article text ${key.slice(0,80)}`);
      assert.equal(core[post.title[1]], combined[post.title[1]]);
    }
  }
});
