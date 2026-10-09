import "./capability-demos.css";

const people = [
  { name: "Olivia", handle: "@oliviahears", initials: "O", avatar: "/assets/testimonials/olivia-brooks.jpg", score: 88, topic: "YouTube · 英语音频深度测评", reason: "降噪实测充分，美国受众匹配" },
  { name: "Camila", handle: "@camilacommutes", initials: "C", avatar: "/assets/testimonials/camila-santos.jpg", score: 85, topic: "Instagram · 英语通勤体验", reason: "佩戴体验清晰，Reels 表现达标", followers: "186K", averageViews: "32.6K" },
  { name: "Evan", handle: "@evanwu.audio", initials: "E", avatar: "/assets/testimonials/evan-wu.jpg", score: 72, topic: "TikTok · 英语降噪实测", reason: "实测演示直观，短视频观看达标", followers: "342K", averageViews: "86.4K" },
];

const outreachPeople = [
  { name: "Olivia", avatar: "/assets/testimonials/olivia-brooks.jpg", email: "olivia@example.com", subject: "Olivia × SoundLoop · A real-world ANC headphone review", context: "Recent content: YouTube commute tests and battery-life comparisons", body: "Your practical audio reviews make complex features easy to understand. We’d love to send you our new wireless ANC headphones for an honest YouTube review focused on noise cancellation, sound quality, battery life, and all-day comfort. We’ll provide the product and a structured testing guide while keeping your editorial opinion fully independent. Would you be open to sharing your rates and availability?" },
  { name: "Camila", avatar: "/assets/testimonials/camila-santos.jpg", email: "camila@example.com", subject: "Camila × SoundLoop · Testing ANC headphones on your daily commute", context: "Recent content: Instagram Reels about commute tech and everyday carry", body: "Your recent Reel about making a daily commute more comfortable felt like a natural fit for our new wireless ANC headphones. We’d love to invite you to create a Reel and Stories showing comfort, noise cancellation, and your honest experience in real commuting situations. We can provide the product, key details, and room for your own creative approach. Could you share your rates and timing?" },
  { name: "Evan", avatar: "/assets/testimonials/evan-wu.jpg", email: "evan@example.com", subject: "Evan × SoundLoop · A quick real-world noise cancellation test", context: "Recent content: TikTok subway tests and portable audio comparisons", body: "Your short-form audio tests are clear, visual, and grounded in real use. We’d like to send you our new wireless ANC headphones for a TikTok that demonstrates noise cancellation in a busy commute, along with comfort and sound impressions. We’re looking for an honest, structured review in your usual style. What rates and production window would work for you?" },
];

const discoveryPeople = [
  people[1],
  people[2],
  { name: "Noah", handle: "@noahlistens", initials: "N", avatar: "/assets/testimonials/noah-liu.jpg", score: 65, topic: "YouTube · 英语垂类音频测评", reason: "测试方法清晰，音频内容垂直", followers: "128K", averageViews: "24.8K" },
  { name: "Yuki", handle: "@yuki.ontheroad", initials: "Y", avatar: "/assets/testimonials/yuki-tanaka.jpg", score: 48, topic: "Instagram · 通勤与旅行科技", reason: "通勤场景丰富，受众重合一般", followers: "94K", averageViews: "18.7K" },
  { name: "Maya", handle: "@mayatriesit", initials: "M", avatar: "/assets/testimonials/maya-chen.jpg", score: 44, topic: "TikTok · 日常科技体验", reason: "产品体验直观，内容方向待核验", followers: "156K", averageViews: "29.4K" },
];

const crawlPeople = [
  { avatar: "/assets/testimonials/noah-liu.jpg", handle: "@noahlistens" },
  { avatar: "/assets/testimonials/yuki-tanaka.jpg", handle: "@yuki.ontheroad" },
  { avatar: "/assets/testimonials/evan-wu.jpg", handle: "@evanwu.audio" },
  { avatar: "/assets/testimonials/lin-zhixia.jpg", handle: "@linmakesnotes" },
  { avatar: "/assets/testimonials/maya-chen.jpg", handle: "@mayatriesit" },
  { avatar: "/assets/testimonials/felix-weber.jpg", handle: "@felixafterhours" },
  { avatar: "/assets/testimonials/arjun-mehta.jpg", handle: "@arjunpacks" },
  { avatar: "/assets/testimonials/zhou-kai.jpg", handle: "@kaioncamera" },
  { avatar: "/assets/testimonials/olivia-brooks.jpg", handle: "@oliviahears" },
  { avatar: "/assets/testimonials/camila-santos.jpg", handle: "@camilacommutes" },
  { avatar: "/assets/testimonials/james-walker.jpg", handle: "@jamesontheroad" },
  { avatar: "/assets/testimonials/sophia-park.jpg", handle: "@sophiatests" },
];

