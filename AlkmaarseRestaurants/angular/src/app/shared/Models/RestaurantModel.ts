import { IRestaurantModel } from "./IRestaurantModel";

export class RestaurantModel implements IRestaurantModel {
    public id: number;
    public name: string;
    public address: string;
    public streetName: string;
    public streetNumber: string;
    public imageLogo: string;
    public restaurantType: string;

    constructor(data: IRestaurantModel) {
        this.id = data.id;
        this.name = data.name;
        this.address = data.address;
        this.streetName = data.streetName;
        this.streetNumber = data.streetNumber;
        this.imageLogo = data.imageLogo;
        this.restaurantType = data.restaurantType;
    }
}