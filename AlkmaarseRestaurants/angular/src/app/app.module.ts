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
