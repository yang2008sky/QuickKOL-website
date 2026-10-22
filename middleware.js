import { next } from '@vercel/functions';

export const config = {
  matcher: ['/en/:path*', '/zh/:path*', '/blog/:path*', '/tools/:path*', '/about/:path*', '/pricing/:path*', '/contact/:path*', '/faq/:path*', '/index.html'],
};

export default function middleware(request) {
  const url = new URL(request.url);
  const original = url.href;
  url.pathname = url.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  url.pathname = url.pathname.replace(/\/index\.html$/, '/');
  if (/^\/zh\/tools\/invoice-generator\/?$/.test(url.pathname)) url.pathname = '/tools/invoice-generator/';
  if (/^\/(?:zh(?:\/|$))?(?:blog(?:\/|$)|tools\/|about\/?$|pricing\/?$|contact\/?$|faq\/?$|$)/.test(url.pathname)
      && !url.pathname.endsWith('/') && !url.pathname.split('/').pop().includes('.')) {
    url.pathname += '/';
  }
  const page = url.searchParams.get('page');
  if (/^\/(?:zh\/)?blog\/$/.test(url.pathname) && /^[1-9]\d*$/.test(page || '')) {
    if (page !== '1') url.pathname += `page/${page}/`;
    url.searchParams.delete('page');
  }
  if (url.href !== original) return Response.redirect(url, 308);
  return next();
}
