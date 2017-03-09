import { Component, OnInit } from '@angular/core';
import { GardenService } from "./garden.service";
import { FilterBy } from "./filter.pipe";
import {Plant} from "./plant";

@Component({
    selector: 'bed-list-component',
    templateUrl: 'bed-list.component.html',
    providers: [ FilterBy ]
})

export class BedListComponent implements OnInit {
    public plants: Plant[];
    public plant: Plant;
    public location: string;
    public newId: string;

    constructor(private gardenService: GardenService) {
        // this.users = this.userListService.getUsers();
    }

    ngOnInit(): void {
        this.gardenService.getPlantsByBed(this.location).subscribe(
            plant => this.plants = plant,
            err => {
                console.log(err);
            }
        );
    }

    onChange(): void {
        this.gardenService.getPlantsByBed(this.location).subscribe(
            plant => this.plants = plant,
            err => {
                console.log(err);
            }
        );
    }

    changeTarget(): void {
        this.gardenService.setPlantId(this.newId);
    }
}