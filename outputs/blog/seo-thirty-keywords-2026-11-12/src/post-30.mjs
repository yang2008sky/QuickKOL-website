import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:30,
summary:p('品牌怎样把信息流中偶然看到的创作者内容，整理成有来源、有边界、能指导原创合作的 Brief。','Turn creator posts encountered in a newsfeed into a sourced, bounded brief for original brand collaboration.'),
description:p('Newsfeed 怎样帮助达人营销研究：保留原作与发现上下文，区分个人信息流和市场证据，把观察变成创作者任务，不复制主张。','Use a newsfeed for creator research by preserving provenance, limiting market claims and turning observations into an original partnership brief.'),
coverAlt:p('两位内容编辑用空白色卡、手机和相机讨论原创演示顺序','Two content editors use plain colored cards, a phone and a camera to plan an original demonstration sequence'),
answer:p('Newsfeed 可以帮助品牌发现创作者作品与观众问题，但个人信息流不是完整市场，也不是某位达人的全部表现。看到有用内容后，先保存原作者、原地址、时间和发现上下文，区分可见事实与编辑推断，再提出与本次产品有关的原创任务。不要从刷到几次推定行业趋势，也不将别人的个人经历或素材直接变成品牌背书。本文提供从信息流到达人 Brief 的整理方法，不声称已经完成全网趋势或受众调查。','A newsfeed can help a brand discover creator work and audience questions, but a personal feed is neither the entire market nor a creator’s complete performance record. Preserve original author, link, time and discovery context, distinguish visible facts from editorial inference, then propose an original task relevant to the product. Repeated exposure does not establish an industry trend, and someone else’s experience or footage should not become a brand endorsement by assumption. This guide turns feed observations into a creator brief without claiming a completed market-wide trend or audience study. The useful output is a clear collaboration question supported by traceable work rather than an unsourced folder of inspiration.'),
sections:[
s('先承认信息流具有选择条件','Recognize the feed’s selection conditions',`Meta 的内容排序说明在 2023 年介绍个性化与用户选择的背景。它帮助解释为什么研究者看到的内容有条件，不能直接代表所有人。本文不据此宣称掌握当前固定权重，也不把自己的时间线当作全行业样本。

记录平台、日期、登录上下文和发现方式。内容来自关注、推荐、搜索或他人转发时，保留能确认的路径，不知道就写未知。

发现有价值作品仍然可以推进研究，只要不把发现路径扩大成市场结论。`,
`Meta’s content ranking explanation described personalization and user choices in 2023. It helps explain why a researcher’s exposure is conditional rather than representative of everyone. This article claims no current fixed weights and does not treat one timeline as an industry sample.

Record platform, date, login context and discovery route. Preserve whether an item came through following, recommendation, search or sharing where known, and label unknown routes accordingly.

Useful work can still advance research without turning discovery into a market conclusion. A brand may reasonably explore an observed explanation while acknowledging it has not established how common that explanation is, who else saw it or which selection factors caused it to appear in this session.`,['metaRanking']),
s('不同信息流不是同一种样本','Different feeds do not form one automatic sample',`Bluesky 的自定义信息流说明介绍用户可以选择不同来源的信息流。它是理解选择机制的历史背景，不意味着每个信息流覆盖完整话题。第三方整理也可能有自己的收录方式，需要按实际来源理解。

YouTube 的推荐系统说明同样提供个性化观看的背景。将不同平台截图拼在一起，不会自动消除选择偏差，更不能仅凭相似表达宣称一个统一趋势。

品牌可用多个路径拓展观察，仍应记录范围与重复来源，而不是把“多平台”当成代表性的保证。`,
`Bluesky’s custom-feed explanation describes users choosing different feeds. It supplies historical selection context, not complete topic coverage by every feed. Third-party curation can also have its own inclusion method.

YouTube’s recommendation-system explanation likewise provides personalized-viewing context. Combining screenshots across platforms does not automatically remove selection bias or establish one shared trend from similar expression.

Several routes can broaden observation, provided scope and repeated sources remain visible. Multiplatform is not a guarantee of representativeness. A researcher should be able to explain whether several items are independent observations or the same original circulating through different accounts, since those situations support different conclusions about the variety of work encountered.`,['bskyFeeds','ytRecommend']),
s('保存原作，不只收藏截图','Preserve the original rather than only a screenshot',`记录原地址、作者、发布时间、遇到时间与相关上下文。截图可能丢失语气、条件、商业说明或后续纠正。一个转发者也可能不是原制作人，不因某内容在其页面出现就归属全部贡献。

没有原作时保留来源限制，避免将二手总结写成亲自核验。需要引用时明确归属与实际可用范围，不把原作者的句子换品牌名称就当作新主张。

研究参考与可以投放的素材分别处理。收藏一个作品，不自动取得品牌使用权。`,
`Record original URL, author, publication time, encounter time and relevant context. A screenshot may omit tone, conditions, commercial context or a later correction. A reposter may not be the maker, so appearance on their page does not establish every contribution.

Where the original is unavailable, preserve the limit instead of presenting a secondary summary as firsthand verification. Attribute quotations appropriately and keep use scoped rather than replace a name in the original sentence and call it a brand claim.

Research references and ready advertising assets need separate handling. Saving a work does not establish usage rights. The handoff should keep that distinction visible so a production or media colleague does not mistake a useful discovery for an approved file merely because it sits in the same project folder.`,[]),
s('把观察改写成不超过证据的句子','Write an observation no stronger than its evidence',`可以写“这项作品先展示了使用前提”，不能直接写“先展示前提必然提升转化”。可见的结构、动作和问题，与对效果原因的推断不同。先把每项事实对应原作，再单列分析。

看到几条类似帖子，可以提出一个研究问题，不必立即宣布行业正在转向。没有实际样本设计与数据，不能给出比例或趋势速度。

让另一位同事能在原作品中找到你描述的部分，是比形容“很有洞察”更好的记录标准。`,
`An observation can say the work begins with a prerequisite, not that starting with a prerequisite necessarily improves conversion. Visible structure, action and questions differ from an inference about effects. Match each fact to the original, with analysis separate.

Several similar posts can generate a research question without announcing an industry shift. No sample design or data means no percentage or trend speed.

A colleague being able to locate the described feature is a better record standard than calling the work insightful. This makes inspiration useful in procurement: the brand can identify a demonstrated technique or an unresolved audience question without asking a creator to reproduce a result the observation never established.`,[]),
s('把原作者角色转成适当合作问题','Translate the author’s role into a partnership question',`某人提供专业解释，可能适合讨论相关任务；分享一次个人经历，不自动证明能长期制作或代表全部受众。研究其相关作品与实际贡献，别把一条热门片作为所有能力认证。

品牌可能邀请原作者，也可能选择另一位合适创作者设计不同作品。两种情况下都应尊重真实经历与使用条件，不要求他人演出原作者的人生故事。

用候选研究方法把角色、相关理由和待确认项连接起来。名单应服务工作，而不是只是信息流里出现过的名字。`,
`A professional explanation may justify discussing a relevant task. One personal experience does not establish ongoing production capability or representation of every viewer. Review relevant work and actual contribution rather than certify all skills from a popular piece.

A brand may approach the original author or ask another suitable creator to design different work. Both routes need genuine experience and appropriate use conditions, not someone performing another person’s life story.

Use the candidate research method to connect role, relevance and open checks. A roster should serve assignments rather than list names that appeared in a feed. A suitable next question may concern production, explanation or publication, and those should remain distinct when preparing the invitation.`,[]),
s('用背包维修话题演练观察到 Brief','Rehearse a backpack-repair observation becoming a brief',`假设品牌在个人信息流看到一位创作者解释背包拉链问题，又在转发中看到观众询问何时修理、何时换配件。这里没有真实帖子、作者或趋势调查。可见观察只是某项解释与一组问题，不能推成所有消费者都想修包。

品牌先核对自己的产品和服务条件：哪些配件适用、是否提供维修、谁接收咨询。创作者可以基于真实能力解释，但不能替品牌承诺所有旧款都有零件。

拟议 Brief 可聚焦一个问题：帮助相关用户理解这款产品在特定条件下的处理选项。保留必要前提，不复制原作者经历，也不宣称已经证明环保或销售效果。

下一步是核对相关作品、角色与制作范围，再准备原创方法。观察可以启发采购，不需要被包装成平台趋势报告。

输入记录保留原作品、实际问题、可见贡献与缺失产品事实；输出 Brief 则说明观众、品牌确认的选项、拟议表达、条件和接收人。它们不是同一份记录。邀请原作者时讨论新作或适当许可，邀请其他人时提供观众任务，不要求复制经历，也不暗示原作者背书。

品牌可以按事实验收演示，另观察咨询或服务请求；没有商业证据，不虚构维修转化率。再假设品牌只提供配件，没有维修服务，就不能邀请观众把任意背包寄来维修。Brief 应说明适用型号、实际选项与配件查询路径。事实尚未确认时先推迟该邀请，不让一条信息流观察替品牌证明服务能力。`,
`Suppose a brand encounters a creator explaining a backpack zipper issue and sees questions in a repost about repair versus replacement parts. This hypothetical contains no actual posts, author or trend study. The observation is one explanation and a set of questions, not all consumers wanting repair.

First verify the brand’s actual product and service conditions: which parts apply, whether repair is offered and who receives inquiries. A creator can explain within genuine capability without promising that the brand stocks every older component.

A proposed brief could address one task: help relevant users understand the handling options for this model under specified conditions. Preserve prerequisites, avoid copying the original author’s experience and claim no proven environmental or sales effect.

Next review relevant work, role and production scope before developing an original method. An observation can stimulate procurement without becoming a platform trend report.

A practical input note might retain the original work link, the exact question observed, the author’s visible contribution and the missing product facts. The output brief then defines the target viewer, the brand-verified options, the creator’s proposed explanation, necessary conditions and receiving owner. These are different records: the first preserves what was encountered, while the second specifies work the brand may commission.

If the original author is approached, ask about a suitable new assignment or applicable reuse instead of assuming public discussion invites commercial use. If another creator is approached, provide the audience task and verified facts rather than request a replica of the earlier post. Neither route should imply that the original author endorsed the brand.

The brand can accept a clear demonstration against agreed facts while later observing appropriate questions or service requests separately. A lack of usable commercial data does not justify inventing a repair-conversion rate. It may simply mean the first project taught the team how to explain the options and what evidence a later decision would need.

In the hypothetical, suppose the brand supplies replacement components but has no repair service. The invitation must not become send us any bag for repair. A usable brief states the supported model, permitted explanation and actual route for checking part availability. If those facts remain unconfirmed, postpone that invitation while continuing appropriately scoped explanation work. This preserves expectations without pretending the feed observation established the brand’s operational capacity or that a creator can promise a service the brand never offered.`,[]),
s('审核前提，不让热度覆盖事实','Review prerequisites before popularity',`信息流里吸引人的结构，可能依赖某个产品、场地、剪辑或个人经历。品牌采用前核对必要条件，不因原作品流行就认定自家产品也适用。需要专家或专业技能时按任务确认。

文案、画面和目的地应一起审核。一次介绍不能在转述后变成无条件效果保证，也不能因为准备追热点就删除限制。

无法建立真实关联时，可以不采用。停止一个不合适方向，比给创作者一个无法兑现的任务更有用。`,
`An engaging structure may depend on a product, setting, edit or personal experience. Verify prerequisites before applying it to the brand rather than infer suitability from popularity. Confirm professional support or capability where the task needs it.

Review wording, image and destination together. A description should not become an unconditional outcome promise through retelling, and trend participation does not justify removing limits.

Decline where a genuine connection cannot be established. Stopping an unsuitable direction is more useful than commissioning an assignment that cannot be fulfilled. The reason can remain task-specific without criticizing the original author, whose work may have been entirely suitable for a different purpose and set of conditions.`,[]),
s('把研究、提案和执行状态分开','Separate research, proposal and execution states',`保存过原作、确认过角色、准备过Brief、联系过对方与达成合作，是不同状态。不要让一张作品图出现在内部方案，就被执行团队理解为已经采购或清权。

给每项下一步明确接收人，说明要确认的问题。没有授权时不替创作者改账号或发送消息，也不把文稿示例写成已完成外联。

这些区分不需要复杂系统，但需要每个人都能读懂当前实际完成了什么。`,
`Saving original work, checking a role, drafting a brief, contacting someone and confirming collaboration are different states. An image appearing in an internal proposal should not make execution colleagues assume it was purchased or cleared.

Assign a receiving owner and the question for each next step. Without authorization, do not operate creator accounts or send messages, and do not present draft examples as completed outreach.

These distinctions need no elaborate system, but everyone should understand what actually occurred. A handoff can be ready for discussion while not ready for publication. The status should specify the pending action and its owner instead of use one ambiguous ready label for a research reference, a proposed assignment and an approved asset.`,[]),
s('复盘时保留选择偏差与证据边界','Preserve selection limits during review',`如果后续作品表现不同，先看任务、受众、媒体和时间是否可比。不能用原信息流里的点赞与自家商业事件直接作优劣判断，也不把一个未执行的计划写成实验结果。

需要更系统研究时，另定义样本与方法。当前有限观察仍可以支持一个内容问题，但不能冒充全体用户需求或平台的客观排名。

复盘说明学到了什么、还有什么未知以及下一项合理工作。`,
`If later work performs differently, check task, audience, media and timing before comparison. Likes on the original feed item and the brand’s business events are not directly comparable outcomes. An unexecuted plan is not an experiment result.

Define sample and method separately where systematic research is needed. A bounded observation can still support a content question without representing every user’s need or an objective platform ranking.

Report learning, unknowns and the next reasonable work. The conclusion should remain proportionate when shortened for leadership, because a useful creative insight can become an unsupported market claim merely through removal of its source and selection context.`,[]),
s('交出一份能执行的达人 Brief','Deliver an executable creator brief',`最终 Brief 包含观众任务、原始启发来源、品牌确认事实、拟邀请角色、创作空间、范围、审核与接收人。说明哪些来自外部作品，哪些是品牌或编辑提出的建议，不改名成自有研究。

Newsfeed 对达人营销的作用，是提供观察入口，而不是替代发现、判断与合作的全部过程。让每个观察能回到原作，每个提案能回到真实任务，每个动作能找到负责人。

这样，日常看到的一条内容才有条件转成尊重创作者、事实清楚且可被审核的合作计划。`,
`The final brief contains audience task, original inspiration source, brand-verified facts, proposed role, creative latitude, scope, review and receiver. Identify what comes from external work and what is a brand or editorial suggestion instead of renaming it proprietary research.

A newsfeed supplies an observation entry rather than replaces discovery, evaluation and collaboration. Let observations return to originals, proposals return to actual tasks and actions return to owners.

An everyday encounter can then become a partnership plan that respects creators, preserves facts and supports review. The receiving person should be able to explain both why the idea is relevant and what still needs confirmation before the brand asks someone to make it.`,[])
],
links:[link('达人 Brief','creator brief','write-a-useful-campaign-brief'),link('候选研究方法','candidate research method','influencer-discovery-tool-brief-to-candidates')],
table:{title:p('从信息流到达人 Brief','From newsfeed to creator brief'),headers:[p('阶段','Stage'),p('保留','Preserve'),p('不要升级成','Do not upgrade to')],rows:[[p('发现','Discovery'),p('入口、时间与原作','Route, time and original'),p('全市场样本','Whole-market sample')],[p('观察','Observation'),p('实际结构、动作与问题','Visible structure, action and question'),p('已证实效果原因','Proven cause of outcomes')],[p('创作','Production'),p('品牌事实与原创任务','Brand facts and original task'),p('复制经历或背书','Copied experience or endorsement')],[p('交接','Handoff'),p('角色、范围、状态与接收人','Role, scope, state and receiver'),p('收藏等于许可','Saving means permission')]],note:p('背包案例为假设，不代表真实趋势、客户结果或环保效果。','The backpack case is hypothetical, not an actual trend, client result or environmental benefit.')},
tool:{title:p('把信息流内容放进方案前','Before adding feed material to a proposal'),intro:p('让灵感有来源，也让任务有边界。','Give inspiration provenance and the assignment boundaries.'),items:[p('原作者与发现上下文可追溯。','Original author and discovery context are traceable.'),p('个人信息流不冒充完整市场。','A personal feed is not the complete market.'),p('观察和效果推断分开。','Observation and outcome inference are distinct.'),p('品牌事实与创作者经历真实。','Brand facts and creator experience are genuine.'),p('研究参考没有被当成已授权素材。','Research references are not treated as cleared assets.')]}
});
