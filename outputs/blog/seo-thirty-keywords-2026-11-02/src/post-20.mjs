import {p,s,link,makePost} from './authoring.mjs';
export default makePost({id:20,
summary:p('研究 influencer agency 时，先核对机构代表的主体、能确认的事项与实际执行角色，再安排联系和交接。','When researching an influencer agency, establish the represented party, confirmation authority and execution role before arranging contact and handoff.'),
description:p('Influencer agency 品牌合作指南：区分品牌服务、人才代表和制作角色，确认谁代表谁、谁能批准条件，以及变更由谁处理。','Understand influencer agency relationships: distinguish brand service, talent representation and production, then confirm authority, approvals and change ownership.'),
coverAlt:p('两位虚构的制作与合作人员在明亮画廊勘景，一人带奶油色文件夹，另一人拿小型相机讨论拍摄区域。','Two fictional production and partnership professionals scouting a bright gallery, one carrying a cream folder while the other holds a small camera to discuss the filming area.'),
answer:p('Influencer agency 可能为品牌执行营销任务，也可能代表创作者，或承担制作与投放工作。品牌不能只凭机构名称判断它代表谁、能接受什么条件。先确认本次合作中的主体、联系角色、拟议范围、能批准的事项与执行负责人，再讨论报价和时间。机构网站、名单和案例可作为研究入口，但不能替代对某位创作者当前代表关系、可用性及具体授权的确认。',
'An influencer agency may execute work for a brand, represent a creator or handle production and advertising. Its name alone does not establish whom it represents or which conditions it can accept. Confirm the parties, contact role, proposed scope, matters it can approve and execution owner before discussing price and schedule. Websites, rosters and cases are research starting points, not confirmation of a particular creator’s current representation, availability or authorization. This guide concerns who serves whom in the proposed relationship, rather than a checklist for purchasing every agency service.'),
links:[link('机构服务验收指南','agency service-acceptance guide','influencer-marketing-agency-service-acceptance'),link('合作范围清单','collaboration scope checklist','creator-contract-scope-checklist'),link('平台记录交接指南','platform record-handoff guide','influencer-platforms-record-interoperability')],
sections:[
s('把机构称呼拆成此次合作的角色','Translate the agency label into this engagement’s role',
`同一家企业可能有不同业务团队，名称也可能同时出现agency、management或studio。研究应围绕这次拟议关系：谁是服务接受方，谁是被代表方，谁负责完成工作。不要将公司总体介绍当作具体项目已经确认的结构。

机构服务验收指南讨论交付什么与如何检查，本篇先处理关系对象。品牌购买执行服务，与通过代表方邀请创作者，是不同沟通路径；制作团队能交文件，也不一定能替出镜者接受所有后续用途。

可以先画一张简单关系表，分别列品牌、机构、创作者及其他必要参与者。角色应采用对方确认的范围，不自行赋予更多权限。表格不是法律结论，而是让团队知道接下来应该把哪个问题交给谁。`,
`A business may have several teams and use agency, management or studio in its descriptions. Research the proposed relationship: service recipient, represented party and work performer. A corporate overview is not confirmation of the structure for this particular assignment.

The agency service-acceptance guide addresses outputs and evaluation; here the first question is the relationship. Buying execution and inviting a creator through representation are different contact paths. A production team delivering files does not necessarily accept every later use for a person appearing in them.

Create a simple relationship record for brand, agency, creator and other necessary participants. Use roles the relevant parties confirm rather than assign broader authority yourself. This is an operating aid, not a legal determination. Its purpose is to make the next question reach the person able to answer, including when that answer is that another participant must join before a condition can be confirmed.`),
s('人才代表：名单只是讨论入口','Talent representation: a roster starts an inquiry',
`WME 数字业务说明公开介绍代表数字创作者，并围绕品牌合作等业务提供支持。它说明一种人才代表定位，不证明某位公开人物当前每项合作都由同一个团队处理，也没有给本篇任何实际报价或可合作承诺。

品牌研究可以从官方公开业务入口确认如何提出相关询问，并说明具体任务。不要绕过已确认代表关系去猜私人联系，也不要认为找到某个社交账号就知道谁能讨论商业条件。

若对方说明只处理某个平台、地区或某类业务，记录这个边界。一个人可能有不同类型合作安排，具体情况要确认。公开名单不是授权文件，作品也不是空闲档期；把研究与实际商务状态分开，有助于避免后续排期建立在假设上。`,
`The WME digital-business overview publicly describes representing digital creators and supporting areas including brand partnerships. It establishes a talent-representation positioning, not that every activity of a public individual is handled by one team. It supplies no quote or availability commitment for this article.

Use appropriate official business routes to ask about the assignment. Do not bypass confirmed representation by guessing private contact details or assume that finding a social account identifies the person able to discuss commercial conditions.

If a contact handles only a platform, market or business type, retain that boundary. People can have different arrangements, and the specific situation needs confirmation. A public roster is not an authorization instrument, and work examples are not an available calendar. Separating research from business status prevents scheduling around assumptions. It also keeps a colleague from presenting an initial inquiry as a confirmed discussion with every party needed for the proposed work.`,['wmeDigital']),
s('品牌服务：执行委托不等于替创作者决定','Brand service: an assignment does not decide for the creator',
`Whalar 机构业务说明面向品牌介绍创作者与社交服务，包括活动执行、内容与付费分发等。这里将其作为业务定位示例，不采用其营销效果数字作普遍收益预测，也没有登录测试其服务。

品牌委托的机构可以承担约定范围内研究、沟通或运营，但创作者是否接受工作、具体内容和使用条件，仍需相应方确认。品牌内部批准预算，不自动代表外部伙伴已接受；发出邀请也不等于完成合作。

记录哪些事项机构可直接处理，哪些需要品牌决定，哪些要与创作者或其代表讨论。不要让一句“我们代理处理”隐藏了所有责任。清楚边界也能减少反复转发，让执行团队知道哪些内容可以继续准备，哪些仍是待确认提议。`,
`The Whalar agency-business overview describes creator and social services for brands, including campaign execution, content and paid distribution. It is a positioning example here, not a universal forecast based on marketing performance claims or a logged-in service test.

An agency appointed by a brand can perform agreed research, communication or operations. Creator acceptance, content and use conditions still require the appropriate parties. Internal budget approval does not establish external acceptance, and an invitation is not a completed partnership.

Record what the agency handles directly, what the brand decides and what requires the creator or representative. We handle it should not conceal all responsibility. Defined boundaries can reduce repeated forwarding, making it clear which preparations can proceed and which remain proposals. The relevant question is the capability and responsibility in this engagement, rather than the maximum range of services a business advertises publicly.`,['whalarRole']),
s('联系、讨论、确认与执行分开记录','Record contact, discussion, confirmation and execution separately',
`联系人可能只负责接收资料，另一人讨论报价，最终确认又需要不同负责人。询问角色是为了准确交接，不是把每个常规动作变成额外审批。已有清楚安排时，应按实际授权继续。

合作范围清单可以保留对象、交付、用途、期间与确认依据。不同问题有不同状态：已回复、愿意讨论、条款已确认、技术准备可用和实际完成，都不应统一叫“通过”。

若收到转介，保留谁转给谁以及针对什么任务。不要把一个友好介绍写成完整代表证明。后续如发现联系人范围不同，修正记录并将具体问题交给适当方，而不是反复要求同一个人确认其无法确认的条件。`,
`A contact may receive information while another person discusses fees and another confirms a condition. Asking about role supports accurate handoff, not an invented approval gate for every routine action. Where arrangements are clear, proceed within the actual authorization.

The collaboration scope checklist retains object, delivery, use, period and confirmation basis. Replied, open to discussion, terms confirmed, technical preparation available and completed are different states rather than one approved flag.

For a referral, retain who referred whom and for which task. A friendly introduction is not complete evidence of representation. If a contact’s scope differs from the assumption, correct the record and route the specific question appropriately instead of repeatedly demanding an answer they cannot give. A concise role note can preserve a useful relationship without forcing the person to become responsible for every matter connected with the creator or brand.`),
s('费用和信息流也应看得懂','Make fees and information flows understandable',
`品牌应知道自己收到的是执行服务报价、代表方提出的合作条件，还是包含多个项目的组合。按本次实际安排询问计费主体、工作范围、付款对象与需要的记录，不从佣金或服务费名称推断所有规则。

预算核对时，将不同贡献按可理解范围呈现，避免同一项工作在多处被当作独立内容。若有第三方制作或媒体团队，说明相关信息由谁提供，以及谁负责回答变更问题。

如果某个业务同时与合作两侧有联系，先确认它在本次任务中承担哪种角色，而不是自动认定关系有问题或完全没有影响。品牌可以询问推荐依据、费用安排及需要说明的关系，让实际决定者理解情况。共同集团、类似邮箱或共享活动照片，都不能单独证明具体权限。

记录本次主体和范围，避免将一个团队的确认扩展到另一团队。若商业安排还不清楚，可以先保留研究进展，再让相应负责人说明；不要用猜测填满预算表，也不把正常澄清写成对机构的不诚信指控。

资料共享也需要与任务相称。机构研究可以使用适当的公开或获授权资料，不必将私人联系方式、完整后台或无关个人信息转给所有参与者。接收人需要的是足以完成本次工作的依据，不是无限范围的数据访问。`,
`A brand should understand whether it receives an execution-service quote, conditions proposed through representation or a combined arrangement. Ask about invoicing entity, scope, payee and necessary records for the actual proposal rather than infer every rule from a commission or service-fee label.

Present contributions clearly when reconciling a budget, avoiding the same work appearing as separate content in several places. If production or media suppliers participate, identify information ownership and the person answering change questions.

If a business has connections on both sides, clarify its role in this assignment rather than assume the overlap is improper or has no relevance. Ask about recommendation basis, fee arrangements and relationships the decision-maker needs to understand. Shared ownership, similar email addresses or photographs from one event do not individually establish specific authority. The question is what arrangement applies here and what information supports that understanding.

Record the entity and scope instead of extending one team’s confirmation to another. Where an arrangement remains unclear, retain the research stage and ask the appropriate owner to explain. Do not fill a budget with guesses or describe ordinary clarification as an allegation of dishonesty. A concise explanation can let the brand continue within known conditions while leaving the unresolved part visible, without forcing either an unsupported accusation or unsupported reassurance.

Share information proportionately to the task. Appropriate public or authorized research does not require distributing private contact details, entire dashboards or unrelated personal information to everyone involved. A recipient needs enough basis for this assignment, not unrestricted data access. Where several companies work together, an intelligible information path is particularly useful: the person receiving the final report should know the original source and permission scope rather than assume every participant independently observed the same data.`),
s('变更时确认谁需要重新参与','Identify who must participate when the request changes',
`增加内容、修改用途、延长期间或改变广告主体，可能让原先的沟通范围不再足够。先说明变化，再让相关方确认需要哪些工作和条件。不能因为项目里已有机构，就假设它自动代替所有人接受追加。

也不要让执行团队通过反复更换文件名掩盖新需求。保留原版本、变化说明、受影响事项与负责人。已有范围可以继续的部分，与新提议分别记录，避免整个项目只剩模糊的“还在修改”。

如果机构人员更换，交接应保留已确认与待确认内容，而不是要求新同事从聊天碎片中重建全部决定。品牌也应提供同等清楚的内部交接，不能只要求外部团队保持连续。`,
`Additional content, changed use, an extended period or a different advertiser may exceed the original conversation. Describe the change and let relevant parties confirm the work and conditions needed. Agency participation does not automatically accept an addition for everyone.

Repeated filename changes should not conceal a new request. Retain original version, change description, affected matters and owner. Separate work that can continue within the existing scope from the new proposal instead of leaving the whole project labeled revisions ongoing.

When agency personnel change, preserve confirmed and unconfirmed matters so the new colleague does not reconstruct every decision from conversation fragments. The brand owes the same clarity in its internal handoff. Continuity should not depend on one person remembering whether a creator, representative, brand owner or operator made a particular decision, especially when the material is later used in another channel.`),
s('专业标签不会消除内容责任','A professional label does not remove content responsibility',
`FTC 2023 年指南更新说明将广告主、代言者与中介的潜在责任作为修订内容之一。它提醒读者参与关系与内容责任需要认真理解，但本篇不是对具体个案、全球法律或某家机构的责任判定。

品牌应提供可靠产品事实，参与方按任务检查内容与必要关系说明。不能因为另一方说“专业团队会处理”，就让已知错误继续进入成片；也不能把正常提出问题解释为拒绝合作。

实际审阅中，将事实、体验、版本与拟议用途分别交给能处理的人。机构可以帮助组织流程，但不能用一个头衔把未经核验的产品主张变成已证实事实。发现缺口时，记录具体问题与下一步，比寻找一个可以替所有人负责的称呼更有用。`,
`The FTC 2023 guide-update announcement identifies potential responsibilities of advertisers, endorsers and intermediaries among its revisions. It underscores the need to understand relationships and content responsibilities without determining a particular case, worldwide law or an agency’s liability here.

The brand supplies reliable facts and participants examine content and relationship information within the assignment. A professional team will handle it should not allow a known inaccuracy into a final asset. Raising an ordinary question should not be interpreted as refusing the partnership.

Route facts, experience, versions and intended use to people able to address them. An agency can organize the process without turning an unverified product claim into an established fact through its title. Record the gap and next step rather than search for one label that makes everyone else’s responsibility disappear. A clear operating relationship helps each party make the contribution it can actually support.`,['ftcUpdate2023']),
s('示例：品牌机构与人才代表同时参与','Example: a brand agency and talent representative participate together',
`以下为编辑假设。品牌委托机构协调产品演示，同时通过创作者代表讨论出镜与发布。品牌机构能整理Brief和内部反馈；代表方负责讨论其确认范围内的合作条件；创作者仍需理解并接受相应内容任务。

后来媒体团队提出广告复用。原记录如果只写“机构已同意”，就无法知道哪一方确认了什么。团队应指出新用途，转给适当参与者讨论，再核对内容、期间与实际技术安排，而不是从旧回复推导全部许可。

平台记录交接指南帮助将素材、发布、使用与观察连接起来。这个假设不描述任何具名机构的实际合同，说明的是为什么同一项目里有两家机构时，角色与对象必须保留。`,
`Consider an editorial hypothetical. A brand appoints an agency to coordinate a demonstration and discusses appearance and publication through a creator representative. The brand agency prepares the brief and internal feedback; the representative discusses conditions within confirmed scope; the creator still needs to understand and accept the content assignment.

A media team later requests advertising reuse. Agency agreed cannot reveal which party confirmed what. Identify the new use, route it to appropriate participants and confirm content, period and technical arrangements rather than infer all permissions from an earlier reply.

The platform record-handoff guide connects assets, publication, use and observation. This hypothetical does not describe a named agency’s actual contracts. It shows why roles and objects need to remain visible when two agencies participate in one project. The additional use can be discussed without rewriting the earlier production conversation as something broader than it was.`),
s('用角色图支持下一步联系','Use the relationship record for the next contact',
`交接包括主体、联系人、代表或服务范围、能确认事项、工作负责人及未解决问题。每条确认保留对象和来源，不用机构知名度替代具体依据。

QuickKOL 可以帮助理解Brief、研究作品与适当公开联系路径。它不替机构或创作者确认商业授权，也不保证任何一方接受邀请。下一步应与实际角色一致；多个联系人并存时，分别记录各自负责的问题，避免向不同人发送互相矛盾的请求。

研究 influencer agency 的关键，是把一个宽泛称呼变成清楚关系。知道谁服务谁、谁能确认什么，报价、内容和执行讨论才有共同起点。`,
`Transfer entity, contact, representation or service scope, matters they can confirm, work owner and unresolved questions. Preserve the object and source behind a confirmation instead of substituting agency recognition for evidence.

QuickKOL can help interpret a brief, research work and identify appropriate public contact routes. It does not establish commercial authority for an agency or creator or guarantee acceptance. The next action should follow the actual role. Where several contacts exist, retain which question belongs to each rather than sending conflicting requests to different people.

Researching an influencer agency means turning a broad label into an intelligible relationship. Knowing who serves whom and who can confirm what gives price, content and execution discussions a shared starting point.`)
],
table:{title:p('机构关系的四项记录','Four records for an agency relationship'),headers:[p('记录','Record'),p('问题','Question'),p('避免假设','Avoid assuming')],rows:[[p('服务或代表主体','Service or represented party'),p('本次为谁提供工作或沟通？','Who is served or represented here?'),p('机构名称说明全部关系','The name establishes every relationship')],[p('确认范围','Confirmation scope'),p('此联系人能确认哪部分？','Which matters can this contact confirm?'),p('回复等于接受全部条件','A reply accepts every condition')],[p('执行角色','Execution role'),p('谁准备、修改、发布或投放？','Who prepares, revises, publishes or advertises?'),p('能操作等于全部用途已确认','Operational access establishes every use')],[p('变化处理','Change handling'),p('新用途或期限需要谁参与？','Who participates for a new use or period?'),p('原安排自动覆盖追加','The original arrangement covers every addition')]],note:p('编辑关系记录，不是代理权限或具体合同的法律判定。','Editorial relationship record, not a legal determination of agency authority or a particular agreement.')},
tool:{title:p('机构联系前的角色核对','Role checks before agency contact'),intro:p('按实际任务确认，保留已知和未知。','Confirm for the actual assignment and retain known and unknown conditions.'),items:[p('主体与被代表方明确。','Identify entities and represented party.'),p('联系人负责的事项明确。','Identify the contact’s matters.'),p('研究、回复、确认和执行分开。','Separate research, reply, confirmation and execution.'),p('品牌输入与外部贡献都已说明。','Specify brand inputs and external contributions.'),p('新增用途按实际范围讨论。','Discuss added use within its actual scope.'),p('交接可以追到确认依据。','Make confirmation basis traceable in the handoff.')]}
});
