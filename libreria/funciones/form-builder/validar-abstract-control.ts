import {AbstractControl} from '@angular/forms';
import {campoValido} from './campo-valido';
import {establecerMensajesErrorCampo} from './establecer-mensajes-error-campo';

export function validarAbstractControl(inputNombreAbstractControl: AbstractControl,
                                       nombreCampo: string,
                                       clase: any) {
  const nombreMensajeValidacion = 'mensajesValidacion' + nombreCampo;
  clase[nombreMensajeValidacion]
    .mensajes = [];
  if (campoValido(inputNombreAbstractControl)) {
    clase[nombreMensajeValidacion]
      .mensajes = establecerMensajesErrorCampo(inputNombreAbstractControl, clase[nombreMensajeValidacion]);
  }
}
