export function establecerObjetoValidacionPattern(objeto: any, patron: string, nombreAPresentar): any {
  objeto.pattern = {
    texto: `El campo ${nombreAPresentar} no es válido.`,
    valor: patron,
  };
  return objeto;
}
