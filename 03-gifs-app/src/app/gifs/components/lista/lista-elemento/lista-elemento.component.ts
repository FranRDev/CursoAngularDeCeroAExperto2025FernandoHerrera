import { Component, input } from '@angular/core';

@Component({
  selector: 'gifs-lista-elemento',
  templateUrl: './lista-elemento.component.html'
})
export class ListaElementoComponent {

  url = input.required<string>();

}