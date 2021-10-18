import { IRestaurantModel } from "./IRestaurantModel";
import { RestaurantInfoModel } from "./RestaurantInfoModel";
import { RestaurantMenuItemModel } from "./RestaurantMenuItemModel";
import { RestaurantTypeModel } from "./RestaurantTypeModel";

export class RestaurantModel implements IRestaurantModel {
    public id: number;
    public name: string;
    public address: string;
    public streetName: string;
    public streetNumber: string;
    public imageLogo: string;
    public restaurantType: RestaurantTypeModel;
    public restaurantInfo: RestaurantInfoModel;
    public restaurantMenu: Array<RestaurantMenuItemModel>;

    constructor() {
        this.id = 0;
        this.name = "";
        this.address = "";
        this.streetName = "";
        this.streetNumber = "";
        this.imageLogo = "";
        this.restaurantType = new RestaurantTypeModel();
        this.restaurantInfo = new RestaurantInfoModel();
        this.restaurantMenu = [];
    }
}