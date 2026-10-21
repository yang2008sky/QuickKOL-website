import { semrushFoundations } from './blog-semrush-foundations.js';
import { semrushIdentity } from './blog-semrush-identity.js';
import { semrushFitness } from './blog-semrush-fitness.js';
import { semrushTomoson } from './blog-semrush-tomoson.js';
import { semrushMeasurement } from './blog-semrush-measurement.js';
import { semrushFood } from './blog-semrush-food.js';
import { semrushNiches } from './blog-semrush-niches.js';
import { semrushYoutube } from './blog-semrush-youtube.js';
import { semrushOperations } from './blog-semrush-operations.js';
import { semrushSearchCommunity } from './blog-semrush-search-community.js';
import { semrushDepth } from './semrush-depth.js';
import { semrushCoverAlts, semrushSceneNumbers, semrushFigures } from './semrush-visuals.js';

export const semrushBlogPosts = [
  ...semrushFoundations, ...semrushIdentity, ...semrushFitness,
  ...semrushTomoson, ...semrushMeasurement, ...semrushFood,
  ...semrushNiches, ...semrushYoutube, ...semrushOperations,
  ...semrushSearchCommunity,
].sort((a, b) => a.number - b.number).map(post => ({
  ...post,
  coverAlt: semrushCoverAlts[post.number] || post.coverAlt,
  coverCredit: semrushSceneNumbers.has(post.number) ? ['AI 生成的编辑示意图，人物并非文中提及的创作者。','AI-generated editorial illustration; people are not the creators named in this article.'] : null,
  figures: semrushFigures[post.number] || [],
  sections: [...post.sections, ...(semrushDepth[post.number] || [])],
}));
