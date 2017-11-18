export function generarCampos(clase) {
  const campos = {};
  Object
    .keys(clase)
    .map(
      nombrePropiedad => {
        if (nombrePropiedad.includes('mensajesValidacion')) {
          const nombreInput = clase[nombrePropiedad].nombreInput;
          const formGroup = 'formGroup';
          campos[nombreInput] = clase[formGroup].get(nombreInput).value;
        }
      }
    );
  return campos;
}
