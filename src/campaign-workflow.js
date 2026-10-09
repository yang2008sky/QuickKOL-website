import "./campaign-workflow.css";
import { localizeText, localizeCopy } from "./i18n.js";

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
const previewTabs = [["brief", "需求输入"], ["analyzing", "AI 分析"], ["strategy", "合作方案"], ["plan", "执行计划"], ["shortlist", "达人名单"], ["email", "邮件触达"], ["complete", "反馈复盘"]];
const creatorAvatars = [
  "/assets/testimonials/olivia-brooks.jpg", "/assets/testimonials/evan-wu.jpg", "/assets/testimonials/camila-santos.jpg",
  "/assets/testimonials/noah-liu.jpg", "/assets/testimonials/maya-chen.jpg", "/assets/testimonials/zhou-kai.jpg",
  "/assets/testimonials/yuki-tanaka.jpg", "/assets/testimonials/felix-weber.jpg", "/assets/testimonials/lin-zhixia.jpg",
  "/assets/testimonials/arjun-mehta.jpg", "/assets/testimonials/james-walker.jpg", "/assets/testimonials/sophia-park.jpg",
];

const creatorContentShots = [
  { src: "/assets/creator-content-commute-anc.jpg", title: "通勤降噪实测" },
  { src: "/assets/creator-content-studio-audio.jpg", title: "音质与续航对比" },
  { src: "/assets/blog/discovery.jpg", title: "拍摄场景测试" },
  { src: "/assets/blog/content-approval.jpg", title: "视频剪辑预览" },
  { src: "/assets/blog/audience-quality.jpg", title: "内容数据复盘" },
  { src: "/assets/blog/shortlist.jpg", title: "耳机体验记录" },
  { src: "/assets/blog/analytics.jpg", title: "测评数据分析" },
  { src: "/assets/blog/performance-baseline.jpg", title: "声音表现对比" },
  { src: "/assets/blog/measurement.jpg", title: "佩戴体验测试" },
  { src: "/assets/blog/workflow.jpg", title: "长视频制作花絮" },
];
const analysis = [
  ["正在理解你的 Campaign", "美国市场，YouTube、Instagram 与 TikTok 联动。正在结合产品测试目标，梳理需要验证的降噪、音质、续航与佩戴体验。"],
  ["正在判断适合的测评达人", "从音频测评经验、英语内容、美国受众和近期长视频表现筛选，而不仅看粉丝量。"],
  ["正在分配合作人数与预算", "预计合作 10–20 位。按 YouTube 50%、Instagram 25%、TikTok 25% 分配达人合作预算，再根据平台报价和测评质量建议人数。"],
  ["正在推算邀约规模", "根据示例投递率、回复率与回复后的合作确认率，倒推需要触达的人数，并预留候选余量。"],
];
const cohorts = [
  { id: "mid", platform: "YouTube", label: "中腰部音频测评", followers: [200000, 500000], range: "20万–50万", views: 10000, format: "深度测评长视频", reason: "音频设备对比充分，实测方法清晰", partners: 3, fee: 1600, outreach: 28 },
  { id: "micro", platform: "YouTube", label: "垂类音频测评", followers: [50000, 200000], range: "5万–20万", views: 10000, format: "深度测评长视频", reason: "垂类试用细致，真实反馈充分", partners: 3, fee: 800, outreach: 44 },
  { id: "instagram", platform: "Instagram", label: "科技 / 通勤体验", followers: [30000, 150000], range: "3万–15万", views: 10000, format: "Reels 体验测评 + Stories 反馈", reason: "擅长通勤场景演示与佩戴体验，评论讨论活跃", partners: 3, fee: 1200, outreach: 32 },
  { id: "tiktok", platform: "TikTok", label: "科技 / 音频实测", followers: [100000, 300000], range: "10万–30万", views: 30000, format: "短视频实测", reason: "实测演示直观，能在短视频中清晰解释测试结果", partners: 3, fee: 1200, outreach: 40 },
];
const economics = {
  partners: cohorts.reduce((sum, cohort) => sum + cohort.partners, 0),
  fees: cohorts.reduce((sum, cohort) => sum + cohort.partners * cohort.fee, 0),
  outreach: cohorts.reduce((sum, cohort) => sum + cohort.outreach, 0),
  samples: 2000, reserve: 1100, deliveryRate: .95, replyRate: .25, agreementRate: .4,
};
const platformMix = ["YouTube", "Instagram", "TikTok"].map((platform) => ({ platform, fees: cohorts.filter((cohort) => cohort.platform === platform).reduce((sum, cohort) => sum + cohort.partners * cohort.fee, 0) }));
const money = (value) => `$${value.toLocaleString("en", { maximumFractionDigits: 2 })}`;
const defaultSteps = () => cohorts.map((cohort) => ({
  ...cohort, title: `搜索 ${cohort.platform} ${cohort.range}粉丝达人 · 预计搜索 ${cohort.outreach} 位`, followers: [...cohort.followers],
  description: `美国 · 英语${cohort.label} · 近期平均观看量 ${cohort.views / 10000}万以上${cohort.platform === "YouTube" ? "，优先 2万以上" : ""} · 筛选 ${cohort.outreach} 位待邀约候选，目标合作 ${cohort.partners} 位`, status: "pending", editing: false,
}));

export function createCampaignWorkflow(root, onBusy) {
  const tabs = document.querySelector("[data-campaign-flow-tabs]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const wait = (milliseconds) => new Promise((resolve) => window.setTimeout(resolve, reducedMotion ? 0 : milliseconds));
  let generation = 0;
  let drag;
  let keyboardGrabbed;
  let state = initialState();
  const composer = document.querySelector("[data-campaign-composer]");
  const previewDurations = { brief: 6000, analyzing: analysis.length * 1700, strategy: 6800, plan: 8500, shortlist: 6000, email: 12000, complete: 6000 };
  let previewAutoplay = false;
  let previewFrame;
  let playingPhase;
  let previewElapsed = 0;
  let planPreview;
  let planAnimations = [];
  let shortlistAnimations = [];
  let emailPreview;
  let reportCount;
  let reportFrame;
  const shortlistSize = () => window.innerWidth <= 430 ? 2 : window.innerWidth <= 700 ? 4 : 8;

  function playReportCount() {
    if (!reportCount) return;
    let lastFrame = performance.now();
    const tick = (now) => {
      const delta = now - lastFrame;
      lastFrame = now;
      if (!document.hidden && delta < 250) reportCount.elapsed += delta;
      const progress = Math.min(reportCount.elapsed / 1500, 1);
      reportCount.metrics.forEach(({ element, target, suffix }) => {
        const value = `${Math.floor(target * (1 - (1 - progress) ** 3))}${suffix}`;
        if (element.textContent !== value) element.textContent = value;
      });
      if (progress < 1) reportFrame = window.requestAnimationFrame(tick);
    };
    reportFrame = window.requestAnimationFrame(tick);
  }

  function startReportCount() {
    if (reducedMotion) return;
    const metrics = [...root.querySelectorAll(".wf-report .wf-metrics strong")].filter((element) => Number.isFinite(parseFloat(element.textContent))).map((element) => ({ element, target: parseFloat(element.textContent), suffix: element.textContent.endsWith("%") ? "%" : "" }));
    reportCount = { elapsed: 0, metrics };
    metrics.forEach(({ element, suffix }) => { element.textContent = `0${suffix}`; });
    playReportCount();
  }

  function startEmailPreview() {
    if (reducedMotion || !state.drafts.length) return;
    const indices = [0, 4, 6, 9].filter((index) => index < state.drafts.length);
    emailPreview = { ids: indices.map((index) => state.drafts[index].id), index: -1 };
    previewDurations.email = indices.length * 2800 + 800;
    updateEmailPreview();
  }

  function updateEmailPreview() {
    if (!emailPreview || state.phase !== "email") return;
    const index = Math.min(Math.floor(previewElapsed / 2800), emailPreview.ids.length - 1);
    if (index !== emailPreview.index) {
      emailPreview.index = index;
      state.preview = emailPreview.ids[index];
      root.querySelector(".wf-output-draft").outerHTML = renderDraft();
      const avatar = root.querySelector('.wf-recipient-avatar.is-active');
      const strip = avatar.parentElement;
      strip.scrollTo({ left: Math.max(0, avatar.offsetLeft - strip.offsetLeft - strip.clientWidth / 2), behavior: "smooth" });
    }
    const draft = state.drafts.find((item) => item.id === state.preview);
    const elapsed = previewElapsed - index * 2800;
    const subject = draft.subjectEdited ? draft.subject : localizeText(draft.subject);
    const paragraphs = (draft.bodyEdited ? draft.body : localizeText(draft.body)).split("\n\n");
    root.querySelector("[data-wf-subject]").value = subject.slice(0, Math.floor(subject.length * Math.min(elapsed / 500, 1)));
    const bodyElapsed = Math.max(0, elapsed - 650);
    const paragraphDuration = 1400 / paragraphs.length;
    root.querySelector("[data-wf-body]").value = paragraphs.map((paragraph, paragraphIndex) => {
      const progress = Math.max(0, Math.min((bodyElapsed - paragraphIndex * paragraphDuration) / paragraphDuration, 1));
      return paragraph.slice(0, Math.floor(paragraph.length * progress));
    }).filter(Boolean).join("\n\n");
  }

  function clearShortlistPreview() {
    shortlistAnimations.forEach((animation) => animation.cancel());
    shortlistAnimations = [];
  }

  function startShortlistPreview() {
    if (reducedMotion) return;
    const grid = root.querySelector(".wf-creators");
    const cards = [...grid.children];
    const duration = 350;
    const interval = 250;
    previewDurations.shortlist = (cards.length - 1) * interval + duration + 1000;
    root.classList.remove("wf-reveal-creators");
    shortlistAnimations = cards.map((card, index) => card.animate([
      { opacity: 0, transform: "translateY(12px)", visibility: "hidden" },
      { opacity: 1, transform: "none", visibility: "visible" },
    ], { duration, delay: index * interval, fill: "backwards", easing: "ease-out" }));
  }

  function clearPlanPreview() {
    planAnimations.forEach((animation) => animation.cancel());
    planAnimations = [];
    planPreview = undefined;
  }

  function startPlanPreview() {
    if (reducedMotion) return;
    planPreview = { swaps: 0 };
    planAnimations = [...root.querySelectorAll("[data-wf-step]")].map((row, index) => row.animate([
      { opacity: 0, transform: "translateY(12px)", clipPath: "inset(0 100% 0 0)" },
      { opacity: 1, transform: "none", clipPath: "inset(0)" },
    ], { duration: 450, delay: index * 450, fill: "backwards", easing: "ease-out" }));
  }

  function updatePlanPreview() {
    if (!planPreview || state.phase !== "plan") return;
    const swapIndex = planPreview.swaps;
    if (swapIndex >= 2 || previewElapsed < 2600 + swapIndex * 1200) return;
    planPreview.swaps += 1;
    const rows = [...root.querySelectorAll("[data-wf-step]")];
    const first = rows[swapIndex * 2];
    const second = rows[swapIndex * 2 + 1];
    if (!first || !second) return;
    const before = new Map(rows.map((row) => [row, row.getBoundingClientRect().top]));
    first.parentNode.insertBefore(second, first);
    reorder(second.dataset.wfStep, swapIndex * 2);
    [...root.querySelectorAll("[data-wf-step]")].forEach((row, index) => {
      row.querySelector("small").textContent = `STEP ${index + 1}`;
      row.querySelector("[data-wf-drag]").setAttribute("aria-label", `拖动步骤 ${index + 1}`);
      row.querySelector('[data-wf-action="edit"]').setAttribute("aria-label", `编辑步骤 ${index + 1}`);
      row.querySelector('[data-wf-action="delete"]').setAttribute("aria-label", `删除步骤 ${index + 1}`);
    });
    [first, second].forEach((row) => {
      const offset = before.get(row) - row.getBoundingClientRect().top;
      planAnimations.push(row.animate([
        { transform: `translateY(${offset}px)`, borderColor: "var(--blue)", background: "var(--bg-soft)" },
        { transform: "none", borderColor: "var(--blue)", background: "var(--bg-soft)", offset: .8 },
        { transform: "none" },
      ], { duration: 750, easing: "cubic-bezier(.22, 1, .36, 1)" }));
    });
  }

  function updatePreviewControl() {
    const control = tabs.querySelector("[data-wf-preview-toggle]");
    if (!control) return;
    const label = previewAutoplay ? "暂停流程预览" : "播放流程预览";
    control.setAttribute("aria-label", label);
    control.setAttribute("title", label);
    control.querySelector("i").className = `ph ph-${previewAutoplay ? "pause" : "play"}`;
  }

  function pausePreview(event) {
    previewAutoplay = false;
    if (event && emailPreview) {
      if (["pointerdown", "keydown"].includes(event.type)) {
        const draft = state.drafts.find((item) => item.id === state.preview);
        root.querySelector("[data-wf-subject]").value = draft.subjectEdited ? draft.subject : localizeText(draft.subject);
        root.querySelector("[data-wf-body]").value = draft.bodyEdited ? draft.body : localizeText(draft.body);
      }
      emailPreview = undefined;
    }
    if (event) clearPlanPreview();
    else planAnimations.filter((animation) => animation.playState === "running").forEach((animation) => animation.pause());
    shortlistAnimations.filter((animation) => animation.playState === "running").forEach((animation) => animation.pause());
    window.cancelAnimationFrame(reportFrame);
    root.querySelector(".wf-strategy")?.classList.add("is-preview-paused");
    window.cancelAnimationFrame(previewFrame);
    previewObserver?.disconnect();
    updatePreviewControl();
  }

  function playPreview(phase, resume = false) {
    window.cancelAnimationFrame(previewFrame);
    root.querySelector(".wf-strategy")?.classList.remove("is-preview-paused");
    if (!resume || playingPhase !== phase) previewElapsed = 0;
    playingPhase = phase;
    planAnimations.filter((animation) => animation.playState === "paused").forEach((animation) => animation.play());
    shortlistAnimations.filter((animation) => animation.playState === "paused").forEach((animation) => animation.play());
    if (reportCount && reportCount.elapsed < 1500) playReportCount();
    tabs.querySelectorAll("[data-wf-tab]").forEach((button) => button.style.setProperty("--wf-preview-progress", "0"));
    const button = tabs.querySelector(`[data-wf-tab="${phase}"]`);
    button.style.setProperty("--wf-preview-progress", String(Math.min(previewElapsed / previewDurations[phase], 1)));
    let lastFrame = performance.now();
    updatePreviewControl();
    if (reducedMotion) return;
    const tick = (now) => {
      const delta = now - lastFrame;
      lastFrame = now;
      if (!document.hidden && delta < 250) previewElapsed += delta;
      if (phase === "plan") updatePlanPreview();
      if (phase === "email") updateEmailPreview();
      button.style.setProperty("--wf-preview-progress", String(Math.min(previewElapsed / previewDurations[phase], 1)));
      if (previewElapsed >= previewDurations[phase]) {
        const index = previewTabs.findIndex(([key]) => key === phase);
        preview(previewTabs[(index + 1) % previewTabs.length][0], true);
        return;
      }
      previewFrame = window.requestAnimationFrame(tick);
    };
    previewFrame = window.requestAnimationFrame(tick);
  }

  function initialState() {
    return { phase: "analyzing", analysisStage: 0, outreach: "manual", steps: defaultSteps(), creators: [], drafts: [], processed: 0, tracked: false, insight: { requestedCount: economics.partners } };
  }

  tabs.innerHTML = `<span>流程预览</span>${previewTabs.map(([key, label], index) => `<button type="button" role="tab" id="wf-tab-${key}" data-wf-tab="${key}" aria-selected="${index === 0}" aria-controls="${key === "brief" ? "campaign-composer-panel" : "campaign-workflow-panel"}" tabindex="${index ? -1 : 0}">${label}</button>`).join("")}<button class="wf-preview-control" type="button" data-wf-preview-toggle aria-label="播放流程预览" title="播放流程预览"><i class="ph ph-play" aria-hidden="true"></i></button>`;

  function selectTab(active) {
    tabs.querySelectorAll("[data-wf-tab]").forEach((button) => {
      button.setAttribute("aria-selected", String(button.dataset.wfTab === active));
      button.tabIndex = button.dataset.wfTab === active ? 0 : -1;
      if (button.dataset.wfTab !== active) button.style.setProperty("--wf-preview-progress", "0");
    });
    if (previewAutoplay && playingPhase !== active) playPreview(active);
  }

  function showWorkspace() {
    document.querySelector("[data-campaign-composer]").hidden = true;
    root.hidden = false;
  }

  function renderAnalysis() {
    const [title, description] = analysis[state.analysisStage];
    return `<div class="wf-analysis" role="status" aria-live="polite"><div class="wf-analysis-heading"><i class="ph ph-sparkle" aria-hidden="true"></i><b class="wf-thinking-label">Thinking…</b><span class="wf-thinking-dots" aria-hidden="true"><i></i><i></i><i></i></span></div><div class="wf-analysis-body"><ol class="wf-analysis-stages">${analysis.map(([label], index) => `<li class="${index < state.analysisStage ? "is-done" : index === state.analysisStage ? "is-active" : ""}"><span>${index < state.analysisStage ? '<i class="ph ph-check" aria-hidden="true"></i>' : index + 1}</span><b>${label}</b></li>`).join("")}</ol><div class="wf-thinking-copy"><b>${title}</b><p>${description}</p></div></div><small class="wf-thinking-caption">正在为你的 Campaign 整理合作建议</small></div>`;
  }

  function renderStrategy() {
    const total = economics.fees + economics.samples + economics.reserve;
    const delivered = economics.outreach * economics.deliveryRate;
    const replies = delivered * economics.replyRate;
    return `<section class="wf-strategy wf-strategy-compact">
      <div class="wf-strategy-heading"><div><h3>Campaign proposal</h3></div>
        <div class="wf-strategy-summary">${[[economics.partners + " 位", "建议合作人数"], [money(total), "预计总投入"], [money(economics.fees / economics.partners), "平均合作费 / 人"]].map(([value, label]) => `<div><strong>${value}</strong><small>${label}</small></div>`).join("")}</div>
      </div>
      <div class="wf-strategy-body" tabindex="0" role="region" aria-label="合作方案内容">
        <section class="wf-strategy-section"><h4>达人与预算分配</h4>
          <div class="wf-strategy-platforms">${platformMix.map((item, index) => {
            const group = cohorts.filter((cohort) => cohort.platform === item.platform);
            const criteria = item.platform === "YouTube" ? "5万–50万粉丝 · 长视频观看 ≥1万，优先2万" : item.platform === "Instagram" ? "3万–15万粉丝 · Reels 观看 ≥1万" : "10万–30万粉丝 · 短视频观看 ≥3万";
            return `<article style="--wf-output-start: ${index * 1400}ms"><div><b>${item.platform}</b><span>${Math.round(item.fees / economics.fees * 100)}% 预算</span></div><strong>${group.reduce((sum, cohort) => sum + cohort.partners, 0)} 位 <small>· ${money(item.fees)}</small></strong><p>${criteria}</p><small>${item.platform === "YouTube" ? "中腰部、垂类各3位 · 深度测评" : item.platform === "Instagram" ? "通勤与佩戴体验 · Reels + Stories" : "降噪与使用体验 · 短视频实测"}</small><div class="wf-platform-pricing">${group.map((cohort) => `${money(cohort.fee)} × ${cohort.partners}位`).join(" + ")}</div></article>`;
          }).join("")}</div>
        </section>
        <section class="wf-strategy-section wf-strategy-reach"><h4>准备触达 ${economics.outreach} 位，争取 ${economics.partners} 位合作</h4>
          <div class="wf-outreach-funnel" aria-label="预计触达转化漏斗">${[
            [economics.outreach, "邮件触达"],
            ["≈ " + Math.round(delivered), "成功投递", "投递率", economics.deliveryRate],
            ["≈ " + Math.round(replies), "收到回复", "回复率", economics.replyRate],
            ["≈ " + Math.round(replies * economics.agreementRate), "确认合作", "流失率", 1 - economics.agreementRate],
          ].map(([value, label, rateLabel, rate], index) => `<div style="--wf-output-start: ${4200 + index * 700}ms"><strong>${value}</strong><small><span>${label}</span>${rateLabel ? `<span class="wf-funnel-rate"><span>${rateLabel}</span> ${Math.round(rate * 100)}%</span>` : ""}</small></div>`).join("")}</div>
        </section>
      </div>
      <div class="wf-action-row wf-strategy-action"><div><small class="wf-strategy-scroll-hint" hidden>向下滚动查看完整方案 ↓</small><small>确认后可调整具体搜索步骤。</small></div><button class="wf-primary" data-wf-action="confirm-strategy">确认执行 <i class="ph ph-arrow-right" aria-hidden="true"></i></button></div>
    </section>`;
  }

  function updateStrategyScrollHint() {
    const body = root.querySelector(".wf-strategy-body");
    if (!body) return;
    const hasMore = body.scrollHeight - body.clientHeight - body.scrollTop > 4;
    body.classList.toggle("has-more", hasMore);
    root.querySelector(".wf-strategy-scroll-hint").hidden = !hasMore;
  }

  root.addEventListener("scroll", updateStrategyScrollHint, true);
  window.addEventListener("resize", updateStrategyScrollHint);

  function renderSteps() {
    return state.steps.map((step, index) => `<li class="wf-step is-${step.status} ${keyboardGrabbed === step.id ? "is-dragging" : ""}" data-wf-step="${step.id}">
      ${state.phase === "plan" ? `<button class="wf-drag-handle" type="button" data-wf-drag="${step.id}" aria-label="拖动步骤 ${index + 1}" aria-describedby="wf-drag-help" aria-pressed="${keyboardGrabbed === step.id}"><i class="ph ph-dots-six-vertical" aria-hidden="true"></i></button>` : ""}
      <div class="wf-step-main"><div class="wf-step-title"><div><small>STEP ${index + 1}</small><b>${escapeHtml(step.title)}</b></div><span>${({ pending: "待执行", running: "搜索中", done: "已完成" })[step.status]}</span></div>
      ${step.editing ? `<div class="wf-step-editor"><label>步骤名称<input data-wf-step-field="title" data-step="${step.id}" value="${escapeHtml(step.draft.title)}" required maxlength="80"></label><div class="wf-range-editor"><label>粉丝最小值<input type="number" data-wf-step-field="min" data-step="${step.id}" value="${step.draft.min}" required min="0" step="1"></label><label>粉丝最大值<input type="number" data-wf-step-field="max" data-step="${step.id}" value="${step.draft.max}" required min="0" step="1"></label></div><label>筛选要求<textarea data-wf-step-field="description" data-step="${step.id}" maxlength="1000">${escapeHtml(step.draft.description)}</textarea></label><button class="wf-primary" data-wf-action="save" data-step="${step.id}">保存步骤</button></div>` : ""}</div>
      ${state.phase === "plan" ? `<div class="wf-step-tools"><button data-wf-action="edit" data-step="${step.id}" aria-label="编辑步骤 ${index + 1}"><i class="ph ph-note-pencil" aria-hidden="true"></i></button><button data-wf-action="delete" data-step="${step.id}" aria-label="删除步骤 ${index + 1}"><i class="ph ph-trash" aria-hidden="true"></i></button></div>` : ""}</li>`).join("");
  }

  function renderPlan() {
    const editable = state.phase === "plan";
    return `<section class="wf-plan"><div class="wf-output-head"><h3>${editable ? "执行计划" : "正在按计划搜索"} <span>${state.steps.length} 个步骤</span></h3>${editable ? '<button class="wf-text-button" data-wf-action="reset">恢复默认计划</button>' : ""}</div><p class="wf-note" id="wf-drag-help">${editable ? "拖动左侧手柄调整搜索先后；键盘可按空格选中，方向键移动，再按空格放下。" : "搜索将按你调整后的顺序逐步执行，结果会合并到同一份名单。"}</p><ol class="wf-step-list">${renderSteps()}</ol><p class="sr-only" role="status" data-wf-reorder-status></p>${!state.steps.length ? '<p class="wf-empty">计划为空，恢复默认计划后即可搜索。</p>' : ""}${editable ? `<div class="wf-settings"><fieldset><legend>达人触达方式</legend><label><input type="radio" name="wf-outreach" data-wf-outreach="manual" ${state.outreach === "manual" ? "checked" : ""}>人工筛选后批量触达</label><label><input type="radio" name="wf-outreach" data-wf-outreach="auto" ${state.outreach === "auto" ? "checked" : ""}>自动触达候选达人</label></fieldset></div><div class="wf-action-row"><button class="wf-text-button" data-wf-action="back-strategy">返回方案</button><button class="wf-primary" data-wf-action="start" ${!state.steps.length || state.steps.some((step) => step.editing) ? "disabled" : ""}>开始搜索 <i class="ph ph-arrow-right" aria-hidden="true"></i></button></div>` : `<p class="wf-note" role="status">${state.steps.filter((step) => step.status === "done").length} / ${state.steps.length} 步搜索完成</p>`}</section>`;
  }

  function sampleCreators(step) {
    const group = cohorts.findIndex((cohort) => cohort.id === step.id);
    const profiles = [
      [{ name: "Lena Park", handle: "@lenasoundcheck" }, { name: "Alex Rivera", handle: "@alexlistens" }, { name: "Mia Chen", handle: "@miacarries" }],
      [{ name: "Noah Williams", handle: "@noahlistens" }, { name: "Emma Davis", handle: "@everydaywithemma" }, { name: "Leo Martin", handle: "@leoontheroad" }],
      [{ name: "Anna Ortiz", handle: "@anna.triesit" }, { name: "Felix Weber", handle: "@felixafterhours" }, { name: "Clara Zhou", handle: "@clarainmotion" }],
      [{ name: "Ben Carter", handle: "@bencarries" }, { name: "Lukas Meyer", handle: "@lukaslistens" }, { name: "Sophie Kim", handle: "@sophiecommutes" }],
    ][group];
    return profiles.map(({ name, handle }, index) => {
      const id = group * 3 + index;
      return { id, name, handle, avatar: creatorAvatars[id], match: 96 - group * 2 - index * 2, email: `${name.split(" ")[0].toLowerCase()}@example.com`, country: "美国", platform: step.platform, category: step.label, format: step.format, followers: Math.round(step.followers[0] + (step.followers[1] - step.followers[0]) * (index + 1) / 4), views: step.views + 5000 + index * 12000, reason: step.reason, selected: true, delivery: "pending", replied: false, source: step.title };
    });
  }

  function renderCandidates() {
    if (!state.creators.length) return "";
    if (["email", "sending"].includes(state.phase)) return "";
    const selected = state.creators.filter((creator) => creator.selected);
    const canSelect = state.phase === "shortlist";
    const showDelivery = ["sending", "complete"].includes(state.phase);
    return `<section class="wf-output wf-output-candidates"><div class="wf-output-head"><div><h3 class="wf-output-title">${state.creators.length} 位候选达人${state.insight.requestedCount ? ` <span>目标合作 ${state.insight.requestedCount} 位 / 计划触达 ${economics.outreach} 位 · 当前仅演示 ${state.creators.length} 位</span>` : ""}</h3></div><span>已选 ${selected.length} 位</span></div>
      <div class="wf-creators">${state.creators.map((creator, index) => `<label class="wf-creator" style="--wf-delay:${index * 55}ms">
        <input type="checkbox" data-wf-creator="${creator.id}" ${creator.selected ? "checked" : ""} ${canSelect ? "" : "disabled"} aria-label="选择 ${creator.handle}">
        <span class="wf-creator-head"><span class="wf-avatar"><img src="${creator.avatar}" alt="${escapeHtml(creator.handle)}"></span><span><b>${creator.handle}</b><small>${escapeHtml(creator.platform)} · <span>${escapeHtml(creator.country)}</span></small></span></span>
        <span class="wf-match"><b>${creator.match}%</b><small>匹配度</small></span>
        <span class="wf-creator-tags"><i>${creator.category}</i><i>${creator.format}</i></span>
        <span class="wf-creator-metrics"><span><small>粉丝</small><b>${creator.followers >= 1000 ? `${(creator.followers / 1000).toFixed(creator.followers >= 100000 ? 0 : 1)}K` : creator.followers}</b></span><span><small>平均观看</small><b>${creator.views >= 1000 ? `${(creator.views / 1000).toFixed(creator.views >= 100000 ? 0 : 1)}K` : creator.views}</b></span></span>
        <span class="wf-creator-content" aria-label="${creator.handle} 的近期内容">${[creator.id % creatorContentShots.length, (creator.id * 3 + 5 + Math.floor(creator.id / creatorContentShots.length)) % creatorContentShots.length].map((shotIndex) => {
          const shot = creatorContentShots[shotIndex];
          const viewCount = Math.round(creator.views * (shotIndex ? .82 : 1.16) / 100) * 100;
          const viewLabel = viewCount >= 1000 ? `${(viewCount / 1000).toFixed(1)}K` : String(viewCount);
          return `<span><img src="${shot.src}" alt="${creator.handle} 发布的${shot.title}视频画面"><i class="ph ph-play-fill" aria-hidden="true"></i><b>${viewLabel}</b><small>${shot.title}</small></span>`;
        }).join("")}</span>
        ${showDelivery ? `<span class="wf-delivery ${creator.delivery}" data-wf-delivery="${creator.id}">${creator.replied ? "已回复" : ({ sent: "投递成功", failed: "投递失败" })[creator.delivery]}</span>` : ""}
      </label>`).join("")}</div>
      ${canSelect ? `<div class="wf-action-row"><p>勾选要合作的达人，再继续生成邮件。</p><button class="wf-primary" data-wf-action="shortlist" ${selected.length ? "" : "disabled"}>确认 ${selected.length} 位达人并继续</button></div>` : ""}</section>`;
  }

  function renderDraft() {
    if (!state.drafts.length) return "";
    const draft = state.drafts.find((item) => item.id === state.preview) || state.drafts[0];
    const editable = state.phase === "email";
    const recipients = state.creators.filter((creator) => creator.selected).map((creator) => `<button type="button" class="wf-recipient-avatar ${creator.id === state.preview ? "is-active" : ""}" data-wf-preview-card="${creator.id}" aria-label="预览 ${creator.handle} 的邮件" aria-pressed="${creator.id === state.preview}">
      <span class="wf-avatar"><img src="${creator.avatar}" alt="${escapeHtml(creator.handle)}"></span>
      ${state.phase === "sending" ? `<span class="wf-delivery ${creator.delivery}" data-wf-delivery="${creator.id}">${creator.replied ? "已回复" : ({ pending: "等待发送", sent: "投递成功", failed: "投递失败" })[creator.delivery]}</span>` : ""}
    </button>`).join("");
    return `<section class="wf-output wf-output-draft"><div class="wf-output-head"><h3 class="wf-output-title">Email Outreach</h3><div class="wf-recipient-strip" aria-label="邮件收件人"><div class="wf-creators">${recipients}</div></div></div><div class="wf-email"><p>收件人 <b>${draft.email}</b></p><label>${localizeCopy("主题", "Subject")}<input data-i18n-ignore data-wf-subject="${draft.id}" value="${escapeHtml(draft.subjectEdited ? draft.subject : localizeText(draft.subject))}" ${editable ? "" : "readonly"}></label><label>邮件正文<textarea data-i18n-ignore data-wf-body="${draft.id}" ${editable ? "" : "readonly"}>${escapeHtml(draft.bodyEdited ? draft.body : localizeText(draft.body))}</textarea></label></div>${state.phase === "sending" ? `<div class="wf-progress"><span style="width:${state.processed / state.drafts.length * 100}%"></span></div><p class="wf-note" data-wf-send-progress role="status">正在触达 ${state.processed} / ${state.drafts.length} 位达人</p>` : ""}</section>`;
  }

  function renderReport() {
    if (state.phase !== "complete") return "";
    const contacted = state.creators.filter((creator) => creator.delivery !== "pending").length;
    const delivered = state.creators.filter((creator) => creator.delivery === "sent").length;
    const failed = contacted - delivered;
    const replies = state.creators.filter((creator) => creator.replied).length;
    return `<section class="wf-report"><div class="wf-output-head"><div><h3 class="wf-output-title">${contacted ? "本次合作触达反馈" : "达人搜索已完成，未安排触达"}</h3></div></div><div class="wf-metrics">${[[contacted, "触达总数"], [delivered, "投递成功"], [failed, "投递失败"], [state.tracked ? replies : "—", "收到回复"], [state.tracked ? `${delivered ? Math.round(replies / delivered * 100) : 0}%` : "—", "回复率"]].map(([value, label]) => `<article><strong data-i18n-ignore>${value}</strong><small>${label}</small></article>`).join("")}</div><p class="wf-note">回复率 = 收到回复 ÷ 投递成功。${state.tracked ? "示例回复已模拟更新；失败记录可在名单中查看。" : "本计划未执行回复追踪。"}</p></section>`;
  }

  function render(replayPreview = false) {
    clearPlanPreview();
    clearShortlistPreview();
    emailPreview = undefined;
    window.cancelAnimationFrame(reportFrame);
    reportCount = undefined;
    const previous = root.dataset.phase;
    const phase = state.phase;
    const active = phase === "searching" ? "plan" : phase === "sending" ? "email" : phase;
    selectTab(active);
    root.setAttribute("aria-labelledby", `wf-tab-${active}`);
    root.classList.toggle("wf-reveal-creators", state.creators.length > 0 && !root.querySelector(".wf-creators"));
    root.dataset.phase = phase;
    root.innerHTML = `${phase === "analyzing" ? renderAnalysis() : phase === "strategy" ? renderStrategy() : phase === "plan" ? renderPlan() : phase === "searching" ? `${renderPlan()}${renderCandidates()}` : phase === "shortlist" ? renderCandidates() : phase === "email" || phase === "sending" ? `${renderCandidates()}${renderDraft()}${phase === "email" ? `<div class="wf-action-row"><button class="wf-text-button" data-wf-action="back-shortlist">返回筛选名单</button><button class="wf-primary" data-wf-action="send" ${state.drafts.length ? "" : "disabled"}>确认发送 ${state.drafts.length} 封邮件</button></div>` : ""}` : `${renderReport()}${renderCandidates()}<div class="wf-action-row"><button class="wf-text-button" data-wf-action="revise">返回调整计划</button></div>`}`;
    if (phase === "strategy") window.requestAnimationFrame(updateStrategyScrollHint);
    if (phase === "plan" && previewAutoplay) startPlanPreview();
    if (phase === "shortlist" && (replayPreview || previous !== phase)) startShortlistPreview();
    if (phase === "email" && previewAutoplay && (replayPreview || previous !== phase)) startEmailPreview();
    if (phase === "complete" && (replayPreview || previous !== phase)) startReportCount();
    if (previous !== phase && !previewAutoplay) tabs.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" });
  }

  function prepareDrafts() {
    state.drafts = state.creators.filter((creator) => creator.selected).map((creator) => ({ id: creator.id, name: creator.name, email: creator.email, subject: `邀请你参与降噪耳机 ${creator.platform} 测评`, body: `Hi ${creator.name}，\n\n你在 ${creator.platform} 上的${creator.category}内容与我们的降噪耳机很契合。想邀请你参与一次面向美国受众的产品测试，以${creator.format}分享对降噪、音质、续航与佩戴体验的真实评价，并补充一份结构化反馈。\n\n我们可以安排寄样，并一起确认测试要求和合作时间。方便了解你的合作形式、报价和可用档期吗？\n\n期待你的回复！` }));
    state.preview = state.drafts[0]?.id;
  }

  function clearResults() {
    state.creators = [];
    state.drafts = [];
    state.processed = 0;
    state.tracked = false;
    state.steps.forEach((step) => { step.status = "pending"; });
  }

  async function search() {
    const token = ++generation;
    clearResults();
    state.phase = "searching";
    onBusy(true);
    for (const step of state.steps) {
      step.status = "running";
      render();
      await wait(1000);
      if (token !== generation) return;
      state.creators.push(...sampleCreators(step));
      step.status = "done";
    }
    if (state.outreach === "auto") {
      prepareDrafts();
      send();
    } else {
      state.creators = state.creators.slice(0, shortlistSize());
      state.phase = "shortlist";
      onBusy(false);
      render();
    }
  }

  async function send() {
    const token = ++generation;
    state.phase = "sending";
    state.processed = 0;
    state.tracked = false;
    state.creators.forEach((creator) => { creator.delivery = "pending"; creator.replied = false; });
    onBusy(true);
    render();
    for (const draft of state.drafts) {
      await wait(400);
      if (token !== generation) return;
      const creator = state.creators.find((item) => item.id === draft.id);
      creator.delivery = creator.id === 5 ? "failed" : "sent";
      state.processed += 1;
      const badge = root.querySelector(`[data-wf-delivery="${creator.id}"]`);
      badge.className = `wf-delivery ${creator.delivery}`;
      badge.textContent = creator.delivery === "sent" ? "投递成功" : "投递失败";
      root.querySelector(".wf-progress span").style.width = `${state.processed / state.drafts.length * 100}%`;
      root.querySelector("[data-wf-send-progress]").textContent = `正在触达 ${state.processed} / ${state.drafts.length} 位达人`;
    }
    await wait(700);
    if (token !== generation) return;
    state.creators.forEach((creator) => { creator.replied = creator.delivery === "sent" && creator.id % 3 === 0; });
    state.tracked = true;
    state.phase = "complete";
    onBusy(false);
    render();
  }

  async function analyze() {
    const token = ++generation;
    state.phase = "analyzing";
    state.analysisStage = 0;
    showWorkspace();
    onBusy(true);
    render();
    for (let stage = 1; stage <= analysis.length; stage += 1) {
      await wait(1700);
      if (token !== generation) return;
      state.analysisStage = stage;
      if (stage === analysis.length) { state.phase = "strategy"; onBusy(false); }
      render();
    }
  }

  function preview(phase, automatic = false) {
    clearPlanPreview();
    previewObserver?.disconnect();
    previewAutoplay = true;
    playingPhase = undefined;
    previewElapsed = 0;
    updatePreviewControl();
    if (!automatic) tabs.scrollIntoView({ behavior: reducedMotion ? "instant" : "smooth", block: "start" });
    generation += 1;
    onBusy(false);
    if (phase === "brief") {
      root.hidden = true;
      document.querySelector("[data-campaign-composer]").hidden = false;
      selectTab("brief");
      return;
    }
    showWorkspace();
    if (phase === "analyzing") { analyze(); return; }
    state.phase = phase;
    state.analysisStage = analysis.length;
    if (["shortlist", "email", "complete"].includes(phase)) {
      state.creators = (state.steps.length ? state.steps : defaultSteps()).flatMap(sampleCreators).slice(0, shortlistSize());
      if (phase !== "shortlist") prepareDrafts();
      if (phase === "complete") {
        state.creators.forEach((creator) => { creator.delivery = creator.id === 5 ? "failed" : "sent"; creator.replied = creator.delivery === "sent" && creator.id % 3 === 0; });
        state.tracked = true;
      }
    }
    if (phase === "plan") clearResults();
    render(true);
  }

  const previewObserver = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    previewObserver.disconnect();
    previewAutoplay = true;
    updatePreviewControl();
    playPreview("brief");
  }, { threshold: .5 });
  if (!reducedMotion) previewObserver.observe(tabs);
  [composer, root].forEach((surface) => {
    ["pointerdown", "keydown", "input", "change"].forEach((type) => surface.addEventListener(type, pausePreview));
  });

  tabs.addEventListener("click", (event) => {
    const control = event.target.closest("[data-wf-preview-toggle]");
    if (control) {
      if (previewAutoplay) pausePreview();
      else {
        previewAutoplay = true;
        const active = tabs.querySelector('[data-wf-tab][aria-selected="true"]')?.dataset.wfTab || "brief";
        playPreview(active, true);
      }
      return;
    }
    const button = event.target.closest("[data-wf-tab]");
    if (button) preview(button.dataset.wfTab);
  });
  tabs.addEventListener("keydown", (event) => {
    const buttons = [...tabs.querySelectorAll("[data-wf-tab]")];
    const index = buttons.indexOf(event.target);
    if (index < 0 || !["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const next = event.key === "Home" ? 0 : event.key === "End" ? buttons.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + buttons.length) % buttons.length;
    buttons.forEach((button, position) => { button.tabIndex = position === next ? 0 : -1; });
    buttons[next].focus();
  });

  root.addEventListener("click", (event) => {
    pausePreview();
    const previewCard = event.target.closest("[data-wf-preview-card]");
    if (previewCard) {
      state.preview = Number(previewCard.dataset.wfPreviewCard);
      render();
      return;
    }
    const button = event.target.closest("[data-wf-action]");
    if (!button || button.disabled) return;
    const action = button.dataset.wfAction;
    const step = state.steps.find((item) => item.id === button.dataset.step);
    if (action === "confirm-strategy" || action === "revise") { clearResults(); state.phase = "plan"; }
    if (action === "back-strategy") state.phase = "strategy";
    if (action === "back-shortlist") state.phase = "shortlist";
    if (action === "edit") {
      step.editing = true;
      step.draft = { title: step.title, min: step.followers[0], max: step.followers[1], description: step.description };
    }
    if (action === "save") {
      const inputs = [...root.querySelectorAll(`[data-wf-step-field][data-step="${step.id}"]`)];
      inputs.forEach((input) => input.setCustomValidity(""));
      const title = inputs.find((input) => input.dataset.wfStepField === "title");
      const max = inputs.find((input) => input.dataset.wfStepField === "max");
      if (!step.draft.title.trim()) title.setCustomValidity("请输入步骤名称");
      if (Number(step.draft.min) > Number(step.draft.max)) max.setCustomValidity("最大值不能小于最小值");
      const invalid = inputs.find((input) => !input.validity.valid);
      if (invalid) { invalid.reportValidity(); return; }
      const changedRange = step.followers[0] !== Number(step.draft.min) || step.followers[1] !== Number(step.draft.max);
      const rangeLabel = (value) => `${Number((Number(value) / 10000).toFixed(2))}万`;
      step.title = changedRange && step.draft.title.trim() === step.title ? `搜索 ${step.platform} ${rangeLabel(step.draft.min)}–${rangeLabel(step.draft.max)}粉丝达人 · 预计搜索 ${step.outreach} 位` : step.draft.title.trim();
      step.description = step.draft.description.trim();
      step.followers = [Number(step.draft.min), Number(step.draft.max)];
      step.editing = false;
    }
    if (action === "delete") state.steps = state.steps.filter((item) => item !== step);
    if (action === "reset") { state.steps = defaultSteps(); clearResults(); }
    if (action === "start") { search(); return; }
    if (action === "shortlist") { prepareDrafts(); state.phase = "email"; }
    if (action === "send") { send(); return; }
    render();
    if (action === "edit") root.querySelector(`[data-wf-step-field="title"][data-step="${step.id}"]`).focus();
  });

  root.addEventListener("change", (event) => {
    const input = event.target;
    if (input.matches("[data-wf-outreach]")) state.outreach = input.dataset.wfOutreach;
    if (input.matches("[data-wf-creator]")) state.creators.find((creator) => creator.id === Number(input.dataset.wfCreator)).selected = input.checked;
    if (input.matches("[data-wf-outreach], [data-wf-creator]")) render();
  });
  root.addEventListener("input", (event) => {
    const input = event.target;
    if (input.matches("[data-wf-step-field]")) {
      input.setCustomValidity("");
      state.steps.find((step) => step.id === input.dataset.step).draft[input.dataset.wfStepField] = input.value;
    }
    if (input.matches("[data-wf-subject]")) { const draft = state.drafts.find((draft) => draft.id === Number(input.dataset.wfSubject)); draft.subject = input.value; draft.subjectEdited = true; }
    if (input.matches("[data-wf-body]")) { const draft = state.drafts.find((draft) => draft.id === Number(input.dataset.wfBody)); draft.body = input.value; draft.bodyEdited = true; }
  });

  function reorder(id, targetIndex) {
    const index = state.steps.findIndex((step) => step.id === id);
    const [step] = state.steps.splice(index, 1);
    state.steps.splice(targetIndex, 0, step);
  }

  root.addEventListener("pointerdown", (event) => {
    const handle = event.target.closest("[data-wf-drag]");
    if (!handle || event.button !== 0 || state.steps.some((step) => step.editing)) return;
    event.preventDefault();
    handle.setPointerCapture(event.pointerId);
    drag = { id: handle.dataset.wfDrag, pointer: event.pointerId, row: handle.closest("[data-wf-step]") };
    drag.row.classList.add("is-dragging");
  });
  root.addEventListener("pointermove", (event) => {
    if (!drag || event.pointerId !== drag.pointer) return;
    const rows = [...root.querySelectorAll("[data-wf-step]")];
    const target = rows.find((row) => {
      const rect = row.getBoundingClientRect();
      return row !== drag.row && event.clientY >= rect.top && event.clientY <= rect.bottom;
    });
    if (!target) return;
    const before = new Map(rows.map((row) => [row, row.getBoundingClientRect().top]));
    const bounds = target.getBoundingClientRect();
    target.parentNode.insertBefore(drag.row, event.clientY < bounds.top + bounds.height / 2 ? target : target.nextSibling);
    if (!reducedMotion) rows.filter((row) => row !== drag.row).forEach((row) => {
      const offset = before.get(row) - row.getBoundingClientRect().top;
      if (offset) row.animate([{ transform: `translateY(${offset}px)` }, { transform: "none" }], { duration: 180, easing: "ease-out" });
    });
  });
  function finishDrag() {
    if (!drag) return;
    const index = [...root.querySelectorAll("[data-wf-step]")].indexOf(drag.row);
    const id = drag.id;
    drag = undefined;
    reorder(id, index);
    render();
    root.querySelector(`[data-wf-drag="${id}"]`).focus({ preventScroll: true });
    root.querySelector("[data-wf-reorder-status]").textContent = `步骤已移动到第 ${index + 1} 位`;
  }
  root.addEventListener("pointerup", finishDrag);
  root.addEventListener("pointercancel", finishDrag);
  root.addEventListener("keydown", (event) => {
    const handle = event.target.closest("[data-wf-drag]");
    if (!handle) return;
    const id = handle.dataset.wfDrag;
    if ([" ", "Enter", "Escape"].includes(event.key)) {
      event.preventDefault();
      keyboardGrabbed = event.key === "Escape" || keyboardGrabbed === id ? undefined : id;
      handle.setAttribute("aria-pressed", String(keyboardGrabbed === id));
      handle.closest(".wf-step").classList.toggle("is-dragging", keyboardGrabbed === id);
    }
    if (keyboardGrabbed === id && ["ArrowUp", "ArrowDown"].includes(event.key)) {
      event.preventDefault();
      const index = state.steps.findIndex((step) => step.id === id);
      const target = Math.max(0, Math.min(state.steps.length - 1, index + (event.key === "ArrowUp" ? -1 : 1)));
      reorder(id, target);
      render();
      root.querySelector(`[data-wf-drag="${id}"]`).focus();
      root.querySelector("[data-wf-reorder-status]").textContent = `步骤已移动到第 ${target + 1} 位`;
    }
  });

  window.addEventListener("quickkol:locale", () => {
    for (const field of root.querySelectorAll("[data-wf-subject], [data-wf-body]")) {
      const key = field.hasAttribute("data-wf-subject") ? "subject" : "body";
      const id = Number(field.getAttribute(`data-wf-${key}`));
      const draft = state.drafts.find((item) => item.id === id);
      if (draft && !draft[`${key}Edited`]) field.value = localizeText(draft[key]);
    }
  });

  return () => {
    pausePreview();
    state = initialState();
    analyze();
  };
}
