import { article, p, s, link } from './semrush-editorial.js';
import { sources as previousSources } from './semrush-b3-editorial.js';
export { p, s, link };
const source=(id,name,url)=>({id:`b4${id}`,terms:p(name,name),label:p(name,name),url});
export const sources={...previousSources,
 grown:source('Grown','Grown Strong','https://retreats.grownstrong.com/pages/san-diego'),
 coco:source('Coco','Coco Bassey','https://cocobassey.com/about-millennielle-top-atlanta-fashion-bloggers/'),
 eating:source('Eating','EatingNYC','https://eating.nyc/about'),
 denizen:source('Denizen','New Denizen','https://newdenizen.com/about/'),
 mile:source('Mile','Mile High and Hungry','https://milehighandhungry.com/about'),
 paige:source('Paige','Paige Spiranac','https://www.paigespiranac.com/'),
 hailey:source('Hailey','Hailey Ostrom','https://haileyostrom.com/'),
 erika:source('Erika','Erika Larkin','https://www.erikalarkin.com/'),
 finch:source('Finch','Peter Finch','https://linktr.ee/finchgolfmedia'),
 grant:source('Grant','TaylorMade','https://www.taylormadegolf.com/tourplayers/grant-horvat.html?lang=en_US'),
 everline:source('Everline','R3FUEL','https://www.r3fuel.com/who-we-are'),
 asa:source('Asa','ASA','https://www.asa.org.uk/advice-online/recognising-ads-social-media.html'),
 minorWork:source('MinorWork','California DLSE','https://www.dir.ca.gov/dlse/EWPRequirements.html'),
 film:source('Film','NYC MOME','https://www.nyc.gov/site/mome/permits/when-permit-required.page'),
 katseye:source('Katseye','TikTok','https://newsroom.tiktok.com/tiktok-celebrates-katseyes-new-ep-wild-with-exclusive-fan-experience?lang=en'),
 puth:source('Puth','TikTok','https://newsroom.tiktok.com/tiktok-announces-charlie-puth-as-the-latest-guest-ontiktok-in-the-mix-sponsored-by-t-mobile?lang=en'),
 music2025:source('Music2025','TikTok','https://newsroom.tiktok.com/tiktok-reveals-the-top-artists-and-songs-of-2025?lang=en'),
 gap:source('Gap','Gap','https://www.gapinc.com/en-us/articles/2025/08/gap-unveils-fall-denim-campaign-starring-global-gi'),
 charli:source('Charli','Dunkin’','https://news.dunkindonuts.com/news/the-charli-dances-onto-the-dunkin-menu'),
};
export function b(post){
 const resolved=post.sources.map(key=>sources[key]);
 if(resolved.some(x=>!x))throw Error(`Unknown source: ${post.slug}`);
 const result=article({...post,sources:[],coverAlt:p('编辑封面','Editorial cover'),tableTitle:post.tableTitle||p('执行比较表','A working comparison'),headers:post.headers||[p('任务','Task'),p('依据','Evidence'),p('处理','Action')],researchNote:p(`资料核验于 2026-10-23。${post.researchNote?.[0]||'工作流程为编辑建议，数值算例均为假设，不是客户表现、报价或排名。'}`,`Sources reviewed October 23, 2026. ${post.researchNote?.[1]||'Workflows are editorial recommendations. Numerical examples are hypothetical, not client outcomes, quotes or rankings.'}`)});
 return {...result,date:'2026-10-23',updatedDate:'2026-10-23',cover:`semrush-b4-${String(post.number).padStart(2,'0')}.jpg`,sources:resolved};
}
