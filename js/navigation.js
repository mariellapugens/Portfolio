// ===== Navegação =====

import { $ } from "./render.js";

export function initNavigation() {
  const nav = $("nav");
  const menuToggle = $("menuToggle");
  const sections = [...document.querySelectorAll(".page")];

  // Navegação por âncoras
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const id = link.getAttribute("href").slice(1);
      const target = $(id);

      if (!target) return;

      e.preventDefault();

      history.replaceState(null, "", "#" + id);

      target.scrollIntoView({ behavior: "smooth" });

      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Destaca no menu a seção visível
  function highlightNav() {
    const pos = window.scrollY + 120;
    let current = sections[0]?.id;

    sections.forEach((section) => {
      if (section.offsetTop <= pos) {
        current = section.id;
      }
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === "#" + current,
      );
    });
  }

  window.addEventListener("scroll", highlightNav, {
    passive: true,
  });

  highlightNav();

  // Menu responsivo
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(open));
  });
}
