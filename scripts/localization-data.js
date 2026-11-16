import { readFile } from 'node:fs/promises';
import { blogPosts, blogTopics } from '../src/blog-registry.js';

export { blogPosts };
export function articleSourceKeys(value, keys = new Set()) {
  if (!value || typeof value !== 'object') return keys;
  if (Array.isArray(value.tags)) value.tags.filter((tag) => typeof tag === 'string' && /[A-Za-z]/.test(tag)).forEach((tag) => keys.add(tag));
  if (Array.isArray(value) && value.length === 2 && value.every((item) => typeof item === 'string')) {
    if (value[0] !== value[1] && /[A-Za-z]/.test(value[1]) && !/^https?:/.test(value[1])) keys.add(value[1]);
    return keys;
  }
  Object.values(value).forEach((child) => articleSourceKeys(child, keys));
  return keys;
}

export async function coreSourceKeys() {
  const english = JSON.parse(await readFile(new URL('../src/locales/en.json', import.meta.url), 'utf8'));
  const keys = new Set(Object.values(english));
  blogTopics.forEach(({ label, description }) => { keys.add(label[1]); keys.add(description[1]); });
  for (const text of ['THE QUICKKOL', 'BLOG.', 'QUICKKOL / INSIGHTS', 'QUICKKOL BLOG /', 'IN THIS ARTICLE', 'KEEP READING', 'Sources', 'CHECKLIST', 'PRACTICAL TOOL', 'Creator marketing insights & guides', 'Practical guides to creator discovery, data, outreach, campaign operations and AI marketing.', 'Showing {0} of {1} matching articles · {2} published.', 'PAGE {0} OF {1}', 'Page {0}', 'Page number (1 to {0})', 'min read', 'Article contents', 'Article library', 'Article pagination', 'Appearance', 'Primary navigation', 'Mobile navigation', 'AI Discovery', 'AI Agent', 'Top 5', 'YouTube · English-language audio reviews', 'AI deep selection and ranking', 'CREATOR INTELLIGENCE', 'QUICKKOL AI AGENT', 'Your Campaign', 'AI Agent Campaign brief', 'PROOF FROM THE FIELD', 'BEFORE YOU START', 'YOUR NEXT CREATOR CAMPAIGN', '© 2026 QuickKOL. All rights reserved.', 'AI for your next creator campaign.']) keys.add(text);
  const renderer = await readFile(new URL('../src/blog.js', import.meta.url), 'utf8');
  for (const match of renderer.matchAll(/(?:copy|localizeCopy)\(\s*'[^'\n]*'\s*,\s*'((?:[^'\\]|\\.)*)'\s*\)/g)) keys.add(match[1].replace(/\\'/g, "'").replace(/\\n/g, '\n'));
  for (const match of renderer.matchAll(/terms:\s*\[\s*'((?:[^'\\]|\\.)*)'\s*,\s*'((?:[^'\\]|\\.)*)'\s*\]/g)) keys.add(match[2].replace(/\\'/g, "'"));
  for (const match of renderer.matchAll(/en:\s*\[([^\]]*)\]/g)) for (const item of match[1].matchAll(/'((?:[^'\\]|\\.)*)'/g)) keys.add(item[1].replace(/\\'/g, "'"));
  return new Set([...keys].filter((key) => /[A-Za-z]/.test(key) && !/^https?:/.test(key)));
}
