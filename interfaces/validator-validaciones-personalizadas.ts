import {ValidatorFn} from '@angular/forms';

export interface ValidatorValidacionesPersonalizadas {
  [key: string]: () => ValidatorFn;
}
