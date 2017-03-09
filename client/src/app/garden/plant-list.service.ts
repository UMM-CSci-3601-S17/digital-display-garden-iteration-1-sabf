import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Plant } from './plant';
import { Observable } from "rxjs";

@Injectable()
export class PlantListService {
    private plantUrl: string = API_URL + "garden";
    constructor(private http:Http) { }

    getPlants(): Observable<Plant[]> {
        return this.http.request(this.plantUrl).map(res => res.json());
    }

    getPlantById(id: string): Observable<Plant> {
        return this.http.request(this.plantUrl + "/" + id).map(res => res.json());
    }
}