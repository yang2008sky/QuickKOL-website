export const BLOG_PAGE_SIZE = 12;

export function blogPagePath(page, topic = '') {
  const root = topic ? `/blog/topic/${topic}/` : '/blog/';
  return page > 1 ? `${root}page/${page}/` : root;
}

export function blogPageItems(page, pages) {
  if (pages <= 7) return Array.from({ length: pages }, (_, index) => index + 1);
  if (page <= 3) return [1, 2, 3, null, pages - 1, pages];
  if (page >= pages - 2) return [1, 2, null, pages - 2, pages - 1, pages];
  return [1, null, page - 1, page, page + 1, null, pages];
}
