import {Component, OnInit, Input} from '@angular/core';
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
    @Input() newId: string = "'sup";
    constructor(private gardenService: GardenService) {
    }

    ngOnInit(): void {
        this.gardenService.getOnePlant(this.gardenService.getid()).subscribe(
            plant => this.plants = plant,
            err => {
                console.log(err);
            }
        );
    }

    getnewId(): string {
        return this.gardenService.getid();
    }
}