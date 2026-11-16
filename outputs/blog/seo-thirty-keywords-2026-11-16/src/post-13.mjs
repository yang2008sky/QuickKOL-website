import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:13,
summary:p('把西语 YouTube 报表翻译成品牌能使用的记录，需要保留字段对象、单位与期间，不能只把词换成另一种语言。','Translate a Spanish YouTube sponsor report by retaining the field’s object, unit and period, rather than replacing words while changing the measure.'),
description:p('Views en YouTube 怎样进入双语达人报告：对齐 visualizaciones、usuarios únicos 和 tiempo de visualización，保留口径与未知。','Align views en YouTube with a multilingual sponsor report: map visualizaciones, usuarios únicos and tiempo de visualización while retaining scope and limits.'),
coverAlt:p('观看、独立观众与观看时间三个字段分层排列的绿色编辑图','A green editorial graphic layers views, unique viewers and watch time'),
answer:p('“views en YouTube”通常是在问 YouTube 观看数据。西语帮助页中的 visualizaciones 对应观看次数，usuarios únicos 对应估计独立观众，tiempo de visualización 对应观看时间；三者不是同义词。品牌整理跨语言达人报告时，应保留原字段、来源、内容对象、期间与单位，再给出中文或英文说明。翻译不应把观看改成人数或把累计时长改成平均停留，也不能省略估计性质、计数更新和未取得资料的限制。','“Views en YouTube” generally concerns YouTube viewing data. In Spanish help, visualizaciones refers to views, usuarios únicos to estimated unique viewers and tiempo de visualización to watch time. These are not synonyms. A multilingual creator report should retain the original field, source, content object, period and unit before adding an English or Chinese explanation. Translation must not turn views into people or accumulated time into average duration, or remove estimation, counting updates and unavailable-data limits.'),
sections:[
s('先确定是在翻译哪份记录','Identify the record being translated',`西语关键词并不意味着品牌需要一篇泛泛的涨粉教程。实际任务可能是中国团队收到西语创作者报表，或代理需要将同一合作结果交给英文客户。先确认原始对象，再决定哪些词需要解释。

保留页面、截图或导出来源，明确是频道、某条视频、Shorts、直播还是其他对象。一个看起来熟悉的数，可能使用不同期间与筛选。翻译人员无需猜测不存在的上下文，可以把问题交回资料提供者。

达人指标决策指南帮助确认报告要支持什么决定。交付验收、内容学习和业务成果的需求不同，不能因为一个词更容易翻译就让它代替真正需要的字段。准确翻译从理解问题开始，而不是从填满一张漂亮词汇表开始。`,
`A Spanish keyword does not mean the brand needs a generic follower-growth tutorial. The real task may be a Chinese team receiving a Spanish creator report, or an agency handing the same collaboration result to an English-speaking client. Identify the source object before deciding which words need explanation.

Retain the page, screenshot or export source and whether it concerns a channel, video, Short, livestream or another object. A familiar-looking number can have a different period or filter. Translators need not invent missing context; they can return a specific question to the supplier.

The creator-metrics decision guide helps identify the decision the report supports. Acceptance, content learning and business outcomes have different needs. A field should not replace the needed measure merely because its label is easier to translate. Accurate translation starts with the question rather than completion of an attractive glossary. It keeps the work connected to a real creator collaboration and prevents a language handoff from silently becoming a new analysis with different objects and claims.`),
s('将观看次数保留为次数','Keep visualizaciones as views',`YouTube 的西语概览说明使用 Visualizaciones 表示相关观看次数，并将其与观看时间、订阅等字段分开。转成中文时可说明为观看次数，英文用 views，但仍保留实际报告来源与内容类型。

不要写成“有多少人观看”，除非明确是在讨论另一项人数字段。重复播放、不同对象与平台计数条件，都让次数不能直接变成独立人数。普通语言省略一两个字，可能使品牌读者形成更大的结论。

团队可以在首次出现时附简短解释，后续保持一致。不必每一行重复长篇定义，也不要用曝光、触达或播放人数轮流替换来避免文字重复。报表术语的一致性，比文案上的变化更重要，因为不同词可能实际对应不同事件。`,
`YouTube’s Spanish overview guide uses Visualizaciones for the relevant view count and separates it from watch time, subscriptions and other fields. Explain it as views in English or viewing count in Chinese while retaining the report source and content type.

Do not rewrite it as how many people watched unless another people-based field is actually under discussion. Replays, different objects and counting conditions prevent a count from becoming a distinct audience automatically. A small simplification in ordinary language can create a substantially larger claim for the brand reader.

Add a short explanation at first use, then remain consistent. Each row need not repeat a long definition, but rotating among impressions, reach and people to avoid repetitive wording is inappropriate. Terminological consistency matters more than copy variety when different words can represent different events. This also gives a designer clear labels for a chart: visual elegance should not be achieved by shortening the label until it loses the distinction the reader needs to interpret the number correctly.`,['ytOverviewEs']),
s('把独立观众的估计性质留下','Retain estimation in usuarios únicos',`YouTube 的西语独立观众说明将 usuarios únicos 描述为指定期间的估计观众规模。中文可用估计独立观众，英文用 estimated unique viewers，而不是精确身份人数或全部粉丝。

原文还说明，同一个人看多条视频时，在各视频中可能分别计入，但频道层面会合并。因此把每条视频独立观众相加，并不能自动获得整个合作的不重复受众。

翻译不应为了简洁删去估计。没有该字段时，不从总观看自行补出人数；字段只覆盖某个期间，也不称作所有历史受众。本篇没有读取真实账号或验证估计模型，只根据公开说明保留正确概念与限制，让品牌知道这项资料在回答什么。`,
`YouTube’s Spanish unique-viewer guide describes usuarios únicos as an estimated audience over a given period. Retain estimated unique viewers in English and the equivalent estimation qualifier in Chinese, rather than exact identified people or all followers.

It also explains that someone watching several videos can appear in each video’s field while being combined at channel level. Adding individual-video unique audiences does not automatically produce a deduplicated audience for the whole collaboration.

Do not remove estimated for brevity. Without the field, do not invent people from total views; a period-based field is not all historical audience. This article accessed no real account and validated no estimation model. It preserves concepts and limits from public guidance so the brand understands the question being answered. A clear qualification is part of the meaning rather than optional small print, and should survive the handoff into slides, emails and any later summary that cites the translated report.`,['ytUniqueEs']),
s('观看时间需要保留单位','Keep the unit of watch time',`Tiempo de visualización 指观看时间，帮助页明确列出 horas，即小时。它与平均观看时长不是同一字段，也不等于直播开播时长。翻译时同时保留单位与实际窗口。

如果工作表需要分钟，可以明确换算并保留原值，例如一个假设记录的 60 小时对应 3,600 分钟。这只是单位练习，不是客户成果，也不是所有观看者平均看了 60 小时。

不要把累计时长除以一个不匹配的公开观看数，就称为官方平均观看时长。原始平均字段可能有自己的适用分母；没有资料时可以提出请求，而不自行创造一个看似合理的答案。单位正确是必要条件，字段对象与计算依据也要正确。`,
`Tiempo de visualización refers to watch time, and the help explicitly labels horas, meaning hours. It is different from average view duration and from the creator’s broadcast airtime. Retain both unit and actual window in translation.

If a worksheet needs minutes, make the conversion explicit and retain the source value. A hypothetical 60 hours equals 3,600 minutes. This is a unit exercise, not a client result or an assertion that each viewer watched for 60 hours.

Do not divide accumulated time by a mismatched public count and call the result the official average duration. The original average field can have its own applicable denominator. Request it where needed instead of inventing a plausible answer. Correct units are necessary alongside correct objects and calculation bases. A translated column should tell the reader which quantity it preserves, rather than use the broad word engagement to hide whether the source concerned time, counts or an average of a particular viewing group.`),
s('给口径变化保留日期','Keep dates with counting changes',`YouTube 的西语计数说明同样列出 2026 年 8 月 24 日跨格式观看计数更新。本稿在 2026 年 11 月 16 日核验，不把旧资料中的统一秒数条件继续用于当前公共观看解释。

如果历史报告使用不同说明，保留当时口径与时期。语言相同不代表跨期指标一定可直接比较，语言不同也不代表指标一定不同；需要实际看字段与条件，而不是仅根据词形判断。

对平台广告、收益或资格资料，还要留意它们是否讨论另一种观看对象。翻译过程中最容易发生的错误，是把限定语省掉后，只剩一个通用的“观看”。品牌可以要求简洁，但不能要求简洁到改变了原来的事实关系。`,
`YouTube’s Spanish counting guide also identifies the August 24, 2026 cross-format view-count update. Reviewed November 16, 2026, this article does not apply an old universal seconds threshold to the current public-view explanation.

Where a historical report used another definition, retain its basis and period. A shared language does not make cross-period measures comparable, while different languages do not necessarily make them different. Examine the actual field and conditions rather than the shape of its name alone.

Advertising, earnings and eligibility material may concern another viewing object too. A common translation error is stripping qualifications until only a generic word for views remains. A brand can request brevity without requesting a change in the underlying factual relationship. Keep a dated definition note when needed so a later reviewer understands why the present mapping was chosen and which part should be revisited if platform guidance or the report’s actual field changes.`,['ytCountsEs']),
s('把时期和筛选一起翻译','Translate period and filters with the field',`一列名为 visualizaciones 的记录，还需要知道是哪一条作品、什么期间与哪些筛选。将“过去 48 小时”省成“总观看”，就算词典翻译完全正确，也会改变资料含义。

核对稿中保留原始时间表达、对应时区和读取时间；如果这些信息没有提供，就明确缺失。视频、Shorts、直播、付费与其他适用范围，也不应在语言交接时自动混合。

达人视频计数核对指南处理不同来源与窗口的比较。翻译团队可以沿用同一对象记录，避免一边翻译一边换成新截图。需要新资料时，说明新旧版本与原因，保证报告负责人知道哪个值进入了最终结论，而不是只看到一个已经换过来源的数字。`,
`A visualizaciones column still needs its work object, period and filters. Turning the past 48 hours into total views changes meaning even if the dictionary translation is flawless.

Retain original time wording, relevant time zone and retrieval time. Where they were not supplied, name the gap. Videos, Shorts, live, paid and other applicable scopes should not be mixed automatically during the language handoff.

The sponsored view-count reconciliation guide addresses comparisons across sources and windows. Translators can use the same object record instead of changing screenshots while translating. If new material is needed, identify the new and old versions and the reason, so the report owner knows which value entered the conclusion. They should not receive a number whose source has changed invisibly. This preserves a useful boundary between language work and data collection: either may legitimately change the report, but the change should remain explicit enough for another person to understand and review.`),
s('用一份假设报表练习表达','Rehearse wording with a hypothetical report',`假设同一相关记录显示 1,200 次观看、800 估计独立观众与 60 小时观看时间，条件暂按已对齐理解。这是练习数据，不是行业基准，也不代表任何创作者实际表现。

中文可以分别命名这三项，英文也保留 views、estimated unique viewers 与 watch time。不能写成“1,200 名用户平均看了 60 小时”，因为它同时把次数变人数、累计变平均，还丢掉估计性质。

若需要一句摘要，可以写在该窗口观察到相应观看与时间记录，并指出它不直接证明购买或全部产品理解。练习的目标是让精简表达仍然准确，不是把三个数拼成更有说服力的故事。任何额外解释，都要知道自己新增了什么假设。`,
`Suppose one relevant record shows 1,200 views, 800 estimated unique viewers and 60 hours of watch time, with conditions assumed aligned for the exercise. These are invented figures, not a benchmark or any creator’s actual performance.

Retain views, estimated unique viewers and watch time in English and equivalent separate names in Chinese. “1,200 users watched for an average of 60 hours” turns events into people, accumulated time into an average and removes estimation simultaneously.

A summary can say that the corresponding viewing and time records were observed in that window while leaving purchase and complete product understanding unproven. The aim is concise accuracy, not combining three numbers into a more persuasive story. Any additional interpretation needs its assumptions identified. A reviewer can then tell whether a disagreement is about translation, data scope or a new inference, rather than debate a sentence in which all three have been changed together without acknowledgment.`),
s('审阅读者会怎样理解','Review the reader’s likely interpretation',`请熟悉目标语言与项目的人读最终对象，而不只对照术语表。标题、图表单位、脚注和摘要需要一起看；正文保留估计，图表标题却写“精确人数”，仍然不一致。

西语标签可以作为来源词保留，不需要把整篇报告做成三语混排。首次说明对应关系后，按目标读者使用清楚语言，并给审阅者找到原记录的路径。不要为了 SEO 反复堆放同一关键词。其他地区版本若使用不同标签，保留实际来源用词再核对含义，不把本篇词表当成所有界面的完整清单。

需要更正时，指出被改变的字段与受影响结论。若只是语言选择不同，可以讨论可读性；若对象、单位或窗口改变，就应处理事实含义。两类意见分清，有助于创作者与品牌沟通，也不把正常翻译修订误当成数据不诚实。`,
`Ask someone familiar with the target language and assignment to read the finished object rather than compare a glossary alone. Review title, chart unit, note and summary together. Retaining estimated in prose while a chart claims exact people is still inconsistent.

Spanish labels can remain as source terms without making the entire report a three-language collage. Explain the mapping first, then use clear language for the reader and a route back to the original record. Repeated keyword stuffing adds no value to the handoff. If another regional version uses a different label, retain that actual source wording and check its meaning rather than treat this glossary as a complete inventory of every interface.

When correcting, identify the field and affected conclusion. A language preference can be discussed as readability; a changed object, unit or window changes factual meaning. Separate those kinds of feedback to help creator and brand communicate without describing ordinary translation revision as dishonesty. It also helps the final editor prioritize a misleading chart label over a harmless stylistic difference, because the two do not create the same risk to the reader’s interpretation.`),
s('交付一份能回到来源的报告','Deliver a report that leads back to its source',`最终报告保留精简术语对应、来源、对象、时期、单位、版本与未决问题。不是每位读者都需要原始细节，但适当审阅者应能核对结论依据，避免转发之后词义越来越宽。

如果没有取得独立观众或业务资料，就只报告实际有的观看与时长，说明限制。不因为多了一种语言，就多出一项已经验证的成果；也不因为翻译完成，就声称完成了整套数据审核。

Views en YouTube 的跨语言工作，最终应帮助品牌理解达人内容实际发生了什么。把次数、估计人数和时间留在正确位置，才能在不同团队之间继续讨论真实作品、适当比较与下一次合作。`,
`The final report should retain a concise mapping, sources, objects, periods, units, versions and open questions. Not every reader needs all raw detail, but an appropriate reviewer should be able to trace the conclusion. That prevents meaning from expanding every time the report is forwarded.

Without unique-viewer or business evidence, report the available views and time with limits. Another language does not create another verified outcome, and completed translation does not establish completion of an entire data review.

Multilingual work around views en YouTube should help a brand understand what happened around creator content. Keep counts, estimated people and time in their correct places so different teams can continue discussing actual work, suitable comparisons and another collaboration. A useful translation preserves the measure’s boundaries as carefully as its words. That gives a client a comprehensible report without asking the creator to accept a stronger claim than the source ever supplied.`)
],
links:[link('达人指标决策指南','creator-metrics decision guide','social-media-metrics-creator-decision-tree'),link('达人视频计数核对指南','sponsored view-count reconciliation guide','youtube-sponsored-view-count-reconciliation')],
figures:[{file:'youtube-spanish-metric-map.svg',afterSection:4,alt:p('西语 visualizaciones、usuarios únicos 与 tiempo de visualización 分别对应观看、独立观众和时间','A glossary diagram maps visualizaciones, usuarios únicos and tiempo de visualización to counts, distinct audience and time'),caption:p('翻译标签时保留对象与单位；这三个字段不互相替代。','Retain object and unit when translating; these three fields are not substitutes.')}],
table:{title:p('西语字段的中文与英文解释','Chinese and English explanations of Spanish fields'),headers:[p('原字段','Source label'),p('解释','Explanation'),p('保留边界','Retain the boundary')],rows:[[p('Visualizaciones','Visualizaciones'),p('观看次数','Views'),p('次数不是独立人数','Events are not distinct people')],[p('Usuarios únicos','Usuarios únicos'),p('估计独立观众','Estimated unique viewers'),p('保留期间与估计性质','Retain period and estimation')],[p('Tiempo de visualización (horas)','Tiempo de visualización (horas)'),p('观看时间（小时）','Watch time in hours'),p('累计不是平均停留','Accumulated time is not average duration')],[p('Duración media de las visualizaciones','Duración media de las visualizaciones'),p('适用观看的平均时长','Average duration under its applicable basis'),p('核对原字段与分母','Check original field and denominator')]],note:p('按核验时官方帮助整理的解释，不是所有地区界面的逐项实测或通用转化词典。','Explanations based on reviewed official help, not testing of every regional interface or a universal conversion dictionary.')},
tool:{title:p('翻译达人报表之前','Before translating a creator report'),intro:p('保留含义，再整理表达。','Preserve meaning before polishing expression.'),items:[p('找到原记录与实际对象。','Find the source record and actual object.'),p('分开观看、估计人数与时间。','Separate views, estimated people and time.'),p('保留单位、期间和筛选。','Retain unit, period and filters.'),p('核对有日期的计数定义。','Check the dated counting definition.'),p('不把缺失字段补成新结论。','Do not fill missing fields with new conclusions.'),p('让最终图表与摘要表达一致。','Align the finished chart and summary.')]}
});
