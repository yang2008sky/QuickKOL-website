# 五篇双语博客审阅表

已按用户2026年11月23日提供的新 QuickKOL Blog Skill 完成，全部围绕达人营销，供用户在独立本地预览审阅。用户已明确授权提交至GitHub的seo-blog分支，正式接入和部署待负责人完成。

| 顺序 | 关键词 | 中文预览 | 英文预览 | 英文正文词数 |
|---|---|---|---|---:|
| 1 | how to get verified on facebook | [查看](http://127.0.0.1:5174/zh/blog/facebook-verification-creator-account-routes/) | [查看](http://127.0.0.1:5174/blog/facebook-verification-creator-account-routes/) | 1535 |
| 2 | how to schedule facebook posts | [查看](http://127.0.0.1:5174/zh/blog/facebook-page-post-scheduling-steps/) | [查看](http://127.0.0.1:5174/blog/facebook-page-post-scheduling-steps/) | 1505 |
| 3 | whats appbusiness | [查看](http://127.0.0.1:5174/zh/blog/whatsapp-business-app-creator-enquiry-setup/) | [查看](http://127.0.0.1:5174/blog/whatsapp-business-app-creator-enquiry-setup/) | 1512 |
| 4 | facebook story | [查看](http://127.0.0.1:5174/zh/blog/facebook-story-creator-collaboration-guide/) | [查看](http://127.0.0.1:5174/blog/facebook-story-creator-collaboration-guide/) | 1522 |
| 5 | captiv8 | [查看](http://127.0.0.1:5174/zh/blog/captiv8-influential-platform-brand-guide/) | [查看](http://127.0.0.1:5174/blog/captiv8-influential-platform-brand-guide/) | 1524 |

## 内容与资源

- 5篇完整中英文稿，英文正文按 answer 与 sections 统计，不含标题、表格、来源和CTA。中文2053–2509汉字，保留对应事实、步骤、案例与适用限制，采用精练表达，不机械扩写凑字数。
- 每篇核心任务不同：Facebook账号认证路线、单条Page帖子排期、WhatsApp Business开通与咨询入口、三段式Facebook Story演示、Captiv8现状与采购演示。
- 与689篇既有内容核对覆盖范围；规范化比较30词以上英文整段，精确重复为0。这不等于语义原创性认证。
- 5张1672×941 sRGB JPEG封面、5张原创双语图解、1张动作场景正文照片。
- WhatsApp咨询回复准备表有中英文CSV各1份。示例话术需由真实业务方确认；不是任何实际商家的已批准回复。
- 图注和alt不加AI制作提示；内部保留源图、生成prompt与来源记录。

## 已做检查

- 独立预览构建成功，生成1523个静态入口及sitemap；沿用原依赖和构建配置。
- 本批10个语言HTML页面及2个列表：H1、description、canonical、hreflang、OG、BlogPosting、实际正文引用与内链、语言路径与fragment、资源与下载文件检查通过。
- 各文每语言实际正文引用来源分别为3、4、5、5、5个，情境内链至少2个；来源与段落对应保存在 research/evidence-map.json。
- Chrome在1440×1000和390×844下完成20次文章页面检查及4次列表检查，无页面脚本错误或整页横向溢出。图片加载、目录、表格横向滚动与CTA正常，8次实际CSV下载成功。
- 已查看封面、卡片、标题换行、正文配图及手机内容；修正Story图解珊瑚色区域的文字对比度后，另做4次页面复查。
- 相关已有测试5项：4通过，1未通过。未通过的是旧文 /blog/definition-influencer-multilingual-brief-glossary/ 英文正文含中文对照术语，触发无汉字断言，与本批新稿无关，未修改旧文。不能声称全站语言检查全部通过。
- 正式 QuickKOL-website 工作区保持干净；本次没有Git提交或推送。

## 资料与操作边界

核验日期为2026年11月23日。搜索研究为全球英文近似，不声称指定国家排名、GSC数据、客户结果或独立产品实测。

部分Facebook帮助页不可访问，Blueprint详细课程需要登录。排期教程使用Meta公开应用资料、官方截图、课程目录和较早的政府网站Landcare图示操作教程；没有登录用户账号，不承诺当前每个按钮位置或固定排期窗口。Facebook Story常见24小时说明与当前Meta One延长有效期功能分别说明，以目标账号实际功能为准。

Captiv8的当前整合状态及能力据供应方和Publicis一方资料归属介绍，不包装为独立测试、价格保证或已确认套餐。QuickKOL用于已核实支持平台上的达人发现与研究，不承诺Facebook认证、Facebook发帖或WhatsApp账号操作功能。

## 本地接入与后续交接

独立副本为 QuickKOL-local-preview。实际项目不存在参考文档提到的 src/blog-registry.js，因此按现有代码接入客户端和静态构建入口。仅在独立副本中为无表格或工具的文章修复目录条件显示，正式仓库代码未变。

负责人后续接入应读取当时实际内容入口，并支持可选table/tool。只合并Markdown文件不会自动显示文章。不得把整个本地预览副本推送到正式仓库。

待用户确认并明确通知上传后，再仅把获准文章交付文件上传固定 seo-blog 分支；上传前同步远端并保留负责人已上线文章的清理。最终审核、正式内容接入、合并和部署由负责人处理。Nov23为本地起草日期，正式发布日期需在接入时确认。
