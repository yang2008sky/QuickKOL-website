import { batchFourNotes } from './semrush-b4-notes.js';
import { batchFourAuthenticity } from './blog-semrush-b4-authenticity.js';
import { batchFourCheckers } from './blog-semrush-b4-checkers.js';
import { batchFourCollaboration } from './blog-semrush-b4-collaboration.js';
import { batchFourDiscovery } from './blog-semrush-b4-discovery.js';
import { batchFourEligibility } from './blog-semrush-b4-eligibility.js';
import { batchFourExamples } from './blog-semrush-b4-examples.js';
import { batchFourFood } from './blog-semrush-b4-food.js';
import { batchFourGolf } from './blog-semrush-b4-golf.js';
import { batchFourLocalFitness } from './blog-semrush-b4-local-fitness.js';
import { batchFourMeasurement } from './blog-semrush-b4-measurement.js';
import { batchFourNewYork } from './blog-semrush-b4-newyork.js';
import { batchFourPortfolio } from './blog-semrush-b4-portfolio.js';
import { batchFourRate } from './blog-semrush-b4-rate.js';
import { batchFourSearch } from './blog-semrush-b4-search.js';
import { batchFourTemplates } from './blog-semrush-b4-templates.js';
import { batchFourWomen } from './blog-semrush-b4-women.js';
import { batchFourCoverAlts } from './semrush-b4-visuals.js';
const scenes=new Set([3,6,7,9,12,13,19,22,24,30]);
const figures={
 2:['sampling',3,['公开抽样规则、标签与未知状态','Public sampling rule, labels and unknown states'],['便利样本不建立总体假粉比例。','A convenience sample does not establish the population fake-follower rate.']],
 4:['actions',4,['假设 400 动作与两万粉丝，当前 2%，到 3% 目标还差 200','Hypothetical 400 actions and 20,000 followers: 2%, with 200 actions to a 3% goal'],['目标为自选情景，不是结果预测。','The target is a chosen scenario, not a forecast.']],
 16:['contract',4,['交付、验收、许可与付款四组工作说明字段','Four statement-of-work field groups: delivery, acceptance, permission and payment'],['可编辑起点，实际条款需要双方确认与适当审阅。','An editable starting point; actual terms require agreement and appropriate review.']],
 18:['report',4,['观察、解释、决定与来源附录分开','Separate observation, interpretation, decision and source appendix'],['把事实、可能解释与建议动作分别写清。','Separate facts, possible explanations and proposed actions.']],
 25:['age',2,['粉丝区间、受众年龄、创作者年龄与资格是不同字段','Follower range, audience age, creator age and eligibility are different fields'],['受众年龄不能证明创作者本人年龄或合作资格。','Audience age does not verify creator age or partnership eligibility.']],
};
export const semrushBatchFourPosts=[...batchFourAuthenticity,...batchFourCheckers,...batchFourCollaboration,...batchFourDiscovery,...batchFourEligibility,...batchFourExamples,...batchFourFood,...batchFourGolf,...batchFourLocalFitness,...batchFourMeasurement,...batchFourNewYork,...batchFourPortfolio,...batchFourRate,...batchFourSearch,...batchFourTemplates,...batchFourWomen].sort((a,b)=>a.number-b.number).map(post=>{
 const f=figures[post.number];
 const downloads=post.number===16?[{url:'/downloads/influencer-statement-of-work.en.md',label:['下载英文工作说明模板','Download the English statement-of-work template']},{url:'/downloads/influencer-statement-of-work.zh-CN.md',label:['下载中文工作说明模板','Download the Chinese statement-of-work template']}]:post.number===17?[{url:'/downloads/instagram-follower-range-workbook.csv',label:['下载空白 CSV 筛选表','Download the blank CSV workbook']},{url:'/downloads/instagram-follower-range-readme.md',label:['下载筛选表使用说明','Download the workbook instructions']}]:[];
 return {...post,sections:[...post.sections.slice(0,-1),batchFourNotes[post.number],post.sections.at(-1)],coverAlt:batchFourCoverAlts[post.number],coverCredit:scenes.has(post.number)?['AI 生成编辑示意图，不是文中具名人物或真实活动。','AI-generated editorial illustration, not named people or actual events in the article.']:null,
 internalLinks:post.internalLinks.filter((value,index,array)=>array.findIndex(x=>x.url===value.url&&x.terms[0]===value.terms[0])===index),
 tool:{...post.tool,downloads},figures:f?[{file:`semrush-b4-inline-${f[0]}.svg`,afterSection:f[1],alt:f[2],caption:f[3]}]:[]};
});
