import { RestaurantModel } from "../Restaurant/RestaurantModel";
import { CartItemModel } from "./CartItemModel";

export interface ICartModel {
    restaurant: RestaurantModel
    cartItems: Array<CartItemModel>
}