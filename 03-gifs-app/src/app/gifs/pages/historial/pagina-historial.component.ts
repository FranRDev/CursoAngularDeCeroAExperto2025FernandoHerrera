import { ActivatedRoute } from '@angular/router';
import { Component, inject } from '@angular/core';
import { map } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'pagina-historial',
  templateUrl: './pagina-historial.component.html'
})
export default class PaginaHistorialComponent {

  busqueda = toSignal(
    inject(ActivatedRoute).params.pipe(
      map(parametros => parametros['busqueda'] ?? '')
    )
  );

}