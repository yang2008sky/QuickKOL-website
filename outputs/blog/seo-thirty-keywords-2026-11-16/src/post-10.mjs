import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:10,
summary:p('用 Streams Charts 的观看时长关系理解直播演示，不把更长开播或更高累计时长自动当作更好的产品解释。','Use the Streams Charts watch-time relationship to understand a live demonstration without treating longer airtime or more accumulated hours as a better explanation.'),
description:p('搜索 streamer charts 时，怎样用 Streams Charts 区分平均同时观看、开播时长与 Hours Watched，并给达人直播演示安排合理范围。','Interpret streamer charts through Streams Charts: distinguish average concurrent viewers, airtime and hours watched when scoping a sponsored live demonstration.'),
coverAlt:p('平均观众、开播时长与观看小时数之间关系的文字海报','A typographic poster connects average viewers, airtime and hours watched'),
answer:p('如果搜索 streamer charts 是在找 Streams Charts，先确认平台名称，再核对字段。该服务将 Hours Watched 定义为平均同时观看人数乘以开播小时数；它表达累计观看时间，不是独立观众人数，也不证明产品演示被完整看懂。品牌可以据此理解时长与观众规模怎样共同影响总量，再按实际演示任务安排节奏、制作资源与评估。不要为了累积更多小时而要求达人无意义延长直播。','If streamer charts refers to Streams Charts, confirm the service and then the field. Its Hours Watched definition multiplies average concurrent viewers by airtime in hours. This is accumulated viewing time, not unique people or proof that a product demonstration was fully understood. A brand can use the relationship to understand how audience scale and duration contribute to the total, then scope pacing, production resources and assessment around the real demonstration. Do not ask a creator to prolong a stream merely to accumulate hours.'),
sections:[
s('先确认平台与研究任务','Confirm the service and research task',`“streamer charts”也可以只是泛指直播榜单。本篇按 Streams Charts 这项服务讨论，不把相似名称当成另一个已经验证的产品，也不提供付费套餐排名或未经测试的功能承诺。

品牌先写下准备研究的达人直播任务：例如解释设备连接、展示产品细节或回答特定使用问题。工具中的频道、节目、分类与平台数据，可能对应不同层级；看到数字前先确定要看哪个对象。向创作者解释需要这些记录的实际目的。

直播频道样本研究指南帮助确定比较对象。

直播赞助窗口指南处理整场与赞助时段的对应。这里专门解释累计观看时间与制作长度的关系，不重做时段验收。品牌需要知道时长是否支持表达，不是拿最大的累计值证明所有安排合理。数据能帮助提问，实际内容仍要观看。`,
`“Streamer charts” can also refer generally to rankings of livestreamers. This article discusses the service Streams Charts rather than invent another verified product from a similar phrase. It provides no paid-plan ranking or untested capability promise.

Start with the creator assignment being researched: explaining a device connection, showing product details or answering particular use questions. Channel, broadcast, category and platform data concern different levels. Identify the object before looking for a number. Explain the purpose to the creator before collecting additional records.

The livestream channel-sample guide helps define comparison objects.

The live sponsorship-window guide addresses whole-program and sponsored-segment alignment. This article specifically examines accumulated viewing time and production duration, rather than repeating segment acceptance. The brand needs to know whether duration supports expression, not use the largest total to justify every arrangement. Data helps formulate questions; the work still needs watching. This keeps a public statistics service connected to the influencer-marketing decision and prevents the research from becoming a general exercise in ranking entertainment channels unrelated to the proposed demonstration.`),
s('理解平均观众乘时长的关系','Understand average viewers multiplied by time',`Streams Charts 的指标说明把平均观众描述为同时观看的平均数，将 Hours Watched 写为平均观众乘以开播小时数。应保留这一提供方定义，不把它改成观看次数、独立人数或每个人的平均观看时长。

例如 1,000 平均同时观看与两小时相乘，得到 2,000 观看小时。这个纯假设说明累积关系，没有指向真实频道，也不是行业基准。数值大小需要与组成条件一起读。

同一关系也说明，总量更高可以来自更长时长，而不只是更大同时观众。实际记录中的采样、窗口与取整条件还需理解，不用自行推算替代提供方原字段。方法适合解释量纲，不能证明每个具体节目数据完全准确。`,
`Streams Charts’ metric definitions describe average viewers as concurrent audience averaged over time, and Hours Watched as that average multiplied by airtime in hours. Preserve the provider’s definition rather than rename it views, distinct people or average viewing time per person.

For example, 1,000 average concurrent viewers multiplied by two hours gives 2,000 hours watched. These invented inputs explain accumulation; they concern no actual channel and are not a benchmark. Read the total alongside its components.

The relationship also shows why a higher total can reflect longer airtime rather than only a larger concurrent audience. Actual records still need their sampling, windows and rounding understood; a homemade calculation should not silently replace the provider’s original field. The method explains units without proving complete accuracy for a particular program. It gives the brand a way to ask what changed in the components instead of treating every increase in hours as an increase in audience size or in the clarity of the sponsored message.`,['streamsDefinitions']),
s('观看小时相同，节目可能不同','Equal viewing hours can describe different programs',`继续用假设：1,000 平均观众看两小时，与 500 平均观众看四小时，都对应 2,000 观看小时。但这不意味着相同独立人数、同样制作成本或相同内容节奏。

品牌如果需要一个简明操作说明，四小时并不因为总量相同就更适合。若任务确实需要长过程，较长安排也不能只因平均数较低就被判为失败。先看工作要求，再解释数据。

不要从两项平均值推导所有个人停留，也不要声称同一批人一直看完整场。平均同时观看是对时间上同时人数的概括，无法单独还原个人路径。比较的直接价值，是提醒负责人同一个总量背后可能有不同资源与节目条件。`,
`Continue the hypothetical example: 1,000 average viewers for two hours and 500 for four hours both yield 2,000 hours watched. They do not establish equal distinct audiences, production costs or pacing.

If the brand needs a concise operation explanation, four hours is not automatically more suitable because the accumulated total matches. Where a task genuinely requires a longer process, a lower average alone does not establish failure. Examine the work requirement before interpreting the data.

Do not derive individual stays from two averages or claim the same people watched throughout. Average concurrency summarizes simultaneous audience over time; it cannot reconstruct every personal path. The comparison’s direct value is revealing different resource and program conditions behind one total. It lets a producer discuss why a longer demonstration is needed, and gives a buyer a reason to ask whether the additional time performs useful work, instead of treating a numerical equivalence as proof that two sponsorship opportunities are interchangeable in every practical respect.`),
s('把平台原始字段与提供方字段分开','Separate platform and provider fields',`Twitch 的分析概览把 Time Streamed、Minutes Watched、Average Viewers 与其他指标分开。它对直播总时长、所有观看时间和平均同时观看的定义，帮助理解这些对象为何不能互换。

核对记录时，先保留平台或提供方名称、字段、窗口与单位。分钟与小时换算应明确，但换算单位并不解决对象或覆盖差异。不要把第三方某个估计自动称作 Twitch 原始实测。

当本次任务确实需要第一方资料时，向有权分享的人请求有限相关记录，不索取账号秘密。本篇没有登录任何频道，也没有执行所有平台的准确性对比。品牌应知道看到的是哪种资料，以及哪些问题它还不能回答。`,
`Twitch’s analytics overview separates Time Streamed, Minutes Watched, Average Viewers and other fields. Its definitions for broadcast duration, accumulated viewing time and average concurrency help explain why these objects are not interchangeable.

Retain the platform or provider, field, window and unit. Make minute-to-hour conversion explicit, but recognize that converting units does not resolve object or coverage differences. A third-party estimate should not automatically be called an original Twitch measurement.

Where the task genuinely needs first-party material, request a limited relevant record from an authorized person rather than account secrets. This article logged into no channel and performed no accuracy comparison across all platforms. A brand should understand the kind of evidence it has and the questions it cannot answer. That is more useful than presenting two similar labels as confirmed equivalents simply because they both mention viewers, and it leaves a later analyst able to investigate a discrepancy without reconstructing an undocumented substitution.`,['twitchAnalytics']),
s('按观众要理解的步骤安排时长','Plan duration around the explanation',`达人演示的长度应服务具体理解。例如设备合作可能需要展示接口、说明连接顺序并回应一个常见误解。品牌要提供准确产品信息，创作者决定怎样用适合其节目的方式表达，再共同检查是否清楚。

把必要步骤与可选闲聊分开，并说明某个环节为什么需要时间。过快可能看不清，过长也可能使重点分散。这里没有给所有产品统一最优分钟数；应按实际任务与演练调整。

假设第一次演练发现连接镜头被手遮住，解决办法可能是改变机位，而非加长整场。让制作问题获得制作答案，比用更长开播补偿不清楚的画面更有效。观看小时无法单独决定哪些步骤缺失或已经足够。`,
`A creator demonstration’s length should serve a particular understanding. An equipment collaboration might need interface detail, a connection sequence and an answer to a common misunderstanding. The brand supplies accurate product information; the creator develops expression suited to the program; both examine clarity.

Separate necessary steps from optional conversation and explain why an element needs time. Too fast can obscure an action, while excessive length can disperse the point. There is no universal optimal number of minutes for every product. Adjust through the actual assignment and rehearsal.

If a first rehearsal reveals a connection obscured by a hand, another camera position may solve it without extending the whole stream. Give a production problem a production answer instead of using airtime to compensate for an unclear image. Hours watched cannot alone determine which explanatory steps are missing or sufficient. Watching the rehearsal can therefore change the brief more usefully than increasing a duration target after seeing another channel’s larger accumulated statistic.`),
s('不要把长直播直接叫高留存','Do not equate a long stream with high retention',`开播四小时只是节目持续时间，不代表每位观众停留四小时。累计观看也不能独立说明哪一段被理解、是否记住品牌或是否准备购买。需要留存或观看过程问题时，另找适用字段与语境。

Streams Charts 对某些受众字段明确使用估计说明，并限定适用平台。品牌引用时应保留这种性质，不把所有平台的同名字段当作同一种精确人数。本篇不声称已经独立检验其估计模型。

看到掉落或高峰，也先看节目背景，不立即把变化归因于赞助。某个时刻可能有多个条件同时变化。可以提出待验证解释，但不要让一条曲线替代对创作者个人能力的全面判断。`,
`A four-hour broadcast describes program duration, not a four-hour stay by every viewer. Accumulated viewing also cannot independently establish which passage was understood, whether the brand was remembered or whether someone intends to buy. Retention and viewing-path questions need appropriate separate fields and context.

Streams Charts explicitly describes some audience fields as estimates with platform limits. Retain that status rather than treat similarly named fields on every platform as one exact headcount. This article does not independently validate its estimation model.

For a decline or peak, examine program context before attributing the movement to the sponsor. Several conditions can change together. An explanation can remain a hypothesis instead of turning one curve into a comprehensive judgment of the creator’s ability. The report should identify what the observation suggests examining next, not imply that duration, attention, comprehension and purchase intent have all been measured merely because a watch-time total and a graph are available.`),
s('把商业背景纳入直播安排','Include commercial context in the program',`Twitch 的商业内容指导要求适用内容使用披露工具，并指出工具不保证满足所有相关要求。即使直播很长，也不能假定每位观众都看过开头或已经知道本次品牌关系。

实际安排需要按平台、地区与形式核对。创作者与品牌应理解相关段落如何表达商业背景，并在回放或后续改编时重新检查对象。本文不对具体直播作合规裁决。

不要为维持平均观众而要求隐藏关系，也不把必要说明当作可以随意删去的冗余时间。说明应服务准确理解，与产品任务一起规划。节目自然感可以保留，但不能通过让观众猜测关系来获得。`,
`Twitch’s branded-content guidelines require the disclosure tool for applicable work and explain that the tool does not guarantee satisfaction of every relevant obligation. A long stream does not establish that each viewer saw the opening or already understands the brand relationship.

Check the actual platform, region and format. Creator and brand should understand commercial context in the relevant passage and revisit the object in a replay or later adaptation. This article determines no individual stream’s compliance.

Do not conceal a relationship to preserve an average audience or treat necessary explanation as disposable time. Plan that context with the product task so it supports accurate understanding. A natural program does not require making viewers guess the arrangement. This also keeps a performance discussion from becoming an instruction to remove information simply because the team assumes that an unexplained sponsored passage might hold attention better, an assumption that cannot substitute for appropriate disclosure or a truthful message.`,['twitchBranded']),
s('分开报告总量与实际工作','Report the total and the work separately',`结项可以分别记录约定演示是否完成、观察到的相应观看指标，以及品牌业务目标有哪些证据。Hours Watched 有自己的含义，不应被改成已经购买的用户数或品牌回报。

节目范围可比时，再讨论变化；不因本次总量较大就自动建议下次更长，也不因为较短就判为不足。若产品解释已完成，延长可能只增加制作负担，未必解决任何新问题。

下一步应对应发现：机位需要调整、问题环节需要更清楚，或记录需要补充定义。把这些与投放或销售问题分开，能让达人获得可执行反馈，也让品牌知道预算实际购买了哪些工作，而不是只看到一项累计指标。`,
`At closeout, separately record completion of the agreed demonstration, relevant viewing observations and evidence for business objectives. Hours Watched has its own meaning and should not be renamed purchasers or brand return.

Discuss changes after establishing comparable program scope. A larger total does not automatically recommend a longer next stream, and a shorter program is not automatically insufficient. Once the explanation is complete, extension may only add production burden without answering another question.

Connect the next action to the finding: another camera position, clearer question handling or a record needing its definition supplied. Keep these distinct from media delivery or sales issues. Creators receive actionable feedback and the brand sees which work its budget purchased instead of one accumulated statistic. The result is a production-learning discussion supported by data, rather than a demand to maximize a number whose components can increase without making the product any easier for viewers to understand.`),
s('让时长服务合作目标','Make duration serve the collaboration',`最终提案写清本次直播任务、合理长度假设、资源与使用范围，并注明数据来源与限制。不需要承诺某个观看小时目标，才能讨论一项高质量演示；若存在商业指标约定，需另有清楚条件。

资料不足时，可以保留未知并安排合适演练。创作者最有价值的贡献，可能是把复杂步骤解释得更简明，而不是把同一信息重复更多遍。品牌也应准备真实产品依据与可执行反馈。

Streams Charts 的时长关系帮助拆解总量。达人营销要做的下一步，是让观看机会与真实表达、合适制作和明确合作范围相连，而不是把最长直播当作最好的合作。`,
`A final proposal should define the live task, duration assumptions, resources and use, with data sources and limits. A quality demonstration can be discussed without promising a particular hours-watched target. Any commercial performance commitment needs its own explicit conditions.

Where information is missing, retain uncertainty and arrange a suitable rehearsal. A creator’s valuable contribution may be explaining a complicated step more concisely, rather than repeating the same information longer. The brand should provide product support and usable feedback too.

The Streams Charts duration relationship helps decompose a total. Influencer marketing then needs to connect viewing opportunities with truthful expression, suitable production and defined scope. The longest stream is not automatically the best collaboration. A reviewable decision explains why the proposed length serves the actual task, what evidence will assess it and which questions remain open, leaving both parties able to discuss changes without confusing more airtime with a guaranteed improvement in results.`)
],
links:[link('直播赞助窗口指南','live sponsorship-window guide','twitch-statistics-live-sponsor-window'),link('直播频道样本研究指南','livestream channel-sample guide','twitch-tv-statistics-channel-category-sample')],
figures:[{file:'live-hours-average-airtime.svg',afterSection:4,alt:p('平均同时观众乘以开播小时数得到观看小时的关系图','A diagram shows average concurrent viewers multiplied by airtime in hours to produce hours watched'),caption:p('累计观看时间由观众与时长共同组成，不是独立人数或产品理解证明。','Accumulated viewing combines audience and time; it is not unique people or proof of product understanding.')}],
table:{title:p('直播时长字段的不同任务','Different tasks for duration fields'),headers:[p('字段','Field'),p('表达','Describes'),p('不单独证明','Does not establish alone')],rows:[[p('Airtime','Airtime'),p('播出持续时间','Broadcast duration'),p('每人停留同样久','Every person stayed that long')],[p('Average Viewers','Average Viewers'),p('平均同时观看','Average concurrent audience'),p('全部独立观众','All distinct viewers')],[p('Hours Watched','Hours Watched'),p('相关累计观看时间','Relevant accumulated viewing time'),p('品牌信息已被理解','The brand message was understood')],[p('演示审阅','Demonstration review'),p('实际步骤与表达','Actual steps and expression'),p('全部销售由此造成','It caused every sale')]],note:p('提供方定义与编辑解释，非真实频道预测或统一最优时长。','Provider definitions and editorial interpretation, not a channel forecast or universal optimal duration.')},
tool:{title:p('安排直播演示之前','Before scoping a live demonstration'),intro:p('让数字帮助理解任务。','Use numbers to understand the assignment.'),items:[p('确认服务、对象与窗口。','Confirm service, object and window.'),p('分清平均观众、时长与累计观看。','Separate average audience, airtime and accumulated viewing.'),p('保留提供方与第一方字段差异。','Retain provider and first-party field distinctions.'),p('按解释步骤安排合理长度。','Plan duration around explanatory steps.'),p('把必要商业背景纳入制作。','Include necessary commercial context in production.'),p('报告工作与成果的各自证据。','Report separate evidence for work and outcomes.')]}
});
