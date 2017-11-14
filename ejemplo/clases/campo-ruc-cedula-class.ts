import {FormGroup} from '@angular/forms';
import {ConfiguracionFormBuilder} from '../../libreria/interfaces/configuracion-form-builder';
import {establecerMensajesDeValidacionComunes} from '../../libreria/funciones/form-builder/generar-mensajes-de-validacion-comunes';
import {establecerObjetoValidacionPersonalizado} from '../../libreria/funciones/form-builder/establecer-objeto-validacion-personalizado';
import {MensajeValidacionInterfaz} from '../../libreria/interfaces/mensaje-validacion';
import {ObjetoMensajeValidacionInterfaz} from '../../libreria/interfaces/objeto-mensajes-validacion';
import {encerarConfiguracionFormBuilder} from '../../libreria/funciones/form-builder/encerar-configuracion-form-builder';
import {validadorCedula} from '../validadores/validador-cedula-ruc';

export class CampoCedulaClass {
  campoCedulaFormGroup: FormGroup;
  mensajesValidacionBusquedaCedula: MensajesValidacionCedula;
  configuracionFormBuilder: ConfiguracionFormBuilder;

  constructor(public cedula?: string) {
    this.encerarConfiguracionFormBuilderCedula();
  }

  encerarConfiguracionFormBuilderCedula() {
    const nombreAPresentarse = 'Cédula';
    this.mensajesValidacionBusquedaCedula = establecerMensajesDeValidacionComunes(
      'cedula',
      nombreAPresentarse,
      'EJ: 1718137159',
      'Ingrese una cédula',
      10,
      13);
    establecerObjetoValidacionPersonalizado(this.mensajesValidacionBusquedaCedula,
      false,
      'cedulaValida',
      nombreAPresentarse);
    this.mensajesValidacionBusquedaCedula.configuracionFormBuilder = {
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
      }
    };
    this.configuracionFormBuilder = encerarConfiguracionFormBuilder(this.mensajesValidacionBusquedaCedula.configuracionFormBuilder);
  }
}

interface MensajesValidacionCedula extends ObjetoMensajeValidacionInterfaz {
  cedulaValida?: MensajeValidacionInterfaz;
  configuracionFormBuilder?: ObjetoConfiguracionCedula;
}

interface ObjetoConfiguracionCedula extends ConfiguracionFormBuilder {
  cedulaValida?: MensajeValidacionInterfaz;
}
