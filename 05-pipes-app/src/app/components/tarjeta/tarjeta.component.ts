import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'tarjeta',
  imports: [],
  templateUrl: './tarjeta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TarjetaComponent {

  titulo = input.required();

}