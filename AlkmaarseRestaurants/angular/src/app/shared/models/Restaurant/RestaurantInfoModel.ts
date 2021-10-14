import { IRestaurantInfoModel } from "./IRestaurantInfoModel";

export class RestaurantInfoModel implements IRestaurantInfoModel {
    public description: string;
    public phoneNumber: string;
    public mobilePhoneNumber: string;
    public website: string;
    public restaurantTypes: Array<string>;

    constructor() {
        this.description = "";
        this.phoneNumber = "";
        this.mobilePhoneNumber = "";
        this.website = "";
        this.restaurantTypes = [];
    }
}