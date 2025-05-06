import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'pagina-numeros',
  imports: [DecimalPipe, PercentPipe, CurrencyPipe],
  templateUrl: './pagina-numeros.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PaginaNumerosComponent {

  totalVentas = signal(2_433_232.5567);
  procentaje = signal(0.4856);

}