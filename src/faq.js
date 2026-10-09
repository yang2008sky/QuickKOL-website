import './faq.css';
import { initI18n, setPageLocale, localizeCopy, applyTranslations, loadLocale } from './i18n.js';

const questions = [
  [
    [
      "QuickKOL 只是一个达人搜索工具吗？",
      "Is QuickKOL just a creator search tool?"
    ],
    [
      "不只是搜索。QuickKOL 从理解 Campaign Brief 开始，继续协助你完成达人发现、数据判断、候选名单、个性化外联和进度跟踪。",
      "It goes beyond search. QuickKOL starts by understanding your campaign brief, then helps with creator discovery, evaluation, shortlisting, personalized outreach, and progress tracking."
    ]
  ],
  [
    [
      "怎么判断一位达人是否适合当前品牌？",
      "How does QuickKOL decide whether a creator fits my brand?"
    ],
    [
      "Agent 会结合内容主题、受众画像、互动质量与历史表现等信号综合排序，并给出可解释的推荐理由，方便团队快速复核。",
      "Agent ranks creators using content themes, audience profiles, engagement quality, and past performance, with clear reasons your team can review."
    ]
  ],
  [
    [
      "QuickKOL 目前覆盖哪些内容平台？",
      "Which content platforms does QuickKOL cover?"
    ],
    [
      "当前核心覆盖 YouTube、TikTok、Instagram 和 X（Twitter）。不同平台的可用数据维度会有差异，具体以产品内显示为准。",
      "Core coverage currently includes YouTube, TikTok, Instagram, and X (Twitter). Available data varies by platform and is shown in the product."
    ]
  ],
  [
    [
      "AI Agent 会未经确认就代表品牌发送邮件吗？",
      "Will AI Agent send emails for my brand without approval?"
    ],
    [
      "不会越过你设定的边界。你可以在手动、AI 辅助和全自动模式之间选择，名单、外联和其他关键节点也可保留人工确认。",
      "No. Agent stays within the boundaries you set. Choose manual, AI-assisted, or autopilot mode, and keep human approval for shortlists, outreach, and other key steps."
    ]
  ],
  [
    [
      "达人数据从哪里来，会更新吗？",
      "Where does creator data come from, and is it updated?"
    ],
    [
      "QuickKOL 根据可用的公开账号、内容与互动信号构建达人档案，并持续更新关键指标。更新频率与数据范围会受平台可用性影响。",
      "QuickKOL builds creator profiles from available public account, content, and engagement signals, and refreshes key metrics. Frequency and coverage depend on platform availability."
    ]
  ],
  [
    [
      "可以先小范围试用，再扩大自动化吗？",
      "Can I start small before expanding automation?"
    ],
    [
      "可以。你可以先从一份 Brief、一次搜索或一个候选名单开始，等筛选标准与工作节奏稳定后，再逐步将触达和跟进交给 Agent。",
      "Yes. Start with one brief, search, or shortlist. Once your criteria and workflow are stable, gradually hand outreach and follow-up to Agent."
    ]
  ],
  [
    [
      "可以先免费试用吗？",
      "Can I try QuickKOL for free?"
    ],
    [
      "可以。免费用户每天获得 3 个积分，可用于体验基础搜索和查看达人数据，再根据使用需求选择套餐。",
      "Yes. Free users receive 3 credits per day to try basic search and creator data before choosing a plan."
    ]
  ],
  [
    [
      "月付和年付有什么区别？",
      "How do monthly and yearly billing differ?"
    ],
    [
      "月付按月收取 $29 / $59 / $299。年付一次收取全年费用 $228 / $588 / $3,108，折合每月 $19 / $49 / $259；套餐卡片中的额度均为每月额度。",
      "Monthly plans cost $29 / $59 / $299 per month. Yearly plans are billed once at $228 / $588 / $3,108 per year, equivalent to $19 / $49 / $259 per month. The allowances shown on each card are monthly allowances."
    ]
  ],
  [
    [
      "积分如何计费？",
      "How billing works"
    ],
    [
      "按功能与实际用量扣除积分，每一项计费都有明确标准。",
      "Credits are charged by feature and usage, with a clear rate for every action."
    ]
  ],
  [
    [
      "可以升级或降级套餐吗？",
      "Can I upgrade or downgrade my plan?"
    ],
    [
      "可以。套餐变更通常在下一个计费周期开始时生效，在此之前，当前套餐的额度与权益继续有效。",
      "Yes. Plan changes typically take effect at the start of the next billing cycle. Your current quota and features remain in effect until then."
    ]
  ],
  [
    [
      "支持哪些支付方式？",
      "What payment methods are supported?"
    ],
    [
      "QuickKOL 通过 Stripe 处理付款。你可以在结账页面使用信用卡，或选择 Stripe 支持的其他方式，例如支付宝；具体以结账页显示为准。",
      "Payments are processed through Stripe. Use a credit card or other supported methods such as Alipay. Available methods are shown at checkout."
    ]
  ],
  [
    [
      "如何查看剩余额度和重置时间？",
      "Where can I check my remaining allowance?"
    ],
    [
      "打开 QuickKOL 账户页面，即可查看剩余积分和下次重置时间。不同操作会消耗相应额度，例如达人搜索、数据查看或高级功能。",
      "Open your QuickKOL account page to see your remaining credits and next reset time. Credits are deducted by action, such as creator searches, data views or advanced features."
    ]
  ],
  [
    [
      "团队协作应该选择哪个套餐？",
      "Which plan supports team collaboration?"
    ],
    [
      "Max 套餐包含成员管理；Performance 和 Max 均支持批量邮箱匹配与数据导出。如需了解团队席位或更大规模的使用需求，请联系 support@quickkol.com。",
      "Max includes member management. Performance and Max both support bulk email matching and data export. For team seats or larger usage requirements, contact support@quickkol.com."
    ]
  ]
];
const arrow = '<i class="ph ph-arrow-right" aria-hidden="true"></i>';

export function mountFaq(initialLocale) {
  let locale = initialLocale;
  const copy = localizeCopy;
  const main = document.querySelector('#main');
  main.classList.add('faq-page');
  document.querySelectorAll('header a[href^="#"], footer a[href^="#"]').forEach((link) => {
    link.setAttribute('href', `/${link.getAttribute('href')}`);
  });
  document.querySelector('.footer-back-to-top').setAttribute('href', '#main');
  document.querySelector('.site-footer').classList.add('is-visible');
  document.querySelector('[data-start]').addEventListener('click', () => { window.location.href = 'https://app.quickkol.com/en/login'; });

  function render() {
    const openQuestions = [...main.querySelectorAll('details[open]')].map((item) => item.id);
    main.innerHTML = `
      <section class="faq-page-hero" aria-labelledby="faq-page-title">
        <p class="faq-page-kicker">${copy('帮助中心', 'HELP CENTER')}</p>
        <h1 id="faq-page-title">${copy('QuickKOL 常见问题', 'QuickKOL FAQs')}</h1>
        <p>${copy('关于达人发现、AI Agent、套餐与积分计费，在这里找到答案。', 'Answers about creator discovery, AI Agent, plans, and credit billing.')}</p>
      </section>
      <section class="faq-page-list" aria-label="${copy('常见问题', 'FAQ')}">
        ${questions.map(([question, answer], index) => `<details id="faq-question-${index}" ${openQuestions.includes(`faq-question-${index}`) ? 'open' : ''}>
          <summary><span class="faq-page-number" aria-hidden="true">${String(index + 1).padStart(2, '0')}</span><span>${copy(...question)}</span><i class="ph ph-plus" aria-hidden="true"></i></summary>
          <div class="faq-page-answer"><p>${copy(...answer)}</p>${question[1] === 'How billing works' ? `<a href="/pricing/#usage">${copy('用量与计费，清楚明白', 'How billing works')} ${arrow}</a>` : ''}</div>
        </details>`).join('')}
      </section>
      <section class="faq-page-contact" aria-labelledby="faq-contact-title">
        <span class="faq-page-contact-icon"><i class="ph ph-chats-circle" aria-hidden="true"></i></span>
        <div><h2 id="faq-contact-title">${copy('还有问题？联系我们', 'Still have questions? Talk to us')}</h2><p>${copy('无论你正在了解产品，还是在使用中遇到问题，都可以在这里找到我们。', 'Exploring QuickKOL or need help with your account? Tell us what’s on your mind.')}</p></div>
        <a class="button button-primary" href="/contact/">${copy('联系我们', 'Contact')} ${arrow}</a>
      </section>
    `;
    document.title = 'QuickKOL FAQ';
    document.querySelector('meta[name="description"]').content = copy('关于达人发现、AI Agent、套餐与积分计费，在这里找到答案。', 'Answers about creator discovery, AI Agent, plans, and credit billing.');
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
