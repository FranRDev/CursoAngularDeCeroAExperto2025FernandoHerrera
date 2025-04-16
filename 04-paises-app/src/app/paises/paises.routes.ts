import { Routes } from "@angular/router";

import { PaginaPorCapitalComponent } from "./pages/por-capital/pagina-por-capital.component";
import { LayoutPaisesComponent } from "./layouts/layout-paises/layout-paises.component";

export const PaisesRoutes: Routes = [
  {
    path: '',
    component: LayoutPaisesComponent,
    children: [
      {
        path: 'por-capital',
        component: PaginaPorCapitalComponent
      },
      {
        path: '**',
        redirectTo: 'por-capital'
      }
    ]
  }
];

export default PaisesRoutes;