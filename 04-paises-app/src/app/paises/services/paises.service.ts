import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { map } from 'rxjs';

import type { ElementoRestCountries } from '../interfaces/rest-countries.interfaces';
import { PaisesMapper } from '../mapping/paises.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({ providedIn: 'root' })
export class PaisesService {

  private clienteHttp = inject(HttpClient);

  buscarPorCapital(texto: string) {
    texto = texto.toLocaleLowerCase();

    return this.clienteHttp
      .get<ElementoRestCountries[]>(`${API_URL}/capital/${texto}`)
      .pipe(map((elementos) => PaisesMapper.mapearElementosRestCountriesAPaises(elementos)));
  }

}