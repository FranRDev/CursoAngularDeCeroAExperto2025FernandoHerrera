import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { UsuariosService } from '@services/usuarios.service';
import { TituloComponent } from '@shared/titulo/titulo.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [TituloComponent, RouterLink],
  selector: 'usuarios',
  templateUrl: './usuarios.component.html'
})
export default class UsuariosComponent {

  public servicioUsuarios = inject(UsuariosService);

}