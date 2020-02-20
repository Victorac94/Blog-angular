import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PostService } from '../post.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  fechaActual: any;

  constructor(private postService: PostService) {
    this.fechaActual = new Date(Date.now()).toLocaleDateString();

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
    console.log(post);
    this.postService.agregarPost(post);
  }

}
