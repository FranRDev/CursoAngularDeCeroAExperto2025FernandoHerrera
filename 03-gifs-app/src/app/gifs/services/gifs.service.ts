import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { environment } from '@envs/environment';

import type { RespuestaGiphy } from '../interfaces/giphy.interfaces';

@Injectable({ providedIn: 'root' })
export class GifsService {

  private clienteHttp = inject(HttpClient);

  constructor() {
    this.cargarTendencias();
  }

  cargarTendencias() {
    this.clienteHttp.get<RespuestaGiphy>(`${environment.giphyApiUrl}/gifs/trending`, {
      params: {
        api_key: environment.giphyApiKey,
        limit: 20
      }
    })
  }

}