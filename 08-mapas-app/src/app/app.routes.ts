import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'pantalla-completa',
    loadComponent: () => import('./pages/pagina-mapa-pantalla-completa/pagina-mapa-pantalla-completa.component'),
    title: 'Pantalla completa'
  },
  {
    path: 'marcadores',
    loadComponent: () => import('./pages/pagina-marcadores/pagina-marcadores.component'),
    title: 'Marcadores'
  },
  {
    path: 'casas',
    loadComponent: () => import('./pages/pagina-casas/pagina-casas.component')
  },
  {
    path: '**',
    redirectTo: 'pantalla-completa'
  },
];