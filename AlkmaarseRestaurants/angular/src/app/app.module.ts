import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantLogoComponent } from './shared/components/restaurant-logo/restaurant-logo.component';
import { RestaurantTypeTooltipComponent } from './shared/components/restaurant-type-tooltip/restaurant-type-tooltip.component';
import { RestaurantIconTypeComponent } from './shared/components/restaurant-icon-type/restaurant-icon-type.component';
import { RestaurantPricePipe } from './shared/pipes/restaurantPrice/restaurant-price.pipe';

const ngRoutes: Routes = [
  {
    path: "restaurants",
    component: RestaurantsComponent
  },
  {
    path: "restaurant/:id",
    component: RestaurantComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantLogoComponent,
    RestaurantTypeTooltipComponent,
    RestaurantIconTypeComponent,
    RestaurantPricePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ngRoutes)
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [
    AppComponent,
    NavbarComponent
  ]
})
export class AppModule { }
