import { p } from './semrush-editorial.js';

export const semrushCoverAlts = {
 2:p('以 KNOW、SHOW、CONNECT 大字表达影响力的三种贡献','Large KNOW, SHOW and CONNECT typography represents three contributions to influence'),
 4:p('放大镜覆盖粉丝记录，强调先核验数据来源','A magnifier over a follower record emphasizes checking the source first'),
 6:p('身份路径连接 RIGHT @ 字样与账号符号','An identity path connects RIGHT @ typography with an account symbol'),
 7:p('三条路径分别指向发现、寄样和采购内容','Three routes point to discovery, seeding and buying content'),
 8:p('ONE CREATOR 大字与 Brief、Test 圆形标记','ONE CREATOR typography beside Brief and Test markers'),
 9:p('AGREE、MAKE、ACCEPT 字样旁是共同工作记录','AGREE, MAKE and ACCEPT typography beside a shared working record'),
 10:p('包裹旁分别标出送达与是否发布，强调赠送不等于交付','A parcel beside distinct delivered and published labels separates gifting from content delivery'),
 11:p('TOP FOR WHICH JOB 大字与问号，强调按任务研究健身达人','TOP FOR WHICH JOB typography and a question mark frame fitness references by assignment'),
 12:p('旧记录与下一负责人之间的箭头保留身份、范围、许可和状态','An arrow between old records and the next owner preserves identity, scope, rights and status'),
 14:p('一条曲线路径串起 Brief、审核、联系与学习','A curved path connects brief, review, contact and learning'),
 15:p('互动除以什么的大字分式，强调分母定义','A typographic fraction asks what engagement is divided by'),
 19:p('手机形状的算例显示 640 除以 20,000，得到 3.2%','A phone-shaped worksheet shows the hypothetical 640 divided by 20,000, yielding 3.2%'),
 20:p('REEL、STORY、PAGE 三个大字强调内容形式的不同任务','Large REEL, STORY and PAGE typography separates content-format jobs'),
 21:p('点击与订单进入漏斗，重叠信号在分配贡献前核对','Clicks and orders enter a funnel while overlapping signals are reconciled before credit assignment'),
 22:p('文档说明、演示和已验证三枚证据标签分开排列','Separate documented, demonstrated and verified evidence labels'),
 24:p('PLAY、EXPLAIN、DEMONSTRATE 大字与播放形状','PLAY, EXPLAIN and DEMONSTRATE typography beside a play-shaped graphic'),
 26:p('粉丝、垂类和受众年龄三个筛选形状分别标明对象','Three filter shapes identify followers, niche and audience age separately'),
 27:p('免费范围字样与记录查询限制、结果、导出和审核时间的纸条','Free-access typography beside a receipt listing query limits, results, export and review time'),
 28:p('MICRO 大字下的创作者节点连接不同任务','Creator nodes beneath MICRO typography connect specific jobs'),
 29:p('奶油色赠品卡明确写着无需发布','A cream gift card explicitly says NO POST REQUIRED'),
};
export const semrushSceneNumbers = new Set([1,3,5,13,17,18,23,25,30]);
const figure = (file,afterSection,zh,en,zhCaption,enCaption) => ({file,afterSection,alt:p(zh,en),caption:p(zhCaption,enCaption)});
const rates = figure('semrush-inline-rates.svg',2,'相同的 700 次互动分别除以粉丝、观看与触达','The same seven hundred interactions divided by followers, views and reach','假设算例：相同分子对应三个不同问题，不能按百分比高低选择口径。','Hypothetical example: one numerator answers three different questions; the highest percentage is not automatically the right definition.');
export const semrushFigures = {
 15:[rates],
 16:[rates],
 21:[figure('semrush-inline-conversions.svg',3,'内容链接、会话、订单和退款核对组成转化追踪路径','Content links, sessions, orders and refund reconciliation form a conversion-tracking path','示意流程：先核对实际交易，再按预定规则分配贡献；归因不等于增量。','Conceptual workflow: reconcile actual transactions before applying the credit rule; attribution does not establish incrementality.')],
 26:[figure('semrush-inline-filters.svg',4,'账号规模、内容与受众分布分属三类字段','Account scale, content and audience distribution are three different field groups','字段示意，非产品界面；不表示 QuickKOL 已提供全部组合筛选。','Field model, not a product interface or a claim that QuickKOL offers every combined filter.')],
};
