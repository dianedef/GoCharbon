import { defineCollection, z } from 'astro:content';

const appCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      imgUrl: image(),
      draft: z.boolean().optional().default(false),
    }),
});

const guideCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      tags: z.array(z.string()),
      description: z.string(),
      pubDate: z.string().transform((str) => new Date(str)),
      imgUrl: image(),
      draft: z.boolean().optional().default(false),
    }),
});

const docsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string().transform((str) => new Date(str)),
    author: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

// Export collections
export const collections = {
  app: appCollection,
  guide: guideCollection,
  docs: docsCollection,
};
