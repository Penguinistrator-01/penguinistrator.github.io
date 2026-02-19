const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

const searchInput = document.querySelector("[data-search-input]");
const searchButton = document.querySelector("[data-search-button]");
const searchTags = document.querySelectorAll("[data-search-tag]");
const resultList = document.querySelector("[data-search-results]");
const resultCount = document.querySelector("[data-result-count]");
const sortButtons = document.querySelectorAll("[data-sort]");

const searchData = [
  {
    title: "罗德岛制药公司：组织性质与行动原则",
    url: "https://prts.wiki/w/%E7%BD%97%E5%BE%B7%E5%B2%9B",
    source: "PRTS.wiki",
    date: "2024-05-01",
    summary:
      "罗德岛以医疗援助与危机干预为核心，组织结构涵盖医疗、行动、后勤与研究等部门，既保持独立立场，也需要在泰拉各势力间维持合作平衡。",
    authority: 5,
    relevance: 5,
    badge: "权威"
  },
  {
    title: "博士：失忆背景与战术指挥角色",
    url: "https://prts.wiki/w/%E5%8D%9A%E5%A3%AB",
    source: "PRTS.wiki",
    date: "2024-04-18",
    summary:
      "博士在切尔诺伯格石棺中被唤醒，失去记忆但保有出色战术能力。其在主线中承担指挥与决策责任，是罗德岛行动的核心枢纽。",
    authority: 5,
    relevance: 5,
    badge: "官方"
  },
  {
    title: "源石：矿石病与能源体系概述",
    url: "https://prts.wiki/w/%E6%BA%90%E7%9F%B3",
    source: "PRTS.wiki",
    date: "2024-03-28",
    summary:
      "源石是泰拉社会能源与科技的基础，同时也是矿石病传播源。其对社会结构、经济秩序与感染者议题产生深远影响。",
    authority: 5,
    relevance: 5,
    badge: "权威"
  },
  {
    title: "塔露拉：整合运动的转折与核心矛盾",
    url: "https://prts.wiki/w/%E5%A1%94%E9%9C%B2%E6%8B%89",
    source: "PRTS.wiki",
    date: "2024-01-20",
    summary:
      "塔露拉作为整合运动领袖，其理念受到乌萨斯压迫与个人遭遇影响。她在主线后期的转变揭示了组织内部的复杂权力结构。",
    authority: 5,
    relevance: 4,
    badge: "权威"
  },
  {
    title: "危机合约：高难度挑战与奖励体系",
    url: "https://www.arknights.com/",
    source: "明日方舟官网",
    date: "2024-08-15",
    summary:
      "危机合约以可选合约提升难度为核心，强调阵容配置与操作策略。通过完成挑战获取合约赏金与限定装饰奖励。",
    authority: 5,
    relevance: 4,
    badge: "官方"
  },
  {
    title: "集成战略玩法解析：肉鸽式探索体验",
    url: "https://www.bilibili.com/",
    source: "B站专栏",
    date: "2024-07-02",
    summary:
      "集成战略以随机事件与路线分支构成，强调干员养成与构筑的应变能力，适合长期游玩与重复挑战。",
    authority: 3,
    relevance: 4,
    badge: "高赞"
  },
  {
    title: "罗德岛与龙门协定的政治影响",
    url: "https://www.taptap.cn/",
    source: "TapTap",
    date: "2024-02-03",
    summary:
      "罗德岛与龙门的合作既包含医疗援助也涉及政治协作，协定推进过程中暴露出感染者议题的尖锐矛盾。",
    authority: 3,
    relevance: 3,
    badge: "高赞"
  },
  {
    title: "拉特兰与萨科塔信仰体系概览",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2023-12-12",
    summary:
      "拉特兰社会以教会体系为核心，萨科塔拥有光环与律法象征，体现泰拉世界独特的宗教与政治结构。",
    authority: 4,
    relevance: 3,
    badge: "权威"
  },
  {
    title: "罗德岛基建系统效率搭配笔记",
    url: "https://www.bilibili.com/",
    source: "B站专栏",
    date: "2024-06-20",
    summary:
      "从贸易站、制造站与宿舍的组合出发，分析不同干员技能对生产效率的影响，适合中后期基地运营。",
    authority: 2,
    relevance: 3,
    badge: "高赞"
  },
  {
    title: "乌萨斯学生自治事件梳理",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2023-10-30",
    summary:
      "乌萨斯学生事件反映了帝国教育体系与感染者矛盾的尖锐冲突，是理解乌萨斯社会结构的重要切口。",
    authority: 4,
    relevance: 2,
    badge: "权威"
  },
  {
    title: "龙门近卫局编制与城市治安体系",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2024-05-22",
    summary:
      "龙门近卫局承担城市治安与反恐任务，与罗德岛合作处理整合运动危机，体现龙门对感染者政策的现实取向。",
    authority: 4,
    relevance: 3,
    badge: "权威"
  },
  {
    title: "切尔诺伯格事件时间线速览",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2024-03-12",
    summary:
      "从石棺苏醒到撤离行动，再到核心城危机，全程揭示整合运动与乌萨斯矛盾的集中爆发。",
    authority: 4,
    relevance: 4,
    badge: "权威"
  },
  {
    title: "卡西米尔骑士竞技与资本结构解读",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2024-02-26",
    summary:
      "卡西米尔的竞技体系由商业赞助驱动，传统骑士精神逐渐被资本逻辑吞没，引发感染者与旧贵族的矛盾。",
    authority: 4,
    relevance: 3,
    badge: "权威"
  },
  {
    title: "维多利亚伦蒂尼姆冲突概览",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2024-08-01",
    summary:
      "伦蒂尼姆战局涉及摄政王军、地下组织与王室血统，多方势力角力使罗德岛陷入长期救援与政治协作。",
    authority: 4,
    relevance: 4,
    badge: "权威"
  },
  {
    title: "拉特兰执行律法的社会结构",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2023-11-05",
    summary:
      "拉特兰以律法与信仰为核心维持秩序，萨科塔的光环象征与规则机制贯穿政治与社会层面。",
    authority: 4,
    relevance: 3,
    badge: "权威"
  },
  {
    title: "莱茵生命与源石技艺研究路线",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2024-06-12",
    summary:
      "莱茵生命聚焦源石技术与人体实验，内部派系冲突与科研伦理问题成为多起事件的核心矛盾。",
    authority: 4,
    relevance: 4,
    badge: "权威"
  },
  {
    title: "萨尔贡边境势力与沙漠迁徙",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2024-01-12",
    summary:
      "萨尔贡区域由部族势力与雇佣军交错构成，边境迁徙与资源争夺使罗德岛行动充满不确定性。",
    authority: 3,
    relevance: 3,
    badge: "权威"
  },
  {
    title: "伊比利亚失落海域与阿戈尔关系",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2024-04-05",
    summary:
      "伊比利亚与深海势力联系复杂，阿戈尔干员背景揭示深海文明与陆地世界的断裂。",
    authority: 4,
    relevance: 4,
    badge: "权威"
  },
  {
    title: "明日方舟OST专辑与主题曲整理",
    url: "https://www.arknights.com/",
    source: "明日方舟官网",
    date: "2024-07-18",
    summary:
      "官方音乐专辑收录主线与活动主题曲，包含多首世界观氛围音乐，适合剧情阅读搭配。",
    authority: 5,
    relevance: 2,
    badge: "官方"
  },
  {
    title: "干员职业分支与定位说明",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2024-05-10",
    summary:
      "干员职业在2021后细分为多个分支，不同分支对应阻挡、攻击范围与技能循环差异。",
    authority: 4,
    relevance: 5,
    badge: "权威"
  },
  {
    title: "整合运动组织结构与理念演变",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2024-01-30",
    summary:
      "整合运动以感染者权益为起点，却在极端环境中分化出强硬路线，塔露拉与黑蛇的矛盾推动其崩解。",
    authority: 4,
    relevance: 4,
    badge: "权威"
  },
  {
    title: "企鹅物流业务版图与角色关系",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2023-09-18",
    summary:
      "企鹅物流在龙门承担情报与运输任务，能天使、德克萨斯与空等成员构成高机动执行团队。",
    authority: 3,
    relevance: 3,
    badge: "权威"
  },
  {
    title: "干员信赖与基建技能应用指南",
    url: "https://www.bilibili.com/",
    source: "B站专栏",
    date: "2024-08-02",
    summary:
      "基建技能对生产效率影响显著，合理分配制造、贸易与宿舍岗位可提升资源收益。",
    authority: 2,
    relevance: 4,
    badge: "高赞"
  },
  {
    title: "危机合约常见词条解析",
    url: "https://www.taptap.cn/",
    source: "TapTap",
    date: "2024-06-02",
    summary:
      "整理常见合约词条的增益与限制机制，帮助理解合约组合同步提升与风险控制。",
    authority: 2,
    relevance: 3,
    badge: "高赞"
  },
  {
    title: "干员培养资源优先级建议",
    url: "https://www.bilibili.com/",
    source: "B站专栏",
    date: "2024-05-26",
    summary:
      "从开荒到中后期的资源分配路径，强调主力干员技能专精与模组投入的节奏。",
    authority: 2,
    relevance: 3,
    badge: "高赞"
  },
  {
    title: "集成战略藏品与路线选择思路",
    url: "https://www.bilibili.com/",
    source: "B站专栏",
    date: "2024-04-28",
    summary:
      "分析藏品叠加逻辑与路线收益，以稳定通关为目标优化队伍成长曲线。",
    authority: 2,
    relevance: 4,
    badge: "高赞"
  },
  {
    title: "保全派驻轮换机制与配队建议",
    url: "https://www.taptap.cn/",
    source: "TapTap",
    date: "2024-03-18",
    summary:
      "保全派驻要求多队轮换出战，合理安排职业结构可提升作战容错。",
    authority: 2,
    relevance: 3,
    badge: "高赞"
  },
  {
    title: "生息演算玩法要点整理",
    url: "https://www.bilibili.com/",
    source: "B站专栏",
    date: "2024-02-12",
    summary:
      "生息演算结合沙盒经营与战斗事件，建议优先建立稳定资源循环。",
    authority: 2,
    relevance: 3,
    badge: "高赞"
  },
  {
    title: "剿灭作战通关策略与阵容配置",
    url: "https://www.taptap.cn/",
    source: "TapTap",
    date: "2024-07-12",
    summary:
      "剿灭强调持续战线与回复能力，适合使用稳定输出与群体治疗组合。",
    authority: 2,
    relevance: 4,
    badge: "高赞"
  },
  {
    title: "罗德岛医疗体系与外勤部门分工",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2023-08-22",
    summary:
      "医疗部门负责感染者治疗与研究，外勤部门承担战术执行与应急处置，形成双线协作。",
    authority: 3,
    relevance: 4,
    badge: "权威"
  },
  {
    title: "谢拉格宗教体系与银灰家族",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2024-01-08",
    summary:
      "谢拉格以宗教与家族政治共治，银灰家族改革推动传统秩序动摇。",
    authority: 3,
    relevance: 3,
    badge: "权威"
  },
  {
    title: "炎国节庆与岁兽传说背景",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2024-02-25",
    summary:
      "岁兽传说与炎国节庆相互映照，展现炎国文化仪式与政治秩序的交织。",
    authority: 3,
    relevance: 3,
    badge: "权威"
  },
  {
    title: "感染者政策与社会隔离制度",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2023-09-01",
    summary:
      "多国对感染者采取隔离或驱逐政策，导致社会裂痕加深并引发多个冲突事件。",
    authority: 4,
    relevance: 4,
    badge: "权威"
  },
  {
    title: "维多利亚王权继承与摄政王军",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2024-06-06",
    summary:
      "摄政王军掌控伦蒂尼姆并推进军政改革，王室继承问题引发各方势力介入。",
    authority: 4,
    relevance: 3,
    badge: "权威"
  },
  {
    title: "罗德岛特勤队与精英干员概述",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2023-07-16",
    summary:
      "精英干员在关键行动中承担核心战斗任务，其档案揭示罗德岛内部的战略层结构。",
    authority: 3,
    relevance: 3,
    badge: "权威"
  },
  {
    title: "哥伦比亚科技企业与能源产业",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2023-12-28",
    summary:
      "哥伦比亚以科技企业集群为中心，源石能源开发推动城邦快速扩张。",
    authority: 3,
    relevance: 3,
    badge: "权威"
  },
  {
    title: "雷姆必拓矿业体系与卡特斯族群",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2024-04-11",
    summary:
      "雷姆必拓以矿业开发为主，卡特斯族群在工业与后勤岗位扮演关键角色。",
    authority: 3,
    relevance: 2,
    badge: "权威"
  },
  {
    title: "萨卡兹历史与卡兹戴尔遗产",
    url: "https://prts.wiki/",
    source: "PRTS.wiki",
    date: "2024-03-05",
    summary:
      "萨卡兹的流亡历史与卡兹戴尔遗产构成其文化核心，多次战争塑造了泰拉政治格局。",
    authority: 4,
    relevance: 4,
    badge: "权威"
  },
  {
    title: "罗德岛对外合作与中立原则",
    url: "https://www.arknights.com/",
    source: "明日方舟官网",
    date: "2024-08-10",
    summary:
      "罗德岛在各国政治夹缝中坚持医疗救援与中立立场，通过合作协议获取行动空间。",
    authority: 5,
    relevance: 3,
    badge: "官方"
  },
  {
    title: "主线关卡战术关键词速查",
    url: "https://www.taptap.cn/",
    source: "TapTap",
    date: "2024-05-05",
    summary:
      "整理主线关卡常见机制与地形特点，适合快速了解通关思路。",
    authority: 2,
    relevance: 4,
    badge: "高赞"
  }
  }

