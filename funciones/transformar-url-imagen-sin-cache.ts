import {ItemMenuSri} from '../interfaces/item-menu-sri';
import {QUITAR_CACHE_IMAGENES} from '../../constantes/quitar-cache-imagenes';

export function transformarUrlImagenSinCache(menu: ItemMenuSri[]) {
  return menu.map(
    (menuItem) => {
      menuItem.urlImagen = menuItem.urlImagen + QUITAR_CACHE_IMAGENES;
      return menuItem;
    }
  );

}
