import { Pais } from "../interfaces/paises.interfaces";

import { ElementoRestCountries } from "../interfaces/rest-countries.interfaces";

export class PaisesMapper {

  static mapearElementoRestCountriesAPais(elemento: ElementoRestCountries): Pais {
    return {
      cca2: elemento.cca2,
      bandera: elemento.flag,
      banderaSvg: elemento.flags.svg,
      nombre: elemento.name.common,
      capital: elemento.capital[0],
      poblacion: elemento.population
    }
  }

  static mapearElementosRestCountriesAPaises(elementos: ElementoRestCountries[]): Pais[] {
    return elementos.map(this.mapearElementoRestCountriesAPais);
  }

}