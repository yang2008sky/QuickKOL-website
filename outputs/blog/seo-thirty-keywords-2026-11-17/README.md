# QuickKOL 30 篇双语博客交接 — 2026-11-17

用户已确认上传本批 30 篇。包含 60 份双语 Markdown、30 张封面、30 张正文插图、本批独立数据模块、逐篇源稿、35 份可编辑 SVG、引用来源和内部图像生成记录。等待负责人完成正式网站接入、最终审核、合并与部署。

本次只新增 `outputs/blog/seo-thirty-keywords-2026-11-17/`。同步基线 `83277cc126f53928308233f6aebb450597afab66`；保留负责人清理已上线历史交付文件的提交。不包含完整本地预览、历史文章集合、列表排序、依赖或部署配置。

## 接入方式

1. 从 `src/blog-november-seventeenth.js` 导入 `novemberSeventeenthPosts`，加入正式站运行时与静态构建使用的文章集合；不要覆盖历史集合。网站不会自动读取 `outputs/blog/`，仅拉取交付文件并部署不会自动显示新稿。
2. 将 `public/assets/blog/` 的 60 项资源添加到正式资源目录。封面为 30 张 1672×941 JPEG、sRGB、quality 85；正文为 9 张 JPEG 场景照片和 21 张双语 SVG。`figures` 已配置插入位置、双语 alt、caption 与文件名，确认模板支持及懒加载。
3. 2026-11-17 是写作与研究日期，正式发布时确认实际 `date`、`updatedDate` 与作者信息。Markdown 开头的审阅状态仅作交接，不作为公开正文。
4. 接入后核对双语内链、citation、fragment、列表、canonical、hreflang、OG、BlogPosting 和 sitemap。现有模板每段只输出一个情境内链，本批已分段处理并核验实际输出。
5. 由负责人最终审核、合并与 Vercel 部署。本次未推 main、未合并、未生产部署。正式上线后按确认清单从内容分支清理对应交付包，保留本地归档和正式文章。

## 内容与资料边界

所有选题围绕达人营销，按用户要求本批没有特殊教育向选题。每篇提供与任务有关的表格与 reference-list 清单，没有无用途的计算器或下载按钮。

- 英文 `answer + sections` 正文为 1500–1595 词，不靠标题、表格、来源或 CTA 凑字数；中文保留相应事实、步骤、条件与案例。每篇至少 3 个正文来源、每种语言至少 2 个正文情境内链。
- 2025 趋势与算法选题区分当年公告和后续更新；TikTok One 最早公告在 2024 年。Reddit 根据 2026 年 10–11 月更新说明当前信息流与实验，不写成全站统一榜单。
- Facebook 封面文章把 851×315 标为编辑草稿起点；相关官方帮助页研究时无法读取当前正文，因此没有冒称核验当前统一规格，发布人需在实际 Page 编辑器确认。
- TikTok Shop 使用适用美国资料；样品指南有新旧时限矛盾，未复制不一致数值或保证退款。LinkedIn 新选项按渐进上线处理。
- 供应商文章依据公开能力说明，不冒充实际试用、独立性能排名或报价。人物资料是研究线索，不代表已合作、确认档期、报价或受众构成。假设场景和数字不是客户结果或行业基准。
- 照片为内置 imagegen 生成的编辑场景，文字图形为原创 SVG。公开画面、图注、alt 没有 AI 制作提示语；内部来源与提示词见 `research/photo-jobs.json`。原始大 PNG 保留本地归档，不上传本包。

## 已完成的本地检查

30 篇正文与引用匹配、60 个静态语言页面的链接和元数据、120 个本地页面与图片地址、72 个布局页面案例、92 张截图、中英文标题换行、60 项资产尺寸和副本一致性、35 个原生图形文字边界均通过。完整独立副本构建生成 1317 个入口。完整截图留本地归档，包内附代表列表截图。

这些结果属于独立预览，不替代正式接入后的构建与审核。历史全站检查曾有一处无关旧稿英文含中文的问题，未改旧稿，也未声称历史测试全部通过。

## 关键词与计划正式 URL

以下为计划地址，不代表本批已经正式上线。

