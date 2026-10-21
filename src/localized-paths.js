export function routePath(path) {
  return path.replace(/^\/en(?=\/|$)/, '') || '/';
}

export function pathLocale(path) {
  return /^\/en(?:\/|$)/.test(path) ? 'en' : 'zh-CN';
}

export function localizedPath(path, language) {
  const base = routePath(path);
  if (base.split(/[?#]/)[0] === '/tools/invoice-generator/') return base;
  return language === 'en' ? `/en${base}` : base;
}

export function languageAlternates(path) {
  // The invoice editor has English content only; do not advertise a Chinese translation.
  if (routePath(path) === '/tools/invoice-generator/') return [];
  return [
    { language: 'zh-CN', path: localizedPath(path, 'zh-CN') },
    { language: 'en', path: localizedPath(path, 'en') },
    { language: 'x-default', path: localizedPath(path, 'zh-CN') },
  ];
}
