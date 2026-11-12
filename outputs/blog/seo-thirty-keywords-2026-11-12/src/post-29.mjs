import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:29,
summary:p('遇到 Bluesku 等近似拼写时，品牌怎样恢复创作者研究的来源链，并分别核对应用、账号和商业联系。','Restore creator-research provenance when a Bluesku-like spelling appears, checking application, account and business contact separately.'),
description:p('Bluesku 品牌来源核对：先确认语境与官方入口，再核对创作者作品、域名或验证线索及代表关系，不靠近似名称授权。','Resolve a Bluesku query in creator research through context, official entry, original work, domain or verification leads and the actual business representative.'),
coverAlt:p('来源核对图形分别检查入口、创作者与商业请求','A source-check graphic distinguishes the entry point, creator and business request'),
answer:p('品牌资料里出现 bluesku，可能是 Bluesky 的近似拼写，也可能指其他对象。本文围绕 Bluesky 创作者研究处理，第一步仍是确认语境，不自动把搜索结果当成官方应用或已验证账号。分别保留官方入口来源、创作者原作品和商业联系路径，再核对它们之间的关系。名称相近、域名账号或验证标记，都不能直接授予素材使用或签约权限。纠正拼写的目标是恢复准确研究，而不是把所有陌生页面都指控为骗局。','A bluesku reference in brand material may be a Bluesky-like spelling or another object entirely. This guide concerns Bluesky creator research, with context checked first rather than search results automatically treated as the official application or a verified account. Preserve the official entry source, creator’s original work and business contact route separately, then verify their relationships. Similar names, domain handles and badges do not grant asset rights or contracting authority. Correcting a spelling should restore research accuracy rather than accuse every unfamiliar page of being a scam. The useful outcome is a source chain a brand can rely on for its next bounded question.'),
sections:[
s('先看这个词出现在什么地方','Check where the term appeared',`它出现在同事笔记、搜索结果、创作者介绍还是供应商提案里？记录原文与日期，再询问它指应用、平台账号、文章或商业主体中的哪一个。不要只把字母改对，就认为所有来源已经修复。

将要解决的观众任务放进达人 Brief。品牌需要的是相关创作者与作品，而不是完成一项无关的应用安装。确认对象后再决定哪些资料值得研究。

如果确实指其他产品或组织，就按真实对象重新定义范围，不硬把它解释成 Bluesky。`,
`Did it appear in a colleague’s note, search result, creator introduction or supplier proposal? Preserve wording and date, then establish whether it refers to an application, account, article or business entity. Correct letters alone do not repair every source relationship.

Put the audience task in the creator brief. The brand needs relevant work and collaborators, not an unrelated installation exercise. Identify the object before deciding which information merits research.

If it actually refers to another product or organization, redefine the scope accordingly rather than force a Bluesky interpretation. This avoids a subtle procurement error: a neat corrected name can make a record appear resolved even though nobody confirmed which account or work the original author intended to reference.`,[]),
s('官方入口与创作者资料分别保存','Preserve official entry and creator material separately',`从平台官方页面提供的应用或网页链接开始核对入口，再保存具体作品原地址。第三方客户端、转载文章与官方说明可能都出现在研究里，应按实际角色记录，不能全部贴上官方标签。

Bluesky 的域名账号说明介绍网站与用户名之间的关联方式。它可以帮助理解账号线索，不说明任何包含类似字母的域名都由平台或创作者控制。

品牌不需要为了确认来源而给陌生页面密码、验证码或账号控制。来源判断与登录操作可以分开。`,
`Check entry through application or web links provided by the official platform, then preserve the specific work’s original address. Third-party clients, republications and official explanations can all appear in research, but should retain their actual roles rather than all become official.

Bluesky’s domain-handle guide explains an association between websites and usernames. It helps interpret an account lead without establishing that every similar-looking domain is controlled by the platform or creator.

A brand need not provide passwords, verification codes or account control to an unfamiliar page merely to check provenance. Source assessment and account login are separate tasks. A record can show an appropriate entry route while leaving the particular account relationship unresolved until suitable evidence is available.`,['bskyDomain']),
s('核对作品原作者，不只核对展示页面','Find the work’s author rather than only its display page',`一个截图或转述可能来自创作者，也可能来自转发、引用或第三方整理。回到原作品，确认谁发布、哪部分由本人完成，以及时间与语境。原页面无法打开时保留限制，不把转载自动升级为本人证明。

研究者需要说明作品为什么与本次任务有关。提到一个产品名，不等于能制作相关演示；参与讨论，不等于接受品牌合作。

如果多个资料指向同一作品，记录来源链，避免把重复转载算成多项独立能力证据。`,
`A screenshot or summary may originate with a creator, a repost, a quote or a third-party collection. Return to original work to establish publisher, personal contribution, time and context. If inaccessible, retain the limitation rather than promote a republication into first-party proof.

Explain why the work fits the assignment. Mentioning a product does not establish demonstration capability, and joining a discussion does not establish willingness to partner.

Where several records point to one piece, preserve the source chain instead of counting repeated copies as independent evidence of skill. The corrected spelling can help locate the original, but the location and the interpretation still require separate checks. A familiar-looking page should not inherit authorship simply because it appears higher in the researcher’s search results.`,[]),
s('验证线索需要知道验证了什么','Ask what a verification signal establishes',`Bluesky 的验证机制说明区分域名用户名与验证标记，并说明验证来源。品牌可以查看适用公开线索，但身份信号不证明产品背书、合作接受或素材许可。不要把一个标记复制到报价表就称全部审核完成。

没有标记也不自动是仿冒。保存已知关系与未知，核对公开来源，必要时提出适当问题。某账号的身份线索与某封邮件发送者的权限也不是同一对象。

验证结果应附日期与用途，不变成永久可信或永久可疑标签。`,
`Bluesky’s verification explanation distinguishes domain usernames from badges and describes verification attribution. Inspect appropriate public signals without treating identity as product endorsement, partnership acceptance or an asset license. Copying a badge into a quote table does not complete every review.

No badge does not automatically mean impersonation. Preserve known relationships and unknowns, corroborate public sources and ask a suitable question where needed. An account’s identity signal and an email sender’s authority concern different objects.

Date the check and its use rather than create a permanently trusted or suspicious label. This makes the record more robust when a creator changes a handle or representative: the team can identify which relationship needs updating without discarding unrelated work evidence or assuming every message still comes from the same authorized source.`,['bskyVerify']),
s('查询修正要留下原文与执行状态','Keep original queries and execution state',`Bluesky 的搜索说明提供按词组、作者或其他条件寻找资料的方法。纠正查询时保留原词、修正词、日期与理由，不把计划执行的查询写成已返回的结果。新的来源也要记录实际打开了什么。

找不到某个账号，只说明本次路径没有取得，不能证明账号不存在或个人不真实。过于宽泛的词可能混入无关对象，研究者应按任务排除并说明原因。

必要时用一次有范围的研究会话继续，而不是无止境尝试近似拼写。`,
`Bluesky’s search guide describes finding material through phrases, authors and other conditions. When correcting a query, preserve original wording, revision, date and reason instead of presenting a planned query as returned results. Record what was actually opened at the new source.

Not finding an account establishes an unsuccessful route, not nonexistence or inauthenticity. Broad wording may include unrelated objects; exclude them according to the assignment with reasons visible.

Continue through a bounded research session where necessary rather than try spelling variations indefinitely. A corrected route can be useful even when it yields no recommendation, provided it identifies which source relationship was repaired and which question remains open for another owner.`,['bskySearch']),
s('把商业联系人与账号身份分开','Separate business contact from account identity',`公开账号可能由本人、团队或其他获授权人员参与管理。品牌应问谁接收本次新作、发布或许可请求，而不是根据一个头像或邮件签名推定全部权限。旧资料里的代理关系也可能需要当前确认。

首次沟通说明真实需求，不暗示品牌已经批准预算、合作或付款。需要正式授权时按适当采购流程处理；不在来源研究阶段收集无关私人文件。

账号识别帮助找到人，商业范围说明帮助对方把请求交到正确位置。两者都不能跳过。`,
`A public account may involve the person, team or other authorized operators. Ask who receives this new-work, publication or licensing request instead of inferring all authority from an avatar or email signature. Older representation information may need current confirmation.

An initial inquiry describes actual need without implying approved budget, collaboration or payment. Use the appropriate procurement process for formal authorization rather than gather unrelated private documents during source research.

Account identification helps locate someone; commercial scope helps route the request. Neither can be skipped. A legitimate account reference in an email may help establish context, but it does not itself establish that the sender can accept every proposed term or authorize use of material involving other contributors.`,[]),
s('演练一份带拼写问题的 Brief','Rehearse a brief with a spelling problem',`假设同事笔记写着“在 Bluesku 找到一位设备创作者”，附一张裁切截图和一个自称代表的邮件地址。品牌不能只把平台名改成 Bluesky，就标记为已验证候选。这里没有真实账号或邮件。

先恢复笔记语境，找到实际来源与原作品，再分别核对账号和公开联系路径。截图只显示一张设备图，就不能补成原创技术演示能力；陌生地址也不应因提到该账号而获得权限。

如果最后只恢复了作品来源，就记录来源已恢复，代表关系仍待确认。这样团队可以继续研究，而不把局部修正扩成全部批准。

必要时同时修正能力描述。如果恢复的原文只是分享设备照片，不把它继续称作技术教学证明。改成实际可见角色，不是断言该人没有技能，而是这项作品未建立该能力。下一步可询问适当公开作品，不应让对方为品牌笔记夸大的描述辩护。

若来源属于团队，保留个人实际贡献并问谁处理拟议工作，不静默改成个人作品集。修复由此真正影响达人选择，而非只改拼写、留下错误采购假设。`,
`Suppose a colleague writes found an equipment creator on Bluesku, attaching a cropped screenshot and an email claiming representation. Correcting the platform name to Bluesky does not make the candidate verified. This fictional example contains no real account or address.

Recover the note’s context, locate source and original work, and check the account and public contact route separately. An equipment photo does not establish original technical-demonstration ability. An unfamiliar address gains no authority merely by mentioning the account.

If only work provenance is recovered, record that success while representation remains unresolved. The team can continue without expanding a partial repair into full approval.

For handoff, three rows may be more useful than one status. Entry source records how the actual application or webpage was identified. Work source records original author, address and the role visible in the piece. Commercial source records where the proposed request should go and what authority still needs confirmation. None inherits the others’ completion state.

If an earlier proposal already relied on the wrong account, identify the affected recipient and correct the implication, not only the spelling. The correction might change the person being approached, the work cited or the permission requested. Preserve the earlier record with a dated correction so later reviewers can understand why the proposed collaboration changed. A clean-looking final name should not erase a material source error from the decision history.

Correct the capability description at the same time as the source where needed. If the recovered work shows someone sharing an equipment photograph, replace an unsupported technical educator label with the actual observed role. That correction does not mean the person lacks the skill; it means this piece did not establish it. The next question can request suitable public work rather than ask the person to defend an inflated description created by the brand’s own note.

Likewise, if the restored source belongs to a team, preserve the visible individual contribution and ask who handles the proposed work. A source repair should not silently convert a team publication into a personal portfolio claim. Recording these implications makes the correction useful for creator selection, rather than a cosmetic edit that leaves the original purchasing assumption untouched.`,[]),
s('区分没有核对与发现问题','Distinguish unchecked from a demonstrated problem',`来源打不开、代表未回复或名称不熟悉，都可能限制研究，但不等于已证实欺诈。准确状态可以是未取得、待确认、与任务无关或有具体不一致。每种状态需要相应下一步。

如果出现敏感权限请求，可以拒绝并交给账号负责人，不必等到完整识别对方行为。拒绝账号操作与公开指控是两种不同动作。

记录必要事实，让业务判断既能前进，也不会把疑问变成人物定性。`,
`An inaccessible source, unanswered representative or unfamiliar name can limit research without proving fraud. Use accurate states such as not obtained, unconfirmed, irrelevant to the task or a specified inconsistency. Each needs an appropriate next step.

Decline a sensitive access request and route it to the account owner where necessary without waiting for a complete finding about the sender. Declining account action differs from public accusation.

Preserve necessary facts so business review can progress without turning a question into a personal verdict. A team can decide not to use an unconfirmed route while still stating honestly that it has not established the cause of the uncertainty or evaluated every service offered by the sender.`,[]),
s('让修正跟随候选资料流转','Keep corrections with the candidate record',`保存原词、确认对象、来源地址、日期、修正原因与受影响结论。不要只在个人笔记修改，却让机构、品牌与媒体继续引用旧记录。向实际接收人说明哪项改变，哪些仍未知。

如果之后账号改名或联系路径变化，新增版本并保留原因，不让旧确认永久生效。来源链也应能区分直接观察与他人提供的说明。

一份好的纠错记录帮助下一位同事少猜，而不是制造看似没有发生过错误的历史。`,
`Preserve original term, confirmed object, source address, date, correction reason and affected conclusions. Updating a personal note is insufficient if agency, brand or media owners still rely on the old record. Explain changes and remaining unknowns to actual recipients.

Version later handle or contact changes with reasons instead of making an old check permanent. Distinguish direct observation from information someone supplied.

A useful correction reduces guessing rather than creates a history in which no error appears to have happened. It should remain attached to the work and proposed scope so a colleague copying one record into a new brief does not accidentally detach the corrected source from the limitation that made the correction necessary.`,[]),
s('把拼写修复用于准确的达人合作','Use spelling repair for accurate creator collaboration',`Bluesku 这样的词可以成为恢复来源的提示，但不能独自决定平台、账号或合作身份。品牌应围绕真实观众问题，逐项核对入口、作品与商业路径。

清楚的来源链让达人营销研究可复查，也让联系和采购保持适当范围。名称相近不意味着有权使用，身份线索不意味着结果保证；这些边界应保留在最终提案里。

完成时让接收人知道：哪项来源已确认，哪项仍需问题，以及谁接着处理。`,
`A term such as Bluesku can prompt source recovery without independently determining platform, account or partnership identity. Check entry, work and business route around a real audience question.

A clear source chain makes creator research reviewable and keeps contact and procurement scoped. Similar naming grants no usage right, and an identity lead guarantees no outcome. Preserve those limits in the final proposal.

The receiver should know which source is confirmed, which question remains and who handles it next. That is a useful completion state even when a spelling correction leads to a decision to research further rather than immediately contact or purchase.`,[])
],
links:[link('达人 Brief','creator brief','write-a-useful-campaign-brief'),link('一次有范围的研究会话','a bounded research session','bsky-app-collaborator-research-session')],
table:{title:p('近似拼写来源修正卡','Near-spelling source correction card'),headers:[p('对象','Object'),p('确认','Confirm'),p('不继承','Does not inherit')],rows:[[p('入口','Entry'),p('实际产品与官方来源','Actual product and official source'),p('所有近似页面官方身份','Official status for every similar page')],[p('作品','Work'),p('原作者、地址与贡献','Original author, address and contribution'),p('转载者原创能力','Original capability of a reposter')],[p('账号','Account'),p('公开身份线索与日期','Public identity evidence and date'),p('商业权限','Commercial authority')],[p('请求','Request'),p('实际接收人与范围','Actual receiver and scope'),p('素材或付款授权','Asset or payment authorization')]],note:p('设备创作者与邮件案例为假设；不指控真实个人或服务。','The equipment-creator and email case is hypothetical, with no accusation about a real person or service.')},
tool:{title:p('修正资料后','After correcting the record'),intro:p('修复来源，不扩大结论。','Repair the source without expanding the conclusion.'),items:[p('原词与真实对象分开保存。','Original term and actual object are distinct.'),p('官方入口与作品来源分别确认。','Official entry and work provenance are separately confirmed.'),p('账号身份不冒充商业授权。','Account identity is not commercial authority.'),p('未核对与已发现问题不同。','Unchecked differs from a demonstrated problem.'),p('受影响接收人能看到修正。','Affected receivers can see the correction.')]},
cta:{title:p('继续整理可用的创作者证据','Organize useful creator evidence'),body:p('将来源、作品、角色和未知保留在具体研究记录里，再决定下一步。','Keep sources, work, roles and unknowns in a concrete research record before deciding the next step.'),label:p('阅读候选研究指南','Read the candidate research guide'),href:'/blog/influencer-discovery-tool-brief-to-candidates/'}
});
