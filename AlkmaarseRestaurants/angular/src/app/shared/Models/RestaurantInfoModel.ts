import { IRestaurantInfoModel } from "./IRestaurantInfoModel";

export class RestaurantInfoModel implements IRestaurantInfoModel {
    public description: string;

    constructor() {
        this.description = "";
    }
}