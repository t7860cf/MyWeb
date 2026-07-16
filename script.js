function redirectMobileVisitors() {
  const mobileQuery = window.matchMedia?.("(max-width: 768px)");
  const isMobileViewport = Boolean(mobileQuery?.matches);
  const isMobileDevice = /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

  if (!isMobileViewport && !isMobileDevice) {
    return;
  }

  if (location.pathname.includes("/mobile-site/")) {
    return;
  }

  const basePath = location.pathname.replace(/[^/]*$/, "");
  location.replace(`${location.origin}${basePath}mobile-site/index.html`);
}

redirectMobileVisitors();

const navItems = [
  ["index.html", "首页"],
  ["delivery-method.html", "交付链路"],
  ["projects.html", "AI项目"],
  ["pm-delivery.html", "政企交付"],
  ["resume.html", "简历"],
  ["contact.html", "联系我"],
];

const projectPageSet = new Set([
  "enterprise-rag.html",
  "agentops-studio.html",
  "pet-miniapp.html",
  "coze-video.html",
]);

const projectCards = [
  {
    key: "rag",
    href: "enterprise-rag.html",
    title: "RAG 知识资产平台",
    badge: "知识资产",
    icon: "database",
    visual: "db",
    summary: "沉淀项目资料与文档，探索可检索、可复用并附带引用依据的知识入口。",
    rows: [
      ["业务场景", "团队与项目资料分散，检索成本高，知识难沉淀与复用。"],
      ["AI 介入", "文档解析、混合检索、Rerank、问答生成与来源追溯。"],
      ["交付边界", "面向文档检索与问答的应用交付，不替代业务系统改造。"],
      ["当前问题", "长文档分块质量、召回评估和知识覆盖仍需持续补充。"],
    ],
  },
  {
    key: "agent",
    href: "agentops-studio.html",
    title: "AgentOps Studio 多 Agent 协作产品",
    badge: "Agent 协作",
    icon: "network",
    visual: "agent",
    summary: "通过 PM Agent 调度多 Agent，把需求、设计、开发、测试和交付过程产品化。",
    rows: [
      ["业务场景", "小型团队任务拆分、上下文管理、执行状态和结果复核成本高。"],
      ["AI 介入", "PM Agent 调度、角色分工、工具白名单、SSE 实时事件流。"],
      ["交付边界", "聚焦协作流程与任务执行，不承诺完全自动化软件生产。"],
      ["当前问题", "Agent 状态同步、异常处理和产出校验机制仍需优化。"],
    ],
  },
  {
    key: "pet",
    href: "pet-miniapp.html",
    title: "宠物店小程序",
    badge: "门店业务",
    icon: "store",
    visual: "phone",
    summary: "围绕宠物店经营，覆盖会员、预约、商品、寄养、订单和门店配置。",
    rows: [
      ["业务场景", "门店会员分散，预约管理混乱，服务与商品运营缺少统一入口。"],
      ["AI 介入", "辅助页面、模块、配置、测试脚本和内容生成。"],
      ["交付边界", "小程序前端、后台管理和流程验证，支付与物流对接需单独落地。"],
      ["当前问题", "用户活跃度、排班规则和门店真实数据策略仍需验证。"],
    ],
  },
  {
    key: "coze",
    href: "coze-video.html",
    title: "Coze 视频优化工作流",
    badge: "内容生产",
    icon: "video",
    visual: "play",
    summary: "串联视频智能剪辑与视频转学习文档，沉淀可复用 AIGC 工作流。",
    rows: [
      ["业务场景", "视频剪辑与学习文档整理重复耗时，需要标准化处理流程。"],
      ["AI 介入", "ASR 转录、LLM 结构化、剪辑参数生成与 Markdown 输出。"],
      ["交付边界", "聚焦内容处理流程自动化，不包括内容分发与投放。"],
      ["当前问题", "复杂场景下的片段边界、素材匹配和人工复核仍需强化。"],
    ],
  },
];

const casePages = {
  "enterprise-rag.html": {
    title: "RAG 知识资产平台",
    subtitle: "沉淀项目资料与文档，探索可检索、可复用并附带引用依据的知识入口。",
    badge: "项目案例",
    tags: ["文档检索", "RAG 问答", "知识沉淀", "多格式文档", "引用定位"],
    icon: "database",
    sideMeta: [
      ["角色", "AI 应用项目经理"],
      ["方向", "知识管理 / AI 应用"],
      ["项目周期", "2026.03 - 至今"],
      ["团队规模", "个人独立实践"],
      ["项目状态", "平台能力建设与持续评估"],
    ],
    nav: ["业务场景", "目标与边界", "逻辑架构", "AI 参与方式", "实现路径", "当前问题", "复盘反思"],
    modules: [
      {
        num: "01",
        title: "业务场景",
        body: "项目资料、流程文档、技术笔记等内容分散在不同位置，查找成本高，已有经验难以沉淀和复用。重复查找与沟通也会拉低协作效率。",
        extra: "本项目聚焦个人与小团队的知识整理、检索和问答实践，为日常项目协作与学习复盘提供参考。",
      },
      {
        num: "02",
        title: "目标与边界",
        list: [
          "整理多来源资料，形成可检索的知识资产。",
          "验证检索与问答能力，提升资料获取效率。",
          "在回答中保留引用依据，支持人工回看与判断。",
          "不替代业务系统，不处理实时交易和复杂审批流程。",
        ],
      },
      {
        num: "03",
        title: "逻辑架构",
        flow: ["文档接入", "切分策略", "向量检索", "Rerank", "答案生成", "引用定位"],
        footer: ["基础支撑层", "文档存储", "向量数据库", "资料目录", "原文引用", "效果记录"],
      },
      {
        num: "04",
        title: "AI 参与方式",
        rows: [
          ["语义理解", "理解用户意图，生成检索关键词与改写问题。"],
          ["语义检索", "通过向量表示语义，跨越关键词边界召回相关文档片段。"],
          ["重排与筛选", "基于相关性与多样性对召回结果重排，过滤低质量片段。"],
          ["生成回答", "基于检索内容生成结构化回答，支持引用与来源标注。"],
          ["回答边界", "对无依据内容保持提示，并保留原文引用供人工判断。"],
        ],
      },
      {
        num: "05",
        title: "实现路径",
        steps: ["使用场景与资料范围梳理", "资料接入与整理", "检索链路搭建", "答案生成与评估", "效果复盘与持续优化"],
      },
      {
        num: "06",
        title: "当前问题",
        warnings: [
          ["Chunk 质量", "部分复杂文档结构切分效果不佳，影响检索与生成质量。"],
          ["召回评估", "缺乏标准化评估集与持续自动化评估机制，效果波动难量化。"],
          ["幻觉控制", "长上下文与高相似片段并存时，模型仍存在一定幻觉风险。"],
        ],
      },
      {
        num: "07",
        title: "复盘反思",
        columns: [
          ["从业务视角驱动方案", "先明确知识的价值与使用方式，再选择技术路线，避免为模型而模型。"],
          ["资料与产品需要同步更新", "资料整理、切分策略与检索口径会直接影响回答质量，需要持续优化评估。"],
          ["引用与回答边界要明确", "不能确认的内容应提示人工回看原文，避免把推测包装成确定结论。"],
        ],
      },
    ],
  },
  "agentops-studio.html": {
    title: "AgentOps Studio 多 Agent 协作产品",
    subtitle: "PM Agent 调度多个角色，形成需求、设计、开发、测试与交付的可观察协作链路。",
    badge: "项目案例",
    tags: ["PM Agent", "8 个 Agent 角色", "I/O 契约", "SSE 事件流", "工具沙箱"],
    icon: "network",
    sideMeta: [
      ["角色", "产品与交付设计"],
      ["对象", "个人开发者 / 小型团队"],
      ["模型接入", "DeepSeek / Qwen / OpenAI / Claude"],
      ["工程约束", "项目隔离 / 目录隔离 / 工具白名单"],
      ["项目状态", "产品机制验证与迭代"],
    ],
    nav: ["产品定位", "角色分工", "调度链路", "工程实现", "风险控制", "当前问题", "复盘反思"],
    modules: [
      { num: "01", title: "产品定位", body: "面向个人开发者和小型项目团队，把多 Agent 从聊天式协作推进到可观察、可分派、可复盘的项目交付过程。" },
      {
        num: "02",
        title: "角色分工",
        body: "定义 8 个 Agent 角色、I/O 契约、输出格式和工具权限边界，避免角色职责混乱和上下文污染。",
        chips: ["PM Agent", "需求分析", "软件设计", "开发执行", "测试审查", "交付总结"],
      },
      {
        num: "03",
        title: "调度链路",
        flow: ["需求输入", "PM 澄清", "计划确认", "任务分派", "Agent 执行", "测试审查", "交付汇总"],
      },
      {
        num: "04",
        title: "工程实现",
        rows: [
          ["模型接入", "DeepSeek、Qwen、OpenAI、Claude 统一适配。"],
          ["实时状态", "SSE 实时事件流展示任务、模型调用与产出状态"],
          ["调用统计", "记录模型、工具、任务维度的调用情况。"],
          ["轻量调度", "以项目级任务流支撑小团队协作，而非重型流程引擎。"],
        ],
      },
      { num: "05", title: "风险控制", body: "通过工具权限白名单、工具沙箱、目录隔离和项目级隔离控制误操作范围，关键节点保留人工确认。" },
      {
        num: "06",
        title: "当前问题",
        warnings: [
          ["目标漂移", "长任务链路中 Agent 容易偏离原始需求，需要 PM 状态机持续约束。"],
          ["上下文污染", "多角色共享上下文时可能产生无关信息，需要项目级隔离。"],
          ["产出校验", "AI 产出仍需测试与人工复核，不能直接视为最终交付。"],
        ],
      },
      {
        num: "07",
        title: "复盘反思",
        columns: [
          ["协作不是堆角色", "核心是任务状态、角色边界和交付口径。"],
          ["PM Agent 是治理入口", "需求澄清、计划确认和异常处理必须集中到可控入口。"],
          ["工具权限需要产品化", "白名单、目录隔离和沙箱是多 Agent 落地的基础设施。"],
        ],
      },
    ],
  },
  "pet-miniapp.html": {
    title: "宠物店小程序",
    subtitle: "面向宠物店业务经营，整合会员、预约、商品、寄养、订单和门店配置。",
    badge: "项目案例",
    tags: ["微信小程序", "门店运营", "预约订单", "会员管理", "员工工作流"],
    icon: "store",
    sideMeta: [
      ["角色", "产品与交付设计"],
      ["业务对象", "宠物店经营服务"],
      ["用户角色", "客户 / 员工 / 管理员"],
      ["核心链路", "预约 / 商品 / 寄养 / 订单"],
      ["项目状态", "业务流程验证与页面落地"],
    ],
    nav: ["业务场景", "用户角色", "功能结构", "实现方式", "交付重点", "当前问题", "复盘反思"],
    modules: [
      { num: "01", title: "业务场景", body: "宠物店需要把用户预约、到店服务、商品订单、会员信息、寄养记录从线下沟通迁移到小程序流程，降低门店人工协调成本。" },
      { num: "02", title: "用户角色", body: "客户完成浏览、预约、下单和信息维护；员工处理预约、订单、寄养与服务状态；管理员维护门店配置、商品和服务规则。" },
      {
        num: "03",
        title: "功能结构",
        flow: ["会员", "预约", "商品", "订单", "寄养", "员工后台"],
        footer: ["客户入口", "员工工作流", "门店配置", "通知与状态"],
      },
      {
        num: "04",
        title: "实现方式",
        rows: [
          ["页面结构", "按客户侧与员工侧拆分页面和工作台。"],
          ["云开发", "使用云函数与数据库承接基础业务数据。"],
          ["AI 辅助", "辅助生成页面、配置、测试脚本与修复方案。"],
          ["流程验证", "围绕订单、预约、寄养和商品模块做链路检查。"],
        ],
      },
      { num: "05", title: "交付重点", body: "预约流程、订单状态、员工处理入口、会员信息和后台配置需要保持一致，避免前后台数据口径不统一。" },
      {
        num: "06",
        title: "当前问题",
        warnings: [
          ["真实数据", "仍需接入真实门店服务、商品、排班和客户数据。"],
          ["支付闭环", "支付、退款、库存和售后流程需要独立验证。"],
          ["运营规则", "不同门店服务规则差异较大，需要可配置策略。"],
        ],
      },
      {
        num: "07",
        title: "复盘反思",
        columns: [
          ["业务小程序不是页面集合", "关键在客户动作和员工处理流程能否闭环。"],
          ["AI 编程需要验收口径", "生成速度不能替代业务一致性验证。"],
          ["门店系统重在细节", "状态通知、权限和异常处理决定实际可用性。"],
        ],
      },
    ],
  },
  "coze-video.html": {
    title: "Coze 视频工作流",
    subtitle: "Coze + Flask 混合架构处理视频智能剪辑与视频转学习文档。",
    badge: "项目案例",
    tags: ["Coze", "Flask", "腾讯 ASR", "多模型适配", "异步任务"],
    icon: "video",
    sideMeta: [
      ["角色", "工作流与服务设计"],
      ["输入来源", "YouTube / 抖音 / B站"],
      ["核心链路", "转录 / 剪切 / 字幕 / Markdown"],
      ["部署方式", "Ubuntu / Nginx / Gunicorn / systemd / CDN"],
      ["项目状态", "工作流验证与质量优化"],
    ],
    nav: ["业务场景", "流程架构", "AI 参与", "工程实现", "质量边界", "当前问题", "复盘反思"],
    modules: [
      { num: "01", title: "业务场景", body: "视频内容需要从素材转成候选剪辑片段、字幕和学习文档，减少重复整理和人工初剪成本。" },
      {
        num: "02",
        title: "流程架构",
        flow: ["视频输入", "音频提取", "ASR", "LLM 结构化", "剪辑输出"],
        footer: ["Coze 编排", "Flask 服务", "job_id 轮询", "文件存储"],
      },
      { num: "03", title: "AI 参与", body: "腾讯 ASR 完成转写，多模型用于文本结构化、脚本整理、片段判断和 Markdown 学习文档生成。" },
      {
        num: "04",
        title: "工程实现",
        rows: [
          ["音频提取", "支持 YouTube、抖音、B站等来源的音频处理。"],
          ["异步任务", "通过 job_id 与轮询机制管理长耗时任务。"],
          ["服务部署", "Ubuntu、Nginx、Gunicorn、systemd 与 CDN 承接服务。"],
          ["多模型适配", "根据任务切换不同模型能力。"],
        ],
      },
      { num: "05", title: "质量边界", body: "剪辑建议、字幕与学习文档都需要人工复核入口，不能把 LLM 输出直接视为最终成片或正式文档。" },
      {
        num: "06",
        title: "当前问题",
        warnings: [
          ["乱剪辑输出", "按音频文本剪辑时 LLM 可能乱剪辑输出，片段边界不稳定。"],
          ["语境丢失", "单纯文本判断可能忽略画面、停顿和上下文。"],
          ["结构校验", "需要更强的 Schema 校验、时间轴约束和样本复盘。"],
        ],
      },
      {
        num: "07",
        title: "复盘反思",
        columns: [
          ["工作流价值在链路", "从素材到文档/片段的过程可复用，比单次生成更重要。"],
          ["多模态仍需人工", "视觉、语音和文本判断要保留复核机制。"],
          ["异步任务是基础", "视频处理链路必须有状态、日志和失败恢复。"],
        ],
      },
    ],
  },
};

function icon(name) {
  return `<i data-lucide="${name}"></i>`;
}

function currentPage() {
  return location.pathname.split("/").pop() || "index.html";
}

function activePage(page) {
  return projectPageSet.has(page) ? "projects.html" : page;
}

function renderHeader(page) {
  const active = activePage(page);
  return `
    <header class="site-header">
      <a class="brand" href="index.html" aria-label="蔡峰首页">
        <span class="brand-mark">CF</span>
        <span><strong>蔡峰</strong><small>AI 应用产品化与交付</small></span>
      </a>
      <nav class="site-nav" aria-label="主导航">
        ${navItems.map(([href, text]) => `<a class="${href === active ? "is-active" : ""}" href="${href}">${text}</a>`).join("")}
      </nav>
    </header>
  `;
}

