# QuickKOL 30 篇双语博客交接

用户已确认上传本批。包含 60 份中英文 Markdown、30 张封面、3 张正文照片、本批独立文章数据模块、可编辑 SVG 与来源、提示词、检查记录。当前等待负责人完成正式网站接入、最终审核、合并和部署。

本次只新增 `outputs/blog/seo-thirty-keywords-2026-11-12/`。没有上传完整预览副本、列表排序或网站接入修改，也没有修改既有文章、依赖和部署配置。已同步并保留远端清理昨天已上线文章的提交。

## 接入说明

1. 从 `src/blog-november-twelfth.js` 导入 `novemberTwelfthPosts`，将本批 30 篇接入正式站运行时与静态构建使用的文章集合。不要覆盖完整历史文章模块。
2. 将 `public/assets/blog/` 的 33 张 JPEG 添加到正式资源目录。3 张正文照片的 `figures[].file`、`afterSection`、双语 `alt` 和 `caption` 已定义；负责人须确认正式模板支持对应插入和懒加载显示。
3. 2026-11-12 为草稿及研究日期。发布前确认实际发布日期与作者，更新 `date`、`updatedDate`，移除或改写 Markdown 与 `deepDive` 中的本地审阅状态说明，同时保留研究日期及证据限制。
4. 接入后执行正式仓库构建并验收双语文章、列表、图片、引用及链接。仅合并这个交付目录不会自动显示新文章。
5. 最终审核、合并与 Vercel 部署由指定负责人处理。本次没有推送 main、合并或生产部署。

固定分支：`seo-blog`。同步基线：`988ba2571e6a3d40d8a2c0ede6f5421262467311`。下表是计划正式地址，不代表已经上线。

## 内容和素材记录

全部选题围绕达人营销的品牌任务，不把无关内容通过堆叠 KOL 标题硬接入网站。第 6、8、23 篇免费涨粉与假粉关键词按教育向处理，讨论账号权限、数据失真、证据和复核，不推荐刷量服务、不保证完整识别、不凭单一信号指控个人。相关 CTA 指向指标学习文章。

封面为 1672 × 941、sRGB JPEG，五种家族轮换；正文照片为 1200 × 675 JPEG。照片使用内置 imagegen，文字图形以 SVG 制作；公开画面、图注和 alt 不加 AI 制作提示语，内部提示词与生成来源保留在 research。大体积原 PNG 留存本地写作归档，可编辑 SVG 随包提供。

每篇提供双语决策表和 reference-list 静态清单；本批没有计算器或下载按钮。研究计划、与旧内容的角度差异、原始证据及访问限制见 `research/plan.json`、`research/sources.json`。

## 实际完成的检查

- 30 篇英文实质正文 1,500–1,644 词；中文保留对应步骤、事实、例子与边界。每篇至少 3 个正文来源和 2 个情境内链。
- 本批 60 个生成页面的正文引用、内链锚点、语言、元数据、结构化资料、图片、表格与清单检查通过。
- 93 个本地页面与资源请求成功。浏览器检查双语列表前三页、全部 60 个文章语言路由的手机横向溢出，以及选定桌面、手机、正文照片和表格；另实际检查 12 个样本语言路由的目录和引用、教育向 CTA 语言路径。截图及范围见 `research/browser/` 和 `research/visual-review.json`。
- 独立本地预览完整构建通过，生成 1,123 个静态入口；详见 `research/build-summary.json`。这不是正式站接入后的构建记录。
- 全站现有测试 61 项中 60 项通过、1 项旧失败：英文 `definition-influencer-multilingual-brief-glossary` 含中文术语。本批独立语言检查通过；没有修改旧文章去消除此项。

