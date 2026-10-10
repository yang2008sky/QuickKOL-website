import './creator-rate-calculator.css';
import { initI18n, setPageLocale, loadLocale, localizeCopy as copy, currentLocale } from './i18n.js';
import { rateConfig } from './rateConfig.js';
import { calculateCreatorRate } from './creator-rate.js';

const defaults = { platform: 'instagram', followers: '100', engagement: '3.5', views: '50', country: 'us', audience: 'average', content: 'good', niche: 'default' };

export function mountCreatorRateCalculator(initialLocale) {
  const main = document.querySelector('#main');
  main.classList.add('rate-page');
  main.dataset.i18nIgnore = '';
  let values = { ...defaults };
  let cpms = Object.fromEntries(Object.entries(rateConfig.platforms).map(([key, platform]) => [key, String(platform.cpm)]));
  let editingCpm;
  let originalCpm;
  const number = (value) => new Intl.NumberFormat(currentLocale(), { maximumFractionDigits: 2 }).format(value);
  const money = (value, exact = false) => new Intl.NumberFormat(currentLocale(), { style: 'currency', currency: 'USD', minimumFractionDigits: exact ? 2 : 0, maximumFractionDigits: 2 }).format(value);
  const countryNumber = (value) => new Intl.NumberFormat(currentLocale(), { minimumFractionDigits: 1, maximumFractionDigits: 2 }).format(value);
  const icon = (name) => `<i class="ph ph-${name}" aria-hidden="true"></i>`;
  const labels = () => ({ followers: copy('粉丝规模', 'Follower scale'), engagement: copy('互动表现', 'Engagement'), country: copy('达人国家 / 地区', 'Creator country / region'), audience: copy('受众质量', 'Audience quality'), content: copy('内容质量', 'Content quality'), niche: copy('内容领域', 'Niche') });
  const presets = (name, options) => `<div class="rate-presets">${options.map(([value, label]) => `<button type="button" data-rate-preset="${name}" data-value="${value}" aria-pressed="false">${label}</button>`).join('')}</div>`;
  const choices = (name, title, items) => `<fieldset class="rate-choices"><legend>${title}</legend><div>${Object.entries(items).map(([key, item]) => `<label><input type="radio" name="${name}" value="${key}" /><span>${copy(...item.label)}<small>×${number(item.multiplier)}</small></span></label>`).join('')}</div></fieldset>`;

  document.querySelectorAll('header a[href^="#"], footer a[href^="#"]').forEach((link) => link.setAttribute('href', `/${link.getAttribute('href')}`));
  document.querySelector('.footer-back-to-top').href = '#main';
  document.querySelector('footer a[href="/tools/creator-rate-calculator/"]').setAttribute('aria-current', 'page');
  document.querySelector('.site-footer').classList.add('is-visible');
  document.querySelector('[data-start]').addEventListener('click', () => { window.location.href = 'https://app.quickkol.com/en/login'; });

  function render() {
    main.innerHTML = `
      <div class="rate-breadcrumb"><a href="/">${copy('首页', 'Home')}</a><span>/</span><span>${copy('合作价格计算器', 'Creator rate calculator')}</span></div>
      <section class="rate-calculator" aria-labelledby="rate-title">
        <header class="rate-header"><div><span class="rate-brand">${icon('calculator')} QUICKKOL TOOLS</span><span class="rate-prototype">${copy('V1 · 参考估算', 'V1 · BENCHMARK ESTIMATE')}</span></div></header>
        <div class="rate-intro"><h1 id="rate-title">${copy('达人合作价格计算器', 'Creator rate calculator')}</h1><p>${copy('以平均播放量为核心，结合互动表现与内容价值，估算单条内容的合作价格区间。', 'Estimate a sponsorship range for one creator post, led by average views and refined by engagement and content value.')}</p></div>
        <div class="rate-layout">
          <form class="rate-form" novalidate>
            <div class="rate-section-heading"><h2><span>01</span> ${copy('达人表现', 'Creator performance')}</h2><button type="button" class="rate-reset" data-rate-reset>${icon('arrow-counter-clockwise')} ${copy('重置', 'Reset')}</button></div>
            <fieldset class="rate-platforms" aria-label="${copy('内容平台', 'Platform')}"><legend><span>${copy('内容平台', 'Platform')}</span><span class="rate-platform-note">${copy('CPM 为内部估算参数，点击铅笔可修改。', 'Internal sponsorship CPM. Click the pencil to customize.')}</span></legend>${Object.entries(rateConfig.platforms).map(([key, platform]) => `<div class="rate-platform-card"><label><input type="radio" name="platform" value="${key}" /><span>${platform.label}</span></label><div class="rate-platform-cpm"><span data-cpm-label="${key}"></span><input type="number" min="0.01" step="0.01" inputmode="decimal" data-cpm-input="${key}" aria-label="${platform.label} CPM (USD)" hidden /><button type="button" data-edit-cpm="${key}" aria-label="${copy('修改', 'Edit')} ${platform.label} CPM" aria-expanded="false">${icon('pencil-simple')}</button></div></div>`).join('')}</fieldset>
            <div class="rate-fields rate-metrics">
              <div class="rate-field rate-views"><label for="rate-views">${copy('平均观看量', 'Average views')} (K)</label><input id="rate-views" name="views" type="number" min="0" step="0.001" required inputmode="decimal" aria-describedby="rate-views-note" />${presets('views', [[10, '10K'], [50, '50K'], [100, '100K']])}</div>
              <div class="rate-field"><label for="rate-followers">${copy('粉丝量', 'Followers')} (K)</label><input id="rate-followers" name="followers" type="number" min="0" step="0.001" required inputmode="decimal" aria-describedby="rate-followers-note" />${presets('followers', [[10, '10K'], [100, '100K'], [1000, '1M']])}</div>
              <div class="rate-field"><label for="rate-engagement">${copy('互动率', 'Engagement rate')} (%)</label><input id="rate-engagement" name="engagement" type="number" min="0" max="100" step="any" required inputmode="decimal" aria-describedby="rate-engagement-note" />${presets('engagement', [[1, '1%'], [3.5, '3.5%'], [5, '5%']])}</div>
            </div>
            <p class="sr-only" id="rate-views-note">${copy('K = 1,000。平均观看量建议取最近 10 条同类型内容。', 'K = 1,000. Use average views from the last 10 posts in the same format.')}</p>
            <span class="sr-only" id="rate-followers-note">${copy('输入千位粉丝数，例如 100 表示 100,000。', 'Enter followers in thousands; 100 means 100,000.')}</span>
            <p class="sr-only" id="rate-engagement-note">${copy('互动率 =（点赞 + 评论 + 分享）÷ 播放量 × 100%。', 'Engagement = (likes + comments + shares) ÷ views × 100%.')}</p>
            <div class="rate-country-grid">
              <div class="rate-field"><label for="rate-country">${copy('达人国家 / 地区', 'Creator country / region')}</label><div class="rate-country-select"><select id="rate-country" name="country">${Object.entries(rateConfig.countryMultipliers).map(([key, country]) => `<option value="${key}">${country.flag} ${copy(...country.label)} · ×${countryNumber(country.multiplier)}</option>`).join('')}</select>${icon('caret-down')}</div></div>
              <div class="rate-country-shortcuts" role="group" aria-label="${copy('常用国家', 'Popular countries')}"><span>${copy('常用国家', 'Popular countries')}</span><div>${['us', 'jp', 'br', 'in', 'gb', 'th'].map((key) => { const country = rateConfig.countryMultipliers[key]; return `<button type="button" data-rate-country="${key}" aria-pressed="false"><span aria-hidden="true">${country.flag}</span> ${copy(...country.label)}</button>`; }).join('')}</div></div>
            </div>
            <div class="rate-section-heading rate-market-heading"><h2><span>02</span> ${copy('受众与内容质量', 'Audience & content quality')}</h2></div>
            <div class="rate-quality-grid">
              <div>${choices('audience', copy('受众质量', 'Audience quality'), rateConfig.audienceMultipliers)}</div>
              <div>${choices('content', copy('内容质量', 'Content quality'), rateConfig.contentMultipliers)}</div>
              <div class="rate-field rate-niche-field"><label id="rate-niche-label">${copy('内容领域', 'Content niche')}</label><div class="rate-niche-select"><input type="hidden" name="niche" /><button type="button" role="combobox" aria-labelledby="rate-niche-label" aria-describedby="rate-niche-note" aria-controls="rate-niche-options" aria-haspopup="listbox" aria-expanded="false" data-niche-toggle><span data-niche-selection></span>${icon('caret-down')}</button><div id="rate-niche-options" role="listbox" aria-labelledby="rate-niche-label" hidden>${Object.entries(rateConfig.nicheMultipliers).map(([key, niche]) => `<button type="button" role="option" tabindex="-1" data-rate-niche="${key}" aria-selected="false">${niche.icon ? icon(niche.icon) : ''}<span>${copy(...niche.label)}</span><small>×${number(niche.multiplier)}</small></button>`).join('')}</div></div></div>
            </div>
            <span class="sr-only" id="rate-niche-note">${copy('只能选择一个内容领域。', 'Choose one primary niche.')}</span>
            <a class="rate-campaign-link" href="/tools/influencer-campaign-cost-calculator/">${copy('规划多位达人的合作？估算 Campaign 预算', 'Planning multiple partnerships? Estimate campaign cost')} ${icon('arrow-up-right')}</a>
            <p class="rate-error" role="status" data-rate-error hidden>${copy('请填写有效数据：K 单位最多三位小数，互动率为 0–100%，所选平台 CPM 大于 0。', 'Enter valid data: up to 3 decimal places for K values, engagement 0–100%, and a positive CPM for the selected platform.')}</p>
          </form>
          <aside class="rate-result" aria-label="${copy('参考报价', 'Reference estimate')}">
            <div class="rate-price-card"><div class="rate-result-heading">${icon('sparkle')} ${copy('预估合作价格', 'Estimated sponsorship rate')}<span>USD</span></div><div class="rate-price"><output data-rate-price aria-live="polite" aria-atomic="true"></output><span>${copy('每条合作内容 · 参考区间', 'per sponsored post · reference range')}</span></div><p>${copy('合理合作区间', 'Fair market range')}</p><div class="rate-market">${icon('chart-line-up')} <span data-rate-platform></span></div></div>
            <div class="rate-explanation"><h2>${copy('为什么是这个价格？', 'What drives this estimate?')}</h2><p data-rate-explanation></p></div>
            <div class="rate-value-guide" data-rate-guide></div>
            <details class="rate-breakdown"><summary>${copy('查看计算明细', 'See the calculation')} ${icon('caret-down')}</summary><div data-rate-breakdown></div></details>
            <div class="rate-method-note">${icon('info')}<p>${copy('基于您填写的数据和 QuickKOL 参考参数估算，实际报价取决于合作需求。额外制作、内容授权与独家合作费用需另议。', 'A reference estimate based on your inputs and QuickKOL benchmarks. Final rates depend on campaign requirements. Additional production, usage rights and exclusivity are negotiated separately.')}</p></div>
          </aside>
        </div>
        <section class="rate-methodology" aria-labelledby="rate-method-title">
          <h2 id="rate-method-title">${copy('估算方法与示例', 'Method and example')}</h2>
          <p>${copy('估算中点 = 平均观看量 ÷ 1,000 × 平台 CPM × 粉丝、互动、国家、受众、内容与领域系数。应用平台最低报价后，以中点的 80%–120% 生成区间，再按报价档位取整。', 'Midpoint = average views / 1,000 × platform CPM × follower, engagement, country, audience, content and niche multipliers. After applying the platform minimum, the range is 80%–120% of the midpoint, rounded to quote increments.')}</p>
          <h3>${copy('参数来源与限制', 'Assumptions and limits')}</h3>
          <p>${copy('V1 参数由 QuickKOL 内部设定，并非市场统计或广告平台 CPM，尚未提供外部样本校准。可用实际合作数据修改 CPM。结果不含额外制作、内容授权与排他费用，也不承诺观看量或成交。', 'V1 parameters are internal QuickKOL assumptions, not market statistics or advertising CPMs; no external sample calibration is provided. Edit CPM using your own deal data. Extra production, usage rights and exclusivity are excluded; views and sales are not guaranteed.')}</p>
          <h3>${copy('计算示例', 'Worked example')}</h3>
          <p>${copy('假设 Instagram 平均观看 10,000、粉丝 25,000、互动率 2%，选择美国、一般受众、良好内容及默认领域，CPM 为 $15：基准为 $150，各系数均为 1，参考区间为 $120–$180。这是计算示例，不是实际达人报价。', 'Assume Instagram: 10,000 average views, 25,000 followers, 2% engagement, United States, Average audience, Good content and Default niche, with $15 CPM. The base is $150, all multipliers are 1, and the range is $120–$180. This is an example, not a real creator quote.')}</p>
        </section>
      </section>`;
    Object.entries(values).forEach(([name, value]) => {
      if (['platform', 'audience', 'content'].includes(name)) main.querySelector(`[name="${name}"][value="${value}"]`).checked = true;
      else main.querySelector(`[name="${name}"]`).value = value;
    });
    main.querySelectorAll('[data-cpm-input]').forEach((input) => { input.value = cpms[input.dataset.cpmInput]; });
    editingCpm = undefined;
    document.title = copy('达人合作价格计算器 | QuickKOL', 'Creator rate calculator | QuickKOL');
    document.querySelector('meta[name="description"]').content = copy('结合平均播放量、平台、互动率、受众质量和内容质量，估算达人的单条内容合作价格区间。', 'Estimate a creator sponsorship range using average views, platform, engagement, audience quality and content quality.');
    update();
  }

  function update() {
    const form = main.querySelector('form');
    values = Object.fromEntries(new FormData(form));
    const calculation = { ...values, views: Math.round(Number(values.views) * 1000), followers: Math.round(Number(values.followers) * 1000), cpm: cpms[values.platform] };
    const validCpm = main.querySelector(`[data-cpm-input="${values.platform}"]`).validity.valid;
    const result = validCpm && [...form.elements].filter((field) => field.name).every((field) => field.validity.valid) ? calculateCreatorRate(calculation) : null;
    main.querySelectorAll('[data-cpm-label]').forEach((label) => {
      const cpm = Number(cpms[label.dataset.cpmLabel]);
      label.textContent = `${Number.isFinite(cpm) && cpm > 0 ? money(cpm) : '—'} CPM`;
    });
    main.querySelector('[data-rate-error]').hidden = Boolean(result);
    const platform = rateConfig.platforms[values.platform];
    const country = rateConfig.countryMultipliers[values.country];
    const niche = rateConfig.nicheMultipliers[values.niche];
    main.querySelector('[data-niche-selection]').innerHTML = `${niche.icon ? icon(niche.icon) : ''}<span>${copy(...niche.label)} · ×${number(niche.multiplier)}</span>`;
    main.querySelectorAll('[data-rate-niche]').forEach((option) => option.setAttribute('aria-selected', String(option.dataset.rateNiche === values.niche)));
    main.querySelector('[data-rate-platform]').textContent = `${platform.label} · ${Number(cpms[values.platform]) > 0 ? money(Number(cpms[values.platform])) : '—'} CPM`;
    main.querySelector('[data-rate-price]').textContent = result ? `${money(result.roundedLow)} – ${money(result.roundedHigh)}` : '—';
    const factorLabels = labels();
    if (result) {
      const premiumLabels = { ...factorLabels, engagement: copy('较强的互动表现', 'strong engagement'), audience: copy('高质量受众', 'high audience quality'), content: copy('优质内容', 'premium content'), niche: copy(...rateConfig.nicheMultipliers[values.niche].label) };
      const premiums = Object.entries(result.multipliers).filter(([, value]) => value > 1).map(([key]) => premiumLabels[key]);
      const discounts = Object.entries(result.multipliers).filter(([, value]) => value < 1).map(([key]) => key === 'country' ? copy(`${copy(...country.label)}市场系数`, `${copy(...country.label)} market adjustment`) : factorLabels[key]);
      main.querySelector('[data-rate-explanation]').textContent = [
        copy(`主要由 ${number(calculation.views)} 次平均播放量决定基础价值。`, `Primarily driven by ${number(calculation.views)} average views on ${platform.label}.`),
        premiums.length ? copy(`溢价因素：${premiums.join('、')}。`, `Premiums for ${premiums.join(', ')}.`) : '',
        discounts.length ? copy(`下调因素：${discounts.join('、')}。`, `Discounts for ${discounts.join(', ')}.`) : '',
        !premiums.length && !discounts.length ? copy('其余参数均处于基准档位。', 'All other inputs are at their baseline level.') : '',
      ].filter(Boolean).join(' ');
      main.querySelector('[data-rate-guide]').innerHTML = `
        <div><span>${copy('低于', 'Below')} ${money(result.roundedLow)}</span><b>${copy('品牌合作性价比较高', 'Good value for brands')}</b></div>
        <div><span>${money(result.roundedLow)} – ${money(result.roundedHigh)}</span><b>${copy('合理合作区间', 'Fair market range')}</b></div>
        <div><span>${copy('高于', 'Above')} ${money(result.roundedHigh)}</span><b>${copy('溢价报价', 'Premium pricing')}</b></div>`;
      main.querySelector('[data-rate-breakdown]').innerHTML = `
        <div><span>${copy('播放量基础价值', 'Base performance value')}</span><b>${money(result.baseValue, true)}</b></div>
        <p class="rate-formula">${number(calculation.views)} ÷ 1,000 × ${money(Number(cpms[values.platform]))}</p>
        ${Object.entries(result.multipliers).map(([key, value]) => `<div><span>${factorLabels[key]}</span><b>×${number(value)}</b></div>`).join('')}`;
    } else {
      main.querySelector('[data-rate-explanation]').textContent = copy('填写有效数据后，查看参考区间和价格影响因素。', 'Enter valid inputs to see your reference range and pricing factors.');
      main.querySelector('[data-rate-guide]').innerHTML = '';
      main.querySelector('[data-rate-breakdown]').innerHTML = '';
    }
    main.querySelectorAll('[data-rate-preset]').forEach((button) => button.setAttribute('aria-pressed', String(values[button.dataset.ratePreset] !== '' && Number(values[button.dataset.ratePreset]) === Number(button.dataset.value))));
    main.querySelectorAll('[data-rate-country]').forEach((button) => button.setAttribute('aria-pressed', String(values.country === button.dataset.rateCountry)));
  }

  function closeNicheMenu(focus = false) {
    main.querySelector('#rate-niche-options').hidden = true;
    const toggle = main.querySelector('[data-niche-toggle]');
    toggle.setAttribute('aria-expanded', 'false');
    if (focus) toggle.focus();
  }

  main.addEventListener('click', (event) => {
    if (event.target.closest('[data-niche-toggle]')) {
      const menu = main.querySelector('#rate-niche-options');
      menu.hidden = !menu.hidden;
      main.querySelector('[data-niche-toggle]').setAttribute('aria-expanded', String(!menu.hidden));
    }
    const nicheOption = event.target.closest('[data-rate-niche]');
    if (nicheOption) { main.querySelector('[name="niche"]').value = nicheOption.dataset.rateNiche; update(); closeNicheMenu(true); }

    const card = event.target.closest('.rate-platform-card');
    if (card && !event.target.closest('button, input, label')) { card.querySelector('[name="platform"]').checked = true; update(); }
    const countryButton = event.target.closest('[data-rate-country]');
    if (countryButton) { main.querySelector('[name="country"]').value = countryButton.dataset.rateCountry; update(); }
    const preset = event.target.closest('[data-rate-preset]');
    if (preset) { main.querySelector(`[name="${preset.dataset.ratePreset}"]`).value = preset.dataset.value; update(); }
    const edit = event.target.closest('[data-edit-cpm]');
    if (edit) {
      const key = edit.dataset.editCpm;
      if (editingCpm === key) closeCpmEditor();
      else {
        if (editingCpm && !closeCpmEditor()) return;
        editingCpm = key;
        originalCpm = cpms[key];
        const input = main.querySelector(`[data-cpm-input="${key}"]`);
        main.querySelector(`[data-cpm-label="${key}"]`).hidden = true;
        input.hidden = false;
        edit.setAttribute('aria-expanded', 'true');
        edit.setAttribute('aria-label', `${copy('确认', 'Confirm')} ${rateConfig.platforms[key].label} CPM`);
        edit.innerHTML = icon('check');
        input.focus();
        input.select();
      }
    }
    if (event.target.closest('[data-rate-reset]')) {
      values = { ...defaults };
      cpms = Object.fromEntries(Object.entries(rateConfig.platforms).map(([key, platform]) => [key, String(platform.cpm)]));
      render();
      main.querySelector('[data-rate-reset]').focus();
    }
  });
  function closeCpmEditor() {
    const input = main.querySelector(`[data-cpm-input="${editingCpm}"]`);
    if (!input.value || !input.reportValidity()) { input.focus(); return false; }
    input.hidden = true;
    main.querySelector(`[data-cpm-label="${editingCpm}"]`).hidden = false;
    const button = main.querySelector(`[data-edit-cpm="${editingCpm}"]`);
    button.setAttribute('aria-expanded', 'false');
    button.setAttribute('aria-label', `${copy('修改', 'Edit')} ${rateConfig.platforms[editingCpm].label} CPM`);
    button.innerHTML = icon('pencil-simple');
    button.focus();
    editingCpm = undefined;
    return true;
  }
  main.addEventListener('input', (event) => {
    if (event.target.matches('[data-cpm-input]')) cpms[event.target.dataset.cpmInput] = event.target.value;
    update();
  });
  main.addEventListener('keydown', (event) => {
    if (event.target.closest('.rate-niche-select')) {
      const options = [...main.querySelectorAll('[data-rate-niche]')];
      const index = options.indexOf(event.target);
      if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
        event.preventDefault();
        main.querySelector('#rate-niche-options').hidden = false;
        main.querySelector('[data-niche-toggle]').setAttribute('aria-expanded', 'true');
        const next = event.key === 'Home' ? 0 : event.key === 'End' ? options.length - 1 : index < 0 ? options.findIndex((option) => option.dataset.rateNiche === values.niche) : (index + (event.key === 'ArrowDown' ? 1 : -1) + options.length) % options.length;
        options[next].focus();
      }
      if (event.key === 'Escape') { event.preventDefault(); closeNicheMenu(true); }
      if (event.key === 'Tab') closeNicheMenu(index >= 0);
    }

    if (!event.target.matches('[data-cpm-input]')) return;
    if (event.key === 'Enter') { event.preventDefault(); closeCpmEditor(); }
    if (event.key === 'Escape') {
      cpms[editingCpm] = originalCpm;
      event.target.value = originalCpm;
      closeCpmEditor();
      update();
    }
  });
  main.addEventListener('change', update);
  main.addEventListener('submit', (event) => event.preventDefault());
  window.addEventListener('quickkol:locale', render);

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
  document.addEventListener('click', async (event) => {
    if (!event.target.closest('.rate-niche-select')) closeNicheMenu();
    const themeButton = event.target.closest('[data-theme-value]');
    if (themeButton) {
      document.documentElement.dataset.theme = themeButton.dataset.themeValue;
      window.localStorage.setItem('quickkol-theme', themeButton.dataset.themeValue);
      updateTheme();
    }
    const languageButton = event.target.closest('[data-language]');
    if (languageButton) {
      const menu = document.querySelector('[data-language-menu]');
      menu.hidden = !menu.hidden;
      languageButton.setAttribute('aria-expanded', String(!menu.hidden));
    } else if (!event.target.closest('[data-language-switcher]') && !event.target.closest('[data-language-option]')) {
      document.querySelector('[data-language-menu]').hidden = true;
      document.querySelector('[data-language]').setAttribute('aria-expanded', 'false');
    }
    const option = event.target.closest('[data-language-option]');
    if (option && !option.disabled) { await loadLocale(option.dataset.languageOption); setPageLocale(option.dataset.languageOption); closeMenus(); }
    if (event.target.closest('[data-menu]')) {
      const open = document.querySelector('[data-mobile-nav]').classList.toggle('is-open');
      document.querySelector('[data-menu]').setAttribute('aria-expanded', String(open));
      document.querySelector('[data-menu] i').className = `ph ${open ? 'ph-x' : 'ph-list'}`;
    }
    if (event.target.closest('[data-mobile-nav] a')) closeMenus();
    if (event.target.closest('[data-footer-tool]')) {
      const toast = document.querySelector('[data-toast]');
      toast.textContent = copy('即将支持', 'Coming soon');
      toast.classList.add('is-visible');
      window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
    }
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
