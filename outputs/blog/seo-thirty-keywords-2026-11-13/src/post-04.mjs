import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:4,
summary:p('从一次真实的交接问题出发，检查品牌是否找得到达人项目的版本、确认、发布与指标依据，而不是只给账号打一个总分。','Start from a handoff question and check whether the brand can retrieve campaign versions, approvals, publication records and metric definitions.'),
description:p('Social media audit 怎样服务达人营销交接：定义所需记录，区分缺失与无权访问，复核版本和权限，用检索覆盖率说明缺口，并安排修复责任。','Run a social media audit of creator campaign records with scoped retrieval checks, version and access review, transparent coverage and accountable remediation.'),
coverAlt:p('桌上放着档案夹、分组照片、相机和存储卡，用于说明创作者项目记录整理','A folder, grouped photographs, camera and memory card illustrate the organization of creator project records'),
answer:p('达人项目的 social media audit 可以先回答一个具体问题：新的负责人能否根据现有记录，重建这次合作约定了什么、实际发布了什么，以及报表数字从哪里来。先列出完成该判断所需的记录，再逐项检查是否可找到、是否对应版本、是否允许访问。缺少文件不等于没有达成约定，无权访问也不等于数据为零。这是一项限定范围的编辑工作方法，不是对账号真实性、财务或法律合规的整体认证。','A social media audit for a creator campaign can start with a specific question: can the next owner reconstruct what was agreed, what was published and where the reported numbers came from? Define the records required for that judgment, then check whether each can be retrieved, matches the relevant version and is available through appropriate access. A missing file does not establish that no agreement existed, and unavailable access is not a zero measurement. This is a scoped editorial working method, not certification of account authenticity, financial accuracy or legal compliance. Its output should be a usable record and a proportionate repair plan, rather than one impressive score.'),
sections:[
s('先明确审计支持的决定','Define the decision the audit supports',`把范围写成一个可以完成的任务，例如把上季度某次合作交给新负责人，确认一条素材能否继续使用，或解释一份报表采用了什么窗口。不同问题需要不同记录，不应在没有范围时把所有账号、全部历史文件和私人聊天一并拉入检查。

范围说明至少包括合作对象、项目、时间、需要回答的问题和不处理的事项。若这次只检查交接记录是否可重建，就不要对外写成“创作者已通过全面审计”。读者可能把这种说法理解成对真实性、全部受众或商业行为的更广泛担保。

先找本次采用的达人 Brief，再说明哪些后续决定依赖它。一个范围清楚的审计可以发现关键缺口，同时承认没有覆盖所有历史。这样既有助于执行，也让后续负责人知道哪些结论可以引用，哪些仍需要单独的专业或业务复核。`,
`Write the scope as a finishable task: hand over one previous campaign, determine whether one asset can continue in use, or explain the window behind a report. Different questions require different records. Without scope, the team can pull every account, historical file and private conversation into a review with no clear completion point.

Identify the partner, project, period, question and exclusions. If the work tests whether a campaign handover can be reconstructed, do not describe the creator externally as having passed a comprehensive audit. That phrase can imply broader assurance about authenticity, every audience member or commercial conduct.

Find the applicable creator brief, then identify the later decisions that depend on it. A well-scoped audit can expose an important gap while acknowledging that it did not review the entire history. This makes the exercise executable and tells subsequent owners which findings can be cited, which remain unresolved and which need separate specialist or business review. The goal is to answer the stated decision, not manufacture a reassuring badge.`),
s('先列出需要什么，而不是从现成文件倒推','Specify required records before counting files',`根据问题建立记录清单。一次合作交接可能需要当前 Brief、最终素材、审阅确认、使用范围、实际发布对象、获授权的指标提取、口径说明和交接责任。它们是工作对象，不代表每个项目必须采用相同数量或同一种工具。

为每项记录说明用途。例如，最终素材用于确认实际版本，发布地址用于定位观众看到的对象，使用范围用于判断拟议复用是否需要进一步确认。若说不出某份个人资料怎样支持当前决定，就不要仅因为能拿到而收集它。

也不要把现有文件夹直接当作完整标准。一个文件夹可能有大量草稿，却没有最终确认；同一截图存在十份副本，也不等于十个独立证据。清单应由决策需要驱动，再去检查存放位置和来源，而不是先数附件，再为数量找一个听起来专业的审计名称。`,
`Build the record list from the decision. A campaign handover might require the applicable brief, final asset, review confirmation, use scope, publication object, authorized metric extract, definition note and handover owner. These are working objects, not a mandatory record count or software prescription for every project.

Give each item a purpose. The final asset establishes the version; the publication URL locates what viewers could encounter; the use scope informs whether a proposed reuse requires another confirmation. If a personal document has no relevant role in the decision, availability is not a reason to collect it.

Do not treat the current folder as the completeness standard. It can contain many drafts without a final approval. Ten copies of one screenshot also remain copies rather than ten independent sources. Define what is needed, then examine locations and provenance. Counting attachments first and inventing an audit label around their quantity produces an administrative total without showing whether the campaign can actually be understood by someone who did not manage it.`),
s('为检索结果保留不同状态','Keep retrieval states distinct',`对每项所需记录分别写明：已定位且可读、已定位但当前无权访问、来源已知但文件暂不可得、尚未找到，或经确认本次不适用。状态要有观察日期与适当负责人，不只用绿色和红色单元格表达。

“尚未找到”描述的是本次查找结果，不能自动变成“从未批准”“没有交付”或“对方造假”。“不适用”也要说明理由，例如本次根本没有品牌广告复用安排；不能为了让覆盖率更高，把难以获取的记录移出分母。

给访问问题与内容问题安排不同处理。前者可能由记录持有人提供适当摘要或授权访问，后者需要确认版本、事实或约定。不要让审核人员为了完成表格索要共享密码。清楚状态既能保护权限，也能避免团队把一个普通的路径失效误当作合作本身不存在。`,
`For every required record, distinguish located and readable, located but inaccessible to this reviewer, source known but material temporarily unavailable, not found, and confirmed not applicable. Add an observation date and appropriate owner rather than relying on green and red cells.

Not found describes the search performed; it does not establish never approved, never delivered or fabricated by the partner. Explain not applicable as well, perhaps because the assignment included no brand advertising reuse. Do not remove difficult records from the denominator merely to improve a coverage figure.

Give access and content problems different routes. A record holder may provide an appropriate summary or authorized access for the former; the latter needs clarification of version, fact or agreement. Reviewers should not request shared passwords to complete their sheet. Clear states protect permissions and prevent a broken link from becoming a claim that the underlying collaboration never existed. They also allow the team to make progress on available records while the relevant owner handles a specific unresolved item.`),
s('复核版本和时间，不只看一个截图','Review version and time, not just a screenshot',`Meta 的私信功能公告在 2024 年介绍了发送后 15 分钟内编辑消息的能力。这是一项有日期的功能说明，提醒团队考虑消息版本；它不能证明某条具体消息已经被改过，也不能推断今天每个账号都展示相同界面。

对于本次相关的确认，记录原始上下文、对象、发送或观察时间，以及后续是否有改变范围的答复。截图可能裁掉前文或修订说明，文件修改时间也不等于业务批准时间。一个较新的附件，不一定是被确认使用的版本。

如果只能找到早期脚本与最终成片，就把中间缺少的确认写出来，不自己替双方补一个批准结论。可以请适当负责人定位相关记录或明确重新确认。保留“恢复出的历史记录”和“今天新增的确认”之间的区别，避免把新的补充错误地写成当时就已存在的事实。`,
`Meta’s DM feature announcement introduced message editing within 15 minutes in 2024. That dated feature context is a reason to consider message versions, not proof that a particular exchange was altered or that every present account has an identical interface.

For a relevant confirmation, preserve context, object, sent or observed time and any later response changing the scope. A screenshot can omit preceding terms or a correction. File modification time is not business approval time, and the newest attachment is not necessarily the version approved for use.

If only an early script and final video are available, identify the missing confirmation between them instead of supplying an approval on behalf of the parties. Ask the appropriate owner to locate the record or obtain an explicit new confirmation where suitable. Distinguish a recovered historical record from a confirmation added today. Otherwise an administrative repair can accidentally become a false statement that the relevant condition was already established when the original publication occurred.`,['igDm']),
s('权限不足时安排适当检查人','Use an appropriate reviewer when access is limited',`YouTube 的频道权限说明提供按角色授予访问的方式，并说明这比共享 Google 登录资料更安全。用于项目审计时，重点是让合适的人获取完成任务所需的范围，不是为了一次交接把所有参与者都提升到最高权限。

公共发布页、创作者授权提供的提取和品牌后台报告可以有不同可见范围。审核者拿不到某个后台字段时，应说明谁有权查看、能否提供合适记录，以及该缺口对本次结论有什么影响。不要把无法访问翻译成数据不存在。

同样，一位同事可以查看报表，不代表其能代表创作者批准合同或授予素材许可。技术角色与业务责任要分开。需要移交操作权限时，由实际账号负责人按当时平台机制处理；审计表只记录适当确认，不保存密码、验证码或恢复密钥来让后续人员图方便。`,
`YouTube’s channel-permissions guide describes scoped access without sharing Google sign-in details. For a campaign audit, the useful principle is appropriate access for the task, rather than promoting every participant to the highest role for one handover.

A public page, an extract provided with creator authorization and a brand’s internal report can have different visibility. If the reviewer cannot see a field, state who can appropriately inspect it, whether a suitable record can be provided and how the gap affects this conclusion. Inaccessible to this person does not mean the data does not exist.

Likewise, permission to view a report does not establish authority to approve a creator’s commercial agreement or license an asset. Keep technical roles and business responsibility separate. If operational access needs transferring, the account owner should use the platform’s current process. The audit record can retain the relevant confirmation without storing passwords, verification codes or recovery secrets for the convenience of the next person.`,['ytPermissions']),
s('不要让审计变成新的资料堆积','Avoid creating a second uncontrolled archive',`FTC 的企业信息保护指南强调知道信息存在哪里、谁能访问，并缩减不必要的保留。检查达人项目记录时，应优先建立可以定位原始资料的索引，而不是给每位审核人复制完整私人聊天、付款信息和个人文件。

确实需要保留的摘录，应包含完成判断所需的上下文，并限制无关信息的传播。记录适当存放位置、负责人和保留安排。一个方便转发的总表，不应顺带暴露地址、银行资料或其他与当前审计问题无关的内容。

资料管理也包括检查结束后的处理：临时下载、副本与过期访问由谁清理，哪些证据仍有业务需要，哪些义务须请适当人员确认。这里讨论的是限定范围的管理方法，不是全球统一的保存期限。多保留并不总是更专业，能说明为什么保留和谁负责才是有用的控制。`,
`FTC’s business information-security guide recommends knowing where information resides, who can access it and what need not be retained. Prefer an index that locates campaign evidence over copying complete private conversations, payment details and personal files to every reviewer.

Where an extract is necessary, retain the context required for the decision while limiting unrelated information. Record an appropriate location, owner and retention arrangement. A convenient handover sheet should not also expose addresses, banking details or material irrelevant to the audit question.

Plan what happens after the review: who handles temporary downloads, copies and obsolete access; which evidence still serves a business need; and which obligations require an appropriate specialist’s input. This is a scoped management method, not a universal retention period. Keeping more information is not automatically more professional. A useful control explains why particular evidence is needed, how someone can retrieve it and who remains responsible when the original reviewer moves to another assignment.`,['ftcPrivacy']),
s('用算例解释检索覆盖率','Use retrieval coverage without turning it into assurance',`假设某次交接预先定义了 8 项所需记录，审核者成功定位并能阅读其中 6 项，另外两项是使用范围确认和指标口径说明。检索覆盖率可写为 6 ÷ 8 × 100% = 75%。这是假设的行政算例，不是真实项目数据或行业基准。

75% 只说明这份预先定义清单在本次检查中的可检索情况。它不表示合作有 75% 真实、风险降低了 75%，也不说明已找到的六项内容一定准确。缺少使用范围确认，可能比缺少一份非关键附件更影响拟议复用决定，因此覆盖率旁边必须说明具体缺口。

如果后来补到使用范围确认，应记录补到时间、来源和它解决的问题。指标说明仍未找到，就继续保留未知状态。不要只更新一个百分比，抹去原始检查范围和缺失记录；后续负责人需要理解判断如何改变，而不是仅看到分数变好。`,
`Suppose a handover defines eight required records before review. Six are located and readable; the missing items are use-scope confirmation and a metric-definition note. Retrieval coverage can be described as 6 ÷ 8 × 100% = 75%. This is a hypothetical administrative example, not client data or an industry benchmark.

The 75% describes retrieval against that predefined list in this review. It does not mean the collaboration is 75% genuine, risk fell by 75%, or the six available records are necessarily accurate. Missing use-scope confirmation may matter more to proposed reuse than a noncritical attachment. State the actual gaps alongside the fraction.

If the use confirmation is subsequently found, record when, from where and which question it resolves. Keep the metric note unresolved if it remains unavailable. Updating a percentage alone can erase the original scope and the reason a decision changed. The next owner needs the history of the finding, not merely a better-looking score that hides which critical condition is still unknown.`),
s('给缺口安排修复负责人','Turn gaps into owned repair actions',`每个问题应写成具体事项：哪个版本的确认找不到，哪份报表缺少窗口，哪个发布地址失效，以及它阻碍哪个决定。再安排适当负责人、下一步与复核时间。不要把“请补齐全部资料”发给创作者，让对方猜测品牌到底缺什么。

达人活动状态管理方法可以承接这些行动，但状态名称不能替代证据。例如，“待核对复用范围”与“允许所有广告使用”不是同一件事。资料补到后，检查它是否确实对应本次素材和用途，不因文件标题里有 approval 就自动结项。

暂时无法修复的缺口，也可以形成合理决定：继续研究、请负责人员澄清、缩小拟议用途，或暂停依赖该证据的新安排。决定应由适当业务负责人作出并记录理由，不能由审计表擅自扩大许可或替代既有商业约定。修复的目标是恢复可执行关系，而不只是把红色单元格变绿。`,
`Describe an issue concretely: confirmation missing for which version, a report lacking which window, a publication URL no longer resolving, and the decision affected. Assign an appropriate owner, next step and review time. Asking a creator to complete all documentation makes them guess what the brand actually needs.

The creator campaign status system can carry these actions, but its status names cannot replace evidence. Reuse scope awaiting confirmation is different from every advertising use permitted. When a file arrives, check that it concerns this asset and proposed use; an approval-like filename is insufficient to close the issue.

An unresolved gap can still support a proportionate decision: continue research, seek clarification, narrow the proposed use or pause a new arrangement that depends on the evidence. The responsible business owner should decide and retain the reason. An audit sheet must not expand permission or replace an existing agreement. Repair should restore an executable relationship, rather than merely convert red cells into green ones. That distinction also helps avoid repeatedly requesting documents that cannot answer the question.`),
s('交接发现、依据与未覆盖范围','Deliver findings, evidence and exclusions together',`最终输出可以是一份记录索引、问题清单和修复记录。开头直接回答预先设定的问题：现在能够重建什么，哪些事项仍不能确认，接手人应该先做什么。把每条发现指向相应对象与来源，避免只交付几十页没有行动顺序的截图。

再次说明审计范围与时间，不把一次样本检查扩展到全部历史。被选中的项目可能便于获取资料，也可能风险较高；没有适当抽样依据时，不能把结果叫作所有创作者的总体情况。即使记录齐全，内容准确性与商业结果仍需要各自证据。

复核后保留结论变化与实际负责人，让下一次交接能够沿着同一条路径继续。好的 social media audit 并不要求把所有东西收集到一个地方，而是让团队知道去哪里找、能说明什么、还缺什么，以及谁有能力完成下一步。`,
`The deliverable can be an evidence index, issue list and repair log. Answer the scoped question at the beginning: what can now be reconstructed, what remains unconfirmed and what the next owner should do first. Link each finding to its relevant object and source instead of handing over pages of screenshots with no action order.

Restate scope and review date. A selected sample may reflect easier access or higher-priority risks; without an appropriate sampling basis, it cannot describe the entire creator program. Complete records also do not independently establish accurate content or commercial effectiveness. Those judgments need their own evidence.

After review, preserve changes in conclusions and actual ownership so the next handover can follow the same route. A useful social media audit does not require collecting everything into one location. It lets the team understand where to look, what a record supports, what is still missing and who can take the next step. That is a practical result even when the most important finding is an unresolved condition that must remain visible.`)
],
links:[link('达人 Brief','creator brief','write-a-useful-campaign-brief'),link('达人活动状态管理方法','creator campaign status system','creator-campaign-status-system')],
table:{title:p('达人项目记录检索表','Creator campaign record-retrieval sheet'),headers:[p('记录对象','Record object'),p('检查问题','Review question'),p('缺口处理','Gap response')],rows:[
[p('Brief 与最终素材','Brief and final asset'),p('是否对应同一任务和版本','Do they refer to the same task and version?'),p('定位版本与适当确认人','Locate the version and appropriate confirmer')],
[p('使用与发布依据','Use and publication evidence'),p('是否支持本次拟议用途与实际对象','Do they support this use and publication object?'),p('保留未知，不自动扩大许可','Retain unknowns without expanding permission')],
[p('指标与口径','Metrics and definitions'),p('能否说明来源、窗口、单位与缺失','Are source, window, unit and missingness explained?'),p('取得适当说明，不把未知补零','Obtain a suitable explanation; do not fill unknowns with zero')],
[p('责任与修复','Ownership and repair'),p('谁处理哪个缺口，何时复核','Who handles which gap, and when is it reviewed?'),p('记录行动、来源和结论变化','Record action, source and changed conclusion')]],note:p('限定范围的编辑审阅表，不是财务审计、真实性认证或法律合规意见。','A scoped editorial review sheet, not a financial audit, authenticity certification or legal compliance opinion.')},
tool:{title:p('记录审计交接清单','Record-audit handoff checklist'),intro:p('先说清本次能够回答的问题，再说明证据和限制。','State the question this review can answer, then its evidence and limits.'),items:[p('确定项目、时间、问题与不覆盖事项。','Define project, period, question and exclusions.'),p('在查找前定义所需记录与各自用途。','Define required records and purposes before retrieval.'),p('区分已找到、无权访问、暂不可得、未找到和不适用。','Distinguish found, inaccessible, temporarily unavailable, not found and not applicable.'),p('核对版本、时间、对象与后续范围变化。','Check version, time, object and subsequent scope changes.'),p('只保留必要资料，避免共享密码或不必要副本。','Retain necessary information without shared passwords or unnecessary copies.'),p('为缺口安排负责人，并保存修复与结论变化。','Assign gap owners and preserve repair actions and changed conclusions.')]}
});
