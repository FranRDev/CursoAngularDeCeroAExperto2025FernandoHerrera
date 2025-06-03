import { Routes } from "@angular/router";

export const rutasAdmin: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/panel-admin/panel-admin.component'),
    children: [
      {
        path: 'productos',
        loadComponent: () => import('./pages/administracion-productos/administracion-productos.component')
      },
      {
        path: 'productos/:id',
        loadComponent: () => import('./pages/administracion-producto/administracion-producto.component')
      },
      {
        path: '**',
        redirectTo: 'productos'
      },
    ]
  }
];

export default rutasAdmin;