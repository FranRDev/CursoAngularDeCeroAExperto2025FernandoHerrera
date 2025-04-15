import { Component } from '@angular/core';

import { ListaComponent } from "../../components/lista/lista.component";

@Component({
  imports: [ListaComponent],
  selector: 'pagina-tendencias',
  templateUrl: './pagina-tendencias.component.html'
})
export default class PaginaTendenciasComponent { }