// Editable planning assumptions, not measured market averages.
export const campaignConfig = {
  defaultFormats: { tiktok: 'standard', instagram: 'reel', youtube: 'dedicated', x: 'post' },
  cpm: {
    tiktok: { low: 10, high: 15 },
    instagram: { low: 15, high: 20 },
    youtube: { low: 60, high: 80 },
    x: { low: 5, high: 10 },
  },
  sizes: {
    nano: { label: ['纳米达人', 'Nano'], followers: 5000, range: '1K–10K' },
    micro: { label: ['小型达人', 'Micro'], followers: 25000, range: '10K–50K' },
    mid: { label: ['中型达人', 'Mid-tier'], followers: 150000, range: '50K–250K' },
    macro: { label: ['大型达人', 'Macro'], followers: 600000, range: '250K–1M' },
    mega: { label: ['头部达人', 'Mega'], followers: 2000000, range: '1M+' },
  },
  views: {
    tiktok: { nano: 3000, micro: 10000, mid: 30000, macro: 80000, mega: 200000 },
    instagram: { nano: 2000, micro: 8000, mid: 25000, macro: 70000, mega: 180000 },
    youtube: { nano: 1500, micro: 6000, mid: 30000, macro: 80000, mega: 200000 },
    x: { nano: 1000, micro: 5000, mid: 15000, macro: 50000, mega: 150000 },
  },
  formats: {
    tiktok: {
      standard: { label: ['标准视频', 'Standard TikTok'], multiplier: 1 },
      premium: { label: ['复杂制作视频', 'Complex production'], multiplier: 1.2 },
    },
    instagram: {
      reel: { label: ['Reel 短视频', 'Reel'], multiplier: 1 },
      story: { label: ['限时动态', 'Story'], multiplier: 0.4 },
      post: { label: ['图文帖子', 'Static post'], multiplier: 0.7 },
      bundle: { label: ['Reel + 限时动态', 'Reel + Story'], multiplier: 1.25 },
    },
    youtube: {
      integration: { label: ['60–90 秒植入', '60–90s integration'], multiplier: 0.6 },
      shorts: { label: ['Shorts 短视频', 'Shorts'], multiplier: 0.2 },
      dedicated: { label: ['专属视频', 'Dedicated video'], multiplier: 1 },
    },
    x: {
      post: { label: ['单条帖子', 'Single post'], multiplier: 1 },
      thread: { label: ['系列推文', 'Thread'], multiplier: 1.4 },
      video: { label: ['视频帖子', 'Video post'], multiplier: 1.3 },
    },
  },
  goals: {
    awareness: { label: ['品牌曝光', 'Brand awareness'], mix: ['mid', 'macro', 'micro', 'mid', 'macro', 'mid', 'micro', 'mid', 'macro', 'mid'], note: ['中型与大型达人为主，优先扩大曝光。', 'A reach-led mix, weighted toward mid-tier and macro creators.'] },
    launch: { label: ['新品上市', 'Product launch'], mix: ['micro', 'mid', 'micro', 'macro', 'mid', 'micro', 'mid', 'micro', 'macro', 'mid'], note: ['结合小型、中型与大型达人，平衡覆盖和内容数量。', 'Micro, mid-tier and macro creators balance reach with content volume.'] },
    conversion: { label: ['销售转化', 'Conversions / sales'], mix: ['micro', 'mid', 'micro', 'micro', 'mid', 'micro', 'micro', 'mid', 'micro', 'mid'], note: ['以小型和中型达人为主，侧重垂类合作；不预测销量。', 'A focused micro and mid-tier mix for niche partnerships. Sales are not forecast.'] },
    ugc: { label: ['UGC / 内容制作', 'UGC / content creation'], mix: ['nano', 'micro', 'nano', 'nano', 'micro', 'nano', 'micro', 'nano', 'nano', 'micro'], note: ['以纳米和小型达人为主，优先内容数量。这里仍按发布合作估算，纯制作需单独报价。', 'Nano and micro creators prioritize content volume. This assumes published partnerships; production-only work needs a separate quote.'] },
  },
  maxCreators: 10000,
};
