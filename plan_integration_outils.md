# Plan d'intégration outils SaaS Web'Indé → GoCharbon

## Résumé

| Tier | Outils totaux | Déjà dans GoCharbon | Nouveaux |
|------|--------------|---------------------|----------|
| ⭐⭐⭐ Haute pertinence | 226 | 42 | 184 |
| ⭐⭐ Pertinence moyenne | 184 | 8 | 176 |
| ⭐ Niche / Grands comptes | 140 | 7 | 133 |
| **Total** | **550** | **57** | **~493** |

---

## Tier A — Batches prioritaires (⭐⭐⭐, ~184 outils)

### Batch 0 — Ajouts manuels haute priorité (6 outils, vérifiés)

| Outil | Dossier cible | Origine | Notes |
|-------|--------------|---------|-------|
| Dougs | `business/comptabilite/` | FR | Expert-comptable en ligne, 37K+ clients |
| Abby | `business/comptabilite/` | FR | Facturation gratuite indépendants, 100K+ clients |
| Dext | `business/comptabilite/` | UK | Comptabilité automatisée, 250K+ entreprises FR |
| Coover | `business/assurance/` | FR | Comparateur assurance pro |
| Agendize | `productivite/` | FR | Prise de RDV en ligne |
| Datacadabra | `marketing/email/` | FR | Data marketing/CRM |

### Batch 1 — Compta/Finance/Trésorerie (23 outils)

| Outil | Dossier cible | Priorité |
|-------|--------------|----------|
| RocketChart | `business/comptabilite/` | Haute |
| Comptalib | `business/comptabilite/` | Haute |
| N2F | `business/comptabilite/` | Haute |
| Billabex | `business/comptabilite/` | Haute |
| Chaintrust | `business/comptabilite/` | Haute |
| Dailybiz | `business/comptabilite/` | Haute |
| Fizen | `business/comptabilite/` | Moyenne |
| Bizyness | `business/comptabilite/` | Moyenne |
| Factomos | `business/comptabilite/` | Moyenne |
| Seqino | `business/comptabilite/` | Moyenne |
| MicroDesk | `business/comptabilite/` | Moyenne |
| Altoviz | `business/comptabilite/` | Moyenne |
| Gestan | `business/comptabilite/` | Moyenne |
| MagnivPro | `business/comptabilite/` | Moyenne |
| L'Expert-Comptable | `business/comptabilite/` | Moyenne |
| Expert-Comptable TPE | `business/comptabilite/` | Moyenne |
| ClicTreso | `business/finance/` | Moyenne |
| Trezorino | `business/finance/` | Moyenne |
| Alticash | `business/finance/` | Moyenne |
| My DSO Manager | `business/finance/` | Moyenne |
| Flowie | `business/finance/` | Moyenne |
| MyLibreEntreprise | `business/comptabilite/` | Basse |
| Quoteo | `business/comptabilite/` | Basse |

### Batch 2 — CRM/Prospection (14 outils)

| Outil | Dossier cible |
|-------|--------------|
| Folk | `business/crm/` |
| Modjo | `business/crm/` |
| FullEnrich | `business/crm/` |
| Datapult | `business/crm/` |
| Visiblee | `business/crm/` |
| Reachy | `business/crm/` |
| GetAccept | `business/crm/` |
| MyClic | `business/crm/` |
| Neodeal | `business/crm/` |
| FullDataLead | `business/crm/` |
| iClosed | `business/crm/` |
| Cockpit | `business/crm/` |
| Sidely | `business/crm/` |
| LeadValue | `business/crm/` |

### Batch 3 — Juridique/RGPD (10 outils) + Banque/Fintech (8 outils)

**Juridique** → dossier `business/legal/` (à créer)

| Outil | Dossier cible |
|-------|--------------|
| Captain Contrat | `business/legal/` |
| LegalPlace | `business/legal/` |
| Witik | `business/legal/` |
| Predictice | `business/legal/` |
| RGPD Express | `business/legal/` |
| Gino Legaltech | `business/legal/` |
| Octolo | `business/legal/` |
| Hello Proove | `business/legal/` |
| Preuveo | `business/legal/` |
| Ikone LegalPlus | `business/legal/` |

**Banque** → `business/comptabilite/` (sous-catégorie banque)

| Outil | Dossier cible |
|-------|--------------|
| Blank | `business/comptabilite/` |
| Memo Bank | `business/comptabilite/` |
| Propulse by CA | `business/comptabilite/` |
| Trustpair | `business/comptabilite/` |
| Micco | `business/comptabilite/` |
| Fiducial Banque | `business/comptabilite/` |
| KissKissBankBank | `business/comptabilite/` |
| Kriptown | `business/comptabilite/` |

### Batch 4 — Paiement (8 outils) + Caisse/POS (13 outils)

**Paiement** → `ecommerce/paiement/` (à créer si besoin)

