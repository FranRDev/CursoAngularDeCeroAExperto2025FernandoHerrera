import { Component, output } from '@angular/core';

@Component({
  selector: 'paises-entrada-busqueda',
  imports: [],
  templateUrl: './entrada-busqueda.component.html',
})
export class EntradaBusquedaComponent {

  buscar = output<string>();

  buscarPulsado(texto: string) {
    this.buscar.emit(texto);
  }

}