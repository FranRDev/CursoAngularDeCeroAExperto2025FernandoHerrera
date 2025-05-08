import { Pipe, type PipeTransform } from '@angular/core';

import { type Heroe } from '../interfaces/heroes.interfaces';

@Pipe({ name: 'filtrado' })
export class FiltradoPipe implements PipeTransform {

  transform(valor: Heroe[], busqueda: string): Heroe[] {
    if (!busqueda) { return valor; }
    busqueda = busqueda.toLowerCase();
    return valor.filter(heroe => {
      return heroe.nombre.toLowerCase().includes(busqueda);
    });
  }

}