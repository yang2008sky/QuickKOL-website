import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:25,
summary:p('寻找热门 YouTuber 合作时，区分出镜人、节目、频道、制作方与代表，确认本次应该向谁提出什么请求。','Distinguish performer, program, channel, producer and representative when researching a popular YouTuber for a brand partnership.'),
description:p('Popularist YouTuber 品牌研究指南：核对频道标识、出镜角色、节目来源和公开代表，再确认新作或素材使用的正确联系对象。','Research a popularist YouTuber query through channel identity, on-camera role, program provenance and public representation before defining the partnership request.'),
coverAlt:p('身份研究图形分别标出人物、节目与有权接收的合作方','An identity-research graphic separates the person, program and authorized receiving partner'),
answer:p('本文将 popularist youtuber 作为品牌寻找热门 YouTube 创作者的研究入口。先确认你想合作的是某位出镜人、一个节目，还是整个频道的制作与发布团队；三者不一定是同一主体。保存原频道、相关作品和公开角色证据，再询问谁能确认本次工作与使用范围。熟悉的面孔、相似频道名或“官方”字样，都不能自动证明对方有签约或素材授权权限。本文不提供实时人气排名，也不把未完成的身份研究称为已确认合作。','This guide treats the popularist youtuber query as a starting point for researching a popular YouTube creator. Establish whether the brand wants an on-camera person, a program or the channel’s production and publishing team; they need not be one party. Preserve the original channel, relevant work and public role evidence, then ask who can confirm this assignment and usage scope. A familiar face, similar name or official label does not establish contracting or asset authority. This is not a live popularity ranking or a claim that unfinished identity research has confirmed a partnership. The useful result is the right request routed to an appropriately verified public business recipient.'),
sections:[
s('先定义品牌希望谁做什么','Define whom the brand wants to do what',`品牌可能喜欢某位主持人的解释，也可能想赞助固定节目，或采购频道团队的新制作。先在达人 Brief 中写出角色、观众问题与交付，不用“找这个 YouTuber”概括所有需求。

如果需要本人出镜，确认本人是否属于拟议工作；如果需要账号发布，确认具体频道与节目。一个人过去出现在作品里，不证明他仍参与，也不证明其个人账号可以替代节目受众。

范围清楚才知道接下来要核对什么。不要先获取一堆联系方式，再让接收人猜品牌真正需要哪一项。`,
`A brand may value a presenter’s explanation, want sponsorship of a regular program or commission the channel team’s new production. Define role, audience question and deliverables in the creator brief rather than use find this YouTuber for every need.

For personal appearance, confirm the individual is part of the proposed work. For publication, identify the exact channel and program. Someone appearing in earlier work does not establish current participation or that a personal account substitutes for the program’s audience.

Scope determines the next verification task. Do not collect many contact routes and leave recipients guessing the purchase. A person-focused brief and a program-focused brief may share the same inspiration while requiring different representatives, production conditions and acceptance criteria.`),
s('用频道标识固定研究对象','Anchor the research to a channel identifier',`YouTube 的频道标识说明指出频道有用于识别的 ID。品牌可在适当公开来源与对方提供的资料中匹配同一频道，不只靠会变化的显示名称。ID 帮助确认研究对象，不证明某个人的法律身份或商业权限。

保存频道地址、可核对标识、名称与日期。不要要求创作者把账号登录或高级设置控制权交给品牌；本次研究需要的是适当证据，不是控制账号。

跨平台资料或其他频道仍分别记录。一个团队运营多个节目，也不能因此将所有账号总数合并成一个独立受众。`,
`YouTube’s channel identifier guide explains that channels have identifying IDs. Match the same channel through appropriate public sources and supplied information instead of relying only on a changeable display name. An ID anchors the research object; it does not establish a person’s legal identity or commercial authority.

Preserve channel address, checkable identifier, name and date. Do not request account login or control of advanced settings. Research needs suitable evidence rather than possession of the account.

Keep other platforms and channels separate. A team operating several programs does not make their totals one deduplicated audience. This distinction becomes important in handoff: the buyer should know exactly which channel supplied the work being assessed and which account is proposed for a new publication, even when the same familiar presenter appears across both.`,['ytIds']),
s('把人物、节目与频道画成关系表','Map the person, program and channel',`一张关系表记录谁出镜、节目叫什么、在哪里发布、谁署名制作，以及哪些代表关系已确认。只写有来源的关系，没找到就保留未知，不用粉丝百科或熟悉印象补完。

出镜角色可能是主持、嘉宾、演员或产品使用者。节目由某频道发布，不必然说明所有素材权利都集中于频道负责人。品牌的请求应对应需要的角色与权利。

关系表不是公开人物档案。它仅保留本次合作必要的信息，避免私人关系、猜测身份或无关经历进入采购讨论。`,
`A relationship map records who appears, program title, publishing channel, production credits and confirmed representation. Include sourced relationships only, keeping missing ones unknown rather than completing them from fan material or familiarity.

The person may be a host, guest, performer or product user. Publication by a channel does not necessarily concentrate every asset right in its operator. Route the request according to the actual role and permission needed.

This is not a public dossier. Retain information necessary for the assignment and exclude private relationships, identity guesses and unrelated history. A practical map can identify an unresolved link clearly, such as who handles a host appearance outside the regular program, without making the entire record unusable. It gives the next researcher a bounded question instead of a vague instruction to verify everything.`),
s('把平台访问权限与商业授权分开','Separate platform access from commercial authority',`YouTube 的频道权限说明介绍不同访问角色的管理。它帮助理解多人可以参与频道工作，不意味着能上传或编辑的人就能代表所有参与者许可广告、承诺排他或签约。

品牌可以询问谁接收本次范围、谁能确认出镜与发布、谁处理素材使用。必要的正式文件按团队适用流程处理；不以聊天里“我能操作频道”代替完整授权依据。

如果代表只负责其中一项，让它转给适当接收人，而不是要求对方在权限之外承诺。不同角色可以协作，不必强行合并成一个人。`,
`YouTube’s channel permissions guide describes managing different access roles. It helps explain participation by several people without establishing that someone able to upload or edit can license advertising, promise exclusivity or contract for every contributor.

Ask who receives this scope, who confirms appearance and publication and who handles asset use. Process necessary formal records through the applicable organizational route instead of replacing authority with a chat statement that someone can operate the channel.

If a representative handles one component only, route other questions to an appropriate receiver rather than request commitments beyond that role. Several people can collaborate without being forced into one identity. The handoff should preserve those boundaries so a later media request does not inherit permission from an earlier operational conversation that concerned only uploading an approved file.`,['ytPermissions']),
s('相似名称值得核对，不自动定性','Check similar names without automatic accusations',`YouTube 的冒充政策说明平台对误导性未经授权冒充的处理背景。品牌不能只看相似头像或“Official”字样就确认身份，也不能仅凭相似就宣布某频道已经违规。将事实、疑问与平台结论分开。

从原始作品和当前公开来源交叉核对，注意个人、节目或粉丝频道的自述。没有完成核对时，不发送敏感项目资料或款项安排，也不公开指控。

必要时通过官方渠道处理明确问题。品牌自己的采购研究不是平台执法，也不应假装有能力判断每一个相似账号的真实意图。`,
`YouTube’s impersonation policy provides context for misleading unauthorized impersonation. A similar avatar or official wording does not confirm identity, while similarity alone does not establish a policy violation. Separate observed facts, questions and platform findings.

Cross-check original work and current public sources, including whether an account describes itself as personal, program-related or a fan channel. Until the match is established, do not transmit sensitive project material or payment arrangements, and avoid public accusation.

Use appropriate official routes for a defined issue. Procurement research is not platform enforcement and should not pretend to determine every similar account’s intent. It can reasonably withhold action on an unconfirmed route while continuing to locate the genuine public business contact, leaving the account-safety question and partnership fit as separate matters.`,['ytImpersonation']),
s('以作品和当前公开代表确认联系','Use work and current public representation for contact',`从频道或创作者当前公开业务入口寻找接收人，记录来源与日期。旧视频里的联系人可能已变化，个人社交账号也可能不接收节目采购。没有当前依据，就先询问正确路径而不是猜私人邮箱。

首次联系说明你参考哪项作品、希望哪个角色完成什么，以及需要哪些条件。不要暗示已经与主持人或节目达成关系，也不让对方免费制作新内容来确认身份。

公开联系信息只是沟通线索，不保证回复、代表权限或合作接受。每个后续状态都按实际证据更新。`,
`Locate a receiver through the channel’s or creator’s current public business route, preserving source and date. A contact in an older video may have changed, and a personal social account may not handle program procurement. Ask for the right route where evidence is absent instead of guessing a private email.

An initial message identifies the work, proposed role, task and necessary conditions. Do not imply an existing relationship with the host or program, or ask for unpaid new production as identity proof.

Public contact information is a lead, not a guarantee of reply, authority or acceptance. Update each later state from actual evidence. This makes the request useful even when the first recipient needs to redirect it: they can identify whether the brand is asking about a host, show, publishing slot or existing asset.`),
s('演练主持人和节目分离的请求','Rehearse a host-and-program distinction',`假设品牌喜欢某节目里的主持解释，想请该人制作独立产品演示。节目频道有一个公开业务邮箱，但目前不清楚它是否代理主持人的节目外工作。案例没有真实频道或人物。

先说明需求是本人新作，而非节目赞助，询问适当接收路径。如果后来改成节目内段落，重新确认制作、发布和受众范围；不能让原来的讨论自动扩展。

若品牌要买旧片段，则另核对素材权利，不因主持人愿意新拍就认定旧节目可用。三个请求可以相关，但不能使用同一个未说明的“同意”。

假设询问可写为：“我们研究由该节目出镜人制作一条独立演示，目前不申请节目赞助或旧片段许可。贵方公开业务团队是否接收这类本人新作请求？如不适用，请说明可用官方路径。”这只是示例，没有实际发送或对应真实人物。

回复可能只确认联系路径。采购前仍需分别确认范围、本人参与、发布对象与素材使用。如果对方改提节目段落，保留为另一方案，不能悄悄替换原请求却沿用原批准。`,
`Suppose a brand values a program presenter’s explanation and wants an independent product demonstration from that person. The program channel has a public business email, but it is unclear whether it represents the host’s work outside the show. This hypothetical names no actual channel or person.

State that the request concerns new personal work rather than show sponsorship and ask for an appropriate route. If it later becomes an in-program segment, confirm production, publication and audience scope again rather than expand the earlier discussion automatically.

For existing footage, check asset rights separately. Willingness to film new work does not establish availability of an older program clip. These requests can be related without sharing one unexplained consent. A usable record identifies which request received which answer, keeping an exploratory introduction separate from approval of a defined assignment.

An example inquiry could read: “We are researching a new independent demonstration by the presenter featured in this program. We are not currently requesting show sponsorship or permission to reuse the linked clip. Is your public business team the appropriate receiver for that personal production request? If not, please indicate an official route where available.” This is proposed wording, not a sent message or a request concerning a real person.

The reply may establish only a contact route. Before purchase, confirm the actual scope, performer participation, publication object and any asset use separately. If the receiving team instead offers a program segment, preserve it as a different proposal rather than quietly replacing the requested work while retaining the original approval. That record prevents an introductory answer from turning into permission for a materially different campaign.`,[]),
s('把身份确定与适合合作分别验收','Review identity and fit as separate questions',`确认人物或频道之后，仍要研究作品能力、相关观众、制作条件和商业范围。正确对象可能不适合本次任务；适合作品的来源也可能尚未确认。不要让一个“已验证”标签掩盖两项问题。

用候选研究方法逐项保存证据。决定继续、询问或不采用时，写具体理由，不把未回复解释成不可信，也不把熟悉名字当作必须批准。

这有助于团队保留未来机会：今天不适合的角色，可能在另一个明确任务里有价值。`,
`After identity is established, assess capability, relevant audience, production conditions and commercial scope. The right person can be unsuitable for this assignment, while an apparently suitable piece can still have uncertain provenance. One verified label should not conceal both questions.

Use the candidate research method to retain evidence by task. Explain reasons for continuing, asking or declining rather than interpreting no reply as untrustworthy or a familiar name as mandatory approval.

This preserves future opportunities: a role unsuitable now may be relevant to another explicit assignment. It also lets procurement distinguish a practical mismatch from an identity problem. The actions differ, and collapsing them can either block a legitimate route unnecessarily or allow an unconfirmed recipient to inherit the credibility of a person whose work the team recognizes.`,[]),
s('让交接包含尚未确认的关系','Include unresolved relationships in handoff',`交出人物、节目、频道、制作与代表关系，附对应来源和确认时间。待确认项必须有问题与接收人，不只留一个红色标记。没有核对权限时，不让执行同事误以为已经可以签约或使用素材。

后续代表变化或节目调整，保留新记录与原因。不要静默覆盖旧资料后，再把旧判断说成当时已经知道。需要修正已经发出的提案时，通知实际接收人并说明影响。

身份研究的成果是清楚的下一步，而不是让所有资料看起来完整。`,
`Hand over person, program, channel, production and representation relationships with sources and confirmation times. Open items need a question and receiving owner, not merely a red marker. Where authority is unconfirmed, do not leave execution colleagues assuming they can contract or use assets.

Preserve later representation or program changes with reasons instead of silently overwriting records and pretending the earlier decision already contained the new knowledge. Correct affected recipients where an issued proposal needs revision.

The deliverable is a clear next step, not the appearance of complete information. A useful map can remain partly unresolved if it tells the team what is safe to discuss, what requires confirmation and which person is responsible for obtaining that confirmation before execution.`,[]),
s('让热门人物研究回到实际合作','Return popularity research to the actual partnership',`寻找热门 YouTuber 的品牌任务，不应停在名字和频道总量。把想要的角色、对应作品、公开路径与使用范围接起来，才能让询问真正抵达能处理的人。

频道标识帮助匹配，角色资料帮助理解，权限记录帮助管理；它们各自有限，不能互相代替。对未知保持诚实，也能继续推进具体研究。

最终应能回答：我们想请谁做什么，为什么认为这个路径合适，以及执行前还要确认哪一项。`,
`Brand research on popular YouTubers should go beyond names and channel totals. Connect the desired role, relevant work, public route and usage scope so a request reaches someone able to handle it.

Identifiers support matching, role evidence supports understanding and permission records support operation. Each is limited and cannot replace the others. Honest unknowns still permit concrete research progress.

The final note should answer whom the brand wants to do what, why the route appears suitable and which item needs confirmation before execution. That turns recognition into a reviewable partnership inquiry without claiming a popularity ranking, private identity check or agreement the team has not obtained.`,[])
],
links:[link('达人 Brief','creator brief','write-a-useful-campaign-brief'),link('候选研究方法','candidate research method','influencer-discovery-tool-brief-to-candidates')],
table:{title:p('人物与节目合作关系表','Person-and-program partnership map'),headers:[p('对象','Object'),p('需要证据','Evidence needed'),p('不能代替','Does not replace')],rows:[[p('人物','Person'),p('公开角色与相关作品','Public role and relevant work'),p('频道全部权利','Every channel right')],[p('节目','Program'),p('来源、制作与发布关系','Provenance, production and publication'),p('本人节目外合作','Personal work outside the program')],[p('频道','Channel'),p('地址、标识与日期','URL, identifier and date'),p('个人法律身份','Personal legal identity')],[p('代表','Representative'),p('本次范围的实际确认','Confirmation for this scope'),p('所有未来授权','All future authority')]],note:p('主持人案例为假设；平台访问权限不自动证明商业授权。','The host example is hypothetical; platform access does not automatically establish commercial authority.')},
tool:{title:p('发送请求前','Before sending the request'),intro:p('先找对角色，再找对路径。','Identify the role before choosing the route.'),items:[p('人物、节目与频道分别记录。','Person, program and channel are distinguished.'),p('研究对象有可核对标识。','The research object has a checkable identifier.'),p('公开联系与代表关系有日期。','Public contact and representation have dates.'),p('新作、发布和旧素材请求分开。','New work, publication and existing-footage requests are separate.'),p('未知关系不会被执行者当作批准。','Unresolved relationships cannot be mistaken for approval.')]}
});
