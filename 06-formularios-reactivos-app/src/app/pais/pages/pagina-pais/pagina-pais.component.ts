import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

import { filter, switchMap, tap } from 'rxjs';

import { Pais } from '../../interfaces/paises.interfaces';
import { PaisesService } from '../../services/paises.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe, ReactiveFormsModule],
  templateUrl: './pagina-pais.component.html'
})
export class PaginaPaisComponent {

  fb = inject(FormBuilder);
  servicioPaises = inject(PaisesService);
  regiones = signal(this.servicioPaises.regiones);
  paises = signal<Pais[]>([]);
  fronteras = signal<Pais[]>([]);

  formulario: FormGroup = this.fb.group({
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
      .subscribe(fronteras => this.fronteras.set(fronteras));
  }

}