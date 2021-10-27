import { IRestaurantCategoryModel } from "./IRestaurantCategoryModel";

export class RestaurantCategoryModel implements IRestaurantCategoryModel {
    public id: number;
    public name: string;
    public displayName: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.displayName = "";
    }
}