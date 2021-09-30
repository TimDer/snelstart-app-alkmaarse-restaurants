import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RestaurantModel } from 'src/app/shared/models/RestaurantModel';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  public Restaurants!: RestaurantModel[];

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this._http.get<RestaurantModel[]>("/api/restaurant")
      .subscribe((data: RestaurantModel[]) => {
        this.Restaurants = data;
      });
  }
}
