import {makePost} from './authoring.mjs';
export default makePost({
  "id": 28,
  "summary": [
    "为达人合作准备 Facebook 头像时，分清源文件、实际裁切与显示，保留人物识别和素材使用范围。",
    "Prepare Facebook profile imagery for creator partnerships by separating source file, crop and display while preserving identity and usage scope."
  ],
  "description": [
    "Measurements for Facebook profile picture：达人合作如何区分主页与个人账号、源文件与显示尺寸，准备可裁切肖像并在实际预览中核对。",
    "Plan Facebook profile picture measurements for creator work by distinguishing Page and personal profile, source pixels, crop and actual display."
  ],
  "coverAlt": [
    "人物肖像照片与方形、圆形实体卡纸展示不同取景方式",
    "A portrait print and separate square and circular mats demonstrate framing choices"
  ],
  "answer": [
    "为 Facebook 达人合作准备头像，先确认是主页还是个人账号，再区分上传文件与实际显示。可先制作 1024×1024 的方形母版、保留脸部周围空间，并做圆形裁切预览；这是编辑制作建议，不是 Meta 官方像素下限。本文未能完整读取原生尺寸帮助页，不把转载数字写成已核验要求。上传前在实际账号预览中检查识别、裁切与清晰度，并确认肖像使用范围。",
    "For a Facebook creator partnership, first identify Page versus personal profile and separate upload pixels from display size. A 1024×1024 square master with space around the face and a circular crop preview is a practical editorial starting point, not a Meta minimum. The native dimensions help page could not be fully retrieved for this review, so republished numbers are not presented as verified requirements. Inspect recognition, crop and clarity in the actual account preview, and confirm permission for the portrait’s intended use."
  ],
  "sections": [
    [
      [
        "先定义要更新的账号与用途",
        "Define the account and intended use first"
      ],
      [
        "头像可能属于创作者本人主页、品牌合作主页或其他具体对象。先记录实际账号、使用目的与批准责任，不把所有 Facebook 图片位置都看成相同规格。\n\nFacebook 合作封面构图方法处理较宽的封面。本篇只讨论头像与达人识别，不将封面尺寸搬到小头像，也不把评论区缩略显示当作上传文件要求。\n\n如果用户只是想展示合作关系，先判断是否真的需要更换创作者头像。短期活动可以使用其他适合的素材位置，不应默认要求对方改变长期个人识别。\n\n明确用途后再安排拍摄与导出。这样制作人员知道要保留谁的识别、哪些元素必要，以及哪些设计决定还要在实际界面确认。",
        "The image may belong to a creator’s Page, a partnership Page or another specific object. Identify the actual account, purpose and approval responsibility before treating every Facebook image position as one specification.\n\nThe Facebook partnership-cover composition method concerns a wider cover. This article addresses profile imagery and creator recognition, not moving cover dimensions into an avatar or treating a comment thumbnail as an upload requirement.\n\nIf the objective is simply to show a partnership, first ask whether the creator’s profile picture needs changing. A temporary campaign may suit another asset position; changing long-standing personal recognition should not be assumed.\n\nDefine use before booking photography and export. The producer then knows whose identity to preserve, which elements are necessary and which decisions need confirmation in the actual interface.\n\nThis framing keeps the task connected to creator marketing. The image is part of how audiences recognize the person and their work, not merely a small advertising surface. A brief should therefore consider the creator’s existing identity and the real partnership purpose before asking for decorative additions that may make the person harder to recognize."
      ],
      []
    ],
    [
      [
        "区分源文件与返回图片尺寸",
        "Separate the source file from returned image dimensions"
      ],
      [
        "Meta 主页头像对象说明提供技术对象中的尺寸、类型与裁切相关背景；这些接口参数不能直接当成所有原生上传位置的统一要求。\n\n可编辑母版与选定交付文件也应分开。保留适合的原图，另存确认的裁切版本，后续调整就不必放大已经压缩的缩略图。如果更换使用位置，重新核对该位置，不默认同一份导出永远适用。给文件标注真实像素与版本，同时记录使用位置。源图是制作输入，界面中的显示大小是另一层信息，两者不能只因都用像素表示就混为一谈。\n\n例如一张较大母版可以导出不同版本，但不能由此保证平台一定按某个大小显示。实际裁切和呈现仍需查看，不用内部文件属性替界面作结论。\n\n本文没有用用户账号执行上传。有关 API 的资料用于解释对象差异，不表示需要编写接口、更改网站代码或自动替创作者更新头像。",
        "Meta’s Page-picture reference provides technical context about dimensions, type and cropping for that object. Those parameters should not become a universal native-upload requirement.\n\nDo not confuse an editable master with the selected delivery file. Preserve a suitable original and make the agreed crop as a separate version, so later adjustments do not require enlarging a compressed thumbnail. If someone requests a different placement, review that placement rather than assume the same export will remain appropriate. Label the file’s actual pixels and version, and record its intended placement. The source image is a production input; on-screen display size is another layer. Both using pixels does not make them interchangeable.\n\nA larger master can produce different exports without guaranteeing that the platform displays one particular size. Inspect the actual crop and rendering instead of allowing internal file properties to decide what the interface will do.\n\nNo user account upload was performed for this article. API documentation explains object differences; it is not a request to build an integration, change website code or automatically replace a creator’s picture.\n\nThe distinction gives the designer a useful instruction: preserve a workable source and test the intended output. It also prevents the reviewer from rejecting a high-resolution master merely because it differs from a small display thumbnail, or approving an unsuitable crop just because the exported file has a familiar pixel count."
      ],
      [
        "metaPagePicture"
      ]
    ],
    [
      [
        "给母版一个明确但有限的建议",
        "Give the master a clear, limited recommendation"
      ],
      [
        "本篇建议先准备 1024×1024 方形母版，作为方便继续裁切和导出的编辑工作尺寸。它不是已核验的 Meta 最小值、最佳值或必然接受条件。\n\n保留原始照片，不要反复将已压缩的小图放大。若来源不够清楚，可以重新选择或拍摄，而不是用锐化制造不存在的细节。\n\n在方形中给脸、头发和必要识别元素留空间，再另做圆形预览。这是取景检查方式，不用一个通用百分比假称所有界面都有相同安全区。\n\n实际导出仍按照目标账号当前提示处理。公开帮助页无法完整读取时，应保留这个限制，而不是把第三方转载的数字包装成已经核对的官方规范。",
        "This article recommends a 1024×1024 square master as an editorial working size for later cropping and export. It is not a verified Meta minimum, optimum or acceptance condition.\n\nRetain the original photograph rather than repeatedly enlarging an already compressed thumbnail. If the source lacks clarity, choose or produce another image instead of using sharpening to invent missing detail.\n\nLeave space around the face, hair and necessary identifying elements, then make a separate circular preview. That is a framing check, not a universal percentage claiming every interface has the same safe zone.\n\nFollow the target account’s current instructions for the actual export. When the public help page cannot be fully retrieved, preserve that limitation rather than present third-party repeated numbers as checked official specifications.\n\nA limited recommendation is still actionable: the designer can prepare a square working file and review recognition while the account operator confirms current acceptance requirements. Keeping those tasks separate avoids both guessing an official rule and stopping all useful production merely because a public documentation route is unavailable during research."
      ],
      []
    ],
    [
      [
        "缩小后仍需认出创作者",
        "Check recognition at a smaller scale"
      ],
      [
        "头像不是缩小后的海报。多人合影、复杂背景、长标语和小品牌标志，在很小显示中可能无法表达原本目的，应按具体预览判断。\n\n为达人合作保留主要人物，避免让临时促销元素遮住脸。是否放合作标识，需要创作者同意，也要考虑它在缩小后是否仍有意义。\n\n以方形与圆形预览比较关键部分是否被裁掉，再查看实际账号。不要只在设计软件里看放大的画布，就认为手机上的显示同样清楚。\n\n假设两个方案中，一个有完整人物识别，另一个填满活动文字，可以优先讨论前者是否更符合任务。这是假设构图练习，不是证明某种头像必然增加关注的实验。",
        "An avatar is not simply a reduced poster. Group photographs, complex backgrounds, long slogans and tiny brand marks may fail to communicate at a small display size; judge the actual preview.\n\nFor creator collaboration, preserve the principal person instead of covering the face with temporary promotional elements. A partnership mark needs agreement and a reason to remain useful when reduced.\n\nCompare square and circular previews for lost information, then inspect the actual account. A magnified design canvas does not establish equally clear mobile rendering.\n\nImagine one option preserves recognizable identity and another fills the space with campaign wording. Discuss whether the first better answers the task. This is a hypothetical composition exercise, not an experiment proving a particular image increases followers.\n\nThe review can focus on a few observable questions: can the person be identified, does the crop omit something necessary, and does the background compete with the face? These questions help the designer revise a concrete composition without claiming a scientifically established universal avatar formula or turning aesthetic preference into a promised growth result."
      ],
      []
    ],
    [
      [
        "肖像同意与照片权利分别确认",
        "Confirm portrait use and photograph rights separately"
      ],
      [
        "美国版权局摄影说明在美国语境下区分摄影作品的权利归属。人物出现在照片中，不自动表示其拥有照片全部版权，具体情况与例外需要核对。\n\n因此既要确认创作者同意本次肖像使用，也要核对图片来源与相应许可。品牌提供、摄影师交付与创作者自拍，可能涉及不同条件。\n\n写清使用账号、目的、时期与允许改动，不把头像合作默认扩展成广告投放或其他品牌再使用。头像尺寸适合，也不能解决缺失授权。\n\n若无法确认，可选择已经清楚获准的素材。把许可问题放到制作前处理，能避免设计完成后才发现核心照片不能按计划使用。",
        "In the U.S. context, the U.S. Copyright Office’s photography guide distinguishes ownership of photographic work. Being depicted does not automatically give a person every copyright in the photograph; actual circumstances and exceptions require checking.\n\nConfirm both the creator’s agreement to this portrait use and the image source and permission. Brand-supplied photography, a photographer’s delivery and a creator’s self-portrait can involve different conditions.\n\nSpecify account, purpose, period and permitted changes. A profile-image collaboration should not silently expand into advertising or reuse by another brand. Correct dimensions do not resolve missing authorization.\n\nIf uncertain, choose material with a clear permitted scope. Addressing permission before design can prevent discovering at the end that the central photograph cannot be used as planned.\n\nThis is a proportionate collaboration question, not a request for unrelated private documents. The team needs enough evidence to understand the particular asset and use. A clear source and agreement can support production while questions outside that scope remain with the appropriate parties rather than being assumed away by the creator’s willingness to participate."
      ],
      [
        "photoCopyright"
      ]
    ],
    [
      [
        "在实际界面核对显示与缓存",
        "Inspect rendering in the actual interface"
      ],
      [
        "Meta 图片尺寸字段说明提醒技术返回图片也有尺寸与有效期等属性。一个抓取到的图片地址不应被当作永久母版，也不能仅凭其尺寸倒推原生上传要求。\n\n由有权限的人查看实际头像预览，检查脸部裁切、清晰度与当前版本。必要时比较手机和桌面，但不要假定两者一定同时更新。\n\n如果仍显示旧图，先确认当前账号与保存状态，再检查可能的呈现差异。不要连续替换多个版本，最后却不知道哪一份已被接受。\n\n记录实际观察时点与结果。这里没有执行真实 Facebook 上传测试；交接给操作人的检查任务，应明确它仍需在目标账号完成。",
        "Meta’s profile-picture source reference describes dimensions and expiry properties of returned images. A retrieved image URL should not become the permanent master, and its dimensions cannot establish native upload requirements.\n\nHave an authorized person inspect the actual preview for face crop, clarity and current version. Where needed, compare mobile and desktop rather than assume both update at the same instant.\n\nIf an older picture remains, first check account and saved state, then inspect rendering differences. Replacing several versions in succession can leave the team unsure which was accepted.\n\nRecord the actual observation time and result. No real Facebook upload test was performed here; the handover must identify the target-account check still required.\n\nThis is where a well-prepared master meets the actual publishing environment. The designer can supply a clear source and suitable crop candidates, while the account operator confirms what the service currently accepts and displays. Neither person needs to claim knowledge beyond the part they have actually inspected."
      ],
      [
        "metaPictureSource"
      ]
    ],
    [
      [
        "不要让头像变化冒充身份认证",
        "Do not confuse an image update with verification"
      ],
      [
        "更换清楚的头像可以改善识别，但不能证明账号获得认证、联系者有权签约，或页面属于所称对象。图片相同也不代表两个账号相同。\n\nInstagram 认证与合作权限方法讨论身份线索与商业权限的区别。Facebook 头像同样只是有限线索，需要结合实际公开路径与合作确认。\n\n品牌不应使用构图制造并不存在的官方关系。临时合作已经结束时，按约定处理相关标识，不让旧图片继续暗示当前代言。\n\n如果目标是帮助观众认出创作者，围绕这个目标检查即可。没有必要把每个设计动作都包装成身份核验或粉丝增长技术。",
        "A clearer profile image can improve recognition without proving verification, signing authority or ownership of a claimed account. Identical pictures do not make two accounts identical.\n\nThe Instagram verification and partnership-authority method distinguishes identity clues from commercial authority. A Facebook avatar is likewise a limited clue that needs actual public routes and partnership confirmation.\n\nThe brand should not use composition to imply an official relationship that does not exist. When a temporary collaboration ends, handle relevant marks as agreed rather than let an old picture imply current endorsement.\n\nIf the objective is helping viewers recognize the creator, review that objective directly. Every design action need not be marketed as identity verification or follower-growth technology.\n\nThis boundary is useful when an image is approved by several teams. The designer may be approving composition while the creator agrees portrait use and the brand confirms relationship wording. A combined approval label should not erase those different responsibilities or imply that changing the image has settled the account’s complete commercial status."
      ],
      []
    ],
    [
      [
        "把文件、预览与责任一起交接",
        "Hand over files, previews and responsibility together"
      ],
      [
        "交付母版、选定导出、裁切预览与使用范围，并说明哪些实际界面检查尚待完成。把编辑建议与官方要求分开标注，避免下次复制文件时丢失边界。\n\n保留创作者确认的版本，明确谁可以更新、何时复查以及合作结束如何处理。不要把一次素材交接写成长期接管个人账号。\n\nQuickKOL 支持研究相关达人与作品，头像制作和实际账号设置仍由相应负责方完成。研究页面中的图片不应自动变成可商用素材库。\n\n当文件清楚、人物可识别、范围已同意且预览经过实际检查，团队就有可执行的交付。尺寸是其中一项，识别、许可与正确使用同样决定这次合作是否完成。",
        "Deliver the master, selected export, crop previews and usage scope, identifying actual-interface checks still required. Label editorial recommendations separately from official requirements so that distinction survives later file reuse.\n\nRetain the creator-approved version and define who can update it, when to review it and what happens when the collaboration ends. Asset delivery is not indefinite control of a personal account.\n\nQuickKOL supports research of relevant creators and work; image production and actual account settings remain with the responsible parties. Pictures encountered during research are not automatically a commercial asset library.\n\nClear files, recognizable identity, agreed scope and an inspected actual preview make an executable delivery. Dimensions are one part; recognition, permission and correct use also determine whether the collaboration task is complete.\n\nThe final record need not contain every design experiment. It should make the selected version, its intended placement and the remaining confirmation easy to find, allowing the next person to act accurately without treating a working-size suggestion as a platform guarantee."
      ],
      []
    ]
  ],
  "links": [
    {
      "terms": [
        "Facebook 合作封面构图方法",
        "Facebook partnership-cover composition method"
      ],
      "url": "/blog/facebook-cover-creator-partnership-composition/#answer"
    },
    {
      "terms": [
        "Instagram 认证与合作权限方法",
        "Instagram verification and partnership-authority method"
      ],
      "url": "/blog/instagram-verification-partnership-authority/#answer"
    }
  ],
  "figures": [
    {
      "file": "facebook-profile-picture-creator-crop-brief-framework.svg",
      "afterSection": 2,
      "alt": [
        "源文件、实际裁切、显示与识别许可四个不同层次",
        "Four distinct layers: source file, crop, display, identity and permission"
      ],
      "caption": [
        "工作母版尺寸不等于实际显示或官方下限。",
        "A working master is not the display size or an official minimum."
      ]
    },
    {
      "file": "creator-profile-portrait-crop-mats.jpg",
      "afterSection": 4,
      "alt": [
        "人物肖像照片与分开的方形和圆形实体取景卡纸",
        "A portrait print with separate square and circular physical framing mats"
      ],
      "caption": [
        "先检查人物周围空间，再在目标账号预览实际裁切。",
        "Check space around the person, then inspect the actual crop in the target account."
      ]
    }
  ],
  "table": {
    "title": [
      "头像交接中不同的尺寸问题",
      "Different measurement questions in a profile-image handover"
    ],
    "headers": [
      [
        "层次",
        "Layer"
      ],
      [
        "本篇处理",
        "Treatment here"
      ],
      [
        "不能等同",
        "Not equivalent to"
      ]
    ],
    "rows": [
      [
        [
          "工作母版",
          "Working master"
        ],
        [
          "1024×1024 编辑建议",
          "1024×1024 editorial recommendation"
        ],
        [
          "官方上传下限",
          "Official upload minimum"
        ]
      ],
      [
        [
          "裁切预览",
          "Crop preview"
        ],
        [
          "方形与圆形检查",
          "Square and circular checks"
        ],
        [
          "所有原生位置的固定规则",
          "A fixed rule for every native placement"
        ]
      ],
      [
        [
          "实际显示",
          "Actual display"
        ],
        [
          "目标账号与设备查看",
          "Inspect target account and device"
        ],
        [
          "源文件像素",
          "Source-file pixels"
        ]
      ],
      [
        [
          "使用范围",
          "Usage scope"
        ],
        [
          "账号、目的与许可",
          "Account, purpose and permission"
        ],
        [
          "文件合格即可商用",
          "Dimensions establish commercial permission"
        ]
      ]
    ],
    "note": [
      "未完整读取原生尺寸帮助页；本表不声明 Meta 官方像素要求。",
      "Native dimensions help could not be fully retrieved; this table does not assert Meta pixel requirements."
    ]
  },
  "tool": {
    "title": [
      "交接达人头像文件",
      "Hand over creator profile imagery"
    ],
    "intro": [
      "准备可用素材并保留真实核对状态。",
      "Prepare usable assets and retain actual review states."
    ],
    "items": [
      [
        "确认主页或个人账号与目的。",
        "Identify Page or personal profile and purpose."
      ],
      [
        "保留原图与明确母版。",
        "Retain original and identified master."
      ],
      [
        "检查缩小及不同裁切。",
        "Inspect smaller and differently cropped views."
      ],
      [
        "核对肖像同意与图片许可。",
        "Confirm portrait agreement and image permission."
      ],
      [
        "在实际账号查看当前要求与预览。",
        "Inspect current instructions and account preview."
      ],
      [
        "记录选定版本与后续责任。",
        "Record selected version and future responsibility."
      ]
    ]
  }
});

