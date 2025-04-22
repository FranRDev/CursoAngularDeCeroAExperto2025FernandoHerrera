import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { NoEncontradoComponent } from "../../../shared/components/no-encontrado/no-encontrado.component";
import { PaisesService } from '../../services/paises.service';
import { InfoPaisComponent } from "./info-pais/info-pais.component";

@Component({
  selector: 'pagina-pais',
  imports: [NoEncontradoComponent, InfoPaisComponent],
  templateUrl: './pagina-pais.component.html'
})
export default class PaginaPaisComponent {

  codigoPais = inject(ActivatedRoute).snapshot.params['codigo'];
  servicioPaises = inject(PaisesService);

  recursoPais = rxResource({
    request: () => ({ codigo: this.codigoPais }),
    loader: ({ request }) => this.servicioPaises.buscarPaisPorCodigo(request.codigo)
  });

}