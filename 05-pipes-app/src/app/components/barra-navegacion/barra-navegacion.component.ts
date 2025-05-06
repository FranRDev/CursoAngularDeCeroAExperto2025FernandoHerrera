import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { routes } from '../../app.routes';

@Component({
  selector: 'barra-navegacion',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './barra-navegacion.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarraNavegacionComponent {

  rutas = routes.map((ruta) => ({ titulo: ruta.title ?? '', camino: ruta.path ?? '' }));

}