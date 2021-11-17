import { RestaurantModel } from "../Restaurant/RestaurantModel";
import { CartItemModel } from "./CartItemModel";
import { ICartModel } from "./ICartModel";

export class CartModel implements ICartModel {
    public restaurant: RestaurantModel;
    public cartItems: Array<CartItemModel>;

    constructor() {
        this.restaurant = new RestaurantModel();
        this.cartItems  = [];
    }
}