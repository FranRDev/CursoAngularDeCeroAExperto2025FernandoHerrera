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
      width: 100%;
      height: 260px;
    }
  `
})
export class MiniMapaComponent implements AfterViewInit {

  elementoDiv = viewChild<ElementRef>('mapa')
  lngLat = input.required<LngLatLike>();
  zoom = input<number>(14);

  ngAfterViewInit(): void {
    if (!this.elementoDiv()?.nativeElement) return;

    const mapa = new mapboxgl.Map({
      container: this.elementoDiv()!.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat(),
      zoom: this.zoom(),
      interactive: false,
      pitch: 30
    });

    new mapboxgl.Marker().setLngLat(this.lngLat()!).addTo(mapa);
  }

}