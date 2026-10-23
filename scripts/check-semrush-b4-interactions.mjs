import assert from 'node:assert/strict';
import { readFile, writeFile } from 'node:fs/promises';
import { build } from 'esbuild';
import { Window } from 'happy-dom';
const bundle=await build({entryPoints:['src/blog.js'],bundle:true,write:false,format:'iife',globalName:'BlogUnderTest',loader:{'.css':'empty'}});
const results=[];
for(const [locale,prefix] of [['en',''],['zh-CN','/zh']]){
 const path=`${prefix}/blog/instagram-engagement-calculator-interaction-goal/`;
 const window=new Window({url:`http://127.0.0.1:4174${path}`,settings:{enableJavaScriptEvaluation:true,disableJavaScriptFileLoading:true,disableCSSFileLoading:true}});
 try{
  window.document.write(await readFile(`dist${path}index.html`,'utf8'));
  window.eval(bundle.outputFiles[0].text+`\nBlogUnderTest.mountBlog(${JSON.stringify(locale)});`);
  const d=window.document;
  const output=()=>[...d.querySelectorAll('[data-blog-tool-result] strong')].map(n=>n.textContent);
  const set=(name,value)=>{const input=d.querySelector(`[name="${name}"]`);input.value=value;input.dispatchEvent(new window.Event('input',{bubbles:true}));};
  assert.deepEqual(output(),['400','2.00%','600','200']);
  results.push({locale,case:'default',output:output()});
  set('likes','480');assert.deepEqual(output(),['600','3.00%','600','0']);
  results.push({locale,case:'goal reached',output:output()});
  for(const name of ['likes','comments','shares','saves'])set(name,'0');
  assert.deepEqual(output(),['0','0.00%','600','600']);
  results.push({locale,case:'confirmed zero actions',output:output()});
  for(const [name,value,caseName] of [['followers','0','zero denominator'],['followers','','missing denominator'],['followers','-1','negative denominator'],['followers','1.5','fractional count']]){
   set(name,value);assert.deepEqual(output(),['—']);results.push({locale,case:caseName,output:output()});
  }
  set('followers','101');set('target','1');assert.deepEqual(output(),['0','0.00%','2','2']);
  results.push({locale,case:'round up target actions',output:output()});
  set('likes','202');set('target','150');assert.deepEqual(output(),['202','200.00%','152','0']);
  results.push({locale,case:'action rate above 100 allowed',output:output()});
  set('target','-1');assert.deepEqual(output(),['—']);results.push({locale,case:'negative goal',output:output()});
 }finally{await window.happyDOM.close();}
}
await writeFile('outputs/semrush-batch4-2026-10-23/calculator-integration-checks.json',JSON.stringify({environment:'happy-dom renderer integration; not an actual browser visual test',results},null,2)+'\n');
console.log(`Passed ${results.length} localized renderer interaction cases.`);
