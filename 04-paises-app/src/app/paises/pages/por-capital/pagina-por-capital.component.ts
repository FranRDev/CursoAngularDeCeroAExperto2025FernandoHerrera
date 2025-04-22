import { Component, inject, signal } from '@angular/core';

import { EntradaBusquedaComponent } from "../../components/entrada-busqueda/entrada-busqueda.component";
import { ListaComponent } from "../../components/lista/lista.component";
import { Pais } from '../../interfaces/paises.interfaces';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'pagina-por-capital',
  imports: [EntradaBusquedaComponent, ListaComponent],
  templateUrl: './pagina-por-capital.component.html'
})
export default class PaginaPorCapitalComponent {

  servicioPaises = inject(PaisesService);

  cargando = signal(false);
  error = signal<string | null>(null);
  paises = signal<Pais[]>([]);

  buscar(texto: string) {
    if (this.cargando()) return;

    this.cargando.set(true);
    this.error.set(null);

    this.servicioPaises.buscarPorCapital(texto).subscribe(paises => {
      this.cargando.set(false);
      this.paises.set(paises);
      console.log(paises);
    });
  }

}