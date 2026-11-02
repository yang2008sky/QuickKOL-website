import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:8,
summary:p('读懂达人收入调查的样本和期间，把个人报价拆成工作范围、收入来源、实际成本与付款状态。','Read creator-income research in context and separate scope, revenue streams, actual costs and payment status when discussing an individual quote.'),
description:p('达人能赚多少？用有范围的收入调查理解差异，区分年收入、合作报价、平台分成、成本与实际付款，不从粉丝数猜年薪。','How much do influencers make? Interpret income surveys, separate annual income from campaign fees and model gross, costs and workload without salary promises.'),
coverAlt:p('奶油色底上，收入、成本和工作时间被分成不同栏，强调各自单位，不展示真实收入排名。','Income, costs and working time in separate columns on cream, emphasizing distinct units without a real earnings ranking.'),
answer:p('How much do influencers make 没有一个适用于所有人的数字。先问是过去一年的创作者收入、单次品牌合作费、平台分成，还是扣除工作成本后的金额；再核对币种、期间、样本与工作范围。公开调查能描述特定受访者，不能给某个人定价。品牌应围绕实际交付、发布、使用和资源讨论报酬，不从粉丝数推断私人年收入，也不以行业平均数作为应付价格。',
'How much do influencers make has no single answer that applies to everyone. Specify whether the question concerns annual creator income, a brand-campaign fee, platform revenue or money remaining after work costs. Then identify currency, period, sample and scope. A public survey describes its respondents; it does not price a particular person. Brands should discuss payment around actual production, publication, use and resources rather than inferring private annual income from followers or treating an average as the amount someone should accept.'),
links:[link('报价归一指南','scope-normalization guide','evaluate-creator-rate-cards'),link('谈判选项指南','negotiation-options guide','how-to-negotiate-with-influencers-offer-options'),link('内容使用权指南','content usage-rights guide','creator-rates-usage-rights')],
sections:[
s('收入问题要先带单位','An income question needs a unit before it needs a number',
`“这个达人赚多少”可能混合了一年的全部业务、一项品牌合作，或者一个平台的收入。即使数字相同，它们对预算的意义也完全不同。开始研究时就写下主体、币种、统计期间、收入范围及数据状态。

品牌购买的是一项有范围的工作，不是某个人的一整年生活。为了决定一段演示视频是否合适，不需要猜测对方所有私人收入。可以直接询问拟议任务的报价与可行安排，同时说明自己能提供哪些资源。

把合同约定金额、开票、待收、已到账分别记录。一个很高的公开合作金额，不证明钱已全部收到，也不说明扣除了多少团队或制作成本。标签准确，后面的比较才有意义。`,
`What does this creator make can refer to an entire year of business, one partnership or income from one platform. Identical numbers would have very different budget implications. Begin research with entity, currency, reporting period, included revenue and data status.

A brand purchases defined work rather than a person’s whole financial life. Deciding whether a demonstration video suits a project does not require guessing every private revenue stream. Ask for the proposed assignment’s quote and feasible arrangements while explaining what resources the brand can supply.

Retain agreed amount, invoiced amount, receivable and payment received as separate states. A large publicly discussed deal does not establish that all money arrived or how much went to a team and production. Accurate labels make the subsequent comparison meaningful. A quote is also time-specific: a person may propose different work, rights or scheduling conditions for another assignment without either quote becoming evidence of a fixed personal salary.`),
s('两份调查的结果不能拼成统一薪资表','Different surveys are not one universal salary table',
`CreatorIQ 2026 创作者调查披露，Influencers.club 于2026年5月29日至6月29日调查5,095名创作者，页面说明覆盖100个国家；67%的受访者表示过去一年创作者收入低于10,000美元。它反映该样本的自报收入分布，不是所有达人的总体收入结论。

CreatorIQ 2025 收入研究则基于与 Sapio Research 合作的300名创作者调查，报告2025年度收入平均为44,293美元。两个研究的样本及观察背景不同，不能把一份的均值与另一份的比例拼接后，假装得到某个粉丝层级的收入标准。

品牌可由此认识到收入差异很大，但不能声称某个合作对象就应该接近其中一个数。研究结果适合解释为什么要问清工作与收入定义，不能替代真实报价。`,
`The CreatorIQ 2026 creator survey states that Influencers.club surveyed 5,095 respondents from May 29 to June 29, 2026, across 100 countries. It reports that 67% earned under USD10,000 in creator income over the preceding year. This describes self-reported income in that sample, not every creator’s earnings.

The CreatorIQ 2025 income study instead used a Sapio Research survey of 300 creators, reporting average annual 2025 income of USD44,293. Different samples and observation contexts mean the average from one cannot be combined with the proportion from the other to manufacture an income standard for a follower tier.

A brand can use the findings to understand that earnings vary substantially. It cannot conclude that an individual partner should earn either number. The research explains why scope and income definitions matter; it does not replace a quote. An accurate citation should preserve the survey and year even when a short presentation would be easier to write without them.`,['ciqIncome2026','ciqComp2025']),
s('品牌费用与平台收益是不同收入流','Brand fees and platform earnings are different streams',
`达人可能获得内容制作费、自己账号的发布费、许可费、推荐佣金或平台收益。并非每个人都具备所有来源，也不能假设某个平台有观看就必然有对应收入。品牌在预算中应记录自己购买的部分，避免把不相关的收入流拿来抵扣工作价值。

YouTube 收益说明区分不同分成机制，例如适用 Watch Page 广告条款下的净广告收益分成，以及 Shorts 分配池对应的份额；说明也明确没有收入保证。两种百分比的计算基础不同，不能直接相互比较，更不能当作每次观看固定支付额。

即使创作者授权分享某平台记录，它也只回答该记录覆盖的问题，不代表所有业务收入。报告应保留来源和范围。公开观看数、订阅数与别人的 CPM 估计，不能复原个人最终收入。`,
`A creator may receive production fees, publication fees, licenses, referral commission or platform earnings. Not everyone has every stream, and views do not automatically establish monetized income. A brand’s budget should identify the contribution it buys rather than using unrelated revenue to discount the work’s value.

The YouTube earnings overview distinguishes mechanisms such as the applicable Watch Page share of net advertising revenue and the share allocated through the Shorts creator pool. It also states that earnings are not guaranteed. Different calculation bases prevent those percentages from becoming directly comparable pay rates, much less a fixed payment per view.

Even an authorized platform record answers only the question within its scope, not total business income. Preserve source and coverage. Public views, subscribers and someone else’s CPM assumption cannot reconstruct finalized personal earnings. A report can responsibly say that a stream exists while leaving its amount unknown. That is preferable to converting visible attention into a financial claim that the person never disclosed.`,['ytEarnings']),
s('先让报价对应清楚的工作','Make a quote correspond to a defined assignment',
`报价归一指南建议把交付、发布、修改与使用范围拆开。一个数字可能包括脚本研究、拍摄、剪辑、字幕、发布以及一定期间的使用，也可能只包含其中一部分。没有范围就无法判断两个报价是否真的可比。

写出内容数量、形式、长度要求、研究任务、提供资料、审核轮次、发布时间与额外用途。区分必须交付和可选追加，不用一个模糊的“全包”覆盖不断增长的请求。

创作者也许可以建议减少数量、改变形式或移动日期。品牌应讨论这些真实取舍，而不是把收入调查当作压价依据。若预算不足以支付原任务，调整任务或寻找不同制作方案，比假设对方有其他收入所以可以免费更合理。`,
`The scope-normalization guide separates deliverables, publication, revisions and use. One amount may include script research, filming, editing, captions, publication and use for a period. Another may cover only part of that work. Without scope, two quotes are not meaningfully comparable.

Specify quantities, formats, length requirements, research, supplied information, review rounds, timing and additional uses. Separate required work from optional additions rather than placing an expanding request under a vague all-inclusive label.

A creator may suggest fewer pieces, a different format or another date. Discuss those real choices instead of using an income survey as bargaining authority. If the budget cannot support the original assignment, change the assignment or production approach rather than assuming outside income makes free work reasonable. Clarifying scope also protects the brand’s planning: a cheaper proposal may omit the publication or editing contribution that the project needs most, while an apparently expensive proposal may include resources the team would otherwise buy separately.`),
s('假设算例：毛收入、项目余额与时间','Hypothetical example: gross receipts, project remainder and time',
`以下是编辑假设，不是市场报价。一次明确范围的项目已收1,600美元；为该项目支出的剪辑、场地与其他直接成本合计600美元。两者相减剩1,000美元。若实际投入25小时，这个项目余额除以工时为每小时40美元。

40美元不是个人到手时薪：还没有覆盖所有年度管理、设备、获客、闲置时间及可能适用税费。若把同样25小时误当为全部业务时间，或将项目余额叫作净工资，就会高估可支配收入。

若有200美元仍待收，现金观察与约定收入也需要分开。算例的目的不是给达人制定最低价，而是让品牌看懂成本与工作为何不能从一个合作总额中消失。实际资源和核算应采用相应专业判断。`,
`Consider an editorial hypothetical, not a market quote. A defined project has USD1,600 received and USD600 in editing, location and other direct project costs. The difference is USD1,000. Dividing that remainder by 25 actual project hours gives USD40 per project hour.

USD40 is not take-home hourly pay. The calculation has not allocated all annual administration, equipment, acquisition, idle time or applicable taxes. Treating those 25 hours as the whole business workload, or calling the project remainder a net wage, overstates what the example establishes.

If USD200 remains receivable, distinguish cash observed from agreed revenue as well. The example does not set a creator minimum price. It explains why costs and work cannot disappear inside a headline deal amount. Actual accounting and individual circumstances require appropriate judgment. State which costs are included before comparing this figure with another project: a team that counts editing in hours but also deducts an editor’s invoice needs to explain whose labor each figure represents, so the same work is not interpreted twice.`),
s('内容的使用范围也占用价值','Content use changes the assignment’s value',
`内容使用权指南说明，文件交付、品牌自有渠道使用、付费投放、修改与长期复用需要分别讨论。内容已经拍好，并不代表所有新用途没有价值，也不代表一次发布费涵盖无限投放。

排他要求也会改变可接受的安排。品牌应说明涉及哪些产品、市场与期间，让对方判断是否影响其他工作。本文不提供通用许可价格或排他倍数；没有实际范围的倍数看似准确，却不能支撑一份具体报价。

把可能追加的用途列为选项。品牌可以只购买当前需要的范围，日后再谈新用途；创作者也能知道自己在何时提供了什么。清楚范围，比从收入排名倒推许可费更接近真实决策。`,
`The content usage-rights guide distinguishes file delivery, brand-owned publication, paid distribution, editing and longer reuse. Existing footage does not make every additional use valueless, and a publication fee does not automatically include indefinite advertising.

Exclusivity also changes the arrangement someone can accept. Identify products, market and period so the recipient can consider effects on other work. This article supplies no universal license price or exclusivity multiplier. A precise-looking multiplier without actual scope cannot support a specific quote.

List potential additional uses as options. The brand can purchase its current need and discuss another use later, while the creator can identify what was provided and when. Defined scope is closer to the decision than deriving license fees from an earnings ranking. It also avoids a later dispute in which one party remembers a production conversation and the other assumes it bought an unrestricted asset library for the same amount.`),
s('长期合作需要考虑现金与可安排性','Continuing work needs payment clarity and feasible scheduling',
`谈判选项指南可用于比较数量、形式、期限与付款安排。长期合作可以减少反复研究和协调，但持续关系不是自动降价理由，也不保证每个月都会有相同工作量。

说明预计任务、可确认的部分、变化处理与付款状态。不要要求创作者保留很长档期，却仅承诺未来可能发生的工作。品牌内部也需要知道哪些费用已约定、哪些仍只是预测。

实际观察可以包括是否按期交付、修改是否来自需求变化、成本是否超出原范围。若工作量变化，重新讨论安排比用旧收入假设解释一切更可靠。合作可持续性来自真实资源与清楚预期，不来自把某位创作者想象成高收入或低收入人群。`,
`The negotiation-options guide supports discussion of quantity, format, duration and payment arrangements. Continuing work may reduce repeated research and coordination, but continuity is not an automatic discount or a guarantee of identical monthly volume.

Explain expected assignments, confirmed commitments, change handling and payment states. Avoid asking someone to reserve a long period for work that remains only a possibility. The brand also needs to distinguish agreed spending from forecasts.

Observe delivery, whether revisions follow a changed request and whether work exceeds the original scope. Revisit arrangements when workload changes rather than explaining everything with an old income assumption. Sustainable collaboration comes from real resources and clear expectations, not imagining the partner belongs to a rich or poor category. A narrower confirmed assignment can be easier for both parties to plan than a large hypothetical annual number with no allocation, scheduling or payment detail.`),
s('平均数为何不能变成个人的收入目标','Why an average is not an individual income target',
`以下为纯数学假设，不描述任何研究样本。三个年度金额分别是3,000、3,000和30,000美元，平均数为12,000美元，中位数为3,000美元。少数较大值就能使均值明显高于样本中多数人的金额；两种统计量回答的问题不同。

即使知道均值和中位数，也还不知道某个具体人的工作条件。需要继续看收入包括哪些来源、是否为全年投入、团队成本、地区与调查覆盖。不能用数字比较就判断一个人工作不努力、报价不合理或一定拥有某种生活水平。

品牌培训可以解释这种差别，但不必复制一张按粉丝划档的薪资表。若讨论预算，回到自己能够购买的交付和对方明确提出的条件。样本可以促使团队提出更好的问题，不能代替当事人的回答。`,
`Consider a purely mathematical hypothetical, not a research sample. Three annual amounts are USD3,000, USD3,000 and USD30,000. Their mean is USD12,000 and their median is USD3,000. A few larger observations can pull the mean above the amount received by most members of a small sample. The statistics answer different questions; neither reveals the amount a particular person earns.

Knowing a mean and median would still leave working conditions unresolved. Ask what revenue streams are included, whether participation was full time, what team costs exist and which places and respondents the research covers. Differences between a public statistic and a proposed fee do not establish poor effort, unreasonable pricing or a particular lifestyle. A creator may quote for a demanding specialist production while maintaining a small public following, and the scope still needs to be evaluated on its own terms.

Brand training can explain these distinctions without reproducing a follower-tier salary chart. Budget discussions should return to the deliverable the brand can purchase and the conditions the recipient actually offers. A sample can improve the questions the team asks; it cannot answer for an individual. This also makes room for a valid unknown: the team can make a purchasing decision without learning, estimating or publishing the partner’s private annual income.`),
s('把收入资料用在正确的决定上','Use income information for the decision it can support',
`最终研究记录应说明每个数字来自哪里、描述谁、覆盖多久，以及能回答什么。公开调查可以进入团队培训，授权报价可以进入采购比较，实际付款进入对应记录。它们不应该被合成某人的“真实身价”。

QuickKOL 可以帮助理解 Brief、发现相关创作者并研究作品与联系路径。内容适配不等于已确认报价或收入；商业条件与结果仍需向适当来源核验。

品牌真正需要回答的是：这项工作是否清楚、资源是否够、对方是否愿意接受，以及观察结果如何支持下一次安排。把问题问得具体，通常比寻找一个没有范围的收入平均数更有用。`,
`A final research record identifies where each number came from, whom it describes, its period and the question it answers. Public surveys can support training, authorized quotes can support purchasing comparisons and actual payments belong in their corresponding records. They should not be combined into a person’s supposed true value.

QuickKOL can help interpret a brief, discover relevant creators and research work and contact routes. Content fit does not establish a quote or income; commercial conditions and outcomes still need verification at the appropriate source.

The brand’s practical questions are whether the work is defined, resources are sufficient, the recipient wants the arrangement and observations can inform another assignment. Those specific questions are usually more useful than an income average without a scope.`)
],
table:{title:p('比较数字前先确认它是什么','Identify the number before comparing it'),headers:[p('数字','Figure'),p('需要范围','Required scope'),p('不能替代','Does not replace')],rows:[[p('调查年收入','Survey annual income'),p('受访者、年份、收入定义','Respondents, year and income definition'),p('个人报价','Individual quote')],[p('合作费','Assignment fee'),p('交付、发布、使用与期限','Deliverables, publication, use and period'),p('全年可支配收入','Annual disposable income')],[p('平台收益','Platform earnings'),p('机制、估计/结算、窗口','Mechanism, estimated/finalized state and window'),p('全部业务收入','Total business income')],[p('项目余额','Project remainder'),p('纳入收入与成本','Included receipts and costs'),p('税后工资或统一时薪','After-tax wage or universal hourly rate')]],note:p('正文金额算例是假设；不构成个人税务、财务建议或市场报价。','Body arithmetic is hypothetical, not individual tax or financial advice or a market quote.')},
tool:{title:p('收入与报价阅读清单','Income and quote reading checks'),intro:p('先补齐范围，再讨论金额。','Complete the scope before interpreting the amount.'),items:[p('记录币种、期间、主体及状态。','Record currency, period, entity and status.'),p('调查样本不写成所有创作者。','Do not generalize a survey sample to all creators.'),p('制作、发布、使用与排他分别讨论。','Discuss production, publication, use and exclusivity separately.'),p('余额说明纳入和未纳入成本。','Specify costs included and excluded from a remainder.'),p('不从公开粉丝数推断私人收入。','Do not infer private income from public followers.'),p('预算不足时调整实际任务。','Change the actual assignment when resources are insufficient.')]}
});
