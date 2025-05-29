import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AutenticacionService } from '@auth/services/autenticacion.service';

@Component({
  selector: 'barra-navegacion-tienda',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './barra-navegacion-tienda.component.html',
})
export class BarraNavegacionTiendaComponent {

  servicioAutenticacion = inject(AutenticacionService);

}