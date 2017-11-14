export function establecerObjetoValidacionMax(objeto: any, nombreAPresentarse: string, valorMax: number): any {
  objeto.max = {
    texto: `El campo ${nombreAPresentarse} debe tener un valor máximo de ${valorMax}.`,
    valor: valorMax
  };
  return objeto;
}
