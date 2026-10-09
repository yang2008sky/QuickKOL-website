const pair = (zh, en) => [zh, en];

const sources = {
  iab2025: {
    id: 'iab2025',
    label: pair('IAB《2025 Creator Economy Ad Spend & Strategy Report》', 'IAB 2025 Creator Economy Ad Spend & Strategy Report'),
    url: 'https://www.iab.com/insights/2025-creator-economy-ad-spend-strategy-report/',
  },
  ftcDisclosure: {
    id: 'ftcDisclosure',
    label: pair('美国 FTC《Disclosures 101 for Social Media Influencers》', 'FTC: Disclosures 101 for Social Media Influencers'),
    url: 'https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers',
  },
  asaDisclosure: {
    id: 'asaDisclosure',
    label: pair('英国 ASA/CAP《Influencers’ guide to making clear that ads are ads》', 'ASA/CAP: Influencers’ guide to making clear that ads are ads'),
    url: 'https://www.asa.org.uk/static/790d2e01-e3f8-4fea-b3c99ef91a9f04dc/Influencerguidance2023v4-FINAL.pdf',
  },
  youtubeAnalytics: {
    id: 'youtubeAnalytics',
    label: pair('YouTube 官方：Content tab analytics tips', 'YouTube Help: Content tab analytics tips'),
    url: 'https://support.google.com/youtube/answer/12942217?co=YOUTUBE._YTVideoType%3Dvideo&hl=en',
  },
  youtubeCtr: {
    id: 'youtubeCtr',
    label: pair('YouTube 官方：Decoding CTR & impressions', 'YouTube Help: Decoding CTR & impressions'),
    url: 'https://support.google.com/youtube/answer/16767369?hl=en',
  },
  youtubePaid: {
    id: 'youtubePaid',
    label: pair('YouTube 官方：Embedded sponsorships and paid promotions', 'YouTube Help: Embedded sponsorships and paid promotions'),
    url: 'https://support.google.com/youtube/answer/3364658?hl=en-GB',
  },
  youtubeBrandAccess: {
    id: 'youtubeBrandAccess',
    label: pair('YouTube 官方：Sharing brand partner access', 'YouTube Help: Sharing brand partner access'),
    url: 'https://support.google.com/youtube/answer/15672082?co=GENIE.Platform%3DDesktop&hl=en',
  },
  youtubeBrandDeals: {
    id: 'youtubeBrandDeals',
    label: pair('YouTube 官方：Tips for getting brand deals', 'YouTube Help: Tips for getting brand deals'),
    url: 'https://support.google.com/youtube/answer/12928947?hl=en',
  },
  tiktokQuality: {
    id: 'tiktokQuality',
    label: pair('TikTok 官方：Creator commercial content quality standard', 'TikTok Business: Creator commercial content quality standard'),
    url: 'https://ads.tiktok.com/resources/help/article/about-tiktoks-content-quality-standard-for-creator-commercial-content',
  },
  tiktokCollab: {
    id: 'tiktokCollab',
    label: pair('TikTok 官方：Working with creators on TikTok One', 'TikTok Business: Working with creators on TikTok One'),
    url: 'https://ads.tiktok.com/help/article/about-working-with-creators-on-tiktok-one-campaigns?lang=en',
  },
  gaUtm: {
    id: 'gaUtm',
    label: pair('Google Analytics 官方：URL builders and campaign parameters', 'Google Analytics Help: URL builders and campaign parameters'),
    url: 'https://support.google.com/analytics/answer/10917952?hl=en',
  },
  gaAttribution: {
    id: 'gaAttribution',
    label: pair('Google Analytics 官方：Get started with attribution', 'Google Analytics Help: Get started with attribution'),
    url: 'https://support.google.com/analytics/answer/10596866',
  },
  gaModeled: {
    id: 'gaModeled',
    label: pair('Google Analytics 官方：About modeled key events', 'Google Analytics Help: About modeled key events'),
    url: 'https://support.google.com/analytics/answer/10710245?hl=en',
  },
  nistAiRmf: {
    id: 'nistAiRmf',
    label: pair('NIST《AI Risk Management Framework 1.0》', 'NIST AI Risk Management Framework 1.0'),
    url: 'https://www.nist.gov/itl/ai-risk-management-framework',
  },
};

