import { Component } from '@angular/core';

import { ListaElementosComponent } from "./lista-elementos/lista-elementos.component";

@Component({
  selector: 'gifs-lista',
  templateUrl: './lista.component.html',
  imports: [ListaElementosComponent]
})
export class ListaComponent { }
