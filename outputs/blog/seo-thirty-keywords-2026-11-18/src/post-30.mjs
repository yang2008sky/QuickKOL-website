import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:30,
summary:p('把公开订阅快照、创作者提供的授权资料和项目时间放回同一记录，解释数字差异，并避免将频道净变化直接归因给一条合作。','Reconcile public subscriber snapshots, creator-supplied authorized information and campaign timing. Explain differences without attributing channel-wide changes to one partnership.'),
description:p('品牌怎样使用 YouTube 订阅追踪：核对频道身份、公开缩写、API 精度、授权订阅动作和共同观察期，清楚报告差异与归因限制。','Use a YouTube subscriber tracker in creator campaigns: reconcile channel identity, public rounding, authorized metrics and observation periods without inventing attribution.'),
coverAlt:p('公开快照、授权频道资料和共同观察期三条记录在同一编辑框架中对齐','An editorial framework aligns public snapshots, authorized channel information and a common observation period'),
answer:p('YouTube subscriber tracker 可以帮助记录达人频道规模如何变化，但先确认它追踪哪种数字：公开缩写、API 返回值、第三方快照，还是创作者获准分享的 Studio 与 Analytics 资料。相同频道的两个数字不一致，可能涉及精度、时间或指标范围；不能直接当作异常事实，更不能把净增长自动算成品牌合作带来的新增。','A YouTube subscriber tracker can help document changes in a creator channel’s scale, but first establish what it tracks: a shortened public count, API value, third-party snapshot or Studio and Analytics information the creator is authorized to share. Two figures for the same channel can differ in precision, time or metric scope. A difference is not automatically evidence of an anomaly, and net growth is not automatically new subscribers caused by a brand partnership.'),
sections:[
s('先明确订阅追踪的决策用途','Define the decision before tracking the number',`品牌可能需要确认候选频道的大致规模、保存合作开始时的背景，或解释项目复盘中的数字差异。每项问题需要的资料不同，不必先采购一个声称实时的计数器。

订阅数与活跃观众文章解释规模和实际观看的区别。本篇处理多份记录如何对齐，让项目报告知道自己比较的是否同一个数字。

先记录读者需要回答的问题。若要判断某条节目是否适合合作，仅有频道订阅轨迹不够，还要研究作品、相关受众与制作范围。

不要把追踪做成额外的数据承诺。QuickKOL 可帮助理解任务与研究相关达人，具体频道数字、授权资料和结果仍需在其来源核验。`,
`A brand may need to confirm a candidate channel's approximate scale, preserve context at the start of a partnership or explain a difference in a campaign review. Each question needs different evidence; buying a counter described as real time need not come first.

The subscriber-count and active-audience article distinguishes scale from actual viewing. This article addresses reconciling several records so the campaign report knows whether it compares the same number.

Write the question the reader needs answered. Deciding whether a particular programme suits a partnership requires more than a subscriber trajectory: research the work, relevant audience and production scope too.

Do not turn tracking into an unsupported product promise. QuickKOL can help interpret the task and research relevant creators, while channel figures, authorized information and outcomes still need checking at their source. A defined question also limits unnecessary collection, because the team can ask for the evidence it actually needs instead of requesting broad account access without a reason.`),
s('先确认记录属于同一个频道','Establish that the records concern the same channel',`保存实际频道地址与可确认的频道身份，不只保存显示名。显示名相似、截图被裁切或报告缺少来源时，先确认归属再讨论增长。

记录每个值的来源、观察时间与时区，并保留原始展示格式。把 123K 直接改成一个看起来精确的整数，会让后来的人误以为这些位数曾被实际观察。

第三方记录需要说明它从哪里取得资料、何时取样，以及是否估计。若无法确认，不把其标签“实时”当作后台精确计数的证据。

允许状态写为未核验。先建立可靠匹配，再分析差异，比把不同频道或不同时间的数据拼成一条漂亮曲线更有价值。`,
`Retain the actual channel URL and confirmable identity rather than only a display name. Similar names, cropped screenshots or source-free reports call for identity confirmation before a growth discussion.

Record each value's source, observation time and time zone, preserving its original display. Converting 123K into an apparently exact integer can lead a later reader to believe every digit was actually observed.

A third-party record needs its data source, sampling time and estimation status explained. If those are unknown, a real-time label is not evidence of an exact owner-side count.

Allow the state to remain unverified. Establishing a reliable match before interpreting differences is more valuable than joining different channels or times into an attractive curve. Keep the supplied artifact as well as the transcription, where appropriately authorized, so a reviewer can distinguish an original abbreviated display from precision introduced during report preparation.`),
s('公开缩写存在明确的显示步长','Recognize the display steps in public counts',`YouTube 的订阅数说明区分公开缩写和创作者查看路径。官方示例中，1,234 名订阅者显示为 1.23K；在 1,000 至 9,999 区间，公开计数按每 10 名新增更新。

因此公开页面保持同一个缩写，不能证明后台完全没有变化。跨过显示步长时出现跳动，也不能单独证明短时间异常增长。

在品牌记录中保留“公开缩写”标签。如果只是为候选规模提供背景，可以使用这个精度，不必将看不见的位数补成估计事实。

需要更细的项目解释时，再说明为什么应请求适当的创作者资料。公开记录的限制不是一个必须用猜测修补的缺陷，而是报告应明确保留的口径。`,
`YouTube’s subscriber-count guide distinguishes shortened public counts from the owner's viewing route. Its example shows 1,234 subscribers as 1.23K; within the 1,000–9,999 range, the public count updates in steps of ten new subscribers.

An unchanged abbreviation therefore cannot establish that nothing changed behind it. A visible jump when a display step is crossed cannot by itself establish abnormal growth over a short period either.

Keep the public abbreviation label in the brand's record. If the task is candidate-scale context, that precision may be adequate without filling unseen digits with an estimated fact.

If the project needs a finer explanation, state why appropriate creator-supplied information is needed. Public precision is a reporting boundary to preserve, rather than a defect that must be repaired with guesses. A reviewer should be able to see both the figure and the level of detail at which the team actually observed it.`,['ytCount']),
s('API 返回数字也不自动代表精确计数','A numeric API value is not automatically exact',`YouTube Data API 的频道定义说明，statistics.subscriberCount 向下取至三位有效数字。数字通过接口返回，并不等于它具备所有订阅位数的精度。

例如按这个规则，假设实际值为 123,456，三位有效数字的向下取值是 123,000。这是规则演算，不是本文观察到的某位达人实时记录。

如果工具显示更细且持续变化的数字，先了解其来源与计算。不能只因界面有动画、每秒刷新或显示整数，就将估计当成已验证后台结果。

品牌需要的不是最多位数，而是可解释的资料。保留接口字段、来源说明与观察时间，避免把精确外观误写为精确事实。`,
`YouTube Data API’s channel definition says statistics.subscriberCount is rounded down to three significant figures. A number returned through an interface therefore does not automatically contain every subscriber digit.

For example, applying that rule to a hypothetical actual value of 123,456 produces 123,000. This is an illustration of the rule, not a live observation of a named creator.

If a tool displays finer continuously changing numbers, establish the source and calculation first. Animation, second-by-second refreshing or integer formatting should not turn an estimate into a verified owner-side result.

The brand needs explainable evidence rather than the largest number of digits. Retain the field, source explanation and observation time so apparent precision is not reported as factual precision. Where an estimate is useful for exploratory context, label it accordingly and keep it separate from the source values that were actually obtained.`,['ytDataCount']),
s('限定授权资料的任务与范围','Bound requests for authorized information',`YouTube 的订阅数说明提供创作者在 Studio 的 Analytics 总览中查看实时卡片和实时订阅计数的路径。品牌可以在有需要时请对方分享适当范围的资料，不需要索取密码。

说明要核对哪段时期、哪个频道和哪类指标。创作者可以提供获准分享的截图或导出，保留日期与范围，遮去无关个人或商业信息。

不要把某一刻的实时计数与另一份历史期报告直接比较。先确认每份资料描述的是时间点存量，还是一段时间里的订阅动作。

请求还应说明接收人、保存目的和审阅后怎样处理。若只需核对某个时期，就不默认申请持续账户连接。资料用于一次合作解释，与允许未来任何项目持续访问，是不同范围，应由对方了解并确认。

对方没有提供资料时，记录未取得，而不是把公开值改写成授权精确值。证据层级可以不同，但在报告中必须保持可辨认。最终只交付实际需要的资料及对应解释。`,
`YouTube’s subscriber-count guide gives owners a route through Studio Analytics, the Overview real-time card and live subscriber count. Where needed, the brand can ask the creator to share appropriately scoped information without requesting a password.

Specify the period, channel and metric being checked. The creator can supply an authorized screenshot or export retaining date and scope while excluding unrelated personal or commercial information.

Do not directly compare a live count at one moment with a historical-period report. Establish whether each artifact describes a point-in-time stock or subscription actions over a period.

The request should also identify the recipient, retention purpose and handling after review. Checking one period does not automatically require a continuing account connection. Information supplied to explain one partnership differs from permission for indefinite access across future projects. Let the creator understand and confirm that distinction. If a narrower artifact answers the question, the brand can use it without expanding the request, and document any remaining limitation instead of treating broader access as a prerequisite for collaboration.

If the information is not supplied, record it as not obtained rather than relabelling a public value as an authorized exact count. Different evidence levels can coexist, but they must remain distinguishable. Deliver only the information and explanation needed for the actual review. This preserves a workable collaboration when a creator can answer a bounded question but cannot or does not agree to provide broader internal reporting.`,['ytCount']),
s('频道订阅动作与视频范围不同','Distinguish channel actions from video-scoped actions',`YouTube Analytics 的订阅指标定义将 subscribersGained 与 subscribersLost 分别定义为订阅和取消订阅动作。频道报告覆盖相应来源；限定单条视频的维度或筛选时，范围只包含该视频观看页的动作。

因此把几条赞助视频的指标相加，不应自动当成频道同期全部订阅变化。观众可能在其他位置完成动作，报告范围本身就不同。

保留增与减，不只展示一个净值。若计算描述性净动作，可用同范围新增减去取消，并写清时期、单位及过滤条件。

这仍不是合作造成的增量订阅。视频相关动作、频道总变化与因果效果是不同问题，需要不同证据，不能用同一个增长标题掩盖差别。`,
`YouTube Analytics’ subscriber-metric definitions describe subscribersGained and subscribersLost as subscription and unsubscription actions. Channel reports include the relevant sources, while a video dimension or filter limits the metric to actions from that video's watch page.

Adding metrics for several sponsored videos should therefore not automatically be treated as all channel subscription change in the period. People can act elsewhere, and the report scopes differ.

Preserve gains and losses rather than presenting only a net figure. A descriptive net action calculation can subtract losses from gains within the same scope, with period, unit and filtering stated.

That still does not establish incremental subscriptions caused by the partnership. Video-associated actions, channel-wide change and causal effect are different questions requiring different evidence. A single growth heading should not conceal the distinction. Explain what the arithmetic describes before comparing it with a public snapshot or a broader campaign objective.`,['ytSubscriberMetrics']),
s('给项目划定共同观察期','Create a common observation period for the campaign',`先确定合作内容的实际发布时点，再安排报告窗口。准备完成、预定排期与真实公开不是同一个时间，不能混作增长起点。

如果不同工具的取样时间不一致，保留差异。尽可能补充共同时间范围的资料；无法补齐时，说明比较只能提供有限背景。

社交数据对账方法有助于将定义、来源和时间放在一起。频道同期还有其他内容、外部报道或活动时，也记录这些背景，不把一切变化归给一位品牌合作方。

更换窗口并不会自动解决因果问题。它让描述更可比，但若要声称新增来自某项合作，仍需要支持该结论的设计与资料。`,
`Establish the work's actual publication time before arranging the report window. Preparation completed, scheduled release and real public availability are different times and should not be mixed as the start of growth.

If sampling times differ between tools, preserve the difference. Obtain a common period where possible; where it cannot be supplied, explain that the comparison offers only limited context.

The social-data reconciliation method helps combine definitions, sources and times. Record relevant concurrent content, outside coverage or other activity instead of assigning every change to one brand partnership.

Changing the window does not automatically solve causality. It makes description more comparable, while claiming that new subscribers came from a particular collaboration still needs supporting design and evidence. The useful report can separate what happened during a campaign from what has actually been established as an effect of that campaign. The former is a dated observation; the latter is a stronger conclusion.`),
s('出现差异时先排查记录条件','Investigate record conditions before interpreting a difference',`先检查频道是否一致、单位是否相同、显示是否缩写、时期是否重叠，以及指标是存量还是动作。很多问题在这一步就能被清楚定义，而不需要给创作者贴标签。

YouTube 的订阅数说明也指出，平台会核验账号与动作，并可能更正指标；关闭账户与识别为垃圾订阅的账号不会计入总数。本文不能据一个下降诊断具体原因。

若现有资料仍解释不了差异，就保留未解决状态与需要补充的证据。不要把怀疑写成已证实事实，或用一张曲线指控个人。

报告可以说明目前不宜用订阅变化评估合作效果，同时继续审阅内容是否准确完成任务。一个未解决数字，不必被扩大成对整项合作的无依据结论。`,
`First check channel identity, units, abbreviation, overlapping periods and whether the metric is a stock or an action count. Many questions can be defined at this stage without assigning a label to the creator.

YouTube’s subscriber-count guide also describes verification of accounts and actions and possible metric corrections; closed accounts and identified spam subscriptions do not count towards the total. This article cannot diagnose a particular decrease from that general explanation.

If the existing material still does not explain the difference, retain an unresolved state and the evidence needed next. Suspicion should not become an established fact, and a curve alone should not accuse an individual.

A report can say that subscription change is presently unsuitable for judging partnership effect while continuing to review whether the content fulfilled its task accurately. An unresolved number need not become an unsupported conclusion about the entire collaboration. The next request should be proportionate to the question still open.`,['ytCount']),
s('用假设记录演练对账与交接','Rehearse reconciliation using hypothetical records',`假设品牌保存一张公开频道快照，之后收到创作者的同频道资料，但观察时间与报告范围不同。先保留两份原记录，不强行覆盖成一个“正确数字”。

项目负责人标明公开缩写与授权资料的区别，再请求能合理对齐的时期。若只拿到视频观看页的订阅动作，就不把它写成频道全部增长。

最终交付中列出已解释差异、仍未知事项与对本次决策的影响。没有归因证据，就只说观察到变化，不说品牌带来了对应数量的新订阅。

这个例子没有真实达人结果。YouTube subscriber tracker 在达人营销中的价值，是让记录可核对、口径可解释，并帮助团队知道哪些合作结论已经有依据。`,
`Imagine a brand retaining a public channel snapshot and later receiving information from the same creator channel with different observation times and report scope. Preserve both originals rather than overwrite them with one supposedly correct number.

The project owner marks the distinction between abbreviated public and authorized information, then requests a reasonably aligned period. If only video-watch-page subscription actions are available, they are not described as all channel growth.

The handoff lists explained differences, remaining unknowns and their implications for the decision. Without attribution evidence, it reports observed change rather than saying the brand produced that many new subscribers.

This example contains no actual creator outcome. A YouTube subscriber tracker serves creator marketing by making records checkable, definitions explainable and the basis for partnership conclusions visible. The final record should enable another reviewer to reproduce the comparison and recognize its limits without needing the original analyst to translate an unlabeled chart from memory.`)
],
links:[link('订阅数与活跃观众文章','subscriber-count and active-audience article','youtube-subscribers-count-and-active-viewers'),link('社交数据对账方法','social-data reconciliation method','social-blade-accuracy-measurement-reconciliation')],
figures:[{file:'youtube-subscriber-count-reconciliation.svg',afterSection:6,alt:p('公开快照与授权频道记录通过共同观察期对齐，并保留精度和指标范围','Public snapshots and authorized channel records align through a common observation period while retaining precision and metric scope'),caption:p('先统一身份、来源、精度与时间，再讨论变化；对齐记录不等于证明合作归因。','Align identity, source, precision and time before interpreting change; reconciling records does not prove campaign attribution.')}],
table:{title:p('订阅追踪的对账字段','Subscriber-tracking reconciliation fields'),headers:[p('字段','Field'),p('保存内容','Retain'),p('避免推断','Avoid inferring')],rows:[[p('频道身份','Channel identity'),p('确认的频道地址','Confirmed channel URL'),p('同名即同一频道','Same name means same channel')],[p('数字来源','Count source'),p('公开、API、授权或估计','Public, API, authorized or estimated'),p('接口数字一定精确','API value is necessarily exact')],[p('时间与精度','Time and precision'),p('时区、快照与缩写','Time zone, snapshot and abbreviation'),p('未显示位数为零','Unseen digits are zero')],[p('指标范围','Metric scope'),p('存量、动作、频道或视频','Stock, actions, channel or video'),p('视频动作等于频道总变化','Video actions equal channel change')],[p('合作结论','Campaign conclusion'),p('观察、未知与证据','Observation, unknowns and evidence'),p('净增长自动归因','Automatic attribution of net growth')]],note:p('编辑对账框架；算例不代表真实频道结果，不提供独立人数或商业归因。','Editorial reconciliation framework; examples are not actual channel outcomes and do not establish unique people or commercial attribution.')},
tool:{title:p('订阅追踪报告交接','Subscriber-tracking report handoff'),intro:p('让下一位负责人能复查同一比较。','Enable the next owner to check the same comparison.'),items:[p('先明确品牌决策与所需证据。','Define the brand decision and needed evidence.'),p('保存频道地址与原始展示。','Retain channel URL and original display.'),p('标注来源、精度、时间与时区。','Label source, precision, time and time zone.'),p('区分存量和订阅动作。','Distinguish stock from subscription actions.'),p('核对频道与视频报告范围。','Check channel and video report scope.'),p('保留未知与归因限制。','Preserve unknowns and attribution limits.')]}
});
