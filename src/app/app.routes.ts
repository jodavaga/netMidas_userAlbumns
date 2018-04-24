import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';


const appRoutes: any = [

    { path: '', component: HomeComponent },
    { path: 'detalle/:id', component: DetalleComponent },
    { path: '**', redirectTo: HomeComponent }
];

export const  APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: false });
