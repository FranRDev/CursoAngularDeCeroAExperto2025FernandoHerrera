import { Component, inject, signal } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { of } from 'rxjs';

import { EntradaBusquedaComponent } from "../../components/entrada-busqueda/entrada-busqueda.component";
import { ListaComponent } from "../../components/lista/lista.component";
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'pagina-por-capital',
  imports: [EntradaBusquedaComponent, ListaComponent],
  templateUrl: './pagina-por-capital.component.html'
})
export default class PaginaPorCapitalComponent {

  busqueda = signal<string>('');
  servicioPaises = inject(PaisesService);

  recursoPaises = rxResource({
    request: () => ({ busqueda: this.busqueda() }),
    loader: ({ request }) => {
      if (!request.busqueda) return of([]);
      return this.servicioPaises.buscarPorCapital(request.busqueda);
    }
  });

  // recursoPaises = resource({
  //   request: () => ({ busqueda: this.busqueda() }),
  //   loader: async ({ request }) => {
  //     if (!request.busqueda) return [];
  //     return await firstValueFrom(this.servicioPaises.buscarPorCapital(request.busqueda));
  //   }
  // });

  // cargando = signal(false);
  // error = signal<string | null>(null);
  // paises = signal<Pais[]>([]);

  // buscar(texto: string) {
  //   if (this.cargando()) return;

  //   this.cargando.set(true);
  //   this.error.set(null);

  //   this.servicioPaises.buscarPorCapital(texto).subscribe({
  //     next: (paises) => {
  //       this.cargando.set(false);
  //       this.paises.set(paises);
  //     },
  //     error: (error) => {
  //       this.cargando.set(false);
  //       this.paises.set([]);
  //       this.error.set(error);
  //     }
  //   });
  // }

}