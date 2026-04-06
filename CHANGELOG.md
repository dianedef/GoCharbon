# Changelog

## 2026-04-06

### Added
- **12 nouvelles fiches outils** — Mirakl, Octopia, ShoppingFeed (e-commerce/marketplace), Bootcamp SEO, FormaSEO, Jedha, LiveMentor, Sauce Writing (formation), Contenu.fr (SEO), Taplio (social-media), Dust, Mistral AI (IA)
- **Listes d'experts francophones** — ajout d'experts dans 5 listes existantes (biz, copywriting, e-commerce, marketing, IA)

### Changed
- **Fiches outils SEO refondues** — ContentRank (réécriture complète, -400 lignes), MyRankingMetrics (consolidation, -800 lignes), MyRankingMetrics-1 (corrections), LinksGarden (réécriture)
- **Layout Default.astro** — ajustements de mise en page
- **Page confidentialité** — mise à jour du contenu RGPD

## 2026-03-28/29

### Added
- **Skill `/gocharbon-fiche-outil`** — skill complet (6 phases) + slash command pour évaluer un outil et créer sa fiche avec qualification locale en une seule passe
- **Fiche LivePepper** (`outils/ecommerce/livepepper.md`) — commande en ligne restauration 0% commission, Sophia Antipolis
- **Cluster hébergement : 12 nouvelles fiches outils** — Scaleway, OVHcloud, Infomaniak, Gandi, LWS, PlanetHoster, IONOS, Clever Cloud, WP Serveur, Upsun (ex Platform.sh), avec qualification locale complète sur chacune
- **Page pilier "Hébergeurs Web Français : Le Comparatif"** (`outils/tech/hebergement/hebergeurs-francais.md`) — comparatif de 17 hébergeurs français et francophones organisé par cas d'usage (mutualisé, WordPress managé, cloud, PaaS, registrar, stockage souverain, CDN)

### Changed
- **4 fiches hébergement enrichies** (o2switch, Leviia, Be Cloud, Ex2) — squelettes réécrits en fiches encyclopédiques complètes avec qualification locale
- **Page pilier hébergeurs mise à jour** — intégration des 7 dernières fiches (Gandi, LWS, PlanetHoster, IONOS, Clever Cloud, WP Serveur, Upsun) + nouvelles sections PaaS et registrars

### Removed (draft)
- `tech/ia/autres/quel-hebergeur-web.md` — comparatif 2023 daté, supplanté par le pilier
- `tech/ia/autres/ksuite.md` — squelette mal rangé, kSuite couverte dans la fiche Infomaniak
- `tech/hebergement/alternatives-open-source.md` — copié-collé d'articles tiers, pas une fiche outil
- `tech/hebergement/comment-creer-un-site-daffiliation.md` — hors sujet hébergement

## 2026-03-26

### Changed
- **Centralisation du branding et des routes internes** — ajout de `src/config/site.ts` pour le nom de marque, le domaine, le publisher et les URLs absolues, plus `src/config/routes.ts` pour les chemins internes récurrents; recâblage des layouts, métadonnées SEO, navigation, footer, CTA, quiz et pages piliers pour éviter les chaînes `GoCharbon`, `gocharbon.com` et `/quiz|/parcours|/outils|...` dupliquées
- **Migration du lot `creation/*`** — taxonomie explicite ajoutée sur les fiches directes du dossier creation, avec une catégorisation prudente par usage réel et une seule exception nette (`Praiz` vers `business/crm`)
- **Migration des lots `formation/*` et `productivite/*`** — taxonomie explicite ajoutée sur les fiches directes, avec des sous-catégories prudentes par usage réel et des facettes limitées aux cas évidents
- **Migration de `business/helloasso.md`** — rattachement explicite à `business > association`, avec des facettes limitées à son usage principal
- **Extension de la couverture taxonomique de `marketing/autres`** — une large vague de fiches évidentes a reçu une taxonomie canonique minimale, en gardant `autres` comme amortisseur sur les cas trop éditoriaux ou hybrides
- **Migration ciblée du sous-ensemble `marketing/autres` n-z** — fiches évidentes enrichies avec une taxonomie canonique prudente, surtout pour les outils de recherche utilisateur, vidéo, automatisation, email, événements, e-réputation et RSE
- **Validation technique du refactor taxonomie outils** — installation des dépendances, build Astro complet validé, correction d'un frontmatter YAML cassé et sécurisation des nouvelles routes `/outils/[category]` et `/outils/[category]/[subcategory]`