const evaluationPeople = discoveryPeople.map((person, index) => ({ ...person, matchReason: ["内容符合", "观看达标", "领域相关", "受众待核验", "内容待核验"][index] }));
const rankingOrders = [[2, 0, 3, 1, 4], [0, 2, 1, 3, 4], [0, 1, 2, 3, 4]];

const mark = (person) => `<span class="demo-avatar" aria-hidden="true"><img src="${person.avatar}" alt="${person.name}" /></span>`;
const heading = (title, action = "", showMeta = true) => `<div class="demo-window-bar"><span><i class="ph ph-sparkle" aria-hidden="true"></i> ${title}</span><div>${showMeta ? "<small>交互演示 · 示例数据</small>" : ""}${action}</div></div>`;
const phases = [
  { duration: 4200, summary: "正在拆解内容关键词、受众画像与内容信号" },
  { duration: 5400, summary: "AI 正在基于相似度持续扩展候选" },
  { duration: 5200, summary: "AI 已完成深度筛选、匹配度打分与排序" },
];

const stages = [
  { title: "正在理解 Campaign Brief", status: "分析目标", log: "正在提取品类、市场、受众与合作目标", workerStatus: ["理解中", "等待", "等待"], active: [0], done: [], duration: 1500 },
  { title: "正在搜索并筛选合适的达人", status: "AI 找达人", log: "结合内容与受众匹配，精选 12 位合作达人", workerStatus: ["已完成", "搜索筛选中", "等待"], active: [1], done: [0], duration: 2500 },
  { title: "已找到达人，正在生成个性化外联", status: "达人触达", log: "外联 Agent 正在结合达人内容生成英语 Pitch", workerStatus: ["已完成", "精选 12 位", "生成中"], active: [2], done: [0, 1], duration: 2500 },
  { title: "个性化外联已完成", status: "已完成", log: "12 位达人的个性化邮件已准备完成", workerStatus: ["已完成", "精选 12 位", "已完成"], active: [], done: [0, 1, 2], duration: 2500 },
];

export const capabilityPlaybackDuration = {
  discover: phases.reduce((total, phase) => total + phase.duration, 0),
  analytics: 6000,
  outreach: 5000,
  agent: stages.reduce((total, stage) => total + stage.duration, 0),
};

