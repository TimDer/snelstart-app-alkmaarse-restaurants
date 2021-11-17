import { Component, OnInit } from '@angular/core';
import { CartModel } from 'src/app/shared/models/cart/CartModel';
import { RestaurantMenuItemModel } from 'src/app/shared/models/Restaurant/RestaurantMenuItemModel';
import { CartService } from 'src/app/shared/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    public cartService: CartService
  ) { }

  public getCartItemFromMenu(cart: CartModel | null, menuItemId: number, ): RestaurantMenuItemModel {
    return cart?.restaurant.restaurantMenu.find(filter => filter.id === menuItemId)!;
  }
  
  mylog(...value: any) {
    console.log(...value);
  }

  ngOnInit(): void {
  }

}
