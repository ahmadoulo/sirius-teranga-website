

## Plan: Integrate Real Content from STC Document into the Website

The document defines the real content for Sirius Teranga Consulting -- a specialized Asset Management & EAM consulting firm partnered with Talan/Hexagon. The current site has generic placeholder content. This plan replaces it with real content and adds missing pages.

---

### Summary of Changes

**A. Update existing content (translations fr.json + en.json)**
**B. Create 3 new pages that don't exist yet**
**C. Update routing and navigation**

---

### A. Content Updates to Existing Sections

#### 1. Hero Section
- **Badge**: "Partenaire officiel de Talan -- Channel Partner Hexagon -- Senegal & Afrique de l'Ouest"
- **Title**: "La Souverainete operationnelle. L'Expertise mondiale. L'Ancrage local."
- **Subtitle**: Real text about Asset Management & EAM, 40 ans d'experience, alliance Talan
- **CTA principal**: "Lancer mon Diagnostic gratuit" (instead of generic "Nous contacter")
- **CTA secondaire**: Keep "Decouvrir nos services"
- **Stats**: "40 ans" d'expertise, "7+" references mondiales, "N1" Partenaire Octave Attune EAM

#### 2. "Why STC" / Proposition de valeur (Page 2)
Replace current "WhyUs" content with the 3 pillars:
- L'Heritage industriel (Toyota, Fives ECL, Saudequip, Orange...)
- L'Alliance strategique (Talan, Hexagon, Octave Attune EAM)
- Le Local-Global (ISO 55001, Hexagon Best Practices + terrain senegalais)

#### 3. About Section
Update p1/p2 with real positioning: cabinet de reference en Asset Management & EAM au Senegal

#### 4. Contact Section
- Phone: +221 78 788 80 55
- Add subject options for EAM/Diagnostic

#### 5. Footer
- Update tagline with real positioning
- Add new pages to navigation

---

### B. New Pages to Create

#### Page 1: `/partenariat` -- Partenariat Strategique (Doc Page 3)
New component `PartnershipSection` and page `Partnership.tsx`:
- Narrative block about Octave Attune EAM certification
- "Chaine d'Excellence" visual: Hexagon -> Talan -> STC
- Comparison table "Sans STC" vs "Avec STC" (5 rows)
- CTA to diagnostic

#### Page 2: `/expertises` -- Expertises Complementaires (Doc Pages 4-6)
New component `ExpertisesSection` and page `Expertises.tsx`:
- 3 intervention domains as expandable cards:
  1. Optimisation des processus & excellence operationnelle
  2. Audit organisationnel & structuration
  3. Mise a disposition de ressources & pilotage operationnel
- Each with Problematiques / Interventions / Resultats
- "Approche integree" visual: Organisation x Processus x Systemes
- CTA to diagnostic transformation

#### Page 3: `/references` -- Experiences & References (Doc Pages 7-8)
New component `ReferencesSection` and page `References.tsx`:
- 3 expertise angles with company logos/names:
  - Industrie lourde (Toyota, New Holland, Fives ECL, Eiffage, Vinci)
  - Infrastructures critiques (RATP, CEA, Veolia, Le Louvre, Chateau Blanc, Macaroon SA)
  - Ancrage local (Saudequip, Kaparock Ingenierie)
- Sector reference table (7 sectors with missions + key references)
- CTA "Discutons de votre projet"

#### Page 4: `/diagnostic` -- Diagnostic de Maturite Digitale (Doc Pages 9-10)
New component `DiagnosticSection` and page `Diagnostic.tsx`:
- Landing page for the main CTA offer
- "En 2 jours, sachez exactement ou vous en etes"
- Day 1 / Day 2 breakdown
- "Pour qui" section with eligibility criteria + eligible sectors
- CTA with contact info

---

### C. Routing & Navigation Updates

#### App.tsx -- Add routes:
```
/partenariat -> Partnership
/expertises -> Expertises
/references -> References
/diagnostic -> Diagnostic
```

#### Navbar -- Update nav links:
- Accueil, Partenariat, Expertises, Services, References, Diagnostic, Contact

#### fr.json / en.json -- Add all new translation keys for:
- `nav.partnership`, `nav.expertises`, `nav.references`, `nav.diagnostic`
- `partnership.*`, `expertises.*`, `references.*`, `diagnostic.*`
- Update all existing keys with real document content

---

### Technical Details

- All new pages follow the same layout pattern: `Navbar + SEOHead + main + sections + Footer + BackToTop`
- Same responsive patterns already established (clamp typography, py-14 md:py-24, etc.)
- Comparison table on Partnership page uses a clean grid with green checkmarks / red crosses
- References sector table uses responsive card layout on mobile, table on desktop
- Diagnostic page uses a prominent CTA design with gold accent
- All content in both fr.json and en.json (French content from doc, English translated)

---

### Files to Create
- `src/pages/Partnership.tsx`
- `src/pages/Expertises.tsx`
- `src/pages/References.tsx`
- `src/pages/Diagnostic.tsx`
- `src/components/PartnershipSection.tsx`
- `src/components/ExpertisesSection.tsx`
- `src/components/ReferencesSection.tsx`
- `src/components/DiagnosticSection.tsx`

### Files to Modify
- `src/App.tsx` (add routes)
- `src/components/Navbar.tsx` (update nav links)
- `src/i18n/locales/fr.json` (update all content + add new keys)
- `src/i18n/locales/en.json` (mirror structure in English)
- `src/components/HeroSection.tsx` (update stat keys)
- `src/components/Footer.tsx` (update nav links + tagline)
- `src/pages/Index.tsx` (update SEO metadata)

