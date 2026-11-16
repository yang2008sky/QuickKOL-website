import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:9,
summary:p('结项时保留公开观看、实时估计和指定窗口记录的原始含义，再决定差异如何说明，避免把不一致直接归为造假。','At campaign close, retain the meaning of public views, realtime estimates and windowed records before explaining differences or drawing conclusions.'),
description:p('Count views：核对达人 YouTube 视频的公开数、实时估计与窗口报表，结合当前计数说明，区分观看、独立观众和品牌成果。','Reconcile sponsored YouTube view counts across public displays, realtime estimates and reporting windows, without confusing views, unique people or sales.'),
coverAlt:p('哪个计数与哪个窗口组成的蓝色和珊瑚色数据拼贴图','A blue and coral data collage asks which count and which window'),
answer:p('核对达人 YouTube 观看数，先固定作品链接、字段、来源、窗口与检索时间，再比较同类记录。公开观看数、Realtime 估计和指定期间报表不一定回答同一问题，也不一定同时更新。YouTube 当前说明还列出 2026 年 8 月 24 日跨格式观看起算更新，因此不能沿用没有日期的旧口径。差异应先检查定义与条件，保留尚未解释的部分；观看不是独立人数，也不能直接证明赞助订单或造假。','To count views for a sponsored YouTube piece, fix the work link, field, source, reporting window and retrieval time before comparing like records. Public displays, Realtime estimates and period reports may answer different questions and update at different times. YouTube’s current guidance also identifies an August 24, 2026 cross-format counting update, so undated old definitions are unsafe. Investigate conditions before interpreting a discrepancy, retain unresolved differences and keep views distinct from unique people, sponsored orders or proof of manipulation.'),
sections:[
s('从一条明确作品开始','Start with one defined work object',`先确认本次约定的作品，而不是只写频道名称。原始视频、剪辑版、Shorts 与后续转载，可能是不同对象。链接、标题变化和页面位置也应能让审阅者找到同一条内容。

写下品牌需要回答的问题：是否完成发布、指定窗口有多少相应观看，还是内容值得怎样改进。达人指标决策指南帮助把字段对应到实际决定。结项不必把所有公开计数都收集一遍。

若双方谈的是不同作品，先纠正对象，再处理数值。把完整频道累计数与一条赞助视频比较，得到的差异即使巨大也没有解释价值。定义对象是后续核对的起点，不是对任何一方的诚信判断，也不要求查看创作者无关内容或私人账户。`,
`Identify the agreed work rather than name only the channel. An original upload, an edited version, a Short and a later repost can be different objects. Links, title changes and page locations should let a reviewer find the same piece.

State the brand’s question: whether publication occurred, how many applicable views fell in a defined window or what the content suggests for improvement. The creator-metrics decision guide connects fields with decisions. Closing a campaign does not require collecting every public counter.

If parties discuss different pieces, correct the object before the number. Comparing a whole channel’s cumulative total with one sponsored upload produces a difference without explanatory value, however large it looks. Object definition begins reconciliation; it is not an integrity judgment and does not require unrelated work or private-account access. It gives both sides a shared reference so later questions concern an identifiable record instead of several different meanings hidden behind the same informal description of the campaign video.`),
s('先核对当前观看定义','Check the current view definition',`YouTube 的观看计数说明目前写明，自 2026 年 8 月 24 日起，各格式在视频开始播放时计入观看，并区分相关收益与资格依据。本稿核验于 2026 年 11 月 16 日，不把旧的统一观看秒数规则继续当作当前公共计数定义。

品牌需要保留所用字段与当时说明，尤其当报告跨越口径变化。公共观看增加，不自动意味着所有人看完、理解了产品，或符合某项收益资格。问题不同，就需要对应字段。

本文不判断具体播放是否被平台接受，也不提供刷量方法。计数规则由平台处理；团队能做的是正确解释自己看到的记录，并避免把某个未经核实的网上经验复制进合作验收条件。`,
`YouTube’s view-count explanation currently says views across formats are counted when playback starts from August 24, 2026, while distinguishing relevant earnings and eligibility bases. Reviewed November 16, 2026, this article does not carry an old universal watch-duration rule forward as the current public-count definition.

Retain the field and applicable explanation, especially when reporting crosses a definition change. More public views do not automatically mean everyone finished, understood the product or satisfied a monetization condition. Different questions need appropriate fields.

This article determines no individual playback’s acceptance and supplies no inflation method. The platform handles counting. The team’s task is interpreting the record it can actually see and avoiding an unverified online rule in campaign acceptance conditions. That distinction matters when a familiar number appears to change meaning over time: a report should explain the relevant basis rather than present historical and current figures as directly comparable simply because both columns are called views.`,['ytViews']),
s('记录窗口与观察时间','Record both reporting window and retrieval time',`“截至今天”与“本周”不是同一窗口。公开页面的累计值、报告选择期间，以及保存截图的时间，需要各自名称。时区与作品实际发布时间也可能影响边界，先保留原记录，不自行假定。

两个截图取于不同时间，不能用差额直接说明某个团队漏报；同一时间读取，也不保证数据窗口一致。核对时先把这些条件摆到同一张工作表中，再判断是否有可比较部分。

不必每天追求所有数字完全相等。结项可以约定合理记录时点，并保留后续修正路径。这个时点是双方工作安排，不是平台保证数据从此不再变化。若出现新资料，说明哪一项记录被替代以及为什么，比删除旧记录而不留解释更清楚。`,
`“As of today” is not the same window as this week. A public cumulative display, a selected report period and the time a screenshot was saved need separate names. Time zones and the actual publication moment can affect boundaries; preserve the original record instead of assuming them.

Screenshots taken at different times do not support an immediate claim that somebody underreported the difference. Reading at the same moment does not guarantee equivalent periods either. Put these conditions in one working record before identifying any comparable portion.

There is no need to make every number equal each day. Agree a reasonable recording point for closeout and a route for later correction. That point is a working arrangement, not a platform guarantee that data will never change afterward. When new material arrives, identify the replaced record and reason instead of deleting the earlier object without explanation. This gives the final report a traceable basis while avoiding the false precision of a total whose cutoff nobody can reconstruct.`),
s('把实时估计放在适当位置','Give realtime estimates their proper role',`YouTube 的频道概览说明介绍 Realtime 的近期表现与 60 分钟、48 小时比较。它适合早期观察，不应被直接当成任何结项窗口的最终累计。观看计数帮助也提醒实时估计可能不同于观看页。

因此，先问对方提供的是什么报告，再决定如何引用。实时记录可以说明某段近期活动，但不能靠把图上柱状值相加，就声称获得全部历史最终观看。不同格式筛选也需保留。

如果品牌需要及时反馈，可以把初步观察与结项记录分开。这样运营能够讨论刚发布内容，而不把早期估计写成最终成果。资料用途清楚，比要求创作者用一个无法满足的截图证明所有窗口更实际。`,
`YouTube’s channel-overview guide describes recent Realtime performance and comparisons for 60 minutes and 48 hours. That supports early observation, not substitution for the final cumulative total of any closeout window. The counting help also warns that realtime estimates may differ from the watch page.

Ask which report was supplied before quoting it. A realtime record can describe recent activity without becoming all historical finalized views by adding chart columns. Retain any content-format filter too.

If the brand needs lead to feedback, separate an initial observation from the closeout record. Operations can discuss newly published work without labeling the early estimate a final result. Explicit purpose is more practical than demanding one screenshot prove every period. It also prevents a report from switching between realtime and cumulative fields whenever one happens to produce a larger number. A consistent record choice should follow the question and agreed window, not the desire for the most flattering total available at the moment.`,['ytOverview']),
s('不把观看总数改叫人数','Do not rename views as people',`YouTube 的独立观众说明把 Unique viewers 描述为指定期间的估计观众规模，并解释跨设备、重复观看等处理。它与公开观看不是同一对象，也不是本篇验证过的精确个人身份清单。

如果品牌想知道大致接触了多少独立观众，应请求适当字段与窗口，而不是把播放次数换个标题。不同视频的独立观众也不适合直接相加，因为同一人可能看多条内容。

没有相关字段时，就报告观看并说明人数未知。这样不会削弱已完成的工作，只是让结论保持准确。也不应从总量与人数差别推断有人作弊；重复观看与估计处理，本就需要按不同定义理解。`,
`YouTube’s unique-viewer explanation describes an estimated audience for a period and accounts for matters such as devices and repeat viewing. It is different from public views and is not an exact personal-identity list verified by this article.

If the brand needs an estimate of distinct viewers, request the appropriate field and window instead of renaming plays. Unique viewers across separate videos should not simply be added because one person may watch several pieces.

Where that field is unavailable, report views and leave people unknown. This does not erase completed work; it keeps the conclusion accurate. Nor does a difference between total views and estimated people prove cheating. Repeats and estimation need their own definitions. A report can preserve the useful viewing record while declining a larger claim about audience size, rather than treating every limitation as a reason either to reject the collaboration or to invent a more impressive number for the final presentation.`,['ytUnique']),
s('用假设差异练习核对','Rehearse reconciliation with a hypothetical difference',`假设同一视频公开页在周二显示 12,000 次，创作者提供的上周报告为 9,000 次，另一张图是最近 48 小时估计。这不是实际客户数据。三个值不能先被叫作互相矛盾，因为对象相同而窗口不同。

团队先记录各自期间、检索时间与字段，再请求真正需要的同窗口记录。无法拿到时，结论是当前资料不能直接比较，不是补出一个中间数，也不是选择最大值作为成绩。

如果条件已对齐而仍有差异，可以保留未解释部分并继续问适当问题。练习不承诺所有差异都能完全消除。核对的成功，在于知道哪些记录能支持结论、哪些还不能，而不是强迫所有来源显示同一个数字。`,
`Suppose a public page shows 12,000 views on Tuesday, a creator supplies a report of 9,000 for the preceding week and another chart concerns the latest 48-hour estimate. These are not client figures. Shared video identity does not make different periods contradictory.

Record each period, retrieval time and field, then request the same-window record actually needed. If it is unavailable, the finding is that the material cannot yet be compared directly. Do not invent a number between them or select the largest value as performance.

If conditions align and a difference remains, retain the unresolved part and ask a suitable follow-up. The exercise does not promise every difference can disappear. Successful reconciliation identifies which records support the conclusion and which do not, rather than forcing every source to display one number. This lets the team close a defined part of the report while leaving a specific question open, instead of delaying every unrelated decision until an impossible appearance of total numerical agreement has been achieved.`),
s('把核对结果写成具体状态','Write a specific reconciliation state',`可以使用“对象一致，窗口待确认”“同窗口字段已对齐”“仍有未解释差异”等清楚状态。它们说明资料关系，不给创作者打诚信分数。若发现引用错误，修正对应记录与结论，不扩大成对所有历史表现的评价。

平台可能确认与调整互动计数，公开帮助也说明计数可能暂缓或改变。不要把一次冻结、下降或截图差别自动当作刷量证据；同样，不应因为存在正常调整机制就忽略实际问题。

下一步应有对象与负责人：补充原始窗口、解释筛选条件，或更新报告字段。不能回答的问题继续标明。这样的交付能帮助品牌和达人共同纠正记录，而不是让双方围绕一个没有定义的“正确播放量”争论。`,
`Use states such as object matches and window unconfirmed, same-window fields aligned, or unexplained difference remains. These describe records rather than assign a creator an honesty score. Correct an identified citation error and its affected conclusion without expanding it into a judgment of every historical result.

The platform can confirm and adjust engagement, and its public help describes temporarily slowed or changed counts. A freeze, decline or screenshot difference is not automatic evidence of inflation. Equally, normal adjustment mechanisms do not justify ignoring a concrete problem.

Assign an object and owner to the next action: supplying an original window, explaining a filter or updating the reported field. Keep unanswered questions explicit. This helps brand and creator correct a record together instead of debating an undefined correct view count. It also distinguishes a clerical correction from a substantive unresolved concern, allowing each to receive the attention it needs without treating every discrepancy as either trivial or conclusive proof of misconduct.`),
s('解释表现时另选合理比较','Choose a separate comparison for interpretation',`观看核对解决记录是否在同一口径，不能自动解释为什么表现变化。要学习内容，可采用 YouTube 可比内容组方法，按相关格式与任务选择参照，而不是随意挑一个历史最高值。

品牌产品、发布时间、投放与内容结构等背景，需要适当记录。它们可能帮助提出解释，但同时发生不等于已经证实原因。不要让一张核对表承担完整归因分析。

若本次还涉及订单或合格咨询，应另用相应业务记录。观看可以是有用的观察，却不是所有商业成果的替身。先核对、再按明确问题解释，能避免用漂亮总量掩盖实际任务，也能避免因为没有销售数据就否认内容已经交付。`,
`Count reconciliation asks whether records share a basis; it does not automatically explain a performance change. For content learning, the comparable YouTube content-group method selects references by relevant format and assignment rather than an arbitrary historical maximum.

Retain appropriate context such as product, publication timing, promotion and structure. These may support an explanation without co-occurrence proving causation. A reconciliation table should not impersonate a complete attribution analysis.

Orders or qualified inquiries need corresponding business records. Views can be useful observations without substituting for every commercial outcome. Reconcile first, then interpret against an explicit question. That avoids using an attractive total to conceal the assignment while also avoiding rejection of completed content merely because sales data is absent. Both the creator’s work and the brand’s results can be discussed accurately when their evidence remains distinct, rather than allowing one count to become a universal measure of production quality, audience comprehension and business return.`),
s('交接可复核的结项记录','Hand over a reviewable closeout record',`结项保留作品、字段、来源、期间、检索时间、适用定义和未解决差异。记录无需复杂；另一位审阅者应能找到同一对象，知道哪些比较已成立，哪些仍要确认。

后续更新说明影响哪条记录和结论，不悄悄把原值替成另一种口径。没有执行的核验，不写成通过；没有取得的私人数据，不写成已验证。可以明确完成发布核对，同时保留观看解释的问题。原始记录需要让适当负责人能够找到，而非只留一张无法追溯的汇总图。

Count views 对达人营销的价值，是让品牌与创作者基于同一个可理解事实讨论工作。把口径、窗口和未知留下来，数字才有可靠用途，而不是变成要求双方相信的装饰。`,
`Retain work, field, source, period, retrieval time, applicable definition and unresolved differences. The record need not be elaborate. Another reviewer should find the same object and understand which comparisons hold and which require confirmation.

When updating, state the affected record and conclusion instead of silently replacing an old value with another basis. Do not mark unperformed verification as passed or unavailable private data as verified. Publication can be confirmed while a viewing interpretation remains open. Keep the underlying reference available to an appropriate reviewer rather than retain only an untraceable summary chart.

Counting views helps influencer marketing when brand and creator can discuss work from the same understandable fact. Preserve definitions, windows and unknowns so the number has a defensible purpose rather than become decorative certainty. The final deliverable should make a next decision easier: accept an identified record, request a bounded clarification or limit a conclusion. It does not need to eliminate every difference in the platform’s reporting system to be an honest and useful closeout.`)
],
links:[link('达人指标决策指南','creator-metrics decision guide','social-media-metrics-creator-decision-tree'),link('YouTube 可比内容组方法','comparable YouTube content-group method','youtube-analytics-sponsored-content-cohorts')],
figures:[{file:'youtube-view-count-source-windows.svg',afterSection:4,alt:p('公开页面、实时估计与报告记录分别对应不同来源和窗口','Public display, realtime estimate and reporting record are shown with separate sources and windows'),caption:p('先对齐对象、字段与窗口，再解释数字差异。','Align object, field and window before interpreting numerical differences.')}],
table:{title:p('观看记录的核对顺序','Order for reconciling viewing records'),headers:[p('检查','Check'),p('保留','Retain'),p('避免','Avoid')],rows:[[p('作品','Work object'),p('实际链接与版本','Actual link and version'),p('频道累计代替单条作品','Channel totals replacing one piece')],[p('字段','Field'),p('原始名称与适用定义','Original name and applicable definition'),p('观看改叫人数','Renaming views as people')],[p('时间','Time'),p('报告窗口与检索时间','Reporting window and retrieval time'),p('不同期间直接比较','Directly comparing different periods')],[p('差异','Difference'),p('已解释与待确认部分','Explained and open portions'),p('不一致即认定造假','Treating a mismatch as proof of fabrication')]],note:p('结项核对方法，不是平台完整审计、实时计数器或单一欺诈检测。','A closeout method, not a complete platform audit, realtime counter or one-signal fraud detector.')},
tool:{title:p('结项前的观看核对','Viewing checks before closeout'),intro:p('按顺序解释当前记录。','Explain the current record in order.'),items:[p('固定作品与版本。','Fix the work and version.'),p('确认原始字段和当前定义。','Confirm original field and current definition.'),p('分别记录期间与读取时刻。','Record period and retrieval time separately.'),p('把实时估计单独命名。','Name realtime estimates separately.'),p('区分观看、独立人数与订单。','Separate views, unique people and orders.'),p('保留未解释差异与下一步。','Retain unresolved differences and the next action.')]}
});
