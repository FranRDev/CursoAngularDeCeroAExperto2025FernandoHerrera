import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

import { Pais } from '../../interfaces/paises.interfaces';
import { PaisesService } from '../../services/paises.service';

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

}