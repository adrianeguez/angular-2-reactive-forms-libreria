import {AbstractControl} from '@angular/forms';
import {validarCedula} from '../funciones/validar-cedula';


export function validadorCedula(nombreCampoControl: AbstractControl): { [rucInvalido: string]: boolean } | null {
  const erroresCampo: any = nombreCampoControl.errors;
  const esUndefined = nombreCampoControl.value === undefined;
  const esNull = nombreCampoControl.value == null;
  if (esUndefined || esNull) {
    return null;
  } else {
    const campoDiezDigitos = nombreCampoControl.value.length === 10;
    if (campoDiezDigitos) {
      if (validarCedula(nombreCampoControl.value)) {
        return null;
      } else {
        return {cedulaValida: true}
      }
    } else {
      return null;
    }
  }
}


//
//
// function validarCedula2(cedula: string): boolean {
//
//   // int codigoProvincia = Integer.parseInt(cedula.substring(0, 2));
//   // if (codigoProvincia >= 1 && codigoProvincia <= 24) {
//   let digito: number;
//   const digito10 = Number(cedula.substring(9));
//   let suma = 0;
//   let multi: number;
//   let cociente: number;
//   let decena: number;
//   let verificador: number;
//
//   let cont = 0;
//   let contPos = 0;
//   while (contPos < 9) {
//     contPos = 2 * cont + 1;
//     digito = Number(cedula.substring(contPos - 1, contPos));
//     multi = digito * 2;
//     if (multi >= 10) {
//       multi = 1 + (multi % 10);
//     }
//     suma += multi;
//     cont++;
//   }
//
//   cont = 1;
//   contPos = 1;
//   while (contPos < 8) {
//     contPos = 2 * cont;
//     digito = Number(cedula.substring(contPos - 1, contPos));
//     suma += digito;
//     cont++;
//   }
//
//   cociente = suma / 10;
//   decena = (cociente + 1) * 10;
//   verificador = decena - suma;
//
//   if (verificador === 10) {
//     verificador = 0;
//   }
//   if (verificador === digito10) {
//     return true;
//   }
//   return false;
// }
