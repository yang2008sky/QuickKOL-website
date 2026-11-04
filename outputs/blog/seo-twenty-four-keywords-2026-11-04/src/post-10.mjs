import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:10,
summary:p('在达人试点开始前决定比较对象、口径与行动条件，区分历史基线、同类参考和目标，避免结果出来以后才挑有利基准。','Choose comparison objects, definitions and action conditions before a creator pilot, separating historical baselines, peer references and targets rather than selecting a favorable benchmark afterward.'),
description:p('Benchmarking试点规划指南：选择内部或同类参考，确认内容、窗口与数据条件，并用双语CSV记录比较设计。','Plan benchmarking before a creator pilot: choose internal or peer references, match content and data conditions, and record comparison design in a bilingual CSV.'),
coverAlt:p('两位成年项目同事在明亮工作间对照桌上的不同空白卡片，一人用铅笔标记纸张。','Two adult project colleagues compare separate blank cards in a bright workspace while one marks a sheet with a pencil.'),
answer:p('Benchmarking是用明确参考理解表现的方法。为达人项目做试点时，应在结果出现前决定：比较谁、比较哪个指标、哪些条件需要相近，以及差异将支持什么行动。历史基线、同类参考与业务目标不是同一种东西，不能互相替代。下面重点讲比较设计，区别于结果出来之后的汇总：先把对象、来源、窗口、付费分发、缺失资料与决策责任写清，再收集适当数据。文章与下载表不生成行业平均值，不设置适用于所有账号的成功门槛，也不把观察差异自动解释为因果效果。',
'Benchmarking uses an explicit reference to interpret performance. Before a creator pilot produces results, decide whom to compare, which metric matters, which conditions need to be similar and what action a difference could support. Historical baselines, peer references and business targets are not interchangeable. This guide focuses on comparison design before results, rather than aggregation afterward: define objects, sources, windows, paid distribution, missing evidence and decision ownership, then collect appropriate data. The article and downloadable worksheet generate no industry average, universal account-success threshold or automatic causal conclusion. A good comparison helps explain a decision, including when the available evidence is insufficient to make that decision yet.'),
links:[link('已有基准汇总指南','benchmark-aggregation guide','creator-performance-benchmarks'),link('Brief写作指南','brief-writing guide','write-a-useful-campaign-brief'),link('指标定义指南','metric-definition guide','engagement-rate-formula-metric-contract'),link('项目测量指南','campaign-measurement guide','creator-campaign-measurement')],
sections:[
s('先说明比较要支持哪个决定','Specify the decision the comparison should support',
`Benchmarking不是先找一个漂亮数字。品牌需要决定继续某类内容、调整解释、补充资料还是扩大试点，不同决定需要不同证据。

AMEC综合评估框架把目标、基准、计划、结果与影响联系起来，也明确框架不会替使用者提供实际数据。先明确问题，再选择指标与参考，更符合这个规划思路。

Brief写作指南帮助说明受众与内容任务。比如，品牌想改善安装教学，应先问哪个步骤不清楚，而不是把所有平台中最高互动率当作必须达到的答案。

把主要决定写成一句话，并说明谁会使用结果。若没有人能说清看到差异后会做什么，这个比较可能只是报告装饰。

已有基准汇总指南讨论结果资料如何整理。本篇则在试点之前决定比较规则，避免数据出现后才挑选最有利的参照。规则也可以修订，但需要保留原因。

例如，一个项目最初以观看比较为主，后来发现实际问题是说明错误，就应记录任务改变，再选择适合的资料。不能继续用观看总数宣布问题已经解决，也不必假装最初就计划做准确性审阅。把改变写清楚，后续同事才知道结果支持哪个决定。`,
`Benchmarking does not begin by finding an impressive number. A brand may need to continue a content type, improve an explanation, request more evidence or expand a pilot. Those decisions require different support.

The AMEC integrated evaluation framework connects objectives, benchmarks, plans, outcomes and impact, while making clear that the framework does not provide actual data. Defining the question before selecting a metric and reference follows that planning logic.

The brief-writing guide helps specify audience and content task. A brand improving installation education can first ask which step is unclear rather than adopt the highest engagement rate found anywhere as the answer it must achieve.

Write the main decision in one sentence and identify who will use the result. If nobody can explain what a difference would cause the team to do, the comparison may be report decoration.

The benchmark-aggregation guide addresses organizing available results. Here, choose comparison rules before the pilot so the reference is not selected afterward for a favorable story. Rules can change when new facts require it, but retain the reason and earlier version rather than pretend the revised design was always the plan.

For example, a project initially focused on viewing comparisons may discover that the real issue is an inaccurate explanation. Record that change and select suitable evidence. View totals cannot declare the accuracy problem resolved, and the team need not pretend factual review was its original assignment. A visible revision explains which decision the result now supports.`,['amecFramework']),
s('区分历史基线、同类参考和目标','Separate a baseline, peer reference and target',
`历史基线描述自己过去在某些条件下的表现，同类参考提供其他适当对象的背景，目标则是希望达到的结果。三者可以同时存在，但回答的问题不同。

过去表现适合帮助理解变化，不自动代表理想水平。同类数据可能提示进一步调查，也不意味着每个项目都应达到相同数字。业务目标需要结合任务与资源解释。

把希望提升的幅度写成目标，不冒充已经观察到的行业基准。没有同类资料时，可以明确采用内部历史参考，而不是给它换一个“市场平均”的名称。

还要说明参考为何适合当前阶段。成熟账号完整一年与首次试点不同，持续教学与限时活动也可能有不同任务；相同指标名称不保证条件一致。

如果只能找到受欢迎的成功案例，说明它们是启发来源，不当作完整表现分布。看不到普通或失败案例时，不能假设所有同类项目通常都有相同结果。`,
`A historical baseline describes your own past performance under certain conditions. A peer reference provides context from other suitable objects. A target describes a desired result. All three may be useful while answering different questions.

Past performance helps interpret change without defining an ideal level. Peer data may suggest further investigation without requiring every project to reach the same value. A business target needs an explanation grounded in the task and resources.

Label a desired improvement as a target rather than an observed industry benchmark. If peer evidence is unavailable, explicitly use an internal historical reference instead of renaming it the market average.

Explain why the reference suits the present stage. A mature account’s full year differs from a first pilot, and continuing education differs from a short activity. Identical metric names do not make those conditions equivalent.

If only celebrated success stories are available, describe them as inspiration rather than a complete performance distribution. Without ordinary or unsuccessful cases, the team cannot assume that every similar project normally produces the same outcome. Keeping these categories distinct helps a reviewer see whether a number describes evidence, an ambition or a practical requirement for proceeding.`),
s('在开始前写下纳入与排除条件','Write inclusion and exclusion conditions before results',
`先选择与问题有关的条件：平台、内容形式、语言地区、发布阶段、观察窗口，以及是否有付费分发支持。条件并非越多越好，而是要解释它为何影响比较。

例如，比较长视频教学时，不宜把一段不同任务的短视频直接当作同类。比较首周结果时，也不能给另一组更长时间，再不说明窗口差异。

不要因为某个样本表现低就事后删除。若发现它不符合预先任务，说明具体原因；若规则本身需要调整，保留旧规则和调整后全部适用记录。

也不需要为了凑数量扩大到没有关系的账号。一个较小但边界清楚的参考，通常比一个人数很多却无法解释组成的集合更容易使用。

数据不足可能使比较暂时不能支持决定。这个状态应在规划时被允许，不把每个空白都看成必须立即找到数字填满的缺陷。`,
`Select conditions relevant to the question: platform, format, language or geography, publishing stage, observation window and paid-distribution support. More conditions are not automatically better; explain why each affects comparability.

For long-form teaching, a short video answering a different question is not automatically a peer. For first-week results, do not give another group a longer observation period without identifying that difference.

Do not remove a low-performing observation after the fact merely because it is inconvenient. If it fails the stated task criteria, explain why. If the rule itself needs revision, retain the old rule and apply the revised one consistently to the relevant records.

Do not enlarge the group with unrelated accounts just to increase its size. A smaller reference with clear boundaries is often easier to use than a large collection whose composition cannot be explained.

Limited data may leave the comparison unable to support a decision yet. Allow that state in the plan instead of treating every blank as a defect demanding an immediate number. Explicit exclusions also make it easier to explain what the resulting benchmark does not describe, particularly when another team wants to reuse it for a different assignment.`),
s('把指标与实际数据对象对应','Match the metric to the actual data object',
`YouTube高级模式说明介绍视频、分组、时期、指标和筛选的比较，也提醒界面正在更新，部分筛选可能因当前视图或流量不足而不可用。

这提供一个具体例子：有比较功能，不代表所有比较都适合。使用者仍需明确哪些内容在组内、日期如何选择、指标实际定义是什么。

指标定义指南进一步帮助记录计数与比率。若使用互动率，写清哪些动作进入分子、哪个量作分母；不要把粉丝、观看或触达三种分母混在一起。

需要后台资料时，由适当账号负责人提供可分享报告，不为了规划索取无关私人或财务信息。没有取得的字段保持未取得，不用公开数字假装补齐。

保存原始报告与筛选说明，再做编辑汇总。本篇没有登录账号或执行后台比较，所述操作能力来自本次读取的公开官方资料。`,
`The YouTube Advanced-mode guide describes comparisons across videos, groups, periods, metrics and filters. It also notes an interface rollout and that some filters can be unavailable because of the current view or insufficient traffic.

This offers a concrete example: a comparison feature does not make every comparison appropriate. The user must still define group membership, dates and the metric’s actual meaning.

The metric-definition guide helps record counts and ratios. For an engagement rate, specify the actions in the numerator and the quantity in the denominator. Followers, views and reach are not interchangeable denominators.

Where first-party material is needed, an appropriate account owner can provide a shareable report. Planning is not a reason to request unrelated private or financial information. Unavailable fields remain unavailable rather than appear completed using a different public count.

Retain the original report and filter explanation before editorial aggregation. This article logs into no account and performs no analytics comparison. The product capabilities described come from the public official documentation read for the draft. An actual project still needs to confirm the view it used and whether the relevant data were available.`,['ytAdvanced']),
s('外部行业基准要先问它统计了谁','Ask who an external industry benchmark actually includes',
`Google Analytics基准说明介绍相近业务属性的同类组与百分位参考。它涉及使用相应服务的网站或应用资料，不是所有社交账号的总体统计。

因此，一个网站或应用指标的行业中位数，不能直接成为TikTok创作者互动率的目标。即使都叫“engagement”，实际对象、定义与数据环境也可能完全不同。

采用外部资料前，确认来源、日期、样本组成、指标和适用条件。如果服务对某些数值采用估算或标准化，也应保留这些说明，不把估计值改写成所有同行的真实账目。

一个公开基准可以帮助提出问题，但不自动解释差异原因。行业组较宽时，产品、价格、受众与分发方式仍可能不同。

本篇不要求启用数据共享或更改账号设置。若团队考虑某项产品基准功能，应由适当负责人理解当前条件，再决定是否使用；文章只是说明阅读边界。`,
`The Google Analytics benchmarking guide describes peer groups of similar business properties and percentile references. These concern websites or apps using the relevant service, not a census of every social account.

An industry median for a site or app metric therefore cannot directly become a TikTok creator-engagement target. Even when both use the word engagement, their objects, definitions and data environments may differ completely.

Before adopting external material, confirm source, date, population, metric and applicable conditions. Preserve explanations of normalization or estimation rather than rewrite an estimated value as every peer’s actual business record.

A public benchmark can suggest a question without explaining the cause of a difference. Within a broad industry group, products, pricing, audiences and distribution may remain unlike one another.

This guide does not require enabling data sharing or changing account settings. If the team considers a product’s benchmark feature, the appropriate owner should understand current conditions before choosing it. The article explains interpretation boundaries. A benchmark is useful because its construction is understood, not merely because a recognizable vendor supplied it.`,['gaBenchmark']),
s('假设案例：为安装教学选择参考','A hypothetical: choose a reference for installation education',
`假设品牌准备试做一组安装教学。主要问题是新内容能否更清楚解释常见步骤，而不是谁能获得最高总播放。团队可以先找自己过去同形式、同类问题的内容。

规划表记录这些内容为何相近，也说明产品版本、发布时间、是否付费分发和可用报告的差异。某些条件无法匹配时，写明它会限制什么结论。

如果希望比较“是否看懂”，仅有观看与点赞还不够。可以收集适当反馈或查看是否出现具体误解，但不能把零条疑问自动解释成所有人都理解。

团队也可能决定先做内容可理解性审阅，再开始表现比较。不是每个试点第一步都需要排名，也不是每个任务都能立即得到合适同行数据。

这个场景没有提供真实客户结果或行业平均。它演示如何从受众问题反推参考，而不是把手边最容易拿到的数字改名为成功标准。`,
`Suppose a brand plans a small installation-education series. Its main question is whether the new material explains common steps more clearly, not which contributor can achieve the largest total view count. The team can first look for its own earlier content with similar formats and questions.

The planning sheet records why these pieces are comparable and differences in product version, publishing period, paid support and available reports. Where conditions cannot match, explain which conclusion that limits.

If the question is comprehension, views and likes alone are insufficient. Appropriate feedback or specific misunderstandings may help, but zero questions does not automatically mean everybody understood.

The team may decide to review clarity before beginning a performance comparison. Not every pilot needs a ranking as its first step, and suitable peer data may not be available immediately.

This scenario supplies no client result or industry average. It demonstrates choosing a reference from the audience question rather than renaming the easiest available number a success criterion. The worksheet can record that choice without forcing the team to pretend it already has a complete quantitative answer.`),
s('预先约定差异会触发什么行动','Agree in advance what a difference would trigger',
`规划时写清下一步可能是什么：继续观察、补资料、修改内容，或在有足够支持时考虑扩大任务。不要把超过一个数就自动成功写成通用规则。

需要阈值时，说明它来自实际业务条件、内部历史还是编辑暂定。没有依据就不虚构行业门槛，也不把预算愿望包装成外部标准。

项目测量指南帮助把行动与证据对应。尤其要区分观察到较高数值、证明内容解释改善，以及确认业务回报三种结论。

约定谁判断资料是否足够，谁处理缺失，何时重新讨论。这样试点出现不完整资料时，团队有可以执行的路径，而不是为了赶报告忽略限制。

下载表提供14个规划字段，记录目标、口径、比较条件与责任人。它不连接任何平台，也不会根据输入给创作者打分或生成确定的成功判断。`,
`Specify possible next steps during planning: continue observation, obtain evidence, revise content or consider expanding the assignment when support is sufficient. Exceeding a number is not a universal automatic-success rule.

If a threshold is needed, explain whether it comes from actual business conditions, internal history or a provisional editorial decision. Do not invent an industry cutoff without evidence or package a budget preference as an external standard.

The campaign-measurement guide connects actions with evidence. In particular, distinguish observing a higher value, establishing clearer explanation and confirming commercial return.

Agree who decides whether evidence is sufficient, who handles missing material and when to revisit the question. This gives the team an executable path when data are incomplete rather than an incentive to suppress limitations for a reporting deadline.

The downloadable sheet supplies 14 planning fields for objectives, definitions, comparison conditions and ownership. It connects to no platform, scores no creator and produces no certain success verdict. Its purpose is to make the comparison design visible before the result creates pressure to tell a favorable story.`),
s('保留一份能解释决定的比较设计','Keep a comparison design that explains the decision',
`好的Benchmarking让读者理解为什么选这组参考、它回答什么、限制在哪里，以及结果将怎样被使用。资料不足时，也能解释为什么暂不作某种判断。

先记录设计，再观察结果；需要调整时保留理由。QuickKOL可以帮助理解任务与研究相关作品，实际数据、目标与合作决定仍应由合适资料和负责人支持。`,
`Good benchmarking explains why a reference was selected, what it answers, where it is limited and how the result will be used. When evidence is insufficient, it can also explain why a judgment remains premature.

Record design before observing results and retain reasons for revisions. QuickKOL can help interpret the task and research relevant work; actual data, targets and commercial decisions still need appropriate evidence and ownership.`)
],
table:{title:p('先选择参考的作用','Choose the reference’s role first'),headers:[p('类型','Reference type'),p('作用','Purpose'),p('限制','Limit')],rows:[[p('内部历史基线','Internal historical baseline'),p('理解自己的前后条件','Understand your own earlier conditions'),p('过去不自动代表理想水平','Past performance is not automatically ideal')],[p('适当同类参考','Suitable peer reference'),p('提供可解释背景','Provide explainable context'),p('对象与口径需要核对','Objects and definitions need checking')],[p('业务目标','Business target'),p('说明希望达到的结果','State a desired result'),p('愿望不是已观察基准','An ambition is not an observed benchmark')],[p('必要行动条件','Action condition'),p('支持继续、修改或补资料','Support continuing, revising or obtaining evidence'),p('需要实际理由和负责人','Requires an actual rationale and owner')]],note:p('编辑规划框架；安装教学为假设，不提供行业均值、账号排名或通用门槛。','Editorial planning framework; installation education is hypothetical, with no industry average, account ranking or universal threshold.')},
tool:{title:p('试点比较设计表','Pilot comparison-design worksheet'),intro:p('14字段空白CSV，用于先记录参考与条件；不是自动评分器。','A blank 14-field CSV for recording references and conditions first, not an automatic scoring tool.'),items:[p('主要决定与目标明确。','Main decision and objective are explicit.'),p('基线、同类与目标分别标注。','Baseline, peers and target labeled separately.'),p('内容、地区、窗口与付费条件可解释。','Content, geography, window and paid conditions explained.'),p('指标、来源与缺失状态记录清楚。','Metric, source and missing state recorded.'),p('阈值理由与决策负责人明确。','Threshold rationale and decision owner explicit.'),p('修订保留原因与版本。','Revisions retain reasons and versions.')],downloads:[{label:p('下载中文比较设计CSV','Download Chinese comparison-design CSV'),url:'/downloads/pilot-comparison-design.zh.csv'},{label:p('下载英文比较设计CSV','Download English comparison-design CSV'),url:'/downloads/pilot-comparison-design.en.csv'}]}
});
