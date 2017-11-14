export interface DatosCedulaORUC {
  cedula?: {
    identificacion: string,
    nombreCompleto: string
  };
  ruc: {
    identificacion: string,
    nombreCompleto: string,
    tipoPersona: string
  };
}
