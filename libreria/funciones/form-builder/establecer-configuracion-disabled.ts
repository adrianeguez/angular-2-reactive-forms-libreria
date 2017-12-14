export function establecerConfiguracionDisabled(objetoConfiguracion: any) {
    Object
        .keys(objetoConfiguracion)
        .forEach(
            (nombreCampo) => {
                objetoConfiguracion[nombreCampo].disabled = true;
            }
        );
    return objetoConfiguracion;
}
