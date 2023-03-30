import { Item } from "./item";

export interface PodcastEpisodes {
    rss: {
        channel: PodcastDetailsEpisodes[]
    }
}

export interface PodcastDetailsEpisodes {
    title: string[];
    description: string[];
    "itunes:author": string[];
    item: Item[]
}
