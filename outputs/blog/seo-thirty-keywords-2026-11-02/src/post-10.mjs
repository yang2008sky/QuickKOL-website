import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:10,
summary:p('让大使成员的真实体验与受众问题进入产品和内容处理流程，再把处理结果带回续约讨论。','Bring ambassador experience and audience questions into product and content decisions, then return the response to members and renewal discussions.'),
description:p('Ambassador program 运营指南：收集有范围的成员反馈，分派产品与内容问题、回传处理结果，并据实际贡献讨论续约。','Run an ambassador program that captures useful feedback, routes product and content questions, closes the response loop and supports informed renewal decisions.'),
coverAlt:p('两位虚构成年人在社区修护工作台旁讨论背包肩带，一人指出细节，另一人用铅笔记录空白反馈卡。','Two fictional adults discussing a backpack strap at a community repair bench, one pointing to a detail while the other notes a blank feedback card.'),
answer:p('有价值的 ambassador program 不只安排发布，也应让成员知道如何反馈真实使用问题、品牌由谁处理，以及何时能得到状态更新。把反馈与推广交付分开记录：一条批评可以帮助改进产品，却不是负面绩效；一组高曝光也不能替代准确体验。续约时结合约定贡献、处理记录、双方资源与下一阶段适配讨论，不把续约变成对正面评价的奖励。',
'A useful ambassador program should explain how members share real experience, who handles the feedback and how updates reach them. Record feedback separately from promotional delivery. A criticism can help improve a product without becoming poor performance, while large exposure does not replace accurate experience. Renewal should consider agreed contributions, response history, resources and fit for the next phase rather than reward positive statements. This guide focuses on the feedback and renewal loop, not application design or a universal rewards formula.'),
links:[link('大使申请体验指南','ambassador application-experience guide','ambassador-programs-member-application'),link('大使支持指南','ambassador enablement guide','marketing-ambassadors-enablement-and-role-boundaries'),link('活动衡量指南','campaign-measurement guide','creator-campaign-measurement')],
sections:[
s('为持续关系定义学习任务','Define a learning contribution for the continuing relationship',
`大使项目可以帮助品牌接近长期使用情境，但成员不是自动代表所有客户的研究样本。先确定希望学习什么：某个操作是否难懂、哪些问题反复出现，或者现场演示需要哪些支持。不要只要求成员“多给反馈”。

lululemon 社区合作说明把持续社区关系与产品反馈、活动等互动放在品牌的社区定位中。它提供一个公开关系示例，不证明所有项目都有同样流程，也没有披露本文建议的内部处理方式。

品牌应让成员知道反馈的目的、接收人和需要的背景。若任务涉及额外测试、访谈或固定会议，清楚说明工作与资源，不能从“你是大使”推导无限的免费研究义务。持续关系也需要尊重时间和不同参与能力。`,
`An ambassador program can bring a brand closer to ongoing use contexts, but its members are not automatically representative of every customer. Define the learning question: whether an operation is confusing, which questions recur or what support a live demonstration needs. Please give more feedback is not a clear assignment.

The lululemon community overview places continuing community relationships alongside interactions such as product feedback and events in its public positioning. It offers a relationship example, not evidence that every program follows one process or that the brand uses the internal workflow proposed here.

Explain purpose, recipient and useful context to members. If the assignment adds testing, interviews or regular meetings, specify work and resources instead of interpreting ambassador as unlimited unpaid research. A continuing relationship still needs respect for time and different participation capacities. Learning can be a defined contribution with boundaries, rather than a vague expectation that members remain permanently available.`,['luluCommunity']),
s('分开记录体验、提问与推广交付','Record experience, audience questions and promotion separately',
`一份工作记录可以有三种入口：成员实际体验、成员转述的受众问题，以及已约定推广工作。它们可能来自同一次活动，但不应合并成“发了多少内容”这一列。

成员说某个背包扣件不易操作，是特定体验；观众问是否有其他尺寸，是需求提问；视频按约发布，是交付状态。每一项都可能有价值，但无法互相替代。转述问题还要说明是否保留了原始语境。

大使支持指南帮助明确哪些产品问题可以准确回答，哪些必须转交。品牌应提供适当渠道，不要求成员替工程、售后或专业人员作自己无法确认的承诺。把问题转交正确团队，本身也可以是负责的贡献。`,
`Use three entry types: member experience, relayed audience questions and agreed promotional work. They may arise at one event, but should not collapse into a single count of content published.

A member finding a backpack fastening awkward is reporting a particular experience. An audience question about another size is an inquiry. A video published as agreed is a delivery state. Each can matter without substituting for the others. A relayed question should also indicate whether original context remains available.

The ambassador enablement guide helps distinguish questions members can answer accurately from those requiring escalation. Provide an appropriate route rather than asking members to make commitments on behalf of engineering, support or specialists. Routing a question responsibly can itself be a useful contribution. This separation also makes renewal conversations fairer: a person handling difficult questions should not appear less valuable merely because that work produced fewer public posts than another task.`),
s('反馈表应该帮助理解，而不是增加负担','Make the feedback record informative without making it burdensome',
`最小反馈记录可包含产品或内容版本、情境、观察日期、实际发生什么、影响、已有附件及是否需要回复。不要要求所有人完成很长的评分问卷，导致容易填的项目占据全部反馈。

保留成员自己的表述，同时把品牌的分类放在独立字段。成员说“找不到操作入口”，不等于已确认软件故障；品牌将它分类为界面问题，也不能改写原话。需要复现时，说明希望补什么资料及原因。

避免收集无关身份、私人对话或客户资料。可以提供去除个人信息的描述方式，并让成员知道哪些内容会在团队内分享。公开引用和私人反馈也要分开：收到一段建议，不自动得到把它放进宣传材料的许可。

跨语言项目还应保留原文和译文。不要把“有时不好操作”翻成“无法使用”，或者在摘要中删掉成员说明的条件。译文改变了问题程度，会使处理优先级和续约讨论都失真。`,
`A minimal feedback record can include product or content version, context, observation date, what happened, impact, available attachments and whether a response is needed. Avoid a long mandatory scoring form that lets easy-to-complete fields crowd out useful experience.

Preserve the member’s wording and place the brand’s classification in a separate field. Cannot find the control is not a confirmed software defect, and an internal interface category should not rewrite the original observation. If reproduction requires more context, explain what is needed and why.

Do not collect unrelated identity details, private conversations or customer information. Offer a way to describe the issue without personal data and explain which team receives it. Private feedback and public quotation are separate uses: receiving a suggestion does not automatically authorize promotional use.

For multilingual programs, retain the original alongside the translation. Sometimes awkward should not become unusable, and a summary should not drop the conditions the member supplied. Changing severity through translation can distort both handling priority and the later renewal discussion. Ask for clarification when wording changes the action required rather than letting a convenient summary become the only record. This is especially useful when the person responding was not present for the original conversation. A short record that preserves the relevant situation is more useful than a long form filled with estimates a member cannot reasonably verify.`),
s('把问题交给能处理的人','Route the issue to someone able to act',
`给每条反馈指定处理角色及状态：资料不足、待确认、正在处理、已回复或暂不采纳，并保留下一步。状态应说明事实，不把“已收到”当作“问题解决”。团队也不应承诺自己没有能力做到的修复日期。

Microsoft 社区贡献说明介绍技术专家帮助识别反复出现的产品与文档缺口，并重视回答质量和客户影响。这个技术社群例子不等同商业大使计划，但能支持一个有限启发：社区贡献可以包括将问题变成可复用知识，而非只追求数量。

区分产品缺陷、说明不清、配送售后与新需求。它们可能需要不同团队，也可能最后得到不同答复。对跨团队问题，保留一位协调负责人，不让成员在多个入口之间重复解释同一经历。`,
`Assign an action role and state: more context needed, unconfirmed, in progress, answered or not adopted for now, with the next step visible. A state describes a fact. Received should not mean solved, and the team should not promise a repair date it cannot support.

The Microsoft community-contribution guide describes experts identifying recurring product and documentation gaps, emphasizing answer quality and customer impact. This technical community is not identical to a commercial ambassador program. Its bounded lesson is that community contributions can turn questions into reusable knowledge rather than merely add volume.

Distinguish product defects, unclear explanation, delivery or service issues and new requests. They can require different teams and different outcomes. Keep a coordinating owner for a cross-team issue so a member does not repeat the same experience at several entrances. The brand’s response capacity should shape the feedback task: inviting extensive detail while leaving nobody able to read it produces an incomplete relationship loop.`,['msChampions']),
s('负面体验不应被改写成正面推荐','Do not turn a negative experience into a positive endorsement',
`成员需要能够报告不顺利的体验，而不担心一条批评就被视为不忠诚。品牌可以核对事实、说明不同情境或提出补充问题，但不能要求对方把没有改善的体验改写为满意。

FTC 披露入门指南在美国语境下提醒，推荐与有价值关系应让受众明白。大使称号、赠品或报酬，也不能替代真实体验与清楚披露。本篇不对具体内容作全球法律判断。

若问题影响已准备的内容，可以暂缓、纠正资料或改变任务。不要先运行明知不准确的推荐，再计划以后补救。品牌内部处理反馈与对外宣传审核是相关但不同的工作，二者都应保留准确版本与负责人。`,
`Members should be able to report a poor experience without one criticism becoming disloyalty. The brand can check facts, explain another context or ask questions. It should not require an unresolved negative experience to become a statement of satisfaction.

The FTC disclosure primer, in a US context, addresses understandable endorsement relationships. A title, gift or payment does not replace real experience and clear disclosure. This guide makes no worldwide legal determination about a particular piece of content.

If an issue affects planned material, pause, correct the information or change the task. Do not run a known inaccuracy and plan to repair it later. Internal feedback handling and external promotional review are related but different jobs, each needing accurate versions and ownership. A program that treats every concern as a threat to promotion can lose precisely the learning contribution it hoped a continuing relationship would provide.`,['ftc101']),
s('回传状态，即使答案是暂不采用','Close the response loop even when the answer is not now',
`有用的回复应告诉成员品牌理解了什么、采取了什么动作，以及还有什么未知。若没有采用建议，说明适当范围内的原因。不能承诺所有建议都会进入产品路线图，也不要用空泛感谢代替必要回复。

团队可以将重复问题整理为内部主题，但保留实际例数和来源范围。五位成员提出类似问题，不等于市场上大多数客户都有该问题；它可能值得进一步研究。表达“需要了解更多”比直接宣布全国需求更准确。

产品或说明更新后，向相关成员提供正确版本，确认旧资料是否需要调整。如果曾给出错误答复，明确更正。闭环的目标是让参与者看到反馈去了哪里，并能使用当前信息继续工作，而不是制造每条建议都被采用的表象。`,
`A useful response explains what the brand understood, what action followed and what remains unknown. If a suggestion is not adopted, provide an appropriate explanation. Do not promise every idea a place on a roadmap or replace a needed reply with general thanks.

Recurring issues can become internal themes while retaining case count and source coverage. Five members raising a similar issue do not establish that most customers experience it. They may establish a worthwhile research question. More information needed is more accurate than declaring a market-wide demand.

When a product or explanation changes, provide the correct version to relevant members and consider whether older material needs correction. Explicitly correct an inaccurate response. The loop lets contributors see where their input went and continue with current information, without creating the impression that every idea was implemented. Completion means the response is intelligible, not that the member must agree with every product decision.`),
s('把反馈质量与推广结果放在不同维度','Evaluate feedback quality and promotion on different dimensions',
`活动衡量指南可帮助定义项目要观察什么。反馈维度可以看是否有可理解情境、是否帮助澄清问题及处理是否完成；推广维度则按已约定内容和相应数据来源衡量。不要将一条高曝光内容自动当作大量有用反馈。

也不应按提交条数发明统一质量分。任务不同，贡献形式也不同。一次准确指出资料错误的反馈，可能比多条重复赞美更值得处理，但价值判断要与当前任务和实际处理结果相连。

项目复盘应同时检查品牌履责：回复是否迟延、资料是否可靠、成员是否承担了额外工作。只评估成员表现，会掩盖品牌支持不足导致的困难。缺失记录保持未知，不以“没有提交”直接推断没有贡献。`,
`The campaign-measurement guide supports defining what the program observes. Feedback evaluation can concern understandable context, whether it clarified a problem and whether handling was completed. Promotion should be evaluated against agreed work and the relevant data. A high-exposure post does not automatically contain extensive useful feedback.

Do not invent one quality score based on submission count. Tasks differ, as do contribution forms. One accurate correction may deserve more attention than repeated praise, but that judgment needs the actual task and handling result.

Review the brand’s own performance too: response delays, information quality and additional work placed on members. Evaluating only members can conceal difficulties caused by inadequate support. Keep missing records unknown instead of interpreting no submission as no contribution. The resulting review can reveal a process repair, such as clearer documentation, rather than recommending recruitment merely because the existing records do not show the work adequately.`),
s('续约讨论应包括双方下一阶段的适配','Renewal should consider both parties in the next phase',
`在续约前，梳理原定贡献、已完成工作、未解决问题、双方资源及下一阶段的具体目标。成员可以继续、缩小范围、改变角色或退出。不能因为项目已有历史，就把新的任务自动加入旧安排。

大使申请体验指南讨论透明的任务与参与预期；同样原则也适用于续约。新的报酬、福利、使用范围和期间应清楚，不以模糊的未来机会替代当前需要确认的工作。

反馈中提出过批评的人，仍可能适合继续；长期表现积极的人，也可能不适合新的任务。让决定依据具体贡献与适配，而不是正面措辞数量。结束时说明资料、后续使用、未结工作与联系安排，避免将关系结束解释为否定个人。`,
`Before renewal, review original contribution, completed work, unresolved issues, resources on both sides and the next phase’s specific objective. A member may continue, narrow scope, change role or leave. A shared history should not automatically add new duties to the old arrangement.

The ambassador application-experience guide discusses transparent work and participation expectations; the principle also applies to renewal. Explain new compensation, benefits, use and period instead of replacing current commitments with vague future opportunities.

Someone who raised criticism may remain suitable, while a consistently positive participant may not suit the next task. Base the decision on contribution and fit rather than positive wording counts. At the end, address materials, further use, unfinished work and contact arrangements without presenting the end of a relationship as a verdict on the person. A clear exit also keeps unresolved product feedback available for the team that still needs to handle it.`),
s('示例：让一条具体问题进入下一阶段','Example: carry one concrete issue into the next phase',
`以下为编辑假设。一次社区修护活动中，成员发现背包调节步骤容易被误读。品牌记录产品版本、使用情境和实际动作，交给负责说明的团队核对。它没有把一条体验扩写成全部顾客都不满意。

团队后来修改示意图，并向成员解释变化。下一阶段的任务可以是核对新说明是否更清楚，而不是要求成员在宣传里说产品完美。若成员没有时间继续，品牌仍保留问题和处理记录。

QuickKOL 可以帮助理解项目需要的内容和沟通贡献，研究相关作品并准备联系。持续项目的价值还依赖品牌是否接住反馈、提供资源和如实讨论条件。把这些责任写进流程，反馈才会支持真实的后续决定。`,
`Consider an editorial hypothetical. At a community repair session, a member finds a backpack-adjustment instruction confusing. The brand records version, use context and action, then routes it to the documentation owner. It does not expand one experience into a claim that all customers are dissatisfied.

The team later changes the illustration and explains the change to the member. The next assignment may examine whether the revised explanation is clearer rather than ask for a statement that the product is perfect. If the member cannot continue, the brand retains the issue and response record.

QuickKOL can help interpret the content and communication contribution needed, research relevant work and prepare contact. A continuing program also depends on the brand receiving feedback, supplying resources and discussing terms accurately. Putting those responsibilities into the process lets feedback support a real next decision instead of disappearing after the promotional calendar is complete.`)
],
table:{title:p('从反馈到下一步的记录','Record the path from feedback to the next step'),headers:[p('环节','Stage'),p('必要内容','Required content'),p('避免混淆','Avoid confusing')],rows:[[p('接收','Receive'),p('版本、情境、实际观察','Version, context and observation'),p('成员体验与总体市场结论','Member experience with a market-wide finding')],[p('分派','Route'),p('处理角色、状态、下一步','Action role, state and next step'),p('已收到与已解决','Received with solved')],[p('回传','Respond'),p('动作、依据、限制、更新版本','Action, basis, limits and updated version'),p('感谢与实质回复','Thanks with a substantive response')],[p('续约','Renewal'),p('贡献、资源、新任务与双方选择','Contribution, resources, new task and mutual choice'),p('正面表态与项目适配','Positive statements with program fit')]],note:p('编辑运营建议；示例不是实际品牌项目或研究结果。','Editorial operating method; examples are not actual brand programs or research findings.')},
tool:{title:p('大使反馈闭环清单','Ambassador feedback-loop checks'),intro:p('用适合项目规模的记录，不制造无用表单。','Use records proportionate to the program rather than unnecessary forms.'),items:[p('学习任务与推广交付分开。','Separate learning contribution from promotional delivery.'),p('记录实际情境，保留原话与分类。','Keep context, original wording and classification.'),p('每项问题有处理角色与真实状态。','Give each issue an action role and factual state.'),p('不要求将负面体验改成赞美。','Do not rewrite a negative experience as praise.'),p('处理结果返回成员并更新资料。','Return the response and update materials.'),p('续约讨论双方资源、适配与选择。','Discuss mutual resources, fit and choice at renewal.')]}
});
