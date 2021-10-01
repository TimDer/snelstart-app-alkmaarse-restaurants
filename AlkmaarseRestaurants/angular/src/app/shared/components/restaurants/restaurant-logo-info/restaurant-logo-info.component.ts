import { Component, Input, OnInit } from '@angular/core';
import { RestaurantModel } from 'src/app/shared/models/RestaurantModel';

@Component({
  selector: 'app-restaurant-logo-info',
  templateUrl: './restaurant-logo-info.component.html',
  styleUrls: ['./restaurant-logo-info.component.scss']
})
export class RestaurantLogoInfoComponent implements OnInit {

  @Input()
  public Restaurant!: RestaurantModel;

  @Input()
  public last!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
