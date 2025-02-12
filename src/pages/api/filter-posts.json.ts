import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from "astro:content";

export const GET: APIRoute = async ({ url }) => {
    try {
        // Validation et nettoyage des paramètres
        const tagsParam = url.searchParams.get("tags");
        const selectedTags = tagsParam ? tagsParam.split(",").filter(tag => tag.trim().length > 0).map(tag => tag.toLowerCase()) : [];
        const pageParam = url.searchParams.get("page");
        const page = pageParam && !isNaN(Number(pageParam)) ? Math.max(1, Number(pageParam)) : 1;
        const ITEMS_PER_PAGE = 15;

        // Récupération et tri des posts
        const allPosts = await getCollection("posts");
        const sortedPosts = allPosts.sort((a, b) => 
            b.data.pubDate.getTime() - a.data.pubDate.getTime()
        );
        
        // Filtrage avec validation des tags
        const filteredPosts = selectedTags.length > 0 
            ? sortedPosts.filter(post => {
                const postTags = post.data.tags.map(t => t.toLowerCase());
                return selectedTags.every(tag => postTags.includes(tag));
            })
            : sortedPosts;

        // Pagination
        const totalPosts = filteredPosts.length;
        const totalPages = Math.max(1, Math.ceil(totalPosts / ITEMS_PER_PAGE));
        const validPage = Math.min(page, totalPages);
        const start = (validPage - 1) * ITEMS_PER_PAGE;
        const paginatedPosts = filteredPosts.slice(start, start + ITEMS_PER_PAGE);

        return new Response(
            JSON.stringify({
                posts: paginatedPosts,
                total: totalPosts,
                totalPages,
                currentPage: validPage
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'public, max-age=600'
                }
            }
        );
    } catch (error) {
        console.error('Erreur lors du filtrage des posts:', error);
        return new Response(
            JSON.stringify({ 
                error: "Erreur lors de la récupération des posts",
                details: error instanceof Error ? error.message : 'Erreur inconnue'
            }),
            { 
                status: 500,
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
} 