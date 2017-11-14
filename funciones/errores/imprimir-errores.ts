import {generarPMessage} from '../form-builder/generar-p-message';
import {ERROR_SERVIDOR_DETAIL, ERROR_SERVIDOR_SUMMARY} from '../../../constantes/mensaje-error-servidor';

export function imprimirErrores(arregloErrores,
                                error: string,
                                titulo = ERROR_SERVIDOR_SUMMARY,
                                detalle = ERROR_SERVIDOR_DETAIL,
                                tipo = 'error') {
  console.log('Error', error);
  arregloErrores.push(generarPMessage(detalle, titulo, tipo))
}

// error => imprimirErrores(this._toasterService, error)
