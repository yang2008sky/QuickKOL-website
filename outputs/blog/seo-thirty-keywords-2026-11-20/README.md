# QuickKOL 30 篇双语博客交接 — 2026-11-20

用户已确认上传本批 30 篇。包含 60 份中英文 Markdown、30 张封面、30 张正文 SVG 图解、3 张正文照片、2 份真实 CSV 模板、本批文章模块、逐篇编辑源、41 份可编辑 SVG，以及引用依据和内部完整图像生成提示词。等待负责人完成正式网站接入、最终审核、合并与部署。

本次只新增 outputs/blog/seo-thirty-keywords-2026-11-20/。同步基线 fdf82314ec091653ec395972c68b68cb0b0ea5fd，保留负责人清理旧交付包的提交。不包含完整预览副本、历史文章集合、列表排序修改、依赖、锁定文件或部署配置。

## 正式接入

1. 从 src/blog-november-twentieth.js 导入 novemberTwentiethPosts，加入正式站运行时与静态构建的两个文章集合。保留既有文章，不用本地副本 blog.js 覆盖正式文件。网站不会自动读取 outputs/blog，仅拉取交付包再部署不会自动显示新稿。
2. 将 public/assets/blog/ 的 63 项资源添加到正式资源目录：30 张 1672×941 sRGB JPEG 封面、30 张 SVG 图解、3 张 1200×675 JPEG 正文照片。按 figures.afterSection 插入，保留双语 alt/caption 与懒加载。
3. 将 public/downloads/ 的两份 CSV 模板添加到正式 downloads 路径。第 11 篇引用这两个文件；它们是供填写的定位 Brief 字段，不是已经完成的研究数据。
4. 2026-11-20 是写作与资料核验日期，正式发布前确认实际 date、updatedDate 和作者机制。Markdown 中的审阅状态说明仅用于交接，不作为公开正文。
5. 正式接入后复核双语内链、citation、fragment、列表、canonical、hreflang、OG、BlogPosting、sitemap、图片、下载与手机布局。本地验收不能代替正式站接入后的检查。
6. 由负责人最终审核、合并与 Vercel 部署。本次不推 main、不合并、不部署。确认正式上线后，按清单正常提交清理 seo-blog 中对应交付包，保留正式站文章和本地归档。

## 内容及验收

全部围绕达人营销具体任务，本批没有另行指定的免费刷量教育向词。相近平台与增长类选题承担不同合作任务，去重判断见 research/plan.json。英文 answer + sections 正文为 1502–1619 词，中文保留对应结论、步骤、事实、例子与限制。每篇至少 3 个来源、各语言至少 2 条正文情境内链，并有表格与执行清单。

本地 30 篇正文、60 个构建语言页面、125 个 HTTP 地址、132 次手机/桌面页面检查、116 个双语列表分页、中英文标题换行、63 项素材元数据和 41 个 SVG 文字边界检查通过。两种语言页面各点击两份 CSV，4 次下载均有效。全部素材已查看，人工查看代表性页面截图；不宣称人工逐页看完所有长文。独立预览完整构建成功，生成 1,513 个入口与 sitemap。

既有相关测试 7 项中 6 项通过，1 项失败来自旧文章 definition-influencer-multilingual-brief-glossary 的英文含中文术语；未修改旧文，本批 60 个语言页面独立检查通过。构建有既有大包体积警告和实验功能提示，不能宣称全站测试全部通过。

## 资料边界

Andromeda 与排序的编辑建议不是固定素材配额或推荐保证。公益捐赠、创作者费用和实际公益结果分开；BBB、FTC 与 ICO 资料保留各自适用范围。活动新闻篇处理已核对变化如何更新合作 Brief，不虚构今日新闻。品牌调查、公开讨论与因果研究分开；假设数字不是客户结果或行业基准。

TikTok 项目注册、明确接受、发布与广告授权分开。历史网页排期时间范围不写成所有当前账号的统一限制。Facebook 原创贡献与素材许可分别审查，Insights 保留对象、窗口与字段定义。认证不替代商业代表或素材授权。品牌提及不自动等于代言。

