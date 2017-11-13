import {ItemConfiguracionFormBuilder} from './item-configuracion-form-builder';

export interface ConfiguracionFormBuilder {
  required?: ItemConfiguracionFormBuilder;
  email?: ItemConfiguracionFormBuilder;
  min?: ItemConfiguracionFormBuilder;
  max?: ItemConfiguracionFormBuilder;
  minlength?: ItemConfiguracionFormBuilder;
  maxlength?: ItemConfiguracionFormBuilder;
  pattern?: ItemConfiguracionFormBuilder;
  [key: string]: ItemConfiguracionFormBuilder;
}
