// =====================================================
// Maeann Bakery — script.js
// Push 4 (FINAL): dark mode + intro + scroll reveals +
// progress bar + reduced-motion support
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
  );

// ---- D3: CLICK INTERACTION — Replay Intro ----
document.querySelector("#replayBtn").addEventListener("click", () => {
  intro.restart();
});

// ---- E3: REDUCED MOTION WRAPPER ----
// All scroll effects run inside gsap.matchMedia() so visitors who
// prefer reduced motion still see every section (no stuck opacity).
const mm = gsap.matchMedia();

mm.add(
  {
    motionOK: "(prefers-reduced-motion: no-preference)",
    reduce: "(prefers-reduced-motion: reduce)",
  },
  (ctx) => {
    const { motionOK } = ctx.conditions;

    if (motionOK) {
      // ---- E1: SCROLL REVEALS ----
      // Each .reveal element gets its OWN ScrollTrigger with an
      // explicit start and toggleActions.
      gsap.utils.toArray(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 60,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // ---- E2: SCROLL-LINKED PROGRESS BAR ----
      // Scrubbed so it grows with page scroll and updates aria-valuenow.
      gsap.to("#progressBar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            document
              .querySelector("#progressBar")
              .setAttribute(
                "aria-valuenow",
                Math.round(self.progress * 100)
              );
          },
        },
      });
    } else {
      // Reduced motion: reveal everything immediately, no animation.
      gsap.set(".reveal", { opacity: 1, y: 0 });
    }
  }
);