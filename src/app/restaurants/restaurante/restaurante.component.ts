import { Component, OnInit, Input } from '@angular/core';
import { RestauranteModel } from 'app/restaurants/restaurante.model';




@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html'
})
export class RestauranteComponent implements OnInit {

  @Input() restaurante: RestauranteModel;

  constructor() { }

  ngOnInit() {
  }

}
