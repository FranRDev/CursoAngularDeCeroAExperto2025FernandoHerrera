import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cargadores-pesados-rapido',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section [ngClass]="['w-full h-[600px]', claseCss()]">
      <ng-content />
    </section>
  `
})
export class CargadoresPesadosRapidoComponent {

  public claseCss = input.required<string>();

  constructor() {
    console.log('Cargador pesado rápido creado');
  }

}