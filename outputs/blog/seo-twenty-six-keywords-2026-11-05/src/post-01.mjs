import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:1,
summary:p('把一条原帖变成有上下文的品牌回应。按TikTok原生合拍步骤录制，检查画面、声音、披露和后续使用。','Turn an original post into a useful brand response. Follow TikTok’s native Duet route and review framing, sound, disclosure and later usage.'),
description:p('TikTok合拍实操指南。核对原帖权限，从分享菜单发起合拍，设计并排解释，明确披露、音乐和付费投放条件。','Learn how to do a Duet on TikTok, verify the source post, plan a split-screen response and review commercial disclosure, audio and usage before launch.'),
coverAlt:p('一位创作者在明亮的制作台前对竖屏相机做手势，旁边立着两张并排的无字分镜卡。','A creator gestures toward a portrait camera at a bright production bench beside two blank storyboard cards.'),
answer:p('在TikTok打开要回应的视频，点分享，再选择Duet（合拍）。录下自己的画面，继续编辑，然后存为草稿或发布。原帖与回应会并排播放。品牌先核对原帖是否允许合拍，并把自己的新增解释安排到具体时间点。如果菜单没有合拍入口，先确认源帖设置，再决定改用获准素材制作独立回应。上线前分别检查平台功能、商业披露、声音和后续用途。','Open the TikTok video you want to respond to, choose Share, then select Duet when it is available. Record your side, continue editing, and save a draft or publish. The original and the response play side by side. For brand work, inspect the exact source post and decide what your side adds at a specific moment. If the menu offers no Duet, check the source post and plan a separate response with material you can use. Review platform access, commercial disclosure, audio and later usage as distinct decisions before publishing.'),
links:[link('制作Brief指南','production brief guide','write-a-useful-campaign-brief'),link('使用权协商指南','usage-rights guide','creator-rates-usage-rights'),link('Spark Ads授权流程','Spark Ads authorization workflow','tiktok-spark-ads-authorization-lifecycle'),link('项目测量指南','campaign measurement guide','creator-campaign-measurement')],
sections:[
s('从具体原帖进入合拍','Start from the exact source post',
`TikTok合拍操作说明把Duet定义为两段视频同时在分屏中播放。先打开需要回应的具体帖子，核对账号、链接和原文的起止位置。原帖留在发布者主页，回应显示在录制合拍的账号主页。这个区别决定谁能修改说明、回复评论和保存自己的发布记录。

在移动端打开分享菜单，找到合拍，必要时横向滑动菜单。进入录制后选用所需拍摄工具，开始和结束录制，再点继续检查剪辑。用下一步查看说明、标签和隐私设置，之后按当前界面存草稿或发布。团队可先制作草稿，现场逐项检查声音与画面。如果用团队协作工具审片，先约定允许传递的审阅材料。

原帖的链接与录制草稿一起登记。用一句话写清原作者原本在解释什么，再用一句话写回应将补充什么。一个可用的记录是“原帖展示盒盖闭合，回应在锁扣出现时补充检查方法”。这样审阅者知道应看哪一处。`,
`The TikTok Duet guide defines a Duet as two videos playing at the same time in a split screen. Open the exact post the team wants to address. Confirm the account, source link and the relevant passage. The original remains on its publisher’s profile. The response appears on the profile of the person recording it. That distinction determines who can revise the description, respond to comments and keep the publication record for each side.

In the mobile app, open Share and find Duet. Swipe across the available options if needed. Choose the camera tools appropriate to your response, record, and continue to editing. Use the next screen to check description, tags and privacy. Save a draft or post through the available controls. A team can stop at the draft stage and review picture and sound with the operator present. Agree what review material may be passed to collaborators if you use a separate review system.

Record the source link alongside the draft. Write a sentence about what the original creator was showing and a sentence about the addition. A usable note says the source demonstrates closing a case and the response explains how to inspect its latch at the moment it appears. The reviewer then knows which detail to inspect.`,['duet']),
s('入口缺失时处理原帖权限','Resolve permissions when Duet is unavailable',
`TikTok合拍隐私说明区分账号范围和单条作品的再使用设置。要允许他人合拍，发布者需要公开账号，还可按可用的所有人或互关好友等选项限制参与者，并对单条作品控制再使用。检查入口时以正在操作的账号和具体帖子为准。两支外观相似的视频可能有不同权限。

如果合拍按钮没有出现，先记录原帖状态与实际观察时间。请负责原帖的合作方确认其选择。不要为了交付进度替对方改变公开范围。无法取得合拍时，可用品牌自有拍摄重做说明，或另约一条有明确交付安排的原创对话。保留原来的制作目标，再更换实现方式。

调整再使用设置前读清界面提示。官方说明中的批量移除操作可能同时移除原帖及关联的合拍和拼接。涉及停止现有合作时，应由负责各账号的人先核对要处理的帖子、保留的档案和已有安排。把设置变化和已发布材料处置分别写入记录。`,
`The TikTok Duet privacy guide distinguishes account-level choices from reuse settings on an individual post. A publisher needs a public account to allow incoming Duets. Available controls can narrow participation to everyone or mutual followers and govern reuse on a particular video. Check the account actually doing the work and the exact post. Two clips that look nearly identical may have different permissions.

If Duet is missing, record what you observed and when. Ask the person responsible for the source post to confirm their choice. Keep any decision about making that account public with its owner. If the Duet route is unavailable, recreate the explanation with your own footage or arrange a new exchange with explicit deliverables. Preserve the production objective when the method changes.

Read the on-screen consequence before changing reuse controls. The bulk removal action described by TikTok can remove the source post along with associated Duets and Stitches. If a collaboration is ending, the owners of the respective accounts should identify the affected posts, the material to retain and any existing arrangements. Record a settings change separately from the disposition of already published material.`,['duetPrivacy']),
s('写一份跟着原帖走的分镜','Write a storyboard that follows the source',
`制作Brief指南可以用来明确观众问题、交付形式和审核节点。合拍还需要时间对应关系。先看完原帖，标出回应应该发生的位置。在分镜里分别写原侧发生的动作、回应侧的表情或演示、两侧声音以及观众应获得的信息。

假设原帖演示如何组装便携展架，合作方只需要解释卡扣是否到位。回应侧应在原帖展示卡扣时给出近景和清楚的提示。若品牌在开头就说完所有卖点，观众可能还没看见被讨论的部件。若原视频已经充分回答问题，可以为回应改选一个真正需要补充的细节。

试看片中容易误解的地方。镜头内的指向可能落在分屏裁切之外。原帖讲的是一种型号，回应可能无意中换成另一种。发布说明可写明适用版本，并让审核者从头看到这个限制。无法保留必要上下文的素材适合改做独立短片。

分镜也应标出原帖说到的例外。例如原作者只演示空载安装时，回应应保留空载条件，不能把安装画面变成承重测试。预先确定两侧必须同屏出现的物件，让剪辑师知道何时需要更换镜头。`,
`Use the production brief guide to define the audience question, deliverable and review point. A Duet also needs a timing relationship. Watch the source all the way through and mark the moment that calls for a response. In the storyboard, record the action on the source side, the reaction or demonstration on the response side, the audio on both sides and the information a viewer should take from that beat.

Imagine a source video demonstrating a portable display stand. The collaborator only needs to explain how to check whether a catch is seated. Show a close view and give the instruction when the catch appears in the source. A pitch delivered before viewers see the component has little connection to the picture. If the original already answers the question fully, select a detail that benefits from an addition.

Review the points at which a viewer might infer the wrong meaning. A hand may point outside the panel after the crop. The source may show one model while the response accidentally shows another. State the applicable version in the description and make it visible early enough for a reviewer to notice. Material that loses essential context in a split screen is better handled as a standalone piece.

Mark exceptions from the original in the storyboard too. A source demonstration of assembly without a load can support a response about assembly under that condition. Turning it into a load test would require separate evidence. Identify the objects that have to appear simultaneously in both panels so the editor knows when a different angle is needed.`),
s('复查两侧声音和小屏画面','Check sound and framing on a small screen',
`在手机上用通常的观看距离播放草稿。检查两侧都能看清关键物件，正文文字和操作界面不会盖住需要观察的手势。对于一个动作解释，品牌侧可以选择更简洁的画面，让原帖留出足够空间。若两个同时进行的演示都需要全屏细节，分屏可能不是合适的形式。

声音安排可以先确定谁承担解释，再做试听。原帖含对白时，回应侧可以短暂停顿或配上简明说明。先打开声音检查节奏，再静音查看关键步骤是否仍清楚。重要的声音线索可以通过可读字幕说明，术语拼写、型号与顺序需要人工复核。

TikTok商业音乐说明建议商业推广使用商业音乐库，并说明采用库外音频时涉及的确认。检查原帖声音和回应拟加的声音，逐项确认这次使用范围。若需要把同一个成片用于其他平台、广告或线下播放，把这些用途提前告诉负责确认素材的一方。`,
`Play the draft on a phone at a normal viewing distance. Check that both panels show the important object and that copy and player controls leave relevant gestures visible. For a movement explanation, simplify the response panel to leave space for the source action. A split screen becomes difficult when two concurrent demonstrations both need full-frame detail.

Decide which side carries the explanation before listening to a review cut. If the original includes dialogue, a short pause or a concise text response may be clearer than another voice. Review once with sound and once muted. Confirm that the essential step survives and that a readable caption conveys a meaningful sound cue. Check spelling of technical words, model names and sequence markers against the brief.

TikTok commercial music guidance recommends its Commercial Music Library for promotional material and describes the confirmation involved in using audio from outside it. Examine the source audio and the audio you plan to add. Verify each against this use. If the same cut may be used on another platform, in an ad or at an event, bring those uses into the review before the producer commits to the soundtrack.`,['ttMusic']),
s('分别安排披露和授权','Handle disclosure and usage separately',
`TikTok商业披露说明要求推广品牌、商品或服务时启用相应披露设置，并区分自有业务推广和第三方商业合作。明确是哪一方发布、接受了什么对价、用哪个页面状态核对披露。创作者读一遍最终说明，并在实际发布后核对标签和文字是否都可见。地区规则、投放要求和品牌自己的表达可以有额外条件，按目标市场审核。

合拍开关解决平台内能否录制这一层。原帖授权、音乐、表演或出镜、品牌账号转载、付费分发和重新剪辑，各有自己的适用范围。用使用权协商指南明确作品版本、渠道、地区、期限和修改。优先确认马上要交付的使用，再列需要另议的下一阶段。口头同意制作有用，但团队需要把可以执行的范围写清。

如果团队希望在TikTok内使用广告形式，查阅Spark Ads授权流程，核对实际帖子、账号、授权期限和投放负责人。给媒体团队的确认应对应发布后可识别的帖子，而不是仅发一份名叫final的剪辑文件。`,
`TikTok commercial disclosure guidance describes enabling disclosure for promotion of a brand, product or service and distinguishes promotion of one’s own business from a third-party partnership. Identify the publishing party, the relevant exchange and the actual interface state used to check disclosure. Have the creator read the final description and check visible labeling and copy once published. Local rules, placement requirements and brand wording can add conditions in the target market.

The Duet switch governs one layer of in-app recording. The source footage, music, performance and likeness, brand reposting, paid distribution and further editing each carry a scope. Use the usage-rights guide to specify version, channel, market, duration and edits. Confirm the immediate deliverable first and record which later uses require a new agreement. A production conversation is useful when it becomes a range of actions the team can execute.

If the team plans to advertise on TikTok, consult the Spark Ads authorization workflow and verify the actual post, account, authorization period and media owner. The approval a media team receives should point to an identifiable live post, alongside the edited file they reviewed. A filename alone leaves the placement and identity unresolved.`,['ttDisclosure']),
s('用一个假设样片检查执行条件','Walk through a hypothetical review cut',
`假设一家展示设备公司安排两位已确认可出镜的成年人制作说明。原帖是合作方用正确安装方式搭好展架。回应侧在卡扣出现后说明如何看见定位标记。原帖保留设备原声，回应录制短旁白，成片以两侧均可辨认的画面和字幕为验收条件。

第一次试片发现旁白提前了两秒，原帖的手刚好盖住关键标记。把原帖出镜动作和回应侧指示对齐，必要时请原帖负责人重新录制。品牌要求加入“所有型号都一样”时，先核对实际产品范围。示范只覆盖当前款式时，用更准确的型号说明并让审核人核对来源。

合作方同意这次自然发布并不自动解决下一季的广告需求。交付表为自然发布写一项当前状态，为广告另写一项待核对状态。这样的拆分让制作能前进，也让需要额外核验的用途在后续交接中保持可见。`,
`Imagine a display-equipment company commissioning two adult contributors whose appearance has been agreed for the assignment. The source shows a partner assembling a stand correctly. The response explains where to see the alignment mark when the catch appears. The source retains the sound of the equipment, the response adds a short voice-over, and both panels must remain legible with captions.

In this hypothetical first cut, narration starts two seconds early and the hand covers the alignment mark. Align the cue with the moment the mark becomes visible, or ask the source owner to record a clearer angle. If a stakeholder wants to say all models work the same way, verify the product range. When the demonstration covers the current model only, identify it in the wording and give the reviewer the specification behind the distinction.

The collaborator agrees to organic publication for this release. A media buyer later wants the cut for an ad next season. Record the organic publication as a current deliverable and the later advertisement as a separate use awaiting review. Production can continue while the extra placement remains visible in the handoff. An editor can then see which visual elements would need a new version if the placement changes.`),
s('发布后记录回应是否解决问题','Record what the response answered after publication',
`核对最终发布链接、原帖链接、发布账号和观察窗口。报告应说明看到的是合拍回应，还是原帖表现。两个账号的总数不能直接并成一条内容结果。记录能回答任务的问题，例如观众是否看懂了卡扣的位置，或是否在评论中反复追问同一个步骤。

项目测量指南可帮助把观察和下一次决定连接起来。查看能取得的账号侧数据，再结合内容与评论中出现的真实疑问。缺少某一项时标成未取得。对于时间不一致的两组数据，先并列窗口，不用更长的观察时间证明格式更好。

保存团队实际批准的版本、可使用的范围和交接责任。如果原帖设置后来变化，复查响应帖子与计划使用。记录事实、受影响环节和下一步负责人，避免让一次技术变化被误读成合作方收回了所有商业承诺。`,
`Record the final response URL, the source URL, publishing account and observation window. A report should identify whether its data describes the Duet or the original. Totals from two accounts cannot be merged into the result of a single piece. Look for evidence related to the assignment, such as whether viewers understood the location of the catch or repeatedly asked about the same step in the comments.

The campaign measurement guide can connect an observation to the next decision. Use the account-level data you can obtain and the questions viewers actually raised. Label unavailable fields clearly. Put different observation windows side by side before comparing totals. A longer period can accumulate more activity even when the format made little difference to the behavior of interest.

Keep the version that the team approved, its permitted uses and ownership of the handoff. If the source settings change later, review the response post and the planned placements. Record what changed, which parts of the workflow it affects and who owns the next check. A specific access change and a wider commercial decision require different evidence.`)
],
table:{title:p('合拍审片中的四项决定','Four decisions in a Duet review'),headers:[p('检查对象','Object'),p('查看证据','Evidence to check'),p('交付记录','Handoff record')],rows:[[p('原帖与入口','Source and entry'),p('原帖链接、账号和当前合拍菜单','Source URL, account and available Duet menu'),p('负责人及观察日期','Owner and observation date')],[p('分屏草稿','Split-screen draft'),p('原侧动作、回应提示、音轨与字幕','Source action, response cue, audio and captions'),p('对应时间点和通过版本','Cue times and reviewed version')],[p('商业发布','Commercial post'),p('发布账号、披露状态和适用素材','Publishing account, disclosure and appropriate assets'),p('上线链接及最终状态','Live URL and final state')],[p('付费或复用','Paid or later use'),p('对象、渠道、授权与期限','Object, channel, authorization and term'),p('允许范围与下次核验日','Permitted scope and next check')]],note:p('编辑核对表。平台功能的可用性以具体账号和作品状态为准。','Editorial review table. Check feature availability for the actual account and post.')},
tool:{title:p('合拍发布清单','Duet release checklist'),intro:p('由实际发布人确认每一项。','Have the publishing owner confirm each item.'),items:[p('原帖链接和回应目标已记录。','Record the source URL and response objective.'),p('发布账号对该帖实际显示合拍入口。','Verify that Duet appears for this post on the publishing account.'),p('关键动作与回应提示已对齐。','Align the source action and response cue.'),p('小屏及静音检查通过。','Review the draft on a phone with sound on and off.'),p('披露、音乐与后续使用各有负责人。','Assign owners for disclosure, music and later usage.')]}
});
