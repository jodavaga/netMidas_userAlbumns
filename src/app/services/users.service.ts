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
              this.users = respuesta;
              //console.log(this.users);
              return this.users;
            });
   }


   getUser( id: number) {

    const url = `https://jsonplaceholder.typicode.com/users/${ id }`;

    return this.http.get(url)
              .map( respuesta => {
                this.usuario = respuesta;
                //console.log(respuesta);
                return this.usuario;
              });
   }

   borrarUser( idx: number) {
      this.users.splice(idx, 1);

   }

   getAlbums( userID: number ) {

    const url = `https://jsonplaceholder.typicode.com/albums`;

    return this.http.get(url)
                  .map( respuesta => {
                    let userAlbums: any = [];

                    Object.keys(respuesta).forEach(function (key) {
                      let value = respuesta[key];
                       // do something with key or value
                       if ( value.userId == userID) {
                        userAlbums.push(value);
                       }
                    });
                    return userAlbums;

                  });
   }

   getPhotos( albumID: number ) {
     const url = `https://jsonplaceholder.typicode.com/photos/`;

     return this.http.get(url)
                 .map( respuesta => {
                  let albumPhotos: any = [];

                  Object.keys(respuesta).forEach(function (key) {
                    let value = respuesta[key];
                     if ( value.albumId == albumID) {
                      albumPhotos.push(value);
                     }
                  });
                  return albumPhotos;
                 });
   }

   getPosts( userID: number) {
    const url = `https://jsonplaceholder.typicode.com/posts/`;

    return this.http.get(url)
                .map( respuesta => {
                  let userPosts: any = [];

                  Object.keys(respuesta).forEach(function (key) {
                    let value = respuesta[key];
                     if ( value.userId == userID) {
                      userPosts.push(value);
                     }
                  });

                  return userPosts;
                });
   }

   getComments( postID: number) {
    const url = `https://jsonplaceholder.typicode.com/comments/`;

    return this.http.get(url)
                  .map( respuesta => {
                    let postComments: any = [];

                    Object.keys(respuesta).forEach(function (key) {
                      let value = respuesta[key];
                       if ( value.postId == postID) {
                        postComments.push(value);
                       }
                    });


                    // for (let comment of respuesta ) {
                    //   if (comment.postId == postID ) {
                    //     this.postComments.push(comment);
                    //   }
                    // }
                    return postComments;

                  });
   }
}
