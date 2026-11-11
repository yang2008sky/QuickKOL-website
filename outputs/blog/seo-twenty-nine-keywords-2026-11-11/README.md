# QuickKOL 29 篇双语博客交接

用户已确认上传本批。包含 58 份中英文 Markdown、29 张封面、2 张正文图、独立文章数据模块、可编辑 SVG 与来源/提示词/检查记录。当前状态：等待负责人完成正式网站接入、最终审核、合并和部署。

本批只新增到 `outputs/blog/seo-twenty-nine-keywords-2026-11-11/`。没有上传独立预览副本的列表排序或接入修改，没有修改正式网站或既有文章。上一批已上线文章的远端清理提交保留。

## 接入说明

1. 从 `src/blog-november-eleventh.js` 导入 `novemberEleventhPosts`，将其中 29 篇接入正式站运行时与静态构建使用的文章集合。不要用它覆盖完整历史文章模块。
2. 将本包 `public/assets/blog/` 下 31 张 JPEG 添加至正式站相同资源目录。两张正文图的插入位置、双语 alt 和图注均在文章的 `figures` 字段中。
3. 确认最终作者与发布日期。2026-11-11 为草稿及研究日期；发布前按实际日期与审核结果调整日期及内部审阅状态说明。
4. 完成接入后运行正式仓库的 `npm run build` 并验收双语详情、列表、封面、正文配图和链接。仅合并本交付文件夹不会自动展示新文章。
5. 用户指定负责人处理最终审核、合并与 Vercel 部署。本次没有推送 main、合并或执行生产部署。

交接基线：`68afc1da0a24652fb79e54feb504eb6978e75e4b`。固定内容分支：`seo-blog`。以下为拟接入的正式地址，不表示已发布。

## 内容与素材

全部内容围绕品牌的达人发现、合作、制作、权限、发布和衡量。7 个免费涨粉或点赞关键词采用教育向，不推荐刷量服务、不承诺百分百识别、不仅凭单一信号指控个人。
照片使用内置 imagegen 生成；文字、流程与数据概念图以可编辑 SVG 制作。公开画面、alt 和图注不加 AI 制作提示语；内部生成来源及提示词保留于 `research/cover-jobs.json`。最终 JPEG 与 SVG 随包上传，大体积生成原 PNG 保留于本地写作归档。

## 实际检查

- 29 篇英文实质正文为 1,500–1,561 词，每篇至少 3 个正文来源、2 个情境内链；中英文保留对应结论、步骤、算例与边界。
- 独立本地副本已生成 58 个详情页，正文 citation、内部链接及锚点、元数据、BlogPosting、表格、清单和配图标记通过核对。
- 89 个本地详情及资源请求通过；80 个双语列表分页的顺序、唯一性与资源检查通过；37 个正式站内页面与45个正文链接锚点正常。
- 已看全部29张封面联系表；浏览器抽查中文列表前3页、390px中文Reel正文图与表格，以及英文教育稿。没有声称逐页视觉验收全部历史页面。
- 本地执行 Vite 打包和静态生成，产生1,057个入口；没有声称本批完成正式仓库接入后的构建。
- 全站既有测试60项通过、1项旧失败：英文 `definition-influencer-multilingual-brief-glossary` 包含中文。本批58页单独语言检查通过。
- 独立预览模板有既存1px宽度差值；正文图在350px内显示，表格在348px容器内横向滚动。本批未改全站模板。

