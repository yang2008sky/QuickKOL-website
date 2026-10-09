import './contact.css';
import { initI18n, setPageLocale, localizeCopy, applyTranslations, loadLocale } from './i18n.js';

const supportEmail = 'support@quickkol.com';
const topics = [
  ['product', '产品与套餐咨询', 'Product & plan questions'],
  ['support', '账户与使用支持', 'Account & product support'],
  ['billing', '订阅与积分账单', 'Subscriptions & credits'],
  ['other', '其他问题', 'Something else'],
];
const arrow = '<i class="ph ph-arrow-right" aria-hidden="true"></i>';

export function mountContact(initialLocale) {
  let locale = initialLocale;
  const main = document.querySelector('#main');
  const copy = localizeCopy;
  main.classList.add('contact-page');
  document.querySelectorAll('header a[href^="#"], footer a[href^="#"]').forEach((link) => {
    link.setAttribute('href', `/${link.getAttribute('href')}`);
  });
  document.querySelector('.footer-back-to-top').setAttribute('href', '#main');
  document.querySelector('footer a[href="/contact/"]').setAttribute('aria-current', 'page');
  document.querySelector('.site-footer').classList.add('is-visible');
  document.querySelector('[data-start]').addEventListener('click', () => { window.location.href = 'https://app.quickkol.com/en/login'; });

  function render() {
    const form = main.querySelector('form');
    const values = form ? Object.fromEntries(new FormData(form)) : {};
    main.innerHTML = `
      <section class="contact-hero" aria-labelledby="contact-title">
        <p class="contact-kicker">CONTACT QUICKKOL</p>
        <h1 id="contact-title">${copy('和 QuickKOL 团队<span>聊聊</span>', 'Talk to the <span>QuickKOL team.</span>')}</h1>
        <p>${copy('无论你正在了解产品，还是在使用中遇到问题，都可以在这里找到我们。', 'Exploring QuickKOL or need help with your account? Tell us what’s on your mind.')}</p>
      </section>

      <section class="contact-layout" aria-label="${copy('咨询与支持', 'Questions and support')}">
        <aside class="contact-guide" aria-label="${copy('联系 QuickKOL', 'Contact QuickKOL')}">
          <div class="contact-illustration"><img src="/assets/contact-conversation.png" alt="${copy('蓝色信封与聊天气泡，联系 QuickKOL', 'Blue envelope and chat bubbles for contacting QuickKOL')}" width="1122" height="1402" /></div>
          <div class="contact-email"><p>${copy('也可以直接发邮件', 'PREFER EMAIL?')}</p><a href="mailto:${supportEmail}">${supportEmail} ${arrow}</a></div>
        </aside>

        <div class="contact-form-card">
          <p class="contact-kicker">START A CONVERSATION</p>
          <h2 id="contact-form-title">${copy('我们能帮你什么？', 'How can we help?')}</h2>
          <p class="contact-form-intro">${copy('简单说说你的需求或问题。', 'A little context will help us point you in the right direction.')}</p>
          <form aria-labelledby="contact-form-title">
            <div class="contact-fields">
              <label for="contact-name">${copy('你的称呼', 'Your name')} <span aria-hidden="true">*</span><input id="contact-name" name="name" type="text" autocomplete="name" maxlength="100" placeholder="${copy('怎么称呼你？', 'What should we call you?')}" required /></label>
              <label for="contact-email">${copy('邮箱地址', 'Email address')} <span aria-hidden="true">*</span><input id="contact-email" name="email" type="email" autocomplete="email" maxlength="254" placeholder="you@company.com" required /></label>
              <label for="contact-company">${copy('公司或品牌', 'Company or brand')} <small>${copy('（可选）', '(optional)')}</small><input id="contact-company" name="company" type="text" autocomplete="organization" maxlength="120" placeholder="${copy('你的团队或品牌名称', 'Your team or brand name')}" /></label>
              <label for="contact-account-email">${copy('QuickKOL 注册邮箱', 'QuickKOL account email')} <small>${copy('（可选）', '(optional)')}</small><input id="contact-account-email" name="accountEmail" type="email" maxlength="254" placeholder="${copy('已注册？填写你的账户邮箱', 'Already registered? Your account email')}" /></label>
              <label class="contact-topic-field" for="contact-topic">${copy('问题类型', 'What is this about?')} <span aria-hidden="true">*</span><select id="contact-topic" name="topic" required><option value="" disabled selected>${copy('选择一个类型', 'Choose a topic')}</option>${topics.map(([value, zh, en]) => `<option value="${value}">${copy(zh, en)}</option>`).join('')}</select></label>
              <label class="contact-message-field" for="contact-message">${copy('你的消息', 'Your message')} <span aria-hidden="true">*</span><textarea id="contact-message" name="message" rows="5" maxlength="2000" placeholder="${copy('你希望 QuickKOL 帮你做什么？或者，使用中遇到了什么问题？', 'What would you like to do with QuickKOL, or what do you need help with?')}" aria-describedby="contact-account-note" required></textarea></label>
            </div>
            <p class="contact-field-note" id="contact-account-note">${copy('使用与账单问题，可在消息中注明操作步骤、发生时间或相关订单号。', 'For account or billing questions, include the steps, timing, or relevant order number in your message.')}</p>
            <button class="button button-primary contact-submit" type="submit">${copy('准备邮件草稿', 'Prepare email draft')} ${arrow}</button>
            <p class="contact-privacy">${copy('了解我们如何处理你的信息：', 'Learn how we handle your information:')} <a href="/privacy.html">${copy('隐私政策', 'Privacy policy')}</a></p>
            <div class="contact-draft" data-contact-draft hidden>
              <p role="status">${copy('邮件草稿已准备好，尚未发送。', 'Your email draft is ready. It has not been sent yet.')}</p>
              <a class="button button-secondary" data-contact-send>${copy('打开邮件应用发送', 'Open email app to send')} <i class="ph ph-envelope-simple" aria-hidden="true"></i></a>
              <small>${copy('若没有打开邮件应用，也可以直接写信至', 'If your email app doesn’t open, write directly to')} ${supportEmail}${copy('。', '.')}</small>
            </div>
          </form>
        </div>
      </section>

      <section class="contact-shortcuts" aria-label="${copy('快速找到答案', 'Find an answer faster')}">
        <p>${copy('想先找找答案？', 'Looking for a quick answer?')}</p><div><a href="/pricing/#faq"><i class="ph ph-credit-card" aria-hidden="true"></i>${copy('套餐与计费', 'Plans & billing')} ${arrow}</a><a href="/faq/"><i class="ph ph-question" aria-hidden="true"></i>${copy('产品常见问题', 'Product FAQs')} ${arrow}</a></div>
      </section>
    `;
    Object.entries(values).forEach(([name, value]) => { const field = main.querySelector(`[name="${name}"]`); field.value = value; field.dataset.i18nUserEdited = "true"; });
    ['name', 'message'].forEach((name) => {
      const field = main.querySelector(`[name="${name}"]`);
      field.setCustomValidity(field.value && !field.value.trim() ? copy('请填写此项。', 'Please fill out this field.') : '');
    });
    document.title = copy('联系 QuickKOL — 产品咨询与客户支持', 'Contact QuickKOL — Product questions & customer support');
    document.querySelector('meta[name="description"]').content = copy('联系 QuickKOL 团队，咨询达人营销功能与套餐，获取账户、搜索、Campaign 工作流、订阅和积分账单的帮助。', 'Talk to QuickKOL about creator marketing features and plans, or get help with your account, search, campaign workflows, subscriptions, and credits.');
  }

  main.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const values = Object.fromEntries(new FormData(form));
    const topic = topics.find(([value]) => value === values.topic);
    const subject = `[QuickKOL] ${copy(topic[1], topic[2])} — ${values.name.trim()}`;
    const body = [
      `${copy('称呼', 'Name')}: ${values.name.trim()}`,
      `${copy('邮箱', 'Email')}: ${values.email.trim()}`,
      `${copy('QuickKOL 注册邮箱', 'QuickKOL account email')}: ${values.accountEmail.trim() || '—'}`,
      `${copy('公司或品牌', 'Company or brand')}: ${values.company.trim() || '—'}`,
      `${copy('问题类型', 'Topic')}: ${copy(topic[1], topic[2])}`,
      '', values.message.trim(),
    ].join('\n');
    main.querySelector('[data-contact-send]').href = `mailto:${supportEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    main.querySelector('[data-contact-draft]').hidden = false;
  });
  main.addEventListener('input', (event) => {
    main.querySelector('[data-contact-draft]').hidden = true;
    if (['name', 'message'].includes(event.target.name)) {
      event.target.setCustomValidity(event.target.value.trim() ? '' : copy('请填写此项。', 'Please fill out this field.'));
    }
  });

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
  initI18n(locale);
  render();
  applyTranslations();
  updateTheme();
  updateScroll();
}
