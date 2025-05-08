import { Pipe, type PipeTransform } from '@angular/core';

import { Color, MapaColores } from '../interfaces/heroes.interfaces';

@Pipe({ name: 'colorhex' })
export class ColorHexPipe implements PipeTransform {

  transform(valor: Color): string {
    return MapaColores[valor];
  }

}