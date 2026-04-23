/*
 * ── SOMNUS INTERFACE LOGIC ────────────────────────────────
 */
(function () {
  // ── 1. SWING — tilt [data-swing] elements toward mouse ──
  (function initSwing() {
    const MAX_DEG = 4;
    const REACH_PX = 500;
    const DEAD_ZONE = 0.08;

    const swingEls = Array.from(document.querySelectorAll("[data-swing]"));
    if (!swingEls.length) return;

    document.addEventListener("mousemove", (e) => {
      const isMono = document.body.classList.contains("mono");
      const maxDeg = isMono ? MAX_DEG * 2.5 : MAX_DEG;

      swingEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dist = Math.sqrt(dx * dx + Math.pow(e.clientY - cy, 2));
        const prox = Math.max(0, 1 - dist / REACH_PX);

        if (prox === 0) {
          el.style.setProperty("--swing-deg", "0deg");
          return;
        }

        const fraction = Math.max(-1, Math.min(1, dx / (rect.width / 2)));
        const effective = Math.abs(fraction) < DEAD_ZONE ? 0 : fraction;
        el.style.setProperty("--swing-deg", (effective * maxDeg * prox).toFixed(3) + "deg");
      });
    });

    document.addEventListener("mouseleave", () => {
      swingEls.forEach((el) => el.style.setProperty("--swing-deg", "0deg"));
    });
  })();

  // ── 2. FAQ MASCOT — fixed overlay that peeks up while FAQ is visible ──
  (function initFaqMascot() {
    const overlay = document.getElementById("faq-mascot-overlay");
    const faqSection = document.querySelector(".faq-section");
    const mascotImg = overlay ? overlay.querySelector("img") : null;
    if (!overlay || !faqSection || !mascotImg) return;

    let dismissed = false;

    // Visibility: show when FAQ section is in viewport
    function checkVisibility() {
      if (dismissed) return;
      const rect = faqSection.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      overlay.classList.toggle("visible", inView);
    }

    window.addEventListener("scroll", checkVisibility, { passive: true });
    window.addEventListener("resize", checkVisibility, { passive: true });
    checkVisibility();

    // Dismiss on click — re-enables after the slide-down transition finishes
    overlay.addEventListener("click", () => {
      dismissed = true;
      overlay.classList.remove("visible");
      overlay.addEventListener(
        "transitionend",
        () => {
          dismissed = false;
        },
        { once: true }
      );
    });

    // Swing: tilt mascot image to follow mouse
    const MAX_DEG = 8;
    const REACH_PX = 600;

    document.addEventListener("mousemove", (e) => {
      if (!overlay.classList.contains("visible")) return;
      const rect = mascotImg.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dist = Math.sqrt(dx * dx + Math.pow(e.clientY - cy, 2));
      const prox = Math.max(0, 1 - dist / REACH_PX);
      const frac = Math.max(-1, Math.min(1, dx / (rect.width / 2)));
      mascotImg.style.setProperty("--swing-deg", (frac * MAX_DEG * prox).toFixed(3) + "deg");
    });
  })();

  // ── 3. MODALS — news card click to open ──
  (function initModals() {
    const overlays = document.querySelectorAll(".news-modal-overlay");

    function closeAll() {
      overlays.forEach((o) => o.classList.remove("open"));
      document.body.style.overflow = "";
    }

    document.querySelectorAll(".news_card").forEach((card) => {
      card.addEventListener("click", (e) => {
        if (e.target.closest(".cta_btn")) return;
        const modal = document.getElementById(card.dataset.modal);
        if (!modal) return;
        const realisticImg = card.dataset.popupImg;
        if (realisticImg) {
          const img = modal.querySelector(".news-modal-img img");
          if (img) img.src = realisticImg;
        }
        modal.classList.add("open");
        document.body.style.overflow = "hidden";
        const closeBtn = modal.querySelector(".news-modal-close");
        if (closeBtn) setTimeout(() => closeBtn.focus(), 50);
      });
    });

    document.querySelectorAll("[data-close]").forEach((btn) => {
      btn.addEventListener("click", closeAll);
    });

    overlays.forEach((o) => {
      o.addEventListener("click", (e) => {
        if (e.target === o) closeAll();
      });
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeAll();
    });
  })();
})();
