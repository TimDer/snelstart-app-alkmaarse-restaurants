import { IRestaurantModel } from "../interfaces/IRestaurantModel";

export class RestaurantModel implements IRestaurantModel {
    public ID: number;
    public Name: string;
    public Address: string;
    public StreatName: string;
    public Number: string;
    public Img: string;
    public Type: string;

    constructor(Data: IRestaurantModel) {
        this.ID = Data.ID;
        this.Name = Data.Name;
        this.Address = Data.Address;
        this.StreatName = Data.StreatName;
        this.Number = Data.Number;
        this.Img = Data.Number;
        this.Type = Data.Type;
    }
}