import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:1,
summary:p('按身份、作品和指标逐项核验异常，区分需要调查的线索、合理解释与已确认事实，避免误判创作者。','Verify identity, work and metrics separately, distinguishing investigation leads, alternative explanations and confirmed facts without mislabeling creators.'),
description:p('如何识别虚假达人：核对账号与代理身份、作品出处、数据窗口和异常解释，提出最少证据请求，并记录适合的合作决定。','Learn how to spot fake influencers by checking identity, work provenance and metric scope, considering false positives and requesting proportionate evidence.'),
coverAlt:p('蓝色背景上的大字核对、解释、决定，奶油色与珊瑚色标记区分证据步骤。','Large type reading Verify, Explain and Decide on blue, with cream and coral markers separating evidence steps.'),
answer:p('识别所谓“虚假达人”，应把疑点拆成可核验的问题：联系者是否代表正确账号、作品是否属于其贡献、指标是否按相同对象和窗口描述。异常粉丝变化、短评论或低互动率只是线索，不能单独证明买粉或欺诈。先保留来源与时间，检查合理解释，再通过适当商务渠道请求最少必要证据；无法确认时可暂缓具体合作，不需要给人贴上未经证明的标签。',
'To spot fake influencers, turn a suspicion into a verifiable question: does the contact represent the correct account, what contribution did the person make to the work, and do the metrics describe the same object and window? A follower change, short comments or a low engagement rate is a lead, not standalone proof of purchased followers or fraud. Save the source and time, examine reasonable alternatives and request proportionate evidence through an appropriate business route. An unresolved question can justify pausing a specific partnership without labeling the person deceptive.'),
links:[link('账号身份指南','account-identity guide','influencer-finder-tool-account-identity'),link('Media Kit 核对指南','media-kit review guide','what-is-a-media-kit-brand-review'),link('互动数据阅读指南','engagement data guide','read-creator-engagement-data')],
sections:[
s('把一个笼统标签拆成具体疑点','Replace the broad label with a specific issue',
`先写观察，而不是写结论。“对方提供的发布链接与资料包账号不同”可以继续核验；“此人是假达人”既没有指出问题，也混淆身份、数据与商业分歧。记录涉及哪个对象、哪一项说法、哪个来源与时间。

身份冒充、未经说明的作品借用、误报指标与不适合品牌是不同问题。一个真实创作者可能受众不匹配，也可能由代理机构联系；这些都不自动属于欺骗。团队需要知道调查是为确认联系路径、评估作品能力，还是解释某项数字。

优先处理会改变当前决定的疑点。例如发样前需要确认收件合作关系，确定广告用途前需要确认素材条件。不要因为一个可解决的小差异，就无限扩大对个人生活的调查。将记录写成问题，也让接手同事知道什么证据足以结束核验。`,
`Write the observation before the conclusion. The publication link differs from the account in the media kit is investigable. This person is fake neither identifies the issue nor separates identity, data and a commercial disagreement. Record the object, claim, source and time involved.

Impersonation, undisclosed borrowed work, misstated metrics and poor brand fit are different problems. A real creator may have an unsuitable audience or communicate through an agency; neither automatically means deception. Establish whether the check concerns the contact route, work capability or interpretation of a number.

Prioritize questions that change the current decision. Before sending a sample, establish the relevant relationship; before advertising, establish asset conditions. One resolvable discrepancy is not a reason to investigate someone’s private life without limit. A question-based record also tells the next reviewer what evidence would close the check. It creates a bounded task rather than an accumulating collection of negative impressions that cannot be resolved.`),
s('从独立入口确认账号与联系者','Verify the account and contact through an independent route',
`账号身份指南支持保存稳定标识、公开作品和关联路径。比较准确的网址与账号，而不只看显示名、头像或相近拼写。查看作者控制的公开网站或账户之间的联系，保留观察日期；同一名字不说明是同一个人。

FTC 冒充识别建议强调，对不确定消息通过自己独立找到且确认真实的联系方式核验。这里将这个原则用于商务联系：若一封陌生邮件自称代理，从已确认入口核对代表关系，而不是只相信该邮件附带的另一个证明链接。

代理与公司名称不同不必然有问题，关键是能否确认其角色与当前授权。不要索取密码、一次性验证码或无关身份证件来“证明真实性”。适当确认可以是从已知商务入口回复、由创作者确认代理，或核对正式合作资料中的主体。`,
`The account-identity guide supports stable identifiers, public work and relationship routes. Compare exact URLs and accounts rather than display name, avatar or similar spelling alone. Inspect links controlled by the creator across public sites or accounts and date the observation. A reused name does not establish continuity.

The FTC impersonation guidance recommends verifying uncertain messages through contact information independently located and known to be genuine. Apply that principle to business contact: if an unfamiliar message claims agency representation, confirm the relationship from an established route rather than trusting another proof link supplied by that message.

A different agency or company name is not automatically a problem; the issue is confirmation of its current role and authority. Do not request passwords, one-time codes or unrelated identity documents as proof. Confirmation might come through a known business route, creator confirmation of representation or appropriate partnership records. Record what was actually confirmed, because control of a contact channel does not independently establish every performance claim in the same conversation.`,['ftcImpersonation']),
s('核对作品贡献，不只搜索相似画面','Check the contribution behind a work sample',
`Media Kit 核对指南将资料包视为研究入口而不是最终证明。对关键作品回到原始发布，确认作者、时间、完整语境与对方声称的角色。联合制作、品牌发布与创作者本人发布可能不同，需要具体解释。

相同画面可能来自合作、获授权分发、剪辑版本或未经授权复制。仅发现重复，不足以决定是哪一种。请对方说明在该项目中负责出镜、拍摄、剪辑还是其他贡献，并在必要时提供适当的制作或合作依据。不要要求泄露客户保密材料；可以采用可公开核对的替代证据。

如果本次任务依赖原创演示能力，就选相应作品研究。一个集合页收录很多好视频，不自动证明联系者制作了它们。保留未确认贡献，缩小拟议任务或进一步核验，而不是用搜索结果里的相似度自动宣布盗用。`,
`The media-kit review guide treats a portfolio as a research entry rather than final proof. Trace an important sample to its original publication, author, date, context and claimed role. Joint production, brand publication and publication on the creator’s account can involve different contributions.

Repeated footage may reflect collaboration, licensed distribution, editing variants or unauthorized copying. Finding repetition alone does not distinguish them. Ask whether the person appeared, filmed, edited or made another contribution, with suitable production or partnership evidence where necessary. Do not demand confidential client material; an appropriately checkable alternative may answer the question.

If the assignment depends on original demonstration ability, examine work relevant to that skill. A collection containing strong videos does not establish that the contact produced them. Retain an unresolved contribution, narrow the assignment or investigate further rather than turning similarity search into an automatic plagiarism verdict. A focused work discussion can establish more than a large portfolio whose role descriptions remain ambiguous.`),
s('先统一数据对象与窗口','Align the metric object and window first',
`互动数据阅读指南帮助核对分子、分母与时间。资料包的累计观看、公开页面当前值与后台特定日期报表，可能描述不同窗口。先确认账号、内容、日期、单位和是否包含付费分发，再检查数字是否真正冲突。

YouTube 虚假互动政策禁止人为增加指标，也说明公开订阅数与后台可能因验证处理而不同，垃圾账号移除也会影响数量。这说明数据差异需要解释，不证明某个被研究者违规。政策规定与针对个人的证据必须分开。

截图应有足够上下文让接收人知道看的是哪个对象和期间，但无需暴露无关私人资料。若一个总数由多种内容或渠道组成，要求拆分或说明无法拆分；不能将不同窗口硬算出差额后，称其就是虚假流量比例。`,
`The engagement data guide supports numerators, denominators and timing. Lifetime views in a media kit, a current public value and a date-filtered private report may describe different windows. Confirm account, content, date, unit and paid distribution before deciding whether the figures conflict.

The YouTube fake-engagement policy prohibits artificial metric inflation and explains that public and Analytics subscriber counts can differ during verification; spam-account removal can also affect counts. A discrepancy therefore needs explanation, not an automatic finding that the researched person violated policy. Platform rules and evidence about an individual remain separate.

A screenshot should show enough context to identify the object and period without exposing unrelated private information. If a total combines content or channels, request a breakdown or a clear limitation. Subtracting mismatched windows does not produce a valid percentage of fake traffic. Preserve both original observations rather than overwriting one with the number that best fits an initial suspicion.`,['ytFake']),
s('为异常保留合理的替代解释','Keep reasonable alternative explanations visible',
`粉丝突然增加可能与广泛传播、媒体提及、合作活动或其他因素有关；低互动也可能与内容类型、近期停更、受众变化或口径有关。这些是需要核对的可能解释，不是替任何账号自动开脱，也不证明其中一种已经发生。

评论内容可以辅助研究相关性，但短句、表情、语言不同或重复问法不等于机器人。围绕产品的问题、发布语境与样本选择应一起看；不能根据观众姓名、地区或语言，把某类人直接判为虚假受众。

TikTok 真实性政策区分欺骗性冒充与非欺骗的多账号、粉丝或创意表达，也禁止买卖和人为增加互动。团队可以把规则作为检查背景，不能将所有非实名角色、虚拟形象或多个账号都称为违反政策。看具体行为与清楚说明，避免用形式代替证据。`,
`A follower increase could relate to broad distribution, media attention, a collaboration or another factor. Low engagement could relate to format, inactivity, audience change or measurement. These are alternatives to investigate, not automatic exoneration or proof that one explanation occurred.

Comment content can inform relevance, but short replies, emojis, another language or repeated questions do not establish bots. Examine product questions, publication context and sample selection together. Names, countries and language should not become shortcuts for labeling people inauthentic.

The TikTok authenticity policy distinguishes deceptive impersonation from nondeceptive multiple accounts, fan content or creative expression while prohibiting traded or artificially inflated engagement. Use the rule as context rather than calling every pseudonymous character, virtual persona or multi-account creator a violation. Investigate behavior and disclosure instead of treating appearance as evidence. Where a possible alternative remains unconfirmed, preserve it as such; replacing one unsupported accusation with an unsupported reassuring story does not improve the review.`,['tiktokAuthenticity']),
s('提出能回答疑点的最少证据请求','Request the minimum evidence that answers the question',
`将请求写成具体问题，例如“这两个报告是否使用相同的七天窗口？”或“请确认你在该作品负责的部分”。说明用途与可接受替代方式。一次要求全部后台、客户名单和财务资料，通常不能帮助回答一个很小的指标问题。

示例请求可以写：“为评估这次演示合作，我们需要确认资料包数字对应哪条内容与哪个观察窗口。请提供能显示对象、期间和指标定义的相关记录，或说明是否合计多个版本。可遮挡无关资料，我们不需要账号登录权限。我们会用回复核对该项数字，仍缺信息时再说明影响。”这是编辑示例，应按真实任务调整，不能自动发送。

可以在适当授权下查看相关报表或导出，保留对象、窗口与来源，不需要接管创作者账号。对方无法提供某字段时，记录数据不可用以及对决定的影响；不能把拒绝分享私人信息自动作为欺诈证据。

提出明确的后续状态：已解释、待补充、相互矛盾或不满足本任务的证据要求。每个状态都应连接观察与下一动作，而不是只有一个“可疑”按钮。必要时暂停范围相关的决定，其他已经独立确认的事项仍可按各自证据处理。`,
`Make the request specific: do these reports use the same seven-day window, or what part of this work did you produce? Explain the purpose and acceptable alternatives. Asking for an entire account, client list and financial history rarely answers a narrow metric question.

A suitable editorial example is: To evaluate this demonstration assignment, we need to confirm which content and observation window the media-kit figure describes. Please share a relevant record showing the object, period and metric definition, or explain whether it combines versions. Unrelated information can be hidden; we do not need login access. We will use the response to check this figure and explain any remaining decision impact. Adapt this wording to the actual task rather than sending it automatically.

Appropriate authorized report viewing or export can retain object, window and source without taking over the creator’s account. If a field cannot be supplied, record unavailability and its effect on the decision. Refusal to share private information is not automatically evidence of fraud.

Use clear states such as explained, awaiting evidence, contradictory or insufficient for this assignment. Connect each to an observation and next action rather than a single suspicious flag. Pause the relevant decision if needed while treating independently confirmed matters according to their own evidence. The request should have a useful stopping point: once the stated uncertainty is answered, do not keep escalating collection merely because additional private information might exist.`),
s('将检测工具输出留在辅助层','Keep detection outputs in a supporting role',
`第三方质量评分、异常标记或模型解释，可以帮助决定先研究哪里，但应记录它描述什么、数据日期、覆盖范围和已知限制。分数不是法证结论，缺少算法细节也不能被忽略后当成独立事实。

同一数据源被多个工具转述，不构成多份相互独立的确认。若工具无法显示相关依据，进一步查看实际作品与适当来源；不能把“模型认为像”变成公开指控。QuickKOL 的达人发现与研究也不能保证识别所有虚假互动。

更有用的输出是具体待核问题，而不是永久黑名单。保存人工核对的结果并及时修正，让已经解释的差异不继续在下一轮候选名单中被复制。对工具没有覆盖的账号，保留未知，而不是自动认为完全可靠或存在问题。`,
`A third-party quality score, anomaly flag or model explanation can prioritize research if its object, data date, coverage and limitations are retained. A score is not a forensic conclusion, and missing methodological detail should not disappear when the output enters a decision.

Several tools repeating one upstream dataset are not independent confirmations. If supporting evidence cannot be shown, inspect the actual work and suitable sources rather than turning a model’s resemblance judgment into a public allegation. QuickKOL’s discovery and research positioning does not guarantee detection of every artificial interaction.

A useful output identifies a question rather than creating a permanent blacklist. Retain the human review and correct resolved discrepancies so they do not propagate into the next shortlist. An uncovered account remains unknown, not automatically trustworthy or problematic. The same caution applies to a clean score: it can describe what the tool assessed without guaranteeing every identity, rights or commercial claim in the partnership.`),
s('用一个核验情景区分误差与未解决问题','Distinguish a resolved mismatch from an open issue',
`以下是假设。资料包写某段视频有80,000观看，公开页为50,000，团队首先以为多报。核对后发现资料包合计两个版本，而公开页只对应其中一个。应该记录原说法范围不够清楚，并要求使用分开的对象，不直接把30,000差值当作买量。

若在相同对象与窗口下仍无法解释差异，就保存冲突与请求记录，暂缓依赖该数字的决定。它仍不是证明个人主观欺骗的完整证据。团队可以因为证据不足不继续当前合作，同时避免把未经确认原因传播为事实。

如果独立渠道也无法确认联系者代表该账号，则身份问题单独未解决。不要让指标解释成功掩盖身份缺口，也不要因为身份真实就默认所有数字真实。分层核验使不同证据各自支持合适结论。`,
`Consider a hypothetical media kit reporting 80,000 views while a public page shows 50,000. The team initially suspects exaggeration, then finds the kit combined two versions while the page describes one. Record unclear scope and request separate objects rather than treating the 30,000 difference as purchased traffic.

If the same object and window still produce an unexplained conflict, retain it and the request, and pause a decision that depends on the figure. That is not complete proof of intentional deception. The team can decline a particular partnership for insufficient evidence without distributing the unconfirmed cause as fact.

If an independent channel also cannot confirm the contact’s representation, identity remains a separate open issue. Explaining metrics should not conceal that gap, and genuine identity should not validate every number. Layered checking lets each piece of evidence support the appropriate conclusion.`),
s('把结果写成有限、可更新的合作决定','Write a limited, revisable partnership decision',
`最终记录说明核验对象、时间、证据、解释、未知、负责人和决定。可选择继续、缩小范围、补充证据或不合作。措辞以本次任务所需条件为准，不给人永久贴标签。

出现明确平台违规或冒充证据时，按适当正式渠道处理，保存具体事实并避免扩大传播。事实与解释仍应分开；团队内部需要知道如何行动，不需要一个未经证明的行业流言。

识别问题的目的，是选择有依据的合作并保护双方免受误判。能够解释一个异常与能够确认一个风险，同样都是有用结果。核验记录只向相关负责人交接，不把尚未解决的疑点当成已确认的公开指控。`,
`The final record identifies subject, time, evidence, explanation, unknowns, owner and decision. Continue, narrow scope, request evidence or decline according to conditions needed for this assignment, without permanently labeling someone.

For clear evidence of impersonation or a platform violation, use the appropriate formal route and retain specific facts without unnecessary dissemination. Keep observation and interpretation separate. The team needs an actionable record, not an unproven industry rumor.

The purpose is an evidence-based partnership decision that also avoids false accusations. Resolving an anomaly and confirming a risk are both useful outcomes. Share the review with appropriate owners rather than publishing an unresolved allegation.`)
],
table:{title:p('从疑点到可核验问题','From suspicion to a verifiable question'),headers:[p('观察','Observation'),p('核对','Check'),p('合适状态','Appropriate state')],rows:[[p('联系者名称不同','Different contact name'),p('独立入口确认代表关系','Confirm representation independently'),p('已确认或身份待确认','Confirmed or identity unresolved')],[p('作品画面重复','Repeated footage'),p('原发布、角色与使用解释','Original publication, contribution and use'),p('角色明确或贡献待核','Role clarified or contribution unresolved')],[p('数字不一致','Numbers differ'),p('对象、窗口、单位与分发','Object, window, unit and distribution'),p('口径已解释或冲突待核','Definition explained or conflict unresolved')],[p('异常评分','Anomaly score'),p('来源、覆盖与可复核依据','Source, coverage and evidence'),p('研究线索，不是欺诈结论','Research lead, not a fraud finding')]],note:p('QuickKOL 编辑核验方法；不是法证检测或对任何具名创作者的指控。','QuickKOL editorial verification method, not forensic detection or an allegation against a named creator.')},
tool:{title:p('核验与误判检查','Verification and false-positive checks'),intro:p('每项疑点都要能回答，结论与证据范围一致。','Make each issue answerable and match conclusions to evidence.'),items:[p('记录具体观察，而不是先给人贴标签。','Record a specific observation before labeling a person.'),p('从独立商务入口确认账号与角色。','Confirm account and role through an independent business route.'),p('作品贡献与指标口径分别核对。','Check work contribution and metric scope separately.'),p('合理解释、缺失与冲突分别保留。','Separate alternatives, missingness and conflict.'),p('不索取密码、验证码或无关私人资料。','Do not request passwords, codes or unrelated private data.'),p('未确认可以暂停合作，不等于已证明欺诈。','An unresolved issue can pause a partnership without proving fraud.')]}
});
