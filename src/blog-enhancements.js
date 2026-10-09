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
  tiktokSpecs: {
    id: 'tiktokSpecs',
    label: pair('TikTok 官方：Branded Mission ad specs', 'TikTok Business: Branded Mission ad specs'),
    url: 'https://ads.tiktok.com/resources/help/article/branded-mission-ad-specs?lang=en',
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

export const blogEnhancements = {
  'creator-selection-beyond-followers': {
    deepDive: [
      {
        heading: pair('用 10 条同类内容建立可比较的样本', 'Build a comparable sample from 10 relevant posts'),
        body: pair(
          '把每位候选达人最近 10 条与本次任务最接近的内容放进同一张表，而不是截取主页上最醒目的数字。至少记录发布时间、格式、观看量、互动量、产品出现方式和评论主题；再标记抽奖、联名、热点或付费放大等异常背景。10 条并不是统计学保证，而是一个能在速度与观察范围之间取得平衡的工作阈值。若账号更新频率很低，可以把时间窗扩展到 6 个月，但不要混入与本次任务完全不同的直播切片或娱乐内容。\n\n计算时先看中位数，再看最高值与最低值的差距。示例：10 条视频观看量为 18k、21k、20k、19k、22k、17k、96k、23k、21k、20k，中位数约为 20.5k；96k 应作为异常点解释，而不是直接把平均值抬高到约 27.7k 后用于预算。YouTube 也提醒，CTR、平均观看时长和曝光需要结合流量来源与受众范围理解，不能孤立比较。',
          'Place the 10 recent posts most comparable to the proposed assignment in one table instead of copying the largest number on a profile. Record publication date, format, views, interactions, product treatment and recurring comment themes. Flag giveaways, collaborations, trends and paid amplification. Ten posts are not a statistical guarantee; they are a practical working threshold that balances speed with enough observation. For an infrequent publisher, extend the window to six months, but do not mix unrelated live clips or entertainment posts into the sample.\n\nStart with the median, then inspect the spread and the reasons behind the highest and lowest results. Suppose 10 videos have 18k, 21k, 20k, 19k, 22k, 17k, 96k, 23k, 21k and 20k views. The median is about 20.5k. The 96k post needs an explanation; it should not quietly lift the average to about 27.7k and become the budget assumption. YouTube likewise advises reading CTR, average view duration and impressions together with traffic-source and audience context rather than in isolation.'
        ),
        citations: ['youtubeCtr', 'youtubeAnalytics'],
      },
      {
        heading: pair('把市场规模与单个达人判断分开', 'Separate market growth from an individual creator decision'),
        body: pair(
          'IAB 估算美国 Creator Economy 广告投入从 2021 年的 139 亿美元增长到 2024 年的 295 亿美元，并预计 2025 年达到 370 亿美元，同比增长 26%。这些数字说明渠道正在成熟，也意味着品牌更需要标准化筛选与衡量；它们并不能证明某位拥有 50 万粉丝的达人一定优于 5 万粉丝的垂类创作者。宏观规模只适合解释为什么要建立流程，具体选人仍要回到内容、受众、稳定性与执行条件。\n\n在 QuickKOL 中，可先把硬性条件设为市场、语言、平台、品类冲突与时间窗口，再让 Agent 为每位候选人生成“证据—判断—待确认项”。人工审核应能回到原内容链接，确认描述没有脱离上下文。最终分数用于排序和发现分歧，不应自动触发外联或预算承诺。',
          'IAB estimates that U.S. creator advertising spend grew from $13.9 billion in 2021 to $29.5 billion in 2024 and was projected to reach $37 billion in 2025, a 26% year-over-year increase. Those figures show a maturing channel and a stronger need for standardized selection and measurement. They do not prove that a creator with 500,000 followers is better for a specific brief than a specialist with 50,000. Market size explains why the process matters; an individual decision still depends on content, audience, consistency and feasibility.\n\nIn QuickKOL, start with hard requirements such as market, language, platform, category conflict and timing. The Agent can then produce an evidence–judgment–open-question record for every candidate. A reviewer should be able to open the original content and check that the explanation has not lost its context. The final score helps sort candidates and reveal disagreement; it should not automatically trigger outreach or a budget commitment.'
        ),
        citations: ['iab2025'],
      },
    ],
    table: {
      title: pair('候选达人证据表', 'Creator evidence matrix'),
      note: pair('以下数量是建议的工作阈值，应按平台、更新频率和预算调整。', 'These counts are operating thresholds, not universal benchmarks. Adjust them for platform, cadence and budget.'),
      headers: [pair('维度', 'Dimension'), pair('最少查看', 'Minimum review'), pair('记录结果', 'Record')],
      rows: [
        [pair('内容契合', 'Content fit'), pair('10 条同类内容', '10 comparable posts'), pair('3 条具体匹配证据', '3 specific fit signals')],
        [pair('表现稳定性', 'Consistency'), pair('中位数 + 区间', 'Median + range'), pair('异常点及原因', 'Outliers and reasons')],
        [pair('受众', 'Audience'), pair('市场、语言、评论', 'Market, language, comments'), pair('已确认 / 待确认', 'Confirmed / unknown')],
        [pair('可执行性', 'Feasibility'), pair('档期、报价、权益', 'Timing, rate, rights'), pair('风险和下一步', 'Risk and next step')],
      ],
    },
    tool: {
      kind: 'creator-compare',
      title: pair('达人数据标准化计算器', 'Creator comparison calculator'),
      intro: pair('填写同一口径的真实数据，即时计算有效观看、互动与成本，用于比较备选达人。', 'Enter comparable real data to calculate qualified reach, engagement and cost, then use the results to compare candidate creators.'),
      inputs: [
        { key: 'followers', label: pair('粉丝数', 'Followers'), value: 100000, min: 1, step: 100 },
        { key: 'views', label: pair('10 条同类内容的中位观看量', 'Median views across 10 comparable posts'), value: 20500, min: 1, step: 100 },
        { key: 'interactions', label: pair('中位互动量', 'Median interactions'), value: 1350, min: 0, step: 10 },
        { key: 'audienceShare', label: pair('目标市场受众占比（%）', 'Target-market audience share (%)'), value: 70, min: 0, max: 100, step: 1 },
        { key: 'fee', label: pair('创作与发布费用', 'Creation and publishing fee'), value: 8000, min: 0, step: 100 },
        { key: 'rightsCost', label: pair('使用权与放大费用', 'Usage and amplification cost'), value: 2000, min: 0, step: 100 },
      ],
    },
    internalLinks: ['creator-shortlist-workflow', 'personalized-creator-outreach'],
    sources: [sources.iab2025, sources.youtubeCtr, sources.youtubeAnalytics, sources.tiktokQuality],
  },

  'write-a-useful-campaign-brief': {
    deepDive: [
      {
        heading: pair('把合规、平台规则和创意要求分成三层', 'Separate legal, platform and creative requirements'),
        body: pair(
          'Brief 里的“必须”并不都属于同一层。第一层是法律和广告披露，例如 FTC 指出，只要存在付款、免费产品、折扣或其他重要关系，就应让受众清楚看到披露；披露应与推广信息放在一起、使用相同语言，也不能只依赖平台按钮。英国 ASA/CAP 同样要求广告性质足够明显。第二层是平台规则，例如 YouTube 要求付费植入和赞助遵守广告政策与适用法律。第三层才是品牌创意要求，如产品露出、核心卖点和行动提示。\n\n把三层混在一份长清单里，创作者会难以判断哪些内容不能改、哪些只是偏好。建议在 Brief 中分别列出“法律与平台”“事实必须准确”“创作者自主”三个区域，并由法务或品牌负责人确认前两区。这样一轮审核可以专注事实与范围，不会把创作者的语气改成品牌广告。',
          'Not every “must” in a brief has the same authority. The first layer is legal disclosure. The FTC says that payment, free products, discounts and other material relationships can require disclosure; the disclosure should be hard to miss, appear with the endorsement, use the same language, and not rely only on a platform tool. UK ASA/CAP guidance also requires the commercial nature of advertising to be obvious. The second layer is platform policy: YouTube, for example, requires paid placements and sponsorships to comply with its advertising policies and applicable law. The third layer is the brand’s creative requirement, such as product visibility, a core message or call to action.\n\nIf the three layers appear as one long checklist, the creator cannot tell what is fixed and what is a preference. Use separate blocks for “legal and platform,” “facts that must be accurate,” and “creator-led choices.” A legal or brand owner should approve the first two. Review can then focus on factual accuracy and scope without rewriting the creator’s voice into a conventional ad.'
        ),
        citations: ['ftcDisclosure', 'asaDisclosure', 'youtubePaid'],
      },
      {
        heading: pair('用数量把交付范围写到可报价', 'Use quantities to make the scope quotable'),
        body: pair(
          '“一条视频”仍然不是完整范围。示例 Brief 可以写成：1 条 45–60 秒竖屏视频；1 版概念说明；1 版粗剪；包含 2 轮修改，其中第 1 轮处理事实、结构与必要镜头，第 2 轮只处理遗漏的 Brief 要求；上线后保留 90 天；品牌自然转载 30 天；付费放大、原始素材和竞品排他另行报价。这里的天数和轮次只是示例，关键是让双方在报价前看到同一份范围。\n\n平台级要求也应量化。TikTok Branded Mission 的官方规格示例包含 24 个英文字符的广告主名称上限、70 个英文字符的 Mission 名称上限，以及品牌 Logo 露出超过 1 秒等具体规则。你的 Campaign 未必使用该产品，但这个例子说明：模糊的“明显露出”可以转成可检查的时长、位置和素材要求。',
          '“One video” is not a complete scope. A sample brief might specify: one 45–60 second vertical video; one concept submission; one rough cut; two revision rounds, with round one covering facts, structure and required shots and round two limited to missed brief requirements; a 90-day live period; 30 days of organic brand reposting; and separate pricing for paid amplification, raw files and category exclusivity. These numbers are examples, not default contract terms. Their purpose is to make both sides quote the same scope.\n\nPlatform requirements can also be measurable. TikTok’s official Branded Mission specifications include examples such as a 24-English-character advertiser-name limit, a 70-English-character mission-name limit and a brand-logo requirement of more than one second. Your campaign may use a different product, but the example shows how “prominent visibility” can become a testable duration, placement and asset requirement.'
        ),
        citations: ['tiktokSpecs'],
      },
    ],
    table: {
      title: pair('Brief 范围检查表', 'Brief scope table'),
      note: pair('数值为示例，应以最终合同、平台规则和市场法规为准。', 'Values are examples. Final contracts, platform policies and local law govern.'),
      headers: [pair('项目', 'Item'), pair('示例写法', 'Example'), pair('谁确认', 'Owner')],
      rows: [
        [pair('交付', 'Deliverable'), pair('1 条 45–60 秒视频', '1 × 45–60 sec video'), pair('Campaign 负责人', 'Campaign owner')],
        [pair('修改', 'Revisions'), pair('2 轮，范围分开', '2 rounds, scoped'), pair('品牌 + 创作者', 'Brand + creator')],
        [pair('使用权', 'Usage'), pair('自然转载 30 天', '30-day organic repost'), pair('商务 / 法务', 'Commercial / legal')],
        [pair('披露', 'Disclosure'), pair('画面、口播、平台工具', 'Visual, spoken, platform tool'), pair('法务 / 市场', 'Legal / market')],
      ],
    },
    tool: {
      kind: 'reference-list',
      title: pair('Brief 完整度清单', 'Brief completeness checklist'),
      intro: pair('提交 Brief 前，按顺序确认以下 6 项都已明确并有负责人。', 'Before sharing the brief, confirm that all six items are explicit and have an owner.'),
      items: [
        pair('主要目标与目标受众', 'Primary goal and target audience'),
        pair('内容任务和必要产品事实', 'Content job and required product facts'),
        pair('交付数量、格式和日期', 'Deliverable quantity, format and dates'),
        pair('审核节点和修改轮次', 'Review stages and revision rounds'),
        pair('使用权、放大和排他范围', 'Usage, amplification and exclusivity'),
        pair('披露要求和衡量方案', 'Disclosure and measurement plan'),
      ],
    },
    internalLinks: ['creator-campaign-status-system', 'creator-campaign-measurement'],
    sources: [sources.ftcDisclosure, sources.asaDisclosure, sources.youtubePaid, sources.tiktokSpecs],
  },

  'personalized-creator-outreach': {
    deepDive: [
      {
        heading: pair('把第一封邮件控制在一个决定内', 'Design the first message around one decision'),
        body: pair(
          '第一封邮件不是完整提案，也不是品牌介绍册。建议用 120–180 个中文字完成 4 件事：用 1 句可核验的内容观察说明为什么联系对方；用 2 句说明产品、市场和合作任务；用 1 行列出平台、时间窗与大致交付；最后只问 1 个下一步，例如“是否有兴趣，并可否提供 11 月档期和对应报价范围”。这些数量是写作约束，不是行业基准，目的是降低阅读和回复成本。\n\n若 3 个工作日未回复，可以进行第 1 次跟进，补充一个新信息或明确截止时间；再过 4–5 个工作日进行最后一次跟进。不要用“只是顶一下”制造噪音，也不要无限追加。每次发送前检查引用的内容仍然可访问、姓名和频道无误、地区与品类限制没有变化。',
          'The first message is not a full proposal or a brand brochure. As a practical writing constraint, use roughly 90–140 English words to do four jobs: one verifiable content observation that explains why this creator; two sentences on the product, market and content task; one line on platform, timing and likely deliverable; and one next step, such as asking for interest, November availability and a rate range. These counts are not industry benchmarks. They are limits that make the decision easier to read and answer.\n\nIf there is no reply after three business days, send one follow-up with a new fact or a clear decision date. A final follow-up can come four to five business days later. Avoid endless “bumping this” messages. Before each send, verify that the referenced content still exists, the creator and channel names are correct, and market or category restrictions have not changed.'
        ),
        citations: ['youtubeBrandDeals', 'tiktokCollab'],
      },
      {
        heading: pair('披露、权益和报价必须在进入方案前出现', 'Surface disclosure, rights and pricing before concept work'),
        body: pair(
          '赠品、折扣、佣金和付费合作都可能形成需要披露的重要关系。FTC 的指南明确说明，免费或折扣产品也可能触发披露义务；披露必须清楚、显眼，并与推广内容本身放在一起。因此外联不能只写“送你体验”，再把发布预期留到后面。若品牌期待内容、链接、素材使用或付费放大，应在创作者投入方案前说清楚。\n\nTikTok One 的官方协作方式包括直接邀请、开放申请、邀请链接和把创作者内容同步到 Ads Manager。不同路径意味着不同的授权和操作步骤。QuickKOL 的外联记录应把“自然发布”“品牌转载”“广告放大”“原始素材”拆成独立状态，并保存创作者确认的版本，避免一个模糊的 yes 被解释成所有权益都同意。',
          'Gifts, discounts, commissions and paid work can create a material relationship that needs disclosure. FTC guidance explicitly includes free or discounted products and says disclosure should be clear, conspicuous and placed with the endorsement itself. Outreach therefore should not say only “we would love to send you a product” while hiding an expected post. If the brand expects content, a link, usage rights or paid amplification, say so before the creator invests in a concept.\n\nTikTok One supports several collaboration paths, including direct invitations, open applications, invite links and syncing creator posts to Ads Manager. Each path can require a different permission and operating step. QuickKOL should therefore track organic publication, brand reposting, paid amplification and raw assets as separate scope states, with the creator’s confirmed version attached. A vague yes should never be interpreted as approval for every right.'
        ),
        citations: ['ftcDisclosure', 'tiktokCollab'],
      },
    ],
    table: {
      title: pair('外联信息密度表', 'Outreach information map'),
      note: pair('先帮助对方判断，再请求更多材料。', 'Help the creator decide before requesting more work.'),
      headers: [pair('段落', 'Block'), pair('建议长度', 'Suggested length'), pair('必须回答', 'Question answered')],
      rows: [
        [pair('相关性', 'Relevance'), pair('1–2 句', '1–2 sentences'), pair('为什么是我？', 'Why me?')],
        [pair('合作范围', 'Scope'), pair('2–3 句', '2–3 sentences'), pair('要做什么？', 'What is the job?')],
        [pair('时间与权益', 'Timing and rights'), pair('1–2 行', '1–2 lines'), pair('何时、如何使用？', 'When and how used?')],
        [pair('下一步', 'Next step'), pair('1 个问题', '1 question'), pair('现在要回复什么？', 'What should I answer now?')],
      ],
    },
    tool: {
      kind: 'pipeline',
      title: pair('外联量估算器', 'Outreach volume estimator'),
      intro: pair('用自己的历史回复率和接受率估算需要联系的达人数量。', 'Use your own response and acceptance rates to estimate outreach volume.'),
      inputs: [
        { key: 'target', label: pair('目标合作人数', 'Target creators'), value: 6, min: 1, max: 100, step: 1 },
        { key: 'response', label: pair('预计回复率 %', 'Expected response rate %'), value: 40, min: 1, max: 100, step: 1 },
        { key: 'acceptance', label: pair('回复后接受率 %', 'Acceptance after reply %'), value: 50, min: 1, max: 100, step: 1 },
      ],
    },
    internalLinks: ['creator-selection-beyond-followers', 'write-a-useful-campaign-brief'],
    sources: [sources.ftcDisclosure, sources.youtubeBrandDeals, sources.tiktokCollab],
  },

  'read-creator-engagement-data': {
    deepDive: [
      {
        heading: pair('先统一分母，再讨论高低', 'Normalize the denominator before judging performance'),
        body: pair(
          '互动率至少有两种常见口径：互动量 ÷ 粉丝数，以及互动量 ÷ 观看量。示例：一条视频获得 1,200 次点赞、80 条评论、40 次收藏和 30 次分享，总互动为 1,350；账号有 100,000 名粉丝、视频有 45,000 次观看，则粉丝口径为 1.35%，观看口径为 3.00%。两个结果都可以正确，但回答的问题不同，不能放进同一列直接排名。\n\n再看平台指标的定义。YouTube 把平均观看时长定义为在所选内容、日期和地区等筛选条件下，每次观看的平均分钟数；曝光点击率描述缩略图展示后产生观看的频率。官方也提醒，内容向更广受众扩散时 CTR 可能下降，因此“CTR 下降”不一定等于内容变差。报告中必须保存平台、日期、内容格式、是否付费和分母。',
          'Engagement rate commonly uses at least two denominators: interactions divided by followers, or interactions divided by views. Suppose a video receives 1,200 likes, 80 comments, 40 saves and 30 shares, for 1,350 interactions. The account has 100,000 followers and the video has 45,000 views. Engagement by followers is 1.35%; engagement by views is 3.00%. Both can be mathematically correct, but they answer different questions and should not be ranked in one unlabeled column.\n\nThen use the platform definition. YouTube defines average view duration as the average minutes watched per view under the selected content, date, country or other filters. Impressions CTR describes how often a registered thumbnail impression leads to a view. YouTube also notes that CTR can decline as content expands beyond a loyal core audience. A falling CTR therefore does not automatically mean that the content deteriorated. Store platform, date range, format, paid status and denominator with every metric.'
        ),
        citations: ['youtubeAnalytics', 'youtubeCtr'],
      },
      {
        heading: pair('用分布和评论验证数字背后的原因', 'Use distribution and comments to explain the number'),
        body: pair(
          '建议为每位达人抽取 12 条同类内容，记录中位观看量、第 25 与第 75 百分位附近的表现，以及最高和最低内容的背景。示例：若中间 6 条稳定在 20k–28k，但一条抽奖达到 140k，预算应以稳定区间为基础，把抽奖内容单独标注。样本不足 5 条时，不要输出“稳定”结论，只写“证据不足”。\n\n评论质量也需要计数而不是凭印象。可从每条内容前 50 条可见评论中标记产品问题、购买意图、使用经验、无关表情和疑似机器人重复；再报告各类数量与典型原文。这个 50 条是审阅容量的建议值，并非总体推断。TikTok 的商业内容质量标准强调真实使用、经验和可信表达，评论语境能帮助团队验证观众是否真的理解了产品，而不仅是做出一次轻量互动。',
          'For each creator, sample 12 comparable posts and record median views, the approximate 25th-to-75th percentile range, and the context behind the highest and lowest posts. If the middle six posts sit between 20k and 28k views while one giveaway reaches 140k, budget against the stable range and label the giveaway separately. When fewer than five comparable posts exist, do not declare the account “consistent”; record that evidence is insufficient.\n\nComment quality should also be counted rather than described from memory. From the first 50 visible comments on each post, label product questions, purchase intent, user experience, unrelated reactions and suspicious repetition. Report the counts with representative examples. Fifty is a review-capacity threshold, not a population estimate. TikTok’s commercial-content quality standard emphasizes authentic use, experience and credible expression; comment context helps show whether people understood the product instead of making a lightweight interaction.'
        ),
        citations: ['tiktokQuality'],
      },
    ],
    table: {
      title: pair('常用指标与计算口径', 'Metric definition table'),
      note: pair('始终保留平台原始字段、时间窗和分母。', 'Always retain the platform field, date range and denominator.'),
      headers: [pair('指标', 'Metric'), pair('公式', 'Formula'), pair('适合回答', 'Useful for')],
      rows: [
        [pair('粉丝互动率', 'Follower engagement'), pair('互动 ÷ 粉丝 × 100%', 'Interactions ÷ followers × 100%'), pair('账号规模下的互动', 'Interaction relative to account size')],
        [pair('观看互动率', 'View engagement'), pair('互动 ÷ 观看 × 100%', 'Interactions ÷ views × 100%'), pair('看过内容后的行动', 'Action among viewers')],
        [pair('观看完成度', 'Average percentage viewed'), pair('平均观看时长 ÷ 视频时长', 'Avg. watch time ÷ video length'), pair('内容留存', 'Content retention')],
        [pair('点击率', 'CTR'), pair('点击 ÷ 可计曝光 × 100%', 'Clicks ÷ eligible impressions × 100%'), pair('包装和行动入口', 'Packaging and action path')],
      ],
    },
    tool: {
      kind: 'engagement',
      title: pair('互动率双口径计算器', 'Engagement-rate calculator'),
      intro: pair('填写同一条内容的数据，同时查看粉丝口径和观看口径。', 'Enter data from one post and compare follower- and view-based rates.'),
      inputs: [
        { key: 'followers', label: pair('粉丝数', 'Followers'), value: 100000, min: 1, step: 100 },
        { key: 'views', label: pair('观看量', 'Views'), value: 45000, min: 1, step: 100 },
        { key: 'likes', label: pair('点赞', 'Likes'), value: 1200, min: 0, step: 1 },
        { key: 'comments', label: pair('评论', 'Comments'), value: 80, min: 0, step: 1 },
        { key: 'saves', label: pair('收藏', 'Saves'), value: 40, min: 0, step: 1 },
        { key: 'shares', label: pair('分享', 'Shares'), value: 30, min: 0, step: 1 },
      ],
    },
    internalLinks: ['creator-selection-beyond-followers', 'creator-campaign-measurement'],
    sources: [sources.youtubeAnalytics, sources.youtubeCtr, sources.tiktokQuality],
  },

  'ai-agent-human-checkpoints': {
    deepDive: [
      {
        heading: pair('按风险决定审批，不按“AI 或人工”二分', 'Set approval by risk rather than an AI-versus-human binary'),
        body: pair(
          'NIST AI RMF 用 GOVERN、MAP、MEASURE、MANAGE 四个函数组织 AI 风险管理，并强调角色、责任和监督配置需要清楚。放进达人营销后，可以把任务分成三档：低风险任务如整理公开资料、去重和格式化，可自动执行并抽样检查；中风险任务如匹配理由、邮件草稿和表现解释，需要人工确认后进入下一步；高风险任务如发送外联、接受报价、承诺权益、发布内容和处理个人数据，必须由有权限的负责人明确批准。\n\n“人工在环”不是在流程末尾加一个按钮。每个检查点要写清输入、允许的证据、通过标准、负责人和失败后的处理。示例：外联发送前必须确认 5 项——内容引用真实、收件人正确、范围与 Brief 一致、报价字段没有被模型补写、披露和市场限制已检查。若任意一项未知，状态应回到待确认，而不是让模型猜一个值。',
          'NIST AI RMF organizes risk management around four functions—GOVERN, MAP, MEASURE and MANAGE—and stresses clear roles, responsibilities and human oversight configurations. In creator marketing, group tasks into three levels. Low-risk work such as organizing public information, deduplication and formatting can run automatically with sampling. Medium-risk work such as fit explanations, outreach drafts and performance interpretation needs human confirmation before advancing. High-risk actions—sending outreach, accepting a quote, committing usage rights, publishing content or handling personal data—need explicit approval from an authorized owner.\n\n“Human in the loop” is not a button added at the end. Each checkpoint needs a defined input, allowed evidence, pass criteria, owner and failure path. Before outreach, for example, confirm five things: the referenced content is real, the recipient is correct, the scope matches the brief, the model did not invent a price, and disclosure or market restrictions were checked. If any item is unknown, return the record to “needs confirmation” instead of asking the model to fill the gap.'
        ),
        citations: ['nistAiRmf', 'ftcDisclosure'],
      },
      {
        heading: pair('记录模型产出与最终决定之间的差异', 'Measure the gap between model output and final decision'),
        body: pair(
          '每周抽取至少 20 个 Agent 建议，记录“直接采用、轻微修改、重大修改、拒绝”四种结果，并按任务类型拆分。若 20 个外联草稿中 12 个直接采用、5 个轻微修改、2 个重大修改、1 个拒绝，直接采用率为 60%，但这并不等于准确率；还要检查错误是否集中在姓名、报价、市场或事实引用等高风险字段。小样本只用于发现问题，不应用来宣传产品性能。\n\n把每次人工修改变成下一轮规则，而不是只修当前文本。例如模型反复把“获得免费产品”写成无需披露，就应在 Brief 数据结构中增加 material connection 字段，并在发送前强制检查。TikTok 对商业内容的质量要求分为用户体验、品牌呈现与制作质量等维度；类似的多维检查比一个总分更容易定位具体缺陷。',
          'Each week, sample at least 20 Agent recommendations and record four outcomes: accepted, minor edit, major edit or rejected. Split the results by task. If 12 of 20 outreach drafts are accepted, five need minor edits, two need major edits and one is rejected, the direct-acceptance rate is 60%. That is not the same as accuracy. Check whether errors cluster in names, pricing, market constraints or factual references, because those fields carry different consequences. A small sample is useful for finding failure modes; it should not become a public performance claim.\n\nTurn repeated human corrections into the next operating rule instead of fixing only the current text. If a model repeatedly treats a free product as requiring no disclosure, add a material-connection field to the brief and make it a pre-send check. TikTok’s commercial-content quality standard uses multiple dimensions, including user experience, brand presentation and production quality. A multidimensional review makes a defect easier to locate than one overall score.'
        ),
        citations: ['tiktokQuality'],
      },
    ],
    table: {
      title: pair('Agent 权限矩阵', 'Agent authority matrix'),
      note: pair('权限应随风险、证据和可逆性调整。', 'Authority should follow risk, evidence and reversibility.'),
      headers: [pair('任务', 'Task'), pair('默认权限', 'Default authority'), pair('检查方式', 'Review')],
      rows: [
        [pair('整理公开数据', 'Structure public data'), pair('自动 + 抽样', 'Automate + sample'), pair('每批抽查 10%', 'Review 10% per batch')],
        [pair('生成匹配理由', 'Draft fit rationale'), pair('人工确认', 'Human confirmation'), pair('回到原始内容', 'Open source content')],
        [pair('草拟外联', 'Draft outreach'), pair('不可自动发送', 'No auto-send'), pair('5 项发送检查', '5 pre-send checks')],
        [pair('预算、权益、发布', 'Budget, rights, publish'), pair('负责人批准', 'Owner approval'), pair('保存决定与版本', 'Log decision and version')],
      ],
    },
    tool: {
      kind: 'reference-list',
      title: pair('AI 产出发布前检查清单', 'AI output release checklist'),
      intro: pair('每项都有证据并由对应负责人确认后，再发送外联、承诺权益或发布内容。', 'Confirm every item with evidence and an accountable owner before outreach, rights commitments or publication.'),
      items: [
        pair('引用的原内容与数据链接可打开', 'Referenced content and data links open correctly'),
        pair('收件人、账号、市场与语言已复核', 'Recipient, account, market and language are verified'),
        pair('价格、日期、产品事实均有来源，未由模型补写', 'Price, dates and product facts have sources and were not invented'),
        pair('交付、修改、使用权与排他范围与 Brief 一致', 'Deliverables, revisions, usage and exclusivity match the brief'),
        pair('广告披露、平台规则与市场限制已检查', 'Disclosure, platform policy and market restrictions are checked'),
        pair('预算、权益、发送或发布由有权限的负责人批准', 'An authorized owner approved budget, rights, sending or publication'),
      ],
    },
    internalLinks: ['personalized-creator-outreach', 'creator-campaign-status-system'],
    sources: [sources.nistAiRmf, sources.ftcDisclosure, sources.tiktokQuality],
  },

  'creator-campaign-measurement': {
    deepDive: [
      {
        heading: pair('发布前建立 3 层指标和 5 个 UTM 字段', 'Set three metric layers and five UTM fields before launch'),
        body: pair(
          '把指标分为三层：内容层记录观看、平均观看时长、收藏、分享和评论主题；行动层记录链接点击、落地页会话、注册或加购；业务层记录购买、收入、毛利或合格线索。每层只选 1–3 个与决策直接相关的核心指标，避免把所有可见数字都放进 KPI。示例：新品教育 Campaign 的主要指标可以是平均观看百分比和产品问题评论数，次要指标是链接点击，购买只作为观察。\n\nGoogle Analytics 建议在自定义 Campaign URL 中保持一致的 utm_source、utm_medium、utm_campaign、utm_id 和 utm_source_platform，并可用 utm_content 区分不同创意。参数区分大小写，因此 instagram、Instagram 和 IG 可能被拆成不同来源。上线前点击每位达人的测试链接，确认重定向没有移除参数，落地页加载正常，关键事件能被记录。',
          'Use three metric layers. The content layer covers views, average view duration, saves, shares and comment themes. The action layer covers link clicks, landing sessions, sign-ups or add-to-cart. The business layer covers purchases, revenue, margin or qualified leads. Select only one to three decision-relevant primary metrics at each layer instead of turning every available number into a KPI. For a product-education campaign, primary metrics might be average percentage viewed and the number of product questions in comments; clicks can be secondary and purchases observational.\n\nGoogle Analytics recommends consistent custom-campaign parameters including utm_source, utm_medium, utm_campaign, utm_id and utm_source_platform, with utm_content available to distinguish creatives. Parameter values are case-sensitive, so instagram, Instagram and IG can fragment one source. Before launch, click every creator’s test link and confirm that redirects preserve the parameters, the landing page loads, and the key event is recorded.'
        ),
        citations: ['gaUtm', 'youtubeAnalytics'],
      },
      {
        heading: pair('把观察、归因和增量分开报告', 'Report observation, attribution and incrementality separately'),
        body: pair(
          '若一位达人带来 80,000 次观看、1,600 次点击和 48 次购买，可以报告点击率 2.0%、点击到购买转化率 3.0%。若总成本为 12,000 元、可追踪收入为 30,000 元，则 ROAS 为 2.5，CPA 为 250 元。这些都是示例计算，而且只描述可观察路径；它们不能证明没有看到链接或通过其他设备购买的人完全没有受到影响。\n\nGA4 的归因报告目前提供数据驱动、付费与自然渠道最后点击、Google 付费渠道最后点击等模型。Google 还说明，数据驱动归因可能在转化后 7 天内重新分配信用，建模关键事件最多可能在记录后 12 天继续更新。Campaign 复盘因此要固定提取日期，并把“平台观察值”“分析工具归因值”“对增量的判断”分成三列，避免把最后点击直接写成因果。',
          'If one creator produces 80,000 views, 1,600 clicks and 48 purchases, you can report a 2.0% click rate and a 3.0% click-to-purchase conversion rate. If total cost is ¥12,000 and trackable revenue is ¥30,000, ROAS is 2.5 and CPA is ¥250. These are example calculations and describe only the observable path. They do not prove that people who did not click—or purchased on another device—received no influence from the creator.\n\nGA4 attribution reports currently include data-driven, paid-and-organic last click and Google-paid-channels last click models. Google also says data-driven credit can be reattributed for up to seven days after conversion, while modeled key events can continue updating for up to 12 days after recording. Fix the report extraction date and separate “platform observation,” “analytics attribution” and “incrementality judgment” into three columns. Do not present a last-click allocation as causal proof.'
        ),
        citations: ['gaAttribution', 'gaModeled'],
      },
    ],
    table: {
      title: pair('Campaign 衡量层级', 'Campaign measurement layers'),
      note: pair('每个指标都要对应一个后续决定。', 'Every metric should map to a decision.'),
      headers: [pair('层级', 'Layer'), pair('指标示例', 'Example metrics'), pair('可支持的决定', 'Decision supported')],
      rows: [
        [pair('内容', 'Content'), pair('观看、留存、评论主题', 'Views, retention, comment themes'), pair('创意是否讲清楚', 'Did the creative explain?')],
        [pair('行动', 'Action'), pair('点击、会话、注册', 'Clicks, sessions, sign-ups'), pair('路径是否顺畅', 'Did the path work?')],
        [pair('业务', 'Business'), pair('购买、收入、合格线索', 'Purchases, revenue, qualified leads'), pair('是否继续投入', 'Should investment continue?')],
        [pair('增量', 'Incrementality'), pair('对照、地区或时间测试', 'Control, geo or time test'), pair('是否由 Campaign 造成', 'Did the campaign cause lift?')],
      ],
    },
    tool: {
      kind: 'roi',
      title: pair('Creator Campaign 结果计算器', 'Creator campaign result calculator'),
      intro: pair('输入同一统计窗口内的成本、收入、点击和购买。', 'Use values from the same reporting window.'),
      inputs: [
        { key: 'cost', label: pair('总成本', 'Total cost'), value: 12000, min: 0, step: 100 },
        { key: 'revenue', label: pair('可追踪收入', 'Trackable revenue'), value: 30000, min: 0, step: 100 },
        { key: 'clicks', label: pair('点击', 'Clicks'), value: 1600, min: 0, step: 1 },
        { key: 'conversions', label: pair('购买 / 转化', 'Purchases / conversions'), value: 48, min: 0, step: 1 },
      ],
    },
    internalLinks: ['read-creator-engagement-data', 'write-a-useful-campaign-brief'],
    sources: [sources.gaUtm, sources.gaAttribution, sources.gaModeled, sources.youtubeAnalytics, sources.youtubeBrandAccess],
  },

  'creator-shortlist-workflow': {
    deepDive: [
      {
        heading: pair('把 40 个搜索结果压缩成 12 个可讨论候选人', 'Turn 40 search results into 12 discussable candidates'),
        body: pair(
          '先用硬性条件做第一轮：市场、语言、平台、内容品类、时间窗、明显竞品冲突。示例：从 40 个搜索结果中排除 11 个地区不符、7 个近期没有相关内容、4 个存在明确冲突、6 个缺少基本联系方式，剩下 12 个进入证据审阅。排除原因必须保留，避免团队成员再次添加同一账号，也能在条件变化时快速恢复候选人。\n\n第二轮为 12 人补齐同一组字段：3 条相关内容、受众与市场证据、典型表现区间、风险、待确认问题、负责人和下一步。不要先把它们压成一个总分。先按硬性要求是否通过分组，再比较证据强弱。最终名单可以包含 5 个优先、4 个替补和 3 个待确认，而不是假装 1–12 名之间存在精确差距。',
          'Start with hard requirements: market, language, platform, content category, timing and obvious competitor conflict. In an example funnel, 40 search results might lose 11 for market mismatch, seven for no recent relevant content, four for clear conflicts and six for missing basic contact paths, leaving 12 for evidence review. Keep every exclusion reason. That prevents another teammate from re-adding the same account and makes it possible to restore a creator when conditions change.\n\nFor the remaining 12, collect the same fields: three relevant content examples, audience and market evidence, typical performance range, risk, open questions, owner and next step. Do not immediately compress everything into one total score. Group candidates by hard-requirement status, then compare evidence strength. A useful output may contain five priority candidates, four backups and three needing confirmation rather than pretending that ranks 1–12 are precisely different.'
        ),
        citations: ['tiktokCollab'],
      },
      {
        heading: pair('用漏斗倒推需要多少候选人', 'Work backward from the pipeline you need'),
        body: pair(
          '如果 Campaign 需要 8 位最终上线达人，团队历史数据显示外联回复率 40%，回复后符合预算与档期的接受率 50%，理论上需要联系 8 ÷ 0.40 ÷ 0.50 = 40 人。再留 15% 的履约缓冲，则初始外联池约为 47 人。这个数字不是行业平均值，必须用你自己的历史数据更新；新品、复杂市场或高排他要求通常会改变漏斗。\n\nIAB 的 2025 报告预计美国 Creator 广告投入达到 370 亿美元，较 2024 年增长 26%，并指出标准化和衡量仍是行业关注点。预算增长并不会自动改善名单质量。QuickKOL 应保存每一阶段的人数、退出原因和用时，让团队知道问题发生在搜索覆盖、回复、报价、审批还是履约，而不是一味扩大搜索结果。',
          'If a campaign needs eight creators to publish, and your historical response rate is 40% while 50% of replies accept within budget and timing, the theoretical outreach requirement is 8 ÷ 0.40 ÷ 0.50 = 40 creators. Add a 15% delivery buffer and the initial outreach pool becomes about 47. This is not an industry benchmark. Update it with your own history; a new category, complex market or strict exclusivity requirement can change the funnel.\n\nIAB’s 2025 report projected U.S. creator ad spend at $37 billion, up 26% from 2024, while highlighting standardization and measurement concerns. More budget does not automatically produce a better shortlist. QuickKOL should preserve counts, exit reasons and time at each stage so the team can see whether the constraint is search coverage, response, pricing, approval or delivery instead of simply expanding the result set.'
        ),
        citations: ['iab2025'],
      },
    ],
    table: {
      title: pair('候选名单最小字段', 'Minimum shortlist fields'),
      note: pair('没有证据的字段标记为“待确认”，不要补猜。', 'Mark missing evidence as unknown; do not guess.'),
      headers: [pair('字段', 'Field'), pair('示例', 'Example'), pair('状态', 'Status')],
      rows: [
        [pair('推荐理由', 'Fit rationale'), pair('3 条相关内容证据', '3 relevant content signals'), pair('已确认', 'Confirmed')],
        [pair('表现区间', 'Performance range'), pair('中位数 + 异常点', 'Median + outlier'), pair('已确认', 'Confirmed')],
        [pair('商务条件', 'Commercial terms'), pair('报价、档期、权益', 'Rate, timing, rights'), pair('待确认', 'Unknown')],
        [pair('执行信息', 'Operations'), pair('负责人 + 下一步 + 日期', 'Owner + action + date'), pair('必须填写', 'Required')],
      ],
    },
    tool: {
      kind: 'pipeline',
      title: pair('候选池倒推计算器', 'Shortlist pipeline calculator'),
      intro: pair('用历史漏斗估算初始外联池，不要套用行业平均。', 'Estimate the initial pool from your own funnel, not an industry average.'),
      inputs: [
        { key: 'target', label: pair('目标上线人数', 'Target live creators'), value: 8, min: 1, max: 200, step: 1 },
        { key: 'response', label: pair('回复率 %', 'Response rate %'), value: 40, min: 1, max: 100, step: 1 },
        { key: 'acceptance', label: pair('合格接受率 %', 'Qualified acceptance %'), value: 50, min: 1, max: 100, step: 1 },
      ],
    },
    internalLinks: ['creator-selection-beyond-followers', 'creator-campaign-status-system'],
    sources: [sources.iab2025, sources.tiktokCollab, sources.youtubeAnalytics],
  },

  'creator-campaign-status-system': {
    deepDive: [
      {
        heading: pair('让每个状态只有一个进入条件和一个退出条件', 'Give every status one entry rule and one exit rule'),
        body: pair(
          '状态名不能只描述“好像进行到这里”。例如：已联系 = 已向经过审核的地址发送第一封外联并记录时间；协商中 = 创作者已回复且至少有一个商务条件未确认；已确认 = 交付、费用、日期、使用权与披露要求均有双方记录；制作中 = 产品或访问权限已到位且创作者开始制作；待审核 = 指定版本已提交；已发布 = 上线链接、时间和披露已核验。每个状态只设一个负责人和一个下一步日期。\n\n用数字管理积压。若“待审核”超过 2 个工作日、“协商中”超过 5 个工作日或“等待素材”超过约定日期，就进入异常队列；这些天数是示例服务标准，应由团队按 Campaign 调整。每周报告状态数量、平均停留天数和超时数量，比一句“整体顺利”更容易发现阻塞。',
          'A status should not mean “it seems to be around here.” Define it with an entry and exit rule. Contacted means the first message was sent to a reviewed address and timestamped. Negotiating means the creator replied and at least one commercial term remains open. Confirmed means deliverables, fee, date, usage and disclosure are recorded by both sides. In production means product or access arrived and work started. In review means a named version was submitted. Published means the live URL, time and disclosure were verified. Give each record one owner and one next-action date.\n\nManage backlog with numbers. If “in review” exceeds two business days, “negotiating” exceeds five, or “waiting for asset” passes its agreed date, move the item into an exception queue. These day counts are example service levels and should be set per campaign. A weekly report of stage count, average days in stage and overdue count exposes constraints better than saying that the campaign is “generally on track.”'
        ),
        citations: ['tiktokCollab', 'youtubeBrandAccess'],
      },
      {
        heading: pair('把发布、授权与数据回收做成独立完成项', 'Close publication, permissions and reporting separately'),
        body: pair(
          '内容上线并不等于 Campaign 完成。发布后至少核对 6 项：URL 可访问、发布时间正确、广告披露可见、约定链接或代码有效、品牌合作权限状态正确、首个数据截图已保存。YouTube 说明，创作者分享 brand partner access 后，品牌可查看自然与付费表现，并可能进行合作内容放大；同时平台会添加 Paid promotion 标签。权限和披露都是独立于“视频已经发布”的状态。\n\n报告关闭也要有日期。建议在发布后 24–48 小时保存首个快照，7 天记录早期表现，在合同或 Campaign 约定窗口结束时保存最终数据；这些时间点是运营建议，不是平台标准。若 GA4 建模或归因数据仍可能更新，报告应写出提取日期。最后记录可复用素材、到期权益、发票、学习点和下一次是否优先合作。',
          'A live post does not mean the campaign is complete. After publication, verify at least six items: the URL works, publication time is correct, disclosure is visible, the agreed link or code works, brand-partner permission is in the expected state, and an initial data snapshot is saved. YouTube explains that brand partner access can let a brand see organic and paid performance and boost partnership content, while adding a Paid promotion label. Permission and disclosure are separate from the fact that the video is live.\n\nReporting also needs closure dates. A practical schedule is an initial snapshot after 24–48 hours, an early read at seven days, and a final extraction at the contract or campaign reporting window. These are operating suggestions, not platform standards. If GA4 attribution or modeled data can still update, write the extraction date into the report. Finally record reusable assets, rights expiry, invoice status, learning and whether the creator should be prioritized next time.'
        ),
        citations: ['youtubeBrandAccess', 'gaModeled'],
      },
    ],
    table: {
      title: pair('Campaign 状态定义', 'Campaign status definitions'),
      note: pair('状态必须由可观察事实触发。', 'Statuses must be triggered by observable facts.'),
      headers: [pair('状态', 'Status'), pair('进入证据', 'Entry evidence'), pair('下一步', 'Next action')],
      rows: [
        [pair('已联系', 'Contacted'), pair('发送时间与地址', 'Timestamp and recipient'), pair('跟进或关闭', 'Follow up or close')],
        [pair('协商中', 'Negotiating'), pair('有回复，条件未齐', 'Reply, terms open'), pair('确认缺失条件', 'Confirm open terms')],
        [pair('待审核', 'In review'), pair('版本与提交时间', 'Version and submit time'), pair('合并反馈', 'Consolidate feedback')],
        [pair('已发布', 'Published'), pair('URL、披露、权限', 'URL, disclosure, access'), pair('数据快照与结算', 'Snapshot and payment')],
      ],
    },
    tool: {
      kind: 'reference-list',
      title: pair('发布收尾清单', 'Publication closeout checklist'),
      intro: pair('发布后按顺序核对以下 6 项，再关闭 Campaign。', 'Review these six items in order before closing the campaign.'),
      items: [
        pair('上线 URL 与发布时间已核验', 'Live URL and publication time verified'),
        pair('广告披露清楚可见', 'Advertising disclosure is visible'),
        pair('链接、UTM 或优惠码有效', 'Link, UTM or code works'),
        pair('品牌合作与放大权限正确', 'Brand-partner and boost access is correct'),
        pair('初始数据快照已保存', 'Initial performance snapshot saved'),
        pair('权益到期、发票和最终报告已有负责人', 'Rights expiry, invoice and final report have owners'),
      ],
    },
    internalLinks: ['write-a-useful-campaign-brief', 'creator-campaign-measurement'],
    sources: [sources.tiktokCollab, sources.youtubeBrandAccess, sources.ftcDisclosure, sources.gaModeled],
  },
};
