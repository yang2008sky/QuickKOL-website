import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateInvoice, buildInvoiceDocument, invoiceMoney } from '../src/invoice.js';

const invoice = { title: 'Invoice', number: 'INV20261009', po: 'PO-12', currency: 'USD', date: '2026-10-09', due: '2026-10-23', from: 'Acme\nStudio', billTo: 'Example Brand', tax: '10', discount: '20', shipping: '15', paid: '50', payment: 'Example Bank', notes: 'Thanks', style: 'blue', items: [{ description: 'Campaign', qty: '2', price: '100' }, { description: 'Editing', qty: '1', price: '50' }] };

test('invoice reconciles line items, tax, discount, shipping and partial payment', () => {
  assert.deepEqual(calculateInvoice(invoice), { subtotal: 250, tax: 25, discount: 20, shipping: 15, paid: 50, total: 270, balance: 220 });
  assert.equal(calculateInvoice({ ...invoice, items: [{ qty: '3', price: '0.1' }], tax: 0, discount: 0, shipping: 0, paid: 0 }).total, 0.3);
});

test('blank, deleted and overpaid lines keep finite nonnegative balances', () => {
  assert.equal(calculateInvoice({ ...invoice, items: [{ qty: '', price: '' }], tax: '', discount: '', shipping: '', paid: '' }).balance, 0);
  assert.equal(calculateInvoice({ ...invoice, discount: 1000 }).total, 0);
  assert.equal(calculateInvoice({ ...invoice, paid: 1000 }).balance, 0);
  assert.equal(calculateInvoice({ ...invoice, items: [{ qty: '1', price: 'Infinity' }], tax: 0, shipping: -10, discount: 0 }).total, 0);
});

test('Word and Excel exports include current metadata, adjustments and safely escaped user text', () => {
  for (const format of ['doc', 'xls']) {
    const document = buildInvoiceDocument({ ...invoice, title: '<img onerror="bad">', from: 'Acme & Studio', notes: '</td><script>bad</script>' }, format);
    assert.ok(document.includes('INV20261009'));
    assert.ok(document.includes('PO-12'));
    assert.ok(document.includes('$220.00'));
    assert.ok(document.includes('Amount paid'));
    assert.ok(document.includes('Acme &amp; Studio'));
    assert.ok(document.includes('&lt;script&gt;'));
    assert.ok(!document.includes('<script>'));
  }
  assert.match(invoiceMoney(123.45, 'EUR'), /€123.45/);
  assert.match(invoiceMoney(123.45, 'JPY'), /123.45/);
});
