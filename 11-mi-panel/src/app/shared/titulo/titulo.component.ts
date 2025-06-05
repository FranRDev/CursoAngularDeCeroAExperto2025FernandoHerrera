import { booleanAttribute, ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'titulo',
  templateUrl: './titulo.component.html'
})
export class TituloComponent {

  public titulo = input.required<string>();
  public conSombra = input(false, { transform: booleanAttribute });

}