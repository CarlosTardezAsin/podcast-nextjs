import { Item } from "@/interfaces/podcast/item";
import { htmlToText } from 'html-to-text';

export const CardMp3: React.FC<{ item: Item }> = ({ item }) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{htmlToText(item.description[0])}</p>
            </div>
            <div className="card-body">
                <audio src={item.enclosure[0].$.url} controls />
            </div>
        </div>
    )
}