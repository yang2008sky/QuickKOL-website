import assert from 'node:assert/strict';
import { writeFile } from 'node:fs/promises';
import { semrushBatchFourPosts as posts } from '../src/blog-semrush-b4-posts.js';
const results=[];
for(const post of posts)for(const prefix of ['', '/zh']){
 const path=`${prefix}/blog/${post.slug}/`;
 const response=await fetch(`http://127.0.0.1:4174${path}`);
 assert.equal(response.status,200,path);
 const html=await response.text();assert.ok(html.includes(post.title[prefix?0:1]),path);
 results.push({path,status:response.status});
}
for(const file of ['influencer-statement-of-work.en.md','influencer-statement-of-work.zh-CN.md','instagram-follower-range-workbook.csv','instagram-follower-range-readme.md']){
 const path=`/downloads/${file}`;const response=await fetch(`http://127.0.0.1:4174${path}`);assert.equal(response.status,200,path);assert.ok((await response.text()).length>50,path);results.push({path,status:response.status});
}
await writeFile('outputs/semrush-batch4-2026-10-23/local-http-checks.json',JSON.stringify({origin:'http://127.0.0.1:4174',checkedAt:new Date().toISOString(),results},null,2)+'\n');
console.log(`Passed ${results.length} local HTTP checks. Not a browser visual test or production verification.`);
