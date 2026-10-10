import './creator-rate-calculator.css';
import './campaign-cost-calculator.css';
import { initI18n, loadLocale, setPageLocale, localizeCopy as copy, currentLocale } from './i18n.js';
import { rateConfig } from './rateConfig.js';
import { campaignConfig as config } from './campaignConfig.js';
import { calculateMultiPlatformCampaign } from './campaign-cost.js';

const defaults = { mode: 'cost', country: 'us', niche: 'default', goal: 'launch', size: 'mixed', budget: '20000', extras: '0', contingency: '10' };
const initialValues = () => ({ ...defaults, platforms: ['instagram'], plans: Object.fromEntries(Object.keys(rateConfig.platforms).map((platform) => [platform, { count: '20', format: config.defaultFormats[platform], share: '100', views: {} }])) });
const icon = (name) => `<i class="ph ph-${name}" aria-hidden="true"></i>`;

export function mountCampaignCostCalculator(initialLocale) {
  const main = document.querySelector('#main');
  main.classList.add('rate-page', 'campaign-page');
  main.dataset.i18nIgnore = '';
  let values = initialValues();
  let advancedOpen = false;
  const number = (value, digits = 0) => new Intl.NumberFormat(currentLocale(), { maximumFractionDigits: digits }).format(value);
  const money = (value, digits = 0) => new Intl.NumberFormat(currentLocale(), { style: 'currency', currency: 'USD', maximumFractionDigits: digits }).format(value);
  const compact = (value) => new Intl.NumberFormat(currentLocale(), { notation: 'compact', maximumFractionDigits: 1 }).format(value);
  const range = (low, high) => `${money(Math.floor(low))} – ${money(Math.ceil(high))}`;
  const sizeName = (tier) => copy(...config.sizes[tier].label);
  const tiers = () => [...new Set(values.size === 'mixed' ? config.goals[values.goal].mix : [values.size])];
  const options = (items) => Object.entries(items).map(([key, item]) => `<option value="${key}">${copy(...item.label)}</option>`).join('');
  const select = (name, label, items, platform = '') => `<div class="rate-field"><label for="campaign-${name}${platform ? `-${platform}` : ''}">${label}</label><div class="campaign-select"><select id="campaign-${name}${platform ? `-${platform}` : ''}" ${platform ? `data-platform-field="${name}" data-platform="${platform}"` : `name="${name}"`}>${items}</select>${icon('caret-down')}</div></div>`;

  document.querySelectorAll('header a[href^="#"], footer a[href^="#"]').forEach((link) => link.setAttribute('href', `/${link.getAttribute('href')}`));
  document.querySelector('.footer-back-to-top').href = '#main';
  document.querySelector('footer a[href="/tools/influencer-campaign-cost-calculator/"]').setAttribute('aria-current', 'page');
  document.querySelector('.site-footer').classList.add('is-visible');
  document.querySelector('[data-start]').addEventListener('click', () => { window.location.href = 'https://app.quickkol.com/en/login'; });

  function render() {
    document.title = copy('达人 Campaign 预算计算器 | QuickKOL', 'Influencer Campaign Cost Calculator | QuickKOL');
    document.querySelector('meta[name="description"]').content = copy('根据 Campaign 需求估算整体预算，或根据预算规划达人数量、组合、观看量和 CPM。', 'Estimate your influencer campaign budget, or see how many creators your budget can cover. Plan creator mix, views and campaign CPM.');
    main.innerHTML = `
      <div class="rate-breadcrumb"><a href="/">${copy('首页', 'Home')}</a><span>/</span><span>${copy('Campaign 预算计算器', 'Campaign cost calculator')}</span></div>
      <section class="rate-calculator" aria-labelledby="campaign-title">
        <header class="rate-header"><div><span class="rate-brand">${icon('calculator')} QUICKKOL TOOLS</span><span class="rate-prototype">${copy('V1 · 预算规划', 'V1 · CAMPAIGN PLANNER')}</span></div></header>
        <div class="rate-intro"><h1 id="campaign-title">${copy('下一场达人 Campaign，需要多少预算？', 'Big campaign ideas. A clearer budget.')}</h1><p>${copy('从合作需求出发估算预算，或看看现有预算能与多少位达人合作。', 'Estimate the cost of your influencer campaign, or find out what your budget can do.')}</p></div>
        <div class="campaign-modes" role="group" aria-label="${copy('计算方式', 'Planning mode')}">
          <button type="button" data-campaign-mode="cost" aria-pressed="${values.mode === 'cost'}">${icon('calculator')}<span><b>${copy('按需求估算预算', 'Estimate campaign cost')}</b><small>${copy('我知道要合作多少位达人', 'I have a campaign in mind')}</small></span>${icon('check-circle')}</button>
          <button type="button" data-campaign-mode="budget" aria-pressed="${values.mode === 'budget'}">${icon('wallet')}<span><b>${copy('按预算规划达人', 'Plan with a budget')}</b><small>${copy('我想知道预算能做多大规模', 'I have a budget to work with')}</small></span>${icon('check-circle')}</button>
        </div>
        <div class="rate-layout campaign-layout">
          <form class="rate-form campaign-form" novalidate>
            <div class="rate-section-heading"><h2><span>01</span> ${copy('Campaign 需求', 'Your campaign brief')}</h2><button type="button" class="rate-reset" data-campaign-reset>${icon('arrow-counter-clockwise')} ${copy('重置', 'Reset')}</button></div>
            <fieldset class="campaign-platforms"><legend>${copy('内容平台', 'Platforms')} <small>${copy('可多选', 'Select one or more')}</small></legend>${Object.entries(rateConfig.platforms).map(([key, platform]) => `<label><input type="checkbox" name="platform" value="${key}" ${values.platforms.includes(key) ? 'checked' : ''} /><span>${platform.label}</span></label>`).join('')}</fieldset>
            <div class="campaign-fields">
              ${select('country', copy('达人国家 / 地区', 'Creator country / region'), Object.entries(rateConfig.countryMultipliers).map(([key, item]) => `<option value="${key}">${item.flag} ${copy(...item.label)} · ×${number(item.multiplier, 2)}</option>`).join(''))}
              ${select('niche', copy('内容领域', 'Content niche'), options(rateConfig.nicheMultipliers))}
              ${select('goal', copy('Campaign 目标', 'Campaign goal'), options(config.goals))}
              ${select('size', copy('达人体量', 'Creator size'), `<option value="mixed">${copy('混合组合（推荐）', 'Mixed strategy (recommended)')}</option>${Object.entries(config.sizes).map(([key, item]) => `<option value="${key}">${copy(...item.label)} · ${item.range}</option>`).join('')}`)}
            </div>
            ${values.mode === 'budget' ? `<div class="rate-field campaign-primary-field campaign-total-budget"><label for="campaign-budget">${copy('Campaign 总预算 (USD)', 'Total campaign budget (USD)')}</label><input id="campaign-budget" name="budget" type="number" min="1" max="100000000" step="0.01" inputmode="decimal" required /><div class="rate-presets">${[5000, 20000, 50000].map((value) => `<button type="button" data-campaign-preset="${value}" aria-pressed="false">${money(value)}</button>`).join('')}</div></div>` : ''}
            <div class="campaign-allocation-heading"><h3>${values.mode === 'cost' ? copy('各平台合作安排', 'Plan by platform') : copy('各平台预算分配', 'Budget by platform')}</h3>${values.mode === 'budget' ? `<button type="button" class="rate-reset" data-campaign-split>${copy('均分预算', 'Split equally')}</button>` : ''}</div>
            <p class="campaign-allocation-note">${values.mode === 'cost' ? copy('分别填写达人数量与内容形式，整体数量按合作人次相加。', 'Set creator counts and content for each platform. Counts are partnerships, not unique people.') : copy('填写各平台比例，合计需为 100%。分配金额包含按比例分摊的额外费用及预算预留。', 'Shares must total 100%. Each allocation includes its share of extras and contingency.')}</p>
            <div class="campaign-platform-plans" data-campaign-plans></div>
            <p class="campaign-allocation-total" data-campaign-allocation-total aria-live="polite"></p>
            <p class="campaign-strategy" data-campaign-strategy></p>
            <details class="campaign-advanced" ${advancedOpen ? 'open' : ''}><summary>${icon('sliders-horizontal')} ${copy('调整观看量与额外费用', 'Adjust views & additional costs')} ${icon('caret-down')}</summary><div>
              <p>${copy('默认观看量是可修改的规划假设，并非市场实测数据。每位达人按一条内容或所选内容组合计算。', 'Typical views are editable planning assumptions, not measured market averages. Each creator delivers one post or the selected bundle.')}</p>
              <div class="campaign-views" data-campaign-views></div>
              <div class="campaign-fields">
                <div class="rate-field"><label for="campaign-extras">${copy('额外费用 (USD)', 'Additional costs (USD)')}</label><input id="campaign-extras" name="extras" type="number" min="0" max="100000000" step="any" inputmode="decimal" /><small>${copy('自行填入寄样、授权或管理费用。', 'Add shipping, usage rights or management fees.')}</small></div>
                <div class="rate-field"><label for="campaign-contingency">${copy('预算预留 (%)', 'Contingency (%)')}</label><input id="campaign-contingency" name="contingency" type="number" min="0" max="100" step="any" inputmode="decimal" /><small>${copy('在达人费用与额外费用之上预留。', 'Reserved on top of creator and additional costs.')}</small></div>
              </div>
            </div></details>
            <p class="rate-error" data-campaign-error role="status" hidden>${copy('请选择至少一个平台。各平台达人数量为 1–10,000 的整数；预算比例合计需为 100%。请检查预算、观看量和额外费用。', 'Select at least one platform. Use 1–10,000 whole creators per platform, shares totaling 100%, a positive budget and whole views, nonnegative extras, and 0–100% contingency.')}</p>
            <a class="campaign-crosslink" href="/tools/creator-rate-calculator/">${copy('已经有心仪的达人？估算单次合作价格', 'Have a specific creator in mind? Estimate their rate')} ${icon('arrow-up-right')}</a>
          </form>
          <aside class="rate-result campaign-result" aria-label="${copy('Campaign 预算方案', 'Your campaign estimate')}" data-campaign-result></aside>
        </div>
        <section class="rate-methodology" aria-labelledby="campaign-method-title">
          <h2 id="campaign-method-title">${copy('估算方法与示例', 'Method and example')}</h2>
          <p>${copy('先根据达人体量的观看量假设、平台 CPM 区间、内容形式及调整系数估算达人费用，再计算（达人费用 + 额外费用）×（1 + 预算预留比例）。按预算规划时，以费用上限选择整数合作人次。', 'Estimate creator fees from tier view assumptions, platform CPM ranges, content formats and adjustment multipliers. Total = (creator fees + additional costs) × (1 + contingency). Budget mode selects whole partnerships using upper-end costs.')}</p>
          <h3>${copy('参数来源与限制', 'Assumptions and limits')}</h3>
          <p>${copy('V1 CPM、默认观看量与组合均为内部规划假设，尚未提供外部样本校准。每位达人按一条内容或所选组合估算；跨平台人次不去重，观看量浮动 ±20% 是情景范围。授权、投流、税费等只有填入额外费用才计入。', 'V1 CPMs, default views and mixes are internal planning assumptions; no external sample calibration is provided. Each creator supplies one post or selected bundle. Partnerships are not deduplicated across platforms; ±20% views is a scenario range. Rights, paid media and taxes count only if entered as additional costs.')}</p>
          <h3>${copy('计算示例', 'Worked example')}</h3>
          <p>${copy('假设 10 位美国小型达人各发布一条 Instagram Reel，默认领域、每位观看 8,000，内部 CPM 为 $15–$20：达人费用 $1,200–$1,600。加入 $200 额外费用及 20% 预留，总预算为 $1,680–$2,160；不代表实际报价或承诺曝光。', 'Assume 10 US Micro creators each publish one Instagram Reel, Default niche, 8,000 views each and internal CPM of $15–$20. Creator fees are $1,200–$1,600. Add $200 costs and 20% contingency for a total of $1,680–$2,160. This is not a real quote or a reach guarantee.')}</p>
        </section>
      </section>`;
    for (const [name, value] of Object.entries(values)) {
      const field = main.querySelector(`[name="${name}"]`);
      if (!field) continue;
      field.value = value;
    }
    renderPlatforms();
    renderViews();
    main.querySelector('.campaign-advanced').addEventListener('toggle', (event) => { advancedOpen = event.target.open; });
    update();
  }

  function splitEqually() {
    values.platforms.forEach((platform, index) => { values.plans[platform].share = String(index === values.platforms.length - 1 ? (10000 - Math.floor(10000 / values.platforms.length) * index) / 100 : Math.floor(10000 / values.platforms.length) / 100); });
  }

  function renderPlatforms() {
    main.querySelector('[data-campaign-plans]').innerHTML = values.platforms.map((platform) => `<section class="campaign-platform-plan" aria-labelledby="campaign-plan-${platform}"><div class="campaign-platform-plan-heading"><h4 id="campaign-plan-${platform}">${rateConfig.platforms[platform].label}</h4>${values.mode === 'budget' ? `<span data-platform-allocation="${platform}"></span>` : ''}</div><div class="campaign-fields">
      <div class="rate-field"><label for="campaign-${values.mode === 'cost' ? 'count' : 'share'}-${platform}">${rateConfig.platforms[platform].label} · ${values.mode === 'cost' ? copy('达人数量', 'creators') : copy('预算占比 (%)', 'budget share (%)')}</label><input id="campaign-${values.mode === 'cost' ? 'count' : 'share'}-${platform}" data-platform="${platform}" data-platform-field="${values.mode === 'cost' ? 'count' : 'share'}" type="number" min="${values.mode === 'cost' ? 1 : 0}" max="${values.mode === 'cost' ? config.maxCreators : 100}" step="${values.mode === 'cost' ? 1 : 0.01}" inputmode="${values.mode === 'cost' ? 'numeric' : 'decimal'}" required /></div>
      ${select('format', `${rateConfig.platforms[platform].label} · ${copy('内容形式', 'content')}`, Object.entries(config.formats[platform]).map(([key, item]) => `<option value="${key}">${copy(...item.label)} · ×${number(item.multiplier, 2)}</option>`).join(''), platform)}
    </div></section>`).join('');
    main.querySelectorAll('[data-platform-field]').forEach((field) => { field.value = values.plans[field.dataset.platform][field.dataset.platformField]; });
  }

  function renderViews() {
    main.querySelector('[data-campaign-views]').innerHTML = values.platforms.map((platform) => `<div class="campaign-platform-views"><h4>${rateConfig.platforms[platform].label}</h4><div class="campaign-views-grid">${tiers().map((tier) => `<div class="rate-field"><label for="campaign-views-${platform}-${tier}">${rateConfig.platforms[platform].label} · ${sizeName(tier)} · ${copy('观看量', 'views')}</label><input id="campaign-views-${platform}-${tier}" data-platform="${platform}" data-campaign-views-tier="${tier}" type="number" min="1" max="1000000000" step="1" inputmode="numeric" /></div>`).join('')}</div></div>`).join('');
    main.querySelectorAll('[data-campaign-views-tier]').forEach((field) => { const { platform, campaignViewsTier: tier } = field.dataset; field.value = values.plans[platform].views[tier] ?? config.views[platform][tier]; });
  }

  function update() {
    main.querySelector('[data-campaign-strategy]').textContent = values.size === 'mixed' ? copy(...config.goals[values.goal].note) : copy('按所选体量规划合作；切换为混合组合可根据目标自动搭配达人。', 'A single-size plan. Choose Mixed strategy for a creator mix tailored to your goal.');
    main.querySelectorAll('[data-campaign-preset]').forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.campaignPreset === values.budget)));
    const shareTotal = values.platforms.reduce((sum, platform) => sum + Number(values.plans[platform].share), 0);
    main.querySelector('[data-campaign-allocation-total]').textContent = values.mode === 'budget' ? `${copy('已分配', 'Allocated')}: ${number(shareTotal, 2)}%${Math.abs(shareTotal - 100) > 1e-8 || !values.platforms.length ? ` · ${copy('请调整至 100%', 'Adjust to 100%')}` : ''}` : `${copy('合作人次合计', 'Total creator partnerships')}: ${number(values.platforms.reduce((sum, platform) => sum + Number(values.plans[platform].count), 0))}`;
    main.querySelectorAll('[data-platform-allocation]').forEach((label) => { label.textContent = money(Number(values.budget) * Number(values.plans[label.dataset.platformAllocation].share) / 100, 2); });
    const result = calculateMultiPlatformCampaign({ ...values, platforms: values.platforms.map((platform) => ({ platform, ...values.plans[platform] })) });
    main.querySelector('[data-campaign-error]').hidden = Boolean(result);
    const target = main.querySelector('[data-campaign-result]');
    if (!result) { target.innerHTML = `<div class="campaign-empty">${icon('calculator')}<h2>${copy('完善需求，即可查看方案', 'Your estimate starts here')}</h2><p>${copy('请检查左侧输入。', 'Check the inputs in your campaign brief.')}</p></div>`; return; }
    const budgetMode = values.mode === 'budget';
    if (budgetMode) result.platforms.forEach((plan) => { main.querySelector(`[data-platform-allocation="${plan.platform}"]`).textContent = money(plan.allocated, 2); });
    if (budgetMode && !result.count) {
      target.innerHTML = `<div class="campaign-empty">${icon('wallet')}<h2>${copy('预算暂不足以覆盖一位达人', 'A little more budget is needed')}</h2><p>${copy('按当前需求和报价上限，建议至少准备', 'For one creator at the upper estimate, allow at least')} <b>${money(Math.ceil(result.minimumBudget))}</b>.</p><p>${copy('可以调整平台分配比例、达人体量、内容形式、额外费用或预算。', 'Try a different platform split, smaller creator size, different format, lower extras or a higher budget.')}</p></div>`; return;
    }
    const countRange = result.minCount === result.maxCount ? number(result.count) : `${number(result.minCount)}–${number(result.maxCount)}`;
    target.innerHTML = `
      <div class="rate-price-card"><div class="rate-result-heading">${icon(budgetMode ? 'users-three' : 'wallet')} ${budgetMode ? copy('预算可覆盖的合作人次', 'Creator partnerships within budget') : copy('预估 Campaign 总预算', 'Estimated campaign budget')}<span>${budgetMode ? copy('人次', 'PARTNERSHIPS') : 'USD'}</span></div><div class="rate-price"><output aria-live="polite" aria-atomic="true">${budgetMode ? countRange : range(result.low, result.high)}</output><span>${budgetMode ? `${copy('总预算', 'With a total budget of')} ${money(Number(values.budget))}` : `${number(result.count)} ${copy('合作人次 · 含额外费用及预算预留', 'partnerships · including extras & contingency')}`}</span></div><div class="rate-market">${icon('check-circle')} ${budgetMode ? copy('下方方案按报价上限规划', 'Plan below uses upper-end creator costs') : copy('一位达人，一条内容或一个组合', 'One post or selected bundle per creator')}</div></div>
      <div class="campaign-stats">
        <div><span>${copy('合作人次', 'Creator partnerships')}</span><b>${number(result.count)}</b></div>
        <div><span>${copy('预估总观看量', 'Estimated total views')}</span><b>${compact(result.viewLow)}–${compact(result.viewHigh)}</b></div>
        <div><span>${copy('整体 CPM', 'All-in campaign CPM')}</span><b>${range(result.cpmLow, result.cpmHigh)}</b></div>
        <div><span>${copy('平均达人费用', 'Avg. creator fee')}</span><b>${range(result.creatorLow / result.count, result.creatorHigh / result.count)}</b></div>
      </div>
      <div class="campaign-platform-results"><h2>${copy('各平台方案', 'Platform plan')}</h2>${result.platforms.map((plan) => `<div><span><b>${rateConfig.platforms[plan.platform].label}</b><small>${budgetMode ? `${copy('分配预算', 'Allocated')} ${money(plan.allocated, 2)} · ` : ''}${number(plan.count)} ${copy('合作人次', 'partnerships')}${budgetMode && !plan.count ? ` · ${copy('请增加分配预算', 'Increase this allocation')}` : ''}</small></span><strong>${range(plan.creatorLow, plan.creatorHigh)}<small>${copy('达人费用', 'Creator fees')}</small></strong></div>`).join('')}</div>
      <div class="campaign-mix"><h2>${copy('推荐达人组合', 'Your creator mix')}</h2><div class="campaign-mix-bar" aria-hidden="true">${result.rows.map((row) => `<span class="campaign-tier-${row.tier}" style="flex:${row.count}"></span>`).join('')}</div>${result.rows.map((row) => `<div class="campaign-mix-row"><span><i class="campaign-dot campaign-tier-${row.tier}"></i>${sizeName(row.tier)}</span><b>${number(row.count)}</b></div>`).join('')}</div>
      <details class="rate-breakdown"><summary>${copy('查看预算明细', 'See budget breakdown')} ${icon('caret-down')}</summary><div><div><span>${copy('达人合作费用', 'Creator fees')}</span><b>${range(result.creatorLow, result.creatorHigh)}</b></div><div><span>${copy('额外费用', 'Additional costs')}</span><b>${money(result.extras)}</b></div><div><span>${copy('预算预留', 'Contingency')} (${number(result.contingency, 1)}%)</span><b>${range(result.reserveLow, result.reserveHigh)}</b></div><div><span>${copy('Campaign 总计', 'Campaign total')}</span><b>${range(result.low, result.high)}</b></div>${budgetMode ? `<div><span>${copy('按报价上限后的剩余预算', 'Remaining at upper estimate')}</span><b>${money(Math.floor(result.remaining))}</b></div>` : ''}</div></details>
      ${budgetMode ? `<p class="campaign-budget-note">${copy('推荐组合以', 'The plan uses')} ${number(result.count)} ${copy('合作人次为基础，含额外费用及预算预留。数量区间上限仅在较低报价时可行。', 'partnerships, including extras and contingency. The upper count requires lower negotiated rates.')}${result.limited ? ` ${copy('至少一个平台已达到 10,000 人次的规划上限。', 'At least one platform has reached the 10,000-partnership cap.')}` : ''}</p>` : ''}
      <a class="campaign-cta" href="https://app.quickkol.com/en/login">${copy('为这场 Campaign 寻找达人', 'Find creators for your campaign')} ${icon('arrow-right')}</a>
      <div class="rate-method-note">${icon('info')}<p>${copy('基于 QuickKOL 内部报价参数与规划假设。跨平台合作人次不去重。观看量按假设上下浮动 20%，并非承诺曝光或去重触达。报价以实际洽谈为准；未填入的授权、投流、税费等不包含在内。', 'Based on QuickKOL internal rate benchmarks and planning assumptions. Creator partnerships are not deduplicated across platforms. Views use a ±20% scenario range, not guaranteed or unique reach. Final fees are negotiated; rights, paid media, taxes and other unentered costs are excluded.')}</p></div>`;
  }

  main.addEventListener('submit', (event) => event.preventDefault());
  main.addEventListener('input', (event) => {
    const field = event.target;
    if (field.type === 'checkbox') return;
    if (field.dataset.campaignViewsTier) values.plans[field.dataset.platform].views[field.dataset.campaignViewsTier] = field.value;
    else if (field.dataset.platformField) values.plans[field.dataset.platform][field.dataset.platformField] = field.value;
    else if (field.name) values[field.name] = field.value;
    update();
  });
  main.addEventListener('change', (event) => {
    const field = event.target;
    if (field.name === 'platform') {
      values.platforms = [...main.querySelectorAll('[name="platform"]:checked')].map((input) => input.value);
      splitEqually(); renderPlatforms(); renderViews(); update();
    } else if (field.dataset.platformField) { values.plans[field.dataset.platform][field.dataset.platformField] = field.value; update(); }
    else if (field.name) { values[field.name] = field.value; if (['size', 'goal'].includes(field.name)) renderViews(); update(); }
  });
  main.addEventListener('click', (event) => {
    const mode = event.target.closest('[data-campaign-mode]');
    if (mode) { values.mode = mode.dataset.campaignMode; render(); main.querySelector(`[data-campaign-mode="${values.mode}"]`).focus(); }
    if (event.target.closest('[data-campaign-reset]')) { values = initialValues(); advancedOpen = false; render(); main.querySelector('[data-campaign-reset]').focus(); }
    if (event.target.closest('[data-campaign-split]')) { splitEqually(); renderPlatforms(); update(); }
    const preset = event.target.closest('[data-campaign-preset]');
    if (preset) { values.budget = preset.dataset.campaignPreset; main.querySelector('[name="budget"]').value = values.budget; update(); }
  });
  window.addEventListener('quickkol:locale', render);

  function closeMenus() {
    document.querySelector('[data-language-menu]').hidden = true;
    document.querySelector('[data-language]').setAttribute('aria-expanded', 'false');
    document.querySelector('[data-mobile-nav]').classList.remove('is-open');
    document.querySelector('[data-menu]').setAttribute('aria-expanded', 'false');
    document.querySelector('[data-menu] i').className = 'ph ph-list';
  }
  function updateTheme() {
    const theme = document.documentElement.dataset.theme;
    document.querySelectorAll('[data-theme-value]').forEach((button) => { const active = button.dataset.themeValue === theme; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#111315' : '#ffffff';
  }
  document.addEventListener('click', async (event) => {
    const theme = event.target.closest('[data-theme-value]');
    if (theme) { document.documentElement.dataset.theme = theme.dataset.themeValue; window.localStorage.setItem('quickkol-theme', theme.dataset.themeValue); updateTheme(); }
    const language = event.target.closest('[data-language]');
    if (language) { const menu = document.querySelector('[data-language-menu]'); menu.hidden = !menu.hidden; language.setAttribute('aria-expanded', String(!menu.hidden)); }
    else if (!event.target.closest('[data-language-switcher]')) { document.querySelector('[data-language-menu]').hidden = true; document.querySelector('[data-language]').setAttribute('aria-expanded', 'false'); }
    const option = event.target.closest('[data-language-option]');
    if (option && !option.disabled) { await loadLocale(option.dataset.languageOption); setPageLocale(option.dataset.languageOption); closeMenus(); }
    if (event.target.closest('[data-menu]')) { const open = document.querySelector('[data-mobile-nav]').classList.toggle('is-open'); document.querySelector('[data-menu]').setAttribute('aria-expanded', String(open)); document.querySelector('[data-menu] i').className = `ph ${open ? 'ph-x' : 'ph-list'}`; }
    if (event.target.closest('[data-mobile-nav] a')) closeMenus();
    if (event.target.closest('[data-footer-tool]')) { const toast = document.querySelector('[data-toast]'); toast.textContent = copy('即将支持', 'Coming soon'); toast.classList.add('is-visible'); window.setTimeout(() => toast.classList.remove('is-visible'), 2600); }
  });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenus(); });
  function updateScroll() {
    document.querySelector('[data-header]').classList.toggle('is-scrolled', window.scrollY > 24);
    const max = document.documentElement.scrollHeight - window.innerHeight;
    document.querySelector('[data-scroll-progress]').style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
  }
  window.addEventListener('scroll', updateScroll, { passive: true });
  initI18n(initialLocale);
  updateTheme();
  updateScroll();
}
