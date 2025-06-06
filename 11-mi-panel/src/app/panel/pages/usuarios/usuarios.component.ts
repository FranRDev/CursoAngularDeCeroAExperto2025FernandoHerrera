import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { UsuariosService } from '@services/usuarios.service';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  selector: 'usuarios',
  templateUrl: './usuarios.component.html'
})
export default class UsuariosComponent {

  public servicioUsuarios = inject(UsuariosService);

}