# TASKS.md - Tâches en cours et à venir

## Fait

- [x] Créer CLAUDE.md (onboarding technique pour Claude Code)
- [x] Créer BUSINESS.md (personas, objectifs, stratégie, funnel, revenus)
- [x] Créer NAMES.md (12+ noms de marque candidats avec analyse SEO)
- [x] Ajouter personas supplémentaires (7 au total : Déterminé Perdu, Freelance Équipé, Curieux IA, Salarié Plan B, Allergique au Salariat, Commerçant Digitalisation, Passionné Déconnecté)
- [x] Ajouter CHARBON et CHARBON 2.0 aux candidats de noms
- [x] Première vérification domaines charbon.* (via WebFetch, non définitif)
- [x] Installer uv/uvx et configurer MCP domain-availability

---

## En cours / À faire immédiatement

### Domaines & Naming

- [ ] **Relancer Claude Code** pour activer le MCP `mcp-domain-availability`
- [ ] **Vérifier les domaines avec le MCP** : charbon.co, charbon.net, charbon.app, charbon.dev, charbon.tech, charbon.media, gocharbon.com, gocharbon.fr, lecharbon.fr, lecharbon.com, getcharbon.com
- [ ] **Recherche INPI** : vérifier que "Charbon" n'est pas déposé comme marque dans les classes pertinentes (classe 35 : publicité/business, classe 41 : éducation/formation, classe 42 : services informatiques) → https://data.inpi.fr
- [ ] **Analyser la SERP** : googler "Charbon" et analyser les 3 premières pages — qui domine ? Quel effort pour ranker ?
- [ ] **Vérifier les handles sociaux** : @charbon ou variantes sur X/Twitter, Instagram, LinkedIn, YouTube, TikTok
- [ ] **Test oral** : dire le nom à 10 personnes, vérifier rétention et orthographe spontanée
- [ ] **Décision finale** sur le nom de marque

### Contenu & Site

- [ ] Finaliser le quiz business (architecture dans quiz.md, implémentation Vue dans src/components/vue/Quiz.vue)
- [ ] Atteindre 500 articles (actuellement ~290)
- [ ] Mettre en place le tracking analytics (quiz complétions, taux de clic affiliation)
- [ ] Créer les profils business pour le quiz (ecommerce.md, saas.md, freelance.md, etc. dans src/data/biz/)
- [ ] Newsletter : setup + lead magnet "10 outils français indispensables"

### Branding & Design

- [ ] Valider la palette de couleurs (19 couleurs officielles dans BRANDING.md / uno.config.ts)
- [ ] Vérifier cohérence dark mode sur toutes les pages
- [ ] Footer avec tags principaux cliquables + newsletter signup + liens légaux

### Business & Monétisation

- [ ] Identifier 5-10 SaaS français pour partenariats d'affiliation (Brevo, Lemlist, Tolt, etc.)
- [ ] Mettre en place les liens affiliés avec disclaimers transparents
- [ ] Planifier le guide premium ("De 0 à MRR" ou "Stack solopreneur")

---

## Plus tard

- [ ] Communauté Discord
- [ ] Comparateur d'outils interactif (annuaire SaaS francophone)
- [ ] Podcast / chaîne YouTube
- [ ] Deals exclusifs négociés avec SaaS français
- [ ] Programme d'affiliation propre (lecteurs = ambassadeurs)

---

## Fichiers de référence

| Fichier | Contenu |
|---------|---------|
| `CLAUDE.md` | Onboarding technique Claude Code |
| `BUSINESS.md` | Personas, objectifs, stratégie, funnel |
| `NAMES.md` | Candidats noms de marque + analyse SEO |
| `BRANDING.md` | Guidelines visuelles, ton, copywriting |
| `src/data/CONTENT_GUIDELINES.md` | Règles éditoriales pour les articles |
| `.cursorrules` | Règles rédactionnelles pour Cursor IDE |
| `quiz.md` | Architecture du quiz business |
| `.mcp.json` | Config MCP domain-availability (à activer au restart) |

---

*Dernière mise à jour : 27 janvier 2026*
