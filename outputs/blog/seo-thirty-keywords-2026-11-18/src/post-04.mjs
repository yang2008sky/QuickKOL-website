import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:4,
summary:p('查找 Amazon 已关注对象时，先区分购物创作者、品牌与 Amazon Music，再把实际找到的公开作品用于达人研究，不把私人关注记录当成完整合作名单。','When checking Amazon follows, distinguish shopping creators, brands and Amazon Music, then use verified public work for creator research rather than treating a personal following record as a complete partner list.'),
description:p('How to see who you follow on Amazon：核对账户、服务与当前可见入口，区分创作者和品牌，再整理能继续核验的达人研究记录。','Learn how to see who you follow on Amazon by checking account, service and available controls, distinguishing creators from brands and preserving research context.'),
coverAlt:p('研究者在桌面上比较厨房和手作创作者的照片，旁边有空白来源卡、笔记本与背面朝上的手机','A researcher compares kitchen and craft creator photographs beside blank source cards, a notebook and a face-down phone'),
answer:p('要查看自己在 Amazon 关注谁，先回到当时使用的账户、站点与服务，再查看当前个人资料或账户中实际提供的关注入口。如果购物账户没有显示列表，不能用 Amazon Music 的关注名单代替，也不能从推荐商品推断关注。本文没有核验一个适用于所有购物账户的固定菜单路径；需要时使用当前账户内帮助确认。品牌研究可以从找到的创作者主页继续，但个人关注状态不是受众、合作关系或适合性的证明。','To see who you follow on Amazon, return to the account, marketplace and service used originally, then inspect the following controls actually offered in its current profile or account area. If a shopping account has no visible list, an Amazon Music list is not a substitute, and recommendations do not establish following. This article has not verified one fixed menu path for every shopping account; use current account help where needed. Brands can continue through a verified creator page, but a personal follow is not audience, partnership or fit evidence.'),
sections:[
s('先确认关注发生在哪个账户','Identify the account used for the follow',`同一个人可能在不同设备、站点或服务中查看 Amazon。查询前先确认当前登录的是当时使用的账户，而不是因为名字或头像相似就默认一致。

只查看自己或已经获准处理的账户。品牌研究通常不需要同事交出私人购物记录；如果需要分享候选线索，提供相关公开作品和链接即可。

把任务写清：你是在找回一位曾关注的创作者，还是想整理自己可见的一组关注对象？前者可以从具体主页继续，后者需要实际可见的列表，不能靠搜索结果补成全部。

记录账户背景时，只需项目相关的站点、服务与观察时间，不保留登录凭据或无关购买内容。这样的记录足以帮助团队理解查询范围，也不会让后续达人研究依赖某个人持续打开私人账号。`,
`One person may use different devices, marketplaces or services. Before looking, establish that the current account is the one originally used instead of assuming a matching name or picture proves it.

Inspect your own account or one you are authorized to handle. Brand research generally does not need a colleague's private shopping history; relevant public work and links are enough for sharing a candidate lead.

Define the task: recovering one previously followed creator differs from reviewing a visible set of follows. The first can continue through a specific page; the second needs an actual list rather than search results assembled into an apparently complete set.

For project context, retain marketplace, service and observation time without credentials or unrelated purchases. This is enough for another researcher to understand scope without making the whole creator-selection process depend on one person's continuing access to a private account. It also prevents an account mismatch from being misreported as a creator disappearing or an earlier follow having been removed.`),
s('区分创作者、品牌和音乐资料','Distinguish creators, brands and music profiles',`Amazon 的创作者项目说明介绍创作者可以建立带专用地址的推荐页面。这种页面服务作品和商品推荐，不应与商家品牌页面自动视为同一对象。

Amazon 的 2021 年品牌关注公告讲的是当年美国 Brand Follow，包括当时不同购物入口。这是历史背景，不是今天所有入口和菜单都保持相同的保证，也不提供创作者完整关注列表的当前步骤。

Amazon Music 的个人资料说明则明确讨论音乐服务的个人资料、关注和播放列表。即使在音乐资料找到 Following，也不能由此回答购物创作者关注情况。

因此，每条结果先记录对象类型。品牌、创作者和音乐个人资料可以都有有价值内容，但对达人合作研究提出的问题不同。把相似的关注字样当成同一功能，容易让后续记录失去实际含义。`,
`Amazon’s influencer-program guide describes creators establishing a recommendation page with a dedicated address. Such a page supports work and product recommendations and should not automatically be treated as a merchant's brand page.

Amazon’s 2021 Brand Follow announcement concerns the US feature at that time, including shopping entry points then available. It is historical context, not a guarantee that every current surface and menu is unchanged, nor current instructions for a complete creator-following list.

Amazon Music’s profile guide separately describes music profiles, follows and playlists. Finding Following in that service does not answer the shopping-creator question.

Record object type before interpreting an entry. Brands, creators and music profiles can all offer useful material while answering different partnership-research questions. Treating similar follow wording as one function removes meaning from the record. A simple classification allows the next owner to understand whether the lead concerns a creator's original work, a brand destination or a separate service profile before investing further research.`,['amazonProgram','amazonBrand2021','amazonMusic']),
s('按当前实际入口查看，不套旧截图','Use the available controls instead of an old screenshot',`回到正确服务后，查看当前个人资料或账户区域是否实际提供关注入口。若有，打开它并核对显示对象；若没有，不把一篇旧教程中的按钮当成自己一定也应该看到的功能。

本次公开资料没有建立一个适用于所有购物账户的完整统一路径，因此这里不编写固定点击顺序。账户内帮助或官方支持可以确认当前服务实际提供什么，而不是由品牌研究者推断。

如果你已经有某位创作者的真实主页，可以查看当前页面可见的状态，但状态仍只属于这次查看。不要从一个按钮截图推导全部历史关注，也不把页面推荐或购买记录当成同一证据。

查询结束留下能复核的结论：找到了哪些公开入口，什么状态可见，哪些无法确认。一个有限但真实的结果，比强行拼出一份表面完整的名单更便于继续工作。`,
`In the correct service, inspect whether the current profile or account area actually offers a following route. If available, open it and check the objects shown. If not, an older tutorial's button is not proof it must appear for you.

The public material reviewed here does not establish one complete path for every shopping account, so no fixed click sequence is invented. Account help or official support can establish what the present service offers instead of a brand researcher inferring it.

If you already have a verified creator page, inspect any currently visible status while keeping it scoped to this observation. One button does not establish every historical follow; recommendations and purchase records are different evidence.

Retain a checkable conclusion: public routes found, visible status and unresolved items. A limited true result is more useful than an apparently complete invented list. It allows the researcher to move into relevant work without delaying the whole assignment until a personal account exposes information the public documentation has not promised it will provide.`),
s('为找到的创作者保留正确身份','Keep the identity of a creator you find',`一条记录可以包括显示名称、实际主页地址、来源和相关作品。名称相似不能单独确认同一个人，品牌 Store 与创作者页面也不能只凭头像混在一起。

Amazon 创作者路径指南帮助区分推荐页面和品牌合作环节。这里的查询结果只是一个研究入口，不说明该人已适合本次 Brief 或愿意接受邀请。

如果主页地址来自创作者自己公开的渠道，保留这个来源关系。若只是一个搜索结果或二次转发，继续核验，不替未知部分写入真实身份或商业联系。

候选记录可以很简短，但应让另一位研究者回到同一作品。同时记录来源核验日期，以及该链接支持的具体作品。页面以后变化时，团队可以区分入口过期与作品判断变化。这样后续讨论围绕实际贡献，而不是围绕“我以前好像关注过”这一句无法核对的印象。`,
`An entry can include display name, actual page URL, source and relevant work. Similar names alone do not identify one person, and a brand Store should not be mixed with a creator page through a matching picture.

The Amazon creator-route guide distinguishes recommendation pages and partnership stages. A lookup result is a research entry point, not confirmation of fit for this brief or willingness to accept an invitation.

If a page comes from a creator-owned public channel, retain that connection. A search result or repost needs further checking; do not fill identity or business-contact gaps with guesses.

A candidate record can be short while still letting another researcher return to the same work. Discussion then concerns contribution rather than an unverifiable impression of having followed someone before. Record when the source link was checked and which work it supports. If that page changes later, the team can distinguish an outdated route from a changed assessment. Keeping a source relationship also helps when a creator uses different names across services, allowing the team to confirm the connection instead of assuming matching spelling is necessary or sufficient.`),
s('个人关注只是研究起点','A personal follow is a starting point for research',`你可能因为某个内容有趣而关注，不代表创作者适合任何品牌任务。回到具体 Brief，检查作品是否涉及需要的产品、场景、解释方式或出镜贡献。

达人名单工作流帮助把线索变成相关候选。这里可以从已找到的主页开始，记录实际能看到的作品与仍需讨论的条件，不把个人喜好当成合作结论。

例如你长期关注一个家居创作者，但本次任务需要清楚演示器具操作。需要研究其是否有相关作品，而不是因为已经熟悉这个名字就省略判断。

关注状态也不说明创作者受众的地区、购买能力或对品牌的支持。那些问题需要合适资料和实际确认，不能由自己的一个关注动作代替。`,
`Following someone because their content is interesting does not qualify them for every brand assignment. Return to the brief and inspect relevant products, settings, explanation and on-camera contribution.

The creator-shortlist workflow turns leads into relevant candidates. Start with the page found, retaining visible work and conditions to discuss instead of personal preference becoming a partnership conclusion.

You may have followed a home creator for years while the assignment requires a clear equipment demonstration. Examine relevant work rather than omit assessment because the name feels familiar.

Following also does not establish audience geography, purchasing ability or support for the brand. Those questions need appropriate evidence and confirmation rather than your own action. The original follow can still be valuable as a memory aid, provided the next recommendation explains the actual work supporting it and makes the remaining inquiry clear to the person responsible for selecting partners.`),
s('分别记录找到、确认和待处理','Record found, confirmed and pending separately',`找到主页、确认身份、核对关注与决定接洽，是不同工作。可以分别标注，避免一个“已找到”让团队以为全部条件都完成。

若只确认主页存在，但无法查看关注列表，就保留这个具体结果，不写成未关注或已经取消。未知不是零，也不应由后续表格格式强迫改成明确答案。

团队可以先继续研究公开作品，等待必要信息再做后续决定。并不是所有合作筛选都必须知道研究者本人的历史关注状态，实际任务可能只需要一个可靠入口。

给每个待处理事项安排下一步，例如核对来源、请账户持有人自行查看，或向当前服务帮助确认。避免只写失败，却没有说明哪一项还可以继续。`,
`Finding a page, confirming identity, checking follow status and choosing to contact are different tasks. Record them separately so found does not imply every condition is complete.

If the page is confirmed but the following list is unavailable, retain that result instead of marking not followed or unfollowed. An unknown is not zero and a spreadsheet format should not force certainty.

Continue public-work research while necessary information is pending. Not every partnership decision requires the researcher's historical follow status; a reliable entry point may be sufficient for the actual assignment.

Give pending items a next action, such as checking a source, asking the account holder to inspect their own controls or using current service help. Failure alone does not explain what can continue. A scoped note keeps the team moving without turning an unavailable personal-account feature into a reason to invent data or abandon relevant creator work already found.`),
s('用三个不同结果整理一次查询','Organize three hypothetical lookup results',`假设一次查询找到一个家居创作者页面、一家品牌 Store，以及一个音乐资料中的关注条目。三者分别记录，不合计为三位达人。

家居创作者可以继续看作品；品牌 Store 可以作为商品与品牌入口；音乐资料只说明该服务里的对象，需要与购物研究分开。即使名字相似，也不能直接跨服务连接身份。

如果本次需要达人解释收纳方法，研究者选择相关创作者作品继续，而不是从全部结果里按任意顺序发邀请。没有合适作品，就保留待研究。

这个假设没有真实账户结果。它展示一次查询怎样形成有用而有限的交接，让下一位负责人知道每条记录是什么、为什么相关，以及哪些状态尚未确认。`,
`Suppose a lookup finds a home-creator page, a brand Store and a follow entry in a music profile. Record them separately rather than count three influencers.

The creator page can lead to work research; the Store can supply a product and brand destination; the music entry concerns that service and remains separate from shopping research. Similar names do not independently connect identities across services.

For an organizer-explanation assignment, continue through relevant creator work rather than send invitations to every result in arbitrary order. If suitable work is absent, retain the research question.

This hypothetical contains no real account finding. It shows how a lookup becomes a useful, limited handoff with object type, relevance and unconfirmed status. A team can use the creator lead without misdescribing the other entries, and the researcher can explain why a result was retained as background rather than promoted into a confirmed candidate.`),
s('共享公开线索，不共享整份私人历史','Share public leads rather than a private history',`当团队需要继续研究时，交付公开主页、相关作品、来源与任务即可。没有必要把个人账户截图中的其他关注、订单或资料一并传播。

如果一次截图确实用于核对状态，只保留与任务有关的部分，说明时间与范围。它不是对所有人长期有效的完整证明，也不需要成为公开博客案例。

研究负责人可以建立独立项目清单，不依赖某个同事的私人关注列表持续维护。这个清单记录本项目的候选和判断，不冒充 Amazon 导出的全部关注。

交接说明谁负责下一次作品核验或商务询问。关注查询帮助找回线索，实际合作仍由有关创作者与品牌共同确认，不能从私人历史自动转成已经授权接洽。`,
`For continued research, share the public page, relevant work, source and task. Unrelated follows, orders or account information need not travel with the lead.

If a screenshot genuinely supports status checking, retain only the relevant part and its date and scope. It is not a complete permanent proof for everyone or material that needs to become a public blog case.

Maintain a separate project list rather than depend on a colleague's private following history for ongoing work. That list records project candidates and decisions without pretending to be a complete Amazon export.

Assign the next work check or business inquiry. A follow lookup recovers a lead while the creator and brand confirm collaboration; personal history does not automatically become permission for every subsequent contact or use. This gives a project an independent, usable record and lets a researcher hand it off without continuing to expose their account for routine questions.`),
s('后续变化只更新对应结论','Update only the conclusion affected by a change',`以后再次查看时，页面、名称或入口可能不同。先确认实际变化，再更新对应记录，不因为一次看不到就推断创作者退出、取消合作或发生账号问题。

如果只是为了找回某位创作者，保留已确认公开入口与项目相关作品，通常比反复追查个人关注状态更有用。需要完整账户查询时，仍由实际账户持有人按当前服务确认。

How to see who you follow on Amazon 的品牌侧答案，应保持两个层次：账户里实际能查看什么，以及找到的公开对象能为达人研究提供什么。清楚区分，结果才不会越过证据。

最终给出能执行的下一步，而不是一份没有范围的名单：继续研究相关作品、确认身份关系，或完成具体邀请。`,
`On another visit, the page, name or entry point may differ. Establish the change before updating the corresponding record; one unavailable view does not prove retirement, a cancelled partnership or an account problem.

For recovering a particular creator, retain the confirmed public route and relevant work instead of repeatedly investigating personal follow status. A complete account query still belongs with the account holder and current service controls.

The brand-side answer to how to see who you follow on Amazon has two layers: what the account actually exposes and what a public object contributes to creator research. Keeping them separate prevents conclusions exceeding evidence.

End with an executable next step rather than an unscoped list: research relevant work, confirm an identity connection or prepare a specific inquiry. A useful closing record makes clear which of these actions is appropriate now and which remains dependent on information that has not yet been verified.`)
],
links:[link('Amazon 创作者路径指南','Amazon creator-route guide','amazon-storefront-creator-brand-program-routes'),link('达人名单工作流','creator-shortlist workflow','creator-shortlist-workflow')],
figures:[{file:'amazon-follow-object-context.svg',afterSection:4,alt:p('Amazon 查询先区分当前账户、关注对象与可见入口','An Amazon lookup separates current account, followed object and available surface'),caption:p('先知道正在查看什么，再把公开线索交给达人研究。','Identify what is being viewed before handing a public lead to creator research.')}],
table:{title:p('不同关注对象支持不同问题','Different followed objects answer different questions'),headers:[p('对象','Object'),p('可以继续做什么','Useful next action'),p('不能直接说明','Does not establish')],rows:[[p('创作者页面','Creator page'),p('研究公开作品与相关贡献','Research public work and contribution'),p('合作已确认','A confirmed partnership')],[p('品牌 Store','Brand Store'),p('查看商品与品牌入口','Inspect product and brand destination'),p('某位达人的个人关注','A personal follow of a creator')],[p('音乐资料','Music profile'),p('在对应服务理解关注','Interpret follows in that service'),p('购物创作者关注名单','Shopping-creator following list')],[p('入口不可见','Unavailable control'),p('保留未知并核对当前帮助','Retain uncertainty and check current help'),p('真实零或取消关注','A true zero or an unfollow')]],note:p('研究框架；没有宣称所有购物账户都提供同一完整列表或菜单。','Research framework; no claim that all shopping accounts offer the same complete list or menus.')},
tool:{title:p('把查询结果交接之前','Before handing off lookup results'),intro:p('让每条记录保留正确对象和范围。','Keep the right object and scope with each record.'),items:[p('确认实际账户、站点与服务。','Confirm account, marketplace and service.'),p('区分创作者、品牌和音乐资料。','Separate creators, brands and music profiles.'),p('只记录当前实际可见状态。','Record only the currently visible status.'),p('保存公开来源与相关作品。','Retain public sources and relevant work.'),p('把个人记录与项目清单分开。','Separate personal records and project lists.'),p('明确未知与下一项研究。','Identify unknowns and the next research action.')]}
});
