import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { MainAreaComponent } from './shared/components/main-area/main-area.component';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './pages/restaurants/restaurants.component';
import { RestaurantsLogoComponent } from './shared/components/restaurants/restaurants-logo/restaurants-logo.component';
import { HttpClientModule } from '@angular/common/http';
import { RestaurantInfoComponent } from './shared/components/restaurant-info/restaurant-info.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { RestaurantLogoInfoComponent } from './shared/components/restaurants/restaurant-logo-info/restaurant-logo-info.component';

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
    MainAreaComponent,
    RestaurantsComponent,
    RestaurantsLogoComponent,
    RestaurantInfoComponent,
    RestaurantComponent,
    RestaurantLogoInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
