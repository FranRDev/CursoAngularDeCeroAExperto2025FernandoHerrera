import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MenuLateralComponent } from "./shared/components/menu-lateral/menu-lateral.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuLateralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'formularios-reactivos-app';
}