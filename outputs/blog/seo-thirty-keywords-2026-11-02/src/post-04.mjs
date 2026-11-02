import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:4,
summary:p('为发现、制作、授权与报告中的记录建立清楚连接，让不同达人平台之间的交接保留对象、版本和状态。','Connect discovery, production, permissions and reporting records so handoffs between influencer platforms preserve objects, versions and states.'),
description:p('达人平台之间如何交接数据：区分人物、账号、素材与发布，保留稳定标识、来源、版本、权限状态和下一动作。','Connect records across influencer platforms using stable identifiers, clear objects, source definitions, versions, permission states and next actions.'),
coverAlt:p('两位制作同事在明亮剪辑工坊的器材推车旁交接奶油色文件夹、黑色存储设备与珊瑚色素材袋。','Two production colleagues hand off a cream folder, black storage drive and coral asset sleeve beside an equipment cart in a bright editing workshop.'),
answer:p('达人平台之间的数据能否继续使用，关键在于交接后能否认出同一对象，并理解它的来源、版本和状态。把人物、平台账号、素材、发布与观察分别建记录，再用稳定标识连接；不要只凭显示名或文件名合并。本文提供跨系统交接方法，不是新的平台排名，也不假设所有软件都支持同一种导出或拥有相同数据权限。',
'Influencer platforms can support different parts of a workflow, but a handoff is usable only when the recipient can identify the object and understand its source, version and state. Keep people, platform accounts, assets, publications and observations distinct, connecting them through stable references rather than names alone. This article proposes an editorial handoff method, not another platform ranking. It does not assume identical export formats or data permissions across products. The test is whether another colleague can continue the work without reconstructing essential meaning from memory.'),
links:[link('平台证明与退出测试','platform proof and exit guide','best-influencer-marketing-platforms-proof-exit'),link('数据库记录指南','database record guide','influencer-database-freshness-and-record-design'),link('Campaign 证据日志','campaign evidence log','step-by-step-campaign-tracking-evidence-log')],
sections:[
s('先画清楚要交接什么','Identify the handoff before discussing integration',
`平台证明与退出测试讨论采购时怎样确认输出是否可用；本篇进一步处理日常工作中对象之间的连接。一次交接可能是研究人员交给外联同事，也可能是制作方交给广告或报告人员。先说明接收人接下来需要完成哪项决定。

写出当前系统、接收系统、必要输入、可接受输出与负责人。不能因为两个软件都声称支持导出，就假设它们对创作者、素材与活动使用同一含义。一个 CSV 能打开，只证明文件可读，还没有证明记录可以正确使用。

按具体任务选择最少必要字段。候选研究交接可能需要公开作品、理由与下一步；素材交接需要版本和适用条件；报告交接需要窗口与定义。不要把所有字段堆进一个巨大表格，再期待接收人自己判断哪项与当前工作有关。`,
`The platform proof and exit guide concerns usable outputs in procurement. This article examines connections between objects during everyday work. A handoff may move research to outreach, production to advertising, or observations to reporting. Start with the recipient’s next decision.

Identify the current system, destination, required input, acceptable output and owner. Two products supporting exports does not establish shared meanings for creator, asset or campaign. Opening a CSV establishes readability without proving that its records can be used correctly.

Select the minimum fields for the job. Candidate research may need public work, a rationale and next step; an asset handoff needs versions and use conditions; reporting needs windows and definitions. A giant export asking the recipient to discover relevance is not a defined handoff. Write the expected result in practical language, such as finding the approved version for a particular use, so the test checks work rather than the number of columns transferred.`),
s('人物、账号、素材、发布和观察分别建模','Separate people, accounts, assets, publications and observations',
`一个人可以有多个平台账号，一份素材可以形成多个发布，一条发布也可以有不同日期的数据快照。这些关系如果都压进一行 creator，会让接收人把账号变化、素材修订或指标增长当作同一件事。

数据库记录指南支持保存字段来源与时间。本篇建议进一步给每类对象保留内部稳定标识，同时记录来源系统中的标识与公开网址（适用时）。内部标识只用于组织工作，不证明平台所有权或对方真实身份。

显示名、账号名与文件名可以变；它们适合阅读和检索，却不宜单独作为跨系统合并依据。遇到同名、改名或重发，保留原记录，核对关系后再连接。无法确认时，宁可留两条待核关系，也不自动合并后丢失原始依据。

来源标识还需要命名空间。两个软件里都出现一个相同的短代码，不说明它们指向同一创作者；保存来源系统与原标识的组合，再连接内部记录。若系统更换了标识规则，维护旧标识到新标识的对应及变更原因，不为了让导入看起来简单就删除旧关系。`,
`A person may have several platform accounts; one asset may produce several publications; one publication may have snapshots captured on different dates. Compressing those relationships into one creator row makes account changes, asset revisions and metric growth look like the same event.

The database record guide supports field sources and dates. Add a stable internal reference for each object type, alongside its source-system identifier and public URL where applicable. An internal reference organizes work without proving platform ownership or identity.

Display names, handles and filenames may change. They support reading and search without becoming sufficient merge keys. For identical names, renamed accounts or republication, retain the original record and verify the relationship before connecting it. When unresolved, keep a pending connection rather than merging away its basis. A later correction is easier when the team can still see which source made each assertion and when it was recorded.

Source identifiers need a namespace too. The same short code appearing in two applications does not establish the same creator. Retain the source system together with its identifier, then connect it to the internal record. If an application changes its identifier scheme, preserve the old-to-new mapping and its basis rather than deleting history to simplify an import. A recipient should be able to distinguish a genuine source update from an accidental identifier collision. That distinction matters before merging, because a later correction may otherwise affect every asset or observation linked to the mistakenly combined record.`),
s('导出的字段需要保留原来的意思','Keep the export’s original meaning',
`Modash 报告导出说明描述按选定时期导出活动分析，并区分相关指标与连接条件。这是厂商公开文档，不是我们对本品牌账户的实测；导出某个总数不说明它就是平台原生值，也不说明所有交易字段在任何配置中都可用。

为需要交接的字段保存原列名、内部名称、单位、定义、窗口和空值含义。若接收系统把 reach 与 views 都放入 exposure，映射应先停下来解释差异，不能为了导入成功而静默替换。

可计算字段还应保留输入与公式版本。某个系统显示平均互动率，另一个可能按不同对象汇总；名称相同仍需核对。若不能保留原计算，交接应说明只接收了什么结果、它支持哪些决定、哪些需要回到来源复核。`,
`The Modash report-export guide describes campaign analysis exports for a selected period, with relevant metrics and connection conditions. This is vendor documentation, not a hands-on test of the brand’s account. Exporting a total does not make it a native platform observation or make every transaction field available in every setup.

Retain original column, internal name, unit, definition, window and empty-value meaning. If a destination maps both reach and views into exposure, explain the distinction before importing rather than silently substituting values for technical convenience.

For calculations, retain inputs and formula version. Average engagement rate may use different aggregation objects in two systems even when the name matches. If the original calculation cannot travel, explain which result was received, what it supports and what requires source review. A mapping that preserves limitations is more useful than a superficially complete dashboard whose labels imply evidence the export never contained.`,['modashExport']),
s('素材、版本与使用条件保持关联','Keep assets, versions and use conditions connected',
`Aspire 内容管理说明分别展示创作者、内容、表现、使用权与广告权限等信息，也描述下载。它支持将素材管理看成关系记录，而不只保存文件；不证明本品牌在软件中看到某状态后就已取得所有用途。

交接一份文件时，说明它是哪一版、对应哪份约定或确认，以及适用什么用途和期限。与授权有关的依据可以保存为适当引用，不需要把无关私人资料一并传给所有接收人。一个文件可以下载，与能否在新广告或新市场继续使用不同。

版本改了，旧确认不能默认覆盖全部变化。保留原版本与新版本关系，并说明需要谁重新检查。若使用状态仍待确认，接收人应看到待确认；不能把一个有颜色的标记在导出后变成没有范围的“approved”。`,
`The Aspire content-management guide distinguishes creator, content, performance, usage rights and ad rights, and describes downloads. It supports treating asset management as connected records rather than files alone. A visible software status does not establish every use for a particular brand.

With a file, identify the version, corresponding agreement or confirmation, intended use and period. Keep an appropriate evidence reference without distributing unrelated private information to every recipient. Downloadability differs from usability in another advertisement or market.

A revised version does not automatically inherit every confirmation of the earlier version. Preserve the relationship and identify the owner of any renewed check. Pending use conditions must remain pending outside the original system. A colored indicator should not become an unqualified approved value during export. The recipient needs enough context to decide what can happen next, including what remains outside the scope they received.`,['aspireHub']),
s('把链接标记当作连接线索，而不是人物主键','Use link tags as context rather than a person identifier',
`Google 来源标记说明描述来源、媒介与活动等维度。团队可以用适当标记连接发布入口与报告，但它们不单独证明谁实际观看、谁作出决定或哪个人造成交易。一个参数也不应承担所有人物与素材识别任务。

在内部保留链接标识与发布、活动的映射；参数中不加入姓名、邮箱或不必要的私人信息。改版落地页、更换链接或新增渠道时，记录变更，而不是让旧活动名字继续指向含义不同的对象。

链接传播可能超出最初发布位置。报告需要说明观察与归因规则，不能把某标记下的全部行为自动认作特定创作者独立贡献。若与订单或其他系统连接，使用实际被确认支持的关系，不凭看起来相似的名字推断。`,
`The Google traffic-source tagging guide describes dimensions such as source, medium and campaign. Appropriate tags can connect publication entry points with reporting without independently identifying every viewer, decision-maker or cause of a transaction. One parameter should not carry every person and asset relationship.

Retain an internal mapping between link references, publications and campaigns. Do not insert names, email addresses or unnecessary private data in parameters. When destinations, links or channels change, record the revision rather than reusing an old campaign name for a different object.

Links may travel beyond the original placement. Reporting needs observation and attribution rules instead of assigning every tagged action to one creator’s independent contribution. Connect orders or other systems only through relationships actually supported, not similar-looking labels. A useful mapping preserves the scope in which the tag was issued while allowing later distribution to remain a documented uncertainty.`,['gaTagging']),
s('让状态变化留下来源与负责人','Make state changes traceable to a source and owner',
`研究中、已联系、已回复、素材已收、可发布与可投广告，不是同一个进度条上的简单数字。不同系统可能各自维护部分状态，需要说明哪一个是该事项的实际来源，以及谁能更新。

把状态、依据、更新时间、负责人和下一动作一起交接。自动同步可以带来变化，但若含义不同，不能因为有连接器就认为已经解决。对外联系、接受条件或发布内容应按实际权限办理，不通过共享账号密码来模糊责任。

若接收人发现状态冲突，回到指定来源核对并保留修订记录。不能让最后一次导入无条件覆盖更可靠的事实。例如导出文件较新，不代表其中的许可依据比已经确认的约定更完整。

时间字段也应分开：事实确认时间、来源最后更新时间和导入时间各有含义。接收系统今天收到记录，不说明创作者今天重新同意了某用途。保留适用时区与必要日期，期限接近时让负责人回到当前依据核对；不要把每次同步都解释为许可自动续期。`,
`Researching, contacted, replied, asset received, publishable and usable in advertising are not interchangeable points on one numerical progress bar. Different systems may maintain parts of the workflow. Identify the actual source for each state and who can change it.

Transfer state, basis, update time, owner and next action together. A connector moving values does not resolve different meanings. Handle outreach, conditions and publication under actual permissions rather than blurring responsibility through shared passwords.

For conflicting states, return to the designated source and retain the correction. The last import should not automatically override more reliable evidence. A newer export, for example, does not establish a more complete basis for use than an already confirmed agreement. State ownership should let a recipient resolve a conflict rather than require everyone to treat every application as an equal authority on every question.

Separate confirmation time, source update time and import time. Receiving a row today does not mean the creator agreed to its use again today. Retain the relevant timezone and dates, and route approaching expiry to the owner and current evidence rather than treating synchronization as renewal. These distinctions also help explain a stale state: a recent import may contain an old observation. The team can then request the appropriate confirmation without assuming that every recently transferred row represents a newly verified fact or that a blank timestamp means the underlying condition never expires.`),
s('用一个有意保留未知的样本测试交接','Test a handoff with an intentionally unresolved record',
`不要只测试最完整的一条记录。准备适当示例，包含一个人多个账号、一个素材两个版本、一项待确认用途和一条缺失观察。它们是结构测试，不是真实创作者成绩，也不需要复制私人客户数据。

让没有参加原讨论的同事完成下一项工作，例如找到指定用途可讨论的素材版本，并说明哪些条件尚未确认。若他只能打开文件，却需要猜哪个版本已通过，说明交接仍缺少信息。

记录丢失、误映射与无法解释的字段，再决定由导出、映射或接收流程修复。一次测试通过只说明该范围可用，不证明全市场覆盖或任何未来版本都不会出错。保留可重复的小样本，后续变化时能按相同任务复查。`,
`Do not test only the cleanest record. Prepare an appropriate example with one person and several accounts, an asset with two versions, an unresolved use condition and a missing observation. These are structural tests, not real creator results, and need no private client dataset.

Ask a colleague outside the original discussion to complete the next task: find the version being considered for a specified use and explain what remains unconfirmed. Opening files while guessing the accepted version reveals an incomplete handoff.

Record lost relationships, incorrect mappings and unexplained fields, then decide whether export, mapping or receipt needs repair. Passing a test establishes that scope, not market-wide coverage or permanent compatibility with future versions. Retain a repeatable sample so later changes can be checked against the same task. Include a reason to stop when evidence is missing; otherwise a technically successful import may still encourage an action the underlying records do not support.`),
s('示例：同名文件不等于同一发布','Example: matching filenames do not establish one publication',
`假设同一份演示有品牌自有渠道版与创作者发布版，文件名相近，接收系统把它们合并。一个版本的字幕后来被修改，另一个仍按原版发布；如果只剩一行，报告就可能把错误版本与观察连接。

修复时保留素材与发布的独立标识，分别记录版本和关系，再把对应观察连接到实际发布。不要为表格整齐删除其中一项，也不把合并后的总数写成一个发布的表现。必要时保留之前映射为何更正。

这是编辑假设。它说明交接质量来自意义与关系，不能只用导出大小衡量。即使团队目前只有少量内容，清楚记录也能防止后续新增广告、翻译或报告时反复猜测。`,
`Suppose a demonstration has a brand-channel version and a creator-publication version with similar filenames, and the destination merges them. Subtitles later change in one while the other is published unchanged. One remaining row may connect observations to the wrong version.

Repair the separate asset and publication references, retain versions and relationships, and connect each observation to the actual publication. Do not delete one to tidy the table or report the merged total as one post’s performance. Preserve the reason for the correction when needed.

This editorial hypothetical shows that handoff quality concerns meaning and relationships rather than export size. Even a small library benefits when later advertising, translation or reporting no longer requires repeated guesses. It also explains why a filename convention can help retrieval without serving as the sole evidence that two records describe the same thing.`),
s('把可用交接交给下一位同事','Deliver a handoff someone can maintain',
`Campaign 证据日志可以帮助保留观察的来源与窗口。最终交接还应包括对象字典、标识映射、状态来源、版本关系、负责人和未完成问题。文件、说明与适当依据应能被接收人一起找到。

QuickKOL 可以支持 Brief 理解、相关达人与作品研究、联系准备；它不让所有平台数据自动变成同一口径。使用具体工具时，按实际输出与权限建立连接。

完成的标准是另一位同事能准确继续工作。保留未知与限制，是让这件事成立的一部分。`,
`The campaign evidence log supports observation sources and windows. A maintainable handoff also needs an object dictionary, identifier mapping, state authority, version relationships, owners and open issues. Keep files, explanations and appropriate evidence discoverable together.

QuickKOL supports brief interpretation, relevant creator and work research, and contact preparation. That does not harmonize every platform’s data automatically. Build relationships against actual outputs and permissions.

Completion means another colleague can accurately continue the work. Preserved unknowns and limitations are part of that usability.`)
],
table:{title:p('跨平台记录的最小对象区别','Minimum object distinctions across platforms'),headers:[p('对象','Object'),p('保留什么','Retain'),p('避免误合并','Avoid merging by')],rows:[[p('人物与账号','Person and account'),p('独立标识与核验关系','Distinct references and verified relationship'),p('显示名相同','Matching display name')],[p('素材与版本','Asset and version'),p('版本、来源与使用依据','Version, source and use basis'),p('文件名相似','Similar filename')],[p('发布与观察','Publication and observation'),p('对象、窗口、抓取时间与定义','Object, window, capture time and definition'),p('同一活动总名','Shared campaign title')],[p('权限与状态','Permission and state'),p('范围、依据、负责人和更新','Scope, basis, owner and update'),p('无条件的approved标签','An unqualified approved label')]],note:p('QuickKOL 编辑数据模型，不声明任何具名平台已实测或支持全部字段。','QuickKOL editorial data model; no claim that named platforms were hands-on tested or support every field.')},
tool:{title:p('跨系统交接检查','Cross-system handoff checks'),intro:p('让接收人理解对象与下一步，而不只收到文件。','Transfer meaning and a next step alongside the files.'),items:[p('任务、接收人和必要字段明确。','Specify task, recipient and necessary fields.'),p('人物、账号、素材、发布与观察分开。','Separate people, accounts, assets, publications and observations.'),p('原列名、单位、窗口与空值含义保留。','Preserve original fields, units, windows and empty-value meanings.'),p('版本与使用条件没有在导出中脱离。','Keep versions and use conditions connected.'),p('状态冲突有实际来源和负责人。','Give conflicting states a source and owner.'),p('用有缺失与待确认的样本做一次交接。','Test a sample containing missing and unresolved information.')]}
});
