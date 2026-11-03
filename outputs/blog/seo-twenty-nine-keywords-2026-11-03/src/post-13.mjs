import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:13,
summary:p('同一条创作者内容可以同时涉及制作费、自然发布、联盟佣金和合作广告。用角色图分清品牌、零售商、创作者和投放方的任务与证据。','One creator asset can involve production fees, organic publication, affiliate commissions and partnership ads. Map the brand, retailer, creator and media operator to tasks and evidence.'),
description:p('品牌怎样组织affiliate creator content与partnership ads：分清制作、发布、佣金、权限、媒体预算和结算，不把一个合作标签视为全部安排。','Organize affiliate creator content and partnership ads by separating production, publication, commission, permissions, media spending and settlement responsibilities.'),
coverAlt:p('两位虚构成年制作人员在明亮产品拍摄区摆放未标品牌的样品并查看奶油色任务卡，配有蓝色背景和珊瑚色衬衫。','Two fictional adult production colleagues arrange unbranded samples and review a cream task card beside a blue backdrop; one wears a coral shirt.'),
answer:p('Affiliate creator content与partnership ads可以出现在同一个项目，但不是同一种安排。品牌提出任务与产品事实，创作者制作或发布，联盟项目按实际规则记录推荐与佣金，广告投放方在适当权限和约定下使用素材。品牌、零售商、佣金支付者与广告主也可能不是同一主体。开工前把制作、发布、联盟归因、广告使用及结算分别画到具体角色，再用共享内容标识连接；不要从一条链接、合作标签或佣金邀请推断其他工作都已包含。',
'Affiliate creator content and partnership ads can coexist in one project without being the same arrangement. The brand supplies the assignment and product facts, the creator produces or publishes, the affiliate program records referrals and commissions under its rules, and the media operator uses material under appropriate permissions and agreement. Brand, retailer, commission payer and advertiser may be different entities. Before work begins, map production, publication, affiliate attribution, ad use and settlement to named roles, connected by a shared content identifier. An affiliate link, partnership label or commission invitation does not independently establish that every other activity is included.'),
links:[link('联盟转化分析指南','affiliate-conversion analysis guide','affiliate-creator-conversion-analysis'),link('合作广告权限清单','partnership-ad permission checklist','partnership-ads-permission-checklist'),link('合作范围核对','collaboration-scope checklist','creator-contract-scope-checklist')],
sections:[
s('先拆开五种工作，不按标签猜责任','Separate five activities before assigning responsibility',
`把制作、创作者渠道发布、联盟推荐、付费投放和结算分别列行。每行说明执行者、决定者、输入、输出与结束条件，再决定是否确实需要这项工作。

一个人或团队可以承担多行，但行与行不能因为负责人相同就消失。创作者收到样品不自动代表同意拍摄，拍摄完成不自动代表承诺发布或允许广告使用。

同样，联盟计划被接受也不自行定义固定制作交付。合作范围核对可以帮助把约定工作写清楚，避免在项目中途把销售回报安排改解释成无限次内容生产。

这个角色图是编辑操作建议，不是法律关系裁定。实际义务和权限由适当负责人按有效约定确认，记录的价值是让团队知道哪些问题已经回答，哪些仍需回答。`,
`List production, creator-channel publication, affiliate referral, paid distribution and settlement separately. For each, identify operator, decision owner, input, output and ending condition, then decide whether the activity is actually required.

One person or team can own several rows without making those rows disappear. Receiving a sample does not automatically establish agreement to shoot; producing an asset does not independently promise publication or advertising use.

Likewise, acceptance into an affiliate program does not by itself define a fixed production deliverable. The collaboration-scope checklist helps make agreed work explicit rather than reinterpret a sales-compensation arrangement as unlimited content production midway through the project.

This role map is an editorial operating recommendation, not a determination of legal relationships. Appropriate owners confirm actual obligations and permissions under the effective arrangement. The record shows which questions have been answered and which remain open. That distinction is especially helpful when the same creator participates in several programs and a brand team might otherwise assume that one existing relationship covers a newly requested activity.`),
s('品牌、零售商与佣金支付者分别确认','Identify brand, retailer and commission payer separately',
`Meta 2026创作者商务公告在3月25日描述Facebook零售商联盟合作：伙伴选择产品并设置销售佣金，创作者可从相应购买获得佣金。公告也包含分阶段推出信息，不能据此认定每个账号今天都可使用。

品牌团队应确认商品由谁销售、联盟条款由谁提供、佣金由谁计算和支付。产品品牌与零售商不同，意味着活动事实、库存、价格与结算问题可能属于不同团队。

不要把平台提供连接机制，改写成平台必然承担每笔佣金或品牌能控制全部结算。记录实际项目主体，再依据当前可用信息和适当回应确认。

若通过零售商项目合作，准备交接路线：品牌事实问谁，订单或佣金争议问谁，广告素材与权限问谁。一个笼统“合作伙伴”字段不足以指导实际执行。`,
`The Meta 2026 creator-commerce announcement, published March 25, describes Facebook retailer affiliate partnerships in which partners select products and set sales commissions, and creators can earn commission from relevant purchases. It also includes staged rollout language, which does not establish access for every account today.

The brand team should identify seller, affiliate-terms provider, commission calculator and payer. When product brand and retailer differ, product facts, availability, price and settlement can belong to different teams.

Do not turn a platform’s connecting mechanism into a claim that it necessarily pays every commission or that the brand controls all settlement. Record the actual entities and confirm the project through current available information and appropriate responses.

For a retailer-based arrangement, establish routing: who answers product-fact questions, who handles order or commission issues, and who handles ad assets and permissions? A generic partner field does not guide execution. The map should help a colleague send a question to the right business owner without exposing unrelated personal information or assuming authority from a logo shown beside a product.`,['metaCommerce']),
s('制作回报与销售佣金分开说明','Describe production compensation separately from commission',
`固定制作费可以对应约定素材，联盟佣金对应符合条件的推荐结果，两者可能并存，也可能只采用其中一种。是否有固定发布义务，需要单独确认，不能从佣金率倒推。

假设一个项目讨论200个货币单位的制作费和符合条件净销售额的10%佣金。若符合条件金额为300，佣金算术为30；这是假设，不是标准报价、市场佣金或实际客户结果。

200、30与广告媒体支出是不同字段。佣金待确认和已结算也不是同一状态。不能将一项假设回报直接填入实际已支付总额。

如果品牌希望增加镜头、语言或平台版本，回到制作范围与变更安排。销售目标没有达成，不自行赋予品牌要求无上限重拍的权利；实际条件由双方适当确认。`,
`A fixed production fee can correspond to agreed assets, while affiliate commission corresponds to qualifying referred activity. Both can coexist, or only one may apply. Confirm any fixed publication obligation separately instead of inferring it from the commission rate.

Suppose a project discusses a production fee of 200 currency units and commission of 10% of qualifying net sales. If the qualifying amount is 300, the commission arithmetic is 30. These are hypothetical inputs, not standard fees, market commissions or client results.

The 200, the 30 and media spending are different fields. Pending and settled commission are different states as well. A proposed compensation value should not enter the actual-paid total merely because it appears in a spreadsheet.

If the brand wants additional shots, languages or platform versions, return to production scope and change arrangements. Missing a sales target does not independently grant unlimited reshoots. Appropriate parties confirm actual conditions. A clear compensation map makes those commercial questions visible before a production request is mistaken for an included revision.`),
s('平台操作与商务许可需要相互对应','Connect platform operation with commercial permission',
`Meta合作广告培训说明将合作广告的建立、合作层级与伙伴控制列为相关学习内容。本次读取的是官方课程说明，不是完成课程或实际账户测试，也不据此提供精确按钮操作教程。

项目操作上，应分别确认素材使用约定、适当平台权限和实际投放设置。某个平台状态不替代全部商务条件；有文件在手也不证明已取得通过特定账号进行广告使用的权限。

合作广告权限清单可以帮助整理需要核对的问题。品牌、代理操作人和创作者应知道哪个主体、哪份素材、哪些用途与时间需要确认，不共享密码来替代适当权限。

不要把合作广告称为自然发布的简单改名。谁购买媒体、谁决定预算和谁负责结束投放应有具体负责人，不能因为同一条内容已经公开就自动继续。`,
`The Meta partnership-ads training overview identifies ad creation, partnership levels and partner controls as relevant learning topics. We reviewed the official course description, not a completed course or logged-in account test, and do not derive an exact button sequence from it.

Operationally, confirm the material-use arrangement, appropriate platform permission and actual delivery settings separately. A platform status does not replace all commercial conditions; possessing a file does not establish permission to advertise through a particular account identity.

The partnership-ad permission checklist organizes questions to verify. Brand, agency operator and creator should understand which entity, asset, purposes and times need confirmation. Password sharing is not a substitute for appropriate permissions.

Do not describe partnership advertising as simply a renamed organic publication. Identify who buys media, decides budget and ends delivery. Public availability of the same content should not automatically authorize continuation. A platform-enabled workflow still needs responsible people to connect operational access with the project’s actual agreed boundaries and to check that the intended asset is the one being used.`,['metaBlueprint']),
s('一个内容标识连接多条工作记录','Use one content identifier across distinct work records',
`为每份素材设置稳定标识，连接制作版本、创作者发布链接、联盟链接或代码、广告记录与约定出处。标识是方便追踪的操作字段，不代表已经完成跨系统个人归因。

版本、裁切、字幕和落地页变化应另有记录。若广告使用了不同产品版本或价格，不能只因为原素材有过审阅就跳过当前核对。

不要把内容标识和消费者身份混在一起。品牌通常需要知道素材、渠道和适当汇总观察，而不是为一张项目表收集无关私人资料。

缺少某个系统的访问时保留未知和资料负责人，不手工编一个“同步成功”。这些连接应帮助同事找到原始来源，而不是把多个来源的不同字段包装成一个无误的自动事实。`,
`Give each asset a stable identifier connecting production version, creator publication link, affiliate link or code, ad record and source of agreed conditions. This is an operating reference, not proof of person-level attribution across systems.

Record changes to version, crop, subtitles and destination separately. If an ad uses a different product version or price, prior review of the original asset does not remove the need to check the current expression.

Keep content identification distinct from consumer identity. A brand generally needs assets, channels and suitable aggregate observations, not unrelated private information collected for a project table.

When system access is unavailable, retain the unknown and its information owner rather than manually invent a synchronized-success state. Connections should help colleagues find original sources instead of packaging unlike fields as one error-free automated fact. They also make corrections more precise: the team can identify which version and destination are affected without assuming that every post associated with the same creator must be replaced.`),
s('佣金的待确认与已结算不能混用','Keep pending and settled commission distinct',
`Shopify Collabs商家结算说明展示了一种具体机制：链接或代码关联佣金，经过保留期和商家账单、创作者收款设置等条件。它是Collabs资料，不是所有联盟网络相同的时间表。

这支持将推荐订单、符合条件金额、待确认佣金和实际支付分开。退款、取消或争议按具体项目规则处理，不能看到一个销售记录就认定全部佣金已经到账。

本篇没有进入商家后台，也没有验证任何实际订单。品牌自己的角色图应引用当前实际设置与适当资料，不把公开文档默认值当作每个项目的实际值。

结算负责人需要能接收问题，并区分事实更正与规则争议。创作者询问付款时，把问题转给真正负责的主体，而不是因广告团队最先联系就假设它控制全部结算。`,
`The Shopify Collabs merchant-payment guide describes a particular mechanism involving link- or code-related commission, a holding period, merchant billing and creator payout conditions. It is Collabs documentation, not the same timetable for every affiliate network.

This supports separating referred orders, qualifying amounts, pending commission and actual payment. Treat refunds, cancellations and disputes under the specific program rules rather than assume that a recorded sale means all commission has arrived.

We did not enter a merchant account or verify an order. The brand’s role map should refer to actual current settings and appropriate records, without treating a documented default as every project’s actual value.

The settlement owner needs to receive questions and distinguish factual corrections from rule disputes. Route payment inquiries to the entity that actually owns the matter. The media team’s having made first contact does not establish control over every payout. Maintaining separate states lets a report explain a pending balance without presenting it as unpaid misconduct or as money already received.`,['collabsMerchantPay']),
s('披露要反映实际关系，而不是只看回报名称','Make disclosure reflect the actual relationship',
`FTC背书问答提供美国语境下的重要关系与真实表达参考。佣金、固定费和产品等关系应按具体场景核对，不能因回报名称不同就自动认为不用说明。

内容Brief应说明哪些产品主张有依据、哪些个人体验需要真实发生。联盟目标不允许把未证实结果写成保证，也不能要求创作者隐藏回报安排以增加可信感。

品牌准备事实资料，创作者负责实际表达，适当市场负责人核对披露与发布要求。角色图可以列出责任，但不通过内部分工免除实际适用义务。

对多市场项目，分别确认语言、格式与地区，不声明一个标签全球适用。平台功能与规则可能变化，实际发布前按当前资料核对相关要求。`,
`The FTC endorsement FAQ provides US-context guidance about material relationships and truthful expression. Review commission, fixed fees and product benefits in the actual circumstances rather than assume that a different compensation name removes disclosure considerations.

The brief should identify supported product claims and personal experiences that must genuinely have occurred. An affiliate objective does not justify presenting unsubstantiated outcomes as guarantees or hiding compensation to make a recommendation appear more credible.

The brand supplies factual material, the creator handles actual expression and an appropriate market owner reviews disclosure and publication requirements. A role map can assign tasks without using internal delegation to erase applicable responsibilities.

For multiple markets, check language, format and geography separately rather than declare one label suitable worldwide. Platform features and requirements may change, so consult current relevant information before publication. Retain who checked what and for which use: a review for an organic post should not silently be extended to a materially changed ad version with a different claim or product destination.`,['ftcFaq']),
s('渠道报告并列，不把相同订单重复当增量','Show channel reports without adding overlapping outcomes',
`广告系统、联盟平台与商家可能各自记录同一交易。联盟转化分析指南可帮助理解归因来源；把各系统数字相加，不自行产生额外真实订单或增量效果。

按实际允许的资料，记录来源、窗口、对象与重复处理。无法可靠去重时，明确并列观察而非唯一总数，不以手工猜测补齐身份。

制作质量、发布完成、媒体表现和佣金结算也应分开评价。某条广告点击较多，不直接说明创作者自然内容带来同额销售；佣金少也不单独证明制作没有价值。

结论回到项目目标：什么已交付，哪些结果被观察，哪些因果仍未建立。让下一步决定依赖适当证据，而不是强行让所有角色共享一个看起来漂亮的数字。`,
`An ad system, affiliate platform and merchant can each record the same transaction. The affiliate-conversion analysis guide helps interpret attribution sources; adding system totals does not independently create additional real orders or incremental outcomes.

Using appropriately available records, preserve source, window, object and duplicate treatment. If reliable deduplication is unavailable, show parallel observations rather than a unique total, without filling identity gaps through guesses.

Evaluate production quality, publication completion, media performance and settlement separately as well. More ad clicks do not establish that the creator’s organic post generated equivalent sales; limited commission alone does not establish that production lacked value.

Bring conclusions back to the objective: what was delivered, which outcomes were observed and which causal claims remain unestablished. The next decision should rely on suitable evidence rather than force every role to share one attractive number. Different reports can be useful together when their distinct meanings survive the combined presentation.`),
s('在结束点交接每种状态','Hand off each state at the ending point',
`项目收尾分别核对制作交付、自然发布、广告结束、适当权限处理和佣金未结事项。结束一个动作不自动结束其他安排，具体义务仍按实际条件处理。

交接保留素材标识、当前来源、负责人及待解决问题。若后续请求新增用途，回到适当商务与平台确认，而不是用旧合作关系无限扩展。

角色图的用途是让内容、资金和决定都能找到负责人。它不会自动创造许可或保证回报，却能减少品牌、零售商、创作者和投放团队彼此误以为“另一方已经处理”的空隙。`,
`At close, check production delivery, organic publication, advertising end, appropriate permission handling and unsettled commission separately. Ending one activity does not automatically terminate every arrangement; actual conditions still govern obligations.

Retain asset identifiers, current sources, owners and outstanding questions. A later use request returns to appropriate commercial and platform confirmation rather than expanding indefinitely from an old relationship.

The role map gives content, money and decisions an identifiable owner. It does not create permission or guarantee returns. It reduces gaps in which brand, retailer, creator and media teams each assume somebody else has already handled an essential part of the project.`)
],
table:{title:p('联盟内容与合作广告的角色图','Role map for affiliate content and partnership ads'),headers:[p('工作','Activity'),p('需明确的角色','Identify the role'),p('适当证据','Appropriate evidence')],rows:[[p('制作与事实','Production and facts'),p('产品资料与制作负责人','Product-information and production owners'),p('实际Brief、版本与交付','Actual brief, version and delivery')],[p('发布与使用','Publication and use'),p('发布者、权利确认人与广告操作人','Publisher, permission owner and media operator'),p('约定、平台状态与实际素材','Arrangement, platform state and actual asset')],[p('联盟与结算','Affiliate and settlement'),p('销售主体、规则提供者与支付方','Seller, rules provider and payer'),p('条件、订单状态与结算记录','Conditions, order state and settlement')],[p('结果报告','Outcome reporting'),p('数据提供者与解释负责人','Source owner and report interpreter'),p('口径、窗口、重复与未知','Definition, window, overlap and unknowns')]],note:p('编辑操作框架；具体主体、条件与权限需按实际项目确认。200制作费、10%佣金示例是假设。','Editorial operating framework; confirm actual entities, conditions and permission. The 200 production fee and 10% commission example is hypothetical.')},
tool:{title:p('多角色合作开工前','Before a multi-role collaboration starts'),intro:p('每行既有负责人，也有证据出处。','Give each activity an owner and evidence source.'),items:[p('制作、发布、联盟与广告分别确认。','Confirm production, publication, affiliate and ad activity separately.'),p('品牌、零售商与支付者不混同。','Distinguish brand, retailer and payer.'),p('素材版本与使用安排相连。','Connect asset version and use arrangement.'),p('平台权限与商务条件对应。','Align platform permissions and commercial conditions.'),p('待确认佣金不计作已支付。','Keep pending commission out of paid totals.'),p('不同系统结果没有直接重复相加。','Do not add overlapping system outcomes.') ]}
});
