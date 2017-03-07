import { Component, OnInit } from '@angular/core';
import { BedListService } from "./bed-list.service";
import { Bed } from "./bed";
import { FilterBy } from "./filter.pipe";

@Component({
    selector: 'bed-list-component',
    templateUrl: 'bed-list.component.html',
    providers: [ FilterBy ]
})

export class BedListComponent implements OnInit {
    public beds: Bed[];

    constructor(private BedListService: BedListService) {
        // this.users = this.userListService.getUsers();
    }

    ngOnInit(): void {
        this.BedListService.getBeds().subscribe(
            beds => this.beds = beds,
            err => {
                console.log(err);
            }
        );
    }
}