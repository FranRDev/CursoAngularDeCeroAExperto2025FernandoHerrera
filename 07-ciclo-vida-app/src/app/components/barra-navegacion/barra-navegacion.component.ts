import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'barra-navegacion',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './barra-navegacion.component.html',
  styles: `
    nav {
      display: flex;
      gap: 1rem;
      justify-content: center;
      align-items: center;
    }
    .active {
      color: #341162;
      font-weight: bold;
    }
  `
})
export class BarraNavegacionComponent { }