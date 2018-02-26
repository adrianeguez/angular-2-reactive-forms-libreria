import {AbstractControl, FormGroup} from '@angular/forms';
import {CampoFormulario} from './campo-formulario';

export function escucharCambiosEnElCampo(formulario: FormGroup,
                                  objetoValidacion: ObjetoValidacion,
                                  campoFormulario: CampoFormulario,
                                  debounceTime: number) {
  const campoControl: AbstractControl = formulario
    .get(objetoValidacion.nombreCampo);

  campoControl
    .valueChanges
    .debounceTime(debounceTime)
    .subscribe(
      (valor: string) => {
        console.log('this en la segunda funcion valuechange', this);
        campoFormulario.arregloMensajesError = [];
        campoFormulario.estaValido = false;
        if (campoControl.valid) {
          campoFormulario.estaValido = true;
        } else {
          if (campoControl.errors) {
            console.log('Entro a los errores');
            // Validaciones locales
            const arregloNombreErrores = Object.keys(campoControl.errors);
            arregloNombreErrores.forEach((nombreError: any) => {
                campoFormulario.arregloMensajesError.push(
                  {
                    detail: campoFormulario.errores[nombreError](),
                    severity: 'warn'
                  }
                );
              }
            );
          }
        }
      }
    );
  campoControl
    .statusChanges
    .debounceTime(debounceTime + 1)
    .subscribe((statusActual) => {
      if (!campoControl.errors) {
        campoFormulario.estaValido = false;
        if (statusActual === 'VALID') {
          campoFormulario.estaValido = true;
        }
      } else {
        campoFormulario.arregloMensajesError = [];
        campoFormulario.estaValido = false;
        const arregloNombreErrores = Object.keys(campoControl.errors);

        arregloNombreErrores.forEach((nombreError: any) => {
              campoFormulario.arregloMensajesError.push(campoFormulario.errores[nombreError]());
          }
        );
      }
    });
}

export interface ObjetoValidacion {
  nombreCampo: string;
}
