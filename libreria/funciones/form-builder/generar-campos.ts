export function generarCampos(clase) {
    const campos = {};
    Object
        .keys(clase)
        .map(
            nombrePropiedad => {
                if (nombrePropiedad.includes('mensajesValidacion')) {
                    const nombreInput = clase[nombrePropiedad].nombreInput;
                    const formGroup = 'formGroup';
                    const valorCampo = clase[formGroup].get(nombreInput).value;
                    if (clase[nombrePropiedad].eliminarMascara) {
                        const resultado = clase[nombrePropiedad].eliminarMascara(valorCampo);
                        campos[nombreInput] = resultado;
                    }
                    else {
                        campos[nombreInput] = valorCampo;
                    }
                }
            }
        );
    return campos;
}
