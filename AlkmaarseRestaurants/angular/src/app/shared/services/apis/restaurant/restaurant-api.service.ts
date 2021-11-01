import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantModel } from 'src/app/shared/models/Restaurant/RestaurantModel';
import { RestaurantCategoryModel } from 'src/app/shared/models/Restaurant/RestaurantCategoryModel';

@Injectable({
  providedIn: 'root'
})
export class RestaurantApiService {

  constructor(private http: HttpClient) { }

  public getAllRestaurants(subscribeToApi: (restaurant: RestaurantModel[]) => void): void {
    this.http.get<RestaurantModel[]>("/api/restaurant").subscribe(subscribeToApi);
  }
  
  public GetRestaurantTypes(subscribeToApi: (types: RestaurantCategoryModel[]) => void) {
    this.http.get<RestaurantCategoryModel[]>("/api/restaurant/GetRestaurantTypes").subscribe(subscribeToApi);
  }

  public getOwnRestaurant(id: string): Observable<RestaurantModel> {
    return this.http.get<RestaurantModel>(`/api/restaurant/SelectById/${id}`);
  }
}