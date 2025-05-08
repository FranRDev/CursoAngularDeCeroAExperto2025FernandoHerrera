import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';

@Component({
  selector: 'pagina-personalizada',
  imports: [ToggleCasePipe],
  templateUrl: './pagina-personalizada.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginaPersonalizadaComponent {

  nombre = signal('Fran Rodríguez');
  mayusculas = signal(true);

}