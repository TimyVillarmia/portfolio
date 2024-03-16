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



// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
    'projects': projectsCollection,
};