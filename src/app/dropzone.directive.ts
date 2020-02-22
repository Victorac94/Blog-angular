import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[dropzone]'
})
export class DropzoneDirective {

  @Output() dropped = new EventEmitter<FileList>();
  @Output() hovered = new EventEmitter<boolean>();

  // @HostListener('click', [])

  @HostListener('drop', ['$event'])
  onDrop($event) {
    $event.preventDefault();
    console.log($event);
    this.dropped.emit($event);
    this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event) {
    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event) {
    $event.preventDefault();
    this.hovered.emit(false);
  }
}
