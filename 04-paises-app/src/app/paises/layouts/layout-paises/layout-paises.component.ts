import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuSuperiorComponent } from "../../components/menu-superior/menu-superior.component";

@Component({
  selector: 'layout-paises',
  imports: [RouterOutlet, MenuSuperiorComponent],
  templateUrl: './layout-paises.component.html',
})
export class LayoutPaisesComponent { }