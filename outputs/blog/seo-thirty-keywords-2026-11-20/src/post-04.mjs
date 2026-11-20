import {makePost} from './authoring.mjs';
export default makePost({
  "id": 4,
  "summary": [
    "合作表出现 Blueskt 等近似拼写时，先修正平台字段，再核对账号与联系对象，避免把行政更正变成错误合并。",
    "When Blueskt appears in a partnership record, correct the platform field while checking account and contact identity separately."
  ],
  "description": [
    "Blueskt 如何处理：品牌达人团队怎样保留原始记录、核对 Bluesky 账号和联系人、处理重复项并同步外联，避免静默合并或扩展授权。",
    "Resolve Blueskt in a creator contact record: preserve the original entry, verify account and contact, handle duplicates and update outreach without silent merges."
  ],
  "coverAlt": [
    "两张不同颜色的联系人索引卡与一支校对笔放在浅色桌面上",
    "Two differently coloured contact index cards and a proofreading pencil on a light desk"
  ],
  "answer": [
    "“Blueskt” 可能是 Bluesky 的拼写变体，但更正平台名称不等于确认账号、本人或代理关系。达人合作记录应保留原始输入、核对实际来源，再决定只改标签、连接资料还是维持分开。修正后还要同步相关 Brief 与外联准备，不能让一次自动替换把两位创作者合并，或让团队向未经确认的联系人发送提案。",
    "“Blueskt” may be a misspelling of Bluesky, but correcting a platform label does not verify an account, person or representative. Preserve the original entry, check the actual source and decide whether to change a label, connect evidence or keep records separate. Then update affected briefs and outreach preparation. A spelling correction should not silently merge two creators or authorize contact with an unconfirmed representative. The aim is a reliable working record that another team member can understand, including what changed and what the correction did not establish."
  ],
  "sections": [
    [
      [
        "先看错误出现在哪里",
        "Locate the error before correcting it"
      ],
      [
        "近似拼写可能出现在关键词、平台选项、联系人备注或复制的链接旁边。先判断它属于哪种字段。如果只是搜索词，不一定需要把它改成正式平台名称；如果是数据库分类，则应使用团队确认的标准标签。\n\nBluesky 平台与域名说明可用于确认应用和网络的基本对象，不应由一个相似词自行推断存在另一个独立平台。\n\n保留原始输入和它来自的文件、日期、提供方。这不需要把每次打字都永久保存，而是让影响后续决定的更正可追溯。若一份报价引用了旧标签，下一位负责人应能理解它为何变化。\n\n先做最小必要修正：平台字段可以改，但人名、账号、代表和合同对象仍分别核对。不要把明显的拼写错误当作其他字段也已经正确的证明。",
        "A near spelling can appear in a keyword list, platform selector, contact note or beside a copied link. Identify the field first. A search term may need to remain as received; a database classification may need the team’s agreed platform label.\n\nBluesky’s platform and domain explanation can establish the basic app and network reference. A similar word alone is not evidence of another independent service.\n\nRetain the original input with its source document, date and provider when the correction affects later decisions. This does not require preserving every keystroke indefinitely. It means another owner can understand why a meaningful record changed, especially if a quotation still refers to the earlier label.\n\nMake the smallest necessary correction. The platform field may change while person, account, representative and contracting party remain separate verification questions. An obvious spelling mistake is not proof that all neighbouring fields are correct. Keeping this distinction at the start prevents an administrative cleanup from turning into an unsupported identity judgment, and gives reviewers a clear stopping point before any outreach or commercial commitment depends on the revised record."
      ],
      [
        "bskyWelcome"
      ]
    ],
    [
      [
        "用实际链接固定账号",
        "Anchor the account to an actual link"
      ],
      [
        "核对链接指向什么：平台首页、公开资料、单条作品还是第三方截图。它们提供的信息不同，不能只在表格里统一写“Bluesky”。\n\n保留准确的公开账号路径和观察日期。显示名可以相同或改变，截图也可能失去上下文，因此需要能回到实际资料的来源。不猜私人邮箱、真实住址或其他与任务无关的信息。\n\nBluesky 认证说明介绍域名与认证标记的不同身份线索。使用这些信号时记录具体依据，不因为看见某种图形就直接认定代理关系。\n\n如果链接已经失效，状态可以是待核验，而不是复制一个相似账号来填空。先从创作者自己已经确认的公开渠道查找，必要时由负责沟通的人提出明确问题。",
        "Check what the link identifies: a platform homepage, public profile, individual work or a third-party screenshot. These provide different information and should not all be reduced to a single Bluesky label in the sheet.\n\nRetain the exact public profile route and observation date. Display names can coincide or change, and screenshots can lose their context. The team needs a path back to the actual record. Do not guess private email addresses, home addresses or unrelated personal information to compensate for a weak source.\n\nBluesky’s verification explanation describes domain and badge identity signals. Record the specific basis when using them, rather than treating the presence of a graphic as proof of representation.\n\nIf a link no longer resolves, unverified is a legitimate state. Do not fill the gap with a similar-looking account. Start from the creator’s already established public channels and have the appropriate communication owner ask a bounded question if necessary. This keeps the contact file useful without turning missing information into invented certainty or requiring a researcher to decide identity from resemblance alone."
      ],
      [
        "bskyVerify"
      ]
    ],
    [
      [
        "分清更正与合并",
        "Separate a correction from a merge"
      ],
      [
        "改标签、连接同一人的跨平台资料、合并重复记录，是三种不同动作。第一种主要改变分类，后两种会影响作品、联系历史和后续任务的归属，需要更强依据。\n\n可以先并列保留疑似重复项，并标明为什么怀疑、还差什么。若一个是创作者本人、另一个是工作室，两条都可能有用，不应为了“去重”强制压成一条。\n\nBluesku 来源核对方法处理近似拼写带来的资料出处问题。本篇继续到团队记录层：谁能够决定合并，哪些信息必须保留，原有任务将指向哪里。\n\n合并前检查是否存在进行中的报价、用途讨论或未解决问题。若这些内容属于不同对象，应保留关系，而不是覆盖其中一方。整洁表格不是唯一目标，准确分工才是。",
        "Changing a label, linking one person’s cross-platform records and merging duplicates are different actions. The first mainly changes classification. The others affect ownership of work samples, contact history and future tasks, so they require stronger support.\n\nKeep suspected duplicates side by side while recording the reason for the suspicion and the missing evidence. One record may concern a creator and another their studio. Both can be useful; tidying the table does not justify forcing them into one identity.\n\nThe Bluesku source-verification method addresses provenance problems caused by similar spellings. This article continues at the team-record level: who can approve a merge, what information must survive and where existing tasks should point.\n\nBefore merging, check quotations, usage discussions and unresolved questions already in progress. If those concern different entities, preserve their relationship instead of overwriting one side. A neat sheet is not the only objective. Accurate responsibility matters more, particularly when the same person appears publicly under several professional roles or when an agency represents only some of their work. A correction should make those distinctions easier to use, not erase them."
      ],
      []
    ],
    [
      [
        "让联系对象保留自己的身份",
        "Keep the contact’s identity separate"
      ],
      [
        "账号本人、公开业务邮箱、经纪人、代理机构和付款对象可能不是同一个主体。平台名称更正不能替这些关系作答，也不能自动扩大某个联系人代表的范围。\n\n在外联准备中，写清打算向谁询问什么。若需要新作品，向合适的商业渠道讨论新委托；若需要引用旧作，另核对作者和相关许可，不把两种请求混在一句话里。\n\n记录代理提供的代表说明以及适用的项目范围。信息不一致时先澄清，不让团队靠邮件签名或熟悉头像作出付款与签约判断。\n\n对内可以使用清楚的关系字段，例如“公开账号”“本次联络”“待确认代表范围”。它们是工作记录，不是法律认证。真正需要的合同与付款确认仍由相应负责人完成。",
        "The account holder, public business email, manager, agency and payment recipient may be different entities. Correcting a platform name does not answer those relationships or expand a contact’s representative scope.\n\nIn outreach preparation, specify whom the team intends to ask and what the request concerns. For new work, discuss commissioning through the appropriate business route. For an existing-work quotation, separately identify the author and required permission. Do not combine the two requests in wording that leaves the recipient guessing.\n\nRecord the representative explanation supplied by an agency and the project scope it covers. Resolve inconsistent information instead of allowing an email signature or familiar avatar to decide payment and contracting authority.\n\nUseful internal fields include public account, contact for this assignment and representative scope awaiting confirmation. These are working records, not legal certifications. The relevant owner still completes the necessary contracting and payment confirmation. Keeping the fields separate also makes later updates manageable: a creator can change representation without losing the history of their original work, and a corrected platform label can propagate without implying that every existing commercial relationship has changed."
      ],
      []
    ],
    [
      [
        "只保留与决定有关的信息",
        "Retain information relevant to the decision"
      ],
      [
        "ICO 数据最小化说明在英国数据保护语境中强调资料与目的相关、足够且限于必要范围。该页也说明指导正在审查中，不能把它当成所有地区的完整法律结论。\n\n对达人研究，实际任务可能只需要公开账号、作品出处、业务联系路径和本次沟通状态。不要为了区分两个相似名字，顺手收集私人家庭、住址或无关生活信息。\n\n同时，资料太少也会造成错误。一个无法核对出处的标签，可能不足以支持外联。最小化不是把所有背景删光，而是保留能完成明确目的的必要信息。\n\n为共享与保留设定负责人。更正记录不应该无限扩散到无关团队，已经失去用途的信息也应按团队规则处理。本文提供工作方法，不替代适用地区的具体审阅。",
        "In the UK data-protection context, the ICO’s data-minimisation guidance calls for information that is relevant, sufficient and limited to the stated purpose. The page notes that guidance is under review. It is not a complete legal conclusion for every jurisdiction.\n\nCreator research may need only public account details, work provenance, a business contact route and the status of the current conversation. Do not collect private family details, addresses or unrelated life information merely to distinguish two similar names.\n\nInsufficient information can also produce mistakes. A label with no recoverable source may be inadequate for outreach. Minimisation is not the deletion of every contextual field; it means retaining what is necessary to fulfil a defined purpose.\n\nAssign responsibility for sharing and retention. A correction record should not spread indefinitely to unrelated teams, and information that no longer serves its purpose should be handled under the team’s applicable rules. This is a working method, not a substitute for jurisdiction-specific review. Its practical value is that researchers can explain why each field exists instead of keeping an expanding personal dossier simply because the source material happened to be publicly visible."
      ],
      [
        "icoMin"
      ]
    ],
    [
      [
        "同步 Brief 与外联准备",
        "Update the brief and outreach preparation"
      ],
      [
        "更正成功后，检查哪些材料引用旧记录：候选名单、Brief、询价草稿、素材链接和负责人任务。不要假设数据库变更会自动修改已经导出的文件。\n\n给相关人员说明改动范围。例如，只确认平台字段，应明确没有新确认账号身份或代表关系。这样下一位同事不会把“已更正”理解成整个人已经核验。\n\n若消息尚未发出，可以先更新草稿再由既定流程处理。已经发送的沟通是否需要补充说明，取决于错误是否影响接收方理解，由负责沟通的人判断，不为小标签错误反复打扰对方。\n\n达人联系记录方法可用于继续维护谁收到什么、何时收到和还需要什么。版本间保持关联，让对方回复能回到正确的任务，而不是落入另一条被误合并的记录。\n\n达人联系记录方法帮助把后续回复交给准确的负责人。",
        "After confirming the correction, check materials that reference the old record: shortlists, briefs, draft inquiries, media links and assigned tasks. A database change does not automatically revise an exported document.\n\nTell relevant colleagues the scope of the change. If only the platform field was confirmed, state that no new conclusion was reached about account identity or representation. This prevents corrected from being read as fully verified.\n\nFor an unsent message, update the draft before it follows the established sending process. Whether a sent conversation needs clarification depends on whether the error affects the recipient’s understanding. Let the communication owner decide rather than repeatedly disturbing the creator over an inconsequential label.\n\nPreserve version relationships so a reply returns to the correct assignment instead of another record created by a mistaken merge. The practical check is simple: can a colleague identify which source informed the current brief, which recipient the draft addresses and what remains unresolved? If not, the cleanup has improved spelling without improving the workflow. Complete that connection before the corrected label is used to justify a new commercial next step.\n\nThe creator contact-record method helps route subsequent replies to the correct owner."
      ],
      []
    ],
    [
      [
        "用假设重复项检查流程",
        "Test the workflow with a hypothetical duplicate"
      ],
      [
        "假设表里有“Blueskt / Alex”和“Bluesky / Alex Studio”。两条都使用相似头像，但一个链接指向个人作品，另一个指向工作室。这里是编辑假设，不是具名账号指控。\n\n团队可以先统一平台标签，同时保留个人与工作室两个对象。如果后来确认工作室负责本次制作，就记录代表与制作关系，不把个人历史作品全部改归工作室。\n\n若两条其实是同一资料的重复输入，也先保留原始来源与尚未完成的任务，再由有权负责人确认合并。已经发给某个联系人的报价不会因为合并而自动转给另一人。\n\n这个场景说明最小修正和完整身份判断的区别。它不要求复杂系统；小表格也可以用清楚的状态、来源和关系做到，关键是不要让自动化替团队猜测。",
        "Imagine two entries: Blueskt / Alex and Bluesky / Alex Studio. Both use a similar avatar, but one links to personal work and the other to a studio. This is a hypothetical editorial example, not an allegation about named accounts.\n\nThe team can standardize the platform label while preserving person and studio as separate objects. If the studio is later confirmed as responsible for this production, record that representative and production relationship. Do not reassign all historical personal work to the studio.\n\nIf the entries are duplicates of the same record, preserve source provenance and unfinished tasks before an authorized owner approves the merge. A quotation sent to one contact does not automatically transfer to another because the research database changed.\n\nThe scenario illustrates the difference between a minimal correction and a complete identity conclusion. It does not require a complicated system. A small sheet can use clear status, sources and relationships. What matters is that an automated replacement does not make the team’s substantive judgment invisibly, or turn an uncertain resemblance into the basis for contacting, contracting or paying the wrong party."
      ],
      []
    ],
    [
      [
        "交接明确的更正结论",
        "Hand over a bounded correction"
      ],
      [
        "最终写清原值、新值、依据、负责人和影响范围。没有解决的身份或商业问题放在未解栏，不用“已处理”掩盖。\n\n对继续工作的同事，提供能回到实际资料的路径，并说明是否还有待更新的导出文件。若只是研究记录变化，不要声称创作者已经接受合作。\n\nQuickKOL 可以帮助理解 Brief、发现达人和准备个性化联系；账号本人、代表关系、用途与商业条件仍需来源与合作方确认。\n\nBlueskt 这种小错误值得处理，是因为它可能沿着名单和消息传播。好的修正保留原有事实，让下一步更清楚；它不会凭空增加一个平台、合并一个人，或替团队完成尚未做过的核验。",
        "Record original value, replacement, evidence, owner and affected scope. Keep unresolved identity or commercial questions in an open field instead of hiding them behind handled.\n\nGive the next colleague a route back to the actual material and state whether any exported files still need updating. A research-record correction is not evidence that the creator accepted a partnership.\n\nQuickKOL can help interpret a brief, discover relevant creators and prepare personalized contact. Sources and counterparties must still confirm account identity, representation, usage and commercial conditions.\n\nA small error such as Blueskt deserves attention because it can travel through lists and messages. A good correction preserves established facts while making the next step clearer. It does not invent another platform, merge a person or complete verification that the team has not performed. Close the task only when another owner can tell which part of the record is now reliable and which decision still needs evidence. That makes the cleanup useful beyond the person who noticed the spelling, without adding unnecessary friction to an otherwise legitimate creator conversation."
      ],
      []
    ]
  ],
  "links": [
    {
      "terms": [
        "Bluesku 来源核对方法",
        "Bluesku source-verification method"
      ],
      "url": "/blog/bluesku-brand-source-disambiguation/#answer"
    },
    {
      "terms": [
        "达人联系记录方法",
        "creator contact-record method"
      ],
      "url": "/blog/whatsapp-business-creator-conversation-handoff/#answer"
    }
  ],
  "figures": [
    {
      "file": "blueskt-creator-contact-record-correction-framework.svg",
      "afterSection": 3,
      "alt": [
        "平台标签、账号、人物与代表关系四项分开核对的示意",
        "Platform label, account, person and representation are checked separately"
      ],
      "caption": [
        "纠正一个标签，不自动核验其他关系。",
        "Correcting one label does not verify the other relationships."
      ]
    }
  ],
  "table": {
    "title": [
      "更正动作的范围",
      "Scope of a correction"
    ],
    "headers": [
      [
        "动作",
        "Action"
      ],
      [
        "需要",
        "Needed"
      ],
      [
        "保持分开",
        "Keep separate"
      ]
    ],
    "rows": [
      [
        [
          "改平台标签",
          "Correct platform label"
        ],
        [
          "标准名称与来源",
          "Standard label and source"
        ],
        [
          "人物身份",
          "Person identity"
        ]
      ],
      [
        [
          "连接跨平台资料",
          "Connect platform records"
        ],
        [
          "可核对的连接",
          "Verifiable connection"
        ],
        [
          "受众数字",
          "Audience counts"
        ]
      ],
      [
        [
          "合并重复项",
          "Merge duplicates"
        ],
        [
          "来源与任务归属",
          "Provenance and task ownership"
        ],
        [
          "个人与工作室角色",
          "Person and studio roles"
        ]
      ],
      [
        [
          "更新外联",
          "Update outreach"
        ],
        [
          "接收人及请求范围",
          "Recipient and request scope"
        ],
        [
          "兴趣与接受",
          "Interest and acceptance"
        ]
      ]
    ],
    "note": [
      "编辑工作流程，不是身份或法律认证。",
      "Editorial workflow, not identity or legal certification."
    ]
  },
  "tool": {
    "title": [
      "完成联系记录更正",
      "Complete the contact-record correction"
    ],
    "intro": [
      "让下一位同事知道实际核对了什么。",
      "Show the next colleague what was actually checked."
    ],
    "items": [
      [
        "保留影响决定的原始输入。",
        "Retain the original input relevant to the decision."
      ],
      [
        "确认字段与真实链接。",
        "Confirm the field and actual link."
      ],
      [
        "区分标签修改与记录合并。",
        "Separate label correction from merging."
      ],
      [
        "单独核对代理范围。",
        "Check representative scope separately."
      ],
      [
        "同步受影响的 Brief 和草稿。",
        "Update affected briefs and drafts."
      ],
      [
        "列出尚未解决的问题。",
        "List unresolved questions."
      ]
    ]
  }
});

