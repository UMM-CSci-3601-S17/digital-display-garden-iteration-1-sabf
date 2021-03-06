import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }         from './app/app.component';
import { NavbarComponent } from './app/navbar/navbar.component';
import { HomeComponent} from './app/home/home.component';
import { UserListComponent } from './app/users/user-list.component';
import { UserListService } from './app/users/user-list.service';
import { GardenService } from './app/garden/garden.service';
import { AdminComponent } from './app/garden/admin.component';
import { FileUploadComponent } from './app/garden/file.upload.component'
import { routing } from './app/app.routes';
import { FormsModule } from '@angular/forms';

import { PipeModule } from './pipe.module';
import { BedListComponent } from "./app/garden/bed-list.component";
import {PlantComponent} from "./app/garden/plant.component";

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule,
        routing,
        FormsModule,
        PipeModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        UserListComponent,
        BedListComponent,
        UserListComponent,
        AdminComponent,
        FileUploadComponent,
        PlantComponent
    ],
    providers: [ UserListService, GardenService ],
    bootstrap: [ AppComponent ]
})

export class AppModule {}
