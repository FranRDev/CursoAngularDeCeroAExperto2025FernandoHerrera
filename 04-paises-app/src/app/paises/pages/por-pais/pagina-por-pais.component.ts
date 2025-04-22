import { Component, inject, resource, signal } from '@angular/core';

import { firstValueFrom } from 'rxjs';

import { EntradaBusquedaComponent } from "../../components/entrada-busqueda/entrada-busqueda.component";
import { ListaComponent } from "../../components/lista/lista.component";
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'pagina-por-pais',
  imports: [EntradaBusquedaComponent, ListaComponent],
  templateUrl: './pagina-por-pais.component.html'
})
export default class PaginaPorPaisComponent {

  busqueda = signal<string>('');
  servicioPaises = inject(PaisesService);

  recursoPaises = resource({
    request: () => ({ busqueda: this.busqueda() }),
    loader: async ({ request }) => {
      if (!request.busqueda) return [];
      return await firstValueFrom(this.servicioPaises.buscarPorPais(request.busqueda));
    }
  });

  // buscar(valor: string) {
  //   console.log(valor);
  // }

}