import { createFileRoute } from '@tanstack/react-router';
import { Discover } from '@/components/unimatch/discover';
export const Route = createFileRoute('/')({
 
 head: () => ({ meta: [{ title: 'Descubrir — UniMatch' }, { name: 'description', content: 'Conoce estudiantes, descubre afinidad académica y conecta con tu comunidad universitaria.' }, { property: 'og:title', content: 'Descubrir — UniMatch' }, { property: 'og:description', content: 'Conoce estudiantes, descubre afinidad académica y conecta con tu comunidad universitaria.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Discover,
});
