import { RestaurantMenuItemCategoryModel } from "./RestaurantMenuItemCategoryModel";

export interface IRestaurantMenuItemModel {
    id: number
    name: string
    description: string
    price: number
    menuCategory: RestaurantMenuItemCategoryModel
}