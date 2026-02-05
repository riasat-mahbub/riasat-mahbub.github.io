import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    difficulty: z.enum(['Easy', 'Medium', 'Hard']),
    tags: z.array(z.string()),
    publishDate: z.date(),
  }),
});

export const collections = { blog };