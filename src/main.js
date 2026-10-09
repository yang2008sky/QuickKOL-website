import "./styles.css";
import { renderCreatorShowcase, mountCreatorShowcase } from "./creator-showcase.js";
import { createCampaignWorkflow } from "./campaign-workflow.js";
import { renderCapabilityDemo, mountCapabilityDemo, capabilityPlaybackDuration } from "./capability-demos.js";
import { initI18n, setPageLocale, languages, resolveLocale, localizeText, isLocaleAvailable, loadLocale } from "./i18n.js";
import "@phosphor-icons/web/regular";

const savedTheme = window.localStorage.getItem("quickkol-theme");
document.documentElement.dataset.theme = savedTheme === "dark" ? "dark" : "light";

const savedLanguage = window.localStorage.getItem("quickkol-language");
let currentLanguage = resolveLocale(savedLanguage);
await loadLocale(currentLanguage);
document.documentElement.lang = currentLanguage;

const iconNames = {
  keyboard_arrow_down: "ph-caret-down",
  arrow_forward: "ph-arrow-right",
  arrow_upward: "ph-arrow-up",
  menu: "ph-list",
  close: "ph-x",
  play_circle: "ph-play-circle",
  description: "ph-file-text",
  attach_file: "ph-paperclip",
  search: "ph-magnifying-glass",
  tune: "ph-faders",
  graphic_eq: "ph-waveform",
  check: "ph-check",
  progress_activity: "ph-spinner-gap",
  lightbulb: "ph-lightbulb",
  travel_explore: "ph-compass",
  person_search: "ph-user-focus",
  forward_to_inbox: "ph-envelope-simple",
  edit_note: "ph-note-pencil",
  target: "ph-crosshair",
  filter_alt: "ph-funnel",
  public: "ph-globe",
  calendar_month: "ph-calendar-blank",
  auto_awesome: "ph-sparkle",
  send: "ph-paper-plane-tilt",
  add: "ph-plus",
  sun: "ph-sun",
  moon: "ph-moon",
  chart_line_up: "ph-chart-line-up",
  clipboard: "ph-clipboard-text",
  quotes: "ph-quotes",
  robot: "ph-robot",
  users_three: "ph-users-three",
  external_link: "ph-arrow-square-out",
  microphone: "ph-microphone",
  library: "ph-books",
  wallet: "ph-wallet",
  rocket_launch: "ph-rocket-launch",
  arrow_outward: "ph-arrow-up-right",
};

const icon = (name, className = "") =>
  `<i class="ph ${iconNames[name]} ${className}" aria-hidden="true"></i>`;

function setIcon(element, name) {
  element.className = `ph ${iconNames[name]}`;
}

const campaignPromptGroups = [
  { title: "策划 Campaign", icon: "target", prompts: [
    { title: "美国环保水杯上市 · 品牌声量", prompt: "我们准备在美国推出一款环保水杯，目标是提升品牌声量，总预算 $20,000–$30,000，周期 21 天。请策划 Instagram 和 TikTok 达人 Campaign，与 20 位生活方式、户外或环保达人合作，面向 18–34 岁受众。请给出达人筛选标准、内容创意、预算分配、发布排期和个性化外联草稿。", goal: "awareness", filters: { platforms: ["Instagram", "TikTok"], countries: ["美国"], budget: [20000, 30000], creatorCount: [20] } },
    { title: "英国护肤精华种草 · 种草互动", prompt: "我们要为一款敏感肌护肤精华在英国做种草推广，目标是提升产品好感与有效互动，总预算 $10,000–$15,000，周期 30 天。请策划 Instagram 和 TikTok Campaign，寻找 15 位粉丝量 1万–10万、擅长真实试用分享的美妆护肤达人，安排产品寄送、使用体验内容与互动话题，并给出执行排期和合作邀请草稿。", goal: "engagement", filters: { platforms: ["Instagram", "TikTok"], countries: ["英国"], followers: [10000, 100000], budget: [10000, 15000], creatorCount: [15] } },
    { title: "美国降噪耳机测评 · 产品测试", prompt: "想在美国找 10–20 位科技或音频达人，测评我们的无线降噪耳机。\n平台选 YouTube（50%）、Instagram（25%）和 TikTok（25%），总预算 $15,000–$20,000。\n重点测试降噪、音质、续航和佩戴感，帮我规划达人筛选、合作和反馈收集。", goal: "testing", filters: { platforms: ["YouTube", "Instagram", "TikTok"], countries: ["美国"], budget: [15000, 20000] } },
  ] },
  { title: "寻找达人", icon: "person_search", prompts: [
    { title: "美国 TikTok · 家居生活达人", prompt: "请在 TikTok 上寻找 20 位美国的家居生活与收纳达人，用于推广我们的家居收纳用品，目标是销售转化。要求粉丝量 1万–10万、平均观看量 5,000 以上，受众以美国 25–44 岁消费者为主。优先考虑有产品演示与带货经验的达人，整理候选名单并说明匹配理由；带货数据缺失时请明确标注。", goal: "conversion", filters: { platforms: ["TikTok"], countries: ["美国"], followers: [10000, 100000], views: [5000, ""], creatorCount: [20] } },
    { title: "英国 Instagram · 美妆护肤达人", prompt: "请在 Instagram 上寻找 15 位英国的美妆护肤达人，为敏感肌护肤产品做种草互动。要求粉丝量 1万–10万，擅长 Reels 试用分享、护肤教程与真实体验内容，核心受众为英国 18–34 岁消费者。优先考虑评论讨论活跃、内容与产品契合的达人，整理候选名单及推荐理由。", goal: "engagement", filters: { platforms: ["Instagram"], countries: ["英国"], followers: [10000, 100000], creatorCount: [15] } },
    { title: "德国 YouTube · 科技测评达人", prompt: "请在 YouTube 上寻找 10 位德国的科技测评达人，合作测试我们的无线降噪耳机。要求以德语发布内容，粉丝量 5万–50万、平均观看量 2万以上，有音频设备深度测评经验。优先考虑测试方法清晰、愿意提供真实反馈的达人，整理候选名单、相关测评内容与合作建议。", goal: "testing", filters: { platforms: ["YouTube"], countries: ["德国"], followers: [50000, 500000], views: [20000, ""], creatorCount: [10] } },
  ] },
];

const campaignDemo = campaignPromptGroups[0].prompts[2];

const campaignSceneTemplates = [
  { title: "新品 Campaign", description: "规划达人、预算与发布节奏", icon: "rocket_launch", group: 0, prompt: 0 },
  { title: "垂类达人发现", description: "快速生成高匹配候选名单", icon: "person_search", group: 1, prompt: 0 },
  { title: "个性化外联", description: "从 Brief 生成合作邀请", icon: "forward_to_inbox", group: 0, prompt: 1 },
];

const campaignGoals = [
  { key: "awareness", label: "品牌声量", criteria: "受众覆盖、平均观看量与品牌调性", creatorType: "覆盖广、观看稳定的达人" },
  { key: "engagement", label: "种草互动", criteria: "内容契合、有效互动与社区信任", creatorType: "内容契合、互动活跃的达人" },
  { key: "conversion", label: "销售转化", criteria: "历史带货表现、购买意向与受众匹配", creatorType: "带货表现好的达人" },
  { key: "testing", label: "产品测试", criteria: "测评专业度、试用深度与反馈质量", creatorType: "擅长测评、反馈真实的达人" },
];

const campaignFilters = [
  { key: "platforms", label: "平台", icon: "play_circle", options: ["Instagram", "TikTok", "YouTube"] },
  { key: "countries", label: "国家", icon: "public", options: ["美国", "英国", "德国", "法国", "加拿大", "澳大利亚", "日本", "新加坡"] },
  { key: "followers", label: "粉丝量", icon: "users_three" },
  { key: "views", label: "平均观看量", icon: "chart_line_up" },
  { key: "budget", label: "预算", icon: "wallet" },
  { key: "creatorCount", label: "合作达人", icon: "person_search", single: true },
];

