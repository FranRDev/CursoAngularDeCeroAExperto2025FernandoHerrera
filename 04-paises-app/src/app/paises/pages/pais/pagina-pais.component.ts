import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'pagina-pais',
  imports: [],
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