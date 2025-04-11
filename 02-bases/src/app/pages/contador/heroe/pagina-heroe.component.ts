import { ChangeDetectionStrategy, Component, computed, signal } from "@angular/core";
import { UpperCasePipe } from "@angular/common";

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [UpperCasePipe],
  templateUrl: './pagina-heroe.component.html'
})
export class PaginaHeroeComponent {

  public nombre = signal('Ironman');
  public nombreMayusculas = computed(() => this.nombre().toUpperCase());
  public edad = signal(45);

  public descripcionHeroe = computed(() => {
    const descripcion = `${this.nombre()} - ${this.edad()}`;
    return descripcion;
  });

  public obtenerDescripcion() {
    return `${this.nombre()} - ${this.edad()}`;
  }

  private cambiarNombre(nombre: string) {
    this.nombre.set(nombre);
  }

  public cambiarEdad(edad: number) {
    this.edad.set(edad);
  }

  public cambiarHeroe() {
    this.cambiarNombre('Spiderman');
    this.cambiarEdad(22);
  }

  public restablecer() {
    this.cambiarNombre('Ironman');
    this.cambiarEdad(45);
  }

}