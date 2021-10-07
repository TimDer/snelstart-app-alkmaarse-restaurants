import { IRestaurantModel } from "./IRestaurantModel";
import { RestaurantInfoModel } from "./RestaurantInfoModel";
import { RestaurantMenuItemModel } from "./RestaurantMenuItemModel";

export class RestaurantModel implements IRestaurantModel {
    public id: number;
    public name: string;
    public address: string;
    public streetName: string;
    public streetNumber: string;
    public imageLogo: string;
    public restaurantType: string;
    public restaurantInfo: RestaurantInfoModel;
    public restaurantMenu: Array<RestaurantMenuItemModel>;

    constructor() {
        this.id = 0;
        this.name = "";
        this.address = "";
        this.streetName = "";
        this.streetNumber = "";
        this.imageLogo = "";
        this.restaurantType = "";
        this.restaurantInfo = new RestaurantInfoModel();
        this.restaurantMenu = [];
    }
}