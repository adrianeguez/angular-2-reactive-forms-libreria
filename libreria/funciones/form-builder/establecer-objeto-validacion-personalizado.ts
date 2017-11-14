export function establecerObjetoValidacionPersonalizado(objeto: any,
                                                        valor: any,
                                                        nombreCampo: string,
                                                        nombreAPresentar,
                                                        mensaje?: string): any {
  objeto[nombreCampo] = {
    texto: `El campo ${nombreAPresentar} no es válido. ${mensaje}`,
    valor: valor,
  };
  return objeto;
}
