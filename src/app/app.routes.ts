
import {Routes} from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { RestaurantsComponent } from 'app/restaurants/restaurants.component';
import { DetalheRestaurantComponent } from 'app/detalhe-restaurant/detalhe-restaurant.component';
import { ReviewsComponent } from 'app/detalhe-restaurant/reviews/reviews.component';
import { MenuComponent } from 'app/detalhe-restaurant/menu/menu.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent },
    {path: 'about', component: AboutComponent},
    {path: 'restaurantes', component: RestaurantsComponent},
    {path: 'restaurantes/:id', component: DetalheRestaurantComponent,
        children: [
            {path:'', redirectTo: 'menu', pathMatch: 'full'},
            {path: 'menu', component: MenuComponent},
            {path: 'reviews', component: ReviewsComponent}
        ]
    },

]