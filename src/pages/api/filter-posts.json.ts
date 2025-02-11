import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from "astro:content";

export const GET: APIRoute = async ({ url }) => {
    const selectedTags = url.searchParams.get("tags")?.split(",").filter(Boolean) || [];
    const page = Number(url.searchParams.get("page") || "1");
    const ITEMS_PER_PAGE = 15;

    try {
        const allPosts = await getCollection("posts");
        // Trier les posts une seule fois (du plus récent au plus ancien)
        const sortedPosts = [...allPosts].sort((a, b) => 
            b.data.pubDate.getTime() - a.data.pubDate.getTime()
        );
        
        // Filtrage avec sous-tags
        const filteredPosts = selectedTags.length > 0 
            ? sortedPosts.filter(post => 
                selectedTags.every(tag => 
                    post.data.tags.map(t => t.toLowerCase()).includes(tag.toLowerCase())
                )
            )
            : sortedPosts;

        const totalPosts = filteredPosts.length;
        const totalPages = Math.ceil(totalPosts / ITEMS_PER_PAGE);
        const start = (page - 1) * ITEMS_PER_PAGE;

        const paginatedPosts = filteredPosts.slice(start, start + ITEMS_PER_PAGE);

        return new Response(
            JSON.stringify({
                posts: paginatedPosts,
                total: totalPosts,
                totalPages,
                currentPage: page
            }),
            {
                status: 200,
                headers: {
                    'Content-Type': 'application/json',
                    'Cache-Control': 'public, max-age=600' // Cache de 10 minutes
                }
            }
        );
    } catch (error) {
        return new Response(
            JSON.stringify({ error: "Erreur lors de la récupération des posts" }),
            { status: 500 }
        );
    }
} 