import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { RestaurantService } from 'app/restaurants/restaurant.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component'
import { ROUTES } from 'app/app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestauranteComponent } from './restaurants/restaurante/restaurante.component';
import { DetalheRestaurantComponent } from './detalhe-restaurant/detalhe-restaurant.component';
import { MenuComponent } from 'app/detalhe-restaurant/menu/menu.component';
import { CarrinhoDeComprasComponent } from 'app/detalhe-restaurant/carrinho-de-compras/carrinho-de-compras.component';
import { MenuItemComponent } from 'app/detalhe-restaurant/menu-item/menu-item.component';




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
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestaurantService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
