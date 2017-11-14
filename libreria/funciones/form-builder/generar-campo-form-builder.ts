import {Validators} from '@angular/forms';


export function generarCampoFormBuilder(nombreCampo: string,
                                 clase: any) {
  const arregloValidadores: any = [];
  const configuracion = clase[nombreCampo].configuracionFormBuilder;

  Object.keys(configuracion)
    .forEach(propiedadConfiguracion => {
      switch (propiedadConfiguracion) {
        case 'required':
          if (configuracion[propiedadConfiguracion].activado) {
            arregloValidadores.push(Validators.required);
          }
          break;
        case 'email':
          if (configuracion[propiedadConfiguracion].activado) {
            arregloValidadores.push(Validators.email);
          }
          break;
        case 'min':
          if (configuracion[propiedadConfiguracion].activado) {
            arregloValidadores.push(Validators.min(clase[nombreCampo].min.valor));
          }
          break;
        case 'max':
          if (configuracion[propiedadConfiguracion].activado) {
            arregloValidadores.push(Validators.max(clase[nombreCampo].max.valor));
          }
          break;
        case 'minlength':
          if (configuracion[propiedadConfiguracion].activado) {
            arregloValidadores.push(Validators.minLength(clase[nombreCampo].minlength.valor));
          }
          break;
        case 'maxlength':
          if (configuracion[propiedadConfiguracion].activado) {
            arregloValidadores.push(Validators.maxLength(clase[nombreCampo].maxlength.valor));
          }
          break;
        case 'pattern':
          if (configuracion[propiedadConfiguracion].activado) {
            arregloValidadores.push(Validators.pattern(clase[nombreCampo].pattern.valor));
          }
          break;
        default:
          if (configuracion[propiedadConfiguracion].activado) {
            arregloValidadores.push(configuracion[propiedadConfiguracion].funcion);
          }
      }
    });

  return [null, arregloValidadores];

}