const campaignKnowledge = [
  { title: "EcoSip · 环保生活品牌", description: "品牌 · 定位、语气与受众" },
  { title: "CalmSkin · 敏感肌精华", description: "产品 · 卖点、成分与场景" },
  { title: "SoundLoop · 美国新品测评", description: "Campaign · 目标、要求与计划" },
];

function renderCampaignFilter(filter) {
  return `<details class="agent-composer-menu" name="campaign-options" data-campaign-filter="${filter.key}">
    <summary>${icon(filter.icon)}<span data-filter-label>${filter.label}</span>${icon("keyboard_arrow_down")}</summary>
    <div class="agent-composer-popover">
      <b>${filter.options ? `选择${filter.label}` : filter.single ? "想合作的达人数量" : `${filter.label}区间${filter.key === "budget" ? "（美元）" : ""}`}</b>
      ${filter.options ? `<div class="agent-composer-options">${filter.options.map((option) => `<label><input type="checkbox" value="${option}" />${option}</label>`).join("")}</div><small>可多选，留空则不限</small>` : `<form data-campaign-range="${filter.key}">
        <div class="agent-range-inputs">${filter.single ? `<label>达人数量<input type="number" min="1" step="1" placeholder="例如 20" aria-label="合作达人数量" /></label>` : `<label>最小值<input type="number" min="0" step="${filter.key === "budget" ? "0.01" : "1"}" placeholder="不限" aria-label="${filter.label}最小值" /></label><span>–</span><label>最大值<input type="number" min="0" step="${filter.key === "budget" ? "0.01" : "1"}" placeholder="不限" aria-label="${filter.label}最大值" /></label>`}</div>
        <p class="agent-range-error" role="alert" hidden></p>
        <div class="agent-range-actions"><button type="button" data-range-clear>重置</button><button type="submit">${filter.single ? "确认数量" : "应用区间"}</button></div>
      </form>`}
    </div>
  </details>`;
}

const capabilityTabs = [
  { key: "discover", label: "达人发现", icon: "person_search" },
  { key: "analytics", label: "达人分析", icon: "chart_line_up" },
  { key: "outreach", label: "智能外联", icon: "forward_to_inbox" },
  { key: "agent", label: "AI Agent", icon: "robot" },
];

const capabilityCopy = {
  discover: {
    eyebrow: "CREATOR DISCOVERY",
    title: "更快找到真正合适的达人",
    description: "用自然语言描述目标，跨平台搜索达人，并结合内容契合度、受众画像和互动质量快速排序。",
    points: ["从关键词或相似达人开始搜索", "自动筛选，AI 判断内容与受众契合度", "按综合匹配度排序，并解释推荐理由"],
  },
  analytics: {
    eyebrow: "CREATOR INTELLIGENCE",
    title: "把内容与受众数据变成判断",
    description: "不只看粉丝量。把内容关键词、受众国家、年龄与性别对照 Campaign 目标，判断这位达人是否真正适合你的品牌。",
    points: ["内容主题与品牌关键词匹配", "国家、年龄与性别受众画像对照", "粉丝量、平均观看量与互动率分析"],
  },
  outreach: {
    eyebrow: "PERSONALIZED OUTREACH",
    title: "让每一封触达都更像真人",
    description: "基于达人的近期内容生成个性化 Pitch，并在发送、跟进与回复节点保留人工确认。",
    points: ["结合真实内容生成邮件", "批量发送但保持个性化", "自动跟进与回复归档"],
  },
  agent: {
    eyebrow: "QUICKKOL AI AGENT",
    title: "把重复工作交给 Agent 推进",
    description: "从理解 Brief 到搜索、判断、建联和跟进，Agent 按你设定的边界自动衔接执行，无需逐步确认。",
    points: ["自动拆解 Campaign 目标", "多个 Agent 协同执行", "可随时暂停、接管或调整"],
  },
};

const faqItems = [
  {
    question: "QuickKOL 只是一个达人搜索工具吗？",
    answer: "不只是搜索。QuickKOL 从理解 Campaign Brief 开始，继续协助你完成达人发现、数据判断、候选名单、个性化外联和进度跟踪。",
  },
  {
    question: "怎么判断一位达人是否适合当前品牌？",
    answer: "Agent 会结合内容主题、受众画像、互动质量与历史表现等信号综合排序，并给出可解释的推荐理由，方便团队快速复核。",
  },
  {
    question: "QuickKOL 目前覆盖哪些内容平台？",
    answer: "当前核心覆盖 YouTube、TikTok、Instagram 和 X（Twitter）。不同平台的可用数据维度会有差异，具体以产品内显示为准。",
  },
  {
    question: "AI Agent 会未经确认就代表品牌发送邮件吗？",
    answer: "不会越过你设定的边界。你可以在手动、AI 辅助和全自动模式之间选择，名单、外联和其他关键节点也可保留人工确认。",
  },
  {
    question: "达人数据从哪里来，会更新吗？",
    answer: "QuickKOL 根据可用的公开账号、内容与互动信号构建达人档案，并持续更新关键指标。更新频率与数据范围会受平台可用性影响。",
  },
  {
    question: "可以先小范围试用，再扩大自动化吗？",
    answer: "可以。你可以先从一份 Brief、一次搜索或一个候选名单开始，等筛选标准与工作节奏稳定后，再逐步将触达和跟进交给 Agent。",
  },
];

const testimonials = [
  { quote: "过去要在表格里来回核对几天的达人名单，现在一场会就能完成第一轮判断。", name: "Olivia Brooks", role: "新消费品牌 · 增长负责人", metric: "名单准备时间 -72%", avatar: "/assets/testimonials/olivia-brooks.jpg", tone: "sky" },
  { quote: "推荐结果不只给分数，也解释内容与受众为什么匹配，团队内部更容易达成共识。", name: "James Walker", role: "出海品牌 · Influencer Lead", metric: "审批轮次 -2", avatar: "/assets/testimonials/james-walker.jpg", tone: "peach" },
  { quote: "批量外联终于不用牺牲个性化。每封邮件都能看出 Agent 真的读过达人的内容。", name: "Camila Santos", role: "创作者机构 · Client Partner", metric: "回复率 +34%", avatar: "/assets/testimonials/camila-santos.jpg", tone: "mint" },
  { quote: "从候选、报价到发布状态都在同一个视图里，新同事接手项目也不用翻聊天记录。", name: "Arjun Mehta", role: "跨境电商 · Campaign Manager", metric: "交接时间 -60%", avatar: "/assets/testimonials/arjun-mehta.jpg", tone: "lavender" },
  { quote: "我们可以先从 AI 辅助开始，再逐步开放自动执行，既提高效率也保留关键审批。", name: "Yuki Tanaka", role: "生活方式品牌 · Marketing Director", metric: "重复任务 -48%", avatar: "/assets/testimonials/yuki-tanaka.jpg", tone: "peach" },
  { quote: "搜索、分析和外联终于不是三个割裂的工具，Campaign 的每一步都有上下文。", name: "Felix Weber", role: "独立站团队 · Co-founder", metric: "工具切换 -3", avatar: "/assets/testimonials/felix-weber.jpg", tone: "sky" },
];

const renderTestimonialCards = (hidden = false) => `<div class="testimonial-group" ${hidden ? 'aria-hidden="true"' : ""}>${testimonials.map((item) => `
  <article class="testimonial-card testimonial-${item.tone}" tabindex="${hidden ? -1 : 0}">
    <div class="testimonial-card-top"><b class="testimonial-context">${item.role.split(" · ")[0]}</b><span class="testimonial-metric">${item.metric}</span></div>
    <blockquote>“${item.quote}”</blockquote>
    <div class="testimonial-person"><img class="testimonial-avatar" src="${item.avatar}" alt="" loading="lazy" /><div><b>${item.name}</b><small>${item.role}</small></div></div>
  </article>
`).join("")}</div>`;

const app = document.querySelector("#app");

