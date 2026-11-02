import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:15,
summary:p('为达人营销报告建立 EMV、收入、成本与 ROI 字段字典，让估计、归因与利润计算各有清楚范围。','Build an influencer-reporting field dictionary for EMV, revenue, costs and ROI, keeping estimates, attribution and profit calculations in their proper scope.'),
description:p('Influencer EMV 与 ROI 计算字段：区分估计媒体价值、归因收入、贡献与成本，保留模型、窗口和状态，并下载双语字段字典。','Define influencer EMV and ROI calculation fields, separate modeled media value from revenue and profit, and retain scope, attribution and cost assumptions.'),
coverAlt:p('奶油色底上估计价值与实际经营记录分成蓝色、珊瑚色两条轨道，黑色边界避免将其相加。','Modeled value and business records on separate blue and coral tracks over cream, with black boundaries keeping them from being added together.'),
answer:p('研究 influencer marketing earned media value metrics ROI calculation fields 时，先建立字段字典，而不是把所有带货币符号的数相加。EMV 是依特定模型估计的媒体价值；记录或归因收入描述交易；ROI 则需要明确利润、成本及因果范围。每项保留单位、来源、窗口、观察或估计状态，以及公式依赖。EMV 不等于收入，归因收入不自动等于新增收入，软件里的 ROI 名称也不能代替企业实际成本定义。',
'For influencer marketing earned media value metrics and ROI calculation fields, start with a data dictionary rather than adding every number carrying a currency symbol. EMV is a model-dependent media valuation; recorded or attributed revenue describes transactions; ROI requires defined profit, costs and causal scope. Retain unit, source, window, observed-or-estimated state and formula dependencies for each field. EMV is not revenue, attributed revenue is not automatically incremental revenue, and a dashboard label called ROI does not replace the business’s actual cost definition.'),
links:[link('活动衡量指南','campaign-measurement guide','creator-campaign-measurement'),link('互动率工作表指南','engagement-rate worksheet guide','calculate-engagement-rate-denominator-workbook'),link('平台记录交接指南','platform record-handoff guide','influencer-platforms-record-interoperability')],
sections:[
s('先给每个字段一个角色','Assign a role to every field',
`把输入分为观察、模型估计、归因结果、商业成本和派生计算。一个字段可以带货币单位，却不属于现金收入；一个数字来自后台，也不代表已完成结算。角色能防止数值进入不适合的公式。

AMEC 整合评估框架区分产出、受众反应、结果与组织影响，并要求团队获取实际相关资料。这个层级思路有助于理解为什么媒体估值不能直接替代经营结果，但框架本身不会提供完整归因或财务数据。

活动衡量指南帮助先定义要回答的问题。若目的是内容可见性，不必伪造利润；若要解释利润，就不能只交曝光。将问题和字段角色写在字典顶部，让报告接收者知道这份文件准备支持哪一种决定。`,
`Classify inputs as observations, modeled estimates, attribution outputs, commercial costs or derived calculations. A currency unit does not make a field cash revenue, and a dashboard number does not establish completed settlement. Roles prevent values entering inappropriate formulas.

The AMEC integrated evaluation framework distinguishes outputs, audience responses, outcomes and organizational impact while requiring relevant actual information. That distinction helps explain why media valuation cannot replace business results; the framework does not supply complete attribution or financial records.

The campaign-measurement guide helps define the question first. A visibility question does not need invented profit, while a profit question cannot be answered with exposure alone. Put the question and field roles at the top of the dictionary so the recipient knows which decision the file can support. This also prevents a report owner from choosing an attractive metric after the work and presenting it as the answer to a different question.`,['amecStrategy']),
s('EMV 要保留模型和输入版本','EMV needs its model and input version',
`Modash 的 EMV 方法说明将其描述为自然曝光的估计货币价值，采用平台与互动类型相关乘数，并允许在项目或工作区层级调整。这里核验的是公开文档，不是登录测试，也不是对效果的独立验证。

因此，EMV字段至少保留供应者、模型版本或配置日期、覆盖内容、输入指标、乘数、币种及计算时间。若供应者未公开某项方法，就记录未披露；不能为了复算而杜撰其内部规则。

模型配置变化后，估值可能变化，即使底层内容观察没有变化。比较两个活动前，先核对同一方法和覆盖范围。不要把一个更高EMV自动解释为更多购买、更多独立观众或更有价值的某位个人。估值有自己的用途，也有自己的边界。

用一个简化的编辑模型说明：假设2,000个已定义动作，乘每次2.50美元的估值系数，得到5,000美元。只将系数改为5美元，就得到10,000美元，却没有新增动作。这不是Modash公式或行业价格，而是说明为何要保留配置。不能把假设改变写成受众反应翻倍；找不到旧设置时，应说明比较方法不完整，也不能把重估金额当作新收到的钱。`,
`The Modash EMV method description calls it an estimated monetary value of organic exposure using platform- and engagement-specific multipliers, configurable at campaign or workspace level. This is a public-document review, not a logged-in test or independent effectiveness validation.

Retain provider, model version or configuration date, covered content, input metrics, multipliers, currency and calculation time. If a method detail is undisclosed, record that rather than inventing an internal rule to make the model seem reproducible.

Changing configuration can change the valuation even when underlying observations remain unchanged. Check method and coverage before comparing campaigns. Higher EMV does not automatically mean more purchases, more unique viewers or a more valuable person. Valuation has a purpose and a boundary. A report should make it possible to tell whether a movement came from new activity, a revised input or a new valuation coefficient, rather than treating every increase as equivalent progress.

For a simplified editorial model, suppose 2,000 defined action events are multiplied by an assumed USD2.50 valuation coefficient, giving USD5,000. Changing only that coefficient to USD5 gives USD10,000, with no new action observed. This is not the Modash formula or an industry price. It demonstrates why coefficient and configuration fields belong beside the estimate. The second value is larger because an assumption changed, not because audience response doubled. If a reporting team cannot retrieve the earlier settings, it should describe the resulting comparison as methodologically incomplete rather than announce a performance improvement. Retaining the original configuration also prevents a later revaluation from being mistaken for newly received money.`,['modashEmv']),
s('收入字段从交易到调整分别记录','Separate transaction revenue from its adjustments',
`收入记录需要订单或事件范围、金额定义、币种、窗口和状态。含税、运费、取消、退货与退款如何处理，应采用企业实际口径并写清。不要从“销售额”三个字推断所有报表相同。

保留归因来源、规则和窗口。链接、优惠码或平台模型可以记录关联，但不同方式可能覆盖不同交易，且同一订单可能在多个系统出现。没有一致对象与去重依据，就不应把所有来源的收入直接相加。

未观察到、未授权访问、尚待调整与实际为零分别标记。若目标是专业服务咨询，而非在线订单，就记录适当动作和后续状态，不给每条线索套未经核验的统一货币价值。字段定义应服从真实业务，而不是强求每个项目都有购物车。`,
`Revenue records need transaction or event scope, amount definition, currency, window and state. Use the business’s actual treatment of tax, shipping, cancellations, returns and refunds, and state it. Sales alone does not establish identical definitions across reports.

Retain attribution source, rule and window. Links, codes or platform models may associate activity with transactions, but cover different sets, and one order may appear in several systems. Without consistent objects and a deduplication basis, do not add every source’s revenue.

Separate unobserved, unauthorized, pending adjustment and genuine zero. If the job concerns professional-service inquiries rather than online orders, record appropriate actions and later states instead of assigning every lead an unverified cash value. Fields should follow the actual business rather than require a shopping cart in every project. A dictionary can identify a needed later input without pretending it already exists, which is preferable to a monetary estimate whose origin disappears once the sheet is shared.`),
s('成本字段要能看出纳入和排除','Make included and excluded costs visible',
`将创作者制作、发布、许可、代理、付费分发、产品及物流等相关成本按项目需要记录，并说明内部工作如何处理。合同金额、已开票、已支付和预测分别保存，避免把一个预计值当作实际支出。

商品成本与营销成本不是同一字段。若计算收入减去商品成本后的贡献，之后再扣营销成本，就不能在前一步已经扣除同一笔营销成本。每个字段的依赖关系应让接收者看得懂。

成本不完整时，可以报告已知成本及缺口，暂不输出完整ROI。零营销支出也不代表资源完全免费；没有输入的分母不能用0填满后继续除法。对多市场项目，币种换算来源与日期也应保留，而不是直接合并不同货币金额。`,
`Record relevant production, publication, licensing, agency, paid distribution, product and logistics costs as appropriate, and explain internal labor treatment. Keep contracted, invoiced, paid and forecast states distinct rather than making an estimate look like actual expenditure.

Product costs and marketing costs are different fields. If contribution subtracts product costs and marketing cost is deducted afterward, do not include that same marketing cost in the earlier deduction too. Dependencies should be understandable to the recipient.

With incomplete costs, report the known amount and gap rather than a complete ROI. Zero marketing spend does not establish resource-free work, and an unavailable denominator should not become zero followed by division. Retain exchange-rate source and date for multimarket work instead of adding different currencies directly. An allocation across several projects also needs its basis recorded, so a team cannot improve one project’s apparent economics merely by moving a shared expense to another unexplained category.`),
s('给 ROI 写明利润和分母定义','Define profit and the investment denominator for ROI',
`Google 的 ROI 说明将ROI与净利润和成本联系起来，也说明具体计算方式取决于活动目标，并以纳入商品和广告成本的例子说明。这不是声称任何归因收入都具备因果证明；使用者仍需确认自己的成本与结果范围。

本文给出一个明确标记的编辑计算口径：项目回报率＝（项目贡献在扣除活动成本前的金额－活动成本）÷活动成本×100。贡献需先说明已扣除哪些商品或变动成本，活动成本必须大于0。它不是所有企业通用的会计公式。

如果贡献来自归因交易，只能按归因口径命名结果；如果声称新增利润，则还需要适当增量依据。软件可能将收入减某种成本的比率标为ROI，团队仍需回看字段定义，不能从名称推导它已经覆盖全部利润项目。`,
`The Google ROI guide relates ROI to net profit and costs, notes that the exact method depends on objectives and illustrates product and advertising costs. This does not establish causality for every attributed transaction; the user still needs appropriate cost and result scope.

For a clearly labeled editorial convention here, project return percentage equals contribution before campaign cost minus campaign cost, divided by campaign cost, times 100. Define which product or variable costs contribution already excludes, and require positive campaign cost. This is not a universal accounting formula for every organization.

If contribution comes from attributed transactions, name the result accordingly. A claim about incremental profit needs suitable incremental evidence. Software may label revenue less a defined cost as ROI, but the team must still inspect those fields rather than infer that the label covers every profit component. The calculation’s name should reveal its basis instead of borrowing a stronger business interpretation than the available inputs support.`,['googleRoi']),
s('归因、增量与 EMV 不进入同一个加法','Do not add attribution, incrementality and EMV together',
`归因规则把某些结果关联到接触点；增量问题则问没有这项活动会怎样。两者需要不同依据。来源中记录的收入有价值，但不能因为有一个来源标签，就声称全部是活动独立创造。

EMV也不能加进收入，再减去活动成本称为利润。这样把模型估计的媒体价值与真实经营金额混在一起，结果即使计算正确，名称也不成立。保留单独栏目，说明各自用途。

互动率工作表指南还提醒，互动与分母不能随意混用。相同原则适用于商业指标：单位相同不代表含义相同。某个字段可用于解释传播规模，却不一定能进入财务结果公式。让每一条公式依赖都能说明理由。`,
`Attribution associates outcomes with touchpoints under a rule; incrementality asks what would have happened without the activity. They need different evidence. Recorded attributed revenue can be useful without proving every transaction was independently created by the campaign.

EMV should not be added to revenue and then reduced by campaign costs to create profit. That combines modeled media value with business amounts. Correct arithmetic cannot make the resulting label valid. Keep separate columns and explain their purposes.

The engagement-rate worksheet guide likewise distinguishes interactions and denominators. The principle also applies to commercial measures: matching units do not guarantee matching meanings. A field may help explain communication scale while remaining inappropriate for a financial formula. Require a reason for every dependency. This helps a recipient understand that a blank ROI alongside reported EMV can be an accurate limitation, rather than an incomplete report that should be repaired by inserting the estimate.`),
s('假设算例：高 EMV 不保证正回报','Hypothetical example: higher EMV does not guarantee positive return',
`以下全部是假设，不是工具默认值或行业基准。某模型给出的EMV为5,000美元，归因收入2,000美元，按已声明商品与变动成本计算的活动前贡献为800美元，活动成本为1,000美元。

按本文口径计算，（800－1,000）÷1,000×100＝－20%。它是该假设归因口径下的项目回报，不是已证明新增回报。EMV仍单独保留5,000美元，不能加进去让负值变正。2,000÷1,000＝2描述另一种收入与成本比，也不是净利润。

如果增量贡献未知，就将增量ROI标为不可计算。若成本、归因或退款状态更新，保留新版本及变化原因。这个算例证明的是字段和公式关系，不证明任何真实活动是否应该继续投资。`,
`All values here are hypothetical, not tool defaults or industry benchmarks. A model produces USD5,000 EMV, attributed revenue is USD2,000, contribution before campaign cost is USD800 under declared product and variable costs, and campaign cost is USD1,000.

Under this article’s convention, 800 minus 1,000 divided by 1,000 times 100 equals negative 20%. It is a project return on the hypothetical attribution basis, not proven incremental return. EMV remains USD5,000 separately and cannot be added to make the negative result positive. Dividing 2,000 by 1,000 gives a different revenue-to-cost ratio of 2, not net profit.

If incremental contribution is unknown, incremental ROI remains not calculable. Retain a new version and reason when costs, attribution or refund status changes. The example establishes relationships among fields and formulas, not whether any real campaign deserves more investment. A useful report can present several valid measures while refusing to blend them into one misleading success figure.`),
s('验证单位、范围和公式依赖','Validate units, coverage and formula dependencies',
`交接前检查币种是否一致、窗口是否匹配、成本是否重复、估计是否有模型版本，以及分母是否可用。对每个派生字段保存公式文本，不只保存结果。复制到演示文稿时，仍带上限制与状态。

平台记录交接指南帮助连接内容、发布、观察与使用对象。字典还需要稳定的活动和数据集编号，使一个汇总能追到纳入范围。不同表格里的同名字段，不应未经核对就合并。

下载表提供字段说明，不含真实客户数据或预填预算。它是静态CSV，不能自动读取平台或重算项目。使用团队要补齐实际来源、负责人和可用状态，再决定哪些计算可以成立。`,
`Before handoff, check currency, windows, duplicated costs, model version and denominator availability. Save a formula description for every derived field rather than only the result. Keep limitations and state when moving a number into a presentation.

The platform record-handoff guide connects content, publication, observation and use. The dictionary also needs stable campaign and dataset references so an aggregate can be traced to its included scope. Identically named fields across files should not merge without checking their definitions.

The download supplies field descriptions without actual customer information or a preset budget. It is static CSV, not a platform connection or automatic recalculation service. The team supplies real sources, ownership and availability before deciding which calculations are supported. A field can remain in the dictionary as required but unavailable, making the missing dependency visible rather than disappearing from a report that then appears complete.`),
s('用字段字典支持真实的决定','Use the dictionary to support the actual decision',
`最终汇报分别展示传播观察、模型估计、归因结果与商业计算，说明哪些可直接观察、哪些依赖假设。品牌可以根据有限证据改进内容或处理流程，不必每次都宣称证明了ROI。

QuickKOL 可以帮助理解任务、研究相关内容与合作对象，并准备联系。商业结果、平台指标和成本应继续在相应来源核验，不能由一份相关名单推导。

字段字典的价值，是让不同团队使用同一词时知道彼此指什么。一个定义清楚的未知，比一个混合了收入、EMV与不完整成本的精确百分比更能支持后续工作。`,
`Present communication observations, model estimates, attributed results and business calculations separately, identifying what is directly observed and what depends on assumptions. A brand can improve content or process using limited evidence without announcing proven ROI every time.

QuickKOL can help interpret the task, research relevant content and potential partners and prepare contact. Business outcomes, platform metrics and costs still need their corresponding sources; a relevant roster does not establish them.

A field dictionary lets teams recognize what one another mean by the same term. A clearly defined unknown can support subsequent work better than a precise percentage mixing revenue, EMV and incomplete costs.`)
],
table:{title:p('四种金额不能混为一谈','Four amounts with different meanings'),headers:[p('字段','Field'),p('说明','Meaning'),p('必要范围','Required scope')],rows:[[p('EMV','EMV'),p('模型估计媒体价值','Modeled media valuation'),p('模型、输入、配置、覆盖','Model, inputs, settings and coverage')],[p('归因收入','Attributed revenue'),p('按规则关联的交易金额','Transaction value associated under a rule'),p('规则、窗口、调整与去重','Rule, window, adjustments and deduplication')],[p('活动前贡献','Contribution before campaign cost'),p('按已声明成本扣除后的金额','Amount after declared cost deductions'),p('包含、排除及归因/增量基础','Inclusions, exclusions and attributed/incremental basis')],[p('活动成本','Campaign cost'),p('所定义范围的投入','Investment within defined scope'),p('币种、状态、分配与期间','Currency, state, allocation and period')]],note:p('本文ROI口径为明确标注的编辑算例，不是通用会计标准。EMV不加入收入或利润。','The ROI convention is a labeled editorial example, not a universal accounting standard. EMV is not added to revenue or profit.')},
tool:{title:p('EMV 与 ROI 字段检查','EMV and ROI field checks'),intro:p('下载的是字段字典，实际来源与数值由团队补齐。','Download a field dictionary; the team supplies actual sources and values.'),items:[p('每个字段有角色、单位与来源。','Give each field a role, unit and source.'),p('EMV保留模型与配置。','Retain the EMV model and settings.'),p('归因不自动改写成增量。','Do not rewrite attribution as incrementality.'),p('成本纳入范围与重复扣除已检查。','Check cost scope and duplicate deductions.'),p('公式写清利润与分母口径。','Define profit and investment denominator in the formula.'),p('未知依赖不补成零。','Do not replace unavailable dependencies with zero.')],downloads:[{url:'/downloads/influencer-emv-roi-field-dictionary.en.csv',label:p('下载英文指标字段字典 CSV','Download English metric-field dictionary CSV')},{url:'/downloads/influencer-emv-roi-field-dictionary.zh.csv',label:p('下载中文指标字段字典 CSV','Download Chinese metric-field dictionary CSV')}]}
});
