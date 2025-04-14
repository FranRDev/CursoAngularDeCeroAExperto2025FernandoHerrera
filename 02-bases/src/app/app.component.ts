import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { BarraNavegacionComponent } from "./components/shared/barra-navegacion/barra-navegacion.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BarraNavegacionComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'FranRDev';
}