import { RestaurantInfoModel } from "./RestaurantInfoModel";
import { RestaurantMenuItemModel } from "./RestaurantMenuItemModel";
import { RestaurantTypeModel } from "./RestaurantTypeModel";

export interface IRestaurantModel {
    id: number
    name: string
    address: string
    streetName: string
    streetNumber: string
    postalCode: string
    imageLogo: string
    restaurantType: RestaurantTypeModel
    restaurantInfo: RestaurantInfoModel
    restaurantMenu: Array<RestaurantMenuItemModel>
}