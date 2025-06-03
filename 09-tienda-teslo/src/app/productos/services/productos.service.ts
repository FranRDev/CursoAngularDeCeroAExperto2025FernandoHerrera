import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

import { forkJoin, map, Observable, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Gender, Product, ProductsResponse } from '@productos/interfaces/productos.interface';
import { User } from '@auth/interfaces/usuario.interface';

const urlBase = environment.urlBase;

interface Opciones {
  limite?: number;
  salto?: number;
  genero?: string;
}

const productoVacio: Product = {
  id: 'nuevo',
  title: '',
  price: 0,
  description: '',
  slug: '',
  stock: 0,
  sizes: [],
  gender: Gender.Men,
  tags: [],
  images: [],
  user: {} as User
}

@Injectable({ providedIn: 'root' })
export class ProductosService {

  private clienteHttp = inject(HttpClient);

  private cacheProductos = new Map<string, ProductsResponse>();
  private cacheProducto = new Map<string, Product>();

  crearProducto(producto: Partial<Product>): Observable<Product> {
    return this.clienteHttp
      .post<Product>(`${urlBase}/products`, producto)
      .pipe(tap(producto => this.actualizarCacheProducto(producto)));
  }

  obtenerProductos(opciones: Opciones): Observable<ProductsResponse> {
    const { limite = 9, salto = 0, genero = '' } = opciones;

    const llave = `${limite}-${salto}-${genero}`;
    if (this.cacheProductos.has(llave)) { return of(this.cacheProductos.get(llave)!); }

    return this.clienteHttp
      .get<ProductsResponse>(`${urlBase}/products`, { params: { limit: limite, offset: salto, gender: genero } })
      .pipe(tap(respuesta => this.cacheProductos.set(llave, respuesta)));
  }

  obtenerProductoPorId(id: string): Observable<Product> {
    if (id === 'nuevo') return of(productoVacio);
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

  actualizarProducto(id: string, producto: Partial<Product>): Observable<Product> {
    return this.clienteHttp
      .patch<Product>(`${urlBase}/products/${id}`, producto)
      .pipe(tap(producto => this.actualizarCacheProducto(producto)));
  }

  actualizarCacheProducto(producto: Product) {
    this.cacheProducto.set(producto.id, producto);

    this.cacheProductos.forEach(cache => {
      cache.products = cache.products.map(productoActual => productoActual.id === producto.id ? producto : productoActual)
    });

    console.log('Caché actualizado');
  }

  subirImagenes(imagenes?: FileList): Observable<string[]> {
    if (!imagenes) return of([]);
    const observablesSubidas = Array.from(imagenes).map(imagen => this.subirImagen(imagen));
    return forkJoin(observablesSubidas).pipe(tap(nombresImagenes => console.log({ nombresImagenes })));
  }

  subirImagen(imagen: File): Observable<string> {
    const fd = new FormData();
    fd.append('file', imagen);
    return this.clienteHttp.post<{ fileName: string }>(`${urlBase}/files/product`, fd).pipe(map(respuesta => respuesta.fileName));
  }

}