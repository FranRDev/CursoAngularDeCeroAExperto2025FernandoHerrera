import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'pagina-basica',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe],
  templateUrl: './pagina-basica.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginaBasicaComponent {

  nombreMinusculas = signal('fran');
  nombreMayusculas = signal('FRAN');
  nombreCompleto = signal('fRaN RODríGuEz');

}