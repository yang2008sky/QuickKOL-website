# QuickKOL 30 篇双语博客交接

本批包含 60 份中英文 Markdown、30 张 JPEG 封面、7 张正文照片，以及双语内容模块和验收记录。正文照片均为 AI 生成的编辑示意图，带双语图注和替代文字。提示词和可编辑 SVG 随包交接，原始 PNG 保存在本地写作归档。

## 接入

1. 在正式站的运行时和静态构建文章集合中接入 `src/blog-november-sixth.js` 导出的 `novemberSixthPosts`。模块只含本批 30 篇。
2. 将本批 `public/assets/blog/` 中的 JPEG 加入正式静态目录。正文照片通过每篇文章的 `figures` 字段定位。
3. 确认正式发布日期，完成审核、合并和部署。2026-11-06 是草稿及研究日期。运行 `npm run build`，检查 `dist` 中的双语页面。
4. 正式发布后，按固定分支归档流程从 `seo-blog` 清理已上线的交接文件。

交接基线为 `362732fbe3da632f45cfd939697f46a26d5a275f`，包含上一批 26 篇发布后的归档。以下链接是拟接入的正式地址，当前状态为待接入与发布。

## 验收

- 英文正文 1,500–1,535 词，60 个双语构建页面、97 个本地 HTTP 路径和 48 个现有正式站内链与锚点通过检查。
- 浏览器核对了中英文博客前三页。7 张正文照片均在 390 px 宽的中文页面加载，另抽查了英文详情、目录跳转、表格和 CTA。现有模板在该宽度下有 1 px 页面溢出，正文图和表格均在各自容器内显示。

