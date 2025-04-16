import { Routes } from "@angular/router";

import { LayoutPaisesComponent } from "./layouts/layout-paises/layout-paises.component";

export const PaisesRoutes: Routes = [
  {
    path: '',
    component: LayoutPaisesComponent,
    children: [
      {
        path: 'por-capital',
        loadComponent: () => import('./pages/por-capital/pagina-por-capital.component')
      },
      {
        path: 'por-pais',
        loadComponent: () => import('./pages/por-pais/pagina-por-pais.component')
      },
      {
        path: 'por-region',
        loadComponent: () => import('./pages/por-region/pagina-por-region.component')
      },
      {
        path: 'por/:codigo',
        loadComponent: () => import('./pages/pais/pagina-pais.component')
      },
      {
        path: '**',
        redirectTo: 'por-capital'
      }
    ]
  }
];

export default PaisesRoutes;