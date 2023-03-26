
import { Entry, Podcast } from "@/interfaces/podcast/podcast";
import { fetchPodcasts } from "@/lib/podcast";
import Image from 'next/image';
import Link from "next/link";

async function getPodcasts(): Promise<Entry[]> {
    const response = await fetchPodcasts();

    return response.feed.entry;
}

export default async function PodcastsPage() {
    const podcasts = await getPodcasts();

    const podcastsCard = () => {
        return podcasts.map(podcast => (
            <Link key={podcast.id.attributes["im:id"]}  href={`/podcasts/${podcast.id.attributes["im:id"]}`}>
                <div key={podcast.id.attributes["im:id"]} className="bg-white shadow-md rounded-lg overflow-hidden w-[170px] h-[250px]">
                    <Image src={podcast["im:image"][2].label} width={170} height={170} alt={podcast["im:image"][2].label}  className="w-[170px] h-[170px] object-cover" />
                    <div className="p-4">
                        <h2 className="text-xl font-semibold mb-2">{podcast["im:name"].label}</h2>
                    </div>
                </div>
            </Link>
        ))
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Listado de Podcasts</h1>
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
  
  