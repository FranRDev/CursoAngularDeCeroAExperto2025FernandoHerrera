import { Component, inject, linkedSignal, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';

import { of } from 'rxjs';

import { EntradaBusquedaComponent } from "../../components/entrada-busqueda/entrada-busqueda.component";
import { ListaComponent } from "../../components/lista/lista.component";
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'pagina-por-pais',
  imports: [EntradaBusquedaComponent, ListaComponent],
  templateUrl: './pagina-por-pais.component.html'
})
export default class PaginaPorPaisComponent {

  servicioPaises = inject(PaisesService);
  enrutador = inject(Router);
  rutaActiva = inject(ActivatedRoute);
  parametroBusqueda = this.rutaActiva.snapshot.queryParamMap.get('busqueda') ?? '';
  busqueda = linkedSignal<string>(() => this.parametroBusqueda);

  recursoPaises = rxResource({
    request: () => ({ busqueda: this.busqueda() }),
    loader: ({ request }) => {
      if (!request.busqueda) return of([]);
      this.enrutador.navigate(['/paises/por-pais'], { queryParams: { busqueda: request.busqueda } });
      return this.servicioPaises.buscarPorPais(request.busqueda);
    }
  });

  // recursoPaises = resource({
  //   request: () => ({ busqueda: this.busqueda() }),
  //   loader: async ({ request }) => {
  //     if (!request.busqueda) return [];
  //     return await firstValueFrom(this.servicioPaises.buscarPorPais(request.busqueda));
  //   }
  // });

  // buscar(valor: string) {
  //   console.log(valor);
  // }

}