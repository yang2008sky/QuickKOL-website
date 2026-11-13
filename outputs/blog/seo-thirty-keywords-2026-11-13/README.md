# QuickKOL 30 篇双语博客交接 — 2026-11-13

用户已确认上传本批。包含 60 份中英文 Markdown、30 张封面、2 张正文照片、本批独立文章数据模块、可编辑 SVG、研究来源、内部提示词和实际检查记录。等待负责人完成正式网站接入、最终审核、合并与部署。

本次只新增 `outputs/blog/seo-thirty-keywords-2026-11-13/`，不包含完整预览副本、其列表排序或网站接入修改，不修改既有文章、其他网站代码、依赖和部署配置。固定内容分支仍为 `seo-blog`，同步基线为 `1b3fbdf13ff93b680656bee229952679c0ca2d22`；保留负责人清理已上线交付包的提交。

## 接入步骤

1. 从 `src/blog-november-thirteenth.js` 导入 `novemberThirteenthPosts`，将这 30 篇加入正式站运行时与静态构建使用的文章集合。不要覆盖完整历史集合。
2. 把 `public/assets/blog/` 的 32 张 JPEG 添加到正式资源目录。其中 2 张正文图分别用于民宿拍摄与 Instagram 音乐文章；`figures[].file`、`afterSection`、双语 `alt`、`caption` 已定义，请确认正式模板支持插入和懒加载。
3. 2026-11-13 是草稿与研究日期。发布时确认作者和实际发布日期，更新 `date`、`updatedDate`，移除或改写 Markdown 和 `deepDive` 中的本地审阅状态，同时保留研究日期及证据限制。
4. 接入后运行正式仓库构建，验收双语文章、列表、素材、引用与链接。网站不会自动读取 `outputs/blog/`；只合并交付目录并部署不会自动展示新文章。
5. 最终审核、合并和 Vercel 部署由指定负责人处理。本次只交付内容，不推送 main、不合并或部署。

## 内容与素材说明

全部文章主旨围绕达人营销的实际任务。第 10、11、12、13、17 篇的免费涨粉、机器人粉丝与免费点赞关键词为教育向：解释账号权限、激励、数据来源、分母与核验边界；不推荐刷量服务、不提供购买方法、不保证完整识别、不凭单一信号指控个人。相关 CTA 指向指标学习文章。

封面 1672 × 941、JPEG、sRGB；正文照片 1200 × 675。30 张封面独立制作，五种编辑视觉家族交错。照片用内置 imagegen、精确文字图形用可编辑 SVG 制作。公开图片、图注和 alt 不加 AI 制作提示语；内部生成提示词、来源和核验记录在 research。原始大 PNG 留本地写作归档，可编辑 SVG 随包提供。

每篇包含有任务价值的决策表与六项 reference-list 静态清单。本批没有计算器或下载按钮，不声称执行不存在的下载或计算器测试。

## 已完成检查与限制

- 英文实质正文按 answer 和 sections 计算，每篇 1,517–1,638 词；中文保留等效步骤、例子、事实和边界。每种语言至少 2 个正文情境内链、3 个权威或一手来源。
- 本批 60 个静态语言页面的正文链接、fragment、citation、H1、SEO、语言配对、作者、BlogPosting、sitemap、素材和组件检查通过。
- 92 个本地页面与资源请求成功。浏览器完成 72 条记录、70 张截图，覆盖全部 60 个手机详情路由、双语前三页的桌面与手机列表，以及代表性桌面详情、表格滚动和两张正文图懒加载。
- 另检查中英文共 90 个列表路由、180 个 viewport，每种语言 539 张唯一文章卡片及封面解码通过。只提供该分页检查记录，不把历史文章列表的全部截图重复装入本包。
- 中文前三页卡片在 390/1440 宽度、30 个中文详情在手机宽度完成标题换行检查，修正单字末行；封面 alt 也已按实际画面修正。
- 独立本地预览构建通过，生成 1,187 个静态入口与 sitemap 地址；这不等于正式站接入后的构建。
- 全站现有 61 项测试中 60 项通过、1 项既有失败：英文 `definition-influencer-multilingual-brief-glossary` 含中文术语。本批独立语言检查通过，没有修改旧文章消除此项。
- 部分当前 Meta 帮助页跳转登录或无法读取，文中保留限制，不编造固定界面、额度或所有账号能力。第三方平台功能为有来源的供应方描述，未测试客户账号。历史更新稿区分公告、生效与到期；趋势稿不声称抓取实时榜单。假设数字不代表客户结果或行业基准。

