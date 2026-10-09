export const siteOrigin = 'https://www.quickkol.com';

const shareImage = '/assets/blog/workflow.jpg';
const shareImageAlt = 'A creator and production team making product content together';

export function canonicalUrl(path) {
  const url = new URL(path, siteOrigin);
  let pathname = url.pathname.replace(/\/index\.html$/, '/');
  if (!pathname.endsWith('/') && !pathname.split('/').pop().includes('.')) pathname += '/';
  return new URL(pathname, siteOrigin).href;
}

export function socialMetadata({ path, title, description, image = shareImage, imageAlt = shareImageAlt, type = 'website' }) {
  return {
    'og:type': type,
    'og:site_name': 'QuickKOL',
    'og:title': title,
    'og:description': description,
    'og:url': canonicalUrl(path),
    'og:image': new URL(image, siteOrigin).href,
    'og:image:alt': imageAlt,
    'twitter:card': 'summary_large_image',
    'twitter:title': title,
    'twitter:description': description,
    'twitter:image': new URL(image, siteOrigin).href,
    'twitter:image:alt': imageAlt,
  };
}

export function renderSeoTags(page) {
  const escape = (value) => value.replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
  return `    <link rel="canonical" href="${escape(canonicalUrl(page.path))}" />\n` +
    Object.entries(socialMetadata(page)).map(([key, value]) =>
      `    <meta ${key.startsWith('og:') ? 'property' : 'name'}="${key}" content="${escape(value)}" />`
    ).join('\n');
}

export function pageStructuredData({ path, title, description, language, questions = [], dateModified }) {
  const url = canonicalUrl(path);
  const organization = `${siteOrigin}/#organization`;
  const website = `${siteOrigin}/#website`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': organization, name: 'QuickKOL', url: siteOrigin,
        logo: `${siteOrigin}/assets/quickkol-logo.svg`, email: 'support@quickkol.com' },
      { '@type': 'WebSite', '@id': website, name: 'QuickKOL', url: siteOrigin,
        publisher: { '@id': organization } },
      { '@type': questions.length ? 'FAQPage' : path.startsWith('/about') ? 'AboutPage' : path.startsWith('/contact') ? 'ContactPage' : 'WebPage',
        '@id': `${url}#webpage`, url, name: title, description, inLanguage: language,
        isPartOf: { '@id': website }, author: { '@id': organization }, publisher: { '@id': organization },
        ...(dateModified ? { dateModified } : {}),
        ...(questions.length ? { mainEntity: questions.map(({ question, answer }) => ({
          '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
        })) } : {}),
      },
    ],
  };
}

export function initSeo() {
  const observer = new MutationObserver(sync);
  function sync() {
    observer.disconnect();
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.append(canonical);
    }
    const url = canonicalUrl(window.location.pathname);
    if (canonical.href !== url) canonical.href = url;
    const cover = document.querySelector('.blog-article-cover');
    const useCover = cover && !cover.getAttribute('src').endsWith('.svg');
    const metadata = socialMetadata({
      path: window.location.pathname,
      title: document.title,
      description: document.querySelector('meta[name="description"]').content,
      image: useCover ? cover.getAttribute('src') : shareImage,
      imageAlt: useCover ? cover.alt : shareImageAlt,
      type: cover ? 'article' : 'website',
    });
    for (const [key, value] of Object.entries(metadata)) {
      const attribute = key.startsWith('og:') ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, key);
        document.head.append(meta);
      }
      if (meta.content !== value) meta.content = value;
    }
    const text = (element) => element.textContent.replace(/\s+/g, ' ').trim();
    const questions = [
      ...[...document.querySelectorAll('[data-faq-trigger]')].map((question) => ({
        question: text(question), answer: text(document.getElementById(question.getAttribute('aria-controls'))),
      })),
      ...[...document.querySelectorAll('.faq-page-list details')].map((item) => ({
        question: text(item.querySelector('summary span:last-of-type')), answer: text(item.querySelector('.faq-page-answer')),
      })),
    ];
    let structured = document.querySelector('script[data-site-structured]');
    if (!structured) {
      structured = document.createElement('script');
      structured.type = 'application/ld+json';
      structured.dataset.siteStructured = '';
      document.head.append(structured);
    }
    const data = JSON.stringify(pageStructuredData({
      path: window.location.pathname, title: document.title, description: metadata['og:description'],
      language: document.documentElement.lang, questions,
      dateModified: document.querySelector('.legal-hero time')?.getAttribute('datetime'),
    })).replace(/</g, '\\u003c');
    if (structured.textContent !== data) structured.textContent = data;
    observer.observe(document.head, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: ['content'] });
  }
  sync();
  window.addEventListener('quickkol:locale', () => queueMicrotask(sync));
}
