import { Component } from "@angular/core";

@Component({
  templateUrl: './pagina-contador.component.html',
  styleUrl: './pagina-contador.component.css'
})
export class PaginaContadorComponent {

  contador = 15;

  incrementar(valor: number) {
    this.contador += valor;
  }

  restablecer() {
    this.contador = 0;
  }

}