import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'sri-ver-deudas',
  templateUrl: './ver-deudas.component.html',
  styleUrls: ['./ver-deudas.component.scss']
})
export class VerDeudasComponent implements OnInit {
  @Input() url: string;
  @Input() delay: number;
  @Input() duracion: number;

  constructor() {
  }

  ngOnInit() {

    if (!this.delay) {
      this.delay = 16;
    }
    if (!this.duracion) {
      this.duracion = 16;
    }

  }

}
