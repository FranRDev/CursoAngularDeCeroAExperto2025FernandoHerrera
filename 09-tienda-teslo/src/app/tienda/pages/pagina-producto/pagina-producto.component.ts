import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { ImagenProductoPipe } from '@productos/pipes/imagen-producto.pipe';
import { ServicioProductosService } from '@productos/services/productos.service';

@Component({
  imports: [ImagenProductoPipe],
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