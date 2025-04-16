import { Component } from '@angular/core';

import { EntradaBusquedaComponent } from "../../components/entrada-busqueda/entrada-busqueda.component";
import { ListaComponent } from "../../components/lista/lista.component";

@Component({
  selector: 'pagina-por-capital',
  imports: [EntradaBusquedaComponent, ListaComponent],
  templateUrl: './pagina-por-capital.component.html',
})
export class PaginaPorCapitalComponent {

  buscar(texto: string) {
    console.log(texto);
  }

}