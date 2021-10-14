import { IRestaurantMenuItemModel } from "./IRestaurantMenuItemModel";

export class RestaurantMenuItemModel implements IRestaurantMenuItemModel {
    public name: string;
    public description: string;
    public price: number;

    constructor() {
        this.name = "";
        this.description = "";
        this.price = 0.00;
    }
}