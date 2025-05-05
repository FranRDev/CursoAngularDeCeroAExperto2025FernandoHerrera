import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'paises-entrada-busqueda',
  imports: [],
  templateUrl: './entrada-busqueda.component.html',
})
export class EntradaBusquedaComponent {

  placeholder = input<string>('Buscar');
  valor = output<string>();
  valorEntrada = signal<string>('');
  tiempoRebote = input<number>(300);

  efectoRebote = effect((limpieza) => {
    const valor = this.valorEntrada();

    const fueraDeTiempo = setTimeout(() => this.valor.emit(valor), this.tiempoRebote());

    limpieza(() => clearTimeout(fueraDeTiempo));
  });

}