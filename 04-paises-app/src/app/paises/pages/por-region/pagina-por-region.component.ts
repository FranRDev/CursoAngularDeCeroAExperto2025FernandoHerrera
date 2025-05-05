import { Component, inject, linkedSignal, signal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { rxResource } from '@angular/core/rxjs-interop';

import { of } from 'rxjs';

import { ListaComponent } from "../../components/lista/lista.component";
import type { Region } from '../../interfaces/paises.interfaces';
import { PaisesService } from '../../services/paises.service';

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

  servicioPaises = inject(PaisesService);
  enrutador = inject(Router);
  rutaActiva = inject(ActivatedRoute);
  parametroRegion = (this.rutaActiva.snapshot.queryParamMap.get('region') ?? '') as Region;
  regionSeleccionada = linkedSignal<Region | null>(() => this.parametroRegion ?? 'Europe');

  recursoPaises = rxResource({
    request: () => ({ region: this.regionSeleccionada() }),
    loader: ({ request }) => {
      if (!request.region) return of([]);
      this.enrutador.navigate(['/paises/por-region'], { queryParams: { region: request.region } });
      return this.servicioPaises.buscarPaisPorRegion(request.region);
    }
  });

}