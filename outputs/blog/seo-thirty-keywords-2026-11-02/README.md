# QuickKOL · 30篇双语文章交付包

本批包含30个关键词对应的30篇独立文章，共60份中英文Markdown、30张封面、8份CSV附件及网站内容模块。按用户原关键词顺序排列。

## 状态与范围

- 已在独立本地预览接入；目标上传分支为固定的 `seo-blog`。
- 仅文章交付资料，不包含正式网站接入修改，不改旧文章、依赖、构建或Vercel配置。
- 正式网站接入、最终审核、合并与部署由负责人完成。`outputs/blog/`不是自动读取的CMS。
- 稿件日期与资料核验日为2026-11-02，正式发布时间请负责人在发布时确认；这不是已经上线的声明。
- `fake followers`为教育向文章，区分异常信号、解释与已证实事实；不输出个人判定、检测准确率承诺或直接达人筛选CTA。

## 文件用途

- `src/blog-november-30.js`：可独立导入的完整双语内容模块，导出 `november30Posts`。
- `src/post-*.mjs`与`authoring.mjs`：本批可编辑创作源，依赖本包的plan/sources；不要将Node创作helper直接导入浏览器。
- `articles/`：60份可审阅中英文Markdown。
- `public/assets/blog/`：30张1672×941、sRGB、JPEG封面。
- `public/downloads/`：8份真实CSV。
- `source-images/`：原始生成图与可编辑SVG；对应生成prompt保存在research中。
- `research/article-manifest.json`：按顺序的本地与拟定正式URL，正式地址不代表已经上线。
- `research/plan.json`、`sources.json`：角度、字数、引用支持主张及核验日。
- `research/validation-summary.json`与截图：检查结果及范围。

## 负责人接入步骤

1. 从本分支拉取本批交付目录，确认30个slug没有与正式站重复；不要恢复已清理的旧交付包。
2. 将内容模块放到正式项目合适的src目录，同时将封面和下载文件复制到正式public对应目录。
3. 在 `src/blog.js` 与 `scripts/build-blog-pages.js` 两个内容集合导入并接入 `november30Posts`；只拷Markdown或只合并此目录不会显示文章。
4. 保留既有文章和全站代码，确认作者、正式日期与列表顺序。独立副本的置顶顺序仅供本地审阅。
5. 按项目实际脚本运行生产构建与检查，完成最终审核后再由负责人合并及部署。
6. 正式发布确认后，按用户约定从 `seo-blog` 删除对应交付包，保留published记录；不要删除正式站文章。

## 验证结果

- 30篇英文实质正文范围：1500–1526词；每篇双语正文内链、来源匹配通过。
- 60个生成页面的H1、元数据、canonical、hreflang、作者、结构化数据、sitemap、封面、正文内链及citation通过。
- 独立副本生产构建完成，生成703个网站/工具/文章入口。
- 61项全站测试60项通过。1项失败来自此前已发布批次的英文术语文章中有中文示例，触发全站“英文不含汉字”断言。本批未修改旧稿或测试来消除该断言。
- 8个CSV访问通过；UGC英文CSV通过浏览器实际下载，与交付文件逐字节一致。
- 桌面1280×900与手机390×844检查范围、修订及限制见visual-audit.json。不是对全部60页逐段人工视觉审读的声明。

## 关键词与拟定正式URL

