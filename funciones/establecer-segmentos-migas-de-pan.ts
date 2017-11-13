import {ItemMenuSri} from '../interfaces/item-menu-sri';
import {MigasPanObjeto} from '../interfaces/migas-pan-objeto';

export function establecerSegmentosMigasDePan(menuSri: ItemMenuSri[], urlActual: string): MigasPanObjeto {
  let itemEncontrado = {
    nombrePrimerNivel: undefined,
    nombreSegundoNivel: undefined,
    nombreTercerNivel: undefined,
    url: undefined
  };
  menuSri.find(
    (itemPrimerNivel) => {
      const existenItems = itemPrimerNivel.items;
      if (existenItems) {
        itemPrimerNivel.items.find(
          (itemSegundoNivel) => {
            const esConsultaAngularSegundoNivel = itemSegundoNivel.urlNavegacion && itemSegundoNivel.esLegado === 'NO';
            let noTieneItems;
            if (itemSegundoNivel.items) {
              noTieneItems = itemSegundoNivel.items.length === 0;
            }

            if (esConsultaAngularSegundoNivel && noTieneItems) {
              const urlComunSegundoNivel = transformarUrlNavegacionUrlComun(itemSegundoNivel.urlNavegacion);
              const urlEstaEnSegundoNivel = urlActual.includes(urlComunSegundoNivel);
              if (urlEstaEnSegundoNivel) {
                itemEncontrado = construirItemEncontrado(itemPrimerNivel, itemSegundoNivel);
                return true;
              }
            } else {
              if (noTieneItems) {
                return false;
              } else {
                itemSegundoNivel.items.find(
                  (itemTercerNivel) => {
                    const esConsultaAngularTercerNivel = itemTercerNivel.urlNavegacion && itemTercerNivel.esLegado === 'NO';
                    if (esConsultaAngularTercerNivel) {
                      const urlComunSegundoNivel = transformarUrlNavegacionUrlComun(itemTercerNivel.urlNavegacion);
                      const urlEstaEnTercerNivel = urlActual.includes(urlComunSegundoNivel);
                      if (urlEstaEnTercerNivel) {
                        itemEncontrado = construirItemEncontrado(itemPrimerNivel, itemSegundoNivel, itemTercerNivel);
                        return true;
                      }
                    } else {
                      return false;
                    }
                  });
              }
            }
          });
      } else {
        return false;
      }
    });
  return itemEncontrado;
}

function transformarUrlNavegacionUrlComun(url: string): string {
  const urlSinComillasDobles = reemplazarRecursivamente('"', '', url);
  const urlSinComas = reemplazarRecursivamente(',', '/', urlSinComillasDobles);
  const urlSinSinCorcheteInicial = reemplazarRecursivamente('[', '', urlSinComas);
  const urlComun = reemplazarRecursivamente(']', '', urlSinSinCorcheteInicial);
  return urlComun;
};

function reemplazarRecursivamente(caracterAReemplazar: string, reemplazo: string, cadenaString: string): string {
  const cadenaReemplazada = cadenaString.replace(caracterAReemplazar, reemplazo);
  if (cadenaReemplazada === cadenaString) {
    return cadenaReemplazada;
  } else {
    return reemplazarRecursivamente(caracterAReemplazar, reemplazo, cadenaReemplazada);
  }
};

function construirItemEncontrado(itemPrimerNivel: ItemMenuSri, itemSegundoNivel: ItemMenuSri, itemTercerNivel?: ItemMenuSri): MigasPanObjeto {
  return {
    nombrePrimerNivel: itemPrimerNivel.nombre,
    nombreSegundoNivel: itemSegundoNivel.nombre,
    nombreTercerNivel: itemTercerNivel ? itemTercerNivel.nombre : undefined,
    url: '["/consulta","' + itemPrimerNivel.codigo + '"]'
  };
}
