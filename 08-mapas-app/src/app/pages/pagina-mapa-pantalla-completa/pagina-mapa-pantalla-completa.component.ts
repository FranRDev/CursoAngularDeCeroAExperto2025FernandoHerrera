import { AfterViewInit, Component, effect, ElementRef, signal, viewChild } from '@angular/core';
import { DecimalPipe, JsonPipe } from '@angular/common';

import mapboxgl from 'mapbox-gl'; // o "const mapboxgl = require('mapbox-gl');"

import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapBoxToken;

@Component({
  imports: [DecimalPipe, JsonPipe],
  templateUrl: './pagina-mapa-pantalla-completa.component.html',
  styles: `
    div {
      width: 100vw;
      height: calc(100vh - 64px);
    }

    #controles {
      background-color: white;
      padding: 10px;
      border-radius: 5px;
      position: fixed;
      bottom: 25px;
      right: 20px;
      z-index: 9999;
      box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
      border: 1px solid #e2e8f0;
      width: 250px;
    }
  `
})
export default class PaginaMapaPantallaCompletaComponent implements AfterViewInit {

  elementoDiv = viewChild<ElementRef>('mapa')
  mapa = signal<mapboxgl.Map | null>(null);
  zoom = signal(14);
  coordenadas = signal({
    lng: -74.5,
    lat: 40
  });

  efectoZoom = effect(() => {
    if (!this.mapa) return;
    // this.mapa()?.setZoom(this.zoom());
    this.mapa()?.zoomTo(this.zoom());
  });

  ngAfterViewInit(): void {
    if (!this.elementoDiv()?.nativeElement) return;
    const elemento = this.elementoDiv()!.nativeElement;
    const { lng, lat } = this.coordenadas();

    const mapa = new mapboxgl.Map({
      container: elemento, // contenedor
      style: 'mapbox://styles/mapbox/streets-v12', // URL estilos
      center: [lng, lat], // posición inicial [lng, lat]
      zoom: this.zoom(), // zoom inicial
    });

    this.escuchadorMapa(mapa);
  }

  private escuchadorMapa(mapa: mapboxgl.Map) {
    mapa.on('zoomend', evento => {
      const nuevoZoom = evento?.target.getZoom();
      this.zoom.set(nuevoZoom);
    })

    mapa.on('moveend', () => {
      const centro = mapa.getCenter();
      this.coordenadas.set(centro);
    });

    this.mapa.set(mapa);
  }

}