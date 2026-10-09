import englishCatalog from "./locales/en.json";
import chineseCatalog from "./locales/zh-CN.json";

export const languages = [
  { code: "en", label: "English", shortLabel: "EN" },
  { code: "zh-CN", label: "简体中文", shortLabel: "中文" },
  { code: "ja", label: "日本語", shortLabel: "JA" },
  { code: "ko", label: "한국어", shortLabel: "KO" },
  { code: "de", label: "Deutsch", shortLabel: "DE" },
  { code: "fr", label: "Français", shortLabel: "FR" },
  { code: "es", label: "Español", shortLabel: "ES" },
  { code: "pt", label: "Português", shortLabel: "PT" },
];
const catalogs = { "zh-CN": chineseCatalog };
const catalogLoaders = {
  ja: () => import("./locales/ja.json"),
  ko: () => import("./locales/ko.json"),
  de: () => import("./locales/de.json"),
  fr: () => import("./locales/fr.json"),
  es: () => import("./locales/es.json"),
  pt: () => import("./locales/pt.json"),
};
const catalogLoads = new Map();
export function isLocaleAvailable(code) {
  return languages.some((language) => language.code === code);
}

export async function loadLocale(code) {
  if (!catalogLoaders[code] || catalogs[code]) return;
  if (!catalogLoads.has(code)) {
    catalogLoads.set(code, catalogLoaders[code]().then(({ default: catalog }) => { catalogs[code] = catalog; }));
  }
  await catalogLoads.get(code);
}

export function resolveLocale(value) {
  return languages.some(({ code }) => code === value) && isLocaleAvailable(value) ? value : "zh-CN";
}

const english = englishCatalog;

const textSources = new WeakMap();
const attributeSources = new WeakMap();
const valueSources = new WeakMap();
const translatedAttributes = ["aria-label", "title", "placeholder", "alt"];
let locale = "zh-CN";
let observer;
let scheduled = false;

function splitWhitespace(value) {
  const match = value.match(/^(\s*)([\s\S]*?)(\s*)$/);
  return { before: match[1], content: match[2], after: match[3] };
}

function translate(source) {
  if (!source) return source;
  if (english[source]) return english[source];
  const quoted = source.match(/^“(.+)”$/);
  if (quoted && english[quoted[1]]) return `“${english[quoted[1]]}”`;
  const email = source.match(/^Hi (.+)，\n\n你在 (.+) 上的(.+)内容与我们的降噪耳机很契合。想邀请你参与一次面向美国受众的产品测试，以(.+)分享对降噪、音质、续航与佩戴体验的真实评价，并补充一份结构化反馈。\n\n我们可以安排寄样，并一起确认测试要求和合作时间。方便了解你的合作形式、报价和可用档期吗？\n\n期待你的回复！$/);
  if (email) return `Hi ${email[1]},\n\nYour ${translate(email[3])} content on ${email[2]} is a strong fit for our noise-canceling headphones. We'd like to invite you to take part in a product test for a US audience and use ${translate(email[4]).toLowerCase()} to share your honest evaluation of ANC, sound quality, battery life, and comfort, along with structured feedback.\n\nWe can arrange a sample and align on testing requirements and timing. Could you share your collaboration format, rates, and availability?\n\nLooking forward to hearing from you!`;
  const subject = source.match(/^邀请你参与降噪耳机 (.+) 测评$/);
  if (subject) return `Invitation to review noise-canceling headphones on ${subject[1]}`;
  const compactStep = source.match(/^搜索 (YouTube|Instagram|TikTok) (.+)粉丝达人 · 预计搜索 (\d+) 位$/);
  if (compactStep) return `Search ${compactStep[1]} · ${translate(`${compactStep[2]}粉丝`)} · est. ${compactStep[3]} creators`;
  const goalTitle = source.match(/^目标 · (.+) · 优先：(.+)$/);
  if (goalTitle) return `Goal · ${translate(goalTitle[1])} · Prioritize: ${translate(`优先：${goalTitle[2]}`).replace(/^Prioritize: /, "")}`;
  const priority = source.match(/^优先[：:]?(.+)$/);
  if (priority) return `Prioritize: ${translate(priority[1])}`;
  const prefixed = [
    [/^平台 · (.+)$/, "Platforms · $1"],
    [/^国家 · (.+)$/, "Country · $1"],
    [/^预算 · (.+)$/, "Budget · $1"],
    [/^目标 · (.+)$/, "Goal · $1"],
    [/^粉丝量 · (.+)$/, "Followers · $1"],
    [/^平均观看量 · (.+)$/, "Average views · $1"],
    [/^合作达人 · (.+)$/, "Creators · $1"],
  ].find(([pattern]) => pattern.test(source));
  if (prefixed) return source.replace(prefixed[0], prefixed[1])
    .replace("美国", "United States").replace("英国", "United Kingdom").replace("德国", "Germany").replace("法国", "France")
    .replace("加拿大", "Canada").replace("澳大利亚", "Australia").replace("日本", "Japan").replace("新加坡", "Singapore")
    .replace("品牌声量", "Brand awareness").replace("种草互动", "Consideration and engagement").replace("销售转化", "Sales conversion").replace("产品测试", "Product testing")
    .replace("不限", "No limit").replace(/(\d+) 位$/, "$1");
  return source
    .replace(/^(\d+) 个步骤$/, "$1 steps")
    .replace(/^(\d+) \/ (\d+) 步搜索完成$/, "$1 / $2 search steps complete")
    .replace(/^(\d+)% 预算$/, "$1% of budget")
    .replace(/^准备触达 (\d+) 位，争取 (\d+) 位合作$/, "Prepare outreach to $1 creators to secure $2 partners")
    .replace(/^目标合作 (\d+) 位 \/ 计划触达 (\d+) 位 · 当前仅演示 (\d+) 位$/, "Target $1 partners / Plan outreach to $2 · Showing $3 in this demo")
    .replace(/^已选 (\d+) 位$/, "$1 selected")
    .replace(/^(\d+) 位候选达人$/, "$1 creator candidates")
    .replace(/^确认 (\d+) 位达人并继续$/, "Confirm $1 creators and continue")
    .replace(/^确认发送 (\d+) 封邮件$/, "Confirm and send $1 emails")
    .replace(/^正在触达 (\d+) \/ (\d+) 位达人$/, "Contacting creator $1 of $2")
    .replace(/^拖动步骤 (\d+)$/, "Drag step $1")
    .replace(/^编辑步骤 (\d+)$/, "Edit step $1")
    .replace(/^删除步骤 (\d+)$/, "Delete step $1")
    .replace(/^步骤已移动到第 (\d+) 位$/, "Step moved to position $1")
    .replace(/^选择 (@.+)$/, "Select $1")
    .replace(/^(@.+) 的近期内容$/, "$1's recent content")
    .replace(/^(@.+) 发布的(.+)视频画面$/, (_, handle, title) => `${handle}'s ${translate(title).toLowerCase()} video frame`)
    .replace(/^预览 (@.+) 的邮件$/, "Preview email for $1")
    .replace(/^移除 (.+)$/, "Remove $1")
    .replace(/^已切换为(.+)模式$/, "Switched to $1 mode")
    .replace(/^知识库 · (\d+)$/, "$1 knowledge bases")
    .replace(/(\$[\d,.]+) × (\d+)位/g, "$1 × $2 creators")
    .replace(/(\d+)位/g, "$1 creators")
    .replace(/^(\d[\d,.K]*) 位相关达人$/, "$1 relevant creators")
    .replace(/^(\d[\d,.K]*) 位高匹配候选$/, "$1 high-fit candidates")
    .replace(/^(\d[\d,.K]*) 位$/, "$1 creators")
    .replace(/^(\d[\d,.K]*) 个$/, "$1")
    .replace(/(\d[\d,.K]*) 粉丝/g, "$1 followers")
    .replace(/(\d+) 人已回复/g, "$1 replied")
    .replace(/(\d+) 人待确认/g, "$1 awaiting approval")
    .replace(/(\d+(?:\.\d+)?)万/g, (_, value) => `${Number(value) * 10}K`);
}

