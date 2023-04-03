import Image from "next/image";
import { PodcastDetails } from "@/interfaces/podcast/podcast-details";

export const CardDetails: React.FC<{ podcast: PodcastDetails }> = ({ podcast }) => {
    const collectionImg = podcast.results[0].artworkUrl600;

    return (
        <div className="card" style={{ width: 300, overflow: 'hidden' }}>
            <Image src={collectionImg} width={300} height={300} alt={collectionImg} />
            <div className="card-body" style={{ overflow: 'hidden' }}>
                <p className="card-text">{podcast.results[0].collectionName}</p>
                <p className="card-text">By {podcast.results[0].artistName}</p>
            </div>
        </div>
    );
};