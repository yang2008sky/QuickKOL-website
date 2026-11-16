import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:22,
summary:p('面对免费点赞链接，先暂停请求并从独立路径确认。区分收到了消息、点开页面、提交资料与授权状态，避免把风险提示变成对个人的指控。','Pause a free-like request and verify independently. Distinguish receipt, page opening, submitted information and granted access without turning a risk signal into a personal allegation.'),
description:p('Free TikTok like 教育指南：品牌与达人如何处理突然的免费点赞请求、保护凭证、核对独立来源，并把实际状态交给适当负责人。','An educational free TikTok like guide to unexpected offers, credential protection, independent verification and handing actual access states to appropriate owners.'),
coverAlt:p('大字与分开的色块表现暂停、核对与保留未知三个账号风险处理阶段','Large typography and separate color blocks represent pausing, verifying and retaining unknowns during account-risk triage'),
answer:p('收到“free tiktok like”链接，不需要通过登录或试用来证明它是否可靠。先暂停动作，从自己找到的官方或既有业务路径核对，再说明目前只是收到了消息，还是已经点击、填写资料或批准访问。这些状态不同，不能互相代替。品牌和达人应保护密码、验证码与恢复信息，把必要事实交给合适负责人。本文讨论风险处理，不认定任何特定服务违法，也不承诺能完整识别或恢复所有账号问题。','Receiving a “free tiktok like” link does not require logging in or trialing it to prove reliability. Pause the action, verify through an independently located official or established business route, and distinguish receipt from clicking, submitting information or approving access. These states are different. Brands and creators should protect passwords, verification codes and recovery information, and share necessary facts with an appropriate owner. This is risk triage, not a finding against a named service or a promise of complete detection or account recovery.'),
sections:[
s('先暂停请求，不追随紧迫感','Pause the request rather than follow its urgency',`请求可能来自邮件、私信、转发或熟悉账号。不要因为对方说名额快到期，就跳过核对。品牌团队也不应让创作者为了赶报告而尝试未经确认的链接。

FBI 的创作者账号安全提醒讨论已验证账号也可能遭劫持并传播恶意内容。熟悉头像或认证标记不能独立证明当前消息安全；这是一项一般风险提醒，不代表本次发件人确实出事。

可以先保存必要消息背景，停止新增动作，再说明要核对哪项请求。暂停不是对人作结论，也不等于取消所有正常合作。它给团队时间确认真正的任务与来源，而不是在压力下把账号权限作为免费数字的交换条件。`,
`A request may arrive through email, a direct message, a forward or a familiar account. A claim that a slot is expiring should not replace verification. A brand should not pressure a creator into an unconfirmed link to meet a reporting deadline.

FBI’s creator-account security alert discusses verified accounts being hijacked to distribute malicious material. A familiar portrait or verification badge does not independently establish that the present message is safe. This is a general risk alert, not a finding that this sender has been compromised.

Retain necessary context, stop additional actions and identify what needs verification. Pausing is not a judgment against a person or cancellation of every legitimate collaboration. It allows the team to confirm the real task and source instead of exchanging account access for a promised number under pressure. A calm internal message can explain that the request is pending verification, without forwarding the link widely or inviting colleagues to open it to see what happens.`,['fbiCreatorSecurity']),
s('准确说出已经发生哪一步','Describe the actual interaction state',`只收到消息、打开页面、提交资料、安装软件与批准访问，是不同状态。记录已知事实，不因打开过页面就断言账号失窃，也不因没收到警报就断言没有风险。

如果不能确定，写明不确定的步骤与时间。不要为补齐记录再次打开链接、重复提交，或要求同事模仿操作。团队需要的是准确状态，而不是为了重现而增加影响。

品牌只收集与处理有关的最少信息。不要让创作者在群里发密码、验证码、恢复密钥或完整个人证件。适当负责人可以通过合适私密路径了解必要事实；市场团队可获得不包含秘密的状态说明，以便暂停相关工作与调整计划。`,
`Receiving a message, opening a page, submitting information, installing software and approving access are different states. Record known facts without declaring an account stolen because a page opened or declaring no risk because no warning arrived.

If a step is uncertain, identify the uncertainty and approximate time. Do not reopen a link, repeat a submission or ask a colleague to imitate the action to complete the record. The team needs an accurate state, not an expanded incident created by reproduction.

Collect only information relevant to handling the matter. A creator should not post passwords, verification codes, recovery keys or full identity documents into a group chat. An appropriate owner can obtain necessary facts through a suitable private route, while marketing receives a status explanation without secrets to pause affected work and revise plans. That separation also prevents a normal campaign update from becoming another place where sensitive material is copied and retained by people who do not need it.`),
s('区分账号秘密与访问能力','Distinguish account secrets from access capabilities',`密码、验证码与恢复信息是账号秘密，不应交给提供点赞的陌生请求。授权页面可能涉及某种访问能力；它与直接索要密码不同，但也不能因为有同意按钮就自动视为适合。

FTC 的应用权限提醒讨论信息收集与不必要权限。这里把它作为最少必要信息的原则；手机设备权限、平台连接权限与业务同意需要分别理解，不能混成一个“已经授权”。

核对请求是否能解释真实任务、所需能力与负责人。不提供凭证也不等于其他信息没有价值；联系方式、页面管理或发布能力同样要与任务相称。无法说明必要性时保持暂停，不用更多个人资料换取一个看起来更正式的验证过程。`,
`Passwords, codes and recovery information are account secrets and should not be supplied to an unfamiliar like offer. An authorization screen can concern an access capability; that differs from directly requesting a password, but a consent button does not automatically make the request suitable.

FTC’s app-permission advice discusses data collection and unnecessary permissions. Here it supports the principle of necessary information. Device permissions, platform-connected access and business approval should be understood separately rather than collapsed into already authorized.

Check whether the request explains the real task, needed capability and responsible party. Not supplying credentials does not mean other information lacks value: contact data, page management and publishing capabilities still need to fit a task. If necessity is unclear, retain the pause rather than exchange additional personal information for a process that merely looks more official. The question is what the arrangement actually needs and what was actually granted, not whether its screen contains reassuring words about verification.`,['ftcAppPrivacy']),
s('沿独立路径核对请求','Verify through a route independent of the request',`独立核对不是打开请求附带的第二个“官方证明”链接。应通过自己查找的官方入口、已有业务联系人或已确认渠道，核对具体事项。外观相似或域名含某品牌词不自动证明关联。

配图把暂停、独立核对与保留未知分开。若查不到合适证据，可以继续不执行，不必把缺少证明补成安全承诺，也不要反向认定所有未核对对象都有恶意。

核对的问题要具体，例如是否确有本次品牌任务、谁提出、为什么涉及某项权限。不要向对方发验证码来“证明本人”，也不接受要求先付钱才能撤销或核实的压力。真正需要解决的是来源与任务能否确认，而不是继续追逐请求提供的下一道步骤。`,
`Independent verification is not opening a second official-proof link supplied by the same request. Use an independently located official entry point, established business contact or already confirmed channel to check the specific matter. A similar appearance or brand word in a domain does not establish affiliation.

The diagram separates pausing, independent verification and retained unknowns. If suitable evidence is unavailable, the action can remain unperformed. Do not fill missing support with a safety promise or infer that every unverified party is malicious.

Ask concrete questions: whether this brand assignment exists, who requested it and why a capability is involved. Do not send a verification code to prove identity or accept pressure to pay before a request can be checked or withdrawn. The task is confirming source and purpose rather than following another step supplied by the original message. Keep the verified contact route separate in the record so someone later can tell it was not simply another address copied from the same offer.`),
s('识别从免费承诺到付款的变化','Notice a shift from free promises to payment',`FTC 的任务骗局提醒描述虚假余额、小额初始支付与要求存钱解锁等风险路径，并提醒不要为得到报酬而先付款。这个提醒不能用来直接认定某个具名网站，但能帮助团队识别需要停止的请求变化。

如果一开始说免费，随后出现充值、解锁、升级或退款保证，记录实际措辞与状态，而不是继续付出以证明此前决定正确。已经投入时间，不构成继续交出资金或秘密的理由。

品牌也要避免用奖励目标推动创作者冒险。免费点赞不是必要制作任务；可以暂停相关请求，同时保留原来正常工作的记录。涉及已经发生的付款或账号问题，应交给适当负责人按实际情况处理，不由内容团队在聊天里保证一定追回。`,
`FTC’s task-scam alert describes false balances, small initial payments and demands for deposits to unlock money, and advises against paying to get paid. It does not establish a finding against a named website, but helps a team recognize a request changing in a concerning direction.

If free becomes a top-up, unlock, upgrade or refund guarantee, record the actual wording and state rather than keep paying to justify the earlier decision. Time already spent does not justify giving more money or secrets.

A brand should also avoid pushing creators into risk through reward targets. Free likes are not a necessary production task. Pause the request while preserving records of legitimate work. Actual payment or account problems need appropriate owners handling the real circumstances, not a content team promising recovery in a chat. A useful status update states what happened and which assistance route is being used, while keeping uncertain outcomes explicitly uncertain.`,['ftcTaskScams']),
s('已有访问疑问交给谁','Route an existing access concern to an appropriate owner',`如果怀疑已经泄露秘密或批准不必要访问，停止新增动作，通过自己找到的官方支持与账号安全路径处理，并联系实际负责账号的人。不要按陌生消息提供的“救援”入口继续操作。

本文不提供某个当前菜单的固定步骤，也不保证改一个设置就解决全部问题。凭证、活动会话、连接应用、设备与已分享数据是不同事项，具体处理需要按实际情况与平台指导核对。

市场团队可以暂停相关发布或付款安排，保留必要记录并减少扩散。不要擅自接管创作者个人账号，或要求交出全部历史聊天。适当协作应说明需要什么状态信息、由谁处理，以及哪个条件满足后才能恢复受影响的工作。`,
`If secrets may have been disclosed or unnecessary access approved, stop additional actions and use independently located official support and account-security routes, involving the actual account owner. Do not continue through a rescue link supplied by an unfamiliar message.

This article supplies no fixed current-menu instructions or guarantee that changing one setting resolves everything. Credentials, active sessions, connected apps, devices and already shared data are separate issues requiring review against actual circumstances and platform guidance.

Marketing can pause affected publication or payment arrangements, retain necessary records and limit circulation. Do not take over a creator’s personal account or demand their entire message history. Appropriate collaboration states which status information is needed, who handles it and what condition allows affected work to resume. A brand can support that process without pretending to be the platform’s recovery team or making decisions about someone else’s account based only on an incomplete forwarded description. Record the responsible owner so repeated requests do not reach the creator from several different departments.`),
s('不要把请求转成个人指控','Do not turn a request into a personal allegation',`收到提议不等于使用，点击不等于知情采购，数字上升也不等于请求已经执行。这些区别必须保留在品牌讨论与交接中。

免费涨粉权限审阅指南进一步讨论请求的权限边界。本篇处理的是突发消息的暂停与核对，不鼓励通过检查点赞用户身份来寻找“罪证”。账号安全处理与互动真实性判断是不同问题。

如果报告需要记录，可以说收到某类请求、当前动作状态与下一项核对，不写未经证实的动机。避免将截图大范围转发，使其他人把未完成核验误读成确定结论。保护账号与公平处理达人关系，可以同时成为团队目标。`,
`Receiving an offer is not using it, clicking is not knowingly procuring engagement, and a rising count does not establish that the request was carried out. Preserve those distinctions in brand discussions and handoffs.

The free-follower permission-review guide expands request boundaries. This article handles pausing and verifying an unexpected message, not searching the identities of people who liked a post for incriminating evidence. Account security and interaction authenticity are different questions.

If a report needs a note, state the request type, current action state and next verification rather than an unconfirmed motive. Avoid broad screenshot circulation that lets others mistake unfinished review for a finding. Protecting an account and treating a creator fairly can be simultaneous goals. A narrowly worded note can lead to necessary action without attaching an enduring suspicion to the person who reported the message, which is especially important if the team wants creators to raise future concerns early rather than hide them out of fear of blame.`),
s('用状态说明恢复条件','Use a status note to define resumption',`状态说明可以包含受影响任务、已知动作、仍未知事项、处理人和下一次更新时间。它不需要包含账号秘密，也不应把“处理中”写成已经安全。

账号恢复交接指南进一步区分状态与负责人。恢复工作前，先看实际依赖是否由适当人员确认，例如相关访问疑问是否已处理、正常联系渠道能否确认。不能仅凭对方重新发来一张成功页面就认定所有事项完成。

每个团队只接收必要信息。内容团队可能只需知道某次发布继续暂停，而安全负责人需要更具体事实。将两者分开，有助于保护创作者隐私，也让每个人知道自己可以执行什么，而不是在没有责任人时等待一个笼统的“没事了”。`,
`A status note can identify affected work, known actions, unknowns, owner and next update. It does not need account secrets and should not translate being handled into confirmed safe.

The account-recovery handoff guide expands states and ownership. Before resuming work, check that appropriate people have confirmed the actual dependencies, such as handling the relevant access concern and verifying a normal contact route. A newly supplied success screen alone does not establish that everything is resolved.

Each team should receive necessary information only. Content staff may need to know a publication remains paused, while a security owner needs more specific facts. Separating them protects the creator’s privacy and shows each person what they can do, rather than leaving everyone waiting for an ownerless all clear. Set the next update around a meaningful check or responsible response so repeated messages do not pressure someone into declaring an outcome they have not actually confirmed.`),
s('用风险处理保护达人合作','Keep triage within the creator-collaboration task',`最终目标是保护正常合作，而不是研究如何获得免费数字。品牌应明确不要求创作者试用点赞服务，也不把账号访问作为完成营销任务的默认代价。

一项好的处理结果可能只是请求未执行、来源待核实、受影响工作暂缓。它不一定产生对某个服务或个人的确定判定，也不保证以后不会再收到类似消息。

让每次更新都有明确时间，避免旧状态被误认为当前确认。在达人营销中，准确状态、独立路径与适当负责人，比追随承诺或恐慌式扩散更有用。团队保留真实完成的制作工作，同时把未知留在问题层面；只有新的可靠资料，才推动下一步决定。`,
`The goal is protecting legitimate collaboration rather than researching how to obtain free numbers. A brand should explicitly avoid requiring creators to trial like services or treat account access as the default cost of a marketing task.

A sound outcome may simply be an unperformed request, an unverified source and affected work on hold. It need not produce a definitive verdict about a service or person, and it cannot guarantee similar messages never arrive again.

Give each update a clear time so an earlier state is not mistaken for a current confirmation. Within influencer marketing, accurate states, independent routes and appropriate ownership are more useful than following promises or spreading panic. Preserve real production work and keep unknowns at the question level; stronger decisions should follow new reliable information. A creator who can report an unexpected message without being forced to prove innocence is better placed to cooperate with a careful review, while the brand retains the information needed to protect its actual campaign responsibilities.`)
],
links:[link('免费涨粉权限审阅指南','free-follower permission-review guide','tiktok-free-follower-offer-permissions-review'),link('账号恢复交接指南','account-recovery handoff guide','instagram-free-followers-access-recovery-handoff')],
figures:[{file:'like-offer-access-pause-verify.svg',afterSection:4,alt:p('流程图区分暂停请求、沿独立路径核对与保留未知','A process diagram separates pausing the request, verifying independently and retaining unknowns'),caption:p('核对不需要试用服务；只记录实际发生的步骤。','Verification does not require trialing a service; record only steps that actually occurred.')}],
table:{title:p('不同状态需要不同说明','Different states need different descriptions'),headers:[p('已知状态','Known state'),p('应说明','Describe'),p('不能推定','Do not infer')],rows:[[p('收到消息','Message received'),p('来源、措辞与时间','Source, wording and time'),p('已经使用服务','Service was used')],[p('点开或提交','Opened or submitted'),p('实际步骤与未知','Actual steps and unknowns'),p('必定失窃或必定无事','Definite compromise or definite safety')],[p('授权疑问','Access concern'),p('适当负责人和处理路径','Appropriate owner and handling route'),p('一张成功页证明全部解决','One success screen resolves everything')],[p('工作恢复','Work resumption'),p('实际依赖的确认','Confirmation of actual dependencies'),p('所有风险永远消失','All future risk disappears')]],note:p('教育性风险处理框架，不是服务审计、账号恢复保证或个人违规结论。','An educational triage framework, not a service audit, recovery guarantee or personal misconduct finding.')},
tool:{title:p('突然收到点赞请求时','When an unexpected like request arrives'),intro:p('暂停动作，准确交接。','Pause action and hand over accurate facts.'),items:[p('保留必要背景，不扩散秘密。','Retain necessary context without circulating secrets.'),p('区分收到、点击、提交与批准。','Separate receipt, clicking, submission and approval.'),p('不用凭证或付款换核对。','Do not exchange credentials or payment for verification.'),p('沿独立路径确认任务。','Confirm the task through an independent route.'),p('由适当人员处理已有疑问。','Have appropriate people handle existing concerns.'),p('用确认状态决定工作是否恢复。','Use confirmed states to decide resumption.')]}
});
