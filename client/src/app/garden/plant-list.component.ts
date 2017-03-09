import { Component, OnInit } from '@angular/core';
import { GardenService } from "./garden.service";
import { FilterBy } from "./filter.pipe";
import {Plant} from "./plant";

@Component({
    selector: 'plant-list-component',
    templateUrl: 'plant-list.component.html',
    providers: [ FilterBy ]
})

export class PlantListComponent implements OnInit {
    public plant: Plant;
    constructor(private gardenService: GardenService) {
        // this.users = this.userListService.getUsers();
    }

    ngOnInit(): void {
        this.gardenService.getOnePlant().subscribe(
            plant => this.plant = plant,
            err => {
                console.log(err);
            }
        );
    }
}