function renderFixedHeader(page) {
  const active = activePage(page);
  return `
    <header class="fixed-site-header">
      <a class="fixed-brand" href="index.html" aria-label="蔡峰首页">
        <span class="fixed-brand-mark">CF</span>
        <span><strong>蔡峰</strong><small>AI 应用产品化与交付</small></span>
      </a>
      <nav class="fixed-site-nav" aria-label="主导航">
        ${navItems.map(([href, text]) => `<a class="${href === active ? "is-active" : ""}" href="${href}">${text}</a>`).join("")}
      </nav>
      <span class="fixed-header-spacer" aria-hidden="true"></span>
    </header>
  `;
}

function mount(content, page = currentPage()) {
  const app = document.querySelector("#app");
  const fullScreenPages = new Set(["index.html", "delivery-method.html", "projects.html", "pm-delivery.html", "resume.html", "contact.html", "enterprise-rag.html", "agentops-studio.html", "pet-miniapp.html", "coze-video.html"]);
  document.body.classList.remove("home-real", "delivery-real", "projects-real", "pm-real", "resume-real", "contact-real", "rag-real", "agent-real", "pet-real", "coze-real");
  document.body.classList.toggle("home-real", page === "index.html");
  document.body.classList.toggle("delivery-real", page === "delivery-method.html");
  document.body.classList.toggle("projects-real", page === "projects.html");
  document.body.classList.toggle("pm-real", page === "pm-delivery.html");
  document.body.classList.toggle("resume-real", page === "resume.html");
  document.body.classList.toggle("contact-real", page === "contact.html");
  document.body.classList.toggle("rag-real", page === "enterprise-rag.html");
  document.body.classList.toggle("agent-real", page === "agentops-studio.html");
  document.body.classList.toggle("pet-real", page === "pet-miniapp.html");
  document.body.classList.toggle("coze-real", page === "coze-video.html");
  app.innerHTML = fullScreenPages.has(page) ? `${renderFixedHeader(page)}${content}` : `${renderHeader(page)}<main class="page-shell">${content}</main>`;
}

function visualCard(item) {
  return `
    <div class="visual-card visual-${item.visual || item.key}">
      ${icon(item.icon)}
      <span></span><span></span><span></span>
    </div>
  `;
}

function rowList(rows) {
  return `
    <div class="row-list">
      ${rows.map(([label, text]) => `
        <div>${icon("badge-check")}<strong>${label}</strong><span>${text}</span></div>
      `).join("")}
    </div>
  `;
}

function tagList(tags) {
  return `<div class="tag-list">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>`;
}

function renderHome() {
  const steps = [
    ["01", "search", "业务识别", "识别业务场景、角色流程与问题，明确价值与验收标准。"],
    ["02", "file-text", "方案定义", "定义 RAG / Agent / 工作流方案，确定实现路径与交付计划。"],
    ["03", "code-2", "原型验证", "快速构建原型，验证方案可行性，打磨 MVP 与验收要点。"],
    ["04", "box", "系统落地", "开发集成、数据接入、部署上线，保障系统稳定可用。"],
    ["05", "badge-check", "验收复盘", "测试验收、培训交付、复盘总结，沉淀经验持续优化。"],
  ];

  mount(`
    <section class="home-grid">
      <article class="panel identity-panel">
        <div class="planet-grid"></div>
        <h1>蔡峰</h1>
        <h2>AI 应用产品化与交付</h2>
        <p class="hero-line">把 AI 能力推进到业务可验收交付</p>
        <div class="thin-line"></div>
        <ul class="identity-list">
          <li>${icon("timer-reset")}8 年项目管理经验</li>
          <li>${icon("settings")}5 年技术开发 + PMP</li>
          <li>${icon("shield-check")}专注 RAG、多 Agent 与 AI 应用落地</li>
          <li>${icon("check-circle-2")}从 PoC 到 MVP，再到可验收交付</li>
        </ul>
        <div class="button-row">
          <a class="button primary" href="projects.html">${icon("folder")}查看项目档案</a>
          <a class="button" href="contact.html">${icon("mail")}联系</a>
        </div>
      </article>

      <article class="panel os-panel">
        <h1>AI Delivery OS</h1>
        <p>从业务问题到可验收交付的标准化操作系</p>
        <div class="delivery-steps">
          ${steps.map(([num, ic, title, text]) => `
            <div class="delivery-step">
              <span>${num}</span>
              <b>${icon(ic)}</b>
              <h3>${title}</h3>
              <p>${text}</p>
            </div>
          `).join("")}
        </div>
        <div class="value-strip">
          <div>${icon("hexagon")}<strong>业务驱动</strong><span>从业务目标出</span></div>
          <div>${icon("brain-circuit")}<strong>AI 原生</strong><span>工具赋能团队</span></div>
          <div>${icon("package-check")}<strong>可验证交付</strong><span>以验收标准牵引</span></div>
          <div>${icon("settings")}<strong>沉淀复用</strong><span>方法与资产持续稳</span></div>
        </div>
      </article>

      <aside class="panel home-projects">
        <div class="panel-heading">
          <h2>代表项目</h2>
          <a href="projects.html">查看全部项目 </a>
        </div>
        <div class="compact-projects">
          ${projectCards.map((item) => `
            <a class="compact-project" href="${item.href}">
              ${visualCard(item)}
              <div><h3>${item.title}</h3><p>${item.summary}</p><em>${item.badge}</em></div>
              <strong></strong>
            </a>
          `).join("")}
        </div>
      </aside>

      <article class="panel bottom-capability">${icon("user-round")}<div><h2>业务理解</h2><p>把问题拆清楚，价值看得见</p><ul><li>深入调研业务场景与流程</li><li>识别核心问题与价值机会</li><li>明确目标用户与验收标准</li></ul></div></article>
      <article class="panel bottom-capability">${icon("box")}<div><h2>AI 应用能力</h2><p>选对技术，用好 AI 工具</p><ul><li>RAG、Agent、OCR 等方案设计</li><li>Prompt 工程与工作流编排</li><li>快速原型验证与方案迭代</li></ul></div></article>
      <article class="panel bottom-capability accent">${icon("rocket")}<div><h2>交付方式</h2><p>方法驱动交付，结果可验收</p><ul><li>敏捷计划与阶段性交付</li><li>系统集成与上线保障</li><li>验收交付与复盘持续优化</li></ul></div></article>
    </section>
  `, "index.html");
}

function homeIcon(name) {
  const common = 'viewBox="0 0 64 64" aria-hidden="true" focusable="false"';
  const icons = {
    search: `<svg ${common}><circle cx="28" cy="28" r="15"></circle><path d="M39 39 51 51"></path></svg>`,
    doc: `<svg ${common}><path d="M20 10h18l10 10v34H20z"></path><path d="M38 10v12h10"></path><path d="M26 31h16M26 39h16M26 47h10"></path></svg>`,
    "file-text": `<svg ${common}><path d="M18 8h22l10 10v38H18z"></path><path d="M40 8v12h10"></path><path d="M25 31h18M25 39h18M25 47h12"></path></svg>`,
    "file-code": `<svg ${common}><path d="M18 8h22l10 10v38H18z"></path><path d="M40 8v12h10"></path><path d="m29 34-6 6 6 6"></path><path d="m39 34 6 6-6 6"></path></svg>`,
    files: `<svg ${common}><path d="M17 17h28v37H17z"></path><path d="M24 10h28v37"></path><path d="M24 30h14M24 38h14M24 46h9"></path></svg>`,
    presentation: `<svg ${common}><rect x="13" y="12" width="38" height="28" rx="3"></rect><path d="M32 40v12M23 54l9-8 9 8"></path><path d="M23 30l6-6 5 4 8-9"></path></svg>`,
    code: `<svg ${common}><path d="m25 22-10 10 10 10"></path><path d="m39 22 10 10-10 10"></path><path d="m35 18-6 28"></path></svg>`,
    "code-box": `<svg ${common}><rect x="12" y="16" width="40" height="32" rx="4"></rect><path d="m28 26-7 6 7 6"></path><path d="m36 26 7 6-7 6"></path><path d="m34 24-4 16"></path></svg>`,
    cube: `<svg ${common}><path d="m32 8 22 12v24L32 56 10 44V20z"></path><path d="M10 20 32 32l22-12"></path><path d="M32 32v24"></path></svg>`,
    check: `<svg ${common}><rect x="14" y="14" width="36" height="36" rx="6"></rect><path d="m23 32 7 7 13-16"></path></svg>`,
    "circle-check": `<svg ${common}><circle cx="32" cy="32" r="20"></circle><path d="m23 32 6 6 13-14"></path></svg>`,
    clipboard: `<svg ${common}><path d="M22 14h20"></path><path d="M24 10h16l2 8H22z"></path><rect x="16" y="16" width="32" height="40" rx="5"></rect><path d="m24 37 6 6 12-16"></path></svg>`,
    target: `<svg ${common}><circle cx="32" cy="32" r="20"></circle><circle cx="32" cy="32" r="9"></circle><path d="M32 8v9M32 47v9M8 32h9M47 32h9"></path></svg>`,
    edit: `<svg ${common}><rect x="14" y="12" width="32" height="40" rx="4"></rect><path d="M23 25h16M23 34h11"></path><path d="m38 43 12-12 5 5-12 12-7 2z"></path></svg>`,
    folder: `<svg ${common}><path d="M8 20h18l5 6h25v26H8z"></path><path d="M8 20v-6h16l5 6"></path></svg>`,
    mail: `<svg ${common}><rect x="10" y="16" width="44" height="34" rx="4"></rect><path d="m12 20 20 16 20-16"></path></svg>`,
    clock: `<svg ${common}><circle cx="32" cy="32" r="20"></circle><path d="M32 20v13l9 5"></path></svg>`,
    gear: `<svg ${common}><circle cx="32" cy="32" r="7"></circle><path d="M32 10v8M32 46v8M10 32h8M46 32h8M16 16l6 6M42 42l6 6M48 16l-6 6M22 42l-6 6"></path></svg>`,
    shield: `<svg ${common}><path d="M32 8 50 16v15c0 12-7 20-18 25-11-5-18-13-18-25V16z"></path><path d="m24 32 6 6 12-14"></path></svg>`,
    user: `<svg ${common}><circle cx="32" cy="22" r="12"></circle><path d="M12 56c3-14 13-22 20-22s17 8 20 22"></path></svg>`,
    users: `<svg ${common}><circle cx="25" cy="23" r="8"></circle><path d="M10 52c2-10 9-16 15-16s13 6 15 16"></path><circle cx="42" cy="25" r="7"></circle><path d="M37 39c7 1 13 6 15 13"></path></svg>`,
    brain: `<svg ${common}><path d="M24 14c-7 0-12 5-12 12 0 3 1 6 4 8-2 9 4 16 12 16h8c8 0 14-7 12-16 3-2 4-5 4-8 0-7-5-12-12-12"></path><path d="M28 14v36M36 14v36M20 28h24M20 38h24"></path></svg>`,
    building: `<svg ${common}><path d="M15 54V18l17-8 17 8v36"></path><path d="M23 25h4M37 25h4M23 34h4M37 34h4M23 43h4M37 43h4M10 54h44"></path></svg>`,
    message: `<svg ${common}><rect x="10" y="14" width="44" height="34" rx="5"></rect><path d="M22 48 14 56v-9"></path><path d="M22 28h20M22 36h13"></path></svg>`,
    warning: `<svg ${common}><path d="M32 10 56 52H8z"></path><path d="M32 25v12M32 45h.1"></path></svg>`,
    grid: `<svg ${common}><rect x="13" y="13" width="13" height="13" rx="2"></rect><rect x="38" y="13" width="13" height="13" rx="2"></rect><rect x="13" y="38" width="13" height="13" rx="2"></rect><rect x="38" y="38" width="13" height="13" rx="2"></rect></svg>`,
    refresh: `<svg ${common}><path d="M49 20a20 20 0 0 0-34 8"></path><path d="M15 18v10h10"></path><path d="M15 44a20 20 0 0 0 34-8"></path><path d="M49 46V36H39"></path></svg>`,
    route: `<svg ${common}><rect x="12" y="14" width="18" height="18" rx="3"></rect><rect x="34" y="32" width="18" height="18" rx="3"></rect><path d="M30 23h8a5 5 0 0 1 5 5v4"></path><path d="m18 23 4 4 8-10"></path></svg>`,
    overview: `<svg ${common}><rect x="12" y="14" width="32" height="32" rx="5"></rect><path d="m20 31 6 6 11-15"></path><path d="M43 18h9v9"></path><path d="M50 20 40 30"></path></svg>`,
    "arrow-left": `<svg ${common}><path d="M38 18 24 32l14 14"></path><path d="M25 32h26"></path></svg>`,
    ai: `<svg ${common}><path d="m32 8 22 12v24L32 56 10 44V20z"></path><path d="M22 42V26l10-6 10 6v16"></path><path d="M26 36h12M27 30h10"></path></svg>`,
    rocket: `<svg ${common}><path d="M39 7c8 3 14 9 17 17L39 41 23 25z"></path><path d="M23 25 12 28l10 6"></path><path d="M39 41l-3 11-6-10"></path><path d="M23 41 12 52"></path><circle cx="42" cy="21" r="4"></circle></svg>`,
    database: `<svg ${common}><ellipse cx="32" cy="16" rx="18" ry="8"></ellipse><path d="M14 16v24c0 4 8 8 18 8s18-4 18-8V16"></path><path d="M14 28c0 4 8 8 18 8s18-4 18-8"></path></svg>`,
    network: `<svg ${common}><circle cx="32" cy="32" r="7"></circle><circle cx="16" cy="18" r="5"></circle><circle cx="48" cy="18" r="5"></circle><circle cx="16" cy="46" r="5"></circle><circle cx="48" cy="46" r="5"></circle><path d="M21 21 27 28M43 21 37 28M21 43l6-7M43 43l-6-7"></path></svg>`,
    store: `<svg ${common}><path d="M12 26h40l-4-12H16z"></path><path d="M16 26v26h32V26"></path><path d="M24 52V38h16v14"></path><path d="M10 26c2 6 10 6 12 0 2 6 10 6 12 0 2 6 10 6 12 0 2 6 8 6 10 0"></path></svg>`,
    video: `<svg ${common}><rect x="10" y="18" width="34" height="28" rx="5"></rect><path d="m44 28 12-7v22l-12-7z"></path></svg>`,
    "play-square": `<svg ${common}><rect x="12" y="12" width="40" height="40" rx="6"></rect><path d="m28 24 14 8-14 8z"></path></svg>`,
    "audio-lines": `<svg ${common}><path d="M14 35v-6M23 43V21M32 49V15M41 43V21M50 35v-6"></path></svg>`,
    scissors: `<svg ${common}><circle cx="20" cy="20" r="7"></circle><circle cx="20" cy="44" r="7"></circle><path d="M26 25 50 12M26 39l24 13M29 32h23"></path></svg>`,
    captions: `<svg ${common}><rect x="10" y="14" width="44" height="36" rx="5"></rect><path d="M20 30h9M35 30h9M20 39h24"></path></svg>`,
    gem: `<svg ${common}><path d="m20 10 24 0 12 14-24 30L8 24z"></path><path d="M8 24h48M20 10l12 14 12-14M20 10 8 24M44 10l12 14"></path></svg>`,
    workflow: `<svg ${common}><rect x="10" y="12" width="16" height="16" rx="4"></rect><rect x="38" y="36" width="16" height="16" rx="4"></rect><path d="M26 20h6a8 8 0 0 1 8 8v8M38 44h-6a8 8 0 0 1-8-8v-8"></path></svg>`,
    "calendar-check": `<svg ${common}><rect x="12" y="16" width="40" height="36" rx="5"></rect><path d="M22 10v12M42 10v12M12 27h40"></path><path d="m23 40 6 6 13-15"></path></svg>`,
    crown: `<svg ${common}><path d="M12 48h40l4-26-14 10-10-18-10 18L8 22z"></path><path d="M17 54h30"></path></svg>`,
    paw: `<svg ${common}><ellipse cx="22" cy="24" rx="6" ry="8"></ellipse><ellipse cx="42" cy="24" rx="6" ry="8"></ellipse><ellipse cx="15" cy="37" rx="5" ry="7" transform="rotate(-20 15 37)"></ellipse><ellipse cx="49" cy="37" rx="5" ry="7" transform="rotate(20 49 37)"></ellipse><path d="M21 48c1-9 7-15 11-15s10 6 11 15c1 7-5 9-11 6-6 3-12 1-11-6z"></path></svg>`,
    chart: `<svg ${common}><path d="M12 52h42"></path><path d="M18 45V30M30 45V20M42 45V26M54 45V14"></path><path d="m16 28 12-10 12 6 12-13"></path></svg>`,
  };
  return icons[name] || icons.cube;
}

