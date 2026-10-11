import { createFileRoute } from '@tanstack/react-router';
import { Login } from '@/components/unimatch/login';
export const Route = createFileRoute('/login')({
 
 head: () => ({ meta: [{ title: 'Acceso universitario — UniMatch' }, { name: 'description', content: 'Conecta con tu mundo universitario en UniMatch, la red de estudiantes.' }, { property: 'og:title', content: 'Acceso universitario — UniMatch' }, { property: 'og:description', content: 'Conecta con tu mundo universitario en UniMatch, la red de estudiantes.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Login,
});
