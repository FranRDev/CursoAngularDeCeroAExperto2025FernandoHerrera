import { Routes } from "@angular/router";

export const rutasAuteticacion: Routes = [
  {
    path: '',
    loadComponent: () => import('./layouts/layout-autenticacion/layout-autenticacion.component'),
    children: [
      {
        path: 'iniciar-sesion',
        loadComponent: () => import('./pages/pagina-iniciar-sesion/pagina-iniciar-sesion.component')
      },
      {
        path: 'registro',
        loadComponent: () => import('./pages/pagina-registro/pagina-registro.component')
      },
      {
        path: '**',
        redirectTo: 'iniciar-sesion'
      }
    ]
  }
];

export default rutasAuteticacion;