import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';

import { environment } from '@envs/environment';

import type { Gif } from '../interfaces/gif.interface';
import type { RespuestaGiphy } from '../interfaces/giphy.interfaces';
import { GifMapper } from '../mapping/gif.mapper';

@Injectable({ providedIn: 'root' })
export class GifsService {

  private clienteHttp = inject(HttpClient);
  tendencias = signal<Gif[]>([]);
  cargandoTendencias = signal<boolean>(true);

  constructor() {
    this.cargarTendencias();
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
    })
  }

}