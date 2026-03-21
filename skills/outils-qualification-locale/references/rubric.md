# Rubric

## Objective

Qualifier une fiche outil sans transformer une intuition patriotique en fait non vérifié.

## Source Hierarchy

Utiliser cet ordre de confiance :

1. Mentions légales, CGU, politique de confidentialité, page facturation
2. Registre société ou fiche légale publique
3. Documentation sécurité / hébergement
4. Presse sérieuse, pages investisseurs, annonces officielles
5. Marketing, page d’accueil, slogans

Si les niveaux 1-3 manquent, éviter les qualifications fortes.

## Field Semantics

### qualificationLocale

- `france`
  - siège ou structure d’exploitation principale documentée en France
- `union-europeenne`
  - ancrage principal documenté dans l’UE mais pas en France
- `hors-union-europeenne`
  - ancrage principal documenté hors UE
- `indetermine`
  - doute réel ou information absente

### ancrageEconomique

- `fort`
  - faisceau d’indices convergents : siège, fiscalité, gouvernance ou société mère compatibles avec une captation de valeur locale
- `partiel`
  - ancrage local visible mais incomplet, mixte ou brouillé
- `faible`
  - valeur surtout captée ailleurs malgré une présence locale
- `indetermine`
  - pas assez d’éléments

### niveauResponsabilite

- `fort`
  - documentation claire, structure lisible, hébergement documenté, peu de signaux de contradiction
- `partiel`
  - transparence partielle, documentation incomplète, compromis raisonnables
- `faible`
  - opacité forte, incohérences, hébergement peu clair ou hors zone attendue sans explication
- `indetermine`
  - pas assez d’éléments

## Conservative Defaults

- Préférer `indetermine` à une qualification optimiste.
- Préférer `partiel` à `fort` dès qu’un critère majeur manque.
- Ne jamais déduire le pays fiscal depuis le pays du siège.
- Ne jamais déduire l’hébergement des données depuis la langue du site ou la localisation marketing.

## Red Flags

- “Entreprise française” sans entité légale claire
- holding ou société mère absente des pages légales
- politique de confidentialité générique sans lieu de traitement
- marque française exploitée par une structure étrangère opaque
- confusion entre nationalité des fondateurs et domiciliation de la valeur

## Minimum Acceptable Evidence For Strong Qualification

Pour viser `fort`, avoir idéalement :

- un siège documenté
- une information fiscale ou structurelle cohérente
- une note claire sur la société mère si elle existe
- une indication crédible sur l’hébergement ou la gouvernance des données

Sans ça, rester en `partiel` ou `indetermine`.

## Public Badge

Le badge public “Engagement français” est une sortie calculée à partir des métadonnées de qualification.

Implications :

- une surestimation de `qualificationLocale`, `ancrageEconomique` ou `niveauResponsabilite` produit un badge trompeur
- l’absence d’information doit rester visible via un état prudent, pas être masquée
- le badge n’est pas une certification légale, mais une synthèse éditoriale conservatrice

Lecture pratique :

- niveau fort : réservé aux cas bien documentés
- niveau solide : ancrage crédible mais encore partiellement mixte
- niveau modéré : présence locale visible, preuves incomplètes
- niveau faible : peu d’éléments en faveur d’un réel ancrage français
- évaluation en cours : pas assez de métadonnées pour soutenir un badge fiable

Règle de lisibilité :

- le score public est sur 20
- pas de demi-points
- un badge gris doit rester visible tant que l’évaluation n’est pas terminée
