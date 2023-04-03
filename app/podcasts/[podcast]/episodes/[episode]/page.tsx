import { CardDetails } from "@/components/podcast/card-details";
import { CardMp3 } from "@/components/podcast/card-mp3";
import { fetchPodcast, fetchPodcastEpisodes } from "@/lib/podcast";

export default async function Podcast({ params }: { params: { podcast: string, episode: string } }) {
    const podcast = await fetchPodcast(params.podcast);
    const podcastEpisodes = await fetchPodcastEpisodes(podcast.results[0].feedUrl);
    const episodeSelected = podcastEpisodes[0].item.find(item => item.guid[0]._ === params.episode)

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 mb-3">
                    <CardDetails podcast={podcast}/>
                </div>    
                <div className="col-md-9">
                    <CardMp3 item={episodeSelected!}/>
                </div>
            </div>
        </div>
    )
}