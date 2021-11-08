import { IRestaurantMenuItemCategoryModel } from "./IRestaurantMenuItemCategoryModel";

export class RestaurantMenuItemCategoryModel implements IRestaurantMenuItemCategoryModel {
    public name: string;
    public displayName: string;

    constructor() {
        this.name = "";
        this.displayName = "";
    }
}