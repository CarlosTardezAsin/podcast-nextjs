import { PodcastDetails } from "@/interfaces/podcast/podcast-details";

export const List: React.FC<{ podcast: PodcastDetails }> = ({ podcast }) => {
    const episodes = () => podcast.results.map((episode, index) => {
        return (
            <li key={episode.trackId}  className="list-group-item">
                {index + 1}. {episode.trackName}
            </li>
        )
    })

    return (
        <div>
            <ul className="list-group">
                {episodes()}
            </ul>
        </div>
    )
}