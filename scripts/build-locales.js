import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { blogPosts, articleSourceKeys, coreSourceKeys } from './localization-data.js';
import { blogLanguages, localizedBlogArticles } from '../src/blog-localization-manifest.js';

export async function generateLocaleAssets() {
  const destination = new URL('../public/locales/', import.meta.url);
  await mkdir(destination, { recursive: true });
  const common = await coreSourceKeys();
  let articles = 0;
  for (const language of blogLanguages) {
    const catalog = JSON.parse(await readFile(new URL(`../src/locales/${language}.json`, import.meta.url), 'utf8'));
    const slugs = new Set(localizedBlogArticles.map(({ slug }) => slug));
    const posts = blogPosts.filter(({ slug }) => slugs.has(slug));
    const coreKeys = new Set([...common, ...Object.keys(catalog).filter((key) => /\{\d+\}/.test(key))]);
    for (const post of posts) {
      for (const pair of [post.title, post.summary, post.metaDescription]) coreKeys.add(pair[1]);
      for (const tag of post.tags || []) coreKeys.add(tag);
    }
    const core = Object.fromEntries([...coreKeys].filter((key) => catalog[key]).map((key) => [key, catalog[key]]));
    const directory = new URL(`${language}/articles/`, destination);
    await mkdir(directory, { recursive: true });
    const text = (pair) => catalog[pair[1]] || pair[1];
    const readingTimes = {};
    const search = {};
    for (const post of posts) {
      const body = [text(post.summary), text(post.answer), ...post.sections.flatMap(([heading, value]) => [text(heading), text(value)]), ...(post.deepDive || []).flatMap(({heading, body}) => [text(heading), text(body)]), ...(post.table?.rows || []).flatMap((row) => row.map(text))].join(' ');
      readingTimes[post.slug] = Math.max(1, Math.ceil(['ja', 'ko'].includes(language) ? body.length / 300 : body.split(/\s+/).length / 200));
      search[post.slug] = [text(post.title), text(post.summary), ...post.sections.flatMap(([heading, body]) => [text(heading), text(body)])].join(' ');
    }
    await writeFile(new URL(`${language}/core.json`, destination), JSON.stringify({ strings: core, readingTimes }));
    await writeFile(new URL(`${language}/search.json`, destination), JSON.stringify(search));
    for (const post of posts) {
      const details = Object.fromEntries([...articleSourceKeys(post)].filter((key) => !coreKeys.has(key) && catalog[key]).map((key) => [key, catalog[key]]));
      await writeFile(new URL(`${post.slug}.json`, directory), JSON.stringify(details));
      articles++;
    }
  }
  console.log(`Generated ${blogLanguages.length} core locale catalogs and ${articles} article catalogs.`);
}
