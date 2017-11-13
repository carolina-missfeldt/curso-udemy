import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { RestauranteModel } from 'app/restaurants/restaurante.model';
import { Routes, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-detalhe-restaurant',
  templateUrl: './detalhe-restaurant.component.html'
})
export class DetalheRestaurantComponent implements OnInit {

  detalheRest: RestauranteModel;
  constructor(private restauranteService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restauranteService.detalheRestaurante(this.route.snapshot.params['id'])
      .subscribe(restaurantes => this.detalheRest = restaurantes);
  }

}
