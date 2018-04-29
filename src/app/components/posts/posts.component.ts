import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';

import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-posts',
  templateUrl: 'posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {

  posts: any = [];
  comments: any = [];

  userId: any;
  postId: number;

  constructor(private router: Router,
              private _users: UsersService,
              private activatedRoute: ActivatedRoute,
              private http: HttpClient
  ) {

    this.activatedRoute.parent.params
              .subscribe(params => {

                  this.userId = params['id'];
              });

   }

  ngOnInit() {

    this.verPosts(this.userId);
  }

  regresar( id: any) {
    this.router.navigate(['detalle', id]);
  }

  erasePosts() {
    console.log('limpiando posts');
    this.posts = [];
  }
  eraseComments() {
    console.log('limpiando comments');
    this.comments = [];
  }

  verPosts( id: number ) {
    this._users.getPosts( id )
            .subscribe( data => {
              this.erasePosts();
              this.posts = data;

              //console.log(this.posts);
            });
  }

  deletePost( id: any ) {
    this.posts.splice(id, 1);
  }

  verComments( id: number ) {
    this.postId = id;
    this._users.getComments( id )
            .subscribe( data => {
              this.eraseComments();
              this.comments = data;


            });
  }

}