| 顺序 | 关键词 | 英文 | 中文 |
| ---: | --- | --- | --- |
| 1 | social cat | [English](https://www.quickkol.com/blog/social-cat-gifting-brand-pilot/) | [中文](https://www.quickkol.com/zh/blog/social-cat-gifting-brand-pilot/) |
| 2 | link in bio | [English](https://www.quickkol.com/blog/link-in-bio-destination-attribution/) | [中文](https://www.quickkol.com/zh/blog/link-in-bio-destination-attribution/) |
| 3 | tiktok creator fund | [English](https://www.quickkol.com/blog/tiktok-creator-fund-legacy-records/) | [中文](https://www.quickkol.com/zh/blog/tiktok-creator-fund-legacy-records/) |
| 4 | linkedin ads | [English](https://www.quickkol.com/blog/linkedin-ads-b2b-lead-preflight/) | [中文](https://www.quickkol.com/zh/blog/linkedin-ads-b2b-lead-preflight/) |
| 5 | twitch tv statistics | [English](https://www.quickkol.com/blog/twitch-tv-statistics-channel-category-sample/) | [中文](https://www.quickkol.com/zh/blog/twitch-tv-statistics-channel-category-sample/) |
| 6 | dancers | [English](https://www.quickkol.com/blog/dancers-ensemble-shoot-handoff/) | [中文](https://www.quickkol.com/zh/blog/dancers-ensemble-shoot-handoff/) |
| 7 | creatoriq | [English](https://www.quickkol.com/blog/creatoriq-enterprise-evidence-pilot/) | [中文](https://www.quickkol.com/zh/blog/creatoriq-enterprise-evidence-pilot/) |
| 8 | bluesk | [English](https://www.quickkol.com/blog/bluesk-search-citation-correction/) | [中文](https://www.quickkol.com/zh/blog/bluesk-search-citation-correction/) |
| 9 | bluesky social media | [English](https://www.quickkol.com/blog/bluesky-social-media-moderation-brief/) | [中文](https://www.quickkol.com/zh/blog/bluesky-social-media-moderation-brief/) |
| 10 | dimensions for cover photo facebook | [English](https://www.quickkol.com/blog/facebook-page-cover-photo-dimensions-crop/) | [中文](https://www.quickkol.com/zh/blog/facebook-page-cover-photo-dimensions-crop/) |
| 11 | collabstr | [English](https://www.quickkol.com/blog/collabstr-marketplace-order-checklist/) | [中文](https://www.quickkol.com/zh/blog/collabstr-marketplace-order-checklist/) |
| 12 | what is threads on instagram | [English](https://www.quickkol.com/blog/threads-instagram-profile-publishing-roles/) | [中文](https://www.quickkol.com/zh/blog/threads-instagram-profile-publishing-roles/) |
| 13 | modash | [English](https://www.quickkol.com/blog/modash-audience-discovery-shortlist-pilot/) | [中文](https://www.quickkol.com/zh/blog/modash-audience-discovery-shortlist-pilot/) |
| 14 | free instagram views | [English](https://www.quickkol.com/blog/free-instagram-views-organic-reporting/) | [中文](https://www.quickkol.com/zh/blog/free-instagram-views-organic-reporting/) |
| 15 | free instagram like | [English](https://www.quickkol.com/blog/free-instagram-like-post-quality-audit/) | [中文](https://www.quickkol.com/zh/blog/free-instagram-like-post-quality-audit/) |
| 16 | best youtube channels | [English](https://www.quickkol.com/blog/best-youtube-channels-brand-research-scorecard/) | [中文](https://www.quickkol.com/zh/blog/best-youtube-channels-brand-research-scorecard/) |
| 17 | youtube channels | [English](https://www.quickkol.com/blog/youtube-channels-identity-scope-handoff/) | [中文](https://www.quickkol.com/zh/blog/youtube-channels-identity-scope-handoff/) |
| 18 | instagram model | [English](https://www.quickkol.com/blog/instagram-model-fit-casting-brief/) | [中文](https://www.quickkol.com/zh/blog/instagram-model-fit-casting-brief/) |
| 19 | shopify collabs | [English](https://www.quickkol.com/blog/shopify-collabs-merchant-payout-reconciliation/) | [中文](https://www.quickkol.com/zh/blog/shopify-collabs-merchant-payout-reconciliation/) |
| 20 | social listening | [English](https://www.quickkol.com/blog/social-listening-query-sample-validation/) | [中文](https://www.quickkol.com/zh/blog/social-listening-query-sample-validation/) |
| 21 | how to get more followers on instagram | [English](https://www.quickkol.com/blog/instagram-followers-profile-content-pilot/) | [中文](https://www.quickkol.com/zh/blog/instagram-followers-profile-content-pilot/) |
| 22 | what is tiktok | [English](https://www.quickkol.com/blog/what-is-tiktok-content-surfaces-brand/) | [中文](https://www.quickkol.com/zh/blog/what-is-tiktok-content-surfaces-brand/) |
| 23 | socialcat | [English](https://www.quickkol.com/blog/socialcat-creator-offer-handoff/) | [中文](https://www.quickkol.com/zh/blog/socialcat-creator-offer-handoff/) |
| 24 | horse rider | [English](https://www.quickkol.com/blog/horse-rider-equestrian-content-brief/) | [中文](https://www.quickkol.com/zh/blog/horse-rider-equestrian-content-brief/) |
| 25 | upfluence | [English](https://www.quickkol.com/blog/upfluence-shopify-attribution-pilot/) | [中文](https://www.quickkol.com/zh/blog/upfluence-shopify-attribution-pilot/) |
| 26 | twitter algorithm | [English](https://www.quickkol.com/blog/twitter-algorithm-x-feed-evidence/) | [中文](https://www.quickkol.com/zh/blog/twitter-algorithm-x-feed-evidence/) |
| 27 | childhood youtuber | [English](https://www.quickkol.com/blog/childhood-youtuber-archive-reuse-review/) | [中文](https://www.quickkol.com/zh/blog/childhood-youtuber-archive-reuse-review/) |
| 28 | subscribers | [English](https://www.quickkol.com/blog/youtube-subscribers-count-and-active-viewers/) | [中文](https://www.quickkol.com/zh/blog/youtube-subscribers-count-and-active-viewers/) |
| 29 | hypeauditor | [English](https://www.quickkol.com/blog/hypeauditor-score-evidence-review/) | [中文](https://www.quickkol.com/zh/blog/hypeauditor-score-evidence-review/) |
| 30 | tiktokers | [English](https://www.quickkol.com/blog/tiktokers-brand-shortlist-production-fit/) | [中文](https://www.quickkol.com/zh/blog/tiktokers-brand-shortlist-production-fit/) |