function projectVisualMarkup(type) {
  const visuals = {
    database: `
      <div class="project-visual-core database-core">
        <i></i><i></i><i></i>
      </div>
    `,
    network: `
      <div class="project-visual-core network-core">
        <i></i><i></i><i></i><i></i><i></i>
        <span></span><span></span><span></span><span></span>
      </div>
    `,
    store: `
      <div class="project-visual-core phone-core">
        <i></i><b></b><b></b><b></b><b></b><b></b>
      </div>
    `,
    video: `
      <div class="project-visual-core video-core">
        <i></i><b></b>
      </div>
    `,
  };
  return `
    <div class="home-project-visual home-project-${type}">
      ${visuals[type] || homeIcon(type)}
      <span class="visual-glow"></span>
    </div>
  `;
}

function homeSlice(name) {
  return `assets/home-slices/clean/${name}.png`;
}

function deliverySlice(name, className = "") {
  const classAttr = className ? ` class="${className}"` : "";
  return `<img${classAttr} src="assets/delivery-slices/icons/${name}.png" alt="" aria-hidden="true" />`;
}

function scaleHomeCanvas() {
  const canvas = document.querySelector(".home-canvas, .delivery-canvas, .d2-canvas, .projects-canvas, .pm2-canvas, .r2-canvas, .c2-canvas, .rag-canvas, .agent-canvas, .pet-canvas");
  if (!canvas) {
    return;
  }

  const designWidth = Number(canvas.dataset.designWidth || 1672);
  const designHeight = Number(canvas.dataset.designHeight || 900);
  const scale = Math.min(window.innerWidth / designWidth, window.innerHeight / designHeight);
  const cappedScale = String(Math.min(scale, 1.25));
  canvas.style.setProperty("--home-scale", cappedScale);
  canvas.style.setProperty("--delivery-scale", cappedScale);
  canvas.style.setProperty("--d2-scale", cappedScale);
  canvas.style.setProperty("--projects-scale", cappedScale);
  canvas.style.setProperty("--pm-scale", cappedScale);
  canvas.style.setProperty("--resume-scale", cappedScale);
  canvas.style.setProperty("--contact-scale", cappedScale);
  canvas.style.setProperty("--rag-scale", cappedScale);
  canvas.style.setProperty("--agent-scale", cappedScale);
  canvas.style.setProperty("--pet-scale", cappedScale);
}

function renderHomeReal() {
  const flow = [
    ["01", "step-search", "业务识别", "识别业务场景、角色流程与问题，明确价值与验收标准。"],
    ["02", "step-doc", "方案定义", "定义 RAG / Agent / 工作流方案，确定实现路径与交付计划。"],
    ["03", "step-code", "原型验证", "快速构建原型，验证方案可行性，打磨 MVP 与验收要点。"],
    ["04", "step-cube", "系统落地", "开发集成、数据接入、部署上线，保障系统稳定可用。"],
    ["05", "step-check", "验收复盘", "测试验收、培训交付、复盘总结，沉淀经验持续优化。"],
  ];
  const homeProjects = [
    ["enterprise-rag.html", "proj-rag", "RAG 知识资产平台", "面向团队与项目资料沉淀，探索文档检索、知识问答与引用定位。", "产品定义"],
    ["agentops-studio.html", "proj-agent", "多 Agent 协作产品", "PM Agent 调度多 Agent，构建可观测的 AI 软件工厂流程。", "技术方案"],
    ["pet-miniapp.html", "proj-pet", "宠物店小程序", "会员、预约、商品与订单管理，准备上线，对接收银会员系统。", "小程序"],
    ["coze-video.html", "proj-video", "Coze 视频优化工作流", "视频智能剪辑与视频转学习文档，沉淀可复用 AIGC 工作流。", "多模态内容"],
  ];

  mount(`
    <section class="home-stage" aria-label="蔡峰 AI 应用产品化与交付首页">
      <div class="home-canvas">
        <header class="home-topbar">
          <a class="home-brand" href="index.html" aria-label="蔡峰首页">
            <span class="home-brand-mark">CF</span>
            <span><strong>蔡峰</strong><small>AI 应用产品化与交付</small></span>
          </a>
          <nav class="home-nav" aria-label="主导航">
            <a class="is-active" href="index.html">首页</a>
            <a href="delivery-method.html">交付链路</a>
            <a href="projects.html">AI项目</a>
            <a href="pm-delivery.html">政企交付</a>
            <a href="resume.html">简历</a>
            <a href="contact.html">联系</a>
          </nav>
          <a class="home-archive" href="projects.html">${icon("folder")}查看项目档案</a>
        </header>

        <main class="home-board">
          <article class="home-card home-hero-card">
            <div class="home-orbit" aria-hidden="true"></div>
            <h1>蔡峰</h1>
            <h2>AI 应用产品化与交付</h2>
            <p class="home-claim">把 AI 能力推进到业务可验收交付</p>
            <span class="home-rule"></span>
            <ul class="home-facts">
              <li>${icon("alarm-clock")}8 年项目管理经验</li>
              <li>${icon("settings")}5 年技术开发 + PMP</li>
              <li>${icon("shield-check")}专注 RAG、多 Agent 与 AI 应用落地</li>
              <li>${icon("badge-check")}从 PoC 到 MVP，再到可验收交付</li>
            </ul>
            <div class="home-actions">
              <a class="home-btn primary" href="projects.html">${icon("folder")}查看项目档案</a>
              <a class="home-btn" href="contact.html">${icon("mail")}联系</a>
            </div>
          </article>

          <article class="home-card home-os-card">
            <h2>AI Delivery OS</h2>
            <p>从业务问题到可验收交付的标准化操作系统</p>
            <div class="home-flow">
              ${flow.map(([num, img, title, text]) => `
                <section class="home-flow-step">
                  <strong>${num}</strong>
                  <img src="${homeSlice(img)}" alt="" />
                  <h3>${title}</h3>
                  <p>${text}</p>
                </section>
              `).join("")}
            </div>
            <div class="home-principles">
              <div>${icon("box")}<strong>业务驱动</strong><span>从业务目标出发</span></div>
              <div>${icon("network")}<strong>AI 原生</strong><span>工具赋能团队提效</span></div>
              <div>${icon("shield-check")}<strong>可验证交付</strong><span>以验收标准为牵引</span></div>
              <div>${icon("settings")}<strong>沉淀复用</strong><span>方法与资产持续沉淀</span></div>
            </div>
          </article>

          <aside class="home-card home-project-card">
            <div class="home-section-head">
              <h2>代表项目</h2>
              <a href="projects.html">查看全部项目 </a>
            </div>
            <div class="home-project-list">
              ${homeProjects.map(([href, img, title, text, badge]) => `
                <a class="home-project-item" href="${href}">
                  <img src="${homeSlice(img)}" alt="" />
                  <span><strong>${title}</strong><small>${text}</small><em>${badge}</em></span>
                  <b></b>
                </a>
              `).join("")}
            </div>
          </aside>

          <article class="home-card home-capability home-business">
            <img src="${homeSlice("bottom-user")}" alt="" />
            <div><h2>业务理解</h2><p>把问题拆清楚，价值看得见</p><ul><li>深入调研业务场景与流程</li><li>识别核心问题与价值机会</li><li>明确目标用户与验收标准</li></ul></div>
          </article>
          <article class="home-card home-capability home-ai">
            <img src="${homeSlice("bottom-ai")}" alt="" />
            <div><h2>AI 应用能力</h2><p>选对技术，用好 AI 工具</p><ul><li>RAG、Agent、OCR 等方案设计</li><li>Prompt 工程与工作流编排</li><li>快速原型验证与方案迭代</li></ul></div>
          </article>
          <article class="home-card home-capability home-delivery">
            <img src="${homeSlice("bottom-rocket")}" alt="" />
            <div><h2>交付方式</h2><p>方法驱动交付，结果可验收</p><ul><li>敏捷计划与阶段性交付</li><li>系统集成与上线保障</li><li>验收交付与复盘持续优化</li></ul></div>
          </article>
        </main>
      </div>
    </section>
  `, "index.html");
  requestAnimationFrame(scaleHomeCanvas);
  return;

  const steps = [
    ["01", "search", "业务识别", "识别业务场景、角色流程与问题，明确价值与验收标准。"],
    ["02", "doc", "方案定义", "定义 RAG / Agent / 工作流方案，确定实现路径与交付计划。"],
    ["03", "code", "原型验证", "快速构建原型，验证方案可行性，打磨 MVP 与验收要点。"],
    ["04", "cube", "系统落地", "开发集成、数据接入、部署上线，保障系统稳定可用。"],
    ["05", "check", "验收复盘", "测试验收、培训交付、复盘总结，沉淀经验持续优化。"],
  ];
  const projects = [
    ["enterprise-rag.html", "database", "RAG 知识资产平台", "面向团队与项目资料沉淀，探索文档检索、知识问答与引用定位。", "知识资产"],
    ["agentops-studio.html", "network", "AgentOps Studio 多 Agent 协作产品", "通过 PM Agent 调度多 Agent，把需求、设计、开发、测试和交付过程产品化。", "Agent 协作"],
    ["pet-miniapp.html", "store", "宠物店小程序", "围绕宠物店经营，覆盖会员、预约、商品和收银会员系统对接。", "门店业务"],
    ["coze-video.html", "video", "Coze 视频优化工作流", "串联音频提取、ASR、LLM 结构化、剪辑与学习文档生成。", "内容生产"],
  ];

  mount(`
    <section class="home-grid home-developed">
      <article class="panel identity-panel">
        <div class="planet-grid"></div>
        <h1>蔡峰</h1>
        <h2>AI 应用产品化与交付</h2>
        <p class="hero-line">把 AI 能力推进到业务可验收交付</p>
        <div class="thin-line"></div>
        <ul class="identity-list">
          <li>${homeIcon("clock")}8 年项目管理经验</li>
          <li>${homeIcon("gear")}5 年技术开发 + PMP</li>
          <li>${homeIcon("shield")}专注 RAG、多 Agent 与 AI 应用落地</li>
          <li>${homeIcon("check")}从 PoC 到 MVP，再到可验收交付</li>
        </ul>
        <div class="button-row">
          <a class="button primary" href="projects.html">${homeIcon("folder")}查看项目档案</a>
          <a class="button" href="contact.html">${homeIcon("mail")}联系</a>
        </div>
      </article>

      <article class="panel os-panel">
        <h1>AI Delivery OS</h1>
        <p>从业务问题到可验收交付的标准化操作系</p>
        <div class="delivery-steps">
          ${steps.map(([num, ic, title, text]) => `
            <div class="delivery-step">
              <span>${num}</span>
              <b>${homeIcon(ic)}</b>
              <h3>${title}</h3>
              <p>${text}</p>
            </div>
          `).join("")}
        </div>
        <div class="value-strip">
          <div>${homeIcon("cube")}<strong>业务驱动</strong><span>从业务目标出</span></div>
          <div>${homeIcon("network")}<strong>AI 原生</strong><span>工具赋能团队</span></div>
          <div>${homeIcon("shield")}<strong>可验证交付</strong><span>以验收标准牵引</span></div>
          <div>${homeIcon("gear")}<strong>沉淀复用</strong><span>方法与资产持续稳</span></div>
        </div>
      </article>

      <aside class="panel home-projects">
        <div class="panel-heading">
          <h2>代表项目</h2>
          <a href="projects.html">查看全部项目 </a>
        </div>
        <div class="compact-projects">
          ${projects.map(([href, visual, title, summary, badge]) => `
            <a class="compact-project" href="${href}">
              ${projectVisualMarkup(visual)}
              <div><h3>${title}</h3><p>${summary}</p><em>${badge}</em></div>
              <strong></strong>
            </a>
          `).join("")}
        </div>
      </aside>

      <article class="panel bottom-capability">${homeIcon("user")}<div><h2>业务理解</h2><p>把问题拆清楚，价值看得见</p><ul><li>深入调研业务场景与流程</li><li>识别核心问题与价值机会</li><li>明确目标用户与验收标准</li></ul></div></article>
      <article class="panel bottom-capability">${homeIcon("ai")}<div><h2>AI 应用能力</h2><p>选对技术，用好 AI 工具</p><ul><li>RAG、Agent、OCR 等方案设计</li><li>Prompt 工程与工作流编排</li><li>快速原型验证与方案迭代</li></ul></div></article>
      <article class="panel bottom-capability accent">${homeIcon("rocket")}<div><h2>交付方式</h2><p>方法驱动交付，结果可验收</p><ul><li>敏捷计划与阶段性交付</li><li>系统集成与上线保障</li><li>验收交付与复盘持续优化</li></ul></div></article>
    </section>
  `, "index.html");
}

function renderProjects() {
  const filters = ["全部项目", "知识资产", "Agent 协作", "门店业务", "内容生产"];
  const rowIcons = ["box", "gauge", "package-check", "circle-x"];
  const projects = [
    {
      href: "enterprise-rag.html",
      num: "01",
      title: "RAG 知识资产平台",
      tag: "知识资产",
      image: "art-rag.png",
      imageClass: "is-rag",
      summary: "沉淀项目资料与文档，探索可检索、可复用并附带引用依据的知识入口。",
      rows: [
        ["业务场景", "团队与项目资料分散，检索效率低，知识难沉淀与复用。"],
        ["AI 介入", "RAG 检索增强、向量检索、重排序、生成式问答与引用溯源。"],
        ["交付边界", "面向文档检索与问答的应用交付，不包含业务系统改造。"],
        ["当前问题", "长文档分块质量不稳定，部分领域知识覆盖仍需补充。"],
      ],
    },
    {
      href: "agentops-studio.html",
      num: "02",
      title: "多 Agent 协作产品",
      tag: "Agent 协作",
      image: "art-agent.png",
      imageClass: "is-agent",
      summary: "面向个人开发与小型项目团队，通过 PM Agent 调度多 Agent，构建可观测的 AI 软件工厂。",
      rows: [
        ["业务场景", "个人开发与小团队需要拆解需求、分派任务、跟踪执行状态。"],
        ["AI 介入", "PM Agent 调度、角色边界、工具权限白名单与 SSE 实时事件流。"],
        ["交付边界", "聚焦 AI 软件工厂流程验证，不承诺完全自动化软件生产。"],
        ["当前问题", "Agent 状态同步、异常处理和产出校验机制仍需优化。"],
      ],
    },
    {
      href: "pet-miniapp.html",
      num: "03",
      title: "宠物店小程序",
      tag: "门店业务",
      image: "art-pet.png",
      imageClass: "is-pet",
      summary: "会员、预约、商品与服务的一体化运营小程序，准备上线并对接现有收银会员系统。",
      rows: [
        ["业务场景", "门店会员分散、预约管理混乱，服务与商品运营缺少统一入口。"],
        ["AI 介入", "辅助页面、模块、配置、测试脚本和运营内容生成。"],
        ["交付边界", "小程序前端、后台管理与现有收银会员系统对接，不替代收银系统。"],
        ["当前问题", "上线前仍需完成会员数据、订单核销与收银系统联调。"],
      ],
    },
    {
      href: "coze-video.html",
      num: "04",
      title: "Coze 视频优化工作流",
      tag: "内容生产",
      image: "art-video.png",
      imageClass: "is-video",
      summary: "覆盖视频智能剪辑与视频转学习文档的 AIGC 工作流。",
      rows: [
        ["业务场景", "视频剪辑与学习文档整理重复耗时，需要标准化处理流程。"],
        ["AI 介入", "ASR 转录、LLM 结构化、剪辑参数生成与 Markdown 输出。"],
        ["交付边界", "聚焦内容生产流程自动化，不包括内容分发与投放。"],
        ["当前问题", "片段边界、时间轴对齐和人工复核机制仍需强化。"],
      ],
    },
  ];

  mount(`
    <section class="projects-stage" aria-label="AI 项目档案">
      <div class="projects-canvas" data-design-width="1652" data-design-height="952">
        <header class="projects-topbar">
          <a class="projects-brand" href="index.html" aria-label="蔡峰首页">
            <span class="projects-brand-mark">CF</span>
            <span><strong>蔡峰</strong><small>AI 应用产品化与交付</small></span>
          </a>
          <nav class="projects-nav" aria-label="主导航">
            <a href="index.html">首页</a>
            <a href="delivery-method.html">交付链路</a>
            <a class="is-active" href="projects.html">AI项目</a>
            <a href="pm-delivery.html">政企交付</a>
            <a href="resume.html">简历</a>
            <a href="contact.html">联系</a>
          </nav>
          <a class="projects-archive" href="projects.html">${icon("folder")}查看项目档案</a>
        </header>

        <main class="projects-board">
          <section class="projects-hero">
            <span class="projects-title-icon"><img src="assets/projects-slices/title-folder.png" alt="" aria-hidden="true" /></span>
            <div class="projects-title-copy">
              <h1>项目档案</h1>
              <h2>代表项目不是工具清单，而是 AI 落地样本</h2>
              <p>精选代表项目案例，覆盖知识资产、Agent 协作、门店业务与内容生产，展示从业务问题识别到可验收交付的完整过程。</p>
            </div>
            <div class="projects-filter" aria-label="项目分类">
              ${filters.map((item, index) => `<span class="${index === 0 ? "is-active" : ""}">${item}</span>`).join("")}
            </div>
          </section>

          <section class="projects-grid" aria-label="代表项目">
            ${projects.map((item) => `
              <a class="projects-case" href="${item.href}">
                <strong class="projects-case-num">${item.num}</strong>
                <div class="projects-case-art ${item.imageClass}">
                  <img src="assets/projects-slices/${item.image}" alt="" aria-hidden="true" />
                </div>
                <div class="projects-case-copy">
                  <div class="projects-case-head">
                    <h3>${item.title}</h3>
                    <span>${item.tag}</span>
                  </div>
                  <p class="projects-case-summary">${item.summary}</p>
                  <div class="projects-case-rows">
                    ${item.rows.map(([label, text], index) => `
                      <p>${icon(rowIcons[index])}<strong>${label}</strong><em>${text}</em></p>
                    `).join("")}
                  </div>
                  <b>查看案例 </b>
                </div>
              </a>
            `).join("")}
          </section>

          <p class="projects-note">${icon("info")}更多项目正在沉淀中，欢迎联系沟通了解更多案例细节与交付材料</p>
        </main>
    </section>
  `, "projects.html");
  requestAnimationFrame(scaleHomeCanvas);
}

