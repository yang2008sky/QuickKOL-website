import { readFile, writeFile, copyFile, mkdir } from 'node:fs/promises';
import sharp from 'sharp';
const out='outputs/semrush-batch3-2026-10-23';
const directory='public/assets/blog';
await mkdir(`${out}/assets/blog`,{recursive:true});
const plan=JSON.parse(await readFile(`${out}/editorial-plan.json`,'utf8'));
plan[2].family='type-background';
const generatedRoot='/Users/daniel/.codex/generated_images/01a15e07-0aa8-7ce0-bd2a-28c8cb4ae524/';
const scenes={
6:['exec-d8704bbc-577c-4647-9bc0-8eec0caa5877.png','创作者在明亮出租屋整理靠垫，旁边有手机支架','A creator styles cushions in a bright rental room beside a phone tripod'],
7:['exec-88322b58-22a9-48b6-af43-2c685557d5f2.png','曼谷公园晨光下成年跑者准备起跑','Adult runners prepare in a Bangkok park at dawn'],
9:['exec-eb32075a-99e2-469b-887d-6e1a6438f919.png','美食创作者在明亮餐厅用手机拍摄一盘食物','A food creator records a plated dish in a bright restaurant'],
14:['exec-4f3da981-df83-4e06-92d4-ca67f8828df0.png','教练在私人训练空间为拍摄摆放地面标记','A coach positions a floor marker in a private training space'],
16:['exec-dc87666c-bad1-4f3e-8591-53e160aadcc2.png','海边摆放冲浪板、相机和蓝色防晒衣','Surfboards, a camera and a cobalt rashguard beside the beach'],
19:['exec-790bc999-98e4-47b1-bfaa-5eededa5fe53.png','金毛犬在主人和低位手机支架旁放松休息','A golden retriever rests beside its owner and a low phone tripod'],
23:['exec-47f2c789-eec4-485c-8bb6-e498bd27a68d.png','两位美食内容工作者在雨天西雅图市场观察食材','Two food storytellers scout produce in a rainy Seattle market'],
25:['exec-c1bf2ec7-d659-41d3-ad6e-4c75dd537f88.png','小型健身创作者坐在训练凳上检查手机拍摄','A small fitness creator reviews a phone recording from a gym bench'],
28:['exec-64859db5-afeb-427e-a241-00fb5e4ccc8b.png','明亮工作台上摆放多份独立包装的达人试点套件','Separate creator-pilot kits arranged on a bright packing table'],
};
const esc=x=>x.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const wrap=(text,max=19)=>{const lines=[];let line='';for(const word of text.split(' ')){if((line+' '+word).trim().length>max&&line){lines.push(line);line=word;}else line=(line+' '+word).trim();}lines.push(line);return lines;};
const palettes=[['#f4f0e7','#182a74','#ff484a'],['#153dc7','#fff8e9','#ff8c7d'],['#ff6b5d','#171d32','#fff4d8'],['#151b2e','#fff6df','#5276ff']];
const concepts={1:['ASSET','REACH','ORDER'],4:['MAKE','PUBLISH','LICENSE'],10:['SIGNAL','REVIEW','DECIDE'],12:['CREATE','APPROVE','DISTRIBUTE'],15:['MONTHLY','ANNUAL','USAGE'],18:['FORECAST','PILOT','REVIEW'],21:['START','END','NET'],24:['ASSET','SCOPE','EXPIRY'],27:['MOMENT','CONTEXT','FIT'],30:['OBSERVE','EXPLAIN','ACT']};
const manifest=[];const alts={};
for(const item of plan){
 const nn=String(item.number).padStart(2,'0');const file=`semrush-b3-${nn}.jpg`;const scene=scenes[item.number];
 if(scene){await sharp(generatedRoot+scene[0]).resize(1672,941,{fit:'cover'}).toColourspace('srgb').jpeg({quality:85}).toFile(`${directory}/${file}`);alts[item.number]=scene.slice(1);}
 else{
  const [bg,ink,accent]=palettes[(item.number-1)%4];const lines=wrap(item.headline,item.family==='editorial-collage'?14:20);const size=item.family==='editorial-collage'?105:110;const start=380-(lines.length-2)*45;
  const data=item.family==='editorial-collage';
  const labels=concepts[item.number]||['DEFINE','TEST','REVIEW'];
  const flow=labels.map((label,i)=>`<rect x="${1040+i*32}" y="${290+i*160}" width="365" height="115" rx="${item.number%3===0?55:8}" fill="${i%2?accent:ink}"/><text x="${1222+i*32}" y="${358+i*160}" text-anchor="middle" font-family="Arial,sans-serif" font-size="31" font-weight="700" fill="${i%2?ink:bg}">${label}</text>${i<2?`<path d="M${1230+i*32} ${415+i*160}v30" stroke="${ink}" stroke-width="7"/>`:''}`).join('');
  const motif=data?flow:`<circle cx="1410" cy="640" r="310" fill="${accent}"/><path d="M1150 80L1510 440M1220 80L1580 440" stroke="${ink}" stroke-width="24" opacity=".25"/>`;
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1672" height="941" viewBox="0 0 1672 941"><rect width="1672" height="941" fill="${bg}"/>${motif}<path d="M100 130H300" stroke="${accent}" stroke-width="18"/><text x="100" y="205" font-family="Arial,sans-serif" font-size="25" font-weight="700" letter-spacing="5" fill="${ink}">QUICKKOL / EDITORIAL</text>${lines.map((line,i)=>`<text x="95" y="${start+i*(size+12)}" font-family="Arial,sans-serif" font-size="${size}" font-weight="900" letter-spacing="-3" fill="${ink}">${esc(line)}</text>`).join('')}<text x="100" y="852" font-family="Arial,sans-serif" font-size="25" letter-spacing="3" fill="${ink}">CREATOR STRATEGY · ${nn}</text></svg>`;
  await writeFile(`${directory}/semrush-b3-${nn}.svg`,svg);await sharp(Buffer.from(svg)).toColourspace('srgb').jpeg({quality:85}).toFile(`${directory}/${file}`);await copyFile(`${directory}/semrush-b3-${nn}.svg`,`${out}/assets/blog/semrush-b3-${nn}.svg`);alts[item.number]=[`${item.headline} 主题的编辑排版图`,`Editorial typography: ${item.headline}`];
 }
 await copyFile(`${directory}/${file}`,`${out}/assets/blog/${file}`);
 manifest.push({...item,file,source:scene?generatedRoot+scene[0]:`public/assets/blog/semrush-b3-${nn}.svg`,method:scene?'built-in imagegen':'deterministic SVG',alt:alts[item.number]});
}
const diagrams=[
 ['evidence','EVIDENCE CHAIN',['ASSET ID','METRIC + WINDOW','SOURCE RECORD','ORDER ID'],'Association is not proof of incremental sales.'],
 ['counteroffer','COUNTEROFFER SCOPE',['PRODUCTION','PUBLICATION','LICENSE','EXPENSES'],'Change a priced scope field before changing the total.'],
 ['fraud','FLAG VALIDATION',['KNOWN CASE','TOOL OUTPUT','HUMAN REVIEW','DECISION'],'Unknown remains unknown; a flag is not proof.'],
 ['net','NET FOLLOWER CHANGE',['START: 10,000','END: 10,300','NET: +300','GROSS: UNKNOWN'],'Hypothetical counts. Gross follows and unfollows cannot be recovered from net alone.'],
 ['rights','TWO PERMISSION LAYERS',['LICENSE SCHEDULE','ASSET + USE','PLATFORM ACCESS','EXPIRY OWNER'],'An enabled ad account does not define the copyright license.'],
 ];
