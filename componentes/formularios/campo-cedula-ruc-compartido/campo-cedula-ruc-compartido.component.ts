import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CampoCedulaRucClass} from '../../../clases/campo-ruc-cedula-class';
import {encerarFormBuilder} from '../../../funciones/form-builder/encerar-form-builder';
import {AbstractControl, FormBuilder} from '@angular/forms';
import {campoValido} from '../../../funciones/form-builder/campo-valido';
import {establecerMensajesErrorCampo} from '../../../funciones/form-builder/establecer-mensajes-error-campo';
import 'rxjs/add/operator/debounceTime';
import {generarPMessage} from '../../../funciones/form-builder/generar-p-message';
import {RegistroCivilCedulaService} from '../../../servicios/registro.civil.service';
import {imprimirErrores} from '../../../funciones/errores/imprimir-errores';
import {PersonaRucService} from '../../../servicios/persona.service';
import {ERROR_SERVIDOR_DETAIL, ERROR_SERVIDOR_SUMMARY} from '../../../../constantes/mensaje-error-servidor';
import {BUSQUEDA_NO_GENERO_RESULTADOS} from '../../../../constantes/busqueda-no-genero-resultados';
import {DatosCedulaORUC} from '../../../interfaces/datos-cedula-ruc';

@Component({
  selector: 'sri-campo-cedula-ruc-compartido',
  templateUrl: './campo-cedula-ruc-compartido.component.html',
  styleUrls: ['./campo-cedula-ruc-compartido.component.scss']
})
export class CampoCedulaRucCompartidoComponent implements OnInit {
  @Output() cedulaORucValidado: EventEmitter<DatosCedulaORUC> = new EventEmitter();
  @Input() validarRUC: boolean;
  @Input() validarCedula: boolean;

  rucCedula: CampoCedulaRucClass;

  constructor(private _formBuilder: FormBuilder,
              private _registroCivilCedulaService: RegistroCivilCedulaService,
              private _personaRucService: PersonaRucService) {
  }

  ngOnInit() {
    this.rucCedula = new CampoCedulaRucClass(null, this.validarCedula, this.validarRUC);
    this.rucCedula.cedulaRucFormGroup = this._formBuilder.group(encerarFormBuilder(this.rucCedula));
    const inputCedulaRucAbstractControl = this.rucCedula.cedulaRucFormGroup.get(this.rucCedula.mensajesValidacionBusquedaRucCedula.nombreInput);


    inputCedulaRucAbstractControl
      .valueChanges
      .debounceTime(1500)
      .subscribe(
        () => {
          this.validarCedulaRuc(inputCedulaRucAbstractControl)
        });

  }

  validarCedulaRuc(inputCedulaRucAbstractControl: AbstractControl) {
    this.rucCedula
      .mensajesValidacionBusquedaRucCedula
      .mensajes = [];
    if (campoValido(inputCedulaRucAbstractControl)) {
      this.rucCedula
        .mensajesValidacionBusquedaRucCedula
        .mensajes = establecerMensajesErrorCampo(inputCedulaRucAbstractControl, this.rucCedula.mensajesValidacionBusquedaRucCedula);
    } else {
      const cedulaORuc = inputCedulaRucAbstractControl.value;
      const campoTreceDigitos = cedulaORuc.length === 13;
      const campoDiezDigitos = cedulaORuc.length === 10;
      if (campoDiezDigitos) {
        this._registroCivilCedulaService
          .obtenerPorNumeroIdentificacion(cedulaORuc)
          .subscribe(
            ciudadano => {
              if (ciudadano) {
                this.cedulaORucValidado.emit({cedula: ciudadano, ruc: null});
              } else {
                this.rucCedula.mensajesValidacionBusquedaRucCedula.mensajes.push(generarPMessage(BUSQUEDA_NO_GENERO_RESULTADOS))
              }
            },
            error => imprimirErrores(this.rucCedula.mensajesValidacionBusquedaRucCedula.mensajes, error)
          )
      }
      if (campoTreceDigitos) {
        this._personaRucService
          .obtenerPersonaDesdeRucPorIdentificacion(cedulaORuc)
          .subscribe(
            persona => {
              if (persona) {
                this.cedulaORucValidado.emit({cedula: null, ruc: persona});
              } else {
                this.rucCedula.mensajesValidacionBusquedaRucCedula.mensajes.push(generarPMessage(BUSQUEDA_NO_GENERO_RESULTADOS))
              }
            },
            error => {
              if (error.status === 404) {
                this.rucCedula.mensajesValidacionBusquedaRucCedula.mensajes.push(generarPMessage(BUSQUEDA_NO_GENERO_RESULTADOS))
              } else {
                imprimirErrores(this.rucCedula.mensajesValidacionBusquedaRucCedula.mensajes, error, ERROR_SERVIDOR_SUMMARY + ' validando campo')
              }
            }
          )
      }
    }
  }

}

