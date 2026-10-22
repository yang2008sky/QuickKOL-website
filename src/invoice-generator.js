import './invoice-generator.css';
import markup from './invoice-generator.html?raw';
import colorMenu from './invoice-colors.html?raw';
import downloadMenu from './invoice-download.html?raw';
import { buildInvoiceDocument, calculateInvoice, escapeInvoiceText as escape, invoiceCurrencies, invoiceFileName, invoiceMoney } from './invoice.js';
import { initI18n, loadLocale, setPageLocale, currentLocale } from './i18n.js';

const templateKey = 'quickkol-invoice-template';
const templatesKey = 'quickkol-invoice-templates';
const fieldNames = ['title', 'number', 'po', 'currency', 'date', 'due', 'from', 'billTo', 'tax', 'discount', 'shipping', 'paid', 'payment', 'notes'];
const styleNames = { blue: 'QuickKOL Blue', minimal: 'Classic Minimal' };

export function mountInvoiceGenerator(initialLocale) {
  const main = document.querySelector('#main');
  main.classList.add('invoice-tool');
  main.lang = 'en';
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
  let activeTemplateId = null;
  const readInvoice = () => ({ ...Object.fromEntries(controls.map((input) => [input.name, input.value])), items: [...lines.children].map((row) => {
    const [description, qty, price] = row.querySelectorAll('input');
    return { description: description.value, qty: qty.value, price: price.value };
  }), style, logo });
  const fileName = () => invoiceFileName(readInvoice());
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
    const header = main.querySelector('.invoice-tool-header');
    const title = header.querySelector('h1').getBoundingClientRect();
    notice.style.top = `${title.top + title.height / 2 - header.getBoundingClientRect().top}px`;
    header.append(notice);
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
    menus[0].querySelector('.invoice-action-trigger > span:nth-child(2)').textContent = styleNames[style];
    menus[0].querySelectorAll('[role="menuitem"]').forEach((button, index) => {
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
  const menus = [...main.querySelectorAll('.invoice-action-menu:not(.invoice-saved-templates)')];
  [colorMenu, downloadMenu].forEach((menu, index) => {
    menus[index].insertAdjacentHTML('beforeend', menu);
    menus[index].querySelector('.invoice-action-popover').hidden = true;
    menus[index].querySelector('.invoice-action-trigger').setAttribute('aria-controls', `invoice-menu-${index}`);
    menus[index].querySelector('.invoice-action-popover').id = `invoice-menu-${index}`;
  });
  const savedMenu = main.querySelector('.invoice-saved-templates');
  savedMenu.insertAdjacentHTML('beforeend', '<div class="invoice-action-popover invoice-saved-popover" role="menu" id="invoice-saved-menu" hidden></div>');
  savedMenu.querySelector('.invoice-action-trigger').setAttribute('aria-controls', 'invoice-saved-menu');
  const savedPopover = savedMenu.querySelector('.invoice-action-popover');
  const savedIcon = savedMenu.querySelector('.invoice-action-icon').innerHTML;
  function readTemplates() {
    const validInvoice = (invoice) => invoice && Array.isArray(invoice.items) && invoice.items.every((item) => item && typeof item === 'object') && invoiceCurrencies.includes(invoice.currency);
    const stored = localStorage.getItem(templatesKey);
    if (stored !== null) {
      const templates = JSON.parse(stored);
      if (!Array.isArray(templates) || !templates.every((entry) => entry && typeof entry.id === 'string' && validInvoice(entry.invoice))) throw new Error('Invalid saved templates');
      return templates;
    }
    const legacy = JSON.parse(localStorage.getItem(templateKey));
    return validInvoice(legacy) ? [{ id: 'legacy', invoice: legacy }] : [];
  }
  function renderSavedTemplates() {
    const action = (name, label, detail) => `<button type="button" role="menuitem" data-template-action="${name}"><span class="invoice-menu-icon">${savedIcon}</span><span class="invoice-menu-copy"><strong>${label}</strong><small>${detail}</small></span></button>`;
    savedPopover.innerHTML = action('save', 'Save template', activeTemplateId ? 'Update the opened template' : 'Save current invoice in this browser') + (activeTemplateId ? action('new', 'Save as new template', 'Keep the opened template unchanged') : '');
    savedPopover.insertAdjacentHTML('beforeend', '<div class="invoice-menu-divider" role="separator"></div>');
    try {
      const templates = readTemplates();
      savedPopover.insertAdjacentHTML('beforeend', templates.length ? templates.map(({ id, invoice }) => {
        const name = escape(invoiceFileName({ number: invoice.number || '', po: invoice.po || '' }));
        return `<div class="invoice-template-row ${id === activeTemplateId ? 'is-selected' : ''}" role="none"><button type="button" role="menuitem" data-template-id="${escape(id)}" class="invoice-template-open"><span class="invoice-menu-icon">${savedIcon}</span><span class="invoice-menu-copy"><strong>${name}</strong><small>${escape(invoice.billTo?.trim().split(/\r?\n/)[0] || 'No Bill To information')}</small></span>${id === activeTemplateId ? colorCheck : ''}</button><button type="button" role="menuitem" class="invoice-template-delete" data-delete-template="${escape(id)}" aria-label="Delete template ${name}"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 6h18M9 6V4h6v2M5 6l1 14h12l1-14M10 10v6M14 10v6"></path></svg></button></div>`;
      }).join('') : '<p class="invoice-menu-empty">No saved templates yet.</p>');
    } catch { savedPopover.insertAdjacentHTML('beforeend', '<p class="invoice-menu-empty">Unable to load saved templates.</p>'); }
  }
  colorCheck = menus[0].querySelector('.invoice-menu-check').outerHTML;
  const actionMenus = [...menus, savedMenu];
  function closeMenus() {
    actionMenus.forEach((menu) => {
      menu.classList.remove('is-open');
      menu.querySelector('.invoice-action-trigger').setAttribute('aria-expanded', 'false');
      menu.querySelector('.invoice-action-popover').hidden = true;
    });
  }
  actionMenus.forEach((menu) => {
    const trigger = menu.querySelector('.invoice-action-trigger');
    trigger.addEventListener('click', () => {
      const open = !menu.classList.contains('is-open');
      closeMenus();
      if (menu === savedMenu && open) renderSavedTemplates();
      menu.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', String(open));
      menu.querySelector('.invoice-action-popover').hidden = !open;
    });
    menu.addEventListener('keydown', (event) => {
      if (menu === savedMenu && !menu.classList.contains('is-open') && ['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) renderSavedTemplates();
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
  savedPopover.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    if (button.dataset.deleteTemplate) {
      try {
        const templates = readTemplates();
        const saved = templates.find(({ id }) => id === button.dataset.deleteTemplate);
        if (!saved) { notify('This template is no longer available.'); return; }
        const name = invoiceFileName({ number: saved.invoice.number || '', po: saved.invoice.po || '' });
        if (!window.confirm(`Delete template "${name}"? This cannot be undone.`)) return;
        localStorage.setItem(templatesKey, JSON.stringify(templates.filter(({ id }) => id !== saved.id)));
        if (saved.id === 'legacy') localStorage.removeItem(templateKey);
        if (activeTemplateId === saved.id) activeTemplateId = null;
        renderSavedTemplates();
        savedMenu.querySelector('.invoice-action-trigger').focus();
        notify('Template deleted.');
      } catch { notify('Unable to delete the template. Browser storage may be unavailable.'); }
      return;
    }
    if (button.dataset.templateId) {
      try {
        const saved = readTemplates().find(({ id }) => id === button.dataset.templateId);
        if (!saved) { notify('This template is no longer available.'); return; }
        loadInvoice(saved.invoice);
        activeTemplateId = saved.id;
        closeMenus();
        notify('Saved template loaded.');
      } catch { notify('Unable to load the saved template.'); }
      return;
    }
    try {
      const templates = readTemplates();
      const id = button.dataset.templateAction === 'new' ? crypto.randomUUID() : activeTemplateId || crypto.randomUUID();
      const entry = { id, invoice: readInvoice() };
      const index = templates.findIndex((template) => template.id === id);
      if (index < 0) templates.unshift(entry);
      else templates[index] = entry;
      localStorage.setItem(templatesKey, JSON.stringify(templates));
      activeTemplateId = id;
      closeMenus();
      notify('Template saved in this browser.');
    } catch { notify('Unable to save the template. Browser storage may be full or unavailable.'); }
  });
  menus[0].querySelectorAll('[role="menuitem"]').forEach((button, index) => button.addEventListener('click', () => { style = Object.keys(styleNames)[index]; closeMenus(); updatePreview(); }));
  menus[1].querySelectorAll('[role="menuitem"]').forEach((button, index) => button.addEventListener('click', () => {
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
  function syncLanguage() {
    document.documentElement.lang = 'en';
    document.querySelector('[data-header]').lang = currentLocale();
    document.querySelector('.site-footer').lang = currentLocale();
  }
  window.addEventListener('quickkol:locale', syncLanguage);
  initI18n(initialLocale);
  updateTheme();
  updateScroll();
}
