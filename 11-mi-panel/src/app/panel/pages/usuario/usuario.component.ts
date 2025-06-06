import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '@interfaces/respuesta-reqres.interface';
import { toSignal } from '@angular/core/rxjs-interop'

import { TituloComponent } from '@shared/titulo/titulo.component';
import { switchMap } from 'rxjs';
import { UsuariosService } from '@services/usuarios.service';

@Component({
  selector: 'app-usuario',
  imports: [TituloComponent],
  template: `
    <titulo titulo="Usuario" />

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

  // constructor() {
  //   console.log(this.rutaActiva.params.subscribe(parametros => console.log(parametros)));
  // }

}