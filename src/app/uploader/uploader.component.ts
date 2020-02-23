import { Component } from '@angular/core';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})

// TODO: Añadir Cropper.js

export class UploaderComponent {

  isHovering: boolean;

  files: File[];
  incorrectFileType: boolean

  constructor() {
    this.files = [];
    this.incorrectFileType = false;
  }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    console.log(files.item(0));
    if (files.item(0).type.includes('image/')) {
      // Reset files array to only contain last dropped image
      this.files = [files.item(0)];
      this.incorrectFileType = false;
    } else {
      // Mostrar error de archivo
      this.incorrectFileType = true;
    }
  }
}
