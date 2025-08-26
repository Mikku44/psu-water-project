export interface INews {
    id:          number;
    created_at:  Date;
    slug:        string;
    title:       string;
    image_url:   string[];
    content:     IContent[];
    description: string;
}

export interface IContent {
    type : string;
    text : string;
}
