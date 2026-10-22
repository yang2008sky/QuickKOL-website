import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { build } from 'esbuild';
import { Window } from 'happy-dom';

const { outputFiles } = await build({
  entryPoints: ['src/invoice-generator.js'], bundle: true, write: false, format: 'esm',
  loader: { '.css': 'empty' },
  plugins: [{ name: 'invoice-test-imports', setup(builder) {
    builder.onResolve({ filter: /\.html\?raw$/ }, ({ path, resolveDir }) => ({ path: resolve(resolveDir, path.slice(0, -4)), namespace: 'raw' }));
    builder.onLoad({ filter: /.*/, namespace: 'raw' }, async ({ path }) => ({ contents: await readFile(path, 'utf8'), loader: 'text' }));
    builder.onResolve({ filter: /\/i18n\.js$|^\.\/i18n\.js$/ }, () => ({ path: 'i18n', namespace: 'stub' }));
    builder.onLoad({ filter: /.*/, namespace: 'stub' }, () => ({ contents: 'export const initI18n = () => {}, loadLocale = () => {}, setPageLocale = () => {}, currentLocale = () => "en";' }));
  } }],
});
const { mountInvoiceGenerator } = await import(`data:text/javascript;base64,${Buffer.from(outputFiles[0].text).toString('base64')}`);

test('saved templates survive remount, update independently, and preserve the legacy template', async () => {
  const dom = new Window({ url: 'http://localhost:5173/tools/invoice-generator/' });
  const previous = { window: globalThis.window, document: globalThis.document, localStorage: globalThis.localStorage };
  Object.assign(globalThis, { window: dom, document: dom.document, localStorage: dom.localStorage });
  const mount = () => {
    dom.document.body.innerHTML = '<header data-header></header><main id="main"></main><footer class="site-footer"></footer><button data-start></button><div data-scroll-progress></div>';
    mountInvoiceGenerator('en');
  };
  const field = (name, value) => { dom.document.querySelector(`[name="${name}"]`).value = value; };
  const click = (selector) => dom.document.querySelector(selector).click();
  const open = () => click('.invoice-saved-templates .invoice-action-trigger');
  const save = (action = 'save') => { open(); click(`[data-template-action="${action}"]`); };
  const stored = () => JSON.parse(dom.localStorage.getItem('quickkol-invoice-templates'));
  try {
    const legacy = { number: 'OLD', po: '', currency: 'USD', items: [{ description: 'Legacy work', qty: '2', price: '50' }] };
    dom.localStorage.setItem('quickkol-invoice-template', JSON.stringify(legacy));
    mount();
    assert.deepEqual([...dom.document.querySelectorAll('.invoice-action-trigger > span:nth-child(2)')].map((label) => label.textContent), ['Templates', 'QuickKOL Blue', 'Download']);
    open();
    assert.equal(dom.document.querySelector('[data-template-id="legacy"] strong').textContent, 'OLD');
    click('[data-template-id="legacy"]');
    field('number', 'INV1');
    field('po', 'PO1');
    field('notes', 'First template');
    field('billTo', 'First Brand Co.\n88 First Road\nUnited States');
    save();
    assert.equal(stored().length, 1);
    assert.equal(stored()[0].invoice.number, 'INV1');
    field('number', 'INV2');
    field('notes', 'Second template');
    field('billTo', 'Second Brand & Co.\n99 Second Road\nUnited Kingdom');
    save('new');
    assert.equal(stored().length, 2);
    const secondId = stored()[0].id;
    mount();
    open();
    assert.equal(dom.document.querySelectorAll('[data-template-id]').length, 2);
    assert.equal(dom.document.querySelector('[data-template-id="legacy"] small').textContent, 'First Brand Co.');
    assert.equal(dom.document.querySelector(`[data-template-id="${secondId}"] small`).textContent, 'Second Brand & Co.');
    click('[data-template-id="legacy"]');
    assert.equal(dom.document.querySelector('[name="notes"]').value, 'First template');
    assert.equal(dom.document.querySelector('.invoice-preview tbody td').textContent, 'Legacy work');
    field('notes', 'Updated first template');
    save();
    assert.equal(stored().length, 2);
    assert.equal(stored().find(({ id }) => id === secondId).invoice.notes, 'Second template');
    assert.equal(stored().find(({ id }) => id === 'legacy').invoice.notes, 'Updated first template');
    assert.deepEqual(JSON.parse(dom.localStorage.getItem('quickkol-invoice-template')), legacy);

    field('number', 'INV3');
    save('new');
    assert.equal(stored().length, 3);

    const downloads = [];
    dom.HTMLAnchorElement.prototype.click = function () { downloads.push(this.download); };
    for (const po of ['PO26102000441', '   ']) {
      field('po', po);
      click('#invoice-menu-1 button:nth-child(2)');
      click('#invoice-menu-1 button:nth-child(3)');
      const name = po.trim() ? `INV3_${po}` : 'INV3';
      assert.deepEqual(downloads.splice(0), [`${name}.doc`, `${name}.xls`]);
      let printedTitle;
      dom.print = () => { printedTitle = dom.document.title; };
      click('#invoice-menu-1 button:nth-child(1)');
      assert.equal(printedTitle, name);
      dom.dispatchEvent(new dom.Event('afterprint'));
      assert.equal(dom.document.title, 'Invoice Generator | QuickKOL');
    }

    open();
    const beforeDelete = dom.localStorage.getItem('quickkol-invoice-templates');
    const currentNumber = dom.document.querySelector('[name="number"]').value;
    let confirmation;
    dom.confirm = (message) => { confirmation = message; return false; };
    click(`[data-delete-template="${secondId}"]`);
    assert.match(confirmation, /Delete template "INV2_PO1"/);
    assert.equal(dom.localStorage.getItem('quickkol-invoice-templates'), beforeDelete);
    assert.equal(dom.document.querySelector('[name="number"]').value, currentNumber);
    dom.confirm = () => true;
    click(`[data-delete-template="${secondId}"]`);
    assert.equal(stored().length, 2);
    assert.ok(!stored().some(({ id }) => id === secondId));
    assert.equal(dom.document.querySelector(`[data-template-id="${secondId}"]`), null);
    assert.ok(dom.document.querySelector('[data-template-action="new"]'));

    const activeId = stored().find(({ id }) => id !== 'legacy').id;
    click(`[data-delete-template="${activeId}"]`);
    assert.equal(dom.document.querySelector('[data-template-action="new"]'), null);
    assert.equal(dom.document.querySelector('[name="number"]').value, currentNumber);
    click('[data-delete-template="legacy"]');
    assert.deepEqual(stored(), []);
    assert.equal(dom.localStorage.getItem('quickkol-invoice-template'), null);
    mount();
    open();
    assert.equal(dom.document.querySelectorAll('[data-template-id]').length, 0);
    assert.match(dom.document.querySelector('.invoice-menu-empty').textContent, /No saved templates/);
    click('.invoice-saved-templates .invoice-action-trigger');
    save();
    assert.equal(stored().length, 1);

    dom.localStorage.setItem('quickkol-invoice-templates', '{invalid');
    open();
    assert.match(dom.document.querySelector('.invoice-menu-empty').textContent, /Unable to load/);
    click('[data-template-action="save"]');
    assert.equal(dom.localStorage.getItem('quickkol-invoice-templates'), '{invalid');
    assert.match(dom.document.querySelector('.invoice-notice').textContent, /Unable to save/);
  } finally {
    Object.assign(globalThis, previous);
    await dom.happyDOM.close();
  }
});
