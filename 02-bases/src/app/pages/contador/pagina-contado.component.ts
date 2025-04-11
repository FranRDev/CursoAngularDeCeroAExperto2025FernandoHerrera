import { Component } from "@angular/core";

@Component({
  template: `
  <h1>Contador: {{ contador }}</h1>
  <button (click)="incrementar(1)">+1</button>
  `
})
export class PaginaContadorComponent {

  contador = 15;

  incrementar(valor: number) {
    this.contador += valor;
  }

}