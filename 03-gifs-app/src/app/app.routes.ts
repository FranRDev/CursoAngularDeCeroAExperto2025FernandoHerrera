import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'panel',
    loadComponent: () => import('./gifs/pages/panel/pagina-panel.component'),
    children: [
      {
        path: 'tendencias',
        loadComponent: () => import('./gifs/pages/tendencias/pagina-tendencias.component')
      },
      {
        path: 'busqueda',
        loadComponent: () => import('./gifs/pages/busqueda/pagina-busqueda.component')
      },
      {
        path: 'historial/:busqueda',
        loadComponent: () => import('./gifs/pages/historial/pagina-historial.component')
      },
      {
        path: '**',
        redirectTo: 'tendencias'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'panel'
  }
];