
// =====================================================
// MIDTERM STARTER: script.js
// Each section below matches an item on your checklist.
// Delete these hint comments as you finish each part, and
// remove any console.log you used for testing before you submit.
// =====================================================

gsap.registerPlugin(ScrollTrigger);

// ---- B1: DARK MODE TOGGLE ----
// TODO: select #darkModeToggle and toggle the "dark" class on <html> when it is clicked


// ---- D1 + D2: PAGE-LOAD INTRO TIMELINE ----
// TODO: build ONE gsap.timeline() with a defaults object, 3+ steps,
//       at least one stagger, and at least one position-parameter overlap.
//       Keep the total under about 3 seconds.
//       Add a one-line comment explaining why you chose each ease.


// ---- D3: CLICK INTERACTION ----
// TODO: wire #replayBtn to your timeline (or add another GSAP click effect)


// ---- E1: SCROLL REVEALS ----
// TODO: reveal every .reveal element with its OWN ScrollTrigger
//       (explicit start + toggleActions)


// ---- E2: SCROLL-LINKED EFFECT ----
// TODO: a scrub animation (for example, #progressBar growing as you scroll)


// ---- E3: REDUCED MOTION + CLEANUP ----
// TODO: wrap your scroll effects in gsap.matchMedia() so visitors who prefer
//       reduced motion still see everything. Then remove every markers: true.