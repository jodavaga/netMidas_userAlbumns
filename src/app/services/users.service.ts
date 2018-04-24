import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  users: any = [];
  usuario: any;

  userAlbums: any = [];

  constructor(public http: HttpClient) {

    console.log( ' Usuarios listos para cargarse ' );
   }

   getUsuarios() {

    const url = 'https://jsonplaceholder.typicode.com/users/';

    return this.http.get(url)
            .map( (respuesta: any) => {
              this.users = respuesta;
              return this.users;
            });
   }


   getUser( id: number) {

    const url = `https://jsonplaceholder.typicode.com/users/${ id }`;

    return this.http.get(url)
              .map( respuesta => {
                this.usuario = respuesta;
                return this.usuario;
              });
   }

   getAlbums( userID: number ) {

    const url = `https://jsonplaceholder.typicode.com/albums`;

    return this.http.get(url)
                  .map( respuesta => {

                    for ( let user of respuesta ) {

                      if ( user.userId == userID ) {
                        this.userAlbums.push(user);
                      }
                    }
                    return this.userAlbums;

                  });

   }

}
