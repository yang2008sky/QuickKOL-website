import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:23,
summary:p('达人联盟佣金从被记录到真正领取，包含不同状态。用 Social Snowball 的官方流程理解待付与放行，同时核对订单条件、例外和付款责任。','Creator affiliate commissions move through distinct states before receipt. Use Social Snowball documentation to plan pending and release review with order conditions and accountable payment ownership.'),
description:p('Social Snowball 达人佣金放行指南：核对订单事件、成熟期、退款背景和接收状态，分清被记录、可审阅、已发送与已领取，不保证收益。','Review Social Snowball creator commissions through order events, maturation, exceptions and receipt. Separate recorded, reviewable, sent and claimed states without earnings guarantees.'),
coverAlt:p("两位合作者在包裹、标签和相机旁整理桌面材料","Two collaborators organize tabletop materials beside parcels, tags and a camera"),
answer:p('使用 Social Snowball 管理达人联盟合作时，不应把系统记录的佣金立即理解为已经可领取或最终入账。先确认适用订单、计算依据、成熟期与例外处理，再由有权限负责人核对放行及付款路径。官方资料描述了按订单相关事件设置等待条件，以及 Tremendous 等付款接入，但具体规则、可用方式与结果仍需在当前项目核验。清楚状态和责任，能减少品牌与创作者对“已经支付”的不同理解；本篇未连接任何账户或执行付款。','When using Social Snowball for creator affiliate work, a recorded commission should not immediately be treated as available or finally received. Confirm the applicable order, calculation basis, maturation conditions and exception handling before an authorized owner reviews release and payout. Official documentation describes waiting conditions based on order events and integrations such as Tremendous. Verify current rules, available methods and outcomes for the actual program. Explicit states and responsibility reduce conflicting meanings of paid; no account was connected and no payment was performed for this article.'),
sections:[
s('先把合作报酬的对象分清','Identify which compensation is being discussed',`达人制作费、账号发布费与联盟佣金可能同时存在，但不能混用一个支付状态。固定制作工作是否接受，与某笔订单是否满足佣金条件，通常是不同问题，需要按实际合作说明。

创作者传播分工方法帮助区分工作与用途。佣金流程也应说明它关联什么事件、哪些条件适用，以及由谁核对。不要用联盟结果倒推原本制作任务一定有问题，也不要把文件批准当作佣金已经到账。

本篇关注工作记录与交接，不提出通用佣金率、收益预测或付款服务推荐。品牌与创作者需要共同理解当前项目的规则，而不是从平台演示中的一个状态，猜测所有报酬都进入了同一阶段。`,
`Production fees, account-publication fees and affiliate commissions may coexist, but they should not share one ambiguous payment status. Acceptance of fixed production work and whether an order meets commission conditions are different questions governed by the actual collaboration.

The creator distribution-role method separates work and use. A commission process should likewise identify the event it concerns, applicable conditions and review owner. Affiliate outcomes do not independently establish a production problem, and file approval does not mean a commission has arrived.

This article addresses records and handoff, not a universal commission rate, earnings forecast or payout-service recommendation. Both parties need to understand the current program rather than infer that every type of compensation has reached the same stage from one label in a product demonstration. That distinction also makes questions more precise: the team can ask about an order-linked commission without reopening an unrelated production acceptance or implying that a creator should work without the agreed fixed compensation.`),
s('理解供应方描述的成熟期','Understand provider-described maturation',`Social Snowball 的佣金放行说明介绍按订单创建、发货或送达等事件之后的天数设置等待条件。它提供一个理解系统流程的起点，但不保证每个商店、计划与接入的数据都相同。

等待期应对应当前项目实际规则，不能直接抄一个数字就认定涵盖所有退款与例外。事件本身、时间来源和状态同步是否可靠，也需要适当负责人确认。

供应方文章提到防止推荐欺诈等好处，本篇不把这些宣传性表达当作完整检测保证。等待能给审阅留出时间，但不能自动证明订单、来源和所有未来变化已经解决。品牌应把条件、例外和决定责任一起设计。`,
`Social Snowball’s commission-release explanation describes waiting conditions based on days since an order was placed, shipped or delivered. This is a starting point for understanding the workflow, not a guarantee that every store, plan or integration has identical data.

A waiting period should correspond to the current program’s actual rules. Copying a number does not establish coverage of every refund or exception. Appropriate owners also need to check the event, time source and reliability of status synchronization.

The provider article mentions benefits such as preventing referral fraud. This publication does not turn promotional language into a complete detection guarantee. Waiting creates an opportunity for review; it does not automatically resolve order provenance or every future change. Design the condition, exception path and decision responsibility together. A period may be technically configured correctly yet fail to answer an operational question if the team has never defined which order status it intends to rely on.`,['snowMaturity']),
s('为每笔佣金保留足够的关联','Keep enough linkage for each commission',`工作记录应能连接适当订单标识、创作者或项目标识、规则版本、计算依据和状态时间。没有必要把完整顾客资料复制给所有合作成员；用于核对的关联与用于公开汇报的信息可以不同。

记录折扣、退款、税费或其他项目是否进入计算，由当前规则决定。不要把订单总额自然当成佣金基数，也不要在不明口径下比较不同创作者的金额。

如果数据来自多个系统，明确谁提供订单事件、谁执行计算、谁确认付款。一个可见佣金数值不说明这三步已经由同一来源独立核验。关联缺失时先标记，不根据相近金额或相似时间擅自合并记录。`,
`A working record should connect an appropriate order identifier, creator or program identifier, rule version, calculation basis and state time. It need not copy complete customer information to every collaborator. Reconciliation linkage and public reporting can use different levels of detail.

Whether discounts, refunds, tax or other items affect the basis depends on current rules. Do not automatically use the order total as the commission base or compare creator amounts under unknown definitions.

For multiple systems, identify who supplies the order event, performs calculation and confirms payment. A visible amount does not establish that all three steps were independently verified by one source. Mark a missing connection instead of merging records because amounts or times resemble one another. Clear linkage allows an exception to be resolved against the actual program without expanding ordinary creator reporting into unnecessary access to customer records or treating a plausible match as a confirmed one.`),
s('把例外留给明确的处理人','Give exceptions a defined owner',`订单取消、部分退款、重复记录或事件未同步时，需要有适当的处理路径。具体后果按当前项目规则决定，不在这里假定每种情况都自动取消、回收或放行佣金。

记录发现的问题、来源、当前状态和下一步。暂缓某笔审阅不等于认定创作者有不当行为；可能只是数据连接或条件尚未确认。对合作方的说明应准确指出缺少什么。

同一例外反复发生时，应改善规则和接入检查，而不靠团队记忆逐次补救。新规则如何影响已有记录也需说明，不悄悄改变历史条件。清楚流程能让双方知道需要等待的是哪项事实，而不是把所有延迟笼统称作平台问题。`,
`Cancellation, partial refund, duplicate records or unsynchronized events need an appropriate exception route. Apply current program rules; do not assume every situation automatically cancels, recovers or releases a commission.

Record the issue, source, current state and next action. Holding a review does not establish creator misconduct. A connection or condition may simply remain unconfirmed. Explain the particular missing item to the collaborator rather than apply a broad suspicious label.

If an exception recurs, improve rule and integration checks instead of relying on staff memory to repair each instance. Explain how a new rule affects existing records rather than silently changing historical conditions. A clear process tells both parties which fact is being awaited. It avoids describing every delay as a platform issue and prevents a routine reconciliation problem from becoming an unsupported allegation about the source of a creator’s orders or the intent behind their promotion.`),
s('把可放行与已发送分开','Separate ready for release from sent',`规则条件满足，只说明记录可能进入下一步；还需确认有权限的人、适用流程与实际状态。不要把计划支付、提交付款和最终接收写成同一件事。

Social Snowball 的 Tremendous 接入说明描述了设置接收方式、准备资金与连接付款的流程。这里引用供应方文档，不复述未经本项目验证的费用、国家支持或即时到账保证，也未执行任何接入。

如果项目使用其他付款路径，应按实际系统核对。品牌需要能够解释具体状态，创作者也应有清楚查询路径。技术连接显示成功，不等于每笔记录均已发送，更不说明最终收款条件都完成。`,
`A rule being satisfied means a record may progress; it still needs an authorized person, applicable process and actual state confirmation. Planned payment, submitted payout and final receipt should not become the same event.

Social Snowball’s Tremendous setup guide describes configuring receiving methods, preparing funding and connecting payouts. This is provider documentation, not project-tested evidence of fees, country support or instant receipt. No integration was performed here.

If the program uses another payment route, inspect that actual system. The brand should be able to explain a specific state, and the creator should have a clear inquiry route. A connection labeled successful does not mean every record has been sent or every receiving condition has been met. Distinguishing these steps is useful even when the workflow operates normally, because different teams may otherwise use the word paid for different points in the process and create avoidable confusion.`,['snowPayout']),
s('把信息收集限制在必要范围','Limit information collection to the actual need',`FTC 的企业信息保护指南强调识别企业需要的信息、限制收集和访问，并做好保护。用于接收付款的适当资料，应通过认可路径交给负责人员，不夹在广泛传播的达人作品介绍中。

不要在普通报表里放入密码、密钥、完整账户秘密或无关顾客个人资料。实际付款方可能有其接收条件，相关要求应由适当人员按当前路径处理，不靠聊天里随意索取。

团队交接时可以说明由哪个系统和角色处理资料，而无需复制秘密本身。若缺必要信息，记录缺口与负责人，不把它填写成已完成。限制收集不会妨碍清楚流程，反而让支付与内容管理各自保持合适范围。`,
`FTC’s business information-security guide emphasizes identifying needed information, limiting collection and access, and protecting it. Appropriate receiving details should pass through accepted routes to responsible people, not travel inside a widely shared creator portfolio.

Do not put passwords, keys, complete account secrets or unrelated customer information in an ordinary report. Actual payout providers may have receiving requirements. Appropriate owners should handle those through current accepted processes rather than request material casually in chat.

A handoff can explain which system and role handles the information without copying the secret itself. If a necessary item is missing, record the gap and owner instead of marking it complete. Limiting collection supports a clear workflow by keeping payment operations and content management within their proper scope. It also reduces the risk that a colleague forwarding a campaign summary inadvertently distributes information never needed by the recipient.`,['ftcPrivacy']),
s('用假设金额检查计算与状态','Check calculation and state with a hypothetical amount',`假设某项目已明确佣金基数为 100 个货币单位，适用比例为 10%，则初步计算为 10。这里只是算术示例，不是推荐比例、实际收入或平台默认规则。

如果订单后来部分退款，是否调整、怎样调整，由真实规则决定，不能从例子推断。即使 10 的计算正确，也不说明它已满足成熟期、完成审阅、发送或被领取。

一份清楚记录应把金额依据和状态分别呈现。这样创作者询问时，团队能回答是计算需要核对、条件未满足还是付款步骤待确认，而不是用一个数字代替整个流程。小数和精确金额不会自动使记录具备完整商业含义。`,
`Suppose a program explicitly defines a commission base of 100 currency units and an applicable rate of 10%. The preliminary arithmetic is 10. This is not a recommended rate, actual earnings or a platform default.

If a partial refund follows, the real rules determine whether and how an adjustment occurs. The example cannot decide that. Even correct arithmetic does not establish that the amount has matured, been reviewed, sent or claimed.

A clear record presents the basis and state separately. When the creator asks, the team can explain whether calculation needs checking, a condition remains unmet or a payment step awaits confirmation. A number cannot stand in for the entire process. Decimal precision does not automatically give it complete commercial meaning. The hypothetical also shows why a commission report should not be presented as a revenue or profit report: those are different quantities with their own definitions and evidence requirements.`),
s('给创作者一条可以查询的路径','Give creators a usable inquiry route',`说明合作方在哪里查看适当状态、由谁接收疑问，以及提问时需要提供哪项非敏感关联。不要让创作者在内容团队、财务和平台支持之间反复讲述全部背景。

如果需要等待某项事件，就说明具体依赖，而不是做无法支持的到账承诺。回复应该区分已经核实的记录和正在查询的事项；礼貌肯定不能替代真实状态。

品牌也应保留合理的内部跟进安排，让问题有负责人。平台可协助自动化，却不能替团队决定所有例外怎样解释。清楚沟通对长期合作的重要性，不低于系统能够批量处理多少条记录。它能让延迟被准确理解，而不是由双方各自猜测原因。`,
`Explain where a collaborator can view an appropriate status, who receives questions and which nonsensitive identifier helps locate the record. Avoid sending creators repeatedly between content staff, finance and platform support to retell the whole history.

If an event is pending, name the dependency rather than promise an unsupported arrival time. A reply should distinguish checked records from items still being investigated. Polite reassurance cannot replace an actual state.

The brand needs an internal follow-up owner too. Automation can assist without deciding how every exception should be explained. Communication matters to a continuing relationship as much as the number of records the system can process in a batch. It helps a delay be understood accurately instead of leaving both sides to invent its cause. A useful response also tells the next colleague what has already been checked, so the creator is not asked for the same information again without a reason.`),
s('把佣金报表与合作效果分开','Keep commissions distinct from campaign outcomes',`佣金关联订单不代表全部销售增量，也不等于利润。不同归因条件、窗口和渠道可能影响记录，品牌需要按实际问题评估，不能把一项平台金额直接包装为完整达人营销 ROI。

指标决策指南可帮助区分动作、转化与业务结论。报告应说明记录覆盖什么，哪些其他成本或条件未包含。创作者报酬、订单收入和品牌总成本应有各自定义。

这不是降低联盟合作的价值，而是让价值有清楚依据。团队可以报告已核对的佣金状态与适当订单关联，同时保留对增量或利润无法回答的边界。一个准确的小结，通常比一个把所有金额混在一起的漂亮收益倍数更可用。`,
`Commission-linked orders do not establish all incremental sales or profit. Attribution conditions, windows and channels may affect records. A platform amount should not become a complete creator-marketing ROI claim without the evidence needed for that question.

The metrics decision guide distinguishes actions, conversions and business conclusions. State the report’s coverage and omitted costs or conditions. Creator compensation, order revenue and total brand cost need separate definitions.

This does not diminish affiliate work; it gives the value a clear basis. Report checked commission states and appropriate order connections while retaining the limit on questions about incrementality or profit. An accurate bounded account is more useful than an attractive return multiple built by mixing unlike amounts. It also prevents a payout operation from being judged as a failure merely because it was never designed to answer the broader marketing-effect question somebody later attaches to it.`),
s('让交接保留未完成的步骤','Preserve unfinished steps in the handoff',`交接包括规则版本、事件来源、当前记录状态、例外、适当负责人与下一步。不要只导出一份金额表，留给接手者重新猜测哪些已经放行、哪些还在等待。

已发送、已领取或已完成的表述应有对应依据；无法确认时直接标明。若负责人变动，先核对工作访问与职责衔接，不通过共享秘密来赶进度，也不在没有授权时执行资金操作。

Social Snowball 的价值应结合真实项目条件评估。它提供的功能描述可以帮助设计工作，但不能替代订单核对、付款责任与清楚合作条件。一份好的记录使下一位负责人能够继续工作，也让创作者理解自己等待的具体事项。`,
`Include rule version, event source, current record state, exceptions, appropriate owner and next step. An amount-only export leaves the next person to guess what has been released and what is still waiting.

Sent, claimed and completed should each have a corresponding basis. Mark anything unconfirmed directly. When responsibility changes, check working access and ownership continuity instead of sharing secrets to accelerate the handoff or performing money movements without authorization.

Assess Social Snowball against actual program conditions. Its feature descriptions can inform workflow design without replacing order reconciliation, payment responsibility or clear collaboration terms. A good record lets the next owner continue and helps the creator understand the specific item being awaited. That is a practical result even before every record reaches its final state, and it does not require the report to make an earnings promise or describe an untested integration as proven. `)
],links:[link('创作者传播分工方法','creator distribution-role method','creator-media-strategy-distribution-roles'),link('指标决策指南','metrics decision guide','social-media-metrics-creator-decision-tree')],
table:{title:p('佣金状态不要合并','Keep commission states separate'),headers:[p('状态','State'),p('核对','Check'),p('不代表','Does not establish')],rows:[[p('已记录','Recorded'),p('关联、规则与金额依据','Linkage, rule and amount basis'),p('已经满足付款条件','Payment conditions are satisfied')],[p('待放行审阅','Release review'),p('事件、成熟期与例外','Event, maturation and exceptions'),p('没有任何未来变化','No future changes are possible')],[p('已发送','Sent'),p('实际付款步骤与记录','Actual payout step and record'),p('接收人已经领取','Recipient has claimed it')],[p('接收已确认','Receipt confirmed'),p('适当接收依据','Appropriate receiving evidence'),p('全部合作效果已证明','All campaign outcomes are proved')]],note:p('编辑流程框架；未执行配置或付款，示例不是报价、默认比例、收入或效果保证。','An editorial workflow. No configuration or payment was performed; examples are not rates, defaults, earnings or outcome guarantees.')},
tool:{title:p('交接佣金记录前','Before handing off commission records'),intro:p('把金额依据、状态和责任对应起来。','Connect amount basis, state and responsibility.'),items:[p('区分制作费、发布费与佣金。','Separate production fees, publication fees and commissions.'),p('保留规则版本与订单关联。','Retain rule version and order linkage.'),p('核对成熟事件及例外路径。','Check maturation events and exceptions.'),p('分清放行、发送与领取。','Separate release, sending and claiming.'),p('限制个人资料与秘密的收集。','Limit personal-data and secret collection.'),p('给每个未完成事项明确负责人。','Assign every open item an owner.')]}
});
