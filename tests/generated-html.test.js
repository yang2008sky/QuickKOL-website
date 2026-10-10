import assert from 'node:assert/strict';
import test from 'node:test';
import { access, readFile } from 'node:fs/promises';
import { Window } from 'happy-dom';

// Run after npm run build: parse the files without executing any page JavaScript.
test('every sitemap page ships readable, styled content and canonical metadata', async () => {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  assert.ok(urls.length >= 82);
  for (const url of urls) {
    const path = new URL(url).pathname;
    const window = new Window();
    try {
      window.document.write(await readFile(`dist${path.endsWith('/') ? `${path}index.html` : path}`, 'utf8'));
      const document = window.document;
      const googleTags = [...document.head.querySelectorAll('script[src*="googletagmanager.com/gtag/js"]')];
      assert.equal(googleTags.length, 1, `${path}: one Google tag`);
      assert.equal(googleTags[0].getAttribute('src'), 'https://www.googletagmanager.com/gtag/js?id=G-KGZ31XZD0N', path);
      assert.ok(googleTags[0].hasAttribute('async'), path);
      assert.equal([...document.head.querySelectorAll('script:not([src])')].filter((script) => script.textContent.includes("gtag('config', 'G-KGZ31XZD0N')")).length, 1, `${path}: one GA4 configuration`);
      assert.equal(document.querySelectorAll('h1').length, 1, path);
      assert.ok(document.querySelector('main').textContent.trim().length > 200, path);
      assert.equal(document.querySelectorAll('link[rel="canonical"]').length, 1, path);
      assert.equal(document.querySelector('link[rel="canonical"]').getAttribute('href'), url, path);
      assert.equal(document.querySelector('meta[property="og:title"]').content, document.title, path);
      assert.equal(document.querySelector('meta[property="og:url"]').content, url, path);
      assert.equal(document.querySelector('meta[name="twitter:description"]').content, document.querySelector('meta[name="description"]').content, path);
      assert.equal(document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').length, 12, path);
      assert.equal(document.querySelectorAll('img:not([alt]), img[alt=""]').length, 0, path);
      for (const link of document.querySelectorAll('link[rel="stylesheet"]')) await access(`dist${link.getAttribute('href')}`);
      if (path !== '/') assert.ok(document.querySelectorAll('link[rel="stylesheet"]').length > 1, path);
      let previous = 0;
      for (const heading of document.querySelectorAll('main h1, main h2, main h3, main h4, main h5, main h6')) {
        const level = Number(heading.tagName[1]);
        assert.ok(level <= previous + 1, `${path}: heading jump to ${heading.textContent}`);
        previous = level;
      }
      const graph = JSON.parse(document.querySelector('script[data-site-structured]').textContent)['@graph'];
      assert.ok(graph.some((entity) => entity['@type'] === 'Organization'), path);
      assert.ok(graph.some((entity) => entity['@type'] === 'WebSite'), path);
      const page = graph.find((entity) => entity.url === url && entity['@id'].endsWith('#webpage'));
      assert.equal(page.inLanguage, document.documentElement.lang, path);
      if (page['@type'] === 'FAQPage') {
        assert.ok(page.mainEntity.length >= 6, path);
        for (const item of page.mainEntity) {
          const content = document.querySelector('main').textContent.replace(/\s+/g, ' ');
          assert.ok(content.includes(item.name), path);
          assert.ok(content.includes(item.acceptedAnswer.text), path);
        }
      }
      const article = document.querySelector('.blog-article-content');
      if (article) {
        const schema = JSON.parse(document.querySelector('script[data-blog-structured]').textContent);
        assert.equal(schema['@type'], 'BlogPosting', path);
        assert.equal(schema.headline, document.querySelector('h1').textContent, path);
        assert.equal(schema.datePublished, document.querySelector('.blog-article-meta time').getAttribute('datetime'), path);
        assert.ok(document.querySelector('.blog-article-meta [rel="author"]'), path);
        assert.ok(schema.citation.length > 0, path);
        for (const citation of schema.citation) assert.ok([...document.querySelectorAll('.blog-sources a')].some((link) => link.getAttribute('href') === citation), path);
      }
    } finally {
      await window.happyDOM.close();
    }
  }
  assert.ok((await readFile('dist/llms.txt', 'utf8')).includes('https://www.quickkol.com/blog/'));
});
