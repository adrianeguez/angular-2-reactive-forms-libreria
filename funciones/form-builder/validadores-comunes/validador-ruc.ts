import {AbstractControl} from '@angular/forms';
import {validarRuc} from '../../validaciones/validar-ruc';

export function validadorRuc(nombreCampoControl: AbstractControl): { [rucInvalido: string]: boolean } | null {
  const noEsUndefined = nombreCampoControl.value !== undefined;
  const noEsRucValida = (!validarRuc(nombreCampoControl.value));
  if (noEsUndefined && noEsRucValida) {
    return {rucInvalido: true}
  } else {
    return null;
  }
}
