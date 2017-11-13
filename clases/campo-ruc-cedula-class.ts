import {AbstractControl, FormGroup} from '@angular/forms';
import {ObjetoMensajeValidacionInterfaz} from '../interfaces/objeto-mensajes-validacion';
import {MensajeValidacionInterfaz} from '../interfaces/mensaje-validacion';
import {establecerMensajesDeValidacionComunes} from '../funciones/form-builder/generar-mensajes-de-validacion-comunes';
import {establecerObjetoValidacionPersonalizado} from '../funciones/form-builder/establecer-objeto-validacion-personalizado';
import {ConfiguracionFormBuilder} from '../interfaces/configuracion-form-builder';
import {encerarConfiguracionFormBuilder} from '../funciones/form-builder/encerar-configuracion-form-builder';
import {validadorCedula} from '../funciones/form-builder/validadores-comunes/validador-cedula';
import {validadorRuc} from '../funciones/form-builder/validadores-comunes/validador-ruc';
import {ObjetoConfiguracion} from '../interfaces/objeto-configuracion ';
import {ItemObjetoConfiguracion} from '../interfaces/item-objeto-configuracion';

export class CampoCedulaRucClass {
  esValido = false;
  estaCargando = false;
  campoRucCedulaFormulario: FormGroup;
  mensajesValidacionBusquedaRucCedula: MensajesValidacionCedulaRuc;
  configuracionFormBuilder: ConfiguracionFormBuilder;
  validaciones: { [nombreValidador: string]: boolean } | null[];
  constructor(public busquedaCedulaRuc?: string) {
    this.establecerMensajesValidacionBusquedaRucCedula();
  }
  private establecerMensajesValidacionBusquedaRucCedula(){
    this.mensajesValidacionBusquedaRucCedula = establecerMensajesDeValidacionComunes('busquedaRucCedula', 'Cédula / RUC',
      'EJ: 1700000000001',
      10,
      13);
    establecerObjetoValidacionPersonalizado(this.mensajesValidacionBusquedaRucCedula,
      false,
      'rucValido',
      'Cédula / RUC');
    establecerObjetoValidacionPersonalizado(this.mensajesValidacionBusquedaRucCedula,
      false,
      'cedulaValida',
      'Cédula / RUC');
    this.mensajesValidacionBusquedaRucCedula.configuracionFormBuilder = {
      required: {
        activado: true
      },
      email: {
        activado: false
      },
      min: {
        activado: false
      },
      max: {
        activado: false
      },
      minlength: {
        activado: true
      },
      maxlength: {
        activado: true
      },
      pattern: {
        activado: false
      },
      cedulaValida: {
        activado: false,
        funcion: validadorCedula
      },
      rucValido: {
        activado: false,
        funcion: validadorRuc
      },
    };
  }
}

interface MensajesValidacionCedulaRuc extends ObjetoMensajeValidacionInterfaz {
  esRucValido?: MensajeValidacionInterfaz;
  esCedulaValido?: MensajeValidacionInterfaz;
  configuracionFormBuilder: ObjetoConfiguracionCedulaRuc;
}

interface ObjetoConfiguracionCedulaRuc extends ObjetoConfiguracion {
  cedulaValida?: ItemObjetoConfiguracion;
  rucValido?: ItemObjetoConfiguracion;
}
