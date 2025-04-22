import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({ providedIn: 'root' })
export class PaisesService {

  private clienteHttp = inject(HttpClient);

  buscarPorCapital(texto: string) {
    texto = texto.toLocaleLowerCase();
    return this.clienteHttp.get(`${API_URL}/capital/${texto}`);
  }

}