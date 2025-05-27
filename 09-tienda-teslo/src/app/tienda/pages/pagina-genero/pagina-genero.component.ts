import { Component, computed, inject } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { map } from 'rxjs';

import { TarjetaProductoComponent } from '@productos/components/tarjeta-producto/tarjeta-producto.component';
import { ServicioProductosService } from '@productos/services/productos.service';

@Component({
  imports: [TarjetaProductoComponent],
  templateUrl: './pagina-genero.component.html',
})
export default class PaginaGeneroComponent {

  rutaActiva = inject(ActivatedRoute);
  servicioProductos = inject(ServicioProductosService);

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
    request: () => ({ genero: this.generoApi() }),
    loader: ({ request }) => {
      return this.servicioProductos.obtenerProductos({ genero: request.genero });
    }
  });

}