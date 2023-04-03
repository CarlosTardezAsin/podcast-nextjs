import { Item } from "@/interfaces/podcast/item";
import Link from "next/link";

export const List: React.FC<{ podcastId: number, items: Item[] }> = ({ podcastId, items }) => {
    const episodes = () => items.map((item) => {
        return (
            <li key={item.guid[0]._}  className="list-group-item">
                <Link href={`/podcasts/${podcastId}/episodes/${item.guid[0]._}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                {item.title}
                </Link>
            </li>
        )
    })

    return (
        <div>
            <ul className="list-group">
                {episodes()}
            </ul>
        </div>
    )
}