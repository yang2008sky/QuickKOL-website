# Instagram follower-range workbook / 粉丝区间工作表

Reviewed / 核验：2026-10-23. Blank schema, no fabricated account data. 空白字段，不含虚构账号。

1. Discover relevant public work and verify the author through owner-controlled channels. 先找相关公开作品，再确认作者关联。
2. Record one observation per row. observed_followers is numeric only; blank means unknown, never zero by default. 每行一次观察；未读到留空，不默认填零。
3. precision: exact / approximate / unknown. A displayed 20K is approximate, not a confirmed exact 20,000. 缩写值不能冒充精确数值。
4. observed_at: ISO date or timestamp; preserve the source URL. 日期与来源必须保留。
5. status: ready / needs_observation / needs_identity_review / stale / boundary_review. 状态反映真实证据，不合并成一个失败标记。
6. Set a project-specific inclusive lower and upper bound. Lower must not exceed upper; both must be nonnegative whole numbers. 使用项目自定包含边界区间，下限不高于上限。
7. First filter ready + exact, then apply observed_followers >= lower AND observed_followers <= upper. Exact matches pass both boundaries. 先筛可用精确记录，再按数值区间筛选。
8. Keep approximate, missing and stale rows for separate review; near-boundary abbreviations cannot support a precise inclusion decision. 缩写、缺失、过期独立复核，边界不猜测。
9. Preserve original imports and save revised range rules as a version. Do not delete rejected rows merely to narrow the view. 保留导入原件和规则版本，不为缩小视图删除原始记录。
10. Count filtering is not complete discovery, identity verification, audience-location proof or authenticity analysis. 规模筛选不等于完整发现、身份、受众地域或真实性验证。
11. Review relevant work, actual availability and business contact route after filtering. 筛选后仍核对作品、可用性和商业联系。
12. No scraping, private identity investigation or third-party credentials are needed for this local worksheet. 本地表不需要私人身份调查、抓取脚本或第三方密码。

Hypothetical boundary exercise: [10,000,30,000] includes exact 10,000 and 30,000. Blank is unresolved. A displayed 10K or 30K needs boundary review. These are examples, not account observations or a universal creator tier.

假设练习：区间 [10000,30000] 包含精确两端；空白未解决，显示 10K 或 30K 需精度复核。它不是实际账号数据或统一达人层级。
