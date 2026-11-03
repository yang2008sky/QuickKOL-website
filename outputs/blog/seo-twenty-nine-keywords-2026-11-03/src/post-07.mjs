import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:7,
summary:p('在报表、供应商和团队之间交接互动率时，写清公式的动作、对象、窗口、单位和版本，让同名指标不再偷偷改变含义。','When engagement rates move between reports, providers and teams, document actions, object, window, unit and version so an unchanged label does not conceal a changed measure.'),
description:p('互动率公式指南：用指标约定核对分子、分母、百分比单位、缺失状态和版本变更，配可下载双语字段表与假设算例。','Document an engagement rate formula with numerator, denominator, percentage units, missing states and version changes, using bilingual fields and worked examples.'),
coverAlt:p('蓝色背景上以奶油色大字显示E除以D乘100，珊瑚色横线下标明事件、分母与窗口。','Cream E divided by D times 100 typography on blue, with a coral rule above events, denominator and window labels.'),
answer:p('互动率公式不能只有“互动除以受众”几个字。本篇采用的描述性结构为：已定义互动事件数除以已定义分母，再乘100，显示为百分比；具体动作、对象、窗口和汇总方法需要另行约定。将它写成指标约定，记录来源、可用状态和版本，才能在换报表或换供应商时知道变化来自表现还是定义。粉丝、观看、触达和展示不可自动互换；动作率也不等于互动的独立人数比例。',
'An engagement rate formula needs more than interactions divided by audience. This guide uses the descriptive structure defined interaction events divided by a defined denominator, multiplied by 100 for percentage display. Actions, object, window and aggregation still need an agreement. A metric contract records these fields, source, availability state and version so a report or provider change can be distinguished from performance change. Followers, views, reach and impressions are not interchangeable, and an action-based rate is not automatically the proportion of unique people engaging. The contract is an editorial data specification, not a legal document or a universal platform formula.'),
links:[link('互动率分母指南','engagement-denominator guide','engagement-rate-denominators'),link('互动率计算工具指南','engagement-calculator guide','engagement-rate-calculator-formulas'),link('创作者数据阅读指南','creator-data interpretation guide','read-creator-engagement-data')],
sections:[
s('先写指标回答的具体问题','State the question the metric answers',
`先决定准备描述单条内容、某个账号还是一个内容集合，再说明想观察什么。不同对象即使显示同一个百分比，也可能回答不同问题；不能仅因报表列名相同就把它们连成趋势。

指标约定至少应包含目的、对象、分子、分母、单位、窗口和汇总方式。它让接手的人知道怎样复算，也说明哪些比较不适用。没有这些字段，公式再简短也难以审核。

互动率分母指南可帮助选择适合问题的基础。这里的重点是把选择保存下来，防止产品、团队或数据源变化后，旧名称继续承载一个新定义。

例如“此帖按观看的互动事件率”比“受众质量”更准确。前者说明有限观察，后者可能暗示身份、真实性、相关性与商业价值，远超一个公式能够建立的范围。`,
`Decide whether the object is one item, an account or a content collection, then state the observation intended. The same displayed percentage can answer different questions. A shared column name does not make measures a valid trend.

A metric contract should contain purpose, object, numerator, denominator, unit, window and aggregation. It lets another person reproduce the arithmetic and identifies unsuitable comparisons. A short formula is difficult to review without these fields.

The engagement-denominator guide helps select a basis for the question. The task here is preserving that selection so a changed product, team or source does not leave an old name carrying a new definition.

For example, this post’s interaction events per view is narrower than audience quality. The first describes a limited observation; the second may imply identity, authenticity, relevance and commercial value far beyond the formula. Accurate naming makes the metric useful without asking it to answer several unrelated research questions.`),
s('公式的分子需要一份计入清单','The numerator needs an inclusion list',
`写出哪些动作计入、哪些不计入，以及来源能提供什么。点赞、评论、分享、保存或其他动作不应仅因为都叫互动，就在不同报告中随意替换。某项不可见与实际为零不同。

Rival IQ互动事件说明在2025年1月的产品文档中列出不同公开渠道的计入方式，例如Instagram与TikTok并不使用完全相同的动作集合。这说明供应商定义需要连同覆盖范围阅读，不是今天所有原生平台数据的完整清单。

指标约定应保留事件名称、来源字段、可用条件和排除规则。若换成获授权原生资料后多出某类动作，先更新定义和版本，不能让新增字段被解释为表现自然提高。

对多动作合计，说明它是事件数，不是去重人数。一个人可能做多种动作；不能从一次相加推导有多少不同观众与内容互动。`,
`List included and excluded actions and what the source actually supplies. Likes, comments, shares, saves and other actions should not be exchanged between reports merely because all are called engagement. Unavailable is different from observed zero.

The Rival IQ interaction-events guide, in January 2025 product documentation, lists different public-channel inclusion, including differences between Instagram and TikTok. It illustrates why a provider definition needs its coverage, not a complete statement of every current native-platform field.

Retain event name, source field, availability conditions and exclusions. If an authorized native source adds an action category, update definition and version before interpreting the additional field as improved performance.

For a multi-action total, explain that it counts events rather than deduplicated people. One person can perform several actions, so a sum cannot establish how many distinct viewers interacted. The reporting label should preserve that distinction even if the interface offers only a short column heading.`,['rivalEvents']),
s('分母、快照和窗口必须对得上','Align denominator, snapshot and window',
`明确分母是某次粉丝快照、指定期间观看、触达或展示，并保留来源定义。不要把不同期间的分子与分母拼成一个看似稳定的比率。使用发布时还是观察时粉丝，也需要说明。

Rival IQ互动率说明区分其公开与私有资料中的不同公式。该供应商用法不是全球标准，也不证明粉丝数等于实际看见内容的人数。比较前需要回到具体字段。

如果报表跨越多个内容对象，另外写汇总规则。典型内容的均值、按明确权重汇总的比例与账号期间指标不是同一件事，不要为了整齐界面共用一个没有说明的平均值。

创作者数据阅读指南帮助把这些数字放回任务语境。公式应能解释输入属于谁、覆盖什么时候，而不是只显示一个足够精确的小数。`,
`Specify a follower snapshot, period views, reach or impressions, retaining the source definition. Do not join a numerator and denominator from different windows into an apparently stable ratio. State whether followers refer to publication or observation time.

The Rival IQ engagement-rate guide distinguishes formulas in its public and private reporting. Its product usage is not a worldwide standard and does not establish that followers equal actual viewers. Return to the fields before comparison.

For several content objects, specify aggregation separately. A mean describing a typical item, an explicitly weighted proportion and an account-period measure are different tasks. An attractive interface should not make them share an unexplained average.

The creator-data interpretation guide puts these measures back into the assignment. A formula should explain whose inputs it uses and when they apply, instead of only displaying a precise decimal. That context becomes especially important when a file moves to someone who did not create the original report.`,['rivalRate']),
s('单位错误可以让正确除法变成错误报告','A unit error can turn correct division into an incorrect report',
`除法结果0.05与显示5%可以表示同一比率；如果一个系统已经提供百分数，导入后再次乘100就会改变意义。记录原始单位与显示规则，不从数值大小猜单位。

本篇假设一个帖子有90次点赞与10次评论，合计100次事件，配同口径2,000次观看，则100除以2,000乘100为5%。这些是教学输入，不是实际帖子或平台基准。

如果同一已知集合另有20次分享，并且新定义决定纳入，结果为120除以2,000乘100，即6%。从5%到6%的差别在此来自事件集合改变，不证明内容突然更好。

将旧、新指标分别命名并记录适用时间。不要把新的6%覆盖旧的5%后画成增长线，再声称优化导致了提升。可复算的数字需要可解释的标签。`,
`A quotient of 0.05 and a display of 5% can represent the same proportion. If a system already supplies a percentage, multiplying by 100 again changes the meaning. Record raw unit and display rule rather than infer units from magnitude.

In this hypothetical, one post has 90 likes and ten comments, totaling 100 events, with 2,000 appropriately defined views. Dividing 100 by 2,000 and multiplying by 100 gives 5%. These are teaching inputs, not an actual post or benchmark.

If 20 shares are also known for the set and a new definition includes them, 120 divided by 2,000 times 100 is 6%. Here the difference from 5% to 6% comes from inclusion, not proof that the content suddenly improved.

Name old and new measures separately and retain applicability. Do not overwrite 5% with 6%, draw a growth line and attribute the change to optimization. Reproducible arithmetic needs an interpretable label as well as correct calculation.`),
s('保留零、缺失、无效与估计的区别','Preserve zero, missing, invalid and estimated states',
`已确认零次事件与正分母可以得到0%；缺失分子不能自动算作零。分母为零时，该结构下的比率不可计算；负数或不符合计数定义的输入应交回来源核对。

事件率也可能超过100%，取决于分子与分母。假设100名独立观看者产生150次计入动作，150%描述的是每百名观看者的动作数，不是150%的人口。不要为了界面好看硬截断。

如果平台数据标为估计，后续结果也需要保留估计状态。输入经过取整时，显示更多小数不会增加真实精度。不能把缺失状态静默转换成一个看似可信的高精度结果。

互动率计算工具指南提供下一步算术练习。使用任何工具前，仍需确认其输入定义适合当前问题，不能因为计算器能输出一个数就视为所有比较已经成立。`,
`Confirmed zero events with a positive denominator can yield 0%. A missing numerator does not automatically become zero. A zero denominator makes the ratio unavailable under this structure; negative or otherwise invalid count inputs return to the source for investigation.

An event-based rate may exceed 100%, depending on the quantities. If a hypothetical 100 unique viewers generate 150 included actions, 150% describes actions per hundred viewers, not 150% of a population. Do not cap it merely for appearance.

If the source labels data estimated, preserve that state in subsequent results. More decimal places do not add precision to rounded inputs. A missing state should not silently become an apparently authoritative numeric output.

The engagement-calculator guide provides a next arithmetic exercise. Any tool still needs input definitions appropriate to the question. The ability to produce a number does not establish that all proposed comparisons are valid.`),
s('平台定义变化要进入指标版本','Put platform-definition changes into the version record',
`YouTube指标计数说明当前页面注明，自2026年8月24日起，公共观看在各形式开始播放时计数，并另行区分相关广告与获利指标。这里引用的是定义变化，不把所有名称相近指标视为同一事件。

报表跨过这种时间点时，应核对实际资料是否可比。不能只因为字段仍叫views，就假设全年趋势一直用相同记录方式；也不能把公共观看定义替换成所有付费或获利计算的分母。

指标约定记录生效时间、来源说明、受影响字段、历史是否重算和负责人。来源未说明的历史处理保留未知，不替平台作承诺。

这种版本管理也适用于供应商更名、字段更新或团队自行调整计入动作。清楚变化点，让读者知道什么时候应该分段阅读，而不是把定义跳变当成内容表现的突然转折。`,
`The current YouTube metric-counting guide states that from August 24, 2026 public views are counted at playback start across formats, while distinguishing related advertising and monetization measures. This is a definition change, not equivalence among similarly named metrics.

For a report spanning such a boundary, check actual comparability. A field still called views does not establish unchanged collection throughout the year. A public-view definition should not replace every paid-ad or earnings denominator.

Record effective time, source explanation, affected field, historical reprocessing status and owner. Keep unspecified historical treatment unknown instead of promising it for the platform.

The same version discipline applies to a provider rename, field update or the team’s changed action set. Explain the boundary so readers know where interpretation may need separate periods, rather than present a definitional jump as a sudden turning point in content quality. The documented change can trigger review even before a numerical difference has been observed.`,['ytCounts']),
s('用一份交接样例核对新旧报表','Use a handoff sample to compare reports',
`选择一个有权使用、范围清楚的样例，分别保留输入字段、来源状态、计算和显示。不要用只有最终百分比的截图要求新供应商复现不知道的底层数据。

让接收方说明字段映射、单位转换、缺失处理和汇总方法，再比较结果。若不同，逐项检查定义，不先宣布哪个产品更准确。相同结果也不证明数据来源独立。

静态字段模板可用于这种交接；它不会自动读取平台、补齐缺失或验证实际账号。填写人需要按项目资料提供依据，模板中的空行不是零值默认或行业基准。

确认完成后，保留适用版本与尚未解决的差异。报告应让同事知道以后改了什么需要重新核对，而不是只有一张在某天算对的表。

例如两个导出都把字段命名为views，但一份是精确记录，另一份标为估计。只匹配列名会漏掉状态差别。接收方应保留原始标记，说明该差别是否影响当前比较，并将未解决问题交回来源负责人。这样汇总报告即使采用同样的公式，仍然不会隐去输入的不同确定程度。`,
`Choose an authorized, well-scoped example and retain input fields, source state, calculation and display. A screenshot containing only a final percentage should not require a new provider to reconstruct unknown underlying data.

Ask the recipient to explain field mapping, unit conversion, missing handling and aggregation before comparing results. For a discrepancy, inspect definitions instead of first declaring a product more accurate. Agreement also does not establish independent data sources.

The static field template supports that handoff. It does not read platforms, fill missing information or verify actual accounts. The operator supplies applicable evidence, and blank rows are neither zero defaults nor benchmarks.

After confirmation, retain the applicable version and unresolved differences. A colleague should know which future change requires another check. The deliverable is more than a table that happened to produce the expected value on one day; it is an explanation of why that result remains interpretable under the recorded conditions.

For example, two exports might both call a field views while one provides an exact record and the other labels it estimated. Matching column names alone misses the difference. Retain the original flag, explain whether it affects this comparison and return unresolved questions to the source owner. An aggregate report using the same arithmetic should not conceal different levels of certainty in its inputs.`),
s('在报告里同时保留短名与完整定义','Keep a short label beside the complete definition',
`图表可以使用短名称，但应能找到完整指标约定。脚注说明动作、分母、窗口与版本，必要时标记不可比或估计，不让简洁设计抹掉关键限制。

如果多个来源只提供不同范围的指标，可以并排展示，不强行合成统一排名。一个品牌的月度管理报告与一个创作者单帖观察也不必使用相同的汇总方式。

把定义变更与实际结果变化在叙述中分开。读者应该知道本月差别来自新增字段、内容组合还是可比较条件下的观察，而不是根据一个箭头猜原因。

最终发布前核对标题、表头、下载和解释是否一致。只更新公式文件而留下旧图注，会让技术正确却交流错误；指标负责人需要负责整套说明的当前状态。`,
`A chart can use a short name if the complete contract is available. A note preserves actions, denominator, window and version, marking estimates or incomparability where needed. Concise design should not remove essential limits.

Where sources offer different measures, show them alongside each other rather than force a common ranking. A brand’s monthly management report and a creator’s single-item observation need not share aggregation.

Separate definition changes and observed performance changes in the narrative. Readers should know whether a difference concerns an added field, content mix or an observation under comparable conditions instead of guessing from an arrow.

Before publication, align title, headers, download and explanation. Updating a formula while leaving an old caption creates technically correct calculation with incorrect communication. The metric owner needs to maintain the current explanation as a whole, including material handed to colleagues who will not inspect the calculation file themselves.`),
s('让指标约定服务判断，而非变成万能评分','Use the contract for judgment rather than a universal score',
`互动率可以描述特定条件下的行为记录，不能单独确认受众真实性、独立人数、信任、销售或因果增量。把它写清楚不是扩大能力，而是让它承担恰当的问题。

当合作团队讨论选择、继续测试或解释异常时，带上指标约定和实际来源。若证据不足，缩小结论或寻找合适资料，不通过更换公式让结果看起来符合期待。

一个可复查的交接应回答：输入是什么，为什么这样计算，何时能比较，什么仍未知。保持这些问题可回答，比争取一个没有范围的最高互动率更适合品牌研究和项目复盘。`,
`Engagement rate describes behavioral records under particular conditions. Alone, it cannot establish audience authenticity, unique people, trust, sales or causal incrementality. A clear contract assigns the metric an appropriate question rather than enlarging its powers.

When a team discusses selection, another test or an anomaly, bring the contract and actual source. If evidence is insufficient, narrow the conclusion or obtain suitable information instead of switching formulas until the result looks desirable.

A reviewable handoff answers what the inputs are, why the calculation is chosen, when comparison is valid and what remains unknown. Keeping those questions answerable supports brand research and review better than pursuing an unscoped highest engagement rate. It also gives the next operator a basis for correcting a result without reinventing the definition.`)
],
table:{title:p('互动率指标约定','Engagement-rate metric contract'),headers:[p('字段','Field'),p('必须说明','Specify'),p('常见误读','Common misreading')],rows:[[p('分子','Numerator'),p('计入事件与排除项','Included events and exclusions'),p('所有来源的互动都相同','All engagement fields are identical')],[p('分母','Denominator'),p('对象、单位与快照/窗口','Object, unit, snapshot/window'),p('粉丝等于实际观看者','Followers equal actual viewers')],[p('状态','State'),p('零、缺失、无效与估计','Zero, missing, invalid, estimated'),p('空白自动为零','Blank automatically means zero')],[p('版本','Version'),p('生效时间与历史处理','Effective time and history treatment'),p('同名字段永久可比','Same name means permanently comparable')]],note:p('本篇教学结构为E÷D×100；具体动作和集合需定义，不是所有平台通用的原生公式。','Teaching structure E÷D×100; actions and sets need definition, not a universal native-platform formula.')},
tool:{title:p('指标交接核对','Metric handoff checks'),intro:p('下载为空白字段模板，不含自动平台连接。','The download is a blank field template with no automatic platform connection.'),items:[p('用途、对象与字段完整。','Document purpose, object and fields.'),p('原始单位和显示规则一致。','Align raw unit and display.'),p('数据状态没有静默转零。','Do not silently convert states to zero.'),p('定义变化保留版本。','Version definition changes.'),p('样例可按相同输入复算。','Reproduce the sample from the same inputs.'),p('报告短名能找到完整说明。','Connect the short label to the full definition.')],downloads:[{label:p('下载中文指标约定CSV','Download Chinese metric-contract CSV'),url:'/downloads/engagement-metric-contract.zh.csv'},{label:p('下载英文指标约定CSV','Download English metric-contract CSV'),url:'/downloads/engagement-metric-contract.en.csv'}]}
});
