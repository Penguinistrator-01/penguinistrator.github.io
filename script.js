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
  }
];

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
