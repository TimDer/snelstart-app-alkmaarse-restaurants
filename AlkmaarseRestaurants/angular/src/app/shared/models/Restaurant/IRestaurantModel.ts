import { RestaurantInfoModel } from "./RestaurantInfoModel";
import { RestaurantMenuItemModel } from "./RestaurantMenuItemModel";
import { RestaurantCategoryModel } from "./RestaurantCategoryModel";

export interface IRestaurantModel {
    id: number
    name: string
    address: string
    streetName: string
    streetNumber: string
    postalCode: string
    imageLogo: string
    restaurantType: RestaurantCategoryModel
    restaurantInfo: RestaurantInfoModel
    restaurantMenu: Array<RestaurantMenuItemModel>
}