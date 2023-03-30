export interface Item {
    title:                string[];
    description:          string[];
    pubDate:              string[];
    "itunes:episodeType": string[];
    "itunes:season":      string[];
    "itunes:episode":     string[];
    "itunes:author":      string[];
    "itunes:subtitle":    string[];
    "itunes:summary":     string[];
    "content:encoded":    string[];
    "itunes:duration":    string[];
    guid:                 GUIDElement[];
    enclosure:            Enclosure[];
}

export interface Enclosure {
    $: EnclosureClass;
}

export interface EnclosureClass {
    url:    string;
    length: string;
    type:   string;
}

export interface GUIDElement {
    _: string;
    $: GUID;
}

export interface GUID {
    isPermaLink: string;
}