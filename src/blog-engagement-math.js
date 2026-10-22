const rate = (interactions, denominator) => denominator > 0 ? interactions / denominator * 100 : null;

export function aggregateEngagement(a, denominatorA, b, denominatorB) {
  const rateA = rate(a, denominatorA);
  const rateB = rate(b, denominatorB);
  if (rateA === null || rateB === null) return null;
  return { rateA, rateB, mean: (rateA + rateB) / 2, pooled: rate(a + b, denominatorA + denominatorB) };
}

export function compareEngagement(sponsored, sponsoredBase, reference, referenceBase) {
  const sponsoredRate = rate(sponsored, sponsoredBase);
  const referenceRate = rate(reference, referenceBase);
  if (sponsoredRate === null || referenceRate === null) return null;
  return { sponsoredRate, referenceRate, points: sponsoredRate - referenceRate, ratio: referenceRate > 0 ? sponsoredRate / referenceRate : null };
}

export function viewEngagement(likes, comments, shares, saves, views) {
  return rate(likes + comments + shares + saves, views);
}