## 2026-03-25

### Added
- **Navigation taxonomique dédiée pour les outils** — nouvelles pages catégories `/outils/[category]` et sous-catégories `/outils/[category]/[subcategory]`, construites à partir de la taxonomie outil canonique

### Changed
- **Séparation entre taxonomie outils et tags éditoriaux** — les fiches `section: outils` remontent désormais via une taxonomie dédiée au lieu d'être interprétées comme contenu `business`, `marketing` ou `tech` selon leurs tags
- **Cartes outils enrichies** — affichage de la catégorie, de la sous-catégorie et de quelques facettes utiles à la place de tags globaux trop vagues
- **Pages détail outil enrichies** — affichage de la taxonomie canonique dans le contenu et recommandations d'outils similaires basées sur la proximité de taxonomie
- **Page `/outils` clarifiée** — navigation par catégories et sous-catégories outils plutôt que par pages tags éditoriales
- **Page méthodologie ajustée** — vocabulaire réaligné sur la taxonomie outil et le principe d'une seule fiche canonique par outil
- **Première vague de migration taxonomique** — lots `communication/*` et `ecommerce/*` directs enrichis avec `toolCategoryPrimary`, `toolSubcategoryPrimary` et des `toolFacets` prudentes quand c'était évident
- **Migration des lots `productivite/*` et `creation/*`** — taxonomie explicite ajoutée sur les fiches directes de ces dossiers, avec une catégorisation prudente par usage réel
- **Migration du lot `communication/*`** — les fiches outils directes du dossier communication ont reçu `toolCategoryPrimary` et `toolSubcategoryPrimary`, avec des facettes IA ponctuelles sur les cas évidents

### Added
- **Profil business "Testeur Utilisateur / Crowdtester"** (`src/data/biz/profils/testeur-utilisateur.md`) — nouveau profil sur les tests utilisateurs rémunérés, le crowdtesting, uTest comme point d'entrée, et cadrage d'Amazon Vine comme opportunité adjacente plutôt que vrai métier business
- **Source de vérité de taxonomie profils/quiz** (`src/data/profileTaxonomy.ts`) — registre central des 5 archétypes canoniques, profils pivots, clusters, sous-profils et helpers pour réaligner le quiz, les parcours et la navigation
- **Réalignement du quiz sur 5 archétypes canoniques** — suppression de `livecommerce` comme résultat primaire, redistribution du scoring dans `src/data/quizData.js` et `src/data/quizQuickData.js`, et mappings pivots branchés sur `src/data/profileTaxonomy.ts`
- **Restitution du quiz enrichie avec des sous-profils suggérés** — ajout d'un bloc "Voies concrètes à explorer" dans `src/components/vue/Quiz.vue`, alimenté depuis `src/data/profileTaxonomy.ts` via `src/pages/quiz-avance.astro` et `src/pages/quiz-rapide.astro`
- **Pages parcours enrichies avec des parcours voisins** — ajout d'un bloc "Parcours voisins à explorer ensuite" dans `src/pages/parcours/[id].astro`, plus maillage croisé renforcé entre `freelance` et `testeur-utilisateur`
- **Navigation globale clarifiée autour des familles business** — ajout d'un bloc "Grandes familles" dans `src/pages/parcours.astro` et enrichissement des cartes d'entrée sur `src/pages/index.astro` avec des exemples concrets de sous-profils
- **Cluster éditorial "tests rémunérés"** dans `src/data/biz/business-mobile/` :
  - `tests-remuneres.md` — cadrage honnête des tests utilisateurs rémunérés, gains réalistes, familles de plateformes
  - `comparatif-plateformes-tests-remuneres.md` — comparatif uTest, UserTesting, TRYBER, Userbrain, Respondent, User Interviews, TestingTime
  - `amazon-vine-et-alternatives.md` — Amazon Vine, Influenster, Home Tester Club et programmes adjacents, avec distinction claire entre bonus produit et vrai revenu
