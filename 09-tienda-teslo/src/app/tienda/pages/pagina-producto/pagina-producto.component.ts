import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { ImagenProductoPipe } from '@productos/pipes/imagen-producto.pipe';
import { ServicioProductosService } from '@productos/services/productos.service';
import { CarruselProductoComponent } from "../../../productos/components/carrusel-producto/carrusel-producto.component";

@Component({
  imports: [ImagenProductoPipe, CarruselProductoComponent],
  templateUrl: './pagina-producto.component.html',
})
export default class PaginaProductoComponent {

  rutaActiva = inject(ActivatedRoute);
  slug: string = this.rutaActiva.snapshot.params['id'] ?? '';
  servicioProductos = inject(ServicioProductosService);

  recursoProducto = rxResource({
    request: () => ({ iOSlug: this.slug }),
    loader: ({ request }) => this.servicioProductos.obtenerProducto(request.iOSlug)
  });

}