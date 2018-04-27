import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';


const appRoutes: any = [

    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    {
        path: 'detalle/:id',
        component: DetalleComponent,
        children: [
            { path: 'posts', component: PostsComponent },
        ]

    },
    { path: '**', redirectTo: HomeComponent }
];

export const  APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: false });
