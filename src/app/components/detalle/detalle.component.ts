import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UsersService } from '../../services/users.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  user: any;
  id: any;

  albums: any = [];

  photos: any = [];

  constructor(private _users: UsersService,
              private activatedRoute: ActivatedRoute
              ) {


              }


  ngOnInit() {
    // obtengo respuesta del usuario al que se le dio click
    this.activatedRoute.params
            .subscribe( respuesta => {
                this.id = respuesta;
            });

    // Obtengo la data del usuario obtenido por parametros
    this._users.getUser( this.id['id'] )
                            .subscribe( data => {
                              this.user = data;
                             // console.log(this.user);
                            });
    // Obtengo los albumes de este usuario en especifico
    this._users.getAlbums( this.id['id'] )
          .subscribe( data => {
            this.eraseAlbums();
              this.albums = data;
          });
  }

  eraseAlbums() {
    console.log('borrando');
    this._users.userAlbums = [];

  }
  erasePhotos() {
    console.log('borrando');
    this._users.albumPhotos = [];
  }

// Muestro las fotos del album que se clickeo
  verPhotos ( id: number ) {

    this._users.getPhotos ( id )
    .subscribe( data =>  {
      this.erasePhotos();
      this.photos = data;

      //console.log(data);
    });

  }

}
