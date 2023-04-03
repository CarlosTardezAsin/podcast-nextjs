import { Item } from "@/interfaces/podcast/item";

export const CardMp3: React.FC<{ item: Item }> = ({ item }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
            </div>
            <div className="card-body">
                <audio src={item.enclosure[0].$.url} controls />
            </div>
        </div>
    )
}