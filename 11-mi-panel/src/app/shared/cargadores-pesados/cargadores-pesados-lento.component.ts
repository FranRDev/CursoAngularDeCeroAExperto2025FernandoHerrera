import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'cargadores-pesados-lento',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section [ngClass]="['w-full h-[600px]', claseCss()]">Hola mundo</section>
  `
})
export class CargadoresPesadosLentoComponent {

  public claseCss = input.required<string>();

  constructor() {
    const inicio = Date.now();
    while (Date.now() - inicio < 3000) { }
    console.log('Cargado');
  }

}