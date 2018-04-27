import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  template: `
    <p>
      posts works!
    </p>
  `,
  styles: []
})
export class PostsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  verPosts() {
    this.router.navigate(['posts']);

  }

}
