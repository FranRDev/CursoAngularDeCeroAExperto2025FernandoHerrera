import { Pipe, PipeTransform } from '@angular/core';

import { environment } from 'src/environments/environment';

const urlBase = environment.urlBase;

@Pipe({ name: 'imagenproducto' })
export class ImagenProductoPipe implements PipeTransform {

  transform(valor: null | string | string[]): any {
    const base = `${urlBase}/files/product`;
    if (Array.isArray(valor) && valor.length > 0 && valor[0]) return `${base}/${valor[0]}`;
    if (typeof valor === 'string') {
      if ((valor as string).startsWith('blob')) return valor;
      return `${base}/${valor}`;
    }
    return './assets/images/no-image.jpg';
  }

}