export const BLOG_PAGE_SIZE = 12;

export function blogPagePath(page) {
  return page > 1 ? `/blog/page/${page}/` : '/blog/';
}
