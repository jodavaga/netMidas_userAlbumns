import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  usuarios: any = [];

  constructor(private _users: UsersService) {

    this._users.getUsuarios()
            .subscribe( data => {
              this.usuarios = data;
              console.log(this.usuarios);
            });
  }


}
