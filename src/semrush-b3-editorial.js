import { article, p, s, link } from './semrush-editorial.js';
import { sources as previousSources } from './semrush-b2-editorial.js';
export { p, s, link };
const source = (id, name, url) => ({ id: `b3${id}`, terms: p(name, name), label: p(name, name), url });
export const sources = {
  ...previousSources,
  afluencerPrice: source('Afluencer', 'Afluencer', 'https://afluencer.com/pricing'),
  bladePrice: source('Blade', 'Social Blade', 'https://socialblade.com/products/subscription/personal'),
  collabstrPrice: source('Collabstr', 'Collabstr', 'https://collabstr.com/pricing'),
  copyright: source('Copyright', 'U.S. Copyright Office', 'https://www.copyright.gov/what-is-copyright/'),
  metaAds: source('MetaAds', 'Meta Blueprint', 'https://www.facebookblueprint.com/student/activity/612967-increase-campaign-performance-with-partnership-ads'),
  metaSafety: source('MetaSafety', 'Meta Safety Center', 'https://www.meta.com/safety/topics/safety-basics/tools/security/'),
  pfPolicy: source('PfPolicy', 'Planet Fitness', 'https://www.planetfitness.com/about-planet-fitness/customer-service/'),
  pfNews: source('PfNews', 'Planet Fitness newsroom', 'https://www.planetfitness.com/newsroom'),
  iab: source('Iab', 'IAB', 'https://www.iab.com/insights/2025-creator-economy-ad-spend-strategy-report/'),
  hive: source('Hive', 'The Painted Hive', 'https://thepaintedhive.net/about/'),
  splash: source('Splash', 'The Stylist Splash', 'https://thestylistsplash.com.au/about/'),
  jai: source('Jai', 'Jai Long', 'https://jailong.co/'),
  bangkok: source('Bangkok', 'Bangkok Runners', 'https://www.meetup.com/th-th/bangkok-runners/'),
  houston: source('Houston', 'Dude That Cookz', 'https://dudethatcookz.com/about-us/'),
  seattle: source('Seattle', 'Seattle Foodie', 'https://seattlefoodie.com/'),
  eatSeattle: source('EatSeattle', 'Eat Seattle', 'https://www.eatseattlefoodblog.com/'),
  carneiro: source('Carneiro', 'Alex Carneiro', 'https://www.alexcarneiro.com/about'),
  denverTrainers: source('DenverTrainers', 'Club Form Denver', 'https://www.clubformdenver.com/trainers'),
  darci: source('Darci', 'Goals by Darci', 'https://www.goalsbydarci.com/about'),
  obrien: source('Obrien', 'Jamie O’Brien', 'https://jamieobrien.com/'),
  aloha: source('Aloha', 'Moore Aloha', 'https://www.moorealoha.com/'),
  bethany: source('Bethany', 'Bethany Hamilton', 'https://bethanyhamilton.com/'),
  doug: source('Doug', 'Doug the Pug', 'https://www.dougthepug.com/'),
  tucker: source('Tucker', 'Tucker & Todd', 'https://www.tuckerandtodd.com/'),
  nala: source('Nala', 'Nala Cat', 'https://nalacat.com/'),
};
export function b(post) {
  const resolved = post.sources.map(key => sources[key]);
  if (resolved.some(value => !value)) throw new Error(`Unknown source: ${post.slug}`);
  const result = article({ ...post, sources: [],
    tableTitle: post.tableTitle || p('本次任务的决策表', 'A decision sheet for this assignment'),
    headers: post.headers || [p('条件', 'Condition'), p('证据', 'Evidence'), p('决策', 'Decision')],
    researchNote: p(`资料核验于 2026-10-23。${post.researchNote?.[0] || '流程为编辑建议；所有算例均为假设，不是客户结果、达人排名或报价。'}`, `Sources reviewed October 23, 2026. ${post.researchNote?.[1] || 'Workflows are editorial recommendations. All worked examples are hypothetical, not client results, creator rankings or quotations.'}`),
  });
  return { ...result, date: '2026-10-23', updatedDate: '2026-10-23', cover: `semrush-b3-${String(post.number).padStart(2, '0')}.jpg`, sources: resolved };
}
