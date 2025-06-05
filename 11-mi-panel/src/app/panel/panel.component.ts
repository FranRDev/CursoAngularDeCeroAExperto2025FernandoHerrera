import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuLateralComponent } from "../shared/menu-lateral/menu-lateral.component";
import { routes } from '../app.routes';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MenuLateralComponent],
  selector: 'panel',
  templateUrl: './panel.component.html'
})
export default class PanelComponent {

    public rutasMenu = routes
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