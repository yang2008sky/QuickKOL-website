import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile, access } from 'node:fs/promises';
import { Window } from 'happy-dom';
import middleware from '../middleware.js';
import { languageAlternates, localizedPath, pathLocale, routePath } from '../src/localized-paths.js';

test('translated HTML, language pairs, author identity and share images agree across the sitemap', async () => {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  const sitemapDates = new Map([...sitemap.matchAll(/<loc>(.*?)<\/loc><lastmod>(.*?)<\/lastmod>/g)].map(([, url, date]) => [url, date]));
  const urlSet = new Set(urls);
  const articles = new Set();
  const relatedTargets = new Set();
  const articleDates = new Map();
  assert.equal(urlSet.size, urls.length);
  for (const url of urls) {
    const path = new URL(url).pathname;
    const window = new Window();
    try {
      window.document.write(await readFile(`dist${path.endsWith('/') ? `${path}index.html` : path}`, 'utf8'));
      const document = window.document;
      const invoice = path === '/tools/invoice-generator/';
      const language = pathLocale(path);
      const english = language === 'en';
      assert.equal(document.documentElement.lang, invoice ? 'en' : language, path);
      const alternates = [...document.querySelectorAll('link[rel="alternate"][hreflang]')];
      assert.equal(alternates.length, languageAlternates(path).length, path);
      for (const link of alternates) {
        assert.ok(urlSet.has(link.href), `${path}: missing alternate ${link.href}`);
        const alternateLanguage = link.hreflang === 'x-default' ? 'en' : link.hreflang;
        assert.equal(new URL(link.href).pathname, localizedPath(path, alternateLanguage), path);
      }
      if (english) {
        assert.doesNotMatch(document.querySelector('main').textContent, /[\u3400-\u9fff]/, path);
        assert.doesNotMatch(document.title, /[\u3400-\u9fff]/, path);
        assert.doesNotMatch(document.querySelector('meta[name="description"]').content, /[\u3400-\u9fff]/, path);
        for (const link of document.querySelectorAll('a[href^="/"]')) {
          const href = link.getAttribute('href');
          if (link.dataset.languageOption || href.startsWith('//')) continue;
          assert.ok(!/^\/(?:en|zh)(?:\/|$)/.test(href), `${path}: English navigation escaped to ${href}`);
        }
      }
      if (document.querySelector('.blog-article-content')) {
        articles.add(url);
        for (const link of document.querySelectorAll('.blog-related a')) {
          const target = new URL(link.getAttribute('href'), url);
          assert.ok(urlSet.has(target.href), `${path}: related article ${target.href}`);
          assert.notEqual(target.href, url, path);
          assert.equal(pathLocale(target.pathname), language, path);
          relatedTargets.add(target.href);
        }
        const schema = JSON.parse(document.querySelector('script[data-blog-structured]').textContent);
        const articlePath = routePath(path);
        if (!articleDates.has(articlePath)) articleDates.set(articlePath, new Map());
        articleDates.get(articlePath).set(language, JSON.stringify([schema.datePublished, schema.dateModified]));
        assert.equal(document.querySelector('.blog-article-meta time').getAttribute('datetime'), schema.datePublished, path);
        const expectedDate = schema.dateModified > schema.datePublished ? schema.dateModified : undefined;
        assert.equal(sitemapDates.get(url), expectedDate, path);
        if (expectedDate) sitemapDates.delete(url);
        assert.equal(schema.mainEntityOfPage, url, path);
        assert.equal(schema.inLanguage, document.documentElement.lang, path);
        assert.equal(schema.author['@type'], 'Person', path);
        assert.equal(schema.author.name, 'Daniel Craig', path);
        assert.equal(schema.author.url, `https://www.quickkol.com${localizedPath('/about/', language)}#daniel-craig`, path);
        assert.equal(document.querySelector('[rel="author"]').textContent, 'Daniel Craig', path);
        const image = document.querySelector('meta[property="og:image"]').content;
        assert.equal(schema.image, image, path);
        assert.equal(document.querySelector('meta[name="twitter:image"]').content, image, path);
        assert.ok(!image.endsWith('.svg'), path);
        await access(`dist${new URL(image).pathname}`);
      }
      if (routePath(path) === '/about/') assert.equal(document.querySelector('#daniel-craig h2').textContent, 'Daniel Craig');
    } finally {
      await window.happyDOM.close();
    }
  }
  for (const article of articles) {
    assert.ok(relatedTargets.has(article), `${article}: no incoming related-article link`);
  }
  for (const [path, dates] of articleDates) {
    assert.ok(dates.has('en') && dates.has('zh-CN'), `${path}: original language dates are missing`);
    assert.equal(new Set(dates.values()).size, 1, `${path}: translated publication or update dates differ from the original`);
    for (const alternate of languageAlternates(path)) {
      if (alternate.language !== 'x-default') assert.ok(dates.has(alternate.language), `${path}: missing ${alternate.language} article`);
    }
  }
  assert.equal(sitemapDates.size, 0, 'Only articles with explicit updates have a sitemap lastmod');
});