| 序号 | 关键词 | English | 中文 |
| --- | --- | --- | --- |
| 1 | how to spot fake influencers | [EN](https://www.quickkol.com/blog/spot-fake-influencers-verification-false-positives/) | [ZH](https://www.quickkol.com/zh/blog/spot-fake-influencers-verification-false-positives/) |
| 2 | kol meaning | [EN](https://www.quickkol.com/blog/kol-meaning-brief-terminology/) | [ZH](https://www.quickkol.com/zh/blog/kol-meaning-brief-terminology/) |
| 3 | beauty influencer marketing trends facebook instagram 2025 | [EN](https://www.quickkol.com/blog/beauty-influencer-trends-facebook-instagram-2025-review/) | [ZH](https://www.quickkol.com/zh/blog/beauty-influencer-trends-facebook-instagram-2025-review/) |
| 4 | influencer platforms | [EN](https://www.quickkol.com/blog/influencer-platforms-record-interoperability/) | [ZH](https://www.quickkol.com/zh/blog/influencer-platforms-record-interoperability/) |
| 5 | what is whitelisting | [EN](https://www.quickkol.com/blog/what-is-whitelisting-creator-ad-permissions/) | [ZH](https://www.quickkol.com/zh/blog/what-is-whitelisting-creator-ad-permissions/) |
| 6 | lululemon affiliate program | [EN](https://www.quickkol.com/blog/lululemon-affiliate-program-official-routes/) | [ZH](https://www.quickkol.com/zh/blog/lululemon-affiliate-program-official-routes/) |
| 7 | allbirds affiliate program | [EN](https://www.quickkol.com/blog/allbirds-affiliate-program-social-publication-routes/) | [ZH](https://www.quickkol.com/zh/blog/allbirds-affiliate-program-social-publication-routes/) |
| 8 | how much do influencers make | [EN](https://www.quickkol.com/blog/how-much-influencers-make-gross-net-workload/) | [ZH](https://www.quickkol.com/zh/blog/how-much-influencers-make-gross-net-workload/) |
| 9 | influencer marketing strategy | [EN](https://www.quickkol.com/blog/influencer-marketing-strategy-hypothesis-portfolio/) | [ZH](https://www.quickkol.com/zh/blog/influencer-marketing-strategy-hypothesis-portfolio/) |
| 10 | ambassador program | [EN](https://www.quickkol.com/blog/ambassador-program-feedback-renewal-loop/) | [ZH](https://www.quickkol.com/zh/blog/ambassador-program-feedback-renewal-loop/) |
| 11 | whitelisting meaning | [EN](https://www.quickkol.com/blog/whitelisting-meaning-context-permission-request/) | [ZH](https://www.quickkol.com/zh/blog/whitelisting-meaning-context-permission-request/) |
| 12 | ugc creator meaning | [EN](https://www.quickkol.com/blog/ugc-creator-meaning-service-purchase/) | [ZH](https://www.quickkol.com/zh/blog/ugc-creator-meaning-service-purchase/) |
| 13 | how to calculate engagement rate | [EN](https://www.quickkol.com/blog/calculate-engagement-rate-denominator-workbook/) | [ZH](https://www.quickkol.com/zh/blog/calculate-engagement-rate-denominator-workbook/) |
| 14 | woman ugc | [EN](https://www.quickkol.com/blog/woman-ugc-representation-production-brief/) | [ZH](https://www.quickkol.com/zh/blog/woman-ugc-representation-production-brief/) |
| 15 | influencer marketing earned media value metrics roi calculation fields | [EN](https://www.quickkol.com/blog/influencer-emv-roi-calculation-field-dictionary/) | [ZH](https://www.quickkol.com/zh/blog/influencer-emv-roi-calculation-field-dictionary/) |
| 16 | fake followers | [EN](https://www.quickkol.com/blog/fake-followers-anomaly-evidence-literacy/) | [ZH](https://www.quickkol.com/zh/blog/fake-followers-anomaly-evidence-literacy/) |
| 17 | brand ambassador brand ambassador | [EN](https://www.quickkol.com/blog/brand-ambassador-mutual-fit-conversation/) | [ZH](https://www.quickkol.com/zh/blog/brand-ambassador-mutual-fit-conversation/) |
| 18 | affiliate marketing websites | [EN](https://www.quickkol.com/blog/affiliate-marketing-websites-publisher-models/) | [ZH](https://www.quickkol.com/zh/blog/affiliate-marketing-websites-publisher-models/) |
| 19 | beauty brand instagram engagement rate 2025 | [EN](https://www.quickkol.com/blog/beauty-brand-instagram-engagement-2025-report-scope/) | [ZH](https://www.quickkol.com/zh/blog/beauty-brand-instagram-engagement-2025-report-scope/) |
| 20 | influencer agency | [EN](https://www.quickkol.com/blog/influencer-agency-client-representation-model/) | [ZH](https://www.quickkol.com/zh/blog/influencer-agency-client-representation-model/) |
| 21 | brand ambassador meaning | [EN](https://www.quickkol.com/blog/brand-ambassador-meaning-team-training/) | [ZH](https://www.quickkol.com/zh/blog/brand-ambassador-meaning-team-training/) |
| 22 | influencer marketing services | [EN](https://www.quickkol.com/blog/influencer-marketing-services-modular-brief/) | [ZH](https://www.quickkol.com/zh/blog/influencer-marketing-services-modular-brief/) |
| 23 | beauty content trends 2026 engagement rates | [EN](https://www.quickkol.com/blog/beauty-content-trends-2026-engagement-evidence/) | [ZH](https://www.quickkol.com/zh/blog/beauty-content-trends-2026-engagement-evidence/) |
| 24 | affiliate marketing companies | [EN](https://www.quickkol.com/blog/affiliate-marketing-companies-commercial-roles/) | [ZH](https://www.quickkol.com/zh/blog/affiliate-marketing-companies-commercial-roles/) |
| 25 | current trends in affiliate tracking software saas | [EN](https://www.quickkol.com/blog/affiliate-tracking-saas-trends-change-evidence/) | [ZH](https://www.quickkol.com/zh/blog/affiliate-tracking-saas-trends-change-evidence/) |
| 26 | pure encapsulations partnership program | [EN](https://www.quickkol.com/blog/pure-encapsulations-partnership-official-paths/) | [ZH](https://www.quickkol.com/zh/blog/pure-encapsulations-partnership-official-paths/) |
| 27 | what does influencer mean | [EN](https://www.quickkol.com/blog/what-does-influencer-mean-trust-context/) | [ZH](https://www.quickkol.com/zh/blog/what-does-influencer-mean-trust-context/) |
| 28 | influencer synonym | [EN](https://www.quickkol.com/blog/influencer-synonyms-accurate-partnership-writing/) | [ZH](https://www.quickkol.com/zh/blog/influencer-synonyms-accurate-partnership-writing/) |
| 29 | influencer discount codes | [EN](https://www.quickkol.com/blog/influencer-discount-codes-offer-attribution/) | [ZH](https://www.quickkol.com/zh/blog/influencer-discount-codes-offer-attribution/) |
| 30 | kol's | [EN](https://www.quickkol.com/blog/kols-audience-individual-roster-data/) | [ZH](https://www.quickkol.com/zh/blog/kols-audience-individual-roster-data/) |
