import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

import { GifMapper } from '../mapping/gif.mapper';
import { environment } from '@envs/environment';

import type { Gif } from '../interfaces/gif.interface';
import type { RespuestaGiphy } from '../interfaces/giphy.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {

  private clienteHttp = inject(HttpClient);
  tendencias = signal<Gif[]>([]);
  cargandoTendencias = signal<boolean>(true);
  historial = signal<Record<string, Gif[]>>({});
  busquedas = computed(() => Object.keys(this.historial()));

  constructor() {
    this.cargarTendencias();
  }

  buscar(busqueda: string) {
    return this.clienteHttp.get<RespuestaGiphy>(`${environment.giphyApiUrl}/gifs/search`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20,
        q: busqueda
      }
    }).pipe(
      map(({ data }) => data),
      map((elementos) => GifMapper.mapearElementosGiphyAGifs(elementos)),
      tap(elementos => {
        this.historial.update(historial => ({
          ...historial,
          [busqueda.toLowerCase()]: elementos
        }))
      })
    );

    // .subscribe((respuesta) => {
    //   const gifs = GifMapper.mapearElementosGiphyAGifs(respuesta.data);
    //   console.log(respuesta);
    // });
  }

  cargarTendencias() {
    this.clienteHttp.get<RespuestaGiphy>(`${environment.giphyApiUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20
      }
    }).subscribe((respuesta) => {
      const gifs = GifMapper.mapearElementosGiphyAGifs(respuesta.data);
      this.tendencias.set(gifs);
      this.cargandoTendencias.set(false);
      console.log(gifs);
    });
  }

}