test('legacy pagination and aliases redirect once while preserving filters and tracking', () => {
  const cases = [
    ['/blog/?page=2', '/blog/page/2/'],
    ['/en/', '/'],
    ['/en', '/'],
    ['/en/privacy.html?ref=old', '/privacy.html?ref=old'],
    ['/privacy-policy?ref=old', '/privacy.html?ref=old'],
    ['/privacy-policy/', '/privacy.html'],
    ['/zh/privacy-policy/', '/zh/privacy.html'],
    ['/en/blog/page/2/', '/blog/page/2/'],
    ['/zh', '/zh/'],
    ...['vi', 'id', 'hi', 'bn'].flatMap((language) => [
      [`/${language}`, `/${language}/`],
      [`/${language}/index.html?ref=launch`, `/${language}/?ref=launch`],
    ]),
    ['/zh/index.html?ref=launch', '/zh/?ref=launch'],
    ['/zh/blog/?page=2&q=creator', '/zh/blog/page/2/?q=creator'],
    ['/zh/blog/topic/discovery?page=2&q=creator', '/zh/blog/topic/discovery/page/2/?q=creator'],
    ['/zh/about', '/zh/about/'],
    ['/zh/tools/invoice-generator/', '/tools/invoice-generator/'],
    ['/en/blog/?page=3&q=creator&topic=discovery&tag=AI&utm_source=email', '/blog/page/3/?q=creator&topic=discovery&tag=AI&utm_source=email'],
    ['/blog?page=1&q=creator', '/blog/?q=creator'],
    ['/index.html?ref=launch', '/?ref=launch'],
    ['/en/index.html?ref=launch', '/?ref=launch'],
    ['/about?ref=footer', '/about/?ref=footer'],
    ['/en/blog/creator-discovery', '/blog/creator-discovery/'],
  ];
  for (const [source, target] of cases) {
    const response = middleware(new Request(`https://www.quickkol.com${source}`));
    assert.equal(response.status, 308, source);
    assert.equal(response.headers.get('location'), `https://www.quickkol.com${target}`, source);
    assert.equal(middleware(new Request(response.headers.get('location'))).headers.get('location'), null, `redirect loop: ${source}`);
  }
  for (const path of ['/vi/', '/id/', '/hi/', '/bn/', '/terms.html', '/privacy.html', '/zh/privacy.html', '/blog/?page=0', '/blog/?page=-2', '/blog/?page=2.5', '/blog/?page=abc', '/blog/?q=creator']) {
    assert.equal(middleware(new Request(`https://www.quickkol.com${path}`)).headers.get('location'), null, path);
  }
});


test('Japanese article link labels preserve the already translated body wording', async () => {
  const { blogPosts } = await import('../src/blog-registry.js');
  const post = blogPosts.find(({ slug }) => slug === 'creator-portfolio-gap-analysis');
  const catalog = JSON.parse(await readFile('src/locales/ja.json', 'utf8'));
  const window = new Window();
  try {
    window.document.write(await readFile(`dist/ja/blog/${post.slug}/index.html`, 'utf8'));
    const body = window.document.querySelector('.blog-article-content').textContent.replace(/\s+/g, ' ');
    for (const [, pair] of post.sections) {
      for (const paragraph of catalog[pair[1]].split(/\n\n+/)) {
        assert.ok(body.includes(paragraph.replace(/\s+/g, ' ')), 'An inline link must not rewrite translated terminology');
      }
    }
  } finally {
    await window.happyDOM.close();
  }
});
