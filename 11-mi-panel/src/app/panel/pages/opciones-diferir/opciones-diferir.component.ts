import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CargadoresPesadosRapidoComponent } from '@shared/cargadores-pesados/cargadores-pesados-rapido.component';
import { TituloComponent } from '@shared/titulo/titulo.component';

@Component({
  selector: 'app-opciones-diferir',
  imports: [CargadoresPesadosRapidoComponent, TituloComponent],
  templateUrl: './opciones-diferir.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OpcionesDiferirComponent { }