(() => {
  const player = document.getElementById("pbx-active-video");
  const status = document.getElementById("pbx-video-status");
  if (!player || !status) return;
  player.addEventListener("error", () => {
    status.textContent = "The overview could not be loaded. Refresh the page or open the film directly.";
    const link = document.createElement("a");
    link.href = player.currentSrc || player.src;
    link.textContent = " Open overview film";
    link.target = "_blank";
    link.rel = "noopener";
    status.appendChild(link);
  });
  player.addEventListener("loadeddata", () => {
    status.textContent = "";
  });
})();

(() => {
  const article = document.getElementById("pbx-article");
  const toc = document.getElementById("pbx-reading-toc");
  const navigation = document.getElementById("pbx-toc-nav");
  const progress = document.getElementById("pbx-reading-progress");
  const percentage = document.getElementById("pbx-reading-percent");
  const header = document.querySelector(".site-header");
  if (!article || !toc || !navigation || !progress || !percentage) return;

  const entries = Array.from(navigation.querySelectorAll(".pbx-toc-link"))
    .map((link) => ({ link, section: document.getElementById(link.hash.slice(1)) }))
    .filter((entry) => entry.section);
  if (!entries.length) return;

  const desktop = window.matchMedia("(min-width: 1100px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let activeLink = null;
  let scheduled = false;

  const update = () => {
    scheduled = false;
    const headerHeight = header ? Math.ceil(header.getBoundingClientRect().height) : 0;
    document.documentElement.style.setProperty("--pbx-header-height", `${headerHeight}px`);
    const offset = headerHeight + 24;
    const articleTop = article.getBoundingClientRect().top + window.scrollY;
    const distance = Math.max(1, article.scrollHeight - window.innerHeight + offset);
    const ratio = Math.max(0, Math.min(1, (window.scrollY - articleTop + offset) / distance));
    const value = Math.round(ratio * 100);
    progress.value = value;
    progress.textContent = `${value}%`;
    percentage.textContent = `${value}%`;

    let selected = entries[0];
    for (const entry of entries) {
      if (entry.section.getBoundingClientRect().top <= offset + 2) selected = entry;
    }
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      selected = entries[entries.length - 1];
    }
    if (selected.link === activeLink) return;
    if (activeLink) activeLink.removeAttribute("aria-current");
    activeLink = selected.link;
    activeLink.setAttribute("aria-current", "location");

    if (toc.open) {
      const linkBounds = activeLink.getBoundingClientRect();
      const navBounds = navigation.getBoundingClientRect();
      if (linkBounds.top < navBounds.top || linkBounds.bottom > navBounds.bottom) {
        navigation.scrollTop += linkBounds.top - navBounds.top - (navigation.clientHeight - linkBounds.height) / 2;
      }
    }
  };

  const scheduleUpdate = () => {
    if (scheduled) return;
    scheduled = true;
    window.requestAnimationFrame(update);
  };

  const syncLayout = () => {
    toc.open = desktop.matches;
    activeLink = null;
    entries.forEach((entry) => entry.link.removeAttribute("aria-current"));
    scheduleUpdate();
  };

  navigation.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    const target = document.getElementById(link.hash.slice(1));
    if (!target) return;
    event.preventDefault();
    if (!desktop.matches) toc.open = false;
    window.requestAnimationFrame(() => {
      target.scrollIntoView({ block: "start", behavior: reducedMotion.matches ? "instant" : "smooth" });
      if (window.location.hash !== link.hash) window.history.pushState(null, "", link.hash);
      const heading = target.querySelector("h2, h3") || target;
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
      scheduleUpdate();
    });
  });

  toc.addEventListener("toggle", () => {
    activeLink = null;
    entries.forEach((entry) => entry.link.removeAttribute("aria-current"));
    scheduleUpdate();
  });
  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  window.addEventListener("hashchange", scheduleUpdate);
  window.addEventListener("load", scheduleUpdate);
  desktop.addEventListener("change", syncLayout);
  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(scheduleUpdate);
    observer.observe(article);
    if (header) observer.observe(header);
  }
  syncLayout();
})();
