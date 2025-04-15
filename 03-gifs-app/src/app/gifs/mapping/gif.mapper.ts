import type { ElementoGiphy } from "../interfaces/giphy.interfaces";
import type { Gif } from "../interfaces/gif.interface";

export class GifMapper {

  static mapearElementoGiphyAGif(elemento: ElementoGiphy): Gif {
    return {
      id: elemento.id,
      url: elemento.images.original.url,
      titulo: elemento.title
    }
  }

  static mapearElementosGiphyAGifs(elementos: ElementoGiphy[]): Gif[] {
    return elementos.map(this.mapearElementoGiphyAGif);
  }

}