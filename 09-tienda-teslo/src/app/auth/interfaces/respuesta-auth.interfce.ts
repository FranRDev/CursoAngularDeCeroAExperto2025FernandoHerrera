import { User } from "./usuario.interface";

export interface RespuestaAuth {
  user: User;
  token: string;
}