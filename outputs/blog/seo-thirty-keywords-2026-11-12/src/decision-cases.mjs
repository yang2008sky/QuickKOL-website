import {s} from './authoring.mjs';
export const cases={
1:s('当两位回复人给出不同答案','When two responders give different answers',`假设软件创作者演示一个导出流程，读者问某文件格式是否支持。创作者根据自己的试用说可以，品牌客服引用旧资料说不支持。新增互动不是先去评谁回复快，而是找到两份答案分别依据什么版本、适用什么条件。保留原问题与时间，交产品负责人确认。若只是部分版本支持，最终回复必须把前提说清，不能为了避免尴尬将两种意见混成模糊肯定。

产品确认后，给双方同一份批准事实及版本。原帖回复可说明更正的范围，并提供适当官方资料，不公开讨论读者的私人账号信息。若视频本身省略关键前提，由内容负责人判断需要补充说明还是下一版修订。这个决定依据作品承诺和实际影响，不是由评论数量自动触发。创作者的真实试用可以成立，同时不代表每个版本都支持；客服的旧资料也可能需要更新。

在处理记录中分开“冲突已发现”“事实已确认”“对外回复已修正”和“相关资料待更新”。把资料更新交给对应人员，避免修好一条评论却让旧页面继续引出同样问题。下一次 Brief 可要求在导出前先说明版本条件，并让测试用户尝试复述。此处没有真实客户结果，也不保证更正会提高观看或订单。

收尾时请未参与讨论的同事从记录找到原问题、最终条件、公开答复与剩余任务。如果他仍要在两个聊天里选一个相信，响应流程就没有完成。有效互动计划的价值在于让准确答案抵达读者，并让制作和客服共用一个可追溯的事实，而不只是把这次争论统计成更多活跃。`,
`Suppose a software creator demonstrates an export workflow and a viewer asks whether a file format is supported. The creator says yes from actual trial experience; brand support says no using an older reference. More engagement is not a reason to decide who replied fastest. Identify the version and conditions behind each answer, retain the question and time, and ask the product owner to confirm. If support exists only in particular versions, the final answer needs that prerequisite rather than a vague affirmative designed to avoid embarrassment.

Give both responders the same approved fact and version. The public response can explain the correction’s scope and link an appropriate official reference without discussing the viewer’s private account information. If the video omitted an essential condition, the content owner should decide whether a clarification or later revision is needed. That decision concerns the promise and actual effect, not an automatic comment-volume trigger. The creator’s trial may be genuine without representing every version, while support’s old material may need updating.

Keep conflict identified, fact confirmed, public response corrected and related reference awaiting update as different states. Assign the reference update so that one corrected comment does not coexist with a page producing the same confusion. The next brief may put the version condition before the export and ask a test viewer to restate it. This is a hypothetical case, not a client result or a guarantee that correction increases viewing or orders.

At closure, ask an uninvolved colleague to locate the original question, final condition, public answer and outstanding work. If that person still has to choose which of two chats to trust, the response process is incomplete. The value of an engagement plan is getting an accurate answer to the audience and giving production and support a traceable shared fact. Counting the disagreement as more activity would miss that objective. The record should therefore make the correction usable after the original responders leave the project, preserving the information needed for a consistent answer without turning a private exchange into a public case study about the viewer.`),
2:s('首发交接怎样发现权限缺口','How a first-release handoff exposes an access gap',`假设品牌创建频道后，邀请外部剪辑师准备成片，内部负责人安排首发。剪辑师能完成草稿，但品牌原先以为对方还负责某项原生发布操作。先对照角色与采购范围，确认究竟是谁承诺这项动作。不能因为发现能力缺口，就把所有权转给外部人员，或让其共享品牌账号。

把任务改成可执行交接：剪辑师提交批准素材、字幕和版本说明；有权发布人检查目标频道与最终设置；产品人员确认型号和事实；内容负责人核对披露与许可。某项人员同时负责两步时，也要保留两个确认对象。发送邀请、接受邀请与验证可以完成实际任务应分别记录。

再让备用操作者只用交接包寻找下一步。如果他找到的是个人测试频道、旧样品版本或无法确认的许可，就暂停该步骤并交给对应人修正。无需用真实公开发布测试，也不启动广告。新频道暂时没有观看，不会妨碍这次准备检查，因为此时要验证的是身份、素材与操作是否对齐。

最终记录可以说频道已创建、素材已批准、发布操作者已确认，仍有评论接收人待指定。它比笼统的“频道完成”更准确。负责人知道哪些条件还阻止上线，也不会把创建成功误当成所有商业与运营安排都已经被批准。`,
`Suppose the brand creates a channel, invites an external editor to prepare the piece and assigns an internal owner to the first release. The editor can complete a draft, but the brand assumed that person would also handle a native publishing action. Check the role and purchased scope to establish who actually committed to that step. An access gap is not a reason to transfer ownership to an external contributor or share the brand login.

Create an executable handoff: the editor supplies approved media, captions and version notes; an authorized publisher checks the destination channel and final controls; product staff confirm the model and facts; the content owner checks disclosure and permission. If one person handles two steps, retain the two different confirmation objects. Record an invitation sent, invitation accepted and ability to perform the task separately.

Then ask a backup operator to identify the next step using only the package. If it points to a personal test channel, an old product version or uncertain permission, hold the step and assign the correction. There is no need for a real public test publication or advertising launch. A new channel having no views does not prevent this readiness check because the question concerns aligned identity, assets and operation.

The final record might say channel created, asset approved, publisher confirmed and comment receiving owner pending. That is more accurate than channel complete. The owner can see which condition still prevents release without interpreting successful creation as approval of every commercial and operational arrangement. Keep the open condition in the launch record rather than in one person’s memory. A new contributor can then take over through the agreed role and current package, without having to reconstruct why a file exists under one account while a publishing request refers to another.`),
3:s('两场活动重叠时怎样检查真实容量','Check capacity when two campaigns overlap',`假设月度总工时看起来足够，但两场活动都需要在周四完成最终审核。一个岗位是否可行，取决于工作集中方式和所需能力，不只看整月平均。把样品、事实确认、创作者修改与排期分别放到日历中，再标明哪些动作可以提前，哪些只能在最终版本出现后完成。

如果同一位经理必须同时确认价格、审核技术事实、处理客服并发布，他可能既缺时间也缺权限。先决定产品团队和财务承担哪些确认，再计算经理剩余协调工作。增加一位只会排期的人，未必解决技术审批；采购一次专业审核，也未必解决日常回复。需要的是匹配任务的资源，不是职位数量本身。

工资资料仍只提供特定口径的背景。组织若采用一份假设的年预算，按内部方法计算每月成本时要保留假设，不能把公共中位数说成某候选人的实际费用。临时服务费也按具体范围单列。比较方案时，说明谁持有交接记录、休假或离岗后由谁接替，以及取消外部服务会影响哪些任务。

可以先用一个小项目记录真实任务，再更新工时估计。不要把首次观察当成永久产能定额，也不以一个迟到判断员工能力。交接给预算负责人的应是任务、拥堵位置、建议资源和未知，而不是一个“每人能管二十位达人”的通用口号。这样的方案更能解释为什么需要花钱，以及这笔钱究竟会改变哪一个工作条件。`,
`Suppose the monthly total seems sufficient, but two campaigns both need final review on Thursday. Viability depends on timing concentration and capability, not the monthly average alone. Place samples, fact confirmation, creator revisions and scheduling on the calendar, identifying work that can happen earlier and work that must wait for a final version.

If the same manager must approve price, verify technical facts, handle support and publish simultaneously, the gap may concern authority as well as time. Decide which confirmations product and finance own, then estimate the manager’s remaining coordination. Adding someone who can only schedule may not solve technical approval; purchasing a specialist review may not cover daily replies. The need is task-matched capacity rather than headcount itself.

Wage references remain scoped background. If the organization uses a hypothetical annual budget and converts it into a monthly planning cost, retain that assumption instead of describing a public median as a candidate’s actual fee. Temporary service costs need their own scope. Compare who retains records, who provides cover during absence and which tasks would be affected by ending an external arrangement.

A small project can supply task observations for updating effort estimates. Do not turn the first observation into a permanent productivity quota or infer employee capability from one delayed release. The budget handoff should contain tasks, congestion, proposed resources and unknowns rather than a universal claim that each manager can handle twenty creators. That is a clearer explanation of why spending is needed and which work condition it would change. It also distinguishes a staffing decision from a compensation judgment: the team can identify a missing review function without concluding that a particular employee’s pay is too high or that the salary alone should purchase unrelated specialist duties.`),
4:s('另做一个版本仍需保留真实关系','A separate version still needs an accurate relationship',`假设品牌原来只要一条付费演示，后来有人建议再剪一条没有商业标记的版本用于奖励计划。先核对它是否仍然来自同一项付费安排、包含相同产品邀请或使用相同合作材料。文件名和封面不同，不会自动把商业作品变成独立编辑内容。不能把删除标记当成解决资格问题的方法。

如果确有另一项由创作者自主决定的内容，仍应按其真实关系与当前规则单独判断，不由品牌在合同里替平台确认。品牌能够确认的是自己提供了什么、买了什么、允许怎样使用，以及是否承担某项约定费用。创作者也应能选择不制作额外版本，而不被误认为拒绝已经完成的工作。

范围表分别记录原始素材、品牌版、其他适配版本与许可。新增拍摄或重剪需要谁确认、是否含在原费用，先讲清。平台奖励的估计或最终状态另列，不用它给品牌版自动打折。没有收入资料时留空并说明状态，不填零再声称对方没有机会成本。

最后让接手人用普通语言解释每条作品为何存在、由谁决定、关系如何披露，以及哪些结论仍由当前平台条件决定。若答案只是“这个版本没有写广告”，说明记录仍不足。真实的内容区分需要任务与事实，不是通过外观删改把同一关系隐藏起来。`,
`Suppose a brand initially purchases one demonstration and someone later proposes an additional edit without a commercial label for the rewards program. Check whether it still arises from the same paid arrangement, includes the same product invitation or uses the same partnership material. A different filename and cover do not automatically make commercial work independent editorial content. Removing a label is not a solution to an eligibility question.

If there is genuinely another creator-directed piece, assess its actual relationship and current rules separately rather than having the brand contract decide a platform outcome. The brand can confirm what it provided, purchased, permitted and agreed to pay. The creator should also be able to decline an additional version without that being misdescribed as rejection of work already completed.

The scope record should distinguish original media, the brand version, other adaptations and permissions. Establish who approves added filming or editing and whether it is included in the original fee. Keep estimated or final platform status separate rather than automatically discounting the brand asset. If income information is unavailable, leave that state visible instead of entering zero and concluding the creator faces no opportunity cost.

Have the receiving owner explain why each asset exists, who decides it, how the relationship is expressed and which conclusions remain dependent on current platform conditions. If the explanation is only this version does not say advertisement, the record is inadequate. Genuine content distinctions need tasks and facts, not cosmetic changes hiding the same relationship. A practical alternative may be to buy the originally scoped work on honest terms and leave the creator’s independent editorial planning outside the purchase. That respects separate decisions without promising a rewards workaround or asking either party to suppress information the audience needs.`),
5:s('当讨论成功，内部却没人接手','When the discussion works but nobody receives it',`假设创作者主持的专业演示带来几条很具体的流程问题，品牌却只保存观看与评论总数。读者需要知道某个版本是否适合自己的工作，但销售表要求先提供与问题无关的资料，产品团队也没有接收人。此时不应立即增加推广，先把原问题交给能确认事实的人。

将问题分为公开可回答的产品限制、需要适当技术澄清的场景，以及真正请求采购信息的事项。每类给合适路径，不把所有人一律记作销售线索。公开问题不需要收集私人工作资料；确需后续信息时，说明用途并限制范围。创作者可以帮助解释问题，不能替品牌决定产品适用性。

修复接手后，再判断是否需要另一条作品或适当付费放大。前后条件已经变化，报告中要注明，不能把改善都归给新的创作者。即使最终没有订单，团队也可能得到一项明确产品解释或发现不适用人群。是否继续取决于项目目标，不靠发言数量自动决定。

交接时让下一位负责人找到最初的问题、批准事实、回复路径和未解决项。这样策略的价值可以从一张关系图落到真实工作，而不是用“我们触达了专业网络”遮住没人回答的现场。`,
`Suppose a creator-hosted professional demonstration produces several specific workflow questions, but the brand saves only viewing and comment totals. A reader needs to know whether a version suits their work. The sales form demands unrelated information, and product staff have no receiving owner. Increasing promotion should not be the immediate response. Get the actual question to someone able to confirm the fact.

Separate publicly answerable product limits, scenarios needing appropriate technical clarification and genuine requests for procurement information. Give each a suitable route instead of recording everyone as a sales lead. Public questions do not require private work records. Where additional information is needed, state its purpose and limit scope. The creator can help explain the question without deciding product suitability on the brand’s behalf.

After the handoff is repaired, decide whether another piece or appropriate paid distribution is useful. Conditions changed, so label that in the comparison rather than attributing improvement entirely to a new creator. Even without an order, the team may obtain a clear explanation or identify an unsuitable use case. Continuation depends on the project goal, not speaking volume alone.

The next owner should be able to locate the original question, approved fact, response route and unresolved work. That converts the strategy from a relationship picture into actual operations instead of concealing an unanswered audience behind the claim that the brand reached a professional network. It also makes expansion conditional on something observable: the team can show that the people it invites will receive the promised next step, rather than scaling a communication path whose receiving side was never prepared.`),
6:s('不要把整个达人费用写成风险金额','Do not label the whole creator fee a loss',`假设一个品牌看到未经证实的涨粉邀约，就准备把已经支付的达人费用全部写为损失。先核对这笔费用购买什么。如果包含已完成的真实拍摄和许可，数据疑问未必否定这些交付；若某项结算明确依赖受影响指标，再由有权负责人按实际安排复核。不能让一个图表替代合同判断。

风险记录可以分成三列：已经发生的事实、仍可能影响的决定、待确认的范围。比如邀请邮件存在是事实，是否接入仍未知；一段报表暂不能用于排序是一项用途限制，不等于品牌全部收入受损。处理时间若确实记录，可以单列，但不要把等待、预估与实付混合后得到夸大总额。

对创作者请求澄清时，说明窗口与所需证据，给出合理回复路径，不要求完整账号访问或每位关注者身份证明。品牌自己的推广与代理安排也应核对。若新证据能解释变化，就更新记录；仍无法确认时，保留未知而非补一个指控。风险控制可以采取暂停某项采购，并不要求先证明个人造假。

最终建议应写谁停止什么、谁处理访问、谁修订哪项报告，以及真实作品怎样验收。此处没有实际客户损失，也不推断任何当前服务的违法状态。一个有边界的风险说明可以保护预算与合作关系，同时避免把“谨慎”变成对所有已完成工作无依据的否定。`,
`Suppose a brand sees an unverified follower-service offer and proposes labeling the entire creator fee a loss. Check what that fee purchased. It may include completed authentic filming and permission that a data question does not invalidate. If one settlement condition depends on the affected metric, an authorized owner should review the actual arrangement. A chart cannot replace that contractual assessment.

A risk record can separate established facts, potentially affected decisions and pending scope. An offer email existing is a fact while connection remains unknown. A report field being unsuitable for ranking is a use limitation, not proof that all brand revenue was harmed. Actual handling time can be listed, but do not combine waiting, estimates and paid amounts into an inflated total.

A clarification request should identify the period and evidence needed through a reasonable response route. It should not demand full account access or identity proof for every follower. Check the brand’s own promotion and agency arrangements too. Update the record when evidence explains a change; preserve an unknown when it does not. Holding one purchase can be a risk-control decision without first proving personal deception.

The recommendation should identify who stops what, who handles access, who revises which report and how genuine work will be accepted. This is not a real client loss or a finding about any current service’s legal status. A bounded risk explanation can protect budget and collaboration without turning caution into an unsupported rejection of completed work. The receiving owner should also be able to explain which new evidence would change the decision, keeping the review open to correction rather than requiring every later fact to fit the first suspicion.`)
};
