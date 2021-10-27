import { IRestaurantModel } from "./IRestaurantModel";
import { RestaurantInfoModel } from "./RestaurantInfoModel";
import { RestaurantMenuItemModel } from "./RestaurantMenuItemModel";
import { RestaurantCategoryModel } from "./RestaurantCategoryModel";

export class RestaurantModel implements IRestaurantModel {
    public id: number;
    public name: string;
    public address: string;
    public streetName: string;
    public streetNumber: string;
    public postalCode: string;
    public imageLogo: string;
    public restaurantType: RestaurantCategoryModel;
    public restaurantInfo: RestaurantInfoModel;
    public restaurantMenu: Array<RestaurantMenuItemModel>;

    constructor() {
        this.id = 0;
        this.name = "";
        this.address = "";
        this.streetName = "";
        this.streetNumber = "";
        this.postalCode = "";
        this.imageLogo = "";
        this.restaurantType = new RestaurantCategoryModel();
        this.restaurantInfo = new RestaurantInfoModel();
        this.restaurantMenu = [];
    }
}