function renderDeliveryReal() {
  const flow = [
    ["01", "search", "业务识别", ["识别业务场景", "明确核心问题", "判断价值与可行性"]],
    ["02", "target", "需求边界", ["梳理需求范围", "定义约束条件", "明确输出与边界"]],
    ["03", "edit", "方案定义", ["设计 AI 方案与流程", "确定关键能力与数据", "形成实施路线"]],
    ["04", "cube", "原型验证", ["快速构建原型", "验证效果与可行性", "迭代优化方案"]],
    ["05", "code-box", "系统落地", ["工程化开发与集成", "数据接入与系统联调", "部署与运行保障"]],
    ["06", "clipboard", "验收复盘", ["验收测试与确认", "复盘总结与沉淀", "持续改进与优化"]],
  ];
  const methodCards = [
    ["01", "需求与边界", ["业务访谈与现状分析", "梳理需求清单与优先级", "定义系统边界与约束条件"], ["需求清单与范围说明", "系统边界与非目标说明", "验收标准（初稿）"]],
    ["02", "AI 方案与原型", ["选择适配的 AI 能力与架构", "设计流程与交互方式", "构建原型并验证核心效果"], ["AI 方案设计文档", "原型演示与验证结果", "迭代优化建议"]],
    ["03", "验收与复盘", ["执行测试用例与验收确认", "整理问题与改进项", "复盘方法与经验沉淀"], ["验收报告与确认意见", "问题清单与改进计划", "复盘文档与优化建议"]],
  ];
  const artifacts = [
    ["file-text", "方案与设计文档"],
    ["presentation", "原型与演示材料"],
    ["file-code", "系统部署与运行说明"],
    ["clipboard", "测试与验收报告"],
    ["files", "复盘总结文档"],
  ];
  const checks = ["功能符合需求，核心流程可用", "关键能力效果达到预期", "数据准确性与权限控制有效", "异常处理与边界情况可控", "运行稳定，满足业务使用条件", "文档完整，便于交接与维护"];
  const loops = [
    ["warning", "失败样本", "收集问题数据<br>定位失败原因", true],
    ["user", "人工确认", "人工复核结果<br>确认修正标注", true],
    ["grid", "规则改进", "优化提示词 / 规则<br>调整策略与流程", true],
    ["refresh", "问题闭环", "验证改进效果<br>沉淀可复用经验", false],
  ];
  const scenarios = [
    ["building", "企业知识与内容系统"],
    ["network", "多 Agent 协作与流程自动化"],
    ["message", "智能客服与问答助手"],
    ["circle-check", "内部工具与小程序"],
  ];

  mount(`
    <section class="delivery-stage" aria-label="蔡峰 AI 应用交付链路">
      <div class="delivery-canvas" data-design-width="1536" data-design-height="1024">
        <header class="home-topbar">
          <a class="home-brand" href="index.html" aria-label="返回首页">
            <span class="home-brand-mark">CF</span>
            <span><strong>蔡峰</strong><small>AI 应用产品化与交付</small></span>
          </a>
          <nav class="home-nav" aria-label="主导航">
            <a href="index.html">首页</a>
            <a class="is-active" href="delivery-method.html">交付链路</a>
            <a href="projects.html">AI项目</a>
            <a href="pm-delivery.html">政企交付</a>
            <a href="resume.html">简历</a>
            <a href="contact.html">联系</a>
          </nav>
          <a class="home-archive" href="projects.html">${homeIcon("folder")}查看项目档案</a>
        </header>

        <aside class="delivery-card delivery-side">
          <p class="delivery-kicker">交付方法体系</p>
          <h2>交付方法体系</h2>
          <nav>
            ${["交付链路总览", "需求与边界", "AI 方案与原型", "工程化落地", "验收与复盘", "交付物清单", "问题闭环"].map((item, index) => `<a class="${index === 0 ? "is-active" : ""}" href="#delivery-${index + 1}">${index === 0 ? homeIcon("route") : `<span>${String(index).padStart(2, "0")}</span>`}${item}</a>`).join("")}
          </nav>
          <div class="delivery-side-note">
            <strong>方法定位</strong>
            <p class="delivery-quote">方法驱动交付，过程可控，结果可验收。</p>
            <p>聚焦 AI 应用从问题识别到可复用、可验证、可运营的完整闭环，确保业务价值落地。</p>
          </div>
          <div class="delivery-side-note delivery-scenarios">
            <strong>适用场景</strong>
            ${scenarios.map(([ic, text]) => `<p>${homeIcon(ic)}${text}</p>`).join("")}
          </div>
          <a class="delivery-back" href="index.html">${homeIcon("arrow-left")}返回首页</a>
        </aside>

        <main class="delivery-board">
          <section class="delivery-hero" id="delivery-1">
            <div>
              <p class="delivery-kicker">交付链路</p>
              <h1>交付链路</h1>
              <h2>从业务问题到可验收交付</h2>
              <p>以业务为起点，结合 AI 能力与工程化方法，确保每个环节可控、可验证，最终实现可验收与可复盘的交付结果。</p>
            </div>
            <img class="delivery-hero-art" src="assets/delivery-slices/delivery-hero-wide.png" alt="" aria-hidden="true" />
          </section>

          <section class="delivery-card delivery-flow-panel" id="delivery-2">
            <div class="delivery-section-head">
              <p class="delivery-kicker">AI 应用交付全流</p>
              <h2>AI 应用交付全流</h2>
            </div>
            <div class="delivery-flow-grid">
              ${flow.map(([num, ic, title, rows]) => `
                <article class="delivery-flow-step">
                  <strong>${num}</strong>
                  <i>${deliverySlice(`flow-${ic}`)}</i>
                  <h3>${title}</h3>
                  <ul>${rows.map((row) => `<li>${row}</li>`).join("")}</ul>
                </article>
              `).join("")}
            </div>
          </section>

          <section class="delivery-detail-grid" id="delivery-3">
            ${methodCards.map(([num, title, actions, outputs]) => `
              <article class="delivery-card delivery-method-card">
                <h3><i>${num === "01" ? deliverySlice("method-check") : num === "02" ? deliverySlice("method-brain") : deliverySlice("method-shield")}</i><span>${num}</span>${title}</h3>
                <div class="delivery-mini-columns">
                  <div><b>关键动作</b><ul>${actions.map((item) => `<li>${item}</li>`).join("")}</ul></div>
                  <div><b>输出成果</b><ul>${outputs.map((item) => `<li>${homeIcon("doc")}${item}</li>`).join("")}</ul></div>
                </div>
              </article>
            `).join("")}
            <article class="delivery-card delivery-artifacts" id="delivery-4">
              <h3>交付物清</h3>
              ${artifacts.map(([ic, item]) => `<span>${homeIcon(ic)}${item}</span>`).join("")}
            </article>
          </section>

          <section class="delivery-bottom" id="delivery-5">
            <article class="delivery-card delivery-checklist">
              <h3>验证清单</h3>
              <div>
                ${checks.map((item) => `<span>${homeIcon("circle-check")}${item}</span>`).join("")}
              </div>
            </article>
            <article class="delivery-card delivery-loop" id="delivery-6">
              <h3>问题闭环</h3>
              <div>
                ${loops.map(([ic, title, desc, warn], index) => `<span class="${warn ? "is-warning" : ""}"><i>${deliverySlice(`loop-${ic}`)}</i><b>${String(index + 1).padStart(2, "0")}</b><strong>${title}</strong><em>${desc}</em></span>`).join("")}
              </div>
              <p>建立问题闭环机制，持续提升系统效果与交付质量，沉淀可复制的方法与资产。</p>
            </article>
          </section>
        </main>
      </div>
    </section>
  `, "delivery-method.html");
  requestAnimationFrame(scaleHomeCanvas);
}

function renderDelivery() {
  const cards = [
    ["01", "业务场景拆解", "不先列工具，而是先还原业务流程、角色、输入输出和人工确认点。", ["需求调研", "流程还原", "范围边界", "验收口径"]],
    ["02", "AI 方案设计", "判断 RAG、Agent、Workflow、ASR、OCR、LLM、Rerank 等能力适合介入的位置。", ["方案选型", "质量边界", "Prompt / Schema", "人工复核"]],
    ["03", "工程化落地", "把模型调用、接口、数据库、异步任务、权限、日志和部署串成可运行链路。", ["接口", "数据库", "部署", "日志"]],
    ["04", "验收与复盘", "用样本、过程记录、失败案例和人工复核结果评估输出质量。", ["测试样本", "失败案例", "交付文档", "复盘沉淀"]],
  ];
  mount(`
    <section class="detail-layout delivery-page">
      ${sidePanel("交付链路", ["业务场景拆解", "AI 方案设计", "工程化落地", "验收与复盘", "风险边界"])}
      <div class="detail-main">
        ${titlePanel("交付链路", "交付链路", "从业务问题到可验收 AI 应用的推进方法。", "route")}
        <div class="method-grid">
          ${cards.map(([num, title, body, tags]) => `
            <article class="panel method-card">
              <h2><span>${num}</span>${title}</h2>
              <p>${body}</p>
              <div>${tags.map((tag) => `<em>${tag}</em>`).join("")}</div>
            </article>
          `).join("")}
        </div>
        <article class="panel process-panel">
          <h2>链路不是线性流程，而是持续验证</h2>
          <div class="horizontal-flow">
            ${["业务目标", "方案定义", "原型验证", "系统上线", "样本评估", "复盘沉淀"].map((item) => `<span>${item}</span>`).join("")}
          </div>
        </article>
        <div class="module-grid three">
          <article class="panel module-card"><h2>交付标准</h2><p>每个阶段都需要明确输入、输出、参与角色和验收口径，避免 AI 项目停留在演示状态。</p></article>
          <article class="panel module-card"><h2>风险控制</h2><p>对模型幻觉、检索缺失、权限边界、异步任务失败和人工复核缺失进行前置设计</p></article>
          <article class="panel module-card"><h2>复盘方式</h2><p>失败样本、用户反馈、日志记录和版本变更是下一轮优化的基础，而不是交付后的附属动作。</p></article>
        </div>
      </div>
    </section>
  `, "delivery-method.html");
}

function sidePanel(title, items, meta = []) {
  return `
    <aside class="side-panel panel">
      <p class="eyebrow">项目案例</p>
      <h2>${title}</h2>
      <nav class="side-nav">
        ${items.map((item, index) => `<a class="${index === 0 ? "is-active" : ""}" href="#section-${index + 1}">${String(index + 1).padStart(2, "0")}〢${item}</a>`).join("")}
      </nav>
      ${meta.length ? `
        <div class="project-info">
          <h3>项目信息</h3>
          ${meta.map(([label, value]) => `<div>${icon("circle-dot")}<span>${label}</span><strong>${value}</strong></div>`).join("")}
        </div>
      ` : ""}
      <a class="back-card" href="projects.html">${icon("arrow-left")}返回项目列表</a>
    </aside>
  `;
}

function titlePanel(kicker, title, subtitle, iconName) {
  return `
    <article class="panel title-panel">
      <div>
        <p class="eyebrow">${kicker}</p>
        <h1>${title}</h1>
        <p>${subtitle}</p>
      </div>
      <div class="hero-visual">${icon(iconName)}</div>
    </article>
  `;
}

function renderModule(module, index) {
  const parts = [];
  if (module.body) parts.push(`<p>${module.body}</p>`);
  if (module.extra) parts.push(`<p>${module.extra}</p>`);
  if (module.list) parts.push(`<ul>${module.list.map((item) => `<li>${item}</li>`).join("")}</ul>`);
  if (module.chips) parts.push(tagList(module.chips));
  if (module.flow) parts.push(`<div class="flow-cards">${module.flow.map((item) => `<span>${icon("square")}<strong>${item}</strong></span>`).join("")}</div>`);
  if (module.footer) parts.push(`<div class="footer-strip">${module.footer.map((item) => `<span>${item}</span>`).join("")}</div>`);
  if (module.rows) parts.push(rowList(module.rows));
  if (module.steps) parts.push(`<ol class="step-list">${module.steps.map((item, i) => `<li><span>${String(i + 1).padStart(2, "0")}</span><strong>${item}</strong></li>`).join("")}</ol>`);
  if (module.warnings) parts.push(`<div class="warning-list">${module.warnings.map(([title, text]) => `<div>${icon("triangle-alert")}<strong>${title}</strong><span>${text}</span></div>`).join("")}</div>`);
  if (module.columns) parts.push(`<div class="reflection-grid">${module.columns.map(([title, text]) => `<div>${icon("badge-check")}<strong>${title}</strong><span>${text}</span></div>`).join("")}</div>`);

  return `
    <article class="panel module-card ${module.flow ? "wide" : ""} ${module.rows ? "tall" : ""} ${module.warnings ? "warning-card" : ""}" id="section-${index + 1}">
      <h2>${module.num ? `<span>${module.num}</span>` : ""}${module.title}</h2>
      ${parts.join("")}
    </article>
  `;
}

function renderCase(page) {
  const data = casePages[page];
  mount(`
    <div class="breadcrumb">AI项目 <span>›</span> 项目案例 <span>›</span> ${data.title}</div>
    <section class="detail-layout">
      ${sidePanel(data.title, data.nav, data.sideMeta)}
      <div class="detail-main">
        ${titlePanel(data.badge, data.title, data.subtitle, data.icon)}
        ${tagList(data.tags)}
        <div class="module-grid">
          ${data.modules.map(renderModule).join("")}
        </div>
      </div>
    </section>
  `, page);
}

