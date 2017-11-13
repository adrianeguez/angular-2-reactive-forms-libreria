import {generarCampoFormBuilder} from './generar-campo-form-builder';

export function encerarFormBuilder(clase: any) {
  const formBuilder: any = {};
  Object.keys(clase)
    .map((nombrePropiedad) => {
      if (nombrePropiedad.includes('mensajesValidacion')) {
        formBuilder[nombrePropiedad] = generarCampoFormBuilder(nombrePropiedad, clase);
      }
      return nombrePropiedad;
    });
  return formBuilder;
}



