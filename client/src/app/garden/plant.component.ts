import {Component, OnInit, Input} from '@angular/core';
import { GardenService } from "./garden.service";
import { FilterBy } from "./filter.pipe";
import {Plant} from "./plant";
import { Comment } from "./comment"

@Component({
    selector: 'plant-component',
    templateUrl: 'plant.component.html',
    providers: [ FilterBy ]
})

export class PlantComponent implements OnInit {
    public plants: Plant[];
    private thingy: Comment[];
    public comments: Comment[];
    public comment: string;
    constructor(private gardenService: GardenService) {
    }

    ngOnInit(): void {
        this.gardenService.getOnePlant(this.gardenService.getid()).subscribe(
            plant => this.plants = plant,
            err => {
                console.log(err);
            }
        );

        this.gardenService.getComments(this.gardenService.getid()).subscribe(
            comm => this.comments = comm,
            err => {
                console.log(err);
            }
        );
    }

    onChangeComms(comment: string): void {
        this.gardenService.insertComments(this.gardenService.getid(), comment).subscribe(
            comm => this.thingy = comm,
            err => {
                console.log(err);
            }
        );

        this.gardenService.getComments(this.gardenService.getid()).subscribe(
            comm => this.comments = comm,
            err => {
                console.log(err);
            }
        );
    }

    getnewId(): string {
        return this.gardenService.getid();
    }
}