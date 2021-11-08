import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { RestaurantTypeModel } from '../../models/Restaurant/RestaurantTypeModel';

declare let $: any;

@Component({
  selector: 'app-restaurant-type-tooltip',
  templateUrl: './restaurant-type-tooltip.component.html',
  styleUrls: ['./restaurant-type-tooltip.component.scss']
})
export class RestaurantTypeTooltipComponent {

  @Input()
  public restaurantTypes: Array<RestaurantTypeModel> = [];

  constructor() { }

  public bootstrapTooltipRestaurantTypeTitle(name: string, description: string): string {
    return  "<p class='margin-bottom-5'>" + name + "</p>" + 
            "<div>" + description + "</div>";
  }

}
