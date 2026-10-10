import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { Window } from 'happy-dom';

async function withPage(path, check) {
  const window = new Window({ url: `https://www.quickkol.com${path}` });
  try {
    window.document.write(await readFile(`dist${path}index.html`, 'utf8'));
    await check(window.document);
  } finally {
    await window.happyDOM.close();
  }
}

test('blog pagination exposes every article without JavaScript', async () => {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  const articles = [...sitemap.matchAll(/<loc>https:\/\/www.quickkol.com(\/blog\/[^/]+\/)<\/loc>/g)].map((match) => match[1]);
  const seen = new Set();
  await withPage('/', (document) => {
    assert.ok(document.querySelector('a[href="/blog/"]'), 'Homepage links to the blog');
  });
  const pageCount = Math.ceil(articles.length / 12);
  for (let page = 1; page <= pageCount; page++) {
    const path = page === 1 ? '/blog/' : `/blog/page/${page}/`;
    await withPage(path, (document) => {
      const cards = [...document.querySelectorAll('.blog-card')];
      assert.equal(cards.length, Math.min(12, articles.length - (page - 1) * 12), path);
      for (const card of cards) {
        const href = card.getAttribute('href');
        assert.ok(articles.includes(href), href);
        assert.ok(!seen.has(href), `Article repeated on multiple pages: ${href}`);
        seen.add(href);
      }
      const url = `https://www.quickkol.com${path}`;
      assert.equal(document.querySelector('link[rel="canonical"]').href, url);
      assert.equal(document.querySelector('meta[property="og:url"]').content, url);
      const collection = JSON.parse(document.querySelector('script[data-blog-structured]').textContent);
      assert.equal(collection.url, url);
      assert.equal(document.querySelectorAll('[data-blog-pagination] button').length, 0);
      for (let target = 1; target <= pageCount; target++) {
        const targetPath = target === 1 ? '/blog/' : `/blog/page/${target}/`;
        assert.ok(document.querySelector(`[data-blog-pagination] a[href="${targetPath}"]`), `${path} -> ${targetPath}`);
      }
    });
  }
  assert.equal(seen.size, articles.length);
});

test('English invoice content and page schema declare English', async () => {
  await withPage('/tools/invoice-generator/', (document) => {
    assert.equal(document.documentElement.lang, 'en');
    assert.equal(document.querySelector('main').lang, 'en');
    assert.equal(document.querySelector('h1').textContent, 'Invoice Generator');
    const graph = JSON.parse(document.querySelector('script[data-site-structured]').textContent)['@graph'];
    assert.equal(graph.find((entity) => entity['@id'].endsWith('#webpage')).inLanguage, 'en');
  });
});

test('homepage ships all four capability explanations without JavaScript', async () => {
  await withPage('/', (document) => {
    const titles = [
      '更快找到真正合适的达人',
      '把内容与受众数据变成判断',
      '让每一封触达都更像真人',
      '把重复工作交给 Agent 推进',
    ];
    const copies = [...document.querySelectorAll('[data-capability-copy]')];
    assert.equal(copies.length, 4);
    assert.deepEqual(copies.map((copy) => copy.querySelector('h3').textContent), titles);
    for (const copy of copies) {
      assert.ok(copy.querySelector('p:not(.eyebrow)').textContent.length > 20);
      assert.equal(copy.querySelectorAll('li').length, 3);
    }
    assert.equal(copies.filter((copy) => !copy.hidden).length, 1);
    assert.equal(copies.find((copy) => !copy.hidden).dataset.capabilityCopy, 'discover');
    assert.equal(document.querySelectorAll('[data-faq-answer]').length, 6);
  });
});
