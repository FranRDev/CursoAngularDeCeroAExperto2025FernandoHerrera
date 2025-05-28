import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { Observable, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Product, ProductsResponse } from '@productos/interfaces/productos.interface';

const urlBase = environment.urlBase;

interface Opciones {
  limite?: number;
  salto?: number;
  genero?: string;
}

@Injectable({ providedIn: 'root' })
export class ServicioProductosService {

  private clienteHttp = inject(HttpClient);

  private cacheProductos = new Map<string, ProductsResponse>();

  obtenerProductos(opciones: Opciones): Observable<ProductsResponse> {
    const { limite = 9, salto = 0, genero = '' } = opciones;

    const llave = `${limite}-${salto}-${genero}`;
    if (this.cacheProductos.has(llave)) { return of(this.cacheProductos.get(llave)!); }

    return this.clienteHttp
      .get<ProductsResponse>(`${urlBase}/products`, { params: { limit: limite, offset: salto, gender: genero } })
      .pipe(tap(respuesta => this.cacheProductos.set(llave, respuesta)));
  }

  obtenerProducto(idOSlug: string): Observable<Product> {
    return this.clienteHttp.get<Product>(`${urlBase}/products/${idOSlug}`);
  }

}