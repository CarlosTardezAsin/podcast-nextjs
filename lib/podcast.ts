import axios from 'axios';
import { convertableToString } from "xml2js";
import { parseXml, XML } from "@/utils/parse-xml";
import { Entry, Podcast } from "@/interfaces/podcast/podcast";
import { PodcastDetails } from "@/interfaces/podcast/podcast-details";
import { PodcastDetailsEpisodes, PodcastEpisodes } from "@/interfaces/podcast/podcast-details-episodes";

const urls = {
    getPodcasts: 'https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json',
    getPodcast: 'https://itunes.apple.com/lookup?id='
}

export const fetchPodcasts = async (): Promise<Entry[]> => {
    const { data } = await axios.get<Podcast>(urls.getPodcasts)

    return data.feed.entry;
}

export const fetchPodcast = async (id: string): Promise<PodcastDetails> => {
    const { data } = await axios.get<PodcastDetails>(`${urls.getPodcast}${id}`)
    
    return data;
}

export const fetchPodcastEpisodes = async (url: string): Promise<PodcastDetailsEpisodes[]> => {
    const { data } = await axios.get<convertableToString>(url);

    const { rss } = await parseXml<PodcastEpisodes>(data as XML);

    return rss.channel;
}
