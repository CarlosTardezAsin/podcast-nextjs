import { CardDetails } from "@/components/podcast/card-details";
import { List } from "@/components/podcast/list";
import { fetchPodcast, fetchPodcastEpisodes, fetchPodcasts } from "@/lib/podcast";

export async function generateStaticParams() {
    const entry = await fetchPodcasts();
  
    return entry.map((podcast) => ({
      podcast: podcast.id.attributes["im:id"],
    }));
}

export default async function Podcast({ params }: { params: { podcast: string } }) {
    const podcast = await fetchPodcast(params.podcast);
    const podcastEpisodes = await fetchPodcastEpisodes(podcast.results[0].feedUrl)

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