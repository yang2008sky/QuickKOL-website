import "./creator-showcase.css";
import { featuredCreators, additionalCreators } from "./creator-showcase-data.js";

const platformIcons = { YouTube: "youtube-logo", Instagram: "instagram-logo", TikTok: "tiktok-logo", X: "x-logo" };

function renderCreator(creator, duplicate) {
  const tag = creator.url ? "a" : "div";
  const link = creator.url ? `href="${creator.url}" target="_blank" rel="noopener noreferrer" ${duplicate ? 'tabindex="-1"' : ""}` : "";
  return `<${tag} class="creator-showcase-card" ${link}>
    <div class="creator-showcase-portrait">
      <img src="${creator.avatar}" alt="${creator.name}" width="120" height="120" loading="lazy" draggable="false" />
      <span class="creator-showcase-platform" title="${creator.platform}" data-i18n-ignore><i class="ph ph-${platformIcons[creator.platform]}" aria-hidden="true"></i><span class="sr-only">${creator.platform}</span></span>
    </div>
    <strong data-i18n-ignore>${creator.name}</strong>
    <span class="creator-showcase-category">${creator.category}</span>
  </${tag}>`;
}

export function renderCreatorShowcase() {
  return `<section class="creator-showcase" aria-labelledby="creator-showcase-title">
    <div class="creator-showcase-heading">
      <div><p class="eyebrow">发现更多创作者</p><h2 id="creator-showcase-title">每一种热爱，都有合适的创作者。</h2></div>
      <div class="creator-showcase-controls">
        <button type="button" data-creator-direction="-1" aria-label="上一组达人"><i class="ph ph-arrow-left" aria-hidden="true"></i></button>
        <button type="button" data-creator-pause aria-label="暂停达人滚动" aria-pressed="false"><i class="ph ph-pause" aria-hidden="true"></i></button>
        <button type="button" data-creator-direction="1" aria-label="下一组达人"><i class="ph ph-arrow-right" aria-hidden="true"></i></button>
      </div>
    </div>
    ${[featuredCreators, additionalCreators].map((creators, index) => `<div class="creator-showcase-viewport" data-creator-flow="${index === 0 ? 1 : -1}" tabindex="0" aria-label="达人展示，支持左右滑动">
      <div class="creator-showcase-track">${[true, false, true].map((duplicate) => `<div class="creator-showcase-group" ${duplicate ? 'aria-hidden="true"' : ""}>${creators.map((creator) => renderCreator(creator, duplicate)).join("")}</div>`).join("")}</div>
    </div>`).join("")}
  </section>`;
}

export function mountCreatorShowcase() {
  const root = document.querySelector(".creator-showcase");
  const pauseButton = root.querySelector("[data-creator-pause]");
  let paused = false;
  const syncRows = [...root.querySelectorAll(".creator-showcase-viewport")].map((viewport) => mountCreatorRow(root, viewport, () => paused));
  pauseButton.addEventListener("click", () => {
    paused = !paused;
    pauseButton.setAttribute("aria-pressed", String(paused));
    pauseButton.setAttribute("aria-label", paused ? "继续达人滚动" : "暂停达人滚动");
    pauseButton.querySelector("i").className = `ph ph-${paused ? "play" : "pause"}`;
    syncRows.forEach((sync) => sync());
  });
}

function mountCreatorRow(root, viewport, isPaused) {
  const group = viewport.querySelector(".creator-showcase-group");
  const direction = Number(viewport.dataset.creatorFlow);
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  let groupWidth = 0;
  let hovered = false;
  let focused = false;
  let visible = false;
  let pointer = null;
  let dragged = false;
  let cooldown = false;
  let cooldownTimer;
  let frame;
  let lastTime = 0;
  let remainder = 0;

  function normalize() {
    if (!groupWidth || focused) return;
    if (viewport.scrollLeft < groupWidth) viewport.scrollLeft += groupWidth;
    else if (viewport.scrollLeft >= groupWidth * 2) viewport.scrollLeft -= groupWidth;
  }

  function canRun() {
    return visible && !document.hidden && !motionPreference.matches && !isPaused() && !hovered && !focused && !pointer && !cooldown;
  }

  function tick(time) {
    frame = null;
    if (!canRun()) return;
    remainder += Math.min(time - lastTime, 50) * .028;
    const pixels = Math.floor(remainder);
    remainder -= pixels;
    viewport.scrollLeft += pixels * direction;
    normalize();
    lastTime = time;
    frame = requestAnimationFrame(tick);
  }

  function sync() {
    if (canRun() && !frame) {
      lastTime = performance.now();
      frame = requestAnimationFrame(tick);
    } else if (!canRun() && frame) {
      cancelAnimationFrame(frame);
      frame = null;
    }
  }

  function restAfterInteraction() {
    cooldown = true;
    clearTimeout(cooldownTimer);
    sync();
    cooldownTimer = setTimeout(() => { cooldown = false; normalize(); sync(); }, 1500);
  }

  new ResizeObserver(() => {
    const oldWidth = groupWidth;
    const offset = oldWidth ? viewport.scrollLeft % oldWidth : 0;
    groupWidth = group.getBoundingClientRect().width;
    viewport.scrollLeft = groupWidth + offset;
  }).observe(group);
  new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }).observe(root);
  viewport.addEventListener("pointerenter", (event) => { if (event.pointerType === "mouse") { hovered = true; sync(); } });
  viewport.addEventListener("pointerleave", () => { hovered = false; sync(); });
  viewport.addEventListener("focusin", () => { focused = true; sync(); });
  viewport.addEventListener("focusout", (event) => { focused = viewport.contains(event.relatedTarget); normalize(); sync(); });
  root.querySelectorAll("[data-creator-direction]").forEach((button) => {
    button.addEventListener("click", () => {
      viewport.scrollLeft += Number(button.dataset.creatorDirection) * 2 * root.querySelector(".creator-showcase-card").offsetWidth;
      normalize();
      restAfterInteraction();
    });
  });
  viewport.addEventListener("keydown", (event) => {
    if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
    event.preventDefault();
    viewport.scrollLeft += (event.key === "ArrowLeft" ? -1 : 1) * 176;
    restAfterInteraction();
  });
  viewport.addEventListener("wheel", restAfterInteraction, { passive: true });
  viewport.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    if (event.pointerType === "mouse") event.preventDefault();
    pointer = { id: event.pointerId, x: event.clientX, scroll: viewport.scrollLeft, type: event.pointerType };
    dragged = false;
    sync();
  });
  viewport.addEventListener("pointermove", (event) => {
    if (!pointer || pointer.type !== "mouse") return;
    const delta = event.clientX - pointer.x;
    if (Math.abs(delta) > 6 && !dragged) {
      dragged = true;
      viewport.setPointerCapture(pointer.id);
      viewport.classList.add("is-dragging");
    }
    if (dragged) { event.preventDefault(); viewport.scrollLeft = pointer.scroll - delta; }
  });
  function endDrag() {
    if (!pointer) return;
    pointer = null;
    viewport.classList.remove("is-dragging");
    setTimeout(() => { dragged = false; }, 0);
    restAfterInteraction();
  }
  window.addEventListener("pointerup", endDrag);
  viewport.addEventListener("pointercancel", endDrag);
  viewport.addEventListener("click", (event) => {
    if (dragged) { event.preventDefault(); event.stopPropagation(); dragged = false; }
  }, true);
  document.addEventListener("visibilitychange", sync);
  motionPreference.addEventListener("change", sync);
  return sync;
}
