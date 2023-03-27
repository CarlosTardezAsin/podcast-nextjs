
import { CardList } from "@/components/podcast/card-list";
import { Entry } from "@/interfaces/podcast/podcast";
import { fetchPodcasts } from "@/lib/podcast";

async function getPodcasts(): Promise<Entry[]> {
    return fetchPodcasts();
}

export default async function PodcastsPage() {
    const podcasts = await getPodcasts();
    const podcastsCard = () => podcasts.map(podcast => <CardList key={podcast.id.attributes["im:id"]} podcast={podcast}/>)

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Podcasts</h1>
            <div className="mb-8">
                <label htmlFor="search" className="sr-only">
                Search podcasts
                </label>
                <input
                id="search"
                type="search"
                className="w-[300px] px-4 py-2 rounded-lg shadow-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="Search podcasts..."
                />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {podcastsCard()}
            </div>
        </div>
    );
}
  
  