| Outil | Dossier cible | Origine |
|-------|--------------|---------|
| Lydia Pro | `ecommerce/paiement/` | FR |
| Yavin | `ecommerce/paiement/` | FR |
| Lyf | `ecommerce/paiement/` | FR |
| Sylq | `ecommerce/paiement/` | FR |
| Payzen | `ecommerce/paiement/` | FR |
| GoCardless | `ecommerce/paiement/` | UK |
| Voxpay | `ecommerce/paiement/` | FR |
| SystemPay | `ecommerce/paiement/` | FR |

**Caisse/POS** → `ecommerce/caisse/` (à créer)

| Outil | Dossier cible |
|-------|--------------|
| Global POS | `ecommerce/caisse/` |
| Cash Office | `ecommerce/caisse/` |
| Tactill | `ecommerce/caisse/` |
| Clictill | `ecommerce/caisse/` |
| Chrono-Caisse | `ecommerce/caisse/` |
| Mybe | `ecommerce/caisse/` |
| EBP Caisse | `ecommerce/caisse/` |
| Noticia | `ecommerce/caisse/` |
| SAS Gestion | `ecommerce/caisse/` |
| Kiute Pro | `ecommerce/caisse/` |
| Famoco Pay | `ecommerce/caisse/` |
| Medialog | `ecommerce/caisse/` |
| Incwo | `ecommerce/caisse/` |

### Batch 5 — RH/Recrutement (16 outils)

| Outil | Dossier cible |
|-------|--------------|
| Combo | `business/rh/` (à créer) |
| Silae | `business/rh/` |
| Beetween | `business/rh/` |
| AssessFirst | `business/rh/` |
| Eurecia | `business/rh/` |
| Softy | `business/rh/` |
| Wobee | `business/rh/` |
| Zola RH | `business/rh/` |
| Kizeo Tempo | `business/rh/` |
| Listo Paye | `business/rh/` |
| Fiche-Paie.net | `business/rh/` |
| TPL Paye | `business/rh/` |
| InterviewApp | `business/rh/` |
| WeSuggest | `business/rh/` |
| Nicoka SIRH | `business/rh/` |
| Humatch | `business/rh/` |

### Batch 6 — Marketing/Influence (12 outils)

| Outil | Dossier cible |
|-------|--------------|
| Featt | `marketing/social-media/` |
| ShopMyInfluence | `marketing/social-media/` |
| Kwanko | `marketing/affiliation/` |
| Scal-e | `marketing/email/` |
| Lyfpit | `marketing/social-media/` |
| Cosmic Data | `marketing/social-media/` |
| LeadEnforce | `marketing/social-media/` |
| InfluSpy | `marketing/social-media/` |
| CleverAds | `marketing/seo/` |
| Adrenalead | `marketing/email/` |
| Live Vendor | `marketing/social-media/` |
| Duyo | `marketing/social-media/` |

### Batch 7 — SEO/Contenu (12 outils)

| Outil | Dossier cible |
|-------|--------------|
| Semnaut | `marketing/seo/` |
| InLinks | `marketing/seo/` |
| Oseox | `marketing/seo/` |
| WP Search Console | `marketing/seo/` |
| WeRankBox | `marketing/seo/` |
| FastSEO | `marketing/seo/` |
| JungleUp | `marketing/seo/` |
| LemmiLink | `marketing/seo/` |
| Thruuu | `marketing/seo/` |
| Redaction.io | `marketing/seo/` |
| BrainTube | `creation/` |
| PBN Studio | `marketing/seo/` |

### Batch 8 — E-commerce (8 outils)

| Outil | Dossier cible |
|-------|--------------|
| WiziShop | `ecommerce/` |
| PriceComparator | `ecommerce/` |
| Minea | `ecommerce/` |
| T-Pop | `ecommerce/` |
| Channel Pilot Pro [DE] | `ecommerce/` |
| Echo HelloWorld | `ecommerce/` |
| Fidelatoo | `ecommerce/` |
| Reetags | `ecommerce/` |

### Batch 9 — Communication/Téléphonie (10 outils)

| Outil | Dossier cible |
|-------|--------------|
| Districall | `communication/` |
| Switchy | `communication/` |
| 3CX [US] | `communication/` |
| Mailo Pro | `communication/` |
| Calldesk | `communication/chatbot/` |
| ViaDialog | `communication/` |
| Akio | `communication/` |
| Diabolocom | `communication/` |
| Cision [US] | `communication/` |
| Emailee | `communication/` |

### Batch 10 — IA/Productivité (10 outils)

| Outil | Dossier cible |
|-------|--------------|
| Montee | `tech/ia/` |
| Ask for the Moon | `tech/ia/` |
| YeldaAI | `tech/ia/` |
| SendShort | `creation/` |
| Submagic | `creation/` |
| Klap | `creation/` |
| Qlip | `creation/` |
| Mammouth AI | `tech/ia/` |
| Retalk | `communication/chatbot/` |
| Easy-Peasy AI [US] | `tech/ia/` |

