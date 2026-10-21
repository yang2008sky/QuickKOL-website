import assert from 'node:assert/strict';
import { readFile, writeFile, access, copyFile, mkdir } from 'node:fs/promises';
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { Window } from 'happy-dom';
import { semrushBlogPosts as posts } from '../src/blog-semrush-posts.js';
import { blogPosts as base, blogTopics } from '../src/blog-posts.js';
import { additionalBlogPosts } from '../src/blog-additional-posts.js';
import { seriesBlogPosts } from '../src/blog-series-posts.js';
import { expansionBlogPosts } from '../src/blog-expansion-posts.js';
import { growthBlogPosts } from '../src/blog-growth-posts.js';
import { platformBlogPosts } from '../src/blog-platform-posts.js';
import { microBlogPosts } from '../src/blog-micro-posts.js';
import { programBlogPosts } from '../src/blog-program-posts.js';
import { toolBlogPosts } from '../src/blog-tool-posts.js';

const all=[...posts,...base,...additionalBlogPosts,...seriesBlogPosts,...expansionBlogPosts,...growthBlogPosts,...platformBlogPosts,...microBlogPosts,...programBlogPosts,...toolBlogPosts];
assert.equal(new Set(all.map(p=>p.slug)).size,all.length,'Duplicate slug');
assert.equal(posts.length,30);
const directory=new URL('../outputs/semrush-2026-10-21/',import.meta.url);
const manifest=JSON.parse(await readFile(new URL('cover-manifest.json',directory),'utf8'));
const family = value => value==='data-abstract' ? 'editorial-collage' : value;
for(let i=2;i<manifest.length;i++) assert.ok(!(family(manifest[i].family)===family(manifest[i-1].family)&&family(manifest[i].family)===family(manifest[i-2].family)),'Three consecutive cover families');
for(let i=0;i<30;i+=12) assert.ok(new Set(manifest.slice(i,i+12).map(x=>family(x.family))).size>=3,'Cover page needs three families');
const report=[];
for(const post of posts){
 assert.ok(blogTopics.some(t=>t.key===post.topic),`${post.number}: unknown topic`);
 assert.ok(post.sources.length>0,`${post.number}: missing external sources`);
 assert.ok(post.table&&post.tool&&post.deepDive&&post.checklist,`${post.number}: incomplete article`);
 const words=[post.answer[1],...post.sections.map(s=>s[1][1])].join(' ').split(/\s+/).length;
 assert.ok(words>=1000&&words<=2000,`${post.number}: prose word count ${words}`);
 const paragraphs=post.sections.flatMap(s=>s[1][1].split(/\n\n+/));
 assert.equal(new Set(paragraphs).size,paragraphs.length,`${post.number}: repeated paragraph`);
 const ids=new Set(post.sources.map(s=>s.id));
 for(const [,body,citations=[]] of post.sections){
  assert.ok(body[0]&&body[1],`${post.number}: missing translation`);
  for(const id of citations) assert.ok(ids.has(id),`${post.number}: missing citation ${id}`);
 }
 for(const source of post.sources) assert.equal(new URL(source.url).protocol,'https:');
 const cover=await sharp(fileURLToPath(new URL(`../public/assets/blog/${post.cover}`,import.meta.url))).metadata();
 assert.equal(cover.width,1672);assert.equal(cover.height,941);assert.equal(cover.space,'srgb');assert.equal(cover.format,'jpeg');
 const locales=[];
 for(const [prefix,language,index] of [['','zh-CN',0],['/en','en',1]]){
  const path=`${prefix}/blog/${post.slug}/`;
  const window=new Window();
  try {
   window.document.write(await readFile(`dist${path}index.html`,'utf8'));
   const d=window.document;
   assert.equal(d.documentElement.lang,language,path);
   assert.equal(d.querySelector('h1')?.textContent,post.title[index],path);
   assert.equal(d.querySelector('link[rel="canonical"]').href,`https://www.quickkol.com${path}`,path);
   assert.equal(d.querySelector('meta[property="og:image"]').content,`https://www.quickkol.com/assets/blog/${post.cover}`,path);
   const bodyLinks=[...d.querySelectorAll('.blog-article-content section:not(.blog-sources) p a')];
   const internals=bodyLinks.filter(a=>a.getAttribute('href').startsWith('/')&&a.getAttribute('href').includes('/blog/'));
   const externals=bodyLinks.filter(a=>/^https:/.test(a.getAttribute('href')));
   assert.ok(internals.length>=2,`${path}: only ${internals.length} contextual blog links`);
   assert.ok(externals.length>=1,`${path}: no contextual external citation`);
   for(const a of d.querySelectorAll('a[href^="/"]')){
    const target=new URL(a.getAttribute('href'),'https://www.quickkol.com');
    if(!target.pathname.includes('/blog/'))continue;
    const file=`dist${target.pathname}${target.pathname.endsWith('/')?'index.html':''}`;
    await access(file);
    if(target.hash){
     const targetWindow=new Window();
     try{ targetWindow.document.write(await readFile(file,'utf8'));assert.ok(targetWindow.document.getElementById(target.hash.slice(1)),`${path}: broken fragment ${a.getAttribute('href')}`); }
     finally{await targetWindow.happyDOM.close();}
    }
    if(prefix&&a.closest('main'))assert.ok(target.pathname.startsWith('/en/'),`${path}: unlocalized internal link`);
   }
   for(const image of d.querySelectorAll('.blog-article-content img')){
    assert.ok(image.alt,path);await access(`dist${image.getAttribute('src')}`);
   }
   assert.equal(d.querySelectorAll('.blog-inline-figure').length,post.figures.length,path);
   assert.equal(d.querySelectorAll('.blog-data-section tbody tr').length,post.rows.length,path);
   const schema=JSON.parse(d.querySelector('script[data-blog-structured]').textContent);
   assert.equal(schema.citation.length,post.sources.length,path);
   locales.push({language,contextualInternalLinks:internals.length,contextualExternalCitations:externals.length,figures:post.figures.length});
  } finally {await window.happyDOM.close();}
 }
 report.push({number:post.number,keyword:post.primaryKeyword,slug:post.slug,angle:post.title[1],englishProseWords:words,chineseProseCharacters:[post.answer[0],...post.sections.map(s=>s[1][0])].join('').length,sources:post.sources.map(s=>s.url),cover:{file:post.cover,width:cover.width,height:cover.height,space:cover.space},locales});
}
await writeFile(new URL('content-audit.json',directory),JSON.stringify({checkedAt:new Date().toISOString(),articles:report.length,localizedPages:report.length*2,englishProseRange:[Math.min(...report.map(x=>x.englishProseWords)),Math.max(...report.map(x=>x.englishProseWords))],checks:'Unique slugs, body length, bilingual pairs, topics, citations, contextual links and targets, localization, static metadata, image dimensions, table rows, inline figures and cover family rhythm',limitations:'Source facts received editorial review; this structural audit does not independently validate vendor claims or external-page availability.',posts:report},null,2)+'\n');
const markdown=`# QuickKOL：30 个关键词 / 30 篇独立双语文章\n\n本地预览：http://127.0.0.1:4173/en/blog/\n\n每篇保留独立角度；以下为本批次索引，线上 URL 在部署后才生效。\n\n| # | 关键词 | 文章角度 | 英文正文词数 | 本地预览 |\n|---|---|---|---:|---|\n${report.map(p=>`| ${p.number} | ${p.keyword} | ${p.angle} | ${p.englishProseWords} | [English](http://127.0.0.1:4173/en/blog/${p.slug}/) / [中文](http://127.0.0.1:4173/blog/${p.slug}/) |`).join('\n')}\n\n## 使用与边界\n\n- 英文正文达到内容 skill 的 1,000–2,000 词目标；正文计数不含导航、表格和 CTA。\n- 数据按来源、时间与口径说明；预算、访问和订单算例均为明确标注的假设，不是客户案例。\n- 具名名单是内容研究入口，不是当前粉丝或转化排名。商业意愿、报价和私有受众需另外确认。\n- 30 张独立封面：9 张内置 imagegen 场景图，21 张确定性排版与数据图，全部导出为 1672 × 941 sRGB JPEG。\n- 2 个可交互互动率计算器，4 篇配有正文解释图，所有文章都有情境内链、外链、表格与执行清单。\n- 已完成本地接入与检查，未替本批内容执行 Git push 或线上部署。\n`;
await writeFile(new URL('keyword-map.md',directory),markdown);
await mkdir(new URL('articles/',directory),{recursive:true});
for(const post of posts)for(const [i,language,prefix] of [[0,'zh-CN',''],[1,'en','/en']]){
 const pair=value=>value[i];
 const sourceLinks=post.sources.map(source=>`- [${pair(source.label)}](${source.url})`).join('\n');
 const table=[post.table.headers,...post.table.rows].map((row,index)=>`${index===1?'|'+post.table.headers.map(()=>'---').join('|')+'|\n':''}| ${row.map(pair).join(' | ')} |`).join('\n');
 const sections=post.sections.map(([heading,body,citations=[]])=>`## ${pair(heading)}\n\n${pair(body)}${citations.length?'\n\n'+citations.map(id=>{const source=post.sources.find(s=>s.id===id);return `[${pair(source.label)}](${source.url})`;}).join(' · '):''}`).join('\n\n');
 const checks=post.checklist.map(value=>`- ${pair(value)}`).join('\n');
 const content=`# ${pair(post.title)}\n\nKeyword: ${post.primaryKeyword}\n\nDaniel Craig · ${post.date}\n\n${pair(post.summary)}\n\n[${i?'Local article with interactive elements':'含互动组件的本地文章'}](http://127.0.0.1:4173${prefix}/blog/${post.slug}/)\n\n${pair(post.answer)}\n\n${sections}\n\n## ${pair(post.table.title)}\n\n${pair(post.table.note)}\n\n${table}\n\n## ${pair(post.tool.title)}\n\n${pair(post.tool.intro)}\n\n${checks}\n\n## ${i?'Research date and limitations':'研究日期与边界'}\n\n${pair(post.researchNote)}\n\n## ${i?'Sources':'资料来源'}\n\n${sourceLinks}\n`;
 await writeFile(new URL(`articles/${String(post.number).padStart(2,'0')}-${post.slug}.${language}.md`,directory),content);
}
const escape=value=>value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
const contact=`<!doctype html><html lang="en"><meta charset="utf-8"><title>QuickKOL: 30 cover review</title><style>*{box-sizing:border-box}body{margin:0;padding:32px;background:#f3eee3;color:#18263e;font:16px Arial}h1{font-size:30px;margin:0 0 10px}p{margin:0 0 28px}main{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:24px}figure{margin:0}img{width:100%;display:block;border-radius:8px}figcaption{padding:9px 0 0;font-size:14px;line-height:1.5}small{color:#5b6679}@media(max-width:700px){main{grid-template-columns:1fr}}</style><h1>QuickKOL / 30 independent editorial covers</h1><p>9 generated scenes + 21 typography and data concepts · 1672 × 941 sRGB JPEG</p><main>${posts.map(p=>`<figure><a href="/en/blog/${p.slug}/"><img src="/assets/blog/${p.cover}" alt="${escape(p.coverAlt[1])}"></a><figcaption><b>${p.number}. ${escape(p.primaryKeyword)}</b><br><small>${escape(p.title[1])}</small></figcaption></figure>`).join('')}</main></html>`;
await writeFile(new URL('cover-review.html',directory),contact);
await copyFile(new URL('cover-review.html',directory),'dist/cover-review.html');
console.log(JSON.stringify({articles:report.length,localizedPages:report.length*2,minEnglishWords:Math.min(...report.map(p=>p.englishProseWords)),maxEnglishWords:Math.max(...report.map(p=>p.englishProseWords)),status:'passed'}));
