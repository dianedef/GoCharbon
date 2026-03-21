# Frontmatter Fields

## Fields To Fill

Ces champs ne servent pas seulement à documenter la fiche. Ils alimentent aussi le badge public “Engagement français”.

### qualificationLocale

Valeurs autorisées :

- `france`
- `union-europeenne`
- `hors-union-europeenne`
- `indetermine`

### ancrageEconomique

Valeurs autorisées :

- `fort`
- `partiel`
- `faible`
- `indetermine`

### niveauResponsabilite

Valeurs autorisées :

- `fort`
- `partiel`
- `faible`
- `indetermine`

### paysSiege

Chaîne libre, ex. `France`, `Belgique`, `États-Unis`.

### paysFiscal

Chaîne libre. Ne remplir que si l’information est réellement documentée.

### paysFondateurs

Liste de chaînes. Renseigner seulement si utile pour comprendre l’ancrage, pas comme substitut à la structure légale.

### hebergementDonnees

Valeurs autorisées :

- `france`
- `union-europeenne`
- `hors-union-europeenne`
- `multi-region`
- `inconnu`

### societeMere

Chaîne libre. Nom de la holding ou du groupe, si pertinent.

### sourcesVerification

Liste d’URLs utilisées pour justifier la qualification. Préférer des sources officielles.

### notesQualification

1 à 3 phrases maximum. Utiliser pour documenter une nuance importante ou une contradiction.

### methodologieVersion

Mettre `gocharbon-v1` tant que la méthode publique actuelle reste valable.

## Badge Impact

Le badge dépend principalement de :

- `qualificationLocale`
- `ancrageEconomique`
- `niveauResponsabilite`

Le score est ensuite affiné par :

- `paysFiscal`
- `hebergementDonnees`
- `sourcesVerification`

Conclusion pratique :

- ne pas remplir un champ “au mieux”
- remplir un champ seulement quand on peut l’assumer publiquement
- le badge final est calculé sur 20 points, sans demi-points

## Example

```yaml
qualificationLocale: france
ancrageEconomique: partiel
niveauResponsabilite: partiel
paysSiege: "France"
hebergementDonnees: union-europeenne
sourcesVerification:
  - "https://exemple.com/mentions-legales"
  - "https://exemple.com/privacy"
notesQualification: "Marque et siège français documentés, mais structure groupe encore partiellement opaque."
methodologieVersion: "gocharbon-v1"
```
