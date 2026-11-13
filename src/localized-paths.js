import { blogLanguages, localizedBlogArticles } from './blog-localization-manifest.js';

const translatedSlugs = new Set(localizedBlogArticles.map(({ slug }) => slug));

export function isBlogLanguage(language) {
  return blogLanguages.includes(language);
}

export function hasLocalizedBlogPath(path) {
  const base = routePath(path).split(/[?#]/)[0];
  const archive = base.match(/^\/blog(?:\/topic\/([a-z-]+))?(?:\/page\/(\d+))?\/?$/);
  if (archive) {
    const count = localizedBlogArticles.filter(({ topic }) => !archive[1] || topic === archive[1]).length;
    const page = Number(archive[2] || 1);
    return count > 0 && page >= 1 && page <= Math.ceil(count / 12);
  }
  return translatedSlugs.has(base.match(/^\/blog\/([^/]+)\/?$/)?.[1]);
}

export function routePath(path) {
  return path.replace(/^\/(?:en|zh|vi|id|hi|bn)(?=\/|$)/, '') || '/';
}

export function pathLocale(path) {
  const prefix = path.match(/^\/(zh|vi|id|hi|bn)(?=\/|$)/)?.[1];
  return prefix === 'zh' ? 'zh-CN' : prefix || 'en';
}

function hasLocalizedPage(path) {
  return routePath(path).split(/[?#]/)[0] === '/' || hasLocalizedBlogPath(path);
}

export function localizedPath(path, language) {
  const base = routePath(path);
  if (base.split(/[?#]/)[0] === '/tools/invoice-generator/') return base;
  if (isBlogLanguage(language)) return hasLocalizedPage(base) ? `/${language}${base}` : base;
  return language === 'zh-CN' ? `/zh${base}` : base;
}

export function languageSwitchPath(path, language) {
  const target = localizedPath(path, language);
  return isBlogLanguage(language) && !hasLocalizedPage(path) ? `/${language}/blog/` : target;
}

export function languageAlternates(path) {
  // The invoice editor has English content only; do not advertise a Chinese translation.
  if (routePath(path) === '/tools/invoice-generator/') return [];
  return [
    { language: 'zh-CN', path: localizedPath(path, 'zh-CN') },
    { language: 'en', path: localizedPath(path, 'en') },
    { language: 'x-default', path: localizedPath(path, 'en') },
    ...(hasLocalizedPage(path) ? blogLanguages.map((language) => ({ language, path: localizedPath(path, language) })) : []),
  ];
}
