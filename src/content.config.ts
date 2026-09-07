import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    date: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
    summary: z.string(),
    organization: z.string(),
    location: z.string().optional(),
    featured: z.boolean().default(false),
    status: z.string().optional(),
    externalUrl: z.string().url().optional(),
    paperUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
  }),
});

export const collections = { projects };
