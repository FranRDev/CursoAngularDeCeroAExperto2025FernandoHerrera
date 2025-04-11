import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './pagina-contador.component.html',
  styleUrl: './pagina-contador.component.css'
})
export class PaginaContadorComponent {

  contador = 10;
  senhalContador = signal(10);

  incrementar(valor: number) {
    this.contador += valor;
    this.senhalContador.update(valorActual => valorActual + valor);
  }

  restablecer() {
    this.contador = 0;
    this.senhalContador.set(0);
  }

}