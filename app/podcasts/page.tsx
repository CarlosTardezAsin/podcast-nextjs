'use client';
import { CardList } from "@/components/podcast/card-list";
import { Search } from "@/components/search";
import { Entry } from "@/interfaces/podcast/podcast";
import { fetchPodcasts } from "@/lib/podcast";
import { useEffect, useState } from "react";

export default function PodcastsPage() {
    const [podcasts, setPodcasts] = useState<Entry[]>();
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        fetchPodcasts().then(data => setPodcasts(data))
    }, []);

    useEffect(() => {
    }, [search])

    const podcastsCardFiltered = () => podcasts?.filter(podcast => podcast.title.label.toLowerCase().includes(search)).map(podcast => <CardList key={podcast.id.attributes["im:id"]} podcast={podcast}/>)

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-8">Podcasts</h1>
            <div className="mb-8">
                <Search setSearch={setSearch}/>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {podcastsCardFiltered()}
            </div>
        </div>
    );
}
  
  