### Batch 11 — Formation (7 outils)

| Outil | Dossier cible |
|-------|--------------|
| Cards Micro-Learning | `formation/` |
| Quiz Wizard | `formation/` |
| Kastorr | `formation/` |
| Digistorm | `formation/` |
| Kahoot [NO] | `formation/` |
| GrAIg | `formation/` |
| Scribbr | `formation/` |

### Batch 12 — Communauté (7 outils) + Gestion de projet (4 outils)

| Outil | Dossier cible |
|-------|--------------|
| Potion Social | `communication/` |
| MeltingSpot | `formation/` |
| Howtank | `communication/` |
| BubbleYou | `communication/` |
| Wudo | `communication/` |
| Linkispot | `communication/` |
| Uniite | `communication/` |
| Draft.io | `productivite/gestion-projet/` |
| AirSaaS | `productivite/gestion-projet/` |
| Excelway | `productivite/gestion-projet/` |
| K-Inventory | `productivite/gestion-projet/` |

### Batch 13 — Autre Business (22 outils)

| Outil | Dossier cible |
|-------|--------------|
| Simplebo | `tech/dev/` |
| PandaSuite | `tech/dev/` |
| WeWeb | `tech/dev/` |
| Faaaster | `tech/hebergement/` |
| Copilhost | `tech/hebergement/` |
| E-Confiance | `marketing/social-media/` |
| Klixi | `business/` |
| Ideel | `business/` |
| VerticalSoft | `business/crm/` |
| MyAssoc | `business/` |
| MyCerfa | `business/` |
| Deebr | `marketing/email/` |
| Welii | `productivite/` |
| Simplis | `business/` |
| Wemind | `business/` |
| Assurdeal | `business/` |
| Kiwiz | `business/comptabilite/` |
| Piloterr | `tech/dev/` |
| RDDZ Scraper | `tech/dev/` |
| Remoteless | `productivite/` |
| Gyfti | `business/` |
| Nettoyage-E-Reputation | `marketing/social-media/` |

---

## Ordre d'exécution recommandé

| Session | Batches | Nb outils | Focus |
|---------|---------|-----------|-------|
| 1 | Batch 1 (top 10) | 10 | Compta/Finance stars |
| 2 | Batch 2 (top 10) | 10 | CRM/Prospection |
| 3 | Batch 3 | 18 | Juridique + Banque |
| 4 | Batch 4 (top 10) | 10 | Paiement + Caisse |
| 5 | Batch 5 (top 10) | 10 | RH/Recrutement |
| 6 | Batch 6 | 12 | Marketing/Influence |
| 7 | Batch 7 | 12 | SEO/Contenu |
| 8 | Batch 8 + 9 | 18 | E-commerce + Communication |
| 9 | Batch 10 + 11 | 17 | IA + Formation |
| 10 | Batch 12 + 13 | 33 | Communauté + Divers |
| 11+ | Remaining from all | ~53 | Compléter les batches |

---

## Mapping catégories → tags

| Catégorie candidats | Tags GoCharbon | Dossier |
|--------------------|---------------|---------|
| Comptabilité/Finance | `Outils Français`, `Comptabilité`, `Business` | `business/comptabilite/` |
| Banque/Fintech | `Outils Français`, `Comptabilité`, `Business` | `business/comptabilite/` |
| CRM/Prospection | `Outils Français`, `CRM`, `Business` | `business/crm/` |
| Juridique/RGPD | `Outils Français`, `Légal`, `Business` | `business/legal/` |
| RH/Recrutement | `Outils Français`, `RH`, `Business` | `business/rh/` |
| Paiement | `Outils Français`, `Paiement`, `E-commerce` | `ecommerce/paiement/` |
| Caisse/POS | `Outils Français`, `Paiement`, `E-commerce` | `ecommerce/caisse/` |
| E-commerce | `Outils Français`, `CMS`, `E-commerce` | `ecommerce/` |
| Marketing/Influence | `Outils Français`, `Social Media`, `Marketing` | `marketing/social-media/` |
| SEO/Contenu | `Outils Français`, `SEO`, `Marketing` | `marketing/seo/` |
| Communication | `Outils Français`, `Communication` | `communication/` |
| IA/Productivité | `Outils Français`, `IA`, `Tech` | `tech/ia/` |
| Formation | `Outils Français`, `Formation` | `formation/` |
| Gestion de projet | `Outils Français`, `Gestion Projet`, `Productivité` | `productivite/gestion-projet/` |

---

## Sous-dossiers

**Existants :**
- `business/legal/` — 9 outils déjà
- `business/rh/` — 14 outils déjà
- `ecommerce/paiement/` — vide, existe
- `productivite/gestion-projet/` — existe

**À créer :**
- `ecommerce/caisse/` — Caisses enregistreuses et POS

---

*Généré le 2026-03-14*
*Source : outils_candidats_webinde.md (annotated)*
