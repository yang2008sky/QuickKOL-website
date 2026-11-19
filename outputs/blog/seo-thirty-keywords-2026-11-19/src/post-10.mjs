import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:10,
summary:p('把粉丝存量、点赞动作、账号权限与商业结果分成不同证据，避免免费互动宣传把不相同的事实拼成一个可信度结论。','Separate follower stocks, like actions, account permissions and commercial outcomes so free-engagement claims cannot combine unlike evidence into a credibility verdict.'),
description:p('Free instagram likes followers 教育向文章：用数据词典区分存量、动作、权限与结果，并为品牌提供有限、可复核的达人数据表达。','An educational guide to free Instagram likes and followers: distinguish stocks, actions, permissions and outcomes when reviewing creator evidence.'),
coverAlt:p('编辑拼贴将粉丝、点赞、访问权限与结果放在四张独立卡片上','An editorial collage places followers, likes, access and outcomes on four separate cards'),
answer:p('Free instagram likes followers 把不同东西放在同一句宣传里：某时点的粉丝数、某条内容的点赞动作，以及可能要求的账号访问。它们不能直接相加，也不能合成一个自动判定达人可信度的分数。品牌应先为字段写清对象、单位、时期与来源，再区分观察、解释和已核验事实。本篇是教育向数据辨读，不提供刷量入口，不承诺百分百识别，也不据单项数字指控个人。','Free Instagram likes followers combines unlike things in one promotional phrase: followers at a moment, like actions on content and potentially requested account access. These cannot simply be added together or converted into an automatic verdict about a creator’s credibility. A brand should define each field’s object, unit, period and source, then separate observation, interpretation and verified fact. This is educational data literacy, offering no engagement service, perfect-detection promise or accusation based on a single number.'),
sections:[
s('为每个名词补上对象与时间','Attach an object and time to every label',`先让每个字段回答“谁的什么，在什么时候”。账号粉丝数、某条 Reel 点赞数与最近一个月新增关注，不是同一类记录，不能只用“互动”统称。

记录来源界面、观察时间与已知定义。若截图缺少日期、对象或范围，就保留缺口，而不是凭布局猜测它代表某个完整时期。

达人数据决策树可以帮助从问题找到需要的证据。本篇在此基础上给团队建立简洁词典，避免制作、采购和复盘人员使用同一个词却讨论不同事情。

词典不需要很复杂。字段、对象、单位、时期、来源、限制六列，就足以让多数比较先停在可以解释的层面；没有确认的定义应显式标为待核验。`,
`Begin by making every field answer whose what, at which time. An account's follower count, the likes on one reel and new follows during a month are different records and should not all be called engagement.

Record the source interface, observation time and known definition. If a screenshot lacks a date, object or scope, retain the gap rather than guessing from its layout that it represents a complete period.

The creator-metrics decision tree connects a decision question with the evidence required. This guide adds a small shared dictionary so production, procurement and review colleagues do not use one word while discussing different things.

The dictionary need not be elaborate. Field, object, unit, period, source and limitation are enough columns to make many comparisons explainable. A definition not yet confirmed should remain marked for verification. This makes the record usable even when a team cannot obtain every desired measure, because readers can see the difference between a known value and a label whose meaning is still unresolved.`),
s('粉丝数量是一项有时点的存量','Treat follower totals as stocks at a moment',`一个时点的粉丝总数描述账号关联规模，不能独自说明有多少人正在观看、来自目标市场，或愿意购买合作商品。

两次总数之差可以描述净变化，但不能自动还原所有新增与减少事件。即便净增长相同，背后的流入、流出与观察条件也可能不同。

粉丝基线复核方法讨论怎样保留时间与来源。使用时仍要区分公开数字、获准后台资料与第三方估计，不把精确显示误认成完整解释。

这类资料适合支持有限问题，例如账号规模是否发生了需要询问的变化。它不适合单独给个人贴上虚假标签，也不应直接成为这次品牌合作预计销售人数。`,
`A follower total at one moment describes the scale of an account relationship. Alone, it does not identify active viewers, people in the intended market or prospective buyers of the sponsored product.

The difference between two totals describes a net change, but does not automatically reconstruct every addition and removal. Identical net growth can arise alongside different inflows, outflows and observation conditions.

The follower-baseline review method explains retaining times and sources. Distinguish public figures, appropriately authorized backend information and third-party estimates when using it; a precise-looking display is not a complete explanation.

Such evidence can inform a limited question, such as whether the account scale changed enough to require context. It should not independently label a person fake or become the projected number of customers for a brand assignment. Keeping that limit visible is particularly useful when a promotional claim tries to convert a promised follower quantity directly into an audience-quality or revenue claim without supplying any evidence between those steps.`),
s('点赞是动作，不是完整的人群画像','A like is an action, not a complete audience profile',`点赞记录与账号粉丝数有不同对象和单位。某条内容获得一个动作，不等于这个人订阅了账号，也不等于他看完、理解或接受了推荐。

同一个人可能参与多条内容，因此跨作品累加动作时，也不能直接把总数叫作独立人数。是否能够去重，需要相应字段与方法支持。

Meta 的 Insights API 概述说明指标与对象、权限范围相关。团队应核对实际获取字段的定义，而不是把一个名称搬到另一张表里后继续沿用原解释。

对品牌来说，动作有价值，但价值需要放在问题里理解。它可以成为继续研究内容回应的线索，不能自动替代观众来源、产品体验或购买结果的核验。`,
`A like record and an account follower total concern different objects and units. One action on a piece does not establish that the person followed the account, completed the content, understood it or accepted a recommendation.

One person can also interact with several publications. Adding actions across pieces therefore does not automatically yield a unique-person count. Any deduplication claim needs the relevant fields and a supported method.

Meta’s Insights API overview explains that measures relate to objects and permission scopes. Confirm the definition of the field actually obtained rather than moving a name into another spreadsheet and carrying its original interpretation along unchanged.

Actions can be valuable to a brand, but their value needs a decision question. They may justify further investigation of content response without replacing checks on audience origin, product experience or purchasing outcomes. A reviewer should be able to explain exactly which statement the action supports, and should leave the other statements open until a suitable source becomes available.`,['metaInsights']),
s('访问权限是能力与责任问题','Access concerns capability and responsibility',`某个免费服务要求登录、验证码或更多访问时，讨论的已不只是数据数量，而是账号控制与授权。拥有一个指标截图，不会自动赋予第三方操作账号的权利。

Meta 的 Instagram 安全说明提供登录活动、恢复资料与双重验证等保护背景。它发表于 2021 年，不应被写成所有账号当前菜单的逐项教程。

品牌与代理应确认账号属于谁、谁能批准具体访问、用途与期限是什么。不为补齐一个报告字段而索取不相关权限，更不把能够登录等同于客户已经授权。

账号所有者可在官方入口核对实际安全状态；文章不要求读者尝试可疑服务。先明确访问问题，才能避免把一个所谓免费数字变成未被讨论的控制权安排。`,
`When a free service requests a login, verification code or broader access, the issue is no longer merely a data quantity: it concerns account control and authorization. Possessing a screenshot does not give a third party permission to operate the account.

Meta’s Instagram security guide provides protective context on login activity, recovery information and two-factor authentication. Published in 2021, it should not become a step-by-step claim about the current menus of every account.

Brands and agencies should establish the owner, the person able to authorize specific access, the purpose and the duration. Do not request unrelated permissions to complete one report field, or treat the technical ability to log in as evidence of client approval.

The owner can review actual security conditions through official routes; this article does not ask readers to try a questionable service. Clarifying access first prevents a supposedly free quantity from turning into an account-control arrangement that nobody has explicitly discussed.`,['metaSecurity']),
s('商业结果需要另外的事实链','Commercial outcomes require a separate evidence chain',`品牌可能关心询问、订单或继续合作，但这些结果需要各自来源。不能把粉丝与点赞相加后乘一个假设价格，再把结果称为真实收入。

若有链接、优惠码或订单资料，要保留窗口、归属规则、取消与退款处理方式。这里只建立证据区分，不提供一个适合所有业务的收益公式。

没有结果资料时，仍可描述作品完成、观众反馈与待核验问题。不要为填满销售栏而把互动写成订单，也不要把未知收益直接写成没有价值。

创作者可以对自己完成的任务负责，品牌则应提供自己掌握的商业事实。双方把不同责任说清楚，才不容易让一个不可控数字取代完整的合作评价。`,
`A brand may care about inquiries, orders or continuing a partnership, but these outcomes need their own sources. Adding followers and likes, multiplying by an assumed price and calling the result actual revenue does not establish a transaction.

If link, code or order information exists, retain the window, attribution rules and treatment of cancellations and returns. The purpose here is evidence separation, not a revenue formula suitable for every business.

Without outcome data, the team can still describe completed work, audience feedback and questions awaiting verification. Do not turn engagement into orders to fill a sales column, or turn unknown earnings into a statement that the work had no value.

Creators can be accountable for the assignment they completed, while the brand supplies commercial facts in its possession. Clear responsibilities reduce the chance that an uncontrollable number replaces a complete partnership evaluation. They also make it possible to ask a precise follow-up question instead of requesting a larger collection of unrelated figures.`),
s('不要把不同疑点拼成自动指控','Do not combine unlike concerns into an automatic accusation',`把增长速度、点赞数量与资料缺口随意赋分，不能因为有了总分就变成经过验证的检测系统。需要先知道评分方法、适用范围和错误可能。

Meta 的虚假互动治理说明讨论了真实存在的治理问题，但不证明每一个异常模式都来自购买行为。平台治理背景与对某人的事实认定应分别表达。

FTC 的虚假影响力指标问答还在美国规则语境中区分了相关行为、认知条件与情况。不能将它简化成“品牌用了某个达人，便自动违法”。

审阅记录可写明已观察、待解释与已证实三种状态。没有完成核验时，不公开传播定性结论；需要进一步处理的事项交给适当负责人，而不是让教育表格代替调查。`,
`Arbitrarily assigning points to growth speed, like totals and missing information does not create a validated detection system merely because a total score appears. Its method, intended scope and possible errors would first need support.

Meta’s inauthentic-engagement announcement addresses a real governance issue, but does not establish that every unusual pattern comes from purchased activity. Platform context and a factual finding about a person should be expressed separately.

FTC’s fake-influence-indicator Q&A also distinguishes conduct, knowledge conditions and circumstances in its United States regulatory context. It should not be reduced to a claim that working with a creator automatically makes a brand liable.

A review record can distinguish observed, awaiting explanation and verified states. Without completed verification, do not circulate a definitive accusation. Send matters requiring further review to the appropriate owner rather than allowing an educational table to replace an investigation. The separation improves both fairness to the creator and the precision of the brand's next request for information.`,['metaFake','ftcIndicators']),
s('用假设记录练习分列','Practise with a hypothetical separated record',`假设团队收到一张材料：账号显示一万粉丝、某作品显示三百点赞，另有服务承诺赠送互动。这些是假设数字，不是行业基准或实际账号资料。

先把一万记录为某时点的账号存量，三百记录为某作品在特定观察时刻的动作，再把服务承诺记为未经核验的宣传。没有资料时，独立人数、来源与商业结果均保持未知。

如果服务还要求访问，另开权限事项，确认所有者与授权范围。不要把访问承诺和数字放进同一个真实性得分，也不实际接入服务来完成练习。

最后写下一条有限结论：已有材料不能确定真实触达、销售或互动来源，下一步需要补充哪些具体背景。这个结论没有替任何个人作真伪判定。`,
`Imagine a team receiving material showing ten thousand account followers, three hundred likes on a publication and a service promise to supply more engagement. These are hypothetical quantities, not benchmarks or actual account information.

Record ten thousand as an account stock at a moment, three hundred as actions on a piece at an observed time and the service offer as an unverified promotional claim. Without further evidence, unique people, origin and commercial outcomes remain unknown.

If access is requested, create a separate permission issue and establish the owner and authorization scope. Do not place the access promise and the quantities into one authenticity score, or connect the service to finish the exercise.

Conclude narrowly: the supplied material cannot establish actual reach, sales or the origin of engagement, and specified context is needed next. This makes no authenticity finding about a person. Its usefulness lies in turning a confusing bundle into answerable questions, each assigned to an appropriate source rather than forced into a single unsupported verdict.`),
s('让团队共用词典与状态','Share definitions and verification states across the team',`采购、创作与分析人员应使用同一份字段说明。更换数据来源或观察期时，更新记录，不让旧定义在新版报告里继续悄悄生效。

把资料所有者与下一步负责人写清楚。创作者知道需要核对哪个对象，品牌也知道哪些商业事实应由内部提供，减少反复索取整套后台资料。

若一个字段最终仍不可得，可以删除不适合的比较或保留局限。不需要为了让表格对称而估造一个数，也不应将缺失资料视为个人有问题的证据。

交接时同时保留词典和结论状态。新同事看到的不只是数字，还能理解它支持什么、不支持什么，以及哪项后续核验真正会改变合作决定。`,
`Procurement, creative and analysis colleagues should use the same field definitions. When a source or observation period changes, update the record so an old interpretation does not silently survive in the new report.

Identify the evidence owner and the person responsible for the next step. The creator then knows which object needs clarification, while the brand knows which commercial facts must come from its own team. This reduces repeated requests for entire backend collections.

If a field remains unavailable, remove an unsuitable comparison or retain the limitation. Do not invent a value to make a table symmetrical, and do not treat missing information as evidence of personal wrongdoing.

Hand over the dictionary with the verification states. A new colleague should see not only a number but what it can support, what it cannot support and which further check would actually change the collaboration decision. This keeps a modest educational record connected to practical action rather than turning documentation into a substitute for judgment.`),
s('把免费互动词转回合作判断','Return the free-engagement phrase to a partnership decision',`品牌最终需要决定是否联系、补充资料、调整任务或暂缓合作。每个决定应对应当前证据，而不是对应一个拼凑出来的可信度分数。

Free instagram likes followers 的教育重点，是这些名词分别描述什么。即便宣传将它们捆绑，团队仍能保持存量、动作、权限与结果的独立含义。

不要把正常增长一概怀疑，也不要把漂亮总数自动当成真实影响力。保留疑问、交叉核验来源，并在证据不足时使用有限结论。

这种表达更符合达人营销的实际工作：先理解作品与任务，再取得适当资料，最后作有范围的合作判断。它不依赖刷量，也不需要承诺一种不存在的百分百识别能力。`,
`The brand ultimately needs to decide whether to contact someone, request context, adjust an assignment or pause. Each decision should correspond to the available evidence rather than a credibility score assembled from unlike things.

The educational point of free Instagram likes followers is understanding what those words describe separately. Even when promotion bundles them together, the team can preserve the distinct meanings of stocks, actions, permissions and outcomes.

Do not suspect every ordinary increase, or automatically treat an attractive total as genuine influence. Retain questions, cross-check sources and use a limited conclusion when evidence is insufficient.

This fits creator-marketing work: understand the work and assignment first, obtain appropriate evidence and make a bounded partnership judgment. It does not depend on manufactured engagement or a nonexistent promise of perfect detection. The next useful step is the one that resolves a relevant uncertainty, not the one that merely produces another impressive number for the same undefined field.`)
],
links:[link('达人数据决策树','creator-metrics decision tree','social-media-metrics-creator-decision-tree'),link('粉丝基线复核方法','follower-baseline review method','free-ig-followers-campaign-baseline-reset')],
figures:[{file:'free-likes-followers-evidence-separation-framework.svg',afterSection:5,alt:p('粉丝存量、点赞动作、权限与商业结果分列的证据图','An evidence diagram separating follower stocks, like actions, permissions and commercial outcomes'),caption:p('字段可以并列审阅，但不能因为放在同一张表中就自动相加或互相证明。','Fields can be reviewed together without becoming additive or proving each other merely by sharing a table.')}],
table:{title:p('四种资料分别支持什么','What four evidence types support'),headers:[p('类型','Type'),p('先确认','Confirm first'),p('保留限制','Retain the limit')],rows:[[p('粉丝存量','Follower stock'),p('账号与时点','Account and moment'),p('不是活跃人群','Not active audience')],[p('点赞动作','Like action'),p('内容、窗口与字段','Content, window and field'),p('不是购买事实','Not a purchase')],[p('访问权限','Access permission'),p('所有者与批准范围','Owner and approved scope'),p('不是数据质量证明','Not data-quality proof')],[p('商业结果','Commercial outcome'),p('交易或业务来源','Transaction or business source'),p('不能从动作直接推算','Not inferred directly from actions')],[p('疑点','Concern'),p('观察与待核验背景','Observation and missing context'),p('不是已证实指控','Not a verified accusation')]],note:p('教育向编辑词典，不是检测模型、法律结论或平台官方字段全集。','Educational editorial dictionary, not a detection model, legal conclusion or complete platform field list.')},
tool:{title:p('先分列，再决定','Separate first, then decide'),intro:p('审阅一份互动宣传或达人数据时使用。','Use when reviewing an engagement claim or creator record.'),items:[p('给字段补上对象。','Attach an object to each field.'),p('保留单位、时期与来源。','Retain unit, period and source.'),p('区分存量与动作。','Distinguish stocks from actions.'),p('将访问授权单独处理。','Handle access authorization separately.'),p('为商业结果找相应事实。','Find appropriate facts for outcomes.'),p('写明未知和下一步核验。','State unknowns and the next verification.')]}
});
