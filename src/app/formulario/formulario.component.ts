import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { PostService } from '../post.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  fechaActual: any;

  constructor(
    private postService: PostService,
    private router: Router
  ) {
    this.fechaActual = new Date(Date.now()).toLocaleDateString().replace(/\//g, '-');

    this.form = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500)
      ]),
      autor: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
      ]),
      imagenLocal: new FormControl(''),
      imagen: new FormControl('', [
        Validators.pattern(/(https)?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/)
      ]),
      fecha: new FormControl(''),
      categoria: new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit(): void {
  }

  enviarFormulario(post) {
    post.fecha = new Date(Date.now()).toLocaleDateString().replace(/\//g, '-');
    this.postService.agregarPost(post);

    this.router.navigate(['/blog']);
  }

}
