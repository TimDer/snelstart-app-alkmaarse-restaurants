import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantModel } from 'src/app/shared/models/Restaurant/RestaurantModel';
import { RestaurantTypeModel } from 'src/app/shared/models/Restaurant/RestaurantTypeModel';

@Injectable({
  providedIn: 'root'
})
export class RestaurantApiService {

  constructor(private http: HttpClient) { }

  public getAllRestaurants(subscribeToApi: (restaurant: RestaurantModel[]) => void): void {
    this.http.get<RestaurantModel[]>("/api/restaurant").subscribe(subscribeToApi);
  }
  
  public GetRestaurantTypes(subscribeToApi: (types: RestaurantTypeModel[]) => void) {
    this.http.get<RestaurantTypeModel[]>("/api/restaurant/GetRestaurantTypes").subscribe(subscribeToApi);
  }

  public getOwnRestaurant(id: string, subscribeToApi: (restaurant: RestaurantModel) => void): void {
    this.http.get<RestaurantModel>(`/api/restaurant/SelectById/${id}`).subscribe(subscribeToApi);
  }
}