

## Plan: Polish Navbar Layout, Spacing, and Theme Integration

### Issues Identified

1. **Navbar too narrow** -- `max-w-[1200px]` creates excessive empty space on wider screens. The reference image (image-29) shows a wider, full-width navbar with content spread edge-to-edge.
2. **CTA button text wraps** -- "FREE DIAGNOSTIC" breaks into 2 lines because the button is too narrow. Needs `whitespace-nowrap`.
3. **Logo spacing** -- Logo is too close to nav links; needs more separation.
4. **Light mode not visually distinct** -- The navbar and sections need better contrast in light mode (currently the hero always uses dark navy, but the scrolled navbar in light mode needs a cleaner white bg with crisp borders).
5. **Metric card icons** (image-30 reference) -- The icon containers in WhyUsSection look cramped on smaller viewports; need consistent sizing and alignment.
6. **Section containers too narrow** -- All sections use `max-w-[1200px]`, which creates too much dead space on wide screens. Widen to `max-w-[1400px]` globally.

---

### Changes

#### 1. Navbar (Navbar.tsx)
- Widen container: `max-w-[1200px]` → `max-w-[1400px]`
- Add `whitespace-nowrap` to CTA button so "DIAGNOSTIC GRATUIT" stays on one line
- Increase gap between logo and nav links
- Improve light mode scrolled state: stronger shadow, clearer border
- Ensure theme toggle icon is visible in both modes

#### 2. Global section widths
- **Files**: `HeroSection.tsx`, `WhyUsSection.tsx`, `AboutSection.tsx`, `MissionSection.tsx`, `ServicesSection.tsx`, `MethodologySection.tsx`, `ContactSection.tsx`, `CtaSection.tsx`, `Footer.tsx`, `PartnershipSection.tsx`, `ExpertisesSection.tsx`, `ReferencesSection.tsx`, `DiagnosticSection.tsx`
- Change all `max-w-[1200px]` → `max-w-[1400px]` for wider content area

#### 3. WhyUsSection.tsx -- Fix metric card icons
- Ensure icon containers have consistent size and padding
- Better border/bg for light mode (border-border visible, card bg solid white)

#### 4. Light mode color polish (index.css)
- Ensure `--background` in light mode is pure white `0 0% 100%` for cleaner appearance
- Refine `--card` to use subtle off-white or pure white
- Increase `--border` contrast slightly for crisper card edges in light mode

#### 5. ThemeToggle.tsx
- In light mode (non-transparent), use a visible icon color and border

---

### Technical Details

**Navbar width change:**
```tsx
// Before
<div className="max-w-[1200px] mx-auto px-4 md:px-8 ...">
// After
<div className="max-w-[1400px] mx-auto px-6 md:px-10 ...">
```

**CTA fix:**
```tsx
<Link to="/diagnostic" className="... whitespace-nowrap px-6 py-2.5 ...">
```

**CSS light mode refinement:**
```css
:root {
  --background: 0 0% 100%;  /* pure white */
  --border: 0 0% 85%;       /* slightly more visible */
}
```

All changes are cosmetic -- no logic or routing changes. Approximately 15 files touched, mostly single-line `max-w` replacements.

