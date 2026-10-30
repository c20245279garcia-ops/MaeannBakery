// =====================================================
// Maeann Bakery — script.js
// Push 2: Dark Mode Toggle (B1)
// =====================================================

// ---- B1: DARK MODE TOGGLE ----
const darkBtn = document.querySelector("#toggledark");
const root = document.documentElement;

darkBtn.addEventListener("click", () => {
  const isDark = root.classList.toggle("dark");
  darkBtn.setAttribute("aria-pressed", isDark);
  darkBtn.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
});