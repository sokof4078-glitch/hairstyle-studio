const hairstyles = [
  {
    id: "soft-layered-lob",
    name: "柔和层次锁骨发",
    category: "锁骨发",
    length: "medium",
    texture: "wavy",
    maintenance: "medium",
    faceShapes: ["椭圆脸", "圆脸", "心形脸"],
    hairTypes: ["细软发", "中等发量", "自然微卷"],
    vibe: ["温柔", "通勤", "日常"],
    keywords: ["lob", "锁骨发", "层次", "刘海", "卷发", "中长发", "低层次"],
    stylistNotes:
      "长度落在锁骨附近，底线保留一点厚度，脸周做柔和层次，八字刘海从颧骨附近自然打开。",
    careRoutine: ["护发乳自然风干", "大卷棒做松弛弧度", "少量纹理喷雾"],
    image: "./assets/images/soft-layered-lob.jpg",
    alt: "柔和锁骨层次发，带八字刘海和松弛棕色微卷。"
  },
  {
    id: "textured-pixie",
    name: "纹理感精灵短发",
    category: "精灵短发",
    length: "short",
    texture: "straight",
    maintenance: "medium",
    faceShapes: ["椭圆脸", "心形脸", "菱形脸"],
    hairTypes: ["细软发", "中等发量", "直发"],
    vibe: ["利落", "有个性", "精致"],
    keywords: ["pixie", "短发", "精灵短发", "纹理", "刘海", "利落"],
    stylistNotes:
      "整体保持短而轻的层次，头顶保留蓬松纹理，刘海做成一束一束的空气感，边缘收干净但不要过分硬朗。",
    careRoutine: ["哑光发蜡", "手指抓出纹理", "定期修整轮廓"],
    image: "./assets/images/textured-pixie.jpg",
    alt: "现代纹理感精灵短发，带细碎刘海和干净边缘。"
  },
  {
    id: "curl-defined-shag",
    name: "卷度层次 Shag",
    category: "Shag 层次",
    length: "medium",
    texture: "curly",
    maintenance: "medium",
    faceShapes: ["椭圆脸", "方脸", "长脸"],
    hairTypes: ["卷发", "发量多", "中等发量"],
    vibe: ["轻松", "浪漫", "纹理感"],
    keywords: ["shag", "卷发", "中长发", "层次", "卷刘海", "自然卷"],
    stylistNotes:
      "按照自然卷度逐束修剪，做圆润层次和柔和卷刘海。剪最终长度前要预留卷发回缩空间。",
    careRoutine: ["卷发乳", "烘罩吹干", "补水喷雾整理卷度"],
    image: "./assets/images/curl-defined-shag.jpg",
    alt: "中长卷发 Shag，圆润层次搭配柔和卷刘海。"
  },
  {
    id: "sleek-blunt-bob",
    name: "顺滑齐切波波头",
    category: "波波头",
    length: "short",
    texture: "straight",
    maintenance: "high",
    faceShapes: ["椭圆脸", "心形脸", "长脸"],
    hairTypes: ["直发", "细软发", "中等发量"],
    vibe: ["精致", "极简", "轮廓感"],
    keywords: ["bob", "波波头", "齐切", "短发", "直发", "高维护"],
    stylistNotes:
      "长度到下巴附近，底线齐切干净，尽量减少层次。发尾保留厚度，整体追求顺滑、有结构的轮廓。",
    careRoutine: ["隔热喷雾", "直板夹整理", "亮泽精华"],
    image: "./assets/images/sleek-blunt-bob.jpg",
    alt: "顺滑下巴长度齐切波波头，深棕色发色和清晰底线。"
  },
  {
    id: "rounded-coily-taper",
    name: "圆润自然卷渐层短发",
    category: "渐层短发",
    length: "short",
    texture: "coily",
    maintenance: "low",
    faceShapes: ["椭圆脸", "方脸", "菱形脸"],
    hairTypes: ["紧卷发", "发量多"],
    vibe: ["立体", "省心", "清爽"],
    keywords: ["coily", "自然卷", "短发", "渐层", "低维护", "taper"],
    stylistNotes:
      "顶部保留圆润自然卷形状，两侧和后颈做柔和渐层。顶部长度要足够保留卷度，方便日常快速整理。",
    careRoutine: ["免洗护发素", "手指绕卷整理", "边缘细节修整"],
    image: "./assets/images/rounded-coily-taper.jpg",
    alt: "圆润自然卷渐层短发，顶部卷度清晰，两侧柔和收短。"
  },
  {
    id: "butterfly-layers",
    name: "蝴蝶层次长发",
    category: "长层次",
    length: "long",
    texture: "wavy",
    maintenance: "high",
    faceShapes: ["椭圆脸", "圆脸", "心形脸"],
    hairTypes: ["中等发量", "发量多", "自然微卷"],
    vibe: ["华丽", "浪漫", "有流动感"],
    keywords: ["butterfly", "蝴蝶层次", "长发", "层次", "八字刘海", "卷发"],
    stylistNotes:
      "保留整体长发长度，脸周做较短的空气层次，前区增加轻盈流动感，发尾不要打薄过度。",
    careRoutine: ["圆梳吹整", "魔术卷定型", "柔韧定型喷雾"],
    image: "./assets/images/butterfly-layers.jpg",
    alt: "蝴蝶层次长发，暖棕挑染和脸周空气层次。"
  }
]

const state = {
  search: "",
  filters: { length: null, texture: null, maintenance: null },
  saved: new Set(),
  compare: new Set(),
  selected: hairstyles[0].id,
  notice: ""
}

const groups = {
  length: ["short", "medium", "long"],
  texture: ["straight", "wavy", "curly", "coily"],
  maintenance: ["low", "medium", "high"]
}

const labels = {
  short: "短发",
  medium: "中长发",
  long: "长发",
  straight: "直发",
  wavy: "微卷",
  curly: "卷发",
  coily: "紧卷发",
  low: "低维护",
  mediumUpkeep: "中等维护",
  high: "高维护"
}

const grid = document.querySelector("#styleGrid")
const detail = document.querySelector("#detailPanel")
const searchInput = document.querySelector("#searchInput")
const notice = document.querySelector("#notice")

function labelFor(value, kind) {
  if (kind === "maintenance" && value === "medium") return labels.mediumUpkeep
  return labels[value] || value
}

function createFilterButtons(group, elementId) {
  const root = document.querySelector(elementId)
  root.innerHTML = groups[group]
    .map(
      (value) =>
        `<button class="chip" data-group="${group}" data-value="${value}" aria-pressed="false">${labelFor(value, group)}</button>`
    )
    .join("")
}

function matchesSearch(style) {
  const haystack = [
    style.name,
    style.category,
    labelFor(style.length, "length"),
    labelFor(style.texture, "texture"),
    labelFor(style.maintenance, "maintenance"),
    ...style.faceShapes,
    ...style.hairTypes,
    ...style.vibe,
    ...style.keywords,
    style.stylistNotes
  ]
    .join(" ")
    .toLowerCase()

  return haystack.includes(state.search.toLowerCase())
}

function filteredStyles() {
  return hairstyles.filter((style) => {
    const filterMatch = Object.entries(state.filters).every(([key, value]) => !value || style[key] === value)
    return filterMatch && matchesSearch(style)
  })
}

function render() {
  const styles = filteredStyles()
  document.querySelector("#resultCount").textContent = `${styles.length} 款发型`
  document.querySelector("#savedCount").textContent = `已收藏 ${state.saved.size}`
  document.querySelector("#compareCount").textContent = `对比中 ${state.compare.size}`
  notice.textContent = state.notice
  notice.hidden = !state.notice

  grid.innerHTML = styles.length ? styles.map(renderCard).join("") : renderEmptyState()
  renderDetail()

  document.querySelectorAll(".chip").forEach((button) => {
    const active = state.filters[button.dataset.group] === button.dataset.value
    button.setAttribute("aria-pressed", String(active))
  })
}

