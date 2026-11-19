import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:13,
summary:p('频道总数只有在对象与方法清楚时才有意义。品牌更需要一个有范围、可更新的候选研究集合，而不是把全站规模当成可合作达人数量。','A channel total needs a defined population and method. Brands need a bounded, updateable research set rather than treating platform scale as the number of available partners.'),
description:p('How many YouTube channels are there：区分频道、视频、活跃与可合作集合，理解搜索结果限制，为达人研究建立清楚分母。','How many YouTube channels are there? Define channels, videos, activity and partnership populations, and understand search-result limits before sizing creator research.'),
coverAlt:p('频道计数图形分别排列已创建、活跃与纳入研究的范围','A channel-count graphic separates created, active and research-included populations'),
answer:p('How many YouTube channels are there 需要先定义“频道”。截至本篇 2026 年 11 月 19 日的资料核验，我们引用的官方来源不能提供一个可验证、覆盖全部现存频道的实时总数；不会用视频数量、搜索结果或第三方数据库规模代替。对达人营销，更有用的问题是：在指定主题、语言、近期活动与身份条件下，研究集合包含哪些频道，以及这个集合遗漏了什么。','How many YouTube channels are there first requires a definition of channel. In the official sources reviewed for this article on November 19, 2026, we could not verify a real-time total covering every existing channel; video counts, search results and database size are not substitutes. For creator marketing, a more useful question is which channels enter a research set defined by subject, language, recent activity and identity conditions, and what that set leaves out.'),
sections:[
s('把没有核验的总数明确留空','Leave an unverified universal total unresolved',`一个数字可能统计所有创建记录，也可能只包含公开、有上传、近期活跃或达到某种门槛的频道。没有人口范围，精确数字也无法回答同一个问题。

本篇没有确认一个完整实时频道普查。这个结论是本次研究边界，不是声称平台从来没有其他统计，也不是证明任何第三方估计必然错误。

引用第三方集合时，需要知道来源、收录条件、去重方法与日期。若资料没有提供这些说明，不能把数据库记录数写成全球频道总数。

对品牌而言，承认未知可以避免错误预算。全站规模并不等于可联系、愿意合作、适合商品或能够交付的创作者规模；每一步都需要另外的条件与证据。`,
`A figure may count all created records, only public channels, channels with uploads, recently active ones or those above a threshold. Without a population definition, even a precise number cannot answer a shared question.

This article has not confirmed a complete real-time channel census. That is the boundary of this research, not a claim that the platform has never published other statistics or proof that every third-party estimate is wrong.

When citing a third-party collection, establish its source, inclusion conditions, deduplication method and date. If those are unavailable, database records should not be presented as the worldwide channel total.

Acknowledging the unknown can prevent a brand from budgeting against the wrong denominator. Platform scale is not the number of creators who can be contacted, want a partnership, fit the product or can deliver the assignment. Each transition requires its own conditions and evidence, so the initial headline quantity cannot carry the entire commercial interpretation.`),
s('频道资源不等于视频或个人','A channel resource is not a video or a person',`YouTube Data API 的频道定义说明频道资源与唯一标识。一个频道可以关联多条内容，一个制作团队也可能经营多个频道，因此频道数、视频数和创作者人数不能直接互换。

同名不是同一个标识，改名也不一定产生新频道。研究记录应保留正确身份，而不是只用展示名称进行合并或累加。

频道身份核验方法可以帮助确认公开账号与联系对象。它不能仅凭技术标识证明谁有权签约、谁实际出镜或谁负责全部制作。

先说明研究单位，后续去重才有依据。品牌若需要统计创作者团队，应另行核对组织关系，不能把每个账号算成独立个人，也不能将相关账号无条件合成一人。`,
`YouTube Data API’s channel definition explains the channel resource and its unique identifier. A channel can contain many pieces, while one production team can operate several channels, so channels, videos and creator people are not interchangeable counts.

Matching names do not establish matching identifiers, and a renamed channel does not necessarily become a new channel. Retain the correct identity rather than merging or adding records solely by display name.

The channel-identity review method helps establish the public account and contact object. A technical identifier alone cannot prove who can contract, appears on screen or handles every production task.

Define the research unit before deduplication. If the brand needs a count of creator teams, organizational relationships require another check: neither count each account as an independent person nor unconditionally merge related accounts into one person. This distinction matters when estimating outreach effort, since a collection of publishing identities may lead to fewer, more complex or differently organized business conversations.`,['ytChannels']),
s('视频规模不能补成频道总数','Video scale cannot fill a channel-count gap',`YouTube 的二十周年数据公告于 2025 年 4 月介绍超过二百亿条已上传视频，以及平均每天超过两千万条上传。这些说明平台内容规模，但统计单位是视频与上传流量。

不能将视频总量除以一个随意设定的每频道平均值，就宣称获得官方频道总数。频道上传分布与研究范围没有核验时，这种推算会隐藏多个假设。

也不要把用户、观看者或会员项目参与者直接换成全部频道。不同人口之间可能相关，却不是同一个计数对象。

可以引用有日期的内容规模作为背景，同时明确它不能回答什么。品牌研究因此保留真实资料，也避免为了给关键词一个整数答案而制造不存在的准确性。`,
`YouTube’s twentieth-anniversary statistics, published in April 2025, describe more than twenty billion uploaded videos and an average of over twenty million uploads daily. They establish content scale, but the units are videos and upload flow.

Dividing that total by an arbitrarily assumed average per channel would not produce an official channel count. Without a verified upload distribution and population scope, such a calculation hides several assumptions.

Users, viewers and participants in a monetization programme should not become substitutes for all channels either. These populations may relate to one another without being the same counting object.

Use a dated content-scale statement as background while making its limits explicit. That retains real evidence without manufacturing accuracy merely to give the keyword an integer answer. A brand can understand that the platform contains extensive content and still recognize that the size of its relevant partnership population remains a separate research question requiring different evidence.`,['ytBirthday']),
s('搜索结果是查询集合，不是完整普查','Search results form a query set, not a census',`YouTube Data API 的搜索说明指出，结果对应查询条件，totalResults 是近似值且有上限。它不是一个直接返回全球全部频道的可靠计数器。

语言、词语、筛选与排序会影响团队找到什么。两个研究者采用不同入口，可能得到不同集合；这首先提示方法差异，不证明其中一人一定做错。

不要把某次搜索的最后一页当成平台全部内容边界，也不将返回较少记录直接解释为没有更多合适创作者。

记录实际查询和纳入规则。这里只说明研究限制，不提供全站抓取方案；品牌真正需要的是可解释的发现过程，以及知道哪些遗漏会影响本次合作判断。`,
`YouTube Data API’s search documentation states that results match query conditions and that totalResults is approximate and capped. It is not a dependable counter that directly returns every channel worldwide.

Language, wording, filtering and ordering affect what the team discovers. Two researchers using different routes can obtain different sets; this first indicates a methodological difference, not proof that one person worked incorrectly.

Do not treat the last page of one search as the boundary of the platform, or infer from a smaller result set that no other relevant creators exist.

Record the actual queries and inclusion rules. This is an explanation of research limits, not a plan for scraping the entire service. The brand needs an explainable discovery process and an understanding of which omissions matter to this partnership decision. Search can be valuable as one route while its returned quantity remains a statement about the query, not the universe from which the query drew results.`,['ytSearch']),
s('为本次达人研究建立有范围的分母','Build a bounded denominator for this creator study',`先写明目标主题、语言、观察期和所需内容形式，再解释什么情况纳入候选。规则应对应任务，不把粉丝门槛当作唯一相关性条件。

例如品牌要研究能清楚展示维修过程的频道，就应核对实际作品，而不是只搜索某个商品词。标题、说明与画面可能提供不同线索。

记录找到但未纳入的原因，如身份待确认、主题不相关或近期状态不明。未知与不合格应分开，避免资料缺口自动变成负面判断。

这个集合可称为本次研究候选，而不是全球同类频道全集。范围清楚后，团队才能解释名单数量与下一轮需要补充的渠道。

也约定何时更新。一次研究快照可以支持当时的下一步，不应在数月后仍被当作当前覆盖。更新时保留新增、移除与重新分类的理由，避免数量变化失去解释。`,
`State the subject, language, observation period and required content form, then explain what qualifies a channel for consideration. Rules should follow the assignment rather than treating a follower threshold as the only relevance condition.

For a brand researching channels able to demonstrate repair processes clearly, review actual work rather than searching only for a product word. Titles, descriptions and footage can provide different clues.

Retain reasons for discovered channels not being included, such as unconfirmed identity, unrelated subject matter or unclear recent status. Unknown and unsuitable should be separate states so a missing record does not automatically become a negative judgment.

Call the collection candidates for this study rather than the complete global population of similar channels. With that scope, the team can explain the list size and the discovery routes to add next. It can also tell whether a later change reflects a new rule, new evidence or a genuine change in a previously reviewed channel.

Agree when to update the set too. A snapshot can support the next step at that time without remaining current months later. Retain additions, removals and reclassifications with reasons so a changed quantity remains explainable rather than appearing to be an unexplained movement in the market.`),
s('用覆盖检查发现遗漏','Use coverage checks to identify omissions',`将候选按主题子类、语言或形式查看，判断是否某类需求只依赖一个查询词。分类用于发现研究空白，不用于声称平台受众都按这些类别分布。

可采用不同入口交叉寻找，再以统一频道身份去重。不要简单相加多份名单，否则同一频道反复出现会扩大规模印象。

YouTube 频道内容承诺指南帮助团队回到实际编辑工作。某个频道很少使用品牌偏好的行业词，也可能持续解释相关问题，因此需要查看作品而非只看标签。

记录补充发现改变了什么。覆盖检查的目标是让下一步研究更合理，不是把名单做得越大越好，也不是声称已经完全消除发现偏差。`,
`View candidates by subject subcategory, language or format to see whether one need depends entirely on one query term. These categories expose research gaps; they do not claim that the platform's audience follows the same distribution.

Use different discovery routes and deduplicate by consistent channel identity. Simply adding lists together can count the same channel repeatedly and exaggerate scale.

The channel editorial-promise guide returns the team to actual work. A channel may rarely use the industry's preferred terminology while repeatedly explaining a relevant problem, so examine the pieces rather than relying only on labels.

Record what supplementary discovery changed. Coverage checks should make the next research step more sensible, not maximize list size or claim to eliminate discovery bias completely. The brand can decide that an overlooked content role deserves more investigation without asserting that it now knows the exact share of all YouTube channels represented by that role.`),
s('假设研究集合怎样报告数量','Report a hypothetical research set accurately',`假设团队通过三个入口找到四十条频道记录，按唯一身份合并后剩三十二个，其中二十个已有相关作品，十二个仍待查看。这些是假设数字，不是实际市场规模。

报告应分别保留原记录、去重频道与已核验相关数量。不能把四十写成四十位创作者，也不能把二十写成全球只有二十个适合合作的对象。

若接下来又找到新频道，更新集合和观察日期即可，不需要把新增解释成平台当天出现了这些账号。研究发现时间与频道创建时间是不同事实。

决定下一步时，可以优先核对十二个待查看对象，或补充遗漏语言入口。数量因而服务工作安排，而不是被包装成没有依据的行业普查。`,
`Imagine a team finding forty channel records through three routes, retaining thirty-two distinct identities after deduplication. Twenty have relevant work confirmed, while twelve await review. These are hypothetical quantities, not market-size evidence.

Report original records, distinct channels and confirmed relevance separately. Forty records should not become forty creator people, and twenty reviewed matches should not become a statement that only twenty suitable partners exist worldwide.

If more channels are discovered later, update the set and observation date. Do not imply that those accounts were created on the discovery day: research discovery and channel creation are different facts.

The next step might prioritize the twelve unreviewed objects or add a missing language route. Quantity then supports work planning instead of appearing to be an unsupported industry census. This also makes progress explainable to a stakeholder who wants to know why the list changed, without requiring the team to pretend that every change measures growth in the underlying platform.`),
s('不要从候选数量直接推算预算或结果','Do not turn candidate counts directly into budgets or outcomes',`名单中的频道可能尚未确认商务路径、档期或意愿。即便主题相关，也不等于能够购买同一种交付，更不能默认所有候选使用相同报价。

规划预算时，应根据实际范围与有效提案，而不是将研究数量乘一个想象中的统一费用。研究集合与采购承诺需要不同证据。

同样不能用频道数预测观看、销售或市场覆盖。多个频道可能共享观众，且每次作品的分发与回应都有条件；缺少数据时，保留不能确认的部分。

这不会降低发现工作的价值。一个清楚说明身份、相关性与缺口的集合，能帮助团队更快提出合适问题，并把采购讨论留给有范围的实际合作。`,
`Channels on the list may not yet have confirmed business routes, availability or interest. Subject relevance does not establish that the same deliverable is available everywhere, or that all candidates charge one fee.

Budget from actual scope and valid proposals rather than multiplying a research quantity by an imagined standard price. A research set and a purchasing commitment require different evidence.

Nor should channel count predict views, sales or market coverage. Channels may share audiences, and each piece has distribution and response conditions. Where information is missing, retain what cannot be established.

This does not diminish discovery work. A collection explaining identity, relevance and gaps helps the team ask appropriate questions sooner while reserving commercial discussions for actual bounded partnerships. The count becomes one description of the research process, useful for assigning follow-up and tracking coverage, rather than an unsupported shortcut to price, audience uniqueness or commercial return.`),
s('给频道总数一个诚实且有用的回答','Give the channel-count question an honest useful answer',`How many YouTube channels are there 的可靠回答应包括人口范围、来源、方法与日期。无法核验全部实时总量时，明确说明，不借用另一个单位填空。

对达人营销，把问题改成当前任务下找到了哪些可继续研究的内容身份，更容易产生可执行结果。保留规则与遗漏，后续团队就能更新，而不必重做不透明名单。

研究结论应写到证据能够支持的位置：已查看什么，尚需确认什么，下一步准备联系或补充哪里。不要把发现工具的可见范围当成世界边界。

这让 QuickKOL 的发现与研究工作保持实用主旨。平台规模帮助理解背景，具体创作者作品与合作条件帮助作决定，两者有联系，但不应互相代替。`,
`A reliable answer to how many YouTube channels are there should identify the population, source, method and date. When a universal real-time total cannot be verified, say so rather than borrowing another unit to fill the gap.

For creator marketing, asking which publishing identities deserve further research under the current assignment produces a more actionable result. Retain rules and omissions so later colleagues can update the set rather than recreate an opaque list.

Take the conclusion only as far as the evidence supports: what was reviewed, what needs confirmation and which contact or discovery route comes next. A tool's visible collection is not the boundary of the world.

This keeps QuickKOL discovery and research connected to practical work. Platform scale supplies background; specific creator work and partnership conditions support decisions. The two relate without replacing one another, and the final research record should make that distinction easy for the next person to understand and use.`)
],
links:[link('频道身份核验方法','channel-identity review method','youtube-channels-identity-scope-handoff'),link('YouTube 频道内容承诺指南','channel editorial-promise guide','youtube-channel-editorial-promise-brand-fit')],
figures:[{file:'youtube-channel-count-research-denominator-framework.svg',afterSection:5,alt:p('频道总体、发现记录与已核验候选的不同范围','Different scopes for the channel universe, discovered records and reviewed candidates'),caption:p('报告本次研究覆盖什么；不要把发现集合写成完整全球人口。','Report the coverage of this study without presenting the discovered set as a complete global population.')}],
table:{title:p('数量口径核对表','Count-definition check'),headers:[p('数量','Quantity'),p('先问','Ask first'),p('不要改写成','Do not rewrite as')],rows:[[p('视频','Videos'),p('累计还是新增','Cumulative or new?'),p('频道总数','All channels')],[p('搜索结果','Search results'),p('什么查询与限制','Which query and limits?'),p('完整普查','Complete census')],[p('数据库记录','Database records'),p('如何收录与去重','How included and deduplicated?'),p('全部创作者','All creator people')],[p('候选频道','Candidate channels'),p('本次纳入规则','Study inclusion rules?'),p('可直接采购人数','Immediately purchasable partners')],[p('已核验相关','Reviewed relevance'),p('看过什么作品','Which work was reviewed?'),p('保证合作结果','Guaranteed partnership result')]],note:p('编辑研究框架，不提供未经验证的实时全球频道总量。','Editorial research framework; no unverified real-time worldwide channel total is supplied.')},
tool:{title:p('为研究数量补齐定义','Define the research quantity'),intro:p('在把数量放入 Brief 之前核对。','Check before adding a quantity to the brief.'),items:[p('明确对象是频道、视频还是人。','Define channels, videos or people.'),p('写清来源与观察日期。','State source and observation date.'),p('保留纳入和排除条件。','Retain inclusion and exclusion conditions.'),p('按正确身份去重。','Deduplicate by the correct identity.'),p('区分未知与不相关。','Separate unknown from irrelevant.'),p('说明遗漏与下一步工作。','Explain omissions and next work.')]}
});
