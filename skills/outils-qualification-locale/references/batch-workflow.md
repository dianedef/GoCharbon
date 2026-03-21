# Batch Workflow

## Objective

Traiter des lots de qualification d'outils de maniere parallele sans perdre la coherence doctrinale ni la credibilite du badge.

## Roles

- coordinateur
  - genere le backlog priorise
  - decoupe les lots
  - assigne une lane par agent
  - consolide l'audit global
- agents qualification
  - modifient uniquement le frontmatter de qualification
  - documentent les preuves dans `sourcesVerification`
  - laissent `indetermine` ou `inconnu` si la preuve manque
- agent QA
  - execute le QA script
  - verifie les doublons et les surqualifications
  - refuse tout lot qui gonfle artificiellement le badge

## Recommended Lane Split

- `admin-finance`
  - `business/admin`
  - `business/comptabilite`
  - `business/facturation`
- `assurance-crm`
  - `business/assurance`
  - `business/crm`
- `communication-productivite`
  - `communication`
  - `productivite`
- `general`
  - reste du corpus

## Commands

Construire le backlog priorise :

```bash
python3 scripts/prioritize_outils_qualification.py --limit 300 --format markdown
```

Sortir un lot pour une lane :

```bash
python3 skills/outils-qualification-locale/scripts/build_qualification_batch.py --lane admin-finance --status todo --priority P1 --limit 25 --format markdown
```

Auditer la couverture globale :

```bash
python3 scripts/audit_outils_qualification.py
```

Controler la qualite avant validation :

```bash
python3 scripts/qa_outils_qualification.py
```

Synchroniser les miroirs d'un meme outil apres qualification :

```bash
python3 scripts/sync_outils_qualification_duplicates.py
```

## Batch Rules

- ne jamais requalifier une fiche `done` sans raison explicite
- traiter d'abord les `P1`, ensuite les `P2`
- ne pas melanger trop de verticales dans un meme lot
- viser des lots de 20 a 30 fiches
- tout cas ambigu doit finir en `indetermine`, jamais en `france par defaut`
- si plusieurs fiches partagent le meme `u_site`, qualifier la fiche canonique puis synchroniser les miroirs
- par defaut, un outil ne doit avoir qu'une seule fiche canonique
- on n'accepte plusieurs fiches pour un meme outil que si les angles editoriaux, les usages et l'intention de recherche sont vraiment differents
- si deux fiches sont quasi identiques, on garde une seule page et on fait remonter l'outil dans plusieurs listings ou tags au lieu de dupliquer l'URL
- tant qu'on n'a pas un vrai pilotage fin des canonicals/noindex par fiche, on evite de maintenir deux pages quasi similaires pour le meme outil
- si deux fiches ont une similarite de contenu tres elevee, on les fusionne par defaut
- si la similarite est moyenne ou faible, on regarde ensuite la largeur fonctionnelle de l'outil et la difference d'intention de recherche avant de garder deux pages

## Definition Of Done

Une fiche est `done` quand elle contient :

- `metadataEnrichedAt`
- `type: outil`
- `qualificationLocale`
- `ancrageEconomique`
- `niveauResponsabilite`
- `paysSiege`
- `hebergementDonnees`
- `sourcesVerification`
- `notesQualification`
- `methodologieVersion`

## QA Rules

- `qualificationLocale: france` doit rester rare et defendable
- `ancrageEconomique: fort` sans faisceau de preuves serieux est refuse
- `niveauResponsabilite: fort` sans hebergement ou transparence credible est refuse
- les doublons de `u_site` doivent etre traites ensemble puis synchronises
- si deux fiches partagent le meme `u_site` avec un contenu tres proche, la resolution par defaut est la fusion ou la suppression du doublon, pas une self-canonical sur deux pages
- une fiche partielle peut etre mergee seulement si elle est explicitement marquee comme incomplète ou bloquee

## Duplicate Decision Ladder

1. Meme `u_site` + meme dossier
   resultat par defaut: fusion/suppression du doublon.
2. Meme `u_site` + tres forte similarite de contenu
   resultat par defaut: une seule fiche canonique.
3. Meme `u_site` + categories differentes mais contenu moyen/faiblement similaire
   question a trancher: est-ce que l'outil sert vraiment deux usages differents avec deux intentions de recherche distinctes ?
4. Si oui
   garder deux fiches seulement si elles sont reecrites avec un angle reellement different.
5. Si non
   garder une seule fiche et remonter l'outil dans plusieurs listes/tags.

Voir aussi: `references/duplicate-resolution-examples.md`
