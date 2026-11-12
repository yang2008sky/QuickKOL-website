import fs from 'node:fs';
export const plans=JSON.parse(fs.readFileSync(new URL('../research/plan.json',import.meta.url),'utf8'));
export const evidence=JSON.parse(fs.readFileSync(new URL('../research/sources.json',import.meta.url),'utf8'));
export const p=(zh,en)=>[zh,en];
export const s=(zh,en,bodyZh,bodyEn,citations=[])=>[p(zh,en),p(bodyZh,bodyEn),citations];
export const link=(zh,en,slug,hash='answer')=>({terms:p(zh,en),url:`/blog/${slug}/#${hash}`});
export function makePost(input){
 const plan=plans.find(x=>x.id===input.id);if(!plan)throw Error('Unknown article');
 const keys=[...new Set(input.sections.flatMap(x=>x[2]||[]))];
 const sources=keys.map(key=>{if(!evidence[key])throw Error('Unknown source '+key);const {terms,label,url}=evidence[key];return {id:key,terms,label,url};});
 const tags={discovery:['CreatorDiscovery','CreatorStrategy'],analytics:['CreatorAnalytics','Measurement'],commercial:['CreatorRates','CreatorStrategy'],campaign:['CampaignPlanning','CreatorOperations'],outreach:['CreatorOutreach','CreatorOperations'],ai:['AIMarketing','CreatorStrategy']};
 const photo=['Human documentary','Solo creator','Environment / objects'].includes(plan.family);
 return {
  slug:plan.slug,primaryKeyword:plan.keyword,topic:plan.topic,tags:tags[plan.topic],date:input.date||'2026-11-12',updatedDate:input.updatedDate||'2026-11-12',
  title:plan.title,summary:input.summary,metaDescription:input.description,answer:input.answer,
  cover:plan.slug+'.jpg',coverAlt:input.coverAlt,
  ...(!photo?{coverCredit:p('QuickKOL 编辑图形；不呈现真实账号指标或平台界面。','QuickKOL editorial graphic; not actual account metrics or a platform interface.')}:{}),
  sections:input.sections,sources,internalLinks:input.links,
  ...(input.figures?.length?{figures:input.figures}:{}),
  table:input.table,tool:{kind:'reference-list',...input.tool},
  deepDive:[{heading:p('研究日期与使用边界','Research date and limitations'),body:input.researchNote||p('资料核验于 2026 年 11 月 12 日。文中方法、表格和决策规则为编辑建议，标为假设的示例不是实际客户结果或行业基准。外部资料的适用地区与时期按各段说明；本稿处于独立本地审阅阶段，正式发布日期待确认。','Sources reviewed November 12, 2026. Methods, tables and decision rules are editorial recommendations. Hypothetical examples are not actual client results or industry benchmarks. Source geography and periods are specified where relevant. This draft is in independent local review; confirm its publication date before release.'),citations:[]}],
  cta:input.cta||([6,8,23].includes(input.id)?{title:p('继续学习指标与证据','Continue learning about metrics and evidence'),body:p('理解来源、窗口、权限与未知；不凭单一信号判断个人，也不承诺完整检测。','Understand sources, windows, permissions and unknowns without judging a person from one signal or promising complete detection.'),label:p('阅读指标决策指南','Read the metrics decision guide'),href:'/blog/social-media-metrics-creator-decision-tree/'}:{title:p('用清楚的任务开始达人研究','Start creator research with a clear task'),body:p('用 QuickKOL 理解 Brief、发现相关达人并研究作品与联系路径；数据、合作条件和结果仍需核验。','Use QuickKOL to interpret a brief, discover relevant creators and research their work and contact routes. Verify data, commercial terms and outcomes at their source.'),label:p('了解 QuickKOL','Explore QuickKOL'),href:'https://www.quickkol.com/#capabilities'})
 };
}
