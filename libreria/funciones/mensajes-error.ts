export class MensajesError {
  constructor(private _nombreCampo: string,
              private _valorMinLength?: number,
              private _valorMaxLength?: number,
              private _valorMin?: number,
              private _valorMax?: number,
              private _mensajePattern?: string,
              private _mensajeAsincrono?: string) {
  }

  required(): string {
    return `El campo ${this._nombreCampo} es requerido.`;
  }

  minlength(): string {
    return `El campo ${this._nombreCampo} necesita un minimo de ${this._valorMinLength} caracteres.`;
  }

  maxlength(): string {
    return `El campo ${this._nombreCampo} necesita un maximo de ${this._valorMaxLength} caracteres.`;
  }

  min(): string {
    return `El campo ${this._nombreCampo} necesita un minimo de ${this._valorMin} valor.`;
  }

  max(): string {
    return `El campo ${this._nombreCampo} necesita un maximo de ${this._valorMax} valor.`;
  }

  pattern(): string {
    return `El campo ${this._nombreCampo} es incorrecto. ${this._mensajePattern}`;
  }

  email(): string {
    return `El campo ${this._nombreCampo} necesita ser un correo valido.`;
  }

  errorAsincrono(): string {
    return `${this._mensajeAsincrono}`;
  }

  errorServidor(): string {
    return 'Error'
  }

}

