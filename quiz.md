# Quiz Business V2 - Implémentation

## Objectif
Améliorer le quiz pour produire une recommandation business plus crédible qu'un simple test de préférences.

## Ce qui a été amélioré
- Passage de `5` à `15` questions.
- Questions réparties sur 3 axes:
  - situation actuelle (compétences, budget, temps, anglais)
  - personnalité et tolérance au risque
  - objectifs business et style de revenu
- Scoring pondéré multi-profils à chaque réponse.
- Résultats enrichis pour les 5 modèles:
  - `ecommerce`
  - `saas`
  - `content`
  - `service`
  - `formation`
- Copie de la page quiz mise à jour (titre + meta description + promesse utilisateur).

## Structure des données
Fichier source: `src/data/quizData.js`

- `questions[]`
  - `id`
  - `text`
  - `options[]`
    - `text`
    - `icon`
    - `points` (objet avec pondération par profil)
- `results`
  - `title`
  - `icon`
  - `description`
  - `strengths[]`

## Logique de scoring (actuelle)
- À chaque réponse, les points sont ajoutés aux profils concernés.
- À la fin, le profil avec le score max est retourné.
- En cas d'égalité, le premier profil trouvé avec le score max est pris.

## Prochaines améliorations recommandées
1. Ajouter un écran "Top 2 profils" en cas de score serré.
2. Ajouter une explication "pourquoi ce résultat" basée sur les réponses les plus discriminantes.
3. Ajouter un niveau de confiance (fort/moyen/faible) selon l'écart de score.
4. Enregistrer les résultats pour suivre les conversions par profil recommandé.
