import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sri-mensaje-informacion',
  templateUrl: './mensaje-informacion.component.html',
  styleUrls: ['./mensaje-informacion.component.scss']
})
export class MensajeInformacionComponent implements OnInit {

  @Input() mensaje: string;
  @Input() segundo_mensaje: string;
  @Input() tercer_mensaje: string;
  @Input() arregloMensajes: ArregloMensajeInterfaz[];

  constructor() {
  }

  ngOnInit() {
  }

}

interface ArregloMensajeInterfaz {
  titulo: string;
  detalle: string;
}
