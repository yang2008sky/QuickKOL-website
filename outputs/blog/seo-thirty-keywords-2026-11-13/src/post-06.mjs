import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:6,
summary:p('监测达人提及品牌时，先核对原始作品、具体说法与产品版本，再决定是否需要澄清，以及由谁处理。','When monitoring creator mentions, verify the original work, exact statement and product version before deciding whether and how to clarify.'),
description:p('Brand monitoring 怎样用于达人营销中的错认和误引：追溯原帖、区分事实与意见、核对产品版本，并用相称的纠正流程保留证据和责任。','Use brand monitoring to review creator misattributions with original context, product-version checks, proportionate corrections and a clear decision record.'),
coverAlt:p('提及、原始上下文与适当回应三层卡片组成品牌监测核对图','Three editorial layers connect an observed mention, original context and proportionate response'),
answer:p('达人营销中的 brand monitoring 不应把每条负面提及都当成需要压下去的问题。品牌先找到原始内容，核对它是否确实指向自己、实际说了什么、描述的是哪个产品或版本，再区分可验证事实、个人体验、引用与编辑推断。处理可以是补充来源、澄清一个具体细节、转交适当人员，或不采取动作。纠正应对应证据与影响，不因搜索命中或模型标签就指控创作者，也不把监测到的讨论数量当作完整市场意见。','Brand monitoring in creator marketing should not treat every unfavorable mention as something to suppress. Locate the original content, verify that it concerns the brand, identify the actual statement and relevant product or version, then distinguish checkable fact, personal experience, quotation and interpretation. A proportionate response may provide a source, clarify one detail, refer the matter to an appropriate owner or take no action. Match correction to evidence and consequence. A search hit or model label is not a finding against a creator, and the volume observed is not the whole market’s opinion. The useful outcome is a well-supported decision about a specific mention.'),
sections:[
s('把监测目的写成具体问题','Give monitoring a concrete question',`先说明本次要发现什么。产品更新后，团队可能需要了解创作者是否仍在引用旧功能；活动上线后，可能需要找出把两个地点混在一起的说明；合作结束后，也可能需要核对某条二次转述是否误把个人体验写成品牌承诺。

社交聆听查询验证指南帮助团队理解搜索表达、覆盖和人工抽样的限制。品牌监测在此基础上进一步问：这一条命中是否需要处理，为什么。不要把关键词匹配、情绪分类与业务纠正当作一个自动完成的步骤。

把不处理的部分也说明白，例如并不研究无关私人生活，也不把所有行业讨论算作品牌提及。一个范围清楚的问题能够帮助选择来源、判断上下文和安排责任。若目的只是让所有提及变正面，团队很容易把真实意见当成错误，并在没有必要时打断正常的创作者表达。`,
`Define what monitoring should find. After a product update, the team may need to identify references to an old feature. After an event launch, it may need to clarify descriptions confusing two locations. After a collaboration, it may need to check whether a retelling converted a personal experience into a brand promise.

The social listening query-validation guide explains query design, coverage and manual sampling limitations. Brand monitoring then asks a further question: does this specific match require a response, and why? Keyword matching, sentiment classification and a business correction are not one automatically completed action.

State exclusions too. The task need not investigate unrelated private life or classify every category conversation as a brand mention. A precise question helps choose sources, interpret context and assign responsibility. If the objective is merely to make every mention positive, the team can start treating genuine opinions as mistakes and unnecessarily interrupt ordinary creator expression. A better objective identifies the factual or operational question that the brand can responsibly help resolve.`),
s('从转发回到能核对的原始内容','Trace a repost back to its original context',`保存当前命中地址、实际作者或转发者、发布时间和观察时间，再寻找原始作品及前后文。一个截图可能没有完整字幕、修订说明或作者正在回应的问题；多个账号转发同一内容，也不自动构成多个独立事实来源。

Meta 的 Instagram 转发公告在 2025 年 8 月描述了给原始发布者署名的转发功能。对监测而言，重要的是区分原始表达与传播路径，而不是推断每次转发都代表创作者新的推荐、品牌授权或相同的观众覆盖。

如果原始内容已删除或不可访问，就保留这个限制。可以说明当前只能看到二次材料，但不应假装已经重新核对原文。找到原作者并不意味着可以复制其全部素材；本次记录只需保留理解该提及与决定下一步所必需的内容和出处。`,
`Retain the matched URL, author or reposter, publication time and observation time, then locate the original work and surrounding context. A screenshot can omit captions, a correction or the question being answered. Multiple accounts sharing the same material are not automatically independent factual sources.

Meta’s Instagram repost announcement from August 2025 describes attribution to the original poster. For monitoring, the relevant distinction is original expression versus redistribution, not an assumption that every repost is a new endorsement, brand authorization or equivalent audience delivery.

If the original is deleted or inaccessible, preserve that limitation. Explain that only secondary material is currently available instead of pretending to have freshly checked the original. Finding its author also does not grant permission to reproduce all their work. Retain the necessary context and source for this decision rather than building an unnecessarily broad archive. This lets the next reviewer understand both how the item was encountered and how close the team actually came to the original statement.`,['igReposts']),
s('把原话、解释与状态放在不同位置','Separate the statement, interpretation and review state',`记录中保留足够准确的原意，并把团队解释放在另一个字段。疑问句、条件、否定和引用可能改变意思。“这个版本是否支持某功能”不能被摘要成“创作者确认产品没有功能”。模型输出也要回到上下文核对。

工作状态可写为对象待确认、事实待核对、已找到适用来源或无需纠正。状态描述的是当前工作进展，不给个人贴永久标签。若只写“错误信息”而没有具体句子、版本和依据，接手人难以判断问题是否真实存在。

同样区分公开观察和直接确认。品牌内部认为某项表述不准确，可以提出可检查的原因，但不应因此声称已经证明作者恶意。监测结果的可靠性来自可追溯与可修改，而不是把每条命中都强行归入肯定或否定的二元结论。`,
`Preserve the statement’s meaning and place the team’s interpretation in a separate field. Questions, conditions, negation and quotations can change the meaning. Does this version support the feature must not become the creator confirmed the product has no feature in a summary. Check model outputs against context as well.

Useful working states include subject unconfirmed, factual check pending, applicable source located and no correction needed. These describe progress rather than permanent labels attached to people. An issue marked misinformation without its sentence, version and basis gives a colleague little opportunity to determine whether a genuine problem exists.

Also distinguish public observation from direct confirmation. The brand may identify a checkable reason it believes a statement is inaccurate without claiming to have established malicious intent. Reliability comes from traceability and the ability to revise a finding, not forcing every match into a positive or negative verdict. A clear record should allow somebody else to disagree with the interpretation while still identifying the same underlying material.`),
s('先匹配产品和版本，再谈是否说错','Match the product and version before judging accuracy',`品牌名称可能与普通词、其他公司或旧产品相同。先确认内容中的对象，再对照适用的产品说明、活动信息或实际版本。没有提及具体版本时，提出需要澄清的问题，不默认作者描述的是品牌最新一版。

品牌自己的资料也要检查日期与范围。发布于更新之后的说明，不一定能反驳创作者在更新前的使用体验。面向某地区或某套餐的功能，也不能自动推广为每位用户均可使用。资料如果自身有歧义，应先安排内部确认，而不是立即要求别人删改。

可核对的记录应说明这条来源为什么适用于这句话。例如，某项说明对应所讨论的产品版本和地区；或活动地址确实指向另一分店。把这些关联写清，可以让一次有争议的提及变成可以解决的具体问题，避免品牌与创作者各自拿着不同对象讨论谁对谁错。`,
`A brand name can overlap with a common word, another company or an older product. Establish the subject before comparing the statement with applicable documentation, event information or a product version. If no version is identified, record the clarification needed instead of assuming the creator describes the latest release.

Check the brand’s own source date and scope. Documentation published after an update may not contradict an experience recorded before it. A feature for one region or plan cannot be extended to every user. Where the documentation is itself ambiguous, arrange internal clarification before asking someone else to change their work.

The record should explain why a source applies to this sentence: it covers the product version and region discussed, for example, or the advertised address actually refers to another branch. Explicit connections turn a disputed mention into a solvable question. Otherwise the brand and creator can spend a long conversation comparing different products while each assumes the other has misunderstood the same facts.`),
s('分清个人体验与商业关系','Distinguish experience from commercial context',`创作者不喜欢某种手感、认为界面复杂，或描述自己遇到的问题，未必属于品牌可以用一份规格表推翻的事实错误。可以补充相关信息，但不能要求对方因为合作而假装体验不同。证据核验也应尊重表达对象的实际范围。

FTC 的达人披露指南关注美国相关推广中商业关系的清楚说明。它帮助团队检查付费或其他价值关系是否被适当说明，不把每条品牌提及自动变成付费推广，也不赋予品牌控制所有评价的权利。

监测记录因此可以同时写明体验陈述、可核对产品事实与关系说明。若合作内容缺少某项必要说明，由适当负责人按实际情况处理；若只是独立作者表达不喜欢，则可能无需纠正。把问题区分清楚，能够让品牌在提供有用事实时，避免把正常的意见差异升级为不必要的冲突。`,
`A creator disliking a texture, finding an interface complicated or describing a problem they experienced is not necessarily a factual error that a specification sheet can refute. Supply relevant information where useful, but do not ask somebody to pretend their experience changed because a partnership exists. Evidence review should respect the actual scope of the expression.

FTC’s influencer disclosure guide concerns clear commercial-relationship disclosure in US-relevant promotion. It supports checking the explanation of a paid or other material connection, not classifying every brand mention as sponsored or giving the brand control over all opinions.

A monitoring record can therefore identify experiential statements, checkable product facts and relationship context separately. If collaboration content lacks a relevant explanation, the appropriate owner should address the actual circumstances. If an independent author simply dislikes the product, no correction may be needed. This distinction lets the brand offer useful facts without turning an ordinary difference in opinion into an unnecessary confrontation or misrepresenting what the creator was actually asked to supply.`,['ftcDisclosure']),
s('选择与证据和影响相称的处理','Choose a response proportionate to evidence and consequence',`不是每条命中都需要联系作者。无关对象可以从本次问题集中排除；已经更正的内容可记录状态；适用范围不清可以先向内部负责人求证；有具体事实依据的误引则可以考虑提供简短来源。选择处理方式前说明理由。

需要联系时，使用适当商业或公开联系路径，只针对具体对象和说法提出问题。不要用相同模板向所有提及者施压，也不要因一次数据分歧就要求访问私人账号或完整后台。涉及特殊风险或复杂争议时，由适当专业与业务人员接手，不让一般监测表代替他们的判断。

公开回应也应由实际负责人决定，并注意是否会把本来很小、尚未证实的问题进一步扩散。这个编辑方法不预设沉默或公开回复永远最好；它要求每次处理能说明证据、影响、责任，以及还有哪些不知道。`,
`Not every match needs a message to its author. Exclude unrelated subjects from this review, record an existing correction, ask an internal owner about unclear scope, or consider supplying a concise source for a specific factual misattribution. State the reason before choosing the action.

Where contact is appropriate, use a suitable public or business route and address the particular object and statement. Do not pressure every person mentioning the brand with an identical template. A disagreement also does not justify demanding private-account access or a complete dashboard. Refer unusual risk or complex disputes to the appropriate specialists and business owners rather than using a monitoring sheet to replace their judgment.

The responsible owner should also decide on a public response and consider whether it would amplify a small, unverified issue. This editorial method does not declare silence or public reply universally best. It requires a response to identify evidence, consequence, responsibility and remaining uncertainty. That creates a defensible operational choice without promising that one communication tactic will improve reputation or eliminate disagreement.`),
s('让纠正请求保持具体且可复核','Make a correction request specific and checkable',`一条请求可以说明相关作品、需要核对的句子、适用来源和品牌当前理解，再邀请对方检查。比如：“我们看到这条演示提到某版本只能导出图片；对应版本说明还列有 CSV。能否一起核对你当时使用的版本？”这是编辑示例，不是对真实产品或创作者的判断，也不是已发送消息。

FTC 的企业信息保护指南建议缩减不必要的信息和访问。应用到这里，就是只分享完成核对所需的材料，不把客户记录、私人截图或登录信息附在纠正请求中。若需技术复核，由适当人员安排受控方式，不要求创作者把敏感资料直接公开。

对方可能提供新证据，说明品牌理解有误或资料本身过时。保留修正自己结论的空间。纠正流程不是一条品牌单向输出最终真相的渠道；它的有效结果是相关说法得到更准确说明，并能追溯双方各自核对了什么。`,
`A request can identify the work, sentence, applicable source and the brand’s current understanding, then invite checking. For example: We saw the demonstration say this version exports images only; its version documentation also lists CSV. Could we check which version you used? This is an editorial example, not a finding about a real product or creator, and no message has been sent.

FTC’s business information-security guide recommends limiting unnecessary information and access. Here, share what the check requires rather than attaching customer records, private screenshots or login details to a correction request. If technical investigation is needed, the appropriate owner should arrange a controlled route instead of asking the creator to disclose sensitive information publicly.

The recipient may supply evidence showing that the brand misunderstood or its documentation is outdated. Leave room to revise the brand’s conclusion. A correction workflow is not a one-way channel for declaring final truth. Its useful result is a more accurate explanation with a traceable record of what each side actually checked.`,['ftcPrivacy']),
s('用一个版本误读练习走完流程','Rehearse a product-version mismatch',`假设品牌监测到一段软件演示，二次转述说它“永远不能导出表格”。原始作品其实是在回答旧套餐的图片导出问题。品牌后来新增了某个套餐的 CSV 导出，但并没有证明所有版本都具备相同能力。这是虚构练习，不是实际平台或客户结果。

先保存二次材料与原始作品的关系，再分别核对旧套餐、更新日期与当前适用说明。可能需要纠正的是二次转述的“永远”，而不是要求原作者把过去的体验删掉。若新功能只适用于部分计划，品牌自己的补充也必须保留这个条件。

最后把决定写出来：处理哪条内容、提供哪项来源、由谁联系，以及原始作品是否需要任何改变。如果后来确认作者已经作了说明，就更新状态，而不是继续把旧截图作为当前问题传播。这个练习说明品牌监测更适合修复具体误解，而不是制造一个谁更可信的永久排名。`,
`Suppose monitoring finds a retelling that says a software demonstration proves the product can never export a table. The original actually answered an image-export question about an older plan. The brand later added CSV export to a particular plan, without establishing equal capability across every version. This is a fictional exercise, not an actual platform or client result.

Preserve the relationship between retelling and original, then check the old plan, update date and current applicable documentation separately. The correction may concern never in the retelling rather than removal of the original author’s past experience. If the new feature applies only to some plans, the brand’s clarification must retain that condition too.

Record the decision: which item to address, which source to provide, who contacts the author and whether the original needs any change. If a clarification is already present, update the state rather than circulating an old screenshot as a live problem. The exercise shows how monitoring can repair a concrete misunderstanding instead of creating a permanent ranking of whose account is more trustworthy.`),
s('结项时保留理由与未知','Close the item with its reason and remaining limits',`结项记录包括原始问题、适用证据、实际处理、观察到的变化和未解决事项。达人活动状态管理方法可帮助交接负责人和下一步，但“已联系”“作者已回复”“内容已更正”仍应是不同状态，不因为发出请求就宣布问题已解决。

监测覆盖也应留在结论旁。某次搜索没有找到相关提及，不等于网络上没有；看见几条重复转发，不等于发现同样数量的独立体验。不要将便利样本包装成全平台品牌声誉，或把后续提及减少自动解释成纠正产生了因果效果。

下一次复核可以围绕真正发生变化的资料、产品或说法展开，不必无限期跟踪个人。好的完成标准是接手者能理解为什么采取或未采取动作，找到依据，并在新证据出现时更新判断。这样，brand monitoring 才会服务于更准确的达人合作和产品沟通。`,
`Close an item with the original question, applicable evidence, actual action, observed change and unresolved conditions. The creator campaign status system can support ownership and next steps, but contacted, author replied and content corrected should remain different states. Sending a request does not establish resolution.

Keep coverage limitations beside the conclusion. A search that finds nothing does not prove no mention exists; several repeat shares are not the same number of independent experiences. Do not turn a convenience sample into platform-wide reputation or interpret fewer later mentions as a causal effect of the correction.

Revisit the relevant evidence, product or statement when it changes rather than tracking a person indefinitely. Completion means the next owner can understand why action was or was not taken, find its basis and revise the finding when new evidence arrives. In this form, brand monitoring supports more accurate creator partnerships and product communication without promising perfect coverage, agreement from every author or a guaranteed reputation outcome.`)
],
links:[link('社交聆听查询验证指南','social listening query-validation guide','social-listening-query-sample-validation'),link('达人活动状态管理方法','creator campaign status system','creator-campaign-status-system')],
table:{title:p('品牌提及与纠正记录','Brand mention and correction record'),headers:[p('字段','Field'),p('记录内容','Record'),p('判断边界','Boundary')],rows:[
[p('来源链','Source chain'),p('命中、原始作品与转述关系','Match, original work and retelling relationship'),p('转载不自动成为独立证据','Redistribution is not automatically independent evidence')],
[p('具体说法','Specific statement'),p('原意、对象、版本与日期','Meaning, subject, version and date'),p('问题或体验不自动成为事实指控','A question or experience is not automatically a factual allegation')],
[p('适用依据','Applicable evidence'),p('说明来源为何支持本次核对','Why the source applies to this check'),p('品牌新资料不一定推翻过去体验','New documentation may not refute an earlier experience')],
[p('处理与结项','Action and closure'),p('理由、负责人、变化与未知','Reason, owner, change and unknowns'),p('已联系不等于已纠正或证明因果','Contact is not correction or proof of causality')]],note:p('编辑工作表，不是平台执法标准、法律判断或完整品牌声誉测量。','An editorial worksheet, not a platform enforcement standard, legal judgment or complete reputation measure.')},
tool:{title:p('处理达人提及前','Before acting on a creator mention'),intro:p('先确认对象和具体问题，再决定相称的下一步。','Confirm the subject and issue before choosing a proportionate next step.'),items:[p('保存命中与原始作品的来源关系和观察日期。','Preserve the source relationship and observation date.'),p('区分原话、团队解释、直接确认和未知。','Separate the statement, team interpretation, direct confirmation and unknowns.'),p('匹配产品、版本、地区和资料日期。','Match product, version, region and documentation date.'),p('区分可核对事实、个人体验与商业关系说明。','Distinguish checkable facts, personal experience and commercial context.'),p('为纠正、转交或不处理说明证据和责任。','Explain evidence and ownership for correction, referral or no action.'),p('记录实际变化，避免把请求、回复和解决混成同一状态。','Record actual changes without merging request, reply and resolution.')]}
});
