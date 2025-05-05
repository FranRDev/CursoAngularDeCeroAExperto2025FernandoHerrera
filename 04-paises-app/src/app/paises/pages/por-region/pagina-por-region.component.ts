import { Component, inject, signal } from '@angular/core';
import { ListaComponent } from "../../components/lista/lista.component";

import type { Region } from '../../interfaces/paises.interfaces';
import { PaisesService } from '../../services/paises.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';

@Component({
  selector: 'pagina-por-region',
  imports: [ListaComponent],
  templateUrl: './pagina-por-region.component.html'
})
export default class PaginaPorRegionComponent {

  public regiones: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  regionSeleccionada = signal<Region | null>(null);
  servicioPaises = inject(PaisesService);

  recursoPaises = rxResource({
    request: () => ({ region: this.regionSeleccionada() }),
    loader: ({ request }) => {
      if (!request.region) return of([]);
      return this.servicioPaises.buscarPaisPorRegion(request.region);
    }
  });

}