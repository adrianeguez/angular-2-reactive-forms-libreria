export function establecerObjetoValidacionMin(objeto: any, nombreAPresentarse: string, valorMin: number): any {
  objeto.min = {
    texto: `El campo ${nombreAPresentarse} debe tener un valor mínimo de ${valorMin}.`,
    valor: valorMin
  };
  return objeto;
}
