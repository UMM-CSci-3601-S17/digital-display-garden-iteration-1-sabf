export interface Plant {
    _id: string;
    plantID: string;
    commonName: string;
    cultivar: string;
    source: string;// todo: MIGHT HAVE TO CHANGE
    gardenLocation: string;
    plantType: string;
    likes: number;
    dislikes: number;
    year: number;
    pageURL: string;
    plantImageURLs: string[];
    recognitions: string[];
}
