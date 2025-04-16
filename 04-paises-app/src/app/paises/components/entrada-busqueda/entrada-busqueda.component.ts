import { Component, input, output } from '@angular/core';

@Component({
  selector: 'paises-entrada-busqueda',
  imports: [],
  templateUrl: './entrada-busqueda.component.html',
})
export class EntradaBusquedaComponent {

  placeholder = input<string>('Buscar');
  valor = output<string>();

}