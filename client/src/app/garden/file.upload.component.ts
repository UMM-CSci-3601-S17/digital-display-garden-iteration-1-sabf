import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Http } from '@angular/http';

//http://stackoverflow.com/questions/36352405/file-upload-with-angular2-to-rest-api/39862337#39862337
@Component({
    selector: 'file-upload',
    template: '<input type="file" [multiple]="multiple" #fileInput>'
})
export class FileUploadComponent {
    @Input() multiple: boolean = false;
    @ViewChild('fileInput') inputEl: ElementRef;

    constructor(private http: Http) {}

    upload() {
        let inputEl: HTMLInputElement = this.inputEl.nativeElement;
        let fileCount: number = inputEl.files.length;
        let formData = new FormData();
        if (fileCount > 0) { // a file was selected
            for (let i = 0; i < fileCount; i++) {
                formData.append('file[]', inputEl.files.item(i));
            }
            console.log("GOT HERE INTO UPLOAD");
            this.http
                .post('http://your.upload.url', formData);
            // do whatever you do...
            // subscribe to observable to listen for response
        }
    }
}