import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { combineLatest, Observable, of } from 'rxjs';

import { Pais } from '../interfaces/paises.interfaces';

@Injectable({ providedIn: 'root' })
export class PaisesService {

  private urlBase = 'https://restcountries.com/v3.1';
  private clienteHttp = inject(HttpClient);
  private _regiones = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[] {
    return [...this._regiones];
  }

  obtenerPaisesPorRegion(region: string): Observable<Pais[]> {
    if (!region) return of([]);
    const url = `${this.urlBase}/region/${region}?fields=cca3,name,borders`;
    return this.clienteHttp.get<Pais[]>(url);
  }

  obtenerPaisPorCodigoAlfa(codigo: string): Observable<Pais> {
    const url = `${this.urlBase}/alpha/${codigo}?fields=cca3,name,borders`;
    return this.clienteHttp.get<Pais>(url);
  }

  obtenerNombresPaisesPorCodigos(codigos: string[]): Observable<Pais[]> {
    if (!codigos || codigos.length === 0) return of([]);
    const solicitudesPaises: Observable<Pais>[] = [];
    codigos.forEach(codigo => solicitudesPaises.push(this.obtenerPaisPorCodigoAlfa(codigo)));
    return combineLatest(solicitudesPaises);
  }

}