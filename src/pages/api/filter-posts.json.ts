import type { APIRoute } from 'astro';
import { getFilteredPosts, isCommonCombination } from '../../utils/static-responses';
import { commonCombinations, cacheConfig } from '../../config/tags';

// Pré-générer les routes pour les combinaisons courantes
export async function getStaticPaths() {
    return commonCombinations.map(combo => ({
        params: { tags: combo.join(',') },
        props: { isCommonCombo: true }
    }));
}

export const GET: APIRoute = async ({ url, props }) => {
    try {
        // Récupérer les paramètres de l'URL
        const searchParams = url.searchParams;
        const tags = searchParams.getAll('tags').map(tag => tag.toLowerCase());
        const page = parseInt(searchParams.get('page') || '1');
        const perPage = parseInt(searchParams.get('perPage') || '15');

        if (tags.length === 0) {
            return new Response(JSON.stringify({
                error: 'Au moins un tag doit être spécifié'
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Récupérer les posts filtrés
        const posts = await getFilteredPosts(tags, page);
        
        // Vérifier si c'est une combinaison pré-générée
        const isStatic = props?.isCommonCombo || isCommonCombination(tags);

        return new Response(JSON.stringify({
            tags,
            posts,
            page,
            perPage,
            isStatic
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': isStatic ? cacheConfig.staticCacheControl : cacheConfig.dynamicCacheControl
            }
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des posts filtrés:', error);
        return new Response(JSON.stringify({
            error: 'Erreur serveur'
        }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}; 