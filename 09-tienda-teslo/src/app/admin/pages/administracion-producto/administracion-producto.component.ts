import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { PaginacionService } from '@shared/components/paginador/paginador.service';
import { PaginadorComponent } from '@shared/components/paginador/paginador.component';
import { ServicioProductosService } from '@productos/services/productos.service';
import { TablaProductosComponent } from '@productos/components/tabla-productos/tabla-productos.component';

@Component({
  imports: [
    PaginadorComponent,
    TablaProductosComponent
  ],
  selector: 'administracion-producto',
  templateUrl: './administracion-producto.component.html'
})
export default class AdministracionProductoComponent {

  servicioProductos = inject(ServicioProductosService);
  servicioPaginacion = inject(PaginacionService);

  recursoProductos = rxResource({
    request: () => ({ pagina: this.servicioPaginacion.paginaActual() - 1 }),
    loader: ({ request }) => {
      return this.servicioProductos.obtenerProductos({
        salto: request.pagina * 9
      });
    }
  });

}