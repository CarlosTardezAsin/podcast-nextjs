import { Item } from "@/interfaces/podcast/item";

export const List: React.FC<{ items: Item[] }> = ({ items }) => {
    const episodes = () => items.map((item) => {
        return (
            <li key={item.guid[0]._}  className="list-group-item">
                {item.title}
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