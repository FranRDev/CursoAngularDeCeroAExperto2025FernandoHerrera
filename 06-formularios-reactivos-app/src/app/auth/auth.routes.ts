import { Routes } from "@angular/router";

import { PaginaRegistroComponent } from "./pages/pagina-registro/pagina-registro.component";

export const rutasAuenticacion: Routes = [
  {
    path: '',
    children: [
      {
        path: 'registro',
        component: PaginaRegistroComponent
      },
      {
        path: '**',
        redirectTo: 'registro'
      }
    ]
  }
]