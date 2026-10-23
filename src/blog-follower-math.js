export function followerNetChange(start, end) {
  if (![start, end].every(value => typeof value === 'number' && Number.isSafeInteger(value) && value >= 0)) return null;
  const net = end - start;
  return { net, percent: start > 0 ? net / start * 100 : null };
}
