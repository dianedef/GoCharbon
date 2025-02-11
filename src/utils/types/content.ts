import type { CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export interface FilterTagsProps {
  mainTags: string[];
  tagHierarchy: Record<string, string[]>;
  initialPosts: Post[];
}

export interface PostsUpdateEvent extends CustomEvent {
  detail: {
    posts: Post[];
    isLoading: boolean;
    currentPage: number;
    totalPages: number;
  };
} 