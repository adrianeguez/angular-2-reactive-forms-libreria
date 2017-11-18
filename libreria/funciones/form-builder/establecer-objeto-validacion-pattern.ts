export function establecerObjetoValidacionPattern(objeto: any,
                                                  patron: string,
                                                  nombreAPresentar,
                                                  mensaje?: string): any {
    objeto.pattern = {
        texto: `El campo ${nombreAPresentar} no es válido. ${mensaje}`,
        valor: patron,
    };
    return objeto;
}
