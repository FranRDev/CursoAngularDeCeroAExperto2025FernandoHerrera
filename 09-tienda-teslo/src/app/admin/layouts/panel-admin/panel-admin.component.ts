import { Component, computed, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { AutenticacionService } from '@auth/services/autenticacion.service';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'panel-admin',
  templateUrl: './panel-admin.component.html',
})
export default class PanelAdminComponent {

  servicioAutenticacion = inject(AutenticacionService);
  usuario = computed(() => this.servicioAutenticacion.usuario());

}