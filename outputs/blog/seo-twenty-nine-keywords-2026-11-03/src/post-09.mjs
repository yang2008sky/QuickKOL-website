import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:9,
summary:p('用商务摘要记录正在讨论的品牌合作，再用内容Brief指导制作；把接受状态、条件与变更传给正确负责人。','Record the commercial discussion in a deal memo and guide production with a content brief. Keep acceptance, conditions and changes visible to the right owner.'),
description:p('品牌合作交易怎样交接：区分商务摘要和内容Brief，记录范围、报价状态、许可依赖与变更，避免把平台询问误当成已接受合作。','Organize brand deals with a commercial memo and content brief, recording scope, acceptance, permission dependencies and changes before production begins.'),
coverAlt:p('两组奶油色与钴蓝纸张分别放在珊瑚色夹板和黑色文件盘上，旁边有未标品牌的制作物件。','Cream and cobalt paper sets sit on a coral clipboard and black document tray beside unbranded production objects.'),
answer:p('Brand deals是品牌与创作者围绕约定工作及回报讨论或达成的商业合作。交接时用两份相连记录：商务摘要回答谁与谁讨论什么、条件和接受状态怎样；内容Brief回答要向谁传达什么、制作与审阅需要什么。本文的商务摘要是编辑工作记录，不是通用法律合同，也不自行决定一段邮件是否形成约束。开工前由适当负责人确认实际约定，不能把摘要填满等同于双方接受。',
'Brand deals are commercial arrangements discussed or agreed between a brand and a creator around defined work and compensation. For handoff, use two connected records: a deal memo describing parties, scope, conditions and acceptance status, and a content brief describing audience, message, production and review. The memo here is an editorial operating record, not a universal legal contract or a rule about whether an email is binding. The appropriate owner must confirm the actual agreement before work proceeds. A completed form does not establish acceptance, and a polished creative brief does not establish permission to use the finished work.'),
links:[link('合作范围核对','collaboration-scope checklist','creator-contract-scope-checklist'),link('工作说明指南','statement-of-work guide','influencer-contract-template-statement-of-work'),link('合作执行指南','collaboration workflow guide','collaborate-with-influencers-brand-workflow')],
sections:[
s('先说清楚交易处于哪一步','Name the deal stage before describing the creative',
`一句“这个合作定了”可能掩盖不同状态：收到询问、交换报价、等待内部决定、确认部分条件或已由有权限的人接受。记录应指向实际回应，不能只反映团队期待。

商务摘要顶部保留状态、记录时间、负责人和下一决定。如果只有制作范围得到确认，而媒体使用仍在讨论，就分别写出。不要用单个绿色标签隐藏未决条件。

YouTube Creator Partnerships说明展示了平台询问与品牌直接协商之间的区别。平台中表示有兴趣，不等于双方完成所有商务安排；这一具体机制也不能被当作所有平台合同流程。

从渠道带来的线索进入项目系统时，保留原始上下文和适当联系人。不要将平台标签翻译成比来源更强的承诺，或让制作人员猜测哪一条消息具有开工依据。`,
`A statement that the deal is done can hide an inquiry, a quote exchange, an internal decision, agreement on some conditions or acceptance by an authorized person. The record should point to the actual response, not the team’s expectation.

Place status, recording time, owner and next decision at the top of the memo. If production scope is confirmed while media use remains under discussion, say both. One green label should not conceal unresolved conditions.

The YouTube Creator Partnerships guide distinguishes platform inquiries from direct brand negotiation. Indicating interest in that setting does not settle every commercial arrangement. This specific mechanism is not a universal contracting process for every platform.

When a channel lead enters the project system, preserve the original context and appropriate business contact. Do not translate a platform label into a stronger promise than its source supports or leave production colleagues to guess which message authorizes work. A dated stage record is useful precisely because the commercial conversation can change after the first enthusiastic reply.`,['ytPartnerships']),
s('商务摘要保留决定所需字段','Keep decision fields in the commercial memo',
`列明品牌、创作者或代表、项目标识、讨论范围、回报结构、条件、状态与来源。按实际需要记录币种、税费处理和支付依赖，不预设全球相同规则。

将已经确认与仍需确认分栏。尚未报价的剪辑版本不是免费；没有写入摘要的广告使用也不是自动包含。合作范围核对可以帮助提出问题，但最后以实际有效约定为依据。

摘要应简洁到让同事找到决定，却不能通过删去条件制造确定性。“待样品到达后确认拍摄日”比只写一个日期更能指导排期。

不为便捷收集私人生活信息。商务联系人和被授权的业务资料通常足以支持这项记录，访问范围应随实际工作需要分配。`,
`Record the brand, creator or representative, project identifier, discussed work, compensation structure, conditions, status and source. Add currency, tax treatment and payment dependencies where relevant without assuming the same rules worldwide.

Separate confirmed matters from questions. An unquoted edit is not free; advertising use omitted from a memo is not automatically included. The collaboration-scope checklist helps frame questions, while the actual effective agreement remains the reference.

Keep the memo short enough to find a decision without deleting conditions that matter. A shooting date subject to sample arrival is operationally different from an unconditional date, even if both fit the same calendar cell.

Avoid collecting private-life information for convenience. Appropriate commercial contacts and authorized business information usually serve this record. Access should follow work needs, with the responsible owner retaining the fuller commercial evidence where necessary. The creative team can receive the conditions relevant to its assignment without receiving unrelated personal or financial details.`),
s('内容Brief解释受众、信息与制作','Let the content brief explain audience, message and production',
`内容Brief从受众问题出发，说明产品或服务是什么、希望理解什么、哪些资料可靠，以及什么不能推断。它服务于表达，不替代价格与使用条件。

把不可变事实与可发挥空间分开。例如实际功能限制必须准确，故事入口、镜头语言和个人表达可以由合作双方按约定探索。不要把所有示例措辞都默认为逐字脚本。

提供必要素材、事实来源、可接触的产品版本、审阅人和交付格式。对于技术演示，说明环境与依赖；对于活动记录，说明可进入区域和必须避开的私人信息。

工作说明指南可以进一步组织交付和依赖。本篇重点是让商务摘要与Brief之间有明确连接，而不是再提供一份假装适用所有地区的合同。`,
`Start the brief with the audience question: what the product or service is, what people should understand, which facts are supported and which inferences are inappropriate. It guides expression without replacing price or use conditions.

Separate fixed facts from creative freedom. A real functional limitation must remain accurate, while the narrative opening, visual language and personal expression can be developed under the agreement. Example wording should not silently become a mandatory verbatim script.

Supply necessary assets, factual sources, accessible product version, reviewers and delivery format. A technical demonstration needs environment dependencies; event coverage needs permitted spaces and treatment of private information.

The statement-of-work guide develops delivery and dependency fields. Here the task is to connect a commercial memo with the brief rather than create another supposedly universal contract. A useful brief makes a creator’s next production decision easier while preserving the commercially agreed boundaries, instead of copying every negotiating message into a document that nobody can navigate.`),
s('给两份记录一个共同版本入口','Connect the records through a common version reference',
`用同一项目标识和互相可找到的版本链接连接两份记录。不要把存在于不同文件夹的相似标题，当作它们一定一致的证明。

Frame.io版本比较说明展示了对照资产版本与评论的工具机制。版本评论有助制作审阅，但某位同事点了认可，不自行证明有权批准新增费用或广告许可。

每次范围改变，记录提出者、改变内容、商务影响、Brief影响和确认状态。例如竖版改成两个语言版本，应核对制作量、审阅与用途，而不是只改导出文件名。

保留旧版本的状态，避免把新文件覆盖成仿佛一直如此。交接人员需要知道哪个版本用于当前工作，以及哪些旧意见已经被替代。`,
`Connect the records with the same project identifier and discoverable version references. Similar titles in different folders do not establish that the documents agree.

The Frame.io version-comparison guide describes comparing asset versions and their comments. That mechanism can support production review, but a colleague’s approval action does not independently establish authority to approve an added fee or advertising permission.

For a scope change, retain proposer, changed work, commercial effect, brief effect and confirmation state. Turning one vertical asset into two language versions may affect production, review and use; it is not merely a filename adjustment.

Keep the old version’s status rather than overwrite history as if the new requirement had always existed. Handoff colleagues need to know which version governs current work and which comments have been superseded. A common reference also helps identify a stale attachment before someone spends time producing an obsolete deliverable. The reference can be simple; its usefulness comes from consistent maintenance.`,['frameCompare']),
s('把披露与表达要求带进Brief','Carry disclosure and truthful-expression requirements into the brief',
`FTC背书问答是美国语境下的参考，强调重要关系披露和真实表达。品牌提供的Brief不能要求创作者把没有实际体验或证据的说法写成个人事实。

商务摘要记录关系和回报，Brief把相关披露要求转化为实际发布检查。赠品、服务或其他回报不能因为没有现金就从讨论中消失，具体适用性依地区与场景确认。

不要把平台标签与全部披露责任画等号，也不要自行宣称一条固定用语全球适用。让负责该市场的人确认渠道、格式、语言与表达。

审阅时把事实错误、披露问题和风格偏好分开。改事实有依据，改偏好有约定；反复把个人口味当作必须修改的错误，会让项目范围越来越模糊。`,
`The FTC endorsement FAQ is a US-context reference for material connections and truthful expression. A brand brief should not instruct creators to present unsupported statements or experiences they have not had as personal facts.

The memo records the relationship and compensation; the brief turns relevant disclosure requirements into publication checks. Products, services and other benefits should not disappear from the discussion because payment is noncash. Confirm applicability for the market and circumstances.

Do not equate a platform label with every disclosure responsibility or declare one fixed phrase suitable worldwide. Have the appropriate market owner confirm channel, format, language and wording.

During review, separate factual errors, disclosure issues and stylistic preferences. Correct facts with evidence and preferences under agreed review conditions. Repeatedly treating personal taste as an obligatory correction makes scope progressively harder to understand. A clear classification also tells the creator what must change before publication and what remains a creative suggestion rather than an additional commercial requirement.`,['ftcFaq']),
s('假设案例：样片确认后增加付费使用','A hypothetical: paid use is requested after the draft',
`假设一个硬件品牌与创作者讨论了一条演示内容，样片完成后，另一团队希望用它投放广告。这是教学案例，不是实际客户项目或标准报价。

先在摘要里新增使用请求与待确认状态，核对实际约定和适当许可。内容Brief同时标记新用途是否需要不同裁切、语言、音乐或事实审阅，不能因为视频已交付就自动扩大用途。

原工作若仍可按已确认条件继续，就明确哪些工作继续；新增事项由有权限的人决定。不要用“整个合作待定”掩盖已有义务，也不要让创作者在沉默中承接未约定工作。

只有确认后才把新增范围写入当前工作版本，保留条件和来源。这个方法不决定法律争议，却能避免操作团队把愿望当成许可。`,
`Suppose a hardware brand and creator discuss one demonstration asset. After the draft is produced, another team wants to advertise with it. This is a teaching example, not a client project or standard quotation.

Add the use request and pending state to the memo, checking the actual agreement and appropriate permissions. Mark whether the new use needs different framing, language, music or factual review in the brief. Delivery alone should not silently expand purpose.

If original work can continue under confirmed conditions, specify what proceeds while authorized people decide the addition. Do not obscure existing obligations by calling everything pending, or let a creator absorb unagreed work through silence.

Only move the addition into the current working scope after appropriate confirmation, retaining conditions and source. This operating method does not settle a legal dispute. It helps stop production teams from treating an intention as permission or treating a general interest in advertising as an instruction to launch.`),
s('处理预算、排期与未满足条件','Handle budget, schedule and unmet conditions together',
`把预算保留、外部报价、已接受金额和实际结算分开。预算获批不代表对方已接受报价，平台显示预估也不代表款项已到账。

排期应列出输入依赖：样品、访问权限、可靠事实资料、适当审阅与文件交付。依赖延迟时按实际约定重新协调，不编造统一宽限期或自动赔偿规则。

合作执行指南适合继续安排负责人和交接。商业决定、制作反馈与平台操作由谁负责，应能从记录找到；不能让每次延迟都通过抄送更多人处理。

若条件没有满足，说明影响哪些工作、谁下一步回应，以及何时重新检查。保留未知状态，比把全部日期填成看起来完整的计划更可执行。`,
`Separate reserved budget, external quote, accepted amount and actual settlement. Internal budget approval is not the other party’s acceptance; a platform estimate is not money received.

List schedule dependencies: sample, access, reliable factual material, appropriate review and file delivery. When an input is delayed, coordinate under the actual agreement rather than invent a universal grace period or automatic compensation rule.

The collaboration workflow guide supports responsibility and handoff. Records should show who owns the commercial decision, production feedback and platform operation, so every delay does not become an expanding email copy list.

If a condition is unmet, identify affected work, next responder and recheck point. A preserved unknown is more operationally useful than a complete-looking calendar that implies unavailable inputs are ready. It also lets the team explain a revised delivery plan using the actual dependency, instead of attributing every scheduling change to creator performance.`),
s('两份文件冲突时暂停哪项决定','Resolve a document conflict without guessing authority',
`再看一个假设：摘要写一轮事实审阅，Brief附件却复制了旧项目的三轮完整重拍。制作人员发现差异后，应指出具体版本和字段，交给有权限的负责人协调，而不是自行选择更重或更轻的版本。

记录冲突、受影响工作和待决定事项。文件的更新时间较晚，不自行证明它改变了双方约定；谁编辑文件与谁有权确认条件是不同问题。本文不提供文件优先级的法律判断。

如果双方确认多轮重拍确属新范围，协调费用、日期和相应依赖，再更新两份记录。如果附件来自误复制，修正它并通知真正依赖该附件的人。不要只在一个内部聊天里解释，却让错误版本继续流转。

已完成且未受影响的工作可按实际安排保留，不必为解决一个字段把全部项目重新启动。把纠正动作做得具体：哪一行删除、哪个版本替代、谁收到通知、什么时候重新确认开工。`,
`Consider another hypothetical. The memo records one factual review, while a brief attachment copied from an older project requests three rounds of complete reshooting. A producer who finds the conflict should identify the versions and exact fields, then route it to authorized owners rather than independently choose the heavier or lighter requirement.

Record the conflict, affected work and pending decision. A later editing timestamp does not by itself establish a change to the parties’ arrangement. The person able to edit a file and the person authorized to confirm conditions may be different. This article does not establish a legal hierarchy of documents.

If the parties confirm that reshooting is genuinely additional work, coordinate fees, dates and dependencies before updating both records. If the attachment was copied in error, correct it and notify the people who actually rely on it. Explaining the problem in one internal chat leaves the incorrect version circulating.

Unaffected work already completed can remain under the actual arrangement; a single disputed field need not require reinventing the entire project. Make the correction specific: which line changes, which version replaces it, who receives notice and when work can be reconfirmed. This gives the operational team a usable next step while leaving interpretation of actual obligations with the appropriate people.`),
s('收尾时核对文件、状态与未结事项','Close with files, status and outstanding items',
`交付完成后，将文件、接受状态、结算状态与使用期限分别记录。一个内容发布链接不能替代全部交接证据，文件收到也不必然意味着商业事项全部结束。

清单保留当前可用资产、适用版本、使用条件出处、仍需处理的付款或修改，以及谁负责后续。不要在摘要中重新创造与实际约定不同的权利。

把可分享的制作说明与受限商务资料分开，交给适当同事。归档不是扩大访问，也不应让后续执行者找不到影响其工作的关键条件。`,
`After delivery, record files, acceptance, settlement and use periods separately. A published-content link does not replace every handoff record, and receiving a file does not necessarily close all commercial matters.

Retain usable assets, applicable versions, the source of use conditions, remaining payment or revision items and their owners. Do not recreate rights in a summary that differ from the actual arrangement.

Separate shareable production guidance from restricted commercial material and give each to appropriate colleagues. Archiving should neither expand access unnecessarily nor hide conditions that affect future execution. The result is a smaller, clearer handoff: the next person knows what is available, what can be done with it and which unresolved item requires a decision.`)
],
table:{title:p('同一合作，两份相连记录','One deal, two connected records'),headers:[p('记录','Record'),p('回答什么','Question answered'),p('不自行证明','Does not establish alone')],rows:[[p('商务摘要','Deal memo'),p('条件、状态、来源与下一决定','Conditions, status, source and next decision'),p('法律效力或全部权利','Legal effect or all rights')],[p('内容Brief','Content brief'),p('受众、信息、事实与制作','Audience, message, facts and production'),p('报价接受或新增使用许可','Quote acceptance or added use permission')],[p('共同变更记录','Shared change log'),p('哪项改变影响哪个版本','Which change affects which version'),p('有权限的人已确认','Confirmation by an authorized person')]],note:p('编辑工作框架；实际约定、适用地区与权限需单独确认。','Editorial operating framework; confirm actual agreement, jurisdiction and authority separately.')},
tool:{title:p('Brand deal交接检查','Brand-deal handoff checks'),intro:p('确认记录与实际证据一致。','Align the record with actual evidence.'),items:[p('状态对应具体回应。','Tie stage to a specific response.'),p('待确认条件明确。','Keep pending conditions visible.'),p('Brief没有扩大商务范围。','Ensure the brief does not enlarge scope.'),p('变更连接两个当前版本。','Connect changes to both current records.'),p('事实与披露有人负责。','Assign facts and disclosure review.'),p('收尾保留未结事项。','Retain outstanding items at handoff.')]}
});
