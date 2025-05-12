import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pais } from '../interfaces/paises.interfaces';

import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaisesService {

  private urlBase = 'https://restcountries.com/v3.1';
  private clienteHttp = inject(HttpClient);
  private _regiones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania', 'Antarctica'];

  get regiones(): string[] {
    return [...this._regiones];
  }

  obtenerPaisesPorRegion(region: string): Observable<Pais[]> {
    if (!region) return of([]);
    console.log({region});
    const url = `${this.urlBase}/region/${region}?fields=cca3,name,borders`;
    return this.clienteHttp.get<Pais[]>(url);
  }

  obtenerPaisPorCodigoAlfa(codigo: string): Observable<Pais> {
    const url = `${this.urlBase}/alpha/${codigo}?fields=cca3,name,borders`;
    return this.clienteHttp.get<Pais>(url);
  }

  // obtenerFronterasPorCodigo(fronteras: string[]) {
  // TODO
  // }

}