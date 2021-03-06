// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from "./users/user-list.component";
import { BedListComponent } from "./garden/bed-list.component";
import {AdminComponent} from "./garden/admin.component";
import {PlantComponent} from "./garden/plant.component";

// Route Configuration
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UserListComponent },
    { path: 'garden', component:  BedListComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'plant', component: PlantComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);