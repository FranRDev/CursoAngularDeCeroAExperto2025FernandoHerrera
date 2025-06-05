import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

import { TituloComponent } from '@shared/titulo/titulo.component';

type Grado = 'A' | 'B' | 'F';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TituloComponent],
  selector: 'flujo-control',
  templateUrl: './flujo-control.component.html'
})
export default class FlujoControlComponent {

  public mostrarContenido = signal(false);
  public grado = signal<Grado>('A');
  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2 = signal([]);

  public conmutarContenido() {
    this.mostrarContenido.update(valor => !valor);
  }

}