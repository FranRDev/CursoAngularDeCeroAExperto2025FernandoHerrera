import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { TituloComponent } from '@shared/titulo/titulo.component';
import { UsuariosService } from '@services/usuarios.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TituloComponent, RouterLink],
  selector: 'usuarios',
  templateUrl: './usuarios.component.html'
})
export default class UsuariosComponent {

  public servicioUsuarios = inject(UsuariosService);

}