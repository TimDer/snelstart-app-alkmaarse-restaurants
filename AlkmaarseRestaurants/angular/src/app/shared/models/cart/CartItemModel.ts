import { ICartItemModel } from "./ICartItemModel";

export class CartItemModel implements ICartItemModel {
    public amount: number;
    public productByName: number;

    constructor() {
        this.amount = 1;
        this.productByName = 0;
    }
}