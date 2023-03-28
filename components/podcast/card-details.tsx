import Image from "next/image";
import { PodcastDetails } from "@/interfaces/podcast/podcast-details";

export const CardDetails: React.FC<{ podcast: PodcastDetails }> = ({ podcast }) => {
    const collectionImg = podcast.results[0].artworkUrl600;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src={collectionImg} width={300} height={300} alt={collectionImg} />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{podcast.results[0].collectionName}</h2>
                <h2 className="text-xl font-semibold mb-2">by {podcast.results[0].artistName}</h2>
            </div>
        </div>
    );
};