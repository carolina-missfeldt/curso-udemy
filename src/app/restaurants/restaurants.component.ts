import { Component, OnInit } from '@angular/core';

import { RestaurantService } from 'app/restaurants/restaurant.service';
import { RestauranteModel } from 'app/restaurants/restaurante.model';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurantes: RestauranteModel[]
  constructor(private restauranteService: RestaurantService) { }

  ngOnInit() {
    this.restauranteService.listaDeRestaurantes()
      .subscribe(restaurantes => this.restaurantes = restaurantes);
      console.log(`${this.restaurantes}`);
  }

}