| 顺序 | 关键词 | 中文 | English |
| ---: | --- | --- | --- |
| 1 | how do i go live on tiktok | [中文](https://www.quickkol.com/zh/blog/tiktok-live-brand-expert-guest-session/) | [English](https://www.quickkol.com/blog/tiktok-live-brand-expert-guest-session/) |
| 2 | famous people from paraguay | [中文](https://www.quickkol.com/zh/blog/paraguay-public-figures-brand-role-research/) | [English](https://www.quickkol.com/blog/paraguay-public-figures-brand-role-research/) |
| 3 | what are the benefits of social media marketing | [中文](https://www.quickkol.com/zh/blog/social-media-benefits-creator-contribution-chain/) | [English](https://www.quickkol.com/blog/social-media-benefits-creator-contribution-chain/) |
| 4 | how to make money on social media | [中文](https://www.quickkol.com/zh/blog/social-media-creator-revenue-capacity-planning/) | [English](https://www.quickkol.com/blog/social-media-creator-revenue-capacity-planning/) |
| 5 | exercise clothing brands | [中文](https://www.quickkol.com/zh/blog/exercise-clothing-creator-sample-custody/) | [English](https://www.quickkol.com/blog/exercise-clothing-creator-sample-custody/) |
| 6 | gym fashion brands | [中文](https://www.quickkol.com/zh/blog/gym-fashion-creator-wardrobe-continuity/) | [English](https://www.quickkol.com/blog/gym-fashion-creator-wardrobe-continuity/) |
| 7 | active clothes brands | [中文](https://www.quickkol.com/zh/blog/active-clothes-creator-product-launch-readiness/) | [English](https://www.quickkol.com/blog/active-clothes-creator-product-launch-readiness/) |
| 8 | what is tiktok shop | [中文](https://www.quickkol.com/zh/blog/tiktok-shop-creator-affiliate-content-route/) | [English](https://www.quickkol.com/blog/tiktok-shop-creator-affiliate-content-route/) |
| 9 | digital marketing trends 2025 | [中文](https://www.quickkol.com/zh/blog/digital-marketing-2025-creator-tool-transition-review/) | [English](https://www.quickkol.com/blog/digital-marketing-2025-creator-tool-transition-review/) |
| 10 | competitive benchmarking analysis | [中文](https://www.quickkol.com/zh/blog/competitive-benchmarking-creator-content-mix-analysis/) | [English](https://www.quickkol.com/blog/competitive-benchmarking-creator-content-mix-analysis/) |
| 11 | social bookmarking sites | [中文](https://www.quickkol.com/zh/blog/social-bookmarking-creator-reference-library/) | [English](https://www.quickkol.com/blog/social-bookmarking-creator-reference-library/) |
| 12 | media kits | [中文](https://www.quickkol.com/zh/blog/media-kits-creator-proposal-version-fit/) | [English](https://www.quickkol.com/blog/media-kits-creator-proposal-version-fit/) |
| 13 | linkedin ads manager | [中文](https://www.quickkol.com/zh/blog/linkedin-ads-manager-thought-leader-review/) | [English](https://www.quickkol.com/blog/linkedin-ads-manager-thought-leader-review/) |
| 14 | what is share of voice | [中文](https://www.quickkol.com/zh/blog/share-of-voice-creator-category-claim-interpretation/) | [English](https://www.quickkol.com/blog/share-of-voice-creator-category-claim-interpretation/) |
| 15 | what is competitive benchmarking | [中文](https://www.quickkol.com/zh/blog/competitive-benchmarking-definition-creator-reference/) | [English](https://www.quickkol.com/blog/competitive-benchmarking-definition-creator-reference/) |
| 16 | how do you make a playlist on youtube | [中文](https://www.quickkol.com/zh/blog/youtube-playlist-multi-creator-release-maintenance/) | [English](https://www.quickkol.com/blog/youtube-playlist-multi-creator-release-maintenance/) |
| 17 | shadowban meaning | [中文](https://www.quickkol.com/zh/blog/shadowban-meaning-distribution-status-language/) | [English](https://www.quickkol.com/blog/shadowban-meaning-distribution-status-language/) |
| 18 | how to create a new youtube channel | [中文](https://www.quickkol.com/zh/blog/new-youtube-channel-creator-series-architecture/) | [English](https://www.quickkol.com/blog/new-youtube-channel-creator-series-architecture/) |
| 19 | instagram marketing strategy | [中文](https://www.quickkol.com/zh/blog/instagram-strategy-creator-explanation-followthrough/) | [English](https://www.quickkol.com/blog/instagram-strategy-creator-explanation-followthrough/) |
| 20 | what is tick tock | [中文](https://www.quickkol.com/zh/blog/tick-tock-tiktok-creator-product-vocabulary/) | [English](https://www.quickkol.com/blog/tick-tock-tiktok-creator-product-vocabulary/) |
| 21 | how to manage multiple social media accounts | [中文](https://www.quickkol.com/zh/blog/multiple-social-accounts-creator-version-control/) | [English](https://www.quickkol.com/blog/multiple-social-accounts-creator-version-control/) |
| 22 | what is the idea dimensions for a facebook cover photo | [中文](https://www.quickkol.com/zh/blog/facebook-cover-creator-partnership-composition/) | [English](https://www.quickkol.com/blog/facebook-cover-creator-partnership-composition/) |
| 23 | reddit front page | [中文](https://www.quickkol.com/zh/blog/reddit-front-page-creator-research-scope/) | [English](https://www.quickkol.com/blog/reddit-front-page-creator-research-scope/) |
| 24 | facebook algorithm 2025 best practices for organic development | [中文](https://www.quickkol.com/zh/blog/facebook-2025-original-creator-content-review/) | [English](https://www.quickkol.com/blog/facebook-2025-original-creator-content-review/) |
| 25 | instagram ad | [中文](https://www.quickkol.com/zh/blog/instagram-ad-creator-revision-commission/) | [English](https://www.quickkol.com/blog/instagram-ad-creator-revision-commission/) |
| 26 | ugc platforms | [中文](https://www.quickkol.com/zh/blog/ugc-platforms-assignment-type-comparison/) | [English](https://www.quickkol.com/blog/ugc-platforms-assignment-type-comparison/) |
| 27 | creatoriq company strengths weaknesses | [中文](https://www.quickkol.com/zh/blog/creatoriq-strengths-weaknesses-evidence-scope/) | [English](https://www.quickkol.com/blog/creatoriq-strengths-weaknesses-evidence-scope/) |
| 28 | growthhero marketplace | [中文](https://www.quickkol.com/zh/blog/growthhero-marketplace-listing-partner-fit/) | [English](https://www.quickkol.com/blog/growthhero-marketplace-listing-partner-fit/) |
| 29 | famous bakers | [中文](https://www.quickkol.com/zh/blog/famous-bakers-creator-demonstration-shortlist/) | [English](https://www.quickkol.com/blog/famous-bakers-creator-demonstration-shortlist/) |
| 30 | streamer us | [中文](https://www.quickkol.com/zh/blog/us-streamer-brand-broadcast-market-brief/) | [English](https://www.quickkol.com/blog/us-streamer-brand-broadcast-market-brief/) |

文件校验见 `SHA256SUMS.txt`。研究与提示词记录是内部交接材料，不作为网页正文。