function renderEnterpriseRag() {
  const sideNav = ["业务场景", "目标与边界", "逻辑架构", "AI 参与方式", "实现路径", "当前问题", "复盘反思"];
  const facts = [
    ["user", "角色", "AI 应用项目经理"],
    ["building-2", "方向", "知识管理 / AI 应用"],
    ["clock", "项目周期", "2026.03 - 至今"],
    ["users", "团队规模", "个人独立实践"],
    ["shield-check", "项目状态", "能力建设与持续评估"],
  ];
  const arch = [
    ["file-text", "文档接入", "多源文档接入<br>格式解析与清洗"],
    ["target", "切分策略", "结构分段<br>提升 Chunk 质量"],
    ["database", "向量检索", "向量召回<br>语义匹配"],
    ["network", "Rerank", "重排<br>提升相关性"],
    ["file-check-2", "答案生成", "基于上下<br>生成可信答案"],
    ["archive", "引用定位", "原文引用<br>回看与判断"],
  ];
  const aiRows = [
    ["brain-circuit", "语义理解", "理解用户意图，生成检索关键词与改写问题，提升召回覆盖。"],
    ["search", "语义检索", "通过向量化表示语义，跨越关键词边界，找回相关文档片段。"],
    ["refresh-cw", "重排与筛选", "基于相关性与多样性对召回结果重排，过滤低质量片段。"],
    ["message-square-text", "生成回答", "基于检索内容生成结构化回答，支持引用与来源标注。"],
    ["file-check-2", "回答边界", "对无依据内容保持提示，并保留原文引用供人工判断。"],
  ];
  const pathSteps = [
    ["01", "使用场景与资料范围梳理", "梳理资料类型、使用问题与优先级，明确实践范围。"],
    ["02", "资料接入与整理", "接入文档、去重，并补充来源信息与基础元数据。"],
    ["03", "检索链路搭建", "切分策略设计、向量化、检索与重排方案落地。"],
    ["04", "答案生成与评估", "Prompt 设计、引用定位、人工抽样与迭代。"],
    ["05", "效果复盘与持续优化", "记录检索问题与回答样本，持续调整资料与检索策略。"],
  ];
  const warnings = [
    ["Chunk 质量", "部分复杂文档结构切分效果不佳，影响检索与生成质量。"],
    ["召回评估", "缺乏标准化评估集与持续自动化评估机制，效果波动难量化。"],
    ["幻觉控制", "长上下文与高相似片段并存时，模型仍存在一定幻觉风险。"],
  ];
  const reflections = [
    ["file-check-2", "从业务视角驱动方案", "先明确知识的价值与使用方式，再选择技术路线，避免为模型而模型。"],
    ["clipboard-list", "资料与产品需要同步更新", "资料整理、切分策略与检索口径会直接影响回答质量，需要持续优化评估。"],
    ["file-check-2", "引用与回答边界要明确", "不能确认的内容应提示人工回看原文，避免把推测包装成确定结论。"],
  ];

  mount(`
    <section class="rag-stage" aria-label="RAG 知识资产平台">
      <div class="rag-canvas" data-design-width="1536" data-design-height="1024">
        <div class="rag-breadcrumb">AI项目 <span>›</span> 项目案例 <span>›</span> RAG 知识资产平台</div>

        <aside class="rag-sidebar">
          <div class="rag-side-title">项目案例</div>
          <h2>RAG 知识资产平台</h2>
          <nav class="rag-side-nav" aria-label="项目目录">
            ${sideNav.map((item, index) => `<a class="${index === 0 ? "is-active" : ""}" href="#rag-${index + 1}"><span>${String(index + 1).padStart(2, "0")}</span>${item}</a>`).join("")}
          </nav>
          <section class="rag-info">
            <h3>项目信息</h3>
            ${facts.map(([ic, label, value]) => `
              <p>${icon(ic)}<span>${label}</span><strong>${value}</strong></p>
            `).join("")}
          </section>
          <a class="project-prd-card rag-prd-card" href="assets/documents/rag-prd.pdf" target="_blank" rel="noopener noreferrer" aria-label="在新标签打开 RAG 知识资产平台 PRD">
            ${icon("file-text")}
            <span><strong>产品 PRD</strong><small>查看需求文档</small></span>
            ${icon("arrow-up-right")}
          </a>
          <a class="rag-back" href="projects.html">← 返回项目列表</a>
        </aside>

        <main class="rag-main">
          <section class="rag-hero">
            <div>
              <span class="rag-chip">项目案例</span>
              <h1>RAG 知识资产平台</h1>
              <p>沉淀项目资料与文档，探索可检索、可复用并附带引用依据的知识入口</p>
              <div class="rag-tags">
                ${["文档检索", "RAG 问答", "知识沉淀", "多格式文档", "引用定位"].map((tag) => `<span>${tag}</span>`).join("")}
              </div>
            </div>
            <div class="rag-hero-art">
              <img src="assets/projects-slices/rag-hero-art-faded.png" alt="" aria-hidden="true" />
            </div>
          </section>

          <section class="rag-card rag-card-scenario" id="rag-1">
            <h2><span>01</span>业务场景</h2>
            <p>项目资料、流程文档、技术笔记等内容分散在不同位置，查找成本高，已有经验难以沉淀和复用。重复查找与沟通也会拉低协作效率。</p>
            <p>本项目聚焦个人与小团队的知识整理、检索和问答实践，为日常项目协作与学习复盘提供参考。</p>
          </section>

          <section class="rag-card rag-card-goal" id="rag-2">
            <h2><span>02</span>目标与边界</h2>
            <h3>目标</h3>
            <ul>
              <li>整理多来源资料，形成可检索的知识资产</li>
              <li>提供高质量的检索与问答能力，提升知识获取效率。</li>
              <li>在回答中保留引用依据，支持人工回看与判断</li>
            </ul>
            <h3>边界</h3>
            <ul>
              <li>不替代权威业务系统，仅做知识检索与辅助问答</li>
              <li>不处理实时交易数据与强一致业务流程。</li>
            </ul>
          </section>

          <section class="rag-card rag-card-arch" id="rag-3">
            <h2><span>03</span>逻辑架构</h2>
            <div class="rag-arch-flow">
              ${arch.map(([ic, title, desc]) => `
                <article>
                  ${icon(ic)}
                  <strong>${title}</strong>
                  <p>${desc}</p>
                </article>
              `).join("")}
            </div>
            <div class="rag-arch-footer">
              ${["基础支撑层", "文档存储", "向量数据库", "资料目录", "原文引用", "效果记录"].map((item) => `<span>${item}</span>`).join("")}
            </div>
          </section>

          <section class="rag-card rag-card-ai" id="rag-4">
            <h2><span>04</span>AI 参与方式</h2>
            <div class="rag-ai-list">
              ${aiRows.map(([ic, title, text]) => `<p>${icon(ic)}<strong>${title}</strong><span>${text}</span></p>`).join("")}
            </div>
          </section>

          <section class="rag-card rag-card-path" id="rag-5">
            <h2><span>05</span>实现路径</h2>
            <div class="rag-path-list">
              ${pathSteps.map(([num, title, text]) => `<p><b>${num}</b><strong>${title}</strong><span>${text}</span></p>`).join("")}
            </div>
          </section>

          <section class="rag-card rag-card-problems" id="rag-6">
            <h2><span>06</span>当前问题</h2>
            <div class="rag-warning-list">
              ${warnings.map(([title, text]) => `<article>${icon("triangle-alert")}<strong>${title}</strong><p>${text}</p></article>`).join("")}
            </div>
          </section>

          <section class="rag-card rag-card-review" id="rag-7">
            <h2><span>07</span>复盘反思</h2>
            <div class="rag-review-list">
              ${reflections.map(([ic, title, text]) => `<article>${icon(ic)}<div><strong>${title}</strong><p>${text}</p></div></article>`).join("")}
            </div>
          </section>
        </main>
      </div>
    </section>
  `, "enterprise-rag.html");
  requestAnimationFrame(scaleHomeCanvas);
}

function renderAgentOpsStudio() {
  const caseLinks = [
    ["enterprise-rag.html", "RAG 知识资产平台"],
    ["agentops-studio.html", "多 Agent 协作产品"],
    ["pet-miniapp.html", "宠物店小程序"],
    ["coze-video.html", "Coze 视频工作流"],
    ["ocr-erp.html", "OCR 单据、ERP"],
  ];
  const facts = [
    ["bot", "角色", "AI 应用产品项目经理"],
    ["layout-dashboard", "行业", "AI 软件工厂 / 项目可视化"],
    ["clock", "项目周期", "2026.03 - 至今"],
    ["users", "团队规模", "个人独立实践"],
    ["shield-check", "项目状态", "产品机制验证与迭代"],
  ];
  const tags = ["多 Agent 编排", "任务协同", "流程监控", "结果校验", "可观测"];
  const agents = [
    ["sparkles", "Planner", "理解需求，拆解任务，制定执行计划与依赖关系。", "调度"],
    ["search", "Research Agent", "多源检索信息，提炼要点，形成结构化资料。", "检索"],
    ["bot", "Writer Agent", "基于材料生成内容，输出初稿。", "生成"],
    ["shield-check", "Review Agent", "审核内容准确性、完整性与表达质量，提出修订建议。", "审核"],
    ["shield-check", "输出校验", "格式校验、引用检查、敏感内容识别，确认可交付。", "校验"],
  ];
  const statusRows = [
    ["用户任务", "已提交", true],
    ["Planner", "已完成", true],
    ["Research Agent", "进行中", true],
    ["Writer Agent", "等待中", false],
    ["Review Agent", "等待中", false],
    ["输出校验", "等待中", false],
  ];
  const quality = [
    ["shield-check", "内容质量", "要点覆盖、逻辑连贯、表达清晰。"],
    ["boxes", "结构规范", "格式统一、章节完整、引用合规。"],
    ["file-check-2", "合规检查", "敏感内容识别，引用来源有效性检查。"],
  ];
  const issues = [
    "部分任务拆解粒度不足，导致 Agent 执行效果不稳定。",
    "特定领域知识检索覆盖不全，影响资料质量。",
    "Agent 协同边界不清晰，存在重复工作或遗漏。",
    "复杂任务中人工介入时机与准确性仍需进一步优化。",
  ];
  const reviews = [
    "拆解任务时应先明确目标交付物与验收标准，再反推子任务。",
    "持续沉淀领域语料与提示模板，提升 Agent 输出稳定性。",
    "明确多 Agent 职责边界，减少交接损耗。",
    "引入失败样本与人工确认机制，形成持续改进闭环。",
  ];

  mount(`
    <section class="agent-stage" aria-label="多 Agent 协作产品">
      <div class="agent-canvas" data-design-width="1536" data-design-height="1024">
        <div class="agent-breadcrumb">AI项目 <span>›</span> 项目案例 <span>›</span> 多 Agent 协作产品</div>

        <aside class="agent-sidebar">
          <div class="agent-side-title">多 Agent 协作产品</div>
          <p class="agent-side-summary">围绕个人开发与小型项目团队，说明 PM Agent 调度、多 Agent 编排、任务状态观测与复盘闭环</p>
          <nav class="agent-section-nav" aria-label="多 Agent 协作产品目录">
            <a class="is-active" href="#agent-section-01"><span>01</span>业务场景</a>
            <a href="#agent-section-02"><span>02</span>产品目标</a>
            <a href="#agent-section-03"><span>03</span>任务编排逻辑</a>
            <a href="#agent-section-04"><span>04</span>Agent 分工</a>
            <a href="#agent-section-05"><span>05</span>状态观测</a>
            <a href="#agent-section-06"><span>06</span>结果校验</a>
            <a href="#agent-section-07"><span>07</span>当前问题</a>
            <a href="#agent-section-08"><span>08</span>复盘反思</a>
          </nav>
          <section class="agent-info">
            <h3>项目信息</h3>
            ${facts.map(([ic, label, value]) => `<p>${icon(ic)}<span>${label}</span><strong>${value}</strong></p>`).join("")}
          </section>
          <a class="project-prd-card agent-prd-card" href="assets/documents/agentops-prd.pdf" target="_blank" rel="noopener noreferrer" aria-label="在新标签打开多 Agent 协作产品 PRD">
            ${icon("file-text")}
            <span><strong>产品 PRD</strong><small>查看需求文档</small></span>
            ${icon("arrow-up-right")}
          </a>
          <a class="agent-back" href="projects.html">← 返回项目列表</a>
        </aside>

        <main class="agent-main">
          <section class="agent-hero">
            <div class="agent-hero-copy">
              <span class="agent-chip">项目案例</span>
              <h1>多 Agent 协作产品</h1>
              <p>面向个人开发者和小型项目团队，通过 PM Agent 调度多 Agent，串联需求分析、设计、开发、测试与交付过程</p>
              <div class="agent-tags">
                ${tags.map((tag) => `<span>${tag}</span>`).join("")}
              </div>
            </div>
            <div class="agent-hero-art" aria-hidden="true">
              <img src="assets/projects-slices/agent-hero-art-prototype.png" alt="" />
              <i></i><i></i><i></i>
            </div>
          </section>

          <section class="agent-card agent-card-scenario" id="agent-section-01">
            <h2><span>01</span>业务场景</h2>
            <p>个人开发者和小型项目团队在使用 AI 辅助交付时，常遇到需求拆解、上下文管理、任务状态跟踪和结果复核成本高的问题。</p>
            <p>本产品以 AI 软件工厂为方向，通过 PM Agent 对话调度多个专业 Agent，形成可编排、可观测、可复盘的协作流程。</p>
          </section>

          <section class="agent-card agent-card-goal" id="agent-section-02">
            <h2><span>02</span>产品目标</h2>
            <ul>
              <li>定义 8 个 Agent 角色边界、输入输出契约与工具权限白名单</li>
              <li>设计 PM Agent 调度状态机，覆盖需求理解、任务拆解与汇总交付</li>
              <li>通过 SSE 实时事件流展示任务树、Agent 状态和模型调用统计</li>
              <li>以工具沙箱、目录隔离和人工确认降低越权调用与上下文污染风险</li>
            </ul>
          </section>

          <section class="agent-card agent-card-flow" id="agent-section-03">
            <h2><span>03</span>任务编排逻辑</h2>
            <div class="agent-flow-track">
              ${[
                ["user", "用户任务", ""],
                ["clipboard-list", "Planner", "任务拆解"],
                ["search", "Research Agent", "信息检索与整理"],
                ["pencil", "Writer Agent", "内容生成"],
                ["shield-check", "Review Agent", "审核与校对"],
                ["clipboard-check", "输出校验", "质量检查与交付"],
              ].map(([ic, title, text]) => `<article>${icon(ic)}<strong>${title}</strong><p>${text}</p></article>`).join("")}
            </div>
            <p class="agent-flow-note">任务从用户与 PM Agent 对话开始，经过需求理解、追问澄清、任务拆解、依赖链分派、执行反馈与汇总交付。</p>
          </section>

          <section class="agent-card agent-card-roles" id="agent-section-04">
            <h2><span>04</span>Agent 分工</h2>
            <div class="agent-role-list">
              ${agents.map(([ic, name, desc, action]) => `<p>${icon(ic)}<strong>${name}</strong><span>${desc}</span><b>${action}</b></p>`).join("")}
            </div>
          </section>

          <section class="agent-card agent-card-status" id="agent-section-05">
            <h2><span>05</span>状态观测</h2>
            <p>提供任务树、SSE 实时事件流、Agent 状态与模型调用统计，支持过程监控、问题定位和成本评估。</p>
            <div class="agent-status-board">
              <strong>任务执行</strong>
              ${statusRows.map(([name, state, active]) => `<p class="${active ? "is-active" : ""}"><span></span>${name}<em>${state}</em></p>`).join("")}
            </div>
          </section>

          <section class="agent-card agent-card-quality" id="agent-section-06">
            <h2><span>06</span>结果校验</h2>
            <p>从内容质量、结构规范与合规性多个维度进行校验，确保结果可用</p>
            <div class="agent-quality-list">
              ${quality.map(([ic, title, text]) => `<article>${icon(ic)}<div><strong>${title}</strong><p>${text}</p></div></article>`).join("")}
            </div>
          </section>

          <section class="agent-card agent-card-issues" id="agent-section-07">
            <h2><span>07</span>当前问题</h2>
            <div class="agent-issue-body">
              ${icon("triangle-alert")}
              <ul>${issues.map((item) => `<li>${item}</li>`).join("")}</ul>
            </div>
          </section>

          <section class="agent-card agent-card-review" id="agent-section-08">
            <h2><span>08</span>复盘反思</h2>
            <ul>${reviews.map((item) => `<li>${item}</li>`).join("")}</ul>
          </section>

          <section class="agent-proof proof-a">
            <h3>任务拆解</h3>
            <p>明确目标与边界，拆解为可执行、可检查的最小任务单元。</p>
          </section>
          <section class="agent-proof proof-b">
            <h3>人工确认</h3>
            <p>关键节点引入人工确认，保障结果准确可控。</p>
          </section>
          <section class="agent-proof proof-c">
            <h3>失败样本</h3>
            <p>沉淀失败案例，分析原因，反哺流程多 Agent 优化</p>
          </section>
        </main>
      </div>
    </section>
  `, "agentops-studio.html");
  requestAnimationFrame(scaleHomeCanvas);
}

