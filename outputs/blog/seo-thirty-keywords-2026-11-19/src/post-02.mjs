import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:2,
summary:p('比较 YouTube 频道时，不只按标签和规模分类。先识别它持续为观众提供的内容承诺，再判断品牌任务能否自然进入具体节目。','Compare YouTube channels through the editorial promise they repeatedly fulfil, then decide whether a brand assignment fits a particular programme rather than only a category or audience total.'),
description:p('品牌如何研究 channels of YouTube：从频道承诺、节目样本、格式边界、账号家族与受众证据，判断具体达人合作是否成立。','Research channels of YouTube through recurring editorial promises, programme samples, format boundaries and audience evidence before proposing a creator partnership.'),
coverAlt:p('奶油色工作台上的蓝色、珊瑚色和黑色制作文件夹、相机与空白节目卡','Cobalt, coral and black production folders, a camera and blank programme cards on a cream work surface'),
answer:p('搜索 channels of YouTube 来寻找达人合作对象时，先问频道持续解决什么观众问题，而不是只按科技、生活或娱乐标签分组。频道承诺是本文的编辑分析概念：创作者在多个节目里反复提供、并有作品可以支持的价值。品牌要采购的是合适的具体贡献；频道规模、同名账号或一条热门视频，都不能单独完成这个判断。','When researching channels of YouTube for creator partnerships, ask which audience question a channel repeatedly serves rather than grouping it only under technology, lifestyle or entertainment. Editorial promise is an analytical concept used here: value repeatedly supplied across programmes and supported by the work. A brand is buying a suitable contribution. Channel scale, a matching name or one popular upload cannot make that decision alone.'),
sections:[
s('用一句话写出频道的持续承诺','Describe the recurring promise in one sentence',`先观察频道怎样向观众介绍自己，再用作品验证。可以写成“帮助某类观众理解某类问题，主要通过某种表达”，但不要把所有频道强行套成同一个格式。

科技频道可能解释产品选择，生活频道可能记录实践经验，娱乐频道可能提供某种共同观看体验。这些只是内容任务示例，不代表每个使用该标签的频道都具备相同能力。

把你写出的承诺标为研究判断，而不是创作者已经认可的定位。若频道介绍与近期节目不同，保留差异，后续联系时询问对方希望延续哪种方向。

好的描述足够具体，能帮助决定什么合作不适合。若一句话可以原样用于几十个互不相关频道，它多半仍是宽泛标签，还没有说明观众为什么会继续看这个人的作品。`,
`Observe how the channel introduces itself, then compare that description with the work. A useful sentence might identify the audience, recurring question and main mode of expression, without forcing every channel into an identical formula.

A technology channel might explain product choices, a lifestyle channel document practical experience and an entertainment channel provide a shared viewing occasion. These are content-task examples, not proof that every channel using a category has the same abilities.

Mark your description as a research judgement rather than a positioning statement the creator has accepted. If the channel introduction differs from recent programmes, retain the discrepancy and ask which direction they intend to continue when making contact.

A useful description is specific enough to exclude an unsuitable partnership. If the sentence could be copied unchanged onto dozens of unrelated channels, it probably remains a broad label. It has not yet explained why viewers return to this person's work, or how that recurring expectation would help the brand frame a respectful proposal.`),
s('从多条作品寻找持续价值','Look across several uploads for recurring value',`选择能说明近期方向的一组作品，而不是只挑最高观看。保留抽样日期、挑选理由和节目类型，让别人知道你看到了什么，也知道样本没有覆盖什么。

观察反复出现的解释方式：是否比较选择条件，是否展示过程，是否承认体验限制。单个精彩片段可以提供线索，但不足以证明这种能力会稳定出现在所有委托中。

也看内容之间的连接。后续节目是在回答新的相关问题，还是只重复一个曾经热门的形式？这是编辑判断，应通过具体作品说明，不能写成无依据的算法惩罚结论。

把证据写到对应任务旁。例如“作品中展示了如何解释步骤”，比“非常专业”更容易讨论；但曾经做过某种说明，不代表已经同意为品牌重复制作或交出素材许可。`,
`Select a set of work that helps explain the recent direction instead of only the most-viewed upload. Retain the sampling date, selection reason and programme types so another person understands what was reviewed and what the sample did not cover.

Look for recurring explanatory behaviour: comparing conditions, demonstrating a process or acknowledging limits of experience. One strong excerpt supplies a lead but cannot prove that an ability will appear consistently in every commission.

Examine connections between uploads too. Does the next programme answer another related question or merely repeat a formerly popular form? That is an editorial judgement to illustrate with work, not an unsupported conclusion about algorithmic punishment.

Place evidence beside the assignment it supports. The work shows a clear explanation of steps is more discussable than highly professional. Past performance of an explanation still does not mean the creator has agreed to repeat it for a brand or grant rights to existing footage. Research identifies a possible fit; the commercial conversation establishes whether that fit can become an assignment.`),
s('区分频道、节目与播放列表','Distinguish the channel, programme and playlist',`YouTube Data API 的频道定义把频道作为具有独立 ID 的资源。团队核对对象时，应保存实际频道地址与身份，而不只依靠相似显示名。

频道内部可能有不同节目和播放列表，它们不一定共享相同制作要求。长篇演示、短片摘要和直播讨论，即使来自同一个人，也需要分别研究表达与交付。

品牌提案应指出具体希望讨论的节目或内容形式。不要因为频道某个部分适合，就默认整个目录、全部主持人或所有语言版本都可采购。

也不要反过来把一个播放列表当成独立创作者主体。先确认谁负责内容、谁能够讨论合作，以及这次需要的作品范围，才能把研究线索交给合适的人继续处理。`,
`YouTube Data API’s channel definition treats a channel as a resource with its own identifier. Retain the actual channel URL and identity when checking the subject rather than relying on a similar display name.

A channel can contain different programmes and playlists that do not share identical production requirements. A long demonstration, short excerpt and live discussion from the same person need separate research into expression and delivery.

The brand proposal should identify the programme or form it wants to discuss. Suitability in one part of the channel does not make the whole catalogue, every host or all language versions available for purchase.

Conversely, a playlist should not be treated automatically as an independent creator business. Establish who makes the work, who can discuss a partnership and which assets are needed before handing the lead to the next operator. This prevents a clearly identified channel from being mistaken for a fully confirmed commercial unit and gives the creator a concrete request to consider.`,['ytChannels']),
s('同一品牌的频道家族不能直接合并','Do not merge a channel family by appearance',`有些品牌或创作者拥有多个频道。视觉相似、名称相关或互相推荐，可以提示研究关系，但不能自动证明相同团队、相同受众或共同商业权限。

频道身份交接方法帮助记录各个对象。今天的任务还要进一步区分每个频道承诺什么，避免把主频道的内容判断直接复制到其他节目上。

若确实准备跨频道合作，就分别写出每个频道的任务与需要确认的负责人。涉及共同素材、不同语言或额外发布时，也分别讨论实际工作，不靠一个总称涵盖所有义务。

跨频道数字更不能直接相加成独立人数。同一观众可能观看多个频道；没有去重依据时，保留各自规模与观察时期，就能提供真实背景，而不需要制造一个看起来更大的总受众。`,
`Some brands or creators operate several channels. Similar design, related names or cross-recommendations can suggest a relationship worth checking without establishing the same team, audience or commercial permissions.

The channel-identity handoff method helps record each subject. Today's task goes further by distinguishing what each channel promises, so a judgement about the main channel is not copied automatically onto another programme.

For a proposed cross-channel partnership, identify the task and confirming owner for each channel. Shared assets, different languages and additional publications need discussion as actual work rather than being hidden inside one umbrella label.

Cross-channel counts also should not be added and called independent people. A viewer can watch several channels. Without deduplication evidence, retaining each scale figure and period provides honest context without manufacturing a larger total audience. The resulting shortlist may look less simple, but it lets the buyer understand which programme contributes what and which parts of the proposal are still assumptions.`),
s('用受众资料核对承诺与观看','Check the promise against available viewing evidence',`YouTube 的受众说明提供观众关注的其他频道、内容与格式等资料，并对不同报告给出相应时期。品牌可以在获准范围内提出与任务有关的请求。

这些资料不证明每位观众都具有某种购买意图，也不让品牌从公开评论猜测私人身份。观察到的主题兴趣，与已核验的市场、年龄或商业结果仍是不同信息。

达人媒体包提案方法帮助限定资料用途。请求时说清拟讨论的节目、地区和需要回答的问题，而不是笼统要求“全部后台”。

如果资料无法取得，就保留不确定性。作品可以支持表达能力判断，受众证据可以支持另一个范围的匹配判断，两者不应因为某一项缺失就被混写成同一种保证。`,
`YouTube’s audience guide describes information about other channels, content and formats viewers watch, with periods specific to the reports. A brand can request task-relevant information within an authorized scope.

Such information does not establish purchase intent for every viewer or justify guessing private identities from public comments. Observed topic interest remains different from verified market, age or commercial outcomes.

The creator-media-kit proposal method helps bound the use of supplied material. State the proposed programme, market and question rather than requesting all backend information.

If information cannot be obtained, retain the uncertainty. Work can support a judgement about expression while audience evidence supports a differently scoped fit judgement. They should not become the same guarantee because one is missing. A useful shortlist states which conclusion relies on observable content and which requires additional evidence, allowing the buyer to consider a bounded pilot without pretending the remaining audience questions have already been answered.`,['ytAudience']),
s('商业内容也要符合频道承诺','Keep commercial work within the channel promise',`品牌进入节目时，先说明产品在该问题里承担什么角色。可以是体验对象、解释材料或合作背景，不必每次都把原节目改造成完整销售演讲。

FTC 的达人披露指南在美国语境下要求清楚说明重要商业关系，也强调体验与产品说法应真实、有依据。自然融入内容，不等于让合作关系变得难以看见。

让创作者保留表达判断，品牌确认产品事实与实际任务。不要要求对方宣称未发生的体验，也不要把频道一贯语气当成无需审阅事实的理由。

如果拟购内容与频道承诺差距太大，可以调整任务或另找合适对象。用更高费用强行填补匹配问题，不会自动改变观众对节目的期待，也不能证明合作一定有商业效果。`,
`When the brand enters a programme, explain the product's role in its question. It might be the object of experience, material for an explanation or partnership context; the original format need not become a complete sales presentation every time.

FTC’s influencer-disclosure guide, in its United States context, calls for clear material-relationship disclosure and truthful, supported experience and product statements. Natural integration should not make the commercial relationship difficult to see.

Let the creator retain expressive judgement while the brand confirms product facts and the actual assignment. Do not request an experience that did not occur or use the channel's familiar voice as a reason to skip factual review.

If the proposed work is far from the channel promise, revise the task or consider another candidate. A larger fee cannot automatically change audience expectations or establish commercial effect. The negotiation can instead ask what contribution the creator believes they can make accurately and whether that contribution still answers the brand's original need.`,['ftc']),
s('也记录不适合的证据与未知','Retain counterexamples and unknowns',`研究者容易只留下支持自己选择的片段。也保留与拟购任务不一致的作品、尚未确认的条件，以及样本是否只覆盖某一种形式。

例如，一个频道能把概念讲得清楚，却未必适合需要现场演示的任务；擅长长节目的人，也不自动具备同样清晰的短片制作。这里不是给创作者贴上能力缺陷，而是在限定当前证据。

把未知写成问题，联系时由对方说明。不要自行补成否定事实，也不需要用无关私人资料解释某项尚未核验的商业条件。

候选表中可以同时出现“内容很适合”与“某项制作条件待确认”。这比一个没有依据的总分更能帮助负责人决定，下一步应该继续讨论、缩小任务，还是选择其他合作方式。`,
`Researchers can be tempted to retain only excerpts supporting their preferred choice. Keep counterexamples, unconfirmed conditions and whether the sample covers only one form.

A channel that explains concepts clearly may not suit a task requiring a live physical demonstration. Someone skilled in long programmes does not automatically supply equally clear short-form production. This is not a label of personal deficiency; it bounds the evidence currently available.

Turn unknowns into questions for the creator rather than negative facts invented by the researcher. Unrelated private information is not needed to explain a commercial condition that simply remains unverified.

A candidate record can say both strong editorial fit and production condition to confirm. That helps the owner choose a discussion, narrower assignment or alternative arrangement more effectively than an unsupported total score. It also allows a creator to supply relevant examples the first sample missed, improving the research without pretending that the original observation was a complete account of their abilities.`),
s('用假设科技 Brief 演练选择','Apply the method to a hypothetical technology brief',`假设品牌需要解释一种新设备适用于哪些工作情形。团队研究三个频道：一个擅长长篇条件比较，一个主要制作娱乐挑战，一个持续记录专业使用过程。

不能仅凭标签或订阅数决定。先写拟购任务，是解释选择条件、展示真实操作，还是让更多相关人注意到概念；不同任务可能对应不同贡献。

随后保存具体作品证据，核对节目与受众资料，再讨论体验、制作和发布范围。没有确认某个频道的参与，就不把它写成已选合作方。

这个例子没有真实频道评分或结果。它说明 channels of YouTube 的研究可以从广泛分类走向明确提案，而不是把某个频道拥有大量关注，直接变成适合所有品牌的结论。`,
`Imagine a brand needing to explain the working situations suited to a new device. The team reviews three channels: one strong in extended conditional comparisons, one centred on entertainment challenges and one documenting professional practice.

Category labels or subscriber totals cannot decide the purchase alone. Define whether the assignment explains selection conditions, demonstrates actual operation or brings a concept to relevant people's attention. Different tasks may call for different contributions.

Retain work evidence, check programme and audience information, then discuss experience, production and publishing scope. Until participation is confirmed, a channel should not be recorded as an appointed partner.

This example contains no real channel scores or outcomes. It shows how researching channels of YouTube can move from broad categories to a concrete proposal rather than turning large attention into suitability for every brand. The buyer can also choose to commission complementary roles, provided each role is justified and the extra complexity serves the task rather than merely making the roster look more impressive.`),
s('交接一份可以继续讨论的选择','Hand over a choice that can become a discussion',`最终记录应包括频道身份、内容承诺、支持作品、拟购节目、资料范围和待确认条件。写清下一步联系要问什么，不只发出一个账号链接。

如果研究日期之后频道方向变化，就在新的提案前复核，不把旧样本当作永久说明。已经确认的事实与当时的编辑判断也应分开保存。

QuickKOL 可帮助品牌理解 Brief、发现相关达人并研究作品与联系路径；这些工作不会替代创作者对具体任务的接受，也不能替代数据与许可核验。

好的频道研究会让合作讨论更具体：品牌知道希望得到什么，创作者知道为什么被联系，双方也能看见哪些事情还未决定。这才是从频道名单走向可执行达人合作的进展。`,
`The final record should identify the channel, editorial promise, supporting work, proposed programme, information scope and open conditions. State what the next outreach should ask rather than forwarding only an account link.

If the channel direction changes after the review date, revisit the sample before a new proposal. Older work is not a permanent description, and confirmed facts should remain distinguishable from the editorial judgement made at that time.

QuickKOL can help a brand interpret a brief, discover relevant creators and research work and contact routes. That does not replace the creator's acceptance of an assignment or verification of data and permissions.

Good channel research makes the discussion more specific: the brand understands the contribution it wants, the creator understands why they were approached and both see what remains undecided. That is progress from a list to an executable creator partnership. Preserve the reasoning with the shortlist so a colleague can continue the conversation without recreating the research or presenting an unconfirmed idea as an agreed commercial commitment.`)
],
links:[link('频道身份交接方法','channel-identity handoff method','youtube-channels-identity-scope-handoff'),link('达人媒体包提案方法','creator-media-kit proposal method','media-kits-creator-proposal-version-fit')],
figures:[{file:'youtube-channel-editorial-promise-brand-fit-framework.svg',afterSection:3,alt:p('频道承诺、具体节目和合作任务分开核对的三层框架','Three layers separately check channel promise, specific programme and partnership task'),caption:p('频道适合某个主题，不代表全部节目与发布范围都已确认。','Topic fit at channel level does not confirm every programme or publication scope.')}],
table:{title:p('频道承诺与合作任务的比较','Compare channel promises with partnership tasks'),headers:[p('维度','Dimension'),p('研究证据','Research evidence'),p('后续确认','Next confirmation')],rows:[[p('持续承诺','Recurring promise'),p('多条相关作品','Several relevant uploads'),p('创作者拟延续方向','Creator’s intended direction')],[p('具体形式','Specific form'),p('演示、短片或讨论样本','Demonstration, short or discussion samples'),p('实际制作范围','Actual production scope')],[p('频道家族','Channel family'),p('分别确认的身份','Separately confirmed identities'),p('各频道负责人','Owner for each channel')],[p('受众匹配','Audience fit'),p('获准资料及其时期','Authorized information and period'),p('未取得的范围','Information not obtained')],[p('商业表达','Commercial expression'),p('产品角色与真实体验','Product role and actual experience'),p('披露、交付与许可','Disclosure, delivery and rights')]],note:p('编辑研究方法，不是已确认合作、实时排名或独立受众总量。','Editorial research method, not a confirmed partnership, live ranking or deduplicated audience total.')},
tool:{title:p('联系频道前整理这些依据','Prepare this evidence before outreach'),intro:p('让提案从内容事实出发。','Build the proposal from content evidence.'),items:[p('保存真实频道身份与研究日期。','Retain actual channel identity and review date.'),p('用一句话描述持续内容承诺。','Describe the recurring editorial promise.'),p('挑选能支持任务的作品与反例。','Select supporting work and counterexamples.'),p('明确拟讨论的节目与形式。','Identify the programme and form to discuss.'),p('分开记录受众证据与未知。','Separate audience evidence and unknowns.'),p('提出具体贡献，不预设对方已接受。','Propose a contribution without assuming acceptance.')]}
});
