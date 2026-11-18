# QuickKOL 30 篇双语博客交接 — 2026-11-18

用户已确认上传本批 30 篇。包含 60 份双语 Markdown、30 张独立封面、30 张正文图、本批文章数据模块、逐篇编辑源、34 份可编辑 SVG、引用依据与内部图像生成记录。当前等待负责人完成正式网站接入、最终审核、合并与部署。

本次只新增 `outputs/blog/seo-thirty-keywords-2026-11-18/`。同步基线 `175466fb036cbb41e0fc2bcaca08ce74ecf23357`；保留负责人清理已上线历史交付包的提交，不恢复已删除旧稿。不包含完整本地预览、历史文章集合、列表排序修改、依赖或部署配置。

## 正式接入

1. 从 `src/blog-november-eighteenth.js` 导入 `novemberEighteenthPosts`，加入正式站运行时与静态构建使用的文章集合；保留既有文章，不用本地副本的 blog.js 覆盖正式文件。网站不会自动读取 outputs/blog，仅拉取交付包并部署不会自动显示新稿。
2. 将本包 public/assets/blog/ 的 60 项资源添加到正式资源目录。30 张封面为 1672×941、JPEG、sRGB；正文为 10 张 1200×675 JPEG 和 20 张 SVG。figures 已含插入位置、双语 alt、caption 与懒加载所需数据。
3. 2026-11-18 为稿件与资料核验日期，正式发布前确认实际 date、updatedDate 和现有作者机制。Markdown 的审阅状态说明仅供交接，不作为公开正文。
4. 接入后复核双语内链、citation、fragment、列表、canonical、hreflang、OG、BlogPosting、sitemap、图片和手机布局。仅拉取交付包不等于网站已接入。
5. 由负责人审核、合并与 Vercel 部署。本次不推 main、不合并、不部署。确认正式上线后按清单清理内容分支中的对应交付包，保留本地归档与正式站文章。

## 内容与证据边界

本批全部围绕达人营销任务，按用户要求没有特定教育向选题。英文 answer + sections 正文为 1500–1586 词，中文保留相应事实、步骤、条件与例子。每篇至少三个正文来源、每种语言至少两条正文情境内链，并有具体比较表和执行清单。

- May 2026 TikTok 与 Facebook 2025 标签选题保留历史时期、地区与研究口径，不冒充今天实时趋势或永久最优规则。
- Amazon 两个关注查询分别处理账户对象核对和找回公开创作者路径；没有核验通用于所有账户的购物关注清单菜单，不编造入口。Later 内部审批不等于已排期内容必然被阻止发布。
- TikTok 变现按项目与市场区分，未完整读取通用 Creator Rewards 门槛页，不给出一套全球当前完整门槛。IG 提及、共创与广告许可分别处理；Trial Reels 面向非粉丝优先不等于私密。
- linktr 按 Linktree 入口生命周期解释，创建、隐藏、归档、删除分别处理。TikTok 商业音频按地区、位置和用途核对，不承诺跨平台通用音乐许可。
- YouTube 订阅追踪保留公开缩写、API 精度、授权数据与观察期，频道变化不自动等于合作因果效果。假设场景不是客户结果或行业基准。
- 来源页面读取方式与范围见 research/sources.json、source-fact-map.csv。部分官方资料通过实质性索引正文读取，未登录账户测试，不把文档说明当作账户实测。
- 公开图片、alt 与图注不含 AI 提示语；内部完整提示词与生成来源保留在 research。人物照片为虚构编辑场景，不冒充具名达人或真实客户。原始大 PNG 保留本地，不上传本包。

## 已完成的本地检查

30 篇正文检查、60 个构建语言页面的链接与元数据、120 个页面和图片地址、72 次浏览器页面检查、100 张截图、中英文标题换行、60 项素材元数据、34 份原生图形文字边界均通过。所有素材逐张查看，并人工查看代表性桌面/手机截图。完整独立预览构建产生 1383 个入口。

上述检查属于独立预览，不能替代正式接入后的构建与审核。相关既有测试 10 项中 9 项通过，唯一失败来自旧稿 definition-influencer-multilingual-brief-glossary 英文包含中文术语的全站断言；未修改旧文，本批 60 个语言页面单独通过。构建有既有大包体积与实验功能提示，构建成功；不宣称全站测试全部通过。

## 关键词与计划正式 URL

下表是计划路径，不表示本批已经上线。

