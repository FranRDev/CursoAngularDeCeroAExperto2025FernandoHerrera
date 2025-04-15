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

  divGrupo = viewChild<ElementRef<HTMLDivElement>>('divGrupo');

  cambioScroll(evento: Event) {
    const div = this.divGrupo()?.nativeElement;
    if (!div) return;

    const scrollTop = div.scrollTop;
    const altoCliente = div.clientHeight;
    const altoScroll = div.scrollHeight;
    const final = scrollTop + altoCliente + 300 >= altoScroll;

    if (final) {
      // TODO: Cargar siguiente página
    }
  }

}