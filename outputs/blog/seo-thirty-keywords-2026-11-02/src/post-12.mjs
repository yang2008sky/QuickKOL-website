import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:12,
summary:p('把 UGC Creator 这个商业称呼转成可采购的服务说明，定义原始成片、变体、输入资料和完成条件。','Translate the commercial label UGC creator into a purchasable service, with defined master assets, variants, inputs and completion conditions.'),
description:p('UGC creator meaning 采购解释：把称呼转成具体服务单位，写清成片、变体、输入、修改、发布和使用范围，避免按模糊标签比较报价。','Understand UGC creator meaning in purchasing: define service units, master assets, variants, inputs and acceptance before comparing proposals or commissioning work.'),
coverAlt:p('奶油色桌面上，无品牌旅行杯放在珊瑚色台座，旁边有黑色相机、蓝色框线卡、两张空白卡和线缆。','An unbranded travel mug on a coral riser beside a black camera, blue outlined card, two blank cards and a cable on a cream surface.'),
answer:p('在采购沟通中，UGC creator 通常是提供具有个人表达或使用情境风格内容的制作服务者称呼，但这个词本身不是服务清单。品牌应把它翻译成具体购买单位：要解决什么内容问题、交付哪份成片及哪些变体、需要提供什么资料、如何确认完成，以及是否包含发布或使用安排。不能因为报价写着“一条 UGC”，就假设所有人对工作范围理解相同。',
'In purchasing conversations, UGC creator commonly labels a provider of content with a personal voice or use-context style. The label is not a service specification. Translate it into what is being bought: the content problem, master asset, included variants, required inputs, completion conditions and any publication or use arrangement. One UGC video does not establish that two proposals contain the same work. This guide focuses on the unit of service a brand purchases, rather than classifying every creator role or treating a conversational style as spontaneous customer testimony.'),
links:[link('付费制作与自发分享指南','paid-versus-organic guide','what-is-ugc-creator-paid-organic-distinction'),link('制作角色指南','production-role guide','ugc-content-creator-on-camera-production-role'),link('内容使用权指南','content usage-rights guide','creator-rates-usage-rights')],
sections:[
s('词义可以解释风格，不能定义采购范围','A label can describe a style without defining the purchase',
`IAB UK 的 UGC 定义将用户产生的在线内容与媒体拥有者或出版者制作的内容区分，例子包括评论、博客与视频。商业沟通里的 UGC Creator 服务称呼不应被当作这一定义自动附带的统一采购规格。

付费制作与自发分享指南进一步解释这种区别。品牌这次真正要采购的可能是一份演示素材，而不是客户自发评价；如果是付费委托，就应据实说明合作，而非把风格自然写成来源自发。

采购人员可以保留关键词便于搜索供应者，但询价时必须说明任务。称呼帮助找到对话起点，不能代替双方对输出的理解。缺少定义的低价报价，也不能与工作清楚的完整方案直接比较。`,
`The IAB UK UGC definition distinguishes online content created by users from content produced by media owners or publishers, giving examples such as reviews, blogs and video. A commercial UGC creator service should not be treated as a standardized purchasing specification automatically attached to that definition.

The paid-versus-organic guide explains the distinction further. A brand may be buying a demonstration asset rather than receiving a spontaneous customer review. A paid commission should be described accurately instead of converting natural-looking style into a claim of spontaneous origin.

Purchasing teams can retain the keyword when finding providers, but need to describe the assignment when asking for a proposal. The label starts a conversation; it does not replace agreement on outputs. A low price with undefined inclusions cannot be compared directly with a complete, specified proposal. Establishing the service unit helps a new buyer understand why similar-looking examples can require different work without assuming one supplier’s label means the same as another’s.`,['iabUgc']),
s('先定义一份主成片，而不是一个模糊件数','Define the master asset before counting pieces',
`主成片可以用内容任务、产品、形式、语言、技术要求和拟议用途识别。不要只写“竖屏视频一条”，却把开头、字幕、语言、结尾和画幅都留到拍完以后再决定。

制作角色指南可帮助理解谁完成各项制作，但本篇关注交付单位。一个可核对的单位应让采购、制作和接收素材的人都知道，哪份文件是本次要完成的主版本，以及它需要回答什么问题。

不要把数字当作越多越好。若一段内容需要同时解释过多功能，可能更适合拆成不同任务。拆分会影响工作和报价，不能一边增加独立内容，一边坚持“还是同一条视频”。先确认内容边界，再决定数量。`,
`Identify a master asset by content task, product, format, language, technical requirements and proposed use. One vertical video leaves too much unresolved if opening, captions, language, ending and framing are all decided after filming.

The production-role guide helps explain who performs the work, while this guide concerns the output unit. Purchasing, production and asset recipients should be able to recognize the master version and the question it must answer. A stable reference makes a later variation or correction intelligible without requiring everyone to replay the original conversation.

More pieces are not automatically better. An explanation attempting too many features may need distinct tasks. That changes work and price; additional independent content should not appear while the team insists it remains one video. Define the content boundary before counting. A clear unit also helps distinguish an incomplete deliverable from a new request that arose only after the team saw the first result.`),
s('变体需要说明改动，不能只增加文件数','Specify what changes in a variant instead of only counting files',
`同一主成片可以有字幕版、不同开头、不同画幅或另一语言版本，但它们需要的工作并不相同。将所有版本统称为“剪几个变体”，会让接收人无法判断是否要重新录音、翻译、补拍或只调整输出。

编辑建议是保留主成片编号、变体编号与变化说明。若不同版本只调整结尾文案，就写清结尾来源与其他部分保持条件；若内容实质改变，则按实际新增任务讨论。不要用名称掩盖新的创作。

核对文件数量时，避免把同一视频的预览链接、压缩文件和最终交付都算成独立内容。文件可以有多个存储副本，但内容数量应按双方确认的单位。否则采购报告看似获得更多素材，实际可用贡献并未增加。

改一段开头文字，与换一个人、场景重新演绎开头，可能需要很不一样的工作。称为变体前，先问现有素材是什么、新增工作是什么，再由供应者说明使用已有镜头、重新剪辑还是另行制作。不要只按最终视频长度判断；保留变化说明，接收人才能理解为何相似大小的文件需要不同准备。`,
`A master may have captioned versions, alternate openings, another aspect ratio or another language. Those changes do not require identical work. A request for several edits leaves the recipient unsure whether it includes recording, translation, additional filming or only another export.

As an editorial method, retain master reference, variant reference and change description. If only closing copy changes, identify its source and the conditions for the retained material. A substantive content change should be discussed as the additional task it requires. A label should not conceal new creative work.

When counting outputs, do not treat a preview link, compressed copy and final file of one video as independent pieces of content. Storage copies may differ while the agreed content unit remains the same. Otherwise a purchasing report appears to acquire more material without increasing useful contribution. A version list should help the receiving editor choose the right file, not inflate the apparent volume purchased.

Changing a short text opening can differ substantially from replacing the opening performance with another person or setting. Before calling either a variant, ask what source material exists and which new work the change requires. The supplier can then explain whether the request uses an existing shot, needs another edit or requires production. A buyer should not decide the answer from the final video length alone. Keep this explanation with the proposed variation so a later recipient can understand why two similarly sized output files had different preparation requirements.`),
s('品牌输入决定服务能否开始','Brand inputs determine whether the service can begin',
`采购范围还应说明品牌提供什么：适用产品、可靠资料、可演示功能、必要场景信息、联系负责人及反馈时间。产品尚未可用或资料互相矛盾，会影响实际安排，不能把所有等待都归为供应者拖延。

对需要真实体验的内容，留出与任务相称的使用条件，不要求创作者照读未经发生的感受。若主要目标只是展示一个操作，则说明演示内容与个人评价的区别，避免镜头让受众误以为对方作了更广的体验保证。

把缺少输入的状态保留在工作记录里，并说明它影响哪个交付。不是所有缺失都要让全部工作停止，但不能让制作人员猜重要产品事实。接收方需要知道什么时候能继续，以及重新排期应由谁协调。`,
`Specify brand inputs: applicable product, reliable information, demonstrable functionality, necessary context, contact owner and feedback timing. An unavailable product or contradictory information affects the schedule; not every wait is supplier delay.

Where actual experience is required, provide conditions proportionate to the assignment rather than asking someone to read an unexperienced opinion. For an operational demonstration, distinguish showing a process from personal evaluation so the presentation does not imply a broader experience claim.

Retain missing inputs and the deliverables they affect. Not every gap stops all work, but production should not require guessing an important product fact. The recipient needs to know when it can proceed and who coordinates any rescheduling. This also improves quote comparison: a provider assuming that the brand supplies a location and prepared script is offering a different service from one expected to source both, even if their final videos share a similar visual style.`),
s('完成条件应该能被接收人检查','Make completion conditions checkable by the recipient',
`完成可以核对内容任务是否回答、文件是否符合约定规格、声音与文字是否可辨认、版本与产品事实是否正确，以及约定附件是否齐全。不要只写“足够真实”或“品牌觉得满意”，却不给任何可理解条件。

品牌仍可以有创意判断，但应在前期提供方向，并由指定人员合并反馈。审阅时区分错误修正与新偏好：文字拼写错误，与临时换一个产品主题，不是相同的修改。

完成制作也不等于确认投放效果。若采购的是素材，接收人不应因为广告结果尚未产生，就宣称文件未交付。相反，文件可打开，也不意味着已经回答原任务。技术与内容两方面都应按已约定范围检查。`,
`Check whether the content question is answered, file specifications are met, audio and text are intelligible, version and product facts are correct and promised attachments are present. Authentic enough or satisfactory to the brand gives little guidance without understandable conditions.

Creative judgment still matters, but direction should be available early and feedback consolidated by a named person. Distinguish correcting an error from adding a preference: a spelling correction is different from changing the featured product at the last moment.

Completed production is not confirmed advertising effectiveness. If the purchase is an asset, unavailable campaign results should not make the file undelivered. Conversely, an opening file does not establish that the assignment was answered. Check technical and content requirements against agreed scope. A recipient who was not involved in briefing should be able to understand these checks, rather than accept or reject the work based on an undocumented memory of what the team intended.`),
s('发布、许可与文件交付仍需分别说明','Keep publication, permission and file delivery explicit',
`内容使用权指南帮助说明文件交付后准备在哪里、由谁、以何种用途使用。美国版权局许可说明提示关注具体作品、用途与适当权利人；这里是美国背景的方法参考，不是对所有委托作品所有权的通用判断。

不要用“UGC Creator”称呼推导必然包含账号发布，也不从收到原始素材推导全部修改、广告和长期用途已经适用。采购行项目可以分别标记文件、发布与拟议使用，实际条件由相应约定确认。

第三方材料、其他出镜者和新增语言版本也可能需要相关核对。服务范围不是越宽越好：品牌可以先购买确实需要的用途，之后再讨论变化。关键是交接给下一位素材使用者时，范围仍能被理解。`,
`The content usage-rights guide clarifies where, by whom and for what purpose a delivered file will be used. The US Copyright Office permission guide highlights the work, intended use and appropriate rights holder. It is a US-context reference, not a universal ownership determination for every commission.

The label UGC creator does not establish included account publication. Receiving raw footage does not establish every edit, advertising use or long-term use. Purchasing line items can separately identify files, publication and proposed use, with actual conditions confirmed through the relevant arrangement.

Third-party materials, additional contributors and new language versions may need corresponding checks. Broader scope is not inherently better: a brand can purchase its current need and discuss a change later. The important point is that the next asset user can understand the range instead of inheriting a folder whose contents are technically accessible but commercially undefined. A service description should preserve that context as carefully as it preserves filenames.`,['copyrightPermission']),
s('自然风格不意味着广告识别可以省略','A natural style does not remove advertising context',
`ASA 品牌社媒广告说明在英国 CAP 语境下讨论付费及部分品牌自有渠道内容，并强调广告应可识别。它没有为“看起来像用户拍摄”的内容提供一般豁免。本篇不是对任何具体广告的法律审核。

品牌可以采购轻制作感、生活化表达或具体使用演示，但不能因此暗示内容来自无商业关系的独立客户。内容如何呈现来源、体验和商业关系，需要与实际情况一致。

交付清单可保留披露或来源说明由谁准备、在哪个版本核对。品牌自有渠道、创作者账号和广告位置可能有不同语境，不能把某个版本的识别方式机械复制到所有位置。让适当负责人在实际用途下检查，而不是在制作完成后才发现宣传方式与素材表达冲突。`,
`The ASA brand-social advertising guide discusses paid and some brand-owned content within the UK CAP context and emphasizes identifiable advertising. It supplies no general exemption for content that looks user-made. This article is not a legal review of a particular advertisement.

A brand can commission informal production, everyday expression or a use demonstration without implying the content came from an independent customer with no commercial relationship. Presentation of origin, experience and relationship should reflect the actual circumstances.

The delivery list can identify who prepares source or disclosure wording and which version is checked. Brand-owned channels, creator publication and advertising placements can have different contexts; one treatment should not be copied mechanically everywhere. Have the appropriate owner examine the actual use instead of discovering after production that the intended presentation conflicts with the material. Keeping this responsibility visible also avoids asking a producer to make regulatory assumptions that the brief never explained.`,['asaBrandAds']),
s('算清一份订单里的内容与文件','Reconcile content units and files in one order',
`以下为编辑假设。一份订单约定一个产品演示主成片、两个只改变开头的变体，以及每份的字幕和无字幕版本。它可以形成三种剪辑、六个最终文件；不是六次独立拍摄，也不代表三种不同产品主题。

如果团队后来要求另一语言版本，应先确认是否包含翻译、录音与重新审阅；不能仅因原计划有六个文件，就认定任何新增第七个文件都几乎没有工作。实际差异决定任务，而不是文件序号。

订单记录将主成片、变化、输出文件与接受状态连接起来。接收人能知道哪一份有字幕、哪一份适合当前用途，以及还有什么未完成。这个假设没有报价或效果基准，只解释怎样让数量可复核。`,
`Consider an editorial hypothetical. An order contains one product-demonstration master and two variants changing only the opening, each supplied with and without captions. That can create three edits and six final files. It does not describe six independent shoots or three different product topics.

A later language request needs clarification about translation, recording and another review. Six planned files do not establish that a seventh involves negligible work. The actual difference defines the task, not the file’s sequence number.

Connect master, change description, output file and acceptance state in the order record. A recipient can identify captions, suitability for the current use and unfinished work. The example supplies no price or performance benchmark; it explains reconcilable quantities. The same principle applies when fewer files represent more work: a single final explanation may require substantial research and demonstrations, so volume alone should not become the brand’s measure of value.`),
s('采购说明是清楚合作的起点','Use the service specification to begin a clear collaboration',
`下载表保留任务、主成片、变体、输入、完成条件和拟议用途字段，供真实项目补齐，不是完整合同。询价时说明哪些是必须、哪些是可选以及哪些仍待确认。

QuickKOL 可以帮助理解需求、研究相关作品与准备联系，但一份相关的合适作品不等于当前可用、已接受任务或价格确认。商业安排与内容事实仍需向相应来源核对。

UGC creator meaning 在采购中的实用答案，是让团队从一个风格称呼走到可理解的服务。只有知道自己买什么，后面的报价比较、制作、接收和使用才有共同依据。`,
`The downloadable sheet retains task, master, variants, inputs, completion conditions and proposed use for an actual project. It is not a complete contract. When requesting a proposal, distinguish required, optional and unconfirmed elements.

QuickKOL can help interpret requirements, research relevant work and prepare contact. A relevant, task-specific work example does not establish availability, acceptance or a confirmed price. Commercial arrangements and content facts still require the appropriate source.

The practical purchasing answer to UGC creator meaning is a move from a style label to an understandable service. Knowing what is being bought gives proposal comparison, production, receipt and use a common basis.`)
],
table:{title:p('一项服务的采购字段','Fields for a service purchase'),headers:[p('字段','Field'),p('需要写清','Specify'),p('避免推导','Do not assume')],rows:[[p('内容单位','Content unit'),p('主成片任务与参考编号','Master task and reference'),p('每个文件都是独立拍摄','Every file is an independent shoot')],[p('变体','Variant'),p('具体改变与保留部分','Changes and retained material'),p('所有修改工作相同','Every change requires identical work')],[p('输入与接受','Inputs and acceptance'),p('品牌资料、规格与内容条件','Brand inputs, specifications and content conditions'),p('打开文件就完成内容任务','Opening the file completes the assignment')],[p('使用与发布','Use and publication'),p('拟议用途、渠道、期间与依据','Proposed use, channel, period and basis'),p('风格名称包含全部权利','A style label conveys every right')]],note:p('编辑采购字段，不是合同或通用法律意见。正文文件数量为假设算例。','Editorial purchasing fields, not a contract or universal legal advice. File counts in the body are hypothetical.')},
tool:{title:p('UGC 制作服务询价清单','UGC production-service inquiry checks'),intro:p('用真实要求填写，不要求供应者猜范围。','Complete actual requirements rather than asking a provider to guess scope.'),items:[p('内容问题与主成片可识别。','Identify the content question and master.'),p('变体说明具体变化。','Describe the actual change in each variant.'),p('品牌输入、等待和负责人明确。','Define brand inputs, dependencies and owner.'),p('接受条件区分错误与新请求。','Distinguish corrections from new requests in acceptance.'),p('发布和使用不从标签自动推定。','Do not infer publication or use from the label.'),p('最终文件与适用版本能对应。','Connect final files with applicable versions.')],downloads:[{url:'/downloads/ugc-service-purchase-fields.en.csv',label:p('下载英文服务采购字段 CSV','Download English service-purchase fields CSV')},{url:'/downloads/ugc-service-purchase-fields.zh.csv',label:p('下载中文服务采购字段 CSV','Download Chinese service-purchase fields CSV')}]}
});
