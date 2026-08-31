(function () {
  "use strict";

  const main = document.getElementById("main");
  const titleAnchor = document.getElementById("title-anchor");
  const tabs = Array.from(document.querySelectorAll("nav.tabbar button"));

  const STORAGE_KEY = "ancla-dbt-last-tab";

  function iconFor(color) {
    return {
      mind: "#3F7268",
      dist: "#B5792A",
      emo: "#A15C5C",
      inter: "#47588C"
    }[color];
  }

  function render(moduleKey) {
    const mod = DBT_CONTENT[moduleKey];
    if (!mod) return;

    document.body.style.setProperty("--accent", `var(--${mod.color})`);
    document.body.style.setProperty("--accent-soft", `var(--${mod.color}-soft)`);
    titleAnchor.style.color = iconFor(mod.color);

    tabs.forEach((t) => {
      const active = t.dataset.module === moduleKey;
      t.classList.toggle("active", active);
      t.style.setProperty("--tab-color", iconFor(DBT_CONTENT[t.dataset.module].color));
    });

    document.title = `Ancla · ${mod.title}`;

    if (mod.comingSoon) {
      main.innerHTML = `
        <div class="pillar-hero" style="background:var(--${mod.color}-soft)">
          <p class="kicker" style="color:var(--${mod.color})">${escapeHtml(mod.subtitle)}</p>
          <h2>${escapeHtml(mod.title)}</h2>
          <p>${escapeHtml(mod.tagline)}</p>
        </div>
        <div class="soon">
          <div class="glyph">＋</div>
          <h2>Todavía sin resumen</h2>
          <p>${escapeHtml(mod.note)}</p>
        </div>
        ${footerNote()}
      `;
      localStorage.setItem(STORAGE_KEY, moduleKey);
      main.scrollTo?.(0, 0);
      window.scrollTo(0, 0);
      return;
    }

    const sectionsHtml = mod.sections
      .map((s, i) => sectionHtml(s, i, moduleKey))
      .join("");

    main.innerHTML = `
      <div class="pillar-hero" style="background:var(--${mod.color}-soft)">
        <p class="kicker" style="color:var(--${mod.color})">${escapeHtml(mod.subtitle)}</p>
        <h2>${escapeHtml(mod.title)}</h2>
        <p>${escapeHtml(mod.intro)}</p>
      </div>
      <div class="search-wrap">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
        <input type="search" id="search-input" placeholder="Buscar en ${escapeHtml(mod.title)}\u2026" autocomplete="off" />
      </div>
      <div id="sections">${sectionsHtml}</div>
      ${footerNote()}
    `;

    const search = document.getElementById("search-input");
    search.addEventListener("input", () => filterSections(moduleKey, search.value));

    localStorage.setItem(STORAGE_KEY, moduleKey);
    window.scrollTo(0, 0);
  }

  function sectionHtml(section, i, moduleKey) {
    const id = `${moduleKey}-sec-${i}`;
    return `
      <details class="section" id="${id}" data-search="${escapeHtml(stripHtml(section.label + " " + section.body)).toLowerCase()}">
        <summary>
          <span class="num">${String(i + 1).padStart(2, "0")}</span>
          <span class="label">${escapeHtml(section.label)}</span>
          <span class="chev">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>
          </span>
        </summary>
        <div class="panel">${section.body}</div>
      </details>
    `;
  }

  function filterSections(moduleKey, query) {
    const q = query.trim().toLowerCase();
    const nodes = document.querySelectorAll("#sections .section");
    nodes.forEach((n) => {
      const match = !q || n.dataset.search.includes(q);
      n.style.display = match ? "" : "none";
      if (q && match) n.setAttribute("open", "");
    });
  }

  function footerNote() {
    return `<p class="footer-note">Resumen de apoyo personal, no sustituye la terapia ni el acompañamiento profesional.<br>Basado en el manual de psicoeducación DBT (M. Linehan / Psicoeducación Online).</p>`;
  }

  function stripHtml(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || "";
  }

  function escapeHtml(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  tabs.forEach((btn) => {
    btn.addEventListener("click", () => render(btn.dataset.module));
  });

  // Solo un <details> abierto a la vez dentro del módulo activo (comportamiento acordeón suave, opcional)
  main.addEventListener("toggle", (e) => {
    if (!(e.target instanceof HTMLDetailsElement) || !e.target.open) return;
  }, true);

  const initial = localStorage.getItem(STORAGE_KEY) || "mindfulness";
  render(DBT_CONTENT[initial] ? initial : "mindfulness");

  // ---------- Service worker ----------
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./service-worker.js").catch(() => {});
    });
  }
})();
