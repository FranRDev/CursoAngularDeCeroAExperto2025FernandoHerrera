import { Component, inject } from '@angular/core';

import { EntradaBusquedaComponent } from "../../components/entrada-busqueda/entrada-busqueda.component";
import { ListaComponent } from "../../components/lista/lista.component";
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'pagina-por-capital',
  imports: [EntradaBusquedaComponent, ListaComponent],
  templateUrl: './pagina-por-capital.component.html'
})
export default class PaginaPorCapitalComponent {

  servicioPaises = inject(PaisesService);

  buscar(texto: string) {
    this.servicioPaises.buscarPorCapital(texto).subscribe(respuesta => console.log({ respuesta }));
  }

}