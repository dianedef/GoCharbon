---
section: tutos
type: tuto
statut:
- backlog
_priorité: normal
imageNameKey: null
tags:
- Tutoriels
- IA
- Codex
title: Comment Configurer Les Permissions De Codex
author: Diane
description: Apprends à régler les permissions de Codex pour réduire les demandes de confirmation sans perdre le contrôle de ton environnement.
pubDate: '2026-03-20'
imgUrl: ../../assets/astro.jpeg
---

# Comment configurer les permissions de Codex

Si Codex te demande trop souvent des permissions, le sujet n'est pas juste "comment enlever les popups". Tu dois comprendre deux réglages distincts :

- la politique d'approbation
- le niveau de sandbox

La première décide si Codex te demande ton accord. La seconde décide jusqu'où il peut agir.

Si ces notions ne sont pas encore claires, commence par lire [notre article pour comprendre les permissions des CLI IA](https://gocharbon.com/outils/comprendre-les-permissions-des-cli-ia/).

## Étape 1 : repérer le fichier de configuration

Dans une installation classique, Codex lit sa configuration dans `~/.codex/config.toml`.

C'est là que tu peux fixer un comportement par défaut pour toutes tes sessions, au lieu de relancer l'outil avec des options différentes à chaque fois.

## Étape 2 : choisir ton niveau d'autonomie

Tu as trois scénarios simples.

### Option 1 : moins de prompts, mais encore un cadre propre

Ici, tu veux que Codex arrête de demander des permissions tout le temps, tout en restant centré sur ton workspace.

C'est le bon choix si tu bosses surtout sur des projets locaux et que tu veux limiter les dégâts possibles.

### Option 2 : autonomie maximale

Ici, tu veux que Codex ne demande plus rien et qu'il ne soit plus réellement limité par une sandbox de projet.

Dans ce cas, il agit avec les mêmes droits que ton utilisateur shell. Pas plus. Pas moins.

C'est pratique, mais c'est aussi le mode le plus risqué.

### Option 3 : garder les confirmations

Si tu travailles sur des environnements sensibles, tu peux aussi laisser les demandes de confirmation actives et ne jouer que sur le périmètre de sandbox.

Ce n'est pas le plus fluide, mais c'est parfois le plus raisonnable.

## Étape 3 : comprendre les deux réglages utiles

Pour Codex, les deux notions clés sont :

- `approval_policy`
- `sandbox_mode`

En pratique :

- `approval_policy = never` signifie que Codex ne te demandera plus d'autorisation
- `sandbox_mode = workspace-write` signifie qu'il reste limité à l'espace de travail
- `sandbox_mode = danger-full-access` signifie qu'il n'y a plus vraiment de sandbox

## Étape 4 : le réglage conseillé pour la plupart des gens

Si tu veux supprimer les demandes d'approbation sans ouvrir toutes les portes d'un coup, le bon compromis est :

- approbation sur `never`
- sandbox sur `workspace-write`

Ce mode est souvent suffisant pour coder vite, modifier des fichiers, lancer les outils du projet et avancer sans friction.

## Étape 5 : le réglage vraiment agressif

Si tu veux que Codex travaille comme ton utilisateur shell, sans confirmation et sans vraie barrière de sandbox, il faut passer sur un mode d'accès total.

Ce mode peut être utile :

- sur une machine jetable
- dans un environnement déjà isolé
- sur un projet perso sans données sensibles

Évite-le si tu es sur un serveur partagé, une machine avec des secrets, ou un environnement que tu ne maîtrises pas complètement.

## Étape 6 : savoir ce que ça ne change pas

Même avec un mode très permissif :

- Codex ne devient pas root
- Codex ne contourne pas les permissions Linux de ton compte
- Codex ne crée pas d'accès réseau si l'environnement le bloque déjà

En clair, il devient plus libre dans le cadre de tes propres droits système.

## Étape 7 : appliquer le réglage au bon endroit

Tu peux gérer ça de deux façons :

- dans `~/.codex/config.toml` pour un comportement par défaut
- au lancement de Codex avec des options de ligne de commande si tu veux varier selon le contexte

Le fichier de config est plus pratique si tu veux un comportement stable au quotidien.

## Quelle configuration choisir en vrai

Voici le choix simple :

- tu veux du confort sans te mettre en danger inutilement : garde une sandbox de workspace
- tu veux zéro friction et tu assumes le risque : passe en accès total

Si tu hésites, ne commence pas par le mode le plus ouvert. Le bon réflexe, c'est d'augmenter l'autonomie seulement quand le cadre limité devient vraiment un frein.

## Résumé

Pour bien configurer Codex, pense toujours en deux étages :

1. Est-ce qu'il doit encore te demander ton accord ?
2. Dans quel périmètre technique peut-il agir ?

Quand tu règles ces deux points proprement, les permissions de Codex deviennent prévisibles et tu évites la sensation de bricoler à l'aveugle.

Si tu veux comparer avec l'approche d'Anthropic, lis aussi [notre tuto sur les permissions de Claude Code](https://gocharbon.com/tutos/comment-configurer-les-permissions-de-claude-code/).
