import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:15,
summary:p('教育向理解Instagram假粉说法：区分公开指标、疑似标记与已证实行为，核对数据来源，并把不确定性写进报告和修正记录。','An educational guide to fake-Instagram-follower claims: distinguish public metrics, suspected flags and established conduct, check sources and preserve uncertainty in reports and corrections.'),
description:p('怎样负责任地解读fake Instagram followers：学习互动和增长信号的限制、平台疑似标记、来源交叉核对与报告措辞，不凭单一指标指控个人。','Interpret fake Instagram follower claims responsibly through metric limits, suspected platform flags, source cross-checks and careful reporting without individual accusations.'),
coverAlt:p('珊瑚色底上以奶油色大字分别排列信号、说法与证据，中间用黑色细线分隔。','Large cream SIGNAL, CLAIM and EVIDENCE typography separated by black rules on a coral background.'),
answer:p('Fake Instagram followers相关说法应区分三层：看得见的计数或互动、平台或工具的疑似判断，以及有充分证据支持的具体事实。低互动、快速增长、重复评论或账号外观，都不能单独证明某人购买粉丝或故意误导。本文是教育向博客，帮助品牌团队学习资料核对、来源限制与负责任表达，不提供个人名单、真假评分、研究筛选服务或百分百识别承诺。理解风险不需要把未知写成指控；更好的报告会说明观察了什么、可能怎样解释，以及还不知道什么。',
'Claims about fake Instagram followers need three distinct layers: visible counts or interactions, suspected classifications from platforms or tools, and specific facts supported by sufficient evidence. Low interaction, rapid growth, repeated comments or an account’s appearance cannot independently establish that someone purchased followers or deliberately misled anyone. This educational guide helps brand teams learn source checks, evidence limits and responsible wording. It supplies no individual list, authenticity score, screening service or promise of complete identification. Understanding risk does not require turning unknowns into accusations. A clearer report states what was observed, how it might be interpreted and what remains unresolved.'),
links:[link('Instagram指标解释','Instagram metric explanation','instagram-analytics-format-decision-matrix'),link('互动率指标约定','engagement-rate metric contract','engagement-rate-formula-metric-contract'),link('历史受众证据阅读指南','historical audience-evidence guide','web3-instagram-follower-quality-2024-evidence-literacy'),link('活动衡量指南','campaign-measurement guide','creator-campaign-measurement')],
sections:[
s('先把fake这个词拆成不同主张','Separate the different claims hidden inside fake',
`一份报告可能用fake指平台疑似垃圾、工具模型分类、不活跃账号、重复账号，或某种已确认的虚假指标。没有定义时，这些性质不同的对象容易被压缩成同一种指控。

先写资料自己的标签、提供者和解释，不把供应商术语直接转成个人行为事实。如果标签没有方法说明，保留定义未取得状态，不能由编辑补出确定含义。

再明确文章讨论的是资料怎样被理解，而不是谁应该被列入名单。教育内容可以说明虚假社会证明的风险，同时拒绝用外观、语言或一个百分比替代证据。

一个可引用的句子应带范围：“该来源在指定窗口给出疑似分类，方法与覆盖见说明”。这比删掉限定后写“已证实假粉”更准确，也让下一位读者知道需要核对什么。`,
`A report may use fake for suspected platform spam, a model classification, inactivity, duplicate accounts or a particular established form of false indicator. Without definitions, different objects can collapse into the same accusation.

Start with the source’s actual label, provider and explanation rather than convert vendor terminology directly into a fact about personal conduct. If no method description is available, preserve the missing definition instead of supplying a certain meaning yourself.

Clarify that the article concerns interpretation of information, not who belongs on a list. Educational material can explain the risk of fabricated social proof without using appearance, language or one percentage as a substitute for evidence.

A citable sentence retains scope: the source assigned a suspected classification for the specified window, with method and coverage described separately. That is more accurate than removing qualifications and writing proven fake followers. It also gives the next reader a concrete question to check rather than an emotionally strong conclusion that cannot be traced to the underlying observation.`),
s('公开互动与独立人数不是同一指标','Public interactions are not unique people',
`Rival IQ互动事件说明给出其供应商口径，例如公开Instagram互动采用点赞与评论字段。这说明某个工具怎样组织可见事件，不证明所有平台当前全部互动都只有这些字段。

一次动作与一个人不同。同一人可以产生不同动作；关注者也不等于每条内容的实际观看者。仅用可见互动除以粉丝数，不能得到“真实关注者比例”。

Instagram指标解释可帮助区分内容形式与数据用途。比较报表前核对对象、窗口和权限，避免将后台可得指标与公开可见字段当作完整同一套数据。

没有取得的字段标未知，不填成零。某一来源看不到某类互动，不说明这种行为没有发生，更不直接说明账号缺少真实受众。`,
`The Rival IQ interaction-events guide describes its provider definitions, including likes and comments for public Instagram engagement. This explains a tool’s organization of visible events; it does not establish that every current native-platform interaction consists only of those fields.

An action and a person are different units. One person can perform different actions, and followers are not necessarily the actual viewers of every item. Dividing visible interactions by followers does not produce the proportion of real followers.

The Instagram metric explanation helps distinguish formats and measurement purposes. Before comparing reports, check object, window and access rather than treat authorized account metrics and public fields as the same complete dataset.

Mark unavailable fields unknown instead of zero. A source’s inability to observe an interaction does not establish its absence or the absence of real audience members. Keeping the field definition visible prevents a technically correct arithmetic result from acquiring an unsupported meaning about identity, authenticity or intention once it moves into a management slide.`,['rivalEvents']),
s('平台疑似标记仍需要按原意解释','Interpret a platform’s suspected flag on its own terms',
`Meta垃圾互动工具公告在2023年发布、页面标注2024年更新，描述疑似垃圾或机器人关注的复核区域，并保留批准非垃圾账号的路径。这类机制本身包含复核，而不是对外提供个人造假裁决。

文章引用该公告，只说明平台公开描述过的背景，不保证现在每个账号都有相同入口，也不提供未经当前界面核验的逐步按钮教程。

“被标记待复核”不能简写成“已确认购买”。标记涉及系统判断，购买涉及行为，知情涉及另一类事实；把它们合并会让证据链跳过必要步骤。

同样，没有标记也不证明绝无问题。教育性解释应双向保留限制，不把工具讲成完美检测器，也不因存在不确定性就忽略资料里真正能够观察到的内容。`,
`The Meta spam-interaction tools announcement, published in 2023 with a 2024 update marker, describes a review area for suspected spam or bot followers and a route to approve accounts considered not to be spam. The mechanism includes review rather than providing a public verdict about personal misconduct.

This citation establishes the published background, not identical access for every account now. It does not support an exact current-menu walkthrough without checking the relevant interface.

Flagged for review should not be shortened to confirmed purchase. A flag concerns a system classification; purchase concerns conduct; knowledge concerns another factual question. Combining them skips necessary links in the evidence chain.

Likewise, absence of a flag does not establish that no issue exists. An educational explanation retains limits in both directions. It should neither present a perfect detector nor ignore genuinely observable information because uncertainty exists. The practical result is a more accurate description of the flag, including its provider, scope and date, without extending it into a personal allegation.`,['metaSpam2023']),
s('用算例看懂分母变化，而不是推算假粉','Use arithmetic to understand denominator changes',
`假设两份教学记录采用相同动作定义，各有500次互动；粉丝分母分别是20,000和25,000。描述性率从2.5%变成2%，即下降0.5个百分点。这不是实际账号或基准。

该算例说明，率可以因为分母不同而改变；它不说明新增5,000关注来自哪里，也不能把它们全当成假粉。若两个窗口、内容组合或字段还不同，就有更多可比性问题。

互动率指标约定帮助保留动作、分母、单位与版本。先看观察是否可比，再问为什么变化；不要看到低于某个自定阈值，就给未知比例赋一个精确数字。

增长图也一样。净变化没有完整说明新增、流失、平台处理、记录误差或其他原因。列出可能解释作为待核对问题，不把其中任一种写成已发生事实。`,
`Suppose two teaching records use the same action definition and each contains 500 interactions, with follower denominators of 20,000 and 25,000. The descriptive rate changes from 2.5% to 2%, a decrease of 0.5 percentage points. These are hypothetical records, not accounts or benchmarks.

The example shows that a rate can change with its denominator. It does not identify where 5,000 additional follows came from or classify them all as fake. Different windows, content mixes or fields would introduce further comparability questions.

The engagement-rate metric contract preserves actions, denominator, unit and version. Check comparability before asking why a change occurred. Falling below an internally chosen threshold should not produce a precise estimate of an unknown proportion.

A growth chart has similar limits. Net movement does not fully explain gross additions, departures, platform moderation, recording errors or other causes. List possible explanations as questions to check rather than describe one of them as an established event. Arithmetic can explain a chart without resolving the identity or motivation behind it.`),
s('交叉核对来源，而不是平均两个评分','Cross-check sources rather than average two scores',
`阅读两份报告时，先核对各自原始数据、观察时间、覆盖与模型定义。两个工具如果依赖同一批公开资料，不自动成为两个独立证据。

评分不同，先问是否同一对象和口径；无法确认时保留分歧。不要将一个工具的百分比与另一个工具的等级平均，得到一个看似更客观的新数值。

模型输出应明确标为估计或分类，并说明未知字段。即使供应商宣传高准确，也需要知道测试对象与方法；本文没有做准确率实验，不给检测排名。

教育报告可记录“来源甲如此标注，来源乙采用不同定义，现有资料不能对齐”。这句话保留了可复查事实，不需要为不一致强行选定某个人一定有问题。`,
`When reading two reports, inspect original inputs, observation time, coverage and model definition. Two tools relying on the same public material do not automatically provide two independent pieces of evidence.

If scores differ, first ask whether objects and definitions match. Preserve disagreement when that cannot be established. Do not average one tool’s percentage with another’s category to create a supposedly more objective result.

Label model outputs as estimates or classifications and state missing fields. Even a promotional accuracy claim needs a test population and method to be interpreted. This article has performed no accuracy experiment and provides no detection ranking.

An educational report can say that one source uses a particular label while another uses a different definition and the available information cannot align them. That preserves reviewable facts without resolving disagreement by deciding someone must be at fault. The value of cross-checking is to understand whether evidence converges under comparable conditions, not simply to increase the number of logos shown beside an unsupported conclusion.`),
s('评论样例与账号外观不能代表全部受众','Comments and account appearance do not represent an entire audience',
`少量重复评论可以描述其文字相似性，但不能自动证明全部评论来源相同、使用机器人或由账号所有者安排。观察样例与总体比例需要不同资料。

评论语言、头像、发帖少或不活跃都不能单独确认真假。个人可能选择低公开度或不同语言表达，不应因外观不符合预期就被纳入确定的负面分类。

如果教育材料使用示例，采用虚构、去标识内容并说明用途，不发布普通用户的姓名、头像或其他无关资料来加强指控感。截图也应保留必要语境而避免多余暴露。

描述样本时说明怎样选取、观察多少及有哪些遗漏。便利样本只能支持相应范围的观察，不能按几个可见账号外推整个关注者群体的精确构成。`,
`A few repeated comments can support a description of textual similarity without automatically establishing a common source, automation or direction by the account owner. An observed example and a population proportion require different information.

Comment language, avatar, limited posting or inactivity cannot independently establish authenticity. People may choose limited public visibility or communicate in different languages; appearance that differs from expectations is not a sufficient basis for a definitive negative classification.

Educational examples should be fictional or appropriately de-identified and labeled for their purpose. Avoid publishing ordinary users’ names, avatars or unrelated information to make an allegation feel stronger. Screenshots need necessary context without unnecessary exposure.

When describing a sample, explain selection, size and omissions. A convenience sample supports observations within that scope, not a precise estimate for the entire follower population. This is a reporting principle, not an instruction to inspect more private profiles until a preferred conclusion appears. Sometimes the responsible conclusion is that the available sample cannot answer the question.`),
s('监管概念不能从异常图表直接推定','Do not derive a regulatory finding from an unusual chart',
`FTC虚假社交指标问答在美国语境中说明相关条款针对具体分发、购买等行为与条件，也区分真实人自主关注。本文用它解释为何需要具体事实，不提供个人违法认定。

存在疑似关注者，并不自动说明账号所有者购买或知情。某个报告写fake，也不等于已经符合监管定义的全部要件；资料标签与法律结论要分开。

品牌教育可以强调不制造或误用虚假社会证明，同时让具体问题由适当渠道和有权限的人员处理。不要通过公开文章煽动围攻、骚扰或要求普通用户提供私人身份证明。

监管资料可以支持对概念的理解，但不为本篇算例、工具估计或个人猜测加盖官方确认。引用附近应说明适用地区与有限用途。`,
`The FTC fake-indicator FAQ explains a US provision concerning particular conduct and conditions, including distribution or purchase, while distinguishing real people choosing to follow. Here it explains why specific facts matter; it supplies no finding about an individual’s liability.

Suspected followers being present does not automatically establish purchase or knowledge by an account owner. A report using fake does not establish every element of a regulatory definition. Keep a source label separate from a legal conclusion.

Brand education can emphasize avoiding fabricated social proof while routing particular concerns through appropriate channels and authorized people. A public article should not encourage harassment or demand private identity documents from ordinary users.

Regulatory material helps explain concepts without officially validating this guide’s teaching arithmetic, a tool estimate or personal speculation. State geography and the limited purpose beside the citation. This prevents a regulatory link from making an educational discussion appear to be an official investigation or an independently confirmed accusation.`,['ftcIndicators']),
s('把不当结论改成可复查的报告句子','Rewrite an unsupported conclusion into a reviewable statement',
`将“20%一定是假粉”改成“该来源在所述窗口估计20%属于其特定分类；方法、样本与限制见说明”，前提是来源真的提供这个值。此处20%只是措辞练习，不是实测资料。

若连方法或分母都没有取得，不能只加一句“可能”就保留精确比例。应说明无法核验，删除无依据数值，保留实际能够观察的内容。

修正时同时检查标题、摘要、表格、图注与分享文案。已经传给同事的版本也标明替代，不让旧的强烈结论在截图里继续存在。

历史受众证据阅读指南进一步解释时间与来源链。现在取得的新证据可以支持更新，但不能假装原先没有依据的说法当时已经得到证明。`,
`Replace 20% are definitely fake with a statement that the source estimates 20% within its stated classification and window, with method, sample and limits explained—only if the source actually provides that value. Here 20% is a wording exercise, not observed research.

If method or denominator is unavailable, adding possibly is not enough to preserve a precise percentage. State the verification limit, remove unsupported precision and retain what can actually be observed.

During correction, check heading, summary, table, caption and sharing copy together. Mark previously distributed versions as replaced so the stronger old conclusion does not continue through screenshots.

The historical audience-evidence guide explains timing and provenance further. Newly acquired evidence may support an update without pretending that an originally unsupported claim was already proven at the time. A correction should identify what changed and which uncertainties remain, giving readers a usable account of the evidence rather than an unexplained edit that leaves the original inference intact.`),
s('交付数据素养，不交付个人裁决','Deliver data literacy rather than an individual verdict',
`最终学习记录保留对象、来源、窗口、观察、解释和未知。它可以帮助团队识别报告里的推断跳跃，而不是为某个人贴真假标签。

活动衡量指南可继续说明计数、受众反应与结果怎样区别。没有单个指标能够代替完整任务判断，本篇也不把教育内容转成达人筛选或发现服务入口。

读者应能带走三个习惯：先理解指标，再交叉核对证据，最后按证据强度表达。明确未知和允许修正，会让关于粉丝质量的讨论更可引用、更公平，也更容易复核。`,
`The final learning record retains object, source, window, observation, interpretation and unknowns. It helps a team recognize inferential gaps in a report rather than attach an authenticity label to a person.

The campaign-measurement guide further distinguishes counts, audience response and outcomes. A single metric cannot replace the actual question, and this article does not turn education into an entry point for creator screening or discovery services.

Readers should leave with three habits: understand the metric, cross-check the evidence and express conclusions at the supported strength. Explicit unknowns and correction paths make follower-quality discussions more citable, fair and reviewable.`)
],
table:{title:p('从信号到说法的教育性区分','Educational distinctions between signals and claims'),headers:[p('资料','Material'),p('可说什么','Supported wording'),p('不能直接说','Unsupported leap')],rows:[[p('增长或互动变化','Growth or interaction change'),p('指定范围观察到差异','A difference was observed within scope'),p('某人购买或授意','Someone purchased or directed it')],[p('平台待复核标记','Platform review flag'),p('系统标记为疑似','The system flagged a suspected state'),p('已证实个人造假','Personal fraud is established')],[p('模型分类','Model classification'),p('该方法给出的估计或标签','An estimate or label under that method'),p('平台官方准确率保证','An official platform accuracy guarantee')],[p('少量样例','Limited examples'),p('样本范围内的描述','Description within the sample'),p('全部受众的精确真假比例','Exact authenticity share of the whole audience')]],note:p('教育框架，不是检测器、个人评分或名单。500/20,000与500/25,000是假设算例。','Educational framework, not a detector, individual score or list. The 500/20,000 and 500/25,000 calculations are hypothetical.')},
tool:{title:p('发布粉丝质量说法前','Before publishing a follower-quality claim'),intro:p('让表达强度与证据强度一致。','Match the strength of wording to the evidence.'),items:[p('标签、观察与事实分开。','Separate labels, observations and facts.'),p('互动事件没有换成真实人数。','Do not turn interaction events into real-person counts.'),p('疑似状态与模型限制保留。','Retain suspected states and model limits.'),p('多个来源核对独立性。','Check independence across sources.'),p('未从样例外推完整比例。','Do not extrapolate a complete share from examples.'),p('修正覆盖全部可见表述。','Correct every visible expression of the claim.')]},
cta:{title:p('继续学习指标与证据','Continue learning about metrics and evidence'),body:p('理解计数、受众反应与业务结果的区别，用清楚的来源与限制支持报告。','Understand the distinction between counts, audience response and business outcomes, supporting reports with clear sources and limits.'),label:p('阅读衡量指南','Read the measurement guide'),href:'/blog/creator-campaign-measurement/#answer'}
});
