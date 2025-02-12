import { getCollection } from 'astro:content';
import type { Post } from './types/content';
import { mainTags, commonCombinations, paginationConfig } from '../config/tags';

export async function getTagPosts(tag: string, page: number = 1): Promise<Post[]> {
    const allPosts = await getCollection('posts');
    const filteredPosts = allPosts
        .filter(post => 
            post.data.tags
                .map(t => t.toLowerCase())
                .includes(tag.toLowerCase())
        )
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

    const start = (page - 1) * paginationConfig.defaultPerPage;
    const end = start + paginationConfig.defaultPerPage;
    
    return filteredPosts.slice(start, end);
}

export async function getFilteredPosts(tags: string[], page: number = 1): Promise<Post[]> {
    const allPosts = await getCollection('posts');
    const filteredPosts = allPosts
        .filter(post => {
            const postTags = post.data.tags.map(t => t.toLowerCase());
            return tags.every(tag => postTags.includes(tag.toLowerCase()));
        })
        .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

    const start = (page - 1) * paginationConfig.defaultPerPage;
    const end = start + paginationConfig.defaultPerPage;
    
    return filteredPosts.slice(start, end);
}

export function isMainTag(tag: string): boolean {
    return mainTags.includes(tag as any);
}

export function isCommonCombination(tags: string[]): boolean {
    const sortedTags = [...tags].sort();
    return commonCombinations.some(combo => 
        JSON.stringify([...combo].sort()) === JSON.stringify(sortedTags)
    );
}

export function generateStaticPath(tags: string[]): string {
    return tags.length === 1 
        ? `/api/tags/${tags[0]}.json`
        : `/api/combinations/${tags.sort().join('-')}.json`;
} 