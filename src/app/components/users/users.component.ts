import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
    `
  .fa{
    margin-left: 10px;
  }

  .btn-danger, .btn-info{
    padding: 5px 10px;
  }
  `
  ]
})
export class UsersComponent implements OnInit {

  usuarios: any = [];

  constructor(private _users: UsersService, private router: Router) {

    this._users.getUsuarios().subscribe(data => {
      this.usuarios = data;
      //console.log(this.usuarios);
    });

  }

  ngOnInit() {

  }

  verUsuario(idx: number) {
    this.router.navigate(['detalle', idx]);
  }

  borrarUsuario( idx: number ) {
    this._users.borrarUser( idx );
  }
}
