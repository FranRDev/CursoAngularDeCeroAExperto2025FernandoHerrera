import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CargadoresPesadosLentoComponent } from '@shared/cargadores-pesados/cargadores-pesados-lento.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CargadoresPesadosLentoComponent],
  selector: 'vistas-diferir',
  templateUrl: './vistas-diferir.component.html'
})
export default class VistasDiferirComponent {



}