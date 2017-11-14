import {ItemObjetoConfiguracion} from './item-objeto-configuracion';

export interface ConfiguracionFormBuilder {
  required?: ItemObjetoConfiguracion;
  email?: ItemObjetoConfiguracion;
  min?: ItemObjetoConfiguracion;
  max?: ItemObjetoConfiguracion;
  minlength?: ItemObjetoConfiguracion;
  maxlength?: ItemObjetoConfiguracion;
  pattern?: ItemObjetoConfiguracion;
  [key: string]: ItemObjetoConfiguracion;
}