## 关键词与计划正式地址

下列是交接用的计划地址，不表示本批已上线。负责人接入后确认实际路由。

| 顺序 | 关键词 | 中文 | English |
| ---: | --- | --- | --- |
| 1 | instagram accounts | [中文](https://www.quickkol.com/zh/blog/instagram-accounts-collaboration-identity-map/) | [English](https://www.quickkol.com/blog/instagram-accounts-collaboration-identity-map/) |
| 2 | media strategy | [中文](https://www.quickkol.com/zh/blog/creator-media-strategy-distribution-roles/) | [English](https://www.quickkol.com/blog/creator-media-strategy-distribution-roles/) |
| 3 | best practices for homestay videos on meta platforms | [中文](https://www.quickkol.com/zh/blog/homestay-creator-videos-stay-proof-shot-plan/) | [English](https://www.quickkol.com/blog/homestay-creator-videos-stay-proof-shot-plan/) |
| 4 | social media audit | [中文](https://www.quickkol.com/zh/blog/creator-campaign-social-audit-record-retrieval/) | [English](https://www.quickkol.com/blog/creator-campaign-social-audit-record-retrieval/) |
| 5 | how to respond to messages on instagram | [中文](https://www.quickkol.com/zh/blog/instagram-creator-messages-scope-clarification/) | [English](https://www.quickkol.com/blog/instagram-creator-messages-scope-clarification/) |
| 6 | brand monitoring | [中文](https://www.quickkol.com/zh/blog/brand-monitoring-creator-mention-corrections/) | [English](https://www.quickkol.com/blog/brand-monitoring-creator-mention-corrections/) |
| 7 | how to make a youtube channel on youtube | [中文](https://www.quickkol.com/zh/blog/make-youtube-channel-creator-account-continuity/) | [English](https://www.quickkol.com/blog/make-youtube-channel-creator-account-continuity/) |
| 8 | how do i make a playlist on youtube | [中文](https://www.quickkol.com/zh/blog/youtube-playlist-creator-learning-sequence/) | [English](https://www.quickkol.com/blog/youtube-playlist-creator-learning-sequence/) |
| 9 | how to schedule posts on facebook | [中文](https://www.quickkol.com/zh/blog/facebook-scheduling-creator-event-release-clock/) | [English](https://www.quickkol.com/blog/facebook-scheduling-creator-event-release-clock/) |
| 10 | instagram free followers | [中文](https://www.quickkol.com/zh/blog/instagram-free-followers-access-recovery-handoff/) | [English](https://www.quickkol.com/blog/instagram-free-followers-access-recovery-handoff/) |
| 11 | instagram free ig followers | [中文](https://www.quickkol.com/zh/blog/free-ig-followers-campaign-baseline-reset/) | [English](https://www.quickkol.com/blog/free-ig-followers-campaign-baseline-reset/) |
| 12 | instagram robot followers | [中文](https://www.quickkol.com/zh/blog/instagram-robot-followers-automation-boundaries/) | [English](https://www.quickkol.com/blog/instagram-robot-followers-automation-boundaries/) |
| 13 | instagram followers free | [中文](https://www.quickkol.com/zh/blog/instagram-followers-free-growth-report-lineage/) | [English](https://www.quickkol.com/blog/instagram-followers-free-growth-report-lineage/) |
| 14 | ig followers | [中文](https://www.quickkol.com/zh/blog/ig-followers-creator-community-question-brief/) | [English](https://www.quickkol.com/blog/ig-followers-creator-community-question-brief/) |
| 15 | followers instagram | [中文](https://www.quickkol.com/zh/blog/instagram-followers-language-context-brief/) | [English](https://www.quickkol.com/blog/instagram-followers-language-context-brief/) |
| 16 | how to get sponsored as an influencer | [中文](https://www.quickkol.com/zh/blog/creator-sponsorship-proposal-brand-review/) | [English](https://www.quickkol.com/blog/creator-sponsorship-proposal-brand-review/) |
| 17 | tiktok likes free | [中文](https://www.quickkol.com/zh/blog/tiktok-free-likes-incentive-evidence-literacy/) | [English](https://www.quickkol.com/blog/tiktok-free-likes-incentive-evidence-literacy/) |
| 18 | ads library facebook | [中文](https://www.quickkol.com/zh/blog/facebook-ad-library-sponsored-version-comparison/) | [English](https://www.quickkol.com/blog/facebook-ad-library-sponsored-version-comparison/) |
| 19 | best tiktok creator strategies | [中文](https://www.quickkol.com/zh/blog/tiktok-creator-strategy-demonstration-iterations/) | [English](https://www.quickkol.com/blog/tiktok-creator-strategy-demonstration-iterations/) |
| 20 | create facebook page | [中文](https://www.quickkol.com/zh/blog/facebook-page-creator-campaign-public-home/) | [English](https://www.quickkol.com/blog/facebook-page-creator-campaign-public-home/) |
| 21 | how to get rid of followers on instagram | [中文](https://www.quickkol.com/zh/blog/instagram-follower-removal-campaign-record-change/) | [English](https://www.quickkol.com/blog/instagram-follower-removal-campaign-record-change/) |
| 22 | join brands | [中文](https://www.quickkol.com/zh/blog/joinbrands-content-posting-acceptance-brief/) | [English](https://www.quickkol.com/blog/joinbrands-content-posting-acceptance-brief/) |
| 23 | social snowball | [中文](https://www.quickkol.com/zh/blog/social-snowball-creator-commission-release-review/) | [English](https://www.quickkol.com/blog/social-snowball-creator-commission-release-review/) |
| 24 | creator iq | [中文](https://www.quickkol.com/zh/blog/creatoriq-campaign-data-export-handoff/) | [English](https://www.quickkol.com/blog/creatoriq-campaign-data-export-handoff/) |
| 25 | instagram updates october 2025 | [中文](https://www.quickkol.com/zh/blog/instagram-october-2025-updates-campaign-retrospective/) | [English](https://www.quickkol.com/blog/instagram-october-2025-updates-campaign-retrospective/) |
| 26 | tiktok trends right now | [中文](https://www.quickkol.com/zh/blog/tiktok-trends-live-brief-recheck-window/) | [English](https://www.quickkol.com/blog/tiktok-trends-live-brief-recheck-window/) |
| 27 | link in bio tools | [中文](https://www.quickkol.com/zh/blog/creator-link-bio-tools-destination-ownership/) | [English](https://www.quickkol.com/blog/creator-link-bio-tools-destination-ownership/) |
| 28 | how to add music to instagram post | [中文](https://www.quickkol.com/zh/blog/instagram-post-music-sponsored-rights-route/) | [English](https://www.quickkol.com/blog/instagram-post-music-sponsored-rights-route/) |
| 29 | can you schedule posts on instagram | [中文](https://www.quickkol.com/zh/blog/instagram-scheduling-format-capability-check/) | [English](https://www.quickkol.com/blog/instagram-scheduling-format-capability-check/) |
| 30 | tiktok stories | [中文](https://www.quickkol.com/zh/blog/tiktok-stories-creator-campaign-expiry-evidence/) | [English](https://www.quickkol.com/blog/tiktok-stories-creator-campaign-expiry-evidence/) |

## 文件范围

- `articles/`：60 份双语 Markdown。
- `src/`：本批独立数据模块与撰稿源，没有全站历史集合。
- `public/assets/blog/`：30 张封面、2 张正文照片。
- `source-images/`：可编辑 SVG；原始 PNG 仍在本地归档。
- `research/`：来源、提示词、素材记录、实际检查结果与本批相关截图。
- `manifest.json`：顺序、关键词、slug、计划地址、教育向标记与素材。
- `SHA256SUMS.txt`：交付文件 SHA-256 校验值。
