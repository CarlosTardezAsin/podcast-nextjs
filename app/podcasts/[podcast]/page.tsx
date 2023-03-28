import { CardDetails } from "@/components/podcast/card-details";
import { Table } from "@/components/podcast/table";
import { fetchPodcast, fetchPodcasts } from "@/lib/podcast";

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
    const podcast = await getPodcast(params.podcast);

    return (
        <div className="container mx-auto py-8 px-4 flex">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <CardDetails podcast={podcast}/>
            </div>    
            <div>
                <Table podcast={podcast}/>
            </div>
        </div>
    )
}