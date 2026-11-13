import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:1,
summary:p('把 Instagram 主页、出镜者、发布方与商业代表分开确认，让达人研究能够进入清楚的合作讨论。','Separate the Instagram profile, performer, publisher and representative so creator research can become a clear commercial conversation.'),
description:p('研究 Instagram accounts 时，品牌怎样记录账号、作品与代表权限，核验联系路径，处理同名和多人账号，并把未知事项带入达人合作 Brief。','Research Instagram accounts with a role map for profiles, performers, publishers and representatives, plus source checks and clear commercial boundaries.'),
coverAlt:p('四张角色卡分别标出账号、出镜者、发布者与商业代表','Four editorial role cards distinguish account, performer, publisher and commercial representative'),
answer:p('Instagram accounts 是达人研究的入口，不是完整的合作主体证明。一个主页可能由多人运营，一个人也可能参与多个账号；出镜、发布、报价和授予素材使用许可不一定由同一方负责。品牌应保留准确主页地址、作品出处、观察日期和角色说明，再通过适当联系路径确认谁能回答本次合作问题。账号看起来真实，不代表联系者能够代表所有出镜者或出售全部权利。把尚未确认的权限写成待确认，而不是用一个账号名称替代整份合作范围。','Instagram accounts are research entry points, not complete proof of a contracting party. One profile may be operated by several people, and one person may appear across several accounts. Performing, publishing, quoting and authorizing reuse can belong to different parties. Preserve the exact profile URL, work source, observation date and role description, then confirm who can answer the relevant collaboration question through an appropriate contact route. A credible-looking profile does not establish that a correspondent represents every performer or can license everything shown. Keep unresolved authority explicit instead of letting one account name stand in for an entire commercial scope.'),
sections:[
s('先保存账号指向的具体对象','Start with the exact profile, not a remembered name',`记录完整主页地址、当时显示的名称、用户名、观察日期，以及引起兴趣的具体作品地址。不要只保存一张头像截图，或者在表格里写一个无法定位的昵称。昵称相似可能只是同名，作品被转发也不意味着转发账号制作了原片。

把“在哪看到”与“谁创作”放在不同字段。广告里的署名、品牌自己的转发和创作者原帖可能形成三个记录；可以相互关联，但不要为让表格整洁而合并成一个无法追溯的来源。若原帖已不可见，就注明当前状态和此前保存的材料。

日期也影响解释。账号名称、简介和合作联系入口可能改变。旧截图适合说明过去看到什么，不能充当今天重新确认的联系人证明。先获得稳定的研究对象，后续关于角色、作品和授权的问题才有可以对照的基础。`,
`Record the full profile URL, displayed name, handle, observation date and the particular work that prompted interest. An avatar screenshot or remembered nickname is not a sufficiently retrievable research object. Similar names may belong to different people, and a reposting profile did not necessarily produce the original video.

Separate where the team encountered a piece from who created it. An advertisement credit, a brand repost and a creator’s original publication may require three connected records. Linking them preserves their relationship; merging them to make a spreadsheet tidier can destroy the source trail. If the original is no longer visible, record that state and identify any material retained earlier.

Dates change the interpretation as well. Names, biographies and contact routes can change. An old screenshot can document a past observation without becoming fresh confirmation of today’s representative. Establishing the research object first gives later questions about roles, work and permission something concrete to refer to. It also makes a mistaken profile selection correctable before outreach reaches an unrelated person.`),
s('把四种角色放进不同栏位','Give four roles their own fields',`至少区分账号、出镜者、发布负责人和商业代表。它们是本次编辑方法的工作字段，不是 Instagram 认证的法律身份分类。个人创作者可能同时承担几种角色；工作室、组合或媒体节目则可能把它们分开。先记录已知关系，不为了填满表格猜测后台运营者。

创作者身份去重指南解决“哪些账号可能属于同一研究对象”；角色图进一步问“这次要找谁完成哪件事”。同一个人出现在两个账号，不代表两个账号具有相同受众或相同发布权限。一个主页负责人能安排发布，也不自动代表画面里每个参与者。

品牌应按任务发问：谁制作这条演示、哪个账号发布、谁给出报价、谁能确认指定使用范围。得到一个角色的答复，只完成这一项确认。不要把联系人职位里的 manager 翻译成对全部制作、肖像和商业条件的无限授权。`,
`Give the account, on-screen performer, publication owner and commercial representative separate fields. These are editorial working categories, not legal identity classes certified by Instagram. An individual creator may hold several roles; a studio, ensemble or media program may divide them. Record known relationships rather than guessing who operates a profile behind the scenes.

The creator identity deduplication guide asks which accounts may belong to the same research subject. A role map then asks who should perform which task in this assignment. One person appearing on two accounts does not make their audiences or publication permissions interchangeable. A profile administrator also does not automatically represent every participant visible in its content.

Ask task-specific questions: who makes the demonstration, which account publishes it, who quotes, and who can confirm the intended use. An answer about one role settles that question only. A contact’s manager title must not silently become unlimited authority over production, participant appearances and every commercial term. This distinction is useful even when the relationship is friendly and nobody suspects wrongdoing.`),
s('把平台提供的背景当作背景','Treat platform context as context',`Meta 账号透明度说明在 2020 年回顾了 Instagram 的 About this Account，并描述当时面向部分账号的背景信息与美国试点。它说明平台曾提供帮助理解账号的上下文，不是对所有当前账号、所有地区和所有字段的可用性保证。

如果本次界面实际展示了账号背景，可以记录原字段名称、观察日期与含义。不要把账号相关地域信息扩写成创作者居住地、全部观众所在地或有权签约的公司所在地。平台背景、创作地点和合同主体需要分别理解。

某字段不可见时写为不可用，而不是零、隐藏欺诈或身份不实。认证外观、熟悉头像和长期更新都可成为进一步了解的线索，但不能单独完成代表权限确认。角色图的目的不是生成一个看起来权威的真实性分数，而是让已知、推断与仍需询问的部分保持分开。`,
`The Meta account-transparency announcement from 2020 discusses Instagram’s About this Account context and a US pilot. It documents historical platform context, not universal present availability or commercial authority.

When the interface actually shows useful account information, retain the field name, observation date and its stated meaning. Do not expand account-related geography into a creator’s residence, the location of every viewer or the jurisdiction of a contracting company. Platform context, production location and commercial party are different questions.

Mark a field that cannot be seen as unavailable rather than zero, concealed fraud or false identity. A familiar avatar, a verification appearance and a long publication history may guide further research, but none alone establishes a representative’s permission for the proposed assignment. The role map is not an authenticity score. Its purpose is to keep observations, interpretations and unresolved questions separate, so an internal reviewer can see why the team believes it has identified an appropriate conversation partner without pretending that every relevant fact has been independently certified.`,['transparency']),
s('通过独立路径确认意外联系','Verify unexpected contact through an independent route',`FTC 的达人工作邀约提醒建议通过已知真实的公司联系渠道核验意外邀约，而不是只使用来信者提供的联系方式。这是美国机构提供的风险教育，不是对某条具体私信或某位经纪人的调查结论。

品牌自己联系创作者时，也应让身份容易被复核：说明公司、项目目的与官方联系入口，不要求对方为了确认邀约而提供账号密码、验证码或银行资料。创作者询问身份是合理的合作步骤，不应被当作不配合。

如果陌生联系人自称代表某创作者，可请对方说明负责范围，并通过创作者已经公开的商业渠道作必要确认。不要把多个来自同一消息源的转述算成独立证据。无法确认时暂停敏感资料交换或商业承诺，记录缺少哪一步；这不等于公开指控联系人欺诈。`,
`FTC’s influencer job-scam guidance recommends verifying an unexpected offer through a known legitimate company channel rather than relying on contact details supplied by its sender. This US consumer guidance supports a verification step, not a finding about a particular representative.

Brands should make their own outreach equally checkable. State the organization, project purpose and official contact route. Do not ask a creator to provide passwords, verification codes or banking information merely to establish that an invitation is real. A request to verify the brand’s identity is a reasonable part of a commercial conversation, not evidence that the creator is difficult.

If an unfamiliar person claims to represent a creator, ask which responsibilities they handle and obtain necessary confirmation through the creator’s established public business route. Several descriptions copied from one message are not independent corroboration. Where confirmation remains unavailable, pause sensitive exchanges or commitments and record the missing step. That is a proportionate workflow decision; it does not require publishing a fraud allegation or collecting unrelated personal information to make the research file appear more complete.`,['ftcScam']),
s('把作品兴趣改成可确认的合作问题','Translate interest in the work into a scoped question',`一条满意的作品先说明创作者为什么可能适合，不说明其愿意接什么工作。把你看中的具体能力写进达人 Brief：解释产品、现场主持、实际制作、某语言表达，或对一个专业问题的处理方式。不要仅凭简介里的类别要求对方承担所有相关任务。

接着分别说明内容制作、账号发布与后续使用。需要品牌投放的素材，不应只问“能合作吗”；需要创作者自己的账号发布，也不能以采购文件代替发布确认。把原帖作为讨论作品风格的来源，不默认它可以被下载、剪辑或移植到广告里。

权限问题不必一上来堆成冗长问卷。先确认负责这项任务的人，再让适当负责人回答使用地点、时间、剪辑和参与者相关问题。每次答复都对照具体对象与版本，避免同一段模糊的“可以使用”在不同团队间被越传越大。`,
`A strong piece of work explains why a creator might fit; it does not establish what they are willing to supply. Put the relevant capability into the creator brief: explaining a product, hosting on location, making an asset, presenting in a language or handling a specialist question. A profile category is not an agreement to perform every associated task.

Separate production, account publication and subsequent use. If the brand needs an advertising asset, asking whether collaboration is possible is insufficient. If it needs publication on the creator’s account, buying a file is not publication confirmation. Refer to an existing post to discuss the work without assuming permission to download, edit or transplant it into an advertisement.

Start with the appropriate person rather than a large speculative questionnaire. Then have the responsible owner address channels, duration, editing and participant permissions for the intended use. Tie each answer to an object and version. Otherwise a narrow, informal okay can expand as it passes between teams until nobody can identify what was actually approved.`),
s('只保留完成任务需要的信息','Keep the information the task requires',`FTC 的企业信息保护指南强调梳理个人信息并缩减不必要的收集和访问。在达人研究中，可以采用相同的管理思路：保存商业联系所需信息与来源，按实际任务限制内部访问，而不是把私人生活资料堆入候选名单。

报价讨论尚未开始时，研究者通常不需要身份证件、家庭地址、私人联系方式或完整财务资料。后续如确有付款、寄样或合同办理需要，应由适当人员通过授权流程处理；公共账号研究表不应成为这些敏感文件的默认存放处。

角色确认记录也不等于永久个人档案。为联系人变更、合作结束和失效资料设置复核与处理责任。保留必要的决策依据，同时移除不再需要的信息，不把“公开可见”理解成可以无限整理和传播的许可。当地要求与团队政策仍须由负责人员确认。`,
`FTC’s business information-security guide recommends understanding information flows and limiting unnecessary data and access. Apply that management principle to creator research: preserve the business contact information and provenance required for the task instead of accumulating private biographical details.

Before a quote is even discussed, a researcher generally has no reason to collect identity documents, a home address, private contact details or complete financial records. If payment, sample delivery or contracting later requires particular information, the appropriate owner should handle it through an authorized process. The public-profile research sheet should not become the default storage location for those sensitive files.

A role-confirmation record is not a permanent personal dossier. Assign responsibility for contact changes, the end of the assignment and records that have become stale. Keep necessary decision evidence while removing information no longer required. Public visibility is not an unlimited mandate to compile and redistribute material. The team still needs its responsible staff to determine applicable local requirements and policy, especially when a relationship moves from initial research into administration.`,['ftcPrivacy']),
s('用一个四角色案例检查理解','Rehearse a four-role collaboration',`假设一家软件品牌看到工作室账号发布的演示，画面由主持人 A 讲解，制作人 B 负责拍摄，联系人 C 自称负责商业沟通。品牌真正需要的是新功能解释视频，以及品牌自己渠道的有限使用；这不是一项真实客户案例。

研究记录先保存原帖与工作室主页，将 A 写为观察到的出镜者，将 B 和 C 的责任标成待确认。收到确认后分别更新来源和日期。即使 C 可以报价，也还要问清本次方案包含谁的制作、哪个账号发布，以及拟议使用由谁确认。

如果工作室后来提出换主持人，不能仅把姓名替换掉便沿用原先的适配理由。应复核新主持人的表达能力、示例与本次方案。角色变更未必意味着合作不可信；它说明先前判断依赖的条件改变了，需要让品牌与对方在同一份范围说明上重新对齐。`,
`Suppose a software brand finds a demonstration published by a studio profile. Presenter A explains the feature, producer B makes the video, and contact C says they handle commercial discussions. The brand needs a new feature explanation with limited use on its own channels. This is a hypothetical exercise, not a client result.

Start by retaining the original post and studio profile. Record A as the observed presenter, while B’s and C’s responsibilities await confirmation. Update each relationship with its source and date when an appropriate answer arrives. Even if C can provide a quote, the team must still establish whose production is included, which account would publish and who confirms the proposed use.

If the studio subsequently offers another presenter, replacing the name in the sheet does not preserve the original fit rationale. Review that person’s explanatory work and the revised proposal. A role change need not imply an unreliable partner. It means a condition supporting the earlier decision changed, and both sides need to realign around the same description of the assignment.`),
s('为多人、同名与转发保留例外','Keep exceptions visible rather than forcing a match',`遇到组合账号时，不按主页粉丝数推断每位成员都能独立带来相同曝光。遇到代理机构代表多个账号时，也不把同一家机构当作账号之间的受众或角色等同关系。工作室成员、发布账号和受众证据可以有关联，却仍然需要各自记录。

同名、改名、转发和短期嘉宾是不同例外。给问题一个具体描述，例如“原帖署名指向另一账号”，而不是笼统写“身份有问题”。记录哪项证据能够解决歧义，以及谁适合回答。不清楚时保留两个候选记录，比误合并后整份合作讨论指向错误对象更稳妥。

不要为完成研究而自动联系每个出镜者或抓取私人社交关系。适当公开商业入口和必要的直接确认通常更贴近任务。没有答复可以成为等待或暂停的理由，但不是认定某个人虚假、无权代表或不愿合作的充分证据。`,
`For an ensemble account, do not assume that every member independently brings the profile’s entire following. An agency representing several profiles also does not make those profiles equivalent in audience or role. Studio membership, publication identity and audience evidence can be related while still requiring separate records.

Shared names, renamed accounts, reposts and temporary guests are different exceptions. Describe the issue specifically, such as an original credit pointing to another profile, rather than writing identity problem. State what evidence could resolve the ambiguity and who could appropriately answer. Keeping two unresolved research records is preferable to merging them incorrectly and directing the commercial discussion at the wrong subject.

Do not automatically contact every person shown or collect their private social connections to finish the map. An established business route and necessary direct confirmation are usually more relevant. No reply can justify waiting or pausing; it does not establish that somebody is fake, lacks authority or refuses a collaboration. Preserve that distinction when handing the research to a person who did not see the original exchange.`),
s('让角色图随合作交接，而非停在研究表','Hand over the map with the actual next question',`交接时给下一位负责人一份能继续使用的角色图：具体主页、关联作品、角色、确认来源、观察或答复日期、已解决事项、未知事项与下一步。把“研究上值得联系”与“已具备发布或使用许可”分成不同状态。

例如，下一步可以是请已确认的商业联系人说明一条新演示的制作与发布范围，而不是重新发一条毫无上下文的泛泛邀约。对已经明确的内容不反复索要证明；当联系人、账号或拟议使用变化时，再复核真正受影响的字段。

好的完成标准是接手者知道应找谁、为什么找、问什么，以及现有证据还不能说明什么。账号规模和表格完整度都不能替代这个标准。合作推进后，把最终范围与变化带回记录，让后续报价、制作与发布人员使用同一套已经说明白的角色关系。`,
`Give the next owner a usable map: exact profiles, relevant work, roles, confirmation source, observation or response date, resolved points, unknowns and the next action. Research worthy of contact and permission ready for publication or reuse should remain different states.

The next step might be asking the confirmed commercial contact to clarify production and publication for one new demonstration. It should not be another context-free invitation that makes the creator repeat everything. Avoid repeatedly demanding proof of facts already established; recheck the affected fields when a contact, profile or proposed use actually changes.

The completion test is whether a colleague knows whom to approach, why, what to ask and what the evidence still does not establish. Account size and the number of completed spreadsheet cells cannot replace that test. As the collaboration progresses, bring the final scope and material changes back into the record so quoting, production and publication use the same explicit role relationships rather than reconstructing them from scattered messages.`)
],
links:[link('创作者身份去重指南','creator identity deduplication guide','ai-creator-identity-deduplication'),link('达人 Brief','creator brief','write-a-useful-campaign-brief')],
table:{title:p('Instagram 合作角色确认表','Instagram collaboration role map'),headers:[p('字段','Field'),p('记录内容','Record'),p('不能自行推出','Does not establish')],rows:[
[p('账号','Profile'),p('完整地址、名称与观察日期','Exact URL, name and observation date'),p('所有参与者或代表权限','Every participant or commercial authority')],
[p('出镜与制作','Performance and production'),p('本次相关作品与确认角色','Relevant work and confirmed role'),p('账号发布承诺','An account publication commitment')],
[p('商业联系','Commercial contact'),p('负责范围、确认路径与日期','Scope, confirmation route and date'),p('全部素材使用许可','Unlimited asset-use permission')],
[p('下一步','Next action'),p('待确认问题与适当负责人','Unresolved question and appropriate owner'),p('未答复等于身份不实','No reply means false identity')]],note:p('编辑工作表，不是平台认证、法律身份审查或个人真实性评分。','An editorial worksheet, not platform certification, legal identity screening or an authenticity score.')},
tool:{title:p('联系前的角色核对','Role checks before contact'),intro:p('让下一位同事能够定位原帖、理解角色并提出具体问题。','Enable the next colleague to retrieve the work, understand the roles and ask a specific question.'),items:[p('保存主页与相关作品的准确地址和日期。','Retain exact profile and work URLs with dates.'),p('分别记录出镜、制作、发布和商业联系责任。','Separate performance, production, publication and commercial responsibilities.'),p('注明直接确认、公开自述、编辑推断与未知。','Distinguish direct confirmation, public self-description, interpretation and unknowns.'),p('通过适当独立路径核验意外邀约，不交换账号密码。','Verify unexpected offers through an appropriate independent route without sharing passwords.'),p('只保留本次合作需要的信息，并指定复核负责人。','Keep task-relevant information and assign a review owner.'),p('把下一步绑定到具体作品、角色和拟议范围。','Tie the next step to specific work, a role and proposed scope.')]}
});
