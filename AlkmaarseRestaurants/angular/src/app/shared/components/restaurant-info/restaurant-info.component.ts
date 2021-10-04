import { Component, Input, OnInit } from '@angular/core';
import { RestaurantModel } from '../../models/RestaurantModel';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.scss']
})
export class RestaurantInfoComponent implements OnInit {

  @Input()
  public Restaurant!: RestaurantModel;

  @Input()
  public isRestaurantPage: boolean = false;

  @Input()
  public last!: boolean;

  constructor() { }

  ngOnInit(): void {
    console.log(this.isRestaurantPage, this.Restaurant);
  }

}
