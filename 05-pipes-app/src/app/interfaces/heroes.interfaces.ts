export enum Color {
  rojo,
  negro,
  azul,
  verde
}

export enum Creador {
  DC,
  Marvel
}

export interface Heroe {
  id: number;
  nombre: string;
  vuela: boolean;
  color: Color;
  creador: Creador;
}

export const MapaColores = {
  [Color.rojo]: '#E57373',
  [Color.negro]: '#424242',
  [Color.azul]: '#64B5F6',
  [Color.verde]: '#81C784',
};