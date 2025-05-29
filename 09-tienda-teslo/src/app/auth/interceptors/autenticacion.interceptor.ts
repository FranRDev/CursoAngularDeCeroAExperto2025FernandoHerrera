import { HttpEvent, HttpHandlerFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { AutenticacionService } from "@auth/services/autenticacion.service";

import { Observable } from "rxjs";

export function autenticacionInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const token = inject(AutenticacionService).token();
  console.log({ token });
  return next(req.clone({ headers: req.headers.append('Authorization', `Bearer ${token}`) }));
}