import { Component } from '@angular/core';

@Component({
  selector: 'uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
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
    // Reset files array to only contain last dropped image
    console.log(files.item(0));
    if (files.item(0).type.includes('image/')) {
      this.files = [files.item(0)];
      this.incorrectFileType = false;
    } else {
      // Mostrar error de archivo
      this.incorrectFileType = true;
    }
  }
}
