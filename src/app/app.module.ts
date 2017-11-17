import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms'

import { ROUTES } from 'app/app.routes';
import { RestaurantService } from 'app/restaurants/restaurant.service';
import { CarrinhoDeComprasService } from 'app/detalhe-restaurant/carrinho-de-compras/carrinho-de-compras.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestauranteComponent } from './restaurants/restaurante/restaurante.component';
import { DetalheRestaurantComponent } from './detalhe-restaurant/detalhe-restaurant.component';
import { MenuComponent } from 'app/detalhe-restaurant/menu/menu.component';
import { CarrinhoDeComprasComponent } from 'app/detalhe-restaurant/carrinho-de-compras/carrinho-de-compras.component';
import { MenuItemComponent } from 'app/detalhe-restaurant/menu-item/menu-item.component';
import { ReviewsComponent } from 'app/detalhe-restaurant/reviews/reviews.component';
import { OrderComponent } from './order/order.component';
import { InputComponent } from 'app/shared/input/input.component';
import { RadioComponent } from 'app/shared/radio/radio.component';
import { OrderItensComponent } from 'app/order/order-itens/order-itens.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestauranteComponent,
    DetalheRestaurantComponent,
    MenuComponent,
    CarrinhoDeComprasComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItensComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestaurantService,
    CarrinhoDeComprasService,
    {
      provide: LOCALE_ID, useValue: 'pt-BR'
    } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