| 顺序 | 关键词 | 中文 | English |
| ---: | --- | --- | --- |
| 1 | maternity photography | [中文](https://www.quickkol.com/zh/blog/maternity-photography-creator-image-selection/) | [English](https://www.quickkol.com/blog/maternity-photography-creator-image-selection/) |
| 2 | key mailer | [中文](https://www.quickkol.com/zh/blog/key-mailer-creator-request-publication-scope/) | [English](https://www.quickkol.com/blog/key-mailer-creator-request-publication-scope/) |
| 3 | bread baker | [中文](https://www.quickkol.com/zh/blog/bread-baker-creator-process-filming/) | [English](https://www.quickkol.com/blog/bread-baker-creator-process-filming/) |
| 4 | how to see who you follow on amazon | [中文](https://www.quickkol.com/zh/blog/amazon-following-profile-scope-check/) | [English](https://www.quickkol.com/blog/amazon-following-profile-scope-check/) |
| 5 | how to find who you follow on amazon | [中文](https://www.quickkol.com/zh/blog/amazon-creator-follow-recovery-research/) | [English](https://www.quickkol.com/blog/amazon-creator-follow-recovery-research/) |
| 6 | later social media | [中文](https://www.quickkol.com/zh/blog/later-social-creator-review-publishing-state/) | [English](https://www.quickkol.com/blog/later-social-creator-review-publishing-state/) |
| 7 | current tiktok trends may 2026 | [中文](https://www.quickkol.com/zh/blog/tiktok-may-2026-creator-trend-retrospective/) | [English](https://www.quickkol.com/blog/tiktok-may-2026-creator-trend-retrospective/) |
| 8 | threads. | [中文](https://www.quickkol.com/zh/blog/threads-creator-conversation-role-brief/) | [English](https://www.quickkol.com/blog/threads-creator-conversation-role-brief/) |
| 9 | facebook hashtags strategy 2025 how many to use | [中文](https://www.quickkol.com/zh/blog/facebook-hashtags-2025-creator-caption-context/) | [English](https://www.quickkol.com/blog/facebook-hashtags-2025-creator-caption-context/) |
| 10 | social media automation | [中文](https://www.quickkol.com/zh/blog/social-media-automation-creator-exception-ownership/) | [English](https://www.quickkol.com/blog/social-media-automation-creator-exception-ownership/) |
| 11 | how to make a reel | [中文](https://www.quickkol.com/zh/blog/make-a-reel-creator-explanation-shot-list/) | [English](https://www.quickkol.com/blog/make-a-reel-creator-explanation-shot-list/) |
| 12 | how to create a cohesive instagram aesthetic | [中文](https://www.quickkol.com/zh/blog/instagram-aesthetic-multi-creator-art-direction/) | [English](https://www.quickkol.com/blog/instagram-aesthetic-multi-creator-art-direction/) |
| 13 | canva instagram post templates | [中文](https://www.quickkol.com/zh/blog/canva-post-templates-creator-asset-slots/) | [English](https://www.quickkol.com/blog/canva-post-templates-creator-asset-slots/) |
| 14 | how could i get more followers on instagram | [中文](https://www.quickkol.com/zh/blog/instagram-creator-collaboration-welcome-context/) | [English](https://www.quickkol.com/blog/instagram-creator-collaboration-welcome-context/) |
| 15 | theeads | [中文](https://www.quickkol.com/zh/blog/threads-creator-event-followup-conversation/) | [English](https://www.quickkol.com/blog/threads-creator-event-followup-conversation/) |
| 16 | social media posting schedule | [中文](https://www.quickkol.com/zh/blog/creator-posting-schedule-production-capacity/) | [English](https://www.quickkol.com/blog/creator-posting-schedule-production-capacity/) |
| 17 | can you boost collab posts on instagram | [中文](https://www.quickkol.com/zh/blog/instagram-collab-boost-permission-decision/) | [English](https://www.quickkol.com/blog/instagram-collab-boost-permission-decision/) |
| 18 | social media planner | [中文](https://www.quickkol.com/zh/blog/social-media-planner-creator-learning-backlog/) | [English](https://www.quickkol.com/blog/social-media-planner-creator-learning-backlog/) |
| 19 | how do we get followers on instagram | [中文](https://www.quickkol.com/zh/blog/instagram-creator-series-following-choice/) | [English](https://www.quickkol.com/blog/instagram-creator-series-following-choice/) |
| 20 | shadowbanned meaning | [中文](https://www.quickkol.com/zh/blog/shadowbanned-meaning-creator-status-update/) | [English](https://www.quickkol.com/blog/shadowbanned-meaning-creator-status-update/) |
| 21 | my account is shadowbanned tiktok | [中文](https://www.quickkol.com/zh/blog/tiktok-distribution-issue-creator-campaign-continuity/) | [English](https://www.quickkol.com/blog/tiktok-distribution-issue-creator-campaign-continuity/) |
| 22 | get instagram followers | [中文](https://www.quickkol.com/zh/blog/instagram-following-invitation-creator-touchpoint/) | [English](https://www.quickkol.com/blog/instagram-following-invitation-creator-touchpoint/) |
| 23 | tiktok monetization requirements | [中文](https://www.quickkol.com/zh/blog/tiktok-monetization-program-requirement-map/) | [English](https://www.quickkol.com/blog/tiktok-monetization-program-requirement-map/) |
| 24 | meta interactive stickers for travel marketing instagram stories facebook | [中文](https://www.quickkol.com/zh/blog/travel-creator-story-sticker-question-design/) | [English](https://www.quickkol.com/blog/travel-creator-story-sticker-question-design/) |
| 25 | trial reels instagram | [中文](https://www.quickkol.com/zh/blog/instagram-trial-reels-result-interpretation/) | [English](https://www.quickkol.com/blog/instagram-trial-reels-result-interpretation/) |
| 26 | ig handle instagram | [中文](https://www.quickkol.com/zh/blog/instagram-handle-creator-identity-handoff/) | [English](https://www.quickkol.com/blog/instagram-handle-creator-identity-handoff/) |
| 27 | add link to instagram story | [中文](https://www.quickkol.com/zh/blog/instagram-story-link-creator-destination-promise/) | [English](https://www.quickkol.com/blog/instagram-story-link-creator-destination-promise/) |
| 28 | linktr | [中文](https://www.quickkol.com/zh/blog/linktree-creator-route-lifecycle/) | [English](https://www.quickkol.com/blog/linktree-creator-route-lifecycle/) |
| 29 | tiktok sounds | [中文](https://www.quickkol.com/zh/blog/tiktok-sounds-creator-commercial-audio-brief/) | [English](https://www.quickkol.com/blog/tiktok-sounds-creator-commercial-audio-brief/) |
| 30 | youtube subscriber tracker | [中文](https://www.quickkol.com/zh/blog/youtube-subscriber-tracker-campaign-reconciliation/) | [English](https://www.quickkol.com/blog/youtube-subscriber-tracker-campaign-reconciliation/) |

文件校验见 SHA256SUMS.txt。研究与提示词记录是内部交接材料，不作为网页正文。
