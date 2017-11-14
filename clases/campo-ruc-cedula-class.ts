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

export class CampoCedulaRucClass {
  esValido = false;
  estaCargando = false;
  cedulaRucFormGroup: FormGroup;
  mensajesValidacionBusquedaRucCedula: MensajesValidacionCedulaRuc;

  constructor(public busquedaCedulaRuc?: string,
              public validarCedula = false,
              public validarRUC = false) {
    this.establecerMensajesValidacionBusquedaRucCedula();
  }

  private establecerMensajesValidacionBusquedaRucCedula() {
    if (!this.validarCedula && !this.validarRUC) {
      this.validarCedula = true;
      this.validarRUC = true;
    }
    let nombreAPresentarse = 'Cédula / RUC';
    let tooltip = 'EJ: 1700000001 / 1700000000001';
    let minlength = 10;
    let maxlength = 13;
    if (this.validarRUC && !(this.validarCedula)) {
      tooltip = 'EJ: 1700000000001';
      nombreAPresentarse = 'RUC';
      minlength = 13;
      this.mensajesValidacionBusquedaRucCedula = establecerMensajesDeValidacionComunes('busquedaRucCedula',
        nombreAPresentarse,
        tooltip,
        'Número del registro único de contribuyente',
        minlength,
        maxlength);
      establecerObjetoValidacionPersonalizado(this.mensajesValidacionBusquedaRucCedula,
        false,
        'rucValido',
        nombreAPresentarse,
        'El RUC no cumple con el formato.');

    }
    if (this.validarCedula && !(this.validarRUC)) {
      nombreAPresentarse = 'Cédula';
      maxlength = 10;
      tooltip = 'EJ: 1700000001';
      this.mensajesValidacionBusquedaRucCedula = establecerMensajesDeValidacionComunes('busquedaRucCedula',
        nombreAPresentarse,
        tooltip,
        'Número del registro único de contribuyente',
        minlength,
        maxlength);
      establecerObjetoValidacionPersonalizado(this.mensajesValidacionBusquedaRucCedula,
        false,
        'cedulaValida',
        nombreAPresentarse,
        'La cédula no cumple con el formato.');
    }


    if (this.validarCedula && this.validarCedula) {
      this.mensajesValidacionBusquedaRucCedula = establecerMensajesDeValidacionComunes('busquedaRucCedula',
        nombreAPresentarse,
        tooltip,
        'Número del registro único de contribuyente',
        minlength,
        maxlength);
      establecerObjetoValidacionPersonalizado(this.mensajesValidacionBusquedaRucCedula,
        false,
        'cedulaValida',
        nombreAPresentarse,
        'La cédula no cumple con el formato.');
      establecerObjetoValidacionPersonalizado(this.mensajesValidacionBusquedaRucCedula,
        false,
        'rucValido',
        nombreAPresentarse,
        'El RUC no cumple con el formato.');
      establecerObjetoValidacionPersonalizado(this.mensajesValidacionBusquedaRucCedula,
        false,
        'noEsCedulaNiRuc',
        nombreAPresentarse,
        'La cédula o RUC debe tener 10 o 13 dígitos.');
    }

    this.mensajesValidacionBusquedaRucCedula
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
      },
      noEsCedulaNiRuc: {
        activado: true,
        funcion: validadorCedulaORuc(this.validarCedula, this.validarRUC)
      }
    };
  }
}


interface MensajesValidacionCedulaRuc extends ObjetoMensajeValidacionInterfaz {
  noEsCedulaNiRuc?: MensajeValidacionInterfaz;
  configuracionFormBuilder: ObjetoConfiguracionCedulaRuc;
}

interface ObjetoConfiguracionCedulaRuc extends ObjetoConfiguracion {
  noEsCedulaNiRuc?: ItemObjetoConfiguracion;
}
