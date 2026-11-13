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

test('pilot homepages ship translated content and keep navigation in the selected language', async () => {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  const english = await readFile('dist/index.html', 'utf8');
  for (const language of ['vi', 'id', 'hi', 'bn']) {
    const catalog = JSON.parse(await readFile(`src/locales/${language}.json`, 'utf8'));
    await withPage(`/${language}/`, (document) => {
      assert.equal(document.documentElement.lang, language);
      assert.ok(document.querySelector('h1').textContent.includes(catalog['Find the right creators,']));
      assert.ok(document.querySelector('h1').textContent.includes(catalog['reach them faster']));
      assert.ok(document.querySelector('.hero [data-start]').textContent.includes(catalog['Start free']));
      assert.equal(document.querySelector('.brand').href, `https://www.quickkol.com/${language}/#top`);
      assert.ok(document.querySelector(`.desktop-nav a[href="/${language}/blog/"]`));
      assert.equal(document.querySelector(`a[data-language-option="${language}"]`).getAttribute('href'), `/${language}/`);
      assert.equal(document.querySelector('a[data-language-option="en"]').getAttribute('href'), '/');
      assert.equal(document.querySelector('a[data-language-option="zh-CN"]').getAttribute('href'), '/zh/');
      assert.equal(document.querySelector('link[rel="canonical"]').href, `https://www.quickkol.com/${language}/`);
      assert.equal(document.querySelectorAll('link[hreflang]').length, 7);
      assert.notEqual(document.title, english.match(/<title>(.*?)<\/title>/)[1]);
      assert.doesNotMatch(document.querySelector('main').textContent, /[\u3400-\u9fff]/);
      for (const source of ['CREATOR INTELLIGENCE', 'Your Campaign', 'PROOF FROM THE FIELD', 'BEFORE YOU START', 'YOUR NEXT CREATOR CAMPAIGN', 'AI for your next creator campaign.']) {
        assert.ok(!document.querySelector('#app').textContent.includes(source), `${language}: untranslated ${source}`);
      }
      assert.ok(sitemap.includes(`<loc>https://www.quickkol.com/${language}/</loc>`));
    });
  }
});

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
      const pagination = document.querySelector('[data-blog-pagination]');
      assert.ok(pagination.querySelectorAll(':scope > .blog-page-buttons > *').length <= 9, 'Visible page navigation stays compact');
      assert.equal(pagination.querySelector('[aria-current="page"]').getAttribute('href'), path);
      for (const target of [1, page - 1, page + 1, pageCount]) {
        if (target < 1 || target > pageCount) continue;
        const targetPath = target === 1 ? '/blog/' : `/blog/page/${target}/`;
        assert.ok(pagination.querySelector(`a[href="${targetPath}"]`), `${path} -> ${targetPath}`);
      }
      const jump = pagination.querySelector('form');
      assert.equal(jump.getAttribute('action'), '/blog/');
      assert.equal(jump.querySelector('input[name="page"]').max, String(pageCount));
    });
  }
  assert.equal(seen.size, articles.length);
});

test('both blog libraries link to indexable topic archives and their older articles', async () => {
  const sitemap = await readFile('dist/sitemap.xml', 'utf8');
  for (const prefix of ['', '/zh']) {
    const blog = `${prefix}/blog/`;
    const topic = `${blog}topic/discovery/`;
    const older = `${topic}page/2/`;
    await withPage(blog, (document) => {
      assert.ok(document.querySelector(`nav.blog-topics a[href="${topic}"]`), topic);
      assert.ok(document.querySelector(`details.blog-page-directory a[href="${blog}page/20/"]`));
    });
    for (const path of [topic, older]) {
      await withPage(path, (document) => {
        assert.equal(document.querySelector('link[rel="canonical"]').href, `https://www.quickkol.com${path}`);
        assert.equal(document.querySelector('meta[name="robots"]').content, 'index,follow');
        assert.ok(document.querySelector(`a.blog-card[href^="${blog}"]`));
        assert.ok(sitemap.includes(`<loc>https://www.quickkol.com${path}</loc>`));
      });
    }
    await withPage(topic, (document) => {
      assert.ok(document.querySelector(`a[href="${blog}creator-selection-beyond-followers/"]`));
      assert.ok(document.querySelector(`a[href="${older}"]`));
    });
    await withPage(`${blog}creator-selection-beyond-followers/`, (document) => {
      assert.ok(document.querySelector(`.blog-related a[href="${topic}"]`));
    });
  }
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

test('Chinese homepage ships all four capability explanations without JavaScript', async () => {
  await withPage('/zh/', (document) => {
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
