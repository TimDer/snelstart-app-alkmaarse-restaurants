import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from 'src/app/shared/models/RestaurantModel';
import { RestaurantApiService } from 'src/app/shared/services/apis/restaurant/restaurant-api.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  public Restaurants!: RestaurantModel[];

  constructor(
    private restaurantApiService: RestaurantApiService
  ) { }

  ngOnInit(): void {
    this.restaurantApiService
        .getAllRestaurants(
          (apiData: RestaurantModel[]) => this.Restaurants = apiData
        );
  }
}
