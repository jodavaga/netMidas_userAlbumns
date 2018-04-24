import { Component, OnInit } from '@angular/core';
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

  constructor(private _users: UsersService,
              private activatedRoute: ActivatedRoute
              ) { }


  ngOnInit() {

    this.activatedRoute.params
            .subscribe( respuesta => {
                this.id = respuesta;
            });

    this._users.getUser( this.id['id'] )
                            .subscribe( data => {
                              this.user = data;
                              console.log(this.user);
                            });
  }

}
