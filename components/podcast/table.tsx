import { PodcastDetails } from "@/interfaces/podcast/podcast-details";

export const Table: React.FC<{ podcast: PodcastDetails }> = ({ podcast }) => {
    return (
        <table className="w-full">
            <thead>
                <tr>
                    <th className="text-left text-xl font-semibold pb-4">Title</th>
                </tr>
            </thead>
            <tbody>
                {podcast.results.map((episode) => (
                    <tr key={episode.trackId} className="border-b border-gray-300 py-4">
                    <td className="py-4">
                        <h2 className="text-xl font-semibold mb-2">{episode.trackName}</h2>
                    </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}