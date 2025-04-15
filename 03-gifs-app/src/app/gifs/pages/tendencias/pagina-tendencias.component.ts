import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';

import { GifsService } from '../../services/gifs.service';
import { ListaComponent } from "../../components/lista/lista.component";

import type { Gif } from '../../interfaces/gif.interface';

@Component({
  // imports: [ListaComponent],
  selector: 'pagina-tendencias',
  templateUrl: './pagina-tendencias.component.html'
})
export default class PaginaTendenciasComponent {

  servicioGifs = inject(GifsService);

  divGrupo = viewChild<ElementRef>('divGrupo');

  cambioScroll(evento: Event) {
    const scrollDiv = this.divGrupo()?.nativeElement;
    console.log(scrollDiv);
  }

}