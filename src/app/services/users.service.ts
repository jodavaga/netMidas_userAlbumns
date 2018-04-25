import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  users: any = [];
  usuario: any;

  userAlbums: any = [];

  albumPhotos: any = [];

  userPosts: any = [];

  postComments: any = [];

  constructor(public http: HttpClient) {

    console.log( ' Usuarios listos para cargarse ' );
   }

   getUsuarios() {

    const url = 'https://jsonplaceholder.typicode.com/users/';

    return this.http.get(url)
            .map( (respuesta: any) => {
              this.users = respuesta;
              console.log(this.users);
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

   getPhotos( albumID: number ) {
     const url = `https://jsonplaceholder.typicode.com/photos/`;

     return this.http.get(url)
                 .map( respuesta => {
                  for ( let photo of respuesta ) {

                    if ( photo.albumId == albumID ) {
                      this.albumPhotos.push(photo);

                    }
                  }
                  return this.albumPhotos;
                 });
   }

   getPosts( userID: number) {
    const url = `https://jsonplaceholder.typicode.com/posts/`;

    return this.http.get(url)
                .map( respuesta => {

                  for (let post of respuesta ) {
                    if (post.userId == userID ) {
                      this.userPosts.push(post);
                    }
                  }

                  return this.userPosts;
                });
   }

   getComments( postID: number) {
    const url = `https://jsonplaceholder.typicode.com/comments/`;

    return this.http.get(url)
                  .map( respuesta => {
                    for (let comment of respuesta ) {
                      if (comment.postId == postID ) {
                        this.postComments.push(comment);
                      }
                    }
                    return this.postComments;

                  });
   }
}
