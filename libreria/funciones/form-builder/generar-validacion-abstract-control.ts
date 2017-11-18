import {validarAbstractControl} from './validar-abstract-control';

export function generarValidacionAbstractControl(clase: any, nombreCampo: string, configuracion: any) {
  const nombreMensajeValidacion = 'mensajesValidacion' + nombreCampo;
  const inputAbstractControl = clase.formGroup.get(clase[nombreMensajeValidacion].nombreInput);
  inputAbstractControl
    .valueChanges
    .subscribe(
      () => {
        if (configuracion[nombreCampo].calculoFormulario) {
          configuracion[nombreCampo].calculoFormulario(clase);
        }
        validarAbstractControl(inputAbstractControl, nombreCampo, clase);
      });
}
