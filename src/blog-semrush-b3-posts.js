import { batchThreeCampaigns } from './blog-semrush-b3-campaigns.js';
import { batchThreeMeasurement } from './blog-semrush-b3-measurement.js';
import { batchThreeLocal } from './blog-semrush-b3-local.js';
import { batchThreeCities } from './blog-semrush-b3-cities.js';
import { batchThreeTools } from './blog-semrush-b3-tools.js';
import { batchThreeFollowers } from './blog-semrush-b3-followers.js';
import { batchThreeFollowerReview } from './blog-semrush-b3-follower-review.js';
import { batchThreeStrategy } from './blog-semrush-b3-strategy.js';
import { batchThreeTrends } from './blog-semrush-b3-trends.js';
import { batchThreeLists } from './blog-semrush-b3-lists.js';
import { batchThreeCreators } from './blog-semrush-b3-creators.js';
import { batchThreeSeattle } from './blog-semrush-b3-seattle.js';
import { batchThreeRights } from './blog-semrush-b3-rights.js';
import { batchThreeFitness } from './blog-semrush-b3-fitness.js';
import { batchThreeSelection } from './blog-semrush-b3-selection.js';
import { batchThreeCoverAlts } from './semrush-b3-visuals.js';

const scenes=new Set([6,7,9,14,16,19,23,25,28]);
const figures={
 1:{name:'evidence',section:4,alt:['作品、指标、来源与订单之间的证据关联','Evidence relationships between asset, metric, source and order'],caption:['关联记录不等于增量销售证明。','An association record is not proof of incremental sales.']},
 4:{name:'counteroffer',section:3,alt:['报价拆成制作、发布、授权和费用四类','A quote split into production, publication, licensing and expenses'],caption:['先讨论具体范围，再讨论总额。','Discuss specific scope before the total.']},
 10:{name:'fraud',section:3,alt:['案例、工具输出、人工复核与决定的四步验证','Four-step validation from case to tool output, human review and decision'],caption:['未知保留未知；标记不等于作弊证据。','Unknown remains unknown; a flag is not proof of cheating.']},
 21:{name:'net',section:3,alt:['假设从一万到一万零三百，净增三百，毛新增未知','Hypothetical 10,000 to 10,300: net plus 300, gross follows unknown'],caption:['假设快照只能确定净变化，不能反推唯一流动组合。','Hypothetical snapshots determine net change, not a unique flow history.']},
 24:{name:'rights',section:4,alt:['合同许可与平台权限分成两层记录','A contractual license and platform access recorded as two separate layers'],caption:['可操作的账户权限不会定义版权许可范围。','Operational account permission does not define the copyright license.']},
};
export const semrushBatchThreePosts=[
 ...batchThreeCampaigns,...batchThreeMeasurement,...batchThreeLocal,...batchThreeCities,
 ...batchThreeTools,...batchThreeFollowers,...batchThreeFollowerReview,...batchThreeStrategy,
 ...batchThreeTrends,...batchThreeLists,...batchThreeCreators,...batchThreeSeattle,
 ...batchThreeRights,...batchThreeFitness,...batchThreeSelection,
].sort((a,b)=>a.number-b.number).map(post=>{
 const figure=figures[post.number];
 return {...post,coverAlt:batchThreeCoverAlts[post.number],
  coverCredit:scenes.has(post.number)?['AI 生成的编辑示意图，不是文中具名人物、宠物或真实活动。','AI-generated editorial illustration, not the named people, pets or actual events in this article.']:null,
  internalLinks:post.internalLinks.filter((value,index,array)=>array.findIndex(x=>x.url===value.url&&x.terms[0]===value.terms[0])===index),
  figures:figure?[{file:`semrush-b3-inline-${figure.name}.svg`,afterSection:figure.section,alt:figure.alt,caption:figure.caption}]:[],
 };
});
