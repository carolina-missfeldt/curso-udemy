
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { RestauranteModel } from 'app/restaurants/restaurante.model';
import { MEAT_API } from './../app.api';
import { ErrorMsg } from 'app/app.error';


@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  listaDeRestaurantes(): Observable <RestauranteModel[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response=> response.json())
      .catch(ErrorMsg.handleError)
  }

  detalheRestaurante(id: string): Observable<RestauranteModel>{
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorMsg.handleError)
  }

  reviewsOfRestaurant(id: string): Observable<any>{
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorMsg.handleError)

  }

}
