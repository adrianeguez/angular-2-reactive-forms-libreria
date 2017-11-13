export function establecerHomeMigasDePan(menuSeleccionado) {
  return {
    routerLink: ['/inicio', menuSeleccionado ? menuSeleccionado : 'NAT'],
    label: 'Inicio',
    title: 'Inicio'
  };
}
