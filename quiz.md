# Quiz Business - Architecture et Stratégie

## Objectif
Créer un quiz professionnel et crédible qui aide vraiment les débutants à trouver leur business idéal en ligne, basé sur leur personnalité, compétences, contraintes et objectifs réels.

## Problème du quiz actuel
- Trop superficiel (5 questions seulement)
- Ne considère que les préférences business, pas la personnalité ni les contraintes
- Pas adapté aux débutants (vocabulaire, explications manquantes)
- Ne part pas de l'existant (compétences, passions, budget)
- Scoring simpliste (points par catégorie)

## Architecture en 3 couches

### 1. Profils Business (fichiers .md dans `/src/data/biz/`)
Chaque business model aura son profil complet en markdown :

**Fichiers à créer :**
- `ecommerce.md`
- `dropshipping.md`
- `saas.md`
- `content-creator.md`
- `formation.md`
- `consulting.md`
- `freelance.md`
- `affiliation.md`
- `print-on-demand.md`
- `digital-products.md`

**Structure de chaque fichier .md :**
```md
---
id: "ecommerce"
title: "E-commerce / Boutique en ligne"
icon: "🛒"
category: "vente"
difficulty: "intermediaire"
---

## Description
[Description claire et accessible pour débutants]

## C'est pour toi si...
- Tu as l'âme d'un commerçant
- Tu aimes trouver/créer des produits
- Tu es à l'aise avec la logistique
- etc.

## Prérequis

### Compétences requises
- Marketing digital (niveau: débutant acceptable)
- Gestion de stock (peut s'apprendre)
- Service client
- etc.

### Compétences bonus
- Design / branding
- Photo produit
- Copywriting
- etc.

### Budget nécessaire
- Minimum: 500€ (stock initial, plateforme)
- Recommandé: 2000€ (stock + marketing)
- Optimal: 5000€+ (stock varié, pub)

### Temps à investir
- Lancement: 20-40h (setup boutique)
- Maintenance: 10-20h/semaine
- Peut devenir passif après: non, gestion active

### Niveau d'anglais
- Minimum: A2 (fournisseurs, outils)
- Recommandé: B2 (élargir marché)

## Personnalité idéale

### Traits requis
- Bosseur: ⭐⭐⭐⭐ (très important)
- Patient: ⭐⭐⭐ (résultats en 3-6 mois)
- Autonome: ⭐⭐⭐⭐
- Créatif: ⭐⭐⭐
- Technique: ⭐⭐ (outils no-code disponibles)
- Relationnel: ⭐⭐⭐ (service client)

### Compatible avec
- Entrepreneur pur: ✅
- Salarié + side project: ✅ (difficile)
- Nomade digital: ⚠️ (selon modèle)
- Parent au foyer: ✅

## Objectifs compatibles

### Revenus cibles
- 1000-2000€/mois: ✅ Atteignable en 6-12 mois
- 3000-5000€/mois: ✅ Atteignable en 12-24 mois
- 10000€+/mois: ✅ Possible avec scaling
- Millions: ⚠️ Rare, mais possible

### Liberté
- Géographique: ⚠️ Dépend du modèle (dropshipping ✅, stock physique ❌)
- Horaires: ⚠️ Flexibilité moyenne (commandes à gérer)
- Financière: ✅ Bon potentiel

### Timeline
- Premiers revenus: 1-3 mois
- Rentabilité: 3-6 mois
- Revenu confortable: 12-18 mois

## Contraintes à connaître
- Capital initial nécessaire (stock ou pub)
- Gestion des retours/SAV
- Concurrence forte
- Dépendance aux plateformes (si Amazon/Shopify)
- Marges variables selon produits

## Passions/compétences qui matchent
- Mode, décoration, gadgets
- Artisanat, DIY
- Niche spécifique (sport, gaming, etc.)
- Marketing, réseaux sociaux

## Premiers pas recommandés
1. Choisir une niche (problème à résoudre)
2. Valider la demande (recherches, forums)
3. Trouver fournisseurs fiables
4. Créer boutique (Shopify, WooCommerce)
5. Lancer avec budget marketing test
6. Analyser et optimiser

## Ressources sur le site
- [Guide complet e-commerce](#)
- [Trouver sa niche rentable](#)
- [Fournisseurs recommandés](#)
- [Formation Shopify](#)

## Alternatives proches
- Dropshipping (si pas de capital)
- Print-on-demand (si créatif)
- Affiliation (si pas de stock)
```

### 2. Nouveau Quiz (15-20 questions en 4 phases)

