import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { CarruselProductoComponent } from "../../../productos/components/carrusel-producto/carrusel-producto.component";
import { ProductosService } from '@productos/services/productos.service';

@Component({
  imports: [CarruselProductoComponent],
  templateUrl: './pagina-producto.component.html',
})
export default class PaginaProductoComponent {

  rutaActiva = inject(ActivatedRoute);
  slug: string = this.rutaActiva.snapshot.params['id'] ?? '';
  servicioProductos = inject(ProductosService);

  recursoProducto = rxResource({
    request: () => ({ iOSlug: this.slug }),
    loader: ({ request }) => this.servicioProductos.obtenerProductoPorIdOSlugu(request.iOSlug)
  });

}