export const additionalBlogEnhancements = {
  'audit-creator-audience-quality': {
    deepDive: [
      {
        heading: pair('用 3 层证据判断受众是否真的匹配', 'Use three evidence layers to test real audience fit'),
        body: pair(
          '第一层是平台受众数据：市场、语言、年龄和性别等字段必须带提取日期与时间窗。第二层是内容行为：选 10 条与本次任务相近的内容，记录中位观看、平均观看时长、流量来源与互动分母。YouTube 明确把平均观看时长、观看量和受众信息放在内容分析语境中解释，因此不应把一张粉丝画像截图当作全部证据。第三层是评论与内容语境：抽取至少 30 条有实际信息的评论，区分产品问题、使用反馈、抽奖参与和无关互动。\n\n三层不需要得到完全相同的答案，但冲突必须解释。例如平台显示 70% 受众来自目标市场，而相关内容的评论和语言主要来自其他地区，就应标记数据窗口、内容样本或付费流量可能存在差异。一个实用记录可以写成：已确认两条证据、一个矛盾、两个待确认项，而不是把它压缩成 82 分。',
          'Layer one is platform audience data: fields such as market, language, age and gender need an extraction date and reporting window. Layer two is content behavior: select 10 posts comparable to the assignment and record median views, average view duration, traffic source and engagement denominator. YouTube places average view duration, views and audience information inside the broader content-analytics context, so one follower-demographic screenshot is not enough. Layer three is comment and content context: review at least 30 informative comments, separating product questions, use feedback, giveaway participation and unrelated activity.\n\nThe layers do not need to produce identical answers, but conflicts require an explanation. If platform data shows 70% of viewers in the target market while relevant comments and language come mainly from elsewhere, flag a possible difference in date window, content sample or paid distribution. A useful record can say two signals confirmed, one conflict and two open questions instead of compressing everything into a score of 82.'
        ),
        citations: ['youtubeAnalytics'],
      },
      {
        heading: pair('把受众质量与账号规模分开', 'Separate audience quality from account size'),
        body: pair(
          'IAB 估算美国 Creator Economy 广告投入在 2025 年达到 370 亿美元，同比增长 26%。市场扩大让更多账号进入品牌合作，也让标准化证据更重要；它不能证明大账号天然拥有更优质的受众。受众质量必须回到具体 Campaign：同一个创作者对全球娱乐产品可能匹配，对受监管的本地金融产品却可能完全不合适。\n\n建议为每位候选保留 4 个可见结果：目标市场受众占比、10 条同类内容的中位观看、信息型评论占比和证据新鲜度。前 3 项用于比较，第 4 项决定是否需要重新请求数据。TikTok 的商业内容质量标准也强调商业内容需要满足明确的质量与合规要求；品牌不应把高互动当作省略内容审核的理由。',
          'IAB estimated that U.S. creator-economy advertising spend would reach $37 billion in 2025, up 26% year over year. A larger market brings more accounts into brand work and makes standardized evidence more important; it does not prove that large accounts have higher-quality audiences. Audience quality remains campaign-specific: one creator may fit a global entertainment product and be entirely unsuitable for a regulated local financial offer.\n\nKeep four visible results for each candidate: target-market audience share, median views across 10 comparable posts, share of informative comments and evidence freshness. Use the first three for comparison and the fourth to decide whether new data is needed. TikTok’s commercial-content quality standard also sets explicit quality and compliance expectations; high engagement does not remove the need for content review.'
        ),
        citations: ['iab2025', 'tiktokQuality'],
      },
    ],
    table: {
      title: pair('受众质量证据表', 'Audience-quality evidence table'),
      note: pair('阈值必须由 Campaign 自己定义；“待确认”比猜测更有用。', 'Set thresholds for the campaign; “unknown” is more useful than a guess.'),
      headers: [pair('证据', 'Evidence'), pair('记录方式', 'Record'), pair('常见误判', 'Common mistake')],
      rows: [
        [pair('市场与语言', 'Market and language'), pair('占比、日期、窗口', 'Share, date, window'), pair('把粉丝地区当观看地区', 'Followers treated as viewers')],
        [pair('内容行为', 'Content behavior'), pair('10 条同类内容中位数', '10-post comparable median'), pair('用一次爆款代表常态', 'One breakout treated as normal')],
        [pair('评论语境', 'Comment context'), pair('30 条信息型评论抽样', '30 informative comments'), pair('把表情和抽奖算作意向', 'Emoji and giveaways treated as intent')],
        [pair('流量背景', 'Traffic context'), pair('自然 / 付费 / 混合', 'Organic / paid / mixed'), pair('把放大结果当自然基线', 'Paid result treated as organic')],
      ],
    },
    tool: {
      kind: 'reference-list',
      title: pair('受众质量复核清单', 'Audience-quality review checklist'),
      intro: pair('用以下 8 项检查一位候选人的证据是否足以进入外联。', 'Use these eight checks before moving a candidate into outreach.'),
      items: [
        pair('目标市场、语言与排除条件已写入 Brief', 'Target market, language and exclusions are in the brief'),
        pair('受众数据包含日期和报告窗口', 'Audience data includes a date and reporting window'),
        pair('已查看 10 条与任务相近的内容', 'Ten task-relevant posts were reviewed'),
        pair('观看与互动指标写明分母', 'View and engagement metrics label the denominator'),
        pair('付费、热点、抽奖和联名已标记', 'Paid, trend, giveaway and collaboration posts are flagged'),
        pair('至少抽样 30 条有信息的评论', 'At least 30 informative comments were sampled'),
        pair('冲突证据和未知项没有被隐藏', 'Conflicts and unknowns remain visible'),
        pair('结论链接到原始内容或截图', 'The conclusion links to original content or evidence'),
      ],
    },
    internalLinks: ['creator-selection-beyond-followers', 'creator-shortlist-workflow'],
    sources: [sources.youtubeAnalytics, sources.iab2025, sources.tiktokQuality],
  },

  'nano-micro-macro-creator-mix': {
    deepDive: [
      {
        heading: pair('用角色组合替代固定的粉丝层级配比', 'Replace fixed tier ratios with role-based allocation'),
        body: pair(
          '先把 Campaign 拆成 4 种可能的工作：解释复杂产品、在小社区建立可信度、制造发布节点的规模触达、提供可复用素材。然后为每种工作定义数量和证据。例如基础方案可以是 4 位深度演示者、8 位社区型创作者和 1 位发布节点账号，但这些数字只是情景输入，不是行业最佳比例。若团队只能在一周内审核 6 个粗剪，就不能因为单价较低而同时签约 20 位创作者。\n\nTikTok One 的官方项目结构允许直接邀请、开放申请、邀请链接以及内容同步到 Ads Manager，不同合作路径会带来不同的筛选、沟通和放大工作量。YouTube 也建议创作者在品牌合作中明确受众、价值与合作方式。平台能力可以支持组合执行，但最终数量仍应由任务、预算和团队容量决定。',
          'Break the campaign into four possible jobs: explain a complex product, build credibility in a small community, create launch-scale reach and supply reusable assets. Set quantities and evidence for each job. A base scenario might include four deep demonstrators, eight community creators and one launch account, but these are scenario inputs, not an industry-optimal ratio. If the team can review only six rough cuts in a week, it should not sign 20 creators merely because their individual fees are lower.\n\nTikTok One supports direct invitations, open applications, invite links and syncing content to Ads Manager, and each path creates different discovery, communication and amplification work. YouTube also advises creators to clarify their audience, value and partnership approach for brand deals. Platform capabilities can support execution, but job, budget and team capacity should determine the final mix.'
        ),
        citations: ['tiktokCollab', 'youtubeBrandDeals'],
      },
      {
        heading: pair('用预算情景暴露组合风险', 'Use budget scenarios to expose mix risk'),
        body: pair(
          '为基础、缩减和替补 3 个情景分别计算创作发布、权益、放大、物流和预备金。示例：总预算 20 万元，其中 11 万用于创作发布、3 万用于权益、3 万用于放大、1 万用于物流与工具、2 万保留异常；这只是展示结构的示例。若 1 位 Macro 达人占创作预算的 55%，团队应提前写出其退出后的替换组合，以及是否会改变触达目标。\n\nIAB 的市场数据说明品牌对创作者渠道的投入在增加，但单个 Campaign 仍需要可解释的资源分配。比较组合时至少看 5 个结果：预计上线人数、预计内容数量、目标市场有效观看、可复用资产数量和团队每周待处理动作。只用总粉丝量会掩盖执行负担与内容用途。',
          'Calculate creation and publication, rights, amplification, logistics and contingency for base, reduced and replacement scenarios. For example, a 200,000 budget might allocate 110,000 to creation and publication, 30,000 to rights, 30,000 to amplification, 10,000 to logistics and tools, and 20,000 to exceptions; the figures illustrate structure rather than a recommended split. If one macro creator uses 55% of the creation budget, document the replacement mix and whether its withdrawal changes the reach objective.\n\nIAB market data shows expanding brand investment in creator channels, but every campaign still needs an explainable resource allocation. Compare at least five outputs: expected live creators, content quantity, qualified-market views, reusable assets and weekly team actions. Total follower count hides operating load and intended content use.'
        ),
        citations: ['iab2025'],
      },
    ],
    table: {
      title: pair('按任务选择达人角色', 'Choose creator roles by job'),
      note: pair('层级名称用于组织，不代表固定质量或效果。', 'Tier labels organize the pool; they do not guarantee quality or outcome.'),
      headers: [pair('任务', 'Job'), pair('优先证据', 'Priority evidence'), pair('主要风险', 'Main risk')],
      rows: [
        [pair('深度解释', 'Deep explanation'), pair('同类演示、观看时长', 'Comparable demos, watch time'), pair('制作周期与事实准确', 'Production time and accuracy')],
        [pair('社区可信度', 'Community credibility'), pair('评论语境、回复质量', 'Comment context, reply quality'), pair('规模有限', 'Limited scale')],
        [pair('发布触达', 'Launch reach'), pair('稳定观看、目标市场', 'Stable views, target market'), pair('预算集中', 'Budget concentration')],
        [pair('素材生产', 'Asset production'), pair('画面质量、权益范围', 'Production quality, rights'), pair('复用期限与成本', 'Reuse term and cost')],
      ],
    },
    tool: {
      kind: 'budget-plan',
      title: pair('达人组合预算计算器', 'Creator-mix budget calculator'),
      intro: pair('填写各类合作与附加成本，查看总占用和预备金后的可用余额。', 'Enter creator and supporting costs to see total commitment and remaining budget after contingency.'),
      inputs: [
        { key: 'budget', label: pair('Campaign 总预算', 'Campaign budget'), value: 200000, min: 0, step: 1000 },
        { key: 'creatorFees', label: pair('创作与发布费', 'Creation and publication'), value: 110000, min: 0, step: 1000 },
        { key: 'rights', label: pair('使用权', 'Usage rights'), value: 30000, min: 0, step: 1000 },
        { key: 'amplification', label: pair('付费放大', 'Paid amplification'), value: 30000, min: 0, step: 1000 },
        { key: 'operations', label: pair('物流、工具与运营', 'Logistics, tools and operations'), value: 10000, min: 0, step: 1000 },
        { key: 'contingency', label: pair('预备金 %', 'Contingency %'), value: 10, min: 0, max: 100, step: 1 },
      ],
    },
    internalLinks: ['creator-selection-beyond-followers', 'influencer-campaign-budget-planning'],
    sources: [sources.tiktokCollab, sources.youtubeBrandDeals, sources.iab2025],
  },

  'creator-metric-definitions': {
    deepDive: [
      {
        heading: pair('用 4 列数据字典消除同名指标冲突', 'Use a four-column dictionary to remove metric ambiguity'),
        body: pair(
          '每个指标至少保存平台与格式、分子、分母、数据窗口 4 列。例如“互动率（观看口径）= 点赞 + 评论 + 收藏 + 分享 ÷ 观看量”，而“互动率（粉丝口径）”使用粉丝数作为分母。再增加自然、付费或混合流量标签，才能解释放大后的结果。YouTube 提醒 CTR 需要与曝光、流量来源和受众范围一起解读；单独比较 CTR 可能得到错误结论。\n\n示例：A 内容有 1,200 次互动和 20,000 次观看，观看口径互动率为 6%；B 内容有 1,500 次互动和 50,000 次观看，结果为 3%。A 的比率更高，B 的绝对互动更多，两者支持不同决定。报告应显示原始数和公式，不应只留下颜色箭头。',
          'Every metric needs at least four fields: platform and format, numerator, denominator and data window. For example, “engagement rate by views = likes + comments + saves + shares divided by views,” while follower-based engagement uses followers as the denominator. Add an organic, paid or mixed traffic label to explain amplified results. YouTube notes that CTR should be interpreted beside impressions, traffic source and audience scope; comparing CTR alone can produce the wrong conclusion.\n\nFor example, content A has 1,200 interactions and 20,000 views, giving a 6% view-based engagement rate. Content B has 1,500 interactions and 50,000 views, or 3%. A has the higher rate while B has more total interaction, and the results support different decisions. Show raw counts and formulas instead of leaving only colored arrows.'
        ),
        citations: ['youtubeCtr'],
      },
      {
        heading: pair('记录权限、流量与数据更新时间', 'Record permissions, traffic type and update timing'),
        body: pair(
          'YouTube brand partner access 可以向品牌共享观看、平均观看时长、受众与自然和付费拆分等视频级指标，并支持合作内容放大。能看到更多字段并不等于这些字段可以跨平台直接比较；品牌仍需保存平台原始定义与提取时间。对于 GA4，建模关键事件会补充无法直接观察的转化，归因数据在记录后最多仍可能更新 12 天，因此最终报告应写明提取日期。\n\n建议把数据快照分为发布后 24–48 小时、7 天和最终窗口 3 个节点。前两个用于发现异常和优化，最终窗口用于结算与复盘。时间节点属于团队运营规则，不是通用平台标准。',
          'YouTube brand partner access can share video-level views, average view duration, audience information, organic and paid splits, and support partnership amplification. Access to more fields does not make them directly comparable across platforms; preserve the source definition and extraction time. In GA4, modeled key events add conversions that cannot be directly observed, and attributed data may continue updating for up to 12 days after an event is recorded, so final reports need an extraction date.\n\nA practical snapshot schedule is 24–48 hours, seven days and the final reporting window. The first two support exception detection and optimization, while the final point supports closeout and review. These are team operating rules rather than universal platform standards.'
        ),
        citations: ['youtubeBrandAccess', 'gaModeled'],
      },
    ],
    table: {
      title: pair('常用指标口径字典', 'Common metric-definition dictionary'),
      note: pair('同名字段只有在公式、平台和时间窗一致时才可直接比较。', 'Compare matching labels only when formula, platform and window also match.'),
      headers: [pair('指标', 'Metric'), pair('公式或来源', 'Formula or source'), pair('必须附带', 'Required context')],
      rows: [
        [pair('观看口径互动率', 'Engagement by views'), pair('互动 ÷ 观看', 'Interactions ÷ views'), pair('格式、流量类型', 'Format, traffic type')],
        [pair('粉丝口径互动率', 'Engagement by followers'), pair('互动 ÷ 粉丝', 'Interactions ÷ followers'), pair('粉丝数据日期', 'Follower observation date')],
        [pair('CTR', 'CTR'), pair('点击 ÷ 曝光', 'Clicks ÷ impressions'), pair('流量来源、曝光范围', 'Traffic source, impression scope')],
        [pair('平均观看时长', 'Average view duration'), pair('平台分析字段', 'Platform analytics field'), pair('视频时长、数据窗口', 'Video length, data window')],
      ],
    },
    tool: {
      kind: 'engagement',
      title: pair('互动率口径计算器', 'Engagement denominator calculator'),
      intro: pair('输入同一条内容的真实数据，同时查看粉丝口径与观看口径。', 'Enter data from one piece of content to compare follower-based and view-based engagement.'),
      inputs: [
        { key: 'followers', label: pair('粉丝数', 'Followers'), value: 100000, min: 1, step: 100 },
        { key: 'views', label: pair('观看量', 'Views'), value: 25000, min: 1, step: 100 },
        { key: 'likes', label: pair('点赞', 'Likes'), value: 900, min: 0, step: 10 },
        { key: 'comments', label: pair('评论', 'Comments'), value: 120, min: 0, step: 1 },
        { key: 'saves', label: pair('收藏', 'Saves'), value: 180, min: 0, step: 1 },
        { key: 'shares', label: pair('分享', 'Shares'), value: 100, min: 0, step: 1 },
      ],
    },
    internalLinks: ['read-creator-engagement-data', 'creator-campaign-measurement'],
    sources: [sources.youtubeCtr, sources.youtubeBrandAccess, sources.gaModeled],
  },

  'creator-performance-benchmarks': {
    deepDive: [
      {
        heading: pair('用可比组、样本量和区间替代一个行业平均', 'Replace one industry average with cohorts, sample size and range'),
        body: pair(
          '先定义可比组：相同市场、平台、格式、内容任务、自然或付费流量，以及相近的权益和费用范围。每组至少显示样本数，不足 10 个时标记为方向性参考。使用中位数和 25%–75% 区间可以减少一次爆款的影响，同时保留最高、最低和异常原因。YouTube 的内容分析建议也强调把观看、平均观看时长与流量来源放回内容语境中理解。\n\n示例组有 12 条同类视频，中位观看 22k，25%–75% 区间为 18k–29k，其中一条热点视频达到 176k。预算可以用 22k 作为基础情景、18k 作为保守情景、29k 作为乐观情景；176k 作为异常案例解释，不进入最低承诺。',
          'Define a comparable cohort by market, platform, format, content job, organic or paid traffic, and similar rights and fee scope. Show the sample count for every cohort and label groups smaller than 10 as directional. Median and the 25th–75th percentile range reduce the impact of a breakout result while preserving the highest, lowest and outlier reasons. YouTube content analytics guidance likewise places views, average view duration and traffic sources in content context.\n\nSuppose a cohort has 12 comparable videos, a median of 22k views and a 25th–75th percentile range of 18k–29k, with one trend-led video at 176k. Budget with 22k as the base case, 18k as conservative and 29k as optimistic. Keep 176k as an explained case rather than turning it into a minimum commitment.'
        ),
        citations: ['youtubeAnalytics'],
      },
      {
        heading: pair('让基线回答下一步，而不是评价达人价值', 'Use the baseline for decisions, not creator worth'),
        body: pair(
          'Benchmark 应回答是否继续合作、扩大哪类内容、调整哪个环节或需要追加什么证据。表现低于区间不一定说明达人不合适：链接失效、发布时间变化、库存问题或 Brief 偏差都可能影响结果。IAB 对 Creator Economy 投入增长的估算解释了为什么品牌需要更成熟的衡量系统，但宏观增长不能替代单个 Campaign 的归因与内容分析。\n\nGA4 的归因与建模数据也可能随处理更新，因此不同批次必须保存提取日期。每季度重算一次基线是可行的运营节奏示例；当平台定义或投放方式发生变化时，应立即创建新版本，而不是等到季度结束。',
          'A benchmark should answer whether to continue a partnership, expand a content type, change a step or gather more evidence. Falling below the range does not automatically mean the creator is a poor fit: broken links, publication timing, inventory or brief drift may explain the result. IAB’s estimate of growing creator-economy investment explains why brands need mature measurement, but macro growth cannot replace campaign attribution and content analysis.\n\nGA4 attribution and modeled data may also update during processing, so every cohort needs an extraction date. Quarterly recalculation is a workable operating example; create a new version immediately when platform definitions or distribution methods change instead of waiting for quarter end.'
        ),
        citations: ['iab2025', 'gaModeled'],
      },
    ],
    table: {
      title: pair('Benchmark 版本记录', 'Benchmark version record'),
      note: pair('保留历史版本，避免平台或公式变化后误读趋势。', 'Preserve history so platform or formula changes do not distort trends.'),
      headers: [pair('字段', 'Field'), pair('示例', 'Example'), pair('用途', 'Purpose')],
      rows: [
        [pair('可比组', 'Cohort'), pair('英国 / 短视频 / 自然流量', 'UK / short video / organic'), pair('限制比较范围', 'Constrain comparison')],
        [pair('样本量', 'Sample size'), pair('n = 12', 'n = 12'), pair('表达可信程度', 'Show evidence depth')],
        [pair('中位数与区间', 'Median and range'), pair('22k；18k–29k', '22k; 18k–29k'), pair('建立情景', 'Build scenarios')],
        [pair('版本日期', 'Version date'), pair('2026-10-06', '2026-10-06'), pair('识别定义变化', 'Track definition changes')],
      ],
    },
    tool: {
      kind: 'reference-list',
      title: pair('Benchmark 发布前检查', 'Benchmark release checklist'),
      intro: pair('只有以下 8 项都可回答时，基线才适合进入预算或报告。', 'A baseline is ready for budgeting or reporting only when all eight questions have an answer.'),
      items: [
        pair('市场、平台、格式与内容任务一致', 'Market, platform, format and job match'),
        pair('自然、付费或混合流量已标记', 'Organic, paid or mixed traffic is labeled'),
        pair('费用和权益范围可比', 'Cost and rights scope are comparable'),
        pair('显示样本量与数据窗口', 'Sample size and data window are visible'),
        pair('优先使用中位数与区间', 'Median and range are used first'),
        pair('异常点保留原因，不被静默删除', 'Outliers keep an explanation'),
        pair('公式、数据源与提取日期可追溯', 'Formula, source and extraction date are traceable'),
        pair('基线对应一个明确的下一步决定', 'The baseline supports a defined next decision'),
      ],
    },
    internalLinks: ['creator-metric-definitions', 'creator-campaign-measurement'],
    sources: [sources.youtubeAnalytics, sources.iab2025, sources.gaModeled],
  },

  'creator-outreach-follow-up': {
    deepDive: [
      {
        heading: pair('用 Campaign 倒推节奏，而不是复制邮件模板', 'Build timing from the campaign instead of copying a cadence'),
        body: pair(
          '从必须完成的决定日期倒推：上线日、内容审核、签约、报价确认和初始外联。若 11 月 30 日上线，需要预留 10 个工作日制作、3 个工作日审核、5 个工作日确认商务条件，那么外联开始时间必须覆盖回复与替补。第一次跟进可以设在首封后 3–5 个工作日，第二次在名单关闭前 2 个工作日；这些数字只是团队情景，应该用自己的历史回复数据校准。\n\nTikTok One 支持直接邀请、开放申请和邀请链接，创作者可能从平台站内、邮件或其他渠道收到机会。团队必须记录发送渠道与身份，避免同一 Campaign 由不同成员重复联系同一创作者。',
          'Work backward from the decision deadline: launch, content review, contracting, quote confirmation and initial outreach. If launch is November 30 with 10 business days for production, three for review and five for commercial confirmation, outreach must allow time for replies and replacements. A first follow-up at three to five business days and a second two business days before shortlist close are planning examples that should be calibrated with your own response history.\n\nTikTok One supports direct invitations, open applications and invite links, so creators may receive opportunities in-platform, by email or through another channel. Record the sending channel and identity to prevent different team members from contacting the same creator twice for one campaign.'
        ),
        citations: ['tiktokCollab'],
      },
      {
        heading: pair('衡量回复漏斗，但不要把打开率当意愿', 'Measure the response funnel without treating opens as intent'),
        body: pair(
          '建议至少记录送达、有效回复、符合条件、接受、拒绝和无回复 6 个结果。若联系 60 人，36 封确认送达，18 人回复，其中 9 人符合条件、6 人接受，则送达后回复率为 50%，合格接受率为 33.3%，最终接受率为初始名单的 10%。这些数字用于倒推下一批规模，不用于评价单个创作者。\n\nYouTube 的品牌合作建议强调创作者需要清楚表达自己的受众与价值，品牌也应提供足够的合作任务信息。第一封和 Follow-up 都应帮助对方做决定，而不是通过追踪像素、频繁提醒或模糊紧迫感制造压力。明确拒绝或要求停止联系后，立即更新状态并停止后续动作。',
          'Track at least six outcomes: delivered, useful reply, qualified, accepted, declined and no reply. If 60 creators are contacted, 36 messages are confirmed delivered, 18 reply, nine qualify and six accept, response after delivery is 50%, qualified acceptance is 33.3%, and final acceptance is 10% of the initial pool. Use these numbers to size the next batch, not to judge an individual creator.\n\nYouTube brand-deal guidance encourages creators to communicate audience and value clearly; brands likewise need to provide enough information about the campaign job. Both the initial message and follow-up should help a creator decide rather than use tracking pixels, repeated reminders or vague urgency to create pressure. Stop after a decline or contact-stop request.'
        ),
        citations: ['youtubeBrandDeals'],
      },
    ],
    table: {
      title: pair('外联状态与下一步', 'Outreach states and next actions'),
      note: pair('状态由可观察事实触发；打开信号不等于兴趣。', 'States should follow observable facts; an open signal is not interest.'),
      headers: [pair('状态', 'State'), pair('证据', 'Evidence'), pair('下一步', 'Next action')],
      rows: [
        [pair('已发送', 'Sent'), pair('地址、渠道、时间', 'Address, channel, time'), pair('等待约定窗口', 'Wait for the agreed window')],
        [pair('未送达', 'Bounced'), pair('退信记录', 'Bounce record'), pair('核对联系人', 'Verify contact')],
        [pair('已回复', 'Replied'), pair('有效回复内容', 'Useful response'), pair('确认档期与报价', 'Confirm timing and rate')],
        [pair('关闭', 'Closed'), pair('拒绝、停止或截止', 'Decline, stop or deadline'), pair('停止后续消息', 'Stop later messages')],
      ],
    },
    tool: {
      kind: 'pipeline',
      title: pair('外联批次倒推计算器', 'Outreach batch calculator'),
      intro: pair('使用自己的历史回复率与合格接受率估算初始联系人数。', 'Use your own response and qualified-acceptance rates to estimate the initial contact pool.'),
      inputs: [
        { key: 'target', label: pair('目标接受人数', 'Target accepted creators'), value: 8, min: 1, max: 200, step: 1 },
        { key: 'response', label: pair('有效回复率 %', 'Useful response rate %'), value: 40, min: 1, max: 100, step: 1 },
        { key: 'acceptance', label: pair('合格接受率 %', 'Qualified acceptance %'), value: 45, min: 1, max: 100, step: 1 },
      ],
    },
    internalLinks: ['personalized-creator-outreach', 'creator-shortlist-workflow'],
    sources: [sources.tiktokCollab, sources.youtubeBrandDeals],
  },

  'creator-rates-usage-rights': {
    deepDive: [
      {
        heading: pair('把报价拆成可比较的权利包', 'Turn a quote into a comparable rights package'),
        body: pair(
          '先把创作与发布费、使用权、白名单或品牌合作权限、排他、原始素材和额外修改分开。两位创作者都报 2 万元，并不代表范围相同：A 可能只含一次自然发布，B 可能包含 3 个月数字广告使用和 5 个原始素材。比较时至少记录使用主体、渠道、市场、期限、是否允许剪辑、是否允许付费放大和到期动作 7 个字段。\n\nYouTube 的 brand partner access 可以向品牌共享视频级自然和付费表现，并支持推广合作视频；这类平台权限和合同使用权需要分别确认。TikTok One 也允许内容同步到 Ads Manager，但平台技术能力并不会自动授予品牌无限期限或跨渠道的素材权利。',
          'Separate creation and publication, usage rights, brand-partner or allowlisting access, exclusivity, raw assets and extra revisions. Two creators may each quote 20,000 while offering different scope: one may include only an organic post, while the other includes three months of digital advertising use and five raw assets. Compare at least seven fields: authorized user, channel, market, term, editing permission, paid amplification permission and expiry action.\n\nYouTube brand partner access can share video-level organic and paid performance and support promotion of partnership videos; that platform permission and contractual usage rights must be confirmed separately. TikTok One can also sync content to Ads Manager, but technical capability does not automatically grant unlimited or cross-channel asset rights.'
        ),
        citations: ['youtubeBrandAccess', 'tiktokCollab'],
      },
      {
        heading: pair('让期限、排他与到期处理进入成本模型', 'Put term, exclusivity and expiry into the cost model'),
        body: pair(
          '使用权成本应由谈判和具体范围决定，不能套用统一行业倍数。团队可以建立情景：基础发布费 12,000 元，6 个月数字渠道使用每月 1,000 元，付费放大 3,000 元，排他 2,000 元，原始素材 1,500 元，总情景成本为 24,500 元。这个数字只用于检查遗漏和比较方案，不代表合理市场价。\n\nYouTube 要求包含付费推广的内容使用相应披露功能；FTC 也要求商业关系披露清晰、显著并与背书内容接近。报价批准前同时确认披露责任、广告账户权限、素材下线或续期负责人。到期日前 30 天设置复核是可执行的内部示例，实际窗口应按合同和投放节奏确定。',
          'Rights cost should come from negotiation and defined scope, not a universal industry multiplier. A scenario might include a 12,000 base fee, six months of digital use at 1,000 per month, 3,000 for paid amplification, 2,000 for exclusivity and 1,500 for raw assets, producing a 24,500 total. The figure helps detect missing scope and compare options; it is not a claim about market price.\n\nYouTube requires paid-promotion disclosure features for applicable content, and FTC guidance calls for clear, conspicuous disclosure near the endorsement. Before approving the quote, confirm disclosure responsibility, ad-account permission and the owner for asset removal or renewal. A review 30 days before expiry is one workable internal example; the contract and media schedule should set the actual window.'
        ),
        citations: ['youtubePaid', 'ftcDisclosure'],
      },
    ],
    table: {
      title: pair('报价与权益比较表', 'Rate and rights comparison table'),
      note: pair('每一项都写“包含、另计或待确认”，不要用空白表示默认同意。', 'Mark every item included, extra or unknown; a blank cell is not consent.'),
      headers: [pair('范围', 'Scope'), pair('必须记录', 'Required detail'), pair('到期动作', 'Expiry action')],
      rows: [
        [pair('自然发布', 'Organic publication'), pair('账号、格式、保留期', 'Account, format, live term'), pair('保留或下线', 'Keep or remove')],
        [pair('使用权', 'Usage rights'), pair('主体、渠道、市场、期限', 'User, channel, market, term'), pair('停止、续期或替换', 'Stop, renew or replace')],
        [pair('付费放大', 'Paid amplification'), pair('权限、账户、预算窗口', 'Access, account, media window'), pair('撤销访问', 'Remove access')],
        [pair('排他与原始素材', 'Exclusivity and raw assets'), pair('品类、期限、文件数量', 'Category, term, file count'), pair('解除限制与归档', 'Release and archive')],
      ],
    },
    tool: {
      kind: 'rights-cost',
      title: pair('权益范围成本计算器', 'Rights-scope cost calculator'),
      intro: pair('把各项谈判金额放进同一情景；结果用于范围比较，不估算市场价。', 'Combine negotiated amounts in one scenario; the result compares scope and does not estimate market rates.'),
      inputs: [
        { key: 'baseFee', label: pair('创作与发布费', 'Creation and publication'), value: 12000, min: 0, step: 500 },
        { key: 'rightsMonths', label: pair('使用月数', 'Usage months'), value: 6, min: 0, max: 60, step: 1 },
        { key: 'monthlyRights', label: pair('每月使用权费用', 'Monthly rights amount'), value: 1000, min: 0, step: 100 },
        { key: 'amplification', label: pair('付费放大权限', 'Paid amplification access'), value: 3000, min: 0, step: 100 },
        { key: 'exclusivity', label: pair('排他费用', 'Exclusivity'), value: 2000, min: 0, step: 100 },
        { key: 'rawAssets', label: pair('原始素材与附加交付', 'Raw assets and add-ons'), value: 1500, min: 0, step: 100 },
      ],
    },
    internalLinks: ['write-a-useful-campaign-brief', 'influencer-campaign-budget-planning'],
    sources: [sources.youtubeBrandAccess, sources.tiktokCollab, sources.youtubePaid, sources.ftcDisclosure],
  },

  'creator-content-approval-workflow': {
    deepDive: [
      {
        heading: pair('用一个决策负责人合并四类反馈', 'Use one decision owner to consolidate four feedback types'),
        body: pair(
          '把品牌、产品、法务和媒体意见先收集到内部表，再由一位负责人去重并解决冲突。建议每条反馈包含时间码、问题类型、原要求、建议动作和验收条件。例如“00:18 产品名称错误，替换为批准名称”可以执行；“感觉更高级一些”没有验收标准。每轮只发送一份清单，并明确哪些属于已约定范围。\n\n审核窗口也要有容量上限。若 12 位创作者在同一天提交粗剪，而团队每天只能完整审核 4 条，就需要分批交付或增加审核人。把首轮响应设为 2 个工作日、事实修正设为 1 个工作日可以作为计划输入，但应由团队真实容量和上线日倒推。',
          'Collect brand, product, legal and media comments internally, then have one owner deduplicate and resolve conflicts. Each note should include a timecode, issue type, original requirement, requested action and acceptance condition. “At 00:18 the product name is wrong; replace it with the approved name” is actionable, while “make it feel more premium” has no acceptance condition. Send one list per round and identify which requests belong to agreed scope.\n\nReview capacity needs a limit. If 12 creators submit rough cuts on one day while the team can fully review only four per day, stagger delivery or add reviewers. A two-business-day first response and one day for factual correction can be planning inputs, but actual timing should come from team capacity and launch date.'
        ),
        citations: [],
      },
      {
        heading: pair('把披露、推广权限与最终版本独立确认', 'Approve disclosure, promotion access and the final version separately'),
        body: pair(
          'FTC 指南强调披露应清楚显著，并放在背书内容中难以错过的位置；ASA/CAP 也要求广告从一开始就能被识别。团队应在概念阶段确定披露方式，在最终文件与上线页面各检查一次，而不是把它埋在通用“合规已审”状态中。\n\n如果内容后续用于付费投放，YouTube 的付费推广规则和 TikTok 的商业内容质量要求也需要单独核对。最终批准记录应指向一个具体文件、版本号和发布时间条件；上线后再抽查链接、披露、字幕、落地页和推广权限是否与批准内容一致。',
          'FTC guidance says disclosure should be clear, conspicuous and hard to miss within the endorsement; ASA/CAP likewise requires audiences to recognize advertising from the outset. Decide the disclosure method at concept stage and verify it in both the final asset and live publication rather than hiding it inside a generic “compliance reviewed” status.\n\nIf content will be amplified, review YouTube paid-promotion rules and TikTok commercial-content quality requirements separately. Final approval should point to a specific file, version and publication conditions; after launch, verify the link, disclosure, captions, landing page and promotion permission against the approved state.'
        ),
        citations: ['ftcDisclosure', 'asaDisclosure', 'youtubePaid', 'tiktokQuality'],
      },
    ],
    table: {
      title: pair('反馈分类与处理规则', 'Feedback categories and handling rules'),
      note: pair('分类决定优先级、是否计入修改轮次以及由谁确认。', 'The category determines priority, revision scope and approver.'),
      headers: [pair('类型', 'Type'), pair('示例', 'Example'), pair('处理', 'Treatment')],
      rows: [
        [pair('事实错误', 'Factual error'), pair('名称、价格、功能错误', 'Name, price or feature error'), pair('必须修正并复核', 'Correct and recheck')],
        [pair('Brief 缺失', 'Missed brief item'), pair('必要镜头或行动提示缺失', 'Required shot or CTA missing'), pair('计入约定修改', 'Included revision')],
        [pair('合规风险', 'Compliance risk'), pair('披露或受限声明问题', 'Disclosure or restricted claim'), pair('阻断批准', 'Blocks approval')],
        [pair('创意建议', 'Creative preference'), pair('可选节奏或措辞', 'Optional pacing or wording'), pair('由创作者判断', 'Creator decides')],
      ],
    },
    tool: {
      kind: 'reference-list',
      title: pair('发布前 8 项静态检查', 'Eight-point pre-publication check'),
      intro: pair('清单较短，直接逐项对照即可，无需下载或模拟勾选。', 'This short list is designed for direct reference without a download or simulated checkbox.'),
      items: [
        pair('最终文件、版本号与批准人一致', 'Final file, version and approver match'),
        pair('产品事实、价格与限制准确', 'Product facts, price and limitations are accurate'),
        pair('商业披露清楚且位置正确', 'Commercial disclosure is clear and correctly placed'),
        pair('字幕、口播和画面要求完整', 'Captions, spoken copy and required visuals are complete'),
        pair('链接、UTM 或优惠码可以使用', 'Link, UTM or code works'),
        pair('使用权和付费放大权限已确认', 'Usage and amplification permissions are confirmed'),
        pair('上线时间、时区和保留期明确', 'Publication time, time zone and live term are clear'),
        pair('上线后复核负责人和时间已安排', 'Post-launch reviewer and time are assigned'),
      ],
    },
    internalLinks: ['write-a-useful-campaign-brief', 'creator-campaign-status-system'],
    sources: [sources.ftcDisclosure, sources.asaDisclosure, sources.youtubePaid, sources.tiktokQuality],
  },

  'influencer-campaign-budget-planning': {
    deepDive: [
      {
        heading: pair('用三套情景连接预算、交付与团队容量', 'Connect budget, deliverables and capacity with three scenarios'),
        body: pair(
          '基础方案满足必须上线的市场、格式和数量；缩减方案说明总预算减少 20% 时删除哪些交付；扩展方案说明增加 20% 时新增的是达人、权益还是放大。示例总预算 300,000 元，可先分配 165,000 创作发布、45,000 使用权、35,000 放大、20,000 产品物流、15,000 运营测量，并保留 20,000 异常空间。数字只是结构示例，必须以真实报价和内部成本替换。\n\nIAB 对 Creator Economy 广告投入增长的估算说明预算规模在扩大，但它不提供单个 Campaign 的正确配比。预算批准页应同时显示预计上线人数、资产数量、权益期限、目标市场测量方式和每周审核容量；任何一项变化，都要重算成本和时间。',
          'The base case covers required markets, formats and volume; the reduced case shows which deliverables disappear when total budget falls 20%; the expanded case explains whether an additional 20% buys creators, rights or media. A 300,000 example might allocate 165,000 to creation and publication, 45,000 to rights, 35,000 to amplification, 20,000 to product and logistics, 15,000 to operations and measurement, and keep 20,000 for exceptions. These figures illustrate structure and must be replaced with real quotes and internal cost.\n\nIAB estimates growing creator-economy advertising investment, but it does not prescribe the right allocation for a campaign. The approval view should also display expected live creators, asset count, rights term, target-market measurement and weekly review capacity; recalculate cost and timing whenever one changes.'
        ),
        citations: ['iab2025'],
      },
      {
        heading: pair('先定义测量，再预留归因和异常成本', 'Define measurement before reserving attribution and exception cost'),
        body: pair(
          'Google Analytics 建议通过一致的 Campaign 参数构建 URL；名称大小写或拼写不一致会把同一 Campaign 拆成不同条目。预算中应包括链接设置、落地页验证、数据快照和报告时间。归因报告用于理解不同触点如何获得转化归因，但平台展示、点击和最终转化仍可能使用不同窗口，不能直接相加。\n\nTikTok One 支持邀请、申请和内容同步等不同协作方式，每条路径带来的筛选、沟通与放大成本不同。异常预备金应记录动用原因：补寄产品、重拍、达人退出、汇率、权限延期或额外版本。结算时把未使用预备金与超支原因一起带回下一轮，而不是把预算用完当成成功。',
          'Google Analytics recommends consistent campaign parameters when building URLs; differences in capitalization or spelling can split one campaign into separate entries. Budget for link setup, landing-page checks, data snapshots and reporting time. Attribution reports explain how conversion credit is assigned across touchpoints, but platform views, clicks and final conversions may use different windows and should not simply be added together.\n\nTikTok One supports different collaboration paths such as invitations, applications and content syncing, each creating different discovery, communication and amplification cost. Record every use of contingency: replacement shipping, reshoots, creator withdrawal, currency movement, delayed access or an extra version. At closeout, return unused reserve and overspend reasons to the next plan instead of treating full budget consumption as success.'
        ),
        citations: ['gaUtm', 'gaAttribution', 'tiktokCollab'],
      },
    ],
    table: {
      title: pair('完整 Campaign 预算结构', 'Complete campaign budget structure'),
      note: pair('预算项要连接交付、付款节点和负责人。', 'Connect every cost to a deliverable, payment milestone and owner.'),
      headers: [pair('类别', 'Category'), pair('包含内容', 'Includes'), pair('验证问题', 'Validation question')],
      rows: [
        [pair('创作与发布', 'Creation and publication'), pair('内容、修改、发布', 'Assets, revisions, publication'), pair('范围和数量是否明确？', 'Are scope and volume defined?')],
        [pair('权益与放大', 'Rights and media'), pair('期限、渠道、账户权限', 'Term, channels, account access'), pair('到期动作是谁负责？', 'Who owns expiry?')],
        [pair('产品与运营', 'Product and operations'), pair('样品、物流、工具、审核', 'Product, shipping, tools, review'), pair('团队容量是否计入？', 'Is team capacity included?')],
        [pair('测量与异常', 'Measurement and exceptions'), pair('参数、报告、预备金', 'Parameters, reporting, reserve'), pair('触发条件是否可追溯？', 'Are triggers traceable?')],
      ],
    },
    tool: {
      kind: 'budget-plan',
      title: pair('完整 Campaign 预算计算器', 'Complete campaign budget calculator'),
      intro: pair('输入承诺成本和预备金比例，检查计划总额与预算差额。', 'Enter committed cost and contingency to check planned total against available budget.'),
      inputs: [
        { key: 'budget', label: pair('Campaign 总预算', 'Campaign budget'), value: 300000, min: 0, step: 1000 },
        { key: 'creatorFees', label: pair('创作与发布', 'Creation and publication'), value: 165000, min: 0, step: 1000 },
        { key: 'rights', label: pair('使用权', 'Usage rights'), value: 45000, min: 0, step: 1000 },
        { key: 'amplification', label: pair('付费放大', 'Paid amplification'), value: 35000, min: 0, step: 1000 },
        { key: 'operations', label: pair('产品、运营与测量', 'Product, operations and measurement'), value: 35000, min: 0, step: 1000 },
        { key: 'contingency', label: pair('预备金 %', 'Contingency %'), value: 7, min: 0, max: 100, step: 1 },
      ],
    },
    internalLinks: ['creator-rates-usage-rights', 'creator-campaign-measurement'],
    sources: [sources.iab2025, sources.gaUtm, sources.gaAttribution, sources.tiktokCollab],
  },

  'ai-creator-research-prompts': {
    deepDive: [
      {
        heading: pair('把研究任务写成可验证的输入与输出契约', 'Write the research job as a verifiable input-output contract'),
        body: pair(
          '提示词至少包含 8 项：Campaign 任务、市场、平台、硬性条件、排除条件、允许来源、证据时效和输出字段。要求每位候选给出 3 条近期相关内容、观察日期、匹配理由、风险、未知项与下一步。若要求 25 位候选但只有 11 位满足标准，模型应返回 11 位和缺口原因，而不是补齐数量。\n\nNIST AI RMF 把治理、映射、测量和管理作为相互连接的风险管理功能。放到达人研究中，就是先规定谁能修改提示词与批准名单，再描述使用场景和风险，测量错误与未知项，最后决定扩大、限制或暂停自动化。提示词只是控制的一部分，原始来源与人工决定仍要保留。',
          'A prompt needs at least eight elements: campaign job, market, platform, requirements, exclusions, allowed sources, evidence freshness and output fields. Require three recent relevant items per candidate plus observation date, fit reasoning, risk, unknowns and next action. If 25 candidates are requested but only 11 meet the standard, return 11 and explain the gap instead of filling the quota.\n\nNIST AI RMF connects governance, mapping, measurement and management as risk functions. For creator research, define who may change prompts and approve the shortlist, describe the use case and risk, measure errors and unknowns, then decide whether to expand, limit or pause automation. The prompt is one control; original sources and human decisions still need to be retained.'
        ),
        citations: ['nistAiRmf'],
      },
      {
        heading: pair('用小样本判断提示词是否值得扩大', 'Use a small batch to decide whether the prompt should scale'),
        body: pair(
          '先生成 10 位候选并逐条审核。记录身份错误、链接失效、内容不相关、受众未经验证和推断被写成事实等错误类型。若 10 条记录中 3 条包含阻断问题，就暂停扩大并修正规则；3/10 只是演示如何表达触发值，团队应按任务风险设定标准。\n\nYouTube 内容分析把观看、平均观看时长与受众放在具体内容和时间窗口中理解，AI 研究也应引用原始内容而不是只复述账号简介。IAB 所描述的 Creator Economy 增长会提高研究规模，但增加处理速度不能成为放宽证据标准的理由。',
          'Generate 10 candidates first and review every record. Log identity errors, broken links, irrelevant content, unverified audience claims and inference presented as fact. If three of 10 records contain a blocking problem, pause scaling and correct the rules; 3/10 only demonstrates how to express a trigger, and the team should set its own standard by task risk.\n\nYouTube content analytics interprets views, average view duration and audience in the context of specific content and time windows; AI research should likewise cite original content rather than paraphrase a profile bio. Creator-economy growth described by IAB may increase research volume, but faster processing is not a reason to lower the evidence standard.'
        ),
        citations: ['youtubeAnalytics', 'iab2025'],
      },
    ],
    table: {
      title: pair('达人研究提示词字段', 'Creator-research prompt fields'),
      note: pair('每个字段都帮助审核者复现推荐结论。', 'Each field helps a reviewer reproduce the recommendation.'),
      headers: [pair('字段', 'Field'), pair('要求', 'Requirement'), pair('失败时动作', 'Action on failure')],
      rows: [
        [pair('任务与硬性条件', 'Job and requirements'), pair('市场、格式、受众、时间', 'Market, format, audience, timing'), pair('不进入候选', 'Exclude candidate')],
        [pair('来源与时效', 'Source and freshness'), pair('公开链接、日期、观察时间', 'Public URL, date, observation'), pair('标记过期或不可验证', 'Mark stale or unverified')],
        [pair('证据与推断', 'Evidence and inference'), pair('3 条内容、理由、未知项', 'Three items, reasoning, unknowns'), pair('转人工复核', 'Send to human review')],
        [pair('停止条件', 'Stop condition'), pair('冲突、同名、来源失效', 'Conflict, same name, broken source'), pair('停止外部动作', 'Stop external action')],
      ],
    },
    tool: {
      kind: 'reference-list',
      title: pair('提示词发布前 10 项检查', 'Ten checks before running a research prompt'),
      intro: pair('这是可直接复制到工作流的静态检查，不需要下载文件。', 'This static list can be used directly in a workflow without a download.'),
      items: [
        pair('Campaign 任务具体到内容和受众', 'The campaign job specifies content and audience'),
        pair('市场、语言、平台和格式明确', 'Market, language, platform and format are defined'),
        pair('硬性条件与排除条件分开', 'Requirements and exclusions are separate'),
        pair('允许来源和证据时效明确', 'Allowed sources and freshness are defined'),
        pair('每位候选要求原始链接', 'Every candidate requires original URLs'),
        pair('事实、推断与未知项分栏', 'Facts, inference and unknowns are separated'),
        pair('输出字段支持人工比较', 'Output fields support human comparison'),
        pair('数量不足时不降低标准', 'Standards remain when the quota is not met'),
        pair('冲突或失效来源触发停止', 'Conflicts or broken sources trigger a stop'),
        pair('最终名单和外联由人工批准', 'A human approves shortlist and outreach'),
      ],
    },
    internalLinks: ['creator-selection-beyond-followers', 'ai-creator-data-quality-audit'],
    sources: [sources.nistAiRmf, sources.youtubeAnalytics, sources.iab2025],
  },

  'ai-creator-data-quality-audit': {
    deepDive: [
      {
        heading: pair('设计能覆盖高风险小群体的分层样本', 'Design a stratified sample that covers small high-risk groups'),
        body: pair(
          '先按平台、市场、来源版本和字段风险分层，再为每层设置最低样本。示例：1,000 条记录中抽查 100 条，其中联系人和报价等高风险字段即使只占总体 5%，也至少检查 20 条。完全随机的 10% 样本可能只抽到 5 条高风险记录，无法支持自动发送或预算动作。\n\n样本记录要保存总体数、样本数、发现问题数、阻断问题数和抽样日期。若 100 条中 8 条存在错误，样本错误率为 8%；把它外推为约 80 条待复核记录只是一种工作量情景，前提是样本结构能代表总体。对错误联系人、虚构报价或错误权益，不应等待统计显著性才暂停动作。',
          'Stratify by platform, market, source version and field risk, then set a minimum sample for each group. In a 1,000-record population with a 100-record sample, contacts and rates may be only 5% of records but still receive at least 20 checks because they carry higher risk. A purely random 10% sample might contain only five high-risk records and cannot support automated sending or budget actions.\n\nStore population, sample size, issue count, blocking count and sample date. If eight of 100 sampled records contain errors, the sample issue rate is 8%; extrapolating about 80 records for review is only a workload scenario and requires a representative sample. A wrong contact, invented rate or incorrect rights record should pause the action without waiting for statistical significance.'
        ),
        citations: [],
      },
      {
        heading: pair('把错误趋势连接到模型、来源与权限', 'Connect error trends to model, source and permissions'),
        body: pair(
          'NIST AI RMF 强调持续治理和测量，审计记录因此必须包含 Agent 或提示词版本、数据源版本、执行日期、审核者和纠正动作。来源页面结构变化后突然出现字段错位，应先暂停该来源映射，而不是逐条修补输出。连续两个批次达到标准后扩大自动化，是可讨论的内部门槛；高风险任务可能需要更长观察期。\n\nGA4 建模关键事件可能在事件记录后继续更新最多 12 天，这提醒团队把数据提取时间视为质量字段。YouTube 分析和 TikTok 商业内容标准也使用平台自己的指标或质量语境。跨平台合并前应保留原始定义、时间窗和自然或付费标签，避免把来源差异误判为 AI 计算错误。',
          'NIST AI RMF emphasizes continuous governance and measurement, so every audit record should include the agent or prompt version, source version, run date, reviewer and corrective action. If fields shift after a source-page change, pause that source mapping instead of repairing outputs one by one. Expanding automation after two consecutive passing batches is an internal threshold to discuss; higher-risk tasks may require a longer observation period.\n\nGA4 modeled key events can continue updating for up to 12 days after recording, which makes extraction time a data-quality field. YouTube analytics and TikTok commercial-content standards also use platform-specific metric and quality contexts. Preserve original definition, window and organic or paid label before combining platforms so source differences are not mistaken for AI calculation errors.'
        ),
        citations: ['nistAiRmf', 'gaModeled', 'youtubeAnalytics', 'tiktokQuality'],
      },
    ],
    table: {
      title: pair('错误级别与响应规则', 'Error severity and response rules'),
      note: pair('同类错误重复出现时，需要检查系统原因而不只是修复记录。', 'Repeated errors require a system-level check, not only record repair.'),
      headers: [pair('级别', 'Severity'), pair('示例', 'Example'), pair('响应', 'Response')],
      rows: [
        [pair('阻断', 'Blocking'), pair('错误联系人、报价或权益', 'Wrong contact, rate or rights'), pair('暂停动作并扩大复核', 'Pause action and expand review')],
        [pair('高', 'High'), pair('身份或关键表现错配', 'Identity or key metric mismatch'), pair('复核同批与来源', 'Review batch and source')],
        [pair('中', 'Medium'), pair('日期、标签或状态缺失', 'Missing date, label or state'), pair('修正并追踪重复', 'Correct and track recurrence')],
        [pair('低', 'Low'), pair('格式或非关键文本问题', 'Formatting or minor copy issue'), pair('批量修正', 'Batch correction')],
      ],
    },
    tool: {
      kind: 'audit-sample',
      title: pair('数据质量抽样计算器', 'Data-quality sample calculator'),
      intro: pair('计算覆盖率、样本问题率与待复核工作量；只有代表性样本才适合外推。', 'Calculate coverage, sample issue rate and review workload; extrapolation requires a representative sample.'),
      inputs: [
        { key: 'population', label: pair('总体记录数', 'Population records'), value: 1000, min: 1, step: 1 },
        { key: 'sampleSize', label: pair('抽样记录数', 'Sample records'), value: 100, min: 1, step: 1 },
        { key: 'issueCount', label: pair('发现问题数', 'Records with issues'), value: 8, min: 0, step: 1 },
        { key: 'blockingCount', label: pair('阻断问题数', 'Blocking issues'), value: 1, min: 0, step: 1 },
      ],
    },
    internalLinks: ['ai-creator-research-prompts', 'creator-metric-definitions'],
    sources: [sources.nistAiRmf, sources.gaModeled, sources.youtubeAnalytics, sources.tiktokQuality],
  },
};
