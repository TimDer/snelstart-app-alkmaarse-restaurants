import { RestaurantMenuItemCategoryModel } from "./RestaurantMenuItemCategoryModel";

export interface IRestaurantMenuItemModel {
    name: string
    description: string
    price: number
    menuCategory: RestaurantMenuItemCategoryModel
}