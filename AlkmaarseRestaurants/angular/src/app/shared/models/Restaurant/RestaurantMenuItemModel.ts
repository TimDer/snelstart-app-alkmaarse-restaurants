import { IRestaurantMenuItemModel } from "./IRestaurantMenuItemModel";
import { RestaurantMenuItemCategoryModel } from "./RestaurantMenuItemCategoryModel";

export class RestaurantMenuItemModel implements IRestaurantMenuItemModel {
    public id: number;
    public name: string;
    public description: string;
    public price : number;
    public menuCategory: RestaurantMenuItemCategoryModel;

    constructor() {
        this.id = 0;
        this.name = "";
        this.description = "";
        this.price = 0.00;
        this.menuCategory = new RestaurantMenuItemCategoryModel();
    }
}