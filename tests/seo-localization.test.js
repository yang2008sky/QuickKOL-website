import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile, access } from 'node:fs/promises';
import { Window } from 'happy-dom';
import middleware from '../middleware.js';
import { localizedPath, routePath } from '../src/localized-paths.js';

test('translated HTML, language pairs, author identity and share images agree across the sitemap', async () => {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
  const urlSet = new Set(urls);
  assert.equal(urlSet.size, urls.length);
  for (const url of urls) {
    const path = new URL(url).pathname;
    const window = new Window();
    try {
      window.document.write(await readFile(`dist${path.endsWith('/') ? `${path}index.html` : path}`, 'utf8'));
      const document = window.document;
      const invoice = path === '/tools/invoice-generator/';
      const english = !path.startsWith('/zh/');
      assert.equal(document.documentElement.lang, english || invoice ? 'en' : 'zh-CN', path);
      const alternates = [...document.querySelectorAll('link[rel="alternate"][hreflang]')];
      assert.equal(alternates.length, invoice ? 0 : 3, path);
      for (const link of alternates) {
        assert.ok(urlSet.has(link.href), `${path}: missing alternate ${link.href}`);
        const language = link.hreflang === 'zh-CN' ? 'zh-CN' : 'en';
        assert.equal(new URL(link.href).pathname, localizedPath(path, language), path);
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
        const schema = JSON.parse(document.querySelector('script[data-blog-structured]').textContent);
        assert.equal(schema.mainEntityOfPage, url, path);
        assert.equal(schema.inLanguage, document.documentElement.lang, path);
        assert.equal(schema.author['@type'], 'Person', path);
        assert.equal(schema.author.name, 'Daniel Craig', path);
        assert.equal(schema.author.url, `https://www.quickkol.com${localizedPath('/about/', english ? 'en' : 'zh-CN')}#daniel-craig`, path);
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
});

test('legacy pagination and aliases redirect once while preserving filters and tracking', () => {
  const cases = [
    ['/blog/?page=2', '/blog/page/2/'],
    ['/en/', '/'],
    ['/en', '/'],
    ['/en/privacy.html?ref=old', '/privacy.html?ref=old'],
    ['/zh', '/zh/'],
    ['/zh/index.html?ref=launch', '/zh/?ref=launch'],
    ['/zh/blog/?page=2&q=creator', '/zh/blog/page/2/?q=creator'],
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
  for (const path of ['/terms.html', '/privacy.html', '/zh/privacy.html', '/blog/?page=0', '/blog/?page=-2', '/blog/?page=2.5', '/blog/?page=abc', '/blog/?q=creator']) {
    assert.equal(middleware(new Request(`https://www.quickkol.com${path}`)).headers.get('location'), null, path);
  }
});
