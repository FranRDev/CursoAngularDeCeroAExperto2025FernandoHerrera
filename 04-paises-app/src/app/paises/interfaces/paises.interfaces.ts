export interface Pais {
  cca2: string;
  bandera: string;
  banderaSvg: string;
  nombre: string;
  capital: string;
  poblacion: number;
  region: string;
  subregion: string;
}

export type Region =
  | 'Africa'
  | 'Americas'
  | 'Asia'
  | 'Europe'
  | 'Oceania'
  | 'Antarctic';