- **8 nouvelles fiches outils liées aux tests rémunérés et programmes adjacents** dans `src/data/outils/marketing/autres/` :
  - `usertesting.md`
  - `user-interviews.md`
  - `respondent.md`
  - `testingtime.md`
  - `tryber.md`
  - `amazon-vine.md`
  - `influenster.md`
  - `home-tester-club.md`
- **Rapport de recherche** `research/testing-opportunites-paye-2026.md` — cartographie des plateformes et opportunités adjacentes, avec recommandations éditoriales et maillage

## 2026-03-23

### Added
- **Cluster Copywriting complet** — 14 articles (1 pillar + 13 spokes) dans `src/data/marketing/copywriting/` (~25 400 mots) :
  - `index.md` — pillar page "Copywriting : Le Guide Complet pour Vendre avec les Mots"
  - `frameworks.md` — PAS, AIDA, PASTOR, 4P, BAB avec exemples FR
  - `niveaux-conscience.md` — les 5 niveaux de conscience de Schwartz
  - `big-idea.md` — Big Idea et Mécanisme Unique (Ogilvy/Schwartz/Tugan Bara)
  - `titres-accroches.md` — formules de titres, 30+ templates FR, subject lines
  - `storytelling-vente.md` — story selling, structures narratives pour la vente
  - `email-sequences.md` — préchauffage, closing, relance, open loops entre emails
  - `croyances.md` — déconstruction de croyances, 3 fausses croyances (Brunson), concept du véhicule (Tugan)
  - `fascinations.md` — curiosity bullets, 7 types, 20+ templates FR
  - `offres-irresistibles.md` — value stacking, power offers, architecture bonus, garantie
  - `landing-pages.md` — anatomie section par section d'une page de vente
  - `direct-response.md` — philosophie DR, pionniers (Hopkins → Halbert → Tugan Bara)
  - `polarisation.md` — polarisation, identité tribale, ennemi commun, éthique
  - `open-loops.md` — open loops, curiosity gaps, effet Zeigarnik, pattern interrupts
- **Tag "Copywriting"** ajouté dans `tagHierarchy.ts` sous Marketing (subtags : Frameworks, Persuasion, Email Copy, Direct Response)
- **Maillage interne** : 6 cross-links ajoutés dans les articles existants (marketing/index, fondamentaux, email/strategie, ads/index, biz/profils/copywriter, psychologie/neuromarketing-techniques)

## 2026-03-19

### Added
- **Profil business "Entraîneur IA / Data Worker"** (`biz/profils/entraineur-ia.md`) — nouveau profil parcours complet : description, prérequis, personnalité, revenus cibles, 7 étapes, 4 exemples de réussite
- **Mini cocon éducatif "Entraînement IA"** — 6 articles dans `tech/ia/entrainement/` (1 291 lignes) :
  - `index.md` — hub avec vue d'ensemble et liens
  - `comment-entrainer-ia.md` — RLHF expliqué, pipeline, types de feedback humain
  - `combien-gagner-entraineur-ia.md` — chiffres réels par plateforme/domaine + fiscalité FR
  - `competences-entraineur-ia.md` — tier list des compétences + comment progresser
  - `guide-demarrer-entraineur-ia.md` — pas à pas 7 jours + micro-entreprise + pièges
  - `comparatif-plateformes.md` — 10 plateformes comparées + recommandations par profil
- **6 fiches outils plateformes d'entraînement IA** (1 171 lignes) :
  - `outils/tech/ia/outlier-ai.md` — Scale AI, leader mondial RLHF ($10-120/h)
  - `outils/tech/ia/wirk-io.md` — 🇫🇷 ex-Foule Factory, micro-travail français (50K contributeurs)
  - `outils/tech/ia/isahit.md` — 🇫🇷 annotation IA éthique (Paris, 3K+ HITers)
  - `outils/tech/ia/dataannotation-tech.md` — recrute activement des francophones (~25$/h)
  - `outils/tech/ia/mindrift.md` — Toloka, experts spécialisés ($15-100+/h)
  - `outils/tech/ia/kili-technology.md` — 🇫🇷 plateforme B2B enterprise ($25M levés, Airbus/Michelin)
- Maillage interne complet : profil ↔ cocon ↔ fiches outils

### Changed
- `author:` dans les 44 profils business : `Web Indé` → `Diane GoCharbon` (rebranding)

