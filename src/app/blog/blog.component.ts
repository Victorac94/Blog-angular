import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../model/Post';
import { PostService } from '../post.service';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(private postService: PostService) {
    this.posts = [];
  }

  ngOnInit(): void {
    this.posts = this.postService.getAllPosts();
  }

  toggleMostrar(event) {
    const parent = event.target.parentElement;
    const toggleButtons = parent.querySelectorAll('.toggle-show');

    if (!parent.classList.contains('mostrar-mas')) {
      parent.classList.add('mostrar-mas');
      toggleButtons[0].style.display = 'none';
      toggleButtons[1].style.display = 'block';
    } else {
      parent.classList.remove('mostrar-mas');
      toggleButtons[0].style.display = 'block';
      toggleButtons[1].style.display = 'none';
    }
  }

  filtroCategoria(event) {
    let category;

    if (!event.target.value) {
      category = event.target.innerText;
      document.querySelector('select').value = category;
    } else {
      category = event.target.value;
    }
    this.posts = this.postService.getPostsByCategoria(category);
  }
}
