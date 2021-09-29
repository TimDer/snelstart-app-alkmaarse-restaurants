import { IRestaurantModel } from "./IRestaurantModel";

export class RestaurantModel implements IRestaurantModel {
    public Id: number;
    public Name: string;
    public Address: string;
    public StreetName: string;
    public StreetNumber: string;
    public ImageLogo: string;
    public RestaurantType: string;

    constructor(data: IRestaurantModel) {
        this.Id = data.Id;
        this.Name = data.Name;
        this.Address = data.Address;
        this.StreetName = data.StreetName;
        this.StreetNumber = data.StreetNumber;
        this.ImageLogo = data.ImageLogo;
        this.RestaurantType = data.RestaurantType;
    }
}