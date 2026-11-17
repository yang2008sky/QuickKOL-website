import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:14,
summary:p('当报告说品牌拥有某个声量份额时，先解释“声音”与品类范围，再判断它能否支持达人选择、对外主张或下一项内容任务。','When a report assigns a brand a share of voice, interpret the unit and category before using it for creator selection, a public claim or another content assignment.'),
description:p('What is share of voice？围绕达人营销读懂品牌声量主张，区分提及、展示、销售与认可，核对来源覆盖和品类范围，再形成准确结论。','What is share of voice in creator marketing? Interpret brand visibility claims by separating mentions, impressions, sales and approval, with source and category boundaries.'),
coverAlt:p('原创图形将品类范围、纳入来源与份额定义分开','An original graphic separates category scope, included sources and the share definition'),
answer:p('Share of voice 通常表示品牌在选定品类和观察范围内，占某种可见度记录的比例。达人营销报告可能按品牌提及或其他明确单位衡量，但不能只写一个百分比就让人理解为市场份额、购买人数或好评比例。回答 what is share of voice，应同时说明“声音”是什么、与谁比较、看哪些来源和哪个时期。它可以帮助研究品牌在相关对话中的位置；是否适合选择达人或对外宣布品类领先，还需要与具体主张相符的证据。','Share of voice generally describes a brand’s proportion of a defined visibility measure within a selected category and observation scope. A creator-marketing report might use brand mentions or another stated unit, but a percentage alone should not imply market share, buyers or approval. Answering what is share of voice requires the unit, comparison set, sources and period together. It can inform research into a brand’s place in relevant conversation; creator selection or a public category-leadership claim needs evidence matching that particular decision.'),
sections:[
s('先把报告里的百分比读成完整句子','Read a percentage as a complete statement',`看到“我们占据 30% 声量”，先问这句话缺了什么。30% 的对象、比较范围、来源和时期，决定它实际说明什么。没有这些条件，百分比可能很醒目，却无法支持下一项决定。

声量份额计算指南讨论如何确定计数与分母；本篇关注读者怎样解释已经出现的报告主张，避免把一个有范围观察变成全品类结论。先找报告原来的限定，不从标题自行补全。

可以改写为：在所列来源与时段中，按指定计数规则观察的品牌提及里，某品牌占一定比例。这个句子较长，但让负责人知道证据边界。缩短时可以精简文字，不能删除真正影响理解的条件。`,
`When a report says we own 30% of the conversation, ask what is missing. The object, comparison set, sources and period determine its actual meaning. Without them, a prominent percentage cannot support the next decision.

The share-of-voice calculation guide addresses counts and denominators; this article concerns interpreting a claim already presented. Avoid turning a scoped observation into a category-wide conclusion. Locate the original qualifications instead of supply them from a headline.

A fuller statement might describe a brand’s proportion of observed brand mentions under a specified counting rule, source list and period. It is longer but gives a decision-maker the evidence boundary. Shorten wording without removing conditions that change understanding. A reader should be able to distinguish the result actually reported from the broader commercial interpretation proposed by someone presenting it, even when both appear together on a slide.`),
s('定义声音的单位，而非只解释术语','Define the unit behind voice',`Brandwatch 的声量份额方法说明将品牌在行业或细分市场中的相对可见度作为讨论对象，并按渠道介绍不同指标。这是方法来源，不代表所有报告使用同一单位或所有渠道可以相加。

达人报告可以统计包含品牌的内容、提及次数或其他有定义的记录。这些分别回答不同问题。重复提及、跨品牌内容与转发怎样处理，都应有实际规则，不能从“voice”这个词猜测。

因此，一个声量结果首先是对记录的描述，不是对所有人的态度判断。把指标名称和实际字段放在一起看，能发现报告是不是用一个熟悉词语掩盖了完全不同的测量对象。`,
`Brandwatch’s share-of-voice method guide discusses relative brand visibility within an industry or segment and different channel measures. It is a method source, not evidence that every report uses one unit or that all channels can be added.

A creator report may count brand-containing content, mentions or another defined record. These answer different questions. Repeated references, multi-brand content and reposts need actual rules instead of being inferred from the word voice.

A share result therefore first describes records, not everyone’s attitudes. Read the metric name beside the actual field to see whether a familiar term conceals a different object. When no field definition is supplied, the next step is clarification rather than interpretation. A brand can retain the result as a research lead while withholding a stronger claim that depends on knowing exactly what was counted and how another analyst would reproduce it.`,['bwVoice']),
s('品类范围决定主张能说多大','Category scope sets the size of the claim',`比较三家被选品牌，与覆盖某个完整品类不是同一范围。研究可以合理选择有限对象，但报告不能因此改写成全市场占比。品牌名称相似或跨品类业务，也可能影响相关记录。

先问品类怎样定义，以及为什么纳入这些品牌。运动服、健身设备与广义生活方式，可能具有不同讨论空间。一个品牌在其中一组占比较高，不能自动说明在全部运动行业领先。

对达人选择，范围要与任务相关。品牌如果研究某种动作讲解，就不需要用所有运动娱乐内容证明合作适合。真正有用的是找到相关表达与问题，不是把范围扩到足够大，让结论看起来更重要。`,
`Comparing three selected brands is not the same as covering an entire category. A study can reasonably choose a limited set without relabeling its result a whole-market share. Similar names or businesses spanning categories can also affect relevant records.

Ask how the category is defined and why the brands belong. Activewear, exercise equipment and broad lifestyle discussions can occupy different spaces. A high share within one group does not establish leadership across the entire sports industry.

For creator selection, make the scope relevant to the assignment. Research into a particular movement explanation does not need all sports entertainment to establish collaboration fit. The useful outcome is relevant expression and questions rather than an enlarged category making the conclusion appear important. A shortlist recommendation should identify the task supported by the observed content, leaving the broader category claim separate unless evidence genuinely covers it.`),
s('来源覆盖需要确认实际范围','Coverage is more than a list of platform names',`Brandwatch 的来源与网络说明按不同产品描述研究、管理与达人相关能力。某个平台出现在供应商页面，不证明一个具体报告包含该平台全部内容，也不证明当前账号拥有全部访问。

需要查看实际报告使用了什么资料、哪些公开可见、哪些需要授权，以及有没有时间或内容限制。工具功能与本次采集范围是不同问题，不能用官方能力介绍替代方法记录。

图形把纳入对话、品类边界与份额定义分开。一个来源缺失，可能改变解释范围；先确认变化，再决定是否能与旧报告比较。没有资料就保留缺口，不把未见内容写成不存在。`,
`Brandwatch’s data-and-network guide describes research, management and influencer capabilities across different products. A platform appearing on a provider page does not establish that a particular report contains all its content or that the current account has every access route.

Inspect the material actually used, what is publicly visible, what requires authorization and any time or content limits. Tool capability and this collection’s scope are different questions; a provider feature description cannot replace the method record.

The diagram separates included conversation, category boundaries and share definition. A missing source can change interpretation; confirm the effect before comparing with an earlier report. Retain the gap rather than describe unseen material as nonexistent. This makes coverage a practical review question the data owner can answer, instead of an assumption carried from a product presentation into every result produced with that provider’s name.`,['bwNetworks']),
s('展示份额不等于社交提及份额','Impression share is not social mention share',`Google Ads 的展示份额说明把该指标定义为实际展示与估计可获展示的比例。这个分母与目标、批准状态等条件有关，不是全部行业社交对话。因此不能把它直接当成达人提及份额。

即使两份报告都写 30%，单位与机会范围也可能不同。一个是广告记录中的估计机会，另一个是选定来源中的相关提及；二者不宜相加、互相替代或直接排序。

品牌可以分别使用它们回答合适问题，但汇报时保留名称、定义与范围。把所有“份额”放进同一张大饼图，可能让人误以为它们切分同一个整体，实际却没有共同分母。`,
`Google Ads’ impression-share guide defines the measure through received impressions and estimated eligible impressions. Its denominator depends on conditions including targeting and approval, rather than all industry social conversation. It is not directly a creator-mention share.

Two reports both showing 30% can still have different units and opportunity sets. One concerns estimated advertising opportunities; another concerns relevant mentions within selected sources. They should not be added, substituted or ranked directly.

Use each for its appropriate question while retaining name, definition and scope. Placing every share inside one pie can imply partitions of the same whole when no shared denominator exists. The review should ask what total each proportion belongs to before selecting a visual, because a familiar chart can make incompatible measures appear more coherent than the underlying evidence permits.`,['googleIS']),
s('声量增加不说明大家更认可','More voice does not establish greater approval',`提及可能是推荐、提问、争议、新闻或客服问题。一个总数不能证明全部正面态度，更不能让品牌把所有出现名字的创作者列为支持者或合作伙伴。

例如，一条达人内容可能只是在比较两种整理方法时提到品牌名称。它可以按规则计入相关提及，却不能因此成为品牌推荐证言。后续若希望讨论合作，应从实际作品与具体角色开始，而不是告诉对方报告已经把他归为支持者。

如果报告需要解释态度，应说明怎样分类、谁核验与哪些内容不确定。自动判断可以成为研究线索，但复杂语境、反讽和转述可能需要人工查看。没有相应方法，就不补出一个好评率。

对达人合作，先读相关作品实际上在说什么。品牌被提到，不代表推荐，也不代表授权广告复用。把声量结果连接到具体内容阅读，能减少一个高百分比被误用为广泛认同的风险。`,
`Mentions can concern recommendations, questions, disputes, news or service. One count does not establish positive attitudes or justify listing everyone naming the brand as a supporter or partner.

For example, a creator may name a brand while comparing two organizing methods. It can count as a relevant mention under the stated rule without becoming a recommendation testimonial. A later invitation should begin with the actual work and proposed role, rather than tell the person a report has already classified them as an advocate.

If a report interprets sentiment, state classification rules, review responsibility and uncertainty. Automated labels can start research while complex context, irony and quotation may need direct reading. Without a suitable method, do not add an approval rate.

For creator work, read what the relevant item actually says. Naming a brand is not endorsement or advertising permission. Connect the share result to content review so a high percentage is not misused as evidence of broad approval. The team can then distinguish a useful product question from a favorable recommendation and assign different next actions, rather than invite every visible author as if the report had already established a positive commercial relationship.`),
s('区分合作内容与独立口碑','Contracted content is not automatically independent advocacy',`品牌采购的内容可能进入观察范围，应该让报告读者理解其角色。不能一边要求达人按计划发布，一边把全部相关提及解释成消费者完全自发的口碑。

可以分别查看已知签约内容与其他可见记录，但不从没有标记推断所有其他内容都独立。可确认的商业关系按证据说明，未知关系保留未知，不对个人进行没有依据的指控。

品牌需要判断的是这些内容是否服务具体任务。签约表达可以准确而有用，但它的来源与形成方式不同于未经安排的讨论。保持区别，既能承认达人交付，也能避免夸大品牌在整个品类中的自然地位。`,
`Commissioned content may enter the observed scope, and readers should understand its role. A brand cannot require scheduled creator output while describing every resulting mention as entirely spontaneous consumer advocacy.

Inspect known contracted content separately from other visible records where useful, without assuming every unmarked item is independent. Describe supported relationships and retain unknowns rather than make unsupported accusations about individuals.

The question is whether the content serves an actual assignment. Contracted expression can be accurate and useful while differing in origin from unarranged discussion. Preserving that distinction recognizes creator delivery without inflating the brand’s organic position across the category. It also prevents a procurement decision being based on a circular argument in which purchased mentions raise a share, and that raised share is then presented as independent proof that purchasing the same work must have generated broader public support.`),
s('用一个假设主张检查推论','Test an inference through a hypothetical claim',`假设报告说，在三家指定品牌、两类已列来源和某个观察期内，品牌 A 有 30% 的相关提及。它支持该范围中的提及占比，不证明 30% 消费者买过，也不证明 30% 目标人群听说过。

若团队想对外写“品类第一”，还要核对排序、品类范围和主张所需依据，不能把有限比较直接扩大。若只想研究下一条内容，可以先读相关提及中的使用问题，形成更小的任务。

本例没有真实市场数据。它说明同一个结果可以支持有限研究，却不足以支持所有宣传。让主张与证据相称，品牌就能继续工作，而不需要把每一份小报告包装成完整行业结论。`,
`Suppose a report assigns brand A 30% of relevant mentions among three specified brands, two listed source types and an observation period. It supports a mention proportion within that scope, not that 30% of consumers purchased or 30% of the intended population heard of the brand.

A public category-number-one claim needs ranking and category coverage suited to that assertion rather than an enlarged version of a limited comparison. For the next content assignment, the team can instead read product questions among the mentions and define a smaller task.

This example contains no real market data. It shows that one result can support bounded research without supporting every promotional statement. Matching claims to evidence lets work continue without every small report becoming a complete industry conclusion. The appropriate next action depends on the decision, not on making the same percentage carry more meanings than its records establish.`),
s('把报告结论写成可继续的任务','Turn interpretation into a next task',`可以将结论分成已观察、需要解释与下一步。例如某类问题占据可见讨论，品牌可以研究解释方式；若来源范围改变，则先处理可比性，再讨论增长。

社交聆听核验指南帮助检查查询与样本。当前阅读报告时，还应让负责人说明哪些判断来自记录，哪些只是编辑建议。一个建议值得测试，不表示已经证明一定有效。

不要让达人为一个无法由个人控制的品类份额承担保证。可以明确要求完成相关内容与回应安排，再用适当证据研究贡献。任务越具体，双方越容易讨论真实工作，而不是围绕一个含义不清的目标百分比争论。`,
`Separate observed findings, questions requiring explanation and the next action. If a type of question appears in the visible conversation, research clearer explanation; if source scope changed, address comparability before discussing growth.

The social-listening validation guide helps inspect queries and samples. In report interpretation, identify judgments grounded in records and recommendations offered editorially. A suggestion worth testing is not an established effect.

Do not require a creator to guarantee a category share outside individual control. Specify relevant content and response responsibilities, then investigate contribution through suitable evidence. The more concrete the assignment, the easier both parties can discuss real work instead of argue over an ambiguous target percentage. A useful handoff names the question, work owner and evidence needed, leaving the share as contextual information rather than a substitute for a commissionable brief.`),
s('用范围完整的定义回答 Share of Voice','Answer share of voice with its scope intact',`What is share of voice 的定义，不能只停在品牌说得多不多。它是选定单位、对象、来源和时期中的比例，解释时必须保留这些要素。离开范围，数字很容易被误读。

品牌可以用它研究相关对话、发现问题与提出下一项达人任务，但选择人、评价作品或宣布领先，都需要各自证据。一个比例不替代真实作品和商业条件核对。

交付时给出原报告、定义、限制与合适下一步。负责人既知道结论能支持什么，也知道还不能说什么，才更容易把指标变成准确的达人营销决策。`,
`What is share of voice should not end with whether a brand is talked about frequently. It is a proportion under a chosen unit, comparison set, sources and period, all of which belong in its interpretation. Detached from scope, the number is easily misunderstood.

Use it to research relevant conversation, locate questions and propose a creator assignment, while person selection, work assessment and leadership claims need their own evidence. A proportion does not replace actual work and commercial checks.

Hand over the original report, definition, limitations and a suitable next action. A decision-maker who understands what the result supports and what remains unestablished can turn the metric into a more accurate influencer-marketing decision. The complete definition is therefore part of the practical work, rather than a footnote that can be dropped whenever the percentage moves from an analyst’s document into a brand presentation.`)
],
links:[link('声量份额计算指南','share-of-voice calculation guide','share-of-voice-kol-campaign-denominator'),link('社交聆听核验指南','social-listening validation guide','social-listening-query-sample-validation')],
figures:[{file:'voice-share-category-boundary.svg',afterSection:4,alt:p('图形把纳入的对话、品类范围与份额定义分成三个层次','A diagram separates included conversation, category boundaries and the share definition'),caption:p('解释一个份额时，让单位与范围跟随数字。','Keep the unit and scope attached when interpreting a share.')}],
table:{title:p('一项份额主张能说明什么','What a share claim can establish'),headers:[p('说法','Statement'),p('需要的依据','Evidence needed'),p('不能自动推导','Do not infer')],rows:[[p('占相关提及的某比例','A share of relevant mentions'),p('明确计数、来源与对象','Defined counts, sources and comparison set'),p('相同购买或认可比例','The same buyer or approval share')],[p('广告展示份额','Advertising impression share'),p('对应平台的机会与字段定义','The platform’s opportunity and field definition'),p('全部社交对话份额','A share of all social conversation')],[p('品类第一','Category leadership'),p('与主张相符的范围与排序证据','Coverage and ranking suited to the claim'),p('有限品牌比较等于全市场','A selected comparison covers the whole market')],[p('达人贡献','Creator contribution'),p('实际内容、角色与观察记录','Actual content, role and observations'),p('个人保证全部份额变化','One person caused every share change')]],note:p('编辑解释框架；文中 30% 为纯假设，不是市场数据或行业基准。','Editorial interpretation framework; the 30% example is entirely hypothetical, not market data or an industry benchmark.')},
tool:{title:p('引用一个份额之前','Before quoting a share'),intro:p('让百分比保持原本含义。','Preserve what the percentage actually means.'),items:[p('找到声音的具体单位。','Identify the unit of voice.'),p('确认品类、比较对象与时期。','Confirm category, comparison set and period.'),p('查明实际来源覆盖。','Establish actual source coverage.'),p('不混淆提及、认可与销售。','Distinguish mentions, approval and sales.'),p('把主张限制在证据范围内。','Limit the claim to its evidence.'),p('提出与达人工作有关的下一步。','Name a next action relevant to creator work.')]}
});
