import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';

import mapboxgl from 'mapbox-gl';

import { environment } from '../../../environments/environment';

mapboxgl.accessToken = environment.mapBoxToken;

@Component({
  imports: [],
  templateUrl: './pagina-marcadores.component.html',
})
export default class PaginaMarcadoresComponent implements AfterViewInit {

  elementoDiv = viewChild<ElementRef>('mapa')
  mapa = signal<mapboxgl.Map | null>(null);

  ngAfterViewInit(): void {
    if (!this.elementoDiv()?.nativeElement) return;
    const elemento = this.elementoDiv()!.nativeElement;

    const mapa = new mapboxgl.Map({
      container: elemento,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-122.409850, 37.793085],
      zoom: 14
    });

    const marcador = new mapboxgl.Marker({
      draggable: false,
      color: '#000'
    })
      .setLngLat([-122.409850, 37.793085])
      .addTo(mapa);

    marcador.on('dragend', evento => {
      console.log(evento);
    });

    this.escuchadorMapa(mapa);
  }

  private escuchadorMapa(mapa: mapboxgl.Map) {

    // this.mapa.set(mapa);
  }

}