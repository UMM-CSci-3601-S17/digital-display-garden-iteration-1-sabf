import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Plant } from './plant';
import { Observable } from "rxjs";

@Injectable()
export class BedListService {
    private plantUrl: string = API_URL;
    constructor(private http:Http) { }

    // getBeds(): Observable<Plant[]> {
    //     return this.http.request(this.bedUrl).map(res => res.json());
    // }

    getPlantById(choice : Plant): Observable<Plant> {
        return this.http.request(this.plantUrl + "/" + choice.gardenLocation + "/" + choice.plantID).map(res => res.json());
    }
}
