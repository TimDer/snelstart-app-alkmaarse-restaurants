import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from 'src/app/shared/models/Restaurant/RestaurantModel';
import { RestaurantCategoryModel } from 'src/app/shared/models/Restaurant/RestaurantCategoryModel';
import { RestaurantApiService } from 'src/app/shared/services/apis/restaurant/restaurant-api.service';
import { RestaurantFavoritesService } from 'src/app/shared/services/restaurant-favorites/restaurant-favorites.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  public Restaurants!: RestaurantModel[];
  public RestaurantTypes!: RestaurantCategoryModel[];
  public RestaurantTypeSelected!: string;
  public RestaurantFavoritesSelected: boolean = false;
  public RestaurantFilterSelected: boolean = false;

  constructor(
    private restaurantApiService: RestaurantApiService,
    public RestaurantFavouritesService: RestaurantFavoritesService
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

  public applyFilter(Restaurant: RestaurantModel): boolean {
    const checkType = Restaurant.restaurantType.name == this.RestaurantTypeSelected;
    let checkFavorites = false;
    const checkAllowFilter = !this.RestaurantFilterSelected;

    if (this.RestaurantFavouritesService.IsInFavourites(Restaurant.id) && this.RestaurantFavoritesSelected === true) {
      checkFavorites = true;
    }

    return (checkType || checkFavorites) || checkAllowFilter;
  }

  public allowTheUseOfTheFilter(event: any) {
      this.RestaurantFilterSelected = event.target.checked;
  }

  public useFavoritesFilter(event: any) {
    this.RestaurantFavoritesSelected = event.target.checked;
  }
}
