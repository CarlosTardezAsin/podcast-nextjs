import { notFound } from "next/navigation";
import { CardDetails } from "@/components/podcast/card-details";
import { List } from "@/components/podcast/list";
import { fetchPodcast, fetchPodcastEpisodes, fetchPodcasts } from "@/lib/podcast";

export async function generateStaticParams() {
    const entry = await fetchPodcasts();
  
    return entry.map((podcast) => ({
      podcast: podcast.id.attributes["im:id"],
    }));
}

async function fetchData(podcastId: string) {
    try {
      const podcast = await fetchPodcast(podcastId);
      const podcastEpisodes = await fetchPodcastEpisodes(podcast.results[0].feedUrl);
  
      return { podcast, podcastEpisodes };
    } catch (error) {
      console.error(error);
      return { podcast: null, podcastEpisodes: null };
    }
}

export default async function Podcast({ params }: { params: { podcast: string } }) {
    const { podcast, podcastEpisodes } = await fetchData(params.podcast)
    if(!podcast || !podcastEpisodes) {
        notFound();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 mb-3">
                    <CardDetails podcast={podcast}/>
                </div>    
                <div className="col-md-9">
                    <List podcastId={podcast.results[0].collectionId} items={podcastEpisodes[0].item}/>
                </div>
            </div>
        </div>
    )
}