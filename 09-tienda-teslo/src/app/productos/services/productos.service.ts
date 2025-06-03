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
export class ProductosService {

  private clienteHttp = inject(HttpClient);

  private cacheProductos = new Map<string, ProductsResponse>();
  private cacheProducto = new Map<string, Product>();

  obtenerProductos(opciones: Opciones): Observable<ProductsResponse> {
    const { limite = 9, salto = 0, genero = '' } = opciones;

    const llave = `${limite}-${salto}-${genero}`;
    if (this.cacheProductos.has(llave)) { return of(this.cacheProductos.get(llave)!); }

    return this.clienteHttp
      .get<ProductsResponse>(`${urlBase}/products`, { params: { limit: limite, offset: salto, gender: genero } })
      .pipe(tap(respuesta => this.cacheProductos.set(llave, respuesta)));
  }

  obtenerProductoPorId(id: string): Observable<Product> {
    if (this.cacheProducto.has(id)) { return of(this.cacheProducto.get(id)!); }

    return this.clienteHttp
      .get<Product>(`${urlBase}/products/${id}`)
      .pipe(tap(respuesta => this.cacheProducto.set(id, respuesta)));
  }

  obtenerProductoPorIdOSlugu(idOSlug: string): Observable<Product> {
    if (this.cacheProducto.has(idOSlug)) { return of(this.cacheProducto.get(idOSlug)!); }

    return this.clienteHttp
      .get<Product>(`${urlBase}/products/${idOSlug}`)
      .pipe(tap(respuesta => this.cacheProducto.set(idOSlug, respuesta)));
  }

}