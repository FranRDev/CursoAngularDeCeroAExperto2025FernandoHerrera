import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TarjetaComponent } from "../../components/tarjeta/tarjeta.component";

@Component({
  selector: 'pagina-poco-comun',
  imports: [TarjetaComponent],
  templateUrl: './pagina-poco-comun.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginaPocoComunComponent { }