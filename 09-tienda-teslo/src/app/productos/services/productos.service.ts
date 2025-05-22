import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { ProductsResponse } from '@productos/interfaces/productos.interface';

const urlBase = environment.urlBase;

interface Opciones {
  limite?: number;
  salto?: number;
  genero?: string;
}

@Injectable({ providedIn: 'root' })
export class ServicioProductosService {

  private clienteHttp = inject(HttpClient);

  obtenerProductos(opciones: Opciones): Observable<ProductsResponse> {
    const { limite = 9, salto = 0, genero = ''} = opciones;

    return this.clienteHttp
      .get<ProductsResponse>(`${urlBase}/products`, {
        params: {
          limit: limite,
          offset: salto,
          gender: genero
        }
      })
      .pipe(
        tap(respuesta => console.log(respuesta))
      );
  }

}