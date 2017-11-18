import {generarValidacionAbstractControl} from './generar-validacion-abstract-control';

export function generarMensajesFormGroup(configuracion: any, clase: any) {
  Object.keys(configuracion)
    .map(
      propiedadConfiguracion => {
        generarValidacionAbstractControl(clase, propiedadConfiguracion, configuracion);
      }
    );
}

