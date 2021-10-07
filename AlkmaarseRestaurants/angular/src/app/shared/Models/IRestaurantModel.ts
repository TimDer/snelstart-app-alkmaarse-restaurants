import { RestaurantInfoModel } from "./RestaurantInfoModel";
import { RestaurantMenuItemModel } from "./RestaurantMenuItemModel";

export interface IRestaurantModel {
    id: number
    name: string
    address: string
    streetName: string
    streetNumber: string
    imageLogo: string
    restaurantType: string
    restaurantInfo: RestaurantInfoModel
    restaurantMenu: Array<RestaurantMenuItemModel>
}