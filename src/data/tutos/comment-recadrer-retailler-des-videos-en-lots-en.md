---
section: tutos
tags:
- Tutoriels
imageNameKey: null
u_site: null
title: Comment Recadrer Retailler Des Vidéos En Lots En Ligne
author: Diane
description: 'Découvre Comment Recadrer Retailler Des Vidéos En Lots En Ligne : outil
  français pour entrepreneurs, fonctionnalités et avis.'
pubDate: '2024-03-25'
imgUrl: ../../assets/astro.jpeg
---

# Comment Recadrer et Retailler des Vidéos en Lots

## BATCH RESIZE : PRODUIRE 10 FORMATS EN 1 CLIC

Tu postes sur YouTube, Instagram, TikTok, LinkedIn et Twitter ? Chaque plateforme demande un format different. Retailler tes vidéos une par une, c'est une perte de temps monumentale. Voici comment automatiser tout ca.

---

## Les Formats a Connaitre

| Plateforme | Format | Ratio | Resolution |
|-----------|--------|-------|------------|
| YouTube | Paysage | 16:9 | 1920x1080 |
| Instagram Reels | Portrait | 9:16 | 1080x1920 |
| TikTok | Portrait | 9:16 | 1080x1920 |
| Instagram Feed | Carre | 1:1 | 1080x1080 |
| LinkedIn Vidéo | Paysage/Carre | 16:9 ou 1:1 | 1920x1080 |
| Twitter/X | Paysage | 16:9 | 1280x720 |
| Facebook Stories | Portrait | 9:16 | 1080x1920 |

---

## Methode 1 : Outils En Ligne (Sans Installation)

### Abyssale

Abyssale est specialise dans la generation de visuels et vidéos en lots. C'est l'outil le plus adapte si tu dois produire des dizaines de variantes.

1. Cree un compte sur abyssale.com
2. Importe ta vidéo source
3. Sélectionne les formats de sortie (tu peux en cocher plusieurs d'un coup)
4. L'outil recadre automatiquement en detectant le sujet principal
5. Ajuste manuellement si le cadrage automatique ne te convient pas
6. Lance le rendu en lot et telecharge tout en ZIP

### Kapwing

Kapwing est un editeur vidéo en ligne avec des outils IA integres (sous-titrage auto, B-Roll intelligent, redimensionnement). Tarifs en 2025 : version gratuite (watermark, 720p, 4 min max, 10 credits IA/mois), Pro a 16 USD/mois par membre (facturation annuelle, 1000 credits IA, 4K, sans watermark, fichiers jusqu'a 6 Go), Business a 50 USD/mois par membre.

1. Va sur kapwing.com et connecte-toi
2. Importe ta vidéo
3. Clique sur "Resize" dans la barre d'outils
4. Choisis le format cible (presets disponibles pour chaque réseau)
5. Ajuste le positionnement du contenu dans le nouveau cadre
6. Exporte et repete pour chaque format

### Canva (Vidéo)

Canva gere aussi le redimensionnement vidéo :

1. Cree un projet vidéo au format souhaite
2. Importe ta vidéo
3. Utilise "Magic Resize" (Canva Pro) pour générer plusieurs formats d'un coup
4. Ajuste chaque version si nécessaire

---

## Methode 2 : FFMPEG (Gratuit, Ligne de Commande)

FFMPEG est l'outil le plus puissant et gratuit pour le traitement vidéo en lots. Il demande un peu de technique mais c'est imbattable en rapidite.

### Installer FFMPEG

- **Mac** : `brew install ffmpeg`
- **Windows** : telecharge sur ffmpeg.org, ajoute au PATH
- **Linux** : `sudo apt install ffmpeg`

### Recadrer une vidéo en 9:16 (centre)

```bash
ffmpeg -i input.mp4 -vf "crop=ih*9/16:ih" output_9x16.mp4
```

### Script pour traiter un dossier entier

```bash
for file in *.mp4; do
  ffmpeg -i "$file" -vf "crop=ih*9/16:ih" "vertical_${file}"
done
```

### Redimensionner en 1080x1080 (carre)

```bash
ffmpeg -i input.mp4 -vf "crop=min(iw\,ih):min(iw\,ih),scale=1080:1080" output_square.mp4
```

### Ajouter des barres noires au lieu de cropper

```bash
ffmpeg -i input.mp4 -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2" output_padded.mp4
```

---

## Methode 3 : DaVinci Resolve (Gratuit)

1. Ouvre ton projet dans DaVinci Resolve
2. Va dans File > Project Settings > Master Settings
3. Change la resolution de la timeline (ex : 1080x1920 pour du vertical)
4. Ta vidéo sera automatiquement recadree, ajuste le zoom et la position dans l'Inspector
5. Pour traiter en lot : place tous tes clips sur la timeline, ajuste, puis exporte via Deliver

---

## Astuces Pour un Recadrage Propre

- **Cadre large au tournage** : filme toujours un peu plus large que nécessaire. Ca te laisse de la marge pour recadrer sans perdre le sujet.
- **Sujet au centre** : si tu sais que tu vas devoir recadrer en vertical, garde ton sujet au centre du cadre horizontal.
- **Textes et graphiques** : positionne-les dans la "zone safe" (le centre 80 % de l'image) pour qu'ils restent visibles dans tous les formats.
- **Qualité source** : pars toujours de la meilleure qualité possible. Retailler un 720p en 1080x1920, ca se voit.

---

## Erreurs Courantes

- Recadrer en etirant l'image (deformation) au lieu de cropper
- Oublier de verifier que le sujet principal est bien visible dans le nouveau cadre
- Exporter en basse qualité pour "gagner du temps"
- Ne pas prevoir le recadrage au moment du tournage

---

## Comparatif des Methodes

| Critere | Abyssale | Kapwing | FFMPEG | DaVinci |
|---------|----------|---------|--------|---------|
| Prix | Payant (sur devis) | Gratuit (watermark, 720p) / Pro 16 USD/mois (4K, sans watermark) | Gratuit (open source) | Gratuit |
| Traitement lot | Oui | Limite | Oui | Manuel |
| Qualité | Haute | Moyenne a haute (4K en Pro) | Haute | Haute |
| Facilite | Facile | Facile | Technique | Moyen |
| Vitesse | Rapide | Moyen | Très rapide | Moyen |

---

### Autres outils utiles

- **HandBrake** (gratuit, open source) : conversion de format vidéo. Utile pour convertir des enregistrements Zoom (bitrate variable) en format editable standard avant le recadrage. Telecharge sur handbrake.fr.
- **Auto-Editor** (gratuit, open source, Python) : ligne de commande pour automatiser le decoupage et le redimensionnement vidéo.

---

## Ressources

- [Abyssale - Recadrage vidéo en lots](https://fr.abyssale.com/generate-video/how-to-batch-crop-videos-online)
- [FFMPEG - documentation officielle](https://ffmpeg.org/documentation.html)
- [Kapwing](https://www.kapwing.com/) (gratuit avec watermark, Pro a 16 USD/mois)
- [HandBrake - conversion vidéo gratuite](https://handbrake.fr/)
