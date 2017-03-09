import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs";
import {Plant} from "./plant";

@Injectable()
export class GardenService {
    private bedUrl: string = API_URL + "garden/bed";
    private altUrl: string = API_URL + "garden/plant";
    constructor(private http:Http) { }

    getPlantsByBed(location: string): Observable<Plant[]> {

        let tempUrl = this.bedUrl + "/" + location;

        console.log(tempUrl);
        return this.http.request(tempUrl).map(res => res.json());
    }

    getOnePlant(plantId : string): Observable<Plant[]>{
        let tempUrl = this.altUrl + "/" + plantId;

        return this.http.request(tempUrl).map(res => res.json());
    }
}