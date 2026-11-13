import {makePost,p,s,link} from './authoring.mjs';
export default makePost({id:20,
summary:p('为达人合作建立 Facebook 主页，不只是填名称和上传图片，还要让观众分清谁主办、谁参与、活动条件在哪里，以及项目结束后谁继续负责。','A Facebook Page for creator collaboration needs more than a name and image: identify organizer, participants, conditions and who remains responsible after the project.'),
description:p('Create Facebook page 怎样服务达人合作：准备公共身份、项目信息与联系路径，核对账号权限和内容使用，安排发布前检查及活动后维护。','Create a Facebook Page around a creator campaign with clear public identity, project information, contact routes, scoped access and an after-campaign maintenance plan.'),
coverAlt:p("花店工作人员与创作者一起检查相机取景","A flower-shop worker and a creator check a camera framing together"),
answer:p('为达人合作创建 Facebook 主页时，先确定它代表谁、观众为什么需要它，以及谁在活动结束后维护。准备获准名称与图片、准确项目说明、相关条件和明确联系路径；由适当负责人通过 Facebook 当前官方流程创建并检查实际访问权限。不要用创作者姓名暗示未确认的代言关系，也不要把新主页当作自动带来触达的工具。创建完成只是起点，公开信息准确、可访问和有人负责，才使它成为可靠的合作承接位置。','Before creating a Facebook Page for a creator campaign, decide whom it represents, why the audience needs it and who maintains it afterward. Prepare an authorized name and images, accurate project information, applicable conditions and a clear contact route. An appropriate owner should use Facebook’s current official creation process and verify actual access. Do not imply an unconfirmed endorsement through a creator’s name or treat a new Page as an automatic distribution engine. Creation is a starting point; accurate, accessible information and continuing responsibility make it a useful campaign destination.'),
sections:[
s('先判断是否真的需要新主页','Decide whether a new Page is needed',`新的达人合作不一定需要新的 Facebook 主页。已有品牌主页能否承接项目、创作者账号是否负责表达、独立活动入口是否有必要，应先讨论。多个相似页面可能让观众不知道哪个信息仍然有效。

达人 Brief 可以说明内容发布与承接各自任务。创作者负责解释，不代表必须长期维护品牌活动入口；品牌需要一个项目页面，也不表示应该以创作者个人身份建立。

只有公共用途清楚、负责人明确且后续能够维护时，新主页才可能值得建立。先给出“为什么已有入口不能解决”的具体答案，再开始填资料，可以减少活动结束后留下无人负责页面的情况，也避免为了形式完整而增加不必要的观众选择。`,
`A new creator collaboration does not necessarily need a new Facebook Page. Discuss whether an existing brand Page can receive the audience, whether the creator account supplies the explanation and whether a distinct event destination is necessary. Several similar pages can make current information harder to identify.

The creator brief distinguishes publication from the receiving task. A creator explaining the offer is not automatically responsible for maintaining a brand destination indefinitely. Likewise, a brand needing a project Page should not create it as though it were the creator’s personal identity.

A new Page is most useful when its public purpose, owner and continuing maintenance are clear. State why an existing destination cannot do the work before preparing the fields. This reduces abandoned campaign pages and avoids giving viewers unnecessary choices merely to make the project appear more comprehensive. The decision concerns a real information need, not a requirement to establish a separate presence for every partnership.`),
s('名称先回答代表谁','Make the name explain representation',`主页名称、头像与简介应让观众分清品牌、活动和创作者的关系。联合活动名称也需要适当依据，不把愿意讨论、一次寄样或短期出镜扩写成长期品牌代表身份。

Meta 的新主页体验说明在 2021 年介绍了个人资料与公共主页之间的导航以及任务访问安排。它提供历史背景，但不等于当前每个账号的完整建立步骤，也不证明一张主页具有法律授权。

本次查阅的创建与访问帮助页跳转到登录页面，因此不提供未经确认的固定按钮、字段顺序或资格门槛。实际创建由适当账号负责人按当前官方界面完成，重点核对所创建对象和公开身份是否正确。`,
`The name, avatar and description should distinguish the brand, event and creator relationship. A joint campaign name needs an appropriate basis. Willingness to discuss, a sample delivery or a short appearance should not become a claim of continuing brand representation.

Meta’s new Pages experience announcement described navigation between profiles and public Pages and task-based access in 2021. This is historical context, not a complete current creation process for every account or evidence that a Page has legal authority.

The creation and access help pages reviewed for this article redirected to login. Accordingly, this guide does not invent fixed buttons, field order or eligibility thresholds. An appropriate account owner should follow the current official interface and verify the object and public identity being created. This limitation matters because following an outdated screenshot perfectly can still produce the wrong public destination or leave responsibility unclear, even when the visible page looks polished.`,['fbPagesHistory']),
s('准备观众到达后需要的信息','Prepare what arriving viewers need',`把简介写成项目说明，而不是只有宣传口号。谁发起、提供什么内容、面向什么场景、活动条件在哪里、问题由谁回答，都应有清楚路径。具体信息以适用项目为准，不必为了填满页面收集无关资料。

创作者内容中的日期、产品型号、优惠限制与主页保持一致。若作品介绍某个单独活动，不要把观众直接带到没有解释的全品牌信息页，让其重新寻找承诺内容。

可以用简短项目摘要连接到完整条件，避免在简介里堆积难读规则。摘要不能删除关键限制或创造新的保证；更完整资料也应能在手机上找到。主页应降低理解成本，而不是成为创作者解释之后的另一个信息谜题。`,
`Write the description as project information rather than only a slogan. Provide a clear route to the organizer, content offered, relevant context, conditions and question owner. Let the actual project determine the information needed instead of collecting unrelated material to fill every available field.

Dates, product models, offer limits and other claims should match the creator’s piece. If the content explains a specific activity, avoid sending people to a broad brand destination where they must search again for the promised information.

A concise project summary can lead to fuller conditions without making the description unreadable. The summary should not remove a material limitation or introduce a new guarantee, and the fuller information should remain findable on mobile. The Page ought to reduce the work of understanding the offer after a creator has explained it, rather than become another information puzzle between audience interest and an appropriate next action.`),
s('按实际负责人安排访问','Assign access around actual responsibility',`谁能编辑公开资料、谁准备内容、谁回答问题和谁决定关闭项目，需要明确。不要因为外部创作者参与一次拍摄，就默认其需要完整管理权限，也不要靠共享个人密码解决团队协作。

平台实际提供哪些访问方式，由负责人在当前界面和适用说明中确认。任务权限、组织流程与合同授权不应混为一谈；能够点击发布，不等于已经获准对外代表品牌确认所有商业条件。

FTC 的企业信息保护指南强调只保留工作所需信息并限制访问。项目交接时核对适当人员是否能继续工作、离开人员是否仍有不必要访问，而不把所有账号资料复制到一个广泛分享的交接文档。`,
`Identify who can edit public information, prepare material, answer questions and decide what happens when the project ends. An external creator joining one shoot does not automatically need unrestricted management access. Sharing a personal password is not an appropriate substitute for team coordination.

The owner should verify which access options the current interface and applicable guidance provide. Platform capability, organizational procedure and contractual authority are different. Being able to publish does not establish authority to confirm every commercial condition on the brand’s behalf.

FTC’s business information-security guide emphasizes retaining only needed information and limiting access. At handoff, check whether appropriate people can continue the work and whether departing staff retain unnecessary access. Do not copy every account detail into a widely circulated document. A practical handoff names responsible roles and dependencies while keeping secrets and unrelated personal information outside the ordinary campaign record.`,['ftcPrivacy']),
s('把达人素材的用途单独确认','Confirm the use of creator material separately',`主页封面、头像、欢迎内容或置顶信息若使用达人素材，需要确认具体用途。一次账号发布的合作，不应自动扩展为永久主页形象、广告或其他渠道可自由复用。

创作者传播分工方法区分制作、发布、品牌使用与付费传播。为主页准备资料时，也按实际用途说明文件、版本、期限和必要条件，不把拿到源文件当作全部权限已经解决。

观众可能从单张图片理解出代言关系，因此不仅要核对版权，也要检查文案和上下文是否准确。创作者曾经参与活动，不代表所有后续项目都可继续借其身份表达。改版、换产品或活动结束时，都应重新检查相关资料是否仍适合公开展示。`,
`If creator material appears in a cover, avatar, welcome piece or highlighted information, confirm that specific use. A collaboration for one account post should not silently expand into a permanent Page identity, advertising or unrestricted use elsewhere.

The creator distribution-role method separates production, publication, brand use and paid distribution. Prepare Page assets with the actual files, versions, period and conditions in mind. Receiving a source file does not establish every permission.

A single image may lead viewers to infer an endorsement relationship, so check wording and context as well as rights. Previous participation in one event does not make the creator a representative of every later project. Revisit public material when the offer changes, a product is replaced or the activity ends. The objective is a destination that continues to describe the real collaboration, rather than one whose appearance gradually implies a broader relationship than either party agreed.`),
s('在手机上检查观众的到达路径','Check the arrival path on mobile',`从创作者内容计划使用的链接进入主页，检查名称、首屏信息和实际目的地。手机可见部分可能与编辑窗口不同；图片裁切、长简介与外部跳转都可能影响观众理解。

不要只确认页面能打开。检查活动日期是否有适当时区、必要条件是否可达、联系路径是否指向正确负责人。任何可能涉及登录、地区或年龄的限制，也应按实际情况记录，而不是假定所有观众看到相同结果。

如果页面不能承担关键任务，先修正或选择明确替代。测试记录可以说明检查时间、设备与限制，但不应写成所有环境永久可用的保证。创作者准备上线时，需要知道最终采用哪个入口，避免成片或文案继续保留过期链接。`,
`Open the Page from the link planned for the creator’s content and inspect the name, first visible information and actual destination. Mobile presentation may differ from the editing window. Cropping, long descriptions and external redirects can all affect understanding.

Do more than confirm that something loads. Check whether dates need a time zone, necessary conditions are reachable and the contact route reaches the correct owner. Record actual login, geography or age restrictions where relevant instead of assuming every viewer sees the same result.

If the Page cannot perform a critical task, correct it or choose a clear alternative before release. A test record can state time, device and limitation without guaranteeing permanent availability in every environment. The creator also needs the final chosen destination so the finished material and caption do not retain an expired link. This is an operational check of the campaign path, not proof that the Page will generate a particular amount of audience activity.`),
s('把商业关系写进最终内容','Include commercial context in the final material',`主页属于品牌，不意味着每一条由创作者转发或出镜的内容都已经说明了关系。FTC 的达人披露指南要求在适用内容里清楚表达相关商业关系，不把它藏在难以找到的其他页面。

本篇引用美国指南的原则，不把某个标签当作全球通用完整答案。具体地区、形式和平台设置需要由相关负责人核对。主页可以提供项目背景，却不能代替创作者发布对象中的必要说明。

品牌也应确认公开描述与实际体验一致。不要用创作者照片暗示其试过未使用的产品，或把付费合作包装成完全独立的发现。准确关系有助于观众理解推荐，也帮助双方避免对项目角色产生不同解释。`,
`A Page belonging to the brand does not mean every creator appearance or repost already explains the relationship. FTC’s influencer disclosure guide calls for clear commercial context in the applicable content, rather than hiding it on a separate difficult-to-find page.

This article draws on a US resource without treating one label as a complete worldwide answer. Relevant owners should check the actual region, format and platform settings. A Page can provide project background without replacing necessary explanation in the creator’s publication object.

The brand should also keep public descriptions consistent with actual experience. Do not use a creator’s image to imply they tried a product they have not used, or present paid work as an entirely independent discovery. Accurate context helps viewers understand the recommendation and reduces conflicting interpretations of project roles. It should survive later edits to the Page instead of disappearing when an introductory campaign post is no longer prominent.`,['ftcDisclosure']),
s('为活动结束后的页面安排责任','Plan responsibility after the event',`还可以为公开资料设一次交接前检查：谁最后核对名称和日期，谁确认创作者关系没有被扩写，谁接收无法在页面解决的问题。它不是额外的平台资格要求，而是团队自己的职责安排。若没有人能承担这些任务，应先缩小页面用途或使用已有维护路径，不要通过建立新入口把责任问题留给未来。

项目结束不等于页面可以无人管理。确定哪些信息继续有效、哪些优惠或日期需要更新，以及观众仍提出问题时由谁接收。是否保留、调整用途或停止使用，由适当负责人按实际项目决定，不在这里自动执行删除。

达人素材的展示条件、外部链接和联系安排也要一起复查。活动已经结束，却仍使用“马上报名”或过期权益，可能让新到访观众误解。旧内容可保留历史背景，但应清楚说明时期。

如果交给新的项目团队，保留当前入口、公开用途、相关许可和待处理事项。不要仅交一份图片文件夹；下一位负责人需要知道这个主页为什么存在，以及哪些条件改变时应重新审阅。`,
`Set a review before handoff: who last checks the name and dates, who confirms that the creator relationship has not expanded in the description, and who receives questions the Page cannot resolve? This is an editorial responsibility arrangement, not an additional platform eligibility rule. If nobody can perform those tasks, narrow the destination’s purpose or use an existing maintained route. Creating another public object should not be a way to postpone the underlying ownership question until after the audience has already arrived.

An event ending does not make an unattended Page harmless. Decide which information remains current, which offers or dates need updating and who receives continuing questions. Whether to retain, repurpose or discontinue it belongs to an appropriate owner; this guide performs no deletion.

Review creator-material conditions, external links and contact arrangements together. An ended activity still saying register now or displaying expired benefits may mislead new arrivals. Historical content can remain when its period is clear.

If a new project team takes over, retain the current destination, public purpose, relevant permissions and unresolved issues. An image folder alone is not enough. The next owner needs to understand why the Page exists and which changed conditions require review. Planning this continuity before creation helps the destination remain useful without transferring an indefinite maintenance obligation to a creator whose contracted work has already finished.`),
s('用工作坊场景检查建页方案','Rehearse the plan with a collaboration workshop',`假设品牌与创作者共同举办一次产品使用工作坊。例子不是实际客户。主页应说明组织者、活动任务、时间与条件，创作者作品负责解释现场能学到什么，报名或咨询路径则由品牌适当人员维护。

团队先核对已有品牌主页是否够用；确需新入口时，才准备获准名称、图片和资料。公开信息不暗示创作者担任品牌所有产品的长期代表，素材使用也按本次范围确认。

创建后分别检查观众路径和工作访问，活动后按计划更新。一个可靠主页的结果，是观众能理解这项真实合作并找到合适下一步，而不是单纯多出一个账号、一个粉丝目标或一个无人继续负责的宣传入口。`,
`Suppose a brand and creator run a product-use workshop. This is not an actual client case. The Page explains organizer, task, time and conditions; creator work explains what attendees can learn. Appropriate brand staff maintain registration or inquiry.

First determine whether the existing brand Page is sufficient. Only prepare an authorized name, images and information for a new destination if there is a real need. Public wording should not imply that the creator represents every brand product indefinitely, and material use should match the agreed project.

After creation, check audience access and working access separately, then update information according to the after-event plan. A reliable Page lets viewers understand a real collaboration and find a suitable next step. Success is not simply another account, a new follower target or a promotional destination nobody remains responsible for. This rehearsal makes the creation decision reviewable before anyone starts treating the Page as the permanent public home of an undefined relationship.`)
],links:[link('达人 Brief','creator brief','write-a-useful-campaign-brief'),link('创作者传播分工方法','creator distribution-role method','creator-media-strategy-distribution-roles')],
table:{title:p('合作主页建立前的决定','Decisions before creating the campaign Page'),headers:[p('决定','Decision'),p('需要明确','Clarify'),p('不要默认','Do not assume')],rows:[[p('是否新建','Create or reuse'),p('已有入口不能解决的任务','The task an existing destination cannot solve'),p('每次合作都需新主页','Every collaboration needs a new Page')],[p('公共身份','Public identity'),p('品牌、活动与创作者关系','Brand, activity and creator relationship'),p('出镜等于长期代言','An appearance means continuing endorsement')],[p('访问','Access'),p('实际工作与负责人','Actual work and owner'),p('参与者都需完整控制','Every participant needs full control')],[p('后续','Continuity'),p('过期信息与维护安排','Expired information and maintenance'),p('活动结束就无人负责','Responsibility ends with the event')]],note:p('项目规划框架；创建帮助页本次跳转登录，未验证当前固定界面步骤，也未创建真实主页。','A project-planning framework. Creation help redirected to login; fixed current interface steps were not verified and no real Page was created.')},
tool:{title:p('公开主页前','Before making the Page public'),intro:p('检查身份、内容与持续责任。','Check identity, information and continuing responsibility.'),items:[p('确认新主页有实际用途。','Confirm a real need for a new Page.'),p('名称与关系有适当依据。','Support the name and relationship accurately.'),p('准备准确项目资料与联系路径。','Prepare accurate project details and a contact route.'),p('核对访问及素材用途。','Verify access and material use.'),p('从手机检查实际到达路径。','Check the actual mobile arrival path.'),p('确定活动后维护负责人。','Name an after-event maintenance owner.')]}
});
