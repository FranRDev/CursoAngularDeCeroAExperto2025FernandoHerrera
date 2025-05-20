import { AfterViewInit, Component, ElementRef, signal, viewChild } from '@angular/core';

import mapboxgl, { LngLatLike } from 'mapbox-gl';
import { v4 as UUIDv4 } from 'uuid';

import { environment } from '../../../environments/environment';
import { JsonPipe } from '@angular/common';

mapboxgl.accessToken = environment.mapBoxToken;

interface Marcador {
  id: string;
  marcadorMapBox: mapboxgl.Marker;
};

@Component({
  imports: [JsonPipe],
  templateUrl: './pagina-marcadores.component.html',
})
export default class PaginaMarcadoresComponent implements AfterViewInit {

  elementoDiv = viewChild<ElementRef>('mapa')
  mapa = signal<mapboxgl.Map | null>(null);
  marcadores = signal<Marcador[]>([]);

  ngAfterViewInit(): void {
    if (!this.elementoDiv()?.nativeElement) return;
    const elemento = this.elementoDiv()!.nativeElement;

    const mapa = new mapboxgl.Map({
      container: elemento,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-122.409850, 37.793085],
      zoom: 14
    });

    // const marcador = new mapboxgl.Marker({
    //   draggable: false,
    //   color: '#000'
    // })
    //   .setLngLat([-122.409850, 37.793085])
    //   .addTo(mapa);

    // marcador.on('dragend', evento => {
    //   console.log(evento);
    // });

    this.escuchadorMapa(mapa);
  }

  private escuchadorMapa(mapa: mapboxgl.Map) {
    mapa.on('click', evento => this.clicMapa(evento));
    this.mapa.set(mapa);
  }

  clicMapa(evento: mapboxgl.MapMouseEvent) {
    if (!this.mapa()) return;
    const mapa = this.mapa()!;

    const marcador = new mapboxgl.Marker({
      draggable: false,
      color: this.generarColorHexAleatorio()
    })
      .setLngLat(evento.lngLat)
      .addTo(mapa);

    this.marcadores.update(marcadores => [{ id: UUIDv4(), marcadorMapBox: marcador }, ...marcadores])

    console.log(this.marcadores());
  }

  private generarColorHexAleatorio(): string {
    return '#xxxxxx'.replace(/x/g, () => ((Math.random() * 16) | 0).toString(16));
  }

  volarAlMarcador(lngLat: LngLatLike) {
    if (!this.mapa()) return;

    this.mapa()?.flyTo({
      center: lngLat
    });
  }

}