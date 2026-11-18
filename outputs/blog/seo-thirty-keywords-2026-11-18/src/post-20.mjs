import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:20,
summary:p('把创作者说的“被限流”转成有范围的合作状态：观察到什么、平台确认什么、当前工作需要什么决定。','Turn a creator’s shadowbanned report into a scoped partnership update: what was observed, what the platform confirms and what work decision is needed.'),
description:p('Shadowbanned meaning 达人合作指南：区分口头描述、低触达观察与正式平台通知，写出可继续执行的状态更新。','Understand shadowbanned meaning in creator campaigns by separating reported symptoms, distribution observations and official notices in an actionable status update.'),
coverAlt:p('编辑图形把症状、平台通知与工作决定分开呈现','An editorial graphic separates a symptom, a platform notice and a work decision'),
answer:p('Shadowbanned 常被用来描述内容似乎更难被看见、推荐或找到的情况；在达人合作里，这句话首先是一个需要澄清的报告，不是品牌已经完成的账号诊断。先记录哪条作品、什么时期、哪项现象，再分别核对平台实际通知与账户可用状态。低浏览本身不能证明隐藏限制，正式不推荐、内容移除和登录受限也不是同一结果。状态更新应说明已知、未知和下一步负责人，避免把推测写成创作者违规或合作失败。','Shadowbanned commonly describes content seeming harder to see, recommend or find. In a creator partnership, treat it first as a report to clarify rather than a completed account diagnosis. Identify the work, period and observed symptom, then separately check actual platform notices and available account status. Low views alone do not establish a hidden restriction, while recommendation ineligibility, removal and login limits are different outcomes. An update should state knowns, unknowns and the next owner without presenting speculation as creator misconduct or partnership failure.'),
sections:[
s('把一个词拆成能够核对的现象','Translate the label into a checkable observation',`当创作者说被限流，先询问具体意思：这条作品浏览较低、某个推荐来源变化，还是看到正式通知？不同回答对应不同资料。

不要立刻要求对方证明自己没有问题。合作沟通先解决事实与任务，能够避免一句模糊描述在团队里被转述成确定处罚。

记录现象时保留范围，例如某条作品在某一观察期的情况。不要把一次搜索未找到、一个人的信息流体验或一个截图扩展为全部用户都看不到。

可以先使用中性表达：创作者报告触达变化，正在核对相关资料。这样不忽视问题，也不让状态更新越过证据。`,
`When a creator reports a shadowban, ask what they mean: lower views on a work, a changed recommendation source or an official notice? Each answer needs different information.

Do not immediately require them to prove there is no problem. Start with facts and the assignment so an ambiguous description does not circulate internally as a confirmed penalty.

Retain scope, such as one work during one observation period. An unsuccessful search, one person's feed or a screenshot should not become a claim that nobody can see the content.

A neutral initial update can say that the creator reports a distribution change and relevant information is being checked. This acknowledges the issue without going beyond evidence. It also gives the project owner something concrete to ask next, instead of triggering a broad debate about a term that different people may be using for different experiences.`),
s('可保留、可推荐与实际触达不是一回事','Separate allowed content, eligibility and actual distribution',`Meta 的推荐资格说明在 2020 年公开解释过：某些内容可以保留在平台，却不进入推荐。这个概念有助于区分资格与移除，不能直接诊断今天某个具体账户。

即使作品符合推荐条件，也不代表每个人都会看到；反过来，某个浏览变化也不能自动说明作品被移除。不要把几个不同问题压成一个词。

品牌需要知道的是哪个状态影响本次工作，而不是替平台推断隐藏原因。如果没有相关通知或资料，就在报告里保留这一限制。

讨论时把概念说明与账户事实分开。公开规则帮助提出正确问题，具体作品仍然需要对应记录，不能用一篇平台文章替代实际核对。`,
`Meta’s recommendation-eligibility explanation publicly distinguished in 2020 between content allowed on the platform and content included in recommendations. The concept helps separate eligibility from removal without diagnosing a particular account today.

Eligibility also does not mean everyone sees a work, and a view change does not automatically mean removal. These are different questions rather than interchangeable labels.

The brand needs to know which state affects the assignment instead of inferring a hidden cause for the platform. If a relevant notice or record is unavailable, retain that limit in the update.

Keep conceptual explanation separate from account facts. Public guidance helps formulate the right question, while a particular work still needs corresponding evidence. A platform article cannot stand in for checking the creator's actual situation, and the absence of a known notice should not be rewritten either as proof of a hidden action or proof that no issue exists.`,['metaRecommendations']),
s('正式通知要按它实际说明的范围记录','Record an official notice according to its actual scope',`TikTok 的内容处理与申诉说明区分内容移除与不适合进入 For You 推荐，并介绍查看原因与提出申诉。不要把某个帖子的通知扩大为整个账户全部功能失效。

核对时保留相关作品、通知日期与具体影响，不需要把账号凭据或无关私人资料交给品牌。品牌通常需要项目相关信息，而不是接管创作者账户。

如果通知有正式处理方式，由账户持有人按当前提供的途径处理。提交申诉表示进入复核，不等于已经恢复，也不能预告某个固定时长必然结束。

这类资料可以支持真实状态更新，但仍不能替品牌决定合同责任。商务判断需要回到实际约定和可确认事实，不能由一个标签自动完成。`,
`TikTok’s content-action and appeal guide separates removal from For You recommendation ineligibility and describes reason review and appeal. A notice about one post should not expand into every account function being unavailable.

Retain the affected work, notice date and actual impact without asking the creator to give the brand credentials or unrelated personal information. The project usually needs relevant evidence, not account takeover.

Where a formal route is provided, the account holder can use it. Submitting an appeal starts review; it does not establish recovery or justify a guaranteed completion time.

These records support an accurate update without independently deciding contractual responsibility. Commercial decisions still concern the agreement and confirmed facts rather than one label. Keep the platform's stated action separate from the team's interpretation of what it means for a particular deliverable.`,['tiktokModeration']),
s('低浏览需要合适比较，不能单独作诊断','Use a suitable comparison without diagnosing from low views',`作品之间的主题、形式、观察期和公开条件可能不同。先说明拿什么与什么比较，不把一条新作品短时间内的计数直接与另一条长期累计结果相比。

TikTok 的内容推荐说明讨论了个性化分发。即使两个人关注相同创作者，看到的内容也可能不同，因此一个人的查看不能代表全部推荐情况。

达人数据口径文章帮助把观察范围写清。数据可以说明发生变化，但变化原因通常需要更多资料；没有原因证据时，不必强行给出一个。

保留准确的有限结论，例如这条作品在相同观察期的公开浏览低于选定参考。它支持继续研究，不等于已经证明隐藏限制。`,
`Works can differ in subject, format, observation period and publication conditions. State the comparison instead of placing a new post's short-window count against another's long-term accumulation.

TikTok’s content-recommendation guide describes personalization. Two people following the same creators may see different content, so one person's viewing experience does not represent all recommendations.

The creator-data definition article helps state observation scope. Data can show a change while its cause needs more information; an explanation need not be forced where evidence is absent.

Retain a limited accurate finding, such as lower public views than selected references over a matching period. That supports further inquiry without proving a hidden restriction. A careful comparison can improve a content discussion while leaving platform action unconfirmed, keeping the team from treating every disappointing result as either misconduct or a technical diagnosis.`,['tiktokRecommendations']),
s('状态更新写三层：已知、未知、下一步','Write knowns, unknowns and the next action',`已知写实际观察与可见通知；未知写原因、范围或仍待确认的信息；下一步写由谁做什么。三层可以很短，但不能互相代替。

例如“作品可见，创作者报告推荐来源变化，尚未确认原因，账户持有人查看当前通知后更新”。这比“账号被封，合作失败”更准确，也更容易执行。

给状态注明日期，后续有新资料时更新受影响部分。不要在一次修改后仍让旧版本流传，造成有人继续按已经过期的结论处理项目。

状态更新不应夹带无关评价。创作者是否值得长期合作，需要更多内容与商务判断，不从一项尚未解释的现象直接得出。`,
`Knowns contain observations and visible notices; unknowns contain cause, scope or pending information; the next action names who does what. These layers can be short without substituting for one another.

For example: the work is visible, the creator reports changed recommendation sources, cause is unconfirmed, and the account holder will inspect current notices before updating. That is more accurate and actionable than account banned, partnership failed.

Date the update and revise the affected part when information arrives. Do not leave an outdated conclusion circulating after the record changes.

An operational update should not carry unrelated judgments. Long-term creator fit needs broader content and commercial assessment rather than a conclusion from one unexplained symptom. The purpose is to help the project proceed on shared facts, not to persuade everyone that a preferred explanation has already been established.`),
s('把当前工作影响写具体','State the particular impact on current work',`品牌需要知道哪些任务真正受影响：素材制作是否仍能继续，约定发布是否需要等待，已上线内容是否可见，或复盘数据是否暂时不足。

不要把一个分发现象自动扩展成全部工作暂停。也不要反过来忽视真实发布限制，继续声称原计划没有变化。

达人项目状态方法帮助把事实连接到任务。不同决定可以由不同人负责，账户持有人处理平台通知，品牌与创作者共同确认交付安排。

如果涉及调整时间、范围或费用，明确讨论，不把不确定状态直接转成单方追加义务。项目决定应有具体理由，而不是依赖一个情绪化标签。`,
`The brand needs the task impact: can production continue, must agreed publication wait, is existing work visible or is measurement temporarily insufficient?

A distribution symptom should not automatically pause every task. Conversely, do not ignore a real publishing limitation while claiming the original plan is unchanged.

The creator-project status method connects facts to tasks. Different owners can handle different decisions: the account holder addresses platform notices, while creator and brand agree delivery arrangements.

Discuss time, scope or compensation changes explicitly rather than turn uncertainty into unilateral additional obligations. A project decision should have a specific reason instead of depend on an emotive label. This keeps the partnership focused on what can actually be completed and what requires another agreement, reducing the chance that a limited technical issue becomes an inaccurate explanation for every unresolved part of the work.`),
s('只使用能够说明的正式下一步','Use legitimate next actions with an explainable purpose',`下一步可以是核对实际通知、查看对应作品、确认比较口径，或使用平台提供的申诉与支持。每个动作应服务尚未回答的问题。

不要承诺某个停更天数、删除数量或更换账号做法一定恢复。也不要让创作者为了看似解决问题，放弃已有记录或规避真实限制。

品牌不需要一份万能修复清单。需要的是当前工作能否继续、什么信息还缺、何时重新沟通，以及由谁处理。

若原因仍不明，可以保留待核验，同时继续不受影响的已约定工作。没有完整诊断，不等于必须编一个，也不等于项目所有部分都无从判断。`,
`Next actions can include checking a notice, inspecting the affected work, confirming comparison definitions or using the platform's appeal and support routes. Each should address an unanswered question.

Do not promise recovery from a fixed posting break, deletion count or account change. Nor should a creator abandon useful records or evade actual restrictions to make the issue appear solved.

The brand does not need a universal repair list. It needs to know what can continue, what information is missing, when to review again and who acts.

If the cause remains unknown, retain a pending check while continuing unaffected agreed work. An incomplete diagnosis does not require an invented one or prevent every project decision. A scoped action keeps uncertainty manageable without making the creator responsible for producing a certainty the available evidence cannot provide.`),
s('对内沟通也保留准确措辞','Use accurate language in internal communication too',`内部群聊里的确定说法，可能很快进入客户报告或其他负责人判断。避免把“创作者说被限流”缩写成“创作者违规”，尤其在没有对应通知时。

可以使用报告、观察到、尚未确认与平台通知显示等措辞，明确每句话来自哪里。不是让报告更含糊，而是让事实层次更清楚。

不需要广泛传播私人账户截图。分享项目所需范围，并说明时间与内容，避免让一张旧图成为永久标签。

如果此前说法不准确，更新具体记录与受影响沟通。更正应指向新事实，而不是再用另一个同样没有依据的解释替换。`,
`A confident statement in an internal chat can quickly enter a client report or another owner's judgment. Do not shorten creator reports a shadowban to creator violated policy, particularly without a corresponding notice.

Use reported, observed, unconfirmed and the notice states to identify each statement's basis. This makes factual layers clearer rather than making the report vague.

Avoid broad circulation of private account screenshots. Share the project-relevant scope with date and context so an older image does not become a permanent label.

If earlier wording was inaccurate, update the record and affected communication. Corrections should follow new facts rather than replace one unsupported explanation with another. Careful internal language helps both the brand and creator maintain a usable working relationship while the account holder pursues whatever official information is actually available.`),
s('用一条假设报告检查表述','Check the wording through a hypothetical report',`假设创作者说某条合作作品被限流。品牌看到作品仍可见，资料显示一个较低的观察期计数，但尚未收到相关平台通知。

报告可以写：当前作品可见，观察到的表现低于所选参考，原因未确认；下一步由账户持有人核对通知，品牌继续检查本轮素材与发布安排。

若后来确认某条作品不适合推荐，就更新这一条的范围，不自动写成全账户被封。若没有新资料，就保留未知，不把等待时间变成确定诊断。

这个例子没有真实账户结果。它展示状态更新如何支持任务，同时避免把一个现象扩展成对创作者个人的指控。`,
`Imagine a creator saying that a partnership post was shadowbanned. The brand sees the work remains visible and a lower observation-window count, but has no relevant platform notice.

An update can say: the work is visible, observed performance is below selected references, cause is unconfirmed; the account holder checks notices while the brand reviews this round's materials and release arrangements.

If later evidence establishes recommendation ineligibility for one work, update that scope without writing that the whole account is banned. If nothing new arrives, retain the unknown instead of turning elapsed time into a diagnosis.

This hypothetical has no actual account result. It illustrates an update that supports tasks without expanding a symptom into an accusation about a creator. The team can act on confirmed work conditions while allowing the unanswered platform question to remain unanswered until appropriate evidence becomes available.`),
s('每次新资料只更新受影响结论','Update the conclusion affected by new evidence',`后续资料可能确认某项限制、显示状态改变，或只补充一个比较口径。分别更新，不因为有一条新信息，就把全部项目判断一次推翻或全部证实。

如果后来不再看到通知，记录这次观察与日期，不把此前真实记录改写成从未发生。新通知也只关联它对应的作品与时期，不倒推解释所有旧结果。保留当前负责人和下一次检查条件。无需为了显示进度反复提交相同内容，也不需要每天重复一个没有变化的确定说法。

Shadowbanned meaning 在达人合作中的实用答案，是把日常用语转成有依据的工作状态：什么发生了，什么尚不知道，什么动作现在合理。

这样的沟通既认真对待创作者报告，也让品牌在证据范围内作决定。合作需要真实下一步，不需要没有依据的保证恢复或确定指控。`,
`New information may confirm a restriction, show a changed state or clarify only a comparison definition. Update the relevant conclusion without treating one fact as proof or disproof of every project judgment.

If a notice is no longer visible later, record that observation and its date without rewriting the earlier record as if it never existed. Likewise, a new notice should be attached to the work and period it concerns rather than used to explain every earlier result retrospectively. Retain the current owner and conditions for another check. Repeating the same submission or an unchanged confident statement is not necessary merely to display progress.

The practical influencer-marketing answer to shadowbanned meaning translates informal language into an evidence-based work update: what happened, what remains unknown and which action is reasonable now.

That communication takes the creator's report seriously while keeping brand decisions within evidence. The partnership needs an actual next step rather than unsupported recovery guarantees or accusations. A precise update can remain useful even when it cannot supply the hidden cause someone originally hoped the term would explain.`)
],
links:[link('达人数据口径文章','creator-data definition article','read-creator-engagement-data'),link('达人项目状态方法','creator-project status method','creator-campaign-status-system')],
figures:[{file:'shadowbanned-report-status-language.svg',afterSection:5,alt:p('将报告的症状、可确认状态与当前合作决定分开记录','Reported symptoms, confirmed state and current partnership decision are recorded separately'),caption:p('状态更新应说明事实与下一步，不用推测给创作者定性。','An update should state facts and next action without characterizing a creator through speculation.')}],
table:{title:p('把模糊描述变成工作状态','Translate an ambiguous description into work status'),headers:[p('层次','Layer'),p('合适记录','Useful record'),p('避免扩展','Avoid extending to')],rows:[[p('报告','Report'),p('本人描述的具体现象','The particular reported symptom'),p('已经确认的平台处罚','Confirmed platform enforcement')],[p('观察','Observation'),p('作品、时期与口径','Work, period and definition'),p('全部用户都看不到','Invisible to every user')],[p('通知','Notice'),p('实际内容与适用范围','Actual message and scope'),p('整个账户全部失效','Every account function unavailable')],[p('决定','Decision'),p('任务影响与负责人','Task impact and owner'),p('未经讨论的商务结论','Undiscussed commercial conclusions')]],note:p('编辑沟通方法；不提供账号诊断、恢复保证或针对个人的指控。','Editorial communication method; no account diagnosis, recovery guarantee or accusation about an individual.')},
tool:{title:p('发送状态更新之前','Before sending a status update'),intro:p('让每句话都能说明它的依据。','Make the basis of each statement clear.'),items:[p('记录本人报告与具体作品。','Record the report and specific work.'),p('核对时期与比较口径。','Check period and comparison scope.'),p('分别保留实际平台通知。','Retain actual platform notices separately.'),p('写明未知，不自动推断原因。','State unknowns without inferring causes.'),p('说明当前任务受什么影响。','Identify the effect on current work.'),p('安排合理下一步与负责人。','Assign a reasonable next action and owner.')]}
});
