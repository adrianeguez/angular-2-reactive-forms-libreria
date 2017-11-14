import {AbstractControl} from '@angular/forms';
import {generarPMessage} from './generar-p-message';

export function establecerMensajesErrorCampo(busquedaControl: AbstractControl,
                                             mensajesValidacion) {
  const arregloMensajesError = Object
    .keys(busquedaControl.errors)
    .map(key => {
        return generarPMessage(mensajesValidacion[key].texto);
      }
    );
  return arregloMensajesError;
}
