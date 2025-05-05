import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'paises-entrada-busqueda',
  imports: [],
  templateUrl: './entrada-busqueda.component.html',
})
export class EntradaBusquedaComponent {

  placeholder = input<string>('Buscar');
  valor = output<string>();
  valorInicial = input<string>('');
  valorEntrada = linkedSignal<string>(() => this.valorInicial() ?? '');
  tiempoRebote = input<number>(1000);

  efectoRebote = effect((limpieza) => {
    const valor = this.valorEntrada();

    const fueraDeTiempo = setTimeout(() => this.valor.emit(valor), this.tiempoRebote());

    limpieza(() => clearTimeout(fueraDeTiempo));
  });

}