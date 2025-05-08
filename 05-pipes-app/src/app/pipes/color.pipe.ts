import { Pipe, type PipeTransform } from '@angular/core';

import { Color } from '../interfaces/heroes.interfaces';

@Pipe({ name: 'color' })
export class ColorPipe implements PipeTransform {

  transform(valor: Color): string {
    return Color[valor];
  }

}