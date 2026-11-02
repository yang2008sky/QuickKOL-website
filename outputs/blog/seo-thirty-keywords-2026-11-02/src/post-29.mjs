import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:29,
summary:p('将达人折扣码拆成消费者优惠、合作归因与最终结算三层，设计清楚的条件、传播和异常处理记录。','Separate influencer discount codes into customer offers, partner attribution and settlement, with clear conditions, distribution and exception records.'),
description:p('达人折扣码指南：明确适用商品、地区、期限与叠加规则，核对代码和点击归因及退款状态，不把代码订单当作增量证明。','Plan influencer discount codes with product, territory, expiry and stacking conditions, then verify attribution and refunds without claiming incremental sales.'),
coverAlt:p('奶油色柜台上的黑色购物袋、珊瑚色空白优惠券、无印字收据卷和蓝色笔记本。','A black shopping bag, blank coral coupon tickets, an unprinted receipt roll and a cobalt notebook on a cream counter.'),
answer:p('Influencer discount codes同时可能涉及消费者优惠、合作方归因和佣金结算，但三层不是同一条规则。先说明谁在什么条件下得到什么优惠，再确认系统怎样分配记录、合同怎样批准佣金。代码被使用不证明购买者看过创作者内容，也不证明全部订单由该合作新增。品牌应保留优惠版本、传播路径、适用条件和交易状态，让消费者能理解，合作方能核对，团队能解释结果。',
'Influencer discount codes can involve a customer offer, partner attribution and commission settlement, but these are three different rule layers. First specify who receives what offer under which conditions, then establish how records are credited and commissions approved. Code use does not prove that a purchaser saw the creator’s content or that every order was incremental to the collaboration. Retain offer version, distribution route, conditions and transaction state so customers can understand the offer, partners can review their records and the team can explain results. A short code is a useful access or recording mechanism, not a complete account of the customer journey.'),
links:[link('联盟追踪SaaS验证指南','affiliate-tracking SaaS verification guide','affiliate-tracking-saas-trends-change-evidence'),link('联盟客户旅程指南','affiliate customer-journey guide','affiliate-and-marketing-customer-journey'),link('EMV与ROI字段指南','EMV and ROI field guide','influencer-emv-roi-calculation-field-dictionary')],
sections:[
s('先写消费者能得到什么','Write the customer offer first',
`从消费者问题开始：优惠用于哪些商品、哪些地区、什么时间、是否有门槛、哪些情况不适用？把这些写清，再决定代码名称和创作者怎样介绍。一个容易记住的代码不能弥补不清楚的条件。

为每个优惠建立版本，保留开始结束时间和时区。若存在会员、首购、订阅或其他条件，按真实安排说明，不要从一般推广文案推导。这里不是要求收集额外私人信息，而是确保公开表达与实际结账相符。

消费者应该知道去哪里查看完整条件，以及遇到不符合预期时联系谁。不要把所有异常都推给创作者解释。品牌负责维护优惠事实，创作者需要获得足够清楚且及时更新的资料。

例如一个旧视频仍显示过期代码时，先让客服能够说明当前状态，再按实际许可与合作安排处理更新。不要要求创作者凭记忆解释系统配置。记录哪项资料已更新、哪些历史位置无法直接改变，以及遇到相关消费者询问时应转给谁。这样结束流程仍然能够支持消费者和合作方，而不只是内部报表的一次关单。`,
`Begin with customer questions: which products, which territories, what period, what threshold and which exclusions? Establish these before naming the code or deciding how a creator introduces it. Memorability cannot compensate for unclear conditions.

Version each offer and retain start, end and time zone. If membership, first purchase, subscription or other requirements exist, describe the actual arrangement rather than infer it from broad promotional wording. This does not require extra private information; it requires the public explanation to match checkout behavior.

Customers should know where to find full conditions and whom to contact when the result differs from expectations. Not every exception belongs with the creator. The brand maintains offer facts and supplies clear, updated information. A useful brief also names the person who can confirm a changed product or date, so a creator does not have to improvise a commercial answer during publication.

For example, if an older video still shows an expired code, equip support to explain the current state before arranging updates under the actual permission and collaboration terms. Do not expect the creator to reconstruct system configuration from memory. Record updated information, historical locations that cannot be changed directly and the owner of customer questions. Exit then supports customers and partners instead of being only an internal closed-ticket status.`),
s('叠加规则要在实际结账条件下核对','Verify stacking in the actual checkout conditions',
`Shopify 折扣叠加说明区分商品、订单和运费等类别，具体组合取决于资格和设置。它说明一个平台中的规则，并不证明每家店铺或外部结账渠道都接受相同组合。

向负责店铺的人确认代码与自动折扣、其他代码和已有优惠如何相处。用适当测试条件核对合格商品、不合格商品及常见组合，保留预期与实际结果。不要只试一次成功就写成全站所有商品通用。

若优惠无法叠加，让说明与实际行为一致；如果更优优惠取代当前代码，也要让客服能够解释。折扣金额、佣金基数和财务收入是不同字段，不能仅因都出现在一个订单里就视为相同。`,
`The Shopify discount-combination guide distinguishes product, order and shipping classes, with available combinations depending on eligibility and settings. It describes one platform’s rules, not proof that every store or external checkout accepts identical combinations.

Ask the store owner how the code interacts with automatic discounts, other codes and existing offers. Under appropriate test conditions, inspect eligible items, ineligible items and common combinations, retaining expected and actual behavior. One successful test should not become a statement that every product qualifies.

If offers cannot combine, align the explanation with behavior. If a better offer replaces the code, customer support should be able to explain that too. Discount amount, commission base and financial revenue are distinct fields even when they appear within one order. Naming them separately helps prevent an offer change from silently changing the team’s interpretation of partner earnings or campaign performance.`,['shopDiscounts']),
s('代码分配与优惠本身分别设置','Configure credit separately from the offer itself',
`impact.com 优惠码说明区分展示优惠的广告与带分配逻辑的追踪码；具体代码、点击路径和其他设置会影响记录归属。这是产品特定逻辑，不是所有系统的统一最后点击规则。

因此先问实际使用哪套系统、哪种代码类型、什么版本的规则。代码归属到某合作方，并不自动证明优惠只会由其受众使用。代码和链接可能一起出现，需要知道冲突怎样处理。

联盟追踪SaaS验证指南帮助把这些问题变成可测试情境。若没有足够权限查看规则，请负责人提供适当说明或导出，不猜测一个报表标签背后的全部配置。`,
`The impact.com promo-code FAQ distinguishes offer advertising from tracking codes with crediting logic. Code setup, click paths and other settings affect allocation. This is product-specific behavior rather than a universal last-click rule for every system.

Identify the actual system, code type and rule version. Assignment to one partner does not establish that only that partner’s audience will use the offer. Codes and links may appear together, making conflict handling important.

The affiliate-tracking SaaS verification guide turns these questions into test cases. If you lack permission to inspect rules, ask the responsible owner for an appropriate explanation or export rather than guess the entire configuration behind a report label. Keep the customer’s discount behavior separate in the test record: a valid discount and a particular commission assignment can be related without being the same decision or depending on identical eligibility conditions.`,['impactCodes']),
s('传播中的复制不等于已证实违规','Copying in distribution is not automatically proven misconduct',
`优惠码可能在转发、截图、搜索或读者讨论中流动。若发现其他地方出现代码，先保留公开位置、时间与实际看到的内容，不从一次观察推断是谁传播或是否违反合同。

将疑问分开：消费者还能否用优惠，系统会把记录分给谁，合作条款是否限制某种传播，以及谁负责处理。每个问题需要自己的依据。不要只因某个来源陌生就公开指责创作者泄漏。

联盟客户旅程指南帮助理解读者可能经过多个信息入口。代码的可复制性是规划时要考虑的条件，不是发现异常后才临时增加的指控标准。需要限制时，事前明确可执行范围，并让适当负责人评估。`,
`Codes may travel through forwarding, screenshots, search or reader discussion. If one appears elsewhere, retain the public location, time and observed material before inferring who distributed it or whether a contract was breached.

Separate questions: can the customer still receive the offer, who receives credit, do commercial terms restrict that distribution, and who handles the issue? Each needs its own basis. An unfamiliar source does not justify publicly accusing a creator of leaking the code.

The affiliate customer-journey guide helps explain why readers may pass through several information routes. Copyability is a planning condition rather than a misconduct standard invented after an anomaly. If restrictions are needed, define a feasible scope in advance and route the proposal to an appropriate owner. Keep observations and allegations distinct when discussing exceptions internally as well as publicly; neither a spreadsheet label nor an automated alert establishes responsibility.`),
s('待处理佣金与已经到账分开','Distinguish pending commission from received payment',
`Shopify Collabs 结算说明展示待处理状态、商家设置的等待期与之后付款流程；退款和取消会影响佣金。这里只用于说明结算有状态，不把其安排推广成所有平台的通用时间承诺。

品牌应让合作方知道在哪里查看记录、何时核对、怎样提出问题以及哪个角色有权答复。优惠生效、订单产生、交易被批准和款项到账可能发生在不同时间。

保留更正原因，避免月末只发一个无法解释的总数。对于尚未解决的争议，不把金额先写成零或已付款；使用实际状态。付款条款和相关税务问题按具体安排由适当负责人确认。`,
`The Shopify Collabs payment guide illustrates pending status, a merchant-selected holding period and later payment processing, with refunds and cancellations affecting commissions. It demonstrates state differences without supplying a universal schedule for every platform.

Tell partners where to inspect records, when reconciliation occurs, how to raise a question and which role can respond. Offer activation, order creation, transaction approval and receipt of money can occur at different times.

Retain correction reasons instead of providing an unexplained month-end total. An unresolved dispute should not be recorded as zero or already paid; use its actual state. The appropriate owner confirms payment terms and relevant tax matters for the arrangement. Clear state language also helps a creator discuss earnings accurately, without treating an estimated report as guaranteed cash or requiring customer support to interpret a finance process it does not own.`,['collabsPayments']),
s('一个假设优惠的完整记录','A complete record for a hypothetical offer',
`以下是假设练习，不是真实店铺优惠：品牌计划对指定商品提供10%优惠，使用期为已注明时区的一周。佣金另按已确认的合格金额和规则处理，本篇不替它假定费率。

准备两张记录。消费者优惠卡包含指定商品、地区、期限、限制、叠加说明和帮助入口；合作记录包含创作者、代码、规则版本、发布时间、批准状态和结算负责人。两者使用同一优惠版本号，但不合成一个无法区分的总字段。

假设商品原价100、该项10%折扣单独适用，则商品折后90；这里不计算运费、税或其他费用。这个算例只说明优惠算术，不能据90推导佣金、利润或新增收入。后续退款需要进入订单与结算记录，不能修改已经保存的优惠原始事实。

再假设一位购买者从朋友转发中看到代码，却没有观看创作者内容。系统可能根据配置归给某位合作方，但“被归因”仍不是“亲自观看并因此购买”。保留这层差别，报告才能解释自身能力边界。若规则希望区分来源，需要事先安排合适方法，而不是发布后凭猜测重新分配。`,
`This hypothetical exercise is not a live store offer. A brand plans a 10% discount on specified items for one week in a stated time zone. Commission is handled separately using confirmed eligible amounts and rules; this article assumes no commission rate.

Prepare two records. The customer offer card contains items, territory, period, restrictions, stacking explanation and help route. The partnership record contains creator, code, rule version, publication time, approval state and settlement owner. They share an offer-version identifier without collapsing into one unexplained field.

Suppose an item’s original price is 100 and this 10% discount applies alone. The discounted item amount is 90, excluding shipping, tax and other charges. That arithmetic establishes neither commission, profit nor incremental revenue. A later refund belongs in transaction and settlement records rather than rewriting the original offer facts.

Now suppose a purchaser receives the code from a friend without watching the creator’s content. A configured system may still credit a partner, but attributed does not mean personally viewed and consequently purchased. Preserve that distinction in reporting. If the program needs to distinguish sources, arrange an appropriate method before launch rather than reassign credit through guesses afterward.

Finally, ask different owners to read the two records. Customer support should be able to explain eligibility, the creator should understand the message and finance should locate the applicable settlement rule. If one must infer another layer, improve the record before the offer is distributed.`),
s('用代码数据回答合适的问题','Ask code data questions it can answer',
`代码记录可以帮助回答在特定规则下观察到多少使用、哪些交易被归属，以及哪些条件需要解释。没有适当设计时，它不能独自回答如果没有合作会发生多少购买。

EMV与ROI字段指南帮助区分估算价值、归因收入、成本与增量结果。不要把代码订单金额和其他渠道重复计算成独立新增收入，也不要把使用次数当作独立消费者数量。

报告应注明时间、币种、订单状态、归因规则与数据范围。若只拿到一项汇总，就说明缺少什么。可用数据有限并不妨碍学习优惠是否容易理解，但结论应和能看到的资料匹配。`,
`Code records can help establish observed uses under specified rules, attributed transactions and conditions needing explanation. Without an appropriate design, they cannot independently tell you how many purchases would have occurred without the collaboration.

The EMV and ROI field guide separates modeled value, attributed revenue, costs and incremental results. Do not count code-order value again across other channels as separate additional revenue, or treat uses as unique customers.

Reports should name period, currency, order state, attribution rule and data scope. If only one aggregate is available, identify what is missing. Limited data can still support learning about offer clarity, but conclusions should match the available material. A team can improve instructions after recurring questions without pretending that a support improvement proves causal campaign ROI. The narrower finding remains useful when its basis and next action are explicit.`),
s('结束合作要检查优惠与归因两个开关','At exit, check offer and attribution separately',
`结束合作时，确认优惠是否停止、代码归属是否仍在、内容是否需要更新及未结佣金怎样处理。不要默认合同结束会同时关闭所有技术和商业状态。

先由系统负责人核对配置，再由合作负责人核对通知与资料。保留适用时间和更正记录，避免读者看到旧内容时完全无处确认条件。是否继续保留历史内容与许可，按实际安排处理。

这里的动作是编辑交接建议，不代表任何平台都有同名按钮。若系统不能自动完成某步，就明确人工负责人和证据，而不是在清单上写“全部关闭”却没有实际核对。`,
`At exit, check whether the offer stops, code assignment remains, content needs updating and outstanding commission has a treatment. Do not assume contract termination simultaneously closes every technical and commercial state.

The system owner verifies configuration; the relationship owner checks notices and information. Retain applicable times and correction records so readers encountering older content can still find the relevant conditions. Historical content and permission are handled under the actual arrangement.

These are editorial handoff recommendations, not a claim that every platform has identical buttons. If a step cannot be automated, assign a manual owner and evidence rather than mark everything closed without verification. An exit review should explain the current customer experience as well as the internal status, because a stopped partnership does not make previously distributed material disappear from every audience route.`),
s('让代码服务于清楚的合作','Use the code to support a clear relationship',
`最终交付不是只有一个字符串，而是一套可以解释的优惠、信息与责任。消费者知道条件，创作者知道怎样表达，团队知道怎样记录与答复。这个基础比不断换更醒目的代码更重要。

如需新合作，QuickKOL可帮助理解Brief、研究相关作品并准备联系。优惠设置、佣金批准与财务结果仍分别核验，不能由候选研究结果直接推断。

每次修改都保留版本，并决定是否需要更新已发布说明。这样即使优惠结束或规则改变，下一位同事仍能解释当时发生什么，而不是靠记忆重建消费者和合作方曾看到的条件。`,
`The deliverable is not only a string. It is an explainable offer, information set and responsibility map. Customers understand conditions, creators understand the message and the team knows how to record and respond. That foundation matters more than repeatedly inventing a more striking code.

For a new collaboration, QuickKOL can help interpret the brief, research relevant work and prepare outreach. Offer configuration, commission approval and financial outcomes still require separate verification; candidate research does not establish them.

Version every change and decide whether published information needs updating. Even after the offer ends or rules change, the next colleague should be able to explain what happened instead of reconstructing from memory the conditions customers and partners once saw.`)
],
table:{title:p('优惠码的三层记录','Three record layers for discount codes'),headers:[p('层次','Layer'),p('需要明确','Specify'),p('不能推出','Does not establish')],rows:[[p('消费者优惠','Customer offer'),p('商品、地区、期限、叠加','Items, territory, period, stacking'),p('佣金或销售原因','Commission or sales causality')],[p('合作方归因','Partner attribution'),p('代码、点击、规则与版本','Code, click, rule and version'),p('每人看过创作者内容','Every purchaser viewed the content')],[p('结算','Settlement'),p('状态、调整、负责人','State, adjustments and owner'),p('汇总金额已经到账','Reported amount already received')]],note:p('假设100元商品单独打九折为90元，不含税运费，不是佣金、利润或增量公式。','A hypothetical item priced at 100 with a standalone 10% discount becomes 90 before tax and shipping; not a commission, profit or incrementality formula.')},
tool:{title:p('优惠码发布与结束清单','Discount-code launch and exit checks'),intro:p('同时核对消费者体验和合作记录。','Review customer experience and partnership records together.'),items:[p('优惠条件与真实结账一致。','Align offer conditions with checkout.'),p('代码和归因配置已核对。','Verify code and attribution setup.'),p('创作者获得当前版本资料。','Give the creator current information.'),p('复制观察不写成已证实违规。','Do not turn copying observations into proven misconduct.'),p('退款、争议与付款状态可解释。','Explain refunds, disputes and payment states.'),p('结束后优惠与归因分别确认。','Check offer and attribution separately at exit.')]}
});