const normalize = (value) => value.trim().toLowerCase();

const renderResults = (items) => {
  if (!resultList) {
    return;
  }
  resultList.innerHTML = items
    .map(
      (item) => `
      <article class="result-card">
        <div class="result-head">
          <h3><a href="${item.url}" target="_blank" rel="noreferrer">${item.title}</a></h3>
          <span class="badge ${item.badge === "官方" ? "gold" : ""}">${item.badge}</span>
        </div>
        <div class="result-meta">
          <span>${item.source}</span>
          <span>${item.date}</span>
        </div>
        <p>${item.summary}</p>
      </article>
    `
    )
    .join("");
  if (resultCount) {
    resultCount.textContent = `共 ${items.length} 条结果`;
  }
};

const sortResults = (items, mode) => {
  return [...items].sort((a, b) => {
    if (mode === "time") {
      const dateDiff = new Date(b.date) - new Date(a.date);
      if (dateDiff !== 0) return dateDiff;
      return b.authority - a.authority;
    }
    if (b.authority !== a.authority) {
      return b.authority - a.authority;
    }
    const dateDiff = new Date(b.date) - new Date(a.date);
    if (dateDiff !== 0) return dateDiff;
    return b.relevance - a.relevance;
  });
};

const doSearch = (keyword = "") => {
  const key = normalize(keyword);
  const filtered = key
    ? searchData.filter((item) => {
        const hay = `${item.title}${item.source}${item.summary}`;
        return normalize(hay).includes(key);
      })
    : searchData;
  const activeSort =
    document.querySelector("[data-sort].active")?.dataset.sort || "authority";
  renderResults(sortResults(filtered, activeSort));
};

if (searchInput && resultList) {
  doSearch();
}

if (searchButton && searchInput) {
  searchButton.addEventListener("click", () => {
    doSearch(searchInput.value);
  });
}

if (searchInput) {
  searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      doSearch(searchInput.value);
    }
  });
}

searchTags.forEach((tag) => {
  tag.addEventListener("click", () => {
    if (!searchInput) return;
    searchInput.value = tag.dataset.searchTag || "";
    doSearch(searchInput.value);
  });
});

sortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    sortButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    doSearch(searchInput?.value || "");
  });
});

const shopButtons = document.querySelectorAll("[data-shop-target]");
shopButtons.forEach((button) => {
  button.addEventListener("click", () => {
    shopButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    const targetId = button.dataset.shopTarget;
    if (!targetId) return;
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
