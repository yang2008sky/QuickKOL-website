import assert from 'node:assert/strict';
import test from 'node:test';
import { canonicalUrl, socialMetadata, renderSeoTags } from '../src/seo.js';

test('canonical URLs use the production domain and discard filters and fragments', () => {
  assert.equal(canonicalUrl('https://preview.example.com/blog?tag=AI#articles'), 'https://www.quickkol.com/blog/');
  assert.equal(canonicalUrl('/blog/creator-discovery/index.html'), 'https://www.quickkol.com/blog/creator-discovery/');
  assert.equal(canonicalUrl('/terms.html?utm_source=test'), 'https://www.quickkol.com/terms.html');
  assert.equal(canonicalUrl('/#agent-team'), 'https://www.quickkol.com/');
});

test('article sharing uses its own title, description and production image URL', () => {
  const metadata = socialMetadata({ path: '/blog/creator-discovery/', title: 'Creator discovery', description: 'Find creators for your campaign.', type: 'article', image: '/assets/blog/discovery.jpg', imageAlt: 'Creator research' });
  assert.equal(metadata['og:type'], 'article');
  assert.equal(metadata['og:url'], 'https://www.quickkol.com/blog/creator-discovery/');
  assert.equal(metadata['og:title'], 'Creator discovery');
  assert.equal(metadata['twitter:description'], 'Find creators for your campaign.');
  assert.equal(metadata['og:image'], 'https://www.quickkol.com/assets/blog/discovery.jpg');
  assert.equal(metadata['twitter:image:alt'], 'Creator research');
});

test('static sharing tags escape text without breaking HTML attributes', () => {
  const html = renderSeoTags({ path: '/pricing/', title: 'Plans & "pricing"', description: 'Creators <brands> & teams' });
  assert.ok(html.includes('content="Plans &amp; &quot;pricing&quot;"'));
  assert.ok(html.includes('content="Creators &lt;brands&gt; &amp; teams"'));
  assert.ok(html.includes('rel="canonical" href="https://www.quickkol.com/pricing/"'));
  assert.ok(html.includes('name="twitter:card" content="summary_large_image"'));
});
