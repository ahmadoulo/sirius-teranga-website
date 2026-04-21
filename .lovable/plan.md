

## Plan: Restore Original Logo + Add GMAO Service

### Client feedback (2 changes only)

1. **Restore the original logo** with light/dark mode switching (currently a custom-built "STC" badge replaces it)
2. **Add GMAO** (Gestion de la Maintenance Assistée par Ordinateur) somewhere visible on the homepage — in the **Services** block

---

### Change 1 — Restore original logo in Navbar & Footer

The original logo files already exist in the project:
- `src/assets/logo.png` (for light mode → dark logo on white)
- `src/assets/logo-dark.png` (for dark mode → light logo on dark)

**Files modified:**

**`src/components/Navbar.tsx`**
- Replace the custom "STC" badge block (the gradient div with S/T/C letters and gold dot) with `<img>` tags showing the correct logo per theme
- Show `logo.png` in light mode, `logo-dark.png` in dark mode (using `dark:` Tailwind variants — `block dark:hidden` / `hidden dark:block`)
- On the transparent hero state (top of homepage), force the dark-mode (light) logo since the background is navy
- Keep the existing "Sirius Teranga / Consulting" text wordmark next to it
- Adjust logo height (~h-10 md:h-12) for a clean fit

**`src/components/Footer.tsx`**
- Same pattern: use the original logo image instead of any text-based brand mark, sized appropriately for the footer dark background (use `logo-dark.png`)

---

### Change 2 — Add GMAO service card

GMAO is the French equivalent / business name for EAM (the core product STC integrates: Octave Attune EAM = a GMAO solution). Adding it explicitly will resonate with French-speaking clients searching for "GMAO".

**Approach:** Add a new dedicated **GMAO** service card to the Services grid on the homepage (currently 5 services + 1 CTA card).

**`src/components/ServicesSection.tsx`**
- Add a 6th service entry in `serviceKeys`: `{ icon: Wrench, key: "gmao" }` (icon `Wrench` from lucide-react — wrench/maintenance is the universal GMAO symbol)
- Insert it in the relevant position (right after `digital` / EAM, since they are conceptually linked)

**`src/i18n/locales/fr.json`** — add under `services.items`:
```json
"gmao": {
  "title": "Solution GMAO",
  "desc": "Mise en place de votre Gestion de la Maintenance Assistée par Ordinateur (GMAO) : digitalisation des interventions, planification préventive, traçabilité des actifs et pilotage des KPI maintenance."
}
```

**`src/i18n/locales/en.json`** — mirror in English:
```json
"gmao": {
  "title": "CMMS Solution",
  "desc": "Deployment of your Computerized Maintenance Management System (CMMS): digitized work orders, preventive planning, asset traceability and maintenance KPI dashboards."
}
```

**Bonus visibility:** mention "GMAO" in the Services subtitle so the term appears prominently on the homepage:
- FR: "Des solutions intégrées **EAM / GMAO** pour transformer la gestion de vos actifs..."
- EN: "Integrated **EAM / CMMS** solutions to transform your asset management..."

---

### Files touched (4 total)

| File | Change |
|---|---|
| `src/components/Navbar.tsx` | Replace STC badge with `<img>` logo (light/dark variants) |
| `src/components/Footer.tsx` | Use original logo image |
| `src/components/ServicesSection.tsx` | Add 6th service: GMAO with `Wrench` icon |
| `src/i18n/locales/fr.json` + `en.json` | Add `services.items.gmao` keys + tweak `services.subtitle` |

No layout, routing, or color changes. Pure content + asset restoration as requested by the client.

