import { Component, computed, input, linkedSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'paginador',
  imports: [RouterLink],
  templateUrl: './paginador.component.html',
})
export class PaginadorComponent {

  paginas = input(0);
  paginaActual = input<number>(1);
  paginaActiva = linkedSignal(this.paginaActual);

  obtenerPaginas = computed(() => Array.from({ length: this.paginas() }, (_, indice) => indice + 1));

}