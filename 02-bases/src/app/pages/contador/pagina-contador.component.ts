import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  templateUrl: './pagina-contador.component.html',
  styleUrl: './pagina-contador.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginaContadorComponent {

  contador = 10;
  senhalContador = signal(10);

  constructor() {
    // setInterval(() => {
    //   this.incrementar(1);
    //   console.log('Tick');
    // }, 2000);
  }

  incrementar(valor: number) {
    this.contador += valor;
    this.senhalContador.update(valorActual => valorActual + valor);
  }

  restablecer() {
    this.contador = 0;
    this.senhalContador.set(0);
  }

}