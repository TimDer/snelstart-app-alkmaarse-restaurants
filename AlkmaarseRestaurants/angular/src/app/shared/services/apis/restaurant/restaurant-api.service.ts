import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantModel } from 'src/app/shared/models/RestaurantModel';

@Injectable({
  providedIn: 'root'
})
export class RestaurantApiService {

  constructor(private http: HttpClient) { }

  public getAllRestaurants(subscribeToApi: (restaurant: RestaurantModel[]) => void): void {
    this.http.get<RestaurantModel[]>("/api/restaurant").subscribe(subscribeToApi);
  }

  public getOwnRestaurant(id: string, subscribeToApi: (restaurant: RestaurantModel) => void): void {
    this.http.get<RestaurantModel>(`/api/restaurant/SelectById/${id}`).subscribe(subscribeToApi);
  }
}
