# Plan d'Implémentation: Refonte SEO Technique & Contenu (Marrakech)

Ce plan détaille la stratégie complète pour optimiser le référencement du site sur Google Search, Google Images, et les recherches locales (Marrakech/Maroc), tout en améliorant les performances et l'accessibilité.

## User Review Required

> [!WARNING]
> **Modifications de Contenu** : Je vais modifier les textes des pages d'accueil et "À Propos" pour inclure les mots-clés demandés ("photographe Marrakech", "photographe mariage Marrakech", etc.) et ajouter une section FAQ SEO. Merci de vérifier que le ton reste fidèle à votre marque.
> **Images** : Les images actuelles utilisent des liens externes (Unsplash/Picsum). Je vais leur ajouter les paramètres `&fm=webp` pour forcer le WebP et optimiser le LCP.

## Open Questions

> [!IMPORTANT]
> Avez-vous une URL de domaine personnalisée (ex: `https://www.sbaimouad.com`) à utiliser pour les URLs canoniques et le sitemap, ou dois-je utiliser l'URL Firebase temporaire pour l'instant ? (Je vais utiliser `https://www.sbaimouad.com` par défaut si vous n'en précisez pas).

## Proposed Changes

---

### Configuration & Outils SEO
Mise en place de l'infrastructure de gestion des métadonnées SEO.

#### [NEW] `src/components/SEO.tsx`
Création d'un composant SEO global utilisant `react-helmet-async` pour générer dynamiquement :
- `<title>` unique par page
- `<meta name="description">` optimisée
- Balises Open Graph (og:title, og:image, etc.)
- Twitter Cards
- URLs canoniques
- Données structurées JSON-LD (Schema.org de type `LocalBusiness` et `ProfessionalService`)

#### [MODIFY] `src/main.tsx`
- Envelopper l'application avec `<HelmetProvider>` pour activer `react-helmet-async`.

---

### Fichiers Statiques SEO & Firebase
Optimisation de l'indexabilité et de la mise en cache.

#### [NEW] `public/robots.txt`
- Autoriser le crawl par tous les bots (`User-agent: *`, `Allow: /`).
- Pointer vers le `sitemap.xml`.

#### [NEW] `public/sitemap.xml`
- Génération d'un sitemap statique incluant toutes les routes (`/`, `/portfolio`, `/services`, `/about`, `/contact`).

#### [MODIFY] `firebase.json`
- Ajout de règles de `headers` pour le cache-control (optimisation du cache Firebase pour les assets, CSS, JS, images).

---

### Optimisation des Pages (React Components)
Intégration du composant SEO, optimisation sémantique (H1/H2), contenu localisé et Core Web Vitals.

#### [MODIFY] `src/pages/Home.tsx`
- Intégration du composant `<SEO>` (Mots clés : photographe Marrakech, photographe mariage Marrakech).
- Ajout de contenu textuel stratégique pour cibler "photographe mariage Marrakech" et "shooting photo Maroc".
- Optimisation de l'image LCP (ajout de `loading="eager"` ou retrait de `lazy`, ajout de `fetchPriority="high"`).
- Nettoyage de la hiérarchie des titres (un seul H1).
- Ajout d'attributs `alt` pertinents et SEO-friendly sur les images.

#### [MODIFY] `src/pages/About.tsx`
- Intégration du composant `<SEO>`.
- Enrichissement du texte pour "portrait professionnel Maroc".
- Structuration H1/H2.
- Ajout de `loading="lazy"` sur l'image de la section d'inspiration.

#### [MODIFY] `src/pages/Services.tsx`
- Intégration du composant `<SEO>`.
- Hiérarchisation correcte (H1 pour le titre principal, H2 pour chaque service).
- **Ajout d'une section FAQ SEO** avec balisage Schema.org `FAQPage` via le composant SEO ou directement dans le JSON-LD, répondant aux questions fréquentes (ex: "Où réalisez-vous vos shootings photo à Marrakech ?").

#### [MODIFY] `src/pages/Portfolio.tsx`
- Intégration du composant `<SEO>`.
- Correction du H1.
- Ajout de `loading="lazy"` et de `alt` descriptifs pour toutes les images générées.
- Optimisation des paramètres d'URL des images pour forcer le WebP si possible.

#### [MODIFY] `src/pages/Contact.tsx`
- Intégration du composant `<SEO>` axé sur la localisation locale (Contact photographe Marrakech).
- Balisage de l'adresse physique (Guéliz, Marrakech) pour renforcer le SEO local.

#### [MODIFY] `index.html`
- Ajout de l'attribut `lang="fr"` ou `lang="fr-MA"`.
- Ajout de meta tags de base manquants.
- Preload des polices d'écriture ou du CSS critique si nécessaire pour améliorer le LCP.

---

## Verification Plan

### Automated Tests
- Vérification du bon build du projet (`npm run build`).
- Vérification de l'absence d'erreurs TypeScript / linter.

### Manual Verification
- Simulation d'un test Lighthouse (via outil navigateur) pour confirmer l'amélioration des métriques LCP, Accessibilité, Best Practices, et SEO (objectif 100/100 en SEO).
- Inspection du `<head>` généré pour valider la présence des balises canoniques, Open Graph, et du JSON-LD.
- Validation des attributs `alt` et `loading="lazy"` sur les images.
