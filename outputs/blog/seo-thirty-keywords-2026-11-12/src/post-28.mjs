import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:28,
summary:p('用一次有范围、有记录的 Bluesky 研究，寻找能回答品牌问题的创作者，而不是把个人时间线当成完整市场。','Run a bounded Bluesky research session to find creators relevant to a brand question instead of treating a personal timeline as the whole market.'),
description:p('Bsky app 品牌研究方法：定义观众问题、记录查询与作品、核对账号来源，按实际证据交接达人候选，不编造平台覆盖能力。','Use the bsky app for a scoped creator research session with clear questions, traceable queries, relevant work and account checks before shortlist handoff.'),
coverAlt:p('创作者在明亮阅览空间里对照手机做研究笔记','A creator compares a phone with research notes in a bright reading space'),
answer:p('Bsky app 通常指 Bluesky 的应用入口。品牌可以用它做一次明确的创作者研究：先定义观众问题与范围，再记录查询、相关作品、账号线索和未知，最后交出下一步。搜索结果或个人信息流不是完整市场样本，关注规模也不证明合作适合。本文提供人工研究会话的方法，不声称已完成实时名单，也不把第三方工具的全部平台集成当成既有事实。品牌仍需确认身份、作品能力与商业条件。','Bsky app commonly refers to the Bluesky application. A brand can use it for a defined creator research session: establish the audience question and scope, record queries, relevant work, account leads and unknowns, then hand over a next step. Search results and a personal feed are not a complete market sample, while follower scale does not establish partnership fit. This is a manual research procedure, not a completed live roster or a claim that third-party tools already integrate every platform. Identity, work capability and commercial terms still need verification. The session should produce an explainable research record rather than an endless scroll or a list of names without context.'),
sections:[
s('给会话一个观众问题与结束条件','Give the session a question and an end condition',`例如，品牌需要找到能解释桌面照明条件的创作者。先写观众、语言、主题与希望看到的作品，不以“多找一些账号”代替需求。将范围放进达人 Brief，让研究人员知道什么证据有用。

安排适当研究窗口与结束条件，可以是完成必要查询路径并记录缺口，而不是必须找到某个数量。数量不足时如实交接，不用无关账号填表。

这个结束条件是编辑工作安排，不是平台查询额度或行业统一标准。`,
`For example, a brand needs creators who can explain desk-lighting conditions. Define audience, language, topic and desired work rather than ask for more accounts. Put the scope in the creator brief so researchers know what evidence matters.

Set a proportionate research window and an end condition, such as completing necessary query routes and recording gaps, rather than finding a predetermined count. Hand over an insufficient result honestly instead of filling the list with unrelated accounts.

The end condition is an editorial work choice, not a platform query allowance or industry standard. It lets the receiving owner distinguish a completed bounded session from a claim that the entire creator market has been exhausted, and helps decide whether another session would address a meaningful remaining question.`,[]),
s('确认入口，再记录研究上下文','Confirm the entry point and research context',`从 Bluesky 官方网站链接进入适当应用或网页，再记录日期、登录上下文与使用方式。不因搜索词近似就把任意第三方页面认作官方入口。无需为本次研究把凭证交给不明收集服务。

Bluesky 的域名账号说明介绍网站域名作为用户名的方式。它能提供身份关系线索，不意味着所有域名相似账号都属于同一人，也不证明某消息有商业授权。

研究的对象与访问入口分别保存。用哪个应用看到作品，不能替代作品原地址与作者来源。`,
`Use the appropriate application or web entry linked from the official Bluesky site, then record date, login context and research method. A similar search phrase does not make every third-party page official. No unexplained collection service needs credentials for this exercise.

Bluesky’s domain-handle guide describes using a website domain as a username. That can support an identity lead without establishing that similar domains belong to one person or that a message has commercial authority.

Preserve the research object separately from the access route. The application through which work was encountered does not replace its original address and author source. This distinction remains useful when a colleague later opens a shared post through another client or finds a copied excerpt on a different site.`,['bskyDomain']),
s('把查询设计成可复查的路径','Design a reviewable query route',`Bluesky 的搜索说明介绍带引号的词组、作者与语言等查询方式，以及日期筛选的 UTC 表示。按实际可用功能使用，保存原查询与观察时间，不将帮助页示例当成本次已返回的结果。

先用问题词和主题词，再按需要检查某位已确认作者的相关作品。不同路径可能找到同一账号，去重时保留各自来源。不要只收藏符合预期的一条。

没有结果说明本次路径没有找到，不证明平台没有相关创作者，也不证明某人从未讨论这个主题。`,
`Bluesky’s search guide describes quoted phrases, author and language queries, and UTC date filters. Use functionality actually available, preserving raw query and observation time rather than treating help examples as returned results for this session.

Start with question and topic language, then inspect relevant work by an established author where appropriate. Several routes may reach one account; retain provenance when deduplicating. Do not collect only the example that confirms an expectation.

No result means the route did not find one, not that the platform has no suitable creators or a person never discussed the subject. A useful query log distinguishes the wording tried, the material actually inspected and the selection reason. That allows another researcher to extend the procedure rather than repeat it blindly.`,['bskySearch']),
s('从公开作品判断是否值得继续','Use public work to decide whether to continue',`看作品实际回答什么问题、是否展示必要条件以及本人贡献是否清楚。一个转发很受欢迎，不一定证明该账号具备原创制作能力。记录原始作品与账号角色，不从互动总量替代内容研究。

需要专业讲解时核对适当能力证据，不把简介里的词当成资质。语言与地域也按任务所需资料判断，不猜每位关注者身份。

候选研究方法可帮助把相关作品、适合原因与待确认事项整理在一起。判断应限定于本次任务。`,
`Examine the question actually answered, visible prerequisites and clarity of personal contribution. A popular repost does not necessarily establish original-production capability. Preserve original work and the account’s role instead of replacing content review with an interaction total.

Professional explanation needs appropriate capability evidence rather than a biography term treated as a credential. Assess language and geography using suitable task evidence without guessing follower identities.

The candidate research method connects relevant work, reasons for fit and open questions. Keep judgment specific to the assignment. A person may be worth contacting for analysis while not yet supported for an onsite demonstration; preserving that distinction makes the shortlist more useful than one generic relevance score.`,[]),
s('验证线索不是品牌适合度证明','Verification is not a brand-fit conclusion',`Bluesky 的验证机制说明区分域名账号与验证标记，并介绍验证来源。品牌可按当前公开资料核对相应线索，不把标记当作推荐某产品、保证回复或授予素材使用权。

没有标记也不自动证明不真实。把平台身份线索、作品能力、商业代表与合作条件分别研究。需要确认角色时，提出具体问题而不是要求对方证明所有背景。

记录核对日期，承认当前仍未确认的部分。公开线索可能帮助定位，但不能代替完整采购判断。`,
`Bluesky’s verification explanation distinguishes domain handles and badges and describes verifier attribution. Check appropriate current public evidence without treating a badge as a product recommendation, reply guarantee or asset permission.

No badge does not automatically establish inauthenticity. Research identity leads, work capability, commercial representation and terms separately. Ask a specific role question rather than demand proof of every background detail.

Date checks and retain unresolved matters. A public signal can help locate someone without completing procurement. This prevents the session from treating a recognizable badge as a shortcut around the audience task, while avoiding unfair exclusion of a relevant creator whose available identity evidence takes another form.`,['bskyVerify']),
s('用照明查询做一次假设会话','Rehearse a lighting-topic session',`假设研究者准备查询引号内的 desk lighting，加入语言与一段明确 UTC 日期范围。这些是编辑候选查询，不是已经执行的结果。先确认它表达的究竟是创作布光、日常桌面使用还是产品比较，避免主题相似就合并。

如果找到一篇转发的灯光示例，继续找原作者与原作品；如果只找到设备照片，不能据此确认能讲解操作。可以保留线索，并说明需要哪一项作品证据。

会话结束交出路径、观察和缺口，不需要为了满足数量就把每个提到灯的人都列为推荐。

作品卡分别保存原始发布日期与遇到时间，附原地址、实际可见贡献、查询路径、对应任务与未知角色。引用演示的人可能提供有价值对话，原制作者则可能是制作线索；两者不能互相继承贡献。

若两种语言路径找到同一作者，候选记录可以保留两个作品来源，但不证明跨账号受众已去重。下一位负责人接收的是具体动作：查看原演示、确认公开代表或决定是否扩展语言路径。身份未知时不标为立即联系；未取得来源就留空，计划查看不算已经审核。`,
`Suppose the researcher prepares a quoted desk lighting query with a language and an explicit UTC date window. These are editorial query candidates, not executed results. First distinguish production lighting, everyday desk use and product comparison instead of merging similar topics.

For a reposted lighting example, locate original author and work. A photograph of equipment does not establish explanation capability. Retain the lead with the particular work evidence still needed.

At the end, hand over route, observation and gaps rather than recommend everyone mentioning a lamp to satisfy a quota.

An example query can be written as a phrase plus the documented language and date filters, with real values checked before use. The session log should preserve whether the researcher actually ran it, whether the desired filters were available and which result was opened. A planned query has no result count until observed.

If two language routes reach one author, one candidate record can retain both work references. That is deduplication of this research record, not proof of a deduplicated audience across accounts.

For a reusable work record, separate original publication time from the time encountered. Add the source URL, contribution actually visible, query route, matched audience task and unresolved role. A person quoting a useful demonstration may be a conversation participant worth learning from, while the original maker is the appropriate production lead. Neither should inherit the other’s contribution merely because the same post led the researcher to both.

The next-owner field can state a bounded action: review an original demonstration, confirm public representation or decide whether a different language route is needed. It should not say contact immediately while identity remains unresolved. A blank source field remains blank until obtained; a planned inspection is not a reviewed work. These distinctions make a short session useful to procurement without creating a fictional trail of completed checks or a claim that every relevant voice on the platform has been found. The owner may then choose to review a demonstration, ask a bounded question or stop because the task is not supported. Each choice remains useful without claiming an exhaustive survey of Bluesky creators.`,[]),
s('把研究资料交成一个可用候选记录','Create a usable candidate record',`每项候选保留账号、作品地址、角色、相关理由、可用公开联系线索与未知。不要只导出名字，也不把没有取得的粉丝地域、联系权限或回复意愿补成事实。

区分研究线索、适合待确认、可联系与合作确定。当前一次会话通常不能完成所有阶段。品牌需要哪些后续证据，由具体任务决定。

这里的人工流程不证明任何工具已经覆盖平台全部数据。产品功能、权限与可用渠道仍按实际情况确认。`,
`For each candidate retain account, work link, role, relevance reason, public contact lead and unknowns. Names alone are insufficient, and unavailable geography, contact authority or willingness to respond should not be completed by assumption.

Distinguish research lead, fit unresolved, contactable and partnership confirmed. One session usually does not finish every stage. The assignment determines the evidence needed next.

This manual procedure does not establish complete platform coverage by any tool. Verify actual capabilities, permissions and channels separately. A useful handoff can include a partial candidate where the next owner knows exactly what remains open, instead of applying one ready label to records whose work, identity and commercial conditions have very different evidentiary status.`,[]),
s('外联前重新核对目的与公开路径','Recheck purpose and public route before outreach',`准备沟通时，引用一项实际相关作品，说明问题、角色、范围与时间。没有实际研究过就不要写“长期关注你的全部内容”。公开联系路径只提供沟通起点，不保证代表权限或接受。

没有必要为一次邀请收集私人信息，也不要求创作者交登录资料或整个受众名单。需要进一步资料时说明用途，并按适当授权处理。

本文没有执行关注、发送或账号操作。示例用于准备可复核的研究与提案，实际沟通按明确安排进行。`,
`Before contact, reference actually reviewed work and state question, role, scope and timing. Do not claim long familiarity with everything someone makes where the research did not occur. A public route begins communication without guaranteeing authority or acceptance.

An invitation needs no private-information collection, account login or complete audience list. Explain the purpose of further requests and use appropriate authorization.

This article has followed no accounts, sent no messages and operated no profiles. Its examples prepare reviewable research and proposals, with actual communication occurring under an explicit arrangement. A receiving colleague should be able to see whether a route was merely discovered, checked or used, so the editorial record does not misrepresent an action that never happened.`,[]),
s('用范围与来源结束会话','Close the session with scope and provenance',`交接说明研究了什么、没有研究什么、日期与查询条件，以及哪些作品支持下一步。若只有少量样本，不把它命名为平台趋势或全市场结论。原文引用与转述也应清楚归属。

再次研究时新增记录而不是擦掉旧观察。作品删除、账号更名或代表变化，标明后续状态与影响，不假装过去从未出现。

这让会话成果可以被下一位同事合理延续，也给停止研究一个清楚理由。`,
`State coverage, exclusions, date, queries and the work supporting a next step. A small sample is not a platform trend or whole-market conclusion. Attribute quoted and summarized material clearly.

Add records on a later session instead of erasing earlier observations. A removed work, renamed account or changed representative needs a subsequent state and implication rather than a claim it never existed.

This lets another colleague continue proportionately and gives stopping a clear basis. A session can be complete even where one candidate remains unresolved, as long as the record preserves the bounded work performed and the decision that now belongs to someone else rather than disguising unfinished verification as a final recommendation.`,[]),
s('让平台研究服务真实合作','Make platform research serve an actual partnership',`Bsky app 的合理品牌用途，是帮助观察相关公开作品与专业对话，再核对可能的创作者角色。它不应把个人时间线变成对全部受众或全部平台的判断。

把一次会话限制在观众问题、适当证据与具体下一步，品牌就能更清楚地准备达人合作。找到了一个名字，只是开始；知道为什么相关、哪里未知和谁接着确认，才是可用交接。

后续提案应围绕真实工作，而不是平台名称或未经验证的覆盖承诺。`,
`The bsky app can help a brand observe relevant public work and professional conversation before verifying a potential creator role. A personal timeline should not become a conclusion about every audience or the whole platform.

Bound a session to an audience question, appropriate evidence and a concrete next step. Finding a name is a beginning; explaining relevance, unknowns and the receiving owner makes the record usable.

A subsequent proposal should concern actual work rather than a platform label or unverified coverage promise. This keeps discovery connected to creator marketing while preserving what the session genuinely accomplished and what remains to be confirmed before any partnership action.`,[])
],
links:[link('达人 Brief','creator brief','write-a-useful-campaign-brief'),link('候选研究方法','candidate research method','influencer-discovery-tool-brief-to-candidates')],
table:{title:p('一次 Bluesky 创作者研究记录','One Bluesky creator-research session'),headers:[p('字段','Field'),p('保存','Preserve'),p('边界','Boundary')],rows:[[p('问题','Question'),p('观众、语言与任务','Audience, language and task'),p('不是固定账号配额','Not an account quota')],[p('路径','Route'),p('查询、上下文与时间','Query, context and time'),p('计划查询不是执行结果','Planned queries are not results')],[p('作品','Work'),p('原作者、地址与相关性','Original author, link and relevance'),p('转发不证明原创能力','Reposting does not establish production')],[p('交接','Handoff'),p('角色、未知与接收人','Role, unknowns and receiver'),p('线索不等于已合作','A lead is not a partnership')]],note:p('照明案例与查询为假设，不是已执行的平台样本。','The lighting case and queries are hypothetical, not an executed platform sample.')},
tool:{title:p('会话结束时','At the end of the session'),intro:p('留下能继续研究的依据。','Leave evidence another researcher can use.'),items:[p('问题和结束条件明确。','Question and end condition are explicit.'),p('实际查询与计划分开。','Executed queries and plans are distinct.'),p('作品与作者来源可追溯。','Work and author provenance are traceable.'),p('验证线索不冒充适合度。','Verification signals are not fit conclusions.'),p('后续任务有明确接收人。','A later task has a defined receiver.')]},
cta:{title:p('把发现整理成具体 Brief','Turn discoveries into a concrete brief'),body:p('保留观众问题、作品证据与未知，再准备适合的合作任务。','Preserve the audience question, work evidence and unknowns before preparing a suitable partnership assignment.'),label:p('阅读 Brief 指南','Read the brief guide'),href:'/blog/write-a-useful-campaign-brief/'}
});
