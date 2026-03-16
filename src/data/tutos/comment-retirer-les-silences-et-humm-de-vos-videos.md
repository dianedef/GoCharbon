---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Retirer Les Silences Et "Humm" De Vos Vidéos
author: Diane
description: 'Découvre Comment Retirer Les Silences Et "Humm" De Vos Vidéos : outil
  français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment Retirer Les Silences et "Humm" de Vos Vidéos

## DERUSH AUTOMATIQUE : GAGNE DES HEURES DE MONTAGE

Tu fais des vidéos face camera ? Tu passes des heures a couper les silences, les hesitations, les "euh", les "humm" et les faux departs ? C'est la partie la plus penible du montage. Bonne nouvelle : il existe des outils qui le font automatiquement.

---

## Pourquoi Retirer Les Silences ?

- **Rythme** : une vidéo sans temps mort garde l'attention du spectateur
- **Durée** : tu peux reduire une vidéo de 30 % juste en coupant les silences
- **Retention** : YouTube favorise les vidéos avec un bon taux de retention. Moins de temps morts = meilleure retention.
- **Professionnalisme** : les "euh" et hesitations font amateur

Attention : ne coupe pas TOUT. Quelques pauses courtes et naturelles rendent ta vidéo plus agreable. L'objectif est de retirer les silences **longs** (> 0,5 seconde) et les hesitations, pas de creer un montage mitraillette.

---

## Methode 1 : Descript (Le Plus Complet)

Descript est l'outil le plus puissant pour cette tâche. Il transforme ta vidéo en document texte editable.

### Etapes

1. Cree un compte sur descript.com
2. Importe ta vidéo
3. Descript transcrit automatiquement tout l'audio en texte
4. Dans l'editeur, repere les mots de remplissage marques automatiquement ("um", "uh", "euh")
5. Clique sur **Edit > Remove Filler Words** pour les supprimer d'un coup
6. Pour les silences : **Edit > Shorten Word Gaps** et choisis la durée maximum (0.3-0.5 seconde recommande)
7. Verifie le resultat en lecture
8. Exporte ta vidéo editee

### Ce qui rend Descript unique

- Tu edites la vidéo comme un document Word. Supprime du texte = supprime la vidéo correspondante.
- Detection des mots de remplissage en français
- Tu peux aussi supprimer des phrases entieres en les selectionnant dans le texte
- Fonction "Studio Sound" qui nettoie l'audio en un clic
- Fonction "Overdub" pour cloner ta voix et corriger des mots sans re-enregistrer

