import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:21,
summary:p('同一款健身服的颜色与尺码不能只靠画面猜。为达人素材保留准确商品选项、实际穿着版本与剪辑状态，让标题、图像和购买入口说同一件商品。','Do not identify apparel colour and size by appearance alone. Keep product options, the version actually worn and edit states aligned so captions, images and destinations describe the same item.'),
description:p('Gym wear brands 怎样管理达人颜色尺码版本：区分款式与变体，保留实物和剪辑对应，避免调色、替换样品或字幕造成商品误认。','Gym wear brands can keep creator assets tied to the correct colour and size through variant references, actual samples, careful colour review and accurate captions.'),
coverAlt:p('创作者与制作伙伴对照两件蓝色运动服和独立样品卡','A creator and production partner compare two blue sports garments with separate sample cards'),
answer:p('Gym wear brands 制作达人内容时，应把款式、颜色、尺码和实际拍摄样品对应起来，再核对成片字幕与商品入口。同一系列不代表每个版本相同，画面看起来相似也不能证明商品身份。为素材保留可追溯的版本记录，调色与剪辑时再次确认哪些事实仍成立。本文关注达人营销的商品准确性，不提供跨品牌统一尺码或屏幕颜色完全等同实物的保证。','When gym wear brands commission creator content, align the style, colour, size and actual filmed sample before checking final captions and product destinations. A shared range does not make every version identical, and similar appearance does not prove product identity. Retain a traceable version record and recheck which facts survive grading and editing. This guide concerns product accuracy in creator marketing, without a universal cross-brand size rule or a guarantee that screen colour exactly matches the physical garment.'),
sections:[
s('从款式进入具体商品选项','Move from a style to its actual product options',`先确认品牌如何识别这件商品。款式名称可能对应多种颜色与尺码，合作文件需要能回到实际选项，而不是只写一个系列名。

Shopify 的商品变体说明以尺码和颜色组合解释不同版本。这是商品身份的可用例子，不代表所有商家都使用相同系统，也不是要求读者改动商店后台。

为达人准备清楚的参考记录，保留商品负责人使用的名称或标识，以及观众看到的名称。内部简称与公开名称不同，可以对应，但不能悄悄混用。

这一步为后续内容建立事实基础。创作者不必背下库存系统，只需知道自己正在解释哪件商品，制作人员也能将镜头与正确版本对应。`,
`Establish how the brand identifies the item. A style name can cover several colours and sizes, so the collaboration record needs to return to the actual option rather than only a range name.

Shopify’s product-variant guide uses size and colour combinations to explain versions. It is a useful product-identity example, not proof that every merchant uses the same system or an instruction to modify a store backend.

Prepare a clear creator reference retaining the product owner's name or identifier and the name viewers encounter. An internal shorthand can map to a public name without being silently substituted for it.

This establishes the factual basis for later content. The creator need not memorize an inventory system; they need to know which item they are explaining, while production can connect footage to the right version. A small accurate reference is more useful than a broad catalogue that leaves the filming team uncertain about which nearly identical item was actually supplied.`,['shopifyVariants']),
s('记录实际穿着，而不是默认计划已执行','Record what was actually worn rather than only planned',`拍摄计划可以写蓝色中码，但当天实际穿着仍需确认。替换样品、临时调整或混用配套单品，都可能让成片与原计划不同。

保留足以识别的实物记录和对应镜头，不要求公开创作者全部个人尺寸。实际标签、品牌确认与穿着者说明可以各自提供不同事实。

健身造型连续方法帮助保留拍摄状态；这里更关注状态对应哪个商品选项。造型看起来连续，不证明样品身份从未改变。

如果发现计划与实际不同，先更新记录再继续剪辑。不为了维持文件整齐而把错误尺码留在字幕，也不要让创作者为品牌尚未核对的商品信息作保证。`,
`The shooting plan might say a blue medium, but confirm what was worn on the day. A replacement, adjustment or mixed supporting item can make the footage differ from the original plan.

Retain enough physical reference to identify the sample and its shots without publishing every personal measurement. A label, brand confirmation and wearer statement can each establish different facts.

The wardrobe-continuity method preserves a filming state; here the question is which product option that state represents. Visual continuity does not establish that sample identity never changed.

If planned and actual versions differ, update the record before editing further. Do not preserve an incorrect size caption to keep documents tidy, or ask a creator to guarantee product information the brand has not checked. This makes the final expression answerable to what happened, rather than letting the earliest version of the plan outrank evidence from the actual session. It also lets a later editor distinguish a genuine product change from a harmless change in framing.`),
s('尺码标签与尺寸解释分别处理','Separate size labels from measurement explanations',`Nike 的双尺码说明明确表格采用身体尺寸。它说明团队需要先问资料在描述什么，而不是看到厘米或字母就认定是成衣尺寸。

创作者说自己这次穿某码，可以对应个人实际穿着，不应直接推广为所有相似身高、体型或性别的人都应该选择同码。

若要解释商品尺码，品牌提供当前款式与市场适用资料。不同系列或地区版本是否可比，需要实际确认，不能用一个品牌表替另一个品牌填空。

个人偏好与标签事实同时保留。例如穿着者偏好宽松，不改变标签本身，但会影响体验描述。把这种条件讲清楚，比给每位观众一个未经核验的通用建议更可靠。`,
`Nike’s dual-sizing guide explicitly uses body measurements. It illustrates why the team should ask what a reference describes instead of assuming that centimetres or letters identify finished garment dimensions.

A creator saying which size they wore can describe personal experience without becoming advice that everyone with a similar height, body type or gender should choose it.

If sizing is explained, the brand supplies a current reference for the particular style and market. Comparability between ranges or regional versions requires confirmation; one brand's chart should not fill gaps for another.

Retain preference alongside label facts. A wearer preferring looseness does not change the label but can affect the experience described. Clear conditions are more dependable than an unverified universal recommendation. This also protects a later cut-down: removing the preference sentence may leave a size statement sounding like advice for everyone, so review the meaning of the shorter version rather than only whether the number was copied correctly.`,['nikeSize']),
s('颜色呈现要核对实际商品','Do not rely on one editing preset for product colour',`Adobe 的照片颜色说明介绍白平衡、色温、色调与饱和度等调整。它们可以改变照片呈现，因此颜色看起来更漂亮不等于更准确对应实物。

制作团队应按实际商品与合适参考核对，不把一种蓝色调成另一个现售版本，再沿用原名称。屏幕和观看条件也有差异，不作完全一致保证。

品牌可以说明哪些细节对购买理解重要，创作者保留自然表达，剪辑人员避免让整体风格改变关键商品事实。必要时选择更清楚的镜头而不是过度修色。

这不是要求所有读者使用某个软件，也不是提供颜色认证。文章关注审阅问题：成片中的颜色描述与商品名称，是否仍能被实际参考支持。`,
`Adobe’s photo-colour guide describes adjustments including white balance, temperature, tint and saturation. These can change an image's rendering, so a more attractive colour is not automatically a more accurate physical match.

Production should check the actual product and an appropriate reference rather than grading one blue into another sold version while retaining the first name. Screens and viewing conditions also differ, so do not promise exact equivalence.

The brand can identify details important to purchasing understanding, the creator retains natural expression and the editor avoids letting an overall style change key product facts. A clearer shot may be preferable to excessive recolouring.

This is neither a requirement to use one software product nor a colour certification. The review question is whether the final colour description and product name remain supported by an actual reference. That question can be answered through a proportionate review without pretending every viewer's device displays the garment identically or that one preset settles product accuracy.`,['adobeColour']),
s('字幕与商品入口需要同一版本','Keep captions and destinations on the same version',`在成片、标题、说明与购买入口中核对颜色和尺码。只改了一处，其他地方仍可能保留旧选项，形成看似自然却互相矛盾的信息。

达人商品信息路径方法讨论从内容到商品的完整关系。这里要确认观众沿路径看到的版本，是否仍对应画面中的实际展示。

若某颜色暂时不可售，可以说明实际条件或调整邀请，不默认用另一个颜色入口代替后仍能沿用全部推荐。市场与库存事实由品牌负责人确认。

同样不要把模特图、创作者实拍和商品色卡混当成完全相同证据。它们有各自用途，字幕应准确说明观众正在看到什么。`,
`Check colour and size across the finished piece, title, description and purchasing destination. Updating one location can leave an old option elsewhere, creating information that looks natural but contradicts itself.

The creator product-information path method examines the connection from content to product. Here confirm that the version a viewer encounters along that route still corresponds to the actual demonstration.

If a colour is unavailable, explain the condition or adjust the invitation instead of assuming another colour's destination preserves every recommendation. The brand owner confirms market and inventory facts.

Likewise, a model image, creator footage and product swatch are not identical kinds of evidence. Each serves a purpose, and captions should accurately identify what viewers are seeing. A viewer should not need to infer an unannounced substitution from a tiny product-page difference after being invited by a confident spoken description. Keeping the version explicit is part of the explanation rather than a detail to repair after publication.`),
s('素材复用前再次核对适用范围','Recheck applicability before reusing assets',`品牌可能希望把同一段素材用于另一种颜色或尺码的商品页。先判断画面与说法是否仍准确，不因服装结构接近就默认全部可复用。

FTC 的达人披露指南在美国语境下强调实际体验与有依据表达。把某人对实际穿着版本的感受移到另一个版本上，可能改变原话所代表的条件，需要重新核对。

同时确认素材使用安排。文章不替具体合同作法律结论；实际允许哪些账号、时期与用途，需要由合作方明确约定。

适合复用的内容可以保留，但附上清楚范围。不适合的部分另作拍摄或调整，不用后期改色让一个未体验版本看起来像创作者实际穿过。`,
`A brand may want the same footage on a page for another colour or size. First establish whether image and wording remain accurate instead of assuming shared construction makes every use appropriate.

FTC’s influencer-disclosure guide emphasizes actual experience and supported expression in its United States context. Moving a wearer's account of one version onto another may change the conditions represented and needs review.

Confirm the asset-use arrangement too. This article does not determine a particular contract's legal meaning; the parties need to agree the accounts, period and purposes permitted.

Material suitable for reuse can be retained with a clear scope. Where it is unsuitable, arrange different work or revise appropriately rather than recolouring footage to make an unexperienced version appear personally worn. Product accuracy and permission are both necessary questions, but one does not answer the other: an authorized file can still carry a misleading version description, while an accurate description does not itself authorize a new use.`,['ftc']),
s('假设案例：两种蓝色怎样避免混用','Hypothetical case: avoid mixing two blue options',`假设品牌有深蓝与亮蓝两种上衣，创作者实际穿亮蓝中码。制作记录只写“蓝色”，剪辑和商品页人员因此选用了不同版本。

这是编辑示例，不是实际错误报告。团队补上正式颜色名称、尺码与实物参考，再核对对应镜头、字幕和目的地，把旧描述保留为已替换记录。

如果调色让两种蓝色难以区分，先回到实际样品与参考，不让视觉偏好决定商品身份。创作者确认体验仍对应自己穿过的版本。

最终交接保留哪些素材可用于哪个选项，以及尚未拍摄的版本。没有亮相的颜色不被写成已体验，也不通过后期修改制造不存在的穿着事实。`,
`Imagine a brand offering dark-blue and bright-blue tops, with the creator actually wearing a bright-blue medium. The record says only blue, leading editing and product-page colleagues to select different versions.

This is an editorial example, not an actual incident report. The team adds the official colour name, size and physical reference, checks shots, captions and destination, and retains the earlier description as superseded.

If grading makes the blues hard to distinguish, return to the sample and reference instead of allowing visual preference to determine identity. The creator confirms that the experience still concerns the version worn.

The handover records which assets apply to which option and which versions remain unfilmed. A colour never worn does not become a claimed experience through editing. The example shows why a seemingly small label can affect the meaning of the complete recommendation, even when nobody intended to change the product being described.`),
s('给变更一个负责人和清楚记录','Give changes an owner and a clear record',`样品、公开名称或购买入口变化时，安排商品负责人确认事实，制作负责人更新受影响内容。不要让每位创作者独自判断内部命名变更。

记录修改原因、适用版本与何时确认。后续出现不同截图时，可以说明它们对应的状态，而不是删除旧记录来掩盖变化。

也给创作者适当确认机会，特别是体验、本人出镜或配音的含义被改变时。商品名称修正不应悄悄扩展为新的背书内容。

范围清楚后，团队能判断是字幕更新、目的地调整还是确需补拍。不必为每个小变更重做全部素材，也不能为省事而保留已知错误。

共享文件时标明旧版已被替换，避免另一个剪辑人员再次取用。保留归档可以追溯，但对外工作入口应清楚指出当前采用哪版。`,
`When a sample, public name or destination changes, assign product facts to the product owner and affected assets to production. Each creator should not independently interpret an internal naming revision.

Record the reason, applicable version and confirmation time. Different screenshots can then be explained by their states instead of deleting an earlier record to conceal the change.

Give the creator an appropriate opportunity to confirm changes, particularly where experience, appearance or voiceover meaning is affected. A corrected product name should not quietly expand into a new endorsement.

With scope clear, the team can distinguish a caption update, destination correction and necessary additional filming. Not every small change requires recreating all material, but convenience does not justify retaining a known error. The record supports proportionate action by identifying which statement became inaccurate and which footage remains usable, rather than forcing the entire campaign into an unexplained replacement cycle.

Mark superseded files when sharing work so another editor does not select them again. An archive can preserve traceability while the working reference clearly identifies the version currently intended for use.`),
s('让具体版本支持可信达人内容','Let the specific version support credible creator work',`Gym wear brands 的达人素材需要准确到正在展示的商品，而不是停留在系列名称。颜色、尺码、实物与成片各有资料，应在关键交接点对应。

保留个人体验条件，不用标签推断全部人群；核对颜色呈现，不用编辑预设认证实物；检查用途，不把一次许可扩成任何版本都能复用。

品牌据此向创作者提出更清楚任务，后续团队也知道哪些素材可以进入哪些商品路径。需要补充时，问题能够落到具体对象。

准确版本并不保证销量或合作效果，但能减少本可避免的信息混乱。达人营销的可信贡献，来自实际展示、真实表达和品牌事实互相支持，而不是看起来相近就默认相同。`,
`Creator assets for gym wear brands need the identity of the item being shown, not merely a range name. Colour, size, physical sample and final piece each have evidence to align at important handoffs.

Retain personal experience conditions instead of inferring every viewer's fit from a label. Check colour rendering without treating an editing preset as physical certification. Review use without extending one permission across every version.

The brand can then make a clearer assignment, and later colleagues know which assets belong with which product route. A follow-up question can concern a specific object rather than a vague complaint that the campaign looks inconsistent.

Version accuracy guarantees neither sales nor partnership performance, but reduces avoidable information confusion. A credible contribution comes from actual demonstration, truthful expression and brand facts supporting one another, rather than treating similar appearance as proof of sameness. That gives the content a reliable basis for publication and any later appropriately agreed adaptation.`)
],
links:[link('健身造型连续方法','wardrobe-continuity method','gym-fashion-creator-wardrobe-continuity'),link('达人商品信息路径方法','creator product-information path method','instagram-creator-commerce-question-to-product')],
figures:[{file:'creator-garment-swatch-version-check.jpg',afterSection:4,alt:p('创作者和制作伙伴对照珊瑚色与蓝色衣服的实物布样','A creator and production partner compare physical swatches with coral and blue garments'),caption:p('先确认实际商品选项，再检查拍摄与编辑呈现；布样不是屏幕完全一致的保证。','Confirm the actual product option before reviewing capture and edits; a swatch does not guarantee identical screen rendering.')}],
table:{title:p('达人素材的版本对应','Map versions in creator assets'),headers:[p('资料','Reference'),p('确认事项','Confirm'),p('常见误读','Misreading')],rows:[[p('款式','Style'),p('具体商品身份','Specific product identity'),p('系列等于单一版本','A range is one version')],[p('颜色','Colour'),p('名称、样品与成片','Name, sample and final image'),p('相近即相同','Similar means identical')],[p('尺码','Size'),p('标签与资料对象','Label and reference object'),p('字母代表所有人','A letter fits everyone')],[p('字幕入口','Caption and destination'),p('对应实际展示','Match actual demonstration'),p('只改一处就完成','One correction fixes everything')],[p('复用','Reuse'),p('事实与许可各自确认','Confirm facts and permission separately'),p('获准即全部适用','Authorized means applicable everywhere')]],note:p('编辑准确性框架，不是统一尺码、色彩认证或素材使用授权。','Editorial accuracy framework, not universal sizing, colour certification or asset authorization.')},
tool:{title:p('把镜头对应到正确商品','Connect the shot with the right item'),intro:p('在交付与复用前核对。','Check before delivery and reuse.'),items:[p('确认款式与正式选项名称。','Confirm the style and official option names.'),p('记录当天实际样品。','Record the actual sample used.'),p('区分标签与个人体验。','Separate labels from personal experience.'),p('检查调色是否改变商品含义。','Check whether grading changes product meaning.'),p('同步核对字幕和目的地。','Review captions and destination together.'),p('为变更与复用保留明确范围。','Retain scope for changes and reuse.')]}
});
