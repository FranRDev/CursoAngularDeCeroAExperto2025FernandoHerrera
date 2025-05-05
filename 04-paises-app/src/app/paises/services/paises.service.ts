import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { catchError, delay, map, of, tap, throwError } from 'rxjs';

import type { ElementoRestCountries } from '../interfaces/rest-countries.interfaces';
import type { Pais } from '../interfaces/paises.interfaces';
import { PaisesMapper } from '../mapping/paises.mapper';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({ providedIn: 'root' })
export class PaisesService {

  private clienteHttp = inject(HttpClient);
  private cacheConsultaCapital = new Map<string, Pais[]>();

  buscarPorCapital(texto: string) {
    texto = texto.toLocaleLowerCase();

    if (this.cacheConsultaCapital.has(texto)) {
      return of(this.cacheConsultaCapital.get(texto) ?? []);
    }

    console.log(`Consultando API por: ${texto}`);

    return this.clienteHttp
      .get<ElementoRestCountries[]>(`${API_URL}/capital/${texto}`)
      .pipe(
        map((elementos) => PaisesMapper.mapearElementosRestCountriesAPaises(elementos)),
        tap(paises => this.cacheConsultaCapital.set(texto, paises)),
        catchError(error => {
          console.log('Error: ', error);
          return throwError(() => new Error(`No se encontraron países cuya capital contenga: ${texto}`));
        })
      );
  }

  buscarPorPais(texto: string) {
    texto = texto.toLocaleLowerCase();

    return this.clienteHttp
      .get<ElementoRestCountries[]>(`${API_URL}/name/${texto}`)
      .pipe(
        map((elementos) => PaisesMapper.mapearElementosRestCountriesAPaises(elementos)),
        delay(2000),
        catchError(error => {
          console.log('Error: ', error);
          return throwError(() => new Error(`No se encontraron países que contengan: ${texto}`));
        })
      );
  }

  buscarPaisPorCodigo(codigo: string) {
    return this.clienteHttp
      .get<ElementoRestCountries[]>(`${API_URL}/alpha/${codigo}`)
      .pipe(
        map((elementos) => PaisesMapper.mapearElementosRestCountriesAPaises(elementos)),
        map(paises => paises.at(0)),
        catchError(error => {
          console.log('Error: ', error);
          return throwError(() => new Error(`No se encontró país con código: ${codigo}`));
        })
      );
  }

}