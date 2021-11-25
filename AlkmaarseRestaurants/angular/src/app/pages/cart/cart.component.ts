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

  private _totalPrice: number | null = null
  public get totalPrice(): number {
    let returnPrice: number | undefined = 0;

    if (this._totalPrice === null) {
      const localCart = this.cartService.cart;
  
      if (localCart !== null) {
        for (let i = 0; i < localCart.cartItems.length; i++) {
          returnPrice = returnPrice + localCart.restaurant.restaurantMenu?.find(find => 
                          find.id === localCart.cartItems[i].productById)!.price *
                          localCart.cartItems[i].amount;
        }
      }
      
      this._totalPrice = returnPrice;
    }
    else {
      returnPrice = this._totalPrice;
    }

    return returnPrice === undefined ? 0 : returnPrice;
  }

  public resetTotalPrice(): void {
    this._totalPrice = null;
  }

  public getCartTotalPrice(price: number, amount: number) {
    return price * amount;
  }

  public getCartItemFromMenu(cart: CartModel | null, menuItemId: number, ): RestaurantMenuItemModel {
    return cart?.restaurant.restaurantMenu.find(filter => filter.id === menuItemId)!;
  }
  
  ngOnInit(): void {
  }

}
