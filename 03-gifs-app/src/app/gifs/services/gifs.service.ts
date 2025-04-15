import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';

import { GifMapper } from '../mapping/gif.mapper';
import { environment } from '@envs/environment';

import type { Gif } from '../interfaces/gif.interface';
import type { RespuestaGiphy } from '../interfaces/giphy.interfaces';

const KEY_LOCAL_STORAGE = 'historial-gifs';

@Injectable({ providedIn: 'root' })
export class GifsService {

  private clienteHttp = inject(HttpClient);

  tendencias = signal<Gif[]>([]);
  cargandoTendencias = signal<boolean>(true);

  gruposTendencias = computed<Gif[][]>(() => {
    const grupos = [];

    for (let indice = 0; indice < this.tendencias().length; indice += 3) {
      grupos.push(this.tendencias().slice(indice, indice + 3));
    }

    console.log(grupos);

    return grupos;
  });

  historial = signal<Record<string, Gif[]>>(cargarDeLocalStorage());
  busquedas = computed(() => Object.keys(this.historial()));

  constructor() {
    this.cargarTendencias();
  }

  buscar(busqueda: string): Observable<Gif[]> {
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
        this.historial.update(historial => ({ ...historial, [busqueda.toLowerCase()]: elementos }));
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

  obtenerGifsHistorial(busqueda: string): Gif[] {
    return this.historial()[busqueda] ?? [];
  }

  guardarGifsEnLocalStorage = effect(() => localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(this.historial())));

}

const cargarDeLocalStorage = (): Record<string, Gif[]> => {
  const historial = localStorage.getItem(KEY_LOCAL_STORAGE);
  return historial ? JSON.parse(historial) : {};
}