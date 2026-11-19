import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:14,
summary:p('最佳 YouTuber 取决于任务。用明确权重和有限证据展示排序为何改变，让团队讨论取舍，而不是把主观总分包装成全球结论。','The best YouTuber depends on the assignment. Make weights and evidence visible so a team can understand changing preferences without presenting a subjective score as a universal verdict.'),
description:p('Who is the best YouTuber：用假设评分演示任务权重如何改变推荐，区分必要条件、证据缺口与偏好，服务真实达人合作。','Who is the best YouTuber for a brand? Examine task weights, evidence gaps and sensitivity through a hypothetical decision example rather than a universal ranking.'),
coverAlt:p('视频创作者在工作台解释机械演示装置，相机位于旁边','A video creator explains a mechanical demonstration at a workshop bench beside a camera'),
answer:p('Who is the best YouTuber 没有适用于所有品牌任务的单一答案。娱乐、产品解释与专业经验可能需要不同贡献；最大的频道也不自动成为最佳合作对象。品牌应先确认必要条件，再用作品证据比较与任务有关的偏好，并检查改变权重后推荐是否变化。本篇提供编辑决策方法与明确标注的假设计算，不对真实创作者编造分数，也不把主观排序称为行业公认事实。','Who is the best YouTuber has no single answer for every brand assignment. Entertainment, product explanation and specialist experience can require different contributions; the largest channel is not automatically the best partner. Establish necessary conditions, compare task-relevant preferences from work evidence and check whether changing priorities changes the recommendation. This guide offers an editorial decision method and explicitly hypothetical arithmetic, without inventing scores for actual creators or presenting subjective ordering as an industry fact.'),
sections:[
s('先问哪个任务需要最佳人选','Ask which assignment needs the best person',`把“最佳”补成完整问题：谁最适合解释这个使用步骤，谁最适合主持讨论，或谁能以真实经验回应某类观众疑问。不同任务不必产生同一个名字。

YouTube 品牌任务筛选指南说明如何从作品建立入围理由。本篇进一步处理团队入围后仍有分歧的情况，重点是权重与证据如何影响推荐。

写清这次决定的范围，例如选择解释主持者，而不是评价对方全部职业能力。某位创作者没有入选这次任务，不等于内容质量低或不值得长期关注。

让任务负责人确认目标，避免研究到最后才发现采购、创意和业务讨论的是三种不同合作。共同问题比一个看起来精确的总分更能支撑有效比较。`,
`Complete the word best with a task: who can explain this use step, host this discussion or address a particular audience question through actual experience? Different assignments need not produce the same name.

The brand-task shortlist guide explains building reasons for inclusion from work. This article addresses disagreements that remain after shortlisting, concentrating on how weights and evidence affect a recommendation.

Define the decision's scope, such as selecting an explanatory host rather than judging someone's entire professional ability. Not being chosen for this assignment does not establish poor content quality or a lack of long-term relevance.

Have the assignment owner confirm the objective so procurement, creative and business colleagues do not discover at the end that they were discussing three different partnerships. A shared question supports comparison better than a precise-looking total. It also gives the creator a fairer context if the brand later requests information: the request concerns a specific contribution, not proof of being universally superior.`),
s('必要条件不要藏在可补偿的总分里','Keep necessary conditions outside a compensating score',`身份、可用档期、真实体验与特定制作条件，可能是必须先确认的事项。某项必要条件未满足时，不能因为另一个偏好分高就假装问题消失。

YouTube Data API 的频道定义帮助确认研究对象身份，但技术标识不等于签约权或本人参与。需要谁出镜、谁承诺交付，仍由实际合作方确认。

将条件分成已确认、待确认与不适用，而不是把缺少资料直接记成失败。暂时不知道档期，可以成为下一步问题，不是负面人格评价。

先确认比较是否有意义，再讨论偏好。否则团队可能花很长时间争论一个总分，最后才发现入选者无法完成必需任务，或者推荐基于错误账号。`,
`Identity, availability, actual experience and particular production conditions may need confirmation before comparison. An unmet necessary condition cannot disappear because another preference scores highly.

YouTube Data API’s channel definition helps establish the publishing identity, but a technical identifier does not prove contracting authority or personal participation. The actual parties must confirm who appears and who commits the deliverable.

Separate confirmed, awaiting confirmation and inapplicable conditions instead of scoring missing information as failure. Unknown availability can be the next question rather than a negative character assessment.

Establish that a meaningful comparison is possible before debating preferences. Otherwise a team can spend considerable effort on a total score before discovering that the selected candidate cannot perform an essential task or was researched through the wrong account. Necessary conditions also need an owner and a review point, so a provisional candidate does not quietly become fully confirmed merely because a spreadsheet has moved to its next tab.`,['ytChannels']),
s('让每个判断回到实际作品','Return every judgment to actual work',`为解释清楚、主题经验或协作适应性等判断保留具体作品依据。写明看过哪里、观察到什么，以及结论只覆盖哪种任务。

不能仅因口音、外貌、年龄或身份标签推断能力；也不能因为表达自信就假定具备专业资格。需要的资格应另有适当证据。

FTC 的达人披露指南强调美国语境下的真实体验与依据。品牌不应给“愿意说任何效果”的人更高分，也不能把没有发生过的体验当成优秀表达。

作品证据与后续合作条件分开记录。公开视频能说明部分表现，但通常不能完整解释反馈习惯、内部制作角色或可用时间，需要用具体问题向对方核实。`,
`Retain specific work evidence for judgments such as explanatory clarity, subject experience or adaptability. State where you looked, what you observed and which task the conclusion covers.

Do not infer ability from accent, appearance, age or identity labels, or assume that confident delivery establishes professional qualifications. A required qualification needs appropriate independent support.

FTC’s influencer-disclosure guide emphasizes actual experience and substantiation in its United States context. A brand should not reward willingness to state any desired effect, or treat an experience that never happened as good expression.

Record work evidence separately from later collaboration conditions. Public content can demonstrate some performance without fully explaining feedback practice, internal production roles or availability; ask specific questions to confirm those points. This keeps the comparison connected to what a creator actually did while leaving space for new evidence, rather than making an attractive montage carry unsupported assumptions about every stage of a future assignment.`,['ftc']),
s('把权重写成品牌偏好','Describe weights as the brand’s priorities',`权重表达这次任务有多重视某项标准，不是创作者的客观价值。先说明为什么重视清楚解释、相关经验或版本适应，再决定是否需要数字化。

若使用评分，给每个档位写清含义。一个人的四分不能只是另一人的“感觉不错”，否则相同数字并不代表相同判断。

权重应在看到最终排序前讨论，避免为了支持喜欢的人而临时调整。确实需要改变目标时，可以更新，但保留理由与日期。

并非每项条件都适合量化。关键事实、公开资料限制与尚需对方确认的事项，可以用文字保留，不必强行折算进一个总分。评分是帮助讨论的工具，而不是消除责任的机器。

两位候选差距很小时，保留并列或继续核验也可以成立。不必制造一个精确胜者；下一次具体沟通可能比更多评分更能解决决定。`,
`Weights express how much this assignment values a criterion, not a creator's objective worth. Explain why clarity, relevant experience or version adaptability matters before deciding whether numbers help.

If scoring is used, define the levels. One person's four should not merely mean what another person calls quite good; identical numbers otherwise describe different judgments.

Discuss priorities before viewing the final order so weights are not adjusted simply to support a preferred candidate. A genuine change in objectives can justify a revision, provided the reason and date remain visible.

Not every condition belongs in arithmetic. Essential facts, public-information limits and points requiring confirmation can remain in words instead of being forced into a total. Scoring supports discussion rather than removing responsibility. The team still needs to explain why the priorities fit the assignment and whether the available evidence is strong enough to use those priorities meaningfully, especially when a small numerical difference looks more decisive than the underlying observations.

A close comparison can remain tied or awaiting confirmation. There is no obligation to manufacture a precise winner when a specific follow-up conversation would resolve the decision better than more scoring.`),
s('用假设数字看见偏好怎样改变排序','Use hypothetical arithmetic to expose changing priorities',`假设仅为演示，A 在解释清楚、情境相关、版本适应三项得分为五、三、二；B 为三、四、五。人物和数字都不是实际创作者评价或行业基准。

若权重为百分之六十、三十、十，A 的加权值为 4.1，B 为 3.5。若改成百分之二十、三十、五十，则 A 为 2.9，B 为 4.3。

排序改变说明决定依赖任务优先级，不说明任何人突然变好或变差。计算本身不能证明档位合理，也不能补齐不存在的作品依据。

团队应问哪组偏好对应真实任务，而不是挑选能产生想要名字的公式。若对任务本身仍无共识，下一步是澄清需求，不是添加更多小数位。`,
`For illustration only, suppose A scores five, three and two for explanatory clarity, context relevance and version adaptability, while B scores three, four and five. Neither the people nor the values represent actual creator assessments or benchmarks.

With weights of sixty, thirty and ten percent, A's weighted value is 4.1 and B's is 3.5. Changing the weights to twenty, thirty and fifty percent produces 2.9 for A and 4.3 for B.

The reversed order shows dependence on priorities, not that either person suddenly improved or deteriorated. Arithmetic cannot establish that the levels are reasonable or supply work evidence that does not exist.

Ask which priorities reflect the real assignment instead of choosing a formula that yields a preferred name. If the team still disagrees about the task, clarify the requirement rather than adding decimal places. The example demonstrates sensitivity, making a hidden preference visible so colleagues can discuss the actual trade-off before treating a ranking as a recommendation.`),
s('将缺少资料与表现较弱分开','Separate missing evidence from weaker performance',`没有受众资料，不等于受众不适合；没有公开某种作品，也不等于永远无法完成。记录证据状态，避免将未知统一填零。

YouTube 的受众说明提醒部分资料可能有限，也为不同受众信息保留不同观察范围。品牌应询问与任务有关的适当资料，不要求每位候选提供完全相同的无关字段。

若缺口会改变决定，写清补什么、向谁核对、何时再看。若缺口不影响本次任务，就说明为何暂时不需要，避免研究无限扩大。

不能将未回复一次邮件直接写成不专业，也不能将第三方估计当作创作者确认事实。保留状态能让名单随着新证据更新，而不是让第一次资料不足变成永久标签。`,
`Unavailable audience information does not establish an unsuitable audience; the absence of a public example does not prove a task can never be performed. Retain evidence states instead of filling every unknown with zero.

YouTube’s audience guide notes that some information can be limited and gives different observation scopes for different audience views. Request appropriately relevant evidence rather than requiring every candidate to supply identical unrelated fields.

If a gap could change the decision, identify what is needed, who should confirm it and when to review again. If it does not affect this assignment, explain why it can remain open so research does not expand indefinitely.

One unanswered email should not become a claim of unprofessional conduct, and a third-party estimate should not become a creator-confirmed fact. State tracking lets the list update with new evidence instead of turning initial incompleteness into a permanent label. It also focuses follow-up on information capable of changing the recommendation rather than merely increasing document volume.`,['ytAudience']),
s('用分歧记录找到真正的取舍','Use disagreement to identify the actual trade-off',`如果创意团队更看重表达，业务团队更看重多版本交付，可以分别写清理由与依据。不要简单取平均后假装已经有共识。

先看双方是否在讨论相同交付。一次清楚的主片与一组市场改编，可能需要不同角色或制作安排，不必由一个人同时获得全部最高评价。

决定也可以是先核验条件、缩小任务或分开采购。不是每次分歧都要通过宣布某位 YouTuber 绝对最佳来结束。

交接时保留被接受的取舍，例如这次优先解释深度，版本改编另行确认。这样后续团队理解为什么选人，也不会在执行阶段重新加入已决定不购买的范围。`,
`If creative colleagues value expression while business colleagues prioritize multiple versions, record their reasons and evidence separately. Simply averaging the views can conceal disagreement rather than resolve it.

First establish whether both groups are discussing the same deliverable. One clear principal film and a set of market adaptations may need different roles or production arrangements; one person need not receive the highest rating for everything.

The decision could be to confirm a condition, narrow the assignment or procure components separately. Not every disagreement needs to end by declaring one YouTuber absolutely best.

Retain the accepted trade-off in handover: for example, explanatory depth takes priority here while adaptation remains to be agreed. Later colleagues then understand the selection and do not reintroduce unpurchased scope during execution. A documented trade-off provides a more usable explanation than a total alone, because it connects the chosen contribution with the constraint the team knowingly accepted.`),
s('任务改变后重新核对推荐','Revisit the recommendation when the assignment changes',`如果品牌后来增加语言、产品或发布形式，原权重与作品样本可能不再对应。保留原决定并复核受影响部分，不把早先的“最佳”变成永久采购结论。

同类频道比较方法可以帮助更新样本边界，但不能自动证明新任务适合。需要重新确认的条件应由相应负责人处理。

也允许创作者提出更合适的表达方式。合作不是要求对方严格复刻研究者看中的旧作品，而是在双方确认的任务里完成真实贡献。

若推荐最终改变，写明是任务、证据还是条件变化。清楚原因有助于团队学习，也避免把业务选择误写成对某位创作者能力的全面否定。`,
`If the brand later adds a language, product or publishing form, the original weights and samples may no longer correspond. Retain the earlier decision and review affected components rather than making the earlier best a permanent purchasing conclusion.

The comparable-channel research method can help update sample boundaries without automatically establishing suitability for the new task. Assign reconfirmation to the appropriate owners.

Allow the creator to propose a more suitable expression too. Partnership is not necessarily a demand to reproduce an old piece admired by the researcher; it is a real contribution within an assignment both parties confirm.

If the recommendation changes, state whether the task, evidence or conditions changed. A clear explanation helps the team learn and prevents a business choice from becoming a comprehensive rejection of someone's ability. The process can remain consistent even when the chosen name differs, because consistency concerns the stated question and evidence standards rather than an obligation to preserve yesterday's order.`),
s('以可解释的选择结束研究','Finish with an explainable choice',`最终建议可以是一句话，说明这次选谁、依据哪些作品、接受什么取舍，以及哪些条件仍待确认。后续审批者应能沿着资料理解判断。

Who is the best YouTuber 的达人营销答案，是谁能在当前条件下完成所需贡献，而不是谁在人气、身份或主观分数上永久胜出。

保留权重、证据与未知，让分数服务讨论，让事实支持结论。不要把假设评分用于公开评价真实个人，也不承诺选择后必然获得观看或销售。

这种研究能帮助品牌提出更清楚的合作邀请，也让创作者知道对方真正需要什么。双方从可解释的任务开始，才更容易形成范围明确的实际合作。`,
`The final recommendation can identify whom to approach, which work supports the choice, the accepted trade-off and conditions still awaiting confirmation. A later approver should be able to follow the evidence and understand the judgment.

The creator-marketing answer to who is the best YouTuber concerns who can make the required contribution under current conditions, rather than who wins permanently on popularity, identity or a subjective total.

Retain priorities, evidence and unknowns so numbers support discussion and facts support conclusions. Do not apply the illustrative scores publicly to actual people or promise that selection guarantees views or sales.

This research helps a brand make a clearer invitation and lets the creator understand what is genuinely needed. Beginning with an explainable assignment makes a bounded partnership easier to discuss. The best outcome of the exercise is therefore a decision someone can inspect, question and update, with a specific next step rather than a universal title no evidence could justify.`)
],
links:[link('YouTube 品牌任务筛选指南','brand-task shortlist guide','best-youtube-channels-brand-research-scorecard'),link('同类频道比较方法','comparable-channel research method','popular-youtube-channels-category-comparison')],
figures:[{file:'best-youtuber-brand-task-scorecard-framework.svg',afterSection:5,alt:p('任务标准、作品证据与待确认条件共同支持推荐的流程','A recommendation flow combining task criteria, work evidence and open conditions'),caption:p('评分表达本次偏好；改变任务优先级后，应检查推荐是否仍成立。','Scores express current priorities; check whether the recommendation survives a change in those priorities.')}],
table:{title:p('假设权重的敏感性演示','Hypothetical weighting sensitivity'),headers:[p('项目','Item'),p('A','A'),p('B','B')],rows:[[p('解释清楚，假设分','Clarity, hypothetical score'),p('5','5'),p('3','3')],[p('情境相关，假设分','Context, hypothetical score'),p('3','3'),p('4','4')],[p('版本适应，假设分','Adaptability, hypothetical score'),p('2','2'),p('5','5')],[p('权重 60/30/10','Weights 60/30/10'),p('4.1','4.1'),p('3.5','3.5')],[p('权重 20/30/50','Weights 20/30/50'),p('2.9','2.9'),p('4.3','4.3')]],note:p('全部人物、分数与权重均为编辑假设，不代表真实创作者、平台标准或行业基准；必要条件仍须单独确认。','All people, scores and weights are editorial hypotheticals, not actual creators, platform standards or benchmarks; confirm necessary conditions separately.')},
tool:{title:p('写出能被复核的最佳选择','Make the best-choice reasoning reviewable'),intro:p('在团队对候选有分歧时使用。','Use when the team disagrees about candidates.'),items:[p('限定这次需要的贡献。','Define the contribution required now.'),p('单独确认必要条件。','Confirm necessary conditions separately.'),p('为判断保留作品依据。','Retain work evidence for judgments.'),p('说明权重代表谁的偏好。','Explain whose priorities weights express.'),p('改变优先级检查排序。','Change priorities to test the order.'),p('交接取舍、未知与下一步。','Hand over trade-offs, unknowns and next steps.')]}
});
