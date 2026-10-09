import './legal.css';
import { initI18n, setPageLocale, localizeCopy, applyTranslations, loadLocale } from './i18n.js';
import { legalDocuments, legalUpdated } from './legal-content.js';

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const supportEmail = 'support@quickkol.com';

export function mountLegal(initialLocale, type) {
  let locale = initialLocale;
  const documentContent = legalDocuments[type];
  const otherType = type === 'terms' ? 'privacy' : 'terms';
  const otherDocument = legalDocuments[otherType];
  const main = document.querySelector('#main');
  const text = (pair) => escapeHtml(localizeCopy(...pair));
  const copy = (zh, en) => escapeHtml(localizeCopy(zh, en));
  main.classList.add('legal-page');
  document.querySelectorAll('header a[href^="#"], footer a[href^="#"]').forEach((link) => {
    link.setAttribute('href', `/${link.getAttribute('href')}`);
  });
  document.querySelector('.footer-back-to-top').setAttribute('href', '#main');
  document.querySelector(`footer a[href="/${type}.html"]`).setAttribute('aria-current', 'page');
  document.querySelector('.site-footer').classList.add('is-visible');
  document.querySelector('[data-start]').addEventListener('click', () => { window.location.href = 'https://app.quickkol.com/en/login'; });

  function render() {
    const updated = new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${legalUpdated}T00:00:00Z`));
    main.innerHTML = `
      <section class="legal-hero" aria-labelledby="legal-title">
        <div class="legal-hero-inner legal-wrap">
          <div class="legal-intro">
            <p class="legal-kicker"><i class="ph ph-file-text" aria-hidden="true"></i>${copy('QuickKOL 法律中心', 'QuickKOL legal center')}</p>
            <h1 id="legal-title">${text(documentContent.title)}</h1>
            <p class="legal-description">${text(documentContent.description)}</p>
            <div class="legal-meta" aria-label="${copy('文档信息', 'Document details')}">
              <span><i class="ph ph-calendar-blank" aria-hidden="true"></i>${copy('最近更新', 'Last updated')} <time datetime="${legalUpdated}">${escapeHtml(updated)}</time></span>
              <span><i class="ph ph-shield-check" aria-hidden="true"></i>QuickKOL</span>
            </div>
          </div>
          <aside class="legal-overview" aria-label="${copy('文档摘要', 'Document overview')}">
            <p class="legal-kicker">${copy('文档摘要', 'Document overview')}</p>
            <ul>${documentContent.overview.map((item) => `<li>${text(item)}</li>`).join('')}</ul>
            <a href="/${otherType}.html">${copy('查看', 'View')} ${text(otherDocument.title)}<i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>
          </aside>
        </div>
      </section>
      <div class="legal-layout legal-wrap">
        <aside class="legal-sidebar">
          <p class="legal-kicker">${copy('本页目录', 'On this page')}</p>
          <nav aria-label="${copy('文档章节', 'Document sections')}">
            ${documentContent.sections.map((section, index) => `<a href="#legal-${section.id}"><span>${String(index + 1).padStart(2, '0')}</span>${text(section.title)}</a>`).join('')}
          </nav>
          <a class="legal-help" href="mailto:${supportEmail}"><i class="ph ph-envelope-simple" aria-hidden="true"></i><span>${copy('对这份文档有疑问？', 'Questions about this document?')}<strong>${supportEmail}</strong></span></a>
        </aside>
        <article class="legal-article" aria-label="${text(documentContent.title)}">
          <div class="legal-summary"><p class="legal-kicker">${copy('阅读说明', 'Before you continue')}</p><p>${text(documentContent.introduction)}</p></div>
          ${documentContent.sections.map((section, index) => `<section class="legal-section" id="legal-${section.id}" aria-labelledby="legal-heading-${section.id}">
            <div class="legal-section-heading"><span>${String(index + 1).padStart(2, '0')}</span><h2 id="legal-heading-${section.id}">${text(section.title)}</h2></div>
            ${section.paragraphs.map((paragraph) => `<p>${text(paragraph)}</p>`).join('')}
            ${section.bullets ? `<ul>${section.bullets.map((item) => `<li>${text(item)}</li>`).join('')}</ul>` : ''}
            ${section.contact ? `<a class="legal-email" href="mailto:${supportEmail}">${supportEmail}<i class="ph ph-arrow-up-right" aria-hidden="true"></i></a>` : ''}
          </section>`).join('')}
          <div class="legal-document-footer"><a href="/${otherType}.html">${text(otherDocument.title)}<i class="ph ph-arrow-right" aria-hidden="true"></i></a><a href="/contact/">${copy('联系 QuickKOL', 'Contact QuickKOL')}<i class="ph ph-arrow-right" aria-hidden="true"></i></a></div>
        </article>
      </div>
    `;
    document.title = `${localizeCopy(...documentContent.title)} — QuickKOL`;
    document.querySelector('meta[name="description"]').content = localizeCopy(...documentContent.description);
  }

  function closeMenus() {
    document.querySelector('[data-language-menu]').hidden = true;
    document.querySelector('[data-language]').setAttribute('aria-expanded', 'false');
    document.querySelector('[data-mobile-nav]').classList.remove('is-open');
    document.querySelector('[data-menu]').setAttribute('aria-expanded', 'false');
    document.querySelector('[data-menu] i').className = 'ph ph-list';
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
      setPageLocale(locale);
      render();
      applyTranslations();
      closeMenus();
    }
    if (event.target.closest('[data-menu]')) {
      const button = document.querySelector('[data-menu]');
      const open = document.querySelector('[data-mobile-nav]').classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
      button.querySelector('i').className = `ph ${open ? 'ph-x' : 'ph-list'}`;
    }
    if (event.target.closest('[data-mobile-nav] a')) closeMenus();
    if (event.target.closest('[data-footer-tool]')) {
      const toast = document.querySelector('[data-toast]');
      toast.textContent = localizeCopy('即将支持', 'Coming soon');
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
