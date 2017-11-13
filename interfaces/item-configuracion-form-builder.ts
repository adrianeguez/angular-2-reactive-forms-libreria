import {ValidationErrors} from '@angular/forms';

export interface ItemConfiguracionFormBuilder {
  valor: any;
  activado: boolean;
  funcion?(): any;
}
