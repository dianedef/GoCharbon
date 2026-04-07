---
section: blog
title: 'PRD (Product Requirements Document) : Spécifie ton Produit Avant de le Construire'
author: Diane
tags:
- Business
- Entrepreneuriat
- Gestion de projet
- Planification
description: 'Le PRD décrit ce que ton produit doit faire, pour qui, et pourquoi. Structure, exemples concrets et template pour rédiger un PRD clair même sans background technique.'
pubDate: '2026-03-27'
imgUrl: ../../../assets/astro.jpeg
---

<!--
SOURCE & INSPIRATION ÉDITORIALE
================================
https://v0-product-requirement-evaluation.vercel.app/blog/how-to-write-a-prd

Framework "6 Dimensions" pondéré :
1. Impact Definition (25%) — métrique + direction + magnitude + timeframe
   Ex. faible : "Améliorer l'activation utilisateur"
   Ex. solide : "Augmenter le taux d'activation de 32% → 40% en 90 jours"

2. Problem Narrative (20%) — utilisateur spécifique + douleur articulée + preuve
   Ex. : "Les nouveaux utilisateurs abandonnent à 47% à l'étape 3. Tickets : 'Je ne sais pas quelles données connecter'"

3. Hypothesis (20%) — "Nous croyons que [action X] pour [utilisateur Y] produira [métrique Z], car [preuve]"

4. Success Criteria (15%) — seuil mesurable + définition du non-succès + indicateurs avancés

5. Non-Goals (10%) — ce qui est volontairement exclu (anti scope creep)

6. Solution Fit (10%) — description centrée utilisateur, PAS de détails techniques
   Mauvais : "Construire un composant React avec dropdown"
   Bon : "L'utilisateur voit 3 templates pertinents, en sélectionner un pré-remplit le formulaire"

ERREURS À COUVRIR :
- Métriques vagues ("améliorer l'engagement")
- Détails d'implémentation dans le PRD
- Confusion outputs (features livrées) vs outcomes (comportements changés)
- PRD de +10 pages → découper

LONGUEUR IDÉALE : 2-4 pages max

SOURCES CITÉES : Lenny Rachitsky, Figma, Amazon (Working Backwards PR/FAQ), Marty Cagan (INSPIRED)
-->

# PRD : SPÉCIFIE CE QUE TON PRODUIT DOIT FAIRE AVANT D'ÉCRIRE UNE LIGNE DE CODE

Le PRD (Product Requirements Document) est le document qui sépare "j'ai une idée" de "je sais ce que je construis". Il décrit le quoi et le pourquoi — jamais le comment. Le comment, c'est le boulot du développeur.

Comme le dit Marty Cagan dans *INSPIRED* : un bon PRD se concentre sur les outcomes (les comportements qu'on veut changer), pas sur les outputs (les features qu'on veut livrer).

## Les 6 dimensions d'un bon PRD

### 1. Définition de l'impact (le plus important)

Ce que tu veux changer, mesuré concrètement.

**Faible** : "Améliorer l'activation utilisateur."

**Solide** : "Augmenter le taux d'activation de 32% à 40% dans les 90 jours suivant le lancement."

Un impact bien défini contient : une métrique, une direction, une magnitude et un délai.

### 2. Narrative du problème

Qui souffre, de quoi, et comment tu le sais.

**Exemple** : "Les nouveaux utilisateurs abandonnent à 47% à l'étape 3 du onboarding. Les tickets support récurrents : 'Je ne sais pas quelles données connecter.' Confirmé par 12 interviews utilisateur."

Un problème sans preuve, c'est une opinion. Une opinion ne justifie pas 3 mois de développement.

### 3. Hypothèse

Le format classique : "Nous croyons que [action X] pour [utilisateur Y] produira [métrique Z], parce que [preuve]."

**Exemple** : "Nous croyons qu'un assistant de configuration guidé pour les nouveaux utilisateurs augmentera le taux de complétion de l'étape 3 de 53% à 75%, parce que les 12 interviews montrent que le blocage est un manque de guidance, pas un manque de motivation."

### 4. Critères de succès

Comment tu sauras que ça a marché — et comment tu sauras que ça n'a pas marché.

- **Métrique principale** : taux de complétion étape 3 ≥ 75%
- **Indicateurs avancés** : temps moyen sur l'étape, taux de clic sur l'aide contextuelle
- **Définition de l'échec** : si le taux reste sous 60% après 30 jours, on itère ou on abandonne

### 5. Non-goals (ce qu'on ne fait PAS)

Le bloc le plus sous-estimé. Il protège contre le scope creep — cette tendance à ajouter "tant qu'on y est, on pourrait aussi…"

**Exemple** : "On ne touche pas au parcours des utilisateurs existants. On ne change pas le modèle de données. On ne construit pas de dashboard analytics à ce stade."

### 6. Description de la solution (centrée utilisateur)

**Mauvais** : "Construire un composant React avec un dropdown qui affiche les templates."

**Bon** : "L'utilisateur voit 3 templates pertinents basés sur son secteur. En sélectionner un pré-remplit le formulaire de configuration."

Décris l'expérience, pas l'implémentation. Le développeur choisira la meilleure approche technique.

## Longueur et format

Un bon PRD fait 2-4 pages. Si tu dépasses 10 pages, découpe en plusieurs PRDs. Amazon utilise le format "Working Backwards" : un communiqué de presse fictif + une FAQ, le tout sur 6 pages max.

## PRD vs cahier des charges

| | PRD | Cahier des charges |
|---|---|---|
| **Focus** | Quoi et pourquoi | Quoi et comment |
| **Public** | Équipe produit | Prestataire externe |
| **Détail technique** | Aucun | Élevé |
| **Flexibilité** | L'équipe choisit l'implémentation | Le prestataire suit les spécifications |

Le PRD laisse de la latitude à l'équipe. Le [cahier des charges](/strategies/documents/cahier-des-charges) cadre un prestataire. Si tu travailles en interne (même en solo), le PRD suffit.

## Les erreurs classiques

- **Métriques vagues.** "Améliorer l'engagement" ne veut rien dire. Quel engagement ? Mesuré comment ? De combien ?
- **Détails d'implémentation.** Le PRD dit "l'utilisateur peut filtrer par date", pas "ajouter un DatePicker React avec un state managé par Zustand".
- **Confondre outputs et outcomes.** Livrer une feature (output) ne signifie pas changer un comportement (outcome).
- **PRD fantôme.** Écrit une fois, jamais relu. Si personne ne s'y réfère pendant le développement, il ne sert à rien.

## Et après ?

Le PRD se traduit en [user stories](/strategies/documents/user-stories) pour le développement, et s'intègre dans une [roadmap produit](/strategies/documents/roadmap-produit) pour la priorisation. Vue d'ensemble : [les 8 livrables essentiels](/strategies/documents-business).
