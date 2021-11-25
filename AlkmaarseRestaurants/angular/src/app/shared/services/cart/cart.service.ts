import { Injectable } from '@angular/core';
import { CartItemModel } from '../../models/cart/CartItemModel';
import { CartModel } from '../../models/cart/CartModel';
import { RestaurantModel } from '../../models/Restaurant/RestaurantModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private localStorageKey: string = "menuCart";

  public set cart(data: CartModel | null) {
    if (data === null) {
      window.localStorage.removeItem(this.localStorageKey);
    }
    else {
      window.localStorage.setItem(this.localStorageKey, JSON.stringify(data));
    }
  }
  public get cart(): CartModel | null {
    let setupReturn = window.localStorage.getItem(this.localStorageKey)
    
    if (setupReturn !== null) {
      return JSON.parse( setupReturn );
    }
    
    return null;
  }

  public addProductToCart(productByKeyName: number, restaurant: RestaurantModel | undefined) {
    const cartItem  = new CartItemModel();
    cartItem.amount = 1;
    cartItem.productById = productByKeyName;

    const currentLocalStorage: CartModel | null = this.cart;

    if (restaurant !== undefined) {
      if (currentLocalStorage === null) {
        const product   = new CartModel();
        product.cartItems.push(cartItem);
        product.restaurant = restaurant;
        this.cart = product;
        this._currentArticlesAmount = null;
      }
      else if (currentLocalStorage.cartItems.find(f => f.productById === productByKeyName) !== undefined && restaurant.id === currentLocalStorage.restaurant.id) {
        let cartItemKey = currentLocalStorage.cartItems.findIndex(f => f.productById === productByKeyName);
        if (currentLocalStorage.cartItems[cartItemKey].amount < 30) {
          currentLocalStorage.cartItems[cartItemKey].amount = currentLocalStorage.cartItems[cartItemKey].amount + 1;
        }
        this.cart = currentLocalStorage;
        this._currentArticlesAmount = null;
      }
      else if (restaurant.id === currentLocalStorage.restaurant.id) {
        currentLocalStorage.cartItems.push(cartItem);
        this.cart = currentLocalStorage;
        this._currentArticlesAmount = null;
      }
      else {
        alert("Je kunt enkel van één restaurant tegelijkertijd bestellen");
      }
    }
  }

  public removeProductFromCart(productById: number, removeType: "all" | "one") {
    let localCart: CartModel | null = this.cart;

    if (localCart !== null) {
      if (removeType === "one") {
        const cartItem = localCart.cartItems.findIndex(find => find.productById === productById);
        if (localCart.cartItems[cartItem].amount > 1) {
          localCart.cartItems[cartItem].amount = localCart.cartItems[cartItem].amount - 1;
        }
      }
      
      if (removeType === "all") {
        localCart.cartItems = localCart.cartItems.filter(filter => filter.productById !== productById && filter.amount > 0);
      }

      if (localCart.cartItems.length === 0) {
        localCart = null;
      }

      this._currentArticlesAmount = null;
    }
    
    this.cart = localCart;
  }

  private _currentArticlesAmount: number | null = null;
  public get currentArticlesAmount(): number {
    if (this._currentArticlesAmount === null) {
      const localCart = this.cart;
      let returnAmount = 0;

      if (localCart !== null) {
        for (let i = 0; i < localCart.cartItems.length; i++) {
          returnAmount = returnAmount + localCart.cartItems[i].amount;
        }
      }

      this._currentArticlesAmount = returnAmount;
      return returnAmount;
    }
    else {
      return this._currentArticlesAmount;
    }
  }

  constructor() { }
}
