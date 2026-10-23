export function instagramActionGoal(likes, comments, shares, saves, followers, target) {
  const counts = [likes, comments, shares, saves, followers];
  if (!counts.every(value => typeof value === 'number' && Number.isSafeInteger(value) && value >= 0) || followers === 0) return null;
  if (typeof target !== 'number' || !Number.isFinite(target) || target < 0) return null;
  const actions = likes + comments + shares + saves;
  // Round the chosen decimal goal exactly to a minimum whole action count.
  const [coefficient, exponent = '0'] = target.toString().split('e');
  const scale = (coefficient.split('.')[1]?.length || 0) - Number(exponent);
  const numerator = BigInt(followers) * BigInt(coefficient.replace('.', '')) * (scale < 0 ? 10n ** BigInt(-scale) : 1n);
  const denominator = 100n * (scale > 0 ? 10n ** BigInt(scale) : 1n);
  const targetActions = Number((numerator + denominator - 1n) / denominator);
  const rate = actions / followers * 100;
  if (!Number.isSafeInteger(actions) || !Number.isSafeInteger(targetActions) || !Number.isFinite(rate)) return null;
  return { actions, rate, targetActions, gap: Math.max(0, targetActions - actions) };
}
