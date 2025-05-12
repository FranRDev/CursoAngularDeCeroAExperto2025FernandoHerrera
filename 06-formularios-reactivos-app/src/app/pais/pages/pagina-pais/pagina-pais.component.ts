import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

import { Pais } from '../../interfaces/paises.interfaces';
import { PaisesService } from '../../services/paises.service';
import { filter, switchMap, tap } from 'rxjs';

@Component({
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './pagina-pais.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginaPaisComponent {

  fb = inject(FormBuilder);
  servicioPaises = inject(PaisesService);

  regiones = signal(this.servicioPaises.regiones);
  paises = signal<Pais[]>([]);
  fronteras = signal<Pais[]>([]);

  formulario = this.fb.group({
    region: ['', Validators.required],
    pais: ['', Validators.required],
    frontera: ['', Validators.required]
  });

  formularioCambiado = effect((limpieza) => {
    const regionCambiada = this.regionCambiada()
    const paisCambiado = this.paisCambiado();

    limpieza(() => {
      regionCambiada.unsubscribe();
      paisCambiado.unsubscribe();
    })
  });

  regionCambiada() {
    return this.formulario.get('region')!.valueChanges
      .pipe(
        tap(() => this.limpiarFronteras()),
        tap(() => {
          this.formulario.get('pais')!.setValue('')
          this.paises.set([]);
        }),
        switchMap(region => this.servicioPaises.obtenerPaisesPorRegion(region ?? ''))
      )
      .subscribe(paises => this.paises.set(paises));
  }

  private limpiarFronteras() {
    this.formulario.get('frontera')!.setValue('');
    this.fronteras.set([]);
  }

  paisCambiado() {
    return this.formulario.get('pais')!.valueChanges
      .pipe(
        tap(() => this.limpiarFronteras()),
        filter(valor => valor!.length > 0),
        switchMap(codigo => this.servicioPaises.obtenerPaisPorCodigoAlfa(codigo ?? '')),
        switchMap(pais => this.servicioPaises.obtenerNombresPaisesPorCodigos(pais.borders))
      )
      .subscribe(paisesFronterizos => console.log(paisesFronterizos));
  }

}