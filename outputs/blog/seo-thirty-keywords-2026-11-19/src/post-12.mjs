import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:12,
summary:p('研究高订阅 YouTube 频道时，先把节目目录拆成近期系列、形式与创作者角色，判断品牌想参与的那部分是否仍在持续制作。','Review a highly subscribed channel by separating current series, formats and creator roles, then checking whether the programme relevant to the brand is still being produced.'),
description:p('Most subbed YouTube channels 的达人合作研究：保留有日期里程碑，审阅节目目录、近期样本与系列连续性，不用订阅量代替节目匹配。','Research most-subbed YouTube channels through dated milestones, programme catalogues, current samples and series continuity for a specific brand collaboration.'),
coverAlt:p('工作室抽屉里分类摆放节目文件夹、拍摄道具与小型相机','Programme folders, production props and a compact camera are organized in an open studio drawer'),
answer:p('Most subbed YouTube channels 是按订阅规模寻找频道的起点，不是按品牌适配度排序的答案。YouTube 于 2026 年 6 月 12 日公布 MrBeast 达到五亿订阅的里程碑；这是有日期公告，不是本篇核验的实时数量。品牌随后应审阅频道节目目录，区分近期系列、历史爆款、短视频与其他版本，确认本次合作要进入哪一种持续制作的内容，而不是默认频道全部受众都会观看。','Most subbed YouTube channels is a starting point for finding channels by subscription scale, not a ranking of brand suitability. YouTube announced MrBeast reaching 500 million subscribers on June 12, 2026; that is a dated milestone, not a live count verified here. A brand should then review the programme catalogue, separating current series, historical hits, Shorts and other versions to identify the continuing work the partnership would join, without assuming the entire subscriber base will watch.'),
sections:[
s('引用有日期的频道规模','Use a dated scale reference instead of guessing live counts',`YouTube 的五亿订阅里程碑公告说明 MrBeast 于 2026 年 6 月达到该规模，并回顾个人与全部频道排名的不同节点。不要把公告日期换成今天，再把历史事实写成实时读数。

品牌可以使用这种资料理解频道的规模背景，但不能据此确认当前档期、节目状态或本次合作预计观看。排名人口范围也要保留，例如个人与公司经营频道是否放在同一组。

频道采购单元指南讨论最终可以约定哪些工作。本文在此前增加节目目录审阅，让团队知道自己感兴趣的内容属于哪个系列，而不是将整个频道视为单一节目。

没有核验当前完整榜单时，明确保留这个限制。一个可靠的目录问题，比一张没有统一日期的前十表更能帮助品牌准备下一次讨论。`,
`YouTube’s 500-million-subscriber announcement records MrBeast reaching that scale in June 2026 and distinguishes earlier milestones for individual and overall channel rankings. Do not replace its date with today and present a historical statement as a live reading.

The brand can use it as scale context without inferring availability, programme status or expected campaign views. Retain the ranking population too, including whether individual and company-operated channels are being compared together.

The channel purchase-unit guide discusses which work can ultimately be agreed. This article adds a catalogue review beforehand so the team knows which series contains the work it likes, rather than treating the entire channel as one programme.

Where a complete current ranking has not been verified, state that limitation. A reliable catalogue question can prepare the next discussion better than a top-ten table assembled from inconsistent dates. The research task is not to reproduce a leaderboard at any cost, but to identify a specific body of work worth examining for the assignment.`,['ytMilestone']),
s('区分频道、节目与单条作品','Separate the channel, programme and individual piece',`频道是发布身份，节目是编辑上持续的内容安排，单条作品则有具体发布日期与形式。三者相关，却不能互相代替。

YouTube Data API 的频道定义提供频道资源与唯一标识的技术背景。记录准确频道身份有助于避免把关联账号、同名频道或其他语言版本的作品混在一起。

节目名称或播放列表可以作为目录线索，但不自动证明每条内容属于同一制作承诺。品牌仍要查看作品、说明与近期更新，必要时向频道方确认状态。

用简洁目录保留频道、系列、代表作品与观察日期。它不是完整抓取档案，而是让每一条研究判断都能回到相应对象，避免把一条有吸引力的旧作品扩写成频道现在的全部工作。`,
`A channel is a publishing identity, a programme is an ongoing editorial arrangement and a piece has a particular date and format. They are related but not interchangeable.

YouTube Data API’s channel definition provides technical context for a channel resource and its unique identifier. Recording the correct identity helps avoid combining associated accounts, similarly named channels or other-language versions.

A programme name or playlist can provide a catalogue lead without proving that every item shares one production commitment. Review the work, descriptions and recent updates, and ask the channel team to confirm status where needed.

Retain channel, series, representative pieces and observation date in a small catalogue. This is not an exhaustive scraped archive. It lets each research judgment return to the appropriate object instead of expanding one appealing old video into a statement about everything the channel currently produces. Identity precision makes the next content discussion clearer without pretending the public archive reveals internal production plans.`,['ytChannels']),
s('从近期连续作品理解节目承诺','Understand the programme through recent continuity',`先查看近期是否有多个可识别的同系列作品。记录它们共同解决的问题、表达方式与出镜角色，而不只选择观看最多的一条。

如果系列长期没有更新，标为需要确认，不直接断言已经停播。创作者可能调整节奏、季节安排或制作方式，公开目录未必能解释全部情况。

同样避免认为过去的一次商品植入代表现在随时接受同类合作。品牌要问的是，这个系列是否仍存在、适合怎样的事实与表达，而不是对方是否曾经接过广告。

保留能够支持判断的具体片段与日期。这样外联可以提出有根据的问题，也让创作者有机会解释公开目录没有展示的变化，而不是被要求复制几年前的内容。`,
`Start by checking whether several recognizable pieces from the series appear recently. Record the shared question, expressive approach and on-screen roles instead of selecting only the most-viewed item.

If the series has not updated for a long time, mark its status for confirmation rather than declaring it discontinued. A creator may change cadence, seasonal planning or production methods, and the public catalogue may not explain everything.

Likewise, one past product integration does not establish current willingness to accept the same arrangement. Ask whether the series continues and which facts and expressions belong there, rather than merely whether the channel once carried an advertisement.

Keep specific passages and dates supporting the judgment. Outreach can then ask a grounded question and give the creator room to explain changes the archive does not show, rather than demanding a reproduction of work from years earlier. The catalogue supports an informed conversation without turning public observation into a claim of knowledge about private plans.`),
s('让长视频、Shorts 与版本各自保留范围','Keep long-form, Shorts and versions in scope',`一个频道可能同时发布长节目、短视频、直播与改编版本。形式不同，观众接触方式与商品解释空间也不同，不宜将全部观看混成一项采购依据。

YouTube 的受众说明区分不同观察范围，包括其他频道、其他内容与观看形式等资料；并提醒部分数据可能有限。团队需要确认实际字段与时期，而不是从频道订阅量推断每种形式都覆盖相同人群。

目录中为每种形式保留代表作品与任务。某个长视频适合详细解释，不代表同样信息可以不经改写直接成为短片。

其他语言或地区版本同样需要单独核对。它们可能共享主题，但字幕、声音、商品版本和发布身份并不因此自动一致；不要把一个版本的适配结论复制给全部版本。`,
`A channel may publish long programmes, Shorts, live work and adapted versions. Different formats offer different encounters and room for product explanation, so all views should not be combined into one purchasing rationale.

YouTube’s audience guide distinguishes observation scopes including other channels, other content and viewing formats, and notes that some information can be limited. Confirm the field and period actually available instead of inferring that every format reaches the same people because the channel has many subscribers.

Retain representative work and a purpose for each format in the catalogue. A long video suited to detailed explanation does not establish that the same information can become a short clip without adaptation.

Other-language and regional versions also require separate review. They may share a topic without sharing subtitles, sound, product version or publishing identity. Do not copy one version's suitability judgment across all the others. A clear format boundary helps the team commission the explanation it actually needs rather than a vaguely defined presence somewhere on the channel.`,['ytAudience']),
s('查看商品信息怎样进入节目','Examine how product information enters the programme',`研究商品出现时，记录它承担什么角色：示范工具、被比较对象、故事背景，还是创作者明确推荐的主体。不能只看到品牌名称就假定各种方式都可采购。

关注解释是否保留实际体验条件，是否允许观众理解关系与限制。FTC 的达人披露指南在美国语境下说明真实体验、依据与商业关系，频道规模不会取消这些问题。

不要把公开作品当成某个品牌合同的证据。画面能够告诉你表达是什么，却不能完整告诉你背后的费用、审批、许可或其他条款。

品牌可以据此提出适当问题：这次商品事实是否适合节目节奏，创作者需要先体验什么，哪些说法尚无支持。研究因此服务真实内容讨论，而不是照着一个旧广告位置机械填空。`,
`When a product appears, record its role: a demonstration tool, comparison subject, story background or explicit recommendation. A visible brand name does not establish that every kind of integration is available to buy.

Notice whether the explanation retains actual experience conditions and lets viewers understand relationships and limits. FTC’s influencer-disclosure guide addresses experience, substantiation and commercial relationships in its United States context; channel scale does not remove those questions.

Do not treat a public piece as evidence of a brand's full contract. The work shows the expression without revealing all fees, approval arrangements, permissions or other terms.

Use the review to ask whether these product facts fit the programme's pace, what the creator needs to experience first and which claims remain unsupported. Research then serves a real editorial discussion instead of mechanically filling an old advertising position. It also leaves the creator space to explain how a new assignment would differ from work already visible in the archive.`,['ftc']),
s('用采样说明保护研究结论','Protect the conclusion with a sampling note',`说明这次看过哪些作品、为什么选它们，以及没有覆盖什么。近期连续样本、历史代表作品与商业表达样本，可以各有用途，但不能默认为完整目录。

如果只研究某个系列，就将结论限制在该系列。不要因为一组作品不适合这次商品，就说整个频道不具备合作价值。

保留反例与不确定项。某些作品可能采用不同角色或语气，它们可以提示需要进一步确认，而不必被删除来让研究表显得一致。

目录审阅是发现与外联前的准备，不能保证合同成立或节目效果。一个诚实的采样说明能让后续同事知道应补哪里，也避免把有限研究包装成完整审计。`,
`State which pieces were reviewed, why they were selected and what remains uncovered. Recent consecutive examples, historical reference work and commercial expressions can each serve a purpose without constituting the whole catalogue.

If the research concerns one series, limit the conclusion to that series. A group of pieces unsuitable for this product does not establish that the entire channel lacks partnership value.

Retain counterexamples and uncertainty. Some work may use a different role or tone, suggesting a question to confirm rather than something to delete so the research table looks consistent.

Catalogue review prepares discovery and outreach; it cannot guarantee an agreement or a programme outcome. An honest sampling note tells later colleagues where to investigate further and prevents limited research from appearing to be a complete audit. It also makes the shortlist easier to update: new work can change the relevant judgment without requiring the team to defend an unsupported statement about the channel as a whole.`),
s('假设案例：从热门作品找到当前系列','Hypothetical case: locate the current series behind a hit',`假设品牌因一条多年前的热门制作视频发现某个高订阅频道，准备购买同样表达。目录审阅发现，近期作品转向一个较短的解释系列。

这不是实际频道变化记录。研究员将旧作品标为历史线索，将近期系列列为待确认合作对象，并记录两个形式对产品解释的不同要求。

外联不再问“能否保证复制旧作品观看”，而是询问当前系列是否适合展示这次商品、需要哪些体验资料，以及由谁参与解释。

如果频道方确认旧节目仍可讨论，团队再补相应样本与范围；如果不再适合，也能转向其他候选。目录审阅让决定建立在当前可讨论工作上，而不是把订阅规模当成旧节目持续存在的证明。`,
`Imagine a brand discovering a highly subscribed channel through a popular making video from several years ago and wanting to purchase the same expression. Catalogue review finds that recent work emphasizes a shorter explanatory series.

This is not a record of an actual channel change. The researcher marks the old piece as a historical lead, identifies the recent series as the partnership object to confirm and records the different explanation requirements of the two formats.

Outreach no longer asks for a guaranteed reproduction of the old video's views. It asks whether the current series suits this product, which experience materials are needed and who would explain it.

If the channel team confirms that the old programme remains available for discussion, add the relevant samples and scope. If it does not fit, consider another candidate. Catalogue review grounds the decision in work currently open for discussion instead of treating subscription scale as proof that an old programme continues unchanged. It turns admiration for a hit into a question the channel can actually answer.`),
s('在提案变化后重新核对目录','Recheck the catalogue when the proposal changes',`研究的适配结论依赖最初任务。品牌若从简单演示改成深度比较，或从单一市场改成多语言版本，就应重新查看样本是否仍能支持推荐。

不要因为已经批准候选名字，就假设任何新内容都能进入同一节目。新增任务可能需要不同系列、出镜角色或制作条件，需要让频道方实际回应。

保留变更理由与新旧问题，让后续人员知道哪项研究仍可使用。规模资料可能仍是有效背景，而原先关于解释空间的判断已经需要补充。

这样的复核不必重做整个档案。只更新受影响的结论及其证据，就能使目录持续服务任务，而不是成为第一次筛选之后无人再看的静态名单。`,
`A suitability conclusion depends on the original assignment. If the brand changes from a simple demonstration to a detailed comparison, or from one market to multilingual versions, recheck whether the samples still support the recommendation.

Approving a candidate name does not establish that every new content request belongs in the same programme. Added work may require another series, on-screen role or production condition, which the channel team needs an opportunity to address.

Retain the reason for the change and the old and new questions so later colleagues know which research remains usable. Scale evidence may still be useful background while the earlier judgment about explanatory room needs more support.

This need not recreate the entire archive. Update the affected conclusion and evidence so the catalogue continues serving the assignment instead of becoming a static list nobody consults after the first selection. The review remains proportionate to the decision that changed, and the channel is not asked to fulfil a different task under assumptions drawn from the original one.`),
s('交接一个明确的节目问题','Hand over a specific programme question',`把频道身份、系列状态、样本范围与未确认问题一起交接。频道身份核验方法可以帮助后续团队回到正确账号，不把同名或关联频道混为一谈。

建议联系时，写清楚为什么这组近期作品与品牌任务相关，以及哪项事实需要对方确认。不要用“频道很大”代替全部推荐理由。

Most subbed YouTube channels 的品牌价值，在于帮助找到值得进一步研究的内容组织；真正的合作判断仍需要当前节目、具体角色与双方约定。

将规模背景留在背景位置，把目录证据用于提出更好的问题。品牌便能从一个吸引注意的排名线索，走向一项有范围、可回应的达人合作讨论。`,
`Hand over channel identity, series status, sampling scope and unanswered questions together. The channel-identity review method helps later colleagues return to the right account without combining similarly named or associated channels.

When recommending contact, explain why this recent body of work relates to the brand task and which fact the channel team must confirm. The channel is large should not replace the recommendation's reasoning.

The brand value of researching most subbed YouTube channels is discovering content organizations worth further examination. Partnership judgment still needs a current programme, specific roles and actual agreement.

Keep scale in the background and use catalogue evidence to ask a better question. The brand can then move from an attention-grabbing ranking lead to a bounded creator-partnership discussion that someone can answer. The resulting brief respects both the programme's editorial shape and the limits of public research, leaving availability, permissions and future performance to be addressed explicitly rather than assumed from size.`)
],
links:[link('频道采购单元指南','channel purchase-unit guide','biggest-youtube-channels-purchase-unit'),link('频道身份核验方法','channel-identity review method','youtube-channels-identity-scope-handoff')],
figures:[{file:'most-subscribed-youtube-channel-catalog-fit-framework.svg',afterSection:4,alt:p('从频道规模到当前节目、样本与待确认任务的目录审阅','Catalogue review from channel scale to current programme, samples and an assignment to confirm'),caption:p('频道总量帮助发现，当前系列与具体作品帮助判断本次任务。','Channel scale supports discovery; current series and specific work support the assignment decision.')}],
table:{title:p('频道目录审阅表','Channel catalogue review'),headers:[p('层次','Layer'),p('保留资料','Retain'),p('待确认问题','Question to confirm')],rows:[[p('频道','Channel'),p('唯一身份与日期','Identity and date'),p('是否为目标发布方','Is this the intended publisher?')],[p('系列','Series'),p('近期连续作品','Recent consecutive work'),p('是否仍在制作','Is it still being produced?')],[p('形式','Format'),p('长短视频与版本','Long-form, Shorts and versions'),p('哪种适合解释','Which suits the explanation?')],[p('商品角色','Product role'),p('实际表达样本','Observed expression'),p('需要什么体验依据','What experience is needed?')],[p('采样','Sampling'),p('覆盖范围与缺口','Coverage and gaps'),p('结论还需补什么','What remains to verify?')]],note:p('编辑研究工具，不是频道排名、完整审计或合作效果预测。','Editorial research tool, not a ranking, complete audit or performance forecast.')},
tool:{title:p('从榜单线索走到节目问题','Move from ranking lead to programme question'),intro:p('联系频道前完成这份有限目录。','Prepare this bounded catalogue before contact.'),items:[p('给规模资料保留日期。','Retain the date of scale evidence.'),p('确认频道唯一身份。','Confirm channel identity.'),p('找到近期连续系列。','Locate a recent continuing series.'),p('区分形式与语言版本。','Separate formats and language versions.'),p('说明采样范围及限制。','State sampling scope and limits.'),p('提出当前节目可回答的问题。','Ask a question about the current programme.')]}
});
