import { Component, inject, signal } from '@angular/core';

import { GifsService } from '../../services/gifs.service';
import { ListaComponent } from "../../components/lista/lista.component";

import type { Gif } from '../../interfaces/gif.interface';

@Component({
  imports: [ListaComponent],
  selector: 'pagina-busqueda',
  templateUrl: './pagina-busqueda.component.html'
})
export default class PaginaBusquedaComponent {

  private servicioGifs = inject(GifsService);
  gifs = signal<Gif[]>([]);

  buscar(busqueda: string) {
    this.servicioGifs.buscar(busqueda).subscribe(respuesta => {
      this.gifs.set(respuesta);
    });
  }

}