export interface Plant {
    _id: string;
    plantID: string;
    commonName: string;
    cultivar: string;
    source: string;// todo: MIGHT HAVE TO CHANGE
    gardenLocation: string;
    plantType: string;
    plus: string;
    minus: string;
    year: number;
    pageURL: string;
    plantImageURLs: string[];
    recognitions: string[];
}
//NOTE: we edited the mongo w/ the following command:
// db.garden.update( { "plantID" : "16001"}, { $set: {"plus" : 9}})
