import { Component } from '@angular/core';
import { FileUploadComponent } from './file.upload.component'
import { Http } from '@angular/http';
@Component({
    templateUrl: 'admin.component.html',
})

// Component class
export class AdminComponent {
    public text: string;
    public file: any;
    public fu : FileUploadComponent;

    constructor(private http : Http) {
        this.text = "Hello world!";
        let fu = new FileUploadComponent(http);
    }

    printFile() : void
    {
       console.log(this.file);
    }
}