function renderPetMiniapp() {
  const facts = [
    ["file-text", "项目类型", "门店运营小程序"],
    ["building", "所属行业", "宠物服务 / 零售"],
    ["clock", "项目周期", "2026.03 - 至今"],
    ["users", "团队规模", "个人独立实践"],
    ["shield-check", "项目状态", "准备上线，对接现有收银会员系统中"],
  ];
  const tags = ["门店运营", "服务预约", "商品零售", "会员体系", "订单管理"];
  const roles = [
    ["user", "店员", "负责接待、到店核销、订单处理与会员维护。"],
    ["user", "会员", "浏览服务与商品、预约到店、在线下单，查看订单与会员权益。"],
    ["shield-check", "管理员", "配置服务与商品，管理订单，查看经营数据与会员资料。"],
  ];
  const modules = [
    ["users", "会员管理"],
    ["calendar-check", "预约服务"],
    ["store", "商品管理"],
    ["file-text", "订单记录"],
    ["building", "门店运营"],
  ];
  const serviceFlow = [
    ["search", "浏览服务/商品", "查看服务与商品信息"],
    ["calendar-check", "预约/下单", "选择时间或商品并支付"],
    ["store", "到店服务/核销", "服务执行与扫码核销"],
    ["file-text", "订单记录", "查看订单与消费明细"],
    ["crown", "会员运营", "积分、优惠与复购触达"],
  ];
  const pathItems = [
    "梳理服务、商品与会员体系，输出功能清单。",
    "小程序完成预约、下单、会员与订单核心功能。",
    "后台对接订单、商品、会员与核销能力。",
    "联调现有收银会员系统，确认数据与核销流程。",
    "线下接待标准化，持续迭代会员运营工具。",
  ];
  const problems = [
    ["预约冲突与资源占用", "高峰期服务时间与人员排期冲突。"],
    ["会员触达不足", "权益与活动触达不够及时。"],
    ["系统对接联调", "收银会员接口、会员数据与核销流程在联调。"],
  ];
  const reflections = [
    ["file-text", "从门店真实场景出发", "围绕预约、核销、订单与会员，先解决高频刚需，再扩展运营能力。"],
    ["workflow", "线上线下协同是关键", "小程序是连接入口，服务体验依赖线下执行的标准化与系统化。"],
    ["chart", "运营驱动长期价值", "持续完善会员体系与触达机制，提升复购与生命周期价值。"],
  ];

  mount(`
    <section class="pet-stage" aria-label="宠物店小程序">
      <div class="pet-canvas" data-design-width="1536" data-design-height="1024">
        <div class="pet-breadcrumb">AI项目 <span>›</span> 项目案例 <span>›</span> 宠物店小程序</div>

        <aside class="pet-sidebar">
          <div class="pet-side-title">项目案例</div>
          <div class="pet-case-active">宠物店小程序</div>
          <nav class="pet-section-nav" aria-label="宠物店小程序目录">
            <a class="is-active" href="#pet-section-01"><span>01</span>业务场景</a>
            <a href="#pet-section-02"><span>02</span>用户角色</a>
            <a href="#pet-section-03"><span>03</span>功能模块</a>
            <a href="#pet-section-04"><span>04</span>业务流程</a>
            <a href="#pet-section-05"><span>05</span>实现路径</a>
            <a href="#pet-section-06"><span>06</span>当前问题</a>
            <a href="#pet-section-07"><span>07</span>复盘反思</a>
          </nav>
          <section class="pet-info">
            <h3>项目信息</h3>
            ${facts.map(([ic, label, value]) => `<p>${homeIcon(ic)}<span>${label}</span><strong>${value}</strong></p>`).join("")}
          </section>
          <a class="pet-back" href="projects.html">← 返回项目列表</a>
        </aside>

        <main class="pet-main">
          <section class="pet-hero">
            <div class="pet-hero-copy">
              <span class="pet-chip">项目案例</span>
              <h1>宠物店小程序</h1>
              <p>面向宠物店会员、服务与商品的一体化运营小程序，支持预约服务、到店核销、商品销售、会员权益与订单管理，目前准备上线并对接现有收银会员系统。</p>
              <div class="pet-tags">
                ${tags.map((tag) => `<span>${tag}</span>`).join("")}
              </div>
            </div>
            <div class="pet-hero-art" aria-hidden="true">
              <img src="assets/projects-slices/pet-hero-visual-transparent.png" alt="" />
            </div>
          </section>

          <aside class="pet-preview">
            <div class="pet-preview-head">
              <h2>产品预览（微信小程序）</h2>
              <a class="pet-preview-action" href="http://www.aipinpin.cn:8657/pet-store-redesign-v2.html" target="_blank" rel="noopener noreferrer">查看方案 ↗</a>
            </div>
            <div class="pet-phone">
              <a class="pet-phone-link" href="http://www.aipinpin.cn:8657/pet-store-prototype-v2.html" target="_blank" rel="noopener noreferrer" aria-label="查看宠物店小程序线上原型图">
                <img src="assets/projects-slices/pet-online-prototype-home.png" alt="宠物店小程序产品预览" />
              </a>
            </div>
          </aside>

          <section class="pet-card pet-card-scenario" id="pet-section-01">
            <h2><span>01</span>业务场景</h2>
            <p>宠物店日常经营涉及服务预约、到店服务、商品销售与会员运营等环节。传统方式依赖纸笔、微信沟通和线下记录，容易遗漏、效率低，且会员触达与复购不足。</p>
            <p>本项目通过小程序连接会员与门店，线上完成预约、下单与订单查询，线下对接现有收银会员系统完成服务核销与会员数据同步。</p>
          </section>

          <section class="pet-card pet-card-roles" id="pet-section-02">
            <h2><span>02</span>用户角色</h2>
            <div class="pet-role-list">
              ${roles.map(([ic, title, text]) => `<p>${homeIcon(ic)}<strong>${title}</strong><span>${text}</span></p>`).join("")}
            </div>
          </section>

          <section class="pet-card pet-card-modules" id="pet-section-03">
            <h2><span>03</span>功能模块</h2>
            <div class="pet-module-grid">
              ${modules.map(([ic, text]) => `<article>${homeIcon(ic)}<strong>${text}</strong></article>`).join("")}
            </div>
          </section>

          <section class="pet-card pet-card-flow" id="pet-section-04">
            <h2><span>04</span>业务流程</h2>
            <div class="pet-flow-track">
              ${serviceFlow.map(([ic, title, text]) => `<article>${homeIcon(ic)}<strong>${title}</strong><p>${text}</p></article>`).join("")}
            </div>
          </section>

          <section class="pet-card pet-card-path" id="pet-section-05">
            <h2><span>05</span>实现路径</h2>
            <ul>
              ${pathItems.map((item) => `<li>${item}</li>`).join("")}
            </ul>
          </section>

          <section class="pet-card pet-card-problems" id="pet-section-06">
            <h2><span>06</span>当前问题</h2>
            <div class="pet-warning-list">
              ${problems.map(([title, text]) => `<article>${homeIcon("warning")}<div><strong>${title}</strong><p>${text}</p></div></article>`).join("")}
            </div>
          </section>

          <section class="pet-card pet-card-review" id="pet-section-07">
            <h2><span>07</span>复盘反思</h2>
            <div class="pet-review-list">
              ${reflections.map(([ic, title, text]) => `<article>${homeIcon(ic)}<div><strong>${title}</strong><p>${text}</p></div></article>`).join("")}
            </div>
          </section>
        </main>
      </div>
    </section>
  `, "pet-miniapp.html");
  requestAnimationFrame(scaleHomeCanvas);
}

function renderCozeVideo() {
  const facts = [
    ["user", "角色", "AI 应用项目经理"],
    ["layout-dashboard", "行业", "内容生产 / 新媒体"],
    ["clock", "项目周期", "2026.03 - 至今"],
    ["users", "团队规模", "个人独立实践"],
    ["shield-check", "项目状态", "工作流验证与质量优化"],
  ];
  const tags = ["内容生产", "视频智能剪辑", "学习文档", "工作流自动化", "多 Provider"];
  const aiItems = [
    ["audio-lines", "语音识别", "ASR 将音频转写为文本，为后续理解与剪辑提供基础。"],
    ["file-text", "结构化整理", "LLM 将 ASR 文本整理为剪辑依据与学习文档大纲。"],
    ["scissors", "剪辑决策", "模型根据目标时长与节奏，选择关键片段与转场策略。"],
    ["captions", "字幕生成", "自动生成字幕并进行断句、断行、样式排版优化。"],
    ["file-text", "文档生成", "输出 ASR→LLM结构化→Markdown 的学习文档。"],
    ["video", "视频合成", "拼接剪辑片段、字幕与配音，生成候选成片。"],
  ];
  const pathItems = [
    ["01", "需求梳理与流程设计", "定义视频智能剪辑和视频转学习文档两类输出。"],
    ["02", "素材接入与音频提取", "接入视频链接或文件，优先提取音频降低处理等待。"],
    ["03", "ASR 转写与文本清洗", "腾讯云 ASR 转写，清洗口语化文本和时间戳。"],
    ["04", "LLM 结构化与剪辑决策", "DeepSeek/OpenAI/Claude 多 Provider 生成剪辑参数和文档结构。"],
    ["05", "后端任务编排", "Coze 工作流与自建 Flask 后端协作，使用 job_id + 轮询异步任务。"],
    ["06", "输出与人工复核", "输出候选剪辑、字幕和 Markdown 文档，人工复核后使用。"],
  ];
  const problems = [
    ["LLM 乱剪辑", "LLM 可能误解语境，将非重点或错误时间段的内容剪入，导致主题偏离或信息错误。"],
    ["时间轴校验", "复杂口播中的停顿、插入语、重复内容，仍需人工校验时间轴与关键帧准确性。"],
    ["人工确认", "重要内容的准确性、合规性与品牌表达，需经人工最终确认后发布。"],
  ];
  const reflections = [
    ["workflow", "AI 能力擅长内容生产效率", "音频优先下载策略能显著降低等待时间，释放人力专注内容判断。"],
    ["scan-text", "模型理解仍有边界", "音频到文本再到剪辑决策存在信息损耗，需结合规则与人工增强稳定性"],
    ["captions", "流程 + 人机协同是关键", "明确流程节点与人工复核点，才能在效率与质量之间取得平衡。"],
  ];
  const flowNodes = [
    ["folder", "素材输入", "视频链接 / 文件"],
    ["audio-lines", "ASR 文本", "语音识别转写文本"],
    ["file-text", "结构化整理", "提炼主题与章节"],
    ["scissors", "剪辑决策", "生成候选片段"],
    ["captions", "字幕与文档", "字幕 / Markdown"],
    ["play-square", "输出复核", "候选成片与学习文档"],
  ];

  mount(`
    <section class="agent-stage coze-stage" aria-label="Coze 视频优化工作流">
      <div class="agent-canvas coze-canvas" data-design-width="1536" data-design-height="1024">
        <div class="coze-breadcrumb">AI项目 <span>›</span> 项目案例 <span>›</span> Coze 视频优化工作流</div>

        <aside class="coze-sidebar">
          <div class="coze-side-title">项目案例</div>
          <div class="coze-case-active">Coze 视频优化工作流</div>
          <nav class="coze-section-nav" aria-label="Coze 视频优化工作流目录">
            <a class="is-active" href="#coze-section-01"><span>01</span>业务场景</a>
            <a href="#coze-section-02"><span>02</span>目标与边界</a>
            <a href="#coze-section-03"><span>03</span>工作流架构</a>
            <a href="#coze-section-04"><span>04</span>AI 参与方式</a>
            <a href="#coze-section-05"><span>05</span>实现路径</a>
            <a href="#coze-section-06"><span>06</span>当前问题</a>
            <a href="#coze-section-07"><span>07</span>复盘反思</a>
          </nav>
          <section class="coze-info">
            <h3>项目信息</h3>
            ${facts.map(([ic, label, value]) => `<p>${icon(ic)}<span>${label}</span><strong>${value}</strong></p>`).join("")}
          </section>
          <a class="coze-back" href="projects.html">← 返回项目列表</a>
        </aside>

        <main class="coze-main">
          <section class="coze-hero">
            <div class="coze-hero-copy">
              <span class="coze-chip">项目案例</span>
              <h1>Coze 视频优化工作流</h1>
              <p>基于 Coze 工作流与自建 Flask 后端，覆盖视频智能剪辑和视频转学习文档两类场景，串联 ASR、LLM 结构化、剪辑参数生成与 Markdown 输出。</p>
              <div class="coze-tags">
                ${tags.map((tag) => `<span>${tag}</span>`).join("")}
              </div>
            </div>
            <div class="coze-hero-art" aria-hidden="true">
              <img src="assets/projects-slices/coze-hero-art-transparent.png" alt="" />
              <i></i><i></i><i></i>
            </div>
          </section>

          <section class="coze-card coze-card-scenario" id="coze-section-01">
            <h2><span>01</span>业务场景</h2>
            <p>面向视频学习与内容整理场景，需要把长视频快速转成候选剪辑、字幕和结构化学习文档，减少重复剪辑与笔记整理成本。</p>
            <ul>
              <li>视频智能剪辑需要从转录文本中识别候选片段</li>
              <li>视频转学习文档需要 ASR→LLM结构化→Markdown 输出</li>
              <li>Coze 编排与自建后端需要兼顾效率、追踪和可恢复</li>
            </ul>
            <p>本工作流将音频提取、ASR、LLM 结构化、剪辑参数生成和人工复核串联起来，重点提升处理效率和结果可追踪性。</p>
          </section>

          <section class="coze-card coze-card-goal" id="coze-section-02">
            <h2><span>02</span>目标与边界</h2>
            <h3>目标</h3>
            <ul>
              <li>视频智能剪辑：转录、剪切建议、字幕合成</li>
              <li>学习文档：ASR→LLM结构化→Markdown</li>
              <li>job_id + 轮询异步任务，过程可追踪</li>
            </ul>
            <h3>边界</h3>
            <ul>
              <li>依赖 ASR 质量与内容规范</li>
              <li>复杂语境和剪辑审美需人工把控</li>
              <li>版权合规与敏感内容需人工兜底</li>
            </ul>
          </section>

          <section class="coze-card coze-card-flow" id="coze-section-03">
            <h2><span>03</span>工作流架构</h2>
            <div class="coze-flow-track">
              ${flowNodes.map(([ic, title, text]) => `<article>${homeIcon(ic)}<strong>${title}</strong><p>${text}</p></article>`).join("")}
            </div>
            <p class="coze-flow-note">素材管理 <span>|</span> 模板与风格<span>|</span> 多平台适配 <span>|</span> 质量校验 <span>|</span> 人工复核 <span>|</span> 成片发布</p>
          </section>

          <section class="coze-card coze-card-ai" id="coze-section-04">
            <h2><span>04</span>AI 参与方式</h2>
            <div class="coze-ai-list">
              ${aiItems.map(([ic, title, text]) => `<p>${homeIcon(ic)}<strong>${title}</strong><span>${text}</span></p>`).join("")}
            </div>
          </section>

          <section class="coze-card coze-card-path" id="coze-section-05">
            <h2><span>05</span>实现路径</h2>
            <div class="coze-path-list">
              ${pathItems.map(([num, title, text]) => `<p><b>${num}</b><strong>${title}</strong><span>${text}</span></p>`).join("")}
            </div>
          </section>

          <section class="coze-card coze-card-problems" id="coze-section-06">
            <h2><span>06</span>当前问题</h2>
            <div class="coze-warning-list">
              ${problems.map(([title, text]) => `<article>${homeIcon("warning")}<div><strong>${title}</strong><p>${text}</p></div></article>`).join("")}
            </div>
          </section>

          <section class="coze-card coze-card-review" id="coze-section-07">
            <h2><span>07</span>复盘反思</h2>
            <div class="coze-review-list">
              ${reflections.map(([ic, title, text]) => `<article>${homeIcon(ic)}<div><strong>${title}</strong><p>${text}</p></div></article>`).join("")}
            </div>
          </section>
        </main>
      </div>
    </section>
  `, "coze-video.html");
  requestAnimationFrame(scaleHomeCanvas);
}

