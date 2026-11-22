import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import type { NoteTag } from '@/types/note';
import NotesClient from './Notes.client';

export const dynamic = 'force-dynamic';

const PER_PAGE = 12;

interface NotesProps {
  params: Promise<{ slug: string[] }>;
}

export default async function Notes({ params }: NotesProps) {
  const { slug } = await params;
  const tag = slug[0] === 'all' ? undefined : (slug[0] as NoteTag);

  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', tag, '', 1],
    queryFn: () => fetchNotes({ page: 1, perPage: PER_PAGE, search: '', tag }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient key={tag ?? 'all'} tag={tag} perPage={PER_PAGE} />
    </HydrationBoundary>
  );
}
