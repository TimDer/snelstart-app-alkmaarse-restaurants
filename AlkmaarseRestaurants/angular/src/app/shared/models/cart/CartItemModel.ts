import { ICartItemModel } from "./ICartItemModel";

export class CartItemModel implements ICartItemModel {
    public amount: number;
    public productById: number;

    constructor() {
        this.amount = 1;
        this.productById = 0;
    }
}