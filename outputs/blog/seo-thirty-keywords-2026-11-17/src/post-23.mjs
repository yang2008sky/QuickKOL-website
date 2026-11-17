import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:23,
summary:p('Reddit 首页提供发现线索，不是统一达人榜单。区分当前信息流、原始社区与实际贡献，再决定品牌合作研究是否值得继续。','The Reddit front page offers discovery leads rather than a universal creator ranking. Separate the current feed, original community and actual contribution before further partnership research.'),
description:p('理解 Reddit front page 在达人营销研究中的用途：核对 2026 年信息流更新，返回原始讨论，并区分热门帖子、个人身份与合作能力。','Use the Reddit front page for scoped creator research: check 2026 feed changes, read the original discussion and distinguish post visibility from partnership fit.'),
coverAlt:p('编辑图形以不同层叠卡片表示信息流、社区与原始讨论','Editorial graphic using layered cards to represent feeds, communities and original discussions'),
answer:p('Reddit front page 是对首页内容的通俗说法，不是固定、人人相同的达人榜单。2026 年 11 月官方更新介绍 For You 与 Following 的上线过程，并说明 Popular 入口仍有实验变化。品牌可以从看到的内容发现问题或表达方式，但需要返回原始社区与讨论，确认作者贡献、时间和语境，再研究是否适合达人合作。一次热门帖不能证明作者愿意接单、拥有某种受众或能复制同样曝光。','Reddit front page is an informal description of homepage content, not a fixed creator ranking everyone sees. The official November 2026 update describes the rollout of For You and Following, with experiments affecting the Popular entry point. Brands can discover questions or expression through a feed, then return to the original community and discussion to verify contribution, date and context before researching partnership fit. One visible post does not establish commercial availability, audience characteristics or repeatable exposure.'),
sections:[
s('先记录看到的是什么信息流','Record which feed you are actually viewing',`Reddit 的 2026 年 11 月更新说明，For You 包含已加入社区与兴趣推荐，Following 只显示已加入社区内容；这轮上线从 10 月 27 日开始。部分命名和 Popular 的位置仍在实验。

因此研究记录需要说明时间、设备和实际入口，不把一张截图叫作整个 Reddit 的共同首页。也不假设另一个账号会看到完全相同的内容。

研究可以从一个有意思的解释开始，但结论应保留入口范围。“在本次信息流看到”比“Reddit 用户都在关注”准确，也更方便另一位研究者回到原始资料核验。`,
`Reddit’s November 2026 update describes For You as joined communities plus interest-related recommendations, and Following as joined communities only. The rollout began October 27, while some naming and Popular placement remain experimental.

Record the date, device and actual entry point instead of calling a screenshot the common homepage for all Reddit. Another account need not see identical content.

Research can begin with an interesting explanation while preserving the scope of discovery. Seen in this feed is more accurate than something all Reddit users care about, and it gives another researcher a route back to the original material. The observation remains useful without becoming a market-wide claim, particularly when the team's own interests or joined communities could have helped bring that item into view.`,['redditNov2026']),
s('分清 Popular 与旧版 r/all','Distinguish Popular from the older r/all route',`Reddit 的信息流区别指南把 Popular 描述为热门帖子流，并说明不同设备存在不同入口。该页较早的 Home 描述要结合 11 月更新阅读，不能覆盖更新后的变化。

Reddit 的 2026 年 4 月变更说明现代体验中的 r/all 链接转向 Home，同时旧版体验仍可访问 r/all。它不是所有用户当前都能在同一位置找到的统一选项。

品牌研究不需要为了证明内容重要而强行给它贴“全站首页”标签。保留实际链接与入口名称，说明是在 Popular、推荐或某个社区看到，已经能支持后续查看。`,
`Reddit’s feed-difference guide describes Popular as a stream of popular posts and distinguishes device-specific routes. Its earlier Home wording needs to be read alongside the November update rather than override a later change.

Reddit’s April 2026 changelog says r/all links in the modern experience redirect to Home while the old experience retains access. It is not a universal current option in an identical location for everyone.

Brand research does not need a whole-site front-page label to make an item worth reviewing. Retain the link and actual entry point, whether Popular, a recommendation or a community. That is enough to continue inspection without implying a precise level of platform-wide exposure or describing an older interface as a feature every present-day researcher can reproduce.`,['redditFeeds','redditAllApril']),
s('返回原帖再判断贡献','Return to the post before judging contribution',`信息流卡片只呈现部分语境。打开原帖，查看作者具体说了什么、是否链接其他来源、讨论怎样补充或质疑，避免把转载者当成原作者。

Reddit 社区语境指南说明社区与对话的重要性。本篇把这个原则用于首页发现：先追溯作品与讨论，再决定是否把某人加入达人研究清单。

记录贡献可以是解释、经验、演示或整理，不必把每位活跃用户都称作达人。若实际作者无法确认，先保留作品线索，不编写身份、商业经历或粉丝情况。`,
`A feed card carries only part of the original discussion context. Open the post to inspect what the author actually contributed, whether it links elsewhere and how discussion adds to or challenges it. Avoid treating a reposter as the original author.

The Reddit community-context guide explains why communities and conversation matter. Here that principle applies to feed discovery: trace the work and discussion before placing someone on a creator-research list.

Contribution may involve explanation, experience, demonstration or curation without every active user becoming an influencer. If authorship remains unclear, keep a work lead instead of inventing identity, commercial history or follower characteristics. This distinction helps the brand ask a relevant question later, rather than approach someone for a capability that belonged to the source they happened to share.`),
s('把社区问题转成品牌研究问题','Translate community questions into research questions',`一个高讨论帖子可能揭示观众难以理解的产品条件，但不能直接代表目标市场比例。先问哪些问题值得在达人 Brief 中解释，再核对它与品牌产品的实际关联。

例如讨论集中在收纳物品能否快速取出，品牌可以研究谁擅长连续动作演示。它不证明讨论者会购买，也不证明某位作者适合代表所有用户。

可以把原始问题、语境与拟验证内容并排记录。这样达人收到的是可解释任务，而不是“照着热门帖拍一条”。表达方式可以受启发，事实与创意仍需要独立确认。`,
`A much-discussed post can reveal a product condition people find hard to understand without representing its prevalence in the target market. Ask which question belongs in a creator brief, then check its actual relationship to the brand's product.

A discussion about retrieving stored objects might lead to research on continuous-action demonstrations. It does not establish purchase intent or qualify one author to represent every user.

Keep the original question, context and proposed verification together. The creator then receives an explainable assignment rather than a request to imitate a popular post. Expression can provide inspiration while facts and creative execution need independent confirmation. A useful brief identifies what the brand can substantiate and what the creator would actually need to experience before making a statement about the product.`),
s('用搜索补充首页线索','Expand through search instead of following only visibility',`Reddit 的搜索排序说明区分 Relevance、Hot、Top、New 和评论数量，并说明时间过滤。搜索目的不同，看到的顺序也可能不同，不宜把排序当成统一质量评分。

围绕具体问题搜索，可以发现较早但仍有解释价值的内容。记录搜索词、时间范围与排序，再阅读相关帖，而不是仅按最高互动挑合作对象。

热门内容也可能来自争议或新闻，不一定适合商品演示。让研究问题决定要找什么，再看作者是否有持续相关作品。搜索提供补充线索，无法直接替代本人确认合作能力。`,
`Reddit’s search-sorting guide distinguishes Relevance, Hot, Top, New and comment count, with time filters. Different search purposes can produce different orders; sorting is not a common quality score.

Searching around a specific question can find older work that still explains something useful. Record query, period and sort before reading relevant posts rather than selecting partners only through the highest visible interaction.

Popularity can reflect controversy or news rather than product-demonstration suitability. Let the research question determine the work needed, then examine whether an author has sustained relevant contributions. Search supplies additional leads without confirming the person's partnership capability. Comparing a few relevant examples can also reveal whether the useful feature was the author's explanation, a linked source, or the surrounding community's corrections rather than the visible vote total alone.`,['redditSorts']),
s('身份核验保留公开边界','Verify identity within public boundaries',`Reddit 用户名不自动对应其他平台同名账号，也不说明真实姓名、国籍或职业。只有本人公开建立的联系与适当确认，才支持跨平台身份判断。

不要为了合作线索挖掘私人信息。研究公开作品、作者提供的业务联系与实际合作路径，身份不明时保留未知。一个社区角色也不等于代表整个社区接商业合作。

如果需要联系，说明你看到了哪项公开贡献、希望讨论什么任务，让对方决定是否继续。不要把评论区当成反复投放邀约的位置，也不要求对方证明与任务无关的私人事项。`,
`A Reddit username does not automatically identify a same-named account elsewhere or establish a legal name, nationality or profession. Public connections made by the person and appropriate confirmation support cross-platform identity.

Do not dig for private information to develop a partnership lead. Research public work, a supplied business contact and the actual collaboration route, retaining uncertainty where necessary. A community role does not establish authority to accept commercial work for the whole community.

An inquiry should identify the public contribution and proposed task, allowing the person to decide whether to continue. Avoid turning a comment section into repeated outreach or asking for unrelated private details. A clearly bounded invitation also makes it easier for someone to explain that the work was a one-time contribution or that the relevant commercial contact belongs elsewhere.`),
s('合作进入讨论前先看当地规则','Read community rules before commercial participation',`品牌或受委托创作者如果计划参与某个社区，应读取该社区实际规则与版主说明。不能从首页出现一次就推断该社区接受推广，也不能保证版主会保留商业内容。

先区分研究、普通回应与计划中的合作发布。不同动作需要不同确认，品牌付费也不会取得社区的编辑控制权。

真实关系应清楚，内容要与讨论有关。若规则不适合本次发布，可以改用其他合适渠道，不需要把社区当成必须完成的曝光任务。尊重实际对话能帮助团队形成更准确的合作判断。`,
`If a brand or commissioned creator plans to participate in a community, read its actual rules and moderator guidance. Appearing in a feed does not mean the community accepts promotion, and no brand can guarantee moderators will retain commercial content.

Separate research, an ordinary response and a planned partnership post. They are different actions requiring different confirmation; payment does not confer editorial control over a community.

Keep the actual relationship clear and the contribution relevant. If the rules do not fit the planned publication, choose another appropriate channel rather than make that community a compulsory exposure target. Respecting the conversation supports a more accurate partnership decision. It also prevents a creator from being commissioned against an assumed placement promise that neither the creator nor the brand has authority to make.`),
s('用一个问题示例形成研究交接','Build a research handoff from one hypothetical question',`假设团队在推荐流看到关于旅行收纳的讨论。先记录入口与日期，回到原帖发现主要价值来自作者演示，而非帖子链接的商品本身。

研究者保留动作描述与相关作品，进一步核对本人公开业务联系，再拟定“解释取放过程”的邀请。没有观众地区资料，就不补写某国受众占比；没有合作确认，也不写成已签达人。

这是方法示例，不是实际曝光或销售结果。交接保留能验证的线索和仍需确认的内容，下一位负责人才能继续研究，不必接受一张无语境截图带来的全部假设。`,
`Suppose a team sees travel-storage discussion in a recommendation feed. It records the entry point and date, then finds the useful contribution is the author's demonstration rather than the linked product itself.

The researcher retains an action description and relevant work, checks a publicly supplied business contact and drafts an invitation to explain retrieval. Without audience-geography evidence, no country percentage is added; without agreement, the person is not marked signed.

This is a method example, not an exposure or sales result. A handoff preserves verifiable leads and open questions so the next owner can continue without accepting every assumption attached to a contextless screenshot. If the original contribution later disappears or cannot be verified, the team can retain a limited research note without presenting an inaccessible item as current evidence of the creator's work.`),
s('让首页线索回到达人任务','Bring the feed lead back to the creator assignment',`达人发现任务指南可以帮助从 Brief 出发研究作品、身份与接洽路径。Reddit 首页只是其中一个发现入口，不是达人排名、商业资质或合作结果的证明。

交付时区分看到了什么、追溯到什么、本人确认什么与仍未知什么。不要把互动数字直接写成受众、销售或真实支持人数。

Reddit front page 对达人营销最实用的作用，是让团队看到值得解释的问题和表达，再通过原始作品与实际合作确认决定下一步。保留语境，线索才有持续价值。`,
`The creator-discovery task guide helps research work, identity and contact routes from a brief. The Reddit front page is one discovery entry point rather than proof of ranking, commercial credentials or partnership results.

Distinguish what appeared, what was traced, what the person confirmed and what remains unknown. An interaction count does not independently become audience size, sales or a number of genuine supporters.

The practical value of the Reddit front page in influencer marketing is revealing a question or expression worth investigating, followed by original work and actual collaboration confirmation. Context makes the lead useful over time. A final recommendation should name the task the person might help with and the evidence still needed, allowing the brand to continue deliberately instead of treating a fleeting feed position as a complete creator-selection decision.`)
,s('比较不同时点时保留记录年龄','Preserve observation age when comparing sessions',`同一帖子在不同时间出现，不能直接证明其曝光上升或下降。入口、排序和账号可能改变，互动也有累积时间。团队需要相同问题下的可比较记录，而不是用两张截图补出趋势。

如果只是寻找演示方法，可以保留与任务有关的内容，不必追踪每分钟位置。若确实需要比较可见记录，则记录具体时间与范围，并把界面变化与内容变化分开。

结论应说明这次查看支持什么。没有完整覆盖，就不把漏看当成不存在；没有作者确认，就不把一次未出现解释为账号问题。`,
`A post appearing at different times does not independently prove its exposure rose or fell. Entry point, sorting and account context may change, while interactions have time to accumulate. A team needs comparable records for a defined question rather than derive a trend from two screenshots.

If the purpose is finding a demonstration method, retain relevant work without tracking minute-by-minute position. If visible records genuinely need comparison, preserve time and scope and separate interface changes from content changes.

The conclusion should state what this inspection supports. Without complete coverage, absence from a session is not proof that something does not exist; without confirmation, failure to encounter a post is not an account diagnosis. This keeps the research proportionate to the creator-selection task and prevents incidental feed movement from becoming an unsupported judgment about a person's reliability.`)
,s('商业贡献与社区认可分开描述','Separate commercial contribution from community endorsement',`如果某位作者后来接受品牌合作，应准确描述双方实际安排，不能把之前帖子的社区互动转成社区为该品牌背书。品牌付费也不会购买讨论者的立场。

达人可以提供解释或演示，但对方应能真实表达自己的体验与限制。品牌提供资料和审阅事实，不宜要求把所有异议删掉才算完成。

交付可以记录合作内容与实际观察，不把社区名称当作合作客户或品牌支持者。这样研究成果仍能支持商业任务，同时保留公开讨论与委托作品之间的区别。`,
`If an author later accepts a partnership, describe the actual arrangement rather than transform earlier community interaction into community endorsement of the brand. Payment does not purchase participants' positions.

A creator may provide explanation or demonstration while expressing actual experience and limitations. The brand supplies information and reviews facts without requiring every disagreement to disappear as a condition of completion.

A handoff can record commissioned content and observations without presenting a community name as a client or supporter. Research can therefore support a commercial task while retaining the distinction between public conversation and commissioned work. That also helps an approver assess the proposed claim: a useful creator explanation can stand on its own without relying on an unearned implication that a whole community approved the product or the partnership.`)
],
links:[link('Reddit 社区语境指南','Reddit community-context guide','what-is-reddit-brand-community-context'),link('达人发现任务指南','creator-discovery task guide','influencer-discovery-tool-brief-to-candidates')],
figures:[{file:'reddit-feed-research-scope.svg',afterSection:4,alt:p('信息流入口连接原始社区、作品与有限研究结论','Feed discovery connects original community, work and a bounded research conclusion'),caption:p('信息流提供线索，原始讨论提供语境。','A feed provides a lead; the original discussion provides context.')}],
table:{title:p('首页发现能说明什么','What feed discovery can establish'),headers:[p('记录','Record'),p('可支持','Can support'),p('仍需确认','Still needed')],rows:[[p('信息流卡片','Feed card'),p('本次看到的线索','A lead seen in this session'),p('原始讨论与时间','Original discussion and date')],[p('作者贡献','Author contribution'),p('具体解释或演示','Specific explanation or demonstration'),p('身份与持续相关作品','Identity and sustained relevant work')],[p('公开业务联系','Public business contact'),p('可讨论的接洽路径','A route for an inquiry'),p('本人意愿与任务范围','Willingness and task scope')],[p('热门互动','Visible interaction'),p('该帖当时的可见记录','Visible record for that post'),p('受众、业务结果与可复制性','Audience, business results and repeatability')]],note:p('不是平台曝光承诺或具名用户的商业评价。','Not a platform-exposure promise or a commercial assessment of a named user.')},
tool:{title:p('保留一条可交接的 Reddit 线索','Keep a handoff-ready Reddit lead'),intro:p('从看到内容到形成具体邀请。','Move from discovery to a specific inquiry.'),items:[p('记录实际信息流、日期与设备。','Record actual feed, date and device.'),p('打开原帖并阅读讨论。','Open the original post and discussion.'),p('区分原作者与转发贡献。','Distinguish original and shared contributions.'),p('把问题对应到品牌任务。','Connect the question to a brand task.'),p('使用本人公开业务联系。','Use a publicly supplied business contact.'),p('保留未知，不承诺首页曝光。','Retain uncertainty without promising front-page exposure.')]}
});
