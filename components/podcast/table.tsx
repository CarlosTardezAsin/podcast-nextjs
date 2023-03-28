import { PodcastDetails } from "@/interfaces/podcast/podcast-details";

export const Table: React.FC<{ podcast: PodcastDetails }> = ({ podcast }) => {
    const episodes = () => podcast.results.map((episode, index) => {
        return (
        <li key={episode.trackId}  className="rounded-md p-4">
            <h3 className="font-semibold">{index + 1}. {episode.trackName}</h3>
        </li>
        )
    })

    return (
        <div>
            <h3>Episodes</h3>
            <ul className="space-y-4">
                {episodes()}
            </ul>
        </div>
    )
}