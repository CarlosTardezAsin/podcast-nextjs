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

    const podcastsCardFiltered = () => podcasts?.filter(podcast => podcast.title.label.toLowerCase().includes(search))
        .map(podcast => <CardList key={podcast.id.attributes["im:id"]} podcast={podcast}/>)

    return (
        <div className="container-fluid">
            <div className="col-12">
                <div className="d-flex flex-column align-items-center mb-3">
                    <Search setSearch={setSearch}/>    
                </div>      
            </div> 
            <div className="col-12">
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-5 g-4">
                        {podcastsCardFiltered()}
                    </div>
                </div>
            </div>
        </div>
    );
}
  
  