import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { rutasReactivo } from '../../../reactivo/reactivo.routes';

interface ElementoMenu {
  titulo: string;
  ruta: string;
}

const elementosReactivo = rutasReactivo[0].children ?? [];

@Component({
  selector: 'menu-lateral',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-lateral.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLateralComponent {

  menuReactivo: ElementoMenu[] = elementosReactivo
    .filter(elemento => elemento.path !== '**')
    .map(elemento => ({
      titulo: `${elemento.title}`,
      ruta: `reactivos/${elemento.path}`
    }));

  menuAutenticacion: ElementoMenu[] = [
    {
      titulo: 'Registro',
      ruta: './autenticacion'
    }
  ];

  menuPais: ElementoMenu[] = [
    {
      titulo: 'Países',
      ruta: './pais'
    }
  ];

}