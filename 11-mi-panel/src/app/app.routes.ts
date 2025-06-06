import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'panel',
    loadComponent: () => import('./panel/panel.component'),
    children: [
      {
        path: 'deteccion-cambios',
        title: 'Detección de Cambios',
        loadComponent: () => import('./panel/pages/deteccion-cambios/deteccion-cambios.component')
      },
      {
        path: 'flujo-control',
        title: 'Flujo de Control',
        loadComponent: () => import('./panel/pages/flujo-control/flujo-control.component')
      },
      {
        path: 'opciones-diferir',
        title: 'Opciones Diferir',
        loadComponent: () => import('./panel/pages/opciones-diferir/opciones-diferir.component')
      },
      {
        path: 'transicion-vista-1',
        title: 'Transición de Vista 1',
        loadComponent: () => import('./panel/pages/transicion-vista/transicion-vista-1.component')
      },
      {
        path: 'transicion-vista-2',
        title: 'Transición de Vista 2',
        loadComponent: () => import('./panel/pages/transicion-vista/transicion-vista-2.component')
      },
      {
        path: 'usuario/:id',
        title: 'Usuario',
        loadComponent: () => import('./panel/pages/usuario/usuario.component')
      },
      {
        path: 'usuarios',
        title: 'Usuarios',
        loadComponent: () => import('./panel/pages/usuarios/usuarios.component')
      },
      {
        path: 'vistas-diferir',
        title: 'Vistas Diferir',
        loadComponent: () => import('./panel/pages/vistas-diferir/vistas-diferir.component')
      },
      {
        path: '**',
        redirectTo: 'flujo-control'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'panel'
  }
];