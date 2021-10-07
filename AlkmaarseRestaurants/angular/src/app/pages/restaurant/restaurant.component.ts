import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantModel } from 'src/app/shared/models/RestaurantModel';
import { RestaurantApiService } from 'src/app/shared/services/apis/restaurant/restaurant-api.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {

  public Restaurant: RestaurantModel = new RestaurantModel();

  constructor(
    private route: ActivatedRoute,
    private restaurantApiService: RestaurantApiService
  ) { }

  ngOnInit(): void {
    this.restaurantApiService.getOwnRestaurant(
      this.route.snapshot.paramMap.get("id") || "",
      (restaurantData: RestaurantModel) => {
        this.Restaurant = restaurantData;
      });
  }

}
