import { Component, OnInit } from '@angular/core';
import { GardenService } from "./garden.service";
import { FilterBy } from "./filter.pipe";
import {Plant} from "./plant";

@Component({
    selector: 'plant-component',
    templateUrl: 'plant.component.html',
    providers: [ FilterBy ]
})

export class PlantComponent implements OnInit {
    public plants: Plant[];
    public plantID: string;

    constructor(private gardenService: GardenService) {
        // this.users = this.userListService.getUsers();
        //this.plantID = this.plantID;
     this.plantID = "16337";
    }

    ngOnInit(): void {
        this.gardenService.getOnePlant(this.plantID).subscribe(
            plant => this.plants = plant,
            err => {
                console.log(err);
            }
        );
    }
}