#### Phase 1: Ta situation actuelle (5 questions)
**But:** Comprendre le point de départ

1. **Quelles compétences possèdes-tu déjà ?** (multi-choix)
   - Marketing / Réseaux sociaux
   - Développement web / Code
   - Design / Créatif
   - Rédaction / Communication
   - Vente / Commercial
   - Enseignement / Formation
   - Technique / IT
   - Gestion de projet
   - Aucune compétence particulière (et c'est ok !)

2. **As-tu une passion ou expertise que tu pourrais monétiser ?**
   - Oui, j'ai une expertise professionnelle valorisable
   - Oui, j'ai une passion forte (sport, cuisine, gaming, etc.)
   - J'ai des centres d'intérêt mais pas d'expertise
   - Non, je cherche justement quoi faire

3. **Quel budget peux-tu investir au départ ?**
   - 0€ - Je dois démarrer sans argent
   - 100-500€ - Un petit budget
   - 500-2000€ - Budget modéré
   - 2000-5000€ - Budget confortable
   - 5000€+ - Budget solide

4. **Combien de temps peux-tu y consacrer ?**
   - 5-10h/semaine (j'ai un job à temps plein)
   - 15-20h/semaine (mi-temps disponible)
   - 30-40h/semaine (temps plein)
   - Variable (parent au foyer, étudiant)

5. **Quel est ton niveau d'anglais ?**
   - Débutant (A1-A2) - Je comprends les bases
   - Intermédiaire (B1-B2) - Je me débrouille
   - Avancé (C1-C2) - Je suis fluent
   - Bilingue / Natif

#### Phase 2: Ta personnalité (5 questions)
**But:** Identifier le profil humain

6. **Comment te décrirais-tu au travail ?**
   - Bosseur acharné - Je peux travailler 60h/semaine
   - Équilibré - J'aime bosser mais garder du temps perso
   - Efficace - Je cherche le max de résultats avec le min d'efforts
   - Flexible - Ça dépend des projets

7. **Quel est ton objectif principal ?**
   - Devenir entrepreneur à 100% (quitter le salariat)
   - Garder mon job mais avoir un side-income
   - Avoir un job mais avec totale liberté (remote, horaires)
   - Juste gagner ma vie en faisant ce que j'aime

8. **Quelle est ton attitude face aux résultats ?**
   - Patient - Je peux attendre 1-2 ans avant de gagner correctement
   - Équilibré - 6-12 mois c'est ok
   - Impatient - Je veux des revenus sous 3 mois
   - Pragmatique - Le plus vite possible, mais je suis réaliste

9. **Comment préfères-tu travailler ?**
   - Solo - Je gère tout moi-même
   - Petit équipe - 2-3 personnes max
   - Équipe - J'aime manager et déléguer
   - Flexible - Selon le projet

10. **Es-tu plutôt...**
    - Technique (code, outils, systèmes)
    - Créatif (design, contenu, storytelling)
    - Relationnel (clients, réseau, échanges)
    - Analytique (data, stratégie, optimisation)

#### Phase 3: Tes objectifs (5 questions)
**But:** Comprendre les ambitions et besoins

11. **Quel revenu mensuel vises-tu ?**
    - 500-1000€ - Complément de revenu
    - 1500-2500€ - Couvrir mes besoins de base
    - 3000-5000€ - Vivre confortablement
    - 5000-10000€ - Très bien gagner ma vie
    - 10000€+ - Devenir riche

12. **La liberté géographique est-elle importante pour toi ?**
    - Essentiel - Je veux être nomade digital
    - Important - Je veux pouvoir voyager souvent
    - Appréciable - Quelques semaines par an suffirait
    - Pas important - Je suis bien chez moi

13. **Et la liberté d'horaires ?**
    - Essentiel - Je veux choisir mes horaires à 100%
    - Important - Je veux de la flexibilité
    - Appréciable - Un peu de flex suffit
    - Pas important - J'aime la routine

14. **Sur quelle échelle de temps te projettes-tu ?**
    - Court terme - 6 mois à 1 an
    - Moyen terme - 1 à 2 ans
    - Long terme - 2 à 5 ans
    - Très long terme - 5 ans et +

15. **Es-tu prêt à investir dans ta formation/accompagnement ?**
    - Oui, budget conséquent (1000€+)
    - Oui, un peu (200-500€)
    - Peut-être plus tard
    - Non, je veux apprendre gratuitement

#### Phase 4: Tes préférences business (5 questions)
**But:** Affiner le type d'activité

16. **Qu'est-ce qui t'attire le plus ?**
    - Vendre des produits (physiques ou digitaux)
    - Créer du contenu et bâtir une audience
    - Développer des solutions/outils
    - Partager mes connaissances et former
    - Aider des clients en prestations

17. **Quel modèle de revenu préfères-tu ?**
    - Ventes ponctuelles (produits)
    - Abonnements récurrents (MRR)
    - Projets sur-mesure (clients)
    - Mix de plusieurs sources
    - Passif maximum (peu d'intervention)

18. **Comment veux-tu interagir avec tes clients ?**
    - Automatisation maximale (peu de contact)
    - Relation personnalisée (contact régulier)
    - Communauté en ligne (groupe)
    - Mix d'automatique et humain

19. **Quel type de risque acceptes-tu ?**
    - Faible - Je veux du sûr, progression lente
    - Modéré - Équilibre risque/récompense
    - Élevé - Je veux tenter le gros coup
    - Variable - Selon les opportunités

20. **Quelle est ta plus grande peur ?**
    - Perdre mon investissement financier
    - Perdre mon temps sur quelque chose qui marche pas
    - Ne pas être à la hauteur / syndrome imposteur
    - La technique / les aspects compliqués
    - L'isolement / travailler seul

### 3. Algorithme de Matching Intelligent

**Scoring multi-critères** pour chaque business :

```javascript
function calculateCompatibility(userAnswers, businessProfile) {
  let score = 0;
  let maxScore = 0;
  let blockers = [];
  let warnings = [];

  // 1. Compétences (30%)
  const skillMatch = compareSkills(userAnswers.skills, businessProfile.requiredSkills);
  score += skillMatch * 30;
  maxScore += 30;

  // 2. Budget (BLOQUANT)
  if (userAnswers.budget < businessProfile.minBudget) {
    blockers.push(`Budget insuffisant: ${businessProfile.minBudget}€ requis`);
  }

  // 3. Temps disponible (20%)
  const timeMatch = compareTime(userAnswers.time, businessProfile.timeRequired);
  score += timeMatch * 20;
  maxScore += 20;
  
  // 4. Personnalité (25%)
  const personalityMatch = comparePersonality(userAnswers.personality, businessProfile.idealPersonality);
  score += personalityMatch * 25;
  maxScore += 25;

  // 5. Objectifs (25%)
  const goalMatch = compareGoals(userAnswers.goals, businessProfile.compatibleGoals);
  score += goalMatch * 25;
  maxScore += 25;

  // 6. Préférences business (bonus)
  const preferenceMatch = comparePreferences(userAnswers.preferences, businessProfile.category);
  score += preferenceMatch * 10; // bonus

  // 7. Langue (WARNING)
  if (userAnswers.englishLevel < businessProfile.minEnglish) {
    warnings.push("Niveau d'anglais recommandé: " + businessProfile.minEnglish);
  }

  return {
    score: blockers.length > 0 ? 0 : (score / maxScore) * 100,
    blockers,
    warnings,
    matchDetails: {
      skills: skillMatch,
      time: timeMatch,
      personality: personalityMatch,
      goals: goalMatch,
      preferences: preferenceMatch
    }
  };
}
```

**Résultat final:**
- Top 3 business classés par compatibilité
- Score détaillé pour chaque (skills, personality, goals)
- Warnings/blockers expliqués
- Plan d'action personnalisé pour chaque option
- Redirection vers les ressources du site

## Prochaines étapes

1. ✅ Créer cette documentation (quiz.md)
2. ⬜ Créer le dossier `/src/data/biz/`
3. ⬜ Créer les profils business en .md (commencer par les 5 principaux)
4. ⬜ Mettre à jour `quizData.js` avec les nouvelles questions
5. ⬜ Créer `businessProfiles.js` pour charger les .md
6. ⬜ Implémenter l'algorithme de matching dans `Quiz.vue`
7. ⬜ Améliorer la page de résultats (top 3, détails, plan d'action)
8. ⬜ Ajouter le copywriting empathique et pédagogique
9. ⬜ Tester avec de vrais profils utilisateurs

## Copywriting / Tone of Voice

**Principes:**
- Tutoiement systématique (proche, accessible)
- Vocabulaire débutant-friendly (expliquer les termes)
- Empathique et rassurant (pas de jugement)
- Honnête sur les difficultés (pas de promesses irréalistes)
- Encourageant et motivant
- Concret avec des exemples
- Storytelling: "Imagine que..." / "Par exemple, Sarah a..."

**À éviter:**
- Jargon technique non expliqué
- Promesses de richesse facile
- Ton professoral ou condescendant
- Peur ou urgence artificielle
- Complexité inutile
