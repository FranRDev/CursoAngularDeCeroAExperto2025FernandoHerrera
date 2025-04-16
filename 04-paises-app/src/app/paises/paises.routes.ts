import { Routes } from "@angular/router";

import { PaginaPorCapitalComponent } from "./pages/por-capital/pagina-por-capital.component";

export const PaisesRoutes: Routes = [
  {
    path: '',
    component: PaginaPorCapitalComponent
  }
];

export default PaisesRoutes;