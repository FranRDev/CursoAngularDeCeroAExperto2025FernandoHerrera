import { Component, input } from '@angular/core';

import { ListaElementoComponent } from './lista-elemento/lista-elemento.component';

import type { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gifs-lista',
  templateUrl: './lista.component.html',
  imports: [ListaElementoComponent]
})
export class ListaComponent {

  gifs = input.required<Gif[]>();

}