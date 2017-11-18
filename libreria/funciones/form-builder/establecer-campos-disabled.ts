export function establecerCamposDisabled(configuracion:any, clase:any){
    Object
        .keys(configuracion)
        .map(
            nombreConfiguracion => {
                clase['mensajesValidacion'+nombreConfiguracion].disabled = configuracion[nombreConfiguracion].disabled;
            }
        );
}