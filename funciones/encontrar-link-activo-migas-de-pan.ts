export function encontrarLinkActivoMigasDePan(elementosNavegador: HTMLCollectionOf<any>) {
  const tamanoElementosArregloMigaDePan = elementosNavegador[0].childNodes[1].childNodes.length;
  let indiceNodo;
  for (let i = tamanoElementosArregloMigaDePan; i > 0; i--) {
    if (elementosNavegador[0].childNodes[1].childNodes[tamanoElementosArregloMigaDePan - i].nodeName === 'LI') {
      indiceNodo = i - 1;
      break;
    }
  }
  elementosNavegador[0]
    .childNodes[1]
    .childNodes[indiceNodo]
    .childNodes[2]
    .childNodes[1]
    .className = elementosNavegador[0].childNodes[1].childNodes[indiceNodo].childNodes[2].childNodes[1].className + ' color-azul-fuerte';
}
