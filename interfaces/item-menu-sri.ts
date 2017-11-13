export interface ItemMenuSri {
  codigo?: number;
  codigoPadre?: number;
  descripcionCortaImagen?: string;
  descripcionItem?: string;
  descripcionLargaImagen?: string;
  esLegado?: string;
  items?: ItemMenuSri[];
  nombre?: string;
  orden?: number;
  tipoItem?: string;
  ultimoNodoItem?: string;
  urlDestino?: string;
  urlIcono?: string;
  urlImagen?: string;
  urlNavegacion?: string;
}
