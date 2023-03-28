import { Entry } from "@/interfaces/podcast/podcast";
import Link from "next/link";
import Image from "next/image";

export const CardList: React.FC<{ podcast: Entry }> = ({ podcast }) => {
    const imageLabel = podcast["im:image"][2].label;
  
    return (
            <Link href={`/podcasts/${podcast.id.attributes["im:id"]}`}>
                <div className="bg-gray-800 rounded-md overflow-hidden border-2 border-gray-700">
                    <Image src={imageLabel} alt={imageLabel} width={170} height={170} />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold">{podcast.title.label}</h3>
                    </div>
                </div>
            </Link>
    );
};