function renderPmDelivery() {
  const projectCases = [
    ["shield-check", "终端安全沙箱", "安全产品落地", "公安 / 金融 / 政务", "项目经理", "终端安全沙箱产品部署与集成，策略配置、联动与运营落地。", "完成方案设计、部署实施与验收上线，形成手册与培训材料。"],
    ["network", "内网安全管理系统项目集", "", "政务 / 央企", "项目经理", "内网安全管理体系搭建，涵盖资产、审计、风险与策略管控。", "多期交付实现业务系统接入与安全合规要求落地。"],
    ["radar", "零信任 - 环境感知项目", "", "金融 / 政务 / 央企", "项目经理", "零信任体系建设，环境感知、动态认证与访问控制落地。", "完成多场景接入与策略落地，提升业务安全与访问可控性。"],
    ["cloud-cog", "海南社管信息化平台 - 智能运维", "", "政府单位", "产品经理 / 项目经理", "社管信息化平台，涵盖工单、监控、告警、运维流程与可视化。", "完成平台设计、开发与上线，提升运维效率与问题闭环能力。"],
  ];
  const flow = [
    ["01", "clipboard-check", "需求调研", "深入业务场景，梳理痛点与目标，明确范围与优先级。"],
    ["02", "git-branch", "方案设计", "制定技术与实施方案，输出架构、功能与实施计划。"],
    ["03", "scan-text", "WBS 拆解", "拆解任务与里程碑，明确资源、负责人与交付物。"],
    ["04", "shield-check", "跨部门协同", "协调技术、业务、测试、运维等团队，推进关键事项落地。"],
    ["05", "triangle-alert", "风险与变更管理", "识别风险与变更，制定应对策略，确保项目可控推进。"],
    ["06", "package-check", "验收交付", "按验收标准验收，完成上线切换与交付移交。"],
    ["07", "scan-text", "文档沉淀", "沉淀方案、操作、运维等文档，形成可复用知识资产。"],
    ["08", "file-check-2", "项目复盘", "复盘项目过程与结果，提炼改进点与经验教训。"],
  ];
  const capabilities = [
    ["scan-text", "需求与方案能力", "快速理解业务需求，输出清晰的方案与实施路径，确保方案可落地、可执行。"],
    ["calendar-check", "计划与交付能力", "科学制定计划，严控跟踪里程碑，保障按期交付与质量达成。"],
    ["users", "跨部门协同能力", "有效整合资源，推动多角色协同，解决跨团队沟通与推进问题。"],
    ["briefcase", "风险与变更管理能力", "建立风险识别与变更评审机制，降低项目不确定性，保障目标达成。"],
    ["clipboard-check", "验收与运维交付能力", "制定验收标准，完成交付移交，关注可用性与运维可持续。"],
    ["refresh-cw", "复盘与持续改进能力", "复盘项目全过程，沉淀经验，推动流程与方法持续优化。"],
  ];
  const timeline = [
    ["2021.02 - 2025.06", "北信源系统集成", "产品经理 / 项目经理"],
    ["2015.09 - 2021.01", "南京药育信息技术", "研发工程师 / 项目经理"],
    ["2012.09 - 2015.08", "南京仁齐科技", "研发工程师"],
  ];
  const industries = ["公安", "金融", "政务", "央企", "高校信息化"];

  mount(`
    <section class="pm2-stage" aria-label="政企项目交付经历">
      <div class="pm2-canvas" data-design-width="1536" data-design-height="1024">
        <header class="pm2-topbar">
          <a class="pm2-brand" href="index.html" aria-label="蔡峰首页">
            <span class="pm2-brand-mark">CF</span>
            <span><strong>蔡峰</strong><small>AI 应用产品化与交付</small></span>
          </a>
          <nav class="pm2-nav" aria-label="主导航">
            <a href="index.html">首页</a>
            <a href="delivery-method.html">交付链路</a>
            <a href="projects.html">AI项目</a>
            <a class="is-active" href="pm-delivery.html">政企交付</a>
            <a href="resume.html">简历</a>
            <a href="contact.html">联系</a>
          </nav>
          <a class="pm2-archive" href="projects.html">${icon("folder")}查看项目档案</a>
        </header>

        <aside class="pm2-side">
          <h2>${icon("briefcase")}政企交付</h2>
          <p>8年项目管理经验，专注政企 ToB/G 项目交付落地</p>
          <section>
            <h3>职业背景</h3>
            <span>${icon("network")}北信源系统集成</span>
            <span>${icon("building-2")}南京药育信息技术</span>
            <span>${icon("briefcase")}产品经理 / 项目经理</span>
            <span>${icon("landmark")}政企 ToB/G</span>
          </section>
          <section class="pm2-timeline">
            <h3>项目时间</h3>
            ${timeline.map(([year, company, role]) => `<div><b>${year}</b><small>${company}<br>${role}</small></div>`).join("")}
          </section>
          <section class="pm2-industries">
            <h3>服务行业</h3>
            <div>${industries.map((item) => `<span>${item}</span>`).join("")}</div>
          </section>
        </aside>

        <main class="pm2-main">
          <section class="pm2-hero">
            <h1>政企项目交付经历</h1>
            <h2>从需求调研到验收上线、ToB/ToG 项目交付</h2>
            <p>在网络安全、终端安全、零信任与信息化平台等领域，主导多类型政企项目的全流程交付、覆盖需求调研、方案规划、项目推进、验收上线到运维交付与复盘优化，帮助客户落地可用、可控、可持续的业务系统。</p>
            <div class="pm2-stats">
              <span>${icon("briefcase")}<strong>8</strong><em>项目管理经验</em></span>
              <span>${icon("layers-3")}<strong>10+ 项目</strong><em>安全与信息化交付</em></span>
              <span>${icon("landmark")}<strong>政企 ToB/G</strong><em>多行业客户覆盖</em></span>
              <span>${icon("flag")}<strong>全流程交付</strong><em>从规划到验收上线</em></span>
            </div>
          </section>
          <div class="pm2-hero-art" aria-hidden="true">
            <span class="pm2-art-orbit"></span>
            <span class="pm2-art-building"><i></i><i></i><i></i></span>
            <span class="pm2-art-shield">${icon("shield-check")}</span>
            <span class="pm2-art-route"><i></i><i></i><i></i></span>
            <span class="pm2-art-card pm2-art-card-plan">${icon("clipboard-check")}<b>规划</b></span>
            <span class="pm2-art-card pm2-art-card-risk">${icon("triangle-alert")}<b>风控</b></span>
            <span class="pm2-art-card pm2-art-card-accept">${icon("flag")}<b>验收</b></span>
          </div>

          <section class="pm2-work-panel">
            <div class="pm2-cases">
              <div class="pm2-section-head"><h2>代表项目经验</h2><a href="projects.html">查看全部项目案例 </a></div>
              <div class="pm2-case-grid">
                ${projectCases.map(([ic, title, badge, client, role, scope, result]) => `
                  <article>
                    <div class="pm2-case-title">${icon(ic)}<h3>${title}</h3>${badge ? `<span>${badge}</span>` : ""}</div>
                    <dl>
                      <div><dt>客户类型</dt><dd>${client}</dd></div>
                      <div><dt>项目角色</dt><dd>${role}</dd></div>
                      <div><dt>项目范围</dt><dd>${scope}</dd></div>
                      <div><dt>交付成果</dt><dd>${result}</dd></div>
                    </dl>
                  </article>
                `).join("")}
              </div>
            </div>

            <div class="pm2-flow-section">
              <h2>项目交付流程</h2>
              <div class="pm2-flow">
                ${flow.map(([num, ic, title, desc], index) => `
                  <article class="${index === 4 ? "is-risk" : ""}">
                    <span>${num}</span>
                    ${icon(ic)}
                    <strong>${title}</strong>
                    <p>${desc}</p>
                  </article>
                `).join("")}
              </div>
            </div>
          </section>

          <section class="pm2-capabilities">
            <h2>能力沉淀</h2>
            <div>
              ${capabilities.map(([ic, title, desc]) => `<article>${icon(ic)}<h3>${title}</h3><p>${desc}</p></article>`).join("")}
            </div>
          </section>
        </main>
      </div>
    </section>
  `, "pm-delivery.html");
  requestAnimationFrame(scaleHomeCanvas);
}

function renderResume() {
  const experience = [
    ["2025.07 - 至今", "项目负责人", "软件外包 / AI 实践", "负责需求澄清、任务拆解、开发协同、测试验收、部署上线与文档交付，同步沉淀 RAG、多 Agent、AIGC 工作流等 AI 应用交付方法。", ["需求澄清与范围界定", "开发协同与缺陷闭环", "部署说明与验收材料"]],
    ["2021.02 - 2025.06", "产品经理 / 项目经理", "网络 / 信息安全", "在北信源系统集成负责政企安全类产品与项目，覆盖终端安全沙箱、内网安全管理、零信任环境感知、智能运维等平台落地。", ["PRD / 原型 / 版本规划", "跨部门资源协调", "验收上线与复盘"]],
    ["2015.09 - 2021.01", "研发工程师 / 项目经理", "政府 / 高校信息化", "在南京药育信息技术从研发转向项目管理，参与政务平台、高校信息化、可视化药历与博物馆平台等系统建设。", ["Java 技术方案设计", "项目计划与客户沟通", "文档交付与售后支持"]],
    ["2012.09 - 2015.08", "研发工程师", "移动应用 / Web 后台", "在南京仁齐科技参与 Android 应用、Java 后端、Web 后台与对日软件维护，承担功能开发、接口联调和版本交付。", ["Android / Java 开发", "接口联调与问题排查", "版本迭代支持"]],
  ];
  const core = [
    ["landmark", "政企 ToB/G 交付", "熟悉政企项目流程与合规要求，擅长跨部门协同、风险识别与验收落地。"],
    ["database", "RAG 知识资产平台", "面向项目资料的知识整理与检索体系实践，关注引用依据和质量评估。"],
    ["network", "多 Agent 协作", "定义角色边界、任务分派、状态流转和执行结果校验机制。"],
    ["video", "AIGC 工作流", "围绕脚本、ASR、字幕和内容生成，设计可追踪的生产流程。"],
    ["file-text", "产品与文档能力", "输出 PRD、原型、流程图、验收报告和交付文档，降低协作成本。"],
  ];
  const quick = [
    ["bug", "工作年限", "8年项目管理 + 5年技术开发"],
    ["radar", "交付类型", "ToB / ToG / 互联网企业服务"],
    ["boxes", "项目规模", "从小型试点到中大型系统落地"],
    ["sparkles", "擅长阶段", "业务识别 / 方案设计 / 落地交付 / 验收复盘"],
    ["heart-handshake", "协作方式", "跨部门协同，结果导向，持续复盘"],
  ];
  const aiProjects = [
    ["RAG 知识资产平台", "面向项目资料的检索、问答与引用定位实践，提升知识沉淀与复用效率。", ["RAG", "文档检索", "引用定位"]],
    ["多 Agent 协作产品", "PM Agent 调度、多 Agent 编排与状态观测，支撑 AI 软件工厂流程验证。", ["Agent 编排", "任务分派", "流程监控"]],
    ["宠物店小程序", "会员、预约、商品、订单与门店运营管理，准备上线，对接收银会员系统。", ["微信小程序", "门店运营", "会员体系"]],
    ["Coze 视频优化工作流", "视频智能剪辑与视频转学习文档，提升内容处理效率与一致性。", ["脚本理解", "剪辑决策", "学习文档"]],
  ];
  const focusTags = ["AI 应用交付", "项目管理", "产品化落地", "需求与方案", "团队协同", "质量与验收"];

  mount(`
    <section class="r2-stage" aria-label="蔡峰简历">
      <div class="r2-canvas" data-design-width="1536" data-design-height="1024">
        <header class="r2-topbar">
          <a class="r2-brand" href="index.html" aria-label="蔡峰首页">
            <span class="r2-brand-mark">CF</span>
            <span><strong>蔡峰</strong><small>AI 应用产品化与交付</small></span>
          </a>
          <nav class="r2-nav" aria-label="主导航">
            <a href="index.html">首页</a>
            <a href="delivery-method.html">交付链路</a>
            <a href="projects.html">AI项目</a>
            <a href="pm-delivery.html">政企交付</a>
            <a class="is-active" href="resume.html">简历</a>
            <a href="contact.html">联系</a>
          </nav>
          <a class="r2-archive" href="projects.html">${icon("folder")}查看项目档案</a>
        </header>

        <aside class="r2-profile">
          <div class="r2-avatar">CF</div>
          <h1>蔡峰</h1>
          <p class="r2-subtitle">AI 应用产品化与交付</p>
          <h2>AI 应用交付项目经理</h2>
          <div class="r2-facts">
            <span>${icon("briefcase")}8年项目管理</span>
            <span>${icon("circle-gauge")}5年技术开发</span>
            <span>${icon("badge-check")}PMP</span>
          </div>
          <section class="r2-position">
            <h3>职业定位</h3>
            <p>把 AI 能力推进到业务可验收交付，从业务识别、方案设计到系统落地与验收复盘，交付可用、可复盘、可观测化的 AI 应用</p>
          </section>
          <section class="r2-contact">
            <span>${icon("map-pin")}中国 · 南京 / 可远程</span>
            <span>${icon("phone")}15105172448</span>
            <span>${icon("mail")}642874975@qq.com</span>
            <span>${icon("globe")}AI 应用交付 / 项目经理</span>
          </section>
          <section class="r2-tags">
            <h3>专注领域</h3>
            <div>${focusTags.map((tag) => `<span>${tag}</span>`).join("")}</div>
          </section>
        </aside>

        <main class="r2-main">
          <section class="r2-panel r2-experience">
            <h2>${icon("briefcase")}项目经历</h2>
            <div class="r2-timeline">
              ${experience.map(([time, title, badge, desc, bullets]) => `
                <article>
                  <time>${time}</time>
                  <div>
                    <h3>${title}<span>${badge}</span></h3>
                    <p>${desc}</p>
                  </div>
                  <ul>${bullets.map((item) => `<li>${item}</li>`).join("")}</ul>
                </article>
              `).join("")}
            </div>
          </section>

          <section class="r2-panel r2-core">
            <h2>${icon("paw-print")}核心能力</h2>
            <div>${core.map(([ic, title, text]) => `<article>${icon(ic)}<h3>${title}</h3><p>${text}</p></article>`).join("")}</div>
          </section>

          <section class="r2-panel r2-ai">
            <h2>${icon("layout-dashboard")}AI 项目经验</h2>
            <div>${aiProjects.map(([title, desc, tags]) => `<article><h3>${title}</h3><p>${desc}</p><div>${tags.map((tag) => `<span>${tag}</span>`).join("")}</div></article>`).join("")}</div>
          </section>
        </main>

        <aside class="r2-right">
          <section class="r2-panel r2-quick">
            <h2>快速了解我</h2>
            ${quick.map(([ic, title, text]) => `<article>${icon(ic)}<div><strong>${title}</strong><p>${text}</p></div></article>`).join("")}
          </section>
          <section class="r2-panel r2-download">
            <h2>获取完整简历</h2>
            <p>包含详细项目经历与职责描述</p>
            <a href="蔡峰_项目经理—AI.pdf" download>${icon("download")}下载简历</a>
          </section>
          <section class="r2-panel r2-connect">
            <h2>联系</h2>
            <p>期待交流 AI 应用落地与交付合作</p>
            <a href="contact.html">${icon("mail")}联系</a>
          </section>
          <section class="r2-panel r2-cert">
            <h2>认证与教育</h2>
            <p>${icon("badge-check")}<span><strong>PMP</strong><br>项目管理专业人士认证</span></p>
            <p>${icon("book-open-check")}<span><strong>本科 / 计算机科学与技术</strong><br>南京林业大学</span></p>
          </section>
        </aside>
      </div>
    </section>
  `, "resume.html");
  requestAnimationFrame(scaleHomeCanvas);
}