function renderCard(style) {
  const saved = state.saved.has(style.id)
  const comparing = state.compare.has(style.id)
  return `
    <article class="card">
      <button class="style-image" data-action="select" data-id="${style.id}" aria-label="查看${style.name}详情">
        ${renderImage(style, "", "lazy")}
        <span>${style.category}</span>
      </button>
      <div class="card-body">
        <h2>${style.name}</h2>
        <div class="tags">
          <span class="tag">${labelFor(style.length, "length")}</span>
          <span class="tag">${labelFor(style.texture, "texture")}</span>
          <span class="tag">${labelFor(style.maintenance, "maintenance")}</span>
        </div>
        <div class="actions">
          <button class="action ${saved ? "active" : ""}" data-action="save" data-id="${style.id}">${saved ? "已收藏" : "收藏"}</button>
          <button class="action ${comparing ? "active" : ""}" data-action="compare" data-id="${style.id}">${comparing ? "对比中" : "对比"}</button>
          <button class="action" data-action="select" data-id="${style.id}">详情</button>
        </div>
      </div>
    </article>
  `
}

function renderEmptyState() {
  return `
    <div class="empty-state">
      <h2>没有匹配的发型</h2>
      <p>换一个发质、长度、打理难度，或者试试别的搜索词。</p>
      <button class="secondary-button" data-action="reset">重置筛选</button>
    </div>
  `
}

function renderDetail() {
  const selected = hairstyles.find((style) => style.id === state.selected)
  if (!selected) {
    detail.innerHTML = '<p class="empty-detail">选择一款发型，查看打理建议和可直接给理发师看的说明。</p>'
    return
  }

  detail.innerHTML = `
    ${renderImage(selected, "detail-image")}
    <h2>${selected.name}</h2>
    <div class="tags">
      ${[labelFor(selected.length, "length"), labelFor(selected.texture, "texture"), labelFor(selected.maintenance, "maintenance"), ...selected.vibe]
        .map((tag) => `<span class="tag">${tag}</span>`)
        .join("")}
    </div>
    <div class="detail-section">
      <strong>适合参考</strong>
      <p>常适合 ${selected.hairTypes.join("、")}；脸型上可参考 ${selected.faceShapes.join("、")} 的发型目标。</p>
    </div>
    <div class="detail-section">
      <strong>给理发师看的说明</strong>
      <p>${selected.stylistNotes}</p>
    </div>
    <div class="detail-section">
      <strong>日常打理</strong>
      <p>${selected.careRoutine.join("、")}</p>
    </div>
  `
}

function fallbackImageFor(style) {
  return `./${style.id}.jpg`
}

function renderImage(style, className = "", loading = "") {
  const classAttr = className ? ` class="${className}"` : ""
  const loadingAttr = loading ? ` loading="${loading}"` : ""
  return `<img${classAttr} src="${style.image}" data-fallback-src="${fallbackImageFor(style)}" alt="${style.alt}"${loadingAttr} onerror="this.onerror=null;this.src=this.dataset.fallbackSrc" />`
}

function flash(message) {
  state.notice = message
  render()
  window.clearTimeout(flash.timeout)
  flash.timeout = window.setTimeout(() => {
    state.notice = ""
    render()
  }, 2400)
}

function toggleSet(set, id, limit) {
  if (set.has(id)) {
    set.delete(id)
    return true
  }
  if (!limit || set.size < limit) {
    set.add(id)
    return true
  }
  return false
}

function resetFilters() {
  state.search = ""
  state.filters = { length: null, texture: null, maintenance: null }
  searchInput.value = ""
  state.notice = ""
  render()
}

createFilterButtons("length", "#lengthFilters")
createFilterButtons("texture", "#textureFilters")
createFilterButtons("maintenance", "#maintenanceFilters")

document.body.addEventListener("click", (event) => {
  const target = event.target.closest("button")
  if (!target) return

  if (target.classList.contains("chip")) {
    const { group, value } = target.dataset
    state.filters[group] = state.filters[group] === value ? null : value
    state.notice = ""
    render()
  }

  if (target.dataset.action === "save") {
    toggleSet(state.saved, target.dataset.id)
    render()
  }

  if (target.dataset.action === "compare") {
    const changed = toggleSet(state.compare, target.dataset.id, 4)
    if (changed) {
      render()
    } else {
      flash("最多同时对比 4 款发型。")
    }
  }

  if (target.dataset.action === "select") {
    state.selected = target.dataset.id
    state.notice = ""
    render()
  }

  if (target.dataset.action === "reset") {
    resetFilters()
  }
})

searchInput.addEventListener("input", (event) => {
  state.search = event.target.value
  state.notice = ""
  render()
})

document.querySelector("#resetButton").addEventListener("click", resetFilters)

render()
