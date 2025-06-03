import { ActivatedRoute, Router } from '@angular/router';
import { Component, effect, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

import { map } from 'rxjs';

import { ProductosService } from '@productos/services/productos.service';
import { DetallesProductosComponent } from './detalles-productos/detalles-productos.component';

@Component({
  imports: [DetallesProductosComponent],
  selector: 'administracion-producto',
  templateUrl: './administracion-producto.component.html'
})
export default class AdministracionProductoComponent {

  rutaActiva = inject(ActivatedRoute);
  enrutador = inject(Router);
  servicioProductos = inject(ProductosService)

  idProducto = toSignal(this.rutaActiva.params.pipe(map(parametros => parametros['id'])));

  recursoProducto = rxResource({
    request: () => ({ id: this.idProducto() }),
    loader: ({ request }) => {
      return this.servicioProductos.obtenerProductoPorId(request.id);
    }
  });

  efectoRedireccion = effect(() => {
    if (this.recursoProducto.error()) {
      this.enrutador.navigate(['/admin/productos']);
    }
  });

}