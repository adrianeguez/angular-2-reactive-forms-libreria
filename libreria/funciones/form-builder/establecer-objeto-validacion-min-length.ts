export function establecerObjetoValidacionMinLength(objeto: any, nombreAPresentarse: string, valorMinLength: number): any {
  objeto.minlength = {
    texto: `El campo ${nombreAPresentarse} debe tener al menos ${valorMinLength} caracteres.`,
    valor: valorMinLength
  };
  return objeto;
}
