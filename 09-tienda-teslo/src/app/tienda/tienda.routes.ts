import { Routes } from '@angular/router';

export const rutasTienda: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/tienda-layout/tienda-layout.component'),
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/pagina-inicio/pagina-inicio.component')
      },
      {
        path: 'genero/:genero',
        loadComponent: () => import('./pages/pagina-genero/pagina-genero.component')
      },
      {
        path: 'producto/:id',
        loadComponent: () => import('./pages/pagina-producto/pagina-producto.component')
      },
      {
        path: '**',
        loadComponent: () => import('./pages/pagina-no-encontrado/pagina-no-encontrado.component')
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

export default rutasTienda;