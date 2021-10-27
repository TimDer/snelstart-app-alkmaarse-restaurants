import { IRestaurantTypeModel } from "./IRestaurantTypeModel";

export interface IRestaurantInfoModel {
    description: string
    phoneNumber: string
    mobilePhoneNumber: string
    website: string
    restaurantTypes: Array<IRestaurantTypeModel>
}