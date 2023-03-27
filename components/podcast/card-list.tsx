import { Entry } from "@/interfaces/podcast/podcast";
import Link from "next/link";
import Image from "next/image";

export const CardList: React.FC<{ podcast: Entry }> = ({ podcast }) => {
    const imageLabel = podcast["im:image"][2].label;
  
    return (
        <Link href={`/podcasts/${podcast.id.attributes["im:id"]}`}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-[170px] max-h-[170px]">
                <Image src={imageLabel} width={170} height={170} alt={imageLabel}  className="w-[170px] h-[170px] object-cover" />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2 w-[90px]">{podcast["im:name"].label}</h2>
                </div>
            </div>
        </Link>
    );
};