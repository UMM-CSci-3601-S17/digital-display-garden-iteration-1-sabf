import { Component } from '@angular/core';
import { UploadService } from './admin.service';
@Component({
    templateUrl: 'admin.component.html',
    providers: [ UploadService ]
})

// Component class
export class AdminComponent {
    public text: string;
    public file: any;

    constructor() {
        this.text = "Hello world!";
    }
    printFile() : void
    {
       console.log(this.file);
    }
}