export function encerarConfiguracionFormBuilder(validacionesPersonalizadas) {
  const objetoConfiguracion = {
    required: {
      valor: null,
      activado: false
    },
    email: {
      valor: null,
      activado: false
    },
    min: {
      valor: null,
      activado: false
    },
    max: {
      valor: null,
      activado: false
    },
    minlength: {
      valor: null,
      activado: false
    },
    maxlength: {
      valor: null,
      activado: false
    },
    pattern: {
      valor: null,
      activado: false
    }
  };
  Object
    .keys(validacionesPersonalizadas)
    .forEach(
      (propiedadValidacionesPersonalizadas) => {
        objetoConfiguracion[propiedadValidacionesPersonalizadas] = {
          valor: null,
          activado: false,
          funcion: validacionesPersonalizadas[propiedadValidacionesPersonalizadas]
        }
      }
    );
  return objetoConfiguracion;
}
