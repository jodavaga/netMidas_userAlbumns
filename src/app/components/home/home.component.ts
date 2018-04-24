import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  usuarios: any = [];

  constructor(private _users: UsersService,
              private router: Router
             ) {

  this._users.getUsuarios()
            .subscribe( data => {
              this.usuarios = data;
              console.log(this.usuarios);
            });
  }

  verUsuario( idx: number ) {
    this.router.navigate(['detalle', idx]);
  }


}