export function renderCapabilityDemo(key) {
  if (key === "discover") return `<div class="capability-ui discovery-demo" aria-live="off">
    ${heading("AI Discovery", '<button type="button" class="demo-text-button" data-discovery-toggle>暂停演示</button>', false)}
    <div class="discovery-source-switch" role="group" aria-label="搜索入口">
      <button type="button" data-discovery-mode="similar" aria-pressed="true">找相似达人</button><button type="button" data-discovery-mode="keywords" aria-pressed="false">关键词搜索</button>
    </div>
    <div class="discovery-query is-similar" data-discovery-query-card>
      <span data-discovery-avatar>${mark(people[0])}</span><i class="ph ph-magnifying-glass" data-discovery-search-icon aria-hidden="true"></i>
      <div class="discovery-query-copy"><b data-discovery-query>${people[0].handle}</b><span data-discovery-query-detail>${people[0].topic}</span></div>
      <em data-discovery-seed-badge>种子达人</em>
      <div class="discovery-query-metrics" aria-label="账号核心数据"><span><small>粉丝</small><b>275K</b></span><span><small>平均播放</small><b>48.2K</b></span><span><small>互动率</small><b>5.8%</b></span></div>
    </div>
    <ol class="discovery-pipeline" aria-label="AI 搜索流程">${["读取与分析", "搜索匹配", "AI 筛选排序"].map((label, index) => `<li data-discovery-step="${index}"><span>${index + 1}</span><small data-discovery-step-label>${label}</small></li>`).join("")}</ol>
    <div class="discovery-summary analysis-reveal" style="--reveal-order:0"><i class="ph ph-sparkle" aria-hidden="true"></i><span data-discovery-summary>正在拆解内容关键词、受众画像与内容信号</span><span class="analysis-pulse"><i></i><em>执行中</em></span></div>
    <div class="discovery-phase-stack">
      <section class="discovery-analysis" data-discovery-view="analysis">
        <div class="analysis-insight-grid">
          <section class="analysis-insight-card analysis-hashtag-card analysis-reveal" style="--reveal-order:1" aria-label="Hashtag 图">
            <header><i class="ph ph-hash" aria-hidden="true"></i><b>Hashtag 图</b><small>近 90 天</small></header>
            <div class="analysis-topic-row"><small>主题</small><span>AI 音频</span><span>产品测评</span><span>通勤科技</span></div>
            <div class="analysis-topic-row analysis-keyword-row"><small>话题</small><span>降噪</span><span>音质</span><span>续航</span></div>
            <div class="analysis-hashtag-cloud" aria-label="热门 Hashtag"><span class="is-xl">#NoiseCancelling</span><span class="is-md">#SoundTest</span><span class="is-lg">#HeadphoneReview</span><span class="is-sm">#BatteryLife</span><span class="is-md">#CommuteTech</span><span class="is-xs">#EverydayCarry</span><span class="is-sm">#WirelessAudio</span><span class="is-md">#ANCHeadphones</span><span class="is-xs">#TechReview</span><span class="is-sm">#CommuterGear</span></div>
          </section>
          <section class="analysis-insight-card analysis-audience-card analysis-reveal" style="--reveal-order:2" aria-label="受众画像">
            <header><i class="ph ph-users-three" aria-hidden="true"></i><b>受众画像</b><small>Top 5</small></header>
            <div class="analysis-audience-tabs" role="tablist" aria-label="受众维度"><button type="button" role="tab" data-audience-tab="country" aria-selected="true">国家</button><button type="button" role="tab" data-audience-tab="age" aria-selected="false">年龄</button><button type="button" role="tab" data-audience-tab="gender" aria-selected="false">性别</button></div>
            <div class="analysis-audience-panel" role="tabpanel" data-audience-panel="country"><div class="analysis-audience-row"><span>美国</span><i><span style="--share:54%"></span></i><b>54%</b></div><div class="analysis-audience-row"><span>加拿大</span><i><span style="--share:16%"></span></i><b>16%</b></div><div class="analysis-audience-row"><span>墨西哥</span><i><span style="--share:12%"></span></i><b>12%</b></div><div class="analysis-audience-row"><span>英国</span><i><span style="--share:8%"></span></i><b>8%</b></div><div class="analysis-audience-row"><span>澳大利亚</span><i><span style="--share:6%"></span></i><b>6%</b></div></div>
            <div class="analysis-audience-panel" role="tabpanel" data-audience-panel="age" hidden><div class="analysis-audience-row"><span>18–24 岁</span><i><span style="--share:31%"></span></i><b>31%</b></div><div class="analysis-audience-row"><span>25–34 岁</span><i><span style="--share:43%"></span></i><b>43%</b></div><div class="analysis-audience-row"><span>35–44 岁</span><i><span style="--share:18%"></span></i><b>18%</b></div><div class="analysis-audience-row"><span>45 岁以上</span><i><span style="--share:8%"></span></i><b>8%</b></div></div>
            <div class="analysis-audience-panel" role="tabpanel" data-audience-panel="gender" hidden><div class="analysis-audience-row"><span>男性</span><i><span style="--share:62%"></span></i><b>62%</b></div><div class="analysis-audience-row"><span>女性</span><i><span style="--share:36%"></span></i><b>36%</b></div><div class="analysis-audience-row"><span>未知</span><i><span style="--share:2%"></span></i><b>2%</b></div></div>
          </section>
        </div>
      </section>
      <section class="discovery-crawl" data-discovery-view="crawl" hidden>
        <div class="discovery-view-heading"><div><b>基于分析结果搜索匹配</b><small>跨平台持续抓取公开账号与内容信号</small></div><strong class="crawl-count"><span>+<b data-discovery-crawl-count>0</b></span><small>已发现</small></strong></div>
        <div class="crawler-axis"><div class="crawler-track">${crawlPeople.map((person, index) => `<span class="crawler-person" data-crawler-person="${index}" title="${person.handle}"><img src="${person.avatar}" alt="${person.handle}" /><i></i></span>`).join("")}</div></div>
        <div class="crawl-feed-heading"><span>实时匹配推送</span><small><i></i>持续搜索中</small></div>
        <div class="crawl-match-list">${discoveryPeople.map((person, index) => `<article data-crawl-match="${index}">${mark(person)}<div><b>${person.handle}</b></div><span>${["内容主题匹配", "受众画像匹配", "互动质量匹配", "场景内容匹配", "产品体验匹配"][index]}</span><div class="crawl-match-metrics"><span><small>粉丝量</small><b>${person.followers}</b></span><span><small>平均观看量</small><b>${person.averageViews}</b></span></div></article>`).join("")}</div>
      </section>
      <section class="discovery-evaluate" data-discovery-view="evaluate" hidden>
        <div class="discovery-view-heading"><div><b>AI 深度筛选与排序</b><small>目标合作 12 位，准备 144 位待邀约候选</small></div><span class="evaluation-badge">144 位候选</span></div>
        <div class="evaluation-logic"><span>内容契合 <b>40%</b></span><span>受众重叠 <b>35%</b></span><span>互动质量 <b>25%</b></span></div>
        <div class="discovery-results">${evaluationPeople.map((person, index) => `<article data-discovery-person="${index}" style="--slot:${index}">${mark(person)}<b>${person.handle}</b><small>${person.matchReason}</small><strong data-discovery-score>${person.score}%</strong></article>`).join("")}</div>
      </section>
    </div>
  </div>`;

  if (key === "analytics") return `<div class="capability-ui intelligence-demo">
    ${heading("Creator Intelligence", "", false)}
    <div class="intelligence-profile">${mark(people[0])}<div><b>${people[0].handle}</b><small>${people[0].topic}</small></div></div>
    <div class="intelligence-metrics">${[["粉丝量", "275K"], ["平均观看量", "48.2K"], ["互动率", "5.8%"]].map(([label, value]) => `<div><small>${label}</small><b>${value}</b></div>`).join("")}</div>
    <section class="intelligence-block"><div class="demo-block-heading"><b>内容关键词匹配</b><strong data-intelligence-score="94">94%</strong></div><div class="intelligence-keywords"><span>✓ 降噪实测</span><span>✓ 音质对比</span><span>✓ 续航测试</span></div></section>
    <section class="intelligence-block intelligence-audience-block"><div class="demo-block-heading"><b>受众画像匹配</b><strong data-intelligence-score="87">87%</strong></div>
      <div class="intelligence-audience-tabs" role="tablist" aria-label="受众维度">${[["country", "国家"], ["age", "年龄"], ["gender", "性别"]].map(([key, label], index) => `<button type="button" role="tab" id="intelligence-${key}-tab" data-intelligence-tab="${key}" aria-controls="intelligence-${key}-panel" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}">${label}</button>`).join("")}</div>
      ${[
        ["country", [["美国", 72, "🇺🇸"], ["加拿大", 12, "🇨🇦"], ["英国", 8, "🇬🇧"], ["澳大利亚", 5, "🇦🇺"], ["德国", 3, "🇩🇪"]]],
        ["age", [["18–24 岁", 31], ["25–34 岁", 43], ["35–44 岁", 18], ["45 岁以上", 8]]],
        ["gender", [["男性", 62], ["女性", 36], ["未知", 2]]],
      ].map(([key, rows], index) => `<div class="intelligence-audience-panel" role="tabpanel" id="intelligence-${key}-panel" aria-labelledby="intelligence-${key}-tab" data-intelligence-panel="${key}" ${index === 0 ? "" : "hidden"}>${rows.map(([label, value, flag], row) => `<div class="intelligence-audience-row" style="--bar-color:${(key === "gender" ? ["#4b8dcc", "#f65387", "#98a3b2"] : key === "age" ? ["#32998d", "#f65387", "#7563df", "#e29238"] : ["#f65387", "#7563df", "#32998d", "#e29238", "#4b8dcc"])[row]}"><div><span>${flag ? `<i aria-hidden="true">${flag}</i>` : ""}<span>${label}</span></span><strong data-intelligence-percent="${value}">${value}%</strong></div><div class="intelligence-bar" aria-hidden="true"><span data-intelligence-bar="${value}" style="--share:${value}%"></span></div></div>`).join("")}</div>`).join("")}
    </section>
    <div class="demo-ai-note"><i class="ph ph-sparkle" aria-hidden="true"></i><p><b>AI 判断：建议进入候选名单</b></p></div>
  </div>`;

  if (key === "outreach") return `<div class="capability-ui outreach-demo">
    ${heading("Personalized Outreach", "", false)}
    <div class="outreach-queue-heading"><b>美国 · 无线降噪耳机测评</b><small>计划触达 144 位 · 展示 3 位</small></div>
    <div class="outreach-recipient-list" role="group" aria-label="选择邮件收件人">${outreachPeople.map((person, index) => `<button type="button" data-outreach-person="${index}" aria-pressed="${index === 1}">${mark(person)}<span><b>${person.name}</b><small data-outreach-state="${index}">${index === 0 ? "已发送" : "待确认"}</small></span></button>`).join("")}</div>
    <div class="outreach-mail"><div class="outreach-address"><small>收件人</small><span data-outreach-email></span></div><h3 data-outreach-subject lang="en"></h3><div class="outreach-context"><i class="ph ph-sparkle" aria-hidden="true"></i><span data-outreach-context></span></div><div class="outreach-body" lang="en"><p data-outreach-greeting></p><p data-outreach-body></p><p>Best,<br />QuickKOL Campaign Team</p></div></div>
    <div class="outreach-send-footer"><div><small>个性化邮件 · 模拟进度</small><b><span data-outreach-count>1</span> / 144</b></div><button type="button" data-outreach-send disabled>发送中…</button></div><div class="outreach-send-progress"><span data-outreach-progress style="--share:0.7%"></span></div>
  </div>`;
}

export function mountCapabilityDemo(root, reducedMotion) {
  let timer;
  let crawlTimer;
  let rankingTimer;
  const animationFrames = new Set();
  const discovery = root.querySelector(".discovery-demo");
  if (discovery) {
    let phase = reducedMotion ? 2 : 0;
    let paused = reducedMotion;
    let remaining = phases[phase].duration;
    let phaseStartedAt;
    let crawlCount = reducedMotion ? 144 : 0;
    let rankingStage = reducedMotion ? 2 : 0;
    const paintRanking = () => {
      const order = rankingOrders[rankingStage];
      discovery.querySelectorAll("[data-discovery-person]").forEach((person, index) => {
        const slot = order.indexOf(index);
        person.style.setProperty("--slot", slot);
        person.classList.toggle("is-top", slot === 0);
      });
    };
    const stopRanking = () => { window.clearTimeout(rankingTimer); rankingTimer = undefined; };
    const startRanking = () => {
      if (rankingTimer || paused || phase !== 2 || rankingStage === 2) return;
      rankingTimer = window.setTimeout(() => {
        rankingTimer = undefined;
        rankingStage += 1;
        paintRanking();
        startRanking();
      }, 1400);
    };
    const updateCrawl = () => {
      discovery.querySelector("[data-discovery-crawl-count]").textContent = crawlCount;
      discovery.querySelectorAll("[data-crawler-person]").forEach((person, index) => person.classList.toggle("is-found", crawlCount >= Math.ceil((index + 1) * 144 / crawlPeople.length)));
      discovery.querySelectorAll("[data-crawl-match]").forEach((match, index) => match.classList.toggle("is-visible", crawlCount >= [24, 56, 92, 128, 144][index]));
    };
    const stopCrawler = () => { window.clearInterval(crawlTimer); crawlTimer = undefined; };
    const startCrawler = () => {
      if (crawlTimer || paused || phase !== 1 || crawlCount >= 144) return;
      crawlTimer = window.setInterval(() => {
        crawlCount = Math.min(crawlCount + 3, 144);
        updateCrawl();
        if (crawlCount === 144) stopCrawler();
      }, 72);
    };
    const paint = () => {
      discovery.dataset.phase = phase;
      discovery.dataset.paused = String(paused);
      discovery.querySelector("[data-discovery-summary]").textContent = phases[phase].summary;
      discovery.querySelectorAll("[data-discovery-view]").forEach((view, index) => { view.hidden = index !== phase; });
      discovery.querySelectorAll("[data-discovery-step]").forEach((step, index) => {
        step.classList.toggle("is-active", index === phase);
        step.classList.toggle("is-done", index < phase);
        if (index === phase) step.setAttribute("aria-current", "step"); else step.removeAttribute("aria-current");
      });
      if (phase === 1) { updateCrawl(); startCrawler(); } else stopCrawler();
      if (phase === 2) { paintRanking(); startRanking(); } else stopRanking();
      const toggle = discovery.querySelector("[data-discovery-toggle]");
      toggle.textContent = paused ? "播放演示" : "暂停演示";
      toggle.setAttribute("aria-label", paused ? "播放 AI 搜索演示" : "暂停 AI 搜索演示");
    };
    const schedule = () => {
      window.clearTimeout(timer);
      if (paused) return;
      phaseStartedAt = performance.now();
      timer = window.setTimeout(() => {
        if (!document.hidden) {
          phase = (phase + 1) % phases.length;
          if (phase === 1) crawlCount = 0;
          if (phase === 2) rankingStage = 0;
          paint();
        }
        remaining = phases[phase].duration;
        schedule();
      }, remaining);
    };
    discovery.addEventListener("click", (event) => {
      const audienceTab = event.target.closest("[data-audience-tab]");
      if (audienceTab) {
        const selected = audienceTab.dataset.audienceTab;
        discovery.querySelectorAll("[data-audience-tab]").forEach((button) => button.setAttribute("aria-selected", String(button === audienceTab)));
        discovery.querySelectorAll("[data-audience-panel]").forEach((panel) => { panel.hidden = panel.dataset.audiencePanel !== selected; });
        return;
      }
      const mode = event.target.closest("[data-discovery-mode]");
      if (mode) {
        const similar = mode.dataset.discoveryMode === "similar";
        discovery.querySelectorAll("[data-discovery-mode]").forEach((button) => button.setAttribute("aria-pressed", String(button === mode)));
        discovery.querySelector("[data-discovery-query-card]").classList.toggle("is-similar", similar);
        discovery.querySelector("[data-discovery-query]").textContent = similar ? people[0].handle : "无线降噪耳机、音频实测、通勤体验";
        discovery.querySelector("[data-discovery-query-detail]").textContent = similar ? people[0].topic : "美国 · 英语科技与音频测评达人";
        const stepLabels = similar ? ["读取与分析", "搜索匹配", "AI 筛选排序"] : ["理解条件", "搜索匹配", "AI 筛选排序"];
        discovery.querySelectorAll("[data-discovery-step-label]").forEach((label, index) => { label.textContent = stepLabels[index]; });
        phase = reducedMotion ? 2 : 0;
        remaining = phases[phase].duration;
        crawlCount = reducedMotion ? 144 : 0;
        rankingStage = reducedMotion ? 2 : 0;
      } else if (event.target.closest("[data-discovery-toggle]")) {
        paused = !paused;
        if (paused) {
          remaining = Math.max(0, remaining - (performance.now() - phaseStartedAt));
          stopCrawler();
          stopRanking();
        }
      }
      else return;
      paint();
      schedule();
    });
    paint();
    schedule();
  }
  const intelligence = root.querySelector(".intelligence-demo");
  if (intelligence) {
    const tabs = [...intelligence.querySelectorAll("[data-intelligence-tab]")];
    const animatePercentages = (scope, selector) => {
      const counters = [...scope.querySelectorAll(selector)];
      const bars = selector === "[data-intelligence-percent]" ? [...scope.querySelectorAll("[data-intelligence-bar]")] : [];
      if (reducedMotion) return;
      counters.forEach((counter) => { counter.textContent = "0%"; });
      bars.forEach((bar) => { bar.style.setProperty("--animated-share", "0%"); });
      const startedAt = performance.now();
      const duration = 1800;
      let frame;
      const tick = (now) => {
        animationFrames.delete(frame);
        const progress = Math.min((now - startedAt) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 2);
        counters.forEach((counter) => {
          const target = Number(counter.dataset.intelligenceScore ?? counter.dataset.intelligencePercent);
          counter.textContent = `${Math.round(target * eased)}%`;
        });
        bars.forEach((bar) => {
          const target = Number(bar.dataset.intelligenceBar);
          bar.style.setProperty("--animated-share", `${target * eased}%`);
        });
        if (progress < 1) {
          frame = requestAnimationFrame(tick);
          animationFrames.add(frame);
        }
      };
      frame = requestAnimationFrame(tick);
      animationFrames.add(frame);
    };
    const selectAudience = (selected) => {
      tabs.forEach((tab) => {
        tab.setAttribute("aria-selected", String(tab === selected));
        tab.tabIndex = tab === selected ? 0 : -1;
      });
      intelligence.querySelectorAll("[data-intelligence-panel]").forEach((panel) => { panel.hidden = panel.dataset.intelligencePanel !== selected.dataset.intelligenceTab; });
      const panel = intelligence.querySelector(`[data-intelligence-panel="${selected.dataset.intelligenceTab}"]`);
      animatePercentages(panel, "[data-intelligence-percent]");
    };
    intelligence.addEventListener("click", (event) => {
      const tab = event.target.closest("[data-intelligence-tab]");
      if (tab) selectAudience(tab);
    });
    intelligence.addEventListener("keydown", (event) => {
      const tab = event.target.closest("[data-intelligence-tab]");
      if (!tab || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      const index = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : (tabs.indexOf(tab) + (event.key === "ArrowRight" ? 1 : -1) + tabs.length) % tabs.length;
      selectAudience(tabs[index]);
      tabs[index].focus();
    });
    animatePercentages(intelligence, "[data-intelligence-score]");
    animatePercentages(intelligence.querySelector('[data-intelligence-panel="country"]'), "[data-intelligence-percent]");
  }
  const outreach = root.querySelector(".outreach-demo");
  if (outreach) {
    let selected = 1;
    let sentCount = reducedMotion ? 144 : 1;
    const paintProgress = () => {
      outreach.querySelector("[data-outreach-count]").textContent = sentCount;
      outreach.querySelector("[data-outreach-progress]").style.setProperty("--share", `${sentCount / 144 * 100}%`);
      if (sentCount === 144) paint();
    };
    const paint = () => {
      const person = outreachPeople[selected];
      for (const [field, value] of Object.entries({ email: person.email, subject: person.subject, context: person.context, greeting: `Hi ${person.name},`, body: person.body })) outreach.querySelector(`[data-outreach-${field}]`).textContent = value;
      outreach.querySelectorAll("[data-outreach-person]").forEach((button, index) => {
        button.setAttribute("aria-pressed", String(index === selected));
        button.querySelector("[data-outreach-state]").textContent = sentCount === 144 ? "已发送" : "发送中…";
      });
      const button = outreach.querySelector("[data-outreach-send]");
      button.textContent = sentCount === 144 ? "已经全部发完" : "发送中…";
      button.classList.toggle("is-complete", sentCount === 144);
      outreach.querySelector("[data-outreach-progress]").classList.toggle("is-complete", sentCount === 144);
    };
    outreach.addEventListener("click", (event) => {
      const recipient = event.target.closest("[data-outreach-person]");
      if (recipient) { selected = Number(recipient.dataset.outreachPerson); paint(); }
    });
    paint();
    paintProgress();
    const advance = () => {
      if (sentCount === 144) return;
      timer = window.setTimeout(() => {
        sentCount += 1;
        paintProgress();
        advance();
      }, 20);
    };
    advance();
  }
  const agent = root.querySelector("[data-agent-demo]");
  if (agent) {
    let stage = reducedMotion ? stages.length - 1 : 0;
    const title = agent.querySelector("[data-agent-demo-title]");
    const status = agent.querySelector("[data-agent-demo-status]");
    const log = agent.querySelector("[data-agent-demo-log]");
    const workers = [...agent.querySelectorAll("[data-agent-worker]")];
    const steps = [...agent.querySelectorAll("[data-agent-step]")];
    const paint = () => {
      const current = stages[stage];
      title.textContent = current.title;
      status.textContent = current.status;
      log.textContent = current.log;
      workers.forEach((worker, index) => {
        worker.classList.toggle("is-active", current.active.includes(index));
        worker.classList.toggle("is-done", current.done.includes(index));
        worker.querySelector("[data-agent-worker-status]").textContent = current.workerStatus[index];
      });
      steps.forEach((step, index) => {
        const activeStep = stage;
        step.classList.toggle("is-active", index === activeStep);
        step.classList.toggle("is-done", index < activeStep);
        if (index === activeStep) step.setAttribute("aria-current", "step"); else step.removeAttribute("aria-current");
      });
    };
    const schedule = () => {
      window.clearTimeout(timer);
      if (reducedMotion) return;
      timer = window.setTimeout(() => {
        stage = (stage + 1) % stages.length;
        paint();
        schedule();
      }, stages[stage].duration);
    };
    paint();
    schedule();
  }
  return () => {
    window.clearTimeout(timer);
    window.clearInterval(crawlTimer);
    window.clearTimeout(rankingTimer);
    animationFrames.forEach((frame) => cancelAnimationFrame(frame));
  };
}