// Keep both the source and the last translation. A changed DOM value is new
// application content, not a reason to restore an old translation.
function translatedValue(value, record) {
  const source = record && record.output.trim() === value.trim() ? record.source : value;
  return { source, output: localizeText(source) };
}

function translateNode(node) {
  if (node.parentElement?.closest("[data-i18n-ignore], script, style, textarea")) return;
  const { before, content, after } = splitWhitespace(node.data);
  if (!content) return;
  const next = translatedValue(content, textSources.get(node));
  textSources.set(node, next);
  const trailingSpace = locale !== "zh-CN" && /,$/.test(next.output) ? " " : "";
  const output = `${before}${next.output}${trailingSpace}${after}`;
  if (node.data !== output) node.data = output;
}

function translateElement(element) {
  if (element.closest("[data-i18n-ignore], script, style")) return;
  if (!attributeSources.has(element)) attributeSources.set(element, new Map());
  const sources = attributeSources.get(element);
  for (const attribute of translatedAttributes) {
    if (!element.hasAttribute(attribute)) continue;
    const value = element.getAttribute(attribute);
    const next = translatedValue(value, sources.get(attribute));
    sources.set(attribute, next);
    if (next.output !== value) element.setAttribute(attribute, next.output);
  }
  if ((element instanceof HTMLTextAreaElement || (element instanceof HTMLInputElement && ["text", "search"].includes(element.type))) && element.value) {
    const previous = valueSources.get(element);
    // User-edited fields must stay exactly as entered. Demo values can be localized.
    if (element.dataset.i18nUserEdited) return;
    const next = translatedValue(element.value, previous);
    valueSources.set(element, next);
    if (next.output !== element.value) element.value = next.output;
  }
}

