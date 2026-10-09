# QuickKOL landing page

## Local preview

```bash
npm install
npm run dev
```

The page opens in English by default and includes an English/Chinese switcher.

## Launch configuration

Copy `.env.example` to `.env.local` and configure:

- `VITE_CHROME_STORE_URL`: the real Chrome Web Store listing used by every install button.
- `VITE_TEAM_ACCESS_ENDPOINT`: the server-side invitation verification endpoint.

The access endpoint receives `{ "code": "..." }` as JSON and should return `{ "redirectUrl": "..." }` only after server-side validation. Invitation codes must not be stored in client code.

Replace the clearly marked placeholder content in `privacy.html` and `terms.html` with approved legal copy before launch.

## Blog

Visit `/blog/` using the Blog link below About in the footer. The library supports
search, topic and tag filters, pagination, and Chinese/English article views.
Filters and pagination are saved in the URL and preserved when returning from an article.

Original article content lives in `src/blog-posts.js`; each text pair contains
Chinese followed by English. Covers live in `public/assets/blog/`.
`npm run build` emits an HTML entry point for the library and every article
under `dist/blog/`, allowing direct links on static hosts.

## Creator rate calculator

Visit `/tools/creator-rate-calculator/`. V1 sponsorship benchmarks live in
`src/rateConfig.js`; the pure calculation is in `src/creator-rate.js`.
Views and followers are entered in K (1,000); decimal K values are supported
to three places. Each platform CPM can be edited independently with its pencil
control. Reset restores all platform CPMs and form selections to their defaults.
Creator country applies the supplied geographic multiplier before the platform
minimum and estimate range. The default is United States (×1); country benchmarks
are stored in `rateConfig.countryMultipliers`.
Engagement uses views as its denominator. Shared tier boundaries enter the
higher tier, except the highest engagement tier requires a strict `>`.
Apply the platform minimum to the midpoint before calculating the range.
Only display prices are rounded: $5 steps below $100, $10 below $1,000, and
$100 thereafter, with a preliminary rounding at one tenth of the step.
Run the algorithm and existing checks with `node --test tests/*.test.js`.

## Influencer campaign cost calculator

Visit `/tools/influencer-campaign-cost-calculator/` from Tools. Estimate the
campaign cost for a creator count, or plan a creator count within a total budget.
`src/campaignConfig.js` holds editable platform-specific view assumptions,
content formats, CPM ranges and goal-specific creator mixes. These are internal
planning assumptions, not measured market averages. Base CPM ranges are TikTok
$10–15, Instagram $15–20, YouTube $60–80 and X $5–10. Both endpoints use the shared
creator rate engine's country, niche, follower factors and minimums, without
adding its ±20% fee band. Format adjusts CPM before the platform minimum.
YouTube defaults to dedicated video (×1), with integration ×0.6 and Shorts ×0.2.
Engagement and quality use neutral multipliers.

Each creator delivers one post or the chosen bundle. Additional costs are a
fixed campaign amount; contingency applies to creator fees plus additional
costs. Views use a +/-20% scenario range, not unique reach or guaranteed results.
All-in CPM divides total campaign cost by estimated views. Budget mode chooses
whole creators using upper estimates, including extras and contingency. The
larger affordable count assumes lower rates. Goal mixes use repeating ten-creator
cycles so adding a creator always adds cost; plans are capped at 10,000 creators per platform.
The workspace CTA opens QuickKOL without claiming to apply search filters.


Both campaign modes support multiple platforms. Cost mode has an independent
creator count and content format for each selected platform. Budget mode keeps
one campaign total and percentage shares that must sum to 100%; selecting or
removing a platform splits the budget equally again. Each share includes its
proportional additional costs and contingency. Global extras are charged once.
The result sums creator partnerships, without deduplicating people across
platforms, and shows each platform's plan and creator fees. Views can be adjusted
independently for every platform and creator tier. Default formats are explicit
in `campaignConfig.defaultFormats`; YouTube defaults to Dedicated video.
