import {AbstractControl} from '@angular/forms';

export function validadorCedula(nombreCampoControl: AbstractControl): { [cedulaInvalida: string]: boolean } | null {
  const noEsUndefined = nombreCampoControl.value !== undefined;
  const noEsCedulaValida = (!validarCedula(nombreCampoControl.value));
  if (noEsUndefined && noEsCedulaValida) {
    return {cedulaInvalida: true}
  } else {
    return null;
  }
}
