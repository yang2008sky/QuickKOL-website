import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:2,
summary:p('解释 KOL 的常见含义，并把模糊的“找几个 KOL”转成能讨论受众、内容、发布与证据的合作任务。','Understand what KOL means, then turn a vague request for KOLs into a clear assignment covering audience, contribution, publication and evidence.'),
description:p('KOL meaning：了解 Key Opinion Leader 的营销用法，区分称谓、专业贡献与合作条件，并用六项输入完善品牌 Brief。','Learn the meaning of KOL and use six practical brief fields to distinguish a title, relevant contribution, publication duties and commercial conditions.'),
coverAlt:p('明亮奶油色陈列架上的黑色对话形状、蓝色纸隔页、珊瑚色索引标签和空白任务卡夹。','Black speech-shaped objects, blue paper dividers, coral index tabs and a blank task-card folio on a bright cream shelf.'),
answer:p('KOL 是 Key Opinion Leader 的缩写，常译为“关键意见领袖”。具体营销材料可能用它指领域内有影响的人，也可能把它用作付费品牌内容创作者的称谓。品牌需要在 Brief 中说明本项目采用哪种含义，再分别写清希望对方贡献什么、面向谁、在哪里发布与如何确认。这比只指定一个称号更有用；KOL 一词本身不证明专业资格、合作意愿或任何结果。',
'KOL stands for Key Opinion Leader. In marketing conversations it can refer to a person with influence in a relevant field, while some industry terminology uses it for a paid branded-content creator. State what the term means in this brief, then specify contribution, audience, publication and evidence. The acronym alone establishes neither credentials, willingness to collaborate nor results. For a brand team, the useful question is what work this person is being considered for and why the available evidence supports that role.'),
links:[link('专业贡献核对指南','expert-contribution review guide','key-opinion-leader-expert-contribution-review'),link('项目输入与审批指南','campaign brief guide','write-a-useful-campaign-brief'),link('合作范围清单','collaboration scope checklist','creator-contract-scope-checklist')],
sections:[
s('为什么先写明本项目里的含义','State the meaning used in this project',
`IAB UK 术语说明把 KOL 描述为通常处于较高粉丝层级、收费制作品牌内容的创作者。这是一种营销术语用法，不能把它扩展成全球统一的粉丝门槛，也不能据此认定每位被叫作 KOL 的人都是某领域专家。

在团队内部，先确认使用这个词的人究竟想得到什么。传播同事可能需要有相关受众的发布者，产品同事可能希望有人解释技术限制，制作同事可能只是需要一位可信的演示者。把不同期待列出来，可以发现称谓相同而任务不同的情况。

写一条项目定义即可，例如“本项目的 KOL 指拟邀在相关专业受众中解释指定使用问题的独立创作者”。这是编辑建议，不是行业认证。若发布尚未商定，在任务里保留待确认；不要用一个看似熟悉的缩写替代实际讨论。`,
`The IAB UK glossary entry describes a KOL as a creator usually in a higher-following tier who makes branded content for a fee. This is one marketing use, not a universal follower threshold or evidence that everyone called a KOL is a subject specialist.

Ask what the colleague using the term actually needs. Communications may want a publisher with a relevant audience; product colleagues may want an explanation of technical limitations; production may need a credible demonstrator. Listing these expectations can reveal different assignments hidden behind the same label.

Use a project definition such as an independent creator being considered to explain a specified use question to a relevant professional audience. This is an editorial recommendation, not a credential. Keep publication pending if it has not been discussed. A familiar acronym should make conversation easier rather than replace it. Retain the definition beside the brief so a new colleague can understand the intended role without having attended the original meeting.`,['iabKol']),
s('把称谓与专业贡献分别记录','Record the title separately from the contribution',
`专业贡献核对指南关注某个人能够在哪个问题、什么范围内提供有依据的解释。本篇处理更早的输入：品牌是否确实需要专业解释，还是内容示范、主持或传播？不同任务需要的作品证据不同。

如果要讲解软件工作流程，保存与该流程相关的公开作品，并说明它支持哪种能力。若要证明专业资格，使用适当资格来源另行核对。一个好的演示视频可以说明表达方式，却不自动证明作者有权对所有技术或专业问题作出判断。

把“因为他是 KOL”改写为具体理由，例如“这份作品清楚解释了我们需要讨论的操作条件”。也要写未知事项：尚未核对目标市场受众，或没有找到当前产品的体验。这样既能保留候选，也不会把推断悄悄升级为事实。`,
`The expert-contribution review guide concerns the question and scope in which someone can offer supported explanation. This article addresses an earlier input: does the brand need expertise, demonstration, hosting or distribution? Those roles call for different work evidence.

For a software workflow, retain a relevant published example and explain which capability it supports. If a qualification matters, verify it through the appropriate credential source separately. A clear demonstration can show expression without authorizing conclusions about every technical or professional question.

Replace because they are a KOL with a reason someone can check: this example explains the operating condition we need to discuss. Record unknowns too, such as unverified audience geography or no observed experience with the current product. This retains a candidate without quietly promoting inference into fact. A brief that can name its evidence is also easier to revise: if the proposed contribution changes, the team knows which work samples need another look instead of relying on the title indefinitely.`),
s('用六项输入替代“找十个 KOL”','Replace a headcount request with six inputs',
`项目输入与审批指南可以整理六项必要输入：受众与市场、要回答的问题、希望完成的贡献、发布与承接、已确认产品事实、负责人及时间。这里的六项是编辑组织方法，不是所有项目必须采用的行业标准表格。

先写受众在什么情况下需要这个答案，再写选择理由。消费品可能涉及安装或护理，B2B 软件可能涉及具体工作步骤，行业组织可能需要清楚解释公开研究。不要为了套一个达人模板，把所有任务都改成带货。

发布与承接要分开。创作者在本人账号发布、品牌收到文件后发布、线下活动主持，分别对应不同安排。未确认的平台、语言、档期、许可或数据需求，留作问题交给有权限的人确认。人数应由任务覆盖与资源形成，而不是先选一个整数再填满名单。`,
`The campaign brief guide can organize six inputs: audience and market, question to answer, intended contribution, publication and destination, confirmed product facts, and owner with timing. These six are an editorial structure, not a mandatory industry-standard form.

Describe when someone needs the answer before recording the selection reason. Consumer products may involve installation or care; B2B software may involve a workflow; an industry organization may need a clear account of published research. Do not turn every assignment into a sales demonstration to fit a familiar creator template.

Separate publication from destination. Creator-account publication, file delivery for brand publication and an offline hosting role are different arrangements. Leave unconfirmed platform, language, availability, permission and data requirements as questions for the appropriate owner. Headcount should follow coverage and resources rather than a round number that the team then fills. These inputs give discovery a useful direction while allowing a smaller or different collaboration to emerge from actual research.`),
s('理解影响力与营销关系的联系','Understand influence in the marketing relationship',
`AMA 达人营销说明从能影响潜在购买者的人与品牌传播活动解释这一领域，其中的角色不只一种。它支持将称谓放回营销任务，但没有证明某个账号一定能改变本品牌受众的行为。

研究相关作品和受众证据时，说明它们与本次问题的关系。公开关注人数描述一个账户规模，不单独说明相关受众、解释质量或实际决定权。跨平台粉丝合计也不能直接写成唯一触达人数。

对于学习型项目，成功可以先围绕清楚说明某项问题设计，再选择合适观察；对于销售任务，则还需要产品、页面、价格与履约等条件。不能用一个 KOL 称号跨过中间证据。品牌可以提出工作假设，但需要把假设和已知结果分开保存。`,
`The AMA influencer marketing overview explains the field through people with influence over potential buyers and brand communication around them, involving more than one possible role. It puts terminology back into the marketing task without proving that a particular account changes behavior for this brand.

When researching work and audience evidence, explain the connection to the question. Public following describes account scale without independently establishing relevant viewers, explanation quality or purchasing authority. Adding followers across platforms does not produce unique reach.

For an educational project, define a useful explanation and a suitable observation. Sales-oriented work additionally depends on product, destination, pricing and fulfillment conditions. A title cannot replace the evidence between a proposed partnership and its intended result. Keep a working hypothesis separate from an observed outcome. This helps colleagues understand why relevant influence is a question to investigate rather than a property the brand can purchase in a fixed amount from a label.`,['ama']),
s('称谓不能替代范围、费用与许可','Do not let the label replace scope and conditions',
`合作范围清单帮助把内容数量、版本、发布对象、时间、修改与使用条件写清。“一位 KOL 合作”不是可以比较的报价单位；同样一句话可能指一场主持、一份文件或包含多次发布与广告用途的项目。

先给可讨论的范围，再请求相应条件。不要因为对方接受了初步沟通，就把独家、持续发帖或无限期复用写成已经同意。费用也不能仅凭称谓或粉丝量推算，实际制作、发布、许可与工作安排会影响讨论。

在询价材料里区分必需项与可选项。品牌如果暂时只需要一份操作解释，就没有必要先要求所有渠道与用途。接收人可以据具体内容给出回复，团队也能看出价格差异是否来自不同范围，而不是简单把较高报价认定为不合理。`,
`The collaboration scope checklist helps specify quantity, versions, publication objects, timing, revisions and use. One KOL collaboration is not a comparable pricing unit: the phrase could describe hosting, a file or a project with several publications and advertising uses.

Offer a discussable scope before asking for conditions. Acceptance of an introductory conversation does not establish exclusivity, continuing posts or indefinite reuse. Price cannot be inferred solely from a title or follower count; production, publication, licensing and work arrangements affect the discussion.

Separate essential and optional items in a request. A brand needing one operational explanation need not demand every channel and use in advance. Specific scope lets the recipient respond and reveals whether price differences concern different work rather than automatically making the higher quotation unreasonable. If the team changes a requirement, preserve the change and let the relevant parties confirm its effect before treating the earlier response as a final commitment.`),
s('付费关系与真实表达仍需明确','Keep relationships and truthful expression explicit',
`FTC 背书问答在美国背景下强调背书真实、不误导，以及可能影响评价的非预期重要关系需要适当披露。专家或 KOL 称谓不会使这些问题消失，也不能把费用换成赠品后就默认没有需要说明的关系。

在项目里写清实际关系与目标市场，再由适当负责人确认具体表达。本文不提供全球统一法律结论，也不要求所有内容机械使用同一个标签。平台功能、文案语言与具体发布形式可能影响最终处理，应按实际情况核对。

品牌提供产品事实与必要边界，创作者描述真实发生的经验。没有试用，就不能为了配合“有影响力的人推荐”而虚构体验；需要证据的产品主张也不能只靠一个称谓成立。把这些要求放进内容讨论，比只在结尾添加一句注意披露更有效。`,
`The FTC endorsement FAQ emphasizes truthful, nonmisleading endorsements and suitable disclosure of unexpected material relationships in its United States context. Expert or KOL terminology does not remove those questions, and substituting a gift for cash does not establish that there is no relevant relationship.

Record the actual relationship and intended market, then have the appropriate owner confirm the expression. This article makes no universal legal determination or requirement to use one label mechanically. Platform features, language and publication format may affect the practical treatment and should be checked for the situation.

The brand supplies confirmed facts and limitations; the creator describes actual experience. Without a trial, do not invent experience to fit a recommendation narrative. A claim needing support does not become substantiated through a title. Build these questions into the content discussion rather than relying on a generic disclosure reminder at the end. The brief should let reviewers identify the relevant relationship without assuming that every audience member already knows it.`,['ftc']),
s('示例：将一句需求变成可讨论的邀请','Example: turn the request into a discussable invitation',
`以下是编辑假设。一家桌面设备品牌最初要求“找十个 KOL，最好都能带货”。补充输入后，发现首要问题是让小空间用户理解安装条件，且现有页面没有解释不适用情形。

新的任务可以是先研究能够清楚演示安装与限制的相关作品，再向合适对象询问是否愿意讨论一次付费演示。拟议范围说明语言、产品准备、文件或发布需求与待确认用途。人数仍待任务与资源决定，不把初始十人当作已经验证的需要。

这个变化没有证明一定会获得更高销售，也不是实际客户案例。它让品牌知道为什么联系，让对方知道要讨论什么，并让页面负责人看见自己也需要补充输入。一次清楚的邀请能得到与任务相关的回复，比“请提供 KOL 合作报价”更容易继续。`,
`Consider an editorial hypothetical: a desk-equipment brand requests ten KOLs, preferably able to drive sales. Further input reveals a more immediate problem: people in small spaces need installation conditions, and the current destination omits unsuitable cases.

The revised assignment starts with work demonstrating installation and limitations, then asks suitable people whether they want to discuss a paid demonstration. The proposal identifies language, product readiness, file or publication requirements and unresolved uses. Headcount still follows the work and available resources; ten has not become a validated need.

This is not an actual client case or proof of higher sales. It gives the brand a reason to contact, the recipient an understandable discussion and the destination owner a missing input to address. A clear invitation produces a task-relevant response more readily usable than a request for a KOL collaboration price. The example also shows why discovery may uncover a brand-side problem that should be repaired before a larger collaboration is commissioned.`),
s('先分清需要多少角色与多少人','Separate role coverage from the number of people',
`一个人可能贡献解释、演示和主持，也可能只适合其中一项。不要把需要三种角色直接转换成需要三位 KOL；反过来，一个有影响力的人也不能因为档期方便就被要求包办所有工作。先列任务，再核对作品、条件与实际可承担范围。

假设一个软件发布项目需要基础操作说明、现有使用者问题访谈和活动主持。基础演示可以预先录制，访谈需要能提出具体问题的人，主持则涉及现场节奏与语言。角色是否可由同一人承担，取决于相关能力、准备时间与双方愿意接受的范围，不取决于名单里是否还有空格。

也要区分可重复与必须独立的贡献。同一介绍在不同渠道重复发布，可能是分发覆盖；从不同实践情境提出问题，可能增加理解。说明为什么需要多个贡献，避免只为了完成数量而复制同一脚本。这里是编辑规划示例，不是已经验证的最优人数或组合。

完成这一步后再讨论资源，保留每项贡献所需输入、负责人和未确认条件。这样别人看到人数变化，能够理解是任务收窄、条件改变，还是发现了更适合的分工，而不是猜测团队为什么突然改了目标。还应说明某个角色无法到场时如何处理：改期、缩小任务或重新确认替代人选，不默认另一位创作者会承担相同职责或具备相同条件。`,
`One person may explain, demonstrate and host, or may be suitable for only one role. Three role types do not automatically require three KOLs. Conversely, convenient availability does not make an influential person responsible for every task. List contributions before checking work, conditions and realistic capacity.

Suppose a software launch needs an operating explanation, an interview about user questions and event hosting. The demonstration can be recorded in advance; the interview needs relevant questioning; hosting involves live pacing and language. Whether one person handles several roles depends on capability, preparation and agreed scope rather than empty spaces in a shortlist.

Separate repeated distribution from contributions needing distinct perspectives. Publishing an introduction on several channels may provide distribution coverage; questions from different working contexts may add understanding. Explain why several contributions are needed instead of duplicating a script to meet a quantity target. This is an editorial planning example, not a validated optimal headcount or combination.

Then discuss resources, retaining inputs, owners and open conditions for each contribution. A colleague can understand whether a changed headcount reflects narrower scope, changed conditions or a better division of work instead of guessing why the original target moved. Define what happens if a role becomes unavailable: reschedule, narrow the assignment or confirm a replacement. Do not assume another creator inherits the same duties or conditions simply because the team still needs someone to fill the role.`),
s('把定义留在团队能继续使用的位置','Keep the definition where the team can use it',
`最终 Brief 保留项目定义、任务、证据、未知与负责人；不要让它们散落在只有原参与者理解的聊天里。另一位同事应能解释为什么需要该角色、具体讨论什么以及哪些尚未确认。

QuickKOL 可帮助理解 Brief、发现相关创作者、研究作品与准备个性化联系。清楚输入有助于这些任务，但工具返回一个名单不等于资格、受众或商业条件都已确认。继续回到相应来源核对。

KOL 的含义要帮助合作更明确。保留熟悉称谓没有问题，前提是它连接到实际贡献与条件；当一个简称开始隐藏分歧，就把完整任务写出来。`,
`Retain project meaning, assignment, evidence, unknowns and ownership in the brief rather than scattered conversations understood only by the original participants. Another colleague should explain why the role is needed, what is being discussed and what remains unconfirmed.

QuickKOL supports brief interpretation, relevant creator discovery, work research and personalized contact preparation. Clear inputs help those tasks, but a returned list does not confirm credentials, audience or commercial terms. Continue checking the relevant sources.

KOL terminology should clarify collaboration. Familiar shorthand is useful when connected to work and conditions; when it starts concealing disagreement, write out the complete assignment.`)
],
table:{title:p('把简称转换为 Brief 输入','Translate the acronym into brief inputs'),headers:[p('输入','Input'),p('需要说明','Specify'),p('仍需证据','Evidence still needed')],rows:[[p('相关性','Relevance'),p('哪个受众在什么情况下需要答案','Which audience needs an answer in what context'),p('受众与作品的实际关联','Actual audience and work connection')],[p('贡献','Contribution'),p('解释、演示、主持或发布','Explanation, demonstration, hosting or publication'),p('相关能力与范围','Relevant ability and scope')],[p('安排','Arrangement'),p('对象、语言、时间与用途','Object, language, timing and use'),p('意愿、条件与适当确认','Willingness, conditions and confirmation')]],note:p('QuickKOL 编辑输入框架，不是资格认证或通用报价标准。','QuickKOL editorial input framework, not certification or a universal pricing standard.')},
tool:{title:p('KOL Brief 说明检查','KOL brief clarity checks'),intro:p('让缩写对应一项能被理解的任务。','Connect the acronym to an understandable assignment.'),items:[p('项目采用的含义已经写明。','State the meaning used in this project.'),p('具体受众与问题有依据。','Ground the audience and question.'),p('任务与相关作品相连，未知保持未知。','Connect work samples to the role and retain unknowns.'),p('制作、发布、费用与许可分别讨论。','Discuss production, publication, price and use separately.'),p('商业关系和真实体验可由负责人核对。','Let owners check the relationship and actual experience.'),p('另一位同事能够据此继续沟通。','Make the handoff usable by another colleague.')]}
});
