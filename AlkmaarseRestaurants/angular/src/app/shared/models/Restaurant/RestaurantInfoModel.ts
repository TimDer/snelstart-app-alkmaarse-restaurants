import { IRestaurantInfoModel } from "./IRestaurantInfoModel";
import { RestaurantTypeModel } from "./RestaurantTypeModel";

export class RestaurantInfoModel implements IRestaurantInfoModel {
    public description: string;
    public phoneNumber: string;
    public mobilePhoneNumber: string;
    public website: string;
    public restaurantTypes: Array<RestaurantTypeModel>;

    constructor() {
        this.description = "";
        this.phoneNumber = "";
        this.mobilePhoneNumber = "";
        this.website = "";
        this.restaurantTypes = [];
    }
}