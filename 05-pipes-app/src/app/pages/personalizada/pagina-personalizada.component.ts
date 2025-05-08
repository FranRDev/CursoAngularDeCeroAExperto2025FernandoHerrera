import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { ColorPipe } from '../../pipes/color.pipe';
import { heroes } from '../../data/heroes.data';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { VuelaPipe } from '../../pipes/vuela.pipe';

@Component({
  selector: 'pagina-personalizada',
  imports: [ToggleCasePipe, VuelaPipe, ColorPipe],
  templateUrl: './pagina-personalizada.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginaPersonalizadaComponent {

  nombre = signal('Fran Rodríguez');
  mayusculas = signal(true);
  heroes = signal(heroes);

}