function renderContact() {
  const contactMethods = [
    ["mail", "邮箱", "642874975@qq.com", "mailto:642874975@qq.com"],
    ["phone", "电话", "15105172448", "tel:15105172448"],
    ["map-pin", "所在地", "中国 · 南京 / 可远程", "#"],
    ["cloud", "可远程", "支持远程协作与线上沟通", "#"],
    ["file-text", "下载简历", "获取我的项目经理履历与项目概览", "resume.html"],
  ];

  const fitItems = [
    ["users", "AI 项目经理", "负责 AI 应用项目的全流程管理，推动业务目标落地与可验收交付。"],
    ["box", "产品经理", "从业务洞察到产品方案设计，打造可验证、可迭代的 AI 产品。"],
    ["brain-circuit", "AI 应用落地", "将模型能力与业务场景结合，实现可用、可控、可复盘的应用。"],
    ["landmark", "ToB/ToG 项目交付", "政企项目交付经验，规范推进需求、方案、实施与验收闭环。"],
  ];

  mount(`
    <section class="c2-stage" aria-label="联系蔡峰">
      <div class="c2-canvas" data-design-width="1626" data-design-height="967">
        <header class="c2-topbar">
          <a class="c2-brand" href="index.html" aria-label="蔡峰首页">
            <span class="c2-brand-mark">CF</span>
            <span><strong>蔡峰</strong><small>AI 应用产品化与交付</small></span>
          </a>
          <nav class="c2-nav" aria-label="主导航">
            ${navItems.map(([href, text]) => `<a class="${href === "contact.html" ? "is-active" : ""}" href="${href}">${text}</a>`).join("")}
          </nav>
          <a class="c2-archive" href="projects.html">${icon("folder")}查看项目档案</a>
        </header>

        <main class="c2-main">
          <section class="c2-left">
            <p class="c2-eyebrow">CONTACT</p>
            <h1>联系</h1>
            <p class="c2-lead">期待交流 AI 应用落地与项目交付机会</p>

            <article class="c2-profile-card">
              <h2>蔡峰</h2>
              <strong>AI 应用产品化与交付</strong>
              <p>8年项目管理 + 5年技术开发 + PMP<br>聚焦 RAG、多 Agent、AIGC 工作流等 AI 应用从 PoC 到 MVP、部署上线与验收复盘</p>
            </article>

            <article class="c2-quote-card">
              <span class="c2-radar">${icon("user")}</span>
              <p>关注的不是工具调用，<br>而是从业务场景、产品方案、<br>工程实现到验收复盘的完整闭环</p>
            </article>
          </section>

          <section class="c2-contact-list" aria-label="联系方式">
            ${contactMethods.map(([ic, title, value, href]) => `
              <a class="c2-contact-card" href="${href}">
                <span class="c2-contact-icon">${icon(ic)}</span>
                <span><b>${title}</b><em>${value}</em></span>
                ${title === "下载简历" ? "<i>→</i>" : ""}
              </a>
            `).join("")}
          </section>

          <form class="c2-form" action="https://formsubmit.co/ajax/642874975@qq.com" method="post">
            <h2>${icon("send")}发送消息</h2>
            <input class="c2-honey" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_subject" value="个人网站联系表单" />
            <div class="c2-form-row">
              <label>你的姓名<input name="name" placeholder="请输入你的姓名" /></label>
              <label>联系方式<input name="contact" placeholder="请输入你的电话或邮箱" /></label>
            </div>
            <label>沟通主题<select name="topic"><option>请选择沟通主题</option><option>AI 应用交付项目经理机会</option><option>RAG / Agent 项目交流</option><option>项目合作沟通</option></select></label>
            <label>留言内容<textarea name="message" placeholder="请简要描述你的业务背景、项目需求或合作方向..."></textarea></label>
            <p class="c2-form-status" role="status" aria-live="polite"></p>
            <button type="submit">发送消息</button>
          </form>

          <section class="c2-fit">
            <div class="c2-fit-intro">
              ${icon("briefcase")}
              <h2>适合交流</h2>
              <p>欢迎以下方向的合作与机会</p>
            </div>
            ${fitItems.map(([ic, title, text]) => `
              <article>
                ${icon(ic)}
                <h3>${title}</h3>
                <p>${text}</p>
              </article>
            `).join("")}
          </section>

          <p class="c2-footer">${icon("pencil")}如果你正在寻找一位能把 AI 想法推进到业务可验收交付的项目经理，欢迎与我联系</p>
        </main>
      </div>
    </section>
  `, "contact.html");
  requestAnimationFrame(scaleHomeCanvas);
  setupContactForm();
}

function setContactFormStatus(form, message, state) {
  const status = form.querySelector(".c2-form-status");
  if (!status) {
    return;
  }
  status.textContent = message;
  status.dataset.state = state;
}

function validateContactForm(form) {
  const data = new FormData(form);
  const name = String(data.get("name") || "").trim();
  const contact = String(data.get("contact") || "").trim();
  const message = String(data.get("message") || "").trim();
  const honey = String(data.get("_honey") || "").trim();

  if (honey) {
    return "提交异常，请刷新页面后重试。";
  }
  if (!name) {
    return "请填写你的姓名。";
  }
  if (!contact) {
    return "请填写电话或邮箱，方便我回复。";
  }
  if (message.length < 10) {
    return "留言内容请至少填写 10 个字。";
  }
  if (message.length > 1000) {
    return "留言内容请控制在 1000 个字以内。";
  }
  return "";
}

function setupContactForm() {
  const form = document.querySelector(".c2-form");
  if (!form) {
    return;
  }

  const button = form.querySelector('button[type="submit"]');
  const defaultButtonText = button?.textContent || "发送消息";

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const validationError = validateContactForm(form);
    if (validationError) {
      setContactFormStatus(form, validationError, "error");
      return;
    }

    if (button) {
      button.disabled = true;
      button.textContent = "发送中...";
    }
    setContactFormStatus(form, "正在发送，请稍候...", "pending");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error(`FormSubmit request failed: ${response.status}`);
      }

      form.reset();
      setContactFormStatus(form, "消息已发送，我会尽快回复。", "success");
    } catch (error) {
      setContactFormStatus(form, "发送失败，请稍后重试或直接邮件联系。", "error");
    } finally {
      if (button) {
        button.disabled = false;
        button.textContent = defaultButtonText;
      }
    }
  });
}

function renderDeliveryImageMatch() {
  const deliveryIconMap = {
    flow: {},
    method: {
      check: "method-check",
      brain: "method-brain",
      shield: "method-shield",
    },
    loop: {
      warning: "loop-warning",
      user: "loop-user",
      grid: "loop-grid",
      refresh: "loop-refresh",
    },
  };

  const deliveryIcon = (name, group) => {
    const file = deliveryIconMap[group]?.[name];
    return file
      ? `<img class="d2-img-icon d2-${group}-icon" src="assets/delivery-slices/icons/${file}.png" alt="" aria-hidden="true" />`
      : homeIcon(name);
  };

  const flow = [
    ["01", "search", "业务识别", ["识别业务场景", "明确核心问题", "判断价值与可行性"]],
    ["02", "target", "需求边界", ["梳理需求范围", "定义约束条件", "明确输出与边界"]],
    ["03", "edit", "方案定义", ["设计 AI 方案与流程", "确定关键能力与数据", "形成实施路线"]],
    ["04", "box", "原型验证", ["快速构建原型", "验证效果与可行性", "迭代优化方案"]],
    ["05", "code", "系统落地", ["工程化开发与集成", "数据接入与系统联调", "部署与运行保障"]],
    ["06", "clipboard", "验收复盘", ["验收测试与确认", "复盘总结与沉淀", "持续改进与优化"]],
  ];

  const methodCards = [
    {
      num: "01",
      icon: "check",
      title: "需求与边界",
      actions: ["业务访谈与现状分析", "梳理需求清单与优先级", "定义系统边界与约束条件"],
      outputs: ["需求清单与范围说明", "系统边界与非目标说明", "验收标准（初稿）"],
    },
    {
      num: "02",
      icon: "brain",
      title: "AI 方案与原型",
      actions: ["选择适配的 AI 能力与架构", "设计流程与交互方式", "构建原型并验证核心效果"],
      outputs: ["AI 方案设计文档", "原型演示与验证结果", "迭代优化建议"],
    },
    {
      num: "03",
      icon: "shield",
      title: "验收与复盘",
      actions: ["执行测试用例与验收确认", "整理问题与改进项", "复盘方法与经验沉淀"],
      outputs: ["验收报告与确认意见", "问题清单与改进计划", "复盘文档与优化建议"],
    },
  ];

  const artifacts = [
    ["file-text", "方案与设计文档"],
    ["presentation", "原型与演示材料"],
    ["file-code", "系统部署与运行说明"],
    ["clipboard", "测试与验收报告"],
    ["files", "复盘总结文档"],
  ];

  const checks = [
    "功能符合需求，核心流程可用",
    "关键能力效果达到预期",
    "数据准确性与权限控制有效",
    "异常处理与边界情况可控",
    "运行稳定，满足业务使用条件",
    "文档完整，便于交接与维护",
  ];

  const loops = [
    ["warning", "失败样本", "收集问题数据<br>定位失败原因", "warn"],
    ["user", "人工确认", "人工复核结果<br>确认修正标注", "warn"],
    ["grid", "规则改进", "优化提示词 / 规则<br>调整策略与流程", "warn"],
    ["refresh", "问题闭环", "验证改进效果<br>沉淀可复用经验", "normal"],
  ];

  const scenarios = [
    ["cube", "企业知识与内容系统"],
    ["network", "多 Agent 协作与流程自动化"],
    ["message", "智能客服与问答助手"],
    ["circle-check", "内部工具与小程序"],
  ];

  mount(`
    <section class="d2-stage" aria-label="蔡峰 AI 应用交付链路">
      <div class="d2-canvas" data-design-width="1536" data-design-height="1024">
        <header class="d2-topbar">
          <a class="d2-brand" href="index.html" aria-label="蔡峰首页">
            <span>CF</span>
            <strong>蔡峰<small>AI 应用产品化与交付</small></strong>
          </a>
          <nav class="d2-nav" aria-label="主导航">
            <a href="index.html">首页</a>
            <a class="is-active" href="delivery-method.html">交付链路</a>
            <a href="projects.html">AI项目</a>
            <a href="pm-delivery.html">政企交付</a>
            <a href="resume.html">简历</a>
            <a href="contact.html">联系</a>
          </nav>
          <a class="d2-archive" href="projects.html">${homeIcon("folder")}查看项目档案</a>
        </header>

        <aside class="d2-sidebar">
          <h2>交付方法体系</h2>
          <nav>
            <a class="is-active" href="#delivery-overview"><img class="d2-img-icon d2-nav-overview-icon" src="assets/delivery-slices/icons/nav-overview.png" alt="" aria-hidden="true" />交付链路总览</a>
            <a href="#delivery-scope"><span>01</span>需求与边界</a>
            <a href="#delivery-ai"><span>02</span>AI 方案与原型</a>
            <a href="#delivery-engineering"><span>03</span>工程化落地</a>
            <a href="#delivery-review"><span>04</span>验收与复盘</a>
            <a href="#delivery-artifacts"><span>05</span>交付物清单</a>
            <a href="#delivery-loop"><span>06</span>问题闭环</a>
          </nav>
          <div class="d2-side-block">
            <h3>方法定位</h3>
            <p class="d2-quote">方法驱动交付，过程可控，结果可验收。</p>
            <p>聚焦 AI 应用从问题识别到可复用、可验证、可运营的完整闭环，确保业务价值落地。</p>
          </div>
          <div class="d2-side-block d2-scenarios">
            <h3>适用场景</h3>
            ${scenarios.map(([ic, text]) => `<p>${homeIcon(ic)}${text}</p>`).join("")}
          </div>
          <a class="d2-back" href="index.html">${homeIcon("arrow-left")}返回首页</a>
        </aside>

        <main class="d2-main">
          <section class="d2-hero" id="delivery-overview">
            <div>
              <h1>交付链路</h1>
              <h2>从业务问题到可验收交付</h2>
              <p>以业务为起点，结合 AI 能力与工程化方法，确保每个环节可控、可验证，最终实现可验收与可复盘的交付结果。</p>
            </div>
            <img src="assets/delivery-slices/delivery-hero-rail.png" alt="" aria-hidden="true" />
          </section>

          <section class="d2-flow" id="delivery-scope">
            <h2>AI 应用交付全流程</h2>
            <div>
              ${flow.map(([num, ic, title, lines]) => `
                <article class="d2-flow-card">
                  <b>${num}</b>
                  ${deliveryIcon(ic, "flow")}
                  <h3>${title}</h3>
                  <p>${lines.join("<br>")}</p>
                </article>
              `).join("")}
            </div>
          </section>

          <section class="d2-methods" id="delivery-ai">
            ${methodCards.map((card) => `
              <article class="d2-method-card">
                <h2>${deliveryIcon(card.icon, "method")}<span>${card.num}</span>${card.title}</h2>
                <div>
                  <h3>关键动作</h3>
                  <ul>${card.actions.map((item) => `<li>${item}</li>`).join("")}</ul>
                </div>
                <div>
                  <h3>输出成果</h3>
                  <ul class="d2-doc-list">${card.outputs.map((item) => `<li>${homeIcon("file-text")}${item}</li>`).join("")}</ul>
                </div>
              </article>
            `).join("")}
            <article class="d2-artifacts" id="delivery-artifacts">
              <h2>交付</h2>
              ${artifacts.map(([ic, text]) => `<p>${homeIcon(ic)}${text}</p>`).join("")}
            </article>
          </section>

          <section class="d2-bottom" id="delivery-review">
            <article class="d2-checklist">
              <h2>验证清单（验收关注点）</h2>
              <div>
                ${checks.map((item) => `<p>${homeIcon("circle-check")}${item}</p>`).join("")}
              </div>
            </article>
            <article class="d2-loop" id="delivery-loop">
              <h2>问题闭环</h2>
              <div class="d2-loop-track">
                ${loops.map(([ic, title, desc, tone]) => `
                  <section class="d2-loop-node ${tone === "warn" ? "is-warn" : ""}">
                    ${deliveryIcon(ic, "loop")}
                    <strong>${title}</strong>
                    <p>${desc}</p>
                  </section>
                `).join("")}
              </div>
              <p class="d2-loop-note">建立问题闭环机制，持续提升系统效果与交付质量，沉淀可复制的方法与资产。</p>
            </article>
          </section>
        </main>
      </div>
    </section>
  `, "delivery-method.html");
  requestAnimationFrame(scaleHomeCanvas);
}

function init() {
  const page = currentPage();
  const renderers = {
    "index.html": renderHomeReal,
    "projects.html": renderProjects,
    "delivery-method.html": renderDeliveryImageMatch,
    "pm-delivery.html": renderPmDelivery,
    "resume.html": renderResume,
    "contact.html": renderContact,
    "enterprise-rag.html": renderEnterpriseRag,
    "agentops-studio.html": renderAgentOpsStudio,
    "pet-miniapp.html": renderPetMiniapp,
    "coze-video.html": renderCozeVideo,
  };

  (renderers[page] || renderHome)();

  if (window.lucide) {
    window.lucide.createIcons();
  }

  centerActiveNavItem();
}

function centerActiveNavItem() {
  requestAnimationFrame(() => {
    const nav = document.querySelector(".site-nav");
    const active = nav?.querySelector(".is-active");

    if (!nav || !active || nav.scrollWidth <= nav.clientWidth) {
      return;
    }

    const targetLeft = active.offsetLeft - (nav.clientWidth - active.offsetWidth) / 2;
    nav.scrollTo({ left: Math.max(0, targetLeft), behavior: "auto" });
  });
}

window.addEventListener("DOMContentLoaded", init);
window.addEventListener("resize", scaleHomeCanvas);
