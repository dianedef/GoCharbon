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
- ClaudeCode
title: Comment Configurer Les Permissions De Claude Code
author: Diane
description: Comprends comment régler les permissions de Claude Code, choisir le bon mode et éviter les demandes inutiles sans perdre le contrôle.
pubDate: '2026-03-20'
imgUrl: ../../assets/astro.jpeg
---

# Comment configurer les permissions de Claude Code

Claude Code ne gère pas les permissions exactement comme Codex. L'idée générale reste la même, mais la configuration repose davantage sur des modes d'utilisation et sur des règles par outil.

Autrement dit, tu ne règles pas seulement un niveau d'autonomie global. Tu peux aussi préciser ce qui est autorisé, ce qui demande confirmation et ce qui est refusé.

Si tu veux d'abord poser les bases, lis [notre article pour comprendre les permissions des CLI IA](https://gocharbon.com/outils/comprendre-les-permissions-des-cli-ia/).

## Étape 1 : comprendre la logique de Claude Code

Claude Code s'appuie généralement sur trois briques :

- un mode par défaut
- des règles d'autorisation
- des règles de demande de confirmation ou de refus

La logique est simple :

- certaines actions sont acceptées automatiquement
- d'autres déclenchent une demande
- d'autres sont interdites

## Étape 2 : connaître les modes utiles

Les noms exacts peuvent évoluer, mais l'idée reste stable.

### Mode prudent

Claude Code garde un comportement assez surveillé. Il demande des confirmations quand une action sort du cadre le plus sûr.

C'est adapté si tu explores un repo sensible ou si tu veux garder la main sur les commandes shell.

### Mode acceptation des éditions

Dans ce mode, les modifications de fichiers sont plus fluides, mais ça ne veut pas dire que tout devient libre.

Beaucoup de gens se trompent ici : accepter plus facilement les éditions n'est pas la même chose que bypasser toutes les permissions.

### Mode bypass

Là, Claude Code saute les demandes de permission.

C'est l'équivalent du mode "je veux qu'il avance sans m'interrompre". Mais comme toujours, ça ne lui donne pas des droits système supérieurs à ceux de ton utilisateur.

## Étape 3 : utiliser les règles par outil

Claude Code est intéressant parce qu'il peut être plus fin qu'un simple bouton on ou off.

Tu peux raisonner outil par outil :

- lecture de fichiers
- édition
- commandes shell
- accès à certains chemins

En pratique, ça te permet par exemple :

- d'autoriser la lecture partout dans ton projet
- d'accepter automatiquement les éditions
- de demander confirmation pour certaines commandes shell
- d'interdire l'accès à des fichiers sensibles

## Étape 4 : où régler ça

Claude Code s'appuie sur un fichier de paramètres, souvent `settings.json`, avec une logique de priorité selon le contexte.

L'idée importante à retenir n'est pas le nom exact du fichier, mais le fait que tu peux définir :

- un mode par défaut
- des règles `allow`
- des règles `ask`
- des règles `deny`

Tu peux aussi passer par la commande intégrée de gestion des permissions si tu préfères voir et ajuster le comportement de manière plus interactive.

## Étape 5 : le bon réglage pour éviter les interruptions inutiles

Si ton but est juste d'être plus fluide, tu n'as pas forcément besoin d'un bypass total.

Le réglage le plus sain, c'est souvent :

- accepter les éditions courantes
- autoriser la lecture du projet
- ne demander confirmation que pour les commandes shell vraiment sensibles

Tu gardes ainsi un assistant rapide, sans lui ouvrir toutes les portes.

## Étape 6 : quand passer en bypass

Le mode bypass a du sens si :

- tu bosses dans un environnement jetable
- tu sais exactement ce que tu fais
- tu veux enchaîner beaucoup d'actions sans interruption

En revanche, évite-le si tu travailles sur :

- un dépôt client
- un serveur de production
- une machine avec des secrets
- un environnement partagé avec d'autres personnes

## Étape 7 : ce que Claude Code ne fera pas par magie

Même en mode très permissif :

- Claude Code ne devient pas root
- Claude Code ne contourne pas les permissions natives du système
- Claude Code ne traverse pas tout seul les limites imposées par ton environnement

Le bypass enlève les garde-fous de l'outil. Il ne transforme pas ton compte utilisateur.

## La meilleure façon de choisir

Si tu veux aller vite sans faire n'importe quoi, procède dans cet ordre :

1. autorise ce qui est banal
2. garde une confirmation sur ce qui est risqué
3. refuse explicitement ce qui touche à des zones sensibles
4. n'utilise le bypass total que si tu assumes vraiment le contexte

## Résumé

Claude Code fonctionne bien quand tu le configures comme un système de règles, pas comme un simple interrupteur.

Si tu veux moins de friction :

- augmente les permissions utiles
- garde des garde-fous sur le shell et les zones sensibles
- réserve le bypass total aux cas où tu veux vraiment un comportement sans interruption

C'est cette logique qui permet d'avoir un assistant rapide sans lui donner les clés de toute la machine.

Et si tu veux voir l'approche inverse, plus centrée sur approbation plus sandbox, regarde aussi [notre tuto sur les permissions de Codex](https://gocharbon.com/tutos/comment-configurer-les-permissions-de-codex/).
