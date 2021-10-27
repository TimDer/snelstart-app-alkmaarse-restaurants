import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from 'src/app/shared/models/Restaurant/RestaurantModel';
import { RestaurantCategoryModel } from 'src/app/shared/models/Restaurant/RestaurantCategoryModel';
import { RestaurantApiService } from 'src/app/shared/services/apis/restaurant/restaurant-api.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  public Restaurants!: RestaurantModel[];
  public RestaurantTypes!: RestaurantCategoryModel[];
  public RestaurantTypeSelected!: string;
  public RestaurantFilterSelected: boolean = false;

  constructor(
    private restaurantApiService: RestaurantApiService
  ) { }

  ngOnInit(): void {
    this.restaurantApiService
        .getAllRestaurants(
          (apiData: RestaurantModel[]) => this.Restaurants = apiData
        );

    this.restaurantApiService
        .GetRestaurantTypes(
          (apiData) => {
            this.RestaurantTypes = apiData;
            this.RestaurantTypeSelected = apiData[0].name;
          }
        );
  }

  public onFilterChange(event: any) {
    this.RestaurantFilterSelected = event.target.checked;
  }
}
