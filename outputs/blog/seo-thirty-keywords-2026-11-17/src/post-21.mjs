import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:21,
summary:p('把共同事实、各平台表达与实际操作人分开管理，让多账号达人合作能准确更新，而不是把同一文件复制到所有地方。','Separate shared facts, platform expressions and actual operators so a multi-account creator campaign can change accurately instead of copying one file everywhere.'),
description:p('How to manage multiple social media accounts：围绕达人合作建立版本、权限、排期与回应责任，保留各账号表达并追踪事实更新。','Learn how to manage multiple social media accounts in creator campaigns through shared facts, distinct versions, scoped access and owned responses.'),
coverAlt:p('工作桌上排列不同颜色的空白项目卡片、相机与笔记本电脑','Blank colored project cards, a camera and a laptop arranged on a working desk'),
answer:p('管理多个社交媒体账号，先明确每个账号属于谁、承担什么达人合作任务，再管理事实、版本、发布与回应。品牌共同确认产品和商业条件，各账号按自己的内容形式表达；每个待发布版本有负责人和当前状态。排期工具可以减少操作，但不会自动确认授权、产品事实或变更影响。把这些责任写清，比单纯追求一次发布到所有账号更有用。','To manage multiple social media accounts, establish who owns each account and what it contributes to the creator campaign. Then coordinate facts, versions, publication and responses. The brand confirms shared product and commercial information while accounts express it in appropriate formats; each proposed release has an owner and current status. Scheduling tools reduce operations without independently confirming permission, product accuracy or the effects of a change. Defining those responsibilities is more useful than optimizing only for publishing everywhere at once.'),
sections:[
s('先画出实际合作账号','Map the accounts actually involved',`列出品牌、地区、产品系列和达人账号，说明每个参与本次合作的理由。一个达人发布账号不等于品牌团队可以直接操作的账号，也不等于其他同名频道。

账号身份地图指南帮助核对公开身份与合作联系。这里进一步记录谁制作、谁发布、谁处理后续问题，不把发现一个账号当成取得管理权限。

例如一个产品演示可能有达人原始视频、品牌补充说明和地区服务更新。三者各有任务，不必全部做同一件事。先删去没有实际作用的复制版本，团队才容易管理真正需要的内容。`,
`List brand, regional, product-series and creator accounts with a reason for each account's participation. A creator publishing account is not automatically an account the brand can operate, nor every channel using a similar name.

The account-identity mapping guide helps check public identity and collaboration contact. This workflow adds who produces, publishes and handles follow-up, rather than treat discovery as management permission.

A product demonstration might involve an original creator video, a brand explanation and a regional service update. Each has a purpose without doing the same work. Remove redundant versions before adding more scheduling complexity. An account register should include the actual public destination and responsible organization, making it possible to distinguish a regional adaptation from an accidental duplicate or an unrelated profile before anyone prepares a release.`),
s('共同事实只确认一次来源','Give shared facts an identifiable source',`产品名称、实际版本、适用条件和活动期限，应找到能确认的人。共同事实记录包含来源、适用范围与更新时间，而不是把“已经在聊天里说过”当成可执行依据。

如果地区条件不同，就分别记录。一个市场的库存或服务说明不能随复制自动变成其他市场承诺。达人可以讲述体验，但品牌仍负责提供准确业务事实。

记录只保留合作需要的信息。内容团队需要知道哪个版本可用，不需要得到客户个人资料或整套私人账户信息。资料范围明确，更新才容易被理解和使用。`,
`Product names, actual versions, applicable conditions and campaign dates need an identifiable person able to confirm them. A shared fact record includes its source, scope and update time instead of relying on something said somewhere in a conversation.

Record regional differences separately. Stock or service information for one market cannot become another market's promise through copying. A creator can describe experience while the brand remains responsible for accurate business facts.

Retain information needed for the assignment. Content staff need to know which version applies without receiving customer personal records or complete private-account information. A bounded record is easier to understand and update. It also helps a reviewer distinguish a change to the underlying offer from a creative wording preference, preventing a factual correction from being lost among comments about color, music or pace.`),
s('各平台版本保留自己的任务','Let each platform version do its own job',`同一事实可以进入不同内容，不代表需要同一句台词和同一段剪辑。短片、长视频、图文和直播需要不同信息安排，但都不能改变关键限定。

给版本一个可识别名称，记录语言、画幅、主要动作与目的地。不要只把最终文件称为 final，再用聊天顺序猜哪一个可以发。

多版本还应保留达人的实际表达。品牌可以明确事实和目标，不必让不同创作者听起来完全一样。审核看表达是否准确、任务是否完成，再判断是否需要新的拍摄，而不是用统一模板盖过贡献。`,
`The same fact can support different content without requiring identical lines and edits. Short video, long video, still posts and live sessions arrange information differently while retaining essential qualifications.

Give a version a recognizable name with language, format, main action and destination. Naming everything final leaves people guessing from message order which file can actually go out.

Multiple versions should preserve the creator's contribution. A brand can define facts and objectives without making different creators sound identical. Review accuracy and task completion before deciding whether another shoot is needed, rather than overlay a uniform template on useful expression. Where an adaptation removes a demonstration step, check whether the remaining content still supports the statement; a shorter file is not automatically an equivalent account version just because it uses footage from an approved original.`),
s('权限按实际任务分配','Assign access according to the task',`Meta 的 Instagram 商业资产说明把内容、消息、社区、广告与分析列为不同任务。这个官方结构说明操作权限可以按工作区分，不代表本文已经替读者配置了某个商业账户。

让回应评论的人、制作文件的人和管理广告的人拥有实际需要的权限。达人合作也不要求品牌交出整套密码，或要求达人交出私人账户凭据。

开始前确认谁能做什么，结束后检查不再需要的访问。权限设置与商业使用范围分开：能进入后台不等于已经获得任何素材的无限用途，不能把技术访问当成全部合作授权。`,
`Meta’s Instagram business-asset documentation distinguishes content, messaging, community, advertising and analysis tasks. That official structure supports separating operational responsibilities; this article has not configured a reader's business account.

Give comment responders, file producers and advertising operators the access their actual work needs. A creator partnership does not require the brand to surrender a complete password set or the creator to disclose personal-account credentials.

Confirm capabilities before work and review access that is no longer needed afterward. Keep platform permissions separate from commercial use: entering an account does not establish unlimited use of every asset. This makes offboarding a practical part of the assignment, with someone responsible for checking both remaining access and any continuing obligation to answer questions about published content.`,['metaIgTasks']),
s('别把工具支持当作统一权限','Check each tool rather than assume common access',`YouTube 的频道权限说明介绍无需共享 Google 密码的角色访问，同时不同角色和平台存在限制。把其他社交平台的做法直接套在频道上，可能让计划中的操作无法完成。

TikTok 的 2024 年 Studio 公告介绍创作、管理和分析，并区分应用与网页能力。这是有日期的产品背景，不是所有当前账号功能完全相同的保证。

因此，先确认本次账号与实际工具支持哪些动作，再安排负责人。不需要为了使用一个统一仪表盘而给出超范围权限，也不要在工具不支持时默认某项内容已经发布。`,
`YouTube’s channel-permissions guide describes role-based access without sharing a Google password, with role and platform limitations. Importing another platform's assumptions can leave a planned action impossible to perform.

TikTok’s 2024 Studio announcement describes creation, management and analytics while distinguishing app and web capabilities. This is dated product context rather than a guarantee that every current account has identical functions.

Confirm the actual account and tool capabilities before assigning an operator. A common dashboard does not justify excessive access, and an unsupported action should not be marked published. In a mixed-platform campaign, a person may prepare a version without having the ability to release it; record the handoff explicitly so an internal approval is not mistaken for a platform action that still requires another authorized owner.`,['ytPermissions','ttStudio2024']),
s('排期前检查依赖是否完成','Check dependencies before scheduling',`日历上的时间不是准备完成的证据。产品事实、达人确认、使用范围和实际入口应达到本次版本需要的状态，才进入发布安排。

如果某个地区延迟供货，可以调整该版本，不必让其他地区复制错误信息。排期表记录等待什么、由谁确认与下一步，不把所有延期简单归咎于内容团队。

社交排期工作指南可以帮助组织准备与发布。多账号合作还需要一份版本关系，知道一项事实变化会影响哪些已排期内容。工具提醒支持执行，实际判断仍由负责的人完成。`,
`A calendar time is not evidence of readiness. Product facts, creator confirmation, use scope and the destination should reach the state required for that version before release is scheduled.

A supply delay in one region can change its version without forcing other accounts to copy incorrect information. Record the dependency, confirmer and next action instead of attributing every delay to content staff.

The social-post scheduling workflow helps organize preparation and release. Multiple accounts additionally need version relationships so a factual change can be traced to affected scheduled content. Reminders support execution while the responsible people make the decision. This is particularly useful when the video is ready but its destination is not: the team can identify an unresolved receiving step instead of commissioning an unnecessary creative revision that leaves the same release dependency untouched.`),
s('发布后核对实际出现的版本','Confirm the version that actually appeared',`已审批、已排期和已上线是不同状态。发布后记录实际链接、账号和版本，检查画面、说明、商业关系与目的地是否对应。

不要只检查一个账号，再把同批其他内容自动写成通过。不同画幅、语言或手工操作都可能出现独立变化。实际内容与记录不同，就找负责该版本的人处理。

回应也按账号安排。达人讲述个人体验，品牌确认产品事实，地区团队处理当地服务。观众不需要理解内部组织图，但每个问题应能找到有能力继续处理的人。`,
`Approved, scheduled and published are different states. After release, record the actual link, account and version, checking the image, description, commercial context and destination together.

Do not check one account and automatically mark the rest complete. Formats, languages and manual operations can introduce independent differences. If the observed content diverges from the record, route it to the person responsible for that version.

Assign responses by account as well. Creators describe personal experience, brands confirm product facts and regional teams handle local service. Viewers do not need the internal organization chart, but their question needs someone able to continue. A release record should therefore identify a receiving owner as well as the person who pressed publish, especially where the publishing operator's involvement ends before campaign questions stop arriving.`),
s('用一次变化演练更新过程','Rehearse the workflow with one hypothetical change',`假设一个达人收纳系列涉及英语演示、品牌图文和地区补充。产品尺寸在拍摄前得到修正，事实负责人注明变化与适用版本，再通知三个版本的负责人。

英语脚本需要改数字，品牌图文需要换说明，地区补充若没有涉及尺寸，则记录检查后不需修改。不能为了证明忙碌而全部重做，也不能只改最先看见的文件。

这个假设没有实际客户结果。它展示如何从一项变化找到受影响内容，并保留检查理由。真正有价值的管理，是让下一位接手的人知道为什么某个版本可以继续，而不必重新猜测整个项目。`,
`Suppose an organizer partnership involves an English demonstration, brand still content and a regional supplement. Before filming, a dimension is corrected. The fact owner identifies the change and applicable product version, then notifies the three content owners.

The English script needs a number changed, the brand visual needs its explanation updated, and the regional item may need no edit if it does not mention dimensions. Record that review rather than remake everything to demonstrate activity or update only the first file encountered.

This hypothetical includes no client outcome. It shows how one change reaches affected content with a reason for the decision. Useful management allows the next person to understand why a version can proceed without reconstructing the project. The same method also handles an already published item, though its owner must decide the appropriate correction for the actual content and platform rather than assume replacing a local file changes the live post.`),
s('测量时保留账号与版本范围','Keep account and version scope in measurement',`多账号报告先保留平台、账号、内容类型、自然或付费与观察时间。相同指标名称也可能有不同定义，不要把所有观看或互动直接加成独立人数。

工作记录可以说明多少版本完成、哪些事实被修正、哪些问题被接住；表现记录说明观察到什么。没有完整业务证据，就不把操作效率写成销售提升。

How to manage multiple social media accounts 的核心，是让事实更新、平台表达、授权操作与实际回应形成可追踪关系。团队可以减少重复劳动，同时保留每位达人与每个账号真正需要的差异。`,
`Keep platform, account, format, organic or paid status and observation time in a multi-account report. Identical metric names can have different definitions, and adding views or interactions does not produce a count of distinct people.

Operational records can show versions completed, facts corrected and questions received; performance records show observed actions. Without the necessary business evidence, operational efficiency should not become a claimed sales increase.

The practical answer to how to manage multiple social media accounts is a traceable relationship between factual updates, platform expression, authorized operations and actual responses. This reduces repeated work while preserving meaningful differences between creators and accounts. Review can then identify a specific improvement, such as clarifying a receiving owner or changing a version name, rather than demand more automation without knowing which part of the collaboration is actually causing confusion.`)
,s('两种语言怎样处理同一变化','Handle one change across two languages',`假设品牌在英语说明中把“适合所有抽屉”改成“请先核对内部尺寸”。中文版本不能只保留旧承诺，再因为文件日期较新就标成通过。负责双语的人需要核对实际意思，而不只是比较文件名。

语言审阅同时确认产品名称、单位、语气和必要条件。当地服务信息有差异时，记录差异原因，不强求逐字相同。把品牌事实负责人和语言负责人分开，事实确认才不会被误当成完整翻译验收。

最终记录指出哪些版本改变、哪些入口需要同步，以及哪个语言仍在等待确认。这样不会因为一个主文件完成，就让所有语言自动进入发布状态。`,
`Suppose the brand changes an English statement from fitting every drawer to asking viewers to check internal dimensions first. The Chinese version should not retain the old promise and pass merely because its file has a newer date. A bilingual reviewer needs to compare meaning, not only filenames.

Language review also checks product names, units, tone and necessary conditions. Where local service differs, record the reason rather than require word-for-word identity. Separate the factual confirmer from the language reviewer so factual approval is not mistaken for complete translation acceptance.

The final record identifies which versions changed, which destinations need corresponding updates and which language is still awaiting confirmation. This prevents every language entering release status just because a master file is complete. It also gives the creator a precise revision request, rather than a vague instruction to make the local version match a source that has itself continued changing.`)
,s('交接结束后仍保留接收人','Keep a receiving owner after the handoff',`一个临时运营人员离开后，账号里的内容仍可能继续收到问题。交接时留下有效接收路径和已发布链接，而不是只交出未发布文件。

同时标明仍有效的使用范围与到期安排。品牌后续更改素材，不能仅因原操作人不在就假设无需再次确认；实际变化应由能判断的人接手。

如果合作无需继续维护，也应说明哪些内容保留、谁处理必要更正，以及访问如何结束。完成状态需要对应实际责任结束，不是把所有记录清空。`,
`A temporary operator can leave while published content continues receiving questions. Handoff should retain a working receiving route and live links rather than only unpublished files.

Identify any continuing use scope and expiry arrangement. A later brand edit does not become automatically permissible because the original operator is unavailable; someone able to assess the actual change needs responsibility.

If the partnership requires no continuing maintenance, still identify retained content, necessary correction handling and how access ends. Completion means responsibilities have reached a defined end, not that every record disappears. A concise closing note can explain outstanding product questions, an approaching replacement date or a destination controlled by another team, giving the ongoing account owner information they can use without reopening every production conversation.`)
],
links:[link('账号身份地图指南','account-identity mapping guide','instagram-accounts-collaboration-identity-map'),link('社交排期工作指南','social-post scheduling workflow','social-media-schedule-creator-launch-dependencies')],
figures:[{file:'multi-account-version-fact-map.svg',afterSection:4,alt:p('共同事实连接不同平台版本与各自负责人','Shared facts connect distinct platform versions with their responsible owners'),caption:p('共同事实保持一致，表达和操作按账号分别确认。','Keep shared facts consistent while confirming expression and operations per account.')}],
table:{title:p('多账号记录分四层','Four layers of an account record'),headers:[p('层次','Layer'),p('记录什么','Record'),p('更新责任','Update owner')],rows:[[p('事实','Facts'),p('版本、条件、来源','Version, conditions, source'),p('品牌事实负责人','Brand fact owner')],[p('内容','Content'),p('语言、形式、文件','Language, format, file'),p('对应创作者或编辑','Assigned creator or editor')],[p('操作','Operations'),p('权限、状态、链接','Access, status, link'),p('授权发布人','Authorized publisher')],[p('回应','Response'),p('问题与接收路径','Questions and receiving route'),p('能继续处理的人','Person able to continue')]],note:p('编辑管理建议，不是所有平台均提供的功能清单。','Editorial management guidance, not a feature list available on every platform.')},
tool:{title:p('多账号发布前核对','Before a multi-account release'),intro:p('让一个版本可以被准确接手。','Make a version accurately handoff-ready.'),items:[p('确认账号归属与实际任务。','Confirm account ownership and task.'),p('为共同事实保留来源。','Retain sources for shared facts.'),p('给每个平台版本明确名称。','Name each platform version clearly.'),p('按任务核对权限与负责人。','Check access and ownership by task.'),p('检查变化影响的排期内容。','Review scheduled content affected by changes.'),p('记录实际链接与回应路径。','Record actual links and response routes.')]}
});