Facebook 原生头像尺寸帮助页跳转登录，未能完整读取；1024×1024 是编辑工作母版建议，不是 Meta 官方下限。API 尺寸不冒充原生上传规范，实际目标账号预览仍需确认。YouTube 评论篇依据官方公开步骤，保留受众、可见性和账号限制，不建议错误分类绕过限制。

来源支持关系、读取方式与适用边界见 research/sources.json 和 source-fact-map.csv。部分官方页面通过实质性索引正文读取，没有冒充登录账号实测。公开图片、图注与 alt 不含 AI 提示语，内部保留生成来源和完整提示词；原始大 PNG 留在本地归档，41 份可编辑 SVG 随包提供。照片不冒充具名达人、客户或真实活动。

## 关键词与计划正式 URL

下表是计划路径，不代表本批已经上线。

| 顺序 | 关键词 | 中文 | English |
| ---: | --- | --- | --- |
| 1 | meta andromeda | [中文](https://www.quickkol.com/zh/blog/meta-andromeda-creator-concept-test-design/) | [English](https://www.quickkol.com/blog/meta-andromeda-creator-concept-test-design/) |
| 2 | what's blue sky | [中文](https://www.quickkol.com/zh/blog/bluesky-creator-credibility-cross-platform/) | [English](https://www.quickkol.com/blog/bluesky-creator-credibility-cross-platform/) |
| 3 | ig algorithm | [中文](https://www.quickkol.com/zh/blog/instagram-ranking-creator-format-commission/) | [English](https://www.quickkol.com/blog/instagram-ranking-creator-format-commission/) |
| 4 | blueskt | [中文](https://www.quickkol.com/zh/blog/blueskt-creator-contact-record-correction/) | [English](https://www.quickkol.com/blog/blueskt-creator-contact-record-correction/) |
| 5 | brand research platform | [中文](https://www.quickkol.com/zh/blog/brand-research-platform-creator-question-fit/) | [English](https://www.quickkol.com/blog/brand-research-platform-creator-question-fit/) |
| 6 | cause marketing | [中文](https://www.quickkol.com/zh/blog/cause-marketing-creator-donation-claim/) | [English](https://www.quickkol.com/blog/cause-marketing-creator-donation-claim/) |
| 7 | what is a carousel post | [中文](https://www.quickkol.com/zh/blog/carousel-post-creator-self-contained-pages/) | [English](https://www.quickkol.com/blog/carousel-post-creator-self-contained-pages/) |
| 8 | newsfeeds | [中文](https://www.quickkol.com/zh/blog/newsfeeds-creator-observation-comparison/) | [English](https://www.quickkol.com/blog/newsfeeds-creator-observation-comparison/) |
| 9 | how to get more follower on instagram | [中文](https://www.quickkol.com/zh/blog/instagram-creator-co-promotion-audience-choice/) | [English](https://www.quickkol.com/blog/instagram-creator-co-promotion-audience-choice/) |
| 10 | how to grow your social media presence | [中文](https://www.quickkol.com/zh/blog/creator-presence-cross-channel-proof-map/) | [English](https://www.quickkol.com/blog/creator-presence-cross-channel-proof-map/) |
| 11 | marketing positioning statement | [中文](https://www.quickkol.com/zh/blog/creator-brief-positioning-statement-proof/) | [English](https://www.quickkol.com/blog/creator-brief-positioning-statement-proof/) |
| 12 | media kit or press kit | [中文](https://www.quickkol.com/zh/blog/creator-media-kit-press-kit-recipient-scope/) | [English](https://www.quickkol.com/blog/creator-media-kit-press-kit-recipient-scope/) |
| 13 | how to gain followers on instagram | [中文](https://www.quickkol.com/zh/blog/instagram-collaboration-following-aftercare/) | [English](https://www.quickkol.com/blog/instagram-collaboration-following-aftercare/) |
| 14 | how to get a youtube channel | [中文](https://www.quickkol.com/zh/blog/youtube-channel-creator-commission-request/) | [English](https://www.quickkol.com/blog/youtube-channel-creator-commission-request/) |
| 15 | event marketing news | [中文](https://www.quickkol.com/zh/blog/event-news-creator-brief-change-verification/) | [English](https://www.quickkol.com/blog/event-news-creator-brief-change-verification/) |
| 16 | brand health tracking | [中文](https://www.quickkol.com/zh/blog/brand-health-creator-message-associations/) | [English](https://www.quickkol.com/blog/brand-health-creator-message-associations/) |
| 17 | social media kpis | [中文](https://www.quickkol.com/zh/blog/social-kpi-creator-decision-contract/) | [English](https://www.quickkol.com/blog/social-kpi-creator-decision-contract/) |
| 18 | schedule posts with facebook | [中文](https://www.quickkol.com/zh/blog/facebook-creator-schedule-change-dependencies/) | [English](https://www.quickkol.com/blog/facebook-creator-schedule-change-dependencies/) |
| 19 | social crm | [中文](https://www.quickkol.com/zh/blog/social-crm-creator-relationship-boundaries/) | [English](https://www.quickkol.com/blog/social-crm-creator-relationship-boundaries/) |
| 20 | fejsbuk marketing | [中文](https://www.quickkol.com/zh/blog/facebook-creator-local-language-brief/) | [English](https://www.quickkol.com/blog/facebook-creator-local-language-brief/) |
| 21 | increase tiktok engagement | [中文](https://www.quickkol.com/zh/blog/tiktok-creator-response-to-next-demonstration/) | [English](https://www.quickkol.com/blog/tiktok-creator-response-to-next-demonstration/) |
| 22 | front page reddit | [中文](https://www.quickkol.com/zh/blog/reddit-front-page-creator-topic-correction/) | [English](https://www.quickkol.com/blog/reddit-front-page-creator-topic-correction/) |
| 23 | facebook algorithm | [中文](https://www.quickkol.com/zh/blog/facebook-creator-original-contribution-review/) | [English](https://www.quickkol.com/blog/facebook-creator-original-contribution-review/) |
| 24 | tiktok creator program | [中文](https://www.quickkol.com/zh/blog/tiktok-creator-program-project-acceptance/) | [English](https://www.quickkol.com/blog/tiktok-creator-program-project-acceptance/) |
| 25 | can you schedule posts on tiktok | [中文](https://www.quickkol.com/zh/blog/tiktok-scheduled-creator-content-release-gates/) | [English](https://www.quickkol.com/blog/tiktok-scheduled-creator-content-release-gates/) |
| 26 | facebook insights | [中文](https://www.quickkol.com/zh/blog/facebook-insights-creator-post-scope-ledger/) | [English](https://www.quickkol.com/blog/facebook-insights-creator-post-scope-ledger/) |
| 27 | instagram verification | [中文](https://www.quickkol.com/zh/blog/instagram-verification-partnership-authority/) | [English](https://www.quickkol.com/blog/instagram-verification-partnership-authority/) |
| 28 | measurements for facebook profile picture | [中文](https://www.quickkol.com/zh/blog/facebook-profile-picture-creator-crop-brief/) | [English](https://www.quickkol.com/blog/facebook-profile-picture-creator-crop-brief/) |
| 29 | brand mentions | [中文](https://www.quickkol.com/zh/blog/brand-mentions-creator-reference-interpretation/) | [English](https://www.quickkol.com/blog/brand-mentions-creator-reference-interpretation/) |
| 30 | how to turn on comments on youtube | [中文](https://www.quickkol.com/zh/blog/youtube-comments-creator-release-settings/) | [English](https://www.quickkol.com/blog/youtube-comments-creator-release-settings/) |

文件校验见 SHA256SUMS.txt。research 和提示词是内部交接材料，不作为公开正文。
