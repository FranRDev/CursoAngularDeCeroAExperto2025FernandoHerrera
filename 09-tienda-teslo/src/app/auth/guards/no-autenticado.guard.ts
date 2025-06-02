import { inject } from '@angular/core';
import { CanMatchFn, Route, Router, UrlSegment } from '@angular/router';
import { AutenticacionService } from '@auth/services/autenticacion.service';
import { firstValueFrom } from 'rxjs';

export const NoAutenticadoGuard: CanMatchFn = async (route: Route, segments: UrlSegment[]) => {
  const servicioAutenticacion = inject(AutenticacionService);
  const enrutador = inject(Router);

  const autenticado = await firstValueFrom(servicioAutenticacion.comprobarEstado());

  if (autenticado) {
    enrutador.navigateByUrl('/');
    return false;
  }

  return true;
}