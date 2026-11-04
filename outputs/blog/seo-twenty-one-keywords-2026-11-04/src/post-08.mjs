import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:8,
summary:p('用Social Blade理解公开账号统计：先确认账号与窗口，再阅读变化、更新差异及收入估算，避免把公开快照当成后台完整结果。','Read Social Blade public channel statistics by confirming identity and window, then interpreting changes, update differences and estimated earnings without treating snapshots as complete analytics.'),
description:p('Social Blade统计阅读指南：解释公开快照、更新延迟、累计变化与收入估算，并区分YouTube后台和商业结果。','Understand Social Blade snapshots, update timing, cumulative changes and earnings estimates, and distinguish them from first-party analytics and commercial results.'),
coverAlt:p('奶油色编辑图形把公开来源、观察时间与变化记录排成相连的三个圆形节点，不显示真实账号指标。','A cream editorial graphic connects three circular nodes for public source, observation time and recorded change, without real account metrics.'),
answer:p('Social Blade是一项跨社交平台统计服务，可帮助读者查看账号的公开增长与历史信息。阅读时，先确认账号对象、数据日期、指标定义和更新状态，再解释变化。它的公开统计不等于创作者后台全部数据，收入估算也不等于真实收入、利润或合作报价。本篇按公开说明解释如何读取一个统计页面，使用清楚标注的假设计算示例，不评价某个真实个人，也不因为单日数字异常就推断刷量或违规。',
'Social Blade is a cross-platform statistics service that helps readers examine public account growth and history. Start by confirming the account, dates, metric definition and update state before interpreting a change. Public statistics are not the creator’s complete private analytics, and estimated earnings are not actual income, profit or a sponsorship quote. This guide explains how to read a statistics page against the provider’s public documentation, with a clearly hypothetical calculation. It evaluates no named individual and does not infer manipulation or a violation from an unusual day. A useful reading makes clear which number was observed, when it was collected and which question it can actually answer.'),
links:[link('达人数据阅读指南','creator-data reading guide','read-creator-engagement-data'),link('指标定义指南','metric-definition guide','engagement-rate-formula-metric-contract'),link('月度互动解释指南','monthly-engagement interpretation guide','social-media-engagement-rate-monthly-explanation'),link('项目测量指南','campaign-measurement guide','creator-campaign-measurement')],
sections:[
s('先确认你正在看哪个账号','Confirm which account the page represents',
`Social Blade产品问答介绍跨平台统计、历史与相关产品。一个账号名称出现在搜索结果，不代表它与另一个平台同名账号属于同一对象，也不代表商业代表关系已经确认。

从原始公开账号核对平台、链接和可见标识。若名称相近、曾改名或页面不完整，保留待确认状态，不把相似头像作为唯一依据。

达人数据阅读指南进一步解释来源与指标的关系。本篇的任务是理解统计，而不是收集私人联系方式、敏感资料或推断未公开的账号所有权。

记录实际页面地址与观察时点，也说明你要回答什么：公开增长、某时期的变化，还是一个需进一步核对的问题。不同任务需要的资料并不相同。

无法确认对象时，先解决对象问题。把一个完整但属于别人的统计页带入报告，比一个明确标为缺失的字段更容易造成错误。

如果原始账号有多个语言或地区页面，保留其具体任务，不把它们合并成一个总受众。团队研究某个地区内容时，可以说明选择该页面的理由；另一地区的同名页面应作为不同观察对象，除非另有适当依据。账号身份清楚，后续窗口与数字比较才有意义。`,
`The Social Blade product FAQ describes cross-platform statistics, history and related products. A name appearing in search does not establish that an account with the same name on another platform represents the same person or that any commercial relationship is confirmed.

Cross-check the platform, link and visible identifiers against the original public account. When names are similar, changed or incomplete, retain an unresolved state instead of relying on a matching avatar alone.

The creator-data reading guide explains how source and metric relate. The task here is to understand statistics, not collect private contact details, sensitive information or infer unpublished ownership.

Record the actual page address and observation time, together with the question: public growth, change during a period or an issue needing clarification. Different questions require different supporting material.

Resolve an uncertain identity before interpreting numbers. A complete statistics page belonging to someone else is more misleading than an explicitly missing field. Also retain the platform as part of the identity: two pages concerning one organization can still describe different accounts, audiences and content histories.

If the organization has regional or language accounts, retain each page’s particular task instead of combining them into one audience. A study of regional content can explain why that account was selected; a similarly named page elsewhere remains a different observation unless appropriate evidence supports a connection. Clear identity gives later window and numerical comparisons a meaningful object.`,['sbAbout']),
s('理解快照时间与行为发生时间的区别','Distinguish snapshot time from when activity occurred',
`Social Blade数据差异说明把采集比作在某个时点记下公开数字：服务获得当前总数，不一定知道每次行为何时发生。因此，与平台显示的数字不完全一致，可能涉及采集与存储方式。

这不能被概括为所有差异都有一个固定延迟。需要核对具体指标、窗口、时区与页面更新时间，而不是凭印象把一天的数据移到另一日。

假设两张记录分别在周一和周三保存，差值描述这两个观察时点之间的累计变化；不能把它直接拆成周二和周三各发生多少。

在解释图表前，先问横轴代表平台活动日期还是统计观察日期。如果资料没有说明，就保留不确定性，不为了画平滑趋势补造中间值。

来源差异也不自动说明某个平台或个人提供了错误数据。先比较资料如何形成，再判断是否仍有需要询问的具体矛盾。

例如，把周一早上保存的公开总数与周一晚上后台截图直接比较，差值可能包含后来发生的行为。正确做法是先保留两个时点，再说明它们并非同时测量；不把较小的数自动判断成漏报，也不把较大的数自动当作夸大。这个例子只说明比较条件，不认定实际差异原因。`,
`The Social Blade data-difference FAQ compares collection to noting a public total at a particular moment: the service receives a current number, not necessarily when every action happened. Differences from a platform display can therefore involve collection and storage.

That does not mean every mismatch has one fixed delay. Check the actual metric, window, time zone and update state rather than move a day’s figure to another date by assumption.

Suppose two records were saved on Monday and Wednesday. Their difference describes cumulative change between those observations; it cannot establish how much occurred separately on Tuesday and Wednesday.

Before interpreting a graph, ask whether its axis reflects platform activity dates or statistical observation dates. If documentation does not answer, retain uncertainty instead of inventing intermediate values for a smooth trend.

A source difference also does not automatically mean a platform or person supplied false information. Compare how each record was produced, then identify any remaining contradiction worth asking about. Keeping the original values and labels makes that comparison possible without retrospectively rewriting evidence to force agreement.

For example, comparing a public total saved Monday morning with a first-party screenshot from Monday evening may include activity after the earlier observation. Retain both times and explain that measurement was not simultaneous. The smaller value is not automatically under-reporting, nor the larger one exaggeration. This example illustrates a comparison condition without claiming it explains every actual discrepancy.`,['sbDifference']),
s('阅读更新状态，不承诺实时完整','Read update status without promising real-time completeness',
`Social Blade更新频率说明指出更新会变化：热门页面可能更频繁，服务以至少每日更新为目标，但低访问页面可能较少更新，数日信息可能合并出现。

这是一项服务方公开说明，不是每个账号每天一定完整更新的保证。报告应采用实际看到的状态，不能把目标频率替代页面证据。

连续几天没有单独变化记录时，不要直接填成“真实增长为零”。先判断是否有更新缺口、合并记录或尚不清楚的口径，再决定是否可以计算。

指标定义指南帮助把分子、分母与窗口写清。缺少相同窗口的数据，就不适合与另一个每日完整记录直接排列成精确排名。

也不要反向推断某个账号因为资料更新不频繁就没有价值。页面的采集状态与内容质量是不同问题，仍需要各自的依据。

需要汇总时，可以把未知字段留空并标明原因，另列哪些窗口有完整可比较资料。不要用插值填补后再让读者以为服务实际观察过那些日期。如果为了内部规划做了估计，就明确标为估计，说明方法，并避免把它与实际采集记录混在同一列。`,
`The Social Blade update-frequency FAQ says updates vary: popular profiles may update more often, while the service aims for at least daily collection but may update low-traffic pages less often, grouping several days together.

This is the provider’s public explanation, not a guarantee that every profile receives a complete daily update. Use the state actually observed rather than substitute a collection target for page evidence.

If several days lack distinct changes, do not automatically enter true growth was zero. First inspect whether an update gap, grouped record or unclear definition explains the display before deciding what can be calculated.

The metric-definition guide helps specify numerator, denominator and window. Without equivalent periods, a sparse record does not belong beside a complete daily record in a precise-looking ranking.

Nor does less frequent statistical collection establish that an account lacks value. Collection state and content quality are different questions requiring different evidence. If a decision depends on an unavailable period, ask for an appropriate source rather than describe an incomplete public history as a comprehensive account audit.

For a summary, leave unknown fields unresolved with a reason and identify windows with sufficiently comparable records. Do not interpolate missing days and let readers believe the service observed them. If internal planning genuinely needs an estimate, label it as such, explain the method and avoid mixing estimated entries with collected values in an indistinguishable column.`,['sbUpdates']),
s('把累计变化与内容原因分开','Separate a cumulative change from its cause',
`公开总数的变化可以提出问题，但不会独立说明由哪条内容、哪次活动或哪位合作伙伴造成。先记录观察，再寻找相关且适当的补充资料。

假设某账号一周增加500个订阅，这只是一个假设数量。若同一周发布多条内容、接受其他曝光或更新统计，不能直接把500全部归给其中一次品牌合作。

也不要仅凭突增、下降或某天为零指控个人。可能的解释应保持为待核验问题，已经证实的事实则说明来源与范围。

月度互动解释指南帮助说明内容组合与时期条件。可比较的是相同对象、口径和窗口下的记录，而不是把一条爆款与另一周不同发布量的总数直接对照。

如果实际原因无法确认，就准确写“观察到变化，尚不能归因”。这个结论比为了给报告一个完整故事而猜测动机更有价值。`,
`A change in public totals can generate a question without identifying the post, activity or partner responsible. Record the observation first, then seek relevant and appropriate supporting material.

Suppose an account gains 500 subscribers in a week, a hypothetical quantity. If it publishes several pieces, receives other exposure or has statistical updates, the entire 500 cannot be assigned to one brand collaboration.

Do not accuse someone based only on a jump, decline or zero day. Possible explanations remain questions for verification; established facts need their source and scope.

The monthly-engagement interpretation guide explains content mix and period conditions. Compare records with equivalent objects, definitions and windows rather than a viral post against another week’s total with a different publishing volume.

If the cause cannot be confirmed, write that a change was observed and remains unattributed. That is more useful than a complete story built from guessed motives. Public statistics may help decide what to examine next while remaining insufficient to conclude why a particular audience acted.`),
s('收入估算不是账单、利润或报价','Estimated earnings are not invoices, profit or a rate quote',
`Social Blade收入估算说明介绍用观看数与假设RPM范围计算，并提醒可能并非所有观看都变现，甚至没有观看变现；用户也可以调整计算设置。

按本次官方说明的默认示例范围，每千次0.25至4美元，假设100000次观看对应25至400美元。这只是演示乘法，不是某个真实账号收入、行业承诺或本篇独立验证的平均水平。

实际收入可能还受内容形式、地区、变现条件等影响。此类估算也不包含一个创作者全部业务，不可拿来推算税后利润或要求对方接受某个合作价。

当团队需要确认项目成本，向适当联系人询问具体交付、使用范围与报价。不要把第三方收入区间当作已获知对方经营账目。

截图或导出时保留“估算”标签和所用假设。范围再宽也不是已经证明包含真实收入的置信区间，不能把视觉上的上下界当作统计保证。

财务需要不同资料时，应改变请求而不是继续放大公开估算。了解某次合作的预算，需要明确服务与报价；了解自己项目已经支付多少，需要核对相应付款记录。即使一个估算数碰巧接近另一张资料，也不能据此确认整套估算方法已经适用于所有账号。`,
`The Social Blade earnings-estimate FAQ describes multiplying views by an assumed RPM range and cautions that not every view may be monetized; none may be monetized. Users can also adjust the calculation settings.

Using the default illustrative range in the documentation read for this article, $0.25 to $4 per thousand, a hypothetical 100,000 views produces $25 to $400. This demonstrates multiplication, not an actual account’s income, an industry promise or an independently validated average.

Actual earnings can also depend on format, geography and monetization conditions. Such an estimate does not cover a creator’s entire business and cannot establish after-tax profit or require acceptance of a sponsorship rate.

For project costs, ask an appropriate contact about deliverables, use scope and a quote. A third-party range is not access to the person’s business accounts.

Preserve estimated labels and assumptions in screenshots or exports. A broad range is not a confidence interval proven to contain the actual figure, and visible lower and upper bounds do not create that statistical guarantee. Treat the number according to its construction, rather than the financial certainty its formatting might suggest.

When finance needs different information, change the request rather than stretch the public estimate. Planning a particular collaboration requires a defined service and quote; establishing what your project actually paid requires its payment records. Even an estimate coincidentally close to another figure does not validate the estimation method for every account. Match the evidence to the financial question being asked.`,['sbEarnings']),
s('后台资料回答的是另一组问题','First-party analytics answer another set of questions',
`YouTube展示与观看说明区分展示、观看、独立观众与观看时长，也说明部分卡片与报告更新频率不同。这表明即使在同一后台，不同数字仍需看各自定义。

公开总观看数不能推出所有缩略图展示、观众来源或独立人数。需要这些信息时，应由适当账号负责人提供可分享的相关报告，并保留窗口和筛选条件。

项目测量指南帮助把实际合作目标与所需证据对应。并非每个问题都需要全部后台资料，也不应为一项小任务索取无关商业信息。

把公开统计和后台资料并列时，明确各自用途。一个用于观察公开历史，另一个解释特定内容或项目；不必强行修改它们直到数字看起来完全相同。

本篇没有登录任何创作者后台，也没有测试Social Blade付费产品。这里的区分来自公开资料与编辑分析，实际报告仍按可用来源核验。`,
`The YouTube impressions-and-views guide distinguishes impressions, views, unique viewers and watch time, and notes different update frequencies for some cards and reports. Even figures inside one analytics system need their own definitions.

A public view total cannot reveal every thumbnail impression, traffic source or unique person. If these questions matter, an appropriate account owner can supply a shareable relevant report with its window and filters.

The campaign-measurement guide connects actual project objectives with evidence needs. Not every question requires every private report, and a small assignment is not a reason to request unrelated business information.

When displaying public statistics alongside first-party material, explain their respective jobs. One can document public history while the other explains particular content or a project. Do not force their numbers to match by silently changing definitions.

This article logs into no creator analytics account and tests no paid Social Blade product. The distinctions come from public documentation and editorial analysis; actual reports still require source verification. Access to more fields can improve context, but only when the team understands what those fields measure.`,['ytImpressions']),
s('写一个可以复查的统计结论','Write a statistical conclusion someone can revisit',
`结论可以采用四部分：对象、观察窗口、看到的变化、尚未支持的解释。附适当来源，不把未确认字段写成确定值。

记录分享对象与需要支持的决定，能帮助后续同事选择适当补充资料。不必为了显得完整而扩大报告结论，也不必删除真实存在的限制。

比如“在这两个观察时点之间，公开订阅总数出现变化；采集频率与其他活动尚待核对”，比直接宣称某一次内容推动全部增长更准确。

读者应知道哪些是服务方显示、哪些是假设计算、哪些是编辑建议。QuickKOL可以帮助理解品牌任务与研究相关作品，具体数据与合作条件仍按来源核验。`,
`Structure a conclusion around the account, observation window, recorded change and explanations not yet supported. Include an appropriate source and leave unconfirmed fields unresolved.

Record who will use the note and which decision it supports. That helps the next colleague request appropriate evidence without expanding the conclusion for apparent completeness or removing a limitation that still applies.

For example, public subscriber totals changed between these observations; collection timing and other activity still need checking is more accurate than claiming one piece drove all growth.

Readers should distinguish provider-displayed values, hypothetical calculations and editorial recommendations. QuickKOL can help interpret brand tasks and research relevant work; data and commercial conditions still require verification at their source.`)
],
table:{title:p('公开统计可以与不能回答的问题','Questions public statistics can and cannot answer'),headers:[p('记录','Record'),p('可以说明','Can describe'),p('不能直接推出','Does not establish')],rows:[[p('公开总数快照','Public-total snapshot'),p('某次观察到的数值','A value at an observation'),p('每次行为发生时点','When every action happened')],[p('两次快照差值','Difference between snapshots'),p('观察区间累计变化','Cumulative change between observations'),p('某条内容的因果贡献','A post’s causal contribution')],[p('收入估算','Estimated earnings'),p('所用假设下的计算','Calculation under stated assumptions'),p('真实收入、利润或报价','Actual income, profit or quote')],[p('后台报告','First-party report'),p('对应定义、窗口与筛选下的指标','Metrics under its definitions, period and filters'),p('超出报告范围的商业结果','Commercial outcomes beyond its scope')]],note:p('假设100000次观看的计算只演示官方默认范围乘法，不是实际个人或行业基准。','The hypothetical 100,000-view calculation only illustrates the documented default range, not an actual person or industry benchmark.')},
tool:{title:p('统计阅读检查表','Statistics-reading checklist'),intro:p('用于理解资料，不给个人贴虚假或违规标签。','For interpreting evidence, not labeling a person false or in violation.'),items:[p('平台、账号与来源已确认。','Platform, account and source confirmed.'),p('观察窗口与更新时间已记录。','Observation window and update state recorded.'),p('缺失与真实零值没有混淆。','Missing values distinguished from actual zero.'),p('估算保留标签和假设。','Estimates retain labels and assumptions.'),p('公开数与后台数按口径解释。','Public and first-party values interpreted by definition.'),p('归因与身份结论没有超出证据。','Causal and identity conclusions stay within evidence.')]}
});
