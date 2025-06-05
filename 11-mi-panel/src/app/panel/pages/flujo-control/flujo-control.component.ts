import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'flujo-control',
  templateUrl: './flujo-control.component.html'
})
export default class FlujoControlComponent {

  public mostrarContenido = signal(false);

  public conmutarContenido() {
    this.mostrarContenido.update(valor => !valor);
  }

}