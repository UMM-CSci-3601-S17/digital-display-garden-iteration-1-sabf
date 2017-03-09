import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs";
import {Plant} from "./plant";

@Injectable()
export class GardenService {
    private bedUrl: string = API_URL + "garden/bed";
    private altUrl: string = API_URL + "garden/plant";
    private static newId: string;
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

    setId(newId: string): void {
        GardenService.newId = newId;
    }

    getid(): string {
        return GardenService.newId;
    }
}