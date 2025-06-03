import { AfterViewInit, Component, ElementRef, input, OnChanges, SimpleChanges, viewChild } from '@angular/core';

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
export class CarruselProductoComponent implements AfterViewInit, OnChanges {

  imagenes = input.required<string[]>();
  divSwiper = viewChild.required<ElementRef>('divSwiper');
  swiper: Swiper | undefined = undefined;

  ngAfterViewInit(): void {
    this.inicializarSwiper();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['imagenes'].firstChange) return;
    if (!this.swiper) return;

    this.swiper.destroy(true, true);

    const paginacion: HTMLDivElement = this.divSwiper().nativeElement?.querySelector('.swiper-pagination');
    paginacion.innerHTML = '';

    setTimeout(() => {
      this.inicializarSwiper();
    }, 100);
  }

  private inicializarSwiper() {
    const elemento = this.divSwiper().nativeElement;
    if (!elemento) return;

    this.swiper = new Swiper(elemento, {
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