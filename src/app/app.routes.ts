import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';


const appRoutes: any = [

    { path: '', component: HomeComponent },
    { path: '**', redirectTo: HomeComponent }
];

export const  APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: false });
