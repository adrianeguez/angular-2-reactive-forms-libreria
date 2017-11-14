import {AbstractControl} from '@angular/forms';

export function campoValido(busquedaControl: AbstractControl) {
  const estaTocadoOSucioCampoBusqueda = (busquedaControl.touched || busquedaControl.dirty);
  const tieneErroresCampoBusqueda = busquedaControl.errors;
  return tieneErroresCampoBusqueda && estaTocadoOSucioCampoBusqueda;
}
