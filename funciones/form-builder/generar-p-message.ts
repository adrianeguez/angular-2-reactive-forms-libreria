export function generarPMessage(texto: string, titulo?: string, tipo = 'warn') {
  return {
    severity: tipo,
    detail: texto,
    summary: titulo
  }
}
