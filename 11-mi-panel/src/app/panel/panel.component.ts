import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuLateralComponent } from "@shared/menu-lateral/menu-lateral.component";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, MenuLateralComponent],
  selector: 'panel',
  templateUrl: './panel.component.html'
})
export default class PanelComponent { }