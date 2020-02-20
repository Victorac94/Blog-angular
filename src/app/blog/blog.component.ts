import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];
  mostrando: boolean;

  constructor(private postService: PostService) {
    this.posts = [];
    this.mostrando = false;
  }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
  }

  toggleMostrar() {
    this.mostrando = !this.mostrando;
  }

  filtroCategoria(event) {
    this.posts = this.postService.getPostsByCategoria(event.target.value);
  }
}
