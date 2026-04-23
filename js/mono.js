/* 
   SOMNUS — mono.js
   Adds a small toggle button (bottom-right) that switches the
   site between its default dark-colour mode and a fully
   monochromatic (greyscale) mode.
   Preference is saved to localStorage so it persists across pages.
   */

(function () {
  const STORAGE_KEY = "somnus-mono";
  const MONO_CLASS = "mono";

  /*  1. Apply saved preference immediately (before paint) */
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "1") document.body.classList.add(MONO_CLASS);

  /*  2. Inject toggle button after DOM is ready  */
  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.createElement("button");
    btn.id = "mono-toggle";
    btn.setAttribute("aria-pressed", document.body.classList.contains(MONO_CLASS) ? "true" : "false");
    btn.setAttribute("aria-label", "Skift til monokrom tilstand");
    btn.setAttribute("title", "Monokrom tilstand");

    /* Half-filled circle icon — colour / greyscale */
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1.5"/>
        <path d="M12 3 A9 9 0 0 1 12 21 Z" fill="currentColor"/>
      </svg>`;

    document.body.appendChild(btn);
    updateIcon(btn);

    btn.addEventListener("click", function () {
      const isNowMono = document.body.classList.toggle(MONO_CLASS);
      localStorage.setItem(STORAGE_KEY, isNowMono ? "1" : "0");
      btn.setAttribute("aria-pressed", isNowMono ? "true" : "false");
      updateIcon(btn);
    });
  });

  /*  3. Update icon colour to reflect current state */
  function updateIcon(btn) {
    const isMono = document.body.classList.contains(MONO_CLASS);
    btn.style.color = isMono ? "#888888" : "var(--color-accent, #e85d5d)";
    btn.setAttribute("title", isMono ? "Farvetilstand" : "Monokrom tilstand");
    btn.setAttribute("aria-label", isMono ? "Skift til farvetilstand" : "Skift til monokrom tilstand");
  }
})();
