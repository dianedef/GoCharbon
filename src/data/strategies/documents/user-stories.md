---
section: blog
title: 'User Stories : Exprimer les Besoins Utilisateur sans Jargon Technique'
author: Diane
tags:
- Business
- Gestion de projet
- Startup
description: 'Les user stories décrivent ce que l''utilisateur veut accomplir, pas comment le coder. Format "En tant que… je veux… afin de…", critères d''acceptation, et lien avec le PRD.'
pubDate: '2026-03-27'
imgUrl: ../../../assets/astro.jpeg
---

# USER STORIES : EXPRIMER LES BESOINS SANS JARGON TECHNIQUE

"En tant que [utilisateur], je veux [action] afin de [bénéfice]."

C'est tout. C'est le format d'une user story. Ça a l'air simpliste, et c'est justement le point : forcer tout le monde à penser utilisateur plutôt que fonctionnalité.

## Pourquoi les user stories existent

Les specs classiques décrivent ce que le logiciel doit faire : "Le système affiche un formulaire avec les champs nom, email et mot de passe." C'est précis, mais ça ne dit pas pourquoi. Et quand le pourquoi se perd, l'équipe construit des features que personne n'utilise.

Les user stories inversent la logique : on part du besoin utilisateur, et l'implémentation découle du besoin.

## Anatomie d'une bonne user story

### Le format

> En tant que **[type d'utilisateur]**, je veux **[action]** afin de **[bénéfice attendu]**.

**Mauvais** : "En tant qu'utilisateur, je veux un bouton de filtre."

Un bouton de filtre, ce n'est pas un besoin — c'est une solution. Pourquoi l'utilisateur veut-il filtrer ?

**Bon** : "En tant que recruteur, je veux filtrer les candidatures par expérience afin de ne voir que les profils seniors pour ce poste."

Là, le développeur comprend le besoin. Peut-être qu'un filtre est la bonne solution. Peut-être qu'un tri automatique serait mieux. La story laisse cette latitude.

### Les critères d'acceptation

Chaque story a des conditions de validation. C'est ce qui permet de dire "c'est fait" ou "c'est pas fait" sans débat.

**Story** : "En tant que client, je veux recevoir une confirmation par email après ma commande afin de savoir que mon paiement est passé."

**Critères d'acceptation** :
- L'email est envoyé dans les 2 minutes après le paiement
- L'email contient le récapitulatif de commande et le montant
- L'email arrive même si le client ferme la page après le paiement

### La taille

Une bonne user story se développe en quelques heures à quelques jours. Si elle prend plus d'une semaine, elle est trop grosse — découpe-la.

**Trop grosse** : "En tant qu'utilisateur, je veux gérer mon compte."

**Découpée** :
- "En tant qu'utilisateur, je veux modifier mon email afin de garder mon compte à jour."
- "En tant qu'utilisateur, je veux changer mon mot de passe afin de sécuriser mon compte."
- "En tant qu'utilisateur, je veux supprimer mon compte afin d'exercer mon droit RGPD."

## User stories vs PRD

Le [PRD](/strategies/documents/prd) décrit la vision produit : le problème, l'hypothèse, les critères de succès globaux. Les user stories décomposent cette vision en unités de travail.

Un PRD dit : "On veut améliorer le taux de complétion du onboarding de 53% à 75%."

Les user stories disent :
- "En tant que nouvel utilisateur, je veux voir un guide étape par étape afin de savoir quoi configurer en premier."
- "En tant que nouvel utilisateur, je veux pouvoir sauter les étapes optionnelles afin d'aller plus vite si je sais déjà ce que je fais."

## La méthode INVEST

Un bon moyen de vérifier la qualité de tes stories :

- **I**ndépendante : elle peut être développée seule, sans dépendre d'une autre
- **N**égociable : le comment reste ouvert, seul le besoin est fixé
- **V**alorisable : elle apporte de la valeur à l'utilisateur final
- **E**stimable : l'équipe peut évaluer l'effort nécessaire
- **S**uffisamment petite : réalisable en quelques jours
- **T**estable : les critères d'acceptation permettent de vérifier

## Les erreurs courantes

- **Stories techniques déguisées.** "En tant que développeur, je veux migrer la base de données" — ce n'est pas une user story, c'est une tâche technique. Les stories parlent d'utilisateurs finaux.
- **Stories sans critères d'acceptation.** Sans eux, personne ne sait quand c'est fini.
- **Stories trop vagues.** "En tant qu'utilisateur, je veux une bonne expérience" ne veut rien dire.
- **Stories trop prescriptives.** "En tant qu'utilisateur, je veux un dropdown avec 3 options" décrit la solution au lieu du besoin.

## Et après ?

Les user stories alimentent la [roadmap produit](/strategies/documents/roadmap-produit) et se rattachent au [PRD](/strategies/documents/prd) dont elles sont issues. Vue d'ensemble : [les 8 livrables essentiels](/strategies/documents-business).
