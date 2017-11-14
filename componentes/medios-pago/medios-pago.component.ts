import { Component, Input, OnInit } from '@angular/core';
import { QUITAR_CACHE_IMAGENES } from '../../../constantes/quitar-cache-imagenes';

@Component({
  selector: 'sri-medios-pago',
  templateUrl: './medios-pago.component.html',
  styleUrls: ['./medios-pago.component.scss']
})
export class MediosPagoComponent implements OnInit {
  @Input() url: string;
  @Input() contenido: string;
  @Input() delay: number;
  @Input() duracion: number;
  urlImagenMediosPago = '/recursos-sri-en-linea/imagenes/medios-pago/icono-medios-pago.svg' + QUITAR_CACHE_IMAGENES;

  constructor() {
  }

  ngOnInit() {
    if (!this.delay) {
      this.delay = 8;
    }
    if (!this.duracion) {
      this.duracion = 16;
    }

    if (!this.contenido) {
      this.contenido = 'Medios de pago';
    }
  }

}
