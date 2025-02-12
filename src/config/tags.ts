import type { TagHierarchy } from '../utils/types/tags';
import { tagHierarchy } from '../components/tagHierarchy';

// Tags principaux extraits automatiquement de la hiérarchie
export const mainTags = Object.keys(tagHierarchy);

// Type pour s'assurer que les combinaisons utilisent des tags valides
type MainTag = keyof typeof tagHierarchy;
type TagCombination = [MainTag, MainTag];

// Fonction pour générer les combinaisons pertinentes
function generateRelevantCombinations(): TagCombination[] {
    const combinations: TagCombination[] = [];
    const tags = Object.keys(tagHierarchy) as MainTag[];

    // Parcourir chaque tag principal
    for (let i = 0; i < tags.length; i++) {
        const mainTag = tags[i];
        const mainTagData = tagHierarchy[mainTag];

        // Trouver les tags qui ont des sous-tags en commun
        for (let j = i + 1; j < tags.length; j++) {
            const otherTag = tags[j];
            const otherTagData = tagHierarchy[otherTag];

            // Vérifier si les deux tags ont des sous-tags similaires
            const mainSubTags = Object.keys(mainTagData.subtags || {});
            const otherSubTags = Object.keys(otherTagData.subtags || {});
            
            const hasCommonThemes = mainSubTags.some(subTag => 
                otherSubTags.includes(subTag) ||
                // Ou des thèmes liés (par exemple, 'marketing' et 'contenu')
                (subTag.includes('marketing') && otherSubTags.some(t => t.includes('contenu'))) ||
                (subTag.includes('tech') && otherSubTags.some(t => t.includes('digital')))
            );

            if (hasCommonThemes) {
                combinations.push([mainTag, otherTag]);
            }
        }
    }

    return combinations;
}

// Combinaisons fréquentes de tags générées automatiquement
export const commonCombinations: TagCombination[] = generateRelevantCombinations();

// Configuration de la pagination
export const paginationConfig = {
    defaultPerPage: 15,
    maxPerPage: 50
} as const;

// Configuration du cache
export const cacheConfig = {
    // Cache "permanent" pour les réponses statiques (1 an)
    staticMaxAge: 31536000,
    // Cache plus court pour les réponses dynamiques (1 semaine)
    dynamicMaxAge: 604800,
    // Headers complets pour chaque type
    staticCacheControl: 'public, max-age=31536000, immutable',
    dynamicCacheControl: 'public, max-age=604800'
} as const; 