| 顺序 | 关键词 | 中文 | English |
| ---: | --- | --- | --- |
| 1 | whatsapp for business | [WhatsApp Business 如何承接达人合作中的咨询](https://www.quickkol.com/zh/blog/whatsapp-business-creator-conversation-handoff/) | [WhatsApp for Business in a Creator Campaign](https://www.quickkol.com/blog/whatsapp-business-creator-conversation-handoff/) |
| 2 | google busines profile | [Google Business Profile 如何承接本地达人推广](https://www.quickkol.com/zh/blog/google-business-profile-creator-location-proof/) | [Google Business Profile for Local Creator Campaigns](https://www.quickkol.com/blog/google-business-profile-creator-location-proof/) |
| 3 | free instagram followers website | [免费 Instagram 粉丝网站的账号授权风险](https://www.quickkol.com/zh/blog/free-instagram-followers-website-preflight/) | [Free Instagram Followers Websites: An Access Review](https://www.quickkol.com/blog/free-instagram-followers-website-preflight/) |
| 4 | free followers instagram | [免费 Instagram 粉丝与达人活动激励怎么区分](https://www.quickkol.com/zh/blog/free-followers-instagram-incentive-design/) | [Free Instagram Followers and Creator Incentives](https://www.quickkol.com/blog/free-followers-instagram-incentive-design/) |
| 5 | insta follower.com | [Insta follower.com 搜索结果该核验什么](https://www.quickkol.com/zh/blog/insta-follower-search-offer-identity-review/) | [Insta Follower.com: Verify the Offer Before Access](https://www.quickkol.com/blog/insta-follower-search-offer-identity-review/) |
| 6 | gamers guy | [如何找到适合产品演示的游戏创作者](https://www.quickkol.com/zh/blog/gaming-creator-demo-role-selection/) | [How to Choose a Gaming Creator for a Product Demo](https://www.quickkol.com/blog/gaming-creator-demo-role-selection/) |
| 7 | keymailer | [Keymailer 游戏赠码怎样与付费合作分开](https://www.quickkol.com/zh/blog/keymailer-game-key-coverage-pilot/) | [Keymailer: Game Keys, Coverage and Paid Creator Briefs](https://www.quickkol.com/blog/keymailer-game-key-coverage-pilot/) |
| 8 | amazon creator connections | [Amazon Creator Connections 的活动费用怎么算](https://www.quickkol.com/zh/blog/amazon-creator-connections-campaign-economics/) | [Amazon Creator Connections: Scope a Brand Campaign](https://www.quickkol.com/blog/amazon-creator-connections-campaign-economics/) |
| 9 | schedule instagram posts | [Instagram 达人合作如何锁定待发布版本](https://www.quickkol.com/zh/blog/instagram-scheduling-approved-asset-freeze/) | [Schedule Instagram Posts With an Approved Asset Version](https://www.quickkol.com/blog/instagram-scheduling-approved-asset-freeze/) |
| 10 | what is mavrck | [Mavrck 是什么？评估 Later 时该接走哪些记录](https://www.quickkol.com/zh/blog/what-is-mavrck-platform-migration-evidence/) | [What Is Mavrck? Evaluate the Later Campaign Handoff](https://www.quickkol.com/blog/what-is-mavrck-platform-migration-evidence/) |
| 11 | canva ig story templates | [Canva Story 模板怎样服务达人试用讲解](https://www.quickkol.com/zh/blog/canva-story-templates-creator-sequence/) | [Canva IG Story Templates for a Creator Demo](https://www.quickkol.com/blog/canva-story-templates-creator-sequence/) |
| 12 | shadowbanned | [合作帖触达下降就叫 Shadowbanned 吗](https://www.quickkol.com/zh/blog/shadowbanned-sponsored-post-diagnostic/) | [Shadowbanned? Investigate a Sponsored Post’s Reach](https://www.quickkol.com/blog/shadowbanned-sponsored-post-diagnostic/) |
| 13 | schedule and post to instagram | [Instagram 排期后怎样确认合作帖真正上线](https://www.quickkol.com/zh/blog/instagram-scheduled-post-release-verification/) | [Schedule and Post to Instagram: Verify the Release](https://www.quickkol.com/blog/instagram-scheduled-post-release-verification/) |
| 14 | instagram reel | [Instagram Reel 如何讲清一次产品试用](https://www.quickkol.com/zh/blog/instagram-reel-sponsored-product-proof/) | [Instagram Reel: Brief a Product Demonstration](https://www.quickkol.com/blog/instagram-reel-sponsored-product-proof/) |
| 15 | canva instagram templates | [Canva Instagram 模板如何交接给合作达人](https://www.quickkol.com/zh/blog/canva-instagram-templates-creator-kit-rights/) | [Canva Instagram Templates: Build a Creator Asset Kit](https://www.quickkol.com/blog/canva-instagram-templates-creator-kit-rights/) |
| 16 | instagram shop | [Instagram Shop 合作前怎样核对商品标签](https://www.quickkol.com/zh/blog/instagram-shop-creator-product-tag-preflight/) | [Instagram Shop: Check a Creator’s Product Destination](https://www.quickkol.com/blog/instagram-shop-creator-product-tag-preflight/) |
| 17 | social blade youtube | [Social Blade 的 YouTube 数字怎样用于合作谈判](https://www.quickkol.com/zh/blog/social-blade-youtube-sponsorship-estimate-check/) | [Social Blade YouTube Stats in a Sponsorship Discussion](https://www.quickkol.com/blog/social-blade-youtube-sponsorship-estimate-check/) |
| 18 | top youtube channels | [Top YouTube Channels 怎样变成可用合作长名单](https://www.quickkol.com/zh/blog/top-youtube-channels-sponsorship-longlist/) | [Top YouTube Channels: Build a Sponsorship Longlist](https://www.quickkol.com/blog/top-youtube-channels-sponsorship-longlist/) |
| 19 | youtube subscribers | [YouTube 订阅数怎样用于赞助播放规划](https://www.quickkol.com/zh/blog/youtube-subscribers-sponsor-reach-forecast/) | [YouTube Subscribers and a Sponsor’s Viewing Plan](https://www.quickkol.com/blog/youtube-subscribers-sponsor-reach-forecast/) |
| 20 | free followers from instagram | [声称粉丝来自 Instagram，品牌该怎样复核](https://www.quickkol.com/zh/blog/free-followers-instagram-provenance-record/) | [Free Followers From Instagram: Check the Source Claim](https://www.quickkol.com/blog/free-followers-instagram-provenance-record/) |
| 21 | free ig followers website | [免费 IG 粉丝网站被接入后怎样安全交接](https://www.quickkol.com/zh/blog/free-ig-followers-website-vendor-exit/) | [Free IG Followers Websites: Exit an Unapproved Service](https://www.quickkol.com/blog/free-ig-followers-website-vendor-exit/) |
| 22 | free likes instagram | [免费 Instagram 点赞如何影响合作数据比较](https://www.quickkol.com/zh/blog/free-instagram-likes-measurement-contamination/) | [Free Instagram Likes and Contaminated Campaign Metrics](https://www.quickkol.com/blog/free-instagram-likes-measurement-contamination/) |
| 23 | get free instagram likes | [把免费点赞要求改成可执行的达人 Brief](https://www.quickkol.com/zh/blog/get-free-instagram-likes-brief-redesign/) | [Get Free Instagram Likes? Rewrite the Creator Brief](https://www.quickkol.com/blog/get-free-instagram-likes-brief-redesign/) |
| 24 | popular youtube channels | [热门 YouTube 频道怎样建立同类比较](https://www.quickkol.com/zh/blog/popular-youtube-channels-category-comparison/) | [Popular YouTube Channels: Compare Within a Category](https://www.quickkol.com/blog/popular-youtube-channels-category-comparison/) |
| 25 | twitch. statistics | [Twitch 统计怎样对应一段赞助直播](https://www.quickkol.com/zh/blog/twitch-statistics-sponsored-segment-window/) | [Twitch Statistics for a Sponsored Stream Segment](https://www.quickkol.com/blog/twitch-statistics-sponsored-segment-window/) |
| 26 | celebrities in bolivia | [玻利维亚名人与创作者怎样选入本地合作](https://www.quickkol.com/zh/blog/bolivia-celebrities-local-creator-campaign-fit/) | [Celebrities in Bolivia: Research Local Campaign Fit](https://www.quickkol.com/blog/bolivia-celebrities-local-creator-campaign-fit/) |
| 27 | how to reply to a dm on instagram | [如何回复 Instagram 上的达人合作私信](https://www.quickkol.com/zh/blog/instagram-dm-creator-inquiry-triage/) | [How to Reply to an Instagram DM About a Partnership](https://www.quickkol.com/blog/instagram-dm-creator-inquiry-triage/) |
| 28 | social media metrics | [社媒指标怎样对应达人营销的三个决策](https://www.quickkol.com/zh/blog/social-media-metrics-creator-decision-tree/) | [Social Media Metrics for Creator Campaign Decisions](https://www.quickkol.com/blog/social-media-metrics-creator-decision-tree/) |
| 29 | how to schedule social media posts | [多平台达人活动如何按依赖关系排期](https://www.quickkol.com/zh/blog/social-media-schedule-creator-launch-dependencies/) | [How to Schedule Social Media Posts for a Creator Launch](https://www.quickkol.com/blog/social-media-schedule-creator-launch-dependencies/) |

## 交付文件

- `articles/`：58份中英文 Markdown。
- `src/`：本批自包含数据模块和可编辑撰稿源，不含整站历史文章。
- `public/assets/blog/`：29张封面和2张正文图。
- `source-images/`：可编辑SVG；生成原PNG本地归档。
- `research/`：选题、来源、提示词、素材和实际检查记录与截图。
- `manifest.json`：关键词、slug、双语正式路径、资源与交接状态。
- `SHA256SUMS.txt`：本包文件校验值。
