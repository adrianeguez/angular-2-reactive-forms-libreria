import {establecerObjetoValidacionRequired} from './establecer-objeto-validacion-requerido';
import {establecerObjetoValidacionMinLength} from './establecer-objeto-validacion-min-length';
import {establecerObjetoValidacionMaxLength} from './establecer-objeto-validacion-max-length';
import {establecerObjetoValidacionPattern} from './establecer-objeto-validacion-pattern';
import {ObjetoMensajeValidacionInterfaz} from '../../interfaces/objeto-mensajes-validacion';
import {establecerObjetoValidacionMin} from './establecer-objeto-validacion-min';
import {establecerObjetoValidacionMax} from './establecer-objeto-validacion-max';
import {establecerObjetoValidacionEmail} from './establecer-objeto-validacion-email';

export function establecerMensajesDeValidacionComunes(nombreInput: string,
                                                      nombreAPresentarse: string,
                                                      tooltip?: string,
                                                      title?: string,
                                                      minLengthParametro?: number,
                                                      maxLengthParametro?: number,
                                                      minParametro?: number,
                                                      maxParametro?: number,
                                                      pattern?: string): any {
  const minLength = minLengthParametro ? minLengthParametro : 3;
  const maxLength = maxLengthParametro ? maxLengthParametro : 255;
  let objeto: ObjetoMensajeValidacionInterfaz = {
    mensajes: [],
    tooltip,
    nombreInput,
    title
  };
  objeto = establecerObjetoValidacionRequired(objeto, nombreAPresentarse);
  objeto = establecerObjetoValidacionEmail(objeto, nombreAPresentarse);
  objeto = establecerObjetoValidacionMinLength(objeto, nombreAPresentarse, minLength);
  objeto = establecerObjetoValidacionMaxLength(objeto, nombreAPresentarse, maxLength);
  objeto = establecerObjetoValidacionMin(objeto, nombreAPresentarse, minParametro);
  objeto = establecerObjetoValidacionMax(objeto, nombreAPresentarse, maxParametro);
  objeto = establecerObjetoValidacionPattern(objeto, pattern, nombreAPresentarse);
  return objeto;
}

