import { Injectable } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

import { Post } from './model/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  arrPosts: Post[];
  imageURL: string;

  constructor(private sanitizer: DomSanitizer) {
    this.imageURL = null;
    this.arrPosts = [
      {
        titulo: 'Mercado navideño Salzburgo',
        texto: `Los mercadillos de Navidad en Salzburgo son uno de los eventos más esperados de todos los que concurren en este rincón del Salzburgland de Austria. La ciudad entera se viste de gala con la ilusión que sólo las ciudades milenarias ponen para compartir con los visitantes sus tradiciones y sus costumbres. Porque una cosa que ignora la mayoría de los visitantes de los mercados de Adviento de Salzburgo es que la ciudad  organiza algunos de ellos desde el siglo XV, como es el caso del Mercadillo de Navidad de las Plazas de la Catedral y de la Residencia.

        No es la primera vez que hablamos en nuestro blog sobre los mercadillos de Navidad en Austria. Si recuerdas publicamos una infografía que tuvo una gran aceptación con los datos más relevantes de los mercadillos de este país alpino. En concreto nos centramos en los de Viena, Salzburgo, Innsbruck, Graz y Linz. Aunque muchos de los datos que allí aparecen siguen siendo vigentes, nos ha parecido oportuno publicar un nuevo post actualizando parte de aquellos datos y ampliando la información con otras actividades que se pueden realizar aprovechando un viaje a Salzburgo en la época de Adviento.`,
        autor: 'Victor Antunez',
        imagen: 'https://www.bolsasocialenher.com/ImgCli/innsbruck001.jpg',
        fecha: '13-2-2020',
        categoria: 'viajes'
      },
      {
        titulo: 'Moda vintage',
        texto: `Lo dijo Marc Jacobs: las prendas no son nada hasta que alguien ha vivido en ellas. Y si no, que se lo digan al bolso 2.55 de Chanel o al Kelly de Hermès, que han visto cómo sus ediciones de temporadas pasadas han llegado incluso a duplicar el precio de las actuales en la reventa. De hecho, el mercado de estas prendas vividas se estima actualmente en 22,5 millones de euros, y alcanzará los 28 millones en 2021, según el Boston Consulting Group.

        Pero por si este dato no resultase suficientemente revelador, ahí va otro: el vintage es hoy una apuesta tan sólida dentro del sector de la moda, que ya no solo rescata prendas del pasado; escribe las del futuro. «La fiebre ha llegado a tal punto que ahora muchos diseñadores replican los iconos de sus casas de moda, lo que a su vez incrementa el precio de los modelos originales», dice Fanny Moizant, presidenta de Vestiaire Collective, el gigante francés de reventa de moda (y moda vintage) de lujo.
        
        Y pese a que resulta difícil imaginar a Greta Thunberg con un Versace del 93, no es ningún secreto que este auge del sector está directamente relacionado con la omnipresente sostenibilidad. Un tsunami que ya en los 2000 coqueteó con la industria -el trabajo de la firma Imitation of Christ o el diseñador Miguel Adrover así lo reflejan- pero que, en 2019, ha conseguido al fin poner en cuestión los mecanismos inherentes a la moda. Y, más importante, implantar nuevas prioridades en el consumidor.`,
        autor: 'Laura Gómez',
        imagen: 'https://www.esme.es/wp-content/uploads/2019/04/pasos-coleccion-moda.jpg',
        fecha: '14-2-2020',
        categoria: 'moda'
      },
      {
        titulo: 'Madrid presenta su nuevo evento de deportes y cultura urbana',
        texto: `La ciudad de Madrid jugará un papel clave en el camino de muchos deportistas hacia los Juegos Olímpicos de Tokio 2020. Así será gracias al proyecto “A Tokio se va por Madrid”, un programa que engloba cada uno de los deportes que realizarán una competición en Madrid durante los primeres meses del año y que serán puntuables para los JJOO japoneses.

        El proyecto se ha presentado esta mañana en el Pabellón Marqués de Samaranch con la presencia de la vicealcaldesa de Madrid, Begoña Villacís y la Concejala del Área de Deporte del Ayuntamiento de Madrid, Sofía Miranda.`,
        autor: 'Rafael Nadal',
        imagen: 'https://as01.epimg.net/deportes_accion/imagenes/2020/02/19/urbano/1582133166_208558_1582134141_noticia_normal.jpg',
        fecha: '21-2-2020',
        categoria: 'deportes'
      },
      {
        titulo: 'La electrónica de Tesla va 6 años por delante de la competencia',
        texto: `La revista Nikkei Business Publications ha querido examinar de cerca la tecnología de Tesla desmontando una unidad del Model 3 para adentrarse en todos sus secretos. Su conclusión ha sido clara y tajante: “Tesla está seis años por delante en tecnología y electrónica respecto a rivales tan importantes como Toyota o Volkswagen”. El informe destaca sobre todo la unidad de control central integrada, más conocida como Hardware 3 o el cerebro neuronal del Autopilot 3. Se trata de una arquitectura en la que reúne las unidades de control más importantes y que otros fabricantes incluyen como elementos separados. Esta nueva forma de diseñar el sistema electrónico del coche podría acabar con muchos de los proveedores de la industria automotriz que hoy en día dependen de ella para permanecer en el mercado.

        En el sector del automóvil, la “ingeniería inversa” es una práctica habitual que utilizan las empresas para estudiar de primera mano los secretos que esconde la tecnología de la competencia. En otros casos, son medios de comunicación especializados los que utilizan esta misma práctica para dar a conocer el estado tecnológico de una empresa y la rentabilidad que se puede esperar de un coche durante los años que permanezca en producción. En el caso de Tesla no es la primera vez, ni será la última, que uno de sus coches eléctricos, y más concretamente el Model 3, se utiliza para este fin.
        
        El fabricante californiano ya ha sorprendido a muchos equipos de ingeniería con su forma y su tecnología de fabricación. En 2018, la firma Munro & Associates, que desmonta coches pieza a pieza, advirtió que el coche agrupa la mejor tecnología montada por ningún eléctrico en el mundo. Ese mismo año, la consultora americana UBS desmontó una unidad de la versión “Long Range” del Model 3 para advertir que la versión “Standard”, la más básica que Tesla pretende vender por 35.000 dólares, no sería rentable para la empresa.`,
        autor: 'Elon Musk',
        imagen: 'https://d500.epimg.net/cincodias/imagenes/2019/07/25/motor/1564067918_275569_1564067966_noticia_normal.jpg',
        fecha: '20-4-2020',
        categoria: 'electronica'
      },
      {
        titulo: 'El ajedrez irrumpe con fuerza en las plataformas de streaming de videojuegos',
        texto: `Es fácil pensar que en el terreno de las plataformas de streaming de videojuegos solo caben, pues eso, videojuegos. A muchos les puede saber raro pensar en que existe público para canales de juegos más tradicionales, como el ajedrez. Lo cierto es que no es así; lo que a simple podría parecer antagónico, está sucediendo.

        ¿Cómo podría funcionar un juego que no pertenezca al género de los videojuegos triunfar en plataformas como Twitch? Se están generando comunidades alrededor de este juego, y ya hay canales con cientos de miles de seguidores que retransmiten sus partidas de ajedrez.
        
        Este hecho abre la puerta a que paulatinamente los juegos de corte más clásico tengan su hueco en la corriente actual de videojuegos retransmitidos en plataormas de streaming, algo que los amantes de los juegos no digitales agradecerán.`,
        autor: 'Carl Magnusen',
        imagen: 'https://s1.eestatic.com/2018/12/31/invertia/Invertia_364976004_145385387_1706x960.jpg',
        fecha: '10-1-2020',
        categoria: 'videojuegos'
      },
    ];
  }

  agregarPost(post): void {
    const nuevoPost = { ...post, imagenLocal: this.imageURL };
    console.log(nuevoPost);
    this.arrPosts = [nuevoPost, ...this.arrPosts];

    localStorage.setItem('arrPostsBlog', JSON.stringify(this.arrPosts));
  }

  getAllPosts(): Post[] {
    this.arrPosts = JSON.parse(localStorage.getItem('arrPostsBlog')) || this.arrPosts;
    return this.arrPosts;
  }

  getPostsByCategoria(categoria): Post[] {
    return this.arrPosts.filter(post => categoria === 'all' ? post : post.categoria === categoria);
  }

  getDownloadURLImage(url) {
    this.imageURL = url;
  }

  sanitizeImgUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}
