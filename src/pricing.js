import './pricing.css';
import { initI18n, setPageLocale, localizeCopy, applyTranslations, loadLocale } from './i18n.js';

// USD prices confirmed for this page; yearly prices are billed once per year.
const plans = [
  { name: 'Launch', price: 29, yearlyPrice: 228, searches: 50, emails: 300, monitoring: 100, icon: 'ph-rocket-launch', description: ['轻量起步，开启第一次达人合作', 'A simple start for your first creator campaign'] },
  { name: 'Performance', price: 59, yearlyPrice: 588, searches: 500, emails: 3000, monitoring: 600, icon: 'ph-lightning', description: ['让日常达人营销，更高效地运转', 'More capacity for your everyday creator marketing'] },
  { name: 'Max', price: 299, yearlyPrice: 3108, searches: 3000, emails: 20000, monitoring: 1000, icon: 'ph-users-three', description: ['为规模化合作与团队协作而准备', 'Built for creator marketing at scale'] },
];
const check = '<i class="ph ph-check" aria-hidden="true"></i>';
const arrow = '<i class="ph ph-arrow-right" aria-hidden="true"></i>';
const workspaceUrl = 'https://app.quickkol.com/en/login';
const creditBilling = [
  { feature: ['QuickKOL AI Flash', 'QuickKOL AI Flash'], icon: 'ph-lightning', credits: 1, unit: ['2 位达人', '2 creators'], detail: ['快速获取结果', 'fast results'] },
  { feature: ['QuickKOL AI 深度搜索', 'QuickKOL AI Deep Search'], icon: 'ph-magnifying-glass', credits: 1, unit: ['位达人', 'creator'], detail: ['实时数据与深度分析', 'live data and deeper analysis'] },
  { feature: ['邮箱查找', 'Find emails'], icon: 'ph-envelope-simple', credits: 0.2, unit: ['有效达人链接', 'valid creator link'] },
  { feature: ['受众分析', 'Audience analysis'], icon: 'ph-users-three', credits: 40, unit: ['次分析', 'analysis'] },
  { feature: ['虚假粉丝检测', 'Fake follower detection'], icon: 'ph-shield-check', credits: 30, unit: ['份报告', 'report'] },
  { feature: ['Campaign 数据监控', 'Campaign tracking'], icon: 'ph-chart-line-up', credits: 0.2, unit: ['次采集', 'collection'] },
  { feature: ['评论情感分析', 'Comment sentiment analysis'], icon: 'ph-chat-text', credits: 1, unit: ['50 条评论', '50 comments'] },
];

