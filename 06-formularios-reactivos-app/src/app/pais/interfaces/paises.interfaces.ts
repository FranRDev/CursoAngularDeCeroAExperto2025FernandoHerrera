export interface Pais {
  name: Nombre;
  cca3: string;
  borders: string[];
}

export interface Nombre {
  common: string;
  official: string;
  nativeName: { [key: string]: NombreNativo };
}

export interface NombreNativo {
  official: string;
  common: string;
}