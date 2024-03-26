// 1. Import utilities from `astro:content`
import { z,  defineCollection } from 'astro:content';
// 2. Define your collection(s)
const projectsCollection = defineCollection({ 
    type: 'content',
    schema: ({image}) => 
    z.object({
        title: z.string(),
        badges: z.array(z.string()),
        description: z.string(),
        image: image()
    }),
});

const profile = defineCollection({
    type: 'data',
    schema: ({image}) => 
    z.object({
        socials: z.array(z.object({})),
        technologies: z.array(z.string()),
        education: z.array(z.object({})),
        experience: z.array(z.object({})),
        certificates: z.array(z.object({})),
        images: z.array(z.object({
            src: image(),
            alt: z.string()
        })), 
    })
});

const playground = defineCollection({
    type: 'data',
    schema: z.object({

    })
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'projects': projectsCollection,
    'profile': profile,
    'playground': playground
};