const footerAiQuestion = "QuickKOL is an AI creator marketing platform for brand and marketing teams. It supports creator discovery, audience and content analytics, campaign management, and personalized outreach while keeping human approval at key steps. Explain the problems QuickKOL solves, which teams it suits, and what a team should prepare before getting started.";
const encodedFooterAiQuestion = encodeURIComponent(footerAiQuestion);
const footerAiLinks = {
  chatgpt: `https://chatgpt.com/?q=${encodedFooterAiQuestion}`,
  claude: `https://claude.ai/new?q=${encodedFooterAiQuestion}`,
  perplexity: `https://www.perplexity.ai/search?q=${encodedFooterAiQuestion}`,
  gemini: `https://gemini.google.com/app?prompt=${encodedFooterAiQuestion}`,
};

const renderLanguageOptions = () => languages.map((language) => `
  <button class="language-option ${language.code === currentLanguage ? "is-active" : ""}" type="button" role="option" data-language-option="${language.code}" aria-selected="${language.code === currentLanguage}" ${isLocaleAvailable(language.code) ? "" : "disabled"}>
    <span data-i18n-ignore>${language.label}</span>
  </button>
`).join("");

const isBlogPage = /^\/blog(?:\/|$)/.test(window.location.pathname);
const isPricingPage = /^\/pricing\/?$/.test(window.location.pathname);
const isAboutPage = /^\/about\/?$/.test(window.location.pathname);
const isContactPage = /^\/contact\/?$/.test(window.location.pathname);
const isFaqPage = /^\/faq\/?$/.test(window.location.pathname);
const isCampaignCalculatorPage = /^\/tools\/influencer-campaign-cost-calculator\/?$/.test(window.location.pathname);
const isRateCalculatorPage = /^\/tools\/creator-rate-calculator\/?$/.test(window.location.pathname);
const isInvoiceGeneratorPage = /^\/tools\/invoice-generator\/?$/.test(window.location.pathname);
const legalPageType = window.location.pathname === "/terms.html" ? "terms" : window.location.pathname === "/privacy.html" ? "privacy" : null;
const siteMarkup = `
  <a class="skip-link" href="#main">跳到主要内容</a>
  <div class="scroll-progress" aria-hidden="true"><span data-scroll-progress></span></div>
  <header class="site-header" data-header>
    <a class="brand" href="#top" aria-label="QuickKOL 首页">
      <img src="/assets/quickkol-logo.svg" alt="" />
      <span>Quick<span>KOL</span></span>
    </a>
    <nav class="desktop-nav" aria-label="主要导航">
      <a href="/">首页</a>
      <a href="/#tools">Tools</a>
      <a href="https://chromewebstore.google.com/detail/quickkol/pibnaegnljjogommepodcjdgmaobpeag" target="_blank" rel="noopener noreferrer">Chrome 扩展</a>
      <a href="/pricing/">定价</a>
    </nav>
    <div class="header-actions">
      <div class="theme-toggle" role="group" aria-label="外观模式">
        <button type="button" data-theme-value="light" aria-label="切换为浅色模式">${icon("sun")}</button>
        <button type="button" data-theme-value="dark" aria-label="切换为深色模式">${icon("moon")}</button>
      </div>
      <div class="language-switcher" data-language-switcher>
        <button class="language-button" type="button" data-language aria-haspopup="listbox" aria-expanded="false">
          <span class="language-label-full" data-language-label data-i18n-ignore>${languages.find(({ code }) => code === currentLanguage).label}</span>
          <span class="language-label-short" data-language-short-label data-i18n-ignore>${languages.find(({ code }) => code === currentLanguage).shortLabel}</span>
          ${icon("keyboard_arrow_down")}
        </button>
        <div class="language-menu" data-language-menu role="listbox" aria-label="选择语言" hidden>
          ${renderLanguageOptions()}
        </div>
      </div>
      <button class="button button-primary button-small" type="button" data-start>进入工作台 ${icon("arrow_forward")}</button>
      <button class="icon-button mobile-menu-button" type="button" data-menu aria-expanded="false" aria-label="打开菜单">${icon("menu")}</button>
    </div>
    <nav class="mobile-nav" data-mobile-nav aria-label="移动端导航">
    <a href="/">首页</a><a href="/#tools">Tools</a><a href="https://chromewebstore.google.com/detail/quickkol/pibnaegnljjogommepodcjdgmaobpeag" target="_blank" rel="noopener noreferrer">Chrome 扩展</a><a href="/pricing/">定价</a>
      <div class="mobile-language-list" role="listbox" aria-label="选择语言">${renderLanguageOptions()}</div>
    </nav>
  </header>

  <main id="main">
    <section class="hero" id="top">
      <div class="hero-backdrop" aria-hidden="true"></div>
      <div class="hero-copy hero-enter">
        <h1>找对达人，<span>更快触达</span></h1>
        <p class="hero-description">从一份 Brief 到 Campaign 计划、达人候选名单和个性化外联，由 QuickKOL 协助推进。</p>
        <div class="hero-actions">
          <button class="button button-primary" type="button" data-start>免费开始 ${icon("arrow_forward")}</button>
          <a class="button chrome-extension-button" href="https://chromewebstore.google.com/detail/quickkol/pibnaegnljjogommepodcjdgmaobpeag" target="_blank" rel="noopener noreferrer" aria-label="添加 QuickKOL 到 Chrome（新窗口打开）">
            <span class="chrome-icon"><img src="/assets/chrome-logo.png" alt="" /></span>
            <span>添加到 Chrome</span>
          </a>
        </div>
      </div>

      <section class="capability-showcase" id="capabilities" aria-label="QuickKOL 功能展示" data-reveal>
        <div class="capability-tabs" role="tablist" aria-label="QuickKOL 功能展示">
          ${capabilityTabs.map((tab, index) => `
            <button class="capability-tab ${index === 0 ? "is-active" : ""}" type="button" role="tab" data-capability-tab="${tab.key}" aria-selected="${index === 0}" aria-controls="capability-panel">
              ${icon(tab.icon)}<span>${tab.label}</span>
            </button>
          `).join("")}
        </div>
        <div class="capability-panel" id="capability-panel" role="tabpanel" aria-live="polite" data-capability-panel></div>
      </section>

      <section class="trust-block" id="extension" aria-label="QuickKOL 核心能力" data-reveal>
        <div class="trust-item">
          <strong>50M+</strong>
          <span>可检索达人档案</span>
        </div>
        <div class="trust-item trust-platforms">
          <div><strong>4 个</strong><span>主流内容平台</span></div>
          <ul aria-label="支持的平台">
            <li aria-label="YouTube"><svg width="22" height="18" viewBox="0 0 24 18" aria-hidden="true"><rect y="1" width="24" height="16" rx="4" fill="#ff0033" /><path d="M10 5.5 16 9 10 12.5Z" fill="#fff" /></svg></li>
            <li aria-label="TikTok"><i class="ph ph-tiktok-logo" aria-hidden="true"></i></li>
            <li aria-label="Instagram"><img src="/assets/instagram-logo.png" alt="" /></li>
            <li aria-label="X (Twitter)"><span class="platform-x">X</span></li>
          </ul>
        </div>
        <div class="trust-item">
          <strong>1 分钟</strong>
          <span>找到适合你品牌的达人</span>
        </div>
      </section>
    </section>

    ${renderCreatorShowcase()}

    <section class="agent-team-demo" id="agent-team" aria-labelledby="agent-team-title" data-reveal>
      <div class="agent-team-heading">
        <p class="eyebrow">QUICKKOL AI AGENT</p>
        <h2 id="agent-team-title">Your Campaign <span>AI Agent</span></h2>
        <p>从市场洞察、达人发现到个性化触达，让不同角色的 Agent 在同一个 Campaign 里协同工作。</p>
      </div>

      <div class="wf-preview-tabs" data-campaign-flow-tabs role="tablist" aria-label="交互阶段预览"></div>
      <div id="campaign-composer-panel" data-campaign-composer role="tabpanel" aria-labelledby="wf-tab-brief">
      <div class="agent-team-prompt">
        <div class="agent-team-prompt-head">
          <div class="agent-composer-filters" role="group" aria-label="达人筛选条件">${campaignFilters.map(renderCampaignFilter).join("")}</div>
          <small>${icon("auto_awesome")} AI Agent</small>
        </div>
        <label class="sr-only" for="agent-team-brief">AI Agent Campaign brief</label>
        <textarea id="agent-team-brief" placeholder="描述你的 Campaign，或选择下方快速 Prompt 开始体验…"></textarea>
        <div class="agent-context-files" data-context-files aria-label="已添加的上下文文档" hidden></div>
        <div class="agent-team-prompt-footer">
          <div class="agent-composer-context">
            <button class="agent-composer-upload" type="button" data-context-upload aria-label="上传上下文文档" title="添加上下文文档">${icon("add")}</button>
            <details class="agent-composer-menu agent-knowledge-menu" name="campaign-options" data-campaign-knowledge>
              <summary>${icon("library")}<span data-knowledge-label>知识库</span>${icon("keyboard_arrow_down")}</summary>
              <div class="agent-composer-popover">
                <b>添加相关知识库</b><small>示例知识库 · 可多选</small>
                <div class="agent-composer-options">${campaignKnowledge.map((item, index) => `<label><input type="checkbox" value="${index}" /><span><strong>${item.title}</strong><small>${item.description}</small></span></label>`).join("")}</div>
                <button class="agent-knowledge-done" type="button" data-knowledge-done>确认添加</button>
              </div>
            </details>
            <details class="agent-composer-menu agent-goal-menu" name="campaign-options" data-campaign-goal>
              <summary>${icon("target")}<span data-goal-label>目标 Goal</span>${icon("keyboard_arrow_down")}</summary>
              <div class="agent-composer-popover">
                <b>选择 Campaign 目标</b><small>单选 · 决定筛选重点</small>
                <div class="agent-composer-options" role="radiogroup" aria-label="Campaign 主要目标">${campaignGoals.map((goal) => `<label><input type="radio" name="campaign-goal" value="${goal.key}" /><strong>${goal.label}</strong></label>`).join("")}</div>
                <button class="agent-goal-clear" type="button" data-goal-clear>清除目标</button>
              </div>
            </details>
            <span class="agent-goal-hint" data-goal-hint role="status" hidden></span>
            <input class="sr-only" id="agent-context-upload" type="file" accept=".pdf,.doc,.docx,.txt,.md,.csv,.ppt,.pptx,.xls,.xlsx" multiple tabindex="-1" aria-label="选择上下文文档" />
          </div>
          <div class="agent-composer-actions">
            <button class="agent-composer-voice" type="button" data-campaign-voice aria-label="语音输入" aria-pressed="false" title="语音输入">${icon("microphone")}</button>
            <button class="agent-team-launch" type="button" data-agent-team-launch aria-label="确认并启动 AI Agent 团队演示" title="发送 Campaign" disabled>${icon("arrow_upward")}</button>
          </div>
        </div>
      </div>
      <p class="agent-composer-status" data-agent-team-status role="status"></p>
      <div class="agent-prompt-examples" role="group" aria-labelledby="agent-examples-title">
        <span class="agent-examples-label" id="agent-examples-title">快速体验</span>
        ${campaignPromptGroups.map((group, index) => `<button type="button" data-prompt-group="${index}" aria-expanded="false" aria-controls="agent-prompt-panel"><span class="agent-example-icon">${icon(group.icon)}</span><span>${group.title}</span></button>`).join("")}
      </div>
      <div class="agent-scene-templates" role="group" aria-label="快速场景模板">
        ${campaignSceneTemplates.map((scene) => `<button type="button" data-scene-template data-scene-group="${scene.group}" data-scene-prompt="${scene.prompt}" aria-pressed="false"><span class="agent-scene-template-title"><span>${icon(scene.icon)}${scene.title}</span>${icon("arrow_outward")}</span><small>${scene.description}</small></button>`).join("")}
      </div>
      <div class="agent-prompt-panel" id="agent-prompt-panel" role="region" aria-labelledby="agent-prompt-panel-title" hidden>
        <div class="agent-prompt-panel-head"><b id="agent-prompt-panel-title"></b><button type="button" data-prompt-close aria-label="关闭快速 Prompt">${icon("close")}</button></div>
        <div data-prompt-options></div>
      </div>
      </div>
      <section class="campaign-workflow" id="campaign-workflow-panel" data-campaign-workflow role="tabpanel" aria-label="Campaign 方案与执行工作台" hidden></section>
    </section>

    <section class="testimonials-section" id="testimonials" aria-labelledby="testimonials-title" data-reveal>
      <div class="testimonials-heading">
        <p class="eyebrow">PROOF FROM THE FIELD</p>
        <h2 id="testimonials-title">让团队把时间留给更重要的判断</h2>
        <p>来自品牌、机构与达人营销团队的使用场景</p>
      </div>
      <div class="testimonial-viewport" aria-label="客户评价，鼠标悬停或键盘聚焦时暂停滚动">
        <div class="testimonial-track">
          ${renderTestimonialCards()}
          ${renderTestimonialCards(true)}
        </div>
      </div>
    </section>

    <section class="faq-section" id="faq" aria-labelledby="faq-title">
      <div class="faq-intro" data-reveal>
        <p class="eyebrow">BEFORE YOU START</p>
        <h2 id="faq-title"><span>关于 QuickKOL，</span><span>你可能想知道</span></h2>
        <p>从数据范围到 Agent 的执行边界，先把最常见的问题讲清楚。</p>
        <a href="/contact/">还有问题？和我们聊聊 ${icon("arrow_forward")}</a>
      </div>
      <div class="faq-list" data-reveal>
        ${faqItems.map((item, index) => `
          <article class="faq-item" data-faq-item>
            <h3>
              <button class="faq-question" type="button" data-faq-trigger aria-expanded="false" aria-controls="faq-answer-${index}">
                <b>${item.question}</b>
                <i aria-hidden="true">${icon("add")}</i>
              </button>
            </h3>
            <div class="faq-answer" id="faq-answer-${index}" data-faq-answer aria-hidden="true">
              <div><p>${item.answer}</p></div>
            </div>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="final-cta" id="get-started" aria-labelledby="final-cta-title" data-reveal>
      <div class="final-cta-content">
        <p class="eyebrow">${icon("auto_awesome")} YOUR NEXT CREATOR CAMPAIGN</p>
        <h2 id="final-cta-title">把下一份 Brief，<br>交给 QuickKOL</h2>
        <p class="final-cta-description">描述你的目标，让 Agent 帮你规划、寻找达人并准备个性化触达。</p>
        <div class="final-cta-actions">
          <button class="button final-cta-primary" type="button" data-cta-start>免费开始 ${icon("arrow_forward")}</button>
          <a class="button final-cta-secondary" href="#agent-team">${icon("play_circle")} 先体验 Agent Demo</a>
        </div>
      </div>
    </section>
  </main>

  <footer class="site-footer" data-reveal>
    <div class="footer-main">
      <div class="footer-brand-block">
        <a class="brand" href="#top" aria-label="QuickKOL 首页"><img src="/assets/quickkol-logo.svg" alt="" /><span>Quick<span>KOL</span></span></a>
        <p>用 AI 连接品牌与合适的创作者，<br>将达人发现、数据分析与个性化触达，<br>串成一条可控的营销工作流。</p>
        <div class="footer-contact-row">
          <div class="footer-socials" aria-label="社交媒体">
            <span class="footer-social-icon" role="img" aria-label="X"><img src="/assets/ai-logos/x.svg" alt="" /></span>
            <span class="footer-social-icon" role="img" aria-label="LinkedIn"><img src="/assets/ai-logos/linkedin.svg" alt="" /></span>
            <span class="footer-social-icon" role="img" aria-label="WhatsApp"><img src="/assets/ai-logos/whatsapp.svg" alt="" /></span>
          </div>
          <a class="footer-contact" href="mailto:support@quickkol.com">support@quickkol.com</a>
        </div>
      </div>
      <nav class="footer-column" aria-label="公司导航">
        <span>公司</span>
        <a href="#top">首页</a>
        <a href="/about/">关于 QuickKOL</a>
        <a href="/pricing/">定价</a>
        <a href="/blog/">Blog</a>
        <a href="/contact/">联系我们</a>
      </nav>
      <nav class="footer-column" aria-label="产品导航">
        <span>产品</span>
        <a href="#capabilities" data-footer-capability="discover">达人发现</a>
        <a href="#capabilities" data-footer-capability="analytics">数据分析</a>
        <a href="#capabilities" data-footer-capability="outreach">智能外联</a>
        <a href="#agent-team">AI Agent</a>
        <a href="https://chromewebstore.google.com/detail/quickkol/pibnaegnljjogommepodcjdgmaobpeag" target="_blank" rel="noopener noreferrer">Extension ${icon("external_link")}</a>
      </nav>
      <nav class="footer-column" id="tools" aria-label="工具导航">
        <span>Tools</span>
        <a href="/tools/creator-rate-calculator/">合作价格计算器</a>
        <a href="/tools/influencer-campaign-cost-calculator/">Campaign 预算计算器</a>
        <a href="/tools/invoice-generator/" data-i18n-ignore>Invoice generator</a>
        <button type="button" data-footer-tool title="即将支持">达人报价查询</button>
      </nav>
      <nav class="footer-column" aria-label="法律导航">
        <span>法律</span>
        <a href="/faq/">常见问题</a>
        <a href="/terms.html">服务条款</a>
        <a href="/privacy.html">隐私政策</a>
      </nav>
      <div class="footer-utility-row">
        <div class="footer-ask-ai">
          <p>向 AI 了解 QuickKOL</p>
          <div class="footer-ai-links" aria-label="选择 AI 对话工具">
            <a href="${footerAiLinks.chatgpt}" target="_blank" rel="noopener noreferrer" data-footer-ai aria-label="在 ChatGPT 中询问 QuickKOL（新窗口）" title="ChatGPT"><img src="/assets/ai-logos/chatgpt.svg" alt="" aria-hidden="true" /></a>
            <a href="${footerAiLinks.claude}" target="_blank" rel="noopener noreferrer" data-footer-ai aria-label="在 Claude 中询问 QuickKOL（新窗口）" title="Claude"><img src="/assets/ai-logos/claude.svg" alt="" aria-hidden="true" /></a>
            <a href="${footerAiLinks.perplexity}" target="_blank" rel="noopener noreferrer" data-footer-ai aria-label="在 Perplexity 中询问 QuickKOL（新窗口）" title="Perplexity"><img src="/assets/ai-logos/perplexity.svg" alt="" aria-hidden="true" /></a>
            <a href="${footerAiLinks.gemini}" target="_blank" rel="noopener noreferrer" data-footer-ai aria-label="在 Gemini 中询问 QuickKOL（新窗口）" title="Gemini"><img src="/assets/ai-logos/gemini.svg" alt="" aria-hidden="true" /></a>
          </div>
        </div>
        <a class="footer-back-to-top" href="#" aria-label="返回顶部" title="返回顶部">${icon("arrow_upward")}</a>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2026 QuickKOL. All rights reserved.</p>
      <p>AI for your next creator campaign.</p>
    </div>
  </footer>
  <div class="toast" data-toast role="status" aria-live="polite"></div>
