import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'panel',
    loadComponent: () => import('./gifs/pages/panel/panel.component')
  },
  {
    path: 'tendencias',
    loadComponent: () => import('./gifs/pages/tendencias/tendencias.component')
  },
  {
    path: 'busqueda',
    loadComponent: () => import('./gifs/pages/busqueda/busqueda.component')
  },
  {
    path: '**',
    redirectTo: 'panel'
  }
];