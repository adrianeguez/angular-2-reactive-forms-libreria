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
                                                      mask?: any,
                                                      eliminarMascara?: (...parametros) => any,
                                                      minLengthParametro?: number,
                                                      maxLengthParametro?: number,
                                                      minParametro?: number,
                                                      maxParametro?: number,
                                                      pattern?: string,
                                                      patternMensaje?: string,
                                                      disabled = false): any {
    let objeto: ObjetoMensajeValidacionInterfaz = {
        mensajes: [],
        tooltip,
        nombreInput,
        title,
        disabled,
        nombreAPresentarse,
        mask,
        eliminarMascara
    };
    objeto = establecerObjetoValidacionRequired(objeto, nombreAPresentarse);
    objeto = establecerObjetoValidacionEmail(objeto, nombreAPresentarse);
    objeto = establecerObjetoValidacionMinLength(objeto, nombreAPresentarse, minLengthParametro);
    objeto = establecerObjetoValidacionMaxLength(objeto, nombreAPresentarse, maxLengthParametro);
    objeto = establecerObjetoValidacionMin(objeto, nombreAPresentarse, minParametro);
    objeto = establecerObjetoValidacionMax(objeto, nombreAPresentarse, maxParametro);
    objeto = establecerObjetoValidacionPattern(objeto, pattern, nombreAPresentarse, patternMensaje);
    return objeto;
}



