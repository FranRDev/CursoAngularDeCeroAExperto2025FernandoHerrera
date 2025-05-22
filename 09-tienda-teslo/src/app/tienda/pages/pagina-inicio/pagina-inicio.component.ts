import { Component, inject } from '@angular/core';

import { rxResource } from '@angular/core/rxjs-interop'

import { TarjetaProductoComponent } from '@productos/components/tarjeta-producto/tarjeta-producto.component';
import { ServicioProductosService } from '@productos/services/productos.service';

// import { TarjetaProductoComponent } from '@/productos/components/tarjeta-producto/tarjeta-producto.component';
// import { TarjetaProductoComponent } from "../../../productos/components/tarjeta-producto/tarjeta-producto.component";

@Component({
  imports: [TarjetaProductoComponent],
  templateUrl: './pagina-inicio.component.html',
})
export default class PaginaInicioComponent {

  servicioProductos = inject(ServicioProductosService);

  recursoProductos = rxResource({
    request: () => ({}),
    loader: () => {
      return this.servicioProductos.obtenerProductos({});
    }
  });

}