import {escucharCambiosEnElCampo} from './escuchar-cambios-en-el-campo';

export function escucharCambios(formulario, debounceTime: number) {

  console.log('this', this);

  let arregloCampos: any = Object.keys(formulario.formGroup.controls);

  arregloCampos = arregloCampos.map(
    (valor) => {
      return {
        nombreCampo: valor
      };
    }
  );

  arregloCampos.forEach((objeto) => {
    escucharCambiosEnElCampo(
      formulario.formGroup,
      objeto,
      formulario[objeto.nombreCampo],
      debounceTime);
  });
}
