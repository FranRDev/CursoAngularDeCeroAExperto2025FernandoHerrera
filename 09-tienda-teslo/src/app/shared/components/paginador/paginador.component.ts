import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'paginador',
  imports: [],
  templateUrl: './paginador.component.html',
})
export class PaginadorComponent {

  paginas = input(0);
  paginaActual = input<number>(1);

  obtenerPaginas = computed(() => Array.from({ length: this.paginas() }, (_, indice) => indice + 1));

}