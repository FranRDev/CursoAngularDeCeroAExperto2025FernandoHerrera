import { ChangeDetectionStrategy, Component, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

import { Pais } from '../../interfaces/paises.interfaces';
import { PaisesService } from '../../services/paises.service';
import { switchMap, tap } from 'rxjs';

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

    limpieza(() => {
      regionCambiada.unsubscribe();
      console.log('Limpiado');
    })
  });

  regionCambiada() {
    return this.formulario.get('region')!.valueChanges
      .pipe(
        tap(() => {
          this.formulario.get('frontera')!.setValue('')
          this.fronteras.set([]);
        }),
        tap(() => {
          this.formulario.get('pais')!.setValue('')
          this.paises.set([]);
        }),
        switchMap(region => this.servicioPaises.obtenerPaisesPorRegion(region ?? ''))
      )
      .subscribe(paises => this.paises.set(paises));
  }

}