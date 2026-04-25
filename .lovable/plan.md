## Plan : Brochure → Popup de capture email avant téléchargement

### Objectif
1. Remplacer le placeholder PDF par la **vraie brochure** uploadée (`STC_Site_Web_Contenu_v1-3.docx` → à convertir en PDF).
2. Transformer le bouton « Télécharger la brochure » (Hero + Footer) en un déclencheur qui ouvre une **popup** demandant l'email de l'utilisateur **avant** le téléchargement.
3. Le bouton « Télécharger » dans la popup reste **grisé/désactivé** tant qu'un email valide n'est pas saisi.
4. Au clic : envoyer l'email via **Web3Forms** (même clé `ea435ede-dfc0-4f09-88b8-9b49d525edf7`) avec un sujet identifiant clairement qu'il s'agit d'un **téléchargement de brochure** (pour traçabilité), puis déclencher le téléchargement du PDF.

---

### Étape 1 — Remplacer le fichier brochure

Le fichier uploadé est un **.docx** (`STC_Site_Web_Contenu_v1-3.docx`), pas un PDF. Je vais :
- Convertir le `.docx` en PDF via LibreOffice headless
- Remplacer `public/brochure-stc-consulting.pdf` par le PDF généré

> ⚠️ Note : le contenu fourni est le document de **contenu éditorial du site**, pas une brochure commerciale finalisée. Si vous avez une vraie brochure design (PDF déjà mis en page), envoyez-la — je la mettrai à la place. En attendant, je convertis ce .docx en PDF pour avoir un fichier propre téléchargeable.

---

### Étape 2 — Créer un composant `BrochureDialog`

**Nouveau fichier : `src/components/BrochureDialog.tsx`**

Composant réutilisable basé sur `Dialog` (shadcn/ui, déjà présent dans le projet).

**Props :**
```tsx
{ open: boolean; onOpenChange: (open: boolean) => void; }
```

**Contenu de la popup :**
- Titre : « Télécharger la brochure STC »
- Sous-titre court : « Renseignez votre email pour recevoir notre brochure complète »
- 1 champ `<input type="email">` requis (validation regex + `trim`)
- 1 bouton « Télécharger la brochure » :
  - **Désactivé (grisé)** tant que l'email est vide ou invalide → classes `opacity-50 cursor-not-allowed pointer-events-none`
  - **Actif** dès qu'un email valide est saisi → style `bg-accent` doré comme les CTA Hero
- État `isSubmitting` pendant l'envoi → texte du bouton : « Envoi… »
- Toast de succès / erreur (via `sonner`, déjà utilisé dans ContactSection)

**Logique au clic « Télécharger » :**
1. Validation email (regex standard)
2. POST vers `https://api.web3forms.com/submit` avec :
   ```
   access_key: ea435ede-dfc0-4f09-88b8-9b49d525edf7
   email: <email saisi>
   from_name: "Sirius Teranga Consulting — Téléchargement brochure"
   subject: "📥 Téléchargement brochure — <email>"
   message: "L'utilisateur <email> a téléchargé la brochure STC depuis le site web le <date>."
   ```
3. Sur succès :
   - Toast « Merci ! Votre téléchargement va démarrer. »
   - Déclenchement du téléchargement programmatique :
     ```ts
     const link = document.createElement('a');
     link.href = '/brochure-stc-consulting.pdf';
     link.download = 'Brochure-STC-Consulting.pdf';
     link.click();
     ```
   - Fermeture de la popup + reset du champ email
4. Sur erreur réseau : toast d'erreur, popup reste ouverte pour réessayer

---

### Étape 3 — Brancher la popup sur les boutons existants

**`src/components/HeroSection.tsx`**
- Remplacer `<a href="/brochure-stc-consulting.pdf" download>` par un `<button>` qui ouvre la dialog
- Ajouter un état local `[brochureOpen, setBrochureOpen] = useState(false)`
- Rendre `<BrochureDialog open={brochureOpen} onOpenChange={setBrochureOpen} />`

**`src/components/Footer.tsx`**
- Même chose : remplacer le `<a>` du footer par un `<button>` + état + composant

> Alternative envisageable (rejetée) : mettre le `BrochureDialog` une seule fois au niveau racine via un context/provider. Pour 2 emplacements seulement, garder une instance par composant est plus simple et sans dette technique.

---

### Étape 4 — i18n (FR + EN)

Ajouter dans `src/i18n/locales/fr.json` et `en.json`, sous une nouvelle clé `brochure_dialog` :

| Clé | FR | EN |
|---|---|---|
| `title` | « Télécharger la brochure STC » | "Download the STC brochure" |
| `description` | « Renseignez votre email pour recevoir notre brochure complète. » | "Enter your email to receive our full brochure." |
| `email_label` | « Email professionnel » | "Professional email" |
| `email_placeholder` | « vous@entreprise.com » | "you@company.com" |
| `submit` | « Télécharger la brochure » | "Download brochure" |
| `submitting` | « Envoi en cours… » | "Sending…" |
| `success` | « Merci ! Votre téléchargement démarre. » | "Thank you! Your download is starting." |
| `error` | « Une erreur s'est produite. Veuillez réessayer. » | "An error occurred. Please try again." |
| `invalid_email` | « Veuillez saisir un email valide. » | "Please enter a valid email address." |

---

### Fichiers touchés (5 + 1 asset)

| Fichier | Action |
|---|---|
| `public/brochure-stc-consulting.pdf` | **Remplacer** par PDF généré depuis le .docx uploadé |
| `src/components/BrochureDialog.tsx` | **Créer** (nouveau composant popup + logique Web3Forms) |
| `src/components/HeroSection.tsx` | Bouton brochure → ouvre la popup |
| `src/components/Footer.tsx` | Lien brochure → ouvre la popup |
| `src/i18n/locales/fr.json` | Ajouter section `brochure_dialog` |
| `src/i18n/locales/en.json` | Ajouter section `brochure_dialog` |

### Hors périmètre
- Pas de stockage en base (les emails arrivent uniquement par Web3Forms dans votre boîte mail — comme demandé)
- Pas de double opt-in / RGPD avancé (à discuter ultérieurement si besoin de mention légale)
- Pas de suivi analytics du clic (peut être ajouté plus tard si vous mettez en place GA / Plausible)
