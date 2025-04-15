import { Component, inject, signal } from '@angular/core';

import { GifsService } from '../../services/gifs.service';
import { ListaComponent } from "../../components/lista/lista.component";

import type { Gif } from '../../interfaces/gif.interface';

const urlsImagenes: string[] = [
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
  "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
];

@Component({
  imports: [ListaComponent],
  selector: 'pagina-tendencias',
  templateUrl: './pagina-tendencias.component.html'
})
export default class PaginaTendenciasComponent {

  gifs = signal<Gif[]>([]);
  servicioGifs = inject(GifsService);

  constructor() {
    urlsImagenes.forEach((url) => this.gifs.update((lista) => [...lista, { id: '', url, titulo: '' }]));
  }

}