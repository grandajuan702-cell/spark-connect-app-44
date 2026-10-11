import { createFileRoute } from '@tanstack/react-router';
import { Chat } from '@/components/unimatch/chat';
export const Route = createFileRoute('/messages')({
 validateSearch: (search: Record<string, unknown>) => ({ person: typeof search.person === 'string' ? search.person : 'Sofía Alarcón' }),
 head: () => ({ meta: [{ title: 'Mensajes — UniMatch' }, { name: 'description', content: 'Conversa con tus matches y encuentra horarios en común en tu campus.' }, { property: 'og:title', content: 'Mensajes — UniMatch' }, { property: 'og:description', content: 'Conversa con tus matches y encuentra horarios en común en tu campus.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: MessagesRoute,
});

function MessagesRoute(){const {person}=Route.useSearch();return <Chat personName={person}/>;}
