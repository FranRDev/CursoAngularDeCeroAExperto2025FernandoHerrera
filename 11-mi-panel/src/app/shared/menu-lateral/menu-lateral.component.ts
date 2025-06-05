import { ChangeDetectionStrategy, Component } from '@angular/core';

import { routes } from '../../app.routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'menu-lateral',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './menu-lateral.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuLateralComponent {

    public menu = routes
      .map(ruta => ruta.children ?? [])
      .flat()
      .filter(ruta => ruta && ruta.path !== '**' && !ruta.path?.includes(':'));

  // constructor() {
  //   const rutasMenu = routes
  //     .map(ruta => ruta.children ?? [])
  //     .flat()
  //     .filter(ruta => ruta && ruta.path !== '**' && !ruta.path?.includes(':'));

  //   console.log(rutasMenu);
  // }

}