export function mountPricing(initialLocale) {
  let locale = initialLocale;
  let billingCycle = 'monthly';
  let priceFrame;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const main = document.querySelector('#main');
  const copy = localizeCopy;
  const number = (value) => value.toLocaleString('en-US');
  main.classList.add('pricing-page');
  document.querySelectorAll('header a[href^="#"], footer a[href^="#"]').forEach((link) => {
    link.setAttribute('href', `/${link.getAttribute('href')}`);
  });
  document.querySelector('.footer-back-to-top').setAttribute('href', '#main');
  document.querySelectorAll('header a[href="/pricing/"]').forEach((link) => link.setAttribute('aria-current', 'page'));
  document.querySelector('.site-footer').classList.add('is-visible');
  document.querySelector('[data-start]').addEventListener('click', () => { window.location.href = workspaceUrl; });

  function render() {
    const openFaqs = [...main.querySelectorAll('details[open]')].map((item) => item.id);
    main.innerHTML = `
      <section class="pricing-hero" aria-labelledby="pricing-title">
        <p class="eyebrow">SIMPLE PLANS. MORE POSSIBILITIES.</p>
        <h1 id="pricing-title">${copy('为下一次达人合作，<br><span>选择合适的计划</span>', 'The right plan.<br><span>Your next creator campaign.</span>')}</h1>
        <p class="pricing-description">${copy('从第一次搜索到规模化合作，让每一步增长都有合适的支持。', 'From your first search to campaigns at scale, find the support you need to grow.')}</p>
        <div class="pricing-billing-toggle" role="group" aria-label="${copy('计费周期', 'Billing frequency')}" data-billing-toggle>
          <span class="pricing-billing-thumb" aria-hidden="true"></span>
          <button type="button" data-billing-cycle="monthly" aria-pressed="${billingCycle === 'monthly'}">${copy('月付', 'Monthly')}</button>
          <button type="button" data-billing-cycle="yearly" aria-pressed="${billingCycle === 'yearly'}">${copy('年付', 'Yearly')}<span>${copy('更优惠', 'Save more')}</span></button>
        </div>
        <p class="pricing-billing-status" role="status" aria-live="polite" data-billing-status><strong data-billing-selection></strong><span data-billing-detail></span></p>
      </section>

      <section class="pricing-plans" aria-label="${copy('订阅套餐', 'Subscription plans')}">
        <div class="pricing-grid">
          ${plans.map((plan, index) => `
            <article class="pricing-card ${index === 1 ? 'is-recommended' : ''}" aria-labelledby="plan-${plan.name}">
              ${index === 1 ? `<div class="pricing-recommendation"><i class="ph ph-sparkle" aria-hidden="true"></i>${copy('最受欢迎', 'Most popular')}</div>` : ''}
              <div class="pricing-plan-heading"><span class="pricing-plan-icon"><i class="ph ${plan.icon}" aria-hidden="true"></i></span><h2 id="plan-${plan.name}">${plan.name} <small>Plan</small></h2></div>
              <p class="pricing-plan-description">${copy(...plan.description)}</p>
              <div class="pricing-price-block">
                <p class="pricing-price"><span class="pricing-currency">$</span><strong data-plan-price>${billingCycle === 'yearly' ? plan.yearlyPrice / 12 : plan.price}</strong><span>${copy('/ 月', '/ month')}</span></p>
                <p class="pricing-price-note"><span data-billing-note></span><small class="pricing-savings" data-plan-savings></small></p>
              </div>
              <a class="button ${index === 1 ? 'button-primary' : 'button-secondary'}" href="${workspaceUrl}">${copy(`选择 ${plan.name}`, `Choose ${plan.name}`)} ${arrow}</a>
              <div class="pricing-card-features">
                <p>${copy('每月套餐额度', 'Monthly plan allowances')}</p>
                <ul class="pricing-quota-list">
                  <li>${check}<span>${copy('达人搜索', 'Creator searches')}</span><b>${number(plan.searches)}</b></li>
                  <li>${check}<span>${copy('邮箱匹配', 'Email matches')}</span><b>${number(plan.emails)}</b></li>
                  <li>${check}<span>${copy('数据监控', 'Data monitoring')}</span><b>${number(plan.monitoring)}</b></li>
                </ul>
                <ul class="pricing-feature-list">
                  ${[['资料洞察', 'Profile insights'], ['达人收藏', 'Saved creators'], ['高级筛选', 'Advanced filters']].map((label) => `<li>${check}<span>${copy(...label)}</span><small>${copy('不限量', 'Unlimited')}</small></li>`).join('')}
                  ${[['批量邮箱匹配', 'Bulk email matching'], ['数据导出', 'Data export'], ['成员管理', 'Member management']].map((label, feature) => {
                    const included = feature === 2 ? index === 2 : index > 0;
                    return `<li class="${included ? '' : 'is-unavailable'}">${included ? check : '<i class="ph ph-minus" aria-hidden="true"></i>'}<span>${copy(...label)}</span><small>${included ? copy('不限量', 'Unlimited') : copy('不包含', 'Not included')}</small></li>`;
                  }).join('')}
                </ul>
              </div>
            </article>
          `).join('')}
        </div>
        <aside class="pricing-free-note"><span class="pricing-free-icon"><i class="ph ph-gift" aria-hidden="true"></i></span><div><b>${copy('先体验，再选择', 'Try it before you choose')}</b><p>${copy('免费用户每天可获得 3 个积分，用于体验基础搜索和达人数据。', 'Free users receive 3 credits a day to try basic search and creator data.')}</p></div><a href="${workspaceUrl}">${copy('免费开始', 'Start free')} ${arrow}</a></aside>
      </section>

      <section class="pricing-usage" id="usage" aria-labelledby="usage-title">
        <div class="pricing-section-heading"><p class="eyebrow">HOW BILLING WORKS</p><h2 id="usage-title">${copy('用量与计费，清楚明白', 'How billing works')}</h2><p>${copy('按功能与实际用量扣除积分，每一项计费都有明确标准。', 'Credits are charged by feature and usage, with a clear rate for every action.')}</p></div>
        <div class="pricing-usage-table"><table aria-labelledby="usage-title"><thead><tr><th scope="col">${copy('功能', 'Feature')}</th><th scope="col">${copy('积分计费', 'Credit billing')}</th></tr></thead><tbody>
          ${creditBilling.map((item) => `<tr><th scope="row"><i class="ph ${item.icon}" aria-hidden="true"></i>${copy(...item.feature)}</th><td><strong class="pricing-billing-rate">${item.credits} ${copy('积分', item.credits === 1 ? 'credit' : 'credits')} / ${copy(...item.unit)}</strong>${item.detail ? `<span class="pricing-billing-detail">${copy(...item.detail)}</span>` : ''}</td></tr>`).join('')}
        </tbody></table></div>
        <div class="pricing-billing-notes">
          <p>${copy('评论情感分析按实际采集的评论数计费，每 50 条评论消耗 1 积分，不足 50 条按 50 条计。', 'Comment sentiment analysis costs 1 credit per 50 comments collected, rounded up to the next group of 50.')}</p>
          <p>${copy('AI 搜索、相似达人查找与封面搜索按实际交付的达人数量计费；Campaign 数据监控按每次数据采集计费，系统失败时自动退还积分；受众分析因系统失败时也会自动退还积分。', 'AI search, find similar, and cover search are charged per delivered creator. Campaign tracking is charged per data collection, and system failures are refunded automatically. Audience-analysis system failures are also refunded automatically.')}</p>
          <p>${copy('邮箱查找按有效且去重后的达人主页链接计费，即使该达人没有公开邮箱，也会扣除相应积分。', 'Email lookup is charged per valid deduplicated creator profile link, even when no public email is available.')}</p>
        </div>
        <h3 class="pricing-automation-title" id="automation-title">${copy('自动化', 'Automation')}</h3>
        <div class="pricing-usage-table"><table aria-labelledby="automation-title"><thead><tr><th scope="col">${copy('功能', 'Feature')}</th><th scope="col">${copy('积分计费', 'Credit billing')}</th></tr></thead><tbody>
          <tr><th scope="row"><i class="ph ph-flow-arrow" aria-hidden="true"></i>${copy('端到端 Campaign 自动化', 'End-to-end campaign automation')}</th><td><strong class="pricing-billing-rate">25 ${copy('积分 / 位达人', 'credits / creator')}</strong></td></tr>
        </tbody></table></div>
        <p class="pricing-usage-note"><i class="ph ph-info" aria-hidden="true"></i>${copy('「不限量」指该项功能的使用权限，不代表搜索、邮箱匹配或数据监控额度不限量。', '“Unlimited” refers to access to that feature; search, email matching and monitoring allowances still apply.')}</p>
      </section>

      <section class="pricing-faq" id="faq" aria-labelledby="pricing-faq-title">
        <div class="pricing-section-heading"><p class="eyebrow">A FEW MORE DETAILS</p><h2 id="pricing-faq-title">${copy('关于订阅，你可能想知道', 'Questions? Let’s clear them up.')}</h2><p>${copy('选择之前，把常见问题讲清楚。', 'A few things to know before choosing your plan.')}</p></div>
        <div class="pricing-faq-list">${[
          [['可以先免费试用吗？', 'Can I try QuickKOL for free?'], ['可以。免费用户每天获得 3 个积分，可用于体验基础搜索和查看达人数据，再根据使用需求选择套餐。', 'Yes. Free users receive 3 credits per day to try basic search and creator data before choosing a plan.']],
          [['月付和年付有什么区别？', 'How do monthly and yearly billing differ?'], ['月付按月收取 $29 / $59 / $299。年付一次收取全年费用 $228 / $588 / $3,108，折合每月 $19 / $49 / $259；套餐卡片中的额度均为每月额度。', 'Monthly plans cost $29 / $59 / $299 per month. Yearly plans are billed once at $228 / $588 / $3,108 per year, equivalent to $19 / $49 / $259 per month. The allowances shown on each card are monthly allowances.']],
          [['可以升级或降级套餐吗？', 'Can I upgrade or downgrade my plan?'], ['可以。套餐变更通常在下一个计费周期开始时生效，在此之前，当前套餐的额度与权益继续有效。', 'Yes. Plan changes typically take effect at the start of the next billing cycle. Your current quota and features remain in effect until then.']],
          [['支持哪些支付方式？', 'What payment methods are supported?'], ['QuickKOL 通过 Stripe 处理付款。你可以在结账页面使用信用卡，或选择 Stripe 支持的其他方式，例如支付宝；具体以结账页显示为准。', 'Payments are processed through Stripe. Use a credit card or other supported methods such as Alipay. Available methods are shown at checkout.']],
          [['如何查看剩余额度和重置时间？', 'Where can I check my remaining allowance?'], ['打开 QuickKOL 账户页面，即可查看剩余积分和下次重置时间。不同操作会消耗相应额度，例如达人搜索、数据查看或高级功能。', 'Open your QuickKOL account page to see your remaining credits and next reset time. Credits are deducted by action, such as creator searches, data views or advanced features.']],
          [['团队协作应该选择哪个套餐？', 'Which plan supports team collaboration?'], ['Max 套餐包含成员管理；Performance 和 Max 均支持批量邮箱匹配与数据导出。如需了解团队席位或更大规模的使用需求，请联系 support@quickkol.com。', 'Max includes member management. Performance and Max both support bulk email matching and data export. For team seats or larger usage requirements, contact support@quickkol.com.']],
        ].map(([question, answer], index) => `<details id="pricing-faq-${index}" ${openFaqs.includes(`pricing-faq-${index}`) ? 'open' : ''}><summary>${copy(...question)}<i class="ph ph-plus" aria-hidden="true"></i></summary><p>${copy(...answer)}</p></details>`).join('')}</div>
      </section>

      <section class="final-cta" id="get-started" aria-labelledby="final-cta-title">
        <div class="final-cta-content">
          <p class="eyebrow"><i class="ph ph-sparkle" aria-hidden="true"></i> YOUR NEXT CREATOR CAMPAIGN</p>
          <h2 id="final-cta-title">${copy('把下一份 Brief，', 'Give your next brief')}<br>${copy('交给 QuickKOL', 'to QuickKOL')}</h2>
          <p class="final-cta-description">${copy('描述你的目标，让 Agent 帮你规划、寻找达人并准备个性化触达。', 'Describe your goal and let Agent plan, find creators, and prepare personalized outreach.')}</p>
          <div class="final-cta-actions">
            <a class="button final-cta-primary" href="${workspaceUrl}">${copy('免费开始', 'Start free')} ${arrow}</a>
            <a class="button final-cta-secondary" href="/#agent-team"><i class="ph ph-play-circle" aria-hidden="true"></i>${copy('先体验 Agent', 'Try Agent first')}</a>
          </div>
        </div>
      </section>
    `;
    const footerDescription = document.querySelector('.footer-brand-block > p');
    footerDescription.innerHTML = copy('用 AI 连接品牌与合适的创作者，<br>将达人发现、数据分析与个性化触达，<br>串成一条可控的营销工作流。', 'Connect brands with the right creators through AI.<br>Bring discovery, analytics and personalized outreach<br>into one controlled marketing workflow.');
    document.title = copy('QuickKOL 定价 — 选择合适的达人营销计划', 'QuickKOL Pricing — Find your creator marketing plan');
    document.querySelector('meta[name="description"]').content = copy('比较 QuickKOL Launch $29/月、Performance $59/月与 Max $299/月的功能与额度。选择年付，折合每月 $19 / $49 / $259，所有价格均为 USD。', 'Compare QuickKOL Launch at $29/month, Performance at $59/month and Max at $299/month. Yearly billing is equivalent to $19 / $49 / $259 per month. All prices are in USD.');
    updateBilling();
  }

  function updateBilling(animate = false) {
    window.cancelAnimationFrame(priceFrame);
    const yearly = billingCycle === 'yearly';
    const toggle = main.querySelector('[data-billing-toggle]');
    toggle.dataset.cycle = billingCycle;
    toggle.querySelectorAll('[data-billing-cycle]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.billingCycle === billingCycle));
    });
    main.querySelector('[data-billing-status]').dataset.cycle = billingCycle;
    main.querySelector('[data-billing-selection]').textContent = yearly
      ? copy('已选择年付', 'Annual billing selected')
      : copy('已选择月付', 'Monthly billing selected');
    const maxSavings = Math.max(...plans.map((plan) => plan.price * 12 - plan.yearlyPrice));
    main.querySelector('[data-billing-detail]').textContent = yearly
      ? copy(`每年支付一次 · 每年最高省 $${number(maxSavings)}`, `Pay once yearly · Save up to $${number(maxSavings)}/year`)
      : copy('按月支付 · 灵活开始', 'Pay month to month · Start flexibly');
    const priceChanges = plans.map((plan, index) => {
      const card = main.querySelectorAll('.pricing-card')[index];
      const price = card.querySelector('[data-plan-price]');
      const target = yearly ? plan.yearlyPrice / 12 : plan.price;
      const from = Number(price.textContent.replaceAll(',', ''));
      card.querySelector('[data-billing-note]').textContent = yearly
        ? copy(`每年支付 $${number(plan.yearlyPrice)} USD`, `$${number(plan.yearlyPrice)} USD billed yearly`)
        : copy('按月支付 · USD', 'Billed monthly · USD');
      const savings = card.querySelector('[data-plan-savings]');
      savings.hidden = !yearly;
      const saved = plan.price * 12 - plan.yearlyPrice;
      savings.textContent = copy(`每年省 $${number(saved)}`, `Save $${number(saved)}/year`);
      if (animate && !reducedMotion.matches) {
        const block = card.querySelector('.pricing-price-block');
        block.getAnimations().forEach((animation) => animation.cancel());
        block.animate([{ opacity: .55, transform: 'translateY(6px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 360, easing: 'cubic-bezier(.22, 1, .36, 1)' });
      } else price.textContent = number(target);
      return { price, from, target };
    });
    if (!animate || reducedMotion.matches) return;
    const started = performance.now();
    function tick(now) {
      const progress = Math.min((now - started) / 360, 1);
      const eased = 1 - (1 - progress) ** 3;
      priceChanges.forEach(({ price, from, target }) => { price.textContent = number(Math.round(from + (target - from) * eased)); });
      if (progress < 1) priceFrame = window.requestAnimationFrame(tick);
    }
    priceFrame = window.requestAnimationFrame(tick);
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
  document.addEventListener('click', async (event) => {
    const billingButton = event.target.closest('[data-billing-cycle]');
    if (billingButton && billingButton.dataset.billingCycle !== billingCycle) {
      billingCycle = billingButton.dataset.billingCycle;
      updateBilling(true);
    }
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
    if (option && !option.disabled) {
      await loadLocale(option.dataset.languageOption);
      locale = option.dataset.languageOption;
      window.localStorage.setItem('quickkol-language', locale);
      setPageLocale(locale);
      render();
      applyTranslations();
      closeMenus();
    }
    const menuButton = event.target.closest('[data-menu]');
    if (menuButton) {
      const open = document.querySelector('[data-mobile-nav]').classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.querySelector('i').className = `ph ${open ? 'ph-x' : 'ph-list'}`;
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
  initI18n(locale);
  render();
  applyTranslations();
  updateTheme();
  updateScroll();
}
