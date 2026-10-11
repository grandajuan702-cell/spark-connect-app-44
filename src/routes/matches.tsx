import { createFileRoute } from '@tanstack/react-router';
import { Matches } from '@/components/unimatch/matches';
export const Route = createFileRoute('/matches')({
 
 head: () => ({ meta: [{ title: 'Matches y conexiones — UniMatch' }, { name: 'description', content: 'Tus nuevas conexiones universitarias y conversaciones recientes en UniMatch.' }, { property: 'og:title', content: 'Matches y conexiones — UniMatch' }, { property: 'og:description', content: 'Tus nuevas conexiones universitarias y conversaciones recientes en UniMatch.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Matches,
});
