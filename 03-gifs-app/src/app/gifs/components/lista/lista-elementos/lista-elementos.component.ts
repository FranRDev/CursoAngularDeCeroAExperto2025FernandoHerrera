import { Component } from '@angular/core';

interface ElementoLista {
  imagen: string;
}

@Component({
  selector: 'gifs-lista-elementos',
  templateUrl: './lista-elementos.component.html'
})
export class ListaElementosComponent {

  elementosLista: ElementoLista[] = [
    {
      imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg'
    },
    {
      imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg'
    },
    {
      imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg'
    },
    {
      imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg'
    },
    {
      imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg'
    },
    {
      imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg'
    },
    {
      imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg'
    },
    {
      imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg'
    },
    {
      imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg'
    },
    {
      imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg'
    },
    {
      imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg'
    },
    {
      imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg'
    },
    {
      imagen: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-12.jpg'
    }
  ]

}