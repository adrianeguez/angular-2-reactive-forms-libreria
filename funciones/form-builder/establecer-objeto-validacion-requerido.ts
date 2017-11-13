export function establecerObjetoValidacionRequired(objeto: any, nombreAPresentarse: string): any {
  objeto.required = {
    texto: `El campo ${nombreAPresentarse} es requerido.`,
    valor: true
  };
  return objeto;
}
