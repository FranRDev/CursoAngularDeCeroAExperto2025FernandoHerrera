import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PaginacionService {

  private rutaActiva = inject(ActivatedRoute);

  paginaActual = toSignal(
    this.rutaActiva.queryParamMap.pipe(
      map(parametros => parametros.get('pagina') ? +parametros.get('pagina')! : 1),
      map(pagina => isNaN(pagina) ? 1 : pagina)
    ),
    {
      initialValue: 1
    }
  );

}