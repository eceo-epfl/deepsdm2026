import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';

const event = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string(),
    ctaUrl: z.string().url(),
    ctaLabel: z.string(),
    heroText: z.string(),
    subtitle: z.string(),
    venueDetails: z.string(),
    contactEmail: z.string().email()
  })
});

const program = defineCollection({
  loader: file('src/content/program.json'),
  schema: z.object({
    items: z.array(
      z.object({
        startTime: z.string(),
        endTime: z.string(),
        type: z.enum(['keynote', 'talk', 'panel', 'poster', 'break']),
        title: z.string(),
        speakerIds: z.array(z.string())
      })
    )
  })
});

const speakers = defineCollection({
  loader: file('src/content/speakers.json'),
  schema: z.object({
    items: z.array(
      z.object({
        id: z.string(),
        name: z.string(),
        affiliation: z.string(),
        link: z.string().url().optional(),
        bioShort: z.string(),
        photo: z.string().optional(),
        status: z.enum(['confirmed', 'invited'])
      })
    )
  })
});

const organizers = defineCollection({
  loader: file('src/content/organizers.json'),
  schema: z.object({
    items: z.array(
      z.object({
        name: z.string(),
        role: z.string(),
        institution: z.string(),
        link: z.string().url().optional(),
        photo: z.string().refine((value) => value.startsWith('/') || z.string().url().safeParse(value).success).optional()
      })
    )
  })
});


export const collections = {
  event,
  program,
  speakers,
  organizers
};
