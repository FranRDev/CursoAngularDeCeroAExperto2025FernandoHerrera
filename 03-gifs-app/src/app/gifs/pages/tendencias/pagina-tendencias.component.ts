import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';

import { GifsService } from '../../services/gifs.service';
import { EstadoScrollService } from 'src/app/shared/services/estado-scroll.service';

@Component({
  selector: 'pagina-tendencias',
  templateUrl: './pagina-tendencias.component.html'
})
export default class PaginaTendenciasComponent implements AfterViewInit {

  servicioGifs = inject(GifsService);
  servicioEstadoScroll = inject(EstadoScrollService);

  divGrupo = viewChild<ElementRef<HTMLDivElement>>('divGrupo');

  ngAfterViewInit(): void {
    const div = this.divGrupo()?.nativeElement;
    if (!div) return;

    div.scrollTop = this.servicioEstadoScroll.estadoScrollTendencias();
  }

  cambioScroll() {
    const div = this.divGrupo()?.nativeElement;
    if (!div) return;

    const scrollTop = div.scrollTop;
    const altoCliente = div.clientHeight;
    const altoScroll = div.scrollHeight;
    const final = scrollTop + altoCliente + 300 >= altoScroll;
    this.servicioEstadoScroll.estadoScrollTendencias.set(scrollTop);

    if (final) {
      this.servicioGifs.cargarTendencias();
    }
  }

}