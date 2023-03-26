import { fetchPodcast, fetchPodcasts } from "@/lib/podcast";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const { feed } = await fetchPodcasts();
  
    return feed.entry.map((podcast) => ({
      podcast: podcast.id.attributes["im:id"],
    }));
}

export async function getPodcast(id: string) {
    return fetchPodcast(id);
}


export default async function Podcast({ params }: { params: { podcast: string } }) {
    const podcast = await getPodcast(params.podcast)
    if(podcast.resultCount === 0) {
        notFound();
    }

    return <h1>{params.podcast}</h1>
}