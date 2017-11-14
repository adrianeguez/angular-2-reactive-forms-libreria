export function establecerObjetoValidacionMaxLength(objeto: any, nombreAPresentarse: string, valorMaxLength: number): any {
  objeto.maxlength = {
    texto: `El campo ${nombreAPresentarse} debe tener un máximo de ${valorMaxLength} caracteres.`,
    valor: valorMaxLength
  };
  return objeto;
}
