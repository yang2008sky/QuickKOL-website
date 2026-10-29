# QuickKOL 三篇 SEO 文章交付 · 2026-10-29

本目录仅提交本次已完成的文章资料，供仓库负责人审阅和后续接入。**本次没有修改既有文章、网站运行代码、构建脚本、依赖或 Vercel 配置，也不执行合并及部署。**

## 文章

| 关键词 | 英文正文词数 | 中文正文汉字 | 文稿 |
| --- | ---: | ---: | --- |
| influencer marketing | 1677 | 3098 | [中文](articles/influencer-marketing-brand-playbook.zh.md) · [English](articles/influencer-marketing-brand-playbook.en.md) |
| instagram follower tracker | 1698 | 3074 | [中文](articles/instagram-followers-check-change-log.zh.md) · [English](articles/instagram-followers-check-change-log.en.md) |
| influencer | 1657 | 3104 | [中文](articles/influencers-types-for-brand-teams.zh.md) · [English](articles/influencers-types-for-brand-teams.en.md) |

每篇包含完整中英正文、SEO 元数据、决策表、清单、正文引用和情境内链。每种语言正文均含 3 个实质性官方/权威页面引用。最终封面均为 1672 × 941、sRGB JPEG；另外保留两张 AI 原始图、可编辑 SVG 和生成提示词。

## 发布状态与重叠处理

这三项关键词已有相近的已发布文章。本批稿件作为**升级候选稿**保留对应的旧 slug 与首次发布日期，供负责人决定如何使用；没有自动覆盖或新建同意图页面。

| 关键词 | 对应现站 slug | 保留的首发日 | 建议更新日 |
| --- | --- | --- | --- |
| influencer marketing | influencer-marketing-brand-playbook | 2026-10-21 | 2026-10-29（发布前确认） |
| instagram follower tracker | instagram-followers-check-change-log | 2026-10-22 | 2026-10-29（发布前确认） |
| influencer | influencers-types-for-brand-teams | 2026-10-21 | 2026-10-29（发布前确认） |

英文正式路由为 /blog/<slug>/，中文为 /zh/blog/<slug>/。不新建 /en/blog/。

## 文件用途

- articles/：六份可审阅 Markdown，包含可点击内外链。
- src/blog-three-keywords.js：文章内容数据，文本顺序为 [中文, English]。此文件位于本交付目录，**未被现站导入，不会执行替换**。
- public/assets/blog/：三张最终封面与粉丝追踪封面 SVG。
- public/downloads/：真实的双语粉丝观察 CSV 模板。
- source-images/：两张生成原图，仅供后续编辑存档。
- research/：来源对应表、提示词、正文渲染引用检查、内链 HTTP/锚点检查及本次打包审计。
- manifest.json：文件清单与 SHA-256 校验值。

## 给仓库负责人的接入说明

当前网站不是自动读取 Markdown 的 CMS。**只把本目录推到 GitHub 或在 Vercel 重新部署，不会让本批正文自动出现在网站。**

若负责人批准采用升级稿，需要由负责人另行评审内容数据的接入方式，并确认是否允许更新对应的已发布页面。现有资料中使用的标题、日期、内链、来源与封面字段均已备齐。本次按提交者的明确要求，不改旧文章及其他运行代码，因此没有提供已应用的页面替换，也没有改 src/blog.js 或 scripts/build-blog-pages.js。

接入后再由负责人完成生产构建、双语 canonical/hreflang/OG/BlogPosting/sitemap 检查以及桌面、手机和实际下载验收，最后手动决定 Vercel 同步。既有站点署名机制 Daniel Craig 与 Git 提交者身份是两回事，本次没有修改站点作者机制。

## 本批检查与边界

- 英文长度按 answer 与 sections 正文计数，不用标题、表格、来源或 CTA 凑数。
- 中文保留相同结论、步骤、假设算例与限制。
- 28 个不同内链 URL/锚点组合此前已通过 HTTP、H1、canonical 与锚点检查。
- 使用原仓库正文渲染代码检查了正文内链及引用实际出现；该隔离检查不等于完整网站构建。
- 当前只增加文章交付文件；未运行网站全量构建或声称生产验收通过。
- 后续提交同样限于本次授权的 blog 相关目录。扩大范围前，应取得负责人的明确新指示。

资料核验日：2026-10-29。统计与规则的来源、日期和局限见 [来源对应表](research/source-evidence.md)。
