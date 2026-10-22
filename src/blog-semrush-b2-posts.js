import { batchOutreach } from './blog-semrush-b2-outreach.js';
import { batchLists } from './blog-semrush-b2-lists.js';
import { batchDiscovery } from './blog-semrush-b2-discovery.js';
import { batchCommercial } from './blog-semrush-b2-commercial.js';
import { batchAudits } from './blog-semrush-b2-audits.js';
import { batchPrograms } from './blog-semrush-b2-programs.js';
import { batchFitness } from './blog-semrush-b2-fitness.js';
import { batchIdentity } from './blog-semrush-b2-identity.js';
import { batchOperations } from './blog-semrush-b2-operations.js';
import { batchFrench } from './blog-semrush-b2-french.js';
import { batchMeasurement } from './blog-semrush-b2-measurement.js';
import { batchTwoCoverAlts } from './semrush-b2-visuals.js';

const scenes = new Set([2,7,8,10,13,15,22,27,29]);
export const semrushBatchTwoPosts = [
  ...batchOutreach, ...batchLists, ...batchDiscovery, ...batchCommercial,
  ...batchAudits, ...batchPrograms, ...batchFitness, ...batchIdentity,
  ...batchOperations, ...batchFrench, ...batchMeasurement,
].sort((a,b)=>a.number-b.number).map(post=>({
  ...post,
  coverAlt: post.number === 7 ? ['阳光下修补台上摆放补过的牛仔布、线轴与手工工具','Mended denim, thread spools and hand tools on a sunlit repair bench'] : batchTwoCoverAlts[post.number] || post.coverAlt,
  coverCredit: scenes.has(post.number) ? ['AI 生成的编辑示意图，人物并非文中提及的创作者。','AI-generated editorial illustration; people are not the creators named in this article.'] : null,
  figures: ({
    14: [{file:'semrush-b2-inline-handoff.svg',afterSection:6,alt:['三段工具交接分别保留身份理由、已批准范围与素材订单标识','Three handoffs preserve identity and reason, approved scope, and asset-order identifiers'],caption:['工具之间要传递信息含义与负责人，而不只是数值。','Preserve meaning and ownership between tools, not only values.']}],
    23: [{file:'semrush-b2-inline-study.svg',afterSection:3,alt:['研究方案先定义样本框、分类与未知处理','A protocol defines the sample frame, labels and unknown-data treatment'],caption:['这是研究设计示意，不是已采集数据或研究结果。','Research design illustration, not collected data or study results.']}],
    24: [{file:'semrush-b2-inline-pooling.svg',afterSection:2,alt:['假设两帖互动与基数汇总得到百分之二点一四','Two hypothetical post counts pool to a 2.14 percent ratio'],caption:['假设算例：合并分母不等于独立受众去重。','Hypothetical example: pooling denominators does not deduplicate audience.']}],
  })[post.number] || [],
}));
