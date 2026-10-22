import { article, p, s, link, evidence } from './semrush-editorial.js';
export { p, s, link };
const source = (id, name, url, zh = name) => ({ id: `b2${id}`, terms: p(zh, name), label: p(zh, name), url });
export const sources = {
  ...evidence,
  snow: source('Snow', 'Social Snowball', 'https://www.socialsnowball.io/'),
  safelinks: source('Safe', 'Safelinks', 'https://www.socialsnowball.io/safelinks'),
  snowSearch: source('SnowSearch', 'Creator Search', 'https://www.socialsnowball.io/creator-search'),
  green: source('Green', 'FTC Green Guides', 'https://www.ftc.gov/business-guidance/resources/environmental-claims-summary-green-guides'),
  youtubeContact: source('Contact', 'YouTube', 'https://support.google.com/youtube/answer/57955?hl=en-EN'),
  surf: source('Surf', 'SoCal Surfer', 'https://socalsurfershop.com/'),
  sec: source('Sec', 'SEC', 'https://www.sec.gov/newsroom/press-releases/2022-183'),
  queries: source('Queries', 'Modash', 'https://help.modash.io/en/articles/14035556-discovery-api-search-optimisation'),
  blair: source('Blair', 'Blair Eadie', 'https://www.the-atlantic-pacific.com/say-hello/'),
  leonie: source('Leonie', 'Leonie Hanne', 'https://leoniehanne.com/about/'),
  jeanne: source('Jeanne', 'Jeanne Damas', 'https://www.rouje.com/en/pages/jeanne-damas'),
  kathryn: source('Kathryn', 'Kathryn Kellogg', 'https://www.goingzerowaste.com/'),
  aditi: source('Aditi', 'Aditi Mayer', 'https://aditimayer.com/about/'),
  ie: source('Ie', 'Intersectional Environmentalist', 'https://intersectionalenvironmentalist.com/'),
  joshua: source('Joshua', 'Joshua Weissman', 'https://www.joshuaweissman.com/'),
  tabitha: source('Tabitha', 'Tabitha Brown', 'https://www.iamtabithabrown.com/'),
  ready: source('Ready', 'The Ready State', 'https://thereadystate.com/the-trs-difference/'),
  squat: source('Squat', 'Squat University', 'https://squatuniversity.com/about/'),
  meg: source('Meg', 'Megsquats', 'https://megsquats.com/about'),
  sohee: source('Sohee', 'Sohee Carpenter', 'https://soheefit.com/about/'),
  whalar: source('Whalar', 'Whalar', 'https://www.whalar.com/'),
  selena: source('Selena', 'Selena Gomez', 'https://store.selenagomez.com/'),
  huda: source('Huda', 'Huda Beauty', 'https://hudabeauty.com/en-us/pages/about-us-1'),
  lululemon: source('Lulu', 'lululemon', 'https://corporate.lululemon.com/our-business/innovation/community-engagement'),
  france: source('France', 'Ministère de l’Économie', 'https://www.economie.gouv.fr/influenceurs-quels-sont-mes-devoirs', '法国经济部'),
  arpp: source('Arpp', 'ARPP', 'https://www.arpp.org/nous-consulter/regles/regles-de-deontologie/recommandation-communication-publicitaire-numerique/'),
};
export function b(post) {
  const resolved = post.sources.map(key => sources[key]);
  if (resolved.some(value => !value)) throw new Error(`Unknown source in ${post.slug}`);
  const result = article({ ...post, sources: [],
    tableTitle: post.tableTitle || p('本篇执行工作表', 'The working sheet for this task'),
    headers: post.headers || [p('决策', 'Decision'), p('保留的证据', 'Evidence to keep'), p('下一步', 'Next action')],
    researchNote: p(`资料核验于 2026-10-21 至 22 日。${post.researchNote?.[0] || '文中流程为编辑建议，算例均为假设；不代表实测结果、达人排名或合作承诺。'}`, `Sources reviewed October 21–22, 2026. ${post.researchNote?.[1] || 'Workflows are editorial recommendations and numerical examples are hypothetical, not observed campaign results, creator rankings or offers.'}`),
  });
  return { ...result, date: '2026-10-22', updatedDate: '2026-10-22', cover: `semrush-b2-${String(post.number).padStart(2, '0')}.jpg`, sources: resolved };
}
