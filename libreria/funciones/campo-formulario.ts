import {MensajesError} from './mensajes-error';

export class CampoFormulario {
  arregloMensajesError = [];
  errores: MensajesError;
  constructor(public nombreAMostrar: string,
              public nombreCampo: string,
              public estaValido = false,
              public valorMinLength?: number,
              public valorMaxLength?: number,
              public valorMin?: number,
              public valorMax?: number,
              public mensajePattern?: string,
              public mensajesAsincrono?: string) {
    this.errores = new MensajesError(
      nombreAMostrar,
      valorMinLength,
      valorMaxLength,
      valorMin,
      valorMax,
      mensajePattern,
      mensajesAsincrono);
  }
}
