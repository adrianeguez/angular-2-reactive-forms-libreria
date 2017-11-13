import {establecerSegmentosMigasDePan} from './establecer-segmentos-migas-de-pan';
import {MenuItem} from 'primeng/primeng';

export function establecerArregloMigasDePan(menu, url) {
  const migasDePan = establecerSegmentosMigasDePan(menu, url);
  const items: MenuItem[] = [];
  const urlCarrouselSegundoNivelAngular = JSON.parse(migasDePan.url);
  items.push({
    label: migasDePan.nombrePrimerNivel,
    title: migasDePan.nombrePrimerNivel,
    routerLink: urlCarrouselSegundoNivelAngular
  });
  if (!migasDePan.nombreTercerNivel) {
    items.push({
      label: migasDePan.nombreSegundoNivel,
      title: migasDePan.nombreSegundoNivel,
      styleClass: 'color-tomate-paleta',
      style: 'color:blue',
      icon: 'fa-plus'
    });
  } else {
    items.push({
      label: migasDePan.nombreSegundoNivel,
      title: migasDePan.nombreSegundoNivel,
      routerLink: urlCarrouselSegundoNivelAngular
    });
    items.push({
      label: migasDePan.nombreTercerNivel,
      title: migasDePan.nombreTercerNivel,
      styleClass: 'color-tomate-paleta',
      style: 'color:blue',
      icon: 'fa-plus'
    });
  }
  return items;
}
