

## Plan: Multi-page architecture, i18n, animations, and brand guidelines integration

### Summary

Transform the current single-page site into a multi-page application with dedicated routes, add French/English internationalization using `react-i18next`, integrate brand content from the charte graphique PDF, add scroll-triggered animations, and optimize SEO with meta tags per page.

---

### 1. Install dependencies

- `react-i18next` + `i18next` + `i18next-browser-languagedetector` for translations
- No other new dependencies needed (animations via Tailwind CSS)

### 2. Set up i18n

- Create `src/i18n/` folder with:
  - `i18n.ts` — i18next configuration with language detector
  - `locales/fr.json` — all French translations (current content)
  - `locales/en.json` — English translations of all content
- Import i18n in `main.tsx`
- All hardcoded French text in components replaced with `t()` calls
- Translations cover: navbar, hero, about, mission/vision/values, services, methodology, why us, CTA, contact, footer

### 3. Multi-page routing

Convert from single-page scroll to separate routes:

| Route | Page | Content |
|-------|------|---------|
| `/` | Home | Hero + brief about + services preview + CTA |
| `/a-propos` | About | Full about, mission/vision/values, why us |
| `/services` | Services | Full services grid + methodology |
| `/contact` | Contact | Contact form + company info |

- Update `App.tsx` with new routes
- Update `Navbar.tsx` to use `<Link>` from react-router-dom instead of scroll anchors
- Add a language switcher (FR/EN toggle) in the navbar
- Each page component wraps relevant sections
- Add `ScrollToTop` component to scroll to top on route change

### 4. Update content from charte graphique

Integrate precise brand content from the PDF:
- **About section**: Exact "Qui sommes-nous" text from page 5
- **Mission/Vision/Values**: Detailed values from page 6 (Qualite & Excellence, Innovation, Fiabilite & Confiance, Performance, Engagement)
- **Tone of voice**: Professional, clear, direct, pedagogical, accessible
- **Colors**: Already correct (navy #0B1F3A, gold #D4AF37, off-white #F5F5F5)
- **Secondary colors**: Add bordeaux #6B2F3F as accent variant in Tailwind config
- **Typography**: Already correct (Montserrat headings, Arimo body)

### 5. Animations

Add subtle scroll-triggered animations using Intersection Observer:
- Create `useScrollAnimation` custom hook using IntersectionObserver
- Add keyframes to `tailwind.config.ts`: fade-in-up, fade-in-left, fade-in-right, scale-in
- Apply staggered animations to section headings, cards, service blocks, methodology steps
- Keep animations subtle and professional (no flashy effects)

### 6. SEO optimization

- Create a reusable `SEOHead` component using `react-helmet-async` (install dependency)
- Add `HelmetProvider` in App
- Per-page meta tags: unique title, description, Open Graph tags
- Structured data (JSON-LD) for Organization schema on home page
- Add canonical URLs, hreflang tags for FR/EN
- Update `robots.txt` with sitemap reference
- Semantic HTML: ensure proper heading hierarchy (h1 per page, h2 for sections)

### 7. UI polish

- Improve footer with more sections (links to pages, contact info, social links)
- Add a "back to top" button
- Smooth page transitions with fade animations
- Ensure all pages have consistent spacing and layout

---

### Technical details

**File changes:**
- **New files**: `src/i18n/i18n.ts`, `src/i18n/locales/fr.json`, `src/i18n/locales/en.json`, `src/hooks/useScrollAnimation.ts`, `src/components/SEOHead.tsx`, `src/components/ScrollToTop.tsx`, `src/components/LanguageSwitcher.tsx`, `src/pages/About.tsx`, `src/pages/Services.tsx`, `src/pages/Contact.tsx`
- **Modified files**: `package.json`, `main.tsx`, `App.tsx`, `Navbar.tsx`, `HeroSection.tsx`, `AboutSection.tsx`, `MissionSection.tsx`, `ServicesSection.tsx`, `MethodologySection.tsx`, `WhyUsSection.tsx`, `CtaSection.tsx`, `ContactSection.tsx`, `Footer.tsx`, `tailwind.config.ts`, `index.html`

**i18n key structure:**
```text
nav.home, nav.about, nav.services, nav.contact
hero.badge, hero.title, hero.highlight, hero.subtitle, hero.cta1, hero.cta2
about.title, about.subtitle, about.description
...
```

**Animation hook pattern:**
```text
const ref = useScrollAnimation() 
// Returns a ref that adds 'animate-fade-in-up' class when element enters viewport
// Uses IntersectionObserver with threshold 0.1
```

