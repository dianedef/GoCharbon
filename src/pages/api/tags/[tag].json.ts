import type { APIRoute } from 'astro';
import { getTagPosts, isMainTag } from '../../../utils/static-responses';
import { cacheConfig } from '../../../config/tags';

// Pré-générer les routes pour les tags principaux
export async function getStaticPaths() {
    const mainTags = ['business', 'tech', 'design', 'apps'];
    return mainTags.map(tag => ({
        params: { tag },
        props: { isMainTag: true }
    }));
}

export const GET: APIRoute = async ({ params, props }) => {
    try {
        const tag = params.tag?.toLowerCase();
        if (!tag) {
            return new Response(JSON.stringify({
                error: 'Tag non spécifié'
            }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        // Récupérer les posts pour ce tag
        const posts = await getTagPosts(tag);
        const isStatic = props?.isMainTag || isMainTag(tag);

        return new Response(JSON.stringify({
            tag,
            posts,
            isStatic
        }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': `public, max-age=${isStatic ? cacheConfig.staticMaxAge : cacheConfig.dynamicMaxAge}`
            }
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des posts :', error);
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