export function applyTranslations(root = document.body) {
  observer?.disconnect();
  if (root.nodeType === Node.TEXT_NODE) translateNode(root);
  const base = root.nodeType === Node.ELEMENT_NODE ? root : root.parentElement;
  if (base) {
    translateElement(base);
    const walker = document.createTreeWalker(base, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) translateNode(node);
    base.querySelectorAll("*").forEach(translateElement);
  }
  for (const element of document.querySelectorAll('title, meta[name="description"], meta[property="og:title"], meta[property="og:description"], meta[name="twitter:title"], meta[name="twitter:description"]')) {
    if (element.tagName === "TITLE" && element.firstChild) translateNode(element.firstChild);
    else {
      const value = element.content;
      const next = translatedValue(value, textSources.get(element));
      textSources.set(element, next);
      if (element.content !== next.output) element.content = next.output;
    }
  }
  observer?.observe(document.documentElement, { subtree: true, childList: true, characterData: true, attributes: true, attributeFilter: [...translatedAttributes, "content"] });
}

export function setPageLocale(nextLocale) {
  locale = resolveLocale(nextLocale);
  document.documentElement.lang = locale;
  window.localStorage.setItem("quickkol-language", locale);
  const selected = languages.find(({ code }) => code === locale);
  for (const element of document.querySelectorAll("[data-language-label]")) element.textContent = selected.label;
  for (const element of document.querySelectorAll("[data-language-short-label]")) element.textContent = selected.shortLabel;
  for (const option of document.querySelectorAll("[data-language-option]")) {
    const active = option.dataset.languageOption === locale;
    option.classList.toggle("is-active", active);
    option.setAttribute("aria-selected", String(active));
  }
  applyTranslations();
  window.dispatchEvent(new CustomEvent("quickkol:locale", { detail: locale }));
}

export function initI18n(initialLocale) {
  observer?.disconnect();
  observer = new MutationObserver(() => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(() => {
      scheduled = false;
      applyTranslations();
    });
  });
  document.addEventListener("input", (event) => {
    if (event.target.matches("input, textarea")) event.target.dataset.i18nUserEdited = "true";
  });
  setPageLocale(initialLocale);
}

const catalogIndexes = new Map();
function catalogIndex(code) {
  if (!catalogIndexes.has(code)) {
    const catalog = catalogs[code];
    const lower = new Map(Object.entries(catalog).map(([source, target]) => [source.toLowerCase(), target]));
    const reverse = new Map(Object.entries(catalog).map(([source, target]) => [target, source]));
    const templates = Object.entries(catalog).filter(([source]) => /\{\d+\}/.test(source)).map(([source, target]) => {
      const indices = [];
      const pattern = source.split(/(\{\d+\})/).map((part) => {
        if (/^\{\d+\}$/.test(part)) { indices.push(part); return "([\\s\\S]+?)"; }
        return part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }).join("");
      return { pattern: new RegExp(`^${pattern}$`), target, indices, specificity: source.replace(/\{\d+\}/g, "").length };
    }).sort((a, b) => b.specificity - a.specificity);
    catalogIndexes.set(code, { lower, reverse, templates, cache: new Map() });
  }
  return catalogIndexes.get(code);
}

function translateCatalog(value, code) {
  const catalog = catalogs[code];
  if (!catalog) return value;
  if (Object.hasOwn(catalog, value)) return catalog[value];
  const index = catalogIndex(code);
  if (index.cache.has(value)) return index.cache.get(value);
  let output = index.lower.get(value.toLowerCase());
  if (output === undefined) {
    const quoted = value.match(/^([“"'])([\s\S]+)([”"'])$/);
    if (quoted) output = `${quoted[1]}${translateCatalog(quoted[2], code)}${quoted[3]}`;
  }
  if (output === undefined && value.includes(" + ")) {
    output = value.split(" + ").map((part) => translateCatalog(part, code)).join(" + ");
  }
  if (output === undefined) {
    for (const template of index.templates) {
      const match = value.match(template.pattern);
      if (match) {
        output = template.target.replace(/\{\d+\}/g, (token) => translateCatalog(match[template.indices.indexOf(token) + 1] || token, code));
        break;
      }
    }
  }
  if (output === undefined) {
    // Composite labels retain their separators while each part is localized.
    output = value.split(/(\n\n+| · | → | \| )/).map((part) => catalog[part] ?? index.lower.get(part.toLowerCase()) ?? part).join("");
  }
  index.cache.set(value, output);
  return output;
}

export function localizeText(value) {
  if (!value) return value;
  if (["QuickKOL", "Quick", "KOL", "YouTube", "TikTok", "Instagram", "X", "X (Twitter)", "ChatGPT", "Claude", "Perplexity", "Gemini", "LinkedIn", "WhatsApp", "Launch", "Performance", "Max"].includes(value)) return value;
  let source = value;
  if (!Object.hasOwn(english, source)) {
    for (const code of Object.keys(catalogs)) {
      if (code === "zh-CN") continue;
      const canonical = catalogIndex(code).reverse.get(source);
      if (canonical) { source = canonical; break; }
    }
  }
  const englishValue = translate(source).trim();
  if (locale === "en") return englishValue;
  if (locale === "zh-CN" && /[\u3400-\u9fff]/.test(source)) return source;
  return translateCatalog(englishValue, locale);
}

export function localizeCopy(zh, en) {
  return locale === "zh-CN" ? zh : locale === "en" ? en : translateCatalog(en, locale);
}

export function currentLocale() {
  return locale;
}
