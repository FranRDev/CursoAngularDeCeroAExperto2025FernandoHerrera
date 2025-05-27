import { AfterViewInit, Component, ElementRef, input, viewChild } from '@angular/core';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ImagenProductoPipe } from '@productos/pipes/imagen-producto.pipe';

@Component({
  selector: 'carrusel-producto',
  imports: [ImagenProductoPipe],
  templateUrl: './carrusel-producto.component.html',
  styles: `
    .swiper {
      width: 100%;
      height: 500px;
    }
  `
})
export class CarruselProductoComponent implements AfterViewInit {

  imagenes = input.required<string[]>();
  divSwiper = viewChild.required<ElementRef>('divSwiper');

  ngAfterViewInit(): void {
    const elemento = this.divSwiper().nativeElement;
    if (!elemento) return;

    const swiper = new Swiper(elemento, {
      // Optional parameters
      direction: 'horizontal',
      loop: true,

      modules: [Navigation, Pagination],

      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }

}