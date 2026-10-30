# QuickKOL：剩余 9 篇中英文文章交付包

用户于 2026-10-30 明确要求将剩余 9 篇上传 GitHub。此包只包含关键词清单第 17–25 项：9 篇文章、18 份 Markdown、9 张封面和 2 份 CSV 模板。

## 发布状态

仅上传内容资料，尚未完成正式网站接入、合并或 Vercel 部署。未修改既有文章、网站运行代码、构建逻辑、依赖或 Vercel 配置。**网站不会自动读取 outputs/blog/，只合并此目录并部署不能自动展示新文章。**

负责人需拉取本分支，审核文章，完成网站内容接入，再合并与部署。前 16 篇仍在独立分支 codex/seo-sixteen-keywords-2026-10-29，提交 965a2b5495d7a776574426f57f3256c6dc04c59a；本分支不重复携带那批交付文件。两批可分别审核和合并。

## 文件与接入

1. blog-editorial-9.js 导出自包含 editorial9Posts。负责人将九条新记录接入运行时文章集合及 scripts/build-blog-pages.js 使用的构建文章集合；保留已有文章。
2. articles/ 为中英文 Markdown；正文情境内链、引用、表格、清单与数据模块对应。sources、internalLinks、table、tool、deepDive 等字段应一起保留，正文词匹配用于生成链接。
3. public/assets/blog/ 为 9 张 1672×941、sRGB JPEG 最终封面；public/downloads/ 为 Media Kit 证据索引的中英文 CSV，按同名路径复制到网站静态目录。CSV 是空白工作模板，三条起始类别不是真实达人数据。
4. source-images/ 提供 3 张编辑图形封面的可编辑 SVG；照片封面的生成提示和 credit 已保存，原始大 PNG 仅在本地归档。
5. 英文正式路径 /blog/<slug>/，中文 /zh/blog/<slug>/。不要新增 /en/blog/。下载路径 /downloads/media-kit-evidence-index.en.csv 和 .zh.csv。
6. 研究于 2026-10-29 至 10-30 完成。date、updatedDate 是稿件阶段日期，正式发布日期待负责人确认；沿用网站现有 Daniel Craig 作者机制。文中本地审阅状态说明请在确定真实发布状态时更新。
7. 正式接入后运行项目构建，审核 canonical、hreflang、OG、结构化数据、sitemap、作者与页面视觉，再由负责人完成最终合并部署。本包不包含独立预览副本的接入代码。

## 已完成的验证

九篇英文实质正文均为 1,500–2,000 词，中文保留等效内容；正文来源和情境内链词匹配通过。独立本地副本生产构建成功，共 595 个站点、工具和博客入口；全批 25 篇的 50 个语言页面通过生成 HTML 审计，已有相关测试 6 项通过。本包提取其中九篇的 18 个页面记录。

全部封面已查看，并查看部分桌面列表、文章及手机代表页面；不宣称对所有文章完成逐页人工视觉验收。中英文 CSV 已通过浏览器实际下载并读取表头。本批内链通过本地生成文件及锚点检查，未另做九篇的正式站点实时内链审计。现有构建大包体提示不阻止构建。

正文具名对象仅作研究入口，不是实时排名、背书或档期承诺；假设数字不是行业基准。部分 Meta 帮助页无法完整读取，未采用未经核验的固定界面路径或门槛。具体证据和来源见 research/。

## 本次文章

| 序号 | 关键词 | 中文标题 | slug |
| --- | --- | --- | --- |
| 17 | top beauty influencers | 美妆达人研究名单：区分使用体验、技巧和产品主张 | top-beauty-influencers-claims-review |
| 18 | top travel influencers | 旅行达人研究名单：先确认行程能否拍摄与履约 | top-travel-influencers-itinerary-feasibility |
| 19 | fashion influencers | 服装达人合作：围绕重复穿搭、版型与护理设计内容 | fashion-influencers-repeat-wear-brief |
| 20 | top eco-friendly influencers | 环保达人研究名单：让修补与重复使用成为合作主题 | top-eco-friendly-influencers-repair-reuse |
| 21 | how to negotiate with influencers | 如何与达人谈合作：用不同范围方案替代单纯压价 | how-to-negotiate-with-influencers-offer-options |
| 22 | how to see your followers countries | 怎么看粉丝来自哪些国家？先确认指标、权限与缺失值 | how-to-see-followers-countries-evidence |
| 23 | what is a media kit | 什么是 Media Kit？品牌如何核对达人资料与合作范围 | what-is-a-media-kit-brand-review |
| 24 | car youtubers | Car YouTubers 合作：长期样车借用与评测交接要点 | car-youtubers-long-term-loan-brief |
| 25 | entrepreneurship micro influencers instagram au | 澳洲 Instagram 创业微型达人：核验地区、规模和合作准备度 | entrepreneurship-micro-influencers-instagram-au-verification |
