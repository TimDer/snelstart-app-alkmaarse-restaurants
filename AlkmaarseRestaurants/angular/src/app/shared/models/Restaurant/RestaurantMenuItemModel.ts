import { IRestaurantMenuItemModel } from "./IRestaurantMenuItemModel";

export class RestaurantMenuItemModel implements IRestaurantMenuItemModel {
    public name: string;
    public description: string;

    private _price : string = "";
    public get price() : string {
        return this._price;
    }
    public set price(v : string) {
        const priceArray = v.toString().split(".");

        let newData = "";
        if (priceArray[1] === "") {
            newData = priceArray[0];
        }
        else if (
            priceArray[1][0] !== undefined,
            priceArray[1][1] !== undefined
        ) {
            newData = priceArray[0] + "." + priceArray[1];
        }
        else if (
            priceArray[1][0] !== undefined,
            priceArray[1][1] === undefined
        ) {
            newData = priceArray[0] + "." + priceArray[1] + "0";
        }

        this._price = newData;
    }
    

    constructor() {
        this.name = "";
        this.description = "";
        this.price = "0.00";
    }
}