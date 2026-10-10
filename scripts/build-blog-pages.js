import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { blogPosts as baseBlogPosts } from '../src/blog-posts.js';
import { additionalBlogPosts } from '../src/blog-additional-posts.js';
import { seriesBlogPosts } from '../src/blog-series-posts.js';
import { expansionBlogPosts } from '../src/blog-expansion-posts.js';
import { growthBlogPosts } from '../src/blog-growth-posts.js';
import { renderSeoTags, siteOrigin } from '../src/seo.js';
import { createPrerenderer } from './prerender.js';
import { BLOG_PAGE_SIZE, blogPagePath } from '../src/blog-pagination.js';

const blogPosts = [...growthBlogPosts, ...expansionBlogPosts, ...seriesBlogPosts, ...additionalBlogPosts, ...baseBlogPosts];

// Emit real HTML entry points so static hosts do not need SPA fallback rules.
const html = await readFile(new URL('../dist/index.html', import.meta.url), 'utf8');
const prerender = await createPrerenderer();
const escapeHtml = (value) => value.replace(/[&<>"']/g, (char) => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'})[char]);
function pageHtml(source, page) {
  return source
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*("\s*\/?>)/, `$1${escapeHtml(page.description)}$2`)
    .replace(/\s*<link rel="canonical"[^>]*>/g, '')
    .replace(/\s*<meta (?:property="og:[^"]*"|name="twitter:[^"]*")[^>]*>/g, '')
    .replace('  </head>', `${renderSeoTags(page)}\n  </head>`);
}
const pages = [
  { path: 'tools/invoice-generator', title: 'Invoice Generator | QuickKOL', description: 'Create, customize, and export professional invoices in minutes with QuickKOL’s free Invoice Generator.' },
  { path: 'tools/influencer-campaign-cost-calculator', title: 'Influencer Campaign Cost Calculator | QuickKOL', description: 'Estimate your influencer campaign budget, or plan how many creators your budget can cover. Compare creator mix, expected views and campaign CPM.' },
  { path: 'tools/creator-rate-calculator', title: 'QuickKOL — 达人合作价格计算器', description: '结合平均播放量、平台、互动率、受众质量和内容质量，估算达人的单条内容合作价格区间。' },
  { path: 'faq', title: 'QuickKOL FAQ', description: '关于达人发现、AI Agent、套餐与积分计费，在这里找到答案。' },
  { path: 'contact', title: '联系 QuickKOL — 产品咨询与客户支持', description: '联系 QuickKOL 团队，咨询达人营销功能与套餐，获取账户、搜索、Campaign 工作流、订阅和积分账单的帮助。' },
  { path: 'about', title: '关于 QuickKOL — 从达人营销实战，到 AI 工作流', description: '了解 QuickKOL 的故事：从人工寻找海外达人与传统 SaaS 达人库，到 AI 实时搜索、内容画像、个性化邮件触达和 Campaign 自动化。' },
  { path: 'pricing', title: 'QuickKOL 定价 — 为下一次达人合作，选择合适的计划', description: '比较 QuickKOL Launch、Performance 和 Max 的月付与年付价格，查看每月用量与套餐权益。所有价格均以美元 USD 显示。' },
  { path: 'blog', title: 'QuickKOL Blog — 达人营销洞察与实战指南', description: '探索达人发现、数据洞察、个性化外联与 AI 营销的实战指南。' },
  ...Array.from({ length: Math.ceil(blogPosts.length / BLOG_PAGE_SIZE) - 1 }, (_, index) => ({
    path: blogPagePath(index + 2).slice(1, -1),
    title: 'QuickKOL Blog — 达人营销洞察与实战指南', description: '探索达人发现、数据洞察、个性化外联与 AI 营销的实战指南。',
  })),
  ...blogPosts.map((post) => ({ path: `blog/${post.slug}`, title: `${post.title[0]} | QuickKOL Blog`, description: post.metaDescription[0], type: 'article', ...(!post.cover.endsWith('.svg') ? { image: `/assets/blog/${post.cover}`, imageAlt: post.coverAlt[0] } : {}) })),
];
for (const page of pages) {
  const dir = new URL(`../dist/${page.path}/`, import.meta.url);
  await mkdir(dir, { recursive: true });
  await writeFile(new URL('index.html', dir), await prerender(pageHtml(html, page), `/${page.path}/`));
}
for (const filename of ['index.html', 'terms.html', 'privacy.html']) {
  const file = new URL(`../dist/${filename}`, import.meta.url);
  const source = await readFile(file, 'utf8');
  const path = filename === 'index.html' ? '/' : `/${filename}`;
  await writeFile(file, await prerender(pageHtml(source, {
    path: filename === 'index.html' ? '/' : `/${filename}`,
    title: source.match(/<title>([^<]*)<\/title>/)[1],
    description: source.match(/<meta name="description" content="([^"]*)"/)[1],
  }), path));
}
console.log(`Generated ${pages.length} FAQ, contact, about, pricing and blog entry points.`);

const sitemapPaths = ['/', '/terms.html', '/privacy.html', ...pages.map((page) => `/${page.path}/`)];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths.map((path) => `  <url><loc>${escapeHtml(new URL(path, siteOrigin).href)}</loc></url>`).join('\n')}
</urlset>
`;
const robots = `User-agent: *
Allow: /

Sitemap: ${siteOrigin}/sitemap.xml
`;
for (const directory of ['public', 'dist']) {
  await writeFile(new URL(`../${directory}/sitemap.xml`, import.meta.url), sitemap);
  await writeFile(new URL(`../${directory}/robots.txt`, import.meta.url), robots);
}
console.log(`Generated sitemap.xml with ${sitemapPaths.length} URLs and robots.txt.`);
