import { Pipe, type PipeTransform } from '@angular/core';

import type { Heroe } from '../interfaces/heroes.interfaces';

@Pipe({ name: 'ordenamiento' })
export class OrdenamientoPipe implements PipeTransform {

  transform(valor: Heroe[], ordenarPor: keyof Heroe | null): Heroe[] {
    if (!ordenarPor) { return valor; }

    switch (ordenarPor) {
      case 'nombre':
        return valor.sort((a, b) => a.nombre.localeCompare(b.nombre));

      case 'vuela':
        return valor.sort((a, b) => (a.vuela ? 1 : -1) - (b.vuela ? 1 : -1));

      case 'color':
        return valor.sort((a, b) => a.color - b.color);

      case 'creador':
        return valor.sort((a, b) => a.creador - b.creador);

      default:
        return valor;
    }
  }

}