

## Plan: Improve Accessibility (88→95+) and Best Practices (81→95+)

### Issues from Lighthouse Screenshots

**Accessibility:**
1. Select elements without associated label elements (contact form `<select>`)
2. Insufficient color contrast ratio
3. Heading elements not in sequentially-descending order
4. Document does not have a main landmark

**Best Practices:**
1. Uses deprecated APIs (not actionable from our code)
2. OG image pointing to lovable.dev placeholder

---

### Changes

#### 1. Add `<main>` landmark wrapper
- **Files**: `Index.tsx`, `About.tsx`, `Services.tsx`, `Contact.tsx`
- Wrap page content in `<main>` element (exclude Navbar/Footer)

#### 2. Fix form labels with `htmlFor` + `id` attributes
- **File**: `ContactSection.tsx`
- Add unique `id` to each input/select/textarea
- Add matching `htmlFor` on each `<label>`
- This fixes both "select without label" and general label association

#### 3. Fix heading hierarchy
- **Files**: Review all sections for heading order (h1→h2→h3, no skips)
- Ensure only HeroSection uses `<h1>`, all sections use `<h2>`, sub-items use `<h3>`
- Check `AboutSection.tsx`, `ServicesSection.tsx`, `MethodologySection.tsx`, etc.

#### 4. Fix color contrast issues
- Audit muted text classes (`text-white/60`, `text-white/75`, `text-muted-foreground` on dark backgrounds)
- Increase opacity on hero stat labels (`text-white/60` → `text-white/80`)
- Increase opacity on hero subtitle (`text-white/75` → `text-white/85`)
- Ensure accent gold text (#D4AF37) on dark backgrounds meets 4.5:1 ratio

#### 5. Fix OG image and meta tags
- **File**: `index.html`
- Replace lovable.dev placeholder OG image with proper brand image or remove
- Remove `twitter:site` pointing to @Lovable

#### 6. Add skip-to-content link
- **File**: `Navbar.tsx` or `App.tsx`
- Add visually hidden skip link for keyboard users: `<a href="#main-content" class="sr-only focus:not-sr-only">Skip to content</a>`

#### 7. Add `role` and `aria` attributes where needed
- Add `aria-label` to decorative/icon-only elements
- Ensure all interactive elements have accessible names

---

### Technical Details

**Label association pattern:**
```tsx
<label htmlFor="contact-subject">Subject</label>
<select id="contact-subject" ...>
```

**Main landmark pattern:**
```tsx
<main id="main-content">
  {/* sections */}
</main>
```

**Contrast fixes** target WCAG AA (4.5:1 for normal text, 3:1 for large text).

