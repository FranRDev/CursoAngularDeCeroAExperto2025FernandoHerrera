import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';

import { ProductsResponse } from '@productos/interfaces/productos.interface';

@Injectable({ providedIn: 'root' })
export class ServicioProductosService {

  private clienteHttp = inject(HttpClient);

  obtenerProductos(): Observable<ProductsResponse> {
    return this.clienteHttp
      .get<ProductsResponse>('http://localhost:3000/api/products')
      .pipe(
        tap(respuesta => console.log(respuesta))
      );
  }

}