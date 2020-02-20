export class Post {
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: string;
    categoria: string;

    constructor(titulo: string, texto: string, autor: string, imagen: string, fecha: string, categoria: string) {
        this.titulo = titulo;
        this.texto = texto;
        this.autor = autor;
        this.imagen = imagen;
        this.fecha = fecha;
        this.categoria = categoria;
    }
}