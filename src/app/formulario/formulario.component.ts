import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { PostService } from '../post.service';
import { FileUploaderAdapter } from '../fileUploaderAdapter';
import { FilePickerComponent, FilePreviewModel, UploaderCaptions } from 'ngx-awesome-uploader';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  fechaActual: any;
  // adapter = new FileUploaderAdapter(this.http);

  @ViewChild('uploader', { static: false }) uploader: FilePickerComponent;
  adapter = new FileUploaderAdapter(this.http);
  myFiles: FilePreviewModel[] = [];
  cropperOptions: Object = {
    dragMode: 'crop',
    aspectRatio: 16 / 9,
    autoCrop: true,
    movable: true,
    zoomable: true,
    scalable: true,
    autoCropArea: 0.8
  }
  captions: UploaderCaptions = {
    dropzone: {
      title: "Arrastra una imagen",
      or: "o",
      browse: "Selecciona un archivo"
    },
    cropper: {
      crop: "Recortar",
      cancel: "Cancelar"
    },
    previewCard: {
      remove: "Eliminar",
      uploadError: "Error al subir la imagen"
    }
  }

  constructor(
    private postService: PostService,
    private router: Router,
    private http: HttpClient
  ) {
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
    if (post.valid) {
      post.fecha = new Date(Date.now()).toLocaleDateString();
      this.postService.agregarPost(post);

      this.router.navigate(['/blog']);
    }
  }

}
