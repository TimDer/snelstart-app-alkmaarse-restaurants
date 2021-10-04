import { Component, Input, OnInit } from '@angular/core';
import { RestaurantModel } from '../../../models/RestaurantModel';

@Component({
  selector: 'app-restaurant-info',
  templateUrl: './restaurant-info.component.html',
  styleUrls: ['./restaurant-info.component.scss']
})
export class RestaurantInfoComponent implements OnInit {

  @Input()
  public Restaurant!: RestaurantModel;

  constructor() { }

  ngOnInit(): void {
  }

}
