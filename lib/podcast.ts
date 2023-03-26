import { Podcast } from "@/interfaces/podcast/podcast";
import { PodcastDetails } from "@/interfaces/podcast/podcast-details";
import axios from 'axios';

const urls = {
    getPodcasts: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    getPodcast: 'https://itunes.apple.com/lookup?id='
}

export const fetchPodcasts = async (): Promise<Podcast> => {
    const { data } = await axios.get<Podcast>(urls.getPodcasts)

    return data;
}

export const fetchPodcast = async (id: string): Promise<PodcastDetails> => {
    const { data } = await axios.get<PodcastDetails>(`${urls.getPodcast}${id}`)
    
    return data;
}