for(const [name,title,steps,note] of diagrams){const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="600" viewBox="0 0 1400 600"><rect width="1400" height="600" fill="#f6f1e7"/><text x="65" y="110" font-family="Arial,sans-serif" font-size="44" font-weight="800" fill="#142b83">${esc(title)}</text>${steps.map((step,i)=>`<rect x="${65+i*326}" y="210" width="292" height="145" rx="14" fill="${i%2?'#ff6b5d':'#1f48c5'}"/><text x="${211+i*326}" y="291" text-anchor="middle" font-family="Arial,sans-serif" font-size="24" font-weight="700" fill="#fff">${esc(step)}</text>${i<3?`<path d="M${368+i*326} 281h17" stroke="#182a74" stroke-width="7"/>`:''}`).join('')}<text x="65" y="460" font-family="Arial,sans-serif" font-size="24" fill="#222c46">${esc(note)}</text><text x="65" y="540" font-family="Arial,sans-serif" font-size="18" fill="#555">QuickKOL · Editorial framework / not observed results</text></svg>`;const file=`semrush-b3-inline-${name}.svg`;await writeFile(`${directory}/${file}`,svg);await copyFile(`${directory}/${file}`,`${out}/assets/blog/${file}`);}
await writeFile(`${out}/cover-manifest.json`,JSON.stringify(manifest,null,2)+'\n');
await writeFile('src/semrush-b3-visuals.js',`export const batchThreeCoverAlts = ${JSON.stringify(alts,null,2)};\n`);
await writeFile(`${out}/image-prompts.json`,JSON.stringify(manifest.filter(x=>scenes[x.number]).map(x=>({number:x.number,concept:x.headline,family:x.family,source:x.source,method:x.method,constraints:'Independent wide editorial scene; cream cobalt coral; no logos, words, watermark, recognizable people or fake UI. AI illustration, not named creators.'})),null,2)+'\n');
const thumbs=await Promise.all(manifest.map(async(item,i)=>({input:await sharp(`${directory}/${item.file}`).resize(418,235).png().toBuffer(),left:(i%5)*418,top:Math.floor(i/5)*235})));
await sharp({create:{width:2090,height:1410,channels:3,background:'#eee'}}).composite(thumbs).png().toFile(`${out}/cover-contact-sheet.png`);
await writeFile(`${out}/cover-review.html`,`<!doctype html><meta charset="utf-8"><title>QuickKOL batch 3 cover review</title><style>body{background:#eee;font:16px sans-serif;margin:32px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}img{width:100%}figure{margin:0;background:white}figcaption{padding:14px}</style><h1>30 covers / October 23, 2026</h1><div class="grid">${manifest.map(x=>`<figure><img src="assets/blog/${x.file}" alt="${esc(x.alt[1])}"><figcaption>${x.number}. ${esc(x.keyword)}<br>${x.family}</figcaption></figure>`).join('')}</div>`);
console.log('Created 30 covers and 5 inline frameworks.');
