import { CardDetails } from "@/components/podcast/card-details";
import { Table } from "@/components/podcast/table";
import { fetchPodcast, fetchPodcasts } from "@/lib/podcast";
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    const entry = await fetchPodcasts();
  
    return entry.map((podcast) => ({
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

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex">
                <div className="w-1/3">
                    <CardDetails podcast={podcast}/>
                </div>
                <div className="w-2/3 ml-8">
                    <h1 className="text-3xl font-bold mb-4">Episodes: {podcast.resultCount}</h1>
                    <Table podcast={podcast}/>
                </div>
            </div>
        </div>
    )
}