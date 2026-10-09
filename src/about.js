import './about.css';
import { initI18n, setPageLocale, localizeCopy, applyTranslations, loadLocale } from './i18n.js';

const arrow = '<i class="ph ph-arrow-right" aria-hidden="true"></i>';
const workspaceUrl = 'https://app.quickkol.com/en/login';

export function mountAbout(initialLocale) {
  let locale = initialLocale;
  const main = document.querySelector('#main');
  const copy = localizeCopy;
  main.classList.add('about-page');
  document.querySelectorAll('header a[href^="#"], footer a[href^="#"]').forEach((link) => {
    link.setAttribute('href', `/${link.getAttribute('href')}`);
  });
  document.querySelector('.footer-back-to-top').setAttribute('href', '#main');
  document.querySelector('footer a[href="/about/"]').setAttribute('aria-current', 'page');
  document.querySelector('.site-footer').classList.add('is-visible');
  document.querySelector('[data-start]').addEventListener('click', () => { window.location.href = workspaceUrl; });

  function render() {
    main.innerHTML = `
      <section class="about-hero" aria-labelledby="about-title">
        <figure class="about-cover">
          <img src="/assets/blog/workflow.jpg" alt="${copy('创作者与拍摄团队一起制作产品内容的场景', 'A creator and production team making product content together')}" width="1672" height="941" fetchpriority="high" />
          <figcaption><span>BUILT FROM EXPERIENCE</span><span>${copy('从真实的营销工作出发', 'Rooted in the work we know')}</span></figcaption>
        </figure>
        <div class="about-intro about-wrap">
          <p class="about-kicker">OUR STORY</p>
          <h1 id="about-title">${copy('因为做过，<br>所以想让它<span>更好做。</span>', 'We’ve done the work.<br>Now, we’re making it <span>simpler.</span>')}</h1>
          <p class="about-lead">${copy('QuickKOL 的起点，是我们自己做海外达人营销时，<br class="about-desktop-break">那些重复、耗时，却又绕不开的日常。', 'QuickKOL started with our own experience in global creator marketing —<br class="about-desktop-break">and the repetitive work that came with every campaign.')}</p>
          <a class="about-story-link" href="#our-story">${copy('这是我们的故事', 'Here’s our story')} <i class="ph ph-arrow-down" aria-hidden="true"></i></a>
        </div>
      </section>

      <section class="about-origin about-wrap" id="our-story" aria-labelledby="origin-title">
        <div class="about-section-label"><p class="about-kicker">WHERE IT STARTED</p><h2 id="origin-title">${copy('我们也曾坐在<br>那张工作桌前。', 'We’ve been on<br>your side of the desk.')}</h2></div>
        <div class="about-origin-copy">
          <p>${copy('做海外达人营销，最初的工具是一张表格、几十个浏览器标签页，以及一封封手动写好的邮件。我们在社交平台上搜索账号、采集资料、翻看内容，再把合适的人选整理成名单。每个 Campaign，都像从头再来一次。', 'When we started running global creator campaigns, our toolkit was a spreadsheet, dozens of browser tabs, and emails written one at a time. We searched social platforms, collected profiles, watched content, and assembled shortlists. Every campaign felt like starting over.')}</p>
          <p>${copy('后来，我们付费订阅了价格不低的 SaaS 达人库。搜索确实方便了，但用得越久，越常遇到同一个疑问：这些数据，真的跟得上创作者的变化吗？熟悉的名单、变化不多的标签、更新有限的资料，依然需要我们回到主页逐一核实。', 'Later, we paid for expensive SaaS creator databases. Searching became easier, but one question kept coming back: was the data keeping up with the creators? Familiar lists, static tags, and profiles with limited updates still sent us back to each account to check for ourselves.')}</p>
          <p class="about-origin-emphasis">${copy('我们想要的，是更及时的信息，<br>和一条能真正把合作推进下去的工作流。', 'We wanted fresher information.<br>And a workflow that actually moved the campaign forward.')}</p>
        </div>
      </section>

      <section class="about-turning-point about-wrap" aria-labelledby="turning-title">
        <figure class="about-detail-photo"><img src="/assets/blog/brief.jpg" alt="${copy('工作桌上的达人内容参考、Campaign Brief 和笔记', 'Creator content references, a campaign brief, and notes on a work desk')}" width="1672" height="941" loading="lazy" /><figcaption>${copy('从理解一份 Brief，到理解一个创作者。', 'From understanding a brief to understanding a creator.')}</figcaption></figure>
        <div class="about-turning-copy"><p class="about-kicker">A NEW POSSIBILITY</p><h2 id="turning-title">${copy('AI 来了。<br>我们决定自己试一次。', 'AI opened a door.<br>We decided to build.')}</h2>
          <p>${copy('大模型带来的变化，让我们看到了新的可能：用自然语言描述需求，让 AI 围绕当前任务实时搜索，再结合账号内容理解达人，而不只是依赖库里已有的筛选条件。', 'Large language models gave us a new possibility: describe what we need in plain language, search in real time around that task, and understand creators through their content, beyond the filters already stored in a database.')}</p>
          <p>${copy('于是，我们开始做一款自己也想每天使用的轻量化工具。把 Brief 理解、达人发现、内容画像、个性化邮件与 Campaign 执行放在一起，让原本散落在表格、工具和收件箱里的工作，能够衔接起来。这就是 QuickKOL。', 'So we started building a lightweight tool we would want to use every day. One place for brief interpretation, creator discovery, content profiles, personalized emails, and campaign execution. A way to connect the work scattered across spreadsheets, tools, and inboxes. That became QuickKOL.')}</p>
        </div>
      </section>

      <section class="about-workflow" aria-labelledby="workflow-title"><div class="about-wrap">
        <div class="about-workflow-heading"><p class="about-kicker">LESS BUSYWORK. MORE CONNECTION.</p><h2 id="workflow-title">${copy('从一个需求，走向一次合作。', 'From a brief to a real collaboration.')}</h2><p>${copy('把我们自己需要的自动化，放进同一条工作流。', 'The automation we needed ourselves, connected in one workflow.')}</p></div>
        <ol class="about-flow">${[
          ['ph-file-text', '理解 Brief', 'Understand the brief', '读懂产品、目标与合作要求', 'Make sense of the product, goals, and requirements'],
          ['ph-magnifying-glass', '实时搜索', 'Search in real time', '围绕需求寻找合适的达人', 'Find creators around the needs of your campaign'],
          ['ph-sparkle', '理解内容', 'Understand content', '分析内容标签与账号画像', 'Interpret content tags and creator profiles'],
          ['ph-envelope-simple', '邮件触达', 'Personalize outreach', '准备个性化邮件、发送与跟进', 'Prepare personal emails, send, and follow up'],
          ['ph-flag-checkered', '推进 Campaign', 'Move campaigns forward', '衔接合作进度与执行任务', 'Connect collaboration progress and execution tasks'],
        ].map(([icon, zh, en, detailZh, detailEn], index) => `<li><span class="about-flow-icon"><i class="ph ${icon}" aria-hidden="true"></i></span><small>0${index + 1}</small><h3>${copy(zh, en)}</h3><p>${copy(detailZh, detailEn)}</p></li>`).join('')}</ol>
        <div class="about-content-note"><i class="ph ph-user-focus" aria-hidden="true"></i><div><h3>${copy('一个标签，应该有内容作为依据。', 'A tag should mean something.')}</h3><p>${copy('我们希望 AI 能读懂创作者在分享什么、如何表达，以及内容与品牌为什么契合。让「科技」「美妆」「生活方式」这些标签，成为有上下文的内容画像，帮助团队做出更有依据的选择。', 'We want AI to understand what creators share, how they express themselves, and why their content fits a brand. Tags like “tech,” “beauty,” and “lifestyle” should carry context, helping teams make better-informed choices.')}</p></div></div>
      </div></section>

      <section class="about-beliefs about-wrap" aria-labelledby="beliefs-title"><p class="about-kicker">WHAT WE BELIEVE</p><h2 id="beliefs-title">${copy('让工具做重复的事，<br>让人做好重要的事。', 'Let tools handle repetition.<br>Let people focus on what matters.')}</h2>
        <div class="about-values">${[
          ['信息应该跟上变化', 'Information should keep up', '创作者每天都在发布新内容。我们相信，达人发现应该围绕当下的需求与内容展开，让团队有机会找到名单之外的新选择。', 'Creators publish new content every day. Discovery should respond to current needs and content, giving teams a chance to find people beyond the same familiar lists.'],
          ['工具应该轻一点', 'Tools should feel lighter', '从一份 Brief 就能开始，不必先学会一套复杂系统。把搜索、理解、触达和执行连起来，让小团队也能更从容地推进合作。', 'Start with a brief, without learning a complex system first. Connect search, understanding, outreach, and execution so smaller teams can work with more clarity.'],
          ['合作应该保留温度', 'Collaboration should stay human', 'AI 帮我们减少重复劳动，理解与判断仍由人掌握。把省下来的时间，用于认真了解创作者、打磨创意，以及建立长期关系。', 'AI helps reduce repetitive work; people bring judgment and understanding. Spend the time saved getting to know creators, shaping ideas, and building lasting relationships.'],
        ].map(([zh, en, detailZh, detailEn], index) => `<article><span class="about-value-number">0${index + 1}</span><h3>${copy(zh, en)}</h3><p>${copy(detailZh, detailEn)}</p></article>`).join('')}</div>
      </section>

      <section class="about-cta" aria-labelledby="about-cta-title"><p class="about-kicker">BUILT BY MARKETERS, FOR MARKETERS</p><h2 id="about-cta-title">${copy('让下一次达人合作，<br>从更轻松的开始出发。', 'A simpler start.<br>Your next creator campaign.')}</h2><p>${copy('带上你的 Brief，和 QuickKOL 一起试试新的工作方式。', 'Bring your brief. Explore a new way to work with QuickKOL.')}</p><div class="about-cta-actions"><a class="button" href="${workspaceUrl}">${copy('免费开始', 'Start free')} ${arrow}</a><a class="button about-cta-secondary" href="/#agent-team"><i class="ph ph-play-circle" aria-hidden="true"></i>${copy('先体验 Agent', 'Try Agent first')}</a></div></section>
    `;
    document.title = copy('关于 QuickKOL — 从达人营销实战，到 AI 工作流', 'About QuickKOL — From creator marketing to an AI workflow');
    document.querySelector('meta[name="description"]').content = copy('了解 QuickKOL 的故事：从人工寻找海外达人与传统 SaaS 达人库，到 AI 实时搜索、内容画像、个性化邮件触达和 Campaign 自动化。', 'Our story: from manual global creator research and expensive databases to real-time AI search, content understanding, personalized outreach, and campaign automation.');
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