| 顺序 | 关键词 | 中文 | English |
| ---: | --- | --- | --- |
| 1 | social media engagement | [中文](https://www.quickkol.com/zh/blog/creator-engagement-response-routing/) | [English](https://www.quickkol.com/blog/creator-engagement-response-routing/) |
| 2 | create a youtube channel | [中文](https://www.quickkol.com/zh/blog/create-youtube-channel-collaboration-launch-check/) | [English](https://www.quickkol.com/blog/create-youtube-channel-collaboration-launch-check/) |
| 3 | social media manager salary | [中文](https://www.quickkol.com/zh/blog/social-media-manager-salary-creator-operations/) | [English](https://www.quickkol.com/blog/social-media-manager-salary-creator-operations/) |
| 4 | creator rewards program | [中文](https://www.quickkol.com/zh/blog/creator-rewards-sponsored-video-eligibility/) | [English](https://www.quickkol.com/blog/creator-rewards-sponsored-video-eligibility/) |
| 5 | social networking marketing strategy | [中文](https://www.quickkol.com/zh/blog/creator-networking-strategy-peer-conversations/) | [English](https://www.quickkol.com/blog/creator-networking-strategy-peer-conversations/) |
| 6 | free followers on instagram for free | [中文](https://www.quickkol.com/zh/blog/free-instagram-followers-hidden-campaign-costs/) | [English](https://www.quickkol.com/blog/free-instagram-followers-hidden-campaign-costs/) |
| 7 | insta followers | [中文](https://www.quickkol.com/zh/blog/insta-followers-retention-content-promise/) | [English](https://www.quickkol.com/blog/insta-followers-retention-content-promise/) |
| 8 | free insta followers | [中文](https://www.quickkol.com/zh/blog/free-insta-followers-pitch-evidence-response/) | [English](https://www.quickkol.com/blog/free-insta-followers-pitch-evidence-response/) |
| 9 | instagram follower | [中文](https://www.quickkol.com/zh/blog/instagram-follower-cohort-project-boundaries/) | [English](https://www.quickkol.com/blog/instagram-follower-cohort-project-boundaries/) |
| 10 | facebook ads libary | [中文](https://www.quickkol.com/zh/blog/facebook-ad-library-creator-creative-research/) | [English](https://www.quickkol.com/blog/facebook-ad-library-creator-creative-research/) |
| 11 | creatoriq business model pricing | [中文](https://www.quickkol.com/zh/blog/creatoriq-pricing-commercial-scope-questions/) | [English](https://www.quickkol.com/blog/creatoriq-pricing-commercial-scope-questions/) |
| 12 | paid media agency | [中文](https://www.quickkol.com/zh/blog/paid-media-agency-creator-asset-responsibility/) | [English](https://www.quickkol.com/blog/paid-media-agency-creator-asset-responsibility/) |
| 13 | grow followers with reels best practices 2025 | [中文](https://www.quickkol.com/zh/blog/reels-follower-growth-2025-practices-review/) | [English](https://www.quickkol.com/blog/reels-follower-growth-2025-practices-review/) |
| 14 | instagram seo | [中文](https://www.quickkol.com/zh/blog/instagram-search-creator-topic-brief/) | [English](https://www.quickkol.com/blog/instagram-search-creator-topic-brief/) |
| 15 | tiktok trends today | [中文](https://www.quickkol.com/zh/blog/tiktok-trends-today-creator-relevance-check/) | [English](https://www.quickkol.com/blog/tiktok-trends-today-creator-relevance-check/) |
| 16 | trial reels | [中文](https://www.quickkol.com/zh/blog/trial-reels-creator-concept-test-design/) | [English](https://www.quickkol.com/blog/trial-reels-creator-concept-test-design/) |
| 17 | how to schedule a post on instagram | [中文](https://www.quickkol.com/zh/blog/schedule-instagram-post-review-cutoff/) | [English](https://www.quickkol.com/blog/schedule-instagram-post-review-cutoff/) |
| 18 | how to add link to tiktok bio | [中文](https://www.quickkol.com/zh/blog/tiktok-bio-link-creator-destination-readiness/) | [English](https://www.quickkol.com/blog/tiktok-bio-link-creator-destination-readiness/) |
| 19 | instagram followers high | [中文](https://www.quickkol.com/zh/blog/high-instagram-followers-low-campaign-fit/) | [English](https://www.quickkol.com/blog/high-instagram-followers-low-campaign-fit/) |
| 20 | how accurate is social balde | [中文](https://www.quickkol.com/zh/blog/social-blade-accuracy-measurement-reconciliation/) | [English](https://www.quickkol.com/blog/social-blade-accuracy-measurement-reconciliation/) |
| 21 | famous tiktokers | [中文](https://www.quickkol.com/zh/blog/famous-tiktokers-brief-specific-shortlist/) | [English](https://www.quickkol.com/blog/famous-tiktokers-brief-specific-shortlist/) |
| 22 | how to become an influencer men | [中文](https://www.quickkol.com/zh/blog/male-creator-brand-partnership-portfolio/) | [English](https://www.quickkol.com/blog/male-creator-brand-partnership-portfolio/) |
| 23 | fake takipçi | [中文](https://www.quickkol.com/zh/blog/fake-takipci-cross-language-evidence-literacy/) | [English](https://www.quickkol.com/blog/fake-takipci-cross-language-evidence-literacy/) |
| 24 | female fitness model | [中文](https://www.quickkol.com/zh/blog/female-fitness-model-production-rights-brief/) | [English](https://www.quickkol.com/blog/female-fitness-model-production-rights-brief/) |
| 25 | popularist youtuber | [中文](https://www.quickkol.com/zh/blog/popular-youtuber-identity-program-verification/) | [English](https://www.quickkol.com/blog/popular-youtuber-identity-program-verification/) |
| 26 | biggest youtube channels | [中文](https://www.quickkol.com/zh/blog/biggest-youtube-channels-purchase-unit/) | [English](https://www.quickkol.com/blog/biggest-youtube-channels-purchase-unit/) |
| 27 | youtube algorithm | [中文](https://www.quickkol.com/zh/blog/youtube-algorithm-sponsored-audience-satisfaction/) | [English](https://www.quickkol.com/blog/youtube-algorithm-sponsored-audience-satisfaction/) |
| 28 | bsky app | [中文](https://www.quickkol.com/zh/blog/bsky-app-collaborator-research-session/) | [English](https://www.quickkol.com/blog/bsky-app-collaborator-research-session/) |
| 29 | bluesku | [中文](https://www.quickkol.com/zh/blog/bluesku-brand-source-disambiguation/) | [English](https://www.quickkol.com/blog/bluesku-brand-source-disambiguation/) |
| 30 | newsfeed | [中文](https://www.quickkol.com/zh/blog/creator-newsfeed-editorial-evidence-selection/) | [English](https://www.quickkol.com/blog/creator-newsfeed-editorial-evidence-selection/) |

## 文件范围

- `articles/`：60 份中英文 Markdown。
- `src/`：本批数据模块及可编辑撰稿源，不包含整站历史集合。
- `public/assets/blog/`：30 张封面和 3 张正文照片。
- `source-images/`：可编辑 SVG；原始生成 PNG 在本地归档。
- `research/`：选题、证据、内部提示词、素材记录及实际检查结果和截图。
- `manifest.json`：关键词、slug、计划正式地址、素材和交接状态。
- `SHA256SUMS.txt`：本包文件校验值。
