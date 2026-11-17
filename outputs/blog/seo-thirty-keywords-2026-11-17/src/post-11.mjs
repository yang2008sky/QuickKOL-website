import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:11,
summary:p('用 Pinterest、Raindrop.io 与 Flipboard 整理达人作品与行业线索，保留原始来源、任务理由和使用条件，把收藏变成可继续研究的资料库。','Use Pinterest, Raindrop.io and Flipboard to organize creator work and industry leads, retaining original sources, task relevance and use conditions for further research.'),
description:p('Social bookmarking sites 如何服务达人营销研究：比较三个收藏场景，记录原始作品、上下文与权限，不把收藏或公开可见当作商业复用许可。','Social bookmarking sites for influencer research: compare three curation tasks, preserve original work and context, and distinguish saved access from permission for commercial reuse.'),
coverAlt:p('桌面上的达人作品照片、相机和空白参考卡片展示创意资料整理','Creator work photographs, a camera and blank reference cards on a desk illustrate organizing creative references'),
answer:p('Social bookmarking sites 可以帮助品牌整理达人作品、视觉参考与行业线索。Pinterest 适合研究可视化想法，Raindrop.io 用集合组织链接，Flipboard 用杂志收藏和分享内容；实际选择应围绕研究任务与访问安排。每条记录至少保留原始地址、作者或发布者、为什么与 Brief 有关，以及仍需核对的使用条件。收藏一个链接不是认可作品全部说法，也不是获得素材许可。资料库应帮助下一位负责人继续研究某项达人贡献，而不只是积累更多网址。','Social bookmarking sites can help brands organize creator work, visual references and industry leads. Pinterest supports visual discovery, Raindrop.io organizes links in collections, and Flipboard collects and shares content through magazines; choose around the research task and access arrangement. Retain the original address, author or publisher, relevance to the brief and use conditions still to verify. Saving a link is neither approval of every claim nor permission to reuse the asset. A useful library helps another owner research a particular creator contribution instead of simply accumulating URLs.'),
sections:[
s('先定义收藏支持的达人任务','Define the creator task behind the collection',`找镜头表达、研究某类达人作品与准备品牌行业背景，需要不同记录。不要先建一个很大的灵感库，再让所有人从里面寻找本来没有说明的问题。收藏的起点应是 Brief 中的任务。

例如品牌需要展示小空间收纳，可以保存相关动作怎样进入镜头，而不是把所有家居图片都当作同等参考。记录哪一段有帮助，以及它说明表达、制作还是人物角色。

Pinterest 内容规划指南关注品牌发现路径；本篇则组织内部研究资料。一个公开 Pin 可以成为线索，但最终要回到原作品与具体贡献。资料库越容易说明为什么保存，后续联系越容易从模糊欣赏变成可讨论的合作。`,
`Camera expression, creator-work research and industry background need different records. Do not build a large inspiration library first and ask everyone to find a question that was never defined. Begin with a task in the brief.

For a small-space organizer demonstration, save how an action enters the frame rather than treat every interior photograph as equally relevant. Explain the useful passage and whether it informs expression, production or a person’s role.

The Pinterest content-planning guide concerns a brand discovery route; this article organizes research references. A public Pin can supply a lead while the original work and actual contribution still need checking. The easier it is to explain why something was saved, the easier a later invitation can move from vague admiration to an assessable collaboration. The library should therefore contain a short research reason, not a score suggesting that every saved creator has already been selected or approved.`),
s('Pinterest：整理视觉参考','Pinterest: organize visual questions and references',`Pinterest 的官方使用说明将其介绍为视觉发现引擎，并说明 Pin 与画板的收藏组织方式。品牌可以据此研究构图、动作和内容问题，不把推荐结果当作完整达人名录或市场调查。

画板名称可以围绕明确任务，例如近景怎样展示抽屉开合。区分自己项目与外部作品，让团队知道什么是待研究参考，什么才是已确认制作。不要只保存缩略图后丢失原始地址。

同一个视觉想法可能由不同发布者转贴。发现喜欢的表达时，继续核对真正作品来源，避免把收藏者当成创作者。页面上的热门感也不自动证明适合品牌，仍需判断作品与实际任务的关系。`,
`Pinterest’s official introduction describes a visual discovery engine and saving Pins to boards. Use that for researching composition, actions and content questions rather than treat recommendations as a complete creator directory or market survey.

Name a board for a defined task, such as showing a drawer opening in closeup. Distinguish the team’s own project from external work so colleagues know what is a research reference and what is approved production. Do not save only the thumbnail and lose the original address.

Different publishers can recirculate one visual idea. Follow a useful expression back to its work source instead of mistake the collector for its creator. Apparent popularity does not establish brand fit; the work still needs a relationship to the assignment. A reference is most helpful when its accompanying note describes the action to study, allowing another person to understand the idea without being asked to duplicate the image itself.`,['pinterestBoards']),
s('Raindrop.io：按项目归档','Raindrop.io: give links a project context',`Raindrop.io 的集合说明介绍按主题或项目组织书签，并提供不同视图。它支持理解链接资料的组织方式，不是本文已测试团队账号、权限或付费计划的结论。

品牌可以围绕一次 Brief 建集合，保留相关作品、官方产品资料和研究问题。不要因为都放在同一集合，就让它们看起来具有相同证据强度；原始作品、新闻和个人评论应分别说明。

可给每条记录保留简短说明：对应什么任务、哪项已核验、下一步是什么。组织功能帮助重新找到资料，却不替团队完成事实判断。选择工具时，实际试用访问与交接是否适合，比只看资料卡数量或视觉效果更重要。`,
`Raindrop.io’s collections guide describes grouping bookmarks by topic or project and using different views. It supports understanding link organization, not a claim that this article tested a team account, permissions or a paid plan.

A brand can organize one brief’s creator work, official product information and research questions in a collection. Sharing a collection does not give them equal evidential strength: identify an original work, a news report and personal commentary separately.

Keep a short explanation of the task, verified point and next question for each entry. Organization helps retrieve material without replacing factual assessment. Evaluate whether access and handoff fit actual work rather than judge only card counts or appearance. A useful pilot can ask the next owner to locate one reference and explain its relevance; if they need the original researcher to interpret every entry, the collection still lacks the context that makes it usable.`,['raindropCollections']),
s('Flipboard：为主题整理可读的资料','Flipboard: curate a readable topic collection',`Flipboard 的杂志创建说明介绍将文章、视频、照片与链接等内容放入杂志，并选择公开或私密。品牌可以研究某个主题的公开表达，再决定是否适合项目资料分享。

专题不宜只靠标题堆积。可以说明某篇资料怎样帮助理解达人所处领域，哪些是发布者观点，哪些需要再找原始证据。把品牌想表达的主张与外部资料分开，避免收藏内容被看成品牌全部认同。

配图把收藏、原始来源与使用条件分开。公开分享资料库之前，确认内容范围和实际访问，不把内部合作计划或私人联系资料放进外部专题。没有测试过账号，就不承诺任何具体协作或分发效果。`,
`Flipboard’s magazine-creation guide describes collecting articles, videos, photographs and links in a magazine with a public or private choice. A brand can research a topic’s public expression before deciding whether that form suits project sharing.

A topic collection needs more than accumulated headlines. Explain how a source informs the creator’s field, which statements are the publisher’s views and which need original evidence. Separate the brand’s proposed claims from external material instead of make every saved story appear endorsed.

The diagram separates a saved reference, original source and use conditions. Before public sharing, confirm scope and actual access rather than include internal partnership plans or private contact details. Without account testing, promise no particular collaboration or distribution outcome. The collection’s value can be assessed first by whether a colleague can understand the topic and locate relevant originals, rather than by an unsupported claim that publishing a magazine will produce creator inquiries or campaign sales.`,['flipboardMagazine']),
s('从收藏卡片回到原始作品','Return to the original work',`收藏卡片常只显示部分标题、缩略图或旧描述。用于达人研究时，应打开原始作品，确认实际表达、发布者、日期与任务关系。不把截取片段当作整条内容的结论。

如果原始链接失效，记录不可访问与观察时间。不要把缓存或转贴自动写成当前资料，也不因为打不开就判定作者删除或隐瞒。状态只能说明目前能观察到什么。

一条资料可能同时提供人物与想法线索，但不需要因此推断私人身份、报价或受众地域。把研究范围留在作品与拟用角色上，才能让资料库持续服务达人合作，而不是变成与 Brief 无关的个人档案。`,
`A bookmark card may show only a partial title, thumbnail or old description. Open the original work to confirm expression, publisher, date and relevance before using it for creator research. A cropped passage is not a conclusion about the whole item.

For an unavailable source, record the access limitation and observation time. A cache or repost is not automatically current, and failed access does not establish deliberate deletion or concealment by the author. Status describes what can be observed.

One source may offer person and idea leads without supporting private identity, pricing or audience-geography inferences. Keep research connected to work and a proposed role instead of create a personal dossier unrelated to the brief. This makes later contact more focused: the team can identify the actual contribution it wants to discuss without asking the creator to explain assumptions that were never supported by the saved material.`),
s('收藏与素材使用是两项决定','Saving and asset use are separate decisions',`美国版权局的版权说明介绍照片、视频等作品及相关权利。公开可见或可以收藏，不表示品牌已经取得复制、改编或广告使用安排；具体使用需要合适依据。

内部研究可以保存来源链接和自己的观察说明，不必把所有作品下载进商业素材目录。需要向达人讨论某个表达时，说明想研究的动作或用途，让其判断怎样提供自己的工作。

参考一个想法与复制别人表达不一样。品牌不应要求候选人重做一条外部作品却不讨论来源与实际创意。资料库可以帮助把问题问清：希望达到什么理解，哪些元素只是示例，真正要采购的贡献是什么。`,
`The U.S. Copyright Office’s copyright overview describes works such as photographs and videos and their associated rights. Public visibility or saving does not establish arrangements for copying, adaptation or advertising; a particular use needs an appropriate basis.

Internal research can retain source links and the team’s observations without downloading every work into a commercial asset folder. When discussing an expression with a creator, identify the action or use being researched and let them consider how to contribute their own work.

Studying an idea differs from copying another person’s expression. A brand should not ask a candidate to remake an external work without discussing source and creative contribution. The library helps clarify the intended understanding, elements offered only as examples and work actually being commissioned. This gives the creator room to propose a suitable approach rather than interpret a saved reference as a requirement to reproduce everything in it.`,['copyrightBasics']),
s('访问范围要符合资料内容','Match access to the material',`公开专题可以包含适合公开分享的研究线索，内部项目则可能含未发布的 Brief 与讨论。选择分享范围之前，先看真实内容，而不只看工具默认按钮是什么。

Pinterest 的私密画板说明介绍仅本人和受邀者可见的安排。这是该功能的范围描述，不代表任何工具都能自动满足企业所有保密需求；实际组织与账号设置仍应确认。

合作联系人、私人收件信息或未确认价格，不需要进入公开参考库。给下一位负责人足够资料继续任务即可，不用让所有参与者都看到全部沟通。访问清楚，也有助于区分公开研究线索与真实商业谈判。`,
`A public topic collection can contain suitable public research leads, while an internal project may include an unreleased brief or discussion. Inspect the actual material before choosing sharing scope instead of follow the default button alone.

Pinterest’s private-board guide describes visibility limited to the owner and invited people. That describes the function’s scope, not a guarantee that every organizational confidentiality need is automatically satisfied; confirm the real organization and account settings.

Private receiving details, negotiated prices or business correspondence do not belong in a public reference library. Give the next owner enough information for their task without exposing every conversation to all participants. Clear access also distinguishes public research leads from an actual commercial discussion. A colleague receiving the collection should know whether they are allowed to share the collection itself, rather than infer that permission from their ability to open it.`,['pinterestPrivate']),
s('用一条假设记录检查资料是否够用','Test the library with one hypothetical entry',`假设品牌保存一段达人展示小抽屉的作品。记录可以写：研究如何在狭小空间展示物品取放；原始作品地址与观察日已保存；品牌未取得素材使用许可；下一步是查看其他相关作品，再考虑具体邀请。

这条记录没有虚构粉丝数量、私人邮箱或合作意愿，也没有把整个作品标记为已批准。另一位负责人能知道保存原因与边界，不需要原研究者当场解释。

如果原作品后来打不开，更新访问状态并保留原观察，不伪造新证据。若品牌决定联系，则另建具体任务记录，把收藏线索连接到真实工作。本文没有真实客户结果，这个例子只展示记录怎样支持下一步。`,
`Suppose a brand saves a creator’s demonstration of a small drawer. The record can state: research how to show object retrieval in a confined space; original URL and observation date retained; no asset-use permission obtained; next review other relevant work before considering a specific invitation.

This entry invents no followers, private email or willingness to collaborate and does not label the whole work approved. Another owner understands the reason and boundary without the original researcher present.

If the work later becomes inaccessible, update access status while retaining the original observation instead of inventing new evidence. If the brand chooses contact, open a separate assignment record connecting the lead to actual work. This hypothetical is not a client result; it demonstrates how context supports the next action. The useful test is whether a colleague can describe both the contribution being researched and the decision not yet made, without mistaking the bookmarked person for a confirmed commercial partner.`),
s('维护资料库，避免让旧线索变成新事实','Maintain the library without turning old leads into new facts',`定期整理与当前任务无关、重复或无法访问的记录。是否保留旧项，取决于它是否仍能解释研究过程，不必为了数量不断添加，也不必把所有历史内容全部删除。

更新时保留什么改变，例如原始页面已有新版、公开角色变化或任务不再相关。不同情况需要不同处理，不把旧资料直接覆盖成看似当时已经知道的新事实。

可让一位负责人确认收藏规则与交接方式。多人都能添加资料时，仍应知道谁决定进入最终 Brief。收藏夹中的存在状态，不应自动成为选人结果，更不应在没有联系的情况下出现在公开合作名单。`,
`Review irrelevant, duplicate and unavailable records periodically. Retain older items when they explain the research process rather than keep adding for volume or delete all history indiscriminately.

Record what changed: a revised original page, a changed public role or a task that no longer applies. These need different responses. Do not overwrite old information so a later fact appears to have been known at the earlier observation date.

Give someone responsibility for inclusion rules and handoff. Multiple contributors can add material while a defined owner decides what enters the final brief. Presence in a collection is not a selection result and should not become a public partnership list without contact. Maintenance is successful when it helps the next assignment proceed with accurate references, not when the team reports the greatest possible number of saved creators without knowing why they were collected or whether the work is still relevant.`),
s('把收藏变成具体的达人研究','Turn collection into concrete creator research',`社交聆听样本核验指南提醒团队保留观察范围，收藏库也一样。平台推荐与个人保存都只是所见内容的一部分，不能据此声称完整覆盖某个行业或全部达人。

选择 social bookmarking sites，应看团队需要视觉整理、项目链接还是可读专题，并实际确认访问与维护方式。没有必要把所有资料复制到每个工具，选择能支持当前工作的简单安排即可。

最后交付一组有来源、理由与下一步的记录。品牌知道要研究什么，达人有机会提供自己的贡献，下一位负责人也能判断哪些只是参考。这让收藏服务于达人营销，而不是变成无目的的网址清单。`,
`The social-listening sample-validation guide emphasizes observation scope, and reference libraries need the same care. Platform recommendations and personal saves cover only part of visible content rather than establish complete industry or creator coverage.

Choose social bookmarking sites around visual organization, project links or readable topic curation, then confirm actual access and maintenance. Material need not be duplicated into every tool; select a simple arrangement that supports the present task.

Deliver records with sources, reasons and next actions. The brand understands the research question, creators have room to offer their own contribution and another owner can distinguish references from decisions. That makes collection useful to influencer marketing rather than an undirected URL list. It also gives the team a sensible stopping point: when the references support a defined conversation or production choice, further saving should serve a new question instead of postpone the work already ready to begin.`)
],
links:[link('Pinterest 内容规划指南','Pinterest content-planning guide','use-pinterest-brand-search-content-planning'),link('社交聆听样本核验指南','social-listening sample-validation guide','social-listening-query-sample-validation')],
figures:[{file:'bookmark-source-permission-map.svg',afterSection:4,alt:p('三个层次分开收藏参考、原始来源和实际使用条件','Three layers distinguish a saved reference, original source and actual use conditions'),caption:p('找到与保存帮助研究，商业使用仍需对应依据。','Discovery and saving support research; commercial use needs a corresponding basis.')}],
table:{title:p('按研究任务选择收藏方式','Choose curation around the research task'),headers:[p('工具','Tool'),p('官方描述的组织方式','Documented organization'),p('适合核对的问题','Question to check')],rows:[[p('Pinterest','Pinterest'),p('Pin、画板与分区','Pins, boards and sections'),p('视觉参考是否能回到原作品','Whether the visual reference leads to the original')],[p('Raindrop.io','Raindrop.io'),p('按项目或主题组织集合','Collections by project or topic'),p('链接是否有任务与证据说明','Whether links retain task and evidence context')],[p('Flipboard','Flipboard'),p('带主题的内容杂志','Topic-based content magazines'),p('资料范围与访问是否适合分享','Whether scope and access fit the sharing task')]],note:p('基于 2026 年 11 月 17 日官方资料的任务比较，不是实测排名、价格比较或分发保证。','Task comparison based on official resources reviewed November 17, 2026, not a tested ranking, price comparison or distribution guarantee.')},
tool:{title:p('保存一条达人研究线索之前','Before saving a creator-research lead'),intro:p('让收藏记录能支持下一位负责人。','Make the reference useful to the next owner.'),items:[p('说明它解决哪个 Brief 问题。','State the brief question it informs.'),p('回到原作品并保存观察日期。','Find the original and retain the observation date.'),p('区分发布者观点与核验事实。','Separate publisher views from verified facts.'),p('保留使用条件与未知。','Retain use conditions and unknowns.'),p('确认访问范围与资料内容相符。','Match sharing scope to the material.'),p('写明下一项研究或讨论。','Name the next research or discussion task.')]}
});
