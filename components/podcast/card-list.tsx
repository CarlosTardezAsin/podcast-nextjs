import { Entry } from "@/interfaces/podcast/podcast";
import Link from "next/link";
import Image from "next/image";

export const CardList: React.FC<{ podcast: Entry }> = ({ podcast }) => {
    const imageLabel = podcast["im:image"][2].label;
  
    return (
        <Link href={`/podcasts/${podcast.id.attributes["im:id"]}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="card" style={{ width: 170, height: 260 }}>
                <Image src={imageLabel} alt={imageLabel} width={170} height={170} />
                <div className="card-body" style={{ overflow: 'hidden' }}>
                    <p className="card-text">{podcast.title.label}</p>
                </div>
            </div>
        </Link>
    );
};