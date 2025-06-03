import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';

import { PaginacionService } from '@shared/components/paginador/paginador.service';
import { PaginadorComponent } from '@shared/components/paginador/paginador.component';
import { ProductosService } from '@productos/services/productos.service';
import { TablaProductosComponent } from '@productos/components/tabla-productos/tabla-productos.component';

@Component({
  imports: [
    PaginadorComponent,
    RouterLink,
    TablaProductosComponent
  ],
  selector: 'administracion-productos',
  templateUrl: './administracion-productos.component.html'
})
export default class AdministracionProductosComponent {

  servicioProductos = inject(ProductosService);
  servicioPaginacion = inject(PaginacionService);

  productosPorPagina = signal(10);

  recursoProductos = rxResource({
    request: () => ({
      pagina: this.servicioPaginacion.paginaActual() - 1,
      limite: this.productosPorPagina()
    }),
    loader: ({ request }) => {
      return this.servicioProductos.obtenerProductos({
        salto: request.pagina * 9,
        limite: request.limite
      });
    }
  });

}