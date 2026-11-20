import {makePost} from './authoring.mjs';
export default makePost({
  "id": 26,
  "summary": [
    "先对齐帖子、分发与时间窗口，再解释 Facebook Insights 中的合作表现，避免把不同对象的数字直接相加。",
    "Align post, distribution and time window before interpreting creator results in Facebook Insights."
  ],
  "description": [
    "Facebook Insights 怎样复盘达人合作：分清主页与帖子、自然与付费、观看与人数，以及指标估算和缺失值的含义。",
    "Use Facebook Insights for creator collaboration by distinguishing Page and post scope, organic and paid distribution, counts and people, estimates and missing data."
  ],
  "coverAlt": [
    "对象、窗口与定义三个文字层次组成黑白蓝色编辑封面",
    "An editorial cover separates object, window and definition in black, white and blue"
  ],
  "answer": [
    "用 Facebook Insights 复盘达人合作，先说明数字属于哪个主页、帖子、分发来源和时间窗口，再解释指标。主页总量不等于某位创作者的贡献，观看次数不等于独立人数，自然与付费也不能在不清楚口径时直接相加。对照实际字段说明，保留估算、缺失与权限限制。把可以支持的观察写清楚，再决定下一步内容或投放行动，而不是用最大数字代替结论。",
    "For creator collaboration, first identify the Page, post, distribution source and time window behind a Facebook Insights number. A Page total is not one creator’s contribution, views are not necessarily unique people, and organic and paid figures should not be added without compatible definitions. Inspect the actual field documentation and preserve estimates, missing values and access limitations. State the observation the data supports, then decide the next content or distribution action rather than substitute the largest visible number for an explanation."
  ],
  "sections": [
    [
      [
        "从一个明确对象开始",
        "Begin with an identified object"
      ],
      [
        "Meta Insights 对象说明区分不同对象的接口。主页、内容与广告相关报告不是可以随意互换的同一张表，名称相似也要核对实际范围。\n\n记录主页与帖子标识、创作者关系及观察窗口。合作作品由谁制作、发布在哪里、是否存在其他版本，需要在报告里说清楚。\n\n社交媒体指标决策方法先问需要什么决定。本篇继续处理 Facebook 具体合作帖的对象与口径，帮助团队避免把主页整体变化归到单条作品。\n\n帖子改编或跨平台发布后，也保留与原委托的关系，并定位实际被统计的版本，不只指向创作者主页或活动名称。若只拿到截图，保留原报告范围并请求必要字段。不应靠页面裁切猜测它属于帖子还是主页，也不要把看不到的权限范围默认为不存在数据。",
        "Meta’s Insights endpoint reference distinguishes endpoints for different objects. Page, content and advertising reports are not one interchangeable table; similar labels still need scope checking.\n\nRecord Page and post identifiers, the creator relationship and observation window. Explain who produced the work, where it appeared and whether other versions exist.\n\nThe social-media metrics decision method starts with the decision required. This article examines object and measurement scope for a specific Facebook collaboration so a Page-wide change is not assigned to one piece of work.\n\nFor a screenshot-only handover, preserve the report context and request necessary fields. Do not infer Page or post scope from a crop, or treat inaccessible data as nonexistent.\n\nWhen a post is edited or cross-published, keep the relationship to the original commission without assuming every published instance is identical. A reviewer should be able to locate the exact item counted, not merely the creator’s profile or the campaign name. This initial identification makes later comparisons meaningful. Without it, two people can discuss the same campaign while one reports a Page summary and another a selected post. The numbers may both be accurate within their own reports, yet the comparison can still be invalid. A short object record prevents that mismatch before it reaches a creator evaluation or budget decision."
      ],
      [
        "metaInsightEndpoints"
      ]
    ],
    [
      [
        "确认字段与访问条件",
        "Check the field and access conditions"
      ],
      [
        "Meta Insights 概览说明指标与对象、权限及任务有关。实际能查看的字段取决于对应条件，不能承诺每一位创作者都能提供完全相同的报告。\n\n请有权限的人确认字段名称、定义与来源，记录导出日期。不要为完成报告索取私人登录，也不要将某个接口字段说成所有原生界面的固定名称。\n\n缺少指标时先标明未提供、无权限或不适用。零值、空白和不存在字段是不同状态，不应统一填成零让表格看起来完整。\n\n如果来源在后续更新，保留实际版本与时期。字段定义发生变化时，需要评估可比性，不能让相同列名掩盖背后含义已经改变。",
        "Meta’s Insights overview relates metrics to objects, permissions and tasks. Available fields depend on the applicable conditions; not every creator can promise an identical report.\n\nHave an authorized person confirm field name, definition and source, including export date. Do not request private logins to finish the report or present one API field as a permanent label in every native interface.\n\nWhen a measure is absent, distinguish not supplied, inaccessible and not applicable. Zero, blank and an unavailable field are different states. Filling them all with zero makes the table appear complete at the expense of meaning.\n\nIf the source later changes, retain the actual version and period. A changed definition requires a comparability review rather than letting the same column name conceal a different meaning.\n\nThis is particularly useful when combining creator-supplied evidence with brand-side reports. The two sources may expose different information without either party withholding something improperly. Start with the actual access and object limitations, then decide what can fairly be evaluated instead of treating every gap as evidence of poor performance."
      ],
      [
        "metaInsights"
      ]
    ],
    [
      [
        "为作品建立分发关系",
        "Map the work to its distribution"
      ],
      [
        "一份作品可能出现在创作者帖子、品牌主页与广告中。记录实际版本与分发关系，不将它们当作彼此独立的全部新增受众。\n\n自然与付费的范围也需要定义。一个汇总包含付费影响时，不能再把相关广告观看直接叠加，声称得到更高的独立覆盖。\n\n假设品牌保存了原帖截图和一份广告报告，应先判断是否涉及相同内容与重叠期间。这是假设核对场景，不是实际客户数据或推荐基准。\n\n保留作品、帖子和分发记录的关系，可以帮助解释后续差异。不要仅凭文件名相同就认定报告完全相同，也不因版本不同就假定观看人群没有重叠。",
        "One piece of work may appear on a creator post, a brand Page and an advertisement. Record actual versions and distribution relationships instead of treating them as independent additions to the audience.\n\nDefine organic and paid scope as well. If a summary includes paid impact, adding related advertising views again cannot establish a larger unique reach.\n\nImagine the brand holds an original-post screenshot and an advertising report. First determine whether they concern the same work and overlapping periods. This is a hypothetical reconciliation task, not client data or a recommended benchmark.\n\nPreserving the relationship between work, posts and distribution helps explain later differences. Identical filenames do not establish identical reports, and different versions do not imply non-overlapping viewers.\n\nA useful map can be very small: the commissioned asset, its published instance and the distribution that promoted it. Its purpose is to keep the measurement connected to what actually happened. It also helps reviewers ask the right person for clarification instead of asking the creator to explain brand-side advertising that was outside the creator’s operational responsibility."
      ],
      []
    ],
    [
      [
        "保持时间窗口可比较",
        "Keep observation windows comparable"
      ],
      [
        "同一天发布的帖子，如果一个在发布后一天导出，另一个在一周后导出，不能直接作为同样成熟的结果比较。记录发布、统计起止与导出时点。\n\n活动期间、完整作品生命周期与广告归因窗口也不是同一概念。具体报告采用哪一个，就按其真实定义说明，不将平台之间的时间习惯硬套在一起。\n\n需要比较时，先形成相同观察规则，再判断是否还受主题、分发和受众差异影响。统一时间并不自动产生因果结论。\n\n迟到的数据与修正应保留状态，不把后来更新隐藏掉。负责人需要知道当前结论依据哪个窗口，下一次何时复查，而不是在多个截图之间寻找一个最好看的数字。",
        "Posts published on the same day are not equally mature if one report is exported a day later and another a week later. Record publication, reporting start and end, and export time.\n\nCampaign period, the full life of a piece and an advertising attribution window are also different concepts. Describe the actual report rather than force one platform’s timing convention onto another.\n\nBefore comparing, establish the same observation rule, then examine remaining differences in topic, distribution and audience. Equal timing does not itself create a causal conclusion.\n\nPreserve the state of late data and revisions instead of hiding subsequent changes. The decision owner needs to know which window supports the conclusion and when it will be reviewed, rather than select the most impressive number across screenshots.\n\nThis is a practical fairness issue in creator evaluation. A recently released piece should not be penalized merely because it has had less time to accumulate the reported measure. Where a comparable window is unavailable, state that limitation and use the evidence for a narrower operational observation instead of pretending the comparison is complete."
      ],
      []
    ],
    [
      [
        "保留估算与归因的限定",
        "Retain estimation and attribution qualifications"
      ],
      [
        "Meta 广告指标说明提示某些指标属于估算或仍在开发。应核对具体字段的限定，不能把这句话扩大成所有自然数据都只是估算。\n\n涉及广告结果时保留归因设置与实际报告范围。显示一次结果，不等于已经证明仅由某位创作者独立造成，也不自动代表完成订单或收入。\n\n达人 KPI 决策约定方法强调指标要服务行动。报告可以说明某个观察支持进一步检查落地页，但不能把一次相关变化直接写成因果证明。\n\n如果资料不足，结论可以暂时保留。透明地说明范围，比删除限定词获得一个看似明确的数字更有助于负责人作决定。",
        "Meta’s ad-insight reference identifies qualifications for estimated or in-development metrics. Check the particular field rather than expand that warning into a claim that all organic data is estimated.\n\nFor advertising results, retain attribution settings and report scope. A displayed result does not establish that one creator independently caused it, and it is not automatically an order or revenue.\n\nThe creator KPI decision-agreement method connects a measure to an action. A report may justify inspecting a destination, but a related change is not by itself causal proof.\n\nWhere material is insufficient, a conclusion can remain open. Stating scope transparently helps a decision owner more than removing qualifications to obtain an apparently definite number.\n\nThis does not make the report unusable. Many operational decisions can rely on a clearly limited observation: verify tracking, review a version or investigate an unexpected discrepancy. The important step is matching the strength of the action and the wording of the conclusion to the evidence available, rather than giving every visible result the same certainty."
      ],
      [
        "metaAdInsights"
      ]
    ],
    [
      [
        "不要混同次数、人数与转化",
        "Keep counts, people and conversions distinct"
      ],
      [
        "观看次数、覆盖人数、互动与业务结果回答不同问题。没有实际字段定义时，不把观看改写为独立观众，也不把评论直接称为潜在客户。\n\n某些变现报表还会使用与收入资格有关的观看口径，不能直接拿来代替品牌销量。解释数字前先确认其用途，而不是因为名称含有“合格”就推断业务质量。\n\n假设一个报告显示多次播放，另一个报告记录独立触达，即使后者较小，也不一定是数据错误。它们可能在计数对象上不同，需要核对定义。\n\n业务结果应有实际来源和适当关联依据。无法连接时可以分开报告内容表现与业务观察，不用一个推算系数把所有观看换算成收入。",
        "Views, reach, interactions and business outcomes answer different questions. Without the actual definition, do not rewrite views as unique viewers or comments as leads.\n\nSome monetization reports also use viewing definitions tied to earning eligibility. Those should not substitute for brand sales. Establish the measure’s purpose before interpreting a word such as qualified as evidence of business quality.\n\nImagine one report counts repeated plays while another records unique reach. A smaller second figure need not be an error; the counted object may differ and needs checking.\n\nBusiness outcomes require an actual source and an appropriate relationship to the content. When that connection is unavailable, report content performance and business observations separately rather than turn every view into revenue with an assumed conversion factor.\n\nThis helps the brand choose the next investigation. A high view count with unresolved product questions may call for a clearer demonstration. A destination problem requires a different owner. Treating all measures as one success total would conceal those distinctions and make the report less useful for improving the next creator collaboration."
      ],
      []
    ],
    [
      [
        "差异先核对再评价创作者",
        "Reconcile discrepancies before judging the creator"
      ],
      [
        "两份报告不一致时，按对象、版本、分发、窗口与定义逐项检查。不要第一反应就指控创作者造假，也不应要求其提供不在权限范围内的数据。\n\n保留原始来源与更正记录。能解释的差异写出原因；暂时不能解释的保持未决，不让内部猜测变成正式评价。\n\n复盘先问合作任务是否得到回答，再看相应证据。如果任务是演示操作，只有总观看量不足以判断内容是否讲清步骤。\n\n团队可以约定下一次需要哪些报告，但应在合作前确认可用性与工作量。不要到结算时新增一套从未约定且创作者无法获得的证据要求。",
        "When two reports differ, check object, version, distribution, window and definition in order. Do not start by accusing the creator of falsification or demand information beyond their access.\n\nRetain sources and correction history. Explain resolved discrepancies; leave unresolved ones open rather than allowing internal speculation to become an official evaluation.\n\nReview whether the collaboration task was answered before selecting relevant evidence. Total views alone cannot establish whether a step-by-step demonstration made the operation understandable.\n\nThe team can agree on evidence for the next collaboration, but confirm availability and workload in advance. Settlement should not introduce a new reporting requirement that was never agreed and cannot be obtained by the creator.\n\nA fair reconciliation process also separates an error from misconduct. A mislabeled export can need correction without justifying a broader allegation about the person. Keep the response proportionate to what the evidence establishes, preserve the corrected interpretation and avoid carrying an unsupported negative label into future creator research or partnership decisions."
      ],
      []
    ],
    [
      [
        "交接可以采取行动的结论",
        "Hand over a conclusion that supports action"
      ],
      [
        "最终表格保留帖子对象、分发来源、窗口、字段定义、限定与下一步。负责人应能回到证据，而不是只看到一个失去上下文的总数。\n\n可采取行动的结论可以很小：补齐一个字段、核对目的地、延后比较，或给下一支作品改进解释。这不等于每次都要证明销售增长。\n\nQuickKOL 支持从 Brief 研究达人及其作品，实际 Insights、广告报告与业务结果仍需各自来源。不要暗示所有数据已被工具自动合并或归因。\n\n清楚的复盘帮助团队判断哪里需要新内容、哪里需要更好证据。把数字放回正确对象和任务，比反复追逐最大总量更能支持下一次合作。",
        "The final table retains post identity, distribution, window, field definition, qualifications and next action. A reviewer should be able to return to the evidence rather than see a contextless total.\n\nAn actionable conclusion can be modest: obtain a field, check a destination, postpone a comparison or improve the next explanation. Every review need not prove sales growth.\n\nQuickKOL supports research of creators and their work from a brief. Actual Insights, advertising reports and business outcomes require their own sources. Do not imply all data has been automatically combined or attributed by the tool.\n\nA clear review helps the team decide where it needs new content and where it needs better evidence. Returning numbers to the correct object and task supports the next collaboration more effectively than repeatedly pursuing the largest total.\n\nThe handover succeeds when another person can understand both the finding and its boundary. They should know what can be done now, what must be confirmed first and which apparent comparisons were deliberately left unresolved because the underlying reports did not describe the same thing."
      ],
      []
    ]
  ],
  "links": [
    {
      "terms": [
        "社交媒体指标决策方法",
        "social-media metrics decision method"
      ],
      "url": "/blog/social-media-metrics-creator-decision-tree/#answer"
    },
    {
      "terms": [
        "达人 KPI 决策约定方法",
        "creator KPI decision-agreement method"
      ],
      "url": "/blog/social-kpi-creator-decision-contract/#answer"
    }
  ],
  "figures": [
    {
      "file": "facebook-insights-creator-post-scope-ledger-framework.svg",
      "afterSection": 4,
      "alt": [
        "帖子对象、分发来源、观察窗口和指标定义四项对照",
        "Four checks for object, distribution, window and metric definition"
      ],
      "caption": [
        "先对齐口径，再比较数字。",
        "Align measurement scope before comparing numbers."
      ]
    }
  ],
  "table": {
    "title": [
      "合作帖指标核对表",
      "Reconcile creator-post metrics"
    ],
    "headers": [
      [
        "字段",
        "Field"
      ],
      [
        "必须说明",
        "Specify"
      ],
      [
        "避免推断",
        "Avoid inferring"
      ]
    ],
    "rows": [
      [
        [
          "对象",
          "Object"
        ],
        [
          "主页、帖子或广告",
          "Page, post or ad"
        ],
        [
          "全部属于单个达人",
          "All belongs to one creator"
        ]
      ],
      [
        [
          "分发",
          "Distribution"
        ],
        [
          "自然、付费与重叠",
          "Organic, paid and overlap"
        ],
        [
          "直接相加为独立覆盖",
          "Sum into unique reach"
        ]
      ],
      [
        [
          "时间",
          "Time"
        ],
        [
          "起止与导出时点",
          "Window and export date"
        ],
        [
          "不同成熟度可直接比较",
          "Unequal maturity is comparable"
        ]
      ],
      [
        [
          "指标",
          "Measure"
        ],
        [
          "定义、估算与缺失",
          "Definition, estimates and gaps"
        ],
        [
          "观看就是销售",
          "Views equal sales"
        ]
      ]
    ],
    "note": [
      "编辑核对字段，不是平台完整指标字典。",
      "Editorial reconciliation fields, not a complete platform metric dictionary."
    ]
  },
  "tool": {
    "title": [
      "交接 Facebook 合作复盘",
      "Hand over a Facebook creator review"
    ],
    "intro": [
      "让每个数字保留范围。",
      "Keep scope attached to each number."
    ],
    "items": [
      [
        "确认实际主页与帖子。",
        "Identify the actual Page and post."
      ],
      [
        "标出自然与付费关系。",
        "Map organic and paid distribution."
      ],
      [
        "记录观察窗口与导出日期。",
        "Record window and export date."
      ],
      [
        "核对字段与访问限制。",
        "Check definitions and access limits."
      ],
      [
        "分别记录零值与缺失。",
        "Separate zero and missing values."
      ],
      [
        "给结论附上下一步与责任人。",
        "Attach an action and owner to the finding."
      ]
    ]
  }
});