**Tarifs Descript (2025)** : version gratuite (1h transcription/mois, 720p, watermark), Hobbyist 16 USD/mois (10h, 1080p), Creator 24 USD/mois (30h, 4K, IA illimitee), Business 40 USD/mois (40h, collaboration). Depuis septembre 2025, le modele est passe en "media minutes" + credits IA separes. Facturation annuelle recommandee (25-35 % d'économie).

---

## Methode 2 : Derush.io (Outil Français)

Derush est un outil français specialise dans le derush automatique. Le site existe sous deux formes :

- **derush.io** : l'outil original avec plugin Première Pro. Utilise par des marques comme Konbini et Qonto. Propose une transcription + montage automatique qui rassemble les prises similaires et supprime les blancs. 14 jours d'essai gratuit, pas de carte requise. L'integration Première Pro est un gros plus pour les monteurs professionnels.
- **derush.vidéo** : un service plus recent qui propose la suppression IA des silences et "bad takes". Gratuit pour commencer, pas de carte requise.

1. Va sur derush.io (ou derush.vidéo)
2. Televerse ta vidéo
3. L'outil transcrit et détecte automatiquement les silences et hesitations
4. Tu obtiens un montage pre-derushe que tu peux ajuster
5. Exporte le resultat ou telecharge un fichier XML/EDL compatible avec ton logiciel de montage

L'avantage : tu peux importer le resultat dans DaVinci Resolve ou Première Pro et ajuster les coupes manuellement.

---

## Methode 3 : Recut (Simple et Efficace)

Recut est une app desktop qui détecte les silences sans transcription, en analysant uniquement la forme d'onde audio. Frame-accurate.

1. Telecharge Recut sur getrecut.com (Mac et Windows)
2. Importe ta vidéo ou ton fichier audio (supporte aussi les fichiers WAV, MP3, M4A pour les podcasts)
3. Recut détecte automatiquement les silences en analysant la forme d'onde
4. Ajuste le seuil de detection (en dB) et la durée minimum de silence
5. Preview instant : tu entends le resultat sans attendre le retraitement
6. Multi-camera : coupe sur plusieurs fichiers en même temps en gardant la synchronisation
7. Exporte directement un nouveau fichier ou génère un fichier XML (lossless) pour Première/DaVinci/Final Cut/ScreenFlow

**Prix** : achat unique a 119 USD (parfois en promo a 99 USD). Pas d'abonnement.

---

## Methode 4 : CapCut (Gratuit)

CapCut a une fonction de suppression des silences :

1. Importe ta vidéo
2. Sélectionne le clip
3. Va dans les options du clip et cherche **Silence Detection** (ou "Detection de silence")
4. Règle les parametres :
   - **Durée minimum du silence** : 0.3-0.5 seconde
   - **Volume seuil** : ajuste pour ne pas couper les passages faibles
5. CapCut marque automatiquement les zones de silence
6. Tu peux supprimer les silences en un clic ou les revoir un par un
7. Exporte

C'est gratuit et ca marche bien pour les vidéos courtes (Reels, TikTok).

---

## Methode 5 : DaVinci Resolve (Manuel Mais Gratuit)

Pas de detection automatique dans DaVinci gratuit, mais voici une methode efficace :

1. Place ton clip sur la timeline
2. Passe en onglet **Fairlight** pour voir la forme d'onde audio en grand
3. Repere visuellement les zones de silence (signal plat)
4. Utilise le raccourci **B** (Blade) pour couper au debut et à la fin de chaque silence
5. Sélectionne les segments de silence et supprime avec **Suppr**
6. Active **Ripple Delete** (clic droit > Ripple Delete) pour que la timeline se referme automatiquement

### Astuce pour aller plus vite

- Utilise la touche **J** pour lire en arriere, **L** pour avancer rapidement
- **JJ** ou **LL** pour accelerer la lecture (x2, x4, x8)
- Tu reperes les silences beaucoup plus vite en lecture acceleree

---

## Methode 6 : TimeBolt

TimeBolt (timebolt.io) est une app desktop (Windows et Mac) qui utilise la detection de forme d'onde (pas de transcription IA) pour une precision 20x superieure aux outils base transcription selon l'editeur. Specialisee dans la coupe automatique :

1. Importe ta vidéo (ou fichier audio, sans limite de durée)
2. TimeBolt détecte les silences en 13 secondes pour 1h de vidéo
3. **UMCHECK** (fonction payante supplementaire) : détecte et supprime les "euh", repetitions et tics verbaux. Coût : 0,50 USD par tranche de 10 minutes traitees.
4. **FastForward** : option pour accelerer les scenes plutot que les couper (utile pour les timelapses ou les passages lents)
5. Ajuste les parametres de coupe, pre-visualise le resultat (lecture jusqu'a 4x)
6. Punch-in/Zoom : zoom sur une zone pendant la lecture pour mettre en valeur un element
7. Exporte directement en MP4 ou génère un fichier XML/plugin pour DaVinci Resolve, Première, Final Cut Pro, Camtasia

**Tarifs TimeBolt (2025)** : version gratuite (vidéo uniquement, watermark, pas d'export XML), Pro a 17 USD/mois ou 97 USD/an ou 347 USD a vie (vidéo + audio, export XML, UMCHECK en supplement). Enterprise sur devis pour les équipes.

---

## Comparatif des Outils

| Outil | Detection silences | Detection "euh" | Export vers NLE | Prix |
|-------|-------------------|-----------------|----------------|------|
| Descript | Oui | Oui | Oui | Gratuit (limite) / 16 USD/mois |
| Derush.io | Oui | Oui | Oui (XML, plugin Première) | Essai gratuit 14j / Payant |
| Recut | Oui (forme d'onde) | Non | Oui (XML) | 119 USD (achat unique) |
| CapCut | Oui | Non | Non | Gratuit |
| TimeBolt | Oui (forme d'onde) | Oui (UMCHECK, payant) | Oui (XML) | Gratuit (limite) / 17 USD/mois / 347 USD a vie |
| DaVinci (manuel) | Non | Non | N/A | Gratuit |
| Auto-Editor | Oui | Non | Oui | Gratuit (open source, Python) |

---

## Reglages Recommandes

- **Seuil de silence** : -35 a -40 dB (ajuste selon ton niveau de bruit de fond)
- **Durée minimum** : 0.3 seconde (en dessous, les pauses naturelles disparaissent)
- **Padding** : ajoute 50-100 ms de marge avant et après chaque coupe pour eviter les coupes trop brutales
- **Transition** : un court crossfade audio (20-50 ms) entre les coupes evite les "clics"

---

## Erreurs Courantes

- Couper TOUS les silences (la vidéo devient epuisante a regarder)
- Seuil trop agressif qui coupe des passages parles a voix basse
- Pas de padding = coupes seches qui sonnent robotique
- Ne pas verifier le resultat en lecture complète avant d'exporter
- Oublier de synchroniser l'audio et la vidéo après les coupes (certains outils le gerent, d'autres non)

---

## Workflow Recommande

1. Filme sans te soucier des erreurs (ca te libere et tu parles plus naturellement)
2. Importe dans Descript ou Derush pour le derush automatique
3. Exporte le fichier XML vers DaVinci Resolve ou Première Pro
4. Affine les coupes manuellement (ajoute des pauses ou tu en veux)
5. Continue ton montage normal (musique, visuels, effets)

Ce workflow te fait gagner 60-80 % du temps de montage. Essaie, tu ne reviendras pas en arriere.

---

---

## Alternative Open Source : Auto-Editor

Si tu es a l'aise avec la ligne de commande, Auto-Editor est un outil Python gratuit et open source qui fait un excellent travail :

```bash
pip install auto-editor
auto-editor video.mp4 --margin 0.2s --silent-threshold 0.04
```

Il permet la suppression de silence, l'ajustement de vitesse, et génère un fichier de sortie directement. Compatible avec la plupart des formats vidéo. Gratuit et sans limite.

---

## Ressources

- [Derush.io - La transcription au service du montage](https://www.derush.io/fr/presentation#fonctionnalites)
- [Derush.vidéo - Suppression IA des silences et bad takes](https://derush.video/)
- [Recut - Automatic Vidéo Editor](https://getrecut.com/) (119 USD, achat unique)
- [Descript](https://www.descript.com/) (a partir de 16 USD/mois)
- [TimeBolt](https://www.timebolt.io/) (17 USD/mois ou 347 USD a vie)
- [Auto-Editor sur GitHub](https://github.com/WyattBlue/auto-editor) (gratuit, open source, Python)
