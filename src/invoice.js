export const invoiceCurrencies = ['USD', 'EUR', 'GBP', 'HKD', 'CNY', 'JPY'];

export const escapeInvoiceText = (value) => String(value ?? '').replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
const amount = (value) => Number.isFinite(Number(value)) ? Math.max(0, Number(value)) : 0;
const round = (value) => Math.round((value + Number.EPSILON) * 100) / 100;

export function calculateInvoice(invoice) {
  const subtotal = round(invoice.items.reduce((sum, item) => sum + amount(item.qty) * amount(item.price), 0));
  const tax = round(subtotal * amount(invoice.tax) / 100);
  const shipping = round(amount(invoice.shipping));
  const discount = round(amount(invoice.discount));
  const paid = round(amount(invoice.paid));
  const total = round(Math.max(0, subtotal + tax + shipping - discount));
  return { subtotal, tax, shipping, discount, paid, total, balance: round(Math.max(0, total - paid)) };
}

export function invoiceMoney(value, currency) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: invoiceCurrencies.includes(currency) ? currency : 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
}

// Word and Excel both support HTML documents with their legacy .doc/.xls extensions.
export function buildInvoiceDocument(invoice, format) {
  const text = escapeInvoiceText;
  const multiline = (value) => text(value || '—').replace(/\n/g, '<br>');
  const money = (value) => text(invoiceMoney(value, invoice.currency));
  const totals = calculateInvoice(invoice);
  const accent = { blue: '#267bff', minimal: '#242424' }[invoice.style] || '#267bff';
  const ink = '#ffffff';
  const rows = [['Subtotal', totals.subtotal], [`Tax (${amount(invoice.tax)}%)`, totals.tax], ['Shipping', totals.shipping], ['Discount', -totals.discount], ['Total', totals.total], ...(totals.paid ? [['Amount paid', -totals.paid]] : []), ['Total amount', totals.balance]];
  return `<!DOCTYPE html><html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel"><head><meta charset="utf-8"><title>${text(invoice.number || 'Invoice')}</title><style>body{font-family:Arial,sans-serif;color:#1e2737;margin:32px}table{width:100%;border-collapse:collapse}td,th{padding:10px;vertical-align:top;border-bottom:1px solid #e3e5e8;text-align:left}th{background:${accent};color:${ink}}.text{mso-number-format:"\\@"}h1{border-bottom:2px solid ${accent};padding-bottom:20px}h3{margin-top:28px}</style></head><body>
    ${format === 'doc' && /^data:image\/(png|jpeg|webp);base64,/.test(invoice.logo || '') ? `<img src="${text(invoice.logo)}" width="120" alt="Invoice logo">` : ''}
    <h1>${text(invoice.title || 'Invoice')}</h1><table><tr><td class="text"><b>From</b><br>${multiline(invoice.from)}</td><td class="text"><b>Bill to</b><br>${multiline(invoice.billTo)}</td></tr></table>
    <table>${[['Invoice no.', invoice.number], ['PO no.', invoice.po], ['Invoice date', invoice.date], ['Due date', invoice.due], ['Currency', invoice.currency]].map(([label, value]) => `<tr><td>${label}</td><td class="text">${text(value || '—')}</td></tr>`).join('')}</table>
    <table><thead><tr><th>Description</th><th>Qty</th><th>Unit price</th><th>Total amount</th></tr></thead><tbody>${invoice.items.map((item) => `<tr><td class="text">${text(item.description || '—')}</td><td>${amount(item.qty)}</td><td>${money(amount(item.price))}</td><td>${money(round(amount(item.qty) * amount(item.price)))}</td></tr>`).join('')}</tbody></table>
    <table>${rows.map(([label, value]) => `<tr><td>${text(label)}</td><td>${money(value)}</td></tr>`).join('')}</table>
    <h3>Payment details</h3><table><tr><td class="text">${multiline(invoice.payment)}</td></tr></table><h3>Notes and terms</h3><table><tr><td class="text">${multiline(invoice.notes)}</td></tr></table>
  </body></html>`;
}
