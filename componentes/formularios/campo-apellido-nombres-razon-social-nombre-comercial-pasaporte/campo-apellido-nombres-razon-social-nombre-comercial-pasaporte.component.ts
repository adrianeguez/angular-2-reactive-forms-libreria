import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CampoApellidoNombresRazonSocialNombreComercialPasaporteClass} from '../../../clases/campo-nombre-comercial-pasaporte-apellido-nombres-razon-social-class';
import {AbstractControl, FormBuilder} from '@angular/forms';
import {encerarFormBuilder} from '../../../funciones/form-builder/encerar-form-builder';
import {campoValido} from '../../../funciones/form-builder/campo-valido';
import {establecerMensajesErrorCampo} from '../../../funciones/form-builder/establecer-mensajes-error-campo';
import {DatosApellidoNombreRazonSocialNombreComercialPasaporte} from '../../../interfaces/apellido-nombres-razon-social-nombre-comercial-pasaporte';

@Component({
  selector: 'sri-campo-apellido-nombres-razon-social-nombre-comercial-pasaporte',
  templateUrl: './campo-apellido-nombres-razon-social-nombre-comercial-pasaporte.component.html',
  styleUrls: ['./campo-apellido-nombres-razon-social-nombre-comercial-pasaporte.component.scss']
})
export class CampoApellidoNombresRazonSocialNombreComercialPasaporteComponent implements OnInit {
  @Input() validarApellidosNombres: boolean;
  @Input() validarRazonSocial: boolean;
  @Input() validarNombreComercial: boolean;
  @Input() validarPasaporte: boolean;
  @Output() busquedaValidada: EventEmitter<DatosApellidoNombreRazonSocialNombreComercialPasaporte> = new EventEmitter();

  busqueda: CampoApellidoNombresRazonSocialNombreComercialPasaporteClass;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit() {
    let numeroValidaciones = 0;
    if (this.validarApellidosNombres) {
      numeroValidaciones++;
    }
    if (this.validarRazonSocial) {
      numeroValidaciones++;
    }
    if (this.validarNombreComercial) {
      numeroValidaciones++;
    }
    if (this.validarPasaporte) {
      numeroValidaciones++;
    }
    if (numeroValidaciones > 1) {
      alert('Estas usando mal el componente, utiliza solo un tipo de validación.')
    }
    this.busqueda = new CampoApellidoNombresRazonSocialNombreComercialPasaporteClass(null, this.validarApellidosNombres, this.validarRazonSocial, this.validarNombreComercial, this.validarPasaporte);
    this.busqueda.campoBusquedaFormGroup = this._formBuilder.group(encerarFormBuilder(this.busqueda));
    const busquedaAbstractControl = this.busqueda.campoBusquedaFormGroup.get(this.busqueda.mensajesValidacionBusqueda.nombreInput);
    busquedaAbstractControl
      .valueChanges
      .debounceTime(1500)
      .subscribe(
        () => {
          this.validarBusqueda(busquedaAbstractControl)
        });
  }

  validarBusqueda(inputCedulaRucAbstractControl: AbstractControl) {
    this.busqueda
      .mensajesValidacionBusqueda
      .mensajes = [];
    if (campoValido(inputCedulaRucAbstractControl)) {
      this.busqueda
        .mensajesValidacionBusqueda
        .mensajes = establecerMensajesErrorCampo(inputCedulaRucAbstractControl, this.busqueda.mensajesValidacionBusqueda);
    } else {
      this.busquedaValidada.emit(true);
      // if (this.validarApellidosNombres) {
      // }
      // if (this.validarRazonSocial) {
      // }
      // if (this.validarNombreComercial) {
      // }
      // if (this.validarPasaporte) {
      // }
    }
  }

}
