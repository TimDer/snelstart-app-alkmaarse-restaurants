import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RestaurantTypeModel } from '../../models/Restaurant/RestaurantTypeModel';

declare let $: any;

@Component({
  selector: 'app-restaurant-icon-type',
  templateUrl: './restaurant-icon-type.component.html',
  styleUrls: ['./restaurant-icon-type.component.scss']
})
export class RestaurantIconTypeComponent implements AfterViewInit {

  @ViewChild('bootstrapTooltipRestaurantType')
  public bootstrapTooltipRestaurantType: ElementRef<HTMLElement> | null = null;

  @Input()
  public restaurantType!: RestaurantTypeModel;

  constructor() { }

  ngAfterViewInit(): void {
    if (this.bootstrapTooltipRestaurantType !== null) {
      $(this.bootstrapTooltipRestaurantType.nativeElement).tooltip();
    }
  }

  public bootstrapTooltipRestaurantTypeTitle(name: string, description: string): string {
    return  "<p class='margin-bottom-5px'>" + name + "</p>" + 
            "<div>" + description + "</div>";
  }

}
