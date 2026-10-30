# QuickKOL：新30关键词批次的前20篇交付包

用户于2026-10-30明确指示先写到第20篇，然后直接上传GitHub，不再追加检查。本包只含新清单第1–20项：20篇中英双语文章、40份Markdown、20张最终封面和4份CSV模板。第21篇草稿及第22–30篇策划不在本包内。

## 状态与边界

仅上传文章资料到独立分支，尚未接入正式网站、合并或部署Vercel。没有修改既有文章、网站运行代码、构建逻辑、依赖、锁定文件或Vercel配置。独立本地预览位于5174端口，不会自动同步正式站。

**网站不会自动读取 outputs/blog/。负责人需拉取本分支，审核内容，完成网站接入，再合并和部署。只合并本目录并重新部署不会自动显示文章。**

## 交接与接入

1. blog-editorial-20.js 导出自包含 editorial20Posts。将20条新记录接入运行时文章集合和 scripts/build-blog-pages.js 使用的构建集合，保留旧文章。不要复制整个独立预览副本。
2. articles/ 是中英文审阅稿。正文情境内链和citation依赖实际文字与 sources、internalLinks 规则匹配，table、tool、deepDive应完整保留。
3. public/assets/blog/ 是1672×941、sRGB JPEG；按文件名复制到正式静态目录。source-images/保留9张编辑图形SVG，11张照片原始PNG保存在本地，不额外上传大PNG。照片双语AI credit已在内容记录中。
4. public/downloads/ 是UGC投稿接收表和Campaign证据日志的中英文空白CSV，复制到正式 /downloads/ 对应路径。它们不是实际客户数据。
5. 英文路径 /blog/<slug>/，中文 /zh/blog/<slug>/，不新建 /en/blog/。与已有内容及同批文章的链接需在接入时保留。
6. 稿件与核验日期为2026-10-30，正式发布日期待负责人确认；沿用网站现有Daniel Craig署名机制，不虚构亲自测试经历。本地审阅状态说明应在确定真实发布状态时更新。
7. 新闻文章为截至2026-10-30的静态快照，不是当天事件或自动更新流。菲律宾2025美妆互动率文章明确未建立匹配的公开全国平均值；不要在接入时删掉样本与时期限制。具名软件仅作公开资料研究，假设算例不是实测结果。

## 已有记录与未完成项

用户停止追加检查前，前20篇英文实质正文均在1500–2000词范围，正文来源/内链词匹配通过；独立预览生产构建成功，生成637个入口；40个语言页面HTML审计通过。以上是已经执行的记录，本次上传没有重新进行额外内容检查。

所有封面已查看，桌面列表前两页和代表文章已查看；不宣称20篇逐页完成桌面与手机视觉验收。CSV实际浏览器下载尚未完成，手机标题换行仍可由负责人最终审阅。8张早期照片的完整生成提示词未归档到当前包，research/cover-prompts.json明确标记缺失，不伪造prompt；本地原始图仍保留。

来源范围、日期与支持主张见research/sources-and-claims.json；既有检查和未完成项见research/validation.json。未包含第三方完整PDF或大段报告复制。最终审核、正式接入、合并与部署交给负责人。

## 本次文章顺序

| 序号 | 关键词 | 中文标题 | slug |
| --- | --- | --- | --- |
| 1 | kols | KOLs 怎么选：为专业内容建立证据分工 | kols-expertise-evidence-panel |
| 2 | ugc content | UGC Content：从客户投稿到可用素材的接收流程 | ugc-content-customer-contribution-intake |
| 3 | influencer marketing agency | 达人营销代理机构：把服务承诺写成验收条件 | influencer-marketing-agency-service-acceptance |
| 4 | ugc content creator | UGC Content Creator：区分出镜、制作与发布职责 | ugc-content-creator-on-camera-production-role |
| 5 | what is an influencer | 什么是 Influencer？给非营销同事的合作角色说明 | what-is-an-influencer-stakeholder-explainer |
| 6 | influencer definition | Influencer Definition：让研究名单分类一致 | influencer-definition-research-classification |
| 7 | what is a brand ambassador | 什么是品牌大使？写清代表权限与升级路径 | what-is-a-brand-ambassador-representation-boundaries |
| 8 | ugc creators | UGC Creators：按制作覆盖与连续性组建创作者名单 | ugc-creators-roster-coverage-continuity |
| 9 | affiliate and marketing | Affiliate and Marketing：把联盟合作放进客户旅程 | affiliate-and-marketing-customer-journey |
| 10 | college ambassador programs | 校园大使项目：先确认校园权限与参与边界 | college-ambassador-programs-campus-permissions |
| 11 | what is ugc creator | 什么是 UGC Creator？分清付费制作与自发分享 | what-is-ugc-creator-paid-organic-distinction |
| 12 | key opinion leader | Key Opinion Leader：如何核对专家贡献的适用范围 | key-opinion-leader-expert-contribution-review |
| 13 | step by step way to track campaigns | Campaign 追踪步骤：从命名到复核的证据日志 | step-by-step-campaign-tracking-evidence-log |
| 14 | best influencer marketing platforms | Best Influencer Marketing Platforms：核对证明与退出成本 | best-influencer-marketing-platforms-proof-exit |
| 15 | leading affiliate marketing networks consumer products | 消费品联盟网络：按市场、伙伴与结算比较 | affiliate-networks-consumer-products-market-fit |
| 16 | how to create a social media influencer strategy | 如何制定社交达人策略：围绕受众问题设计内容路径 | create-social-media-influencer-strategy-content-path |
| 17 | definition influencer | Definition Influencer：跨语言 Brief 的术语对齐 | definition-influencer-multilingual-brief-glossary |
| 18 | influencer marketing news today | 达人营销新闻：带日期的变化记录与决策 | influencer-marketing-news-dated-change-log |
| 19 | average engagement rate beauty industry philippines 2025 | 菲律宾美妆互动率 2025：先核对样本与分母 | beauty-engagement-rate-philippines-2025-evidence |
| 20 | how to measure influencer success | 如何衡量达人成功：审阅贡献、成本与学习结果 | measure-influencer-success-contribution-review |
