import { Injectable } from '@angular/core';
import { Post } from './model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [
      {
        titulo: 'Mi primer titulo',
        texto: 'Este es el texto del primer post',
        autor: 'Victor',
        imagen: 'https://www.muycomputerpro.com/wp-content/uploads/2018/02/lenguajes-programacion.jpg',
        fecha: '16-02-2020',
        categoria: 'viajes'
      }
    ];
  }

  agregarPost(post): void {
    const postCopy = { ...post };
    this.arrPosts.push(postCopy);
  }

  getAllPosts(): Post[] {
    return this.arrPosts;
  }

  getPostsByCategoria(categoria): Post[] {
    return this.arrPosts.filter(post => post.categoria === categoria);
  }
}
