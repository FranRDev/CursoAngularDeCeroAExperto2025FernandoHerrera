import { AfterViewInit, Component, ElementRef, input, signal, viewChild } from '@angular/core';

import mapboxgl, { LngLatLike } from 'mapbox-gl';

import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapBoxToken;

@Component({
  selector: 'mini-mapa',
  imports: [],
  templateUrl: './mini-mapa.component.html',
  styles: `
    div {
      width: 100vw;
      height: 260px;
    }
  `
})
export class MiniMapaComponent implements AfterViewInit {

  elementoDiv = viewChild<ElementRef>('mapa')
  mapa = signal<mapboxgl.Map | null>(null);
  lngLat = input<LngLatLike>();

  ngAfterViewInit(): void {
    if (!this.elementoDiv()?.nativeElement) return;
    const elemento = this.elementoDiv()!.nativeElement;

    const mapa = new mapboxgl.Map({
      container: elemento,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat() ?? [-122.409850, 37.793085],
      zoom: 14
    });

    if (this.lngLat()) {
      const marcador = new mapboxgl.Marker({
        draggable: false,
        color: 'red'
      })
        .setLngLat(this.lngLat()!)
        .addTo(mapa);
    }
  }

}