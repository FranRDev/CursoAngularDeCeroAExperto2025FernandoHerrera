import { Component } from '@angular/core';
import { EntradaBusquedaComponent } from "../../components/entrada-busqueda/entrada-busqueda.component";
import { ListaComponent } from "../../components/lista/lista.component";

@Component({
  selector: 'pagina-por-pais',
  imports: [EntradaBusquedaComponent, ListaComponent],
  templateUrl: './pagina-por-pais.component.html'
})
export default class PaginaPorPaisComponent {

  buscar(valor: string) {
    console.log(valor);
  }

}