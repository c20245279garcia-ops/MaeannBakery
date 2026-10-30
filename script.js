// =====================================================
// Maeann Bakery — script.js
// Push 3: Dark mode (B1) + GSAP intro timeline (D1, D2, D3)
// =====================================================

gsap.registerPlugin(ScrollTrigger);

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

// ---- D1 + D2: PAGE-LOAD INTRO TIMELINE ----
// One timeline, 4 steps, 2 staggers, 3 overlaps, ~2.4s total.
//
// Ease choices:
//   back.out(1.7)  -> logo pops slightly past 100% (playful bakery feel)
//   power3.out     -> title eases fast then settles (friendly)
//   power2.out     -> body + buttons fade without overshoot
const intro = gsap.timeline({
  defaults: { duration: 0.8, ease: "power3.out" },
});

intro
  .from("#heroIcon", {
    scale: 0.6,
    opacity: 0,
    duration: 0.7,
    ease: "back.out(1.7)",
  })
  .from(
    "#heroTitle",
    {
      y: 40,
      opacity: 0,
      stagger: 0.05,
    },
    "-=0.3"
  )
  .from(
    "#heroText",
    {
      y: 20,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4"
  )
  .fromTo(
    "#heroButtons > *",
    {
      y: 15,
      opacity: 0,
      scale: 0.8,
      immediateRender: false,
    },
    {
      y: 0,
      opacity: 1,
      scale: 1,
      stagger: 0.12,
      duration: 0.5,
      ease: "power2.out",
    },
    "-=0.3"
  );

// ---- D3: CLICK INTERACTION — Replay Intro ----
document.querySelector("#replayBtn").addEventListener("click", () => {
  intro.restart();
});