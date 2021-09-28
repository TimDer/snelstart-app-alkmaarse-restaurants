import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainAreaComponent } from './shared/main-area/main-area.component';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantsComponent } from './www/restaurants/restaurants.component';
import { RestaurantsLogoComponent } from './shared/restaurants/restaurants-logo/restaurants-logo.component';
import { HttpClientModule } from '@angular/common/http';

const ngRoutes: Routes = [
  {
    path: "restaurants",
    component: RestaurantsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainAreaComponent,
    RestaurantsComponent,
    RestaurantsLogoComponent
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
