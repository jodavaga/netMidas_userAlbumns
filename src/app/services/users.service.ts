import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  users: any = [];
  usuario: any;

  constructor(public http: HttpClient) {

    console.log( ' Usuarios listos para cargarse ' );
   }

   getUsuarios() {

    const url = 'https://jsonplaceholder.typicode.com/users/';

    return this.http.get(url)
            .map( (respuesta: any) => {
              console.log(respuesta);
              this.users = respuesta;
              return this.users;
            });
   }


   getUser( id: number) {

    const url = `https://jsonplaceholder.typicode.com/users/${ id }`;

    return this.http.get(url)
              .map( respuesta => {
                this.usuario = respuesta;
                console.log(respuesta);
                return this.usuario;
              });
   }

}
