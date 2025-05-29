import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AutenticacionService } from '@auth/services/autenticacion.service';

@Component({
  imports: [RouterLink, ReactiveFormsModule],
  selector: 'pagina-iniciar-sesion',
  templateUrl: './pagina-iniciar-sesion.component.html'
})
export default class PaginaIniciarSesionComponent {

  servicioAutenticacion = inject(AutenticacionService);

  fb = inject(FormBuilder);
  tieneError = signal(false);
  estaPublicando = signal(false);
  enrutador = inject(Router)

  formulario = this.fb.group({
    correo: ['', [Validators.required, Validators.email]],
    clave: ['', [Validators.required, Validators.minLength(6)]]
  });

  enviar() {
    if (this.formulario.invalid) {
      this.tieneError.set(true);

      setTimeout(() => {
        this.tieneError.set(false);
      }, 2000);

      return;
    }

    const { correo, clave } = this.formulario.value;

    this.servicioAutenticacion.iniciarSesion(correo!, clave!).subscribe(autenticado => {
      if (autenticado) {
        this.enrutador.navigateByUrl('/');
        return;
      }

      setTimeout(() => {
        this.tieneError.set(false);
      }, 2000);

      return;
    });
  }

}