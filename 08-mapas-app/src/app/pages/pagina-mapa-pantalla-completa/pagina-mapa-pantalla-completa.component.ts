import { AfterViewInit, Component, ElementRef, viewChild } from '@angular/core';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapBoxToken;

@Component({
  imports: [],
  templateUrl: './pagina-mapa-pantalla-completa.component.html',
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px);
    }
  `
})
export default class PaginaMapaPantallaCompletaComponent implements AfterViewInit {

  elementoDiv = viewChild<ElementRef>('mapa')

  ngAfterViewInit(): void {
    if (!this.elementoDiv()?.nativeElement) return;
    const elemento = this.elementoDiv()!.nativeElement;

    const map = new mapboxgl.Map({
      container: elemento, // contenedor
      style: 'mapbox://styles/mapbox/streets-v12', // URL estilos
      center: [-74.5, 40], // posición inicial [lng, lat]
      zoom: 9, // zoom inicial
    });
  }

}