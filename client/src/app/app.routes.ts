// Imports
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KittensComponent } from './kittens/kittens.component';
import { UserListComponent } from "./users/user-list.component";
import { BedListComponent } from "./garden/bed-list.component";

// Route Configuration
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'kittens', component: KittensComponent },
    { path: 'users', component: UserListComponent },
    { path: 'garden', component:  BedListComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);