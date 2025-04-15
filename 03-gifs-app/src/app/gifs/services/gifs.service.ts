import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { environment } from '@envs/environment';

import type { Gif } from '../interfaces/gif.interface';
import type { RespuestaGiphy } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapping/gif.mapper';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GifsService {

  private clienteHttp = inject(HttpClient);
  tendencias = signal<Gif[]>([]);
  cargandoTendencias = signal<boolean>(true);

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
      map(({data}) => data),
      map((elementos) => GifMapper.mapearElementosGiphyAGifs(elementos))
      // TODO: Historial
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