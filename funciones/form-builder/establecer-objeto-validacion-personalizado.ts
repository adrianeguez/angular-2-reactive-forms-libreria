export function establecerObjetoValidacionPersonalizado(objeto: any,
                                                        valor: any,
                                                        nombreCampo: string,
                                                        nombreAPresentar): any {
  objeto[nombreCampo] = {
    texto: `El campo ${nombreAPresentar} no es válido.`,
    valor: valor,
  };
  return objeto;
}
