import {MensajeValidacionInterfaz} from './mensaje-validacion';
import {ConfiguracionFormBuilder} from './configuracion-form-builder';

export interface ObjetoMensajeValidacionInterfaz {
  required?: MensajeValidacionInterfaz;
  email?: MensajeValidacionInterfaz;
  min?: MensajeValidacionInterfaz;
  max?: MensajeValidacionInterfaz;
  minlength?: MensajeValidacionInterfaz;
  maxlength?: MensajeValidacionInterfaz;
  pattern?: MensajeValidacionInterfaz;
  mensajes?: string[];
  tooltip?: string;
  nombreInput?: string;
  title?: string;
  configuracionFormBuilder?: ConfiguracionFormBuilder;
}

