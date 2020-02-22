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
  imagenLocal: File;

  constructor(
    private postService: PostService,
    private router: Router
  ) {
    this.imagenLocal = null;
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
      imagenLocal: new FormControl('', [
        Validators.required,
        this.maxSizeImg.bind(this)
      ]),
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

  checkMaxSize() {
    // Hacemos una promesa para hacer que el setTimeout pueda devolver el objeto con error o sin el al formControl
    const prom = new Promise((resolve, reject) => {
      // Hacemos setTimeout para que de tiempo a que se dispare el evento 'change' del input[type=file] antes que el validador personalizado (maxSizeImg) y podamos coger el archivo de imagen y guardarlo en la variable 'this.imagenLocal'.
      setTimeout(() => {
        // this.imagenLocal lo convertimos a string para poder coger su tamaño aproximado. Si no, por un lado dice que es un 'file' y por el otro dice que es un 'string' pero no deja acceder a las propiedades .size o .length .
        if (('' + this.imagenLocal).length > 350000) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 200)
    })
    return prom;
  }

  async maxSizeImg(control) {
    const resultado = await this.checkMaxSize();
    if (resultado) {
      return { maxsize: true };
    }
    return null;
  }

  addLocalImage(files) {
    if (files[0]) {
      var reader = new FileReader();
      reader.onloadend = function () {
        this.imagenLocal = reader.result;
        console.log(this.imagenLocal);
      }.bind(this);

      reader.readAsDataURL(files[0]);
    }
  }

  enviarFormulario(post) {
    if (this.imagenLocal) {
      post.imagenLocal = this.imagenLocal;
    }
    post.fecha = new Date(Date.now()).toLocaleDateString();
    this.postService.agregarPost(post);

    this.imagenLocal = null;
    this.router.navigate(['/blog']);
  }

}
