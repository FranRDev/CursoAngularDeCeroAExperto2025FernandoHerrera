import { Component, signal } from '@angular/core';

import { v4 as UUIDv4 } from 'uuid';

import { MiniMapaComponent } from "../../mapas/mini-mapa/mini-mapa.component";

interface PropiedadCasa {
  id: string;
  nombre: string;
  descripcion: string;
  precio: number;
  lngLat: { lng: number; lat: number };
  etiquetas: string[];
}

@Component({
  imports: [MiniMapaComponent],
  templateUrl: './pagina-casas.component.html',
})
export default class PaginaCasasComponent {

  casas = signal<PropiedadCasa[]>([
    {
      id: UUIDv4(),
      nombre: 'Villa Serenidad',
      descripcion: 'Un refugio tranquilo con vistas panorámicas al mar y jardines exuberantes.',
      precio: 500_000,
      lngLat: { lng: -0.861526, lat: 41.65649 },
      etiquetas: ['Villa', 'Mar', 'Jardines'],
    },
    {
      id: UUIDv4(),
      nombre: 'Casa del Sol',
      descripcion: 'Una casa luminosa y acogedora con amplias terrazas y piscina privada.',
      precio: 750_000,
      lngLat: { lng: -0.862, lat: 41.657 },
      etiquetas: ['Casa', 'Sol', 'Terrazas'],
    },
    {
      id: UUIDv4(),
      nombre: 'Residencia Esmeralda',
      descripcion: 'Elegante propiedad con acabados de lujo y un diseño arquitectónico moderno.',
      precio: 1_200_000,
      lngLat: { lng: -0.863, lat: 41.658 },
      etiquetas: ['Casa', 'Esmeralda', 'Acabados'],
    },
    {
      id: UUIDv4(),
      nombre: 'Hacienda del Lago',
      descripcion: 'Encantadora hacienda con acceso directo al lago y un entorno natural impresionante.',
      precio: 950_000,
      lngLat: { lng: -0.864, lat: 41.659 },
      etiquetas: ['Casa', 'Lago', 'Hacienda'],
    },
  ]);

}