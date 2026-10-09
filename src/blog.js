import './blog.css';
import { canonicalUrl, siteOrigin } from './seo.js';
import { blogPosts as baseBlogPosts, blogTopics } from './blog-posts.js';
import { additionalBlogPosts } from './blog-additional-posts.js';
import { seriesBlogPosts } from './blog-series-posts.js';
import { expansionBlogPosts } from './blog-expansion-posts.js';
import { growthBlogPosts } from './blog-growth-posts.js';
import { blogEnhancements } from './blog-enhancements.js';
import { additionalBlogEnhancements } from './blog-additional-enhancements.js';
import { seriesBlogEnhancements } from './blog-series-enhancements.js';
import { expansionBlogEnhancements } from './blog-expansion-enhancements.js';
import { growthBlogEnhancements } from './blog-growth-enhancements.js';
import { initI18n, setPageLocale, localizeCopy, applyTranslations, loadLocale, localizeText } from './i18n.js';

const PAGE_SIZE = 12;
const enhancements = { ...blogEnhancements, ...additionalBlogEnhancements, ...seriesBlogEnhancements, ...expansionBlogEnhancements, ...growthBlogEnhancements };
const blogPosts = [...growthBlogPosts, ...expansionBlogPosts, ...seriesBlogPosts, ...additionalBlogPosts, ...baseBlogPosts].map((post) => ({ ...post, ...enhancements[post.slug] }));
const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const arrow = '<i class="ph ph-arrow-up-right" aria-hidden="true"></i>';

export function mountBlog(initialLocale) {
  document.documentElement.dataset.theme = window.localStorage.getItem('quickkol-blog-theme') || 'dark';
  let locale = initialLocale;
  const main = document.querySelector('#main');
  const params = new URLSearchParams(window.location.search);
  let query = params.get('q') || '';
  let topic = blogTopics.some(({ key }) => key === params.get('topic')) ? params.get('topic') : '';
  let tag = params.get('tag') || '';
  let page = Math.max(1, Number.parseInt(params.get('page'), 10) || 1);
  const slug = window.location.pathname.replace(/^\/blog\/?/, '').replace(/\/$/, '');
  const post = blogPosts.find((item) => item.slug === slug);
  const allTags = [...new Set(blogPosts.flatMap((item) => item.tags))];
  const tagCounts = new Map(allTags.map((item) => [item, blogPosts.filter((post) => post.tags.includes(item)).length]));
  const tags = [...allTags].sort((a, b) => tagCounts.get(b) - tagCounts.get(a) || a.localeCompare(b)).slice(0, 10);
  if (!allTags.includes(tag)) tag = '';
  const text = (pair) => localizeCopy(...pair);
  const copy = localizeCopy;
  const topicName = (key) => text(blogTopics.find((item) => item.key === key).label);
  const date = (value) => new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
  const readTime = (item) => {
    const content = [
      text(item.summary),
      text(item.answer),
      ...item.sections.flatMap(([heading, body]) => [text(heading), text(body)]),
      ...(item.deepDive || []).flatMap(({ heading, body }) => [text(heading), text(body)]),
      ...(item.table?.rows || []).flatMap((row) => row.map(text)),
    ].join(' ');
    return Math.max(1, Math.ceil(['zh-CN', 'ja', 'ko'].includes(locale) ? content.length / 300 : content.split(/\s+/).length / 200));
  };
  const coverUrl = (item) => `/assets/blog/${item.cover}`;
  const listUrl = () => `/blog/${window.location.search}`;
  const postUrl = (item) => `/blog/${item.slug}/${window.location.search}`;
  const cta = () => `<section class="blog-cta"><div><p class="blog-kicker">FROM INSIGHT TO ACTION</p><h2>${copy('把下一个想法，变成下一次合作。', 'Turn your next idea into your next campaign.')}</h2><p>${copy('从一份 Brief 开始，让 QuickKOL 帮你连接合适的创作者。', 'Start with a brief. Let QuickKOL help you find the right creators.')}</p></div><a class="button button-primary" href="/#agent-team">${copy('体验 QuickKOL Agent', 'Try QuickKOL Agent')} ${arrow}</a></section>`;
  const sourceAnchorTerms = {
    iab2025: { zh: ['IAB'], en: ['IAB'] },
    ftcDisclosure: { zh: ['FTC'], en: ['FTC'] },
    asaDisclosure: { zh: ['ASA/CAP'], en: ['ASA/CAP'] },
    youtubeAnalytics: { zh: ['平均观看时长', 'YouTube'], en: ['average view duration', 'YouTube'] },
    youtubeCtr: { zh: ['CTR'], en: ['CTR'] },
    youtubePaid: { zh: ['YouTube'], en: ['YouTube'] },
    youtubeBrandDeals: { zh: ['合作任务'], en: ['campaign job'] },
    youtubeBrandAccess: { zh: ['brand partner access'], en: ['brand partner access'] },
    tiktokQuality: { zh: ['TikTok'], en: ['TikTok'] },
    tiktokCollab: { zh: ['TikTok One'], en: ['TikTok One'] },
    tiktokSpecs: { zh: ['TikTok Branded Mission'], en: ['TikTok Branded Mission'] },
    gaUtm: { zh: ['Google Analytics'], en: ['Google Analytics'] },
    gaAttribution: { zh: ['归因报告'], en: ['attribution reports'] },
    gaModeled: { zh: ['建模关键事件', 'GA4 建模'], en: ['modeled key events', 'GA4 modeling'] },
    nistAiRmf: { zh: ['NIST AI RMF'], en: ['NIST AI RMF'] },
    tiktokDiscovery: { zh: ['TikTok One'], en: ['TikTok One'] },
    tiktokTopContent: { zh: ['TikTok One Top Content', 'TikTok'], en: ['TikTok One Top Content', 'TikTok'] },
    youtubeUnique: { zh: ['独立观众', 'YouTube'], en: ['unique viewers', 'YouTube'] },
    youtubeRetention: { zh: ['观众留存报告', 'YouTube'], en: ['audience-retention reporting', 'YouTube'] },
    tiktokAudience: { zh: ['TikTok Audience Insights'], en: ['TikTok Audience Insights'] },
    ftcFakeIndicators: { zh: ['FTC'], en: ['FTC'] },
    tiktokOne: { zh: ['TikTok One'], en: ['TikTok One'] },
    googleExperiments: { zh: ['Google Ads'], en: ['Google Ads'] },
    googleLift: { zh: ['Conversion Lift'], en: ['Conversion Lift'] },
    youtubeLive: { zh: ['YouTube'], en: ['YouTube'] },
    youtubeMultilanguage: { zh: ['YouTube'], en: ['YouTube'] },
    youtubeDubbing: { zh: ['自动配音'], en: ['automatic dubbing'] },
    metaBranded: { zh: ['Meta'], en: ['Meta'] },
    metaPartnership: { zh: ['Meta'], en: ['Meta'] },
    youtubeAdvanced: { zh: ['YouTube Advanced Mode'], en: ['YouTube Advanced Mode'] },
    ftcEndorsements: { zh: ['FTC'], en: ['FTC'] },
    influencerFeeCountry: { zh: ['InfluencerFee'], en: ['InfluencerFee'] },
    oecdPpp: { zh: ['OECD'], en: ['OECD'] },
  };
  const internalAnchorRules = [
    { terms: ['受众质量', 'audience quality'], slug: 'audit-creator-audience-quality', hash: 'evidence-table' },
    { terms: ['达人层级', 'creator tier'], slug: 'nano-micro-macro-creator-mix', hash: 'answer' },
    { terms: ['指标口径', 'metric definition'], slug: 'creator-metric-definitions', hash: 'evidence-table' },
    { terms: ['Benchmark', 'benchmark'], slug: 'creator-performance-benchmarks', hash: 'evidence-table' },
    { terms: ['跟进', 'follow-up'], slug: 'creator-outreach-follow-up', hash: 'interactive-tool' },
    { terms: ['使用权', 'usage rights'], slug: 'creator-rates-usage-rights', hash: 'interactive-tool' },
    { terms: ['内容审核', 'content review'], slug: 'creator-content-approval-workflow', hash: 'evidence-table' },
    { terms: ['预算', 'budget'], slug: 'influencer-campaign-budget-planning', hash: 'interactive-tool' },
    { terms: ['提示词', 'prompt'], slug: 'ai-creator-research-prompts', hash: 'interactive-tool' },
    { terms: ['数据审计', 'data audit'], slug: 'ai-creator-data-quality-audit', hash: 'interactive-tool' },
    { terms: ['互动率', 'engagement rate'], slug: 'read-creator-engagement-data', hash: 'interactive-tool' },
    { terms: ['ROAS', 'ROAS'], slug: 'creator-campaign-measurement', hash: 'interactive-tool' },
    { terms: ['候选名单', 'shortlist'], slug: 'creator-shortlist-workflow', hash: 'evidence-table' },
    { terms: ['Brief', 'brief'], slug: 'write-a-useful-campaign-brief', hash: 'interactive-tool' },
    { terms: ['外联', 'outreach'], slug: 'personalized-creator-outreach', hash: 'interactive-tool' },
    { terms: ['内容信号', 'content signals'], slug: 'search-creators-by-content-signals', hash: 'evidence-table' },
    { terms: ['品牌安全', 'brand safety'], slug: 'verify-creator-brand-safety', hash: 'evidence-table' },
    { terms: ['独立触达', 'unique reach'], slug: 'estimate-creator-reach-frequency', hash: 'interactive-tool' },
    { terms: ['观看时长', 'watch time'], slug: 'creator-retention-watch-time', hash: 'interactive-tool' },
    { terms: ['达人关系', 'creator relationship'], slug: 'creator-relationship-crm', hash: 'evidence-table' },
    { terms: ['反报价', 'counteroffer'], slug: 'creator-negotiation-response-playbook', hash: 'evidence-table' },
    { terms: ['寄样', 'product seeding'], slug: 'influencer-product-seeding-logistics', hash: 'interactive-tool' },
    { terms: ['风险登记表', 'risk register'], slug: 'creator-campaign-risk-register', hash: 'evidence-table' },
    { terms: ['AI 候选名单', 'AI-generated creator shortlist'], slug: 'ai-creator-shortlist-review', hash: 'interactive-tool' },
    { terms: ['本地市场', 'local market'], slug: 'find-local-market-creators', hash: 'evidence-table' },
    { terms: ['竞品图谱', 'competitor map'], slug: 'competitor-creator-partnership-map', hash: 'evidence-table' },
    { terms: ['异常', 'anomaly'], slug: 'detect-suspicious-creator-growth', hash: 'evidence-table' },
    { terms: ['观察名单', 'watchlist'], slug: 'creator-discovery-watchlist', hash: 'evidence-table' },
    { terms: ['增量', 'incrementality'], slug: 'creator-campaign-incrementality', hash: 'interactive-tool' },
    { terms: ['评论质量', 'comment quality'], slug: 'analyze-creator-comment-quality', hash: 'evidence-table' },
    { terms: ['报价', 'quote'], slug: 'evaluate-creator-rate-cards', hash: 'interactive-tool' },
    { terms: ['续期', 'renewal'], slug: 'creator-usage-rights-renewal', hash: 'evidence-table' },
    { terms: ['排他', 'exclusivity'], slug: 'price-creator-exclusivity', hash: 'interactive-tool' },
    { terms: ['多语言', 'multilingual'], slug: 'multilingual-creator-campaign', hash: 'evidence-table' },
    { terms: ['直播', 'live campaign'], slug: 'creator-live-campaign-runbook', hash: 'evidence-table' },
    { terms: ['数据新鲜度', 'data freshness'], slug: 'ai-creator-data-freshness', hash: 'evidence-table' },
    { terms: ['上升达人', 'rising creator'], slug: 'find-rising-creators-early', hash: 'evidence-table' },
    { terms: ['B2B 专家', 'B2B expert'], slug: 'find-b2b-expert-creators', hash: 'evidence-table' },
    { terms: ['组合缺口', 'portfolio gap'], slug: 'creator-portfolio-gap-analysis', hash: 'evidence-table' },
    { terms: ['保存与分享', 'saves and shares'], slug: 'creator-saves-shares-analysis', hash: 'evidence-table' },
    { terms: ['落地页', 'landing page'], slug: 'creator-landing-page-conversion', hash: 'interactive-tool' },
    { terms: ['多触点归因', 'multi-touch attribution'], slug: 'creator-multi-touch-attribution', hash: 'interactive-tool' },
    { terms: ['付费放大', 'paid amplification'], slug: 'organic-vs-paid-creator-content', hash: 'evidence-table' },
    { terms: ['签约后', 'post-signature'], slug: 'creator-onboarding-after-signature', hash: 'evidence-table' },
    { terms: ['入站申请', 'inbound application'], slug: 'manage-inbound-creator-applications', hash: 'evidence-table' },
    { terms: ['取消费', 'cancellation fee'], slug: 'creator-cancellation-kill-fees', hash: 'interactive-tool' },
    { terms: ['付款节点', 'payment milestone'], slug: 'creator-payment-invoice-operations', hash: 'interactive-tool' },
    { terms: ['原始素材', 'raw footage'], slug: 'creator-raw-footage-rights', hash: 'evidence-table' },
    { terms: ['UGC 测试', 'UGC test'], slug: 'creator-ugc-testing-plan', hash: 'interactive-tool' },
    { terms: ['发布波次', 'launch wave'], slug: 'creator-launch-calendar', hash: 'evidence-table' },
    { terms: ['产品声明', 'product claim'], slug: 'creator-product-claims-review', hash: 'evidence-table' },
    { terms: ['危机响应', 'incident response'], slug: 'sponsored-content-crisis-response', hash: 'evidence-table' },
    { terms: ['身份合并', 'identity merge'], slug: 'ai-creator-identity-deduplication', hash: 'evidence-table' },
    { terms: ['视频证据', 'video evidence'], slug: 'ai-creator-video-evidence', hash: 'evidence-table' },
    { terms: ['例外路由', 'exception routing'], slug: 'ai-campaign-exception-routing', hash: 'evidence-table' },
    { terms: ['QuickKOL', 'QuickKOL'], url: '/#capabilities' },
    { terms: ['Agent', 'Agent'], url: '/#agent-team' },
  ];
  const linkedInternalUrls = new Set();
  const linkedText = (value, rules) => {
    const matches = rules.map((rule) => {
      const index = value.indexOf(rule.term);
      return { ...rule, index };
    }).filter(({ index }) => index >= 0).sort((a, b) => a.index - b.index || b.term.length - a.term.length);
    const accepted = [];
    for (const match of matches) {
      const end = match.index + match.term.length;
      if (!accepted.some((item) => match.index < item.end && end > item.index)) accepted.push({ ...match, end });
    }
    let cursor = 0;
    return accepted.sort((a, b) => a.index - b.index).map((match) => {
      const before = escapeHtml(value.slice(cursor, match.index));
      cursor = match.end;
      const attributes = match.external ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `${before}<a class="blog-body-link${match.external ? ' is-external' : ''}" href="${escapeHtml(match.url)}"${attributes}>${escapeHtml(match.term)}</a>`;
    }).join('') + escapeHtml(value.slice(cursor));
  };
  const linkedParagraph = (item, paragraph, sourceIds = []) => {
    const sourceRules = sourceIds.map((id) => {
      const source = item.sources.find((candidate) => candidate.id === id);
      const candidates = (sourceAnchorTerms[id]?.[locale === 'zh-CN' ? 'zh' : 'en'] || []).map(localizeText);
      const term = candidates.find((candidate) => paragraph.includes(candidate));
      return source && term ? { term, url: source.url, external: true } : null;
    }).filter(Boolean);
    const internalRules = internalAnchorRules.map((rule) => {
      const term = localizeText(rule.terms[locale === 'zh-CN' ? 0 : 1]);
      if (!paragraph.includes(term)) return null;
      const url = rule.url || (item.slug === rule.slug ? `#${rule.hash}` : `/blog/${rule.slug}/#${rule.hash}`);
      if (linkedInternalUrls.has(url)) return null;
      linkedInternalUrls.add(url);
      return { term, url, external: false };
    }).filter(Boolean).slice(0, 1);
    return linkedText(paragraph, [...sourceRules, ...internalRules]);
  };
  const linkedParagraphs = (item, pair, sourceIds = []) => text(pair).split(/\n\n+/).map((paragraph) => `<p>${linkedParagraph(item, paragraph, sourceIds)}</p>`).join('');
  const renderAnswer = (item) => {
    const paragraphs = text(item.answer).split(/\n\n+/);
    const firstParagraph = paragraphs.shift() || '';
    const sentenceMatch = firstParagraph.match(/^.*?(?:[。！？]|[.!?](?=\s|$))/);
    const lead = sentenceMatch?.[0] || firstParagraph;
    const remainder = firstParagraph.slice(lead.length).trim();
    return `<p><strong>${linkedParagraph(item, lead)}</strong>${remainder ? ` ${linkedParagraph(item, remainder)}` : ''}</p>${paragraphs.map((paragraph) => `<p>${linkedParagraph(item, paragraph)}</p>`).join('')}`;
  };
  const renderTable = (item) => item.table ? `<section class="blog-data-section" id="evidence-table"><h2>${escapeHtml(text(item.table.title))}</h2><p>${escapeHtml(text(item.table.note))}</p><div class="blog-table-scroll"><table><thead><tr>${item.table.headers.map((header) => `<th scope="col">${escapeHtml(text(header))}</th>`).join('')}</tr></thead><tbody>${item.table.rows.map((row) => `<tr>${row.map((cell, index) => `<${index === 0 ? 'th scope="row"' : 'td'}>${escapeHtml(text(cell))}</${index === 0 ? 'th' : 'td'}>`).join('')}</tr>`).join('')}</tbody></table></div></section>` : '';
  const renderTool = (tool) => {
    if (!tool) return '';
    if (tool.kind === 'reference-list') {
      return `<section class="blog-tool blog-tool-reference" id="interactive-tool"><div class="blog-tool-heading"><p class="blog-kicker">${copy('检查清单', 'CHECKLIST')}</p><h2>${escapeHtml(text(tool.title))}</h2><p>${escapeHtml(text(tool.intro))}</p></div><ol class="blog-tool-reference-list">${tool.items.map((item) => `<li>${escapeHtml(text(item))}</li>`).join('')}</ol></section>`;
    }
    const fields = `<div class="blog-tool-fields">${tool.inputs.map((input) => `<label><span>${escapeHtml(text(input.label))}</span><div class="blog-tool-control"><input type="number" name="${input.key}" min="${input.min ?? 0}" ${input.max !== undefined ? `max="${input.max}"` : ''} step="${input.step ?? 1}" value="${input.value}" /></div></label>`).join('')}</div>`;
    return `<section class="blog-tool" id="interactive-tool" data-blog-tool data-tool-kind="${tool.kind}"><div class="blog-tool-heading"><p class="blog-kicker">${copy('实用工具', 'PRACTICAL TOOL')}</p><h2>${escapeHtml(text(tool.title))}</h2><p>${escapeHtml(text(tool.intro))}</p></div>${fields}<div class="blog-tool-result" data-blog-tool-result aria-live="polite"></div></section>`;
  };

  document.body.classList.add('blog-page');
  document.querySelectorAll('header a[href^="#"], footer a[href^="#"]').forEach((link) => {
    link.setAttribute('href', `/${link.getAttribute('href')}`);
  });
  document.querySelectorAll('[data-start]').forEach((button) => {
    button.addEventListener('click', () => { window.location.href = 'https://app.quickkol.com/en/login'; });
  });
  document.querySelector('.site-footer').classList.add('is-visible');

  function metadata() {
    document.title = post ? `${text(post.title)} | QuickKOL Blog` : 'QuickKOL Blog — ' + copy('达人营销洞察与实战指南', 'Creator marketing insights & guides');
    const description = post ? text(post.metaDescription) : copy('探索达人发现、数据洞察、个性化外联与 AI 营销的实战指南。', 'Practical guides to creator discovery, data, outreach, campaign operations and AI marketing.');
    document.querySelector('meta[name="description"]').content = description;
    const pageUrl = canonicalUrl(post ? `/blog/${post.slug}/` : '/blog/');
    let structured = document.querySelector('script[data-blog-structured]');
    if (!structured) {
      structured = document.createElement('script');
      structured.type = 'application/ld+json';
      structured.dataset.blogStructured = '';
      document.head.append(structured);
    }
    structured.textContent = JSON.stringify(post ? {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: text(post.title),
      description,
      datePublished: post.date,
      dateModified: post.date,
      mainEntityOfPage: pageUrl,
      image: new URL(coverUrl(post), siteOrigin).href,
      author: { '@type': 'Organization', name: 'QuickKOL Strategy Team', url: `${siteOrigin}/about/` },
      publisher: { '@type': 'Organization', '@id': `${siteOrigin}/#organization`, name: 'QuickKOL', url: siteOrigin },
      citation: post.sources?.map((source) => source.url) || [],
    } : {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: document.title,
      description,
      url: pageUrl,
    }).replace(/</g, '\\u003c');
  }

  function renderCard(item) {
    return `<a class="blog-card" href="${escapeHtml(postUrl(item))}"><div class="blog-cover"><img src="${coverUrl(item)}" alt="${escapeHtml(text(item.coverAlt))}" loading="lazy" width="640" height="360" /></div><div class="blog-card-meta"><span class="blog-badge">${topicName(item.topic)}</span><time datetime="${item.date}">${date(item.date)}</time></div><h3>${escapeHtml(text(item.title))}</h3><p class="blog-card-description">${escapeHtml(text(item.summary))}</p><div class="blog-card-bottom"><small>QuickKOL Strategy Team · ${readTime(item)} ${copy('分钟阅读', 'min read')}</small><span>${copy('阅读', 'Read')} ${arrow}</span></div></a>`;
  }

  function syncUrl() {
    const next = new URLSearchParams();
    if (query) next.set('q', query);
    if (topic) next.set('topic', topic);
    if (tag) next.set('tag', tag);
    if (page > 1) next.set('page', page);
    const search = next.size ? `?${next}` : '';
    window.history.replaceState(null, '', `/blog/${search}`);
  }

  function renderResults() {
    const terms = query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
    const matching = blogPosts.filter((item) => {
      const searchable = JSON.stringify(item).toLocaleLowerCase();
      return (!topic || item.topic === topic) && (!tag || item.tags.includes(tag)) && terms.every((term) => searchable.includes(term));
    });
    const pages = Math.max(1, Math.ceil(matching.length / PAGE_SIZE));
    page = Math.min(page, pages);
    syncUrl();
    document.querySelectorAll('[data-blog-topic]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.blogTopic === topic)));
    document.querySelectorAll('[data-blog-tag]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.blogTag === tag)));
    const start = (page - 1) * PAGE_SIZE;
    const range = matching.length ? `${start + 1}–${Math.min(start + PAGE_SIZE, matching.length)}` : '0';
    document.querySelector('[data-blog-count]').textContent = copy(`显示 ${range} / ${matching.length} 篇匹配文章 · 共 ${blogPosts.length} 篇`, `Showing ${range} of ${matching.length} matching articles · ${blogPosts.length} published.`);
    document.querySelector('[data-blog-grid]').innerHTML = matching.length ? matching.slice(start, start + PAGE_SIZE).map(renderCard).join('') : `<div class="blog-empty"><i class="ph ph-magnifying-glass" aria-hidden="true"></i><h3>${copy('还没有匹配的文章', 'No articles found')}</h3><p>${copy('试试其他关键词，或清除筛选查看全部文章。', 'Try another keyword or clear the filters to see all articles.')}</p><button class="button button-secondary button-small" data-blog-clear>${copy('清除筛选', 'Clear filters')}</button></div>`;
    document.querySelector('[data-blog-grid]').classList.toggle('blog-grid', matching.length > 0);
    document.querySelector('[data-blog-pagination]').innerHTML = matching.length ? `<span>${copy(`第 ${page} / ${pages} 页`, `PAGE ${page} OF ${pages}`)}</span><div class="blog-page-buttons"><button data-blog-page="${page - 1}" ${page === 1 ? 'disabled' : ''} aria-label="${copy('上一页', 'Previous page')}">←</button>${Array.from({length: pages}, (_, index) => `<button data-blog-page="${index + 1}" ${page === index + 1 ? 'aria-current="page"' : ''} aria-label="${copy(`第 ${index + 1} 页`, `Page ${index + 1}`)}">${index + 1}</button>`).join('')}<button data-blog-page="${page + 1}" ${page === pages ? 'disabled' : ''} aria-label="${copy('下一页', 'Next page')}">→</button></div>` : '';
  }

  function updateBlogTool(container) {
    const kind = container.dataset.toolKind;
    const result = container.querySelector('[data-blog-tool-result]');
    const value = (name) => Math.max(0, Number(container.querySelector(`[name="${name}"]`)?.value) || 0);
    if (kind === 'pipeline') {
      const target = value('target');
      const response = value('response') / 100;
      const acceptance = value('acceptance') / 100;
      const contacts = response && acceptance ? Math.ceil(target / response / acceptance) : 0;
      const replies = Math.ceil(contacts * response);
      result.innerHTML = `<strong>${contacts.toLocaleString(locale)}</strong><span>${copy('建议初始联系人数', 'estimated initial contacts')}</span><small>${copy(`预计约 ${replies} 个回复，再筛选出 ${target} 个合作对象。`, `About ${replies} replies to reach ${target} accepted creators.`)}</small>`;
      return;
    }
    if (kind === 'engagement') {
      const interactions = ['likes', 'comments', 'saves', 'shares'].reduce((sum, key) => sum + value(key), 0);
      const followerRate = value('followers') ? interactions / value('followers') * 100 : 0;
      const viewRate = value('views') ? interactions / value('views') * 100 : 0;
      result.innerHTML = `<div><strong>${followerRate.toFixed(2)}%</strong><span>${copy('粉丝口径', 'by followers')}</span></div><div><strong>${viewRate.toFixed(2)}%</strong><span>${copy('观看口径', 'by views')}</span></div><small>${copy(`总互动 ${interactions.toLocaleString(locale)}；报告时必须写明分母。`, `${interactions.toLocaleString(locale)} total interactions; always label the denominator.`)}</small>`;
      return;
    }
    if (kind === 'budget-plan') {
      const budget = value('budget');
      const committed = value('creatorFees') + value('rights') + value('amplification') + value('operations');
      const reserve = budget * Math.min(value('contingency'), 100) / 100;
      const planned = committed + reserve;
      const difference = budget - planned;
      const money = (number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(number);
      result.innerHTML = `<div><strong>${money(committed)}</strong><span>${copy('承诺成本', 'committed cost')}</span></div><div><strong>${money(reserve)}</strong><span>${copy('预备金', 'contingency reserve')}</span></div><div><strong>${money(planned)}</strong><span>${copy('计划总额', 'planned total')}</span></div><div><strong>${money(Math.abs(difference))}</strong><span>${difference >= 0 ? copy('剩余预算', 'remaining budget') : copy('超出预算', 'over budget')}</span></div><small>${copy('预备金按总预算计算；请用真实报价替换示例输入。', 'Contingency is calculated from total budget; replace example inputs with real quotes.')}</small>`;
      return;
    }
    if (kind === 'rights-cost') {
      const rightsCost = value('rightsMonths') * value('monthlyRights');
      const addOns = value('amplification') + value('exclusivity') + value('rawAssets');
      const total = value('baseFee') + rightsCost + addOns;
      const addOnShare = total ? (rightsCost + addOns) / total * 100 : 0;
      const money = (number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(number);
      result.innerHTML = `<div><strong>${money(total)}</strong><span>${copy('情景总成本', 'scenario total')}</span></div><div><strong>${money(rightsCost)}</strong><span>${copy('期限使用权成本', 'term rights cost')}</span></div><div><strong>${money(addOns)}</strong><span>${copy('其他附加项', 'other add-ons')}</span></div><div><strong>${addOnShare.toFixed(1)}%</strong><span>${copy('权益与附加项占比', 'rights and add-on share')}</span></div><small>${copy('这是范围计算，不是市场价格估算；最终金额以双方书面确认的条款为准。', 'This compares scope and does not estimate market price; use written agreed terms for the final amount.')}</small>`;
      return;
    }
    if (kind === 'audit-sample') {
      const population = value('population');
      const sampleSize = Math.min(value('sampleSize'), population || value('sampleSize'));
      const issues = Math.min(value('issueCount'), sampleSize);
      const blocking = Math.min(value('blockingCount'), issues);
      const coverage = population ? sampleSize / population * 100 : 0;
      const issueRate = sampleSize ? issues / sampleSize * 100 : 0;
      const estimatedReview = Math.round(population * issueRate / 100);
      result.innerHTML = `<div><strong>${coverage.toFixed(1)}%</strong><span>${copy('抽样覆盖率', 'sample coverage')}</span></div><div><strong>${issueRate.toFixed(1)}%</strong><span>${copy('样本问题率', 'sample issue rate')}</span></div><div><strong>${estimatedReview.toLocaleString(locale)}</strong><span>${copy('情景待复核记录', 'scenario records to review')}</span></div><div><strong>${blocking.toLocaleString(locale)}</strong><span>${copy('阻断问题', 'blocking issues')}</span></div><small>${blocking ? copy('存在阻断问题：暂停相关自动动作并扩大复核。只有代表性样本才适合外推工作量。', 'Blocking issues found: pause affected automation and expand review. Extrapolate workload only from a representative sample.') : copy('未发现阻断问题；仍需按风险分层解释样本。', 'No blocking issue found; still interpret the sample by risk stratum.')}</small>`;
      return;
    }
    if (kind === 'creator-compare') {
      const followers = value('followers');
      const views = value('views');
      const interactions = value('interactions');
      const qualifiedViews = views * Math.min(value('audienceShare'), 100) / 100;
      const totalCost = value('fee') + value('rightsCost');
      const viewRate = followers ? views / followers * 100 : 0;
      const engagementRate = views ? interactions / views * 100 : 0;
      const qualifiedCpm = qualifiedViews ? totalCost / qualifiedViews * 1000 : 0;
      const costPerInteraction = interactions ? totalCost / interactions : 0;
      const format = (number, digits = 1) => new Intl.NumberFormat(locale, { maximumFractionDigits: digits }).format(number);
      result.innerHTML = `<div><strong>${format(qualifiedViews, 0)}</strong><span>${copy('预估目标市场观看', 'estimated target-market views')}</span></div><div><strong>${viewRate.toFixed(1)}%</strong><span>${copy('中位观看 / 粉丝', 'median views / followers')}</span></div><div><strong>${engagementRate.toFixed(2)}%</strong><span>${copy('观看口径互动率', 'engagement by views')}</span></div><div><strong>${format(qualifiedCpm, 2)}</strong><span>${copy('有效观看 CPM', 'qualified-view CPM')}</span></div><small>${copy(`总成本 ${format(totalCost, 2)}；单次互动成本 ${format(costPerInteraction, 2)}。受众占比应来自同一平台与时间窗。`, `Total cost ${format(totalCost, 2)}; cost per interaction ${format(costPerInteraction, 2)}. Use audience share from the same platform and date window.`)}</small>`;
      return;
    }
    if (kind === 'roi') {
      const cost = value('cost');
      const revenue = value('revenue');
      const clicks = value('clicks');
      const conversions = value('conversions');
      const money = (number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 2 }).format(number);
      result.innerHTML = `<div><strong>${cost ? (revenue / cost).toFixed(2) : '—'}</strong><span>ROAS</span></div><div><strong>${conversions ? money(cost / conversions) : '—'}</strong><span>CPA</span></div><div><strong>${clicks ? money(cost / clicks) : '—'}</strong><span>CPC</span></div><div><strong>${clicks ? (conversions / clicks * 100).toFixed(2) + '%' : '—'}</strong><span>CVR</span></div>`;
      return;
    }
    if (kind === 'reach-frequency') {
      const audienceA = value('audienceA');
      const audienceB = value('audienceB');
      const overlap = Math.min(value('overlap'), audienceA, audienceB);
      const combinedReach = Math.max(0, audienceA + audienceB - overlap);
      const frequency = combinedReach ? value('impressions') / combinedReach : 0;
      const overlapShare = Math.min(audienceA, audienceB) ? overlap / Math.min(audienceA, audienceB) * 100 : 0;
      result.innerHTML = `<div><strong>${combinedReach.toLocaleString(locale)}</strong><span>${copy('组合独立触达', 'combined unique reach')}</span></div><div><strong>${frequency.toFixed(2)}</strong><span>${copy('平均频次', 'average frequency')}</span></div><div><strong>${overlap.toLocaleString(locale)}</strong><span>${copy('重叠观众', 'overlap audience')}</span></div><div><strong>${overlapShare.toFixed(1)}%</strong><span>${copy('较小受众重叠占比', 'overlap of smaller audience')}</span></div><small>${copy('重叠是规划假设；发布后用平台数据校准。', 'Overlap is a planning assumption; calibrate it with post-launch platform data.')}</small>`;
      return;
    }
    if (kind === 'retention') {
      const videoLength = value('videoLength');
      const averageDuration = Math.min(value('averageDuration'), videoLength || value('averageDuration'));
      const starts = value('starts');
      const sixSecond = Math.min(value('sixSecond'), starts || value('sixSecond'));
      const averagePercent = videoLength ? averageDuration / videoLength * 100 : 0;
      const hold = starts ? sixSecond / starts * 100 : 0;
      result.innerHTML = `<div><strong>${averagePercent.toFixed(1)}%</strong><span>${copy('平均观看比例', 'average percentage viewed')}</span></div><div><strong>${hold.toFixed(1)}%</strong><span>${copy('6 秒留存', 'six-second hold')}</span></div><div><strong>${averageDuration.toFixed(0)}s</strong><span>${copy('平均观看时长', 'average view duration')}</span></div><div><strong>${(starts - sixSecond).toLocaleString(locale)}</strong><span>${copy('前 6 秒流失', 'drop before six seconds')}</span></div><small>${copy('对照内容时间点、视频长度和流量来源解释结果。', 'Interpret beside content moments, video length and traffic source.')}</small>`;
      return;
    }
    if (kind === 'seeding-plan') {
      const creators = Math.ceil(value('creators'));
      const units = Math.ceil(creators * (1 + Math.min(value('replacementRate'), 100) / 100));
      const usable = Math.floor(creators * Math.min(value('successRate'), 100) / 100);
      const cost = units * value('unitCost') + creators * value('shippingCost');
      const costPerUsable = usable ? cost / usable : 0;
      const format = (number) => new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(number);
      result.innerHTML = `<div><strong>${units}</strong><span>${copy('需要预留的样品', 'units to reserve')}</span></div><div><strong>${usable}</strong><span>${copy('期望可用合作人数', 'expected usable recipients')}</span></div><div><strong>${format(cost)}</strong><span>${copy('样品与基础物流成本', 'product and base shipping cost')}</span></div><div><strong>${format(costPerUsable)}</strong><span>${copy('每个期望可用合作成本', 'cost per expected usable recipient')}</span></div><small>${copy('未含关税、包装、退货和额外操作成本；比例应使用 Campaign 自己的历史数据。', 'Excludes duties, packaging, returns and extra handling; use campaign-specific historical rates.')}</small>`;
      return;
    }
    const format = (number, digits = 2) => new Intl.NumberFormat(locale, { maximumFractionDigits: digits }).format(number);
    if (kind === 'country-rate-compare') {
      const creatorFee = value('creatorFee');
      const addOns = value('rightsCost') + value('localizationCost');
      const total = creatorFee + addOns;
      const qualifiedViews = value('medianViews') * Math.min(value('targetShare'), 100) / 100;
      const qualifiedCpm = qualifiedViews ? total / qualifiedViews * 1000 : 0;
      const addOnShare = total ? addOns / total * 100 : 0;
      result.innerHTML = `<div><strong>${format(total, 0)}</strong><span>${copy('完整情景成本', 'full scenario cost')}</span></div><div><strong>${format(qualifiedViews, 0)}</strong><span>${copy('目标市场有效观看', 'target-market qualified views')}</span></div><div><strong>${qualifiedViews ? format(qualifiedCpm, 2) : '—'}</strong><span>${copy('有效观看 CPM', 'qualified-view CPM')}</span></div><div><strong>${addOnShare.toFixed(1)}%</strong><span>${copy('权益与本地执行占比', 'rights and local execution share')}</span></div><small>${copy('该结果用于统一口径比较候选人，不是某个国家或达人的推荐价格。请使用同一币种、同一数据窗口和完整合作范围。', 'Use this result to compare candidates on one basis. It is not a recommended country or creator price. Use one currency, one data window and complete scope.')}</small>`;
      return;
    }
    if (kind === 'affiliate-economics') {
      const netRevenue = Math.max(0, value('grossRevenue') - value('refunds'));
      const commission = netRevenue * Math.min(value('commissionRate'), 100) / 100;
      const totalCost = commission + value('fixedCost') + value('otherCost');
      const orders = value('validOrders');
      result.innerHTML = `<div><strong>${format(netRevenue, 0)}</strong><span>${copy('净收入', 'net revenue')}</span></div><div><strong>${format(totalCost, 0)}</strong><span>${copy('完整成本', 'total cost')}</span></div><div><strong>${totalCost ? (netRevenue / totalCost).toFixed(2) : '—'}</strong><span>${copy('净收入 ROAS', 'net-revenue ROAS')}</span></div><div><strong>${orders ? format(totalCost / orders) : '—'}</strong><span>${copy('每个有效订单成本', 'cost per valid order')}</span></div><small>${copy(`佣金 ${format(commission, 0)}；请在退款窗口结束后更新。`, `Commission ${format(commission, 0)}; update after the refund window closes.`)}</small>`;
      return;
    }
    if (kind === 'incrementality') {
      const treatmentSize = value('treatmentSize');
      const controlSize = value('controlSize');
      const treatmentRate = treatmentSize ? Math.min(value('treatmentConversions'), treatmentSize) / treatmentSize : 0;
      const controlRate = controlSize ? Math.min(value('controlConversions'), controlSize) / controlSize : 0;
      const absoluteLift = treatmentRate - controlRate;
      const relativeLift = controlRate ? absoluteLift / controlRate * 100 : 0;
      const incremental = Math.max(0, absoluteLift * treatmentSize);
      result.innerHTML = `<div><strong>${(treatmentRate * 100).toFixed(2)}%</strong><span>${copy('处理组转化率', 'treatment rate')}</span></div><div><strong>${(controlRate * 100).toFixed(2)}%</strong><span>${copy('控制组转化率', 'control rate')}</span></div><div><strong>${(absoluteLift * 100).toFixed(2)} pp</strong><span>${copy('绝对提升', 'absolute lift')}</span></div><div><strong>${relativeLift.toFixed(1)}%</strong><span>${copy('相对提升', 'relative lift')}</span></div><small>${copy(`情景增量转化 ${format(incremental, 0)}；每个情景增量成本 ${incremental ? format(value('campaignCost') / incremental) : '—'}。该结果不代表统计显著。`, `Scenario incremental conversions ${format(incremental, 0)}; cost per scenario increment ${incremental ? format(value('campaignCost') / incremental) : '—'}. This does not establish statistical significance.`)}</small>`;
      return;
    }
    if (kind === 'quote-normalize') {
      const rights = value('rightsMonths') * value('monthlyRights');
      const total = value('baseFee') + rights + value('addOns');
      const assets = Math.max(1, value('assets'));
      const views = value('qualifiedViews');
      result.innerHTML = `<div><strong>${format(total, 0)}</strong><span>${copy('标准化情景总额', 'normalized scenario total')}</span></div><div><strong>${format(total / assets, 0)}</strong><span>${copy('每项交付成本', 'cost per asset')}</span></div><div><strong>${format(rights, 0)}</strong><span>${copy('付费使用成本', 'paid-use cost')}</span></div><div><strong>${views ? format(total / views * 1000) : '—'}</strong><span>${copy('目标市场观看 CPM', 'target-market view CPM')}</span></div><small>${copy('用于比较范围，不用于判断市场价格。', 'Use this to compare scope, not to declare a market price.')}</small>`;
      return;
    }
    if (kind === 'exclusivity-cost') {
      const blockedDeals = value('annualDeals') / 12 * value('months') * Math.min(value('scopePercent'), 100) / 100;
      const opportunity = blockedDeals * value('averageValue');
      result.innerHTML = `<div><strong>${blockedDeals.toFixed(2)}</strong><span>${copy('情景受限合作数', 'scenario constrained deals')}</span></div><div><strong>${format(opportunity, 0)}</strong><span>${copy('情景机会价值', 'scenario opportunity value')}</span></div><div><strong>${value('months')}</strong><span>${copy('排他月数', 'exclusivity months')}</span></div><div><strong>${Math.min(value('scopePercent'), 100).toFixed(0)}%</strong><span>${copy('历史合作受限占比', 'historic deal share constrained')}</span></div><small>${copy('这是谈判范围情景，不是推荐报价。', 'This frames negotiation scope and is not a recommended fee.')}</small>`;
      return;
    }
    if (kind === 'scope-change') {
      const rework = value('completedCost') * Math.min(value('reworkPercent'), 100) / 100;
      const additions = value('addedDeliverables') * value('costPerDeliverable');
      const subtotal = rework + additions;
      const reserve = subtotal * Math.min(value('contingency'), 100) / 100;
      result.innerHTML = `<div><strong>${format(rework, 0)}</strong><span>${copy('返工成本情景', 'rework scenario')}</span></div><div><strong>${format(additions, 0)}</strong><span>${copy('新增交付成本', 'added deliverables')}</span></div><div><strong>${format(reserve, 0)}</strong><span>${copy('不确定性预备', 'uncertainty reserve')}</span></div><div><strong>${format(subtotal + reserve, 0)}</strong><span>${copy('总影响情景', 'total impact scenario')}</span></div><small>${copy(`预计延迟 ${format(value('delayDays'), 0)} 天；需由双方书面批准后才生效。`, `Estimated delay ${format(value('delayDays'), 0)} days; changes take effect only after written approval.`)}</small>`;
      return;
    }
    if (kind === 'landing-funnel') {
      const clicks = value('clicks');
      const arrivals = Math.min(value('arrivals'), clicks || value('arrivals'));
      const actions = Math.min(value('actions'), arrivals || value('actions'));
      const checkouts = Math.min(value('checkouts'), actions || value('checkouts'));
      const orders = Math.min(value('orders'), checkouts || value('orders'));
      const rate = (part, whole) => whole ? `${(part / whole * 100).toFixed(2)}%` : '—';
      const drops = [
        [copy('点击 → 到达', 'click → arrival'), clicks ? 1 - arrivals / clicks : 0],
        [copy('到达 → 行为', 'arrival → action'), arrivals ? 1 - actions / arrivals : 0],
        [copy('行为 → 结账', 'action → checkout'), actions ? 1 - checkouts / actions : 0],
        [copy('结账 → 订单', 'checkout → order'), checkouts ? 1 - orders / checkouts : 0],
      ];
      const largest = drops.sort((a, b) => b[1] - a[1])[0];
      result.innerHTML = `<div><strong>${rate(arrivals, clicks)}</strong><span>${copy('有效到达率', 'valid arrival rate')}</span></div><div><strong>${rate(actions, arrivals)}</strong><span>${copy('到达后行为率', 'arrival-to-action rate')}</span></div><div><strong>${rate(orders, checkouts)}</strong><span>${copy('结账完成率', 'checkout completion')}</span></div><div><strong>${rate(orders, clicks)}</strong><span>${copy('点击到有效订单率', 'click-to-valid-order rate')}</span></div><small>${copy(`最大流失环节：${largest[0]}（${(largest[1] * 100).toFixed(1)}%）。先验证事件定义、链接和页面，再解释内容表现。`, `Largest drop: ${largest[0]} (${(largest[1] * 100).toFixed(1)}%). Verify events, links and page behavior before interpreting creative performance.`)}</small>`;
      return;
    }
    if (kind === 'multi-touch') {
      const valid = value('validConversions');
      const allocated = value('firstCredit') + value('assistCredit') + value('lastCredit');
      const total = allocated + value('unallocated');
      const difference = total - valid;
      result.innerHTML = `<div><strong>${format(allocated, 1)}</strong><span>${copy('已分配功劳', 'allocated credit')}</span></div><div><strong>${format(value('unallocated'), 1)}</strong><span>${copy('未分配结果', 'unallocated outcomes')}</span></div><div><strong>${format(total, 1)}</strong><span>${copy('对账合计', 'reconciled total')}</span></div><div><strong>${difference === 0 ? copy('一致', 'matched') : format(Math.abs(difference), 1)}</strong><span>${difference === 0 ? copy('与有效转化相等', 'equals valid conversions') : difference > 0 ? copy('超出有效转化', 'over valid conversions') : copy('少于有效转化', 'under valid conversions')}</span></div><small>${copy('先修复对账差额，再比较归因模型。', 'Resolve reconciliation differences before comparing attribution models.')}</small>`;
      return;
    }
    if (kind === 'cancellation-fee') {
      const earned = value('totalFee') * Math.min(value('stagePercent'), 100) / 100;
      const grossDue = earned + value('nonRecoverable');
      const balance = Math.max(0, grossDue - value('depositPaid'));
      result.innerHTML = `<div><strong>${format(earned, 0)}</strong><span>${copy('阶段制作费', 'stage production fee')}</span></div><div><strong>${format(value('nonRecoverable'), 0)}</strong><span>${copy('不可回收成本', 'nonrecoverable cost')}</span></div><div><strong>${format(grossDue, 0)}</strong><span>${copy('情景应付总额', 'scenario amount due')}</span></div><div><strong>${format(balance, 0)}</strong><span>${copy('扣除定金后余额', 'balance after deposit')}</span></div><small>${copy('仅用于套用双方已书面确认的条款，不替代合同或当地法律意见。', 'Use only with mutually agreed written terms; this does not replace the agreement or local legal advice.')}</small>`;
      return;
    }
    if (kind === 'payment-schedule') {
      const total = value('contractTotal');
      const deposit = Math.min(value('depositPercent'), 100);
      const approval = Math.min(value('approvalPercent'), 100);
      const publish = Math.min(value('publishPercent'), 100);
      const percentTotal = deposit + approval + publish;
      result.innerHTML = `<div><strong>${format(total * deposit / 100, 0)}</strong><span>${copy('签约付款', 'signature payment')}</span></div><div><strong>${format(total * approval / 100, 0)}</strong><span>${copy('终稿批准付款', 'final approval payment')}</span></div><div><strong>${format(total * publish / 100, 0)}</strong><span>${copy('发布与关闭付款', 'publication and closeout payment')}</span></div><div><strong>${percentTotal.toFixed(0)}%</strong><span>${percentTotal === 100 ? copy('比例合计正确', 'percentage total matched') : copy('比例合计需调整', 'percentage total needs adjustment')}</span></div><small>${copy(`按当前比例计算的总额为 ${format(total * percentTotal / 100, 0)}。`, `The current percentages allocate ${format(total * percentTotal / 100, 0)} in total.`)}</small>`;
      return;
    }
    if (kind === 'creative-test') {
      const aCtr = value('aImpressions') ? value('aClicks') / value('aImpressions') * 100 : 0;
      const bCtr = value('bImpressions') ? value('bClicks') / value('bImpressions') * 100 : 0;
      const aCvr = value('aClicks') ? value('aConversions') / value('aClicks') * 100 : 0;
      const bCvr = value('bClicks') ? value('bConversions') / value('bClicks') * 100 : 0;
      result.innerHTML = `<div><strong>${aCtr.toFixed(2)}%</strong><span>${copy('A 点击率', 'A click-through rate')}</span></div><div><strong>${bCtr.toFixed(2)}%</strong><span>${copy('B 点击率', 'B click-through rate')}</span></div><div><strong>${aCvr.toFixed(2)}%</strong><span>${copy('A 点击后转化率', 'A post-click conversion')}</span></div><div><strong>${bCvr.toFixed(2)}%</strong><span>${copy('B 点击后转化率', 'B post-click conversion')}</span></div><small>${copy(`A 转化 ${format(value('aConversions'), 0)}，B 转化 ${format(value('bConversions'), 0)}。先看测试变量与样本条件，不要只按单一指标宣布赢家。`, `A conversions ${format(value('aConversions'), 0)}; B conversions ${format(value('bConversions'), 0)}. Review the tested variable and sample conditions before declaring a winner from one metric.`)}</small>`;
      return;
    }
  }

  function render() {
    if (slug && !post) {
      main.innerHTML = `<section class="blog-article-hero"><p class="blog-kicker">QUICKKOL / BLOG</p><h1>${copy('文章未找到', 'Article not found')}</h1><a class="button button-primary" href="/blog/">${copy('返回 Blog', 'Back to the blog')}</a></section>`;
    } else if (post) {
      linkedInternalUrls.clear();
      const renderDeepDive = () => post.deepDive.map((section, index) => `<section id="deep-dive-${index + 1}"><h2>${escapeHtml(text(section.heading))}</h2>${linkedParagraphs(post, section.body, section.citations)}</section>`).join('');
      const sourceList = `<section class="blog-sources" id="sources"><h2>${copy('资料来源与延伸阅读', 'Sources and further reading')}</h2><ul>${post.sources.map((source, index) => `<li><span class="blog-list-index">${String(index + 1).padStart(2, '0')}</span><a href="${escapeHtml(source.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(text(source.label))} ${arrow}</a></li>`).join('')}</ul><p>${copy('外部页面可能更新；平台规则、合同与当地法规应在 Campaign 启动前再次确认。', 'External pages can change. Recheck platform rules, contracts and local law before launch.')}</p></section>`;
      const toc = `<nav class="blog-toc" aria-label="${copy('文章目录', 'Article contents')}"><p>${copy('本文目录', 'IN THIS ARTICLE')}</p><a href="#answer">${copy('先给结论', 'The short answer')}</a>${post.sections.map(([heading], index) => `<a href="#section-${index + 1}">${escapeHtml(text(heading))}</a>`).join('')}${post.deepDive.map((section, index) => `<a href="#deep-dive-${index + 1}">${escapeHtml(text(section.heading))}</a>`).join('')}<a href="#evidence-table">${escapeHtml(text(post.table.title))}</a><a href="#interactive-tool">${escapeHtml(text(post.tool.title))}</a><a href="#sources">${copy('资料来源与延伸阅读', 'Sources')}</a></nav>`;
      main.innerHTML = `<article><div class="blog-article-hero"><a class="blog-back" href="${escapeHtml(listUrl())}">← ${copy('所有文章', 'All articles')}</a><p class="blog-kicker">QUICKKOL BLOG / ${topicName(post.topic)}</p><h1>${escapeHtml(text(post.title))}</h1><p class="blog-intro">${escapeHtml(text(post.summary))}</p><div class="blog-article-meta"><span><a href="/about/" rel="author">QuickKOL Strategy Team</a></span><time datetime="${post.date}">${date(post.date)}</time><span>${readTime(post)} ${copy('分钟阅读', 'min read')}</span></div></div><div class="blog-article-layout"><div class="blog-article-inner">${toc}<div class="blog-article-content"><img class="blog-article-cover" src="${coverUrl(post)}" alt="${escapeHtml(text(post.coverAlt))}" width="640" height="360" /><section class="blog-answer" id="answer"><p class="blog-answer-label">${copy('总结', 'THE SHORT ANSWER')}</p>${renderAnswer(post)}</section>${post.sections.map(([heading, body], index) => `<section id="section-${index + 1}"><h2>${escapeHtml(text(heading))}</h2>${linkedParagraphs(post, body)}</section>`).join('')}${renderDeepDive()}${renderTable(post)}${renderTool(post.tool)}<aside class="blog-product-note"><p class="blog-kicker">IN QUICKKOL</p><h2>${copy('把方法变成可执行的 Campaign', 'Turn the method into an executable campaign')}</h2><p>${copy('用 QuickKOL Agent 整理需求、发现达人、准备个性化外联，并把关键状态留在同一条工作流里。', 'Use QuickKOL Agent to structure requirements, discover creators, prepare personalized outreach and keep campaign decisions in one workflow.')}</p><a href="/#agent-team">${copy('体验 QuickKOL Agent', 'Try QuickKOL Agent')} ${arrow}</a></aside>${sourceList}<div class="blog-related"><p class="blog-kicker">${copy('继续阅读', 'KEEP READING')}</p>${blogPosts.filter((item) => item.slug !== post.slug).sort((a, b) => Number(b.topic === post.topic) - Number(a.topic === post.topic)).slice(0, 2).map((item, index) => `<a href="${escapeHtml(postUrl(item))}"><span class="blog-list-index">${String(index + 1).padStart(2, '0')}</span><span>${escapeHtml(text(item.title))} ${arrow}</span></a>`).join('')}</div></div></div></div></article>${cta()}`;
      document.querySelectorAll('[data-blog-tool]').forEach(updateBlogTool);
    } else {
      main.innerHTML = `<section class="blog-hero"><p class="blog-kicker">QUICKKOL / INSIGHTS</p><h1>THE QUICKKOL <span>BLOG.</span></h1><p class="blog-intro">${copy('给品牌和营销团队的达人营销实战指南：从发现与评估，到外联、执行和复盘，让每一个判断都有证据。', 'Practical creator marketing guides for brand and marketing teams—from discovery and evaluation to outreach, execution and review, with evidence behind every decision.')}</p></section><section class="blog-library" aria-label="${copy('文章库', 'Article library')}"><aside class="blog-sidebar"><label class="blog-search"><i class="ph ph-magnifying-glass" aria-hidden="true"></i><input type="search" data-blog-search placeholder="${copy('搜索文章', 'Search insights')}" aria-label="${copy('搜索 Blog 文章', 'Search blog articles')}" value="${escapeHtml(query)}" /></label><p class="blog-filter-title">${copy('探索主题', 'Explore topics')}</p><div class="blog-topics" role="group" aria-label="${copy('按主题筛选', 'Filter by topic')}">${[{key:'',label:['全部文章','All articles']}, ...blogTopics].map((item) => `<button class="blog-topic" data-blog-topic="${item.key}" aria-pressed="${topic === item.key}"><span>${text(item.label)}</span><span>${blogPosts.filter((post) => !item.key || post.topic === item.key).length}</span></button>`).join('')}</div><div class="blog-tags-panel"><p class="blog-filter-title">${copy('热门标签', 'Popular tags')}</p><div class="blog-tags" role="group" aria-label="${copy('按标签筛选', 'Filter by tag')}">${tags.map((item) => `<button class="blog-tag" data-blog-tag="${item}" aria-pressed="${tag === item}"><b>#</b>${escapeHtml(localizeText(item))} <small>${tagCounts.get(item)}</small></button>`).join('')}</div></div></aside><div class="blog-results"><h2 class="blog-count" data-blog-count role="status" aria-live="polite"></h2><div class="blog-grid" data-blog-grid></div><nav class="blog-pagination" data-blog-pagination aria-label="${copy('文章分页', 'Article pagination')}"></nav></div></section>${cta()}`;
      renderResults();
    }
    metadata();
  }

  function notify(message) {
    const toast = document.querySelector('[data-toast]');
    toast.textContent = message;
    toast.classList.add('is-visible');
    window.clearTimeout(notify.timer);
    notify.timer = window.setTimeout(() => toast.classList.remove('is-visible'), 3000);
  }

  function updateTheme() {
    const theme = document.documentElement.dataset.theme;
    document.querySelectorAll('[data-theme-value]').forEach((button) => {
      const active = button.dataset.themeValue === theme;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#111315' : '#ffffff';
  }
  function closeMenus() {
    document.querySelector('[data-language-menu]').hidden = true;
    document.querySelector('[data-language]').setAttribute('aria-expanded', 'false');
    document.querySelector('[data-mobile-nav]').classList.remove('is-open');
    document.querySelector('[data-menu]').setAttribute('aria-expanded', 'false');
    document.querySelector('[data-menu] i').className = 'ph ph-list';
  }

  document.addEventListener('input', (event) => {
    const tool = event.target.closest('[data-blog-tool]');
    if (tool) {
      updateBlogTool(tool);
      return;
    }
    if (!event.target.matches('[data-blog-search]')) return;
    query = event.target.value;
    page = 1;
    renderResults();
  });
  document.addEventListener('click', async (event) => {
    const topicButton = event.target.closest('[data-blog-topic]');
    const tagButton = event.target.closest('[data-blog-tag]');
    const pageButton = event.target.closest('[data-blog-page]');
    if (topicButton || tagButton || pageButton || event.target.closest('[data-blog-clear]')) {
      if (topicButton) { topic = topicButton.dataset.blogTopic; page = 1; }
      else if (tagButton) { tag = tag === tagButton.dataset.blogTag ? '' : tagButton.dataset.blogTag; page = 1; }
      else if (pageButton) page = Number(pageButton.dataset.blogPage);
      else { query = ''; topic = ''; tag = ''; page = 1; document.querySelector('[data-blog-search]').value = ''; }
      renderResults();
      if (pageButton) { document.querySelector('.blog-results').scrollIntoView({behavior: 'instant', block: 'start'}); document.querySelector('[data-blog-count]').setAttribute('tabindex', '-1'); document.querySelector('[data-blog-count]').focus({preventScroll: true}); }
    }
    const themeButton = event.target.closest('[data-theme-value]');
    if (themeButton) { document.documentElement.dataset.theme = themeButton.dataset.themeValue; window.localStorage.setItem('quickkol-blog-theme', themeButton.dataset.themeValue); updateTheme(); }
    const languageButton = event.target.closest('[data-language]');
    if (languageButton) { const menu = document.querySelector('[data-language-menu]'); menu.hidden = !menu.hidden; languageButton.setAttribute('aria-expanded', String(!menu.hidden)); }
    else if (!event.target.closest('[data-language-switcher]')) { document.querySelector('[data-language-menu]').hidden = true; document.querySelector('[data-language]').setAttribute('aria-expanded', 'false'); }
    const option = event.target.closest('[data-language-option]');
    if (option && !option.disabled) {
      await loadLocale(option.dataset.languageOption);
      locale = option.dataset.languageOption;
      window.localStorage.setItem('quickkol-language', locale);
      setPageLocale(locale);
      setPageLocale(locale);
      render();
      applyTranslations();
      closeMenus();
    }
    const menuButton = event.target.closest('[data-menu]');
    if (menuButton) { const open = document.querySelector('[data-mobile-nav]').classList.toggle('is-open'); menuButton.setAttribute('aria-expanded', String(open)); menuButton.querySelector('i').className = open ? 'ph ph-x' : 'ph ph-list'; }
    if (event.target.closest('[data-footer-tool]')) notify(copy('即将支持', 'Coming soon'));
  });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenus(); });
  window.addEventListener('scroll', () => {
    document.querySelector('[data-header]').classList.toggle('is-scrolled', window.scrollY > 24);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    document.querySelector('[data-scroll-progress]').style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  }, { passive: true });
  initI18n(locale);
  updateTheme();
  render();
  applyTranslations();
}
