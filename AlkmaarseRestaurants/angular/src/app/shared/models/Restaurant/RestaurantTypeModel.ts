import { IRestaurantTypeModel } from "./IRestaurantTypeModel";

export class RestaurantTypeModel implements IRestaurantTypeModel {
    public name: string;
    public description: string;
    public cssClass: string;

    constructor() {
        this.name = "";
        this.description = "";
        this.cssClass = "";
    }
}