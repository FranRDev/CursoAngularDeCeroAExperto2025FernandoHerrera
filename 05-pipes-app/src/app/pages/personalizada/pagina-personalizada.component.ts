import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

import { ColorHexPipe } from '../../pipes/color-hex.pipe';
import { ColorPipe } from '../../pipes/color.pipe';
import { heroes } from '../../data/heroes.data';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { VuelaPipe } from '../../pipes/vuela.pipe';
import { CreadorPipe } from '../../pipes/creador.pipe';

@Component({
  selector: 'pagina-personalizada',
  imports: [
    ColorHexPipe,
    ColorPipe,
    CreadorPipe,
    TitleCasePipe,
    ToggleCasePipe,
    VuelaPipe,
  ],
  templateUrl: './pagina-personalizada.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginaPersonalizadaComponent {

  nombre = signal('Fran Rodríguez');
  mayusculas = signal(true);
  heroes = signal(heroes);

}