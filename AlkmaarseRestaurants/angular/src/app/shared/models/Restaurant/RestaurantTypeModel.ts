import { IRestaurantTypeModel } from "./iRestaurantTypeModel";

export class RestaurantTypeModel implements IRestaurantTypeModel {
    public id: number;
    public name: string;
    public displayName: string;

    constructor() {
        this.id = 0;
        this.name = "";
        this.displayName = "";
    }
}