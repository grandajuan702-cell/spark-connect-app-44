import { createFileRoute } from '@tanstack/react-router';
import { Profile } from '@/components/unimatch/profile';
export const Route = createFileRoute('/profile')({
 
 head: () => ({ meta: [{ title: 'Mi perfil — UniMatch' }, { name: 'description', content: 'Tu perfil universitario, intereses y preferencias de conexión en UniMatch.' }, { property: 'og:title', content: 'Mi perfil — UniMatch' }, { property: 'og:description', content: 'Tu perfil universitario, intereses y preferencias de conexión en UniMatch.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Profile,
});
