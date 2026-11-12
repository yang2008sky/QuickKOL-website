import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:26,
summary:p('研究最大 YouTube 频道时，先确认品牌能采购的节目、制作、发布与使用范围，而不是只比较频道总量。','Define the program, production, publication and usage a brand can purchase when researching the biggest YouTube channels.'),
description:p('Biggest YouTube Channels 品牌采购指南：区分频道规模、可购买内容单元、人员参与、发布条件与素材许可，避免把总量当保证。','Research the biggest YouTube channels by defining the purchasable content unit, participation, publication and licensing rather than treating scale as a guarantee.'),
coverAlt:p('相机箱、麦克风袋与背景布分别摆放，表示不同制作范围','A camera case, microphone pouch and backdrop are separated to represent distinct production scopes'),
answer:p('Biggest YouTube channels 对品牌的价值，取决于能购买的具体工作：某个节目段落、新制作、账号发布、素材许可或其他明确安排。频道订阅与累计观看只是背景，不能自动成为本次触达承诺。先确定内容单元、实际参与人、发布时间、地区与使用条件，再询问适用报价和可用证据。本文提供大型频道合作的采购方法，不编造当前规模榜单、统一价格或成交保证，也不认为所有最大频道都由一个人制作或能按相同方式合作。','The biggest YouTube channels matter to a brand through specific purchasable work: a program segment, new production, account publication, licensing or another defined arrangement. Subscribers and cumulative views provide context rather than automatically becoming campaign reach commitments. Define content unit, actual participants, timing, market and use conditions before requesting an applicable quote and evidence. This guide concerns procurement with large channels, not an invented live ranking, universal fee or deal guarantee. Large channels need not be one-person operations or offer identical collaborations. A useful proposal makes clear which part of the publishing operation the brand is considering and what remains outside that purchase.'),
sections:[
s('先给可购买单元命名','Name the purchasable unit',`节目内介绍、整集联合制作、独立短片、出镜、品牌渠道素材与账号发布，不应共用一句“频道合作”。在达人 Brief 中说明观众问题与所需单元，再问频道团队是否提供这种工作。

一个频道可能包含多种栏目、语言或内容形式。品牌喜欢其中某个节目，不能默认它能出现在任意栏目，也不能把团队提供的替代形式视为相同采购。

明确单元让创作者或代表更容易给出范围，也让品牌知道验收对象到底是什么。`,
`An in-program introduction, jointly produced episode, standalone short, appearance, brand-channel asset and account publication should not share one channel collaboration label. Put audience question and desired unit in the creator brief, then ask whether the team supplies it.

A channel may contain several programs, languages or formats. Interest in one does not establish access to any program, and an alternative offered by the team is not automatically the same purchase.

A named unit lets a creator or representative describe scope and lets the brand identify acceptance. It also prevents a budget discussion from starting with incomparable objects. Two offers can use the same word video while differing in editorial integration, performer involvement, publication and rights.`,[]),
s('保留频道规模的字段口径','Preserve the meaning of channel scale',`YouTube 的频道字段说明区分订阅、观看等字段，并说明部分值有显示精度限制。品牌应保留实际字段、来源与时间，不把累计总量当成本次将触达的独立人数，也不从一个公开数字推算所有节目观众。

当前榜单若没有实际采集，就不要填名次。需要比较时先限定平台、指标、日期和频道范围，避免不同来源混成一张看似实时的表。

规模可以帮助初筛，但本次工作仍需要相应节目与内容证据，不能由频道总量代替。`,
`YouTube’s channel field reference distinguishes measures such as subscribers and views and documents precision limits for some values. Preserve field, source and time instead of treating a cumulative total as distinct people this campaign will reach or using one public number to infer every program’s audience.

Enter no current positions without an actual ranking collection. Define platform, metric, date and channel scope before combining comparisons rather than assemble different sources into a seemingly live table.

Scale can inform an initial screen, but the proposed work still needs program and content evidence. A large cumulative history does not establish current publication performance for a new format, a different language or a particular host. Keep those questions open until suitable evidence is available.`,['ytChannelFields']),
s('确认谁参与，不只确认频道名称','Confirm participation rather than only the channel name',`品牌可能期待某位主持人，但提案只确认制作团队。先写实际需要的角色，询问本人是否参与、参与哪一部分，以及人员变化如何处理。不因频道名称熟悉，就把所有出镜期待默认加入。

YouTube 的频道权限说明提供多人参与操作的背景，平台角色不自动证明对外商业权限。让适当代表确认工作、发布与使用，不要求剪辑或上传人员承诺权限之外的事项。

人物、节目和频道都应有明确对象。任何替代安排需要品牌实际接收，而不是靠一个相同标志掩盖变化。`,
`A brand may expect a particular presenter while the proposal confirms only the production team. State the required role and ask whether that person participates, in what capacity and how changes are handled. A familiar channel name does not automatically include every appearance expectation.

YouTube’s channel permissions guide provides context for several people operating a channel; platform roles do not automatically establish commercial authority. Have an appropriate representative confirm work, publication and use rather than request commitments beyond an editor’s or uploader’s role.

Person, program and channel need defined objects. A substitute requires actual acceptance rather than an unchanged logo concealing the change. The operator can confirm a technical action while the commercial owner separately confirms the assignment, leaving each approval attached to the matter it actually covers.`,['ytPermissions']),
s('分别约定编辑任务与产品事实','Separate editorial work from product facts',`创作者可能有成熟节目表达，品牌则需要核对产品条件。先约定必须准确的事实、适当创作空间与修改范围，不把购买一个段落理解为控制全部观点。需要个人体验的表达仍应真实。

YouTube 的品牌内容政策提供价值交换与商业内容处理的背景。商业安排不能使没有发生的体验变成事实，也不能替品牌证明产品效果。

审核应指向实际脚本或预览对象。不能把内部某人看过产品资料，写成整条作品和所有后续版本都已批准。`,
`A creator may have an established program style while the brand needs accurate product conditions. Agree on essential facts, suitable creative latitude and revision scope instead of treating a segment purchase as control of every opinion. Claims of personal experience must remain genuine.

YouTube’s branded content policy provides context for value exchange and commercial content treatment. A commercial arrangement cannot establish an experience that did not happen or substantiate product benefits for the brand.

Review should concern an actual script or preview. A colleague reading product material is not approval of the entire piece and every later version. The accepted record should identify which factual conditions the adaptation must retain and which editorial choices belong to the creator within the agreed assignment.`,['ytBranded']),
s('发布范围需要单独确认','Confirm publication scope separately',`问清发布在哪个频道、哪个栏目、何种形式与时间安排。品牌获得文件，不证明已经有频道发布承诺；频道发布也不自动包含所有其他平台分发。延期、改形式或未能发布时，按实际约定处理。

若需要带来特定下一步，提前核对目的地、语言与品牌接收条件。创作者可以发出邀请，但不能替尚未准备好的品牌系统保证服务。

发布确认记录公开链接与版本，表现资料按自己的窗口后续评估。不要用预约、发出文件或一张频道截图代替实际发布证据。`,
`Ask which channel, program, format and timing are included. Receiving a file does not establish channel publication, and publication on one channel does not include every other platform. Handle delay, format changes or failure to publish through the actual agreement.

Where a specific next action matters, confirm destination, language and brand receiving conditions beforehand. A creator can issue an invitation without guaranteeing service from an unprepared brand system.

Retain public link and version for publication confirmation, then evaluate performance within its own window. A reservation, transferred file or channel screenshot does not replace evidence of actual release. This distinction lets the brand identify whether a problem concerns execution, destination readiness or later audience response instead of treating every shortfall as the same failure.`,[]),
s('素材使用范围不随频道规模扩大','Channel size does not expand asset rights',`用付费媒体许可范围分别记录品牌可以复用的片段、渠道、地区、期限与编辑条件。节目内出现品牌，不等于品牌可以下载整集、剪去背景后当成独立代言广告。

音乐、其他出镜人和第三方素材也可能需要不同确认，由合适人员按实际用途核对。节目愿意制作新段落，不证明所有旧素材都可授权。

将研究参考、已接收文件和已批准使用分别标记，避免媒体团队误用素材。文件存在与可以使用是不同状态。`,
`Use the paid media licensing scope to record reusable excerpts, channel, market, duration and editing conditions. A brand appearing in a program does not establish permission to download the episode, remove context and turn it into an independent endorsement ad.

Music, other performers and third-party material may need distinct confirmation by appropriate owners. Willingness to make a new segment does not establish availability of every older asset.

Label research references, received files and approved use separately to prevent media misuse. A file existing is different from permission to use it. The final asset list should make the applicable version and limits visible enough that a receiving operator does not infer broader use from the channel’s size, the production quality or a prior successful partnership.`,[]),
s('用两个假设提案发现范围差异','Use two hypothetical proposals to expose scope differences',`假设提案甲是一集节目中的一次介绍，提案乙是四条独立短片。两者都写“视频合作”，仍不能只比较总金额。先确认节目整合、实际出镜、制作、发布与许可分别包含什么。这里没有真实频道报价或市场平均。

如果甲只含节目发布，乙含品牌渠道使用九十天，就把后者写在范围表；九十天是假设条件，不是行业标准。甲也许提供更适合的节目语境，乙也许更适合品牌素材计划，取决于实际观众任务。

还要确认四条是否四种原创解释，还是同一作品的四种裁切。不能把数量相同或单条金额更低，自动解释为更好价值。人物参与、语言与目的地条件也应在同一边界下比较。

最后写出可以决定什么：选择一种范围、要求补充资料、调整需求或不采购。不能从这个练习宣称某类频道永远更划算。

可将需求标为必需、可选、不包含或待确认。若品牌渠道复用是必需，而某方案没有说明，不能把缺项当作零成本；应确认可用范围、修改需求或暂缓比较。如果主持人本人出镜只是可选，也保留该选择，避免后来被误认成未完成交付。这层需求说明有助于比较不同形式，不强行称为相同的视频单元。`,
`Suppose proposal A includes one introduction within a program episode, while B offers four standalone shorts. Both say video collaboration, but totals cannot be compared meaningfully before establishing integration, participants, production, publication and licensing. This is neither an actual channel quote nor a market average.

If A includes only program publication while B includes ninety days on brand channels, put that difference in the scope table. Ninety days is a hypothetical condition, not an industry standard. A may offer useful program context; B may serve an asset plan. The actual audience task determines relevance.

Establish whether four means four original explanations or four crops of one piece. More files or a lower per-file amount does not automatically establish better value. Align participation, language and destination conditions too. A proposed unit should remain understandable if the other offer disappears from the table; otherwise the buyer still has a relative price without a defined purchase.

For an internal allocation, dividing a total by four is merely arithmetic until the four objects and included rights are understood. It should not be reported as a universal price per creator video. Nor should an in-program segment’s apparent unit cost be compared with an entire independently produced asset without stating the difference.

Close with the supported decision: choose a scope, request information, revise requirements or decline. The exercise establishes no channel type as permanently better value. Preserve the comparison assumptions with the recommendation so another approver can see what would change if the brand later needs a different market, term or publication role.

A practical comparison can label each requirement essential, optional, excluded or unconfirmed. If brand-channel reuse is essential and one proposal leaves it unresolved, the team cannot assume the omission has zero cost. Ask whether the scope is available, change the requirement or defer the comparison. If a presenter’s appearance is optional, preserve that choice so the later buyer does not mistake its absence for failed delivery. This requirement layer helps compare different formats without forcing them into one supposedly identical video unit or allowing the cheapest visible line to decide an incompletely defined purchase.`,[]),
s('把费用与结果的责任分开','Separate costs and outcome responsibility',`制作、出镜、发布、许可与媒体支出分项记录，注明期间与包含项。不要把估算收入当作频道应该接受的报价，也不从历史总观看推导本次收益。需要实际报价时提供真实范围。

报告分别说明交付、可用观看、相关回应和业务事件。某项未达到预期不自动使所有已完成工作失效，作品存在也不证明商业结果成功。

品牌与频道团队都应说明自己负责的条件，避免把所有差异归给一个熟悉的出镜人。`,
`Record production, appearance, publication, licensing and media separately with periods and inclusions. Estimated channel income does not determine an acceptable quote, and historical total views do not establish campaign return. Supply actual scope for an applicable offer.

Report delivery, available viewing, relevant responses and business events separately. One disappointing outcome does not invalidate every completed component, while an existing asset does not establish commercial success.

Brand and channel team should identify conditions each controls rather than attribute every difference to a familiar presenter. This makes review more useful: it can identify a destination repair, a needed factual clarification or a different next production without pretending that all those tasks were contained in one undefined channel fee.`,[]),
s('让交接说明未购买的部分','Make unpurchased components visible in handoff',`交接包含内容单元、参与人、发布对象、版本、使用范围、批准与接收人，也说明哪些尚未确认。执行者不应从文件夹名猜是否能投广告，或从合作群成员猜谁有权改事实。

需要新版本、新市场或延长期限时重新确认，不静默继承原范围。保留正常变更记录，让团队知道当前使用依据。

这份清单应随素材一起走，而不是只保留在采购人员的邮件里。`,
`Hand over unit, participants, publication object, version, usage scope, approvals and receiver, including unresolved items. Execution staff should not infer advertising rights from a folder name or factual authority from membership in a project chat.

Confirm new versions, markets or extended terms rather than silently inherit the original scope. Retain ordinary change records so the basis for current use remains visible.

Keep the list with the assets instead of only in procurement email. The receiving owner should be able to identify which work is ready, which action is allowed and which question must return to the appropriate representative. A polished file is not a substitute for that operational understanding.`,[]),
s('把最大频道研究变成清楚采购','Turn large-channel research into a defined purchase',`大型 YouTube 频道可以提供值得研究的制作与传播机会，但品牌必须知道自己购买的具体单元与条件。规模背景、人物认知和实际工作应各有证据，不能互相代替。

完成时给出可执行提案、适用范围与未知，负责人再作决定。没有实际报价、排名采集或结果证据的部分，不应写成已经核验。

真正有用的研究，让品牌能说明买什么、为什么适合、谁能确认，以及之后如何验收。`,
`Large YouTube channels can offer production and distribution opportunities worth researching, but a brand must understand the unit and conditions it purchases. Scale context, recognition and actual work each need evidence rather than replacing one another.

Leave an executable proposal, applicable scope and unknowns for the responsible decision-maker. Where actual quotation, ranking collection or outcome evidence was not obtained, do not describe it as verified.

Useful research lets the brand explain what it buys, why it fits, who can confirm it and how acceptance works afterward. That gives the search for the biggest channels a practical role in creator marketing without turning a large public total into an unsupported promise about the next collaboration.`,[])
],
links:[link('达人 Brief','creator brief','write-a-useful-campaign-brief'),link('付费媒体许可范围','paid media licensing scope','influencer-content-licensing-paid-media-schedule')],
table:{title:p('大型频道可购买单元','Purchasable units in a large-channel proposal'),headers:[p('单元','Unit'),p('需确认','Confirm'),p('不能自动包含','Not automatically included')],rows:[[p('节目段落','Program segment'),p('栏目、出镜与编辑任务','Program, appearance and editorial task'),p('整集权利','Entire-episode rights')],[p('独立制作','Standalone production'),p('原创建议、版本与验收','Original work, versions and acceptance'),p('所有账号发布','Every account’s publication')],[p('账号发布','Account publication'),p('频道、形式与时间','Channel, format and timing'),p('全部关注者触达','Reach to all subscribers')],[p('素材许可','Asset license'),p('片段、地区、渠道与期限','Excerpt, market, channel and term'),p('无限复用','Unlimited reuse')]],note:p('甲、乙与九十天均为假设范围；不代表真实报价或行业标准。','A, B and ninety days are hypothetical scope, not actual offers or industry standards.')},
tool:{title:p('比较频道提案前','Before comparing channel proposals'),intro:p('先比较工作，再比较价格。','Compare work before price.'),items:[p('内容单元有明确对象。','The content unit has a defined object.'),p('实际参与与发布分别确认。','Actual participation and publication are separately confirmed.'),p('规模资料有口径与时间。','Scale has definition and timing.'),p('使用范围与版本随文件交接。','Usage scope and version travel with the file.'),p('未确认项不会被当成已购买。','Unresolved items are not treated as purchased.')]}
});
