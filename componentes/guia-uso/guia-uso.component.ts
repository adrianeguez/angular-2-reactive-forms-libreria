import {Component, Input, OnInit} from '@angular/core';
import {QUITAR_CACHE_IMAGENES} from '../../../constantes/quitar-cache-imagenes';

@Component({
  selector: 'sri-guia-uso',
  templateUrl: './guia-uso.component.html',
  styleUrls: ['./guia-uso.component.scss']
})
export class GuiaUsoComponent implements OnInit {
  @Input() url: string;
  urlImagenGuiaUso = '/recursos-sri-en-linea/imagenes/descargar-guia/icono-descargar-guia.svg' + QUITAR_CACHE_IMAGENES;

  constructor() {
  }

  ngOnInit() {
  }

}
