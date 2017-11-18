import {Component, OnInit} from '@angular/core';
import {CampoCedulaClass} from '../../../clases/campo-ruc-cedula-class';
import {encerarFormBuilder} from '../../../../libreria/funciones/form-builder/encerar-form-builder';
import {AbstractControl, FormBuilder} from '@angular/forms';
import {campoValido} from '../../../../libreria/funciones/form-builder/campo-valido';
import {establecerMensajesErrorCampo} from '../../../../libreria/funciones/form-builder/establecer-mensajes-error-campo';

@Component({
  selector: 'sri-campo-cedula-formulario',
  templateUrl: './campo-cedula-formulario.component.html',
  styleUrls: ['./campo-cedula-formulario.component.scss']
})
export class CampoCedulaFormularioComponent implements OnInit {
  cedula: CampoCedulaClass;

  constructor(private _formBuilder: FormBuilder,) {
  }

  ngOnInit() {
    this.cedula = new CampoCedulaClass();
    this.cedula.campoCedulaFormGroup = this._formBuilder.group(encerarFormBuilder(this.cedula));

    const inputCedulaAbstractControl = this.cedula.campoCedulaFormGroup.get(this.cedula.mensajesValidacionBusquedaCedula.nombreInput);
    inputCedulaAbstractControl
      .valueChanges
      .subscribe(
        () => {
          this.validarCedulaRuc(inputCedulaAbstractControl)
        });
  }

  validarCedulaRuc(inputCedulaAbstractControl: AbstractControl) {
    this.cedula
      .mensajesValidacionBusquedaCedula
      .mensajes = [];
    if (campoValido(inputCedulaAbstractControl)) {
      this.cedula
        .mensajesValidacionBusquedaCedula
        .mensajes = establecerMensajesErrorCampo(inputCedulaAbstractControl, this.cedula.mensajesValidacionBusquedaCedula);
    } else {
      // Hacer validaciones asincronas o
      // seguir con la lógica de negocio.
    }
  }

}
