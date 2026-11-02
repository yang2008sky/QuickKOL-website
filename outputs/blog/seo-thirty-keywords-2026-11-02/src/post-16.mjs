import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:16,
summary:p('面向品牌的数据素养指南：解释异常增长与互动，交叉核验记录，并把可疑信号、待验证解释和已证实事实分开。','A brand data-literacy guide to anomalous growth and engagement, cross-checking records and separating warning signals, explanations and established facts.'),
description:p('fake followers 教育指南：品牌如何理解异常增长、核对指标来源和窗口，区分可疑信号与已证实事实，避免单指标指控。','Learn how to interpret fake-follower concerns through metric definitions, anomaly context and source checks, while separating signals from established facts.'),
coverAlt:p('蓝色背景上以问号和清楚分层的文字区分信号、解释与证据，不展示真实账号。','A question mark and distinct type layers for Signal, Explanation and Evidence on blue, without an actual account.'),
answer:p('Fake followers 通常指用来制造虚假受众或互动印象的账号或相关行为，但增长异常、低互动或重复留言本身不能证明某人购买粉丝。品牌学习这类数据时，应先确认指标定义、对象、统计窗口与来源，再检查其他可验证解释。把“观察到什么”“可能因为什么”和“证据已经确认什么”分别写清。本篇是数据教育指南，不提供个人判定名单，也不承诺百分百识别。',
'Fake followers commonly refers to accounts or activity used to create a misleading impression of an audience or engagement. An unusual increase, low interaction or repeated comments does not by itself establish that someone bought followers. For brand data literacy, identify the metric, object, window and source before examining alternative explanations. Keep what was observed, what might explain it and what evidence establishes in separate statements. This educational guide provides no personal verdicts and promises no method that identifies every inauthentic account.'),
links:[link('互动率分母指南','engagement-denominator guide','engagement-rate-denominators'),link('活动衡量指南','campaign-measurement guide','creator-campaign-measurement'),link('YouTube 数据分组指南','YouTube cohort-analysis guide','youtube-analytics-sponsored-content-cohorts')],
sections:[
s('先区分账号、互动与责任归属','Separate accounts, engagement and responsibility',
`“假粉”容易把多个问题压成一句话：某个账号是否虚构身份、某次互动是否有效、某组数据是否可靠，以及谁造成了异常。这些问题需要不同证据。确认一条指标不一致，并不同时确认身份和动机。

TikTok 真实性政策禁止操纵互动及买卖相关服务，也区分不带欺骗目的的多账号等情况。平台禁止某种行为，不代表任意可疑图形都能证明有人实施了该行为。阅读规则是理解边界，不是获得对个人定性的捷径。

团队可以先围绕自己有权查看的品牌汇总数据、活动记录或公开指标学习。不要为证明一个猜测去获取无关私人资料、推断私人身份，或将匿名、少发帖和不熟悉的语言视为不真实的证据。`,
`The phrase fake followers can compress several questions: whether an account misrepresents an identity, whether an interaction is valid, whether a dataset is reliable and who caused an anomaly. Each needs different evidence. Establishing one metric discrepancy does not simultaneously establish identity and intent.

The TikTok authenticity policy prohibits engagement manipulation and trading related services while distinguishing nondeceptive multiple-account uses. A prohibition does not make every suspicious chart proof that someone committed the prohibited conduct. Reading a rule helps define the issue; it is not a shortcut to a personal verdict.

A team can learn through its own authorized brand aggregates, campaign records or public metrics. It should not acquire irrelevant private information to substantiate a guess or treat anonymity, infrequent posting or an unfamiliar language as proof of inauthenticity. The educational task is to improve the interpretation of observations. Keep that task separate from assigning responsibility for an event that the available records may not explain.`,['tiktokAuthenticity']),
s('描述异常前，先保存可复核的观察','Preserve an observation before labeling an anomaly',
`写下平台、对象、指标名称、单位、来源、观察时间和统计期间。增长还需要可比较的前后值。只有一个当前总数，没有此前同口径记录，就不能计算可靠的期间变化，更不能恢复何时发生了增长。

截图保留界面和日期，导出保留字段说明与过滤条件。对账号总数、单帖表现和网站访问分别建记录，不能将三个对象的变化合成同一条时间线。经过转述的百分比不是原始数据；把截图抄进另一张表，也不增加一份独立证据。若来源只给估计，研究记录也应保留“估计”。

对品牌自有数据，可先核对排期、投放、媒体报道、活动和数据连接变化。列举这些可能情境，不代表断言它们实际发生。要从对应记录确认，避免用一个未经验证的解释，替换另一个同样未经验证的指控。`,
`Record platform, object, metric name, unit, source, observation time and reporting period. Growth also needs comparable before-and-after values. A current total without an earlier equivalent record cannot reliably establish period growth or reconstruct when it happened.

Preserve interface context and date with a screenshot, and field definitions and filters with an export. Keep account totals, individual-post observations and website activity in separate records; changes across those objects should not be merged into a single unexplained series. A relayed percentage is not raw evidence. Copying a screenshot into another spreadsheet does not create an independent source. If the source labels a value estimated, retain that label in the research note.

For brand-owned data, check schedules, advertising, coverage, events and changes to data connections. Listing these contexts does not claim they occurred. Seek the corresponding records rather than replacing an unverified allegation with an equally unverified reassuring story. A neutral observation might read that two recorded totals differ over a stated period, with the reason unresolved. That wording leaves room for later evidence without prejudging either a person or a platform.`),
s('异常增长是问题，不是原因的答案','An unusual increase is a question, not its cause',
`折线突然抬升，说明在该数据源与口径下出现了变化。接下来要问这个变化是否真实、是否可比，以及可能与什么时间线一致。传播事件、付费分发、内容分发变化或数据补回，都属于需要核对的解释，不是自动免责理由。

不要使用“每天超过多少就是买粉”的统一阈值。不同规模、渠道、活动和记录间隔会产生不同图形；仅凭斜率不能识别行为者，更无法知道是否有人主动购买了服务。

假设品牌自己的账号在活动日增长，团队可以核对活动日期、引流位置与平台记录，再说明证据覆盖范围。若仍无法解释，结论可以是“增长原因未确认”。没有必要为了让报告看起来完整，就在欺诈与完全正常之间强选一边。`,
`A sudden step in a line establishes a change under that source and definition. Next ask whether the change is real, comparable and consistent with a documented timeline. Coverage, paid distribution, changes in content distribution or delayed data can be explanations to check, not automatic excuses.

Avoid a universal rule that growth above a particular daily amount means purchased followers. Scale, channel, activity and recording interval change the shape. A slope cannot identify an actor or establish that anyone commissioned a service. An unusual observation can be worth investigating while its cause remains unknown.

For a hypothetical increase on the brand’s own account during an event, compare the event date, referral placements and platform records, then state what the evidence covers. If the cause remains unresolved, growth source unconfirmed is a valid conclusion. A report does not become more rigorous by forcing a choice between fraud and completely normal when neither is established. The decision can remain limited to how confidently the observed series may be interpreted.`),
s('互动率必须和分母及形式一起读','Read interaction rates with their denominators and formats',
`互动率分母指南解释，按粉丝、触达或观看计算的百分比不是同一指标。即使显示值不同，差异也可能来自口径，而不是受众真实性。先确认分子包括什么，分母对应谁，观察窗口是否一致。

低互动可能提示内容、分发或测量问题，但不能单独证明粉丝虚假。观看、粉丝与互动也不是同一组独立人数；有人观看但不公开留言，并不因此不是真实的人。

重复留言同样需要语境。简短赞美、表情、活动提示或复制的界面文本，可能看起来相似。它们可以构成要核对的模式，但一个方便观察的小样本不能扩展为全部受众的比例。报告应说明观察了多少条、如何选取及看不到什么。`,
`The engagement-denominator guide explains why follower-based, reach-based and view-based percentages are different measures. A discrepancy may reflect definitions rather than audience authenticity. Identify included interactions, the denominator’s object and whether the windows match before comparing results.

Low interaction can prompt a question about content, distribution or measurement. It cannot alone establish fake followers. Views, followers and interactions are not the same set of unique people; a person watching without publicly commenting is not thereby inauthentic.

Repeated comments also require context. Brief praise, emoji, event prompts or copied interface text may look similar. They can motivate a closer look, but a convenient visible sample does not establish the proportion of an entire audience. State how many items were reviewed, how they were selected and what remains unseen. Do not attach an invented confidence percentage to an informal observation. The goal is a fair description of the pattern and its limits, not a dramatic classification that the sample cannot support.`),
s('先检查计数、更新和数据缺失','Check counting, updates and missing data first',
`YouTube 指标计数说明指出，系统核验互动时可能暂缓、冻结或调整计数，实时估计也可能与观看页数字不同。这给出了为什么要核对状态和时间的官方例子；它不意味着任何平台的任何差异都必然由同一种原因造成。

GA4 数据阈值说明则解释，为避免从细分数据推断个人信息，部分报告数据可能被隐藏。这个网站分析例子说明“未显示”不能自动等于零。GA4 也不是粉丝真实性工具，不能拿网站报告的缺失情况反推社交账号身份。

保留来源提供的数据质量提示，并核对是否同一对象、同一窗口和同一指标。YouTube 数据分组指南帮助进一步区分内容观察范围。发现口径变化后，应先修正可比性，而不是沿用旧公式继续解释看似异常的趋势。`,
`The YouTube metric-counting guide explains that counts may slow, freeze or change during verification, and realtime estimates can differ from the watch page. This is an official example of why status and timing matter, not proof that every discrepancy on every platform has the same cause.

The GA4 threshold guidance explains that some report data may be withheld to prevent identification from small or sensitive groups. This website-analytics example shows why not displayed cannot automatically mean zero. GA4 is not a follower-authenticity tool, and missing website data cannot establish the identity of a social account.

Retain data-quality notices and check object, window and metric alignment. The YouTube cohort-analysis guide offers a next step for keeping content observations in scope. When a definition changes, repair comparability before applying an old formula to an apparently unusual trend. A cleanly drawn chart can still connect measurements that should not be joined, so presentation quality is not a substitute for checking the underlying labels.`,['ytCount','gaThreshold']),
s('交叉核验要寻找不同来源链','Cross-check independent source chains',
`两个网站给出相同数字，未必是两份独立观察。它们可能读取同一个平台接口、复制同一公开页面，或者引用彼此。先画出数据路径：原始记录、转移或处理方式、展示位置。独立性取决于证据链，不取决于网址数量。

对同一问题，可在有权访问的范围内比较原生记录、导出与已有活动时间线，但要说明它们各自覆盖什么。截图可确认某个时刻显示了一个数字；导出可包含更长窗口；投放记录可确认活动存在。任何一项都不自动证明完整原因。

若工具提供真实性评分或估计比例，保留它自己的定义、模型范围与限制，不将估计改写为已确认账号数量。不能因为模型给出两位小数，就宣称拥有同等精度的事实。无法核对的方法，应被标为不可验证的解释。`,
`Two websites displaying the same number are not necessarily two independent observations. They may read one platform interface, copy one public page or cite each other. Map the path from original record through transformation to display. Independence depends on the evidence chain, not the number of URLs.

Within authorized access, compare native records, exports and the existing activity timeline, stating what each covers. A screenshot may establish what appeared at one moment; an export may cover a longer window; an advertising record may establish that activity occurred. None automatically proves the complete cause.

If a tool supplies an authenticity score or estimated proportion, retain its definition, model coverage and limitations. Do not rewrite an estimate as a confirmed account count. Two decimal places do not create equivalent factual precision. Where a method cannot be checked, mark the explanation unverified rather than borrowing the authority of a numerical display. Agreement between tools using the same input may be consistency, while adding little independent support for the underlying claim.`),
s('算例：粉丝数差异只证明了什么','Worked example: what a follower-count difference establishes',
`以下是编辑假设。两份同口径记录在一周内从10,000变为12,000，净变化2,000，按期初值计算增长20%。这组数字说明记录中的净增长，不说明有2,000个新增独立真人，也不说明有2,000个假账号。

若同期新关注2,400、取消关注400，两者的净值也是2,000；但仅凭前后总数，不能恢复这两个流量。若导出恰好包含它们，可按来源定义另行记录，不能先假定自己知道。

假设另一个网页仍显示10,000，应先核对更新时间、缓存、对象与来源。没有解释之前，写“两个展示在该时点不一致”。不能将差额称为已识别假粉，也不能由平台可能调整计数推定某个人购买了关注。`,
`Consider an editorial hypothetical. Two comparable records show a change from 10,000 to 12,000 over a week: net growth of 2,000, or 20% relative to the starting value. That establishes recorded net growth. It does not establish 2,000 newly acquired unique humans or 2,000 fake accounts.

If the same period contained 2,400 follows and 400 unfollows, the net would also be 2,000. The two endpoint totals alone cannot recover those flows. If an authorized export actually contains them, record them separately under its definitions rather than assuming they are known.

Suppose another page still displays 10,000. Check update time, caching, object and source first. Until resolved, say the displays disagree at the observation time. Do not call the difference identified fake followers or infer that a person bought attention because a platform may revise counts. Arithmetic can be correct while the narrative attached to it is unsupported. This example is useful for teaching that difference without making a claim about an actual account.`),
s('把结论写成能纠正和更新的句子','Write conclusions that can be corrected and updated',
`建议将记录分成观察、假设、核验结果与未解决项。观察写原始范围；假设写可能原因及需要的证据；核验结果只写证据确实支持的部分。某项平台通知若只说明移除了异常互动，就不能扩写成已经证明谁购买了什么。

尽量使用中性描述，例如“该系列出现一次增长跃迁，原因待确认”。不要给个人贴上“骗子”标签，也不把未回复解释成承认。对可能影响合作或声誉的判断，让适当负责人查看原始依据和范围。

新证据出现后，更新结论并保留修改原因。若先前报告夸大，把更正同步给收到旧结论的人。修正不是隐藏错误：它让后续讨论知道事实状态为何改变，而不是继续引用已经失效的推断。`,
`Separate observation, hypothesis, verification result and unresolved questions. Observations retain original scope. Hypotheses identify possible causes and needed evidence. Verification states only what the evidence supports. A platform notice about removed inauthentic interactions does not necessarily establish who purchased what.

Use neutral descriptions such as a step change occurred in this series and its cause is unconfirmed. Do not label a person a fraud or interpret nonresponse as admission. Where a judgment could affect a relationship or reputation, the appropriate owner should see the original basis and limitations.

When new evidence arrives, update the conclusion and preserve why it changed. If an earlier report overstated the result, send a correction to recipients of that conclusion. Correction is part of an accountable record, making the current state intelligible rather than allowing an outdated inference to circulate as fact. A careful team can change its interpretation without erasing the observation that first prompted the question.`),
s('下一步是提高指标素养','The next step is better metric literacy',
`活动衡量指南可帮助把目标、观察、指标与限制放在同一记录里。团队培训可以用无人物的假设数据练习：一人描述观察，一人提出不同解释，再由另一人检查证据是否真的支持结论。

本篇不提供购买、操纵或规避平台规则的方法。教育成果可以是团队更能识别口径差异、说明未知并纠正过度推断，而不是给每个人打真实性分数。

对无法核验的情况，可以保留未知、缩小报告主张或寻找适当的原始资料。任何指标都应服务于准确理解；它不能独自替团队判断个人动机。`,
`The campaign-measurement guide helps keep objectives, observations, metrics and limitations together. A training exercise can use hypothetical data without named people: one colleague describes the observation, another proposes alternatives and a third checks whether the evidence supports the conclusion.

This guide supplies no methods for purchasing, manipulating or evading platform rules. A useful educational outcome is a team better able to recognize definition differences, explain uncertainty and correct overinterpretation, rather than assigning everyone an authenticity score.

Where verification is unavailable, retain the unknown, narrow the report or seek appropriate original information. Metrics should support accurate understanding. No single indicator can decide a person’s intent on the team’s behalf.`)
],
table:{title:p('三层事实表达练习','Three levels of evidence wording'),headers:[p('层级','Level'),p('可以写','Can state'),p('不能跳到','Cannot jump to')],rows:[[p('观察','Observation'),p('某来源在某窗口显示净增长','A source shows net growth over a stated window'),p('增长全部来自虚假账号','All growth came from fake accounts')],[p('待验证解释','Hypothesis'),p('需核对活动、更新或计数变化','Check activity, update and counting changes'),p('某人必然购买了粉丝','A person must have purchased followers')],[p('核验结果','Verified finding'),p('具体证据确认的对象与事件','The object and event established by specific evidence'),p('扩大到未经证明的身份、动机或比例','Unsupported identity, intent or proportions')]],note:p('编辑教育框架，不是平台认证、检测准确率或对实际人物的结论。','Editorial teaching framework, not a platform certification, detection accuracy claim or verdict about a real person.')},
tool:{title:p('异常数据学习清单','Anomaly-literacy checks'),intro:p('用匿名或自有授权数据练习，不输出个人判定。','Practice with anonymous or authorized brand data without personal verdicts.'),items:[p('对象、来源、时间、单位齐全。','Retain object, source, time and unit.'),p('分子、分母、窗口可比较。','Align numerator, denominator and window.'),p('找不同来源链，不只数网址。','Check distinct source chains, not URL counts.'),p('估计、缺失和零分开。','Separate estimates, missing values and zero.'),p('假设不改写成事实。','Do not rewrite a hypothesis as fact.'),p('更正能同步给旧结论接收人。','Make corrections reach recipients of the earlier conclusion.')]},
cta:{title:p('继续学习指标与证据','Continue learning about metrics and evidence'),body:p('阅读活动衡量方法，练习定义指标、保留来源和说明限制。把学习目标放在准确理解数据上。','Read the campaign-measurement method to practice defining metrics, retaining sources and explaining limits. Focus the next step on understanding data accurately.'),label:p('阅读衡量指南','Read the measurement guide'),href:'/blog/creator-campaign-measurement/#answer'}
});
