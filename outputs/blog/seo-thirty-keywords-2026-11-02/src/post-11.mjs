import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:11,
summary:p('解释 whitelisting 在名单、邮件和达人广告语境中的不同含义，再把简称改写成可理解的权限请求。','Distinguish whitelisting in policy lists, email and creator advertising, then replace shorthand with an understandable permission request.'),
description:p('Whitelisting meaning 品牌团队解释：区分许可列表、邮件送达与达人广告授权，说明系统、对象、动作和期限，避免误解权限。','Understand whitelisting meaning across policy lists, email and creator ads, then write a permission request with a clear system, object, action and period.'),
coverAlt:p('珊瑚色底上三组黑色短语分别标出系统、动作和范围，奶油色边框保留各自语境。','Three groups of black type for System, Action and Scope on coral, with cream frames preserving their separate contexts.'),
answer:p('Whitelisting meaning 取决于语境，不能只用“白名单”解释所有请求。技术系统里可能指按规则允许某些对象；邮件语境可能指允许某类发件来源；达人广告里则常被用来描述平台支持的内容或身份授权。品牌沟通时应说清具体系统、对象、动作、接收方和期间。一个场景中的允许，不自动成为另一个场景的许可，也不代表账号所有权、内容所有权或未来所有用途已经转移。',
'Whitelisting meaning depends on context. In a technical system it may concern allowing specified objects under a policy; in email it may concern permitted senders; in creator advertising it commonly refers to platform-supported content or identity permissions. A brand should name the system, object, action, recipient and period rather than rely on the shorthand. Permission in one context does not automatically authorize another, and it does not establish transferred account ownership, content ownership or every future use. This guide explains the language problem before the operating workflow.'),
links:[link('达人广告授权指南','creator ad-permission guide','what-is-whitelisting-creator-ad-permissions'),link('合作范围清单','collaboration scope checklist','creator-contract-scope-checklist'),link('内容使用权指南','content usage-rights guide','creator-rates-usage-rights')],
sections:[
s('先问：这个词出现在哪个系统','Start by asking which system the word refers to',
`一封邮件写“请帮我们 whitelisting”，接收人仍不知道是收不到确认信、需要广告授权，还是要把某个网址加入内部规则。词语熟悉不代表请求已经清楚。先问上下文，可以避免直接索取并不需要的权限。

品牌、代理、创作者和IT团队可能各自习惯一种用法。沟通应把任务翻译成彼此都能理解的动作，而不是争论谁使用了唯一正确的术语。必要时保留原话，再在记录中写出双方确认的具体含义。

如果一句话无法说明允许什么、由谁执行，就还不是可操作请求。把行业简称当成已达成共识，可能让后续同事在错误系统里找按钮，也可能让接收人以为品牌想要比实际更多的访问能力。`,
`An email saying please whitelist us does not tell the recipient whether a confirmation message is missing, an advertising permission is needed or a URL belongs in an internal rule. Familiar language is not a complete request. Asking for context can prevent an unnecessary access request before it begins.

Brand, agency, creator and IT teams may each be accustomed to one usage. Translate the job into an action they can understand instead of arguing over a single universally correct meaning. Where useful, preserve the original wording and record the specific meaning both parties confirmed.

If a sentence cannot identify what is allowed and who acts, it is not yet operational. Treating shorthand as agreement can send a colleague looking for controls in the wrong system or make a recipient think the brand wants more capability than it actually needs. A clarification should reduce uncertainty about the work, not merely replace one unexplained acronym with another. Include the relevant object reference so the recipient can recognize it.`),
s('许可列表：先有规则和对象','Allowlisting: identify the policy and allowed objects',
`NIST 许可列表定义在其数字身份指南语境下，将 allowlist 解释为按政策决定允许的特定元素记录，并说明历史上也称 whitelist。这个定义属于技术文档语境，不是达人营销行业对内容使用的统一授权条款。

品牌团队不必为了理解术语，照搬身份系统的技术操作。需要记住的是：必须有具体对象、规则和管理者。“已经在名单里”只有在知道名单是什么、允许做什么时才有意义。

若任务属于公司安全配置，交给相应系统负责人说明和操作，不让创作者或营销同事凭一个简称修改自己不了解的设置。本文只解释概念差异，不提供绕过限制或取消安全控制的方法，也不把一类许可列表的行为推断为所有系统通用。`,
`The NIST allowlist definition, in its Digital Identity Guidelines context, describes a documented set of elements allowed by a policy decision and identifies whitelist as a historical term. That technical definition is not a universal creator-marketing clause granting content use.

A brand team need not reproduce identity-system procedures to understand the vocabulary. The relevant lesson is that an allowed object, governing rule and responsible administrator need to be identified. Already on the list means little without knowing which list and which action it permits.

If the task concerns company security configuration, the system owner should explain and operate it. A creator or marketer should not change unfamiliar settings because a shorthand request arrived. This article explains the distinction rather than supplying ways around restrictions or removing controls. Behavior in one kind of allowlist should not be projected onto every other system. The context remains part of the definition, even when a shared word makes the situations appear similar.`,['nistAllow']),
s('邮件允许来源，不等于广告或内容许可','An allowed email source is not advertising or content permission',
`Mailchimp 确认邮件排查说明将发件来源允许列表放在确认邮件送达排查语境中。它是处理某类邮件问题的一个因素，不等于保证进主收件箱、被阅读或获得回复，也不是达人广告授权。

当团队遇到邮件问题，先描述发生什么：哪封确认邮件、什么时间、哪个系统，收件人能看到什么。不要一开始就认定必须更改安全规则；可能还有其他送达或界面情境需要由合适人员检查。

让某封邮件可以送达，也不意味着对方同意长期营销消息或新的合作工作。技术接收、订阅选择与商务同意分别处理。品牌内部记录应保留真实问题与解决动作，不把“邮件问题已处理”改写成“合作已经获得授权”。`,
`The Mailchimp confirmation-email guide discusses sender allowlisting as one consideration in troubleshooting confirmation delivery. It does not guarantee primary-inbox placement, reading or a reply, and it is not creator-ad authorization.

Describe what happened before requesting a change: which confirmation, when, which system and what the recipient can observe. Do not begin by assuming a security rule must change; other delivery or interface conditions may need the appropriate person’s review.

Allowing receipt also does not mean accepting continuing marketing or a new partnership assignment. Technical delivery, subscription choice and commercial agreement are separate. Preserve the actual issue and resolution instead of turning email problem handled into collaboration authorized. This distinction is useful when a business conversation spans several tools: one system may confirm successful delivery while another still has no accepted proposal, and the report should not compress those states into a single positive status.`,['mailAllow']),
s('达人广告应使用具体机制名称','Use the specific mechanism name for creator advertising',
`在内容合作中，whitelisting 常被用于描述品牌通过获准方式使用创作者身份或内容投放广告。与其只说简称，不如说明拟议的平台机制、广告主体、内容对象与期间。

Meta 合作广告说明在2024年的官方介绍中描述品牌与创作者合作后运行合作广告。这里用它确认一种不同于邮件送达的广告语境，不将历史界面或市场范围写成当前所有账户都可用的保证。

达人广告授权指南进一步拆分内容条件、平台权限与实际投放。三层都应明确，但不必在第一次询问中要求所有能力。先说实际用途，让接收方判断愿意讨论什么，再按对应平台当前支持的机制推进。`,
`In creator work, whitelisting commonly describes authorized advertising with creator-related content or identity. Instead of using only the shorthand, specify the proposed platform mechanism, advertiser, content object and period.

The Meta partnership-ad overview described this advertising collaboration in an official 2024 introduction. It establishes a different context from email delivery here, not a promise that historical interfaces or market availability apply to every account today.

The creator ad-permission guide further separates content conditions, platform capability and actual advertising. Make all three intelligible without requesting every possible capability in an initial inquiry. Explain the real use first, let the recipient decide what they wish to discuss and follow the mechanism currently supported by the relevant platform. Naming the mechanism also improves handoffs: an operator can investigate the correct object instead of guessing which of several meanings a previous conversation intended.`,['metaCollab2024']),
s('把一个简称改写成五项信息','Replace the shorthand with five pieces of information',
`编辑建议的请求包含：在哪个系统、针对什么对象、希望允许什么动作、由谁使用、适用多久。再说明提出请求的原因以及对方可以如何提问或提出较小范围。这个框架不是平台官方表单。

一个假设请求可以写：“我们希望讨论，在指定广告平台，由本品牌广告主体于双方确认的期间使用某段演示内容。想先确认你是否愿意讨论这种用途；素材、版本、期间、费用与技术安排尚待共同确认。若你只接受较小范围，也欢迎说明。”发送前需要补齐真实对象，不能让接收者猜“某段内容”是哪一份。

这段话只是邀请讨论，不是已经成立的许可，也不要求接收人当场提供代码或访问能力。品牌应记录对方回答了哪部分，不能把“可以聊聊”扩大成全部条件通过。

例如，品牌可提出讨论在指定平台、指定期间，用一段已明确的演示内容运行某项广告。不要写成“给我们全部 whitelisting”，也不要把请求和已获确认混在同一句。

合作范围清单可以保存后续确认的版本、用途和负责人。技术能力不自动确认商业条件；商业上愿意讨论也不表示平台权限已经生效。记录要让没参加原对话的人仍能理解当前阶段，而不是只看到一句“对方说可以”。`,
`An editorial request can identify five things: system, object, proposed action, user of the capability and period. Explain why the request is made and how the recipient can ask questions or propose narrower scope. This is a communication framework, not an official platform form.

A hypothetical request might say: We would like to discuss using the identified demonstration through our advertiser identity on the named advertising platform for a mutually confirmed period. Are you open to discussing that use? Material, version, dates, fees and technical arrangements remain to be confirmed together. Please also tell us if you would prefer a narrower scope. Before sending, supply the actual object instead of leaving the recipient to guess which demonstration is meant.

This wording is an invitation to discuss, not an established license. It should not demand a code or access immediately. Record which part the recipient answered rather than expanding open to a conversation into acceptance of every proposed condition. The value of a clear opening is that it supports a meaningful response before technical configuration begins.

For example, ask to discuss advertising with a specified demonstration on a named platform for a defined period. Avoid asking for all whitelisting or merging a request and an accepted arrangement into one sentence.

The collaboration scope checklist can preserve confirmed versions, uses and owners. Technical capability does not settle commercial conditions; willingness to discuss does not activate platform permission. A record should make the stage intelligible to someone outside the conversation rather than leaving only they said yes. A clear request gives the recipient something concrete to answer and gives the requester a way to recognize when the answer concerns a smaller or different use.`),
s('同意、设置与实际使用是三个状态','Agreement, configuration and use are different states',
`接收人可以同意讨论，之后再确认条款；系统中也可能尚未完成设置。反过来，某个历史权限仍然可用，也不证明新用途已经谈妥。不要让一个“绿色”状态替代所有层面的确认。

状态可按具体任务记录，例如已提出请求、范围待确认、技术能力可用、尚未执行。它们是编辑描述，不应冒充所有平台都有的后台状态。实际界面名称和条件仍以当前系统为准。

若计划变化，指出变化对象：新素材、新广告主体、新市场或新期间。不是每项变化都需要同一处理，但都不应被简称掩盖。由相应负责人判断需要重新讨论什么，并把结果传给真正执行的人。`,
`A recipient can agree to discuss a proposal before confirming its terms, while configuration remains incomplete. Conversely, a historical capability still working does not establish acceptance of a new use. One green status should not stand for every layer of confirmation.

Describe the actual task state, such as request sent, scope unconfirmed, capability available or execution not started. These are editorial descriptions, not claims that every platform has those exact backend labels. Actual names and conditions depend on the current system.

When plans change, identify the changed object: material, advertiser, market or period. Different changes may require different treatment, but shorthand should hide none of them. The appropriate owner can determine which discussion is needed and transfer the result to the operator. This prevents a planning note from becoming an unintended instruction to begin work simply because one technical prerequisite happens to be available.`),
s('许可不自动包含所有内容权利','Permission does not automatically include every content right',
`内容使用权指南帮助区分作品、版本、用途、期限与相关条件。一个平台按钮可以支持某项动作，却不代表品牌拥有全部素材，也不自动确认第三方音乐或出镜人的所有适用条件。

同样，不应因为一份内容被称作 UGC，就推定任何人都可随意重用。请求中应说明品牌希望怎样使用，以及需要什么依据。若问题超出团队能确定的范围，交给适当专业人员，不把本文当作通用法律判断。

品牌与创作者都可以提出较小用途或替代版本。清楚范围通常比要求一个含义不明的永久权限更容易讨论。要点是让实际内容、实际使用与参与方理解一致，而不是用术语掩盖尚未解决的条件。`,
`The content usage-rights guide distinguishes work, version, use, period and relevant conditions. A platform control can enable an action without transferring every asset or establishing all conditions for third-party music and contributors.

Similarly, calling material UGC does not establish unrestricted reuse. Explain how the brand wants to use it and which basis is needed. Where the question exceeds the team’s competence, use the appropriate professional rather than treating this article as a universal legal determination.

Both parties can propose narrower use or another version. Defined scope is generally easier to discuss than a permanent capability whose meaning remains unclear. Align the material, operating use and participants’ understanding instead of using terminology to conceal unresolved conditions. This also helps a production colleague know whether a proposed translation, recut or new placement belongs to the conversation already held or requires another clearly stated request.`),
s('两种请求，看起来相同却交给不同人','Two similar-looking requests belong to different owners',
`以下为编辑假设。项目邮件里的确认信收不到，团队A说需要 whitelisting；媒体团队B也用同一个词，实际想讨论创作者广告权限。若转给同一个人却不解释，两项工作可能互相误导。

A应说明邮件系统与具体送达问题，交由适当负责人检查。B应说明广告平台、拟议身份或内容、用途与期间，交给有权讨论合作的人。解决A不等于B获批，B同意讨论也不能证明A已正常送达。

最后分别保存处理结果和未解决项。这个例子不是实际客户事件，也不描述可用于任意平台的设置步骤。它说明为什么“哪个系统、允许什么”比一句常见英文更能推动工作。`,
`Consider an editorial hypothetical. Team A cannot receive a project confirmation email and asks for whitelisting. Team B uses the same word to request a conversation about creator advertising. Routing both without explanation can confuse two different jobs.

A should identify the email system and delivery issue for the appropriate owner to examine. B should identify advertising platform, proposed identity or content, use and period for the party able to discuss that arrangement. Resolving A does not approve B, and B agreeing to discuss does not establish A’s delivery.

Keep the outcomes and unresolved items separately. This is not an actual client event or a settings procedure for every platform. It shows why which system and what action moves work forward more effectively than familiar English alone. The recipient can then ask a precise follow-up instead of either ignoring the request or granting an unrelated capability that nobody needed.`),
s('用准确语言结束这次沟通','Close the conversation with an accurate record',
`最终记录采用真实机制和明确动作：谁提出、对什么对象、确认了什么、哪里仍未知、下一步由谁负责。可以保留 whitelisting 作为检索用语，但不要让它成为唯一说明。

QuickKOL 可以帮助理解合作需求、研究相关作品并准备个性化联系。它不替任何参与者授予平台权限，也不会将一句流畅英文自动变成商业同意。

当团队能说清允许什么，沟通才真正完成了定义工作。后续执行仍需对应系统、参与方和实际用途的确认，而不是沿用对简称的想象。`,
`Close with the actual mechanism and action: requester, object, what was confirmed, unresolved conditions and next owner. Whitelisting can remain a search term, but should not remain the only explanation.

QuickKOL can help interpret a proposed partnership, research relevant work and prepare personalized contact. It does not grant platform permissions for any participant or turn fluent wording into commercial acceptance.

When a team can say exactly what is being allowed, the definition work has become useful. Execution still follows the relevant system, parties and actual use rather than assumptions attached to the shorthand.`)
],
table:{title:p('同一个词的不同语境','Different contexts behind one word'),headers:[p('语境','Context'),p('应明确','Make explicit'),p('不能推导','Does not establish')],rows:[[p('技术许可列表','Technical allowlist'),p('系统、政策与允许对象','System, policy and allowed objects'),p('达人内容使用权','Creator content rights')],[p('邮件排查','Email troubleshooting'),p('邮件来源及实际送达问题','Sender and actual delivery problem'),p('被阅读、回复或同意合作','Reading, reply or partnership acceptance')],[p('达人广告','Creator advertising'),p('平台机制、对象、用途与期间','Platform mechanism, object, use and period'),p('账号所有权或无限使用','Account ownership or unrestricted use')]],note:p('语境解释和编辑请求框架，不是设置指南或统一法律条款。','Context explanation and editorial request framework, not settings instructions or universal legal terms.')},
tool:{title:p('权限请求改写清单','Permission-request rewrite checks'),intro:p('每项请求都能回答具体问题。','Make each request answerable.'),items:[p('哪个系统？','Which system?'),p('允许哪个对象执行什么动作？','Which object and action?'),p('谁请求、谁使用、谁能确认？','Who requests, uses and can confirm?'),p('适用用途与期间是什么？','Which use and period?'),p('同意、设置与执行处于什么阶段？','What are the agreement, configuration and execution states?'),p('变化与结束由谁处理？','Who handles changes and ending?')]}
});