`;

app.innerHTML = isBlogPage || isPricingPage || isAboutPage || isContactPage || isFaqPage || isRateCalculatorPage || isCampaignCalculatorPage || isInvoiceGeneratorPage || legalPageType ? siteMarkup.replace(/<main id="main">[\s\S]*?<\/main>/, '<main id="main"></main>') : siteMarkup;

window.addEventListener("quickkol:locale", () => {
  for (const link of document.querySelectorAll("[data-footer-ai]")) {
    const url = new URL(link.href);
    url.searchParams.set(url.searchParams.has("prompt") ? "prompt" : "q", localizeText(footerAiQuestion));
    link.href = url.href;
  }
});

if (isInvoiceGeneratorPage) {
  const { mountInvoiceGenerator } = await import("./invoice-generator.js");
  mountInvoiceGenerator(currentLanguage);
} else if (isCampaignCalculatorPage) {
  const { mountCampaignCostCalculator } = await import("./campaign-cost-calculator.js");
  mountCampaignCostCalculator(currentLanguage);
} else if (isRateCalculatorPage) {
  const { mountCreatorRateCalculator } = await import("./creator-rate-calculator.js");
  mountCreatorRateCalculator(currentLanguage);
} else if (legalPageType) {
  const { mountLegal } = await import("./legal.js");
  mountLegal(currentLanguage, legalPageType);
} else if (isFaqPage) {
  const { mountFaq } = await import("./faq.js");
  mountFaq(currentLanguage);
} else if (isContactPage) {
  const { mountContact } = await import("./contact.js");
  mountContact(currentLanguage);
} else if (isAboutPage) {
  const { mountAbout } = await import("./about.js");
  mountAbout(currentLanguage);
} else if (isPricingPage) {
  const { mountPricing } = await import("./pricing.js");
  mountPricing(currentLanguage);
} else if (isBlogPage) {
  const { mountBlog } = await import("./blog.js");
  mountBlog(currentLanguage);
} else {

const toast = document.querySelector("[data-toast]");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
mountCreatorShowcase();
const agentBrief = document.querySelector("#agent-team-brief");
const agentTeamLaunchButton = document.querySelector("[data-agent-team-launch]");
const agentStatus = document.querySelector("[data-agent-team-status]");
const campaignComposer = document.querySelector("[data-campaign-composer]");
const campaignSelection = { platforms: [], countries: [], followers: [], views: [], budget: [], creatorCount: [], goal: "" };
let contextDocuments = [];
let campaignRecognition;
let activePromptGroup;
const startCampaignWorkflow = createCampaignWorkflow(document.querySelector("[data-campaign-workflow]"), (busy) => {
  agentTeamLaunchButton.closest(".agent-team-demo").classList.toggle("is-running", busy);
  updateCampaignSendButton();
  if (busy) setIcon(agentTeamLaunchButton.querySelector(".ph"), "progress_activity");
});

function setCampaignPromptGroup(index) {
  activePromptGroup = index;
  const group = campaignPromptGroups[index];
  const panel = document.querySelector("#agent-prompt-panel");
  panel.hidden = !group;
  document.querySelectorAll("[data-prompt-group]").forEach((button) => {
    const active = Number(button.dataset.promptGroup) === index;
    button.setAttribute("aria-expanded", String(active));
  });
  if (!group) return;
  panel.querySelector("#agent-prompt-panel-title").innerHTML = `${icon(group.icon)}${group.title}`;
  panel.querySelector("[data-prompt-options]").innerHTML = group.prompts.map((prompt, promptIndex) => `<button class="agent-prompt-option" type="button" data-quick-prompt="${promptIndex}" aria-pressed="false"><span>${prompt.title}</span><small>${prompt === campaignDemo ? "完整演示" : "填入草稿"} ${icon("edit_note")}</small></button>`).join("");
}

function updateCampaignSendButton() {
  const running = agentTeamLaunchButton.closest(".agent-team-demo").classList.contains("is-running");
  agentTeamLaunchButton.disabled = running || campaignPromptTyping || !agentBrief.value.trim();
  if (!running) setIcon(agentTeamLaunchButton.querySelector(".ph"), "arrow_upward");
}

let campaignPromptFrame;
let campaignPromptObserver;
let campaignPromptStarted = false;
let campaignPromptTyping = false;

function stopCampaignPromptIntro() {
  campaignPromptStarted = true;
  campaignPromptTyping = false;
  window.cancelAnimationFrame(campaignPromptFrame);
  campaignPromptObserver?.disconnect();
  agentBrief.removeAttribute("aria-busy");
  updateCampaignSendButton();
}

["pointerdown", "keydown", "input"].forEach((type) => {
  campaignComposer.addEventListener(type, stopCampaignPromptIntro);
  document.querySelector("[data-campaign-flow-tabs]").addEventListener(type, stopCampaignPromptIntro);
});
agentBrief.addEventListener("input", updateCampaignSendButton);
updateCampaignSendButton();

function updateCampaignGoal() {
  const goal = campaignGoals.find((item) => item.key === campaignSelection.goal);
  const menu = document.querySelector("[data-campaign-goal]");
  const label = goal ? `目标 · ${goal.label}` : "目标 Goal";
  menu.querySelector("[data-goal-label]").textContent = label;
  menu.querySelector("summary").title = goal ? `${label} · 优先：${goal.criteria}` : label;
  menu.classList.toggle("is-active", Boolean(goal));
  menu.querySelectorAll("input").forEach((input) => { input.checked = input.value === campaignSelection.goal; });
  const hint = document.querySelector("[data-goal-hint]");
  hint.textContent = goal ? `优先${goal.creatorType}` : "";
  hint.hidden = !goal;
  agentStatus.textContent = "";
}

function updateCampaignFilters() {
  const formatNumber = (value) => new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(value);
  campaignFilters.forEach((filter) => {
    const menu = document.querySelector(`[data-campaign-filter="${filter.key}"]`);
    const values = campaignSelection[filter.key];
    const active = values.some((value) => value !== "");
    const label = filter.options ? `${values[0] || ""}${values.length > 1 ? ` +${values.length - 1}` : ""}` : !active ? "" : filter.single ? `${values[0]} 位` : `${filter.key === "budget" ? "$" : ""}${values[0] === "" ? "0" : formatNumber(values[0])}–${values[1] === "" ? "不限" : formatNumber(values[1])}`;
    menu.querySelector("[data-filter-label]").textContent = label ? `${filter.label} · ${label}` : filter.label;
    const fullLabel = filter.options && active ? `${filter.label} · ${values.join("、")}` : menu.querySelector("[data-filter-label]").textContent;
    menu.querySelector("summary").title = fullLabel;
    menu.querySelector("summary").setAttribute("aria-label", fullLabel);
    menu.classList.toggle("is-active", active);
    if (filter.options) menu.querySelectorAll("input").forEach((input) => { input.checked = values.includes(input.value); });
  });
}

function applyCampaignPromptFilters(prompt) {
  if (!prompt.filters) return;
  campaignFilters.forEach((filter) => {
    const values = prompt.filters[filter.key] || [];
    campaignSelection[filter.key] = [...values];
    document.querySelectorAll(`[data-campaign-range="${filter.key}"] input`).forEach((input, index) => {
      input.value = values[index] ?? "";
    });
  });
  document.querySelectorAll(".agent-range-error").forEach((error) => { error.hidden = true; });
  updateCampaignFilters();
  campaignSelection.goal = prompt.goal;
  updateCampaignGoal();
}

function startCampaignPromptIntro(restart = false) {
  if (campaignComposer.hidden) return;
  if (restart) {
    stopCampaignPromptIntro();
    campaignPromptStarted = false;
    agentBrief.value = "";
    applyCampaignPromptFilters({ filters: {}, goal: "" });
    campaignComposer.querySelectorAll(".is-autofilling").forEach((menu) => menu.classList.remove("is-autofilling"));
  }
  if (campaignPromptStarted || agentBrief.value.trim()) return;
  campaignPromptStarted = true;
  campaignPromptObserver.disconnect();
  delete agentBrief.dataset.i18nUserEdited;
  agentBrief.dataset.i18nSource = campaignDemo.prompt;
  const localizedPrompt = localizeText(campaignDemo.prompt);
  const introFilters = { ...campaignDemo.filters, followers: [30000, 500000], views: [10000, ""] };
  if (reducedMotion) {
    applyCampaignPromptFilters({ ...campaignDemo, filters: introFilters });
    agentBrief.value = localizedPrompt;
    updateCampaignSendButton();
    return;
  }
  campaignPromptTyping = true;
  agentBrief.setAttribute("aria-busy", "true");
  updateCampaignSendButton();
  const selections = [
    ["countries", "美国"], ["platforms", "TikTok"], ["budget", "$20,000"],
    ["followers", "达人筛选"], ["views", "合作和"], ["goal", "反馈收集"],
  ].map(([key, text]) => ({ key, at: (campaignDemo.prompt.indexOf(text) + text.length) / campaignDemo.prompt.length * localizedPrompt.length }));
  let nextSelection = 0;
  const startedAt = performance.now();
  const typePrompt = (now) => {
    const progress = Math.min((now - startedAt) / 2400, 1);
    agentBrief.value = localizedPrompt.slice(0, Math.ceil(localizedPrompt.length * progress));
    while (nextSelection < selections.length && agentBrief.value.length >= selections[nextSelection].at) {
      const { key } = selections[nextSelection++];
      if (key === "goal") {
        campaignSelection.goal = campaignDemo.goal;
        updateCampaignGoal();
      } else {
        campaignSelection[key] = [...introFilters[key]];
        document.querySelectorAll(`[data-campaign-range="${key}"] input`).forEach((input, index) => {
          input.value = introFilters[key][index] ?? "";
        });
        updateCampaignFilters();
      }
      const menu = document.querySelector(key === "goal" ? "[data-campaign-goal]" : `[data-campaign-filter="${key}"]`);
      menu.classList.add("is-autofilling");
      menu.addEventListener("animationend", () => menu.classList.remove("is-autofilling"), { once: true });
    }
    if (progress < 1) campaignPromptFrame = window.requestAnimationFrame(typePrompt);
    else stopCampaignPromptIntro();
  };
  campaignPromptFrame = window.requestAnimationFrame(typePrompt);
}

campaignPromptObserver = new IntersectionObserver((entries) => {
  if (entries.some((entry) => entry.isIntersecting)) startCampaignPromptIntro();
}, { threshold: 0.45, rootMargin: "-96px 0px 0px" });
campaignPromptObserver.observe(agentBrief);

document.querySelector("[data-campaign-flow-tabs]").addEventListener("click", (event) => {
  if (event.target.closest('[data-wf-tab="brief"]')) startCampaignPromptIntro(true);
});

function closeCampaignMenus() {
  document.querySelectorAll(".agent-composer-menu[open]").forEach((menu) => { menu.open = false; });
}

function positionCampaignPopover(menu) {
  const popover = menu.querySelector(".agent-composer-popover");
  popover.style.setProperty("--popover-shift", "0px");
  const bounds = popover.getBoundingClientRect();
  const composerBounds = campaignComposer.querySelector(".agent-team-prompt").getBoundingClientRect();
  const left = Math.max(8, composerBounds.left + 16);
  const right = Math.min(window.innerWidth - 8, composerBounds.right - 16);
  const shift = Math.max(left, Math.min(bounds.left, right - bounds.width)) - bounds.left;
  popover.style.setProperty("--popover-shift", `${shift}px`);
}

campaignComposer.querySelectorAll(".agent-composer-menu").forEach((menu) => {
  menu.addEventListener("toggle", () => { if (menu.open) positionCampaignPopover(menu); });
});
window.addEventListener("resize", () => {
  campaignComposer.querySelectorAll(".agent-composer-menu[open]").forEach(positionCampaignPopover);
});

function applyCampaignRange(form) {
  if (!form.reportValidity()) return;
  const inputs = [...form.querySelectorAll("input")];
  const values = inputs.map((input) => input.value === "" ? "" : Number(input.value));
  const error = form.querySelector(".agent-range-error");
  error.hidden = true;
  if (values.length === 2 && values[0] !== "" && values[1] !== "" && values[0] > values[1]) {
    error.textContent = "最大值不能小于最小值";
    error.hidden = false;
    return;
  }
  campaignSelection[form.dataset.campaignRange] = values;
  updateCampaignFilters();
  form.closest("details").open = false;
}

function renderContextDocuments() {
  const container = document.querySelector("[data-context-files]");
  container.replaceChildren();
  container.hidden = contextDocuments.length === 0;
  contextDocuments.forEach((file, index) => {
    const chip = document.createElement("div");
    chip.className = "agent-context-file";
    chip.innerHTML = `${icon("description")}<span></span><button type="button" data-remove-context="${index}">${icon("close")}</button>`;
    chip.querySelector("span").textContent = file.name;
    chip.querySelector("button").setAttribute("aria-label", `移除 ${file.name}`);
    container.append(chip);
  });
}

function toggleCampaignVoice() {
  if (campaignRecognition) {
    campaignRecognition.stop();
    return;
  }
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    showToast("当前浏览器不支持语音输入，请输入文字或选择下方快速 Prompt");
    return;
  }
  const button = document.querySelector("[data-campaign-voice]");
  campaignRecognition = new SpeechRecognition();
  campaignRecognition.lang = currentLanguage;
  campaignRecognition.onstart = () => {
    button.classList.add("is-recording");
    button.setAttribute("aria-pressed", "true");
    button.setAttribute("aria-label", "停止语音输入");
    agentStatus.textContent = "正在聆听，点击麦克风结束语音输入…";
  };
  campaignRecognition.onresult = (event) => {
    agentBrief.value += `${agentBrief.value ? " " : ""}${event.results[0][0].transcript}`;
    updateCampaignSendButton();
    agentBrief.focus();
  };
  campaignRecognition.onerror = (event) => {
    showToast(event.error === "not-allowed" ? "未获得麦克风权限，请允许语音输入后重试" : "语音识别未完成，请重试或输入文字");
  };
  campaignRecognition.onend = () => {
    campaignRecognition = undefined;
    button.classList.remove("is-recording");
    button.setAttribute("aria-pressed", "false");
    button.setAttribute("aria-label", "语音输入");
    agentStatus.textContent = "";
  };
  campaignRecognition.start();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function applyTheme(theme, persist = true) {
  const nextTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = nextTheme;
  document.querySelectorAll("[data-theme-value]").forEach((button) => {
    const active = button.dataset.themeValue === nextTheme;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", nextTheme === "dark" ? "#111315" : "#ffffff");
  if (persist) window.localStorage.setItem("quickkol-theme", nextTheme);
}

function renderCapabilityPreview(key) {
  if (["discover", "analytics", "outreach"].includes(key)) return renderCapabilityDemo(key);
  return `<div class="capability-ui capability-agent" data-agent-demo>
    <div class="demo-window-bar agent-window-bar">
      <span>${icon("sparkle")} AI Orchestrator</span>
      <div><span class="agent-live-badge"><i></i><span data-agent-demo-status>分析目标</span></span></div>
    </div>
    <div class="agent-run-heading"><small>实时工作流</small><h3 data-agent-demo-title>正在理解 Campaign Brief</h3></div>
    <div class="agent-brief-chip">${icon("description")}<div><small>CAMPAIGN BRIEF</small><b>美国 · 降噪耳机新品测评</b></div></div>
    <ol class="discovery-pipeline agent-pipeline" aria-label="Agent 工作流">
      ${["理解 Brief", "AI 找达人", "达人触达联系"].map((label, index) => `<li data-agent-step="${index}"><span>${index + 1}</span><small>${label}</small></li>`).join("")}
    </ol>
    <div class="agent-worker-list" aria-label="Agent 协作任务">
      <article data-agent-worker="0">${icon("description")}<div><b>理解 Brief</b><small>拆解目标与达人筛选条件</small></div><span data-agent-worker-status>理解中</span></article>
      <article data-agent-worker="1">${icon("person_search")}<div><b>AI 找达人</b><small>搜索候选，匹配内容与受众</small></div><span data-agent-worker-status>等待</span></article>
      <article data-agent-worker="2">${icon("forward_to_inbox")}<div><b>达人触达联系</b><small>个性化邮件与后续跟进</small></div><span data-agent-worker-status>等待</span></article>
    </div>
    <div class="agent-demo-log"><i></i><span data-agent-demo-log>正在提取品类、市场、受众与合作目标</span></div>
  </div>`;
}

let disposeCapabilityDemo = () => {};
let capabilityPlaybackFrame;
function startCapabilityPlayback(key) {
  window.cancelAnimationFrame(capabilityPlaybackFrame);
  const button = document.querySelector(`[data-capability-tab="${key}"]`);
  const panel = document.querySelector("[data-capability-panel]");
  let elapsed = 0;
  let lastFrame = performance.now();
  button.style.setProperty("--capability-progress", "0");
  if (reducedMotion) return;
  const tick = (now) => {
    const delta = now - lastFrame;
    lastFrame = now;
    if (!document.hidden && delta < 250 && panel.querySelector(".discovery-demo")?.dataset.paused !== "true") elapsed += delta;
    button.style.setProperty("--capability-progress", String(Math.min(elapsed / capabilityPlaybackDuration[key], 1)));
    if (elapsed >= capabilityPlaybackDuration[key]) {
      const index = capabilityTabs.findIndex((tab) => tab.key === key);
      selectCapability(capabilityTabs[(index + 1) % capabilityTabs.length].key);
      return;
    }
    capabilityPlaybackFrame = window.requestAnimationFrame(tick);
  };
  capabilityPlaybackFrame = window.requestAnimationFrame(tick);
}

function selectCapability(key) {
  disposeCapabilityDemo();
  const selected = capabilityTabs.find((tab) => tab.key === key) || capabilityTabs[0];
  document.querySelectorAll("[data-capability-tab]").forEach((button) => {
    const active = button.dataset.capabilityTab === selected.key;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
    button.tabIndex = active ? 0 : -1;
    button.style.setProperty("--capability-progress", "0");
    if (active && button.parentElement.scrollWidth > button.parentElement.clientWidth) {
      button.parentElement.scrollTo({ left: button.offsetLeft - (button.parentElement.clientWidth - button.clientWidth) / 2, behavior: reducedMotion ? "instant" : "smooth" });
    }
  });
  const copy = capabilityCopy[selected.key];
  const panel = document.querySelector("[data-capability-panel]");
  panel.classList.toggle("is-discovery", selected.key === "discover");
  panel.innerHTML = `<div class="capability-visual ${["discover", "analytics", "outreach"].includes(selected.key) ? "capability-visual-detailed" : ""}">${renderCapabilityPreview(selected.key)}</div><div class="capability-copy"><p class="eyebrow">${copy.eyebrow}</p><h3>${copy.title}</h3><p>${copy.description}</p><ul>${copy.points.map((point) => `<li>${icon("check")} ${point}</li>`).join("")}</ul></div>`;
  disposeCapabilityDemo = mountCapabilityDemo(panel, reducedMotion);
  panel.classList.remove("is-switching");
  void panel.offsetWidth;
  panel.classList.add("is-switching");
  startCapabilityPlayback(selected.key);
}

selectCapability("discover");
applyTheme(document.documentElement.dataset.theme, false);
window.addEventListener("quickkol:locale", () => {
  if (!agentBrief.dataset.i18nUserEdited && agentBrief.dataset.i18nSource) {
    stopCampaignPromptIntro();
    agentBrief.value = localizeText(agentBrief.dataset.i18nSource);
    updateCampaignSendButton();
  }
});
initI18n(currentLanguage);
const revealElements = document.querySelectorAll("[data-reveal]");

if (reducedMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16, rootMargin: "0px 0px -8%" });
  revealElements.forEach((element) => revealObserver.observe(element));
}

document.addEventListener("click", async (event) => {
  const capabilityTab = event.target.closest("[data-capability-tab]");
  if (capabilityTab) selectCapability(capabilityTab.dataset.capabilityTab);
  if (event.target.closest("[data-discovery-mode]")) startCapabilityPlayback("discover");
  const footerCapability = event.target.closest("[data-footer-capability]");
  if (footerCapability) selectCapability(footerCapability.dataset.footerCapability);
  if (event.target.closest("[data-footer-tool]")) showToast("即将支持");
  const faqTrigger = event.target.closest("[data-faq-trigger]");
  if (faqTrigger) {
    const selectedItem = faqTrigger.closest("[data-faq-item]");
    const shouldOpen = !selectedItem.classList.contains("is-open");
    document.querySelectorAll("[data-faq-item]").forEach((item) => {
      const isSelected = item === selectedItem && shouldOpen;
      item.classList.toggle("is-open", isSelected);
      item.querySelector("[data-faq-trigger]").setAttribute("aria-expanded", String(isSelected));
      item.querySelector("[data-faq-answer]").setAttribute("aria-hidden", String(!isSelected));
    });
  }
  if (event.target.closest("[data-start], [data-cta-start]")) {
    window.location.href = "https://app.quickkol.com/en/login";
    return;
  }
  if (!event.target.closest(".agent-composer-menu")) closeCampaignMenus();
  const promptGroup = event.target.closest("[data-prompt-group]");
  if (promptGroup) {
    const index = Number(promptGroup.dataset.promptGroup);
    setCampaignPromptGroup(activePromptGroup === index ? undefined : index);
  }
  if (event.target.closest("[data-prompt-close]")) {
    const trigger = document.querySelector(`[data-prompt-group="${activePromptGroup}"]`);
    setCampaignPromptGroup();
    trigger.focus();
  }
  const quickPrompt = event.target.closest("[data-quick-prompt], [data-scene-template]");
  if (quickPrompt) {
    const groupIndex = quickPrompt.matches("[data-scene-template]") ? Number(quickPrompt.dataset.sceneGroup) : activePromptGroup;
    const promptIndex = quickPrompt.matches("[data-scene-template]") ? Number(quickPrompt.dataset.scenePrompt) : Number(quickPrompt.dataset.quickPrompt);
    const prompt = campaignPromptGroups[groupIndex].prompts[promptIndex];
    delete agentBrief.dataset.i18nUserEdited;
    agentBrief.dataset.i18nSource = prompt.prompt;
    agentBrief.value = localizeText(prompt.prompt);
    updateCampaignSendButton();
    applyCampaignPromptFilters(prompt);
    document.querySelectorAll("[data-quick-prompt], [data-scene-template]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button === quickPrompt));
    });
    agentStatus.textContent = "";
    agentBrief.focus({ preventScroll: true });
  }
  const rangeClear = event.target.closest("[data-range-clear]");
  if (rangeClear) {
    const form = rangeClear.closest("form");
    form.reset();
    applyCampaignRange(form);
  }
  if (event.target.closest("[data-knowledge-done]")) {
    document.querySelector("[data-campaign-knowledge]").open = false;
  }
  if (event.target.closest("[data-goal-clear]")) {
    campaignSelection.goal = "";
    updateCampaignGoal();
    closeCampaignMenus();
  }
  if (event.target.closest("[data-context-upload]")) document.querySelector("#agent-context-upload").click();
  const removeContext = event.target.closest("[data-remove-context]");
  if (removeContext) {
    contextDocuments.splice(Number(removeContext.dataset.removeContext), 1);
    renderContextDocuments();
  }
  if (event.target.closest("[data-campaign-voice]")) toggleCampaignVoice();

  const agentTeamLaunch = event.target.closest("[data-agent-team-launch]");
  if (agentTeamLaunch && !agentTeamLaunch.disabled) {
    if (!agentBrief.value.trim()) {
      showToast("先描述 Campaign，或选择下方快速 Prompt");
      agentBrief.focus();
      return;
    }
    const invalidRange = [...document.querySelectorAll("[data-campaign-range]")].find((form) => {
      const inputs = [...form.querySelectorAll("input")];
      return inputs.some((input) => !input.validity.valid) || (inputs.length === 2 && inputs.every((input) => input.value !== "") && Number(inputs[0].value) > Number(inputs[1].value));
    });
    if (invalidRange) {
      invalidRange.closest("details").open = true;
      if (!invalidRange.reportValidity()) return;
      applyCampaignRange(invalidRange);
      return;
    }
    document.querySelectorAll("[data-campaign-range]").forEach(applyCampaignRange);
    campaignRecognition?.stop();
    setCampaignPromptGroup();
    agentStatus.textContent = "";
    campaignComposer.hidden = true;
    startCampaignWorkflow();
  }

  const menuButton = event.target.closest("[data-menu]");
  if (menuButton) {
    const nav = document.querySelector("[data-mobile-nav]");
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
    setIcon(menuButton.querySelector(".ph"), open ? "close" : "menu");
  }
  if (event.target.closest("[data-mobile-nav] a")) document.querySelector("[data-mobile-nav]").classList.remove("is-open");
  const languageButton = event.target.closest("[data-language]");
  if (languageButton) {
    const menu = document.querySelector("[data-language-menu]");
    const open = menu.hidden;
    menu.hidden = !open;
    languageButton.setAttribute("aria-expanded", String(open));
  }

  const languageOption = event.target.closest("[data-language-option]");
  if (languageOption) {
    const nextLanguage = resolveLocale(languageOption.dataset.languageOption);
    await loadLocale(nextLanguage);
    currentLanguage = nextLanguage;
    setPageLocale(currentLanguage);
    document.querySelector("[data-language-menu]").hidden = true;
    document.querySelector("[data-language]").setAttribute("aria-expanded", "false");
    document.querySelector("[data-mobile-nav]").classList.remove("is-open");
  }

  const themeButton = event.target.closest("[data-theme-value]");
  if (themeButton) applyTheme(themeButton.dataset.themeValue);
});

document.addEventListener("click", async (event) => {
  if (event.target.closest("[data-language-switcher]")) return;
  const languageMenu = document.querySelector("[data-language-menu]");
  if (!languageMenu.hidden) {
    languageMenu.hidden = true;
    document.querySelector("[data-language]").setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  document.querySelector("[data-language-menu]").hidden = true;
  document.querySelector("[data-language]").setAttribute("aria-expanded", "false");
});

document.querySelectorAll("[data-campaign-range]").forEach((form) => {
  form.addEventListener("submit", (event) => { event.preventDefault(); applyCampaignRange(form); });
});
document.querySelectorAll("[data-campaign-filter] input[type='checkbox']").forEach((input) => {
  input.addEventListener("change", () => {
    const menu = input.closest("[data-campaign-filter]");
    campaignSelection[menu.dataset.campaignFilter] = [...menu.querySelectorAll("input:checked")].map((option) => option.value);
    updateCampaignFilters();
  });
});
document.querySelectorAll("[data-campaign-knowledge] input").forEach((input) => {
  input.addEventListener("change", () => {
    const menu = input.closest("details");
    const selected = menu.querySelectorAll("input:checked").length;
    menu.querySelector("[data-knowledge-label]").textContent = selected ? `知识库 · ${selected}` : "知识库";
    menu.classList.toggle("is-active", selected > 0);
  });
});
document.querySelectorAll("[data-campaign-goal] input").forEach((input) => {
  input.addEventListener("change", () => {
    campaignSelection.goal = input.value;
    updateCampaignGoal();
    closeCampaignMenus();
  });
});
document.querySelector("#agent-context-upload").addEventListener("change", (event) => {
  for (const file of event.target.files) {
    if (!contextDocuments.some((document) => document.name === file.name && document.size === file.size && document.lastModified === file.lastModified)) contextDocuments.push(file);
  }
  renderContextDocuments();
  event.target.value = "";
  if (contextDocuments.length) agentStatus.textContent = "已添加上下文文档，本演示仅展示选择结果";
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCampaignMenus();
    if (activePromptGroup !== undefined) {
      const trigger = document.querySelector(`[data-prompt-group="${activePromptGroup}"]`);
      setCampaignPromptGroup();
      trigger.focus();
    }
  }
  if (event.target === agentBrief && event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
    event.preventDefault();
    document.querySelector("[data-agent-team-launch]").click();
  }
});

let scrollTicking = false;
function updateScrollEffects() {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const progress = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;
  document.querySelector("[data-header]").classList.toggle("is-scrolled", scrollTop > 24);
  document.querySelector("[data-scroll-progress]").style.transform = `scaleX(${progress})`;
  document.documentElement.style.setProperty("--demo-shift", `${Math.min(scrollTop * -0.035, -18)}px`);
  scrollTicking = false;
}

window.addEventListener("scroll", () => {
  if (scrollTicking || reducedMotion) return;
  scrollTicking = true;
  window.requestAnimationFrame(updateScrollEffects);
}, { passive: true });

updateScrollEffects();

}
