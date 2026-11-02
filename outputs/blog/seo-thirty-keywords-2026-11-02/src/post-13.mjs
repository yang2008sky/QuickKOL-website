import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:13,
summary:p('从原始字段建立可复算的互动率记录，处理分母、缺失、零、平均与汇总，并保留每个结果的适用范围。','Build a reproducible engagement-rate record from source fields, handling denominators, missing values, zero, averages and pooling with the scope retained.'),
description:p('How to calculate engagement rate：逐行核对互动与分母、复算平均和汇总，下载静态算例 CSV，区分缺失、零和不可比较结果。','Learn how to calculate engagement rate with a reproducible worksheet, matched denominators, missing-data states and worked examples for averages and pooling.'),
coverAlt:p('奶油色网格上蓝色分子方块与珊瑚色分母圆形分开排列，用黑色分数线连接，不展示行业基准。','Blue numerator blocks and coral denominator circles on a cream grid, connected by black fraction bars without industry benchmarks.'),
answer:p('计算互动率先定义互动事件，再选择同一对象与窗口下的分母：互动率百分比＝纳入的互动事件数÷选定分母×100。按粉丝、触达、展示或观看计算的是不同指标，不能只写“ER”。每条记录应保留来源、对象、分子、分母类型、数值与观察状态。分母为零或缺失时不输出百分比；缺失互动不是零。最后按问题选择单帖、单帖平均或匹配记录的汇总比率。',
'To calculate engagement rate, define included interactions and choose a denominator for the same object and window: percentage rate equals included interaction events divided by the selected denominator, multiplied by 100. Follower, reach, impression and view denominators produce different measures. Retain source, object, numerator, denominator type, value and observation state for every row. A zero or missing denominator does not produce a percentage; missing interactions are not zero. Then choose a post-level rate, an average or a pooled ratio that answers the intended question.'),
links:[link('互动率分母指南','engagement-denominator guide','engagement-rate-denominators'),link('公式与计算器指南','formula-and-calculator guide','engagement-rate-calculator-formulas','interactive-tool'),link('活动汇总指南','campaign-aggregation guide','engagement-rate-instagram-campaign-aggregation')],
sections:[
s('先写指标配置，再复制数字','Write the metric specification before copying numbers',
`一份可复算记录，先写清平台、内容对象、形式、期间、观察时间与纳入动作。把“互动率”改成具体标签，例如“单帖、按观看、纳入点赞和评论”，比事后猜每个百分比更可靠。

Rival IQ 互动率方法说明将其公开数据与有权限数据的计算分开，使用不同分母。这说明工具界面中的同一大类名称可能包含不同算法，不是所有工具都必须使用同一公式的证明。

互动率分母指南解释各类分母能回答的问题。本篇进一步把选择写进逐行工作表。只有配置相同且来源适用的记录，才进入后续比较；看起来格式整齐，不代表它们已经可比。`,
`A reproducible record first specifies platform, content object, format, reporting period, observation time and included actions. Replace engagement rate with a concrete label such as post-level, view-based, likes and comments. That is more reliable than reconstructing a percentage’s meaning after it reaches a presentation.

The Rival IQ engagement-rate method distinguishes public data from authorized private data and uses different denominators. It shows that one broad interface category can contain different calculations, not that every tool must use one universal formula.

The engagement-denominator guide explains the questions different bases can answer. Here, put that choice into a row-level worksheet. Only matching specifications and appropriate source coverage should enter the later comparison. A neat table does not establish comparability. Include the configuration alongside any exported result so a colleague can reproduce the decision even when they do not have access to the interface that originally displayed the metric.`,['rivalRate']),
s('分子要说明纳入哪些互动','Specify which interactions enter the numerator',
`Rival IQ 互动字段说明对公开 Instagram 数据列出点赞与评论，对 TikTok 列出点赞、评论与分享等范围。引用的是供应者自己的字段方法，不等于所有原生报告或其他工具都提供同样数据。

有权限的记录可能包含更多动作；如果另一来源缺少这些字段，不能把缺少项默认为零，再称为相同的“总互动”。可以选择双方真正覆盖的可比集合，或保留不同指标分别报告。

同一人可能产生多个动作，因此互动事件总数不是独立互动人数。若使用平台提供的独立账号指标，应保留其原名和定义，不把它与事件数相加。分子变化足以改变结论，应和结果一起显示。`,
`The Rival IQ interaction-field guide lists likes and comments for public Instagram data and likes, comments and shares for TikTok, among its channel-specific definitions. These are the vendor’s own coverage rules, not proof that every native report or another tool supplies identical data.

Authorized records may include additional actions. If another source lacks them, do not turn the missing fields into zero and call the totals equivalent. Select a genuinely comparable included set or report the different measures separately.

One person can perform several actions, so interaction events are not unique interacting people. If a platform supplies a unique-account measure, preserve its name and definition instead of adding it to event counts. A numerator change can change the conclusion and should travel with the result. That small piece of metadata is essential when a table is reused later, because a column called engagements cannot explain which actions were actually counted.`,['rivalInteractions']),
s('让分母对应问题与同一对象','Match the denominator to the question and object',
`按粉丝的比率描述互动事件相对于一个粉丝规模，不说明有多少粉丝实际看到内容。按触达、观看或展示的比率又有不同含义，不能把它们互换成“多少人参与”。分母本身的定义仍应回到数据源。

假设一条内容有100次纳入互动、5,000个粉丝，按该粉丝快照计算为2%；若同窗口可用观看为2,000，按观看计算为5%。两者都能按各自输入复算，差异不是谁算错，更不是受众真实性结论。

保留粉丝快照的时间。不能拿发布时互动、一个月后的粉丝和另一段时间的观看凑一条记录，再宣称已经控制窗口。若现有数据无法匹配，就注明限制或不计算，不能靠一个更精确的小数消除范围问题。`,
`A follower-based ratio places events relative to a follower count; it does not show how many followers actually saw the content. Reach, views and impressions answer different questions and cannot all become the share of people participating. Return to the source for the denominator’s definition.

For a hypothetical post with 100 included interactions and a 5,000-follower snapshot, the follower-based rate is 2%. If its matched view count is 2,000, the view-based rate is 5%. Both are reproducible from their own inputs. The difference is neither an arithmetic error nor a finding about audience authenticity.

Retain the follower snapshot time. Publication-period interaction, followers one month later and views from another window do not become a matched row merely because all fields are filled. Mark limitations or decline calculation when alignment is unavailable. More decimal places cannot remove a scope mismatch. The result’s label should make this visible before anyone compares it with a benchmark or another assignment.`),
s('零、缺失与不适用要分开','Separate zero, missing and not applicable',
`若纳入互动确实观察为0，分母为500，则该定义下比率为0%。若分子缺失，结果应缺失。若分母为0或缺失，不做除法，也不输出0%或无穷大来填表。

负数计数、混入文本的数字和不清楚的千位缩写需要回到来源核对。不要自动把每个横线、空白和“少于某值”转换成精确数字。数据清理应保留原值和处理说明，尤其不能让估计在清理后看起来已观察。

下载算例将这些状态单列。它是静态 CSV，不会在用户修改输入后自动重算；公式与计算器指南提供实际交互入口。使用任何计算器前，也应先确认自己输入的字段对应其定义，而不是只看输入框叫“互动”。`,
`If included interactions are genuinely observed as zero and the denominator is 500, the defined rate is 0%. A missing numerator instead leaves the result missing. A zero or missing denominator should not produce division, 0% or infinity merely to fill a table.

Negative counts, text mixed with numbers and unclear abbreviated thousands need source review. Do not automatically convert every dash, blank or less-than value into an exact observation. Retain the original value and cleaning note, particularly where an estimate might otherwise appear observed after cleanup.

The downloadable worked examples keep these states separate. They are static CSV files, not a spreadsheet that automatically recalculates edited inputs. The formula-and-calculator guide provides an actual interactive next step. Before using any calculator, match your fields to its definitions rather than relying on an input labeled engagement. A calculator can apply correct arithmetic to an inappropriate value, so the person preparing the data still owns the interpretation.`),
s('单帖平均与汇总比率回答不同问题','An average of post rates differs from a pooled ratio',
`假设内容A有100次互动和1,000次同口径观看，比率10%；内容B有90次互动和9,000次观看，比率1%。两条单帖率的简单平均为5.5%；合并事件数除以合并观看数，则为190÷10,000×100＝1.9%。

简单平均给予每条内容相同权重；汇总比率按分母大小赋予不同权重。它们没有谁必然更好，问题是报告想描述平均一条内容，还是这些匹配事件相对这些分母的总体比例。不要在不知道算法时只写“平均互动率”。

活动汇总指南继续讨论不同聚合方式。这里合并的是示例中的观看事件，不是独立观众。同样，逐帖触达相加可能包含重复人，不能把汇总分母自动叫活动唯一人数。`,
`In a hypothetical example, post A has 100 interactions and 1,000 matched views, producing 10%. Post B has 90 interactions and 9,000 views, producing 1%. The simple mean of the two rates is 5.5%. Pooling events and views instead gives 190 divided by 10,000 times 100, or 1.9%.

The simple mean gives each post equal weight; the pooled ratio weights according to denominator size. Neither is inherently better. Ask whether the report describes an average post or the relationship between these pooled events and denominators. Average engagement rate without the method is incomplete.

The campaign-aggregation guide develops the aggregation question further. Here the pooled denominator contains example view events, not unique viewers. Likewise, adding post reach can repeat people and should not automatically become campaign-wide unique audience. Keep the population label attached to the total even if the arithmetic looks straightforward. The sample illustrates a weighting difference, not expected performance for any industry or account.`),
s('完整行进入同一个计算集合','Keep the calculation set consistent',
`若A的互动可用而分母缺失，只把它的互动加进汇总分子，会破坏匹配。先标记哪些行可以计算，汇总时对分子和分母使用同一个有效集合，并报告哪些内容未被纳入。

有效不等于无偏：缺少数据的内容可能与已观察内容不同。若只覆盖十条中的六条，结果应说明六条覆盖，而不是把它命名为全部活动表现。不要用平均值替未观察内容补数后称作实际结果。

比较两个时期时，保持纳入规则与形式范围可比。一次加入更多数据，可能使数字变化，而不代表内容变好或变坏。把数据版本和集合变动留下来，接收人才能解释重算与真实表现变化的区别。`,
`If A has interactions but no denominator, adding its interactions alone to the pooled numerator breaks the match. Mark calculable rows first, use the same eligible set for numerator and denominator totals and identify excluded content.

Valid does not mean unbiased. Missing content may differ from observed content. Covering six of ten posts should be labeled as six-post coverage rather than the complete campaign. Do not replace unobserved values with a mean and call the result actual performance.

When comparing periods, preserve comparable inclusion rules and formats. Adding coverage can change the number without establishing better or worse content. Retain dataset version and set changes so the recipient can distinguish a recalculation from a performance change. If a later export fills a previously missing denominator, identify the row and reason for inclusion rather than silently updating the aggregate as though the original report had complete information. This makes both versions intelligible.`),
s('记录观察时间，避免把更新当异常','Retain observation time so updates are not mistaken for anomalies',
`YouTube 指标计数说明提醒，核验可能改变计数，实时估计也可能与观看页不同。计算时保留数据状态与时间，不把两次不同阶段的显示差异直接当作数据错误或造假。

按项目需要确定观察窗口，例如发布后某个已约定期间，并对所有可比内容一致执行。这个期间是团队的编辑选择，不是平台统一规定。若内容尚未达到相同期龄，就不要把它与已积累较久的结果直接排名。

重新观察时保留旧记录，追加新快照。可以纠正错误，也可以用更新数据重算，但要解释为什么。发布、最后互动统计、导出和研究核验日期是不同时间概念，不能只保留一个“日期”列。`,
`The YouTube metric-counting guide notes that verification can alter counts and realtime estimates can differ from the watch page. Retain state and observation time instead of immediately treating displays from different stages as errors or manipulation.

Choose an observation window appropriate to the project, such as an agreed period after publication, and apply it consistently to comparable content. This is the team’s methodological choice, not a universal platform requirement. Do not rank a newer item against much older accumulated results without addressing the difference in age.

Preserve earlier records when observing again and append a snapshot. Corrections and updated calculations are legitimate, but explain why they occurred. Publication time, interaction window, export time and research review date are different concepts. One generic date column cannot represent them all. Clear timing also helps a recipient reproduce a finding without expecting today’s public total to equal a historical snapshot that the source has since updated.`,['ytCount']),
s('先识别重复行和更新快照','Identify duplicate rows and replacement snapshots',
`一条内容可能在两次导出中出现，也可能既有旧截图又有新记录。先识别平台、内容编号、窗口和快照时间，再决定保留哪条用于这次计算。不能因为文件来自两个文件夹，就把相同观察算两次。

假设内容P的一份旧快照有30次互动，后来的同范围快照有40次。若目的是报告最新可用观察，应保留旧值作历史，并让新值进入当前集合；不能把两者加成70。若要研究变化，应记录两个时点的差值与更新条件，而不是称为两条不同内容。

去重规则也要防止错误合并。不同平台出现相同标题，并不证明是同一发布对象；相同文件名也未必对应相同版本。使用能核对的稳定编号，保留修改依据，不要以标题文字作为唯一键。

完成后报告纳入多少行、覆盖多少发布对象、排除了什么。未知状态不应在清理过程中消失。这个步骤让下载后的表格仍能解释结果来自哪里，而不是只剩一个看似干净的总数。`,
`A content item can appear in two exports or have both an older screenshot and a newer record. Identify platform, content reference, reporting window and snapshot time before choosing which row belongs in the calculation. Two folders do not make the same observation two independent items.

Suppose an earlier snapshot of post P contains 30 interactions and a later matched snapshot contains 40. For a latest-available report, retain the old value as history and include the new value in the current set. Adding them to 70 double counts the snapshots. For a change analysis, instead describe the difference between times and the update conditions, without calling them separate posts.

Deduplication also needs to avoid incorrect merging. Identical titles on different platforms do not establish one publication object, and identical filenames may refer to different versions. Use verifiable stable references, preserve the change basis and avoid using title text as the only key. A row removed as a duplicate should remain explainable if someone later questions coverage.

After cleaning, report included rows, covered publication objects and exclusions. Unknown states should not disappear in the process. This step lets an exported sheet explain where a result came from instead of leaving only a clean-looking total whose contents cannot be reconstructed.`),
s('复算、标注，再讨论含义','Recalculate, label and then interpret',
`交接前选一条结果手算，核对乘100、百分号和小数精度。不要把0.02再当作2输入重复乘100。舍入放在最后显示，保留原始输入供复核。

高互动率不自动说明内容更适合品牌、受众更真实或带来更多销售。它只描述定义内的事件与分母关系。比较行业报告时，核对样本、时期、形式、分子分母和聚合方式；缺少这些条件，就不能把差额当作改进目标。

QuickKOL 可以帮助研究相关内容与合作问题；原始数据和计算仍需在适当来源核对。真正可复用的结果不只是一个百分比，而是一条别人能看懂、复算并正确限定的记录。`,
`Before handoff, recalculate one result manually and check multiplication by 100, percent symbols and precision. Do not treat 0.02 as an already converted 2 and multiply again. Round for display at the end while preserving original inputs.

A higher rate does not establish better brand fit, more authentic audiences or additional sales. It describes events relative to the defined denominator. For an industry comparison, check sample, period, format, numerator, denominator and aggregation. Without those conditions, the difference cannot responsibly become an improvement target.

QuickKOL can support research into relevant content and partnership questions, while source data and calculations still need appropriate verification. A reusable result is not merely a percentage. It is a record another person can understand, reproduce and bound correctly. That record can remain useful even when the conclusion is that two attractive-looking numbers should not be compared.`)
],
table:{title:p('假设算例：先看计算状态','Hypothetical examples: check calculation state'),headers:[p('情况','Case'),p('输入','Input'),p('输出','Output')],rows:[[p('正常观察','Observed'),p('100 ÷ 5,000 × 100','100 ÷ 5,000 × 100'),p('2%（按该分母）','2% under that denominator')],[p('实际零互动','Observed zero interactions'),p('0 ÷ 500 × 100','0 ÷ 500 × 100'),p('0%','0%')],[p('互动缺失','Missing interactions'),p('缺失，分母500','Missing, denominator 500'),p('缺失，不写0%','Missing, not 0%')],[p('分母为零','Zero denominator'),p('互动0，分母0','Interactions 0, denominator 0'),p('不计算','Not calculated')],[p('平均与汇总','Mean versus pooling'),p('A 10%；B 1%，分母不同','A 10%; B 1%, unequal denominators'),p('简单平均5.5%；汇总1.9%','Simple mean 5.5%; pooled 1.9%')]],note:p('全部为教育算例，不是市场基准。静态CSV不随输入自动重算。','All values are educational examples, not benchmarks. Static CSV does not recalculate edited inputs.')},
tool:{title:p('可复算互动率清单','Reproducible engagement-rate checks'),intro:p('下载示例保留计算与不可计算状态，实际数据另行核验。','Downloaded examples retain calculated and unavailable states; verify actual data separately.'),items:[p('分子动作与分母名称明确。','Define included actions and denominator.'),p('对象、窗口和观察日期匹配。','Match object, window and observation date.'),p('缺失与零分别保存。','Retain missing and zero separately.'),p('分子分母汇总用同一集合。','Pool numerator and denominator over the same set.'),p('简单平均与汇总分别标注。','Label simple mean and pooled ratio separately.'),p('百分比不能独自证明真实性或销售。','A percentage alone establishes neither authenticity nor sales.')],downloads:[{url:'/downloads/engagement-rate-worked-examples.en.csv',label:p('下载英文静态算例 CSV','Download English static worked examples CSV')},{url:'/downloads/engagement-rate-worked-examples.zh.csv',label:p('下载中文静态算例 CSV','Download Chinese static worked examples CSV')}]}
});
