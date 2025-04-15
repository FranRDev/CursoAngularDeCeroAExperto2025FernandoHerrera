import { ActivatedRoute } from '@angular/router';
import { Component, computed, inject } from '@angular/core';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

import { GifsService } from '../../services/gifs.service';
import { ListaComponent } from "../../components/lista/lista.component";

@Component({
  imports: [ListaComponent],
  selector: 'pagina-historial',
  templateUrl: './pagina-historial.component.html'
})
export default class PaginaHistorialComponent {

  servicioGifs = inject(GifsService);

  busqueda = toSignal(
    inject(ActivatedRoute).params.pipe(map(parametros => parametros['busqueda'] ?? ''))
  );

  gifsPorBusqueda = computed(() => this.servicioGifs.obtenerGifsHistorial(this.busqueda()));

}