import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:24,
summary:p('CreatorIQ 导出文件只是交接的一部分。负责人还需要知道字段定义、数据来源、窗口、过滤条件和缺失值含义，才能继续达人项目。','A CreatorIQ export is only part of a handoff. Owners also need definitions, provenance, windows, filters and missing-value meanings to continue creator work.'),
description:p('Creator IQ 项目数据交接指南：核对导出能力、标识与定义版本，保留原始和整理文件，说明缺失值与访问边界，不把报表当作完整效果证明。','Plan a CreatorIQ data handoff with export scope, identifiers, definition versions, original files, missing values and access boundaries rather than a spreadsheet alone.'),
coverAlt:p("字段、定义和限制三个色块组成的数据交接图","Three blocks labeled fields, definitions and limits form a data-handoff graphic"),
answer:p('把 CreatorIQ 项目交给下一位负责人时，不只交一张报表。确认当前账号可导出的对象与格式，再附上字段定义、来源、统计窗口、筛选条件、标识关系和未知事项。官方 MeasureIQ 资料描述了 CSV、Excel 与 Parquet 导出，但本篇未登录、实测计划能力或导出任何客户资料。可打开的文件不等于完整、可比较或已完成效果验证；接手者应能找到原始记录、理解整理步骤，并知道哪些结论仍不能支持。','A CreatorIQ campaign handoff needs more than a report. Confirm what the actual account can export and attach definitions, provenance, reporting windows, filters, identifier relationships and open issues. Official MeasureIQ material describes CSV, Excel and Parquet exports, but no account, plan capability or customer export was tested for this article. A file opening successfully does not establish completeness, comparability or validated impact. The next owner should be able to find original records, understand transformations and identify unsupported conclusions.'),
sections:[
s('先问接手者需要继续什么工作','Start with the work the next owner must continue',`交接可能为了继续内容审阅、跟进未发布作品、准备结案报告或核对费用。不同工作需要不同对象，不应先导出尽可能多的资料，再要求接手者自己找到用途。

达人项目状态方法可以帮助列出当前任务、负责人和待处理事项。数据应服务这些动作，例如某个作品还缺哪项记录，而不是只呈现一个看似完整的总分。

说明交接范围：哪批合作、哪个时间段、哪些渠道与工作状态。若部分内容由其他系统管理，也应指出连接方式和责任人。这样接手者能判断文件覆盖什么，不会把一次有限导出误认为整个项目和全部商业条件。`,
`A handoff may support continued content review, unpublished-work follow-up, a closing report or fee reconciliation. Each task needs different objects. Do not export as much as possible first and leave the next person to discover a purpose.

The creator campaign-status method helps identify current tasks, owners and unresolved items. Data should support those actions, such as the missing record for a particular piece, rather than merely display a complete-looking score.

State the campaigns, period, channels and working states covered. If another system manages part of the project, identify its connection and responsible owner. The recipient can then assess the file’s coverage instead of mistaking one bounded export for the entire program and every commercial condition. Defining the continuation task also gives the handoff a stopping point: it needs enough appropriate evidence for the next decision, not every field that happens to be available in a platform.`),
s('核对实际可用的导出能力','Check the export capability actually available',`CreatorIQ 的 MeasureIQ 说明列出 CSV、Excel 与 Parquet 导出，用于后续分析或其他报告环境。这里是供应方产品资料，不证明某一客户当前计划、权限或历史资料都包含这些能力。

本次读取了官方检索可见的相关正文，产品页面直接访问未能完整获取，也没有登录真实工作区。实际操作前，应由有权限人员检查当前可导出对象、字段与格式，不根据宣传页想象所有内容都可一键迁出。

如果目标只是接手一批合作，先确认最小可用文件和必要关联。格式越多并不代表交接越好；没有定义的多个文件，可能只是把同一不确定复制了几份。`,
`CreatorIQ’s MeasureIQ description lists CSV, Excel and Parquet export for subsequent analysis or reporting environments. This is provider product information, not evidence that a particular customer’s current plan, permissions and historical material include every capability.

The relevant official search-indexed text was reviewed; direct access to the product page could not be fully retrieved, and no actual workspace was accessed. Before acting, an authorized user should inspect the available objects, fields and formats instead of assuming the whole program can be moved with one button.

For a bounded campaign handoff, confirm the minimum useful file and required connections first. More formats do not necessarily make the transfer better. Several files without definitions may simply reproduce the same uncertainty. A practical export is the one the receiving owner can interpret and use for the stated task, with unavailable scope clearly documented rather than guessed.`,['ciqExport']),
s('保留项目、创作者和内容之间的关联','Preserve campaign, creator and content relationships',`显示名称可能改变，也可能多个对象相似。适当标识能帮助连接项目、创作者、发布内容和费用记录，但需要说明各自代表什么，不把不同来源的编号当作天然可互换。

例如同一创作者可以参与多个项目，同一作品也可能有多种用途。连接时应核对实际关系，不仅凭用户名、文案相似或金额接近就合并。保留无法匹配的记录，交给适当负责人复核。

交接说明应包括哪些关联已确认、哪些仅是可能匹配。不要为了让表格没有空白而强行配对。错误连接会让后续团队把费用算错对象，或把一条内容结果归到另一项合作，外观整齐并不能减少这种问题。`,
`Display names may change or resemble one another. Appropriate identifiers can connect campaigns, creators, publications and fee records, but explain what each represents. Numbers from different sources are not automatically interchangeable keys.

One creator may participate in several projects, and one piece may have several uses. Verify the actual relationship instead of merging records by handle, similar copy or a matching amount alone. Retain unmatched records for an appropriate owner to review.

The handoff should distinguish confirmed connections from possible matches. Do not force a pair merely to remove a blank cell. An incorrect connection can assign a fee to the wrong object or attribute one piece’s result to a different collaboration. A tidy appearance does not reduce that error. Keeping the unresolved relationship explicit is more useful than a fully populated sheet whose apparent completeness depends on assumptions nobody can later reconstruct.`),
s('字段名称之外，还要保留定义版本','Keep definition versions as well as names',`CreatorIQ 的指标定义更新说明介绍了展示与观看等标签调整，并提到历史数据相应对齐。它说明同一个报表体系也可能随定义更新，不意味着所有平台、时期与字段从此天然一致。

因此交接应记录获取时间、当时适用定义，以及是否进行了后续整理。不要看到名称接近，就把两个时期的字段无条件拼在同一趋势线上。本篇不复述其中所有平台阈值为当前通用规则。

如果新旧文件有差异，先核对定义、来源和过滤条件，再讨论表现变化。定义变化是需要说明的记录条件，不应被误写成创作者忽然变好或变差。保留对应说明，能减少团队以后重复排查同一问题。`,
`CreatorIQ’s metric-definition update describes changes to labels such as views and engaged views and mentions retroactive alignment. It shows that a reporting system can change definitions. It does not make every platform, period and field inherently identical.

Retain retrieval time, the definition applicable then and any subsequent transformation. Similar labels are not enough to combine two periods into an unconditional trend. This article does not repeat all platform thresholds from that announcement as current universal rules.

If old and new files differ, inspect definitions, sources and filters before discussing performance change. A definition change is a recording condition to explain, not evidence that a creator suddenly improved or deteriorated. Retaining the explanation prevents the team from repeatedly investigating the same difference. It also lets a reader understand why a historical number may no longer match a later screen without assuming that either record was fabricated.`,['ciqDefinitions']),
s('把缺失、零和不适用分开','Separate missing, zero and not applicable',`空白可能是资料未取得、权限不适用、尚未同步或该字段不适合此对象。不能全部改成零，也不能都解释为没有表现。用适当状态说明缺失的原因与是否仍待确认。

同样，手动输入、平台来源和估计值应有各自来源标签。供应方整合后的一个字段，不代表所有行都经过相同取得路径。读者需要知道哪些比较存在限制。

如果接手者只看到一个汇总数，就容易忽略覆盖变化。保留纳入记录的范围和必要的排除说明，让总量与实际对象对应。无法确定的地方明确保留，不用漂亮图表隐藏缺失，也不要把资料不完整等同于某个创作者不配合或不可信。`,
`A blank may mean unavailable data, inapplicable permission, pending synchronization or a field unsuitable for the object. Do not replace every blank with zero or interpret each as no performance. Use appropriate states for the reason and whether confirmation remains pending.

Manual entries, platform-sourced data and estimates likewise need distinct provenance. One consolidated provider field does not establish an identical retrieval route for every row. Readers need to understand the comparison limits.

A recipient seeing only a total may miss changing coverage. Preserve the included population and necessary exclusion notes so the aggregate corresponds to its actual objects. Retain uncertainty directly instead of hiding missing values behind a polished chart. Incomplete information should not automatically become a judgment that a creator is uncooperative or unreliable. The handoff concerns what the record can support, including gaps that may originate in the system or project design rather than in the person being reported on.`),
s('记录窗口、时区与筛选','Retain windows, time zones and filters',`区间统计和累计统计不能直接互换。确认报告是按发布时间、统计事件时间还是其他规则筛选，并说明日期边界与适用时区。相同起止日期不一定表示两个文件包含相同对象。

如果一份报告只含已发布内容，另一份包含已分配但未发布创作者，行数差异不必然是丢失。先比较筛选，再核对对象。不要为了让总数相同删掉无法解释的行。

保留筛选说明和导出日期，接手者才能在之后尝试重现相同范围。重现不一定得到永久不变的计数，因为数据仍可能更新；关键是能够解释当时选择了什么，以及后续结果为何可能不同，而不是承诺所有系统显示始终一致。`,
`Interval and cumulative statistics are not interchangeable. Identify whether filtering uses publication time, event time or another rule, with date boundaries and applicable time zone. Matching start and end dates do not necessarily mean matching objects.

If one report includes published content while another includes assigned creators without posts, a row-count difference need not be data loss. Compare filters before reconciling objects. Do not delete unexplained rows merely to make totals equal.

Retain filters and export time so the recipient can attempt to reproduce the scope later. Reproduction may not yield permanently unchanged counts because data can update. The objective is to explain the original selection and why later results may differ, not promise that every system will always agree. This makes reconciliation a specific task rather than a contest to decide which attractive dashboard total must be the only correct one.`),
s('保留原始文件与整理步骤','Retain the original and transformation steps',`适当保留原始导出，再制作工作副本进行命名、格式与关联整理。记录哪些列被转换、哪些行被排除、哪些计算由团队添加，不把自己算出的字段伪装成平台直接提供。

例如把日期统一、拆分多个对象或合并字段，都可能改变后续解释。步骤要能被接手者理解，不依赖原作者记得每一次手动操作。必要时给出少量不含敏感信息的示例。

原始文件也不等于绝对事实，只是当时取得的记录。保留它是为了可追溯，而不是免除来源与定义检查。整理后应比较合理的行数、标识和关键字段，发现无法说明的差异时暂停相关结论，不急着用最终汇总图掩盖。`,
`Keep an appropriate original export and make a working copy for naming, formatting and relationship preparation. Document converted columns, excluded rows and team-added calculations. A derived field should not appear to have come directly from the platform.

Date normalization, splitting objects and merging fields can affect interpretation. The recipient should understand the steps without relying on the author to remember every manual action. A small nonsensitive example may help explain a transformation.

The original file is not absolute truth either; it is a record retrieved at a point in time. Retaining it supports traceability without removing the need to inspect provenance and definitions. After preparation, reconcile appropriate row counts, identifiers and key fields. If a difference remains unexplained, pause conclusions affected by it instead of using a final aggregate chart to conceal the gap. A reproducible preparation process is more valuable than a sheet only its original author knows how to repair.`),
s('把访问和资料范围交接好','Hand off access and information scope',`FTC 的企业信息保护指南强调按实际需要保留信息并限制访问。接手负责人需要相关项目数据，不代表需要全部私人联系方式、财务信息或账号秘密。

导出前确认哪些字段适合本次用途，接收位置和可见人员是否合适。可以用工作标识关联对象，不把完整个人资料放进每个报告附件。不能通过复制全部文件替代权限检查。

若平台访问随角色变动，应由有权限负责人处理当前设置。本篇没有登录、改权限或移动真实资料。交接文档可列系统、角色和未完成访问事项，而不包含密码与密钥。这样下一位负责人能继续工作，也不会因为文档被正常转发就意外扩大资料范围。`,
`FTC’s business information-security guide emphasizes retaining needed information and limiting access. A receiving campaign owner may need relevant project data without requiring every private contact detail, financial record or account secret.

Before export, confirm fields appropriate for the purpose, the receiving location and permitted viewers. Working identifiers may connect objects without placing complete personal records in every report attachment. Copying all files is not a substitute for access review.

If platform access changes with roles, an authorized owner should handle current settings. No login, permission change or real-data movement was performed for this article. The handoff can identify system, role and open access tasks without passwords or keys. That lets the next person continue without a normal document forward inadvertently expanding the audience for sensitive material. Appropriate scope is part of a usable handoff, not an obstacle to producing one.`,['ftcPrivacy']),
s('用假设文件检查交接','Rehearse the handoff with a hypothetical file',`假设一个配件项目导出 12 条内容记录，其中 10 条有可用指标，2 条仍待取得。数字仅为练习，不是客户资料。不能把两条空白补零后，宣称 12 条已完成同口径效果评估。

交接应说明 12 条分别是什么、10 条数据的定义与窗口、2 条缺口由谁处理，以及其他制作或费用状态是否在另一位置管理。工作副本的调整保留记录。

接手者能回答这些问题，才算真正获得继续工作的条件。文件格式正确只是其中一部分。若某项来源还不清楚，可以在交接中明确列出，不必为了显示完成而编造解释或把不确定状态写成已核验。`,
`Suppose an accessory campaign export contains 12 content records, with usable metrics for 10 and data still pending for two. These are practice figures, not customer data. Filling the blanks with zero cannot establish completed, comparable assessment of all 12.

Explain what the records represent, the definitions and windows for the 10, who owns the two gaps and whether production or fee states are managed elsewhere. Retain transformations in the working copy.

The recipient needs those answers to continue. Correct formatting is only part of that readiness. If a source remains unclear, list it explicitly rather than invent an explanation or rename uncertainty as verified. The hypothetical exercise is useful because it tests the meaning of completeness: every expected object can be accounted for even when every field is not yet available. A responsible handoff should make that distinction visible.`),
s('让交接说明支持下一次判断','Make the handoff support the next decision',`最终说明应回答：覆盖什么、数据从哪里来、怎样整理、哪些定义适用、还缺什么以及谁继续处理。指标决策指南帮助避免把一份导出表直接当作完整业务结论。

不要把供应方产品描述扩张为 QuickKOL 的功能。QuickKOL 可用于理解 Brief 和达人研究，具体项目导出、接入和数据处理仍按实际所用系统核对。本篇也不是 CreatorIQ 定价或采购比较。

一份好的交接让下一位负责人可以复查来源、继续任务并谨慎解释结果。它不依靠所有格子都填满，而依靠事实、整理动作和未知都有明确位置。如此即使工具、角色或字段之后变化，团队仍能知道原记录当时表达了什么。`,
`The final note should answer what is covered, where data originated, how it was prepared, which definitions apply, what is missing and who continues. The metrics decision guide helps avoid treating an export as a complete business conclusion.

Do not expand a provider description into a QuickKOL capability. QuickKOL can support brief interpretation and creator research; project export, integration and processing need verification in the system actually used. This article is not a CreatorIQ pricing or procurement comparison.

A good handoff allows the next owner to inspect sources, continue tasks and interpret results cautiously. It depends less on filling every cell than on giving facts, transformations and unknowns explicit places. If tools, roles or fields later change, the team can still understand what the earlier record meant. That continuity is the useful outcome, without implying that one export has proved all collaboration impact or eliminated the need for further review.`)
],links:[link('达人项目状态方法','creator campaign-status method','creator-campaign-status-system'),link('指标决策指南','metrics decision guide','social-media-metrics-creator-decision-tree')],
table:{title:p('数据交接的最小说明','Minimum explanation for a data handoff'),headers:[p('内容','Item'),p('要保留','Retain'),p('解决的问题','Question addressed')],rows:[[p('范围','Scope'),p('项目、渠道、对象与窗口','Campaigns, channels, objects and window'),p('文件覆盖什么','What the file covers')],[p('定义','Definition'),p('来源、字段与版本','Source, field and version'),p('数字表示什么','What the number means')],[p('整理','Preparation'),p('原始文件和转换记录','Original and transformation record'),p('团队改变了什么','What the team changed')],[p('缺口','Gap'),p('未知、负责人和下一步','Unknown, owner and next step'),p('怎样继续工作','How work continues')]],note:p('编辑交接框架；没有登录 CreatorIQ、验证客户计划或导出真实项目资料。','An editorial handoff framework. No CreatorIQ login, customer-plan test or real campaign export was performed.')},
tool:{title:p('发送项目导出前','Before sending the campaign export'),intro:p('让文件有范围、定义和继续路径。','Give the file scope, definitions and a continuation path.'),items:[p('确认接手者需要继续的工作。','Confirm the work the recipient must continue.'),p('核对实际可用字段和格式。','Check actual fields and formats.'),p('保留对象关联、定义与窗口。','Retain relationships, definitions and windows.'),p('区分零、缺失与不适用。','Separate zero, missing and not applicable.'),p('记录整理步骤并限制资料范围。','Document transformations and limit information scope.'),p('给每个缺口明确后续负责人。','Assign an owner to each gap.')]}
});
