import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:15,
summary:p('从Social Blade官方首页进入统计、FAQ、支持或商业资料，先选择正确任务与账号对象，再处理搜索结果和访问条件。','Use Social Blade’s official home to reach statistics, FAQ, support or business information, choosing the right task and account before interpreting search results or access conditions.'),
description:p('Socialblade socialblade导航指南：找到官方入口、核对平台与频道ID，区分帮助、支持、会员与商业资料。','Find official Social Blade routes, confirm platform and channel identity, and distinguish help, support, membership and business information.'),
coverAlt:p('打开的空白奶油色笔记本里夹着钴蓝与珊瑚色书签，旁边有铅笔，表达找到正确入口。','An open blank cream notebook with cobalt and coral bookmarks and a pencil suggests finding the right entry point.'),
answer:p('如果你搜索“socialblade socialblade”是在找统计网站，可从Social Blade官方首页进入，再按任务选择平台统计、FAQ、支持或商业资料。重复关键词不代表还有另一项同名产品。先确认实际域名、平台与账号对象，避免把同名页面或第三方介绍当成已经找到目标。下面提供导航与身份核对方法，不替用户注册、购买会员或提交工单。统计如何解释可继续阅读相关指南，本篇重点是到达正确资料并看清当前可用范围。',
'If the search socialblade socialblade is intended to find the statistics website, start with the Social Blade official home and choose platform statistics, FAQ, support or business information according to the task. A repeated query does not establish a separate product with that name. Confirm the actual domain, platform and account rather than treat a matching page title or third-party introduction as the destination. This guide explains navigation and identity checks. It registers no account, buys no membership and submits no support request. Related guidance covers interpretation of statistics; the focus here is reaching the appropriate information and understanding the scope currently available.'),
links:[link('公开统计阅读指南','public-statistics reading guide','social-blade-public-channel-statistics'),link('Brief写作指南','brief-writing guide','write-a-useful-campaign-brief'),link('平台工作流指南','platform-workflow guide','influencer-marketing-platform-workflow'),link('指标定义指南','metric-definition guide','engagement-rate-formula-metric-contract')],
sections:[
s('从官方首页选择路线','Choose a route from the official home',
`Social Blade官方首页展示不同平台入口、帮助与产品路线。先打开这个来源，再判断当前需要统计页面、常见问答、支持还是商业产品说明。

搜索结果可能包含服务本身、第三方教程或关于某个账号的文章。它们可以讨论同一名称，却承担不同作用；本篇不把所有介绍页面都判断成官方入口。

核对链接目的地与实际页面标题。名称、标志或文字相近时，仍应回到官方网站提供的路线确认，而不只依据一张图片。

也不要因为出现陌生页面就直接给经营者定性。可以准确区分“第三方介绍”“由官方链接到的服务”“尚未确认来源”，分别说明已经看到什么。

本次只读取公开资料。没有登录、付款、接受账号条款或测试付费功能，也不会把找到一个入口写成已经取得某项产品访问。`,
`The Social Blade official home displays platform entries, help and product routes. Start there, then decide whether the current task needs a statistics page, FAQ, support or business-product information.

Search results can include the service, a third-party tutorial or an article about a particular account. They may discuss the same name while serving different purposes; an introduction is not automatically the official entry point.

Compare the link destination with the actual page title. When names, marks or wording resemble each other, return to the routes supplied by the official site rather than rely only on an image.

Nor does an unfamiliar page justify a verdict about its operator. Distinguish a third-party explanation, an officially linked service and an unconfirmed source, stating what was actually observed.

This review only reads public information. It does not log in, pay, accept account terms or test paid features. Finding an entry point is not access to the corresponding product. The useful outcome is knowing where the task belongs and which information is needed next, without turning navigation into an unsupported recommendation.`,['sbHome']),
s('先选平台，再找具体账号','Choose the platform before locating an account',
`主页上不同平台入口对应不同账号对象。一个创作者可能在多个平台活动，同名组织也可能有多个地区页面；选择时先说明这次需要哪个平台与账号。

从原始公开账号取得准确链接与可见标识，再与统计页面对应。显示名称或头像可以辅助辨认，但不应独自承担身份确认。

假设品牌讨论的是某个YouTube频道，就不要把同名Instagram页面当作已找到相同统计。两者可能属于同一组织，也可能完全不是同一对象，需要适当依据。

Brief写作指南帮助先说明问题。若任务是看历史公开增长，和找一次合作的实际结果，需要的路线与资料可能不同。

对象还不清楚时，先保留待确认状态。不要为让资料看起来完整，选择搜索结果中第一个同名账号继续填写。`,
`Different platform entries concern different account objects. A creator may publish on several platforms and an organization may have regional pages. State which platform and account this task needs before searching.

Take an accurate URL and visible identifiers from the original public account, then match the statistics page. Display names and avatars can help recognition without independently confirming identity.

Suppose a brand is discussing a YouTube channel. A similarly named Instagram page is not the same statistical object. Both may belong to one organization or concern different entities, requiring appropriate evidence.

The brief-writing guide helps define the question first. Observing historical public growth and obtaining an actual collaboration result may require different routes and information.

If the object remains unclear, retain that state rather than select the first matching name to complete a record. A correct route to the wrong account still fails the task. This is particularly relevant when names are short, widely used or repeated across branches, because a plausible result can be easy to accept without examining what it represents.`),
s('频道找不到时，阅读对应查找说明','When a channel is missing, use the relevant lookup guidance',
`Social Blade频道查找说明提供旧式自定义URL与频道ID等查找方式，并说明仍无法找到时可联系支持。采用时应按实际账号链接判断，不把一条文档方法保证为所有频道都可用。

对于有频道ID的YouTube链接，可以先核对该标识与目标对象。显示名称改变时，仍要回到准确公开页面确认，不根据搜索文字自行拼造标识。

查找不到可能留下资料缺口，但不足以判断创作者不存在、没有价值或有违规行为。把“当前未找到对应统计页”写成实际观察就够了。

若需要进一步处理，准备平台、准确链接、日期与问题描述。不要加入账号密码、验证码或无关私人资料来让问题显得更充分。

本篇没有替任何具体频道执行查找，也不保证资料覆盖和历史完整。它解释如何用官方路径继续，而不是提供一个全账号识别承诺。`,
`The Social Blade channel-lookup guide provides methods involving older custom URLs and channel IDs, with a support route if a channel remains unavailable. Apply it against the actual account link rather than promise that a documented method works for every channel.

Where a YouTube URL contains a channel ID, check that identifier against the intended object. A changed display name still requires the accurate public page; do not construct an identifier from search wording.

An unsuccessful lookup leaves an information gap, not a conclusion that the creator is nonexistent, unsuitable or in violation. Currently no corresponding statistics page was found accurately describes the observation.

If follow-up is needed, prepare platform, exact URL, date and the problem. Passwords, verification codes and unrelated private information do not make that description more useful.

This article performs no lookup for a particular channel and guarantees neither coverage nor complete history. It explains how to continue through official routes rather than promise universal identification. Keep the distinction visible when handing the question to a colleague so they do not treat an unavailable result as a judgment about the account.`,['sbFind']),
s('FAQ适合解释问题，支持适合继续处理','Use the FAQ for explanation and support for follow-up',
`先看相关FAQ是否解释当前问题，例如数字为何不同、更新方式或频道查找。问题类型明确以后，再判断是否需要正式支持。

Social Blade官方支持入口由官网链接提供，本次读取时跳转到其Zendesk提交请求页面。因此，域名变化要结合官方链接关系判断，不把所有跳转一律看成冒充。

本篇只确认公开入口，不填写或提交任何请求。准备了说明、打开了页面和支持已经收到问题，是三种不同状态。

若负责人决定提交，用必要事实说明目标与现象，并保留实际处理状态。不臆测回复时间，也不把一份常见问答当作平台已经为具体问题作出承诺。

有些问题属于资料解释，有些属于产品使用或账户安排。先分类，有助于找到更合适资料，也避免把一个技术支持入口当成创作者的商业联系渠道。`,
`First check whether a relevant FAQ explains the issue, such as mismatched numbers, updating or channel lookup. Once the question is clear, decide whether formal support is needed.

The Social Blade official support route is linked from the site and redirected to its Zendesk request page when read for this article. Interpret a domain change in the context of that official relationship rather than classify every redirect as impersonation.

This review only verifies the public route and fills or submits no request. A prepared explanation, opened page and received support request are different states.

If the owner chooses to submit, use necessary facts about the object and symptom and retain the actual handling state. Do not invent response times or treat a general FAQ as a promise about the individual case.

Some questions concern interpretation, others product use or account arrangements. Classification helps find suitable information and avoids treating technical support as a creator’s business-contact route. A clear question can also prevent sending the same incomplete request to several unrelated destinations without resolving its missing context.`,['sbSupport']),
s('会员与商业资料按实际需求查看','Read membership and business information against the actual need',
`首页展示会员、Reports与Business API等不同路线。需要更长历史、组织资料使用或系统接入时，先阅读对应当前说明，不把首页上一个功能词扩展成已经确认的全部能力。

平台工作流指南帮助把需求写成具体任务。偶尔查看一个公开账号，与持续接入组织系统，不应仅凭产品名称选择同一种安排。

记录所需平台、历史窗口、输出对象、使用规模与维护责任。公开资料没有解释的能力就列为待问，不声称本篇已经测试接口或导出。

涉及套餐与费用时，采用决定当时的官方信息。这里不列价格、不替用户购买，也不把免费账号、付费会员和商业接口视为相同访问范围。

如果公开资料已经足够回答问题，可以停在相应路线。产品功能更多，不独立证明它更适合当前任务；范围明确才有助于负责人做决定。`,
`The home page presents membership, Reports and Business API routes. If a task needs longer history, organizational data use or integration, read the corresponding current information rather than expand one feature phrase into confirmed complete capability.

The platform-workflow guide turns requirements into concrete work. Occasionally inspecting a public account and continually connecting an organizational system need not use the same arrangement merely because one provider serves both.

Record platform, historical window, output object, usage scale and maintenance responsibility. A capability absent from public explanation remains a question; this article claims no API or export test.

For plans and charges, use official information at decision time. This guide lists no prices and makes no purchase, and it does not equate a free account, paid membership and business interface.

If public material answers the question, stop at the appropriate route. More features do not independently prove suitability for the assignment. Clear scope gives a responsible owner a better basis for deciding whether another product discussion is necessary. It also prevents a browsing task from becoming an unrequested integration project.`),
s('到达统计页以后，再转入数据阅读','After reaching statistics, switch to interpretation',
`找到正确页面只完成导航。公开统计阅读指南继续解释观察时点、更新差异与估算，避免把页面显示直接写成完整后台事实。

指标定义指南帮助判断数字对应的动作、对象与窗口。比如某个总数与某段时期变化，不因位于同一页面就属于同一种量。

身份核对、资料可用和结论支持也要分别记录。正确账号可能缺少所需窗口，完整页面也可能无法回答一次合作的实际结果。

不要因为导航顺利就跳过解释，也不要为了写出一个确定结论，把未确认字段填成零。读者应该知道当前已经到达什么、还没有取得什么。

本篇把深入统计问题交给相应主题，并保留当前导航任务的边界。这样相关内容互相连接，而不是让同一个重复关键词再生成一篇相同指标解释。`,
`Finding the correct page completes navigation. The public-statistics reading guide continues into observation time, update differences and estimates so a display is not described as complete first-party evidence.

The metric-definition guide identifies action, object and window. A total and a period change remain different quantities even when displayed together.

Record identity confirmation, information availability and support for a conclusion separately. A correct account may lack the required period, and a complete page may not answer a particular collaboration’s actual result.

Successful navigation is not a reason to skip interpretation or replace unknown fields with zero for a definite conclusion. Readers should understand what was reached and what remains unavailable.

This article routes deeper statistical questions to the relevant topic while retaining its navigation focus. The related guides then support one another instead of having a repeated search phrase generate an identical metric explanation. The same distinction is useful internally: a colleague asked to find an official page should not be described as having completed a performance assessment merely by returning its URL.`),
s('从一篇第三方介绍回到原始资料','Trace a third-party reference back to its source',
`如果从新闻、教程或同事笔记看到Social Blade名称，先查看它指向的是首页、某个平台页，还是具体账号。三种链接都可能真实，但不能替代同一个目的地。

需要原始统计时，保留原引用日期，再核对当时对象与当前页面。现在能打开某个账号，不等于已经复原过去某天的显示；缺少历史资料时应明确说明。

第三方文章可能提供自己的观点，官方页面则说明对应服务或显示。找到官方来源之后，仍要分别判断原文章作出了什么解释，不能把全部观点都归为服务方结论。

链接失效时，可以回到官网导航继续查找，并记录尚未找回的对象。本篇不建议不断拼猜地址、下载来源不明的附件，或拿一个相近账号代替缺失来源。`,
`If a news article, tutorial or colleague’s note mentions Social Blade, check whether it points to the home page, a platform page or a particular account. All three can be genuine while leading to different information.

For original statistics, retain the reference date and compare the intended object with the current page. Opening an account now does not reconstruct what appeared on an earlier day. State when historical evidence is unavailable.

A third-party article can contribute its own interpretation while the official page describes a service or display. After finding the primary source, distinguish what the article concluded rather than assign every opinion to the provider.

If a link fails, use official navigation to continue and retain the unresolved object. This guide does not recommend repeatedly guessing addresses, downloading unexplained attachments or substituting a similarly named account for missing evidence. The navigation task remains finding the intended source, with any gap honestly identified.`),
s('假设案例：两个同事提出不同请求','A hypothetical: two colleagues ask different questions',
`假设一位品牌同事只想找到某个频道的公开统计，另一位希望了解组织系统接入。两人都搜索同一个名称，但第一位主要需要平台与准确账号，第二位需要当前商业资料与技术条件。

先确认第一位的目标链接与平台，找到适当页面后说明实际可用状态。若需要的历史窗口不可见，就保留缺口，不把一次导航完成扩大为全量资料已取得。

为第二位整理公开Reports或API路线与待问事项，由合适负责人评估后续。没有阅读或测试的能力仍待确认，也不为了完成查找任务自行购买方案。

这个假设没有使用真实账号或客户资料。它说明正确入口取决于问题：相同搜索词可以合理地结束在不同官方页面，而不需要强行给所有人同一操作流程。`,
`Suppose one brand colleague wants a channel’s public statistics while another asks about organizational integration. Both search the same provider name, but the first mainly needs a platform and exact account, while the second needs current business information and technical conditions.

Confirm the first colleague’s target link and platform, then explain the actual availability of the page reached. If the required historical window is not visible, retain that gap instead of expanding completed navigation into complete data acquisition.

For the second, organize the public Reports or API route and outstanding questions for an appropriate owner to assess. Unread or untested capabilities remain unconfirmed; the lookup task does not require buying a plan on the colleague’s behalf.

This hypothetical uses no actual account or client material. It shows that the appropriate route depends on the question. Identical search wording can reasonably lead to different official pages without one mandatory process for everybody. Clear task selection prevents unnecessary action while preserving what still needs to be learned.`),
s('用清楚的目的地结束搜索','End the search with a clear destination',
`搜索结束时，说明官方来源、选定路线与目标账号，留下当前需要继续确认的问题。只需公开资料的任务，不必额外注册或购买。

QuickKOL可以帮助理解品牌Brief并研究相关作品；Social Blade导航与统计资料则按各自来源使用。正确入口是下一步判断的起点，具体数据、访问和合作条件仍需适当确认。`,
`At the end of the search, identify official source, chosen route and intended account, with questions still needing confirmation. A public-information task need not involve additional registration or purchasing.

QuickKOL can help interpret brand briefs and research relevant work; use Social Blade routes and statistics according to their own sources. The correct entry point starts the next decision, while data, access and commercial conditions still require appropriate confirmation.`)
],
table:{title:p('按任务选择官方路线','Choose the official route by task'),headers:[p('需要','Need'),p('路线','Route'),p('仍要确认','Still confirm')],rows:[[p('查看公开账号','Inspect a public account'),p('首页的平台统计入口','Platform statistics from the home page'),p('平台与准确账号','Platform and exact account')],[p('理解常见现象','Understand a common issue'),p('对应FAQ','Relevant FAQ'),p('与实际问题是否一致','Whether it matches the actual issue')],[p('继续处理问题','Follow up on a problem'),p('官网所链支持入口','Officially linked support'),p('必要资料与真实提交状态','Necessary facts and actual submission state')],[p('评估组织使用','Consider organizational use'),p('会员、Reports或API说明','Membership, Reports or API information'),p('当前范围、条件与负责人','Current scope, conditions and owner')]],note:p('公开导航框架；未注册、购买、提交请求或实测付费能力。','Public navigation framework; no registration, purchase, request submission or paid-feature test performed.')},
tool:{title:p('入口与账号核对清单','Entry-point and account checklist'),intro:p('先到达适当公开资料，再判断是否需要进一步操作。','Reach appropriate public information before deciding on any further action.'),items:[p('从官方来源取得目标路线。','Obtain the route from an official source.'),p('平台与账号对象明确。','Platform and account object explicit.'),p('无法查找保留实际状态。','Unavailable lookup retains its actual state.'),p('第三方介绍与官方链接服务分清。','Separate third-party explanation from officially linked service.'),p('公开资料与产品访问范围分开。','Separate public information from product access.'),p('到达页面与完成数据判断分开。','Separate reaching a page from completing analysis.')]}
});
