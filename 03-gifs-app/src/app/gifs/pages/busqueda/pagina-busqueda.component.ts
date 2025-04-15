import { Component, inject } from '@angular/core';

import { ListaComponent } from "../../components/lista/lista.component";
import { GifsService } from '../../services/gifs.service';

@Component({
  imports: [ListaComponent],
  selector: 'pagina-busqueda',
  templateUrl: './pagina-busqueda.component.html'
})
export default class PaginaBusquedaComponent {

  private servicioGifs = inject(GifsService);

  buscar(busqueda: string) {
    this.servicioGifs.buscar(busqueda);
    // console.log(busqueda);
  }

}