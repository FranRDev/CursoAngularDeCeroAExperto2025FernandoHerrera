import { Pipe, type PipeTransform } from '@angular/core';
import { Creador } from '../interfaces/heroes.interfaces';

@Pipe({ name: 'creador' })
export class CreadorPipe implements PipeTransform {

  transform(valor: Creador): string {
    return Creador[valor];
  }

}