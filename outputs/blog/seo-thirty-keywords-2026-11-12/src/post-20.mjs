import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:20,
summary:p('品牌怎样逐字段核对 Social Blade 与平台资料，而不是给整个工具编造一个准确率。','Reconcile Social Blade and platform information field by field rather than inventing one accuracy percentage for the whole tool.'),
description:p('How accurate is Social Balde：核对账号、字段、时点、舍入与估算假设，判断差异能否用于达人采购，不把估算当真实收入。','Answer how accurate is Social Balde by checking identity, field, timing, rounding and estimate assumptions before using a difference in creator procurement.'),
coverAlt:p('视频创作者比较两部手机上的资料，屏幕朝向本人','A video creator compares information on two phones with their screens facing him'),
answer:p('How accurate is social balde 通常指 Social Blade。不能用一个未经研究的百分比概括所有字段：账号总量、变化、排名与估算收入的来源和口径不同。先确认同一账号、字段、时点、单位与显示精度，再看差异是否仍存在。平台授权资料也要按自身定义使用，不能把任何后台截图都当作完全相同口径。本文提供品牌侧核对方法，不声称已完成第三方全量准确性审计，也不从差异指控创作者或工具欺诈。','The query how accurate is social balde usually refers to Social Blade. No unstudied percentage can summarize every field: totals, changes, rankings and estimated earnings have different sources and meanings. Match account, field, time, unit and displayed precision before deciding whether a discrepancy remains. Authorized platform information also needs its own definitions; a backend screenshot is not automatically the same measure. This guide offers a brand-side reconciliation procedure, not a completed independent accuracy audit. A difference alone does not establish fraud by a creator or provider. The goal is deciding whether a specific value can support the proposed partnership decision.'),
sections:[
s('先定义需要核对的判断','Define the decision being reconciled',`品牌要判断的是候选规模、某段增长、具体作品表现，还是采购预算？每个问题需要不同字段。用达人 Brief 写明数字将影响什么，不要为了得到一个“准不准”的标签，把所有指标混在一起。

总关注量可能作为研究背景，却不能替代本次观看或商业事件；估算收入也不能直接确定创作者报价。没有对应决定的字段，可以不进入本次核对，避免花大量时间比较无关数值。

把核对结果分为可用于该用途、需限定或待确认。它不是对整个平台或个人的永久认证。`,
`Is the brand assessing candidate scale, change during a period, an individual piece or procurement budget? Each question needs different fields. State in the creator brief which decision the number affects instead of merging everything into an accurate-or-not label.

A total may provide research context without replacing campaign viewing or a commercial event. Estimated income does not determine a creator’s quote. Omit fields irrelevant to the decision rather than spending substantial effort comparing unrelated values.

Classify a reconciled value as suitable for this use, suitable with limits or unresolved. This is not permanent certification of a provider or person. The same field may be adequate for a broad first-stage screen while insufficient for a contractual acceptance condition, so the conclusion must preserve the use for which it was assessed.`),
s('匹配账号身份，而不是相似名称','Match account identity rather than similar names',`保存平台、账号地址、可用固定标识与核验时间。显示名称可能变化，搜索结果可能指向其他账号。确认双方资料对应同一个主体后，再讨论数值；不要用一个相似用户名补齐缺失记录。

对跨平台创作者，YouTube 订阅者与 Instagram 关注者不能当同一字段。不同频道也不能因为属于同一个人就任意相加。若身份关系尚未确认，先保留未知。

研究者应能说明资料如何匹配，不必公开不必要的个人信息。账号确认与个人法律身份核验也不是同一项工作。`,
`Preserve platform, account URL, available stable identifier and review time. Display names can change and search results may identify another account. Establish that both records concern the same object before comparing values; do not fill a gap using a similar username.

For a cross-platform creator, YouTube subscribers and Instagram followers are not one field. Separate channels should not be casually added because one person appears to operate them. Retain an unconfirmed identity relationship as unknown.

A researcher should explain the match without publishing unnecessary personal information. Account matching is also distinct from verifying a person’s legal identity. This distinction keeps the procedure appropriate to the task: a scale check may need a channel identifier, while payment onboarding later requires a different authorized process and should not be improvised through a public statistics tool.`),
s('比较字段定义与范围','Compare field definitions and scope',`写下原字段名、总量或变化、账号级或作品级、时间窗口和单位。不要把过去三十天的变化与月初月末两个不同时间快照混用，也不把某条视频的观看与整个频道总观看作误差比较。

来源没有说明的部分标为未确认。若报告自己计算差值，保留输入与算式，说明它是我方计算，不是工具原生字段。小数点多不代表范围更一致。

如果两个来源描述的根本不是同一对象，正确结果可能是不可直接比较，而不是必须选一个为真。`,
`Record original field label, total or change, account or piece level, reporting window and unit. Do not interchange a rolling thirty-day movement with two snapshots from different month boundaries, or compare one video’s views with a channel’s cumulative views as an error.

Mark undocumented parts unconfirmed. If the report calculates a difference, preserve inputs and formula and label it a team calculation rather than a native field. More decimal places do not create consistent scope.

Where sources describe different objects, the appropriate result may be not directly comparable rather than choosing one as true. That conclusion still helps procurement: it prevents an unsuitable number from becoming a reason to reject a creator while identifying the specific evidence that would make a valid comparison possible.`),
s('先处理舍入，再解释差异','Resolve rounding before interpreting a discrepancy',`YouTube 的频道字段说明指出 API 的订阅总数向下保留三位有效数字。它适用于对应字段，不是 Social Blade 所有平台、所有显示都必然使用同一规则的证明。先确认实际来源和精度，再讨论能否一致。

假设同一时点原生值为 123456，而已确认采用该规则的 API 字段为 123000，两者可能只是精度不同。例子解释舍入，不是真实频道数据，也不提供一个通用误差率。

不要把这类兼容差异称为“丢失 456 位订阅者”，也不在没有适用依据时把所有不一致都归给舍入。

再假设两个已确认采用该规则的字段，背后总量从 123456 变成 123900，显示都可能仍为 123000，实际净变化却是 444。因此两个舍入快照相减为零，不证明底层没有增长，更不说明期间发生多少关注或取消关注。这不是对 Social Blade 每个日表的断言。若采购需要精确变化，索取适当字段或缩小条件；不要把想象的增长平均摊到缺失日期，制造来源没有提供的观察。`,
`YouTube’s channel field reference states that the API subscriber count is rounded down to three significant figures. This concerns that field, not proof that every Social Blade platform and display necessarily uses the same rule. Confirm actual source and precision first.

Suppose a same-time native value is 123456 and a confirmed API field using that rule reports 123000. These can be compatible at different precision. The hypothetical explains rounding; it is neither an actual channel record nor a universal error rate.

Do not describe the difference as 456 lost subscribers, or attribute every discrepancy to rounding without establishing that the rule applies. The reconciliation record should state why the two representations are compatible. Simply declaring the smaller number inaccurate would misdescribe the information it was designed to provide.

A second hypothetical concerns change. Suppose two confirmed fields both use that rounding rule, while the underlying total moves from 123456 to 123900. Both displayed values can remain 123000 even though the underlying increase is 444. A zero difference between rounded snapshots therefore does not establish zero underlying growth. It also does not reveal following events or people who left during the interval. This is a property of the illustrated measurement, not a claim about every daily table in Social Blade.

If a purchase depends on exact change, request an appropriate field or narrow the acceptance condition. Do not repair a rounded series by distributing an imagined increase equally across missing days; that creates observations the source never actually supplied or independently documented.`,['ytChannelFields']),
s('对齐采集时间与更新行为','Align collection time and update behavior',`Social Blade 的更新频率说明表示更新情况会不同，部分访问较少的资料可能较少更新并合并显示多日变化。这是供应商对自身方式的描述，不是我们独立验证的实时服务保证。

保存页面观察时间与数据本身可用时间，不因今天打开就命名为今天发生的变化。如果不同来源在不同时刻采集，先说明时间差，必要时按适当窗口再次观察。

重复核对也应有目的和停止条件，不需要无限刷新。时间仍无法匹配时，保留限制，而不是用一个假设延迟修正值制造一致。`,
`Social Blade’s update-frequency explanation says refresh behavior varies and less-visited profiles may update less frequently, grouping several days of movement. This is the provider’s description of its approach, not an independently verified real-time service guarantee.

Preserve page-observation time and available data timing. Opening a record today does not mean the movement happened today. Explain differences in collection times and, where useful, observe again within a suitable window.

Rechecking needs a purpose and stopping point rather than endless refreshes. If times remain unmatched, preserve the limit instead of inventing a delay-adjusted value to force agreement. A later observation may resolve a practical screening question, but it should remain a new record rather than silently replacing what the team actually saw before it made the earlier decision.`,['sbRefresh']),
s('估算收入需要单独解释','Treat estimated earnings separately',`Social Blade 的估算收入说明明确指出它使用假设，并非确认真实收入。不能把估算范围当银行流水、合作费或全部经营收入。品牌也不能据此宣称某位创作者虚报报价；报价可能对应另一项工作与使用范围。

如果本次要买制作、发布或许可，直接给出需求并询问实际商业条件。估算字段可以作为待理解的背景，但不应成为压价证据。

本文不采用该工具的数值范围来预测个人收入，也没有取得任何创作者的私人财务资料。预算决定依赖清楚范围和真实适用报价。`,
`Social Blade’s estimated earnings explanation explicitly describes an estimate using assumptions, not confirmed actual income. The range is not a bank record, partnership fee or total business revenue. A brand cannot use it to accuse a creator of inflating a quote that may cover different work and usage.

For production, publication or licensing, provide the assignment and request applicable commercial terms directly. An estimate may be context to understand, but should not become evidence for price pressure.

This article uses no tool range to predict individual earnings and has obtained no private creator financial records. A budget decision depends on explicit scope and an actual applicable offer. Even a perfect estimate of one revenue source would not determine the appropriate fee for additional commissioned work, so the conceptual mismatch matters separately from numerical precision.`,['sbEarnings']),
s('用一项采购差错演练核对','Rehearse one procurement error',`假设同事拿到一个较旧的工具总量，又收到创作者近期按不同窗口提供的汇总，便认为差异证明不诚实。先确认账号和字段，再发现两项窗口与显示精度未对齐。此时能说的是无法直接比较，不是已经发现欺诈。

要求任务所需的适当说明，而不是所有私人数据。若创作者提供更合适资料，记录新来源与限制；仍无法对齐时，缩小结论或继续研究。案例没有真实账号或指控。

采购可以因此暂缓某项判断，同时继续看作品能力。一个未解决数字不自动否定所有已交付素材。`,
`Suppose a colleague compares an older tool total with a recent creator-supplied aggregate using another period and interprets the difference as dishonesty. Matching identity and field reveals that window and precision were never aligned. The supported conclusion is not directly comparable, not fraud discovered.

Request appropriate clarification needed for the task rather than all private records. If better information arrives, retain its source and limits. If alignment remains impossible, narrow the conclusion or continue research. This example concerns no real account or accusation.

Procurement can defer that specific judgment while still examining work capability. An unresolved number does not automatically invalidate completed assets. The handoff should explain which decision remains pending, what evidence could resolve it and which parts of the project can proceed independently, so uncertainty does not become either an unjustified approval or a blanket rejection.`),
s('决定差异是否真的影响本次选择','Decide whether the discrepancy matters',`有些用途只需要大致规模背景，另一些需要精确的约定指标。是否重要由任务决定，不应事后随喜欢的候选改变标准。记录允许的口径与判断人，不编造行业通用容差。

如果来源限制足以改变选择，就列为待确认；如果只是适用舍入，也要在报告中保留说明。不能因差异很小就默认真假已核验，也不能因数值不同就默认合作不适合。

将社媒指标决策框架用于区分候选研究、验收和商业结果，各阶段使用合适证据。`,
`Some uses need approximate scale context; others require a precisely agreed measure. Materiality follows the task and should not change afterward to favor a preferred candidate. Record the applicable definition and decision owner without inventing an industry-wide tolerance.

If a source limit could change selection, keep it unresolved. If it is an applicable rounding issue, retain that explanation in the report. A small difference does not verify authenticity, and unequal values do not establish poor fit.

Use the social media metrics decision framework to distinguish research, acceptance and business outcomes, with evidence suited to each stage. This keeps a broad screening measure from silently becoming an exact contractual promise and prevents the team from demanding precision that the selected public source was never designed to supply.`),
s('把结论写成字段级说明','Write a field-level conclusion',`一份合适结论可以写为：账号已匹配，字段相同，时间仍未对齐，因此只作为规模背景，不用于本次增长验收。另一种可以是已确认舍入规则与输入兼容，但不据此判断受众身份。结论本身应包含用途与限制。

不要把它缩成“工具准确”或“达人数据不准”。新资料到来时保留版本与原因，不静默覆盖旧判断。需要向报告接收人纠正的，说明影响到哪些结论。

研究者与批准人角色也分开：整理证据不等于自动批准采购，批准采购也不抹去证据限制。`,
`A suitable conclusion might state that identity and field match but timing does not, so the value is scale context rather than growth acceptance evidence. Another may establish compatibility under a confirmed rounding rule without judging audience identity. Include use and limits inside the conclusion.

Do not reduce it to tool accurate or creator data wrong. Version new evidence with reasons rather than silently overwriting an earlier judgment. Where recipients need a correction, identify affected conclusions.

Separate researcher and approver roles too: assembling evidence does not automatically approve procurement, and approval does not remove a source limitation. The statement should remain understandable when copied into another document, because detached labels are precisely how a careful comparison can become an unsupported claim about a person or service later.`),
s('把准确性研究留在能回答的范围','Keep accuracy research within its actual scope',`完成时保存对象、字段、时间、精度、来源、差异、用途与决定。若没有系统抽样与参照定义，就不发布一个“百分之多少准确”的总体结论。单个兼容例子也不能证明所有平台都可靠。

Social Blade 可以进入品牌研究工具箱，但需要按字段与用途理解。真正有用的问题不是它能否替代所有核验，而是哪项资料能在什么条件下支持这次达人合作。

清楚的核对记录帮助团队尊重创作者、理解工具限制，并在证据不足时作出适当下一步。`,
`Preserve object, field, time, precision, source, discrepancy, use and decision. Without systematic sampling and a reference definition, publish no overall accuracy percentage. One compatible example does not establish reliability across every platform.

Social Blade can be part of brand research when understood by field and use. The useful question is not whether it replaces every verification task, but which information supports this creator assignment under which conditions.

A clear reconciliation record helps the team treat creators fairly, understand tool limitations and choose an appropriate next step where evidence is insufficient. It should let the next owner reproduce the reasoning without assuming the analysis certified either a whole account or every number offered by the provider.`)
],
links:[link('达人 Brief','creator brief','write-a-useful-campaign-brief'),link('社媒指标决策框架','social media metrics decision framework','social-media-metrics-creator-decision-tree')],
table:{title:p('Social Blade 字段核对卡','Social Blade field reconciliation card'),headers:[p('字段','Check'),p('记录','Record'),p('结论边界','Conclusion limit')],rows:[[p('对象','Identity'),p('平台与同一账号','Platform and same account'),p('相似名不够','A similar name is insufficient')],[p('口径','Definition'),p('总量、变化与窗口','Total, change and window'),p('不同对象不可直接比','Different objects may be incomparable')],[p('精度与时间','Precision and time'),p('适用舍入和采集时刻','Applicable rounding and collection time'),p('不强行修正未知','Do not force unknown adjustments')],[p('用途','Use'),p('规模、验收或商业判断','Scale, acceptance or commercial decision'),p('不提供通用准确率','No universal accuracy rate')]],note:p('123456 与 123000 的数字是假设，用于解释已确认的 API 舍入规则。','123456 and 123000 are hypothetical values illustrating a confirmed API rounding rule.')},
tool:{title:p('使用差异前核对','Before acting on a discrepancy'),intro:p('先对齐对象，再解释数值。','Align the objects before interpreting the values.'),items:[p('账号与字段真正相同。','Identity and field actually match.'),p('时间、窗口和单位已记录。','Time, window and unit are recorded.'),p('舍入只在有依据时适用。','Rounding is applied only with evidence.'),p('估算没有被写成真实财务。','Estimates are not actual financial records.'),p('结论包含具体用途与未知。','The conclusion contains its use and unknowns.')]}
});
