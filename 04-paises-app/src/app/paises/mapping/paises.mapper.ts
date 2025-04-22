import type { ElementoRestCountries } from "../interfaces/rest-countries.interfaces";
import type { Pais } from "../interfaces/paises.interfaces";

export class PaisesMapper {

  static mapearElementoRestCountriesAPais(elemento: ElementoRestCountries): Pais {
    return {
      cca2: elemento.cca2,
      bandera: elemento.flag,
      banderaSvg: elemento.flags.svg,
      nombre: elemento.translations['spa'].common ?? 'Sin nombre español',
      capital: elemento.capital.join(', '),
      poblacion: elemento.population
    }
  }

  static mapearElementosRestCountriesAPaises(elementos: ElementoRestCountries[]): Pais[] {
    return elementos.map(this.mapearElementoRestCountriesAPais);
  }

}