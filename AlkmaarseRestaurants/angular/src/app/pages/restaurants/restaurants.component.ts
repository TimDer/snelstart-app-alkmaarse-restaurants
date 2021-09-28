import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IRestaurantModel } from 'src/app/shared/interfaces/IRestaurantModel';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    /*this._http.get("/api/restaurant")
      .subscribe((data: IRestaurantModel) => {
        
      });*/
  }

}
