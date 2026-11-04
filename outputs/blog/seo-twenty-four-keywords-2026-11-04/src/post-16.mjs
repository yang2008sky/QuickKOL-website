import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:16,
summary:p('把Socialblade公开资料交给同事时，保留账号、来源、观察时点、指标与估算状态，让接收者能够复查并理解结论边界。','When handing Socialblade public information to a colleague, retain account, source, observation time, metric and estimate state so the recipient can revisit the evidence and its limits.'),
description:p('Socialblade数据交接指南：记录来源快照、时间窗口、计数与估算，附中英文16字段CSV，不把截图当完整报告。','Hand off Socialblade evidence with source snapshots, time windows, counts and estimate states, using a bilingual 16-field CSV and traceable revisions.'),
coverAlt:p('编辑图形以不同颜色的纸片表示来源、口径、时点与交接，用一条连续折线连接，不含实际账号数据。','An editorial graphic connects colored paper panels for source, definition, time and handoff, without actual account data.'),
answer:p('交接Socialblade资料时，交付的不应只是一个裁剪数字。至少让接收者知道哪个账号、哪个来源、何时观察、统计窗口与指标定义，以及哪些值是估算或仍有缺口。再区分服务显示、编辑计算和实际项目资料，保留修订记录。本篇承接公开统计阅读，重点是跨同事传递证据，附16字段双语CSV。模板不连接Social Blade、不读取私人后台、不生成账号评分，也不把公开变化自动归因给某个合作。',
'A Socialblade handoff should contain more than a cropped number. The recipient needs the account, source, observation time, measurement window and metric definition, including which values are estimated or incomplete. Separate provider displays, editorial calculations and actual project material, retaining revisions. This guide builds on public-statistics reading and focuses on transferring evidence between colleagues, with a bilingual 16-field CSV. The worksheet connects to no Social Blade service, reads no private analytics, produces no account score and assigns no public change automatically to a collaboration. Its purpose is to make the evidence understandable when the original researcher is no longer present to explain it.'),
links:[link('公开统计阅读指南','public-statistics reading guide','social-blade-public-channel-statistics'),link('指标定义指南','metric-definition guide','engagement-rate-formula-metric-contract'),link('试点比较设计指南','pilot-comparison design guide','benchmarking-creator-pilot-comparison-design'),link('项目测量指南','campaign-measurement guide','creator-campaign-measurement')],
sections:[
s('先说明接收者需要作什么判断','State which judgment the recipient needs to make',
`同一份资料可能用于公开历史背景、计划讨论或后续补充调查。交接前先写用途，避免接收者把背景观察当成某次项目的完整结果。

公开统计阅读指南解释快照、更新与估算。本篇进一步处理传递：来源一旦离开原页面，标签、日期与限制也应跟着保留。

给交接说明一个具体问题，例如“核对这一时期可用的公开增长记录”，而不是笼统写“达人数据”。问题明确，才能判断哪项信息必要。

也说明当前结论处于什么状态：只是找到页面、已经核对对象、取得对应窗口，还是仍需资料。接收者不应靠猜测理解完成程度。

整理资料本身不会扩大证据能力。若来源只支持背景观察，就按此交付，不因为文件变成正式表格，就把它改称已验证商业表现。`,
`The same material may support public historical context, planning or a follow-up question. State its purpose before handoff so the recipient does not treat background observation as the complete result of a project.

The public-statistics reading guide explains snapshots, updates and estimates. This article addresses transfer: when information leaves the original page, labels, dates and limits should travel with it.

Give the note a particular question, such as checking the public growth record available for this period, rather than calling it creator data. A clear question determines what information is necessary.

Describe the current state too: page found, identity checked, corresponding window obtained or evidence still missing. The recipient should not have to infer completion from the document’s appearance.

Organizing evidence does not expand what it can establish. If a source only supports background observation, deliver it that way rather than rename it verified commercial performance because it now appears in a formal table. Naming the decision also helps the next colleague avoid requesting unrelated information simply to make the package look more comprehensive.`),
s('让账号与来源可以被重新找到','Make the account and source findable again',
`保留平台、准确账号标识、原始账号链接与服务页面链接。显示名称和头像可以帮助理解，却不代替能够指向具体对象的资料。

如果多个账号名称相似，说明采用哪个及依据。地区、语言或分店页面应保持其实际范围，不把同品牌所有页面合并成一个受众。

截图可以帮助保留观察，但最好保留相关标题、日期与标签。仅一张被裁掉上下文的增长数字，往往无法让接收者判断对象和窗口。

复制笔记与报告时，也保留出处之间的关系。有人引用第三方文章、文章又引用服务页面时，明确哪个是原始显示，哪个是他人的解释。

找不到的来源保持未找回，不拿相近账号补位。这样接收者能决定继续查找、请求补充或暂不采用，而不是在错误对象上继续分析。`,
`Retain platform, precise account identifier, original account URL and provider-page URL. A display name and avatar help understanding without replacing information pointing to the exact object.

Where names are similar, explain which account was selected and why. A regional, language or branch page retains its actual scope instead of becoming the combined audience of every page sharing a brand.

A screenshot can preserve observation, preferably with relevant heading, date and labels. A cropped growth number often cannot tell the recipient which object and window it describes.

When copying notes into a report, preserve source relationships too. If someone cites an article that cites the service, distinguish the original display from another author’s interpretation.

A missing source remains unresolved rather than be replaced with a similar account. The recipient can then choose further lookup, a request or non-use instead of analyzing the wrong object. This small amount of provenance can save a later reviewer from reconstructing the entire search, while still keeping the package limited to the information needed for its stated purpose.`),
s('把观察时点与统计窗口分别记录','Record observation time separately from the measurement window',
`Social Blade数据差异说明解释采集当前数字与知道行为发生时点的区别。Social Blade更新频率说明也提醒，更新节奏会变化，部分记录可能合并数日。

交接因此应同时写统计窗口与观察时点，并说明时区。一个是资料打算描述的期间，另一个是你实际看到它的时候；两者不能只保留一个模糊日期。

假设周一与周三各保存一次快照，差值涉及两个观察之间的变化。没有进一步资料时，不能把差值平均分成每天实际发生的增长。

指标定义指南帮助把对象、单位与窗口对应。若一项只有累计总数，另一项来自特定时期报告，先说明差异，再决定是否适合放在同一比较中。

没有独立记录的日期留空并说明原因。不用插值填补以后，再让接收者以为这些是服务逐日实际观察值。`,
`The Social Blade data-difference FAQ distinguishes collecting current totals from knowing when activity happened. The Social Blade update-frequency FAQ also notes variable collection, including records that can group several days.

A handoff should therefore include measurement window, observation time and time zone. One describes the intended reporting period; the other records when the researcher actually saw the information. A vague date does not replace both.

Suppose snapshots are saved Monday and Wednesday. Their difference concerns change between observations; without further evidence, it cannot be averaged into actual daily growth.

The metric-definition guide aligns object, unit and window. If one value is cumulative and another comes from a period report, explain the difference before deciding whether they belong in one comparison.

Leave dates without distinct observations unresolved with a reason. Do not interpolate and let the recipient believe those are daily values actually collected by the provider. If planning needs an estimate, keep it labeled and separated from observation so another colleague can tell which entries were seen and which were constructed.`,['sbDifference','sbUpdates']),
s('估算标签与计算过程一起交付','Deliver estimate labels with their construction',
`Social Blade收入估算说明明确其性质与变现假设。转交时保留“估算”，不要把列名缩短成“收入”，让接收者误以为来自真实账目。

同样区分服务显示与自己的计算。若从两次记录计算变化，写明输入、窗口与方法，不把派生数字说成服务另有提供的真实日记录。

估算不等于真实收入、利润或合作报价。若项目需要其中某项资料，应提出相应问题，而不是继续放大现有估算的含义。

表格里可以使用明确状态，例如“来源标为估算”“编辑计算”“未确认”。不要让空白状态默认变成已经验证，或用颜色替代接收者需要读懂的文字。

所用假设改变时，保留版本与原因。新版本比旧版本更晚，不独立证明它更接近真实；其依据仍需让接收者可以理解。`,
`The Social Blade earnings-estimate FAQ explains the estimate and monetization assumptions. Retain estimated during transfer rather than shorten the column to income and imply that it came from actual accounts.

Also separate provider-displayed values from your calculations. If deriving a change from two records, identify inputs, period and method instead of presenting the result as a daily observation independently supplied by the service.

An estimate does not establish actual income, profit or a sponsorship quote. If the project needs one of those, ask the corresponding question rather than stretch the estimate’s meaning.

Use explicit states, such as provider estimate, editorial calculation or unconfirmed. A blank state should not default to verified, and color alone should not replace words the recipient needs.

When an assumption changes, retain version and reason. A later version is not independently more accurate merely because it is newer. The recipient still needs an understandable basis. Preserving construction is especially useful when a report is reused without its original author, because the visible financial formatting can otherwise conceal how conditional the number was.`,['sbEarnings']),
s('需要后台补充时，限定实际问题','Limit first-party follow-up to the actual question',
`YouTube高级模式说明介绍不同视频、分组、时期与筛选报告。适当后台资料可以回答公开快照无法说明的问题，但仍需保留其实际口径。

由合适账号负责人提供可分享的相关报告，说明日期与筛选。不要为了让资料包显得丰富，索取与当前任务无关的个人或商业信息。

项目测量指南帮助对应合作目标与证据。某次内容的结果、平台总增长和组织销售，可能需要不同资料，不能互相代替。

把补充资料标为相应来源，不与公开统计揉成一列后删除区别。若数字不一致，先检查对象、时期和定义，再判断需要何种解释。

本篇没有登录后台或下载真实账号报表。它提供交接设计，实际项目仍需适当人员取得并核验允许分享的资料。`,
`The YouTube Advanced-mode guide describes reports across videos, groups, periods and filters. Appropriate first-party material can answer questions a public snapshot cannot, while retaining its own definitions.

Have a suitable account owner supply a shareable relevant report with dates and filters. Do not request unrelated personal or business information merely to make a package appear richer.

The campaign-measurement guide connects collaboration objectives with evidence. A particular piece’s result, platform growth and organizational sales may require different sources rather than interchangeable figures.

Label supplemental material by source instead of merging it into one indistinguishable column with public statistics. For a mismatch, inspect object, period and definition before deciding which explanation is needed.

This article logs into no analytics account and downloads no actual report. It supplies a handoff design; appropriate people still obtain and verify information they may share. Access to first-party data does not erase its limits, and a report should remain interpretable even when only the relevant fields, rather than the entire account, are supplied.`,['ytAdvanced']),
s('用16字段CSV保留必要上下文','Use the 16-field CSV to retain necessary context',
`下载模板记录标识、平台、账号、两个来源链接、指标、定义、单位、窗口起止、时区、观察时点、值、估算状态、限制与下一位负责人，共16个字段。

每条记录对应一个明确对象与指标。不同窗口或不同来源可以分行，避免在一个单元格混写多个数字，使接收者难以判断哪项有效。

空白行用于实际填写，不提供虚构账号或已经确认的样本值。未知字段保持未知，并在限制栏写明原因，不因为模板有位置就猜测答案。

试点比较设计指南适合在收集前决定哪些条件重要。此处模板则帮助交付已经取得的记录，二者用途可以配合，但都不会自动生成结论。

CSV不连接服务，也不代替原始页面、报告或适当交接说明。它让必要上下文有固定位置，同时保留来源本来的边界。`,
`The downloadable worksheet has 16 fields: record identifier, platform, account, two source URLs, metric, definition, unit, window start and end, time zone, observation time, value, estimate state, limits and next owner.

Each row concerns an explicit object and metric. Different periods or sources can use separate rows rather than place several values in one cell, leaving the recipient unsure which applies.

Blank rows are for actual completion, without fictional accounts or preconfirmed sample values. Unknown fields remain unknown with a reason under limitations; a template having a space is not a reason to guess.

The pilot-comparison design guide helps decide important conditions before collection. This worksheet helps transfer records already obtained. They can work together without automatically generating a conclusion.

The CSV connects to no service and replaces neither original pages, reports nor an appropriate explanatory note. It gives necessary context a consistent place while preserving the source’s scope. A reviewer should be able to follow a row back to its evidence instead of needing to trust the spreadsheet’s presentation as independent verification.`),
s('修订时保留原值、原因与新状态','Retain original value, reason and new state when revising',
`如果后来发现账号对应错误、窗口不一致或标签被遗漏，先记录具体问题，再发布修订。保留原版本与说明，不默默覆盖以后让接收者不知道决定依据曾经改变。

更正可以说明哪些行受到影响，以及哪些结论需要重看。一个字段改变，不一定使整份资料完全无用，也不能假定所有解释都继续成立。

假设旧表把估算列写成实际收入，修订应恢复正确标签并通知使用该说明的适当同事。这里是编辑建议，本篇没有向任何人发送消息。

交接中写实际完成状态：修订已准备、已交付或仍待核对。不要用一个新的版本号代替真实处理记录。

有了可追溯变化，后续同事能理解为什么某次决定采用当时资料，以及现在需要怎样调整，而不用反复猜测作者意图。`,
`If later review finds a wrong account match, unequal window or omitted label, record the particular issue before revising. Retain the earlier version and explanation instead of silently overwriting evidence behind an earlier decision.

A correction can identify affected rows and conclusions needing another look. One changed field need not invalidate everything, nor establish that every interpretation remains intact.

Suppose an earlier sheet called an estimate actual income. Restore the correct label and inform appropriate colleagues using that explanation. This is an editorial recommendation; this article sends no message to anyone.

Retain actual completion state: revision prepared, delivered or still awaiting verification. A new version number is not a substitute for a handling record.

Traceable changes help the next person understand the information used for an earlier decision and what now needs adjustment. They do not require a dramatic account verdict or a claim that every later figure is certain. The aim is a usable record of evidence and decisions, including their corrections.`),
s('假设案例：补齐一列模糊的增长记录','A hypothetical: clarify a vague growth column',
`假设机构把公开页面上的一个总数放进周报，列名只写“增长”，没有窗口与来源。品牌同事可能误以为它描述本周某次合作，实际资料却只支持当时观察到的累计状态。

修订时先回到原始对象，补齐指标名称、观察时点与来源。若缺少前次记录，就不计算无法支持的本周变化，也不从现在的总数推造过去数值。

交接说明指出哪项判断尚不能完成，以及需要什么适当补充。品牌仍可以使用这份资料理解公开背景，但需要评价合作时，应采用相应项目证据。

这个假设演示如何修复标签与上下文，不是真实机构错误或客户案例。修订的价值在于让接收者知道可以继续做什么，而不是把一个数字包装成更强结论。`,
`Suppose an agency places a public total in a weekly report under a column called growth, without a window or source. A brand colleague may assume it describes that week’s collaboration, although the evidence only supports a cumulative state observed at one time.

Return to the original object and add metric name, observation time and source. Without an earlier record, do not calculate an unsupported weekly change or reconstruct historical values from the current total.

The handoff explains which judgment remains incomplete and what appropriate supplement is needed. The brand can still use the record for public background, while evaluating the collaboration requires corresponding project evidence.

This hypothetical illustrates repairing labels and context, not an actual agency mistake or client case. The correction helps a recipient know how to continue rather than package one number into a stronger conclusion. A useful record can remain limited and still contribute to the work, provided its purpose is clear.`),
s('交付一份可以继续工作的资料','Deliver evidence someone can continue working with',
`接收者应能找到对象、理解数字、看到限制，并知道下一步由谁负责。准确的资料交接允许保留缺口，也让补充资料后可以继续工作。

QuickKOL可以帮助理解品牌Brief和研究相关作品。公开统计、后台报告与合作结果仍各有来源和范围；清楚交付这些区别，比一张没有上下文的漂亮截图更有用。`,
`The recipient should be able to locate the object, understand the number, see its limits and identify the next owner. An accurate handoff can retain gaps while making further work possible when evidence arrives.

QuickKOL can help interpret brand briefs and research relevant work. Public statistics, first-party reports and collaboration outcomes retain their own sources and scope. Delivering those distinctions is more useful than a polished screenshot without context.`)
],
table:{title:p('资料交接时保留四种区别','Four distinctions to retain at handoff'),headers:[p('记录','Record'),p('说明','Explain'),p('避免','Avoid')],rows:[[p('来源显示','Provider display'),p('对象、来源与时点','Object, source and time'),p('裁掉上下文','Cropping context')],[p('编辑计算','Editorial calculation'),p('输入、方法与窗口','Inputs, method and window'),p('假装是额外原始观察','Presenting it as another raw observation')],[p('估算','Estimate'),p('标签、假设与限制','Label, assumptions and limits'),p('改名实际收入或结果','Renaming it actual income or outcome')],[p('后台补充','First-party supplement'),p('报告、筛选与允许分享范围','Report, filters and shareable scope'),p('与公开数混成同一口径','Merging it into the public definition')]],note:p('编辑交接框架；无真实账号样本、自动评分或数据准确性保证。','Editorial handoff framework; no actual account sample, automatic scoring or data-accuracy guarantee.')},
tool:{title:p('公开资料快照交接表','Public-source snapshot handoff'),intro:p('16字段空白CSV，保存必要上下文；不执行采集或连接后台。','A blank 16-field CSV for necessary context; it performs no collection or analytics connection.'),items:[p('账号与两个来源链接明确。','Account and two source URLs explicit.'),p('定义、单位与窗口可理解。','Definition, unit and window understandable.'),p('观察时点与统计期间分开。','Observation time separated from reporting period.'),p('估算与编辑计算有标签。','Estimates and editorial calculations labeled.'),p('未知、限制与修订保留。','Unknowns, limits and revisions retained.'),p('下一位负责人知道待办。','Next owner knows the outstanding work.')],downloads:[{label:p('下载中文快照交接CSV','Download Chinese snapshot-handoff CSV'),url:'/downloads/source-snapshot-handoff.zh.csv'},{label:p('下载英文快照交接CSV','Download English snapshot-handoff CSV'),url:'/downloads/source-snapshot-handoff.en.csv'}]}
});
