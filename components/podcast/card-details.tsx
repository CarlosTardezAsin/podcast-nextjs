import Image from "next/image";
import { PodcastDetails } from "@/interfaces/podcast/podcast-details";

export const CardDetails: React.FC<{ podcast: PodcastDetails }> = ({ podcast }) => {
    const collectionImg = podcast.results[0].artworkUrl100;

    return (
        <div className="bg-white shadow-md rounded-lg overflow-hidden min-w-[100px] max-w-[100px] h-[250px]">
            <Image src={collectionImg} width={100} height={100} alt={collectionImg}  className="w-[100px] h-[100px] object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{podcast.results[0].collectionName}</h2>
                <h2 className="text-xl font-semibold mb-2">by {podcast.results[0].artistName}</h2>
            </div>
        </div>
    );
};