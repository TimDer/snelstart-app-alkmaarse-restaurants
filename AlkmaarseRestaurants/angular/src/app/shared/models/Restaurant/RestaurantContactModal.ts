import { IRestaurantContactModal } from "./IRestaurantContactModal";

export class RestaurantContactModal implements IRestaurantContactModal {
    public name: string;
    public subject: string;
    public message: string;
    public email: string

    constructor() {
        this.name = "";
        this.subject = "";
        this.message = "";
        this.email = "";
    }
}