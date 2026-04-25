## Plan : Derniers retours client avant mise en PROD

5 changements ciblés, tous mineurs, aucun impact structurel.

---

### 1. Mettre à jour les coordonnées (téléphone + adresse)

**`src/i18n/locales/fr.json` & `src/i18n/locales/en.json`** (clés `contact.info_phone` et `contact.info_location`) :
- `info_phone` : `"+221 78 788 80 55"` → **`"+221 78 795 73 73"`**
- `info_location` (FR) : `"Dakar, Sénégal"` → **`"Liberté 6, Dakar, Sénégal"`**
- `info_location` (EN) : `"Dakar, Senegal"` → **`"Liberté 6, Dakar, Senegal"`**

Ces clés sont déjà utilisées par `ContactSection.tsx` et `Footer.tsx` → propagation automatique partout (page Contact, accueil, footer).

---

### 2. Téléchargement de la brochure STC Consulting

**Approche recommandée :** héberger le PDF dans `public/` pour un téléchargement direct (rapide, pas de redirection externe, pas de dépendance Google Drive). Ouvert à un lien Google Drive plus tard si vous préférez.

**Étapes :**
- Le client devra fournir le fichier PDF de la brochure (à uploader). Pour ce plan, je placerai un placeholder à `public/brochure-stc-consulting.pdf` que vous remplacerez (ou j'utiliserai le fichier que vous m'enverrez).
- Ajouter un bouton **« Télécharger la brochure »** (icône `Download` lucide) à 2 endroits stratégiques :
  - **HeroSection** : à côté du CTA principal « Diagnostic gratuit » (variante outline pour ne pas concurrencer le CTA primaire)
  - **Footer** : dans la colonne Navigation, lien discret « Brochure STC (PDF) »
- Le bouton utilise `<a href="/brochure-stc-consulting.pdf" download>` → téléchargement natif du navigateur.
- Nouvelles clés i18n : `hero.brochure_btn` / `footer.brochure` (FR : « Télécharger la brochure », EN : « Download brochure »).

**Si vous préférez Google Drive** dès maintenant : il suffit de remplacer le `href` par le lien partagé Drive (format `https://drive.google.com/uc?export=download&id=FILE_ID`) — je peux faire l'ajustement.

---

### 3. Ajouter le téléphone dans le formulaire de contact

**`src/components/ContactSection.tsx`** :
- Ajouter un champ **Téléphone** (input `type="tel"`) entre les champs Email et Société.
- Layout : conserver la grille 2 colonnes en SM+ → ligne 1 = `Nom | Email`, ligne 2 = `Téléphone | Société`, puis Sujet, Message en pleine largeur.
- État du formulaire : ajouter `phone: ""` dans `useState`.
- Soumission : ajouter `formData.append("phone", form.phone)` dans le payload Web3Forms → le numéro arrivera bien dans l'email reçu.
- Champ optionnel (pas d'astérisque, pas de validation bloquante).

**Clés i18n ajoutées** : `contact.phone` / `contact.phone_placeholder` (FR : « Téléphone » / « +221 ... », EN : « Phone » / « +221 ... »).

---

### 4. Mention des gains GMAO chiffrés

Enrichir la communication GMAO avec les chiffres fournis par le client : **+10-20% productivité**, **+15-25% efficacité**, **-10-20% coûts**, **+10-15% disponibilité**.

**Deux emplacements complémentaires :**

**a) Carte service GMAO** (`services.items.gmao.desc` dans `fr.json` / `en.json`) — enrichir la description :
- FR : *« Mise en place de votre Gestion de la Maintenance Assistée par Ordinateur (GMAO) : digitalisation des interventions, planification préventive, traçabilité des actifs. **Gains attendus : +10 à +20% de productivité, -10 à -20% sur les coûts de maintenance, +10 à +15% de disponibilité des équipements.** »*
- EN : équivalent traduit.

**b) Nouveau mini-bloc « Gains GMAO »** dans `ServicesSection.tsx`, juste sous la grille des services (avant ou en remplaçant la carte CTA, à voir) :
- 4 mini-cartes horizontales, chacune avec un chiffre fort (typo gold) + label :
  - **+10-20%** Productivité
  - **+15-25%** Efficacité
  - **-10-20%** Coûts maintenance
  - **+10-15%** Disponibilité
- Style cohérent avec les MetricCard de `WhyUsSection.tsx` (icônes, fond card, accent gold).
- Titre du bloc : « Ce que la GMAO change concrètement » / « What CMMS concretely delivers ».
- Bloc i18n : nouvelle section `services.gmao_gains` (titre + 4 entrées avec `value` et `label`).

---

### 5. Récapitulatif des fichiers touchés

| Fichier | Changement |
|---|---|
| `src/i18n/locales/fr.json` | Téléphone, adresse, desc GMAO enrichie, clés `hero.brochure_btn`, `footer.brochure`, `contact.phone*`, `services.gmao_gains.*` |
| `src/i18n/locales/en.json` | Mêmes ajouts en anglais |
| `src/components/ContactSection.tsx` | Champ téléphone (input + state + payload Web3Forms) |
| `src/components/HeroSection.tsx` | Bouton secondaire « Télécharger la brochure » à côté du CTA |
| `src/components/Footer.tsx` | Lien discret « Brochure STC (PDF) » |
| `src/components/ServicesSection.tsx` | Nouveau bloc « Gains GMAO » (4 chiffres clés) |
| `public/brochure-stc-consulting.pdf` | Placeholder à remplacer par le vrai PDF (ou lien Drive) |

**Aucune modification** de routing, de thème, de structure. Le formulaire continue d'envoyer via Web3Forms (token déjà configuré) — le numéro de téléphone sera simplement inclus dans l'email reçu.

---

### Question ouverte (à confirmer en implémentation)

**Pour la brochure** : voulez-vous que je :
- (a) crée un placeholder vide à `public/brochure-stc-consulting.pdf` que vous remplacerez via upload, ou
- (b) attende que vous m'envoyiez le PDF en pièce jointe pour l'intégrer directement, ou
- (c) utilise dès maintenant un lien Google Drive (donnez-moi l'URL partagée) ?

Par défaut je pars sur **(a)** pour ne pas bloquer les autres changements — il vous suffira d'uploader le fichier final ensuite, le bouton fonctionnera immédiatement.