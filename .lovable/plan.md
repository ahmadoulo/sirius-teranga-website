

## Plan: Complete UI/UX Redesign to Match Reference Design

### Summary
Full visual overhaul of every section and component to match the uploaded HTML/CSS reference design exactly. The structure (multi-page routing, i18n, dark mode) stays intact, but every component gets redesigned with the premium styling from the reference.

### Key Design Changes

**Overall**: The reference uses a darker, more premium aesthetic with navy gradients, gold accents, rounded cards with hover effects (lift + navy overlay on service cards), glassmorphism stats bar, and polished micro-interactions. The current site looks flat and generic by comparison.

### Files to Modify

**1. `src/index.css` — Design tokens overhaul**
- Add missing CSS variables: `--color-navy-mid`, shadow tokens (`--shadow-gold`, `--shadow-xl`), transition speeds
- Add scroll animation classes: `.reveal-up`, `.reveal-left`, `.reveal-right` with `.visible` state
- Add the gold pulsing dot keyframe, scroll-wheel animation
- Refine dark mode variables for consistency

**2. `src/components/Navbar.tsx` — Premium navbar**
- Transparent navbar that becomes navy/blur on scroll (add scroll listener)
- STC text logo with gold border badge (matching reference `logo-icon` pattern) alongside the actual logo images
- Nav links: uppercase, small, semi-transparent white text with gold underline on hover
- Gold CTA button with rounded-full + shadow
- Mobile: full-screen navy overlay with centered links, animated hamburger (3 spans)

**3. `src/components/HeroSection.tsx` — Hero redesign**
- Navy gradient background (not image-based) with subtle radial gold overlays and dot pattern
- Floating gold particles (optional, lightweight)
- Pulsing badge dot + gold pill badge
- Stats bar at bottom: glassmorphism container with 3 stats (150+ projects, 50+ clients, 10+ years) separated by dividers
- Scroll indicator (mouse icon with animated wheel)
- i18n keys: add `hero.stat1_number`, `hero.stat1_label`, etc.

**4. `src/components/AboutSection.tsx` — Two-column layout**
- Left: decorative card stack visual (CSS-only with progress bars, icons, badge)
- Right: section label pill, title with gold accent span, two paragraphs, highlight items (icon + title + desc), CTA button
- Grid layout `grid-cols-2` on desktop, stacked on mobile

**5. `src/components/MissionSection.tsx` — Card redesign**
- 3-column grid of cards with top accent bar (gold gradient, appears on hover via scaleX)
- Icon wraps: 64px, navy or gold background, rounded-lg
- Values displayed as small tags with checkmark icons inside the Values card
- Cards lift on hover with shadow increase

**6. `src/components/ServicesSection.tsx` — Premium service cards**
- 3x2 grid + 1 CTA card (6th position)
- Cards: white, rounded-xl, with `::before` navy overlay that fades in on hover
- On hover: card lifts, text turns white, icon bg turns gold
- "En savoir plus" link with arrow that slides right on hover
- CTA card: navy gradient background, gold button, handshake icon

**7. `src/components/MethodologySection.tsx` — Timeline approach**
- 4-column grid with connecting horizontal line (gradient navy-gold-navy)
- Step numbers in gold pill badges (01, 02, 03, 04)
- Circular step icons (70px, navy bg, white icon) alternating with gold gradient
- Icons scale up on hover
- White background (`section-alt`)

**8. `src/components/WhyUsSection.tsx` — Two-column with metrics**
- Left: section label, title, description, checklist items with gold check circles
- Right: stacked metric cards (3) with slide-right hover, 2nd card offset
- Metrics: +40% productivity, 98% satisfaction, 15+ countries

**9. `src/components/CtaSection.tsx` — CTA banner**
- Navy gradient with radial gold overlays
- Gold badge circle with star icon (pulsing)
- Large white headline with gold accent
- Gold CTA button

**10. `src/components/ContactSection.tsx` — Redesigned contact**
- Two-column: left info blocks (cards with icon, hover slide), social links; right form
- Form: off-white inputs, gold focus ring, subject dropdown added
- Info blocks: navy icon squares with gold icon color

**11. `src/components/Footer.tsx` — 4-column footer**
- Dark navy background
- 4 columns: brand + tagline, navigation links, services links, contact info + social
- Footer bottom: copyright + legal links
- Social icons: circular, navy hover with gold

**12. `src/components/BackToTop.tsx` — Styled button**
- Navy circle with gold chevron, gold border, appears on scroll
- On hover: gold bg, navy icon

**13. `src/i18n/locales/fr.json` & `en.json` — New translation keys**
- Add hero stats keys, about highlights, why-us metrics, service CTA card text, footer services column

**14. `src/hooks/useScrollAnimation.ts`**
- Add support for `reveal-left`, `reveal-right` directions (not just `fade-in-up`)

**15. `tailwind.config.ts`**
- Add `navy-mid` color token
- Add box-shadow utilities for gold shadow
- Ensure `rounded-xl` maps to 24px

### Responsive Breakpoints (preserved from reference)
- `>1100px`: full layout
- `900px`: single-column about/why-us, 2-col services, 2-col methodology
- `640px`: single-column everything, full-screen mobile menu, stacked stats

### What stays unchanged
- React Router multi-page architecture
- i18n setup with react-i18next
- Dark/light mode toggle system
- Logo assets (logo.png, logo-dark.png)
- SEOHead component
- Dockerfile, docker-compose, nginx config

