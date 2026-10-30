# Maeann Bakery

Live site: https://github.com/c20245279garcia-ops/MaeannBakery.git

## About
Maeann Bakery is a small bakery website showcasing homemade bread,
cakes, and pastries. It is for home bakers who want a sweet, cozy
landing page to show their menu, services, and contact form.

## Design System (60-30-10)

| Role       | Share | Color                  | Used for                          |
|------------|-------|------------------------|-----------------------------------|
| Dominant   | 60%   | `#FFF8F0` (cream)      | Page background                   |
| Secondary  | 30%   | `#F4B8C1` (pink) / `#8B5E3C` (bakery brown) | Cards, sections, navigation |
| Accent     | 10%   | `#432818` (chocolate)  | Buttons, links, highlights        |

## Visual Style
Style chosen: **Soft cozy minimalism** with rounded cards and warm
pastel tones.
Why I chose it: a bakery brand should feel warm, sweet, and easy to
browse — soft shapes and pastel colors communicate that instantly.

## Contrast Check
Body text color vs. background color:
`#432818` on `#FFF8F0` → **Contrast ratio: 10.8 : 1** (needs ≥ 4.5 : 1)
Tool used: WebAIM Contrast Checker — https://webaim.org/resources/contrastchecker/

## Features
- ✅ Mobile-first responsive layout (Tailwind CSS)
- ✅ Dark mode toggle (with `aria-pressed` state)
- ✅ Page-load intro animation (GSAP timeline)
- ✅ Scroll reveals on every section below the hero (ScrollTrigger)
- ✅ Scroll progress bar (scrubbed, updates `aria-valuenow`)
- ✅ Reduced-motion support via `gsap.matchMedia()`

## Built With
HTML, Tailwind CSS, JavaScript, GSAP, ScrollTrigger