import {AbstractControl, FormGroup} from '@angular/forms';
import {ObjetoMensajeValidacionInterfaz} from '../interfaces/objeto-mensajes-validacion';
import {MensajeValidacionInterfaz} from '../interfaces/mensaje-validacion';
import {establecerMensajesDeValidacionComunes} from '../funciones/form-builder/generar-mensajes-de-validacion-comunes';
import {establecerObjetoValidacionPersonalizado} from '../funciones/form-builder/establecer-objeto-validacion-personalizado';
import {ConfiguracionFormBuilder} from '../interfaces/configuracion-form-builder';
import {encerarConfiguracionFormBuilder} from '../funciones/form-builder/encerar-configuracion-form-builder';
import {ObjetoConfiguracion} from '../interfaces/objeto-configuracion ';
import {ItemObjetoConfiguracion} from '../interfaces/item-objeto-configuracion';
import {validadorCedulaORuc} from '../funciones/form-builder/validadores-comunes/validador-cedula-ruc';

export class CampoApellidoNombresRazonSocialNombreComercialPasaporteClass {
  esValido = false;
  estaCargando = false;
  campoBusquedaFormGroup: FormGroup;
  mensajesValidacionBusqueda: MensajesValidacionBusqueda;

  constructor(public busqueda?: string,
              public validarApellidosNombres = false,
              public validarRazonSocial = false,
              public validarNombreComercial = false,
              public validarPasaporte = false) {
    this.establecerMensajesValidacionBusqueda();
  }

  private establecerMensajesValidacionBusqueda() {
    console.log('Solo use uno de los tipos de validacion, no use multiples validaciones.');
    const nombreInput = 'busqueda';
    let nombreAPresentarse = 'Apellidos y Nombres';
    let tooltip = 'EJ: Adrian Eguez';
    let title = 'Apellidos y nombres del contribuyente';
    let minlength = 3;
    let maxlength = 100;
    if (this.validarApellidosNombres) {
      this.mensajesValidacionBusqueda = establecerMensajesDeValidacionComunes(nombreInput,
        nombreAPresentarse,
        tooltip,
        title,
        minlength,
        maxlength);
    }
    if (this.validarRazonSocial) {
      nombreAPresentarse = 'Razón Social';
      tooltip = 'EJ: Servicio de Rentas Internas';
      title = 'Razón social';
      minlength = 3;
      maxlength = 1200;
      this.mensajesValidacionBusqueda = establecerMensajesDeValidacionComunes(nombreInput,
        nombreAPresentarse,
        tooltip,
        title,
        minlength,
        maxlength);
    }
    if (this.validarNombreComercial) {
      nombreAPresentarse = 'Nombre Comercial';
      tooltip = 'EJ: SRI';
      title = 'Nombre Comercial';
      minlength = 3;
      maxlength = 80;
      this.mensajesValidacionBusqueda = establecerMensajesDeValidacionComunes(nombreInput,
        nombreAPresentarse,
        tooltip,
        title,
        minlength,
        maxlength);
    }
    if (this.validarPasaporte) {
      nombreAPresentarse = 'Pasaporte';
      tooltip = 'EJ: ABCD1234';
      title = 'Pasaporte';
      minlength = 3;
      maxlength = 30;
      this.mensajesValidacionBusqueda = establecerMensajesDeValidacionComunes(nombreInput,
        nombreAPresentarse,
        tooltip,
        title,
        minlength,
        maxlength);
    }
    this.mensajesValidacionBusqueda
      .configuracionFormBuilder = {
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
      }
    };
  }
}


interface MensajesValidacionBusqueda extends ObjetoMensajeValidacionInterfaz {
  configuracionFormBuilder: ObjetoConfiguracion;
}
