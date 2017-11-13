export function establecerObjetoValidacionEmail(objeto: any, nombreAPresentarse: string): any {
  objeto.email = {
    texto: `El campo ${nombreAPresentarse} no parece un correo.`,
    valor: true
  };
  return objeto;
}
