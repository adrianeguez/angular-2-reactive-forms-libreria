import {MensajeValidacionInterfaz} from './mensaje-validacion';

export interface ObjetoMensajeValidacionInterfaz {
  required?: MensajeValidacionInterfaz;
  email?: MensajeValidacionInterfaz;
  min?: MensajeValidacionInterfaz;
  max?: MensajeValidacionInterfaz;
  minlength?: MensajeValidacionInterfaz;
  maxlength?: MensajeValidacionInterfaz;
  pattern?: MensajeValidacionInterfaz;
  mensajes?: any[];
  tooltip?: string;
  nombreInput?: string;
  title?: string;
}

