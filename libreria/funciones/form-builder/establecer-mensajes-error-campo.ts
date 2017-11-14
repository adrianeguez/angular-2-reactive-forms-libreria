import {AbstractControl} from '@angular/forms';
export function establecerMensajesErrorCampo(busquedaControl: AbstractControl,
                                             mensajesValidacion) {
  const arregloMensajesError = Object
    .keys(busquedaControl.errors)
    .map(key => {
        return mensajesValidacion[key].texto;
      }
    );
  return arregloMensajesError;
}
