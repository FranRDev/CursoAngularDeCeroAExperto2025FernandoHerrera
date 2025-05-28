import { ActivatedRoute } from '@angular/router';
import { Component, computed, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';

import { map } from 'rxjs';

import { PaginacionService } from '@shared/components/paginador/paginador.service';
import { PaginadorComponent } from '@shared/components/paginador/paginador.component';
import { ServicioProductosService } from '@productos/services/productos.service';
import { TarjetaProductoComponent } from '@productos/components/tarjeta-producto/tarjeta-producto.component';

@Component({
  imports: [TarjetaProductoComponent, PaginadorComponent],
  templateUrl: './pagina-genero.component.html',
})
export default class PaginaGeneroComponent {

  rutaActiva = inject(ActivatedRoute);
  servicioProductos = inject(ServicioProductosService);
  servicioPaginacion = inject(PaginacionService);

  generoRuta = toSignal(
    this.rutaActiva.params.pipe(
      map(({ genero }) => {
        if (genero === 'ninhos') { genero = 'niños'; }
        return genero;
      })
    )
  );

  generoApi = computed(() => this.generoRuta() === 'hombre' ? 'man' : (this.generoRuta() === 'mujer' ? 'women' : 'kid'));

  recursoProductos = rxResource({
    request: () => ({ genero: this.generoApi(), pagina: this.servicioPaginacion.paginaActual() - 1 }),
    loader: ({ request }) => {
      return this.servicioProductos.obtenerProductos({
        genero: request.genero,
        salto: request.pagina * 9
      });
    }
  });

}