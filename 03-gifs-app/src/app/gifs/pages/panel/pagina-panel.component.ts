import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuLateralComponent } from "../../components/menu-lateral/menu-lateral.component";

@Component({
  selector: 'pagina-panel',
  imports: [RouterOutlet, MenuLateralComponent],
  templateUrl: './pagina-panel.component.html'
})
export default class PaginaPanelComponent { }