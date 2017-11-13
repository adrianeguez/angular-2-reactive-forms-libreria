

import {ItemObjetoConfiguracion} from './item-objeto-configuracion';

export interface  ObjetoConfiguracion{
    required: ItemObjetoConfiguracion,
    email: ItemObjetoConfiguracion,
    min: ItemObjetoConfiguracion,
    max: ItemObjetoConfiguracion,
    minlength: ItemObjetoConfiguracion,
    maxlength: ItemObjetoConfiguracion,
    pattern: ItemObjetoConfiguracion
}
