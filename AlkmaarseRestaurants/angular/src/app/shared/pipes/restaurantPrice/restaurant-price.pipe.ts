import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'restaurantPrice'
})
export class RestaurantPricePipe implements PipeTransform {

  transform(value: string): string {
    const priceArray = value.toString().split(".");

    // check if there is a decimal
    if (priceArray.length === 1) {
      priceArray[1] = "00";
    }

    // check for ending zeros
    let newData = "";
    if (priceArray[1] === "") {
      newData = priceArray[0];
    }
    else if (
      priceArray[1][0] !== undefined,
      priceArray[1][1] !== undefined
    ) {
      newData = priceArray[0] + "," + priceArray[1];
    }
    else if (
      priceArray[1][0] !== undefined,
      priceArray[1][1] === undefined
    ) {
      newData = priceArray[0] + "," + priceArray[1] + "0";
    }

    return `€ ${newData}`;
  }

}