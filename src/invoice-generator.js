import './invoice-generator.css';
import markup from './invoice-generator.html?raw';
import templateMenu from './invoice-templates.html?raw';
import colorMenu from './invoice-colors.html?raw';
import downloadMenu from './invoice-download.html?raw';
import { buildInvoiceDocument, calculateInvoice, escapeInvoiceText as escape, invoiceCurrencies, invoiceMoney } from './invoice.js';
import { initI18n, loadLocale, setPageLocale } from './i18n.js';

const templateKey = 'quickkol-invoice-template';
const fieldNames = ['title', 'number', 'po', 'currency', 'date', 'due', 'from', 'billTo', 'tax', 'discount', 'shipping', 'paid', 'payment', 'notes'];
const styleNames = { blue: 'QuickKOL Blue', minimal: 'Classic Minimal' };

export function mountInvoiceGenerator(initialLocale) {
  const main = document.querySelector('#main');
  main.classList.add('invoice-tool');
  main.dataset.i18nIgnore = '';
  main.innerHTML = markup;
  document.title = 'Invoice Generator | QuickKOL';
  document.querySelector('meta[name="description"]')?.setAttribute('content', 'Create, customize, and export professional invoices in minutes with QuickKOL’s free Invoice Generator.');
  document.querySelectorAll('.brand').forEach((link) => { link.href = '/'; });
  document.querySelectorAll('.site-footer a[href^="#"]').forEach((link) => { if (link.getAttribute('href') !== '#') link.href = `/${link.getAttribute('href')}`; });
  const editor = main.querySelector('.invoice-editor');
  const preview = main.querySelector('.invoice-preview');
  const lines = main.querySelector('.invoice-line-items');
  const lineMarkup = lines.firstElementChild.outerHTML;
  const uploadButton = main.querySelector('.invoice-logo-upload');
  const uploadMarkup = uploadButton.innerHTML;
  let colorCheck;
  const controls = [...editor.querySelectorAll('input:not([type="file"]),select,textarea')].filter((input) => !input.closest('.invoice-line-items'));
  controls.forEach((input, index) => { input.name = fieldNames[index]; });
  const dateString = (date) => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const today = new Date();
  const due = new Date(today);
  due.setDate(due.getDate() + 14);
  controls.find((input) => input.name === 'date').value = dateString(today);
  controls.find((input) => input.name === 'due').value = dateString(due);
  controls.find((input) => input.name === 'number').value = `INV${dateString(today).replaceAll('-', '')}`;
  let style = 'blue';
  let logo = '';
  const readInvoice = () => ({ ...Object.fromEntries(controls.map((input) => [input.name, input.value])), items: [...lines.children].map((row) => {
    const [description, qty, price] = row.querySelectorAll('input');
    return { description: description.value, qty: qty.value, price: price.value };
  }), style, logo });
  const example = readInvoice();
  const fileName = () => (readInvoice().number.trim() || 'Invoice').replace(/[<>:"/\\|?*\u0000-\u001f]/g, '_');
  window.addEventListener('beforeprint', () => { document.title = fileName(); });
  window.addEventListener('afterprint', () => { document.title = 'Invoice Generator | QuickKOL'; });
  const money = (value) => invoiceMoney(value, readInvoice().currency);
  let noticeTimer;
  function notify(message) {
    main.querySelector('.invoice-notice')?.remove();
    clearTimeout(noticeTimer);
    const notice = document.createElement('div');
    notice.className = 'invoice-notice';
    notice.setAttribute('role', 'status');
    notice.textContent = message;
    main.append(notice);
    noticeTimer = setTimeout(() => notice.remove(), 3500);
  }
  function updatePreview() {
    const invoice = readInvoice();
    const totals = calculateInvoice(invoice);
    preview.className = `invoice-preview invoice-preview-${style}`;
    preview.querySelector('h2').textContent = invoice.title || 'Invoice';
    preview.querySelector('.invoice-preview-heading img')?.remove();
    if (logo) {
      const image = document.createElement('img');
      image.src = logo;
      image.alt = 'Invoice logo';
      preview.querySelector('.invoice-preview-heading').append(image);
    }
    preview.querySelectorAll('.invoice-preview-meta p').forEach((paragraph, index) => { paragraph.textContent = (index ? invoice.billTo : invoice.from) || '—'; });
    preview.querySelectorAll('.invoice-preview-meta dd').forEach((definition, index) => { definition.textContent = [invoice.number, invoice.po, invoice.date, invoice.due][index] || '—'; });
    preview.querySelector('tbody').innerHTML = invoice.items.map((item) => `<tr><td>${escape(item.description || '—')}</td><td>${escape(item.qty || 0)}</td><td>${money(Math.max(0, Number(item.price) || 0))}</td><td>${money(Math.max(0, Number(item.qty) || 0) * Math.max(0, Number(item.price) || 0))}</td></tr>`).join('');
    preview.querySelector('.invoice-payment p').textContent = invoice.payment || '—';
    preview.querySelector('.invoice-notes p').textContent = invoice.notes || '—';
    const rows = [['Subtotal', totals.subtotal], [`Tax (${Math.max(0, Number(invoice.tax) || 0)}%)`, totals.tax], ['Shipping', totals.shipping], ['Discount', -totals.discount], ['Total', totals.total], ...(totals.paid ? [['Amount paid', -totals.paid]] : []), ['Total amount', totals.balance]];
    preview.querySelector('.invoice-totals').innerHTML = rows.map(([label, value], index) => `<div${index === rows.length - 1 ? ' class="invoice-balance"' : ''}><dt>${escape(label)}</dt><dd>${money(value)}</dd></div>`).join('');
    lines.querySelectorAll('.invoice-remove').forEach((button) => { button.disabled = lines.children.length === 1; });
    menus[1].querySelector('.invoice-action-trigger > span:nth-child(2)').textContent = styleNames[style];
    menus[1].querySelectorAll('[role="menuitem"]').forEach((button, index) => {
      const selected = Object.keys(styleNames)[index] === style;
      button.classList.toggle('is-selected', selected);
      button.querySelector('.invoice-menu-check')?.remove();
      if (selected) button.insertAdjacentHTML('beforeend', colorCheck);
    });
  }
  function addLine(item = { description: '', qty: '1', price: '' }) {
    lines.insertAdjacentHTML('beforeend', lineMarkup);
    lines.lastElementChild.querySelectorAll('input').forEach((input, index) => { input.value = [item.description, item.qty, item.price][index] ?? ''; });
  }
  function loadInvoice(invoice) {
    controls.forEach((input) => { input.value = invoice[input.name] ?? ''; });
    lines.replaceChildren();
    (invoice.items.length ? invoice.items : [{ description: '', qty: '1', price: '' }]).forEach(addLine);
    style = Object.hasOwn(styleNames, invoice.style) ? invoice.style : 'blue';
    logo = /^data:image\/(png|jpeg|webp);base64,/.test(invoice.logo || '') ? invoice.logo : '';
    uploadButton.innerHTML = uploadMarkup;
    if (logo) {
      const image = document.createElement('img');
      image.src = logo;
      image.alt = 'Uploaded invoice logo';
      uploadButton.replaceChildren(image);
    }
    updatePreview();
  }
  const menus = [...main.querySelectorAll('.invoice-action-menu')];
  [templateMenu, colorMenu, downloadMenu].forEach((menu, index) => {
    menus[index].insertAdjacentHTML('beforeend', menu);
    menus[index].querySelector('.invoice-action-popover').hidden = true;
    menus[index].querySelector('.invoice-action-trigger').setAttribute('aria-controls', `invoice-menu-${index}`);
    menus[index].querySelector('.invoice-action-popover').id = `invoice-menu-${index}`;
  });
  colorCheck = menus[1].querySelector('.invoice-menu-check').outerHTML;
  function closeMenus() {
    menus.forEach((menu) => {
      menu.classList.remove('is-open');
      menu.querySelector('.invoice-action-trigger').setAttribute('aria-expanded', 'false');
      menu.querySelector('.invoice-action-popover').hidden = true;
    });
  }
  menus.forEach((menu) => {
    const trigger = menu.querySelector('.invoice-action-trigger');
    trigger.addEventListener('click', () => {
      const open = !menu.classList.contains('is-open');
      closeMenus();
      menu.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', String(open));
      menu.querySelector('.invoice-action-popover').hidden = !open;
    });
    menu.addEventListener('keydown', (event) => {
      const buttons = [...menu.querySelectorAll('[role="menuitem"]')];
      const index = buttons.indexOf(document.activeElement);
      if (event.key === 'Escape') { closeMenus(); trigger.focus(); }
      if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
        event.preventDefault();
        trigger.setAttribute('aria-expanded', 'true');
        menu.classList.add('is-open');
        menu.querySelector('.invoice-action-popover').hidden = false;
        buttons[event.key === 'Home' ? 0 : event.key === 'End' ? buttons.length - 1 : (index + (event.key === 'ArrowDown' ? 1 : -1) + buttons.length) % buttons.length].focus();
      }
    });
  });
  document.addEventListener('click', (event) => { if (!event.target.closest('.invoice-action-menu')) closeMenus(); });
  menus[0].querySelectorAll('[role="menuitem"]').forEach((button, index) => button.addEventListener('click', () => {
    closeMenus();
    if (index === 0) loadInvoice(example);
    if (index === 1) loadInvoice({ ...example, from: '', billTo: '', payment: '', notes: '', items: [{ description: '', qty: '1', price: '' }] });
    if (index === 2) {
      try {
        const saved = JSON.parse(localStorage.getItem(templateKey));
        if (!saved || !Array.isArray(saved.items) || !invoiceCurrencies.includes(saved.currency)) { notify('No saved template in this browser yet.'); return; }
        loadInvoice(saved);
        notify('Saved template loaded.');
      } catch { notify('Unable to load the saved template.'); }
    }
  }));
  main.querySelector('.invoice-save-action').addEventListener('click', () => {
    try { localStorage.setItem(templateKey, JSON.stringify(readInvoice())); notify('Template saved in this browser.'); }
    catch { notify('Unable to save the template. Browser storage may be full or unavailable.'); }
  });
  menus[1].querySelectorAll('[role="menuitem"]').forEach((button, index) => button.addEventListener('click', () => { style = Object.keys(styleNames)[index]; closeMenus(); updatePreview(); }));
  menus[2].querySelectorAll('[role="menuitem"]').forEach((button, index) => button.addEventListener('click', () => {
    closeMenus();
    if (index === 0) { document.title = fileName(); window.print(); return; }
    const invoice = readInvoice();
    const format = index === 1 ? 'doc' : 'xls';
    const url = URL.createObjectURL(new Blob(['\ufeff', buildInvoiceDocument(invoice, format)], { type: index === 1 ? 'application/msword' : 'application/vnd.ms-excel' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `${fileName()}.${format}`;
    document.body.append(link);
    link.click();
    link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }));
  editor.addEventListener('input', updatePreview);
  main.querySelector('.invoice-add-item').addEventListener('click', () => { addLine(); updatePreview(); lines.lastElementChild.querySelector('input').focus(); });
  lines.addEventListener('click', (event) => { const remove = event.target.closest('.invoice-remove'); if (remove && lines.children.length > 1) { remove.closest('.invoice-line-item').remove(); updatePreview(); } });
  const fileInput = main.querySelector('input[type="file"]');
  // Rasterize uploads so saved templates and Office exports remain self-contained.
  fileInput.accept = 'image/png,image/jpeg,image/webp,image/svg+xml';
  uploadButton.addEventListener('click', () => fileInput.click());
  fileInput.addEventListener('change', async () => {
    const file = fileInput.files[0];
    if (!file) return;
    if (!['image/png', 'image/jpeg', 'image/webp', 'image/svg+xml'].includes(file.type) || file.size > 5 * 1024 * 1024) { notify('Choose a PNG, JPG, WebP, or SVG image under 5 MB.'); return; }
    const url = URL.createObjectURL(file);
    try {
      const image = new Image();
      image.src = url;
      await image.decode();
      const scale = Math.min(1, 800 / Math.max(image.naturalWidth, image.naturalHeight));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
      canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
      logo = canvas.toDataURL('image/png');
      image.src = logo;
      image.alt = 'Uploaded invoice logo';
      uploadButton.replaceChildren(image);
      updatePreview();
    } catch { notify('Unable to read this image. Please choose another file.'); }
    finally { URL.revokeObjectURL(url); fileInput.value = ''; }
  });
  updatePreview();
  function updateTheme() {
    const theme = document.documentElement.dataset.theme;
    document.querySelectorAll('[data-theme-value]').forEach((button) => {
      const active = button.dataset.themeValue === theme;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#111315' : '#ffffff');
  }
  function closeSiteMenus() {
    document.querySelector('[data-language-menu]').hidden = true;
    document.querySelector('[data-language]').setAttribute('aria-expanded', 'false');
    document.querySelector('[data-mobile-nav]').classList.remove('is-open');
    document.querySelector('[data-menu]').setAttribute('aria-expanded', 'false');
    document.querySelector('[data-menu] i').className = 'ph ph-list';
  }
  document.querySelector('[data-start]').addEventListener('click', () => { window.location.href = 'https://app.quickkol.com/en/login'; });
  document.addEventListener('click', async (event) => {
    const theme = event.target.closest('[data-theme-value]');
    if (theme) {
      document.documentElement.dataset.theme = theme.dataset.themeValue;
      localStorage.setItem('quickkol-theme', theme.dataset.themeValue);
      updateTheme();
    }
    if (event.target.closest('[data-language]')) {
      const menu = document.querySelector('[data-language-menu]');
      menu.hidden = !menu.hidden;
      document.querySelector('[data-language]').setAttribute('aria-expanded', String(!menu.hidden));
    } else if (!event.target.closest('[data-language-switcher]') && !event.target.closest('[data-language-option]')) {
      document.querySelector('[data-language-menu]').hidden = true;
      document.querySelector('[data-language]').setAttribute('aria-expanded', 'false');
    }
    const option = event.target.closest('[data-language-option]');
    if (option && !option.disabled) { await loadLocale(option.dataset.languageOption); setPageLocale(option.dataset.languageOption); closeSiteMenus(); }
    if (event.target.closest('[data-menu]')) {
      const open = document.querySelector('[data-mobile-nav]').classList.toggle('is-open');
      document.querySelector('[data-menu]').setAttribute('aria-expanded', String(open));
      document.querySelector('[data-menu] i').className = `ph ${open ? 'ph-x' : 'ph-list'}`;
    }
    if (event.target.closest('[data-mobile-nav] a')) closeSiteMenus();
    if (event.target.closest('[data-footer-tool]')) notify('Coming soon');
  });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeSiteMenus(); });
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