## 2026-03-16

### Added
- **181 nouvelles fiches outils SaaS** — Intégration Web'Indé Apps complète (13 batches), couvrant : comptabilité (19), CRM/prospection (14), juridique/legal (10), RH (8), paiement (8), marketing (20), hébergement/dev (15), productivité (12), assurance/admin (15), e-commerce (12), communication (8), formation (6), social-media (10), et plus
- Nouvelles sous-catégories outils : `business/assurance/`, `business/legal/`, `business/rh/`, `ecommerce/caisse/`, `ecommerce/paiement/`
- Fichier de planning `plan_integration_outils.md` — 13 batches avec mapping catégories
- Fichier candidats annoté `outils_candidats_webinde.md` — ~430 SaaS triés par priorité

### Changed
- Template outils (`_template.md`) — ajout métadonnées `u_origine`, `u_langue_fr`, `u_derniere_maj`
- Fiche **Ideel** réécrite (était décrite comme outil de devis/signature, corrigé en plateforme de gestion d'abonnements/fintech)
- URL corrigée : Klixi (klixi.com → klixi.io), MyAssoc (myassoc.fr → myassoc.org)
- 214 chemins d'images corrigés dans `tech/ia/autres/` (4 niveaux → 5 niveaux)

### Removed
- Fiche junk `tech/ia/autres/faaaster.md` (message personnel, pas une fiche outil)

## 2026-03-13

### Added
- Profil business **Live Commerce** — 6ème profil dans le quiz d'orientation (`livecommerce`)
- Article éducatif complet `biz/e-commerce/live-commerce.md` — chiffres marché ($22 Mds NA+EU), 8+ plateformes détaillées, modèle économique, guide pratique, tendances 2026
- Page profil quiz `biz/profils/livecommerce.md` — description, prérequis, personnalité idéale, étapes, exemples
- Scoring `livecommerce` dans quiz avancé (25 questions) et quiz rapide (8 questions)
- Liens internes croisés depuis live-commerce.md vers ~15 sections du site
- Page `/progression` avec composant `GamificationBar.vue`
- Composant `ParcoursCallToAction.astro`

### Changed
- Quiz Vue component (`Quiz.vue`) — support 6 profils (ajout type `livecommerce` dans ProfileKey, scores, emptyQuizData)
- Pages quiz (`quiz-rapide.astro`, `quiz-avance.astro`) — mapping vers nouveau profil livecommerce
- `parcoursSlugs.ts` — ajout slug `livecommerce` → `live-commerce`
- Profil e-commerce (`biz/profils/ecommerce.md`) — ajout live commerce en alternative + lien dans étape 5
- Profil content-creator (`biz/profils/content-creator.md`) — ajout live commerce en alternative
- `biz/e-commerce/plateformes.md` et `index.md` — liens vers live-commerce.md
- Description résultat e-commerce dans quiz — clarification "derrière l'écran" vs live commerce
- `live-commerce.md` enrichi avec couverture plateformes étendue : Facebook Live, Instagram, YouTube Shopping, plateformes chinoises (Taobao/Douyin/Kuaishou), solutions B2B (Bambuser, Caast, Firework, Livescale, Sprii) + tableau comparatif
- Navigation : « Parcours » en première position, ajout lien « Progression »
- Refonte page d'accueil (`index.astro`)
- `Post.astro` — améliorations layout articles

## 2026-03-10

### Analytics & Confidentialité
- PostHog injecté dans `Default.astro` (production uniquement, clé `phc_XNW...`)
- Page `/confidentialite` complétée avec bouton opt-out PostHog fonctionnel

## 2026-03-03

### Parcours: qualité contenus référencés (suite)
- Réécriture complète de 11 contenus actifs initialement fragiles (liés depuis les parcours).
- Passe de renforcement sur 25 contenus (les 10 réécrits puis les 15 moyens restants) pour atteindre un score qualité `>= 80`:
  - ajout de sections `Ressources pour aller plus loin`
  - ajout de sous-structures `###` pour améliorer la lisibilité
  - ajout de maillage interne utile entre tutos/marketing.

### Audit: statut actuel
- Audit machine régénéré via `node scripts/audit_parcours_content.mjs`.
- Résultat:
  - liens actifs cassés: **0**
  - contenus fragiles: **0**
  - contenus moyens: **0**
  - contenus solides: **126**

### Documentation
- Mise à jour de `PARCOURS_CONTENT_AUDIT.md` avec:
  - nouveaux chiffres d'audit
  - liste des dernières finitions éditoriales
  - suivi des axes de correction maintenus.

### Finitions éditoriales (artefacts)
- Nettoyage des 3 derniers contenus signalés par l'audit (`editorial_note`):
  - `src/data/biz/profils/elearning-creator.md`
  - `src/data/marketing/tunnel/atelier.md`
  - `src/data/tutos/comment-creer-un-serveur-de-preprod.md`
- Vérification post-correction: `artifact_flags = 0` sur les contenus actifs parcours.

### Passe premium conversion (pages pivot)
- Réécriture orientée conversion et pédagogie de 5 pages à fort impact:
  - `src/data/biz/index.md`
  - `src/data/marketing/fondamentaux.md`
  - `src/data/seo/fondamentaux/bases-seo.md`
  - `src/data/marketing/analytics/kpis.md`
  - `src/data/marketing/tunnel/proramme-beta.md`
- Objectif: langage plus accessible, plan d'action plus direct, CTA et KPI plus clairs.
- Validation post-passe:
  - liens actifs cassés: **0**
  - contenus fragiles: **0**
  - contenus moyens: **0**
  - contenus solides: **126**

## 2026-03-02

### Parcours: UX + contenu
- Harmonisation du langage sur 42 fiches parcours (`src/content/parcours/*.md`).
- Ton simplifié et amical pour débutants, avec conservation des termes techniques importants quand utiles (SEO + pédagogie).
- Structure éditoriale alignée sur toutes les fiches:
  - `Ton objectif`
  - `En clair (version simple)`
  - `Idées d'offres à tester`
  - `Ton plan simple sur 7 jours`
  - `Les chiffres utiles à suivre`
  - `Pièges à éviter`
  - `À la fin, tu dois avoir`
  - `Liens utiles pour avancer`
  - `Idées de contenus pour aller plus loin`

### Parcours: cohérence vocabulaire modules
- Renommage des modules/étapes pour cohérence "bases" dans `src/data/parcoursData.ts`:
  - `Les bases du business en ligne`
  - `Les bases pour trouver des clients`
  - `Les bases du SEO`
  - `Bases communes`

### Liens: vérification et corrections
- Audit des liens actifs parcours (étapes + liens utiles): **0 lien cassé** après correction.
- Corrections appliquées:
  - `/tutos/construire-un-calendrier-editorial-qui` -> `/tutos/comment-construire-un-calendrier-editorial-qui`
  - `/tutos/creer-un-pdf-remplissalbe` -> `/tutos/comment-creer-un-pdf-remplissalbe`
- Note: les liens non existants restants sont dans `Idées de contenus pour aller plus loin` (backlog éditorial volontaire).

### Contenus référencés: qualité & complétude
- Réécriture complète de 9 contenus faibles référencés par les parcours:
  - `src/data/outils/business/autres/crm.md`
  - `src/data/tutos/implementer-un-gestionnaire-de-relations-clients.md`
  - `src/data/tutos/comment-importer-des-produits-amazon-dans.md`
  - `src/data/tutos/deployer-un-serveur.md`
  - `src/data/tutos/envoyer-email-a-partir-de-wordpress.md`
  - `src/data/marketing/email/strategie.md`
  - `src/data/marketing/email/automation.md`
  - `src/data/marketing/ads/google.md`
  - `src/data/outils/creation/index.md`
- Résultat audit après réécriture (contenus actifs référencés): `THIN_LT180 = 0`.
- Vérification des liens internes sur ces 9 fichiers: `TARGET_FILES_BROKEN_LINKS = 0`.

### QA continu parcours
- Ajout d'un audit automatisé des contenus actifs parcours:
  - `scripts/audit_parcours_content.mjs`
  - sortie JSON: `scripts/parcours_content_audit.json`
  - rapport lisible: `PARCOURS_CONTENT_AUDIT.md`
  - grille: `PARCOURS_QUALITY_RUBRIC.md`
- Ajout de la commande npm:
  - `npm run audit:parcours`
