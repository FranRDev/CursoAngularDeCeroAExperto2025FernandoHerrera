import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { PieComponent } from "./shared/components/pie/pie.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PieComponent],
  templateUrl: './app.component.html'
})
export class AppComponent { }