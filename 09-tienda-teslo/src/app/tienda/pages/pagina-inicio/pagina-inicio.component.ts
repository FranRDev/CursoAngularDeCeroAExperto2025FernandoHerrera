import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop'

import { map } from 'rxjs';

import { PaginadorComponent } from '@shared/components/paginador/paginador.component';
import { ServicioProductosService } from '@productos/services/productos.service';
import { TarjetaProductoComponent } from '@productos/components/tarjeta-producto/tarjeta-producto.component';

// import { TarjetaProductoComponent } from '@/productos/components/tarjeta-producto/tarjeta-producto.component';
// import { TarjetaProductoComponent } from "../../../productos/components/tarjeta-producto/tarjeta-producto.component";

@Component({
  imports: [TarjetaProductoComponent, PaginadorComponent],
  templateUrl: './pagina-inicio.component.html',
})
export default class PaginaInicioComponent {

  servicioProductos = inject(ServicioProductosService);
  rutaActiva = inject(ActivatedRoute);

  paginaActual = toSignal(
    this.rutaActiva.queryParamMap.pipe(
      map(parametros => parametros.get('pagina') ? +parametros.get('pagina')! : 1),
      map(pagina => isNaN(pagina) ? 1 : pagina)
    ),
    {
      initialValue: 1
    }
  );

  recursoProductos = rxResource({
    request: () => ({ pagina: this.paginaActual() - 1 }),
    loader: ({ request }) => {
      return this.servicioProductos.obtenerProductos({
        salto: request.pagina * 9
      });
    }
  });

}