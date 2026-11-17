import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:10,
summary:p('先定义可比内容组合，再检查时间、指标口径与极端值，用可复算的假设说明为什么不同汇总方式回答不同问题。','Define a comparable content mix before checking time, metric definitions and extremes, with a reproducible hypothetical showing why aggregation methods answer different questions.'),
description:p('Competitive benchmarking analysis 怎样用于达人内容：建立可比样本、保留缺失与平台口径，复算汇总率和平均率，并把比较结果转成下一次任务。','Competitive benchmarking analysis for creator content: define comparable samples, retain missing data and metric scope, reproduce aggregate and average rates, and inform the next assignment.'),
coverAlt:p('原创图形分开可比对象、共同观察窗口和有限结论','An original graphic separates comparable objects, a shared observation window and a bounded conclusion'),
answer:p('达人内容的 competitive benchmarking analysis，应先回答比较要支持什么决定，再选择同任务、同平台与可解释时间范围的内容组合。保留原始记录、分子分母、内容年龄、分发背景与缺失值，分别查看组合总量、每条表现和差异。汇总率与逐条平均率回答不同问题，不能只挑更好看的结果。竞争对手公开资料通常不包含全部付费、订单或私域信息；比较可以提出制作与研究方向，不能单独证明谁带来更多增量销售。','Competitive benchmarking analysis of creator content starts with the decision the comparison should support, then selects a content mix with comparable tasks, platforms and interpretable periods. Retain underlying records, numerators, denominators, content age, distribution context and missing values; inspect aggregate activity, individual results and variation separately. Aggregate rates and averages of individual rates answer different questions, so do not select whichever looks better. Competitor public records rarely establish all paid activity, orders or private information. A comparison can inform production and research without independently proving greater incremental sales.'),
sections:[
s('按内容任务选择分析对象','Move from account totals to content tasks',`如果品牌要改善产品讲解，比较对象应是相关讲解内容，而不是对方所有搞笑、活动与品牌帖的总量。账号可以提供研究范围，但不是天然可比单位。

达人试点比较设计指南帮助安排比较前的问题。本篇进一步讨论得到一组记录后怎样分析内容组合，避免让一个总平均掩盖不同任务。先写内容属于什么类型，以及为什么进入样本。

假设品牌 A 常发演示，品牌 B 常发活动短片，整体互动差异可能来自内容组合。可以先分别比较演示，再说明整体组成，不把差异全部解释为达人质量。内容的实际角色比账号名称更适合决定哪些记录能放在同一张表里。`,
`If the brand wants to improve product explanation, compare relevant explanatory content instead of a competitor’s combined comedy, events and branded posts. An account can define a research boundary without being a naturally comparable unit.

The creator-pilot comparison guide helps frame the question before comparison. This article examines analysis once records exist, keeping one overall average from hiding unlike tasks. Identify each content type and why it belongs in the sample.

Suppose brand A often publishes demonstrations while brand B publishes event clips. Their overall engagement difference may reflect content mix. Compare demonstrations separately before describing composition, rather than assign the whole difference to creator quality. The content’s actual role is a better basis for inclusion than an account name. This gives the team a specific exclusion rule as well: a large but unrelated entertainment post should not enter merely because it would improve one side of the comparison.`),
s('单独检查内容组合的构成','Inspect the composition of the mix separately',`另一个假设中，C 的十条内容有八条演示、两条活动；D 则是两条演示、八条活动。即使发布时间相近，整体结果也混合了不同任务。分析应先保留这种构成，再选择比较范围。

可以分别报告演示内容与活动内容，并说明每组有多少记录。不要为了凑齐相同数量，从一边挑最好的、另一边挑最新的；纳入规则要能重复执行。如果某组没有适合记录，就说明无法完成该项比较，而不是用其他类型偷偷替代。`,
`In another hypothetical, C’s ten posts contain eight demonstrations and two event clips, while D has two demonstrations and eight event clips. Similar publication dates still leave the overall results mixing different jobs. Retain that composition before selecting the comparison scope.

Report demonstrations and event clips separately with their record counts. Do not equalize counts by selecting one side’s best items and the other side’s newest ones; inclusion rules must be reproducible. If a group has no suitable records, state that the comparison cannot be completed instead of silently substituting another type. The resulting report can explain both the content strategy observed and the smaller like-for-like comparison available, without pretending they are the same question. It also shows when collecting additional relevant records would be more useful than calculating another overall average.`,[]),
s('固定观察范围，同时保留内容年龄','Fix the observation scope and retain content age',`同一天抓取的数字，不意味着内容拥有相同积累时间。上周发布与昨天发布的内容，在一个当前累计表里可以并列，但不能假装都经历同样窗口。

可以选择同样的发布后观察时长，或在无法取得历史快照时明确只比较某日累计可见记录。不同做法适合不同问题，没有历史记录就保留限制，不反推不存在的早期表现。

记录平台、内容日期与观察日期。若内容删除、变为私密或数据不可见，标记状态，而不是填零。零代表观察到没有活动，缺失则代表不知道；把它们混合会让组合看起来更弱，却没有真实依据。`,
`Collecting numbers on one day does not give posts equal time to accumulate activity. Content published last week and yesterday can appear in a current-total table without being described as having experienced the same window.

Use a shared post-publication duration where records support it, or explicitly compare cumulative visible records on one observation date when historical snapshots are unavailable. These answer different questions. Retain the limitation rather than reconstruct nonexistent earlier performance.

Record platform, publication date and observation date. Mark deleted, private or unavailable content as such instead of assigning zero. Zero means observed absence of activity; missing means unknown. Combining them can make a mix appear weaker without evidence. A clear scope also identifies when the comparison needs updating: another snapshot should be a new observation, not silently replace the earlier values and remove the ability to reproduce the report originally handed to a decision-maker.`),
s('平台字段要按实际口径解释','Interpret platform fields under their actual definitions',`YouTube 的展示次数说明区分已登记的缩略图展示、来自这些展示的观看，以及其他观看记录。不能把一种展示分母换成全部观看，却仍沿用原来的点击率名称。

不同平台中的观看、触达与互动字段也不能只按名字相似就合并。使用自己定义的指标时，写清包含哪些行动和分母，不把它包装成平台原生指标或行业标准。

公开可见数据与授权后台资料也要分开。竞争分析不能假设自己拥有对方未公开的观看时长、投放或交易资料。缺少某个字段，可以缩小问题，而不是从可见点赞数推断全部内容效果。`,
`YouTube’s impressions guide distinguishes registered thumbnail impressions, views arising from them and other view records. Replacing the impression denominator with all views while retaining the original click-through-rate label changes the meaning.

Likewise, similar names for views, reach and interaction across platforms do not make fields interchangeable. For an editorially defined metric, identify included actions and the denominator instead of presenting it as a native platform field or industry standard.

Keep public records separate from authorized account information. Competitive analysis cannot assume access to unpublished watch time, advertising or transactions. Narrow the question when a field is missing instead of infer all performance from visible likes. A metric dictionary can be short: name the source field, unit, content scope and any transformation applied, giving another analyst enough information to see whether two rows really belong in the same calculation.`,['ytImpressions']),
s('用授权资料检查内容组合','Inspect your own mix through authorized records',`YouTube 的高级模式说明介绍按视频、分组与时期比较，并调整指标和筛选。这是自己有权限的数据路径，不是查看任何竞争对手私人后台的功能说明。

分析自己的达人内容时，可以按相同任务整理相关视频，并保留所用筛选、字段与导出时期。确认是否混入不同内容类型或其他分发，避免把保存过一次报告当作之后永远一致的样本。

图示强调可比对象、内容组合与有限结论。后台可以提供更细资料，但更细不代表更可比；团队仍要说明为什么这些内容属于同一个问题，以及哪些条件不同。让分析设计先于图表选择，报告就更容易被他人复算。`,
`YouTube’s Advanced Mode guide describes comparisons by video, group and period with metric and filter changes. This concerns data the user is authorized to access, not a function for inspecting any competitor’s private account.

For your own creator content, group videos serving the same task and retain the filters, fields and export period. Check for mixed formats or other distribution instead of treat one saved report as a permanently identical sample.

The diagram emphasizes comparable objects, content mix and bounded conclusions. More detailed account data is not automatically more comparable; explain why the records answer one question and which conditions differ. Let the analysis design precede chart selection so another person can reproduce it. If an owner shares only a screenshot, request the task-relevant scope and definitions rather than demand unrelated account access simply to make the report look more complete.`,['ytAdvanced']),
s('汇总率与平均率回答不同问题','Aggregate rates and average rates answer different questions',`下面是假设算例，不是行业基准。定义行动率为所选行动次数除以观看次数。A1 有 100 次观看与 10 次行动，行动率 10%；A2 有 2,000 次观看与 20 次行动，行动率 1%。

A 的逐条平均率为 (10% + 1%) ÷ 2 = 5.5%；组合汇总率为 (10 + 20) ÷ (100 + 2,000)，约 1.43%。前者让每条内容权重相同，后者按所选观看量汇总，二者不能在不解释的情况下互换。

若 B 的两条内容各有 1,000 次观看与 40 次行动，两种算法都是 4%。A 与 B 的相对顺序会随问题改变。报告应保留两种定义，而不是只展示能让某个品牌胜出的数字。行动次数也不是去重参与人数。`,
`The following is hypothetical, not an industry benchmark. Define an action rate as selected action counts divided by views. A1 has 100 views and 10 actions, giving 10%; A2 has 2,000 views and 20 actions, giving 1%.

A’s mean post rate is (10% + 1%) ÷ 2 = 5.5%. Its aggregate rate is (10 + 20) ÷ (100 + 2,000), approximately 1.43%. The first gives each post equal weight; the second aggregates the selected view volume. They cannot be exchanged without explanation.

If B has two posts with 1,000 views and 40 actions each, both methods give 4%. A and B change relative order with the question. Preserve both definitions rather than display only the number that makes one brand win. Actions are also not deduplicated people. A person may contribute more than one selected action, so the hypothetical calculation should never be described as the percentage of distinct viewers who engaged.`),
s('查看分布与每条记录','Inspect variation before selecting creators',`NIST 的集中位置说明区分均值与中位数，并说明极端值可能影响均值。用于达人内容时，这是统计方法依据，不是声称所有账号都服从同一种分布。

可以查看每条记录、样本量与范围，再决定怎样概括。小样本中的一条高表现内容值得研究其实际情境，不应为了得到整齐平均就自动删去，也不应代表所有未来表现。

同时检查内容组合：高值是否来自不同任务、不同观察年龄或可见的特殊活动。若无法解释，保留未知，不给达人贴稳定高效或不可靠的标签。比较的目的是帮助选择下一次可核对任务，而不是用一个数字完成对人的判断。`,
`NIST’s measures-of-location guide distinguishes the mean from the median and explains that extreme values can affect the mean. Applied to creator records, this is a statistical-method reference, not evidence that every account follows one distribution.

Inspect individual records, sample size and range before choosing a summary. One high-performing item in a small sample warrants contextual research rather than automatic removal for a tidy average or being treated as every future result.

Check whether an extreme comes from a different task, content age or visible special event. Retain unknowns where it cannot be explained instead of labeling a person consistently efficient or unreliable. The comparison should inform the next assessable assignment rather than complete a judgment about an individual through one number. Preserve any inclusion decision so a reviewer can see whether the conclusion depends on a particular record and consider it without the result being hidden.`,['nistLocation']),
s('解释差异时保留原因未知','Explain differences without inventing their cause',`如果某组演示比另一组有更多行动，可以先描述观察到的差异，再研究题材、形式、分发与任务。相关记录同时变化，不证明其中一个因素造成了全部结果。

竞争对手的公开内容尤其缺少完整背景。不能因为没有看到广告标记就断定没有付费支持，也不能从某次活动的公开热度推断全部投入、收入或回报。

提出解释时标为假设，并写清需要什么证据。下一次自有项目可以围绕一个具体变化设计观察，但原来的竞争分析仍保持有限。让不确定留在报告里，比用一个听起来合理的故事替代所有缺失资料更可靠。`,
`If one set of demonstrations records more actions, describe the observed difference before investigating topic, format, distribution and task. Factors changing together do not show that one produced the entire result.

Competitor public content particularly lacks complete context. Absence of a visible advertising marker does not establish absence of paid support, and visible activity cannot establish all spending, revenue or return.

Label proposed explanations as hypotheses and identify the evidence needed. A later owned project can observe one specific change while the original competitive comparison remains bounded. Retaining uncertainty is more reliable than replacing missing records with a plausible story. The report can still make a practical suggestion, such as testing a clearer closeup, if it explains that the suggestion follows from content review rather than a proven causal effect calculated from the competitors’ public engagement totals.`),
s('结合内容阅读与数字分析','Read the content alongside the numbers',`数字说明某种记录方式下的活动，内容阅读则能发现演示是否清楚、主张是否有条件、下一步是否对应。两者互相帮助，但不能把主观好看写成统计显著改善。

为每条相关内容保留一个简短说明，例如关键动作在何处出现，以及观众需要理解什么。不必复制全部作品或收集无关个人信息，只保留能支持任务判断的研究线索。

如果某条内容有很高行动率，却没有回答品牌真正关心的产品问题，它仍可能不适合当前 Brief。反过来，一段准确演示可能适合制作研究，但公开数据不足以支持分发采购。按不同用途做选择，避免给所有达人排一个总名次。`,
`Numbers describe activity under a recording method; content review can reveal whether the demonstration is clear, a statement retains its conditions and the next step corresponds. They inform each other without subjective visual appeal becoming a statistically established improvement.

Keep a short note for relevant items, identifying where the key action appears and what viewers need to understand. Retain task-relevant research leads without copying whole works or collecting unrelated personal information.

A high action rate can still accompany content that does not answer the current product question. Conversely, an accurate demonstration may support production research while public records are insufficient for buying distribution. Choose by use rather than give every creator one overall rank. The analyst should identify whether a recommendation concerns a production style, an audience question or a commercial invitation so the next owner does not purchase a broad package on the basis of a narrower finding.`),
s('交付可复算的比较记录','Deliver a reproducible comparison record',`最终记录保留样本规则、观察时点、字段定义、原始数值、计算方法、缺失与解释边界。另一位负责人应能复算相同结果，而不是只有一张无法知道分母的图。

达人表现基准指南可以提供后续阅读路径，但不会替当前样本提供不存在的行业代表性。把编辑选择、假设算例与真实采集分开，尤其不能把本篇表格改名为 QuickKOL 行业研究。

Competitive benchmarking analysis 的交付价值，是帮助品牌知道什么值得继续研究或测试。能说明比了什么、为什么可比、还不知道什么，才有基础决定下一项达人合作，而不把竞争数字当成对未来结果的保证。`,
`Retain sample rules, observation times, field definitions, raw values, calculations, missingness and interpretation limits. Another owner should reproduce the result rather than receive only a chart with an unidentified denominator.

The creator-performance benchmark guide offers further context without supplying industry representativeness that this sample does not have. Separate editorial choices, hypothetical examples and actual collection; the table here must not be renamed QuickKOL industry research.

The value of competitive benchmarking analysis is helping a brand choose what to research or test next. Explaining the objects, comparability and remaining unknowns gives a basis for another creator assignment without turning competitor numbers into a guarantee. A final recommendation should therefore name the next task and evidence owner, leaving the calculation available for review instead of forcing a universal best-creator conclusion from a comparison designed to answer a much smaller question.`)
],
links:[link('达人试点比较设计指南','creator-pilot comparison guide','benchmarking-creator-pilot-comparison-design'),link('达人表现基准指南','creator-performance benchmark guide','creator-performance-benchmarks')],
figures:[{file:'competitive-content-mix-comparison.svg',afterSection:5,alt:p('图形区分可比内容、内容组合与有范围的结论三个分析步骤','A diagram distinguishes comparable content, content mix and a bounded conclusion'),caption:p('先决定比较问题，再选择分组与汇总方法。','Define the comparison question before choosing groups and aggregation.')}],
table:{title:p('假设数据：保留可复算的分子分母','Hypothetical records: retain reproducible counts'),headers:[p('内容','Content'),p('观看次数','Views'),p('所选行动次数','Selected actions'),p('行动率','Action rate')],rows:[[p('A1','A1'),p('100','100'),p('10','10'),p('10%','10%')],[p('A2','A2'),p('2,000','2,000'),p('20','20'),p('1%','1%')],[p('B1','B1'),p('1,000','1,000'),p('40','40'),p('4%','4%')],[p('B2','B2'),p('1,000','1,000'),p('40','40'),p('4%','4%')]],note:p('纯假设且自定义的行动次数 ÷ 观看次数，不是平台原生指标、去重人数或行业基准。A 汇总约 1.43%，逐条平均 5.5%；B 两者均为 4%。','Entirely hypothetical custom actions ÷ views, not a native platform metric, unique-person rate or industry benchmark. A aggregates to about 1.43% with a 5.5% mean post rate; B gives 4% under both.')},
tool:{title:p('提交比较前的清单','Before handing over a comparison'),intro:p('让另一位负责人理解并复算。','Make the comparison understandable and reproducible.'),items:[p('明确决定、任务与纳入规则。','Define the decision, task and inclusion rules.'),p('保留发布时间与观察窗口。','Retain publication dates and observation scope.'),p('确认字段、分子分母和缺失。','Confirm fields, counts and missing values.'),p('分别查看组合与逐条表现。','Inspect aggregate and individual performance.'),p('把解释假设与已知事实分开。','Separate explanations from established facts.'),p('提出可执行的下一项研究。','Propose an executable next research task.')]}
});
