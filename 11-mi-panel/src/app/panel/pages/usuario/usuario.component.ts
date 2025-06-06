import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop'

import { switchMap } from 'rxjs';

import { TituloComponent } from '@shared/titulo/titulo.component';
import { UsuariosService } from '@services/usuarios.service';

@Component({
  selector: 'usuario',
  imports: [TituloComponent],
  template: `
    <titulo [titulo]="titulo()" />

    @if (usuario()) {
      <section>
        <img [srcset]="usuario()!.avatar" [alt]="usuario()!.first_name" />

        <div>
          <h3>{{ usuario()!.first_name }} {{ usuario()!.last_name }}</h3>
          <p>{{ usuario()!.email }}</p>
        </div>
      </section>
    }
    @else {
      <p>Cargando...</p>
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class UsuarioComponent {

  private rutaActiva = inject(ActivatedRoute);
  private servicioUsuario = inject(UsuariosService);

  // public usuario = signal<User | undefined>(undefined);
  public usuario = toSignal(this.rutaActiva.params.pipe(switchMap(({ id }) => this.servicioUsuario.obtenerUsuarioPorId(id))));

  public titulo = computed(() => {
    let titulo: string = 'Información del usuario';
    if (!this.usuario()) return titulo;
    return `${titulo}: ${this.usuario()!.first_name} ${this.usuario()!.last_name}`
  });

  // constructor() {
  //   console.log(this.rutaActiva.params.subscribe(parametros => console.log(parametros)));
  // }

}