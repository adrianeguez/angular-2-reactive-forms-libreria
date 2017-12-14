export function establecerValoresConfiguracionAbstractControl(objetoConfiguracion: any, valoresObjeto: string) {
    Object
        .keys(valoresObjeto)
        .forEach(
            (nombreCampo) => {
                const nombreCampoConfiguracion = nombreCampo.substring(0, 1).toUpperCase() + nombreCampo.substring(1, nombreCampo.length);
                if (objetoConfiguracion[nombreCampoConfiguracion]) {
                    objetoConfiguracion[nombreCampoConfiguracion].valor = valoresObjeto[nombreCampo];
                }
            }
        );
}
