import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CargadoresPesadosLentoComponent } from '@shared/cargadores-pesados/cargadores-pesados-lento.component';
import { TituloComponent } from '@shared/titulo/titulo.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CargadoresPesadosLentoComponent, TituloComponent],
  selector: 'vistas-diferir',
  templateUrl: './vistas-diferir.component.html'
})
export